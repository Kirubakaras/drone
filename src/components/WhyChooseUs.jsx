import { Heart, Leaf, Shield, Sparkles, Users, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'

const reasons = [
  {
    icon: Leaf,
    title: 'Built for Agriculture',
    text: 'Solutions designed around real agricultural requirements.',
  },
  {
    icon: Shield,
    title: 'Reliable Technology',
    text: 'Focus on practical and dependable drone solutions.',
  },
  {
    icon: Wrench,
    title: 'Complete Support',
    text: 'Sales, service, maintenance and spare parts from one place.',
  },
  {
    icon: Sparkles,
    title: 'Technical Expertise',
    text: 'Professional guidance for drone operation and maintenance.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    text: 'Solutions based on customer requirements rather than one-size-fits-all products.',
  },
  {
    icon: Users,
    title: 'Future Ready',
    text: 'Helping agriculture adopt modern drone technology.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-24 bg-forest-50 py-20 sm:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-14">
          <SectionHeading id="why-heading" title="Why Farmers Choose K.S. Sivamani Farm Tech" />
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className="reveal">
              <article className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-forest-900/5">
                <Icon className="h-8 w-8 text-forest-800" aria-hidden />
                <h3 className="mt-5 font-display text-lg font-bold text-charcoal">
                  {title}
                </h3>
                <p className="mt-2 text-charcoal-muted leading-relaxed">{text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
