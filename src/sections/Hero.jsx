import React from 'react'
import Navbar from '../components/Navbar'

const Hero = () => {
  return (
    <section
      id="overview"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen overflow-hidden bg-body-bg px-6 pb-20 pt-28 text-center sm:px-8 sm:pt-32"
    >
      <Navbar />

      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main ambient glow */}
        <div className="absolute left-1/2 top-[28%] h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/[0.06] blur-[110px] sm:h-96 sm:w-96" />

        {/* Subtle secondary glow */}
        <div className="absolute -right-40 top-1/3 h-72 w-72 rounded-full bg-orange-500/[0.025] blur-[100px]" />

        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#060608] to-transparent" />
      </div>


      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center">

        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">

          <span
            aria-hidden="true"
            className="h-px w-7 bg-orange-500 sm:w-9"
          />

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500 sm:text-xs">
            Frontend Developer
          </p>

          <span
            aria-hidden="true"
            className="h-px w-7 bg-orange-500 sm:w-9"
          />

        </div>


        {/* =======================================================
            NAME
        ======================================================== */}

        <h1
          id="hero-heading"
          className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-neutral-100 sm:text-6xl md:text-7xl"
        >
          Akshat Sharma
        </h1>


        {/* =======================================================
            POSITIONING
        ======================================================== */}

        <h2 className="mt-5 max-w-2xl text-xl font-medium leading-snug tracking-[-0.02em] text-zinc-200 sm:text-2xl md:text-3xl">
          Building responsive web experiences with{' '}
          <span className="text-orange-500">
            React & JavaScript.
          </span>
        </h2>


        {/* =======================================================
            DESCRIPTION
        ======================================================== */}

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-7">
          I develop responsive and interactive web applications with
          JavaScript and React, with hands-on experience building
          production-facing interfaces and a focus on clean code,
          usability, and performance.
        </p>


        {/* =======================================================
            CTA
        ======================================================== */}

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">

          {/* Primary CTA */}
          <a
            href="#builds"
            className="group inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-orange-400 hover:shadow-xl hover:shadow-orange-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060608]"
          >
            View My Builds

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>


          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex min-w-40 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060608]"
          >
            Let's Connect
          </a>

        </div>


        {/* =======================================================
            CORE FOCUS
        ======================================================== */}

        <div className="mt-11 flex flex-col items-center">

          <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Core Focus
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs text-zinc-500 sm:text-sm">

            <span>React</span>

            <span
              aria-hidden="true"
              className="text-zinc-700"
            >
              ·
            </span>

            <span>JavaScript</span>

            <span
              aria-hidden="true"
              className="text-zinc-700"
            >
              ·
            </span>

            <span>Responsive Interfaces</span>

            <span
              aria-hidden="true"
              className="text-zinc-700"
            >
              ·
            </span>

            <span>API Integration</span>

          </div>

        </div>


        {/* =======================================================
            AVAILABILITY
        ======================================================== */}

        <div className="mt-7 flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5">

          <span className="relative flex h-1.5 w-1.5">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-50" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />

          </span>

          <span className="text-[11px] font-medium text-zinc-500">
            Open to frontend opportunities
          </span>

        </div>

      </div>


      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="group absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 text-zinc-600 transition-colors duration-300 hover:text-orange-500 focus:outline-none focus-visible:text-orange-500 sm:bottom-8"
      >

        <span className="text-[9px] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span
          aria-hidden="true"
          className="relative h-8 w-px overflow-hidden bg-zinc-800"
        >
          <span className="absolute left-0 top-0 h-1/2 w-full bg-orange-500 transition-transform duration-500 group-hover:translate-y-full" />
        </span>

      </a>

    </section>
  )
}

export default Hero