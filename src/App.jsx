import { useEffect, useState } from 'react'
import { TEAM, ABOUT, PILLARS, MEMBERS } from './data.js'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function RadarHero() {
  return (
    <div className="radar" aria-hidden="true">
      <div className="radar__rings">
        <span /><span /><span /><span />
      </div>
      <div className="radar__cross">
        <span className="radar__h" />
        <span className="radar__v" />
      </div>
      <div className="radar__sweep" />
      <span className="blip blip--1" />
      <span className="blip blip--2" />
      <span className="blip blip--3" />
    </div>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="grid-bg" aria-hidden="true" />
      <RadarHero />
      <div className="hero__inner">
        <div className="hero__eyebrow">
          <span className="dot" />
          <span>{TEAM.hackathon}</span>
          <span className="hero__eyebrow-sep" />
          <span>{TEAM.location}</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__d4d">D4D</span>
        </h1>

        <p className="hero__codename">
          TEAM&nbsp;<strong>{TEAM.codename}</strong>
        </p>

        <p className="hero__tagline">{TEAM.tagline}</p>

        <div className="hero__meta">
          <span className="chip chip--live">{TEAM.track}</span>
          <span className="chip">{TEAM.date}</span>
          <a
            className="chip"
            href={`${import.meta.env.BASE_URL}d4d/`}
            style={{ textDecoration: 'none', borderColor: '#00e5a0', color: '#00e5a0' }}
          >
            D4D 행사 분석 →
          </a>
        </div>

        <a className="hero__scroll" href="#about">
          <span>scroll</span>
          <span className="hero__scroll-arrow">↓</span>
        </a>
      </div>
    </header>
  )
}

function About() {
  return (
    <section className="about" id="about" data-reveal>
      <div className="section-head">
        <span className="section-tag">00 — BRIEFING</span>
        <h2>What is D4D?</h2>
      </div>

      <div className="about__expand" aria-label="Deploy for Defense">
        {ABOUT.expand.map((word, i) => (
          <span className="about__word" key={word} style={{ '--i': i }}>
            <em>{word[0]}</em>
            {word.slice(1)}
          </span>
        ))}
      </div>

      <ul className="about__lines">
        {ABOUT.lines.map((line, i) => (
          <li key={i} style={{ '--i': i }}>{line}</li>
        ))}
      </ul>
    </section>
  )
}

function MemberCard({ m, idx }) {
  return (
    <article
      className="card"
      data-reveal
      style={{ '--accent': m.accent, '--i': idx }}
    >
      <div className="card__top">
        <div className="card__avatar">{m.initials}</div>
        <span className="card__badge">{m.badge}</span>
      </div>

      <h3 className="card__name">{m.initials}</h3>
      <p className="card__role">{m.role}</p>
      <p className="card__affil">{m.affil}</p>
      <p className="card__blurb">{m.blurb}</p>

      <ul className="card__tasks">
        {m.tasks.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  )
}

function Team() {
  return (
    <section className="team" id="team" data-reveal>
      <div className="section-head">
        <span className="section-tag">01 — ROSTER</span>
        <h2>다섯 명, 한 트랙에 최적</h2>
        <p>
          Product · Infra · AI · Data · Domain.
          <br />
          현장에서 0부터 시작하지 않으려고 미리 모였습니다.
        </p>
      </div>

      <div className="team__grid">
        {MEMBERS.map((m, i) => (
          <MemberCard key={m.initials} m={m} idx={i} />
        ))}
      </div>
    </section>
  )
}

function Architecture() {
  return (
    <section className="arch" id="arch" data-reveal>
      <div className="section-head">
        <span className="section-tag">02 — STACK</span>
        <h2>레이어로 나눠 부딪힌다</h2>
        <p>
          주제보다 역할과 레이어를 먼저 정렬했습니다.
          <br />
          현장에서는 자르고 합치기만.
        </p>
      </div>

      <div className="arch__flow">
        {PILLARS.map((p, i) => (
          <div className="pillar" key={p.layer} style={{ '--i': i }}>
            <div className="pillar__icon">{p.icon}</div>
            <div className="pillar__body">
              <h3>{p.layer}</h3>
              <p>{p.desc}</p>
            </div>
            {i < PILLARS.length - 1 && <span className="pillar__arrow" aria-hidden="true">↓</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__line" />
      <p className="footer__big">
        {TEAM.fullName} · {TEAM.codename}
      </p>
      <p className="footer__sub">
        {TEAM.hackathon} · {TEAM.location}
      </p>
      <p className="footer__credit">Built for Counter-UAS · Deploy for Defense</p>
      <p className="footer__credit" style={{ marginTop: '14px' }}>
        <a href={`${import.meta.env.BASE_URL}d4d/`} style={{ color: '#00e5a0', textDecoration: 'none' }}>
          D4D 행사 심층 분석 페이지 →
        </a>
      </p>
    </footer>
  )
}

export default function App() {
  useReveal()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <main className="app">
        <Hero />
        <About />
        <Team />
        <Architecture />
        <Footer />
      </main>
    </>
  )
}
