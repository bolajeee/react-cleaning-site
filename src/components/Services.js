import React from "react";

function Services() {
  const services = [
    {
      id: 1,
      title: "Residential Cleaning",
      description:
        "Comprehensive home cleaning services tailored to your needs.",
      icon: "fa-home",
      image:
        "https://img.freepik.com/free-photo/vacuum-cleaner-tackling-heavily-soiled-floor_23-2151340103.jpg?semt=ais_hybrid",
      features: [
        "Deep Cleaning",
        "Regular Maintenance",
        "Window Cleaning",
        "Carpet Cleaning",
      ],
    },
    {
      id: 2,
      title: "Commercial Cleaning",
      description:
        "Professional cleaning solutions for businesses and offices.",
      icon: "fa-building",
      image:
        "https://img.freepik.com/free-photo/positive-afro-american-housewife-winks-eye-smiles-broadly-has-happy-mood_273609-50231.jpg?semt=ais_hybrid",
      features: [
        "Office Cleaning",
        "Floor Maintenance",
        "Restroom Sanitation",
        "Waste Management",
      ],
    },
    {
      id: 3,
      title: "Deep Cleaning",
      description:
        "Thorough deep cleaning services for a pristine environment.",
      icon: "fa-spray-can",
      image:
        "https://img.freepik.com/free-photo/cleaning-home-tools-background-with-lot-copy-space_1409-7602.jpg?semt=ais_hybrid",
      features: [
        "Disinfection",
        "Stain Removal",
        "Air Duct Cleaning",
        "Mold Remediation",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Professional cleaning solutions for every need</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-button">
                Get Quote
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
