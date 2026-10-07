import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

type Props = { services: string[] };
type Values = { name: string; phone: string; email: string; service: string; hear: string; insurance: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", phone: "", email: "", service: "", hear: "", insurance: "", message: "" };

const field =
  "mt-2 block w-full min-h-12 rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-mute/70 transition focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold-deep/30 aria-[invalid=true]:border-red-700";
const label = "block text-sm font-semibold tracking-wide text-ink";
const errCls = "mt-1.5 text-sm text-red-700";

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (v.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a valid phone number (at least 10 digits).";
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Please enter a valid email, like name@example.com.";
  return e;
}

/** Contact form with inline validation, loading and success states. Use with client:visible. */
export default function ContactForm({ services }: Props) {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // /contact-us?service=Crowns pre-selects the service
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("service");
    if (wanted && services.includes(wanted)) setValues((v) => ({ ...v, service: wanted }));
  }, [services]);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("company")) return; // honeypot
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      (e.currentTarget.querySelector("[aria-invalid=true]") as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined;
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        await new Promise((r) => setTimeout(r, 900)); // demo mode until an endpoint is set
      }
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="rounded-3xl bg-ivory p-6 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-10">
        <AnimatePresence mode="wait">
          {status === "sent" ? (
            <motion.div
              key="done"
              role="status"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex min-h-[28rem] flex-col items-center justify-center text-center"
            >
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#1d5d8c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <motion.path d="M7.5 12.5l3 3 6-6.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.6 }} />
              </svg>
              <h3 className="mt-6 text-4xl">Thank you</h3>
              <p className="mt-3 max-w-sm text-mute">Your request has been received. Our team will contact you shortly to confirm your visit.</p>
              <button type="button" className="btn btn-outline mt-8" onClick={() => setStatus("idle")}>
                Send another request
              </button>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <h3 className="text-3xl sm:text-4xl">Request an appointment</h3>
              <p className="mt-2 text-mute">Fields marked * are required.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="cf-name" className={label}>Full name *</label>
                  <input id="cf-name" name="name" autoComplete="name" value={values.name} onChange={set("name")} className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} />
                  {errors.name && <p id="cf-name-err" className={errCls}>{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="cf-phone" className={label}>Phone *</label>
                  <input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "cf-phone-err" : undefined} />
                  {errors.phone && <p id="cf-phone-err" className={errCls}>{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="cf-email" className={label}>Email</label>
                  <input id="cf-email" name="email" type="email" autoComplete="email" value={values.email} onChange={set("email")} className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} />
                  {errors.email && <p id="cf-email-err" className={errCls}>{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cf-service" className={label}>Service</label>
                  <select id="cf-service" name="service" value={values.service} onChange={set("service")} className={field}>
                    <option value="">Not sure yet</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-hear" className={label}>How did you hear about us?</label>
                  <select id="cf-hear" name="hear" value={values.hear} onChange={set("hear")} className={field}>
                    <option value="">Select one</option>
                    {["Google / Internet", "Insurance", "Family / Friend", "Doctor Referral", "Social Media"].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="cf-ins" className={label}>Insurance details</label>
                  <input id="cf-ins" name="insurance" value={values.insurance} onChange={set("insurance")} className={field} placeholder="Carrier or plan name" />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cf-message" className={label}>How can we help?</label>
                  <textarea id="cf-message" name="message" rows={4} value={values.message} onChange={set("message")} className={`${field} resize-y`} />
                </div>

                {/* honeypot – hidden from people */}
                <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              </div>

              {status === "error" && (
                <p role="alert" className="mt-5 text-sm text-red-700">Sorry, something went wrong. Please try again or call us directly.</p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn btn-ink mt-8 w-full sm:w-auto">
                {status === "sending" ? "Sending…" : "Request appointment"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
