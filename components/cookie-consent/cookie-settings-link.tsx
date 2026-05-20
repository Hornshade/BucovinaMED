"use client"

import type { ReactNode } from "react"
import { openCookiePreferences } from "@/lib/consent"

interface Props {
  children: ReactNode
  className?: string
}

export function CookieSettingsLink({ children, className }: Props) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={
        className ??
        "cursor-pointer text-left hover:text-primary focus-visible:outline-none focus-visible:underline"
      }
    >
      {children}
    </button>
  )
}
