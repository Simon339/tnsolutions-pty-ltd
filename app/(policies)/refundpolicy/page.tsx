import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { AlertTriangle, ArrowRight, Ban, BadgeCheck, Banknote, ClipboardList, FileText, Mail, MapPin, Phone, Scale, Timer } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Magotlho TN Solutions (Pty) Ltd",
  description:
    "When you can get a refund from Magotlho TN Solutions (Pty) Ltd, how to request one, and how long it takes.",
}

const COMPANY = "Magotlho TN Solutions (Pty) Ltd"
const EMAIL = "Info@tnsolution.co.za"
const PHONE_DISPLAY = "(083) 558 5199"
const PHONE_HREF = "tel:0835585199"
const ADDRESS = "47 Irvine Street, Wolmaransstad, 2630"
const LAST_UPDATED = "9 October 2026"
const REFUND_FORM_HREF = "/cancellations"

type Section = {
  id: string
  icon: LucideIcon
  title: string
  content: React.ReactNode
}

const cardClasses =
  "group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 md:p-8"

const bodyClasses = "text-sm leading-relaxed text-slate-300"
const listClasses = "space-y-2 text-sm text-slate-300"

const navLinkClasses =
  "group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2.5 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"

function Bullets({ items, tone = "blue" }: { items: React.ReactNode[]; tone?: "blue" | "rose" }) {
  return (
    <ul className={listClasses}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
              tone === "rose" ? "bg-rose-400" : "bg-blue-500"
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 text-sm text-slate-200">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
      <div>{children}</div>
    </div>
  )
}

const STEPS = [
  { title: "Submit the form", text: "Tell us what happened and give your quote or invoice number." },
  { title: "We review it", text: "We may call you or ask for photos. We aim to reply within 5 working days." },
  { title: "Refund paid", text: "Approved refunds are paid within 14 working days." },
]

const SECTIONS: Section[] = [
  {
    id: "overview",
    icon: FileText,
    title: "Overview",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          We want you to be happy with the work {COMPANY} does. If something
          went wrong, this policy explains when you can get a refund, how to ask
          for one, and what to expect.
        </p>
        <p className={bodyClasses}>
          This policy works together with our Terms &amp; Conditions and does not
          limit any rights you have under the Consumer Protection Act 68 of 2008.
        </p>
      </div>
    ),
  },
  {
    id: "eligible",
    icon: BadgeCheck,
    title: "When you can get a refund",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>You may qualify for a full or partial refund if:</p>
        <Bullets
          items={[
            "You cancelled a booking before we started work or ordered materials, and you paid a deposit.",
            "We could not do the work you paid for, for example because we cancelled or could not get materials.",
            "The work was not done as described in your accepted quote, and we could not fix it within a reasonable time after you told us.",
            "You were charged more than the accepted quote, or were charged twice.",
          ]}
        />
      </div>
    ),
  },
  {
    id: "not-eligible",
    icon: Ban,
    title: "When refunds don't apply",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>We usually can&apos;t refund:</p>
        <Bullets
          tone="rose"
          items={[
            "Work that was completed as agreed in the accepted quote.",
            "Materials or items already bought or made specially for your job. Where we can return them or reuse them, we will deduct only our actual loss.",
            "Call-out or site-visit fees when the visit took place as arranged.",
            "Problems caused by changes, damage or misuse after the work was completed, or by information you gave us that turned out to be wrong.",
            "Requests made more than 30 days after the work was finished, unless the law says otherwise.",
          ]}
        />
      </div>
    ),
  },
  {
    id: "how-to-request",
    icon: ClipboardList,
    title: "How to request a refund",
    content: (
      <div className="space-y-5">
        <p className={bodyClasses}>
          Please use our refund request form so we have everything we need. You
          can also email us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
          >
            {EMAIL}
          </a>
          .
        </p>

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4"
            >
              <p className="font-mono text-[10px] font-semibold tabular-nums text-blue-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-medium text-white">{step.title}</p>
              <p className="mt-1 text-xs text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>

        <Link
          href={REFUND_FORM_HREF}
          className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Request a refund
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    ),
  },
  {
    id: "timeframes",
    icon: Timer,
    title: "Timeframes",
    content: (
      <Bullets
        items={[
          "Please ask for a refund within 30 days of the work being completed or the booking being cancelled.",
          "We aim to reply to your request within 2 working days.",
          "Once approved, we pay the refund within 10 working days.",
        ]}
      />
    ),
  },
  {
    id: "payment-method",
    icon: Banknote,
    title: "How refunds are paid",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          Refunds go back to the person who paid, by the same method where
          possible (usually EFT). We will confirm banking details with you by
          email or phone once your request is approved.
        </p>
        <Callout>
          Please don&apos;t put bank account details in the request form. We never
          ask for them through the website.
        </Callout>
      </div>
    ),
  },
  {
    id: "your-rights",
    icon: Scale,
    title: "Your legal rights",
    content: (
      <p className={bodyClasses}>
        If you are not happy with how we handled your request, please tell us so we
        can try to resolve it. You may also approach the National Consumer
        Commission or another competent forum. Nothing in this policy removes
        rights that the law gives you.
      </p>
    ),
  },
]

