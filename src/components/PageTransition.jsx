export default function Services() {
  const services = [
    "External Audit",
    "Internal Audit",
    "Tax Advisory",
    "Corporate Finance",
    "Risk Management",
    "Governance Advisory"
  ];

  return (
    <section className="section section-soft">
      <h2 className="heading text-primary">Our Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {services.map((s, i) => (
          <div key={i} className="curved">
            <h3 className="text-xl font-bold mb-3">{s}</h3>
            <p>
              Strategic solutions tailored to your business objectives and compliance needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
