import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type StatsCardItem = {
  label: string
  value: string
}

type StatsCardProps = {
  items: StatsCardItem[]
}

export function StatsCard({ items }: StatsCardProps) {
  return (
    <Card className="w-full rounded-2xl py-0 shadow-xl ring-1 ring-border/70">
      <CardContent className="grid px-0 py-3 md:grid-cols-4 md:py-0">
        {items.map((item, index) => (
          <div key={item.label} className="flex flex-col gap-4 px-6 py-4 md:flex-row md:p-0">
            <div className="flex flex-1 flex-col items-center gap-2 text-center md:items-start md:px-8 md:py-6 md:text-left">
              <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                {item.label}
              </p>
              <p className="text-2xl leading-none font-semibold tracking-tight text-card-foreground">
                {item.value}
              </p>
            </div>
            {index < items.length - 1 ? (
              <>
                <Separator className="md:hidden" />
                <Separator orientation="vertical" className="hidden h-auto md:block" />
              </>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
