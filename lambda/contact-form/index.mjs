// Yes Dental contact form -> email.
// Runs on AWS Lambda (Node.js 22) behind a Function URL and sends the message with Amazon SES.
//
// Environment variables (set on the Lambda):
//   TO_EMAIL     where requests are sent        (alphadeveloper91@gmail.com while testing)
//   FROM_EMAIL   a sender verified in SES        (alphadeveloper91@gmail.com while testing)
//   ALLOWED_ORIGIN  optional, e.g. https://www.yesdentalny.com (extra check on the Origin header)
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({});

const clean = (v, max) =>
  String(v ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
// Header-safe: no line breaks, so nobody can inject extra email headers.
const oneLine = (v, max) => clean(v, max).replace(/[\r\n]+/g, " ");

const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

export function createHandler(send) {
  return async (event) => {
    const method = event?.requestContext?.http?.method ?? event?.httpMethod ?? "POST";
    if (method === "OPTIONS") return { statusCode: 204 }; // CORS preflight is answered by the Function URL settings
    if (method !== "POST") return json(405, { ok: false, error: "method_not_allowed" });

    const allowed = process.env.ALLOWED_ORIGIN;
    const origin = event?.headers?.origin ?? event?.headers?.Origin;
    if (allowed && origin && origin !== allowed) return json(403, { ok: false, error: "forbidden" });

    let data;
    try {
      const raw = event.isBase64Encoded ? Buffer.from(event.body ?? "", "base64").toString("utf8") : event.body ?? "";
      data = JSON.parse(raw || "{}");
    } catch {
      return json(400, { ok: false, error: "bad_json" });
    }

    // Honeypot: real people never fill this field. Pretend it worked.
    if (data.company) return json(200, { ok: true });

    const name = oneLine(data.name, 120);
    const phone = oneLine(data.phone, 40);
    const email = oneLine(data.email, 200);
    const service = oneLine(data.service, 120);
    const hear = oneLine(data.hear, 120);
    const insurance = oneLine(data.insurance, 200);
    const message = clean(data.message, 3000);
    const lang = data.lang === "es" ? "Spanish" : "English";

    const errors = {};
    if (name.length < 2) errors.name = "required";
    if (phone.replace(/\D/g, "").length < 10) errors.phone = "invalid";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.email = "invalid";
    if (Object.keys(errors).length) return json(400, { ok: false, error: "validation", fields: errors });

    const to = process.env.TO_EMAIL;
    const from = process.env.FROM_EMAIL;
    if (!to || !from) {
      console.error("TO_EMAIL or FROM_EMAIL is not set");
      return json(500, { ok: false, error: "not_configured" });
    }

    const lines = [
      "New appointment request from the Yes Dental website",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "-"}`,
      `Service: ${service || "-"}`,
      `Heard about us: ${hear || "-"}`,
      `Insurance: ${insurance || "-"}`,
      `Website language: ${lang}`,
      "",
      "Message:",
      message || "-",
    ];
    const text = lines.join("\n");
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const row = (k, v) => `<tr><td style="padding:4px 16px 4px 0;color:#55607a">${k}</td><td style="padding:4px 0"><b>${esc(v)}</b></td></tr>`;
    const html =
      `<div style="font-family:Arial,sans-serif;color:#0e1a3a"><h2 style="margin:0 0 12px">New appointment request</h2>` +
      `<table>${row("Name", name)}${row("Phone", phone)}${row("Email", email || "-")}${row("Service", service || "-")}` +
      `${row("Heard about us", hear || "-")}${row("Insurance", insurance || "-")}${row("Language", lang)}</table>` +
      `<p style="margin:16px 0 4px;color:#55607a">Message</p><p style="white-space:pre-wrap;margin:0">${esc(message || "-")}</p></div>`;

    try {
      await send(
        new SendEmailCommand({
          FromEmailAddress: `Yes Dental Website <${from}>`,
          Destination: { ToAddresses: [to] },
          ReplyToAddresses: email ? [email] : undefined,
          Content: {
            Simple: {
              Subject: { Data: `New appointment request: ${name}`, Charset: "UTF-8" },
              Body: { Text: { Data: text, Charset: "UTF-8" }, Html: { Data: html, Charset: "UTF-8" } },
            },
          },
        }),
      );
      return json(200, { ok: true });
    } catch (err) {
      console.error("SES send failed", err?.name, err?.message);
      return json(502, { ok: false, error: "send_failed" });
    }
  };
}

export const handler = createHandler((cmd) => ses.send(cmd));
