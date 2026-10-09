import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import { Baby, Cookie, Database, FileText, Lock, Mail, MapPin, Phone, RefreshCw, Scale, Share2, ShieldCheck, Timer, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Magotlho TN Solutions (Pty) Ltd",
  description:
    "How Magotlho TN Solutions (Pty) Ltd collects, uses, stores and protects your personal information in line with POPIA.",
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

function DataTable({
  rows,
}: {
  rows: { field: string; why: string; required: string }[]
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-700/60">
      <div className="hidden grid-cols-[1.2fr_2fr_0.8fr] gap-4 bg-slate-900/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:grid">
        <span>Information</span>
        <span>Why we ask for it</span>
        <span>Required?</span>
      </div>
      <ul className="divide-y divide-slate-700/60">
        {rows.map((row) => (
          <li
            key={row.field}
            className="grid grid-cols-1 gap-1 px-4 py-3 text-sm sm:grid-cols-[1.2fr_2fr_0.8fr] sm:gap-4"
          >
            <span className="font-medium text-white">{row.field}</span>
            <span className="text-slate-300">{row.why}</span>
            <span
              className={
                row.required === "Yes" ? "text-blue-400" : "text-slate-500"
              }
            >
              {row.required}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const SECTIONS: Section[] = [
  {
    id: "introduction",
    icon: FileText,
    title: "Introduction",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          {COMPANY} (&ldquo;TN Solutions&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;
          or &ldquo;our&rdquo;) respects your privacy. This policy explains what
          personal information we collect through our website, why we collect it,
          how we look after it, and the rights you have over it.
        </p>
        <p className={bodyClasses}>
          We handle personal information in line with the Protection of Personal
          Information Act 4 of 2013 (POPIA). By using our website or submitting
          either of our forms, you confirm that you have read and understood this
          policy.
        </p>
      </div>
    ),
  },
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information we collect",
    content: (
      <div className="space-y-6">
        <p className={bodyClasses}>
          We only collect what you choose to give us through the forms on this
          website. We don&apos;t ask for ID numbers, banking details or payment
          card information.
        </p>

        <div className="space-y-3">
          <h4 className={subHeadingClasses}>Contact form</h4>
          <DataTable
            rows={[
              { field: "Full name", why: "So we know who we are replying to.", required: "Yes" },
              { field: "Email address", why: "To respond to your enquiry.", required: "Yes" },
              { field: "Message", why: "To understand what you need help with.", required: "Yes" },
            ]}
          />
        </div>

        <div className="space-y-3">
          <h4 className={subHeadingClasses}>Quote request form</h4>
          <DataTable
            rows={[
              { field: "Full name", why: "To address you and prepare your quote.", required: "Yes" },
              { field: "Company name", why: "To prepare a quote for a business or complex.", required: "No" },
              { field: "Cellphone number", why: "To call or message you about the job and arrange a site visit.", required: "Yes" },
              {
                field: "Site address (unit/complex, street, suburb, city, province, postal code)",
                why: "To confirm the job location, assess the scope and price travel.",
                required: "Yes",
              },
              { field: "Services required", why: "To scope and price the work you want done.", required: "Yes" },
              { field: "Other service description", why: "Only if you select \u201COther\u201D, so we can understand your request.", required: "No" },
            ]}
          />
        </div>

        <div className="space-y-3">
          <h4 className={subHeadingClasses}>Information collected automatically</h4>
          <p className={bodyClasses}>
            Like most websites, our hosting infrastructure may record basic
            technical data such as your IP address, browser type, device type and
            the pages you visit. We use this only to keep the site running,
            secure and working properly.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use-it",
    icon: UserCheck,
    title: "How we use your information",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>We use your personal information to:</p>
        <Bullets
          items={[
            "Reply to your messages and questions.",
            "Prepare and send you a quote, and contact you to confirm scope or arrange a site visit.",
            "Provide the services you request, if you accept a quote.",
            "Keep basic records of enquiries and work done for our business.",
            "Protect the website against abuse, spam and security threats.",
            "Comply with our legal and tax obligations.",
          ]}
        />
        <p className={bodyClasses}>
          We do not sell your personal information, and we do not use it for
          unrelated marketing without your consent.
        </p>
      </div>
    ),
  },
  {
    id: "lawful-basis",
    icon: Scale,
    title: "Why we may process it",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          Under POPIA, we process your information only where one of these
          grounds applies:
        </p>
        <Bullets
          items={[
            <>
              <strong className="text-white">Your request:</strong> you ask us for
              a quote or send us a message, and we need your details to respond.
            </>,
            <>
              <strong className="text-white">Contract:</strong> it is necessary to
              carry out the work you have agreed to.
            </>,
            <>
              <strong className="text-white">Legitimate interests:</strong>{" "}
              running, securing and improving our business, where this does not
              unfairly affect your rights.
            </>,
            <>
              <strong className="text-white">Legal obligation:</strong> we are
              required by law to keep certain records.
            </>,
          ]}
        />
      </div>
    ),
  },
  {
    id: "sharing",
    icon: Share2,
    title: "Who we share it with",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          Your information stays within TN Solutions wherever possible. We may
          share it only with:
        </p>
        <Bullets
          items={[
            "Service providers who help us run the website and deliver your form submissions to us, such as hosting and email providers. They may only use your information to provide that service.",
            "Contractors or technicians we appoint to carry out a job you have approved, limited to what they need (for example, the site address and contact number).",
            "Authorities, courts or regulators, where we are legally required to do so.",
          ]}
        />
        <p className={bodyClasses}>
          Some of our providers may store data on servers outside South Africa.
          Where this happens, we take reasonable steps to make sure your
          information stays protected as POPIA requires.
        </p>
      </div>
    ),
  },
  {
    id: "retention",
    icon: Timer,
    title: "How long we keep it",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          We keep personal information only for as long as we need it for the
          purpose it was collected, or as the law requires.
        </p>
        <Bullets
          items={[
            "Enquiries and quote requests that don't proceed are kept for a reasonable period in case you follow up, then deleted or de-identified.",
            "Records linked to completed work are kept for the period required by tax and business record-keeping laws.",
          ]}
        />
      </div>
    ),
  },
  {
    id: "security",
    icon: Lock,
    title: "How we protect it",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          We take reasonable technical and organisational steps to protect your
          information from loss, misuse and unauthorised access. This includes
          encrypted connections (HTTPS) when you submit a form and restricting
          access to people who need it.
        </p>
        <p className={bodyClasses}>
          No method of transmission over the internet is completely secure. If a
          breach affects your personal information, we will notify you and the
          Information Regulator as POPIA requires.
        </p>
      </div>
    ),
  },
  {
    id: "your-rights",
    icon: ShieldCheck,
    title: "Your rights",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>Under POPIA, you have the right to:</p>
        <Bullets
          items={[
            "Ask whether we hold personal information about you, and request a copy.",
            "Ask us to correct information that is inaccurate or out of date.",
            "Ask us to delete or destroy information we no longer have a reason to keep.",
            "Object to us processing your information, or withdraw consent you have previously given.",
            "Lodge a complaint with the Information Regulator (South Africa) if you believe your information has been mishandled. See inforegulator.org.za.",
          ]}
        />
        <p className={bodyClasses}>
          To exercise any of these rights, email us at{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
          >
            {EMAIL}
          </a>
          . We may need to verify your identity before we act on a request.
        </p>
      </div>
    ),
  },
  {
    id: "third-party",
    icon: Cookie,
    title: "Cookies & third-party links",
    content: (
      <div className="space-y-3">
        <p className={bodyClasses}>
          Our website may use essential cookies or similar technology to work
          properly. Some pages load icons from third-party services, and our
          contact section links to external sites such as Facebook and Google
          Maps.
        </p>
        <p className={bodyClasses}>
          When you follow those links or load third-party content, that provider
          may collect information under its own privacy policy. We are not
          responsible for how they handle your data.
        </p>
      </div>
    ),
  },
  {
    id: "children",
    icon: Baby,
    title: "Children",
    content: (
      <p className={bodyClasses}>
        Our services and website are not aimed at people under 18, and we do not
        knowingly collect their personal information. If you believe a child has
        sent us their details, contact us and we will delete them.
      </p>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to this policy",
    content: (
      <p className={bodyClasses}>
        We may update this policy from time to time. When we do, we will change
        the &ldquo;Last updated&rdquo; date at the top of this page. We encourage
        you to review it occasionally.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-8">
      <div className="pt-3 px-4">
        <h2 className="section_title pt-5">Privacy Policy</h2>
        <span className="section_subtitle mb-0">Your information, handled with care</span>

        <p className="mx-auto mt-4 text-center text-xs text-slate-500">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-8 px-4 grid gap-10 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <h3 className="mb-4 text-center text-xl font-semibold text-white">
              On this page
            </h3>

            <nav aria-label="Privacy policy sections" className="grid grid-cols-1 gap-2">
              {SECTIONS.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2.5 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <span className="font-mono text-[10px] font-semibold tabular-nums text-slate-500 transition-colors group-hover:text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
                    {section.title}
                  </span>
                </a>
              ))}
              <a
                href="#contact-us"
                className="group flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2.5 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
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
              <article
                key={section.id}
                id={section.id}
                className={`${cardClasses} scroll-mt-24`}
              >
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
                  <h3 className="text-xl font-semibold text-white">Questions about your privacy?</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Contact {COMPANY} and we&apos;ll be glad to help.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                    { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
                    {
                      icon: MapPin,
                      label: "Address",
                      value: ADDRESS,
                      href: undefined,
                    },
                  ].map((item) => {
                    const inner = (
                      <>
                        <div className="shrink-0 rounded-full border border-[#1E304E]/60 bg-[#1E304E] p-2">
                          <item.icon className="h-4 w-4 text-white" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-white">{item.label}</p>
                          <p className="wrap-break-word text-xs text-white/70">{item.value}</p>
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

                <p className="text-center text-xs text-slate-500">
                  Prefer to complain to the regulator? Visit{" "}
                  <a
                    href="https://inforegulator.org.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                  >
                    inforegulator.org.za
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}