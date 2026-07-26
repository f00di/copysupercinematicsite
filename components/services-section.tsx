import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="section-intro">
        <p className="eyebrow">What We Do</p>
        <h2 id="services-title">
          Whole-home,
          <br />
          done right.
        </h2>
        <p className="section-deck">
          From one essential room to an entirely new home, every decision is coordinated
          through one exacting design-build process.
        </p>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <article className="service-item" key={service.title} tabIndex={0}>
            <p>{service.classification}</p>
            <h3>{service.title}</h3>
            <div className="service-detail">
              <p>{service.description}</p>
              <span aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