export default function RefundPolicy() {
  return (
    <section id="refund-policy" className="py-8">
      <div className="pt-3 px-4">
        <h2 className="section_title pt-5">Refund Policy</h2>
        <span className="section_subtitle mb-0">Fair, clear and quick</span>

        <p className="mx-auto mt-4 text-center text-xs text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-8 px-4 grid gap-10 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <h3 className="mb-4 text-center text-xl font-semibold text-white">On this page</h3>

            <nav aria-label="Refund policy sections" className="grid grid-cols-1 gap-2">
              {SECTIONS.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} className={navLinkClasses}>
                  <span className="font-mono text-[10px] font-semibold tabular-nums text-slate-500 transition-colors group-hover:text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                    {section.title}
                  </span>
                </a>
              ))}
              <a href="#contact-us" className={navLinkClasses}>
                <span className="font-mono text-[10px] font-semibold tabular-nums text-slate-500 transition-colors group-hover:text-blue-400">
                  {String(SECTIONS.length + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                  Contact us
                </span>
              </a>
            </nav>
          </aside>
          <div className="space-y-6">
            {SECTIONS.map((section, index) => (
              <article key={section.id} id={section.id} className={`${cardClasses} scroll-mt-24`}>
                <div className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-blue-500/10 to-transparent transition-[left] duration-500 ease-in-out group-hover:left-full" />
                <div className="relative z-10">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="shrink-0 rounded-full border border-[#1E304E]/60 bg-[#1E304E] p-2 text-slate-200 backdrop-blur-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-[#28406a]">
                      <section.icon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      <span className="mr-2 font-mono text-xs font-semibold text-blue-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </h3>
                  </div>
                  {section.content}
                </div>
              </article>
            ))}
            <article id="contact-us" className={`${cardClasses} scroll-mt-24`}>
              <div className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-blue-500/10 to-transparent transition-[left] duration-500 ease-in-out group-hover:left-full" />
              <div className="relative z-10 space-y-5">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white">Questions about refunds?</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Contact {COMPANY} and we&apos;ll be glad to help.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                    { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
                    { icon: MapPin, label: "Address", value: ADDRESS, href: undefined },
                  ].map((item) => {
                    const inner = (
                      <>
                        <div className="shrink-0 rounded-full border border-[#1E304E]/60 bg-[#1E304E] p-2">
                          <item.icon className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white">{item.label}</p>
                          <p className="wrap-break-words text-xs text-white/70">{item.value}</p>
                        </div>
                      </>
                    )
                    const base =
                      "flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 transition-all duration-300"
                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className={`${base} hover:border-blue-500/40 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40`}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={item.label} className={base}>
                        {inner}
                      </div>
                    )
                  })}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}