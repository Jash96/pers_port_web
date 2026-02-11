"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Define strict types for our project data
type SubProject = {
    title: string;
    description: string | React.ReactNode;
    images: string[]; // Changed to array for carousel
    tags: string[];
    link?: string;
};

type Project = {
    id: string;
    title: string;
    role: string;
    description: string | React.ReactNode;
    highlight?: string;
    image: string; // Keep simple string for main project cover
    images?: string[]; // Optional array for carousel (if multiple media needed for main project)
    tags: string[];
    color: string;
    subProjects?: SubProject[];
};

const projects: Project[] = [
    {
        id: "01",
        title: "Intel Analyst @ Messari, Inc.",
        role: "Full Time Job",
        description: (
            <>
                <p>
                    3 years providing coverage of 500+ digital assets for{" "}
                    <a
                        href="https://messari.io/intel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan hover:underline decoration-cyan/50 underline-offset-4"
                    >
                        Messari Intel
                    </a>
                    , an enterprise-grade product for clients such as Coinbase, crypto hedge funds, node validators and others. Published over 10,000+ Intel high-level summaries and updates on everything from protocol updates, regulatory changes, and security events - Became a domain specialist in both blockchain networks and applications.
                </p>
                <p>
                    Assisted in securing an established protocol lead for Messari Research and Due Diligence services which resulted in a $100K Deal with the client. Constantly contribute to improving workflow efficiencies and other ad-hoc projects across the company.
                </p>
                <p>
                    Previously - Digital Asset Research Analyst @ Treehouse Finance
                </p>
            </>
        ),
        image: "/home_images/web3_website_photo1.jpeg",
        tags: ["Market Intelligence", "Enterprise Product", "Writing"],
        color: "cyan"
    },
    {
        id: "02",
        title: "AI Automation & Agentic Workflow Development",
        role: "Passion Projects with AI",
        description: "Built over 20 AI-powered workflows using n8n and Claude Code—from economic calendar Telegram bots to Web3 & Blockchain news aggregators on X. Recently dove into agentic coding with Antigravity and OpenClaw, building various tools from personal assistants to professional website builders.",
        image: "/home_images/ai_automation_art.jpeg",
        tags: ["n8n", "Flowise", "Claude", "Agentic Coding"],
        color: "purple",
        subProjects: [
            {
                title: "Self-Updating Weekly Economic Calendar On Telegram",
                description: "An automated workflow that scrapes economic data sources, filters for high-impact events, and pushes a clean, formatted weekly schedule to a Telegram channel. It ensures verified, timely financial data delivery without manual intervention.",
                images: [
                    "/02_1_Project/Economic_Calendar_1.jpg",
                    "/02_1_Project/Economic_Calendar_2.jpg"
                ],
                tags: ["n8n", "Telegram Bot", "Automation", "Data Scraping"]
            },
            {
                title: "Personal Assistant with Multi-App Access",
                description: "A comprehensive AI assistant integrating Google Calendar, Gmail, and Slack. It can schedule meetings, summarize unread emails, and manage tasks across platforms using natural language commands, acting as a true digital executive assistant.",
                images: [
                    "/02_3_Project/Personal_Assistant_master.jpg",
                    "/02_3_Project/Personal_Assistant_sub1.jpg",
                    "/02_3_Project/Personal_Assistant_sub2.jpg",
                    "/02_3_Project/Personal_Assistant_sub3.jpg",
                    "/02_3_Project/Personal_Assistant_sub4.jpg",
                    "/02_3_Project/Personal_Assistant_sub5.jpg"
                ],
                tags: ["Agentic AI", "Cross-Platform", "Productivity", "LLM"]
            },
            {
                title: "Crypto News Aggregator on X",
                description: "A workflow that provides key insights into recent developments in the space on a 12 hourly basis. It monitors trusted crypto news outlets and influencers on X (formerly Twitter), uses LLMs to synthesize the noise into signal, and publishes concise summaries to keep followers updated on market-moving events.",
                images: [
                    "/02_2_Project/Crypto News Aggregator_X.jpg"
                ],
                tags: ["Market Intelligence", "Social Media Automation", "Crypto", "X API"]
            },
            {
                title: "RAG Chatbot for a Business Website",
                description: "Examples of Retrieval Augmented Generation (RAG) implementation using Pinecone vector databases. This chatbot provides accurate, context-aware answers by querying a custom knowledge base of business documents, ensuring customers receive precise information without hallucinations.",
                images: [
                    "/02_4_Project/Rag_App_1.jpg",
                    "/02_4_Project/Rag_App_2.jpg"
                ],
                tags: ["RAG", "Pinecone", "Vector DB", "Chatbot"]
            }
        ]
    },
    {
        id: "03",
        title: "Algorithmic Trading Systems",
        role: "Algo-Trading Strategy Developer",
        description: "4+ years building automated trading strategies with a small team. Developed 100+ strategies as a Project Manager and deployed several to live markets with multi-hundred percent returns. Focus on systematic approach and risk management in volatile markets.",
        image: "/home_images/algotrading_art.jpeg",
        images: [
            "/home_images/algotrading_art.jpeg",
            "/03_Project/AlgoTradingExample1.mp4",
            "/03_Project/AlgoTrading_example2.jpg"
        ],
        tags: ["MQL5", "Algorithmic Trading", "Risk Management", "Project Management"],
        color: "magenta"
    },
    {
        id: "04",
        title: "On-Chain Data Analytics",
        role: "On-chain data sleuthing",
        description: (
            <>
                Occasionally investigate trends and performances of crypto protocols and networks on{" "}
                <a
                    href="https://dune.com/pepperones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan hover:underline decoration-cyan/50 underline-offset-4"
                >
                    Dune
                </a>
                , building queries and dashboards to extract meaningful insights from raw on-chain data.
            </>
        ),
        image: "/04_Project/dune0.jpg",
        images: [
            "/04_Project/dune0.jpg",
            "/04_Project/dune1.jpg",
            "/04_Project/dune2.jpg"
        ],
        tags: ["SQL", "Dune Analytics", "On-Chain Data"],
        color: "cyan"
    }
];

