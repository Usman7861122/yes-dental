// Run: node lambda/contact-form/test.mjs   (no AWS needed, SES is mocked)
import assert from "node:assert/strict";
process.env.TO_EMAIL = "to@example.com";
process.env.FROM_EMAIL = "from@example.com";
const { createHandler } = await import("./index.mjs");

const sent = [];
const h = createHandler(async (cmd) => sent.push(cmd.input));
const call = (body, extra = {}) => h({ requestContext: { http: { method: "POST" } }, body: JSON.stringify(body), ...extra });

let r = await call({ name: "Ana Perez", phone: "(212) 555-0100", email: "ana@example.com", service: "Crowns", message: "Hi <b>there</b>", lang: "es" });
assert.equal(r.statusCode, 200); assert.equal(sent.length, 1);
assert.deepEqual(sent[0].Destination.ToAddresses, ["to@example.com"]);
assert.deepEqual(sent[0].ReplyToAddresses, ["ana@example.com"]);
assert.match(sent[0].Content.Simple.Body.Text.Data, /Spanish/);
assert.ok(!sent[0].Content.Simple.Body.Html.Data.includes("<b>there"), "html is escaped");

r = await call({ name: "A", phone: "123" }); assert.equal(r.statusCode, 400); assert.equal(sent.length, 1);
r = await call({ name: "Bot Bot", phone: "2125550100", company: "spam" }); assert.equal(r.statusCode, 200); assert.equal(sent.length, 1, "honeypot sends nothing");
r = await call({ name: "Line\r\nBcc: x@y.z", phone: "2125550100" }); assert.equal(r.statusCode, 200);
assert.ok(!/[\r\n]/.test(sent[1].Content.Simple.Subject.Data), "no header injection");
r = await h({ requestContext: { http: { method: "GET" } } }); assert.equal(r.statusCode, 405);
r = await h({ requestContext: { http: { method: "POST" } }, body: "{oops" }); assert.equal(r.statusCode, 400);
const bad = createHandler(async () => { throw new Error("denied"); });
r = await bad({ requestContext: { http: { method: "POST" } }, body: JSON.stringify({ name: "Ana Perez", phone: "2125550100" }) });
assert.equal(r.statusCode, 502);
console.log("all tests passed");
