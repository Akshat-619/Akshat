import React from 'react'

const Journey = () => {
  const areas = [
    'UI Development',
    'Responsive Design',
    'JavaScript',
    'ERP Interfaces',
    'Figma to UI',
  ]

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
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
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >

        {/* Main ambient glow */}

        <div
          data-aos="fade"
          data-aos-duration="1800"
          className="
            absolute
            left-1/2
            top-1/4
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.018]
            blur-[130px]
          "
        />

        {/* Secondary glow */}

        <div
          data-aos="fade"
          data-aos-duration="2200"
          data-aos-delay="300"
          className="
            absolute
            -right-32
            top-1/2
            h-72
            w-72
            rounded-full
            bg-orange-500/[0.012]
            blur-[120px]
          "
        />

        {/* Dot grid */}

        <div
          data-aos="fade"
          data-aos-duration="2500"
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
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-6xl">


        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="max-w-2xl">

          {/* Section label */}

          <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-offset="100"
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
              Journey
            </p>

          </div>


          {/* Heading */}

          <h2
            id="journey-heading"
            data-aos="fade-up"
            data-aos-duration="850"
            data-aos-delay="100"
            data-aos-offset="100"
            className="
              text-3xl
              font-semibold
              tracking-[-0.03em]
              text-neutral-100
              sm:text-4xl
              md:text-5xl
            "
          >
            Where I've

            <span className="text-zinc-500">
              {' '}worked.
            </span>

          </h2>


          {/* Description */}

          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="220"
            data-aos-offset="100"
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-zinc-500
              sm:text-base
            "
          >
            My professional experience in building and improving
            real-world interfaces and digital products.
          </p>

        </div>


        {/* =======================================================
            EXPERIENCE
        ======================================================== */}

        <div className="mt-16">

          <article
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-offset="120"
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
              hover:border-orange-500/20
              hover:bg-white/[0.025]
              hover:shadow-2xl
              hover:shadow-black/10
            "
          >

            {/* =================================================
                ORANGE ACCENT
            ================================================== */}

            <span
              aria-hidden="true"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="350"
              className="
                absolute
                left-0
                top-0
                h-full
                w-px
                origin-top
                bg-orange-500/40
                transition-all
                duration-500
                group-hover:bg-orange-500
              "
            />


            {/* =================================================
                CARD CONTENT
            ================================================== */}

            <div
              className="
                grid
                gap-8
                p-6
                sm:p-8
                md:grid-cols-[150px_1fr]
                md:gap-10
                md:p-10
              "
            >

              {/* =================================================
                  DATE
              ================================================== */}

              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-delay="250"
                className="
                  relative
                  md:pt-1
                "
              >

                <p
                  className="
                    font-mono
                    text-xs
                    tracking-[0.12em]
                    text-zinc-500
                  "
                >
                  NOV 2025
                </p>


                {/* Date connector */}

                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay="500"
                  className="
                    mt-2
                    h-px
                    w-6
                    origin-left
                    bg-orange-500/40
                  "
                />


                <p
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="550"
                  className="
                    mt-2
                    font-mono
                    text-xs
                    tracking-[0.12em]
                    text-zinc-700
                  "
                >
                  FEB 2026
                </p>

              </div>


              {/* =================================================
                  EXPERIENCE DETAILS
              ================================================== */}

              <div>

                {/* =================================================
                    META
                ================================================== */}

                <div
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-delay="300"
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-x-3
                    gap-y-2
                  "
                >

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-orange-500
                    "
                  >
                    Professional Experience
                  </span>

                  <span className="text-zinc-800">
                    /
                  </span>

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-zinc-600
                    "
                  >
                    Internship
                  </span>

                </div>


                {/* =================================================
                    ROLE
                ================================================== */}

                <h3
                  data-aos="fade-up"
                  data-aos-duration="850"
                  data-aos-delay="400"
                  className="
                    mt-5
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
                  Frontend / UI Developer Intern
                </h3>


                {/* =================================================
                    COMPANY
                ================================================== */}

                <p
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="500"
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-zinc-500
                    transition-colors
                    duration-300
                    group-hover:text-zinc-400
                  "
                >
                  MasterSoft ERP Solutions
                </p>


                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  data-aos="fade-up"
                  data-aos-duration="850"
                  data-aos-delay="600"
                  className="
                    mt-6
                    max-w-2xl
                    text-sm
                    leading-7
                    text-zinc-500
                    sm:text-base
                  "
                >
                  Worked on live academic and administrative ERP
                  modules, contributing to interface development,
                  responsive layouts, dashboards, forms, reports,
                  transaction workflows, JavaScript interactions,
                  and UI improvements.
                </p>


                {/* =================================================
                    AREAS
                ================================================== */}

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {areas.map((item, index) => (
                    <span
                      key={item}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={700 + index * 100}
                      className="
                        rounded-full
                        border
                        border-white/[0.07]
                        px-3
                        py-1.5
                        text-[9px]
                        font-medium
                        text-zinc-600
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-orange-500/30
                        hover:text-orange-500
                        group-hover:border-white/[0.12]
                        group-hover:text-zinc-500
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>


            {/* =================================================
                CARD BOTTOM ACCENT
            ================================================== */}

            <div
              aria-hidden="true"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="500"
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-orange-500/50
                transition-all
                duration-700
                group-hover:w-24
              "
            />

          </article>

        </div>


        {/* =======================================================
            BOTTOM LINE
        ======================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="350"
          data-aos-offset="80"
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
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-delay="450"
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-zinc-700
            "
          >
            Professional experience
          </span>


          <span
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="450"
            className="
              font-mono
              text-[9px]
              tracking-[0.15em]
              text-orange-500/50
            "
          >
            2025 — 2026
          </span>

        </div>

      </div>

    </section>
  )
}

export default Journey