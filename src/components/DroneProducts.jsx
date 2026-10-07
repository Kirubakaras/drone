import { ArrowRight, Camera, Droplets, Settings2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const products = [
  {
    title: 'Agricultural Spraying Drone',
    description:
      'Efficient aerial spraying solutions designed to cover agricultural fields quickly and accurately.',
    features: [
      'High-capacity spraying',
      'Precision application',
      'Efficient field coverage',
      'Easy operation',
    ],
    cta: 'View Details',
    icon: Droplets,
    image:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Agricultural spraying drone over crops — illustrative',
  },
  {
    title: 'Agriculture Mapping & Monitoring Drone',
    description:
      'Drone technology designed for crop monitoring, field analysis and precision agriculture.',
    features: ['Field monitoring', 'Crop analysis', 'Aerial imaging', 'Precision agriculture'],
    cta: 'View Details',
    icon: Camera,
    image: '/images/drone1.webp',
    imageAlt: 'Aerial view of agricultural land for monitoring — illustrative',
  },
  {
    title: 'Custom / Professional Drone Solutions',
    description:
      'Technology solutions tailored to specific agriculture and commercial requirements.',
    features: null,
    cta: 'Enquire Now',
    icon: Settings2,
    image:
      'https://images.unsplash.com/photo-1523348837708-15d4a09cf371?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Professional drone technology for agriculture — illustrative',
  },
]

export default function DroneProducts() {
  const goContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="drones"
      className="scroll-mt-24 bg-forest-50 py-20 sm:py-28"
      aria-labelledby="drones-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-14">
          <SectionHeading
            id="drones-heading"
            eyebrow="Agricultural Drones"
            title="Powerful Drones. Smarter Farming."
          />
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {products.map((product, i) => (
            <article
              key={product.title}
              className={`reveal ${['', ' reveal-delay-1', ' reveal-delay-2'][i] ?? ' reveal-delay-3'} group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-forest-900/5 transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-100">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-forest-800 shadow-sm">
                  <product.icon className="h-5 w-5" aria-hidden />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-charcoal">
                  {product.title}
                </h3>
                <p className="mt-3 flex-1 text-charcoal-muted leading-relaxed">{product.description}</p>
                {product.features && (
                  <ul className="mt-5 space-y-2 border-t border-stone-100 pt-5 text-sm text-charcoal-muted">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  type="button"
                  onClick={goContact}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 transition group-hover:gap-3"
                >
                  {product.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
