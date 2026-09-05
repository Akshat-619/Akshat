import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
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
          overflow-hidden
        "
      >

        {/* Ambient orange glow */}

        <div
          data-aos="fade-right"
          data-aos-duration="1400"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
          className="
            absolute
            -left-40
            top-1/4
            h-80
            w-80
            rounded-full
            bg-orange-500/[0.035]
            blur-[110px]
          "
        />

        {/* Right glow */}

        <div
          data-aos="fade-left"
          data-aos-duration="1400"
          data-aos-delay="250"
          data-aos-easing="ease-out-cubic"
          className="
            absolute
            -right-40
            bottom-1/4
            h-80
            w-80
            rounded-full
            bg-orange-500/[0.025]
            blur-[110px]
          "
        />

        {/* Grid */}

        <div
          data-aos="fade-in"
          data-aos-duration="1600"
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)]
            [background-size:32px_32px]
            opacity-20
          "
        />

      </div>


      {/* =========================================================
          CONTENT WRAPPER
      ========================================================== */}

      <div className="relative mx-auto max-w-6xl">


        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <div className="mb-16 max-w-2xl">

          {/* Eyebrow */}

          <div
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-easing="ease-out-cubic"
            className="
              mb-5
              flex
              items-center
              gap-3
            "
          >

            <span
              aria-hidden="true"
              className="
                h-px
                w-8
                origin-left
                bg-orange-500
              "
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="250"
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-orange-500
              "
            >
              About Me
            </span>

          </div>


          {/* Heading */}

          <h2
            id="about-heading"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="250"
            data-aos-easing="ease-out-cubic"
            className="
              text-3xl
              font-semibold
              tracking-[-0.03em]
              text-neutral-100
              sm:text-4xl
              md:text-5xl
            "
          >
            More than just

            <span className="text-zinc-500">
              {' '}writing code.
            </span>
          </h2>


          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="400"
            data-aos-easing="ease-out-cubic"
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-zinc-500
              sm:text-base
            "
          >
            A little about how I approach frontend development,
            the work I've done, and the direction I'm heading.
          </p>

        </div>


        {/* =========================================================
            MAIN ABOUT GRID
        ========================================================== */}

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">


          {/* =======================================================
              INTRODUCTION CARD
          ======================================================== */}

          <article
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-easing="ease-out-cubic"
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-7
              transition-all
              duration-500
              hover:border-orange-500/20
              hover:bg-white/[0.03]
              sm:p-9
              lg:p-10
            "
          >

            {/* Top accent */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-px
                w-24
                bg-gradient-to-r
                from-orange-500
                to-transparent
                opacity-70
                transition-all
                duration-500
                group-hover:w-40
              "
            />

            <div className="relative">

              <p
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="350"
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                Who I Am
              </p>


              <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">

                <p
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="450"
                >
                  I'm a frontend developer who enjoys turning ideas,
                  designs, and requirements into interfaces that are
                  practical, responsive, and enjoyable to use.
                </p>


                <p
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="550"
                >
                  My foundation is built around{' '}

                  <span className="font-medium text-zinc-200">
                    HTML, CSS, JavaScript, and React
                  </span>

                  , with a strong interest in interaction design,
                  component architecture, and writing maintainable
                  frontend code.
                </p>


                <p
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="650"
                >
                  I've had hands-on experience working on{' '}

                  <span className="font-medium text-zinc-200">
                    real-world interfaces
                  </span>

                  , including academic and administrative ERP
                  workflows, dashboards, forms, reports, and
                  responsive product experiences.
                </p>


                <p
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="750"
                >
                  I'm currently expanding beyond the frontend,
                  learning full-stack development and strengthening
                  my understanding of backend systems, APIs, databases,
                  and application architecture.
                </p>

              </div>

            </div>

          </article>


          {/* =======================================================
              DEVELOPER MINDSET CARD
          ======================================================== */}

          <article
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-7
              transition-all
              duration-500
              hover:border-orange-500/20
              hover:bg-white/[0.03]
              sm:p-9
            "
          >

            {/* Glow */}

            <div
              aria-hidden="true"
              className="
                absolute
                right-0
                top-0
                h-24
                w-24
                rounded-full
                bg-orange-500/[0.04]
                blur-2xl
                transition-all
                duration-500
                group-hover:bg-orange-500/[0.08]
              "
            />

            <div className="relative">

              <p
                data-aos="fade-down"
                data-aos-duration="700"
                data-aos-delay="400"
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                How I Work
              </p>


              <div className="mt-7 space-y-7">


                {/* =================================================
                    ITEM 01
                ================================================= */}

                <div
                  data-aos="fade-left"
                  data-aos-duration="750"
                  data-aos-delay="500"
                  data-aos-easing="ease-out-cubic"
                  className="flex gap-4"
                >

                  <div
                    className="
                      mt-1
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      text-xs
                      text-orange-500
                      transition-all
                      duration-300
                    "
                  >
                    01
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold text-zinc-200">
                      Start with the problem
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                      I focus on understanding what the interface
                      needs to accomplish before deciding how it
                      should be built.
                    </p>

                  </div>

                </div>


                {/* =================================================
                    ITEM 02
                ================================================= */}

                <div
                  data-aos="fade-left"
                  data-aos-duration="750"
                  data-aos-delay="650"
                  data-aos-easing="ease-out-cubic"
                  className="flex gap-4"
                >

                  <div
                    className="
                      mt-1
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      text-xs
                      text-orange-500
                    "
                  >
                    02
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold text-zinc-200">
                      Build with purpose
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                      I prefer simple component structures, reusable
                      patterns, responsive layouts, and code that is
                      easy to understand and maintain.
                    </p>

                  </div>

                </div>


                {/* =================================================
                    ITEM 03
                ================================================= */}

                <div
                  data-aos="fade-left"
                  data-aos-duration="750"
                  data-aos-delay="800"
                  data-aos-easing="ease-out-cubic"
                  className="flex gap-4"
                >

                  <div
                    className="
                      mt-1
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      text-xs
                      text-orange-500
                    "
                  >
                    03
                  </div>

                  <div>

                    <h3 className="text-sm font-semibold text-zinc-200">
                      Refine through iteration
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-zinc-500">
                      I don't consider the first working version the
                      finished version. I iterate on responsiveness,
                      interaction, accessibility, and visual details.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </article>

        </div>


        {/* =========================================================
            EXPERIENCE SNAPSHOT
        ========================================================== */}

        <div className="mt-6 grid gap-6 sm:grid-cols-3">


          {/* =======================================================
              CARD 01
          ======================================================== */}

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-easing="ease-out-cubic"
            className="
              group
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-orange-500/20
            "
          >

            <p className="text-2xl font-semibold tracking-tight text-zinc-100">
              Real-world
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
              Experience
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Worked on interfaces used across practical
              academic and administrative workflows.
            </p>

          </div>


          {/* =======================================================
              CARD 02
          ======================================================== */}

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
            data-aos-easing="ease-out-cubic"
            className="
              group
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-orange-500/20
            "
          >

            <p className="text-2xl font-semibold tracking-tight text-zinc-100">
              Frontend
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
              Core Strength
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Focused on responsive interfaces, interactions,
              component-based development, and usability.
            </p>

          </div>


          {/* =======================================================
              CARD 03
          ======================================================== */}

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-easing="ease-out-cubic"
            className="
              group
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-orange-500/20
            "
          >

            <p className="text-2xl font-semibold tracking-tight text-zinc-100">
              Full-Stack
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-600">
              Current Direction
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Expanding into backend development, APIs,
              databases, and application architecture.
            </p>

          </div>

        </div>


        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="250"
          data-aos-easing="ease-out-cubic"
          className="
            mt-16
            border-t
            border-white/[0.06]
            pt-8
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p className="max-w-2xl text-sm leading-6 text-zinc-500">
              I'm interested in opportunities where I can contribute
              to meaningful products, work with strong engineering
              teams, and continue growing as a developer.
            </p>


            <a
              href="#builds"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                text-sm
                font-medium
                text-zinc-300
                transition-colors
                duration-300
                hover:text-orange-500
              "
            >
              Explore my work

              <span
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About