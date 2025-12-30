export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-100 to-white py-28 px-6 text-center">
      {/* Badge */}
      <span className="inline-block mb-4 text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1 rounded-full">
        AI-Powered Study Planner
      </span>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Plan Smarter.Study Better.
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
        AI Study Planner helps students organize study schedules, manage
        deadlines, and track progress with clarity. Build consistent habits and
        reduce stress with a smarter way to learn.
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
  );
}
