import React from 'react';

const ValueProposition = () => {
  const values = [
    {
      title: "Peace of Mind",
      desc: "We provide peace of mind by ensuring your finances are accurate , compliant , and well-managed, while giving you clear insight and proactive guidance to make confident business decisions."
    },
    {
      title: "Always on time",
      desc: "We value your time, so we won’t waste it; we deliver exceptional work timeously."
    },
    {
      title: "Experts in our field",
      desc: "We are experts in accounting, taxation, and business advisory services, committed to staying updated with the latest industry trends and regulations to provide you with the best possible advice. We are grounded in deep professional knowledge and practical experience."
    },
    {
      title: "Working Together",
      desc: "Our culture of collaboration and knowledge-sharing is not limited to internal work: we believe in enhancing our clients’ knowledge too."
    }
  ];

  return (
    <section className="value-proposition">
      <h2>Our Value Proposition</h2>
      <div className="value-cards">
        {values.map((item, index) => (
          <div key={index} className="value-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProposition;