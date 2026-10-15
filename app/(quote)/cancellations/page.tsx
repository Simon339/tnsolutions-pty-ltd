"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AlertCircle, CheckCircle2, ClipboardList, FileSearch, Loader2, Send, Wallet } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const reasons = [
  { label: "Cancelled before work started", value: "Cancelled_before_work_started" },
  { label: "Work not completed",  value:"work_not_completed" },
  { label: "Work not as described in the quote", value: "work_not_as_described_in_the_quote" },
  { label: "Charged incorrectly or twice", value: "Charged_incorrectly_or_twice" },
  { label: "Other", value: "other" },
] as const

const refundSchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name."),
  email: z.string().trim().min(1, "Please enter your email address.").email("Please enter a valid email address."),
  phoneNumber: z.string().trim().min(1, "Please enter your cellphone number.").regex(/^(\+27|0)[0-9\s-]{8,13}$/, "Please enter a valid South African number."),
  reference: z.string().trim().min(1, "Please enter your quote or invoice number."),
  amount: z.string().trim().optional(),
  reason: z.string().min(1, "Please select a reason."),
  details: z.string().trim().min(1, "Please tell us what happened.").min(20, "Please give us a little more detail (at least 20 characters)."),
})

type RefundFormValues = z.infer<typeof refundSchema>

type SubmitStatus = "idle" | "success" | "error"

const DEFAULT_VALUES: RefundFormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  reference: "",
  amount: "",
  reason: "",
  details: "",
}

const STEPS = [
  {
    icon: ClipboardList,
    title: "Send us the details",
    description: "Fill in the form with your quote or invoice number and what went wrong.",
  },
  {
    icon: FileSearch,
    title: "We review your request",
    description: "We may call you or ask for photos. We aim to reply within 2 working days.",
  },
  {
    icon: Wallet,
    title: "Refund is paid",
    description: "Approved refunds are paid within 10 working days.",
  },
] as const

const fieldClasses =
  "w-full rounded-xl border-slate-700/60 bg-slate-900/60 px-4 py-5 text-sm text-slate-200 placeholder:text-slate-500 transition-all duration-300 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20 focus-visible:outline-none hover:border-slate-600/60"

const labelClasses = "mb-2 block text-sm font-medium text-slate-300"

const errorMessageClasses = "flex items-center gap-1.5 text-rose-400"

const sectionHeadingClasses = "text-sm font-semibold uppercase tracking-wide text-blue-400"

function ErrorIcon({ show }: { show: boolean }) {
  return show ? <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> : null
}

