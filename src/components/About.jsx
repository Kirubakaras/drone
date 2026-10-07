import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'

const features = [
  'Agricultural Drone Solutions',
  'Drone Sales & Manufacturing',
  'Professional Drone Service',
  'Genuine Spare Parts',
  'Technical Support',
  'Customer-focused Solutions',
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="reveal relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-forest-100 to-accent-soft/40" aria-hidden />
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80"
            alt="Farmer and modern agriculture technology in the field"
            className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
        <div className="reveal reveal-delay-1 order-1 lg:order-2">
          <SectionHeading
            id="about-heading"
            eyebrow="About Us"
            title="Technology That Takes Agriculture Higher"
          />
          <p className="mt-6 text-lg leading-relaxed text-charcoal-muted">
            K.S. Sivamani Farm Tech brings together agriculture and drone technology to provide
            practical, reliable and efficient solutions for modern farming.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-charcoal-muted">
            From agricultural drone sales and manufacturing to servicing, maintenance and spare
            parts, we provide complete support for customers looking to adopt drone technology in
            agriculture.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-charcoal">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-900 text-white">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="mt-10 inline-flex rounded-full border-2 border-forest-900 px-6 py-3 text-sm font-semibold text-forest-900 transition hover:bg-forest-900 hover:text-white"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
