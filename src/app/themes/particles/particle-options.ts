import type { ISourceOptions } from "@tsparticles/engine";

export const particleOptions: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: {
                enable: true
            }
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#0193a0",
        },
        links: {
            color: "#0193a0",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
            outModes: {
                default: "bounce",
            },
        },
        number: {
            value: 160,
            density: {
                enable: true,
            },
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}