export default function Hero() {
  return (
    <section className="py-28 px-6 text-center bg-gray-50">

      <h2 className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
        KALNET
      </h2>

      <h1 className="mt-4 text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
        Digital Backbone for Schools and Colleges
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Manage students, approvals, and administration in one powerful platform built for Indian institutions.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

        <a
          href="https://calendly.com/keshavacharythummanapelly/30min"
          target="_blank"
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md transition"
        >
          Book a Demo
        </a>

        <button className="border border-gray-300 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg">
          View Pricing
        </button>

      </div>

    </section>
  );
}