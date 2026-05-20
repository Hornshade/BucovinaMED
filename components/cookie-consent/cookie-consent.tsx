"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  ACCEPT_ALL,
  DEFAULT_CATEGORIES,
  REJECT_ALL,
  applyConsent,
  readConsent,
  writeConsent,
  type ConsentCategories,
} from "@/lib/consent"

const OPEN_PREFS_EVENT = "bucovinamed:open-cookie-preferences"

interface CategoryDef {
  key: keyof ConsentCategories
  title: string
  description: string
  alwaysOn?: boolean
}

const CATEGORIES: CategoryDef[] = [
  {
    key: "necessary",
    title: "Strict necesare",
    description:
      "Aceste cookie-uri sunt esențiale pentru funcționarea site-ului (navigare, securitate, formulare). Nu pot fi dezactivate.",
    alwaysOn: true,
  },
  {
    key: "analytics",
    title: "Analiză și statistici",
    description:
      "Ne ajută să înțelegem cum este utilizat site-ul (pagini vizitate, surse de trafic) pentru a îmbunătăți experiența vizitatorilor. Folosim Google Analytics 4.",
  },
  {
    key: "marketing",
    title: "Marketing și publicitate",
    description:
      "Folosite pentru a măsura eficiența campaniilor de marketing și pentru a afișa conținut relevant pe alte site-uri.",
  },
  {
    key: "functional",
    title: "Funcționale",
    description:
      "Permit funcționalități suplimentare și personalizare (preferințe salvate, integrare cu hărți și rețele sociale).",
  },
]

export function CookieConsent() {
  const [mounted, setMounted] = useState(false)
  const [bannerOpen, setBannerOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [draft, setDraft] = useState<ConsentCategories>(DEFAULT_CATEGORIES)
  const initialFocusRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
    const existing = readConsent()
    if (existing) {
      applyConsent(existing.categories)
      setDraft(existing.categories)
    } else {
      setBannerOpen(true)
    }

    const handleOpen = () => {
      const latest = readConsent()
      setDraft(latest?.categories ?? DEFAULT_CATEGORIES)
      setDialogOpen(true)
    }
    window.addEventListener(OPEN_PREFS_EVENT, handleOpen)
    return () => window.removeEventListener(OPEN_PREFS_EVENT, handleOpen)
  }, [])

  if (!mounted) return null

  const persist = (categories: ConsentCategories) => {
    writeConsent(categories)
    applyConsent(categories)
    setDraft(categories)
    setBannerOpen(false)
    setDialogOpen(false)
  }

  const acceptAll = () => persist(ACCEPT_ALL)
  const rejectAll = () => persist(REJECT_ALL)
  const savePrefs = () => persist(draft)
  const openPrefs = () => {
    setDraft(readConsent()?.categories ?? DEFAULT_CATEGORIES)
    setBannerOpen(false)
    setDialogOpen(true)
  }

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open)
    if (!open && !readConsent()) {
      setBannerOpen(true)
    }
  }

  return (
    <>
      {bannerOpen ? (
        <section
          role="region"
          aria-label="Notificare cookie-uri"
          aria-describedby="cookie-banner-desc"
          className="fixed inset-x-0 bottom-0 z-[60] motion-safe:animate-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-300"
        >
          <div className="mx-auto max-w-5xl p-3 sm:p-4">
            <div className="rounded-lg border border-border bg-card text-card-foreground shadow-lg ring-1 ring-black/5">
              <div className="flex flex-col gap-4 p-4 sm:p-5 md:flex-row md:items-center md:gap-6">
                <div className="flex-1 space-y-1.5">
                  <h2 className="text-base font-semibold">Folosim cookie-uri</h2>
                  <p id="cookie-banner-desc" className="text-sm leading-relaxed text-muted-foreground">
                    Folosim cookie-uri pentru a asigura funcționarea site-ului și, cu acordul dumneavoastră, pentru analiză
                    și marketing. Puteți accepta toate, le puteți refuza sau să vă personalizați alegerea. Detalii în{" "}
                    <Link href="/politica-cookies" className="font-medium text-primary underline-offset-4 hover:underline">
                      Politica de cookies
                    </Link>
                    .
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:flex md:flex-shrink-0 md:flex-row">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={openPrefs}
                    className="min-h-11 w-full md:w-auto"
                  >
                    Setări
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={rejectAll}
                    className="min-h-11 w-full md:w-auto"
                  >
                    Refuză toate
                  </Button>
                  <Button
                    ref={initialFocusRef}
                    type="button"
                    onClick={acceptAll}
                    className="min-h-11 w-full md:w-auto"
                  >
                    Acceptă toate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Setări cookie-uri</DialogTitle>
            <DialogDescription>
              Alegeți ce categorii de cookie-uri permiteți. Cookie-urile strict necesare nu pot fi dezactivate.
            </DialogDescription>
          </DialogHeader>

          <div className="max-h-[50vh] overflow-y-auto space-y-4 py-2 pr-1">
            {CATEGORIES.map((cat, i) => (
              <div key={cat.key}>
                {i > 0 ? <Separator className="mb-4" /> : null}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-1">
                    <Label htmlFor={`cookie-cat-${cat.key}`} className="text-sm font-semibold">
                      {cat.title}
                    </Label>
                    <p className="text-xs leading-relaxed text-muted-foreground">{cat.description}</p>
                  </div>
                  <Switch
                    id={`cookie-cat-${cat.key}`}
                    checked={cat.alwaysOn ? true : draft[cat.key]}
                    disabled={cat.alwaysOn}
                    aria-label={cat.title}
                    onCheckedChange={(checked) =>
                      setDraft((prev) => ({ ...prev, [cat.key]: !!checked }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <DialogFooter className="gap-2">
            <Button type="button" variant="ghost" onClick={rejectAll}>
              Refuză toate
            </Button>
            <Button type="button" variant="outline" onClick={savePrefs}>
              Salvează preferințele
            </Button>
            <Button type="button" onClick={acceptAll}>
              Acceptă toate
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
