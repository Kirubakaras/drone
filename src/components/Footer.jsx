import { Facebook, Instagram, Sprout, Youtube } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../config/company'
import WhatsAppIcon from './WhatsAppIcon'

const footerLinks = NAV_LINKS.map((link) =>
  link.label === 'Agricultural Drones' ? { ...link, label: 'Drones', href: '#drones' } : link
)

export default function Footer() {
  const waUrl = `https://wa.me/${COMPANY.whatsappNumber}`

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest-800 text-forest-400">
                <Sprout className="h-5 w-5" aria-hidden />
              </span>
              {COMPANY.name}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">{COMPANY.tagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                    className="text-sm transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h3>
            <ul className="mt-4 flex gap-3">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-800 text-[#25D366] transition hover:bg-stone-700"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-800 text-white transition hover:bg-stone-700"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-800 text-white transition hover:bg-stone-700"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-800 text-white transition hover:bg-stone-700"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          © 2026 K.S. Sivamani Farm Tech. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
