import React, { useEffect, useState } from 'react'

const navLinks = [
  { name: 'Overview', href: '#overview' },
  { name: 'About', href: '#about' },
  { name: 'Toolkit', href: '#toolkit' },
  { name: 'Builds', href: '#builds' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close hamburger when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Close menu after clicking a navigation link
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-6 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#060608]/70 py-4 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent py-6'
      }`}
    >

      {/* Desktop Navigation */}
      <ul className="hidden items-center justify-center gap-6 md:flex">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="group relative"
          >
            <a
              href={link.href}
              className="relative inline-block px-2 py-1 text-sm font-medium text-zinc-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-white focus:outline-none focus-visible:text-white"
            >
              {link.name}

              <span
                aria-hidden="true"
                className="absolute bottom-0 left-2 h-px w-0 bg-orange-500 transition-all duration-300 ease-out group-hover:w-[calc(100%-1rem)]"
              />
            </a>
          </li>
        ))}
      </ul>


      {/* Mobile Hamburger Button */}
      <div className="flex justify-end md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-all duration-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">

            {/* Top line */}
            <span
              className={`absolute h-px w-6 bg-current transition-all duration-300 ease-out ${
                menuOpen
                  ? 'rotate-45'
                  : '-translate-y-1.5'
              }`}
            />

            {/* Bottom line */}
            <span
              className={`absolute h-px w-6 bg-current transition-all duration-300 ease-out ${
                menuOpen
                  ? '-rotate-45'
                  : 'translate-y-1.5'
              }`}
            />

          </span>
        </button>
      </div>


      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          menuOpen
            ? 'pointer-events-auto mt-5 max-h-96 opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-1 rounded-2xl bg-[#060608]/95 px-6 py-5 shadow-xl shadow-black/20 backdrop-blur-xl">

          {navLinks.map((link) => (
            <li
              key={link.name}
              className="w-full text-center"
            >
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="group relative inline-block px-4 py-3 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white focus:outline-none focus-visible:text-white"
              >
                {link.name}

                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-4 h-px w-0 bg-orange-500 transition-all duration-300 ease-out group-hover:w-[calc(100%-2rem)]"
                />
              </a>
            </li>
          ))}

        </ul>
      </div>

    </nav>
  )
}

export default Navbar