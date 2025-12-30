import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <>
      {/* ===== ABOUT HERO ===== */}
      <section className="bg-gradient-to-br from-primary to-secondary py-24 px-6 text-center text-white">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          About AI Study Planner
        </h1>
        <p
          className="max-w-2xl mx-auto opacity-90 text-lg"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Empowering students to plan smarter, stay consistent, and achieve
          academic success with clarity and confidence.
        </p>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-textbase mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              AI Study Planner was built to help students overcome poor planning,
              missed deadlines, and study-related stress. We believe that
              consistent and structured learning leads to better results.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our platform simplifies study planning by helping students
              organize tasks, track progress, and manage time effectively,
              allowing them to focus on learning rather than worrying.
            </p>

            <ul className="space-y-3">
              <Feature text="Smart and structured study planning" />
              <Feature text="Improved focus and productivity" />
              <Feature text="Reduced stress before exams" />
              <Feature text="Clear progress tracking" />
            </ul>
          </div>

          {/* RIGHT INFO CARDS */}
          <div className="grid gap-6" data-aos="fade-left">
            <InfoCard title="Who We Serve" value="Students & Learners" />
            <InfoCard title="Core Values" value="Clarity • Discipline • Growth" />
            <InfoCard title="Our Goal" value="Better Academic Outcomes" />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-primary py-24 text-center text-white px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
        >
          Start Planning Smarter Today
        </h2>
        <p
          className="max-w-xl mx-auto opacity-90 mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Join thousands of students who are improving productivity and reducing
          stress with AI Study Planner.
        </p>
        <button
          className="bg-accent px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Get Started
        </button>
      </section>
    </>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

function Feature({ text }) {
  return (
    <li className="flex items-center gap-3">
      <FaCheckCircle className="text-primary" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-white border-2 border-primary rounded-xl p-6 shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-lg font-semibold text-textbase">{value}</p>
    </div>
  );
}
