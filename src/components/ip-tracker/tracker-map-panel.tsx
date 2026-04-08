import { Card } from "@/components/ui/card"
import { Map, MapMarker, MarkerContent } from "@/components/ui/map"

const MONACO_COORDINATES: [number, number] = [7.4235, 43.7372]

export function TrackerMapPanel() {
  return (
    <Card className="h-[540px] overflow-hidden rounded-3xl py-0 shadow-xl ring-1 ring-border/70 md:h-[560px]">
      <Map center={MONACO_COORDINATES} zoom={13.6}>
        <MapMarker longitude={MONACO_COORDINATES[0]} latitude={MONACO_COORDINATES[1]}>
          <MarkerContent>
            <img src="/images/icon-location.svg" alt="" aria-hidden className="size-11 drop-shadow-md" />
          </MarkerContent>
        </MapMarker>
      </Map>
    </Card>
  )
}
