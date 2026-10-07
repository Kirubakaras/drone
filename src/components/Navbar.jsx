import { useState } from 'react'
import { Menu, X, Sprout } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../config/company'
import { useScrollNavbar } from '../hooks/useScrollNavbar'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrollNavbar()

  const closeMenu = () => setOpen(false)

  const navTo = (href) => {
    closeMenu()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 py-3 shadow-md shadow-forest-900/5 backdrop-blur-md'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            navTo('#home')
          }}
          className={`flex min-w-0 items-center gap-2.5 font-display text-sm font-bold leading-tight sm:text-base ${
            scrolled ? 'text-forest-900' : 'text-white'
          }`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              scrolled ? 'bg-forest-900 text-forest-400' : 'bg-white/15 text-accent glass-card'
            }`}
          >
            <Sprout className="h-5 w-5" aria-hidden />
          </span>
          <span className="hidden sm:inline">{COMPANY.name}</span>
          <span className="sm:hidden">K.S. Sivamani</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  navTo(link.href)
                }}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-forest-900/5 ${
                  scrolled ? 'text-charcoal-muted hover:text-forest-900' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              navTo('#contact')
            }}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-charcoal shadow-sm transition hover:bg-amber-400 hover:shadow-md"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-lg p-2 lg:hidden ${
            scrolled ? 'text-forest-900' : 'text-white'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-forest-900/10 bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  navTo(link.href)
                }}
                className="block rounded-lg px-3 py-3 text-base font-medium text-charcoal hover:bg-forest-50"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 border-t border-stone-200 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                navTo('#contact')
              }}
              className="block rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-charcoal"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
