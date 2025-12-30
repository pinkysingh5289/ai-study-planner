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
          AI Study Planner is designed to help students manage their academic
          workload in a structured and stress-free manner. By organizing tasks,
          setting priorities, and tracking progress, it ensures that learning
          becomes consistent rather than overwhelming. The platform focuses on
          improving productivity while maintaining a healthy study routine.
        </p>
        <button className="cta-btn">Start Now</button>
      </section>

      {/* Our Services */}
      <section className="section">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-desc">
            Our services are built to support students throughout their learning
            journey. From planning daily study tasks to monitoring long-term
            progress, each feature is designed to simplify complex schedules.
            The goal is to help students focus on learning instead of worrying
            about deadlines and missed tasks.
          </p>

          <div className="cards">
            <div className="card">
              <FaBrain className="icon" />
              <h3>Smart Study Plans</h3>
              <p>
                This feature helps students create well-structured study plans
                based on subjects, priorities, and available time. Instead of
                random preparation, learners get a clear roadmap for what to
                study and when. It promotes consistency and avoids last-minute
                pressure before exams.
              </p>
            </div>

            <div className="card">
              <FaChartLine className="icon" />
              <h3>Progress Tracking</h3>
              <p>
                Progress tracking allows students to visualize how much they
                have completed and what still needs attention. By regularly
                reviewing progress, students can identify weak areas early.
                This builds motivation and encourages steady improvement over
                time.
              </p>
            </div>

            <div className="card">
              <FaClock className="icon" />
              <h3>Deadline Management</h3>
              <p>
                Managing deadlines becomes easier with clear task timelines and
                reminders. Students are less likely to miss important
                submissions or exams. This feature helps reduce anxiety by
                keeping everything organized in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section light">
        <div className="container">
          <h2>Why Choose Us</h2>
          <p className="section-desc">
            AI Study Planner focuses on simplicity, reliability, and student
            needs. Unlike traditional planners, it emphasizes clarity and ease
            of use. The platform is designed to adapt to different study styles
            and academic goals, making it suitable for a wide range of learners.
          </p>

          <div className="cards">
            <div className="card">
              <AiOutlineThunderbolt className="icon" />
              <h3>Simple & Fast</h3>
              <p>
                The interface is designed to be intuitive so students can start
                using it immediately without any learning curve. Quick setup
                and easy navigation ensure that time is spent on studying, not
                figuring out the tool.
              </p>
            </div>

            <div className="card">
              <FaCheckCircle className="icon" />
              <h3>Reliable Planning</h3>
              <p>
                Reliable planning helps students stay confident about their
                preparation. With a clear overview of tasks and goals, learners
                can trust the system to guide their daily study routine and
                reduce uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="section">
        <div className="container">
          <h2>Our Objectives</h2>
          <p className="section-desc">
            Our objectives are centered around improving the overall study
            experience for students. We aim to create a system that supports
            disciplined learning, reduces stress, and builds confidence. Each
            objective focuses on long-term academic growth rather than short-
            term results.
          </p>

          <div className="cards">
            <div className="card">
              <MdOutlineSchool className="icon" />
              <h3>Improve Study Discipline</h3>
              <p>
                By encouraging structured planning and daily consistency, this
                objective helps students develop strong study habits. Over time,
                disciplined learning leads to better understanding and improved
                academic performance.
              </p>
            </div>

            <div className="card">
              <FaCheckCircle className="icon" />
              <h3>Reduce Study Stress</h3>
              <p>
                Clear planning and progress visibility reduce confusion and
                panic before exams. When students know what to study and when,
                they feel more relaxed and confident in their preparation.
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
            Success in academics requires consistency, clarity, and motivation.
            AI Study Planner combines smart planning, progress monitoring, and
            reminders to support students at every step. By reducing confusion
            and improving focus, it helps learners stay confident and achieve
            their goals effectively.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to upgrade your study routine?</h2>
        <p>
          Take control of your studies with structured planning and clear goals.
          Start building productive habits today and move closer to academic
          success with confidence.
        </p>
        <button className="cta-btn">Get Started</button>
      </section>
    </>
  );
}
