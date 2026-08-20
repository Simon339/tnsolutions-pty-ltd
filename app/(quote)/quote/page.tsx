"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AlertCircle, Check, CheckCircle2, ChevronDown, ClipboardList, Loader2, MapPin, Send, Wrench } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PROVINCES, quoteSchema, SERVICES } from "@/lib/types"

const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell us what you need",
    description: "Share your details and pick the services you're after.",
  },
  {
    icon: MapPin,
    title: "We look at the site",
    description: "We'll confirm scope and, where needed, arrange a visit.",
  },
  {
    icon: Wrench,
    title: "You get a quote",
    description: "A clear, no-obligation quote, usually within one working day.",
  },
] as const

type QuoteFormValues = z.infer<typeof quoteSchema>

type SubmitStatus = "idle" | "success" | "error"

const DEFAULT_VALUES: QuoteFormValues = {
  name: "",
  companyName: "",
  unit: "",
  street: "",
  suburb: "",
  city: "",
  province: "",
  postalCode: "",
  cellphone: "",
  services: [],
  otherService: "",
}

const fieldClasses =
  "w-full rounded-xl border-slate-700/60 bg-slate-900/60 px-4 py-5 text-sm text-slate-200 placeholder:text-slate-500 transition-all duration-300 focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/20 focus-visible:outline-none hover:border-slate-600/60"

const labelClasses = "mb-2 block text-sm font-medium text-slate-300"

const errorMessageClasses = "flex items-center gap-1.5 text-rose-400"

function ServiceSwitch({
  index,
  label,
  checked,
  onToggle,
}: {
  index: number
  label: string
  checked: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onToggle}
      className={cn(
        "group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
        checked
          ? "border-blue-500/40 bg-blue-500/10"
          : "border-slate-700/60 bg-slate-900/60 hover:border-slate-600/60"
      )}
    >
      <span
        className={cn(
          "font-mono text-[10px] font-semibold tabular-nums",
          checked ? "text-blue-400" : "text-slate-500"
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className={cn(
          "flex-1 text-sm font-medium",
          checked ? "text-white" : "text-slate-300"
        )}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-300",
          checked ? "border-blue-500 bg-blue-600" : "border-slate-600 bg-transparent"
        )}
      >
        {checked && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
      </span>
    </button>
  )
}

