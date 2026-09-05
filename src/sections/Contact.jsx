import React, { useState } from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'official.akshatsharma04@gmail.com',
    href: 'mailto:official.akshatsharma04@gmail.com',
    action: 'Send an email',
  },
  {
    label: 'WhatsApp',
    value: '+91 7558610318',
    href: 'https://wa.me/917558610318',
    action: 'Message on WhatsApp',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/akshatgsharma',
    href: 'https://www.linkedin.com/in/akshatgsharma/',
    action: 'View LinkedIn',
  },
]


/* ===============================================================
   ARROW ICON
================================================================ */

const ArrowIcon = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="
        h-4
        w-4
        transition-transform
        duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
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
   CONTACT
================================================================ */

const Contact = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append(
      'access_key',
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    )

    formData.append(
      'subject',
      'New Portfolio Contact — Akshat Sharma'
    )

    formData.append(
      'from_name',
      'Akshat Sharma Portfolio'
    )

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }


  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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

        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.025]
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


      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-6xl">


        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="max-w-2xl">

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
              Contact
            </p>

          </div>


          <h2
            id="contact-heading"
            className="
              text-3xl
              font-semibold
              tracking-[-0.03em]
              text-neutral-100
              sm:text-4xl
              md:text-5xl
            "
          >
            Let's talk.
            <span className="text-zinc-500">
              {' '}I'm listening.
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
            Have an opportunity, project, or idea you'd like to
            discuss? Send me a message and I'll get back to you.
          </p>

        </div>


        {/* =======================================================
            TWO COLUMN CONTACT AREA
        ======================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-2
            lg:gap-8
          "
        >


          {/* =====================================================
              LEFT — CONTACT DETAILS
          ====================================================== */}

          <div
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.015]
              p-6
              sm:p-8
              lg:p-9
            "
          >

            <div>

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-orange-500
                "
              >
                Get in touch
              </p>


              <h3
                className="
                  mt-4
                  text-xl
                  font-semibold
                  tracking-tight
                  text-zinc-200
                  sm:text-2xl
                "
              >
                Prefer a direct conversation?
              </h3>


              <p
                className="
                  mt-3
                  max-w-md
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                You can reach me directly through email, WhatsApp,
                or LinkedIn. Choose whichever works best for you.
              </p>

            </div>


            {/* Contact links */}

            <div className="mt-8 space-y-2">

              {contactLinks.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.label === 'Email'
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    contact.label === 'Email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-white/[0.06]
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:border-orange-500/20
                    hover:bg-orange-500/[0.025]
                  "
                >

                  <div className="min-w-0">

                    <p
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-orange-500
                      "
                    >
                      {contact.label}
                    </p>

                    <p
                      className="
                        mt-1.5
                        truncate
                        text-xs
                        font-medium
                        text-zinc-400
                        transition-colors
                        duration-300
                        group-hover:text-white
                        sm:text-sm
                      "
                    >
                      {contact.value}
                    </p>

                  </div>

                  <ArrowIcon />

                </a>
              ))}

            </div>


            {/* Availability */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-2
                border-t
                border-white/[0.06]
                pt-6
              "
            >

              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-orange-500
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-orange-500
                  "
                />

              </span>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-zinc-600
                "
              >
                Open to opportunities
              </span>

            </div>

          </div>


          {/* =====================================================
              RIGHT — CONTACT FORM
          ====================================================== */}

          <div
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.015]
              p-6
              sm:p-8
              lg:p-9
            "
          >

            <div className="mb-7">

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-orange-500
                "
              >
                Send a message
              </p>

              <h3
                className="
                  mt-4
                  text-xl
                  font-semibold
                  tracking-tight
                  text-zinc-200
                  sm:text-2xl
                "
              >
                Start a conversation.
              </h3>

            </div>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}

              <div>

                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-zinc-600
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    px-4
                    py-3
                    text-sm
                    text-zinc-200
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-orange-500/40
                    focus:bg-white/[0.03]
                    focus:ring-1
                    focus:ring-orange-500/20
                  "
                />

              </div>


              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-zinc-600
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    px-4
                    py-3
                    text-sm
                    text-zinc-200
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-orange-500/40
                    focus:bg-white/[0.03]
                    focus:ring-1
                    focus:ring-orange-500/20
                  "
                />

              </div>


              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-zinc-600
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me a little about your project or opportunity..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-white/[0.02]
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-zinc-200
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-orange-500/40
                    focus:bg-white/[0.03]
                    focus:ring-1
                    focus:ring-orange-500/20
                  "
                />

              </div>


              {/* Honeypot */}

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />


              {/* Submit */}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-orange-400
                  hover:shadow-lg
                  hover:shadow-orange-500/20
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                "
              >

                {status === 'sending'
                  ? 'Sending...'
                  : 'Send Message'
                }

                {status !== 'sending' && (
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
                )}

              </button>


              {/* Success */}

              {status === 'success' && (
                <p
                  role="status"
                  className="
                    text-center
                    text-xs
                    text-orange-500
                  "
                >
                  Message sent successfully. I'll get back to you soon.
                </p>
              )}


              {/* Error */}

              {status === 'error' && (
                <p
                  role="alert"
                  className="
                    text-center
                    text-xs
                    text-red-400
                  "
                >
                  Something went wrong. Please try contacting me
                  directly by email.
                </p>
              )}

            </form>

          </div>

        </div>


        {/* Footer */}

        <div
          className="
            mt-8
            flex
            flex-col
            gap-2
            border-t
            border-white/[0.06]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
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
            Let's connect
          </span>

          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.15em]
              text-zinc-700
            "
          >
            AKSHAT SHARMA · 2026
          </span>

        </div>

      </div>

    </section>
  )
}

export default Contact