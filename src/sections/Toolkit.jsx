import React, { useState } from 'react'

const branches = [
  {
    number: '01',
    title: 'Frontend',
    description: 'The foundation of the interfaces I build.',
    tools: [
      { name: 'HTML', detail: 'Semantic structure' },
      { name: 'CSS', detail: 'Responsive styling' },
      { name: 'JavaScript', detail: 'Logic & interactions' },
      { name: 'React', detail: 'Component-based UI' },
      { name: 'jQuery', detail: 'DOM interactions' },
    ],
  },
  {
    number: '02',
    title: 'Styling & UI',
    description: 'The visual layer behind the experience.',
    tools: [
      { name: 'Tailwind CSS', detail: 'Utility-first styling' },
      { name: 'SCSS', detail: 'Structured stylesheets' },
      { name: 'Bootstrap', detail: 'Responsive components' },
      { name: 'Material UI', detail: 'React UI components' },
    ],
  },
  {
    number: '03',
    title: 'Motion',
    description: 'Movement and interaction with purpose.',
    tools: [
      { name: 'Framer Motion', detail: 'UI animation' },
      { name: 'AOS', detail: 'Scroll animations' },
    ],
  },
  {
    number: '04',
    title: 'Development',
    description: 'Tools supporting my development workflow.',
    tools: [
      { name: 'REST APIs', detail: 'Data integration' },
      { name: 'Git', detail: 'Version control' },
      { name: 'GitHub', detail: 'Code collaboration' },
      { name: 'Vite', detail: 'Frontend tooling' },
      { name: 'npm', detail: 'Package management' },
    ],
  },
]


/* ===============================================================
   TECHNOLOGY
================================================================ */

const Technology = ({ tool, activeTool, setActiveTool }) => {
  const isActive = activeTool === tool.name

  return (
    <button
      type="button"
      onClick={() =>
        setActiveTool(isActive ? null : tool.name)
      }
      aria-pressed={isActive}
      className="group relative flex w-full items-center text-left"
    >
      {/* Connecting line */}

      <span
        aria-hidden="true"
        className={`absolute left-0 h-px transition-all duration-300 ${
          isActive
            ? 'w-9 bg-orange-500'
            : 'w-7 bg-zinc-600 group-hover:w-9 group-hover:bg-orange-500/70'
        }`}
      />

      {/* Node */}

      <span
        aria-hidden="true"
        className={`absolute left-7 h-1.5 w-1.5 rounded-full transition-all duration-300 ${
          isActive
            ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]'
            : 'bg-zinc-600 group-hover:bg-orange-500'
        }`}
      />

      {/* Name */}

      <span
        className={`ml-12 text-xs font-medium transition-all duration-300 ${
          isActive
            ? 'translate-x-1 text-white'
            : 'text-zinc-400 group-hover:translate-x-1 group-hover:text-zinc-100'
        }`}
      >
        {tool.name}
      </span>

      {/* Detail */}

      <span
        className={`ml-3 hidden text-[10px] xl:block ${
          isActive
            ? 'text-orange-500/70'
            : 'text-zinc-600 group-hover:text-zinc-500'
        }`}
      >
        {tool.detail}
      </span>
    </button>
  )
}


/* ===============================================================
   BRANCH CONTENT
================================================================ */

const BranchContent = ({
  branch,
  activeTool,
  setActiveTool,
}) => {
  return (
    <div>
      {/* Heading */}

      <div className="flex items-center gap-3">
        <span className="font-mono text-[9px] tracking-[0.2em] text-orange-500/70">
          {branch.number}
        </span>

        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-base">
          {branch.title}
        </h3>
      </div>

      {/* Description */}

      <p className="mt-2 max-w-xs text-xs leading-5 text-zinc-500">
        {branch.description}
      </p>

      {/* Technologies */}

      <div className="mt-5 space-y-2">
        {branch.tools.map((tool) => (
          <Technology
            key={tool.name}
            tool={tool}
            activeTool={activeTool}
            setActiveTool={setActiveTool}
          />
        ))}
      </div>
    </div>
  )
}


/* ===============================================================
   TOOLKIT
================================================================ */

