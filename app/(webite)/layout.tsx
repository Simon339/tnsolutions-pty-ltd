import Providers from "@/components/websites/provider"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>{children}</Providers>
  )
}