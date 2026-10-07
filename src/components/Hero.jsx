import { Crosshair, MapPin, Satellite } from 'lucide-react'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-forest-950"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Green agricultural fields viewed from above, representing precision farming"
          className="h-full w-full object-cover opacity-50"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/95 via-forest-900/85 to-forest-800/75" />
        <div className="hero-grid absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-20 pt-32 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="reveal max-w-2xl flex-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Agriculture × Drone Technology
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Smart Farming Starts From The Sky
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-100/90">
            Advanced agricultural drone solutions for smarter spraying, better crop management
            and efficient farming.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo('#drones')}
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-charcoal shadow-lg shadow-accent/25 transition hover:bg-amber-400"
            >
              Explore Our Drones
            </button>
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Talk to an Expert
            </button>
          </div>
          <p className="mt-10 flex items-center gap-2 text-sm font-medium text-forest-400">
            <Satellite className="h-4 w-4 text-accent" aria-hidden />
            Built for Modern Agriculture
          </p>
        </div>

        <div className="reveal reveal-delay-2 relative flex-1 lg:max-w-lg">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80"
              alt="Agricultural drone in flight over farmland"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-accent/70"
              aria-hidden
            >
              <path
                d="M40 220 Q 200 80 360 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="hero-path"
              />
            </svg>
            <div className="glass-card animate-float-soft absolute left-4 top-4 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-white">
              <Crosshair className="h-4 w-4 text-accent" />
              GPS Precision
            </div>
            <div className="glass-card absolute bottom-4 right-4 rounded-xl px-3 py-2 text-xs font-medium text-white">
              <span className="text-accent">●</span> Crop monitoring active
            </div>
            <div className="glass-card absolute bottom-4 left-4 flex items-center gap-2 rounded-xl px-3 py-2 text-xs text-white">
              <MapPin className="h-4 w-4 text-forest-400" />
              Field coverage
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