const Toolkit = () => {
  const [activeTool, setActiveTool] = useState(null)

  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="relative overflow-hidden bg-body-bg px-6 py-24 sm:px-8 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Soft orange glow */}

        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/[0.035] blur-[130px]" />

        {/* Subtle dots */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:36px_36px] opacity-20" />
      </div>


      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-6xl">


        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="max-w-2xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500">
              Toolkit
            </p>
          </div>


          <h2
            id="toolkit-heading"
            className="text-3xl font-semibold tracking-[-0.03em] text-neutral-100 sm:text-4xl md:text-5xl"
          >
            The tools behind
            <span className="text-zinc-500">
              {' '}the work.
            </span>
          </h2>


          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            A practical collection of technologies I use to
            structure interfaces, build responsive experiences,
            and bring ideas to life on the web.
          </p>

        </div>


        {/* =======================================================
            DESKTOP TREE
        ======================================================== */}

        <div className="relative mt-24 hidden min-h-[720px] lg:block">

          {/* =====================================================
              TRUNK
          ====================================================== */}

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-[690px] w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-500/70 via-zinc-500/50 to-zinc-700/10"
          />


          {/* Trunk glow */}

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-[560px] w-20 -translate-x-1/2 bg-orange-500/[0.025] blur-3xl"
          />


          {/* =====================================================
              ROOT
          ====================================================== */}

          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">

            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-orange-500/40 bg-body-bg shadow-[0_0_40px_rgba(249,115,22,0.08)]">

              <span className="h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.8)]" />

            </div>

            <p className="mt-3 whitespace-nowrap text-center font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
              My Toolkit
            </p>

          </div>


          {/* =====================================================
              UPPER BRANCHES
          ====================================================== */}

          {/* Left branch */}

          <div
            aria-hidden="true"
            className="absolute left-[18%] right-1/2 top-[150px] h-px bg-gradient-to-r from-transparent to-zinc-500/50"
          />

          {/* Right branch */}

          <div
            aria-hidden="true"
            className="absolute left-1/2 right-[18%] top-[150px] h-px bg-gradient-to-l from-transparent to-zinc-500/50"
          />


          {/* =====================================================
              FRONTEND
          ====================================================== */}

          <div className="absolute right-[calc(50%+80px)] top-[180px] w-[300px] text-right">

            <div className="flex flex-col items-end">

              <BranchContent
                branch={branches[0]}
                activeTool={activeTool}
                setActiveTool={setActiveTool}
              />

            </div>

          </div>


          {/* =====================================================
              DEVELOPMENT
          ====================================================== */}

          <div className="absolute left-[calc(50%+80px)] top-[180px] w-[300px]">

            <BranchContent
              branch={branches[3]}
              activeTool={activeTool}
              setActiveTool={setActiveTool}
            />

          </div>


          {/* =====================================================
              LOWER BRANCHES
          ====================================================== */}

          <div
            aria-hidden="true"
            className="absolute left-[22%] right-1/2 top-[475px] h-px bg-gradient-to-r from-transparent to-zinc-500/40"
          />

          <div
            aria-hidden="true"
            className="absolute left-1/2 right-[22%] top-[475px] h-px bg-gradient-to-l from-transparent to-zinc-500/40"
          />


          {/* =====================================================
              STYLING
          ====================================================== */}

          <div className="absolute right-[calc(50%+65px)] top-[505px] w-[300px] text-right">

            <div className="flex flex-col items-end">

              <BranchContent
                branch={branches[1]}
                activeTool={activeTool}
                setActiveTool={setActiveTool}
              />

            </div>

          </div>


          {/* =====================================================
              MOTION
          ====================================================== */}

          <div className="absolute left-[calc(50%+65px)] top-[505px] w-[280px]">

            <BranchContent
              branch={branches[2]}
              activeTool={activeTool}
              setActiveTool={setActiveTool}
            />

          </div>

        </div>


        {/* =======================================================
            TABLET TREE
        ======================================================== */}

        <div className="relative mt-20 hidden md:block lg:hidden">

          <div className="relative mx-auto max-w-2xl">

            {/* Trunk */}

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange-500/60 via-zinc-500/40 to-transparent"
            />


            {/* Root */}

            <div className="relative z-10 mx-auto mb-20 flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/40 bg-body-bg">

              <span className="h-2 w-2 rounded-full bg-orange-500" />

            </div>


            {/* Branches */}

            <div className="space-y-20">

              {branches.map((branch, index) => (

                <div
                  key={branch.number}
                  className={`relative ${
                    index % 2 === 0
                      ? 'pr-[52%]'
                      : 'pl-[52%]'
                  }`}
                >

                  <BranchContent
                    branch={branch}
                    activeTool={activeTool}
                    setActiveTool={setActiveTool}
                  />

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* =======================================================
            MOBILE TREE
        ======================================================== */}

        <div className="relative mt-16 md:hidden">

          <div className="relative pl-8">

            {/* Main trunk */}

            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[5px] top-0 w-px bg-gradient-to-b from-orange-500/60 via-zinc-500/40 to-transparent"
            />


            {/* Root */}

            <div className="relative mb-14 flex items-center gap-4">

              <span
                aria-hidden="true"
                className="absolute left-[-27px] flex h-4 w-4 items-center justify-center rounded-full border border-orange-500/40 bg-body-bg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              </span>


              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-orange-500">
                  Toolkit
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Technologies behind the work
                </p>

              </div>

            </div>


            {/* Mobile branches */}

            <div className="space-y-12">

              {branches.map((branch) => (

                <div
                  key={branch.number}
                  className="relative"
                >

                  {/* Connector */}

                  <span
                    aria-hidden="true"
                    className="absolute left-[-27px] top-[9px] h-px w-7 bg-zinc-500/50"
                  />


                  {/* Node */}

                  <span
                    aria-hidden="true"
                    className="absolute left-[-30px] top-[6px] h-1.5 w-1.5 rounded-full bg-orange-500"
                  />


                  <BranchContent
                    branch={branch}
                    activeTool={activeTool}
                    setActiveTool={setActiveTool}
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Toolkit