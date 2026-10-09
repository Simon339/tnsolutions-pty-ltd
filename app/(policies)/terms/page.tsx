import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import { AlertTriangle, BadgeCheck, ClipboardList, FileText, Gavel, Globe, Mail, MapPin, Phone, RefreshCw, Scale, ShieldAlert, Wallet, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Magotlho TN Solutions (Pty) Ltd",
  description:
    "The terms that apply when you use the Magotlho TN Solutions (Pty) Ltd website, request a quote or hire us for work.",
}

const COMPANY = "Magotlho TN Solutions (Pty) Ltd"
const EMAIL = "Info@tnsolution.co.za"
const PHONE_DISPLAY = "(083) 558 5199"
const PHONE_HREF = "tel:0835585199"
const ADDRESS = "47 Irvine Street, Wolmaransstad, 2630"
const LAST_UPDATED = "9 October 2026"

type Section = {
  id: string
  icon: LucideIcon
  title: string
  content: React.ReactNode
}

const cardClasses =
  "group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 md:p-8"

const subHeadingClasses = "text-sm font-semibold uppercase tracking-wide text-blue-400"
const bodyClasses = "text-sm leading-relaxed text-slate-300"
const listClasses = "space-y-2 text-sm text-slate-300"

const navLinkClasses =
  "group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2.5 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className={listClasses}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
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

const SECTIONS: Section[] = [
  {
    id: "introduction",
    icon: FileText,
    title: "Introduction & acceptance",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          These terms apply when you visit the {COMPANY} (&ldquo;TN Solutions&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) website, send us a
          message, request a quote, or appoint us to do work.
        </p>
        <p className={bodyClasses}>
          By using the website or submitting a form, you agree to these terms. If you
          do not agree, please do not use the website. Please also read our Privacy
          Policy, which explains how we handle your personal information.
        </p>
      </div>
    ),
  },
  {
    id: "our-services",
    icon: Wrench,
    title: "Our services",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          The services we offer are listed on our website and in the quote request
          form. The website gives general information only. A service is only
          confirmed once you have accepted a written quote from us.
        </p>
        <p className={bodyClasses}>
          We may change, add or stop offering services at any time without prior
          notice. Some services may not be available in all areas.
        </p>
      </div>
    ),
  },
  {
    id: "quotes",
    icon: ClipboardList,
    title: "Quote requests & quotes",
    content: (
      <div className="space-y-4">
        <Bullets
          items={[
            "Sending a quote request is free and creates no obligation on you or on us.",
            "We aim to respond within one working day, but this is a target and not a guarantee.",
            "We may need to visit the site to confirm the scope before we can give an accurate price.",
            "A quote is only valid for the period stated on it. If none is stated, it is valid for 14 days from the date it is issued.",
            "Prices may change if the scope of work, site conditions or material costs differ from what the quote was based on.",
          ]}
        />
        <Callout>
          A quote becomes a binding agreement only once you accept it in writing
          (email or message is fine) and we confirm the booking.
        </Callout>
      </div>
    ),
  },
  {
    id: "your-responsibilities",
    icon: BadgeCheck,
    title: "Your responsibilities",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>When you use our website or hire us, you agree to:</p>
        <Bullets
          items={[
            "Give us accurate and complete information, including your contact details and site address.",
            "Make sure you own the property, or have the owner's permission for us to work there.",
            "Give us safe and reasonable access to the site at the agreed time, and tell us about hazards we should know of.",
            "Not misuse the website, send spam or false requests, or attempt to interfere with its security or operation.",
          ]}
        />
      </div>
    ),
  },
  {
    id: "payment",
    icon: Wallet,
    title: "Payment",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          Payment terms, including any deposit, are set out in your accepted quote or
          invoice. Unless agreed otherwise:
        </p>
        <Bullets
          items={[
            "Invoices must be paid by the due date shown on them.",
            "Work or materials may be held back if a required deposit or an earlier invoice is unpaid.",
            "Overdue accounts may attract interest and reasonable recovery costs, as allowed by law.",
          ]}
        />
      </div>
    ),
  },
  {
    id: "cancellations",
    icon: RefreshCw,
    title: "Cancellations & rescheduling",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          Please tell us as early as possible if you need to cancel or reschedule. We
          may charge reasonable costs for materials already ordered, work already
          done, or a wasted visit when notice is very short.
        </p>
        <p className={bodyClasses}>
          We may also need to reschedule because of weather, safety concerns, supplier
          delays or other things outside our control. We will tell you as soon as we
          can and agree a new date with you.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    icon: ShieldAlert,
    title: "Liability",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          We carry out our work with reasonable skill and care. To the extent the law
          allows:
        </p>
        <Bullets
          items={[
            "We are not liable for indirect or consequential loss, such as loss of income or business.",
            "We are not liable for delays or failures caused by events outside our reasonable control.",
            "Our liability for any claim is limited to the amount you paid us for the work in question.",
            "The website is provided as is. We do not promise it will always be available or error-free.",
          ]}
        />
        <p className={bodyClasses}>
          Nothing in these terms removes any rights you have under the Consumer
          Protection Act 68 of 2008 or other laws that cannot be excluded.
        </p>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    icon: Scale,
    title: "Intellectual property",
    content: (
      <p className={bodyClasses}>
        The website&apos;s content, design, logos and text belong to {COMPANY} or are
        used with permission. You may view and print pages for your own personal use,
        but you may not copy, sell or republish our content without our written
        permission.
      </p>
    ),
  },
  {
    id: "third-party",
    icon: Globe,
    title: "Third-party links",
    content: (
      <p className={bodyClasses}>
        Our website links to outside services such as Facebook and Google Maps. We do
        not control these sites and are not responsible for their content or
        practices. Using them is at your own risk and subject to their own terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    icon: Gavel,
    title: "Governing law & disputes",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          These terms are governed by the laws of the Republic of South Africa. If a
          dispute arises, please contact us first so we can try to resolve it
          informally. If that does not work, either of us may approach a competent
          South African court or forum, such as the National Consumer Commission where
          it applies.
        </p>
      </div>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to these terms",
    content: (
      <p className={bodyClasses}>
        We may update these terms from time to time. The &ldquo;Last updated&rdquo;
        date at the top of this page shows when they last changed. Using the website
        after an update means you accept the new terms. Work already agreed in an
        accepted quote stays under the terms that applied when you accepted it.
      </p>
    ),
  },
]

export default function TermsAndConditions() {
  return (
    <section id="terms" className="py-8">
      <div className="pt-3 px-4">
        <h2 className="section_title pt-5">Terms &amp; Conditions</h2>
        <span className="section_subtitle mb-0">Clear terms, no surprises</span>

        <p className="mx-auto mt-4 text-center text-xs text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-8 px-4 grid gap-10 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <h3 className="mb-4 text-center text-xl font-semibold text-white">On this page</h3>

            <nav aria-label="Terms and conditions sections" className="grid grid-cols-1 gap-2">
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
                  <h3 className="text-xl font-semibold text-white">Questions about these terms?</h3>
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