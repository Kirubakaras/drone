const SHOWCASE_IMAGE =
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80'

const cards = ['Precision', 'Efficiency', 'Coverage', 'Technology']

export default function AgricultureShowcase() {
  return (
    <section className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]" aria-labelledby="showcase-heading">
      <img
        src={SHOWCASE_IMAGE}
        alt="Wide agricultural field with crops under open sky"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/75 to-forest-900/50" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:min-h-[520px] lg:px-8">
        <div className="reveal max-w-xl lg:max-w-2xl">
          <h2
            id="showcase-heading"
            className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            Transforming Traditional Farming Into Precision Farming
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest-100/90">
            Use drone technology to improve operational efficiency, reduce manual effort and bring
            greater precision to modern agriculture.
          </p>
        </div>
        <ul className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-3">
          {cards.map((label) => (
            <li
              key={label}
              className="glass-card rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
