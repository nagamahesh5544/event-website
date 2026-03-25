import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'

const heroImage = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80'
const aboutImage = 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80'
const companyLogo = '/company-logo.png'
const clientLogos = [
  '/client-logos/client-1.jpeg',
  '/client-logos/client-2.jpeg',
  '/client-logos/client-3.jpeg',
  '/client-logos/client-4.jpeg',
  '/client-logos/client-5.jpeg',
]

const instagramPosts = [
  'https://www.instagram.com/reels/DUZruu9CTJM/',
  'https://www.instagram.com/reels/DR59LCwiQzn/',
  'https://www.instagram.com/reels/DRkW6jcE2xh/',
  'https://www.instagram.com/reels/DIzFTBkpnDA/',
  'https://www.instagram.com/reels/DHJGiVupg8V/',
]

const eventTypes = [
  {
    slug: 'corporate-experiences',
    title: 'Corporate Experiences',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
    description: [
      'Talent-led solutions for corporate events, including artists, motivational speakers, and technical production.',
      'We enhance your event with seamless sound and performance support.',
    ],
  },
  {
    slug: 'wedding-celebrations',
    title: 'Wedding Celebrations',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
    description: [
      'Curated artists and live music to elevate wedding celebrations.',
      'Supported by refined sound and lighting for a complete experience.',
    ],
  },
  {
    slug: 'concerts-live-shows',
    title: 'Concerts & Live Shows',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
    description: [
      'End-to-end performance support for concerts and live shows.',
      'From artist sourcing to sound engineering and stage production.',
    ],
  },
  {
    slug: 'spiritual-cultural-gatherings',
    title: 'Spiritual & Cultural Gatherings',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80',
    description: [
      'Thoughtfully curated spiritual artists and cultural performances.',
      'Enhanced with ambient sound, lighting, and minimal stage setups.',
    ],
  },
]

const offerings = [
  {
    slug: 'event-production-management',
    title: 'Event Production & Management',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    points: [
      'Corporate Events & Conferences',
      'Weddings & Social Celebrations',
      'Club & Nightlife Programming',
      'Concerts & Live Entertainment Shows',
      'Spiritual & Cultural Gatherings',
    ],
  },
  {
    slug: 'artist-curation-management',
    title: 'Artist Curation & Management',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    points: [
      ' Sufi & Classical Fusion Artists',
      ' Bollywood Playback & Live Performers',
      ' International & English Rock Bands',
      ' Instrumental Ensembles & Live Music Setups',
      ' Musical Fera',
      ' Spiritual & Meditative Music Artists',
      ' Contemporary & Performance Artists',
      ' Stand-up Comedians',
      ' Illusionists & Mentalists',
      ' DJ-led Live Bands & Electronic Acts',
      ' Motivational & Keynote Speakers',
      ' Specialty & Visual Acts',
      ' Aerial Performance Artists',
      ' Fire Performance Acts',
      ' LED & Laser Visual Shows',
    ],
  },
  {
    slug: 'professional-sound-engineering',
    title: 'Professional Sound Engineering',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    points: ['Stage & Truss Design Systems', 'Architectural & Ambient Lighting', 'LED Walls & Visual Displays', 'Audio-Visual Integration'],
  },
  {
    slug: 'licensing-compliance-support',
    title: 'Licensing & Compliance Support',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    points: ['Event Licensing Consultation', 'Legal & Regulatory Coordination', 'On-ground Compliance Support'],
  },
  {
    slug: 'experiential-engagement-solutions',
    title: 'Experiential & Engagement Solutions',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    points: ['Interactive Experience Zones', 'Curated game booths & activity setups', 'Interactive guest experiences'],
  },
  {
    slug: 'corporate-engagement-team-building',
    title: 'Corporate Engagement & Team Building',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    points: ['Structured Team-Building Programs', 'Leadership & Collaboration Workshops', 'Other Corporate Activities'],
  },
]

const talentCategories = [
  {
    slug: 'musical-talent',
    title: 'Musical Talent',
    image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80',
    points: [
      'Sufi & Classical Fusion Artists',
      'Bollywood Playback & Live Performers',
      'International & English Rock Bands',
      'Instrumental Ensembles & Live Music Setups',
      'Musical Fera',
      'Spiritual & Meditative Music Artists',
    ],
  },
  {
    slug: 'contemporary-performance-artists',
    title: 'Contemporary & Performance Artists',
    image: 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&w=1200&q=80',
    points: ['Stand-up Comedians', 'Illusionists & Mentalists', 'DJ-led Live Bands & Electronic Acts', 'Motivational & Keynote Speakers'],
  },
  {
    slug: 'specialty-visual-acts',
    title: 'Specialty & Visual Acts',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    points: ['Aerial Performance Artists', 'Fire Performance Acts', 'LED & Laser Visual Shows'],
  },
]

