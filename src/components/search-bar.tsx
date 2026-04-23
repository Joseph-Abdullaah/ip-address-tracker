import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useIpLookup } from "@/hooks/useIpLookup"

export function SearchBar( { search }: { search: (value: string) => void }) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    search(inputValue)
  }

  return (
    <form
      className="mx-auto flex w-full max-w-xl items-stretch"
      onSubmit={handleSubmit}
      aria-label="IP address search"
    >
      <Input
        type="text"
        placeholder="Search for any IP address or domain"
        className="h-14 rounded-l-2xl rounded-r-none border-0 bg-card px-5 text-base shadow-sm ring-1 ring-border placeholder:text-muted-foreground/80 focus-visible:ring-2"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button
        type="submit"
        className="h-14 rounded-l-none rounded-r-2xl px-6 shadow-sm md:px-7"
        aria-label="Submit IP search"
      >
        <img
          src="/images/icon-arrow.svg"
          alt=""
          aria-hidden
          className="size-3.5"
        />
      </Button>
    </form>
  )
}
