export type ConsentCategoryKey = "necessary" | "analytics" | "marketing" | "functional"

export type ConsentCategories = Record<ConsentCategoryKey, boolean>

export interface ConsentRecord {
  version: 1
  timestamp: number
  categories: ConsentCategories
}

export const CONSENT_STORAGE_KEY = "bucovinamed-consent-v1"
export const CONSENT_EVENT = "bucovinamed:consent-change"

export const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
}

export const ACCEPT_ALL: ConsentCategories = {
  necessary: true,
  analytics: true,
  marketing: true,
  functional: true,
}

export const REJECT_ALL: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
}

type GtagSignalValue = "granted" | "denied"

interface GtagConsentSignals {
  ad_storage: GtagSignalValue
  ad_user_data: GtagSignalValue
  ad_personalization: GtagSignalValue
  analytics_storage: GtagSignalValue
  functionality_storage: GtagSignalValue
  personalization_storage: GtagSignalValue
  security_storage: GtagSignalValue
}

export function categoriesToGtagSignals(c: ConsentCategories): GtagConsentSignals {
  const g = (b: boolean): GtagSignalValue => (b ? "granted" : "denied")
  return {
    ad_storage: g(c.marketing),
    ad_user_data: g(c.marketing),
    ad_personalization: g(c.marketing),
    analytics_storage: g(c.analytics),
    functionality_storage: g(c.functional),
    personalization_storage: g(c.functional),
    security_storage: "granted",
  }
}

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentRecord
    if (parsed?.version !== 1 || !parsed.categories) return null
    return parsed
  } catch {
    return null
  }
}

export function writeConsent(categories: ConsentCategories): ConsentRecord {
  const record: ConsentRecord = {
    version: 1,
    timestamp: Date.now(),
    categories: { ...categories, necessary: true },
  }
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record))
      window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: record }))
    } catch {
      // ignore quota / privacy-mode errors
    }
  }
  return record
}

export function clearConsent(): void {
  if (typeof window === "undefined") return
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY)
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }))
  } catch {
    // ignore
  }
}

export function applyConsent(categories: ConsentCategories): void {
  if (typeof window === "undefined") return
  const signals = categoriesToGtagSignals(categories)
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", signals)
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "consent_update", consent: signals, categories })
  }
}

export function openCookiePreferences(): void {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent("bucovinamed:open-cookie-preferences"))
}
