import { COMPANY } from '../config/company'
import WhatsAppIcon from './WhatsAppIcon'

export default function CTASection() {
  const waUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${COMPANY.whatsappMessage}`

  const scrollContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="bg-gradient-to-br from-forest-800 to-forest-950 py-20 sm:py-24" aria-labelledby="cta-heading">
      <div className="reveal mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="cta-heading" className="font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to Take Your Farming to the Next Level?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-forest-100/90">
          Talk to our team about agricultural drones, sales, service, maintenance and spare parts.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={scrollContact}
            className="w-full rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-charcoal shadow-lg sm:w-auto"
          >
            Get a Quote
          </button>
          <button
            type="button"
            onClick={scrollContact}
            className="w-full rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm sm:w-auto"
          >
            Contact Us
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20bd5a] sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
