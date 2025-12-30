import { FaBrain, FaChartLine, FaClock, FaCheckCircle } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <h1>Plan Smarter. Study Better.</h1>
        <p>
          AI Study Planner helps students organize their studies, manage time better, and stay consistent. With clear planning and progress tracking, studying becomes simpler and less stressful.

        </p>
        <button className="cta-btn">Start Now</button>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-desc">
           Our services help students plan daily tasks, track progress, and manage deadlines easily, allowing them to focus more on learning and less on scheduling. </p>

          <div className="cards">
            <div className="card">
              <FaBrain className="icon" />
              <h3>Smart Study Plans</h3>
              <p>
                Create structured study plans based on subjects and available
                time. This helps students follow a clear routine and avoid
                last-minute pressure.
              </p>
            </div>

            <div className="card">
              <FaChartLine className="icon" />
              <h3>Progress Tracking</h3>
              <p>
                Track daily and weekly progress to understand performance and
                stay motivated throughout the learning journey.
              </p>
            </div>

            <div className="card">
              <FaClock className="icon" />
              <h3>Deadline Management</h3>
              <p>
                Manage assignments and exams with clear deadlines and reminders,
                ensuring nothing important is missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section light">
        <div className="container">
          <h2>Why Choose Us</h2>
          <p className="section-desc">
            AI Study Planner is built with students in mind. It focuses on
            simplicity, clarity, and reliability to support productive and
            stress-free learning.
          </p>

          <div className="cards">
            <div className="card">
              <AiOutlineThunderbolt className="icon" />
              <h3>Simple & Easy</h3>
              <p>
                Clean and intuitive design that allows students to start
                planning immediately without any learning curve.
              </p>
            </div>

            <div className="card">
              <FaCheckCircle className="icon" />
              <h3>Reliable Planning</h3>
              <p>
                Clear structure and task visibility help students stay confident
                and consistent with their study routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR OBJECTIVES ===== */}
      <section className="section">
        <div className="container">
          <h2>Our Objectives</h2>
          <p className="section-desc">
            Our objective is to improve the overall study experience by helping
            students stay disciplined, reduce stress, and achieve better
            academic outcomes.
          </p>

          <div className="cards">
            <div className="card">
              <MdOutlineSchool className="icon" />
              <h3>Build Study Discipline</h3>
              <p>
                Encourage consistent learning habits through structured and
                realistic study planning.
              </p>
            </div>

            <div className="card">
              <FaCheckCircle className="icon" />
              <h3>Reduce Study Stress</h3>
              <p>
                Clear plans and progress visibility help students feel more
                relaxed and confident before exams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXTRA SECTION ===== */}
      <section className="section soft">
        <div className="container">
          <h2>How We Help You Succeed</h2>
          <p className="section-desc">
            By combining smart planning, progress tracking, and deadline
            management, AI Study Planner helps students stay focused, motivated,
            and in control of their academic goals.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <h2>Ready to improve your study routine?</h2>
        <p>
          Start planning smarter today and build habits that lead to long-term
          academic success.
        </p>
        <button className="cta-btn">Get Started</button>
      </section>
    </>
  );
}
