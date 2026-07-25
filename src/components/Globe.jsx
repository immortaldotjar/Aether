import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

const MARKERS = [
    { location: [29.5502, -95.093], size: 0.05 },   // Houston
    { location: [5.236, -52.7683], size: 0.05 },     // Kourou
    { location: [45.92, 63.342], size: 0.05 },       // Baikonur
    { location: [30.4, 130.97], size: 0.05 },        // Tanegashima
    { location: [13.7199, 80.2304], size: 0.05 },    // Sriharikota
    { location: [49.873, 8.622], size: 0.05 },       // Darmstadt
    { location: [-23.7, 133.88], size: 0.05 },       // Alice Springs
    { location: [78.2232, 15.6469], size: 0.05 },    // Svalbard
]

const Globe = () => {
    const canvasRef = useRef(null)
    const wrapRef = useRef(null)
    const phiRef = useRef(0)

    useEffect(() => {
        let width = 0
        const onResize = () => {
            if (wrapRef.current) width = wrapRef.current.offsetWidth
        }
        window.addEventListener('resize', onResize)
        onResize()

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.32,
            dark: 1,
            diffuse: 1.15,
            mapSamples: 14000,
            mapBrightness: 5.5,
            baseColor: [0.094, 0.149, 0.475],   // surface-container-highest (#182679)
            markerColor: [0.184, 0.184, 0.894], // primary (#2F2FE4)
            glowColor: [0.086, 0.173, 0.553],   // surface-bright (#162c8d)
            markers: MARKERS,
            onRender: (state) => {
                state.phi = phiRef.current
                phiRef.current += 0.0022
                state.width = width * 2
                state.height = width * 2
            },
        })
        return () => {
            globe.destroy()
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <div
            ref={wrapRef}
            className="pointer-events-none aspect-square w-[420px] sm:w-[620px] lg:w-[820px]"
        >
            <canvas
                ref={canvasRef}
                className="h-full w-full opacity-90"
                style={{ contain: 'layout paint size' }}
            />
        </div>
    )
}

export default Globe