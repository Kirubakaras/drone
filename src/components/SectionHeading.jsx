export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  light = false,
  className = '',
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
            light ? 'text-forest-400' : 'text-forest-700'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-forest-100/90' : 'text-charcoal-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
