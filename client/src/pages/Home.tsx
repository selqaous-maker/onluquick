import {
  ArrowUpRight,
  Check,
  CircleArrowOutUpRight,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MoveRight,
  PackageCheck,
  Route,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const EMAIL_ADDRESS = "owner@onlyquick.com";
const EMAIL_SUBJECT = "OnlyQuick.com acquisition";
const EMAIL_CTA = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;
const SECURE_CTA = "https://unstoppabledomains.com/d/onlyquick.com";

const whyCards = [
  {
    title: "Short & memorable",
    body: "A clean two-word .com that is easy to say, remember and type.",
    icon: Zap,
  },
  {
    title: "Speed is built into the name",
    body: "OnlyQuick immediately signals fast service, convenience and instant access.",
    icon: Sparkles,
  },
  {
    title: "Global & flexible",
    body: "Not tied to one country, city or product. Use it across markets and categories.",
    icon: Globe2,
  },
];

const useCases = [
  {
    title: "Quick commerce",
    body: "Grocery, food and everyday products delivered in minutes.",
    icon: PackageCheck,
  },
  {
    title: "Express delivery",
    body: "Same-day, rapid and time-sensitive delivery propositions.",
    icon: MoveRight,
  },
  {
    title: "Last-mile logistics",
    body: "Courier, fulfillment, route and delivery technology businesses.",
    icon: Route,
  },
  {
    title: "On-demand services",
    body: "Products and services available exactly when customers need them.",
    icon: CircleArrowOutUpRight,
  },
];

const strategicWays = [
  {
    title: "Campaign destination",
    body: "Launch a memorable campaign around speed, delivery or instant access.",
  },
  {
    title: "Product or service brand",
    body: "Create a dedicated name for an express or premium-speed offer.",
  },
  {
    title: "Market expansion",
    body: "Use a globally understandable name when entering a new market.",
  },
  {
    title: "Strategic redirect",
    body: "Point OnlyQuick.com to your existing brand and reinforce your speed positioning.",
  },
];

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="OnlyQuick.com home">
      <span className="brand-mark" aria-hidden="true">
        <img src="/onlyquick-mark.svg" alt="" />
        <span />
      </span>
      <span className="brand-name">
        OnlyQuick<span>.com</span>
      </span>
    </a>
  );
}

function CTAButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`cta-row ${compact ? "cta-row--compact" : ""}`}>
      <a className="button button--primary" href={EMAIL_CTA}>
        {compact ? "Contact owner" : "Discuss acquisition"}
        <ArrowUpRight size={16} strokeWidth={2.2} />
      </a>
      <a
        className="button button--secondary"
        href={SECURE_CTA}
        target="_blank"
        rel="noreferrer"
      >
        <span>{compact ? "Secure purchase" : "Secure purchase option"}</span>
        <CircleArrowOutUpRight size={16} strokeWidth={2.2} />
      </a>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav
            className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
            aria-label="Primary navigation"
          >
            <a href="#why" onClick={() => setMenuOpen(false)}>
              Why it works
            </a>
            <a href="#use-cases" onClick={() => setMenuOpen(false)}>
              Use cases
            </a>
            <a href="#acquisition" onClick={() => setMenuOpen(false)}>
              Acquisition
            </a>
          </nav>
          <a className="header-cta" href={EMAIL_CTA}>
            Contact owner <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="eyebrow-line" /> Available for acquisition
            </div>
            <h1 id="hero-title">
              <em>OnlyQuick.com</em>
              <br />
              A premium .COM built around speed.
            </h1>
            <p className="hero-lede">
              A short, memorable domain for quick commerce, express delivery,
              logistics and on-demand services.
            </p>
            <div className="hero-price">
              <span>One-time acquisition price</span>
              <strong>$4,888</strong>
            </div>
            <CTAButtons />
            <div className="trust-line">
              <Check size={14} /> Direct owner sale · Domain only · Secure transfer
            </div>
          </div>

          <div className="hero-art reveal reveal--late" aria-label="OnlyQuick.com visual">
            <img
              src="/assets/onlyquick-hero.webp"
              alt="Abstract electric route line moving across a dark field"
            />
            <div className="hero-domain">
              ONLY<span>QUICK</span><b>.COM</b>
            </div>
            <div className="hero-art-caption">
              <span>Available now</span>
              <span>$4,888</span>
            </div>
          </div>

          <div className="category-strip" aria-label="Relevant categories">
            <span><i>01</i>Quick Commerce</span>
            <span><i>02</i>Express Delivery</span>
            <span><i>03</i>Logistics</span>
            <span><i>04</i>On-Demand Services</span>
          </div>
        </section>

        <section className="section section--why" id="why" aria-labelledby="why-title">
          <div className="section-intro">
            <div className="section-number">01 <span>/</span> WHY IT WORKS</div>
            <h2 id="why-title">
              A name customers understand <span>instantly.</span>
            </h2>
            <p>
              OnlyQuick.com makes the promise of speed clear before a customer reads another word.
            </p>
          </div>

          <div className="why-grid">
            {whyCards.map(({ title, body, icon: Icon }, index) => (
              <article className="line-card" key={title}>
                <div className="card-top">
                  <span>0{index + 1}</span>
                  <Icon size={20} strokeWidth={1.4} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--use" id="use-cases" aria-labelledby="use-title">
          <div className="section-intro section-intro--split">
            <div>
              <div className="section-number">02 <span>/</span> USE CASES</div>
              <h2 id="use-title">
                Built for businesses where <span>every minute matters.</span>
              </h2>
            </div>
            <p>
              Use the domain as a campaign, product, category brand, market-entry asset or strategic redirect.
            </p>
          </div>

          <div className="use-grid">
            {useCases.map(({ title, body, icon: Icon }, index) => (
              <article className="use-card" key={title}>
                <div className="use-card-number">0{index + 1}</div>
                <Icon size={26} strokeWidth={1.25} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--strategic" aria-labelledby="strategic-title">
          <div className="strategic-visual" aria-label="OnlyQuick.com strategic use visual">
            <div className="route-diagram" aria-hidden="true">
              <span className="route-line route-line--one" />
              <span className="route-line route-line--two" />
              <span className="route-line route-line--three" />
              <i className="waypoint waypoint--one" />
              <i className="waypoint waypoint--two" />
              <i className="waypoint waypoint--three" />
            </div>
            <span>OnlyQuick.com</span>
          </div>

          <div className="strategic-content">
            <div className="section-number">03 <span>/</span> HOW TO USE IT</div>
            <h2 id="strategic-title">
              No rebrand required. <span>Add it to what already works.</span>
            </h2>
            <p className="strategic-note">
              OnlyQuick.com can sit alongside an established company brand and give a speed-focused initiative its own memorable destination.
            </p>
            <div className="strategy-list">
              {strategicWays.map(({ title, body }, index) => (
                <div className="strategy-item" key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="acquisition-band" id="acquisition" aria-labelledby="acquisition-title">
          <div className="acquisition-text">
            <div className="section-number">04 <span>/</span> ACQUISITION</div>
            <h2 id="acquisition-title">
              Acquire <span>OnlyQuick.com</span>
            </h2>
            <p>
              One clear price, direct owner contact and a secure purchase path.
            </p>
          </div>

          <div className="acquisition-card">
            <div className="acquisition-card-top">
              <span>DOMAIN ASSET</span>
              <Route size={19} />
            </div>
            <div className="acquisition-domain">
              ONLYQUICK<span>.COM</span>
            </div>
            <div className="acquisition-price">
              <span>One-time acquisition price</span>
              <strong>$4,888</strong>
            </div>
            <div className="trust-points">
              <span><Check size={14} /> Direct sale from the current owner</span>
              <span><Check size={14} /> Domain name and transfer included</span>
              <span><Check size={14} /> Secure checkout available through Unstoppable Domains</span>
            </div>
            <CTAButtons />
            <a className="contact-card" href={EMAIL_CTA}>
              <Mail size={20} />
              <span>Questions before purchasing?</span>
              <strong>{EMAIL_ADDRESS}</strong>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Logo />
        <div className="footer-meta">
          <span>Direct owner sale</span>
          <a href={EMAIL_CTA}>{EMAIL_ADDRESS}</a>
        </div>
        <a className="back-top" href="#top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}
