import z from "zod";

export const quoteSchema = z
  .object({
    name: z.string().trim().min(1, "Please enter your full name."),
    companyName: z.string().trim().optional(),
    unit: z.string().trim().optional(),
    street: z.string().trim().min(1, "Please enter your street address."),
    suburb: z.string().trim().min(1, "Please enter your suburb."),
    city: z.string().trim().min(1, "Please enter your city or town."),
    province: z.string().min(1, "Please select a province."),
    postalCode: z
      .string()
      .trim()
      .regex(/^\d{4}$/, "Enter a valid 4-digit postal code."),
    cellphone: z
      .string()
      .trim()
      .regex(/^(\+27|0)[6-8][0-9]{8}$/, "Enter a valid SA cellphone number."),
    services: z.array(z.string()).min(1, "Select at least one service."),
    otherService: z.string().trim().optional(),
  })
  .refine(
    (data) =>
      !data.services.includes("other") ||
      (data.otherService && data.otherService.trim().length > 0),
    {
      message: "Let us know what other service you need.",
      path: ["otherService"],
    },
  );


export const SERVICES = [
  { id: "electric-fence", label: "Electric Fence" },
  { id: "solar", label: "Solar" },
  { id: "house-wiring", label: "House Wiring" },
  { id: "alarm-cctv", label: "Alarm & CCTV" },
  { id: "gate-motor", label: "Gate Motor" },
  { id: "general-electrical", label: "General Electrical" },
  { id: "lighting", label: "Lighting" },
  { id: "coc", label: "Certificate of Compliance (COC)" },
  { id: "stationery", label: "Stationery" },
  { id: "office-equipment", label: "Office Equipment" },
  { id: "plumbing", label: "Plumbing" },
  { id: "ac-installation", label: "AC Installation" },
  { id: "ac-repairs", label: "AC Repairs" },
  { id: "ac-maintenance", label: "AC Maintenance" },
  { id: "commercial-hvac", label: "Commercial HVAC" },
  { id: "other", label: "Other" },
] as const

export const PROVINCES = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "North West",
  "Northern Cape",
  "Western Cape",
] as const

