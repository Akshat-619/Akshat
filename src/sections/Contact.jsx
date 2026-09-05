import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error('Web3Forms access key is missing.')
      setStatus('config-error')
      return
    }

    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append('access_key', accessKey)

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

      console.log('Web3Forms response:', data)

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        console.error(
          'Web3Forms rejected the submission:',
          data
        )

        setStatus('error')
      }
    } catch (error) {
      console.error(
        'Network error while submitting form:',
        error
      )

      setStatus('network-error')
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="
        relative overflow-hidden
        bg-body-bg
        px-6 py-24
        sm:px-8 sm:py-28
        lg:py-32
      "
    >

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >

        {/* Ambient glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-orange-500/[0.035]
            blur-[120px]
          "
        />

        {/* Dot texture */}

        <div
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
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-6xl">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="mb-14 max-w-2xl">

          {/* Section label */}

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
              Contact
            </p>

          </div>


          {/* Heading */}

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
            Let's build something
            <span className="text-zinc-500">
              {' '}worth shipping.
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
            Have a project, idea, or opportunity in mind?
            Send me a message and I'll get back to you.
          </p>

        </div>


        {/* =======================================================
            CONTACT AREA
        ======================================================== */}

        <div
          className="
            grid
            gap-6
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-10
          "
        >

          {/* =====================================================
              CONTACT INFORMATION
          ====================================================== */}

          <div
            className="
              flex
              flex-col
              justify-between
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.015]
              p-6
              sm:p-8
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-zinc-600
                "
              >
                Get in touch
              </p>


              <h3
                className="
                  mt-4
                  max-w-sm
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-neutral-100
                "
              >
                Have an idea?
                <br />
                Let's talk.
              </h3>


              <p
                className="
                  mt-4
                  max-w-sm
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                I'm open to freelance projects, collaborations,
                and opportunities where I can contribute through
                frontend development and UI engineering.
              </p>

            </div>


            {/* Contact details */}

            <div className="mt-10 space-y-5">

              {/* Email */}

              <a
                href="mailto:work.akshatsharma04@gmail.com"
                className="
                  group
                  block
                  border-b
                  border-white/[0.06]
                  pb-5
                "
              >

                <span
                  className="
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  Email
                </span>

                <span
                  className="
                    mt-2
                    block
                    break-all
                    text-sm
                    text-zinc-300
                    transition-colors
                    duration-300
                    group-hover:text-orange-500
                    sm:break-normal
                  "
                >
                  work.akshatsharma04@gmail.com
                </span>

              </a>


              {/* WhatsApp */}

              <a
                href="https://wa.me/917558610318"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  block
                  border-b
                  border-white/[0.06]
                  pb-5
                "
              >

                <span
                  className="
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  WhatsApp
                </span>

                <span
                  className="
                    mt-2
                    block
                    text-sm
                    text-zinc-300
                    transition-colors
                    duration-300
                    group-hover:text-orange-500
                  "
                >
                  +91 75586 10318
                </span>

              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/akshatgsharma/"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  block
                "
              >

                <span
                  className="
                    block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  LinkedIn
                </span>

                <span
                  className="
                    mt-2
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-zinc-300
                    transition-colors
                    duration-300
                    group-hover:text-orange-500
                  "
                >
                  Connect with me

                  <span
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    ↗
                  </span>

                </span>

              </a>

            </div>

          </div>


          {/* =====================================================
              FORM
          ====================================================== */}

          <div
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-6
              sm:p-8
            "
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* =================================================
                  NAME
              ================================================== */}

              <div>

                <label
                  htmlFor="contact-name"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    text-zinc-400
                  "
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-orange-500/50
                    focus:bg-white/[0.035]
                    focus:ring-2
                    focus:ring-orange-500/10
                  "
                />

              </div>


              {/* =================================================
                  EMAIL
              ================================================== */}

              <div>

                <label
                  htmlFor="contact-email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    text-zinc-400
                  "
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-orange-500/50
                    focus:bg-white/[0.035]
                    focus:ring-2
                    focus:ring-orange-500/10
                  "
                />

              </div>


              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div>

                <label
                  htmlFor="contact-message"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    text-zinc-400
                  "
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your project..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    py-3
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    focus:border-orange-500/50
                    focus:bg-white/[0.035]
                    focus:ring-2
                    focus:ring-orange-500/10
                  "
                />

              </div>


              {/* =================================================
                  STATUS
              ================================================== */}

              {status === 'config-error' && (
                <div
                  className="
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.04]
                    px-4
                    py-3
                    text-xs
                    text-red-400
                  "
                >
                  The contact form is not configured correctly yet.
                  Please try again later.
                </div>
              )}


              {status === 'success' && (
                <div
                  className="
                    rounded-xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/[0.04]
                    px-4
                    py-3
                    text-sm
                    text-emerald-400
                  "
                >
                  Message sent successfully. I'll get back to you soon.
                </div>
              )}


              {status === 'error' && (
                <div
                  className="
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.04]
                    px-4
                    py-3
                    text-sm
                    text-red-400
                  "
                >
                  Something went wrong while sending your message.
                  Please try again or contact me directly by email.
                </div>
              )}


              {status === 'network-error' && (
                <div
                  className="
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.04]
                    px-4
                    py-3
                    text-sm
                    text-red-400
                  "
                >
                  Couldn't connect to the email service.
                  Please check your connection and try again.
                </div>
              )}


              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}

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
                  px-6
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
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#060608]
                "
              >

                {status === 'sending' ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-black/30
                        border-t-black
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

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
                  </>
                )}

              </button>


              <p className="text-center text-[10px] text-zinc-700">
                Your message will be sent securely.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact