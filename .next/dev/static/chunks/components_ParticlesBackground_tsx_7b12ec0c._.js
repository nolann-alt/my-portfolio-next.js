(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ParticlesBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticlesBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/dist/Particles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$all$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/all/browser/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ParticlesBackground() {
    _s();
    const [init, setInit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // On attend le chargement complet de tspartciles avant de mettre setInit à vrai pour afficher les particules
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticlesBackground.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initParticlesEngine"])({
                "ParticlesBackground.useEffect": async (engine)=>{
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$all$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadAll"])(engine);
                }
            }["ParticlesBackground.useEffect"]).then({
                "ParticlesBackground.useEffect": ()=>{
                    setInit(true);
                }
            }["ParticlesBackground.useEffect"]);
        }
    }["ParticlesBackground.useEffect"], []);
    const options = {
        background: {
            color: {
                value: "#000000"
            }
        },
        fullScreen: {
            enable: false
        },
        // ===== ÉTOILES DE FOND =====
        particles: {
            number: {
                value: 300,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: [
                    "#ffffff",
                    "#a8daff",
                    "#c9b3ff"
                ]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 1
                },
                animation: {
                    enable: true,
                    speed: 3,
                    sync: false
                }
            },
            size: {
                value: {
                    min: 0.5,
                    max: 3
                },
                random: true
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        children: init && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$dist$2f$Particles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "tsparticles",
            className: "fixed inset-0",
            options: options
        }, void 0, false, {
            fileName: "[project]/components/ParticlesBackground.tsx",
            lineNumber: 55,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ParticlesBackground.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
_s(ParticlesBackground, "ZeGOyvJu811hnKdhoCawhpLF0Nw=");
_c = ParticlesBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticlesBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ParticlesBackground_tsx_7b12ec0c._.js.map