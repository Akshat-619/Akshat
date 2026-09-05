import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const canvasRef = useRef(null)
  const cursorRef = useRef(null)

  const mouse = useRef({
    x: -100,
    y: -100,
  })

  const current = useRef({
    x: -100,
    y: -100,
  })

  const points = useRef([])
  const animationFrame = useRef(null)

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    /* =========================================================
       CANVAS RESIZE
    ========================================================= */

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1

      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr

      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)


    /* =========================================================
       MOUSE MOVEMENT
    ========================================================= */

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)


    /* =========================================================
       ANIMATION
    ========================================================= */

    const animate = () => {
      /* Smooth cursor movement */

      current.current.x +=
        (mouse.current.x - current.current.x) * 0.38

      current.current.y +=
        (mouse.current.y - current.current.y) * 0.38


      const x = current.current.x
      const y = current.current.y


      /* =======================================================
         MAIN CURSOR POSITION
      ======================================================= */

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${x}px, ${y}px, 0)
          translate(-50%, -50%)
        `
      }


      /* =======================================================
         ADD CENTER POINT TO BRUSH PATH
      ======================================================= */

      const lastPoint =
        points.current[points.current.length - 1]

      if (
        !lastPoint ||
        Math.hypot(
          x - lastPoint.x,
          y - lastPoint.y
        ) > 1
      ) {
        points.current.push({
          x,
          y,
          life: 1,
        })
      }


      /* =======================================================
         TRAIL LENGTH
      ======================================================= */

      if (points.current.length > 60) {
        points.current.shift()
      }


      /* =======================================================
         CLEAR CANVAS
      ======================================================= */

      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      )


      /* =======================================================
         DRAW BRUSH STROKE
      ======================================================= */

      const path = points.current

      if (path.length > 1) {
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        for (let i = 1; i < path.length; i++) {
          const previous = path[i - 1]
          const point = path[i]

          /*
            0 = oldest
            1 = closest to cursor
          */

          const progress =
            i / (path.length - 1)


          /* ---------------------------------------------------
             SUBTLE ORANGE OPACITY
          --------------------------------------------------- */

          const opacity =
            0.025 + progress * 0.18


          /* ---------------------------------------------------
             WIDER BRUSH
          --------------------------------------------------- */

          const width =
            4 + progress * 2.5


          /* ---------------------------------------------------
             DRAW CENTERED STROKE
          --------------------------------------------------- */

          ctx.beginPath()

          ctx.moveTo(
            previous.x,
            previous.y
          )

          ctx.lineTo(
            point.x,
            point.y
          )

          ctx.strokeStyle =
            `rgba(249, 115, 22, ${opacity})`

          ctx.lineWidth = width

          ctx.stroke()
        }
      }


      /* =======================================================
         FADE OLD POINTS
      ======================================================= */

      points.current.forEach((point) => {
        point.life -= 0.032
      })

      points.current =
        points.current.filter(
          (point) => point.life > 0
        )


      /* =======================================================
         NEXT FRAME
      ======================================================= */

      animationFrame.current =
        requestAnimationFrame(animate)
    }

    animate()


    /* =========================================================
       CLEANUP
    ========================================================= */

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      window.removeEventListener(
        'resize',
        resizeCanvas
      )

      cancelAnimationFrame(
        animationFrame.current
      )
    }
  }, [])


  return (
    <>
      {/* =======================================================
          BRUSH TRAIL
      ======================================================== */}

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-[9997]
          hidden
          md:block
        "
      />


      {/* =======================================================
          MAIN ORANGE CURSOR
      ======================================================== */}

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          hidden
          h-3.5
          w-3.5
          rounded-full
          bg-orange-500
          shadow-[0_0_8px_rgba(249,115,22,0.7),0_0_18px_rgba(249,115,22,0.18)]
          md:block
        "
      />
    </>
  )
}

export default CustomCursor