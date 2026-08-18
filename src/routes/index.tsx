import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Mail,
  MessageCircle,
  Play,
  Plus,
  Sparkles,
  Target,
  Video,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

const collaborations = [
  'EVOQ.AI',
  'AKBAR TRAVELS',
  'B QUICK',
  'CAPLY',
  'OCCASSIO',
  'RBC GROUP',
  'FADE ROOM',
  'DEE1',
]

const ownedVentures = [
  {
    name: 'Evoq.ai',
    role: 'Founder & CEO',
    logo: '/images/evoq-ai-logo.jpeg',
    logoClassName: 'venture-logo-wide',
    alt: 'Evoq.ai logo',
  },
  {
    name: 'Soulix',
    role: 'Upcoming Premium Fragrance Brand (Building)',
    logo: '/images/soulix-logo.jpeg',
    logoClassName: 'venture-logo-mark',
    alt: 'Soulix brand mark',
  },
]

const previousRoles = [
  { role: 'Marketing Manager', company: 'ECA Academy' },
  { role: 'Digital Marketer', company: 'Wellnex' },
]

const achievements = [
  {
    image: '/images/award-moment.jpeg',
    eyebrow: 'Recognition 01',
    title: 'A moment of impact',
    detail:
      'Recognized on stage for creative contribution and community impact in digital marketing.',
    position: 'center 38%',
  },
  {
    image: '/images/guest-of-honor.png',
    eyebrow: 'Recognition 02',
    title: 'Guest of Honor',
    detail:
      'Invited to represent the next generation of creators, strategists, and AI-led visual storytellers.',
    position: 'center',
  },
  {
    image: '/images/convocation-event.jpeg',
    eyebrow: 'Recognition 03',
    title: 'Industry convocation',
    detail:
      'Participated in a leading Kerala digital marketing gathering alongside educators and industry professionals.',
    position: 'center 45%',
  },
  {
    image: '/images/dconv-speaker.png',
    eyebrow: 'Recognition 04',
    title: "D'CONV '25 speaker",
    detail:
      "Featured at D'CONV '25, sharing perspectives on attention, visual culture, and modern brand building.",
    position: 'center',
  },
]

const expertise = [
  {
    icon: Video,
    number: '01',
    title: 'AI Video Creation',
    copy: 'Commercials, reels, memes, visual hooks, and narrative edits engineered for the first three seconds.',
  },
  {
    icon: Target,
    number: '02',
    title: 'Performance Marketing',
    copy: 'Full-funnel campaigns, paid acquisition, lead generation, testing, and relentless optimization.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Brand Development',
    copy: 'Distinct identities and visual systems informed by building Evoq.ai, Soulix, and client brands.',
  },
]

const reelVideos = [
  {
    title: 'AI Anchoring',
    poster: '/images/reels/ai-anchoring.jpg',
    playerUrl: 'https://player.vimeo.com/video/1215840618?autoplay=1',
  },
  {
    title: 'AI Anniversary Bliss',
    poster: '/images/reels/ai-anniversary-bliss.jpg',
    playerUrl: 'https://player.vimeo.com/video/1215840616?autoplay=1',
  },
  {
    title: 'Happenstance Ad (Non-AI)',
    poster: '/images/reels/happenstance-ad.jpg',
    playerUrl: 'https://player.vimeo.com/video/1215840923?autoplay=1',
  },
  {
    title: 'AI Grooming Ad',
    poster: '/images/reels/ai-grooming-ad.jpg',
    playerUrl: 'https://player.vimeo.com/video/1215840915?autoplay=1',
  },
  {
    title: 'AI Viral Ad',
    poster: '/images/reels/ai-viral-ad.jpg',
    playerUrl: 'https://player.vimeo.com/video/1215840888?autoplay=1',
  },
  {
    title: 'AI Event Company Ad',
    poster: '/images/reels/ai-event-company-ad.jpg',
    playerUrl: 'https://player.vimeo.com/video/1215840617?autoplay=1',
  },
  {
    title: 'Exposing Contents (AI Mixed)',
    poster: '/images/reels/exposing-contents.jpg',
    playerUrl: 'https://player.vimeo.com/video/1215840615?autoplay=1',
  },
]

