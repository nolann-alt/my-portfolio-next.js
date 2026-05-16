/**
 * ParticlesBackground - Particules en arrière-plan (étoiles animées)
 * @description Particules animées en arrière-plan utilisant tsparticles
 * @component Client - Initialisation asynchrone de tsparticles
 */

"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);

    // Initialisation de tsparticles avant l'affichage
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: any = {
        background: { color: { value: "#000000" } },
        fullScreen: { enable: false },
        particles: {
            number: { value: 300, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#a8daff", "#c9b3ff"] },
            shape: { type: "circle" },
            opacity: { value: { min: 0.1, max: 1 }, animation: { enable: true, speed: 3, sync: false } },
            size: { value: { min: 0.5, max: 3 }, random: true },
            move: { enable: true, speed: 1, direction: "none", random: true },
        },
    };

    return (
        <div className="absolute inset-0">
            {init && <Particles id="tsparticles" className="fixed inset-0" options={options} />}
        </div>
    );
}