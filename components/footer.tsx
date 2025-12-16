"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img src="/logo.png" alt="Ambulanta Bucovina Med" className="h-28 w-auto" loading="lazy" />
            </div>
            <p className="text-center text-sm leading-relaxed text-muted-foreground sm:text-left">
              Servicii medicale de urgență profesionale disponibile 24/7 pentru siguranța și liniștea dumneavoastră.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <Link href="/servicii" className="cursor-pointer hover:text-primary">
              <h3 className="mb-4 font-semibold text-card-foreground">Servicii</h3>
            </Link>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/servicii" className="cursor-pointer hover:text-primary">
                  Transport asistat
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="cursor-pointer hover:text-primary">
                  Transport neasistat
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="cursor-pointer hover:text-primary">
                  Transport între spitale
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="cursor-pointer hover:text-primary">
                  Internări & Externări
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="mb-4 font-semibold text-card-foreground">Companie</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/despre-noi" className="cursor-pointer hover:text-primary">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="cursor-pointer hover:text-primary">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/contact" className="cursor-pointer hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61583619271429&locale=ro_RO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-primary inline-flex items-center gap-1"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="mb-4 font-semibold text-card-foreground">Contact de Urgență</h3>
            <p className="mb-2 text-sm text-muted-foreground">Disponibil 24 de ore pe zi, 7 zile pe săptămână</p>
            <a
              href="tel:+40771010112"
              className="block text-lg font-semibold text-destructive hover:underline cursor-pointer"
            >
              +40 771 010 112
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ambulanța Bucovina Med. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