function Portfolio() {
  const reelRailRef = useRef<HTMLDivElement>(null)
  const [selectedAchievement, setSelectedAchievement] = useState<
    (typeof achievements)[number] | null
  >(null)
  const [selectedReel, setSelectedReel] = useState<
    (typeof reelVideos)[number] | null
  >(null)

  useEffect(() => {
    document.body.style.overflow = selectedAchievement || selectedReel ? 'hidden' : ''

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedAchievement(null)
        setSelectedReel(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedAchievement, selectedReel])

  const scrollReels = (direction: -1 | 1) => {
    const rail = reelRailRef.current
    if (!rail) return

    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.82, 390),
      behavior: 'smooth',
    })
  }

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />

      <nav className="top-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Soulahmd home">
          SOUL<span>AHMD</span>
        </a>
        <div className="nav-links">
          <a href="#about">Creator</a>
          <a href="#work">Work</a>
          <a href="#proof">Proof</a>
        </div>
        <a className="nav-cta" href="mailto:SOULAHMDZ@gmail.com?subject=Project%20Inquiry">
          Start a project <ArrowRight size={15} />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker reveal reveal-1">
            <span className="live-dot" /> AI VIDEO CREATOR · DIGITAL MARKETER
          </p>
<h1 className="display-title reveal reveal-2" style={{ fontSize: 'clamp(3.1rem, 5.2vw, 5.4rem)', lineHeight: 0.92, letterSpacing: '-0.03em' }}>
            UNSKIPABILITY
            <span>GUARANTEED.</span>
          </h1>
          <p className="hero-sub reveal reveal-3">
            High-impact growth strategies, AI-powered visuals, and brand stories
            built to hold attention in the first three seconds.
          </p>
          <div className="hero-credit reveal reveal-3" aria-label="Current ventures">
            <span><strong>Evoq.ai</strong> · Founder & CEO</span>
            <span><strong>Soulix</strong> · Premium fragrance brand in development</span>
          </div>
          <div className="hero-actions reveal reveal-4">
            <a className="button button-primary" href="#work">
              <Play size={18} fill="currentColor" /> Play work
            </a>
            <a className="button button-secondary" href="#about">
              <Plus size={20} /> My story
            </a>
          </div>
        </div>

        <div className="hero-portrait reveal reveal-3" aria-label="Portrait of Ahmed Sabith">
          <div className="portrait-frame">
            <img src="/images/ahmed-hero.jpeg" alt="Ahmed Sabith, also known as Soulahmd" />
          </div>
          <div className="portrait-caption">
            <span>AHMED SABITH</span>
            <small>KERALA · INDIA</small>
          </div>
        </div>

        <a className="scroll-cue" href="#collaborations" aria-label="Scroll to collaborations">
          Scroll to explore <ArrowDown size={16} />
        </a>
      </section>

      <section className="logo-rail" id="collaborations" aria-label="Top collaborations">
        <div className="rail-label">Top collaborations & proven brands</div>
        <div className="marquee">
          <div className="marquee-track">
            {[...collaborations, ...collaborations].map((brand, index) => (
              <span key={`${brand}-${index}`}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-index">01 / THE CREATOR</div>
        <div className="about-card">
          <div className="about-image-wrap">
            <img src="/images/ahmed-profile.jpeg" alt="Ahmed Sabith at an industry event" />
            <div className="original-badge">A SOULAHMD ORIGINAL</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Meet the creator</p>
            <h2>Ahmed Sabith<br /><span>aka Soulahmd.</span></h2>
            <p className="about-lead">
              I turn viewers into loyal customers through AI-generated video,
              visual-first storytelling, and performance marketing.
            </p>
            <p>
              My journey began in 2023 at Dotin Digital Academy, Thrissur. Today,
              I lead video-first campaigns through Evoq.ai, build the fragrance
              brand Soulix, and create platform-native stories for a growing
              community at @soul.ahmd.
            </p>
            <div className="profile-meta">
              <div><span>Role</span><strong>Founder · Creator · Strategist</strong></div>
              <div><span>Specialty</span><strong>AI Video + Brand Growth</strong></div>
              <div><span>Education</span><strong>Advanced Diploma in Digital Marketing</strong></div>
            </div>
            <div className="owned-ventures" aria-label="Brands founded by Ahmed Sabith">
              <div className="ventures-heading">
                <span>Owned ventures</span>
                <strong>Building from zero.</strong>
              </div>
              <div className="venture-list">
                {ownedVentures.map((venture) => (
                  <article className="venture-card" key={venture.name}>
                    <div className="venture-logo-slot">
                      <img className={venture.logoClassName} src={venture.logo} alt={venture.alt} />
                    </div>
                    <div>
                      <h3>{venture.name}</h3>
                      <p>{venture.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="tag-list">
              {['AI Video Production', 'Performance Marketing', 'Visual Storytelling', 'Brand Strategy', 'Creative Copywriting'].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Core expertise</p>
            <h2>Built for attention.<br />Measured by action.</h2>
          </div>
          <p className="section-note">One creative system—from the opening frame to the final conversion.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map(({ icon: Icon, number, title, copy }) => (
            <article className="expertise-card" key={title}>
              <div className="expertise-top"><span>{number}</span><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading reel-heading">
          <div>
            <p className="eyebrow">Selected vertical work</p>
            <h2>Reels built to stop<br />the scroll.</h2>
          </div>
          <div className="reel-controls" aria-label="Video carousel controls">
            <button type="button" onClick={() => scrollReels(-1)} aria-label="View previous videos">
              <ChevronLeft size={22} />
            </button>
            <button type="button" onClick={() => scrollReels(1)} aria-label="View next videos">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
        <div className="reel-rail" ref={reelRailRef} aria-label="Scrollable video showcase">
          {reelVideos.map((video, index) => (
            <article className="reel-card" key={video.playerUrl}>
              <button
                className="reel-player"
                type="button"
                aria-label={`Play ${video.title}`}
                onClick={() => setSelectedReel(video)}
              >
                <img src={video.poster} alt="" loading="lazy" />
                <span className="reel-play" aria-hidden="true">
                  <Play size={28} fill="currentColor" />
                </span>
                <div className="reel-title">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{video.title}</strong>
                </div>
              </button>
            </article>
          ))}
        </div>
        <div className="video-social-panel">
          <div>
            <p className="eyebrow">Keep watching</p>
            <h3>For More Videos Visit This Site</h3>
            <p>Visit This Instagram Profile</p>
          </div>
          <div className="video-social-links">
            <a href="https://instagram.com/soul.ahmd" target="_blank" rel="noreferrer">
              <Instagram size={19} /> @soul.ahmd
            </a>
            <a href="https://instagram.com/evoq.ai" target="_blank" rel="noreferrer">
              <Instagram size={19} /> @evoq.ai
            </a>
          </div>
        </div>
      </section>

      <section className="career-strip" aria-labelledby="previous-roles-title">
        <div className="career-intro">
          <BriefcaseBusiness size={20} />
          <div>
            <span>Performance history</span>
            <strong id="previous-roles-title">Past Work Experience / Previous Roles</strong>
          </div>
        </div>
        <div className="career-items">
          {previousRoles.map((item, index) => (
            <div className="career-role" key={item.company}>
              <span className="career-number">0{index + 1}</span>
              <div><strong>{item.role}</strong><span>{item.company}</span></div>
              {index < previousRoles.length - 1 && <ChevronRight size={18} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </section>

      <section className="section proof-section" id="proof">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Milestones, awards & proof</p>
            <h2>The moments behind<br />the momentum.</h2>
          </div>
          <p className="section-note">Select any card to view the full story.</p>
        </div>
        <div className="achievement-rail">
          {achievements.map((achievement) => (
            <button
              type="button"
              className="achievement-card"
              key={achievement.title}
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="achievement-image">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  style={{ objectPosition: achievement.position }}
                />
                <div className="achievement-overlay">
                  <span>{achievement.eyebrow}</span>
                  <strong>{achievement.title}</strong>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <p className="eyebrow">Ready for the next season?</p>
        <h2>Let's build your brand's<br /><span>biggest success story.</span></h2>
        <a className="button button-primary button-large" href="mailto:SOULAHMDZ@gmail.com?subject=Let's%20build%20the%20next%20season">
          Start a project <ArrowRight size={20} />
        </a>
        <div className="contact-links">
          <a href="mailto:SOULAHMDZ@gmail.com"><Mail size={17} /> Email</a>
          <a href="https://wa.me/918086300333" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
          <a href="https://instagram.com/soul.ahmd" target="_blank" rel="noreferrer"><Instagram size={17} /> @soul.ahmd</a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#top">SOUL<span>AHMD</span></a>
        <p>AI Video Creator & Digital Marketer · Kerala, India</p>
        <span>© {new Date().getFullYear()} Ahmed Sabith</span>
      </footer>

      {selectedReel && (
        <div
          className="video-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-lightbox-title"
          onClick={() => setSelectedReel(null)}
        >
          <div className="video-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <div className="video-lightbox-heading">
              <span>Now playing</span>
              <h2 id="video-lightbox-title">{selectedReel.title}</h2>
            </div>
            <button
              className="modal-close video-lightbox-close"
              type="button"
              aria-label="Close video"
              onClick={() => setSelectedReel(null)}
            >
              <X size={22} />
            </button>
            <div className="video-lightbox-player">
              <iframe
                src={selectedReel.playerUrl}
                title={`${selectedReel.title} Vimeo video`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {selectedAchievement && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={selectedAchievement.title} onClick={() => setSelectedAchievement(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close details" onClick={() => setSelectedAchievement(null)}><X size={22} /></button>
            <img src={selectedAchievement.image} alt={selectedAchievement.title} />
            <div className="modal-copy">
              <span>{selectedAchievement.eyebrow}</span>
              <h3>{selectedAchievement.title}</h3>
              <p>{selectedAchievement.detail}</p>
              <div className="verified"><Check size={15} /> Verified milestone</div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
