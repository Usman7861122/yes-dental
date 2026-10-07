import { useEffect, useState } from "react";

const KEY = "yd-cookie-consent";

type Choice = { v: 1; analytics: boolean; ts: number };

function read(): Choice | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Choice) : null;
  } catch {
    return null;
  }
}

function save(analytics: boolean) {
  const choice: Choice = { v: 1, analytics, ts: Date.now() };
  try {
    localStorage.setItem(KEY, JSON.stringify(choice));
  } catch {
    /* storage blocked – choice lasts for this page view only */
  }
  // Lets any future analytics script start or stop based on the choice.
  window.dispatchEvent(new CustomEvent("yd:consent", { detail: choice }));
}

/** Cookie consent bar fixed to the bottom of the page. Use with client:load. */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false); // drives the slide-in

  useEffect(() => {
    if (!read()) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener("yd:open-cookies", reopen);
    return () => window.removeEventListener("yd:open-cookies", reopen);
  }, []);

  useEffect(() => {
    if (!open) return setShow(false);
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  const choose = (analytics: boolean) => {
    save(analytics);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className={`fixed inset-x-0 bottom-[calc(69px+env(safe-area-inset-bottom))] z-50 p-3 transition duration-500 ease-out motion-reduce:transition-none md:bottom-0 sm:p-5 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="on-dark mx-auto flex max-w-5xl flex-col gap-5 rounded-2xl border border-white/15 bg-ink-deep p-5 text-ivory shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)] sm:p-6 md:flex-row md:items-center md:gap-8">
        <div className="flex-1">
          <p className="font-display text-2xl leading-tight">We value your privacy</p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            We use essential cookies to make this site work. With your permission we may also use analytics cookies to
            understand how the site is used. You can change your choice at any time. Read our{" "}
            <a href="/privacy-policy" className="font-semibold text-gold underline underline-offset-4 hover:text-gold-light">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 md:shrink-0">
          <button type="button" onClick={() => choose(false)} className="btn btn-outline-light !min-h-12 flex-1 !px-4 md:flex-none md:!px-8">
            Essential only
          </button>
          <button type="button" onClick={() => choose(true)} className="btn btn-gold !min-h-12 flex-1 !px-4 md:flex-none md:!px-8">
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
