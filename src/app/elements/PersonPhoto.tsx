"use client"
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import { SparklesCore } from "../components/ui/sparkles";

export default function PersonPhoto() {
    return (
        <>
            <div className="h-fit relative w-full bg-black flex flex-col items-center justify-center rounded-md">
                <h1 className="text-6xl font-bold text-center text-white relative z-20">
                    We Are GAMOST
                </h1>
                <div className="w-[40rem] h-20 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
                <ParallaxScroll images={images} />
            </div>
        </>
    )
}

const images = [
    "/person/person (1).webp",
    "/person/person (2).webp",
    "/person/person (3).webp",
    "/person/person (4).webp",
    "/person/person (5).webp",
    "/person/person (6).webp",
    "/person/person (7).webp",
    "/person/person (8).webp",
    "/person/person (9).webp",
    "/person/person (10).webp",
    "/person/person (11).webp",
    "/person/person (12).webp",
    "/person/person (13).webp",
    "/person/person (14).webp",
    "/person/person (15).webp",
    "/person/person (16).webp",
    "/person/person (17).webp",
    "/person/person (18).webp",
    "/person/person (19).webp",
]