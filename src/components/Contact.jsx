import { useState } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY, REQUIREMENT_OPTIONS } from '../config/company'
import WhatsAppIcon from './WhatsAppIcon'
import SectionHeading from './SectionHeading'

const initialForm = {
  name: '',
  mobile: '',
  email: '',
  location: '',
  requirement: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.mobile.trim()) errors.mobile = 'Mobile number is required'
  else if (!/^[\d\s+\-()]{8,15}$/.test(form.mobile.trim()))
    errors.mobile = 'Enter a valid mobile number'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = 'Enter a valid email address'
  if (!form.requirement) errors.requirement = 'Please select a requirement'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const waUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${COMPANY.whatsappMessage}`

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(form)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    // API integration point: POST form data to your backend or CRM here.
    // Example: await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(form) })
    console.info('[Enquiry — ready for API]', form)
    setStatus('success')
    setForm(initialForm)
    setErrors({})
  }

  const fieldClass = (field) =>
    `mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-charcoal outline-none transition focus:ring-2 focus:ring-forest-600/30 ${
      errors[field] ? 'border-red-400' : 'border-stone-200'
    }`

  return (
    <section id="contact" className="scroll-mt-24 bg-forest-50 py-20 sm:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12">
          <SectionHeading id="contact-heading" title="Let's Build Smarter Agriculture Together" />
        </div>
        <div className="grid gap-12 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="reveal lg:col-span-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest-900/5 sm:p-8"
            noValidate
          >
            <h3 className="sr-only">Contact form</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-charcoal">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={fieldClass('name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="mobile" className="text-sm font-medium text-charcoal">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  className={fieldClass('mobile')}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.mobile}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-charcoal">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={fieldClass('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="location" className="text-sm font-medium text-charcoal">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  value={form.location}
                  onChange={handleChange}
                  className={fieldClass('location')}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="requirement" className="text-sm font-medium text-charcoal">
                  Requirement
                </label>
                <select
                  id="requirement"
                  name="requirement"
                  value={form.requirement}
                  onChange={handleChange}
                  className={fieldClass('requirement')}
                >
                  <option value="">Select requirement</option>
                  {REQUIREMENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.requirement && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.requirement}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-charcoal">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={fieldClass('message')}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-forest-900 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-800 sm:w-auto sm:px-10"
            >
              Send Enquiry
            </button>
            {status === 'success' && (
              <p className="mt-4 text-sm font-medium text-forest-700" role="status">
                Thank you — your enquiry has been recorded. Our team will contact you shortly.
              </p>
            )}
          </form>

          <aside className="reveal reveal-delay-1 lg:col-span-2">
            <div className="rounded-2xl bg-forest-900 p-8 text-white">
              <h3 className="font-display text-xl font-bold">Contact Information</h3>
              <p className="mt-2 text-sm text-forest-200/80">
                Reach us by phone, WhatsApp, or email — we are happy to discuss your requirements.
              </p>
              <ul className="mt-8 space-y-5">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <a href={COMPANY.phoneHref} className="hover:text-accent">
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]" />
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    WhatsApp
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <a href={COMPANY.emailHref} className="hover:text-accent">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>{COMPANY.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>{COMPANY.businessHours}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
