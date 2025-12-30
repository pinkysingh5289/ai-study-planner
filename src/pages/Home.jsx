import { FaBrain, FaChartLine, FaClock, FaCheckCircle } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Plan Smarter. Study Better.</h1>
        <p>
          An AI-powered study planner that helps students organize tasks,
          manage deadlines, and study more effectively.
        </p>
        <button className="cta-btn">Start Now</button>
      </section>

      {/* Our Services */}
      <section className="section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-desc">
            Everything you need to stay organized and consistent in your studies.
          </p>

          <div className="cards">
            <div className="card">
              <FaBrain className="icon" />
              <h3>Smart Study Plans</h3>
              <p>
                Personalized study plans created based on your subjects and goals.
              </p>
            </div>

            <div className="card">
              <FaChartLine className="icon" />
              <h3>Progress Tracking</h3>
              <p>
                Track daily progress to understand performance and stay motivated.
              </p>
            </div>

            <div className="card">
              <FaClock className="icon" />
              <h3>Deadline Management</h3>
              <p>
                Clear task deadlines and reminders so nothing is missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section light">
        <div className="container">
          <h2>Why Choose Us</h2>

          <div className="cards">
            <div className="card">
              <AiOutlineThunderbolt className="icon" />
              <h3>Simple & Fast</h3>
              <p>
                Easy-to-use interface designed especially for students.
              </p>
            </div>

            <div className="card">
              <FaCheckCircle className="icon" />
              <h3>Reliable Planning</h3>
              <p>
                Structured planning helps reduce stress and confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="section">
        <div className="container">
          <h2>Our Objectives</h2>

          <div className="cards">
            <div className="card">
              <MdOutlineSchool className="icon" />
              <h3>Improve Study Discipline</h3>
              <p>
                Encourage consistent study habits and better time management.
              </p>
            </div>

            <div className="card">
              <FaCheckCircle className="icon" />
              <h3>Reduce Study Stress</h3>
              <p>
                Clear planning removes last-minute pressure and anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section */}
      <section className="section light">
        <div className="container">
          <h2>How We Help You Succeed</h2>
          <p className="section-desc">
            By combining smart planning, progress tracking, and reminders,
            we help students stay focused, confident, and in control.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to upgrade your study routine?</h2>
        <p>Start planning smarter and achieve your academic goals.</p>
        <button className="cta-btn">Get Started</button>
      </section>
    </>
  );
}
