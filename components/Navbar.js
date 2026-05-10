import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">
            KALNET
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>

        {/* CTA */}
        <a
          href="https://calendly.com/keshavacharythummanapelly/30min"
          target="_blank"
          className="bg-teal-600 text-white px-4 py-2 rounded-lg"
        >
          Book Demo
        </a>

      </div>
    </header>
  );
}