import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/main"
          className="flex items-center gap-2 text-red-600 font-bold text-xl"
        >
          <img src="./vite.svg" alt="logo" className="w-8 h-8" />
          BloodCare
        </a>

        {/* Burger button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links (desktop) */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <NavLink href="/main" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/donor-form" label="Donate" />
          <NavLink href="/request-form" label="Request" />
          <NavLink href="/contact" label="Contact" />
        </div>
      </div>

      {/* Nav Links (mobile) */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2 bg-white text-gray-700 text-sm  font-medium">
          <NavLink href="/main" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/donor-form" label="Donate" />
          <NavLink href="/request-form" label="Request" />
          <NavLink href="/contact" label="Contact" />
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label }) {
  const isActive = window.location.pathname === href;

  return (
    <a
      href={href}
      className={`w-max md:w-auto m-auto hover:text-red-600 border-b-2 transition-all duration-100 ${
        isActive ? "border-b-red-600 text-red-600" : "border-b-transparent"
      }`}
    >
      {label}
    </a>
  );
}