export default function Quote() {
  const [status, setStatus] = useState<SubmitStatus>("idle")

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: DEFAULT_VALUES,
    mode: "onTouched",
  })

  const selectedServices = form.watch("services")
  const showOtherField = selectedServices?.includes("other")
  const isSubmitting = form.formState.isSubmitting

  const onSubmit = async (values: QuoteFormValues) => {
    setStatus("idle")
    try {
      const res = await fetch("/api/quote", {
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
    <section id="quote" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="section_title">Request a Quote</h2>
        <span className="section_subtitle mb-0">Get a Free Quote</span>

        <div className="px-4 grid gap-10 lg:grid-cols-[360px_1fr]">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-white text-center">How it works</h3>

            <div className="grid grid-cols-1 gap-4">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative overflow-hidden flex items-start rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <div className="pointer-events-none absolute inset-y-0 -left-full w-full bg-linear-to-r from-transparent via-blue-500/10 to-transparent transition-[left] duration-500 ease-in-out group-hover:left-full" />
                  <div className="relative z-10 mr-4 shrink-0 rounded-full p-2 group-hover:scale-110 bg-[#1E304E] backdrop-blur-xs hover:bg-[#28406a] border border-[#1E304E]/60 text-slate-200 transition-all duration-300">
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
          </div>

          <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-xs hover:border-blue-500/30 hover:bg-slate-800/80 transition-all duration-300 md:p-8">
            <div className="mb-6">
              <h3 className="text-center text-xl font-semibold text-white">Tell us about the job</h3>
              <p className="text-center text-sm text-slate-400">
                Fill out the form below and we&apos;ll get back to you with pricing.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-8">
                <div className="space-y-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Contact Details
                  </h4>
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
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="organization"
                              placeholder="Optional"
                              className={fieldClasses}
                              {...field}
                            />
                          </FormControl>
                          <p className="mt-1 text-xs text-slate-500">
                            Leave blank if this is a private residence.
                          </p>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cellphone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Cellphone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              placeholder="082 123 4567"
                              className={fieldClasses}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            {form.formState.errors.cellphone && (
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            )}
                            {form.formState.errors.cellphone?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Site address */}
                <div className="space-y-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Site Address
                  </h4>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="unit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Unit / Complex</FormLabel>
                          <FormControl>
                            <Input placeholder="Optional" className={fieldClasses} {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="street"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Street Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="12 Jacaranda Ave"
                              className={fieldClasses}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            {form.formState.errors.street && (
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            )}
                            {form.formState.errors.street?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="suburb"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Suburb</FormLabel>
                          <FormControl>
                            <Input placeholder="Northmead" className={fieldClasses} {...field} />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            {form.formState.errors.suburb && (
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            )}
                            {form.formState.errors.suburb?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>City / Town</FormLabel>
                          <FormControl>
                            <Input placeholder="Benoni" className={fieldClasses} {...field} />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            {form.formState.errors.city && (
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            )}
                            {form.formState.errors.city?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="province"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Province</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <select
                                {...field}
                                className={cn(
                                  fieldClasses,
                                  "appearance-none bg-slate-900/60 pr-9",
                                  field.value ? "text-slate-200" : "text-slate-500"
                                )}
                              >
                                <option value="" disabled className="bg-slate-900 text-slate-500">
                                  Select province
                                </option>
                                {PROVINCES.map((province) => (
                                  <option
                                    key={province}
                                    value={province}
                                    className="bg-slate-900 text-slate-200"
                                  >
                                    {province}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown
                                aria-hidden="true"
                                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            {form.formState.errors.province && (
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            )}
                            {form.formState.errors.province?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={labelClasses}>Postal Code</FormLabel>
                          <FormControl>
                            <Input
                              inputMode="numeric"
                              maxLength={4}
                              placeholder="1501"
                              className={fieldClasses}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className={errorMessageClasses}>
                            {form.formState.errors.postalCode && (
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            )}
                            {form.formState.errors.postalCode?.message}
                          </FormMessage>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Services Required
                  </h4>
                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem>
                        <div
                          role="group"
                          aria-label="Services required"
                          className="grid grid-cols-1 gap-2 sm:grid-cols-2"
                        >
                          {SERVICES.map((service, index) => {
                            const checked = field.value?.includes(service.id)
                            return (
                              <ServiceSwitch
                                key={service.id}
                                index={index}
                                label={service.label}
                                checked={!!checked}
                                onToggle={() => {
                                  const next = checked
                                    ? field.value.filter((v) => v !== service.id)
                                    : [...field.value, service.id]
                                  field.onChange(next)
                                }}
                              />
                            )
                          })}
                        </div>
                        <FormMessage className={errorMessageClasses}>
                          {form.formState.errors.services && (
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          )}
                          {form.formState.errors.services?.message}
                        </FormMessage>

                        {showOtherField && (
                          <FormField
                            control={form.control}
                            name="otherService"
                            render={({ field: otherField }) => (
                              <FormItem className="mt-4">
                                <FormLabel className={labelClasses}>
                                  Tell us what you need
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Describe the other service"
                                    className={fieldClasses}
                                    {...otherField}
                                  />
                                </FormControl>
                                <FormMessage className={errorMessageClasses}>
                                  {form.formState.errors.otherService && (
                                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                  )}
                                  {form.formState.errors.otherService?.message}
                                </FormMessage>
                              </FormItem>
                            )}
                          />
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-blue-600 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:translate-y-0 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <p role="status" className="flex items-center gap-2 text-sm text-emerald-400">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Thanks — your quote request is on its way. We&apos;ll be in touch shortly.
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