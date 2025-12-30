import { FaBrain, FaChartLine, FaClock, FaCheckCircle } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary px-6 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <span className="inline-block mb-4 text-sm font-semibold bg-white/20 px-4 py-1 rounded-full">
            AI-Powered Study Planner
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Plan Smarter. <br className="hidden md:block" />
            Study Better.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-10">
            AI Study Planner helps students organize their studies, manage time
            effectively, and stay consistent. Smart planning and progress
            tracking make learning focused and stress-free.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition">
              Get Started Free
            </button>
            <button className="border border-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="bg-surface py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-textbase">
          Our Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Our services help students plan tasks, track progress, and manage
          deadlines efficiently so they can focus more on learning.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          <ServiceCard
            icon={<FaBrain />}
            title="Smart Study Plans"
            desc="Create structured study schedules based on subjects, priorities, and available time to avoid last-minute pressure."
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Progress Tracking"
            desc="Track daily and weekly progress to understand performance, identify gaps, and stay motivated."
          />
          <ServiceCard
            icon={<FaClock />}
            title="Deadline Management"
            desc="Manage assignments and exams with clear deadlines and reminders so nothing important is missed."
          />
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-gray-100 py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-textbase">
          Why Choose Us
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Built for students, AI Study Planner focuses on simplicity,
          reliability, and clarity for effective learning.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
          <ServiceCard
            icon={<AiOutlineThunderbolt />}
            title="Simple & Easy"
            desc="A clean, intuitive interface that lets students start planning immediately without complexity."
          />
          <ServiceCard
            icon={<FaCheckCircle />}
            title="Reliable Planning"
            desc="Clear task visibility and structure help students stay confident and consistent."
          />
        </div>
      </section>

      {/* ===== OUR OBJECTIVES ===== */}
      <section className="bg-surface py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-textbase">
          Our Objectives
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          We aim to build discipline, reduce stress, and help students achieve
          better academic outcomes.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
          <ServiceCard
            icon={<MdOutlineSchool />}
            title="Build Discipline"
            desc="Encourage consistent study habits through structured and realistic planning."
          />
          <ServiceCard
            icon={<FaCheckCircle />}
            title="Reduce Stress"
            desc="Clear plans and progress visibility reduce confusion and exam anxiety."
          />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-primary py-24 text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to improve your study routine?
        </h2>
        <p className="max-w-xl mx-auto opacity-90 mb-8">
          Start planning smarter today and build habits that lead to long-term
          academic success.
        </p>
        <button className="bg-accent px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </>
  );
}

/* ===== Reusable Card ===== */
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-surface border-2 border-primary rounded-2xl p-8 shadow hover:-translate-y-2 hover:shadow-xl transition text-center">
      <div className="text-primary text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg text-textbase">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
