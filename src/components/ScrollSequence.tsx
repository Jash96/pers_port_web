"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";

const frameCount = 96;

export default function ScrollSequence({
    onLoadComplete,
}: {
    onLoadComplete?: () => void;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Scroll logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Smooth scroll progress to avoid jitter
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 20,
        stiffness: 100,
    });

    // Map scroll (0 to 1) to frame index (0 to frameCount - 1)
    const frameIndex = useTransform(smoothProgress, [0, 1], [1, frameCount - 1]);

    // Opacity for scroll prompt — must be at top level (rules of hooks)
    const scrollPromptOpacity = useTransform(smoothProgress, [0.9, 1], [1, 0]);

    useEffect(() => {
        // Reset frames array on mount
        framesRef.current = new Array(frameCount);
        let loadedCount = 0;
        let isMounted = true;

        const loadImages = async () => {
            const loadPromises = [];

            for (let i = 1; i <= frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const frameNum = i.toString().padStart(3, "0");
                    img.src = `/sequence_v2/ezgif-frame-${frameNum}.jpg`;

                    img.onload = () => {
                        if (isMounted) {
                            loadedCount++;
                            setProgress((loadedCount / frameCount) * 100);
                            framesRef.current[i - 1] = img;
                        }
                        resolve();
                    };
                    img.onerror = () => {
                        if (isMounted) {
                            loadedCount++;
                            setProgress((loadedCount / frameCount) * 100);
                        }
                        resolve();
                    };
                });
                loadPromises.push(promise);
            }

            await Promise.all(loadPromises);
            if (isMounted) {
                setLoading(false);
                onLoadComplete?.();
            }
        };

        loadImages();

        // Fallback if loading takes too long
        const timeout = setTimeout(() => {
            if (isMounted) {
                setLoading(false);
            }
        }, 10000);

        return () => { isMounted = false; clearTimeout(timeout); };
    }, [onLoadComplete]);

    // Render loop
    useEffect(() => {
        if (loading) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const frames = framesRef.current;

        // Enable high quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Handle high DPI displays
        const updateCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
        };

        const render = (index: number) => {
            const safeIndex = Math.max(0, Math.min(Math.round(index), frameCount - 1));
            const frame = frames[safeIndex];

            if (!frame || !frame.width) {
                return;
            }

            // Scale image to cover (object-fit: cover equivalent)
            const scale = Math.max(
                canvas.width / frame.width,
                canvas.height / frame.height
            );
            const x = (canvas.width - frame.width * scale) / 2;
            const y = (canvas.height - frame.height * scale) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                frame,
                x,
                y,
                frame.width * scale,
                frame.height * scale
            );
        };

        // Initial setup
        updateCanvasSize();
        render(0);

        // Subscribe to scroll changes
        const unsubscribe = frameIndex.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        // Handle resize
        const handleResize = () => {
            updateCanvasSize();
            render(frameIndex.get());
        };
        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        }
    }, [loading, frameIndex]);

    return (
        <>
            <AnimatePresence>
                {loading && <Preloader progress={progress} />}
            </AnimatePresence>
            <div ref={containerRef} className="h-[150vh] relative">
                <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover"
                    />
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-10 pointer-events-none"
                        style={{ opacity: scrollPromptOpacity }}
                    >
                        <p className="text-sm uppercase tracking-widest text-white/50 animate-pulse">Scroll to explore</p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
