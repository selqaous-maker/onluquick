/* Signal & Speed: dark editorial layout, asymmetric runway, narrow palette, precise motion. */
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
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

const EMAIL_CTA = "mailto:owner@onlyquick.com?subject=OnlyQuick.com%20acquisition";
const SECURE_CTA = "https://unstoppabledomains.com/d/onlyquick.com";

const categories = ["Quick Commerce", "Express Delivery", "Logistics", "On-Demand Services"];

const whyCards = [
  { number: "01", title: "Short and memorable", body: "OnlyQuick.com is concise, easy to remember and simple to type.", icon: Zap },
  { number: "02", title: "Clear meaning", body: "The words “Only” and “Quick” create a direct association with speed, focus and convenience.", icon: Sparkles },
  { number: "03", title: "Global flexibility", body: "The domain works across markets and is not tied to one country or city.", icon: Globe2 },
  { number: "04", title: "Built for growth", body: "Use it for a campaign, product, new market, category brand or strategic redirect without changing the company’s main brand.", icon: Layers3 },
];

const useCases = [
  { title: "Quick commerce", body: "Grocery, food and everyday products delivered in minutes.", icon: PackageCheck },
  { title: "Express delivery", body: "Same-day, rapid and time-sensitive delivery services.", icon: MoveRight },
  { title: "Last-mile logistics", body: "Courier, fulfillment, route optimization and delivery technology.", icon: Route },
  { title: "On-demand services", body: "Services, products and experiences available exactly when customers need them.", icon: CircleArrowOutUpRight },
];

const strategicWays = [
  { tag: "01", title: "Campaign destination", body: "Launch a memorable campaign around fast delivery or instant access." },
  { tag: "02", title: "Product or service brand", body: "Create a dedicated brand for an express or premium-speed offering." },
  { tag: "03", title: "International expansion", body: "Use a globally understandable name when entering a new market." },
  { tag: "04", title: "Strategic redirect", body: "Redirect the domain to an existing company while reinforcing its speed positioning." },
];

const faqs = [
  ["Why is OnlyQuick.com relevant to delivery and commerce companies?", "Because the name communicates speed, convenience and immediate access."],
  ["Can the domain be used for a campaign instead of a full rebrand?", "Yes. It can support a campaign, product, category brand, new market or redirect."],
  ["Is the price negotiable?", "The listed acquisition price is $4,888. Serious acquisition discussions can be handled directly with the owner."],
  ["How do I start?", "Send an inquiry to owner@onlyquick.com or use the secure purchase option."],
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="brand" aria-label="OnlyQuick.com home">
      <span className="brand-mark" aria-hidden="true"><img src="/onlyquick-mark.svg" alt="" /><span /></span>
      {!compact && <span className="brand-name">OnlyQuick<span>.com</span></span>}
    </a>
  );
}

function CTAButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`cta-row ${compact ? "cta-row--compact" : ""}`}>
      <a className="button button--primary" href={EMAIL_CTA}>
        {compact ? "Request details" : "Request acquisition details"}
        <ArrowUpRight size={16} strokeWidth={2.2} />
      </a>
      <a className="button button--secondary" href={SECURE_CTA} target="_blank" rel="noreferrer">
        <span>{compact ? "Secure purchase" : "View secure purchase option"}</span>
        <CircleArrowOutUpRight size={16} strokeWidth={2.2} />
      </a>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Primary navigation">
            <a href="#why" onClick={() => setMenuOpen(false)}>Why OnlyQuick</a>
            <a href="#use-cases" onClick={() => setMenuOpen(false)}>Use cases</a>
            <a href="#acquisition" onClick={() => setMenuOpen(false)}>Acquisition</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </nav>
          <a className="header-cta" href={EMAIL_CTA}>Request details <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> Strategic digital asset <span className="eyebrow-index">/ 001</span></div>
            <h1 id="hero-title">A premium <em>.COM</em> domain for businesses built around speed.</h1>
            <p className="hero-lede">OnlyQuick.com is a short, memorable and globally usable domain for quick commerce, express delivery, logistics and on-demand services.</p>
            <div className="hero-price"><span>One-time acquisition price</span><strong>$4,888</strong></div>
            <CTAButtons />
            <div className="trust-line"><Check size={14} /> Direct owner sale. Secure transfer available.</div>
          </div>
          <div className="hero-art reveal reveal--late" aria-label="Abstract route map visual">
            <img src="/assets/onlyquick-hero.webp" alt="Abstract electric route line moving across a dark field" />
            <div className="hero-domain">ONLY<span>QUICK</span><b>.COM</b></div>
            <div className="hero-art-caption"><span>Available now</span><span>Route / 01</span></div>
          </div>
          <div className="category-strip" aria-label="Relevant categories">
            {categories.map((category, index) => <span key={category}><i>0{index + 1}</i>{category}</span>)}
          </div>
        </section>

        <section className="section section--why" id="why" aria-labelledby="why-title">
          <div className="section-intro">
            <div className="section-number">02 <span>/</span> WHY THE NAME WORKS</div>
            <h2 id="why-title">A name that communicates speed <span>instantly.</span></h2>
            <p>The right domain can make an emerging offer feel clear before a customer reads another word.</p>
          </div>
          <div className="why-grid">
            {whyCards.map(({ number, title, body, icon: Icon }) => (
              <article className="line-card" key={title}>
                <div className="card-top"><span>{number}</span><Icon size={20} strokeWidth={1.4} /></div>
                <h3>{title}</h3><p>{body}</p><ArrowDownRight className="card-arrow" size={18} />
              </article>
            ))}
          </div>
        </section>

        <section className="section section--use" id="use-cases" aria-labelledby="use-title">
          <div className="section-intro section-intro--split">
            <div><div className="section-number">03 <span>/</span> FIT &amp; FUNCTION</div><h2 id="use-title">Made for businesses where <span>every minute matters.</span></h2></div>
            <p>OnlyQuick.com is built for companies delivering products, services or experiences faster.</p>
          </div>
          <div className="use-grid">
            {useCases.map(({ title, body, icon: Icon }, index) => (
              <article className="use-card" key={title}><div className="use-card-number">0{index + 1}</div><Icon size={26} strokeWidth={1.25} /><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="section section--strategic" aria-labelledby="strategic-title">
          <div className="strategic-visual" aria-label="Abstract route diagram visual"><div className="route-diagram" aria-hidden="true"><span className="route-line route-line--one" /><span className="route-line route-line--two" /><span className="route-line route-line--three" /><i className="waypoint waypoint--one" /><i className="waypoint waypoint--two" /><i className="waypoint waypoint--three" /></div><span>OnlyQuick.com / 04</span></div>
          <div className="strategic-content"><div className="section-number">04 <span>/</span> STRATEGIC USE</div><h2 id="strategic-title">One domain. <span>Several ways in.</span></h2><p className="strategic-note">OnlyQuick.com does not require a full company rebrand. It can work as a focused campaign, product, market-entry asset or strategic redirect.</p>
            <div className="strategy-list">{strategicWays.map(({ tag, title, body }) => <div className="strategy-item" key={title}><span>{tag}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight size={17} /></div>)}</div>
          </div>
        </section>

        <section className="acquisition-band" id="acquisition" aria-labelledby="acquisition-title">
          <div className="acquisition-text"><div className="section-number">05 <span>/</span> ACQUISITION</div><h2 id="acquisition-title">Acquire a name built for the next generation of <span>fast commerce.</span></h2><p>Clear terms, direct contact, and a focused purchase path.</p></div>
          <div className="acquisition-card"><div className="acquisition-card-top"><span>DOMAIN ASSET</span><Route size={19} /></div><div className="acquisition-domain">ONLYQUICK<span>.COM</span></div><div className="acquisition-price"><span>One-time acquisition price</span><strong>$4,888</strong></div><div className="trust-points"><span><Check size={14} /> Direct sale from the current owner</span><span><Check size={14} /> Secure checkout and transfer available through Unstoppable Domains</span><span><Check size={14} /> Clear domain-only acquisition with no hidden claims</span></div><CTAButtons /></div>
        </section>

        <section className="section section--trust" aria-labelledby="trust-title">
          <div className="section-intro"><div className="section-number">06 <span>/</span> TRANSPARENCY &amp; TRUST</div><h2 id="trust-title">Clear terms. <span>Simple transfer.</span></h2><p>A straightforward domain-name acquisition, without the noise.</p></div>
          <div className="terms-grid"><div className="terms-list"><div><dt>What is included?</dt><dd>The OnlyQuick.com domain name and its transfer to the buyer.</dd></div><div><dt>Is this a full company acquisition?</dt><dd>No. This is a domain-name acquisition only.</dd></div><div><dt>Does the sale include a trademark, business, traffic or revenue?</dt><dd>No. The sale includes the domain name only.</dd></div><div><dt>How is the transfer completed?</dt><dd>The buyer can complete the transaction through a secure domain marketplace or an agreed escrow and transfer process.</dd></div></div><a className="contact-card" href={EMAIL_CTA}><Mail size={20} /><span>Questions about the asset?</span><strong>owner@onlyquick.com</strong><ArrowUpRight size={17} /></a></div>
        </section>

        <section className="section section--faq" id="faq" aria-labelledby="faq-title">
          <div className="section-intro"><div className="section-number">07 <span>/</span> FAQ</div><h2 id="faq-title">The details, <span>plainly.</span></h2></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={19} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div>
        </section>

        <section className="final-cta" aria-labelledby="final-title"><div className="final-route" aria-hidden="true"><span /><span /><span /></div><div className="final-cta-content"><div className="section-number">08 <span>/</span> NEXT MOVE</div><h2 id="final-title">Own the name behind a <span>faster customer experience.</span></h2><p>OnlyQuick.com is available for acquisition by a company building around speed, convenience and instant access.</p><CTAButtons /></div></section>
      </main>

      <footer className="site-footer"><Logo /><div className="footer-meta"><span>Direct owner sale</span><a href={EMAIL_CTA}>owner@onlyquick.com</a></div><a className="back-top" href="#top">Back to top <ArrowUpRight size={15} /></a></footer>
    </div>
  );
}
