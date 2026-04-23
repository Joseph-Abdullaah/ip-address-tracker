import { Card } from "@/components/ui/card"
import { Map, MapMarker, MarkerContent } from "@/components/ui/map"
import type { IpifyLocation } from "@/lib/ipifyTypes"

const MONACO_COORDINATES: [number, number] = [7.4235, 43.7372]
const MAP_ZOOM = 13.6

type TrackerMapPanelProps = {
  location: IpifyLocation | null
}

export function TrackerMapPanel({ location }: TrackerMapPanelProps) {
  const coordinates: [number, number] = location
    ? [location.lng, location.lat]
    : MONACO_COORDINATES

  return (
    <Card className="h-135 overflow-hidden rounded-3xl py-0 shadow-xl ring-1 ring-border/70 md:h-140">
      <Map
        center={coordinates}
        zoom={MAP_ZOOM}
        viewport={{ center: coordinates, zoom: MAP_ZOOM }}
        onViewportChange={() => {}}
      >
        <MapMarker longitude={coordinates[0]} latitude={coordinates[1]}>
          <MarkerContent>
            <img src="/images/icon-location.svg" alt="" aria-hidden className="size-11 drop-shadow-md" />
          </MarkerContent>
        </MapMarker>
      </Map>
    </Card>
  )
}
