import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'
import { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [q, setQ] = useState("");

    const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm md:text-base transition-transform duration-300 hover:scale-[1.25] ${
      isActive
        ? "text-gray-900 bg-blue-500 text-white rounded-[5rem]"
        : "text-gray-700 hover:text-gray-900"
    }`;

    const onSearch = (e) => {
        e.preventDefault();
        // Handle the search logic here
    }


  return (
    <>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-900 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Zestate"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
              Z
            </span>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Z<span className="text-gray-800">estate</span>
            </span>
          </Link>

          {/* Center: Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-6 whitespace-nowrap">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/buy" className={navLinkClass}>
              Buy
            </NavLink>
            <NavLink to="/rent" className={navLinkClass}>
              Rent
            </NavLink>
            <NavLink to="/sell" className={navLinkClass}>
              Sell
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right: Search + Sign In (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={onSearch} className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search City, property type, budget..."
                className="w-56 lg:w-72 rounded-full border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-blue-500"
              />
            </form>
            <Link
              to="/signin"
              className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:border-blue-500 hover:text-blue-600 transition whitespace-nowrap"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-3">
            <form onSubmit={onSearch} className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products"
                className="w-full rounded-md border border-gray-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-blue-500"
              />
            </form>

            <nav className="flex flex-col">
              <NavLink
                onClick={() => setOpen(false)}
                to="/"
                className={navLinkClass}
                end
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/buy"
                className={navLinkClass}
              >
                Buy
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/rent"
                className={navLinkClass}
              >
                Rent
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/sell"
                className={navLinkClass}
              >
                Sell
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/about"
                className={navLinkClass}
              >
                About Us
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/contact"
                className={navLinkClass}
              >
                Contact
              </NavLink>
            </nav>

            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:border-blue-500 hover:text-blue-600 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
    </>
  )
}

export default Navbar