import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

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

      {/* ===== CONTACT DETAILS + FORM ===== */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">

          {/* CONTACT INFO */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-textbase mb-6">
              Contact Information
            </h2>

            <p className="text-gray-600 mb-8">
              Have questions or want to collaborate? Reach out to us anytime.
            </p>

            <div className="space-y-6">
              <InfoItem
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+91 98765 43210"
              />
              <InfoItem
                icon={<FaEnvelope />}
                title="Email"
                value="support@aistudyplanner.com"
              />
              <InfoItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Bangalore, India"
              />
            </div>
          </div>

          {/* CONTACT FORM */}
          <div
            className="bg-white rounded-2xl p-8 shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-semibold text-textbase mb-6">
              Send us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-full font-semibold text-lg hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-6xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold text-textbase text-center mb-8">
            Our Location
          </h2>
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="about-location"
              src="https://www.google.com/maps?q=Bangalore%20India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
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

function InfoItem({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary text-white p-3 rounded-full text-lg">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-textbase">{title}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
