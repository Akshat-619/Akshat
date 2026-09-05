import React from 'react'
import GrowlyticsImage from '../assets/Growlytics.png'


/* ===============================================================
   PROJECT DATA
================================================================ */

const project = {
  number: '01',
  title: 'Growlytics',
  category: 'Responsive Web Experience',
  description:
    'A responsive product experience designed around clear visual hierarchy, thoughtful interactions, and a polished interface across screen sizes.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  image: GrowlyticsImage,
  demo: 'https://growlytics-five.vercel.app/',
}


/* ===============================================================
   EXTERNAL LINK ICON
================================================================ */

const ExternalIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="
        h-3.5
        w-3.5
        transition-transform
        duration-300
        group-hover/demo:translate-x-0.5
        group-hover/demo:-translate-y-0.5
      "
    >
      <path
        d="M4 12L12 4M6 4H12V10"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


/* ===============================================================
   BUILDS SECTION
================================================================ */

const Builds = () => {
  return (
    <section
      id="builds"
      aria-labelledby="builds-heading"
      className="
        relative
        overflow-hidden
        bg-body-bg
        px-6
        py-24
        sm:px-8
        sm:py-28
        lg:py-32
      "
    >

      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >

        {/* Soft orange glow */}

        <div
          className="
            absolute
            left-1/2
            top-[15%]
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.025]
            blur-[130px]
          "
        />

        {/* Subtle dot texture */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)]
            [background-size:36px_36px]
            opacity-15
          "
        />

      </div>


      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-6xl">


        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-8
            sm:flex-row
            sm:items-end
          "
        >

          {/* Header */}

          <div className="max-w-2xl">

            {/* Section Label */}

            <div className="mb-5 flex items-center gap-3">

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-8
                  bg-orange-500
                "
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-orange-500
                "
              >
                Builds
              </p>

            </div>


            {/* Heading */}

            <h2
              id="builds-heading"
              className="
                text-3xl
                font-semibold
                tracking-[-0.03em]
                text-neutral-100
                sm:text-4xl
                md:text-5xl
              "
            >
              Work I've
              <span className="text-zinc-500">
                {' '}built.
              </span>
            </h2>


            {/* Description */}

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-zinc-500
                sm:text-base
              "
            >
              A selection of interfaces and web experiences built
              with a focus on thoughtful design, responsive
              development, and practical frontend implementation.
            </p>

          </div>


          {/* Project Counter */}

          <div
            className="
              flex
              items-baseline
              gap-3
              sm:pb-1
            "
          >

            <span
              className="
                font-mono
                text-3xl
                font-medium
                tracking-tight
                text-zinc-300
              "
            >
              01
            </span>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-zinc-700
              "
            >
              Selected build
            </span>

          </div>

        </div>


        {/* =======================================================
            PROJECT
        ======================================================== */}

        <div className="mt-16">


          {/* =====================================================
              PROJECT CARD
          ====================================================== */}

          <article
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.015]
              transition-all
              duration-500
              ease-out
              hover:border-orange-500/25
              hover:bg-white/[0.02]
              hover:shadow-2xl
              hover:shadow-black/20
            "
          >

            {/* =================================================
                PROJECT IMAGE
            ================================================== */}

            <div
              className="
                relative
                h-64
                overflow-hidden
                border-b
                border-white/[0.06]
                bg-[#09090b]
                sm:h-80
                md:h-[420px]
              "
            >

              {/* Screenshot */}

              <img
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-top
                  opacity-85
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-[1.02]
                  group-hover:opacity-100
                "
              />


              {/* Image overlay */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#09090b]/70
                  via-transparent
                  to-transparent
                  opacity-80
                  transition-opacity
                  duration-500
                  group-hover:opacity-50
                "
              />


              {/* Project number */}

              <span
                className="
                  absolute
                  bottom-5
                  left-6
                  z-10
                  font-mono
                  text-[9px]
                  tracking-[0.25em]
                  text-white/50
                  transition-colors
                  duration-300
                  group-hover:text-orange-400
                  sm:left-7
                "
              >
                {project.number}
              </span>

            </div>


            {/* =================================================
                PROJECT INFORMATION
            ================================================== */}

            <div
              className="
                grid
                gap-8
                p-6
                sm:p-8
                md:grid-cols-[1fr_auto]
                md:items-end
                md:p-10
              "
            >

              {/* =================================================
                  PROJECT DETAILS
              ================================================== */}

              <div>

                {/* Project Type */}

                <p
                  className="
                    mb-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-orange-500
                  "
                >
                  {project.category}
                </p>


                {/* Project Title */}

                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-zinc-200
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-3xl
                  "
                >
                  {project.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-7
                    text-zinc-500
                    sm:text-base
                  "
                >
                  {project.description}
                </p>


                {/* Technologies */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-white/[0.07]
                        px-3
                        py-1.5
                        text-[9px]
                        font-medium
                        text-zinc-500
                        transition-all
                        duration-300
                        group-hover:border-white/[0.12]
                        group-hover:text-zinc-400
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>


              {/* =================================================
                  VIEW DEMO
              ================================================== */}

              <div className="md:pb-1">

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/demo
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-orange-500/25
                    px-4
                    py-2.5
                    text-xs
                    font-medium
                    text-orange-500
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-orange-500/60
                    hover:bg-orange-500/[0.06]
                    hover:text-orange-400
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-orange-500
                  "
                >

                  <span>
                    View Demo
                  </span>

                  <ExternalIcon />

                </a>

              </div>

            </div>

          </article>

        </div>


        {/* =======================================================
            SECTION FOOTER
        ======================================================== */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-white/[0.06]
            pt-5
          "
        >

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-zinc-700
            "
          >
            Selected work
          </span>

          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.15em]
              text-zinc-700
            "
          >
            01
          </span>

        </div>

      </div>

    </section>
  )
}

export default Builds