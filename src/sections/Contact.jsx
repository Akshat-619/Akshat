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
        relative
        overflow-hidden
        bg-body-bg
        px-6
        py-24
        sm:px-8
        sm:py-28
        lg:py-36
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

        {/* Main glow */}

        <div
          data-aos="fade"
          data-aos-duration="1800"
          className="
            absolute
            left-[20%]
            top-[25%]
            h-80
            w-80
            rounded-full
            bg-orange-500/[0.025]
            blur-[130px]
          "
        />

        {/* Secondary glow */}

        <div
          data-aos="fade"
          data-aos-duration="2200"
          data-aos-delay="250"
          className="
            absolute
            bottom-[10%]
            right-[5%]
            h-72
            w-72
            rounded-full
            bg-orange-500/[0.015]
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

        {/* Top fade */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-x-0
            top-0
            h-32
            bg-gradient-to-b
            from-body-bg
            to-transparent
          "
        />

      </div>


      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-6xl">


        {/* =======================================================
            HEADER
        ======================================================== */}

        <div className="max-w-3xl">

          {/* Label */}

          <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-offset="100"
            className="
              mb-6
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
                sm:w-10
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


          {/* Heading */}

          <h2
            id="contact-heading"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
            data-aos-offset="100"
            className="
              max-w-3xl
              text-4xl
              font-semibold
              leading-[0.98]
              tracking-[-0.045em]
              text-neutral-100
              sm:text-5xl
              md:text-6xl
            "
          >
            Let's build something

            <span className="text-zinc-600">
              {' '}worth shipping.
            </span>

          </h2>


          {/* Header description */}

          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="250"
            data-aos-offset="100"
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-zinc-500
              sm:text-base
            "
          >
            Have a project, idea, or opportunity in mind?
            Tell me what you're working on and let's figure
            out how I can help bring it to life.
          </p>

        </div>


        {/* =======================================================
            CONTACT GRID
        ======================================================== */}

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-8
            xl:gap-10
          "
        >


          {/* =====================================================
              LEFT — CONTACT INFO
          ====================================================== */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="150"
            data-aos-offset="120"
            className="
              relative
              flex
              min-h-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.015]
              p-6
              sm:p-8
              lg:p-9
            "
          >

            {/* Card glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-orange-500/[0.025]
                blur-[80px]
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />


            {/* =================================================
                INTRO
            ================================================== */}

            <div className="relative">

              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="300"
              >

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
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
                    leading-tight
                    tracking-[-0.025em]
                    text-neutral-100
                    sm:text-3xl
                  "
                >
                  Have an idea?

                  <span className="text-zinc-600">
                    {' '}Let's talk.
                  </span>

                </h3>


                <p
                  className="
                    mt-5
                    max-w-sm
                    text-sm
                    leading-7
                    text-zinc-500
                  "
                >
                  I'm open to freelance projects,
                  collaborations, and opportunities where
                  I can contribute through frontend
                  development and UI engineering.
                </p>

              </div>


              {/* =================================================
                  AVAILABILITY
              ================================================== */}

              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="400"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  px-3.5
                  py-2
                "
              >

                <span className="relative flex h-1.5 w-1.5">

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
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-orange-500
                    "
                  />

                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-zinc-500
                  "
                >
                  Open to opportunities
                </span>

              </div>

            </div>


            {/* =================================================
                CONTACT METHODS
            ================================================== */}

            <div className="relative mt-12 space-y-1">


              {/* EMAIL */}

              <a
                href="mailto:work.akshatsharma04@gmail.com"
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay="450"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-transparent
                  px-3
                  py-4
                  transition-all
                  duration-300
                  hover:border-white/[0.06]
                  hover:bg-white/[0.025]
                "
              >

                <div>

                  <span
                    className="
                      block
                      text-[9px]
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
                      mt-1.5
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

                </div>

                <span
                  aria-hidden="true"
                  className="
                    ml-4
                    text-zinc-700
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-orange-500
                  "
                >
                  ↗
                </span>

              </a>


              {/* WHATSAPP */}

              <a
                href="https://wa.me/917558610318"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay="550"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-transparent
                  px-3
                  py-4
                  transition-all
                  duration-300
                  hover:border-white/[0.06]
                  hover:bg-white/[0.025]
                "
              >

                <div>

                  <span
                    className="
                      block
                      text-[9px]
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
                      mt-1.5
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

                </div>

                <span
                  aria-hidden="true"
                  className="
                    ml-4
                    text-zinc-700
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-orange-500
                  "
                >
                  ↗
                </span>

              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/akshatgsharma/"
                target="_blank"
                rel="noreferrer"
                data-aos="fade-up"
                data-aos-duration="650"
                data-aos-delay="650"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-transparent
                  px-3
                  py-4
                  transition-all
                  duration-300
                  hover:border-white/[0.06]
                  hover:bg-white/[0.025]
                "
              >

                <div>

                  <span
                    className="
                      block
                      text-[9px]
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
                      mt-1.5
                      block
                      text-sm
                      text-zinc-300
                      transition-colors
                      duration-300
                      group-hover:text-orange-500
                    "
                  >
                    Connect with me
                  </span>

                </div>

                <span
                  aria-hidden="true"
                  className="
                    ml-4
                    text-zinc-700
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-orange-500
                  "
                >
                  ↗
                </span>

              </a>

            </div>


            {/* =================================================
                CARD FOOTER
            ================================================== */}

            <div
              data-aos="fade-up"
              data-aos-duration="650"
              data-aos-delay="750"
              className="
                relative
                mt-auto
                border-t
                border-white/[0.06]
                pt-6
              "
            >

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-zinc-700
                  "
                >
                  Based in India
                </span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.15em]
                    text-orange-500/40
                  "
                >
                  AVAILABLE
                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT — MESSAGE FORM
          ====================================================== */}

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-offset="120"
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.02]
              p-6
              sm:p-8
              lg:p-9
            "
          >

            {/* Form accent */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-px
                w-24
                bg-orange-500/70
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                right-0
                top-0
                h-px
                w-12
                bg-white/[0.06]
              "
            />


            {/* =================================================
                FORM HEADER
            ================================================== */}

            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
            >

              <div className="flex items-center justify-between">

                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-zinc-600
                  "
                >
                  Send a message
                </p>

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.15em]
                    text-zinc-700
                  "
                >
                  01 / 01
                </span>

              </div>


              <h3
                className="
                  mt-4
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-neutral-100
                  sm:text-3xl
                "
              >
                Start a conversation.
              </h3>

            </div>


            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* =================================================
                  NAME + EMAIL
              ================================================== */}

              <div className="grid gap-5 sm:grid-cols-2">

                {/* NAME */}

                <div
                  data-aos="fade-up"
                  data-aos-duration="650"
                  data-aos-delay="450"
                >

                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-zinc-600
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
                      bg-black/10
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-all
                      duration-300
                      hover:border-white/[0.12]
                      focus:border-orange-500/50
                      focus:bg-white/[0.025]
                      focus:ring-2
                      focus:ring-orange-500/10
                    "
                  />

                </div>


                {/* EMAIL */}

                <div
                  data-aos="fade-up"
                  data-aos-duration="650"
                  data-aos-delay="550"
                >

                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.15em]
                      text-zinc-600
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
                      bg-black/10
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition-all
                      duration-300
                      hover:border-white/[0.12]
                      focus:border-orange-500/50
                      focus:bg-white/[0.025]
                      focus:ring-2
                      focus:ring-orange-500/10
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="650"
              >

                <label
                  htmlFor="contact-message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-zinc-600
                  "
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="7"
                  placeholder="Tell me a little about your project..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/10
                    px-4
                    py-3.5
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-zinc-700
                    transition-all
                    duration-300
                    hover:border-white/[0.12]
                    focus:border-orange-500/50
                    focus:bg-white/[0.025]
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
                  data-aos="fade-up"
                  className="
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.04]
                    px-4
                    py-3
                    text-xs
                    leading-5
                    text-red-400
                  "
                >
                  The contact form is not configured correctly yet.
                  Please try again later.
                </div>
              )}


              {status === 'success' && (
                <div
                  data-aos="fade-up"
                  className="
                    rounded-xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/[0.04]
                    px-4
                    py-3
                    text-sm
                    leading-5
                    text-emerald-400
                  "
                >
                  Message sent successfully. I'll get back to you soon.
                </div>
              )}


              {status === 'error' && (
                <div
                  data-aos="fade-up"
                  className="
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.04]
                    px-4
                    py-3
                    text-sm
                    leading-5
                    text-red-400
                  "
                >
                  Something went wrong while sending your message.
                  Please try again or contact me directly by email.
                </div>
              )}


              {status === 'network-error' && (
                <div
                  data-aos="fade-up"
                  className="
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.04]
                    px-4
                    py-3
                    text-sm
                    leading-5
                    text-red-400
                  "
                >
                  Couldn't connect to the email service.
                  Please check your connection and try again.
                </div>
              )}


              {/* =================================================
                  BUTTON
              ================================================== */}

              <div
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="750"
                className="pt-1"
              >

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="
                    group
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2.5
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
                    hover:shadow-xl
                    hover:shadow-orange-500/15
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

              </div>


              {/* Privacy note */}

              <div
                data-aos="fade"
                data-aos-duration="700"
                data-aos-delay="850"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  pt-1
                "
              >

                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-orange-500/50"
                />

                <p className="text-[10px] text-zinc-700">
                  Your message will be sent securely.
                </p>

              </div>

            </form>

          </div>

        </div>


        {/* =======================================================
            BOTTOM FOOTER
        ======================================================== */}

        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="400"
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.06]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

         

        </div>

      </div>

    </section>
  )
}

export default Contact