export default function Contact() {
  return (
    <section className="py-20 text-center px-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <form className="mt-8 max-w-md mx-auto flex flex-col gap-4">
        <input className="border p-3" placeholder="Your Name" />
        <input className="border p-3" placeholder="Your Email" />
        <textarea className="border p-3" placeholder="Your Message" />
        <button className="bg-indigo-600 text-white py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