function SectionTitle({ eyebrow, title, body }) {
  return (
    <div className="section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className="subtext">{body}</p>}
    </div>
  )
}

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.label} className="breadcrumb-item">
            {isLast ? <span aria-current="page">{item.label}</span> : <Link to={item.to}>{item.label}</Link>}
            {!isLast && <span className="breadcrumb-sep">/</span>}
          </span>
        )
      })}
    </nav>
  )
}

function SiteLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand">
          <img src={companyLogo} alt="The Event Alchemist logo" />
          <span>The Event Alchemyist</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Open navigation menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </button>
        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/offerings">Our Offerings</NavLink>
          <NavLink to="/talent">Talent Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              className="mobile-overlay"
              aria-label="Close menu overlay"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.aside
              className="mobile-drawer"
              role="dialog"
              aria-label="Mobile navigation"
              initial={{ x: '100%', opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.9 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            >
              <button type="button" className="drawer-close" aria-label="Close navigation menu" onClick={closeMobileMenu}>×</button>
              <nav className="mobile-nav">
                <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
                <NavLink to="/about" onClick={closeMobileMenu}>About Us</NavLink>
                <NavLink to="/offerings" onClick={closeMobileMenu}>Our Offerings</NavLink>
                <NavLink to="/talent" onClick={closeMobileMenu}>Talent Portfolio</NavLink>
                <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      <main>{children}</main>
      <footer className="site-footer">
        <p>Turning Events into Golden Moments.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </footer>
    </>
  )
}

