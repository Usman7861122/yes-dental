import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

type Child = { label: string; href: string; external?: boolean };
type Item = { label: string; href?: string; children?: Child[]; viewAll?: { label: string; href: string } };
type Props = { nav: Item[]; phone: string; tel: string; contactHref: string };

/** Full-screen mobile menu with an expandable Services list. Use with client:media="(max-width: 1279px)". */
export default function MobileMenu({ nav, phone, tel, contactHref }: Props) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const Icon = ({ close }: { close?: boolean }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      {close ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );

  return (
    <MotionConfig reducedMotion="user">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition active:scale-95 xl:hidden"
      >
        <Icon />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="on-dark fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink px-6 pb-10 pt-5 text-ivory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl">Menu</span>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition active:scale-95"
              >
                <Icon close />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-8 flex-1">
              <ul>
                {nav.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.5 }}
                    className="border-b border-white/10"
                  >
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={sub === item.label}
                          onClick={() => setSub(sub === item.label ? null : item.label)}
                          className="flex min-h-16 w-full items-center justify-between font-display text-4xl text-ivory"
                        >
                          {item.label}
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7dbde0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-300 ${sub === item.label ? "rotate-180" : ""}`}>
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {sub === item.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              {item.children.map((c) => (
                                <li key={c.href}>
                                  <a href={c.href} onClick={close} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex min-h-12 items-center gap-3 pl-1 text-lg text-mist transition-colors hover:text-gold">
                                    <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                                    {c.label}
                                  </a>
                                </li>
                              ))}
                              {item.viewAll ? (
                                <li className="pb-4 pt-1">
                                  <a href={item.viewAll.href} onClick={close} className="flex min-h-12 items-center pl-1 text-lg font-semibold text-gold">
                                    {item.viewAll.label} →
                                  </a>
                                </li>
                              ) : (
                                <li className="pb-3" />
                              )}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a href={item.href!} onClick={close} className="flex min-h-16 items-center font-display text-4xl text-ivory">
                        {item.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <a href={`tel:${tel}`} className="btn btn-outline-light">Call {phone}</a>
              <a href={contactHref} onClick={close} className="btn btn-gold">Request Appointment</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
