"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { z } from "zod"
import { AlertCircle, ChevronRight, Loader2, Phone, Send } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your full name."),
  email: z.string().trim().min(1, "Please enter your email address.").email("Please enter a valid email address."),
  message: z.string().trim().min(1, "Please enter a message.").min(10, "Message should be at least 10 characters."),
})

type ContactFormValues = z.infer<typeof contactSchema>

type SubmitStatus = "idle" | "success" | "error"

const DEFAULT_VALUES: ContactFormValues = { name: "", email: "", message: "" }

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [isSubmitting, setIsLoading] = useState(false)
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [consent, setConsent] = useState(false)
  const [consentTouched, setConsentTouched] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: DEFAULT_VALUES,
    mode: "onTouched",
  })

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");

      toast.success("Thanks - your message is on its way. We'll get back to you shortly.");

      // setStatus("success");
      form.reset(DEFAULT_VALUES);
    } catch (error) {
      toast.error("Something went wrong sending that. Please try again, or email us directly at Info@tnsolution.co.za.");
      // setStatus("error");
    }
  };

  const handleFieldChange = () => {
    if (error || success) {
      setError("")
      setSuccess("")
    }
  }

  const showConsentError = consentTouched && !consent

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section_title">Get in Touch</h2>
        <span className="section_subtitle">Contact Us</span>

        <div className="contact_container px-4 grid gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-white text-center">Talk to me</h3>

            <div className="grid grid-cols-1 gap-4">
              <div className="group relative overflow-hidden flex items-center rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                <div className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-blue-500/10 to-transparent transition-[left] duration-500 ease-in-out group-hover:left-full" />
                <div className="relative z-10 mr-4 rounded-full p-2 group-hover:scale-110 bg-[#1E304E] backdrop-blur-xs hover:bg-[#28406a] border border-[#1E304E]/60 text-slate-200 transition-all duration-300">
                  <img
                    src="https://cdn.simpleicons.org/gmail"
                    alt="Protonmail logo"
                    width={18}
                    height={18}
                    className="h-4 w-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-sm font-medium text-white">Email</h3>
                  <span className="text-xs text-white/70">Info@tnsolution.co.za</span>
                </div>
                <a
                  href="mailto:Info@tnsolution.co.za"
                  aria-label="Email Info@tnsolution.co.za"
                  className="relative z-10 rounded-full p-1 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="group relative overflow-hidden flex items-center rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                <div className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-blue-500/10 to-transparent transition-[left] duration-500 ease-in-out group-hover:left-full" />
                <div className="relative z-10 mr-4 rounded-full p-2 group-hover:scale-110 bg-[#1E304E] backdrop-blur-xs hover:bg-[#28406a] border border-[#1E304E]/60 text-slate-200 transition-all duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-sm font-medium text-white">Phone Call</h3>
                  <span className="text-xs text-white/70">(083) 558 5199</span>
                </div>
                <a
                  href="tel:0835585199"
                  aria-label="Call (083) 558 5199"
                  className="relative z-10 rounded-full p-1 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <div className="group relative overflow-hidden flex items-center rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                <div className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-blue-500/10 to-transparent transition-[left] duration-500 ease-in-out group-hover:left-full" />
                <div className="relative z-10 mr-4 rounded-full p-2 group-hover:scale-110 bg-[#1E304E] backdrop-blur-xs hover:bg-[#28406a] border border-[#1E304E]/60 text-slate-200 transition-all duration-300">
                  <img
                    src="https://cdn.simpleicons.org/facebook"
                    alt="Facebook logo"
                    width={18}
                    height={18}
                    className="h-4 w-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-sm font-medium text-white">Facebook</h3>
                  <span className="text-xs text-white/70">TN Solutions Pty Ltd</span>
                </div>
                <a
                  href="https://www.facebook.com/profile.php?id=100086507600571"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TN Solutions Pty Ltd on Facebook (opens in new tab)"
                  className="relative z-10 rounded-full p-1 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="group relative overflow-hidden flex items-center rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                <div className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-blue-500/10 to-transparent transition-[left] duration-500 ease-in-out group-hover:left-full" />
                <div className="relative z-10 mr-4 rounded-full p-2 group-hover:scale-110 bg-[#1E304E] backdrop-blur-xs hover:bg-[#28406a] border border-[#1E304E]/60 text-slate-200 transition-all duration-300">
                  <img
                    src="https://cdn.simpleicons.org/googlemaps"
                    alt="Google Maps logo"
                    width={18}
                    height={18}
                    className="h-4 w-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-sm font-medium text-white">Location</h3>
                  <span className="text-xs text-white/70">47 Irvine Street, Wolmaransstad, 2630</span>
                  <div className="mt-1 flex items-center gap-1 text-xs text-white/70">
                    <span>Mon - Fri: 08:00 - 17:00, Sat: 09:00 - 14:00</span>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/47+Irvine+St,+Wolmaransstad,+2630/@-27.378187,26.978847,17z/data=!3m1!4b1!4m6!3m5!1s0x1e9a7f8c2d7f8c2d:0x8c2d7f8c2d7f8c2d!8m2!3d-27.378187!4d26.9810357!16s%2Fg%2F11b6v9k5qg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View location on Google Maps (opens in new tab)"
                  className="relative z-10 rounded-full p-1 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50"
                >
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 md:p-8">
            <div className="mb-6">
              <h3 className="text-center text-xl font-semibold text-white">Write to us</h3>
              <p className="text-center text-sm text-slate-400">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 block text-sm font-medium text-slate-300">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="name"
                          placeholder="Your full name"
                          className="w-full rounded-xl border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 transition-all duration-300 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20 focus-visible:outline-none hover:border-slate-600/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="flex items-center gap-1.5 text-rose-400">
                        {form.formState.errors.name && (
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        )}
                        {form.formState.errors.name?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 block text-sm font-medium text-slate-300">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          className="w-full rounded-xl border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 transition-all duration-300 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20 focus-visible:outline-none hover:border-slate-600/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="flex items-center gap-1.5 text-rose-400">
                        {form.formState.errors.email && (
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        )}
                        {form.formState.errors.email?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 block text-sm font-medium text-slate-300">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell us a bit about what you need..."
                          className="w-full resize-none rounded-xl border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 transition-all duration-300 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20 focus-visible:outline-none hover:border-slate-600/60"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="flex items-center gap-1.5 text-rose-400">
                        {form.formState.errors.message && (
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        )}
                        {form.formState.errors.message?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
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
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500/80 hover:text-blue-800 underline underline-offset-2"
                        >
                          Terms & Conditions
                        </Link>
                        {" , "}
                        <Link
                          href="/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500/80 hover:text-blue-800 underline underline-offset-2"
                        >
                          Privacy Policy
                        </Link>{" "}
                        and consent to having this information stored so I can be contacted about my message.
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
                      Send Message
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
                {/* 
                {status === "success" && (
                  <p role="status" className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Thanks — your message is on its way. We&apos;ll get back to you shortly.
                  </p>
                )}

                {status === "error" && (
                  <p role="alert" className="flex items-center gap-2 text-sm text-rose-400">
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Something went wrong sending that. Please try again, or email us directly at{" "}
                    Info@tnsolution.co.za.
                  </p>
                )} */}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}