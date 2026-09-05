import React from 'react'

const Journey = () => {
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

      {/* Background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
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


      {/* Content */}

      <div className="relative mx-auto max-w-5xl">

        {/* Header */}

        <div className="max-w-2xl">

          <div className="mb-5 flex items-center gap-3">

            <span
              aria-hidden="true"
              className="h-px w-8 bg-orange-500"
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


          <h2
            id="journey-heading"
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
            My professional experience in building and improving
            real-world interfaces and digital products.
          </p>

        </div>


        {/* Experience */}

        <div className="mt-16">

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
              hover:border-orange-500/20
              hover:bg-white/[0.025]
            "
          >

            {/* Orange accent */}

            <span
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-full
                w-px
                bg-orange-500/40
                transition-all
                duration-500
                group-hover:bg-orange-500
              "
            />


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

              {/* Date */}

              <div>

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

                <div className="mt-2 h-px w-6 bg-orange-500/40" />

                <p
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


              {/* Experience Details */}

              <div>

                {/* Meta */}

                <div
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


                {/* Role */}

                <h3
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


                {/* Company */}

                <p
                  className="
                    mt-2
                    text-sm
                    font-medium
                    text-zinc-500
                  "
                >
                  MasterSoft ERP Solutions
                </p>


                {/* Description */}

                <p
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


                {/* Areas */}

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  {[
                    'UI Development',
                    'Responsive Design',
                    'JavaScript',
                    'ERP Interfaces',
                    'Figma to UI',
                  ].map((item) => (
                    <span
                      key={item}
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

          </article>

        </div>


        {/* Bottom line */}

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
            Professional experience
          </span>

          <span
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