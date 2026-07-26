import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-top">
        <p className="eyebrow">Start a Conversation</p>
        <h2 id="contact-title">
          Let’s build a home
          <br />
          that fits your life.
        </h2>
        <a className="button button-stone" href={`mailto:${site.email}`}>
          {site.primaryCta}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="contact-grid">
        <div>
          <p className="contact-label">Service Area</p>
          <p>{site.serviceArea}</p>
        </div>
        <address>
          <p className="contact-label">Studio</p>
          {site.addresses.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
        <div>
          <p className="contact-label">Hours</p>
          {site.hours.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div>
          <p className="contact-label">Contact</p>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  );
}
