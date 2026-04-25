import { SearchBar } from "@/components/search-bar"
import { StatsCard, type StatsCardItem } from "@/components/stats-card"
import { TrackerMapPanel } from "@/components/tracker-map-panel"
import { useIpLookup } from "@/hooks/useIpLookup"

export default function App() {
  const { data, search } = useIpLookup()

  const stats: StatsCardItem[] = [
    { label: "IP Address", value: data?.ip ?? "--" },
    {
      label: "Location",
      value: data
        ? `${data.location.city}, ${data.location.region} ${data.location.postalCode}`.trim()
        : "--",
    },
    {
      label: "Timezone",
      value: data ? `UTC ${data.location.timezone}` : "--",
    },
    { label: "ISP", value: data?.isp ?? "--" },
  ]

  return (
    <div className="min-h-svh bg-background">
      <header className="relative">
        <div className="absolute inset-0 h-72 md:h-70">
          <img
            src="/images/pattern-bg-mobile.png"
            alt=""
            aria-hidden
            className="size-full object-cover md:hidden"
          />
          <img
            src="/images/pattern-bg-desktop.png"
            alt=""
            aria-hidden
            className="hidden size-full object-cover md:block"
          />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-7 px-6 pb-44 pt-7 md:gap-8 md:pb-36 md:pt-8">
          <h1 className="text-center text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
            IP Address Tracker
          </h1>
          <SearchBar search={search} />
        </div>
      </header>

      <main className="relative z-20 mx-auto -mt-32 flex  flex-col gap-6 px-6 pb-6 md:-mt-22 md:gap-8">
        <StatsCard items={stats} />
        <TrackerMapPanel location={data?.location ?? null} />
      </main>
    </div>
  )
}
