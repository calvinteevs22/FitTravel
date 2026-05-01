import { useState } from 'react'

// ── Calendly helper ──
const CALENDLY_URL = 'https://calendly.com/YOUR_LINK_HERE'

function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL })
  } else {
    window.open(CALENDLY_URL, '_blank')
  }
}

// ── Navbar ──
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-navy">FitTravel</a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-gray-600 hover:text-navy transition-colors">How it works</a>
          <a href="#benefits" className="text-sm text-gray-600 hover:text-navy transition-colors">Benefits</a>
          <a href="#waitlist" className="text-sm text-gray-600 hover:text-navy transition-colors">Join waitlist</a>
          <button onClick={openCalendly} className="bg-teal text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-teal/90 transition-colors">
            Book a session
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-navy" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600">How it works</a>
          <a href="#benefits" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600">Benefits</a>
          <a href="#waitlist" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600">Join waitlist</a>
          <button onClick={() => { setMenuOpen(false); openCalendly() }} className="bg-teal text-white text-sm font-medium px-5 py-2.5 rounded-lg w-full">
            Book a session
          </button>
        </div>
      )}
    </nav>
  )
}

// ── Hero ──
function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
          Stay fit wherever you travel
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Book vetted personal trainers who meet you at your hotel gym. No equipment to pack, no routines to plan — just show up and train.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={openCalendly} className="bg-teal text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-teal/90 transition-colors">
            Book a session
          </button>
          <a href="#how-it-works" className="border-2 border-navy text-navy font-semibold px-8 py-4 rounded-lg text-lg hover:bg-navy hover:text-white transition-colors text-center">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

// ── How It Works ──
const steps = [
  { num: '1', title: 'Open the app', desc: 'Browse available trainers in your destination city before or after you land.' },
  { num: '2', title: 'Choose your trainer', desc: 'View profiles, specialties, reviews, and book a session that fits your schedule.' },
  { num: '3', title: 'Work out at your hotel gym', desc: 'Your trainer meets you on-site. No commute, no guest passes — just results.' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">How it works</h2>
        <p className="mt-4 text-gray-600 text-center max-w-xl mx-auto">Three simple steps to your next workout — anywhere in the world.</p>
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-14 h-14 bg-teal text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                {s.num}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Tabbed Value Props ──
const travelerBenefits = [
  { title: 'No routine planning', desc: 'Your trainer builds the workout around the equipment available at your hotel.' },
  { title: 'Vetted professionals', desc: 'Every trainer is certified, insured, and reviewed by other travellers.' },
  { title: 'Flexible scheduling', desc: 'Book sessions that fit your travel itinerary — early mornings, late evenings, whatever works.' },
  { title: 'Zero equipment needed', desc: 'Leave the resistance bands at home. Your trainer brings everything extra you might need.' },
]

const trainerBenefits = [
  { title: 'New revenue stream', desc: 'Access a steady pipeline of clients without spending on marketing or lead generation.' },
  { title: 'Flexible hours', desc: 'Accept sessions that fit your existing schedule. You set your own availability.' },
  { title: 'No studio overhead', desc: 'Train clients in hotel gyms — no rent, no utilities, no long-term lease.' },
  { title: 'Build your reputation', desc: 'Collect reviews from travellers and grow your profile across multiple cities.' },
]

function ValueProps() {
  const [tab, setTab] = useState('travellers')
  const benefits = tab === 'travellers' ? travelerBenefits : trainerBenefits

  return (
    <section id="benefits" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">Why FitTravel?</h2>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setTab('travellers')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${tab === 'travellers' ? 'bg-white text-navy shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              For Travellers
            </button>
            <button
              onClick={() => setTab('trainers')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${tab === 'trainers' ? 'bg-white text-navy shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              For Personal Trainers
            </button>
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <div key={b.title} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-navy">{b.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Waitlist Form ──
function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    // TODO: Replace with your Mailchimp API endpoint
    // Example using Mailchimp's subscribe endpoint via a serverless function:
    //
    // const res = await fetch('/api/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ name, email }),
    // })
    //
    // if (res.ok) { setStatus('success') } else { setStatus('error') }

    // Simulated success for now
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setName('')
    setEmail('')
  }

  return (
    <section id="waitlist" className="py-20 md:py-28 px-6 bg-navy">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Join the waitlist</h2>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Be the first to know when FitTravel launches in your city. Early members get priority access and exclusive rates.
        </p>
        {status === 'success' ? (
          <div className="mt-10 bg-teal/20 border border-teal/30 rounded-xl p-6">
            <p className="text-teal font-medium text-lg">You're on the list! We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-teal text-white font-semibold px-8 py-3.5 rounded-lg text-lg hover:bg-teal/90 transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? 'Joining...' : 'Join the waitlist'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

// ── Footer ──
function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} FitTravel. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-navy transition-colors" aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-navy transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-navy transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

// ── App ──
export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ValueProps />
      <WaitlistForm />
      <Footer />
    </div>
  )
}
