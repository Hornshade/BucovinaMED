"use client"

import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Ambulanta Bucovina Med" className="h-24 w-auto" loading="eager" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            <Link href="/servicii">
              <Button
                variant="ghost"
                size="sm"
                className={`cursor-pointer ${
                  pathname === "/servicii" ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
              >
                Servicii
              </Button>
            </Link>
            <Link href="/despre-noi">
              <Button
                variant="ghost"
                size="sm"
                className={`cursor-pointer ${
                  pathname === "/despre-noi" ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
              >
                Despre Noi
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="sm"
                className={`cursor-pointer ${
                  pathname === "/contact" ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+40771010112"
            className="flex cursor-pointer items-center gap-2 rounded-lg bg-destructive px-3 py-2 text-sm text-destructive-foreground transition-colors hover:bg-destructive/90 md:px-4"
          >
            <Phone className="h-4 w-4 md:h-5 md:w-5" />
            <span className="hidden font-semibold sm:inline">+40 771 010 112</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-accent md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="container mx-auto flex flex-col px-4 py-4">
            <Link href="/servicii" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start cursor-pointer ${
                  pathname === "/servicii" ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
              >
                Servicii
              </Button>
            </Link>
            <Link href="/despre-noi" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start cursor-pointer ${
                  pathname === "/despre-noi" ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
              >
                Despre Noi
              </Button>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start cursor-pointer ${
                  pathname === "/contact" ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
                }`}
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
