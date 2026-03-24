import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'

const heroImage = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1400&q=80'
const aboutImage = 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80'

const eventTypes = [
  { slug: 'corporate-experiences', title: 'Corporate Experiences', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80' },
  { slug: 'wedding-celebrations', title: 'Wedding Celebrations', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80' },
  { slug: 'concerts-live-shows', title: 'Concerts & Live Shows', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80' },
  { slug: 'spiritual-cultural-gatherings', title: 'Spiritual & Cultural Gatherings', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80' },
]

const offerings = [
  {
    slug: 'event-production-management',
    title: 'Event Production & Management',
    points: [
      'Corporate Events & Conferences',
      'Weddings & Social Celebrations',
      'Club & Nightlife Programming',
      'Concerts & Live Entertainment Shows',
      'Spiritual & Cultural Gatherings',
      'Artist Curation and management',
    ],
  },
  {
    slug: 'professional-sound-engineering',
    title: 'Professional Sound Engineering',
    points: ['Stage & Truss Design Systems', 'Architectural & Ambient Lighting', 'LED Walls & Visual Displays', 'Audio-Visual Integration'],
  },
  {
    slug: 'licensing-compliance-support',
    title: 'Licensing & Compliance Support',
    points: ['Event Licensing Consultation', 'Legal & Regulatory Coordination', 'On-ground Compliance Support'],
  },
  {
    slug: 'experiential-engagement-solutions',
    title: 'Experiential & Engagement Solutions',
    points: ['Interactive Experience Zones', 'Curated game booths & activity setups', 'Interactive guest experiences'],
  },
  {
    slug: 'corporate-engagement-team-building',
    title: 'Corporate Engagement & Team Building',
    points: ['Structured Team-Building Programs', 'Leadership & Collaboration Workshops', 'Other Corporate Activities'],
  },
]

const talentCategories = [
  {
    slug: 'musical-talent',
    title: 'Musical Talent',
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
    points: ['Stand-up Comedians', 'Illusionists & Mentalists', 'DJ-led Live Bands & Electronic Acts', 'Motivational & Keynote Speakers'],
  },
  {
    slug: 'specialty-visual-acts',
    title: 'Specialty & Visual Acts',
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

function SiteLayout({ children }) {
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand">Yours Eventfully</Link>
        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/offerings">Our Offerings</NavLink>
          <NavLink to="/talent">Talent Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
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
  return (
    <SiteLayout>
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(36, 26, 16, 0.74), rgba(36, 26, 16, 0.74)), url(${heroImage})` }}>
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
        <SectionTitle eyebrow="What We Do" title="Preview Blocks" />
        <div className="grid four">
          <Link to="/offerings/event-production-management" className="card">Event Production</Link>
          <Link to="/offerings/event-production-management" className="card">Artist Curation</Link>
          <Link to="/offerings/professional-sound-engineering" className="card">Technical & Sound Engineering</Link>
          <Link to="/offerings/licensing-compliance-support" className="card">Licensing & Compliance</Link>
        </div>
      </section>

      <section className="panel">
        <SectionTitle eyebrow="Statistics" title="Trust Builders" />
        <div className="stats">
          <article><h3>12+</h3><p>Years of Experience</p></article>
          <article><h3>200+</h3><p>Events Executed</p></article>
          <article><h3>Pan-India</h3><p>Presence</p></article>
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
        <div className="stack">
          {offerings.map((item) => (
            <article className="list-card" key={item.slug}>
              <h3>{item.title}</h3>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <Link className="text-link" to={`/offerings/${item.slug}`}>View Details</Link>
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
        <div className="stack">
          {talentCategories.map((item) => (
            <article className="list-card" key={item.slug}>
              <h3>{item.title}</h3>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <Link className="text-link" to={`/talent/${item.slug}`}>Explore Category</Link>
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
        <SectionTitle eyebrow="Service Detail" title={service.title} />
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
        <SectionTitle eyebrow="Talent Category" title={talent.title} />
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
        <SectionTitle eyebrow="Event Type" title={event.title} />
        <p className="subtext">
          This format is delivered end-to-end with creative direction, artist selection, technical production,
          and compliance support tailored to your venue and audience.
        </p>
      </section>
    </SiteLayout>
  )
}

function ContactPage() {
  return (
    <SiteLayout>
      <section className="panel">
        <SectionTitle eyebrow="Contact / Inquiry" title="Let’s create something exceptional together." />
        <form className="inquiry-form">
          <label>Name*<input required type="text" name="name" /></label>
          <label>Organization<input type="text" name="organization" /></label>
          <label>Event Type*<input required type="text" name="eventType" /></label>
          <label>Date*<input required type="date" name="date" /></label>
          <label>Location*<input required type="text" name="location" /></label>
          <label>Requirements*<textarea required name="requirements" rows="5"></textarea></label>
          <button className="btn primary" type="submit">Submit Inquiry</button>
        </form>
        <div className="contact-info">
          <p><strong>Contact us:</strong> +91 9220766770</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/919220766770" target="_blank" rel="noreferrer">9220766770</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/yourseventfully" target="_blank" rel="noreferrer">@yourseventfully</a></p>
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