function HomePage() {
  const reelsRef = useRef(null)
  const instaSectionRef = useRef(null)
  const [showInsta, setShowInsta] = useState(false)

  useEffect(() => {
    if (!instaSectionRef.current) return

    const el = instaSectionRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          setShowInsta(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollReels = (direction) => {
    if (!reelsRef.current) return
    reelsRef.current.scrollBy({
      left: direction * 380,
      behavior: 'smooth',
    })
  }

  return (
    <SiteLayout>
      <section
        className="hero"
        style={{ backgroundImage: 'linear-gradient(rgba(36, 26, 16, 0.74), rgba(36, 26, 16, 0.74))' }}
      >
        <p className="eyebrow">Distinguished Event & Entertainment Experiences</p>
        <h1>TurningEvents into Golden Moments.</h1>
        <p>
          End-to-end event design, artist curation, and technical production for distinguished experiences.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn primary">Plan Your Event</Link>
          <Link to="/offerings" className="btn secondary">Explore Our Work</Link>
        </div>
      </section>

      <section className="panel">
        <SectionTitle
          eyebrow="Quick Overview"
          title="A full-spectrum event solutions company"
          body="Delivering curated entertainment, technical production, and licensing support across corporate, social, and cultural experiences."
        />
      </section>

      <section className="panel">
        <SectionTitle eyebrow="What We Do" title="Our Expertise" />
        <div className="grid four">
          <Link to="/offerings/event-production-management" className="card">Event Production & Management</Link>
          <Link to="/offerings/artist-curation-management" className="card">Artist Curation & Management</Link>
          <Link to="/offerings/professional-sound-engineering" className="card">Technical & Sound Engineering</Link>
          <Link to="/offerings/licensing-compliance-support" className="card">Licensing & Compliance</Link>
        </div>
      </section>

      <section className="panel">
        <SectionTitle eyebrow="Statistics" title="Trust Builders" />
        <div className="stats">
          <article><h3>12+</h3><p>Years of Experience</p></article>
          <article><h3>750</h3><p>Events Executed</p></article>
          <article><h3>Pan-India</h3><p>Presence</p></article>
        </div>
      </section>

      <section className="panel">
        <SectionTitle eyebrow="Our Clients" title="Trusted Partnership Across Brands" body="We are proud to have partnered with these clients for memorable event experiences." />
        <div className="clients-grid">
          {clientLogos.map((logo, index) => (
            <article className="client-logo-card" key={logo}>
              <img src={logo} alt={`Client logo ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <SectionTitle eyebrow="Featured Event Types" title="Click each card to explore" />
        <div className="grid event-grid">
          {eventTypes.map((item) => (
            <Link to={`/event-types/${item.slug}`} key={item.slug} className="image-card">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="panel" ref={instaSectionRef}>
        <SectionTitle eyebrow="Recent Events" title="Instagram Reels & Highlights" body="Real events delivered by our team. Click any card to watch on Instagram." />
        <div className="insta-controls">
          <button type="button" className="carousel-btn" onClick={() => scrollReels(-1)}>Prev</button>
          <button type="button" className="carousel-btn" onClick={() => scrollReels(1)}>Next</button>
        </div>
        <div className="insta-grid" ref={reelsRef}>
          {instagramPosts.map((url) => {
            const normalizedUrl = url.replace('/reels/', '/reel/')
            const embedUrl = normalizedUrl.endsWith('/')
              ? `${normalizedUrl}embed`
              : `${normalizedUrl}/embed`
            return (
              <article className="insta-card" key={url}>
                {showInsta ? (
                  <iframe
                    src={embedUrl}
                    title={`Instagram post ${url}`}
                    loading="lazy"
                    scrolling="no"
                  ></iframe>
                ) : (
                  <div className="insta-iframe-placeholder" aria-hidden="true" />
                )}
                <a className="text-link" href={url} target="_blank" rel="noreferrer">Open on Instagram</a>
              </article>
            )
          })}
        </div>
      </section>
    </SiteLayout>
  )
}

function AboutPage() {
  return (
    <SiteLayout>
      <section className="split">
        <img src={aboutImage} alt="Premium event setup" />
        <div>
          <SectionTitle eyebrow="About Us" title="Built for unforgettable experiences" />
          <p>
            We are a boutique event and entertainment company built on the philosophy that every gathering
            holds the potential to become an unforgettable experience.
          </p>
          <p>
            Over the past 12 years, we have evolved from curating intimate gatherings to delivering over 200
            meticulously executed events across diverse formats. Our journey has been defined by consistency,
            creativity, and an unwavering commitment to excellence.
          </p>
          <p>
            We believe that successful events are not just organized - they are thoughtfully designed. Every
            project we undertake is guided by a deep understanding of our client’s vision, combined with our
            expertise in production, artist curation, and technical execution.
          </p>
          <p>
            Our approach is collaborative and detail-oriented. From conceptualization to execution, we ensure
            that each element aligns seamlessly, resulting in experiences that are immersive, refined, and
            impactful.
          </p>
          <p>
            At our core, we value precision, professionalism, and personalization. We do not just meet
            expectations - we elevate them.
          </p>
        </div>
      </section>
    </SiteLayout>
  )
}

function OfferingsPage() {
  return (
    <SiteLayout>
      <section className="panel">
        <SectionTitle eyebrow="Our Offerings" title="Comprehensive event services" />
        <div className="cards-grid">
          {offerings.map((item) => (
            <article className="list-card" key={item.slug}>
              <img className="list-card-image" src={item.image} alt={item.title} />
              <div className="list-card-content">
                <h3>{item.title}</h3>
                <Link className="text-link" to={`/offerings/${item.slug}`}>View Details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}

function TalentPage() {
  return (
    <SiteLayout>
      <section className="panel">
        <SectionTitle eyebrow="Talent Portfolio" title="Curated artists and acts" />
        <div className="cards-grid">
          {talentCategories.map((item) => (
            <article className="list-card" key={item.slug}>
              <img className="list-card-image" src={item.image} alt={item.title} />
              <div className="list-card-content">
                <h3>{item.title}</h3>
                <Link className="text-link" to={`/talent/${item.slug}`}>Explore Category</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}

function OfferDetailPage() {
  const { slug } = useParams()
  const service = offerings.find((item) => item.slug === slug)
  if (!service) return <NotFoundPage />

  return (
    <SiteLayout>
      <section className="panel">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Our Offerings', to: '/offerings' },
            { label: service.title },
          ]}
        />
        <SectionTitle eyebrow="Service Detail" title={service.title} />
        <img className="detail-image" src={service.image} alt={service.title} />
        <ul className="detail-list">{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
      </section>
    </SiteLayout>
  )
}

function TalentDetailPage() {
  const { slug } = useParams()
  const talent = talentCategories.find((item) => item.slug === slug)
  if (!talent) return <NotFoundPage />

  return (
    <SiteLayout>
      <section className="panel">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Talent Portfolio', to: '/talent' },
            { label: talent.title },
          ]}
        />
        <SectionTitle eyebrow="Talent Category" title={talent.title} />
        <img className="detail-image" src={talent.image} alt={talent.title} />
        <ul className="detail-list">{talent.points.map((point) => <li key={point}>{point}</li>)}</ul>
      </section>
    </SiteLayout>
  )
}

function EventTypeDetailPage() {
  const { slug } = useParams()
  const event = eventTypes.find((item) => item.slug === slug)
  if (!event) return <NotFoundPage />

  return (
    <SiteLayout>
      <section className="panel">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Event Types', to: '/' },
            { label: event.title },
          ]}
        />
        <SectionTitle eyebrow="Event Type" title={event.title} />
        <div className="detail-copy">
          {event.description.map((line) => (
            <p className="subtext" key={line}>{line}</p>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}

function ContactPage() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (status.state === 'idle' || status.state === 'loading') return undefined

    const timer = setTimeout(() => {
      setStatus({ state: 'idle', message: '' })
    }, 3500)

    return () => clearTimeout(timer)
  }, [status.state])

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !adminTemplateId || !autoReplyTemplateId || !publicKey) {
        setStatus({ state: 'error', message: 'Email service is not configured. Please contact support.' })
        return
      }

      const templateParams = {
        name: payload.name,
        email: payload.email,
        organization: payload.organization || '-',
        eventType: payload.eventType,
        date: payload.date,
        location: payload.location,
        requirements: payload.requirements,
        time: new Date().toLocaleString(),
      }

      // 1) Send inquiry to admin email (configured in EmailJS template)
      await emailjs.send(serviceId, adminTemplateId, templateParams, { publicKey })

      // 2) Send auto-reply to customer (To Email: {{user_email}})
      await emailjs.send(serviceId, autoReplyTemplateId, templateParams, { publicKey })

      setStatus({ state: 'success', message: 'Inquiry sent successfully. We will contact you shortly.' })
      form.reset()
    } catch {
      setStatus({ state: 'error', message: 'Network error. Please try again.' })
    }
  }

  return (
    <SiteLayout>
      <section className="panel">
        <SectionTitle eyebrow="Contact / Inquiry" title="Let’s create something exceptional together." />
        <form className="inquiry-form" onSubmit={onSubmit}>
          <label>Name*<input required type="text" name="name" /></label>
          <label>Email*<input required type="email" name="email" /></label>
          <label>Organization<input type="text" name="organization" /></label>
          <label>Event Type*<input required type="text" name="eventType" /></label>
          <label>Date*<input required type="date" name="date" min={today} /></label>
          <label>Location*<input required type="text" name="location" /></label>
          <label>Requirements*<textarea required name="requirements" rows="5"></textarea></label>
          <button className="btn primary" type="submit" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>
        {status.state !== 'idle' && status.state !== 'loading' && (
          <p className={`toast ${status.state}`} role="status" aria-live="polite">
            {status.message}
          </p>
        )}
        <div className="contact-info">
          <p><strong>Contact us:</strong> +91 9220766770</p>
          <p><strong>Email:</strong> Theeventalchemyist@gmail.com</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/919220766770" target="_blank" rel="noreferrer">9220766770</a></p>
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/the_event_alchemist?igsh=OG5tOGQwaGEydW9y" target="_blank" rel="noreferrer">@the_event_alchemist</a></p>
        </div>
      </section>
    </SiteLayout>
  )
}

function PolicyPage({ title, text }) {
  return (
    <SiteLayout>
      <section className="panel">
        <SectionTitle title={title} />
        <p className="subtext">{text}</p>
      </section>
    </SiteLayout>
  )
}

function NotFoundPage() {
  return (
    <SiteLayout>
      <section className="panel">
        <SectionTitle title="Page not found" body="Use the menu to continue browsing." />
      </section>
    </SiteLayout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/offerings" element={<OfferingsPage />} />
        <Route path="/offerings/:slug" element={<OfferDetailPage />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/talent/:slug" element={<TalentDetailPage />} />
        <Route path="/event-types/:slug" element={<EventTypeDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PolicyPage title="Privacy Policy" text="We collect only the details you share through the inquiry form and use them solely to respond to your event requirements." />} />
        <Route path="/terms-and-conditions" element={<PolicyPage title="Terms & Conditions" text="All event proposals, artist commitments, and production timelines are finalized through a formal agreement after requirement review." />} />
        <Route path="/cookie-policy" element={<PolicyPage title="Cookie Policy" text="This website may use essential cookies for basic performance and analytics to improve user experience." />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
