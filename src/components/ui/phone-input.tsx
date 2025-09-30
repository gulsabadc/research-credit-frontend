"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface Country {
  code: string
  name: string
  dialCode: string
  flag: string
}

const countries: Country[] = [
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪" },
]

interface PhoneInputProps extends Omit<React.ComponentProps<"input">, "onChange"> {
  value?: string
  onChange?: (value: string) => void
  defaultCountry?: string
}

export function PhoneInput({ className, value = "", onChange, defaultCountry = "US", ...props }: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = React.useState<Country>(
    countries.find((c) => c.code === defaultCountry) || countries[0],
  )
  const [phoneNumber, setPhoneNumber] = React.useState("")

  React.useEffect(() => {
    // Parse the value if it includes a dial code
    if (value) {
      const matchedCountry = countries.find((c) => value.startsWith(c.dialCode))
      if (matchedCountry) {
        setSelectedCountry(matchedCountry)
        setPhoneNumber(value.slice(matchedCountry.dialCode.length).trim())
      } else {
        setPhoneNumber(value)
      }
    }
  }, [value])

  const handleCountryChange = (countryCode: string) => {
    const country = countries.find((c) => c.code === countryCode)
    if (country) {
      setSelectedCountry(country)
      const fullNumber = phoneNumber ? `${country.dialCode} ${phoneNumber}` : ""
      onChange?.(fullNumber)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value
    setPhoneNumber(newPhone)
    const fullNumber = newPhone ? `${selectedCountry.dialCode} ${newPhone}` : ""
    onChange?.(fullNumber)
  }

  return (
    <div className="flex gap-2">
      <Select value={selectedCountry.code} onValueChange={handleCountryChange}>
        <SelectTrigger className={cn("w-[100px] border-[#0002841F]/12")}>
          <SelectValue>
            <div className="flex items-center gap-2">
              <span className="text-lg leading-none">{selectedCountry.flag}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {countries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className="flex items-center gap-2">
                <span className="text-lg">{country.flag}</span>
                <span className="text-sm">{country.name}</span>
                <span className="text-sm text-muted-foreground">{country.dialCode}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
          {selectedCountry.dialCode}
        </span>
        <Input
          type="tel"
          className={cn("pl-12 border-[#0002841F]/12", className)}
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="(123) 456-7890"
          {...props}
        />
      </div>
    </div>
  )
}