export default function RefundRequest() {
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsLoading] = useState(false)
  const [consentTouched, setConsentTouched] = useState(false)
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const form = useForm<RefundFormValues>({
    resolver: zodResolver(refundSchema),
    defaultValues: DEFAULT_VALUES,
    mode: "onChange",
  })
  const errors = form.formState.errors
  const handleFieldChange = () => {
    if (error || success) {
      setError("")
      setSuccess("")
    }
  }

  const showConsentError = consentTouched && !consent

  const onSubmit = async (values: RefundFormValues) => {
    setStatus("idle")
    if (isSubmitting) return

    if (!consent) {
      setConsentTouched(true)
      setError("Please confirm you agree to the privacy policy before sending.")
      return
    }

    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const consentData = {
        ...values,
        _consentGiven: true,
        _consentTimestamp: new Date().toISOString(),
        _userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
      }
      const res = await fetch("http://localhost:3001/api/requests/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error("Request failed")

      setStatus("success")
      form.reset(DEFAULT_VALUES)
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="refund-request" className="py-8">
      <div className="pt-3 px-4">
        <h2 className="section_title pt-5">Request a Refund</h2>
        <span className="section_subtitle mb-0">Tell us what went wrong</span>

        <div className="px-4 grid gap-10 lg:grid-cols-[360px_1fr]">
          <div className="space-y-6">
            <h3 className="mb-4 text-center text-xl font-semibold text-white">How it works</h3>

            <div className="grid grid-cols-1 gap-4">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative flex items-start overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-xs transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-slate-800/80"
                >
                  <div className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-blue-500/10 to-transparent transition-[left] duration-500 ease-in-out group-hover:left-full" />
                  <div className="relative z-10 mr-4 shrink-0 rounded-full border border-[#1E304E]/60 bg-[#1E304E] p-2 text-slate-200 backdrop-blur-xs transition-all duration-300 hover:bg-[#28406a] group-hover:scale-110">
                    <step.icon className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-sm font-medium text-white">
                      {String(index + 1).padStart(2, "0")}. {step.title}
                    </h4>
                    <p className="mt-1 text-xs text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-slate-500">
              Not sure if you qualify? Read our{" "}
              <Link
                href="/refundpolicy"
                className="text-blue-400 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
              >
                refund policy
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-xs transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-800/80 md:p-8">
            <div className="mb-6">
              <h3 className="text-center text-xl font-semibold text-white">Refund request details</h3>
              <p className="text-center text-sm text-slate-400">
                Fill out the form below and we&apos;ll review it and get back to you.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-8">
                <div className="space-y-5">
                  <h4 className={sectionHeadingClasses}>Contact Details</h4>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel className={labelClasses}>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="name"
                              placeholder="Thabo Nkosi"
                              className={fieldClasses}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            <ErrorIcon show={!!errors.name} />
                            {errors.name?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              autoComplete="email"
                              placeholder="you@example.com"
                              className={fieldClasses}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            <ErrorIcon show={!!errors.email} />
                            {errors.email?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Cellphone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              placeholder="08x xxx xxxx"
                              className={fieldClasses}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            <ErrorIcon show={!!errors.phoneNumber} />
                            {errors.phoneNumber?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className={sectionHeadingClasses}>About the Job</h4>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="reference"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Quote / Invoice Number</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. INV-1042" className={fieldClasses} {...field} />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            <ErrorIcon show={!!errors.reference} />
                            {errors.reference?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Amount Paid (R)</FormLabel>
                          <FormControl>
                            <Input
                              inputMode="decimal"
                              placeholder="Optional"
                              className={fieldClasses}
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Reason for Refund</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Select {...field} items={reasons} onValueChange={field.onChange}>
                                <SelectTrigger className={cn(fieldClasses, "appearance-none bg-slate-900/60 pr-9", field.value ? "text-slate-200" : "text-slate-500")}>
                                  <SelectValue placeholder="Select a reason" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl text-slate-300 border-slate-700/60 bg-slate-900/60 ">
                                  <SelectGroup className="rounded-xl border-slate-700/60 ">
                                    {reasons.map((reason) => (
                                      <SelectItem key={reason.value} value={reason.value} className="bg-slate-900 hover:border-slate-600/60 hover:bg-slate-600/60">
                                        {reason.label}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            <ErrorIcon show={!!errors.reason} />
                            {errors.reason?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel className={labelClasses}>What happened?</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Tell us what went wrong and what outcome you'd like."
                              className="w-full resize-none rounded-xl border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 transition-all duration-300 hover:border-slate-600/60 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20 focus-visible:outline-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            <ErrorIcon show={!!errors.details} />
                            {errors.details?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Please don&apos;t include bank account details here. We&apos;ll confirm them with
                    you directly if your refund is approved.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="contact-consent"
                      checked={consent}
                      disabled={isSubmitting}
                      onCheckedChange={(checked) => {
                        setConsent(checked === true)
                        setConsentTouched(true)
                        handleFieldChange()
                      }}
                      className="mt-0.5 border-slate-700/60 rounded-3xl p-3 data-[state=checked]:bg-blue-500/40 data-[state=checked]:border-blue-800 data-[state=checked]:text-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500/40"
                      aria-describedby="contact-consent-error"
                    />

                    <label htmlFor="contact-consent" className="text-xs text-white/50 leading-relaxed cursor-pointer select-none">
                      <span className="block">
                        I have read the {" "}
                        <Link
                          href="/refundpolicy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500/80 hover:text-blue-800 underline underline-offset-2"
                        >
                          Refund Policy
                        </Link>
                        {" "}
                        and confirm the information above is correct.
                      </span>
                    </label>
                  </div>

                  {showConsentError && (
                    <p
                      id="contact-consent-error"
                      className="text-xs mt-2 text-red-400/90 pl-7"
                    >
                      Please agree to the privacy policy to continue.
                    </p>
                  )}
                </div>

                <Button
                  disabled={isSubmitting || !form.formState.isValid || !consent}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-blue-600 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:translate-y-0 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Refund Request
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <p role="status" className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Thanks — your refund request has been received. We&apos;ll reply within 2 working days.
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="flex items-center gap-2 text-sm text-rose-400">
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Something went wrong sending that. Please try again, or email us directly at{" "}
                    Info@tnsolution.co.za.
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}