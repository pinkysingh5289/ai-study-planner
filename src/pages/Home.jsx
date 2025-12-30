export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Plan Smarter. Study Better.</h1>
        <p>AI-powered planner to organize your studies efficiently.</p>
        <button className="cta-btn">Start Now</button>
      </section>

{/* Our Services */}
<section className="section">
  <div className="container">
    <h2>Our Services</h2>

    <div className="cards">
      <div className="card">Smart Study Plans</div>
      <div className="card">Progress Tracking</div>
      <div className="card">Deadline Management</div>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="section light">
        <h2>Why Choose Us</h2>
        <p>We simplify learning with AI-driven planning and easy tracking.</p>
      </section>

      {/* Our Objectives */}
      <section className="section">
        <h2>Our Objectives</h2>
        <ul>
          <li>Reduce study stress</li>
          <li>Improve productivity</li>
          <li>Help students stay consistent</li>
        </ul>
      </section>

      {/* Extra Section (as you asked 😄) */}
      <section className="section light">
        <h2>How We Help You Succeed</h2>
        <p>
          By combining smart planning, reminders, and progress insights,
          we help you stay focused and confident.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to upgrade your study routine?</h2>
        <button className="cta-btn">Get Started</button>
      </section>
    </>
  );
}
