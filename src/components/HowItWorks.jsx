import SectionHeading from './SectionHeading'

const steps = [
  {
    num: '01',
    title: 'Understand',
    text: 'Understand your farming and operational requirements.',
  },
  {
    num: '02',
    title: 'Recommend',
    text: 'Recommend the right drone and solution.',
  },
  {
    num: '03',
    title: 'Deploy',
    text: 'Help you get started with the technology.',
  },
  {
    num: '04',
    title: 'Support',
    text: 'Provide ongoing service, maintenance and spare parts.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-forest-900 py-20 sm:py-28" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-16">
          <SectionHeading
            id="how-heading"
            light
            eyebrow="Process"
            title="From Requirement to Reliable Drone Solution"
          />
        </div>
        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-forest-700 lg:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <li
              key={step.num}
              className={`reveal${i === 1 ? ' reveal-delay-1' : i === 2 ? ' reveal-delay-2' : i === 3 ? ' reveal-delay-3' : ''}`}
            >
              <article className="relative rounded-2xl border border-forest-700/80 bg-forest-950/40 p-6 backdrop-blur-sm transition hover:border-accent/40">
                <span className="font-display text-4xl font-bold text-accent/90">{step.num}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/80">{step.text}</p>
                <span className="absolute -top-3 left-6 hidden h-6 w-6 rounded-full border-4 border-forest-900 bg-accent lg:block" aria-hidden />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