// Reusable Navigation Button Component
function NavButton({ onClick, icon: Icon, label, className = "" }: { onClick: () => void, icon: any, label: string, className?: string }) {
    return (
        <button
            onClick={onClick}
            className={`group flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 backdrop-blur-sm ${className}`}
            aria-label={label}
        >
            <Icon size={24} className="text-text-muted group-hover:text-white transition-colors" />
        </button>
    );
}

// Separate component to handle state and animation for each project row
function ProjectRow({ project, index }: { project: Project; index: number }) {
    // Current index of the sub-project being viewed. -1 means the "Main" project view.
    const [subProjectIndex, setSubProjectIndex] = useState(-1);
    const [direction, setDirection] = useState(0);

    // Derived state for the current content to display
    const isMainView = subProjectIndex === -1;
    const hasSubProjects = project.subProjects && project.subProjects.length > 0;

    const currentTitle = isMainView ? project.title : project.subProjects![subProjectIndex].title;
    const currentDescription = isMainView ? project.description : project.subProjects![subProjectIndex].description;

    // Image Handling
    const [imageIndex, setImageIndex] = useState(0);

    // Reset image index when switching sub-project
    useEffect(() => {
        setImageIndex(0);
    }, [subProjectIndex]);

    // Determines current images to show. Main view prioritizes 'images' array if present, else single 'image'.
    const currentImages = isMainView
        ? (project.images && project.images.length > 0 ? project.images : [project.image])
        : project.subProjects![subProjectIndex].images;

    // Helper to get current image
    const currentImage = currentImages[imageIndex];

    const currentTags = isMainView ? project.tags : project.subProjects![subProjectIndex].tags;
    const currentRole = isMainView ? project.role : `Featured Project ${subProjectIndex + 1}`;

    const handleNext = () => {
        if (!hasSubProjects) return;
        setDirection(1);
        setSubProjectIndex((prev) => {
            if (prev === project.subProjects!.length - 1) return -1;
            return prev + 1;
        });
    };

    const handlePrev = () => {
        if (!hasSubProjects) return;
        setDirection(-1);
        setSubProjectIndex((prev) => {
            if (prev === -1) return project.subProjects!.length - 1;
            return prev - 1;
        });
    };

    // Image Carousel Handlers
    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentImages.length <= 1) return;
        setImageIndex((prev) => (prev + 1) % currentImages.length);
    };

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (currentImages.length <= 1) return;
        setImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    };

    // Animation variants
    const slideVariants = {
        hidden: (direction: number) => ({ opacity: 0, x: direction > 0 ? 50 : -50 }),
        visible: { opacity: 1, x: 0 },
        exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -50 : 50 })
    };

    return (
        <div id={`project-${project.id}`} className="scroll-mt-32">
            {/* Wrapper for side-by-side buttons on desktop */}
            <div className="flex items-center gap-4 lg:gap-8">

                {/* Desktop PREV Button (Left of everything) */}
                <div className="hidden lg:flex flex-none w-12 justify-end">
                    {hasSubProjects && !isMainView && (
                        <NavButton onClick={handlePrev} icon={ArrowLeft} label="Previous Project" />
                    )}
                </div>

                {/* Main Content Area */}
                <motion.div
                    className={`flex-grow flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center min-w-0`}
                >
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative space-y-6">
                        <div className="relative group perspective-1000">
                            <div className={`absolute -inset-4 rounded-3xl opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40 bg-${project.color}`} />
                            <div className="relative rounded-2xl overflow-hidden glass aspect-video ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500 transform group-hover:scale-[1.02]">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={subProjectIndex} // Main project switch triggers slide
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <div className="absolute inset-0 bg-void/20 z-10 pointer-events-none" />

                                        {/* Inner Image Display (Fading) */}
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImage}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0"
                                            >
                                                {currentImage.endsWith('.mp4') || currentImage.endsWith('.webm') ? (
                                                    <video
                                                        src={currentImage}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="object-cover w-full h-full"
                                                    />
                                                ) : (
                                                    <Image
                                                        src={currentImage}
                                                        alt={currentTitle}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                )}
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Swipe Gesture Layer (Invisible Overlay) */}
                                        {currentImages.length > 1 && (
                                            <motion.div
                                                className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
                                                drag="x"
                                                dragConstraints={{ left: 0, right: 0 }}
                                                dragElastic={0.2}
                                                onDragEnd={(e, { offset, velocity }) => {
                                                    const swipe = offset.x; // positive = right, negative = left
                                                    if (swipe < -50) {
                                                        // Swiped LEFT -> Next Image
                                                        setImageIndex((prev) => (prev + 1) % currentImages.length);
                                                    } else if (swipe > 50) {
                                                        // Swiped RIGHT -> Prev Image
                                                        setImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
                                                    }
                                                }}
                                            />
                                        )}

                                        {/* Image Carousel Controls (Visual Overlay) */}
                                        {currentImages.length > 1 && (
                                            <>
                                                <button
                                                    onClick={handlePrevImage}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white z-40 transition-opacity hidden md:block"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>
                                                <button
                                                    onClick={handleNextImage}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white z-40 transition-opacity hidden md:block"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                                {/* Image Indicator Dots */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none">
                                                    {currentImages.map((_, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === imageIndex ? `bg-${project.color}` : 'bg-white/30'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* MOBILE Controls (Below Image) */}
                        {hasSubProjects && (
                            <div className="flex lg:hidden justify-between items-center px-2">
                                <div className={!isMainView ? "opacity-100" : "opacity-0 pointer-events-none"}>
                                    <NavButton onClick={handlePrev} icon={ArrowLeft} label="Previous" />
                                </div>
                                <div className="text-text-muted text-xs font-mono uppercase tracking-widest">
                                    {isMainView ? "View Featured" : `${subProjectIndex + 1} / ${project.subProjects!.length}`}
                                </div>
                                <div>
                                    <NavButton onClick={handleNext} icon={ArrowRight} label="Next" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={subProjectIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="space-y-6"
                            >
                                <div className={`flex items-center gap-4 text-${project.color}`}>
                                    <span className="font-mono">
                                        {isMainView ? `0${index + 1}` : `0${index + 1}.${subProjectIndex + 1}`}
                                    </span>
                                    <div className={`h-px w-12 bg-${project.color}/50`} />
                                    <span className="text-sm font-semibold tracking-wider uppercase">{currentRole}</span>
                                </div>

                                <h2
                                    className="text-3xl md:text-4xl font-bold"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {currentTitle}
                                </h2>

                                <div className="text-lg text-text-muted leading-relaxed space-y-4">
                                    {typeof currentDescription === 'string' ? (
                                        currentDescription.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))
                                    ) : (
                                        <div className="space-y-4">{currentDescription}</div>
                                    )}
                                </div>

                                {isMainView && project.highlight && (
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <span className={`text-${project.color} font-semibold mr-2`}>Highlight:</span>
                                        <span className="text-text-muted italic">{project.highlight}</span>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {currentTags.map(tag => (
                                        <span
                                            key={tag}
                                            className={`px-3 py-1 text-xs font-mono rounded-full border border-${project.color}/30 text-${project.color} bg-${project.color}/5`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Desktop NEXT Button (Right of everything) */}
                <div className="hidden lg:flex flex-none w-12 justify-start">
                    {hasSubProjects && (
                        <div className="relative flex flex-col items-center">
                            <NavButton onClick={handleNext} icon={ArrowRight} label="Next Project" />
                            {isMainView && (
                                <span className="absolute top-full mt-2 w-max text-[10px] text-cyan uppercase tracking-widest text-center leading-tight">
                                    Click to see<br />examples
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-void text-text relative overflow-hidden selection:bg-cyan/30">
            <Navbar />

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
            </div>

            <div className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-text-muted hover:text-cyan transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Work and <span className="italic text-text-muted/80">(featured)</span> <span className="text-gradient">Projects</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-text-muted max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        My profession, as well as hobbies and passion projects I work on.
                    </motion.p>
                </div>

                {/* Projects List */}
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectRow key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
