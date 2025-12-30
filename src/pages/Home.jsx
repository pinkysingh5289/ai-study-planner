import { FaBrain, FaChartLine, FaClock, FaCheckCircle } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

export default function Home() {
  return (
    <>
      {/* ===== HERO (IMPROVED) ===== */}
      <section className="bg-gradient-to-b from-indigo-100 to-white py-28 text-center px-6">
        {/* Badge */}
        <span className="inline-block mb-4 text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1 rounded-full">
          AI-Powered Study Planner
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Plan Smarter. <br className="hidden md:block" />
          Study Better.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          AI Study Planner helps students organize their studies, manage time
          effectively, and stay consistent. With smart planning and progress
          tracking, learning becomes focused and stress-free.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Our Services</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Our services are designed to support students throughout their learning
          journey by simplifying planning, tracking progress, and managing
          deadlines efficiently.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <ServiceCard
            icon={<FaBrain />}
            title="Smart Study Plans"
            desc="Create structured study schedules based on subjects, priorities, and available time. This helps students follow a clear routine and avoid last-minute exam pressure."
          />
          <ServiceCard
            icon={<FaChartLine />}
            title="Progress Tracking"
            desc="Track daily and weekly progress to understand performance and identify improvement areas. This keeps students motivated and consistent."
          />
          <ServiceCard
            icon={<FaClock />}
            title="Deadline Management"
            desc="Manage assignments and exams with clear deadlines and reminders so important tasks are never missed."
          />
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Why Choose Us
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          AI Study Planner is built with students in mind, focusing on simplicity,
          reliability, and clarity for effective learning.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <ServiceCard
            icon={<AiOutlineThunderbolt />}
            title="Simple & Easy"
            desc="A clean and intuitive interface that lets students start planning immediately without complexity."
          />
          <ServiceCard
            icon={<FaCheckCircle />}
            title="Reliable Planning"
            desc="Clear task visibility and structure help students stay confident and consistent in their routine."
          />
        </div>
      </section>

      {/* ===== OUR OBJECTIVES ===== */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Our Objectives
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Our objectives focus on building discipline, reducing stress, and
          helping students achieve better academic outcomes.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
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
      <section className="bg-indigo-600 py-20 text-center text-white px-6">
        <h2 className="text-3xl font-semibold">
          Ready to improve your study routine?
        </h2>
        <p className="mt-4 max-w-xl mx-auto">
          Start planning smarter today and build habits that lead to long-term
          academic success.
        </p>
        <button className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold">
          Get Started
        </button>
      </section>
    </>
  );
}

/* Reusable Card Component */
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <div className="text-indigo-600 text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
