import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    CheckCircle2,
    ChevronDown,
    Code2,
    ExternalLink,
    GraduationCap,
    Mail,
    MapPin,
    MessageCircle,
    Send,
    User,
} from "lucide-react";

import { Link } from "react-router";

import Image from "../../assets/Porfile.jpg";

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function GithubLogo({ className = "h-5 w-5" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.15c-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.2.66.79.55C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
        </svg>
    );
}

function LinkedinLogo({ className = "h-5 w-5" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46ZM20.44 0H3.56C1.6 0 0 1.6 0 3.56v16.88C0 22.4 1.6 24 3.56 24h16.88C22.4 24 24 22.4 24 20.44V3.56C24 1.6 22.4 0 20.44 0Z" />
        </svg>
    );
}

/* -------------------------------------------------------------------------- */
/* Home Page                                                                  */
/* -------------------------------------------------------------------------- */

function HomePage() {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    const quickInfo = [
        {
            label: "Name",
            value: "Bishoy Tharwat",
            icon: User,
        },
        {
            label: "Location",
            value: "Cairo, Egypt",
            icon: MapPin,
        },
        {
            label: "Email",
            value: "byshwythrwt8@gmail.com",
            icon: Mail,
            isEmail: true,
        },
        {
            label: "GitHub",
            value: "github.com/bishoytharwat2005",
            href: "https://github.com/bishoytharwat2005",
            icon: GithubLogo,
            isLink: true,
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/bishoy-tharwat-996987341",
            href: "https://www.linkedin.com/in/bishoy-tharwat-996987341",
            icon: LinkedinLogo,
            isLink: true,
        },
        {
            label: "Arabic",
            value: "Native",
        },
        {
            label: "English",
            value: "Proficient",
        },
    ];

    const skillGroups = [
        {
            title: "Front-End",
            description:
                "Building modern, responsive and component-based web interfaces.",
            icon: Code2,
            skills: [
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Zustand",
                "Responsive Design",
                "Component-Based UI",
            ],
        },
        {
            title: "Tools & DevOps",
            description:
                "Development tools and workflows used to build and deploy projects.",
            icon: BriefcaseBusiness,
            skills: [
                "Git",
                "GitHub",
                "Vercel",
                "VS Code",
                "Visual Studio",
                "Vite",
                "pnpm",
                "API Integration",
            ],
        },
        {
            title: "Programming & Backend",
            description:
                "Programming fundamentals, backend technologies and database knowledge.",
            icon: Code2,
            skills: [
                "C#",
                ".NET Core",
                "ASP.NET Core MVC",
                "Entity Framework Core",
                "Java OOP",
                "Python",
                "SQL Server",
                "Data Structures & Algorithms",
            ],
        },
        {
            title: "Soft Skills",
            description:
                "Professional skills that support effective development and teamwork.",
            icon: CheckCircle2,
            skills: [
                "Communication",
                "Teamwork",
                "Problem-Solving",
                "Adaptability",
                "Time Management",
                "Clean Code",
                "Continuous Learning",
            ],
        },
    ];

    const projects = [
        {
            title: "E-Commerce Store",
            description:
                "A modern e-commerce application with product browsing, cart management, authentication and responsive UI.",
            image: "/project/store .png",
            category: "Front-End",
            technologies: [
                "React",
                "Tailwind CSS",
                "API",
                "Zustand",
                "React Router",
                "React Hook Form",
            ],
            github:
                "https://github.com/bishoytharwat2005/Boom-Store-React",
            live: "https://boom-store-react.vercel.app/",
            color: "blue",
        },
        {
            title: "SleepView Booking",
            description:
                "A responsive hotel booking website with a clean interface and modern booking experience.",
            image: "/project/sleepview.png",
            category: "Hotel Booking",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            github:
                "https://github.com/bishoytharwat2005/SleepView-Booking",
            live: "https://bishoytharwat2005.github.io/SleepView-Booking/",
            color: "purple",
        },
        {
            title: "Premium Gallery",
            description:
                "A responsive image gallery website with interactive layouts and a modern visual experience.",
            image: "/project/premium-gallery.png",
            category: "Front-End",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            github:
                "https://github.com/bishoytharwat2005/Image-Gallery-CodeAlpha",
            live: "https://bishoytharwat2005.github.io/Image-Gallery-CodeAlpha/",
            color: "green",
        },
        {
            title: "Music Player",
            description:
                "A browser-based music player with interactive controls and a responsive interface.",
            image: "/project/music-player.png",
            category: "Front-End",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            github:
                "https://github.com/bishoytharwat2005/Music-player",
            live: "https://bishoytharwat2005.github.io/Music-player/",
            color: "orange",
        },
        {
            title: "Marketing Website Astro",
            description:
                "A modern marketing website built with Astro and Tailwind CSS with a responsive design.",
            image: "/project/astro.png",
            category: "Front-End",
            technologies: ["Astro", "Tailwind CSS", "JavaScript"],
            github:
                "https://github.com/bishoytharwat2005/Marketing-Website-Astro--Tailwind-CSS",
            live: "https://bishoytharwat2005.github.io/Marketing-Website-Astro--Tailwind-CSS/",
            color: "pink",
        },
        {
            title: "Landio",
            description:
                "A clean landing page project focused on responsive layouts and modern front-end development.",
            image: "/project/project-2.png",
            category: "Front-End",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            github: "https://github.com/bishoytharwat2005/Landio",
            live: "https://bishoytharwat2005.github.io/Landio/",
            color: "blue",
        },
        {
            title: "Axis Web",
            description:
                "A responsive web interface built with HTML and CSS with a clean modern layout.",
            image: "/project/axis.png",
            category: "Front-End",
            technologies: ["HTML5", "CSS3"],
            github: "https://github.com/bishoytharwat2005/Axis--web",
            live: "https://bishoytharwat2005.github.io/Axis--web/",
            color: "purple",
        },
        {
            title: "Easy Com",
            description:
                "An AI-powered sign language translation project using React, JavaScript and MediaPipe.",
            image: "/projects/easy-com.png",
            category: "AI & Front-End",
            technologies: ["React", "JavaScript", "MediaPipe"],
            github: null,
            live: null,
            comingSoon: true,
            color: "green",
        },
        {
            title: "Food restaurant",
            description:
                "A responsive web interface built with HTML and CSS with a clean modern layout.",
            image: "/projects/food-restaurant.png",
            category: "Front-End",
            technologies: ["React", "JavaScript", "MediaPipe", "Tailwind CSS", "Zustand", "React Router", "React Hook Form", "API"],
            github: null,
            live: null,
            comingSoon: true,
            color: "orange",
        },
    ];

    const visibleProjects = showAllProjects
        ? projects
        : projects.slice(0, 3);

    const colorClasses = {
        blue: {
            badge:
                "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
            hover: "hover:border-blue-500/40",
            line: "bg-blue-500",
        },
        purple: {
            badge:
                "border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400",
            hover: "hover:border-purple-500/40",
            line: "bg-purple-500",
        },
        green: {
            badge:
                "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",
            hover: "hover:border-green-500/40",
            line: "bg-green-500",
        },
        orange: {
            badge:
                "border-orange-500/20 bg-orange-500/10 text-orange-600 dark:text-orange-400",
            hover: "hover:border-orange-500/40",
            line: "bg-orange-500",
        },
        pink: {
            badge:
                "border-pink-500/20 bg-pink-500/10 text-pink-600 dark:text-pink-400",
            hover: "hover:border-pink-500/40",
            line: "bg-pink-500",
        },
    };

    const handleScrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <div className="overflow-hidden">
            {/* ------------------------------------------------------------------ */}
            {/* Hero */}
            {/* ------------------------------------------------------------------ */}

            <section
                data-home-section="home"
                className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#f5f4f0] text-gray-900 dark:bg-slate-950 dark:text-white"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
                </div>

                <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
                    {/* Left */}

                    <div className="relative z-10 max-w-3xl">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                            </span>

                            Open to opportunities
                        </div>

                        <h1 className="text-[3rem] font-black leading-[0.94] tracking-[-0.05em] sm:text-7xl lg:text-[5.6rem] xl:text-[6.2rem]">
                            <span className="block text-gray-950 dark:text-white">
                                Hi, I'm
                            </span>

                            <span className="block text-blue-700 dark:text-blue-400">
                                Bishoy
                            </span>

                            <span className="block text-blue-700 dark:text-blue-400">
                                Tharwat
                            </span>

                            <span className="mt-4 block text-3xl font-black tracking-[-0.03em] text-orange-600 sm:text-5xl lg:text-[4.2rem]">
                                Frontend
                            </span>

                            <span className="block text-gray-950 dark:text-white">
                                Developer
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-slate-300">
                            Computer Science student and Frontend Developer
                            focused on building modern, responsive and
                            interactive web experiences using React and modern
                            web technologies.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Button
                                onClick={handleScrollToProjects}
                                className="h-14 rounded-xl bg-blue-700 px-8 text-base font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
                            >
                                View Projects

                                <ArrowDown className="ml-2 h-5 w-5" />
                            </Button>

                            <Link
                                to="/contact"
                                className="inline-flex h-14 items-center justify-center rounded-xl border border-gray-300 bg-white px-8 text-base font-bold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                            >
                                Get In Touch

                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>

                        <div className="mt-8 flex items-center gap-3">
                            <a
                                href="https://github.com/bishoytharwat2005"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:text-gray-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
                            >
                                <GithubLogo className="h-5 w-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/bishoy-tharwat-996987341"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                            >
                                <LinkedinLogo className="h-5 w-5" />
                            </a>

                            <a
                                href="mailto:byshwythrwt8@gmail.com"
                                aria-label="Email"
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-400 dark:hover:text-orange-400"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right */}

                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-3xl sm:h-[480px] sm:w-[480px]" />

                        <div className="relative">
                            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-3 shadow-[0_25px_70px_rgba(0,0,0,0.12)] dark:border-slate-700 dark:bg-slate-900">
                                <img
                                    src={Image}
                                    alt="Bishoy Tharwat"
                                    className="h-[430px] w-[320px] rounded-[1.5rem] object-cover object-top sm:h-[560px] sm:w-[410px]"
                                />
                            </div>

                            <div className="absolute -right-3 -top-5 rounded-2xl bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-orange-600/25 transition-transform duration-300 hover:-translate-y-1 sm:-right-8 sm:-top-6 sm:px-6 sm:py-4 sm:text-base">
                                React Developer 🚀
                            </div>

                            <div className="absolute -bottom-6 -left-3 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-xl sm:-left-10 sm:px-6 sm:py-4 dark:border-slate-700 dark:bg-slate-900">
                                <p className="text-xs font-medium text-gray-500 dark:text-slate-400">
                                    Based in
                                </p>

                                <div className="mt-1 flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />

                                    <span className="text-sm font-bold text-blue-800 sm:text-base dark:text-blue-400">
                                        Cairo, Egypt
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* About */}
            {/* ------------------------------------------------------------------ */}

            <section
                id="about"
                data-home-section="about"
                className="border-t border-slate-800 bg-slate-950 py-24 text-white"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                                About Me
                            </span>

                            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                                Turning ideas into{" "}
                                <span className="text-blue-400">
                                    digital experiences
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                                I'm a Computer Science student and Front-End
                                Developer passionate about building clean,
                                responsive and interactive web applications.
                            </p>

                            <p className="mt-5 max-w-xl leading-7 text-slate-400">
                                I enjoy learning new technologies, solving
                                problems and transforming ideas into practical
                                web experiences with attention to usability,
                                performance and design.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    to="/about"
                                    className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-7 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-blue-700"
                                >
                                    More About Me

                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>

                                <a
                                    href="mailto:byshwythrwt8@gmail.com"
                                    className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-700 px-7 font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-900"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {quickInfo.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"
                                    >
                                        <div className="flex items-start gap-4">
                                            {Icon && (
                                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                            )}

                                            <div className="min-w-0">
                                                <p className="text-sm text-slate-500">
                                                    {item.label}
                                                </p>

                                                {item.isEmail ? (
                                                    <a
                                                        href={`mailto:${item.value}`}
                                                        className="mt-1 block break-all text-sm font-semibold text-slate-200 transition-colors hover:text-blue-400"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : item.isLink ? (
                                                    <a
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="mt-1 block break-all text-sm font-semibold text-slate-200 transition-colors hover:text-blue-400"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="mt-1 text-sm font-semibold text-slate-200">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* Skills */}
            {/* ------------------------------------------------------------------ */}

            <section
                id="skills"
                data-home-section="skills"
                className="border-t border-gray-200 bg-[#f5f4f0] py-24 text-gray-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                            Skills
                        </span>

                        <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                            My Technical Skills
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-slate-400">
                            Technologies and skills I use to build modern web
                            applications and solve development problems.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2">
                        {skillGroups.map((group, index) => {
                            const Icon = group.icon;

                            return (
                                <div
                                    key={group.title}
                                    className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-xl font-bold">
                                                    {group.title}
                                                </h3>

                                                <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-500 dark:bg-slate-800 dark:text-slate-400">
                                                    0{index + 1}
                                                </span>
                                            </div>

                                            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-slate-400">
                                                {group.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* Projects */}
            {/* ------------------------------------------------------------------ */}

            <section
                id="projects"
                data-home-section="projects"
                className="border-t border-gray-200 bg-[#f5f4f0] py-24 text-gray-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                            Projects
                        </span>

                        <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                            Featured Projects
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-slate-400">
                            A selection of projects I've built while learning
                            and developing my front-end skills.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {visibleProjects.map((project) => {
                            const colors =
                                colorClasses[project.color] ||
                                colorClasses.blue;

                            return (
                                <article
                                    key={project.title}
                                    className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 ${colors.hover}`}
                                >
                                    <div className="group/image relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-slate-800">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                        />

                                        {project.comingSoon && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/75">
                                                <span className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-lg font-bold text-white backdrop-blur-md">
                                                    Coming Soon
                                                </span>
                                            </div>
                                        )}

                                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

                                        <span
                                            className={`absolute left-4 top-4 rounded-full border px-3 py-1.5 text-xs font-bold backdrop-blur-md ${colors.badge}`}
                                        >
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="p-6">
                                        <div
                                            className={`mb-4 h-1 w-12 rounded-full ${colors.line}`}
                                        />

                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-xl font-bold">
                                                {project.title}
                                            </h3>

                                            {project.live && (
                                                <ArrowUpRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500" />
                                            )}
                                        </div>

                                        <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600 dark:text-slate-400">
                                            {project.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-slate-800 dark:text-slate-300"
                                                    >
                                                        {technology}
                                                    </span>
                                                ),
                                            )}
                                        </div>

                                        <div className="mt-7 grid grid-cols-2 gap-3">
                                            {project.live ? (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                                                >
                                                    <ExternalLink className="h-4 w-4 shrink-0" />

                                                    <span>Live Demo</span>
                                                </a>
                                            ) : (
                                                <Button
                                                    disabled
                                                    className="h-12 w-full rounded-xl bg-gray-100 px-4 font-semibold text-gray-400 dark:bg-slate-800 dark:text-slate-600"
                                                >
                                                    Coming Soon
                                                </Button>
                                            )}

                                            {project.github ? (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-transparent px-4 font-semibold text-gray-800 transition-all hover:-translate-y-0.5 hover:bg-gray-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                                                >
                                                    <GithubLogo className="h-4 w-4 shrink-0" />

                                                    <span>GitHub</span>
                                                </a>
                                            ) : (
                                                <Button
                                                    disabled
                                                    className="h-12 w-full rounded-xl border border-gray-200 bg-transparent px-4 font-semibold text-gray-400 dark:border-slate-800 dark:text-slate-600"
                                                >
                                                    GitHub Soon
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-14 flex justify-center">
                        <Button
                            type="button"
                            onClick={() =>
                                setShowAllProjects((prev) => !prev)
                            }
                            className="group h-12 rounded-xl bg-blue-600 px-8 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                        >
                            <span>
                                {showAllProjects
                                    ? "Show Less"
                                    : "View All Projects"}
                            </span>

                            <ChevronDown
                                className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                                    showAllProjects
                                        ? "rotate-180"
                                        : "rotate-0"
                                }`}
                            />
                        </Button>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* Education */}
            {/* ------------------------------------------------------------------ */}

            <section
                id="education"
                data-home-section="education"
                className="scroll-mt-24 border-t border-gray-200 bg-[#f5f4f0] py-24 text-gray-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                            Education
                        </span>

                        <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                            My Learning Journey
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-slate-400">
                            My academic background, professional training, and
                            the technologies I have learned along the way.
                        </p>
                    </div>

                    {/* Academic Timeline */}

                    <div className="mx-auto mt-16 max-w-5xl">
                        <div className="relative">
                            <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-blue-200 dark:bg-blue-900 sm:block" />

                            <div className="relative flex gap-6">
                                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
                                    01
                                </div>

                                <div className="w-full rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700">
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                                                Current Student
                                            </span>

                                            <h3 className="mt-4 text-2xl font-bold">
                                                Arab Open University
                                            </h3>

                                            <p className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                                                Computer Science
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                                                College of Computer & Information
                                            </p>
                                        </div>

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                            <GraduationCap className="h-7 w-7" />
                                        </div>
                                    </div>

                                    <p className="mt-6 max-w-3xl leading-7 text-gray-600 dark:text-slate-400">
                                        Building a strong foundation in
                                        computer science through programming,
                                        algorithms, data structures, databases,
                                        software development, and web
                                        technologies.
                                    </p>

                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {[
                                            "Programming",
                                            "OOP",
                                            "Data Structures",
                                            "Algorithms",
                                            "Databases",
                                            "Software Engineering",
                                            "Web Development",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}

                    <div className="mt-24">
                        <div className="mb-10">
                            <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                                Certifications & Training
                            </span>

                            <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                                What I've Learned
                            </h3>

                            <p className="mt-3 max-w-2xl text-gray-600 dark:text-slate-400">
                                Practical training and learning experiences
                                that helped me develop my technical and
                                professional skills.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {/* ITI */}

                            <article className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-sm font-extrabold text-blue-600 dark:text-blue-400">
                                        ITI
                                    </div>

                                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                                        144 Hours
                                    </span>
                                </div>

                                <h4 className="mt-6 text-xl font-bold">
                                    Web Development using .NET
                                </h4>

                                <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">
                                    Information Technology Institute
                                </p>

                                <p className="mt-4 leading-7 text-gray-600 dark:text-slate-400">
                                    Intensive web development training covering
                                    programming, databases, backend
                                    development and modern .NET technologies.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "C#",
                                        "OOP",
                                        "SQL Server",
                                        "T-SQL",
                                        "Entity Framework Core",
                                        "ASP.NET MVC",
                                        "Generative AI",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-slate-800 dark:text-slate-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>

                            {/* INSTANT */}

                            <article className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-purple-700">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-sm font-extrabold text-purple-600 dark:text-purple-400">
                                        IS
                                    </div>

                                    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-600 dark:text-purple-400">
                                        130 Hours
                                    </span>
                                </div>

                                <h4 className="mt-6 text-xl font-bold">
                                    Frontend Development Diploma
                                </h4>

                                <p className="mt-2 font-semibold text-purple-600 dark:text-purple-400">
                                    INSTANT Software Solutions
                                </p>

                                <p className="mt-4 leading-7 text-gray-600 dark:text-slate-400">
                                    Frontend development training focused on
                                    building modern, responsive and interactive
                                    web applications.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "React",
                                        "Next.js",
                                        "Tailwind CSS",
                                        "API Integration",
                                        "Git",
                                        "GitHub",
                                        "Responsive Design",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-slate-800 dark:text-slate-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>

                            {/* Cisco */}

                            <article className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-green-700">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-sm font-extrabold text-green-600 dark:text-green-400">
                                        CA
                                    </div>

                                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-600 dark:text-green-400">
                                        Training
                                    </span>
                                </div>

                                <h4 className="mt-6 text-xl font-bold">
                                    Data Analytics Essentials
                                </h4>

                                <p className="mt-2 font-semibold text-green-600 dark:text-green-400">
                                    Cisco Networking Academy
                                </p>

                                <p className="mt-4 leading-7 text-gray-600 dark:text-slate-400">
                                    Practical introduction to data analytics,
                                    including data preparation,
                                    transformation, analysis and
                                    visualization.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "Data Cleaning",
                                        "Data Transformation",
                                        "SQL",
                                        "Excel",
                                        "Tableau",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-slate-800 dark:text-slate-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>

                            {/* CIB */}

                            <article className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-700">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-sm font-extrabold text-orange-600 dark:text-orange-400">
                                        CIB
                                    </div>

                                    <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-600 dark:text-orange-400">
                                        Internship
                                    </span>
                                </div>

                                <h4 className="mt-6 text-xl font-bold">
                                    Summer Internship
                                </h4>

                                <p className="mt-2 font-semibold text-orange-600 dark:text-orange-400">
                                    Commercial International Bank
                                </p>

                                <p className="mt-4 leading-7 text-gray-600 dark:text-slate-400">
                                    Professional experience exploring
                                    Generative AI workflows, productivity
                                    tools and practical business process
                                    applications.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {[
                                        "Generative AI",
                                        "AI Workflows",
                                        "Productivity",
                                        "Business Processes",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-slate-800 dark:text-slate-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* Contact */}
            {/* ------------------------------------------------------------------ */}

            <section
                id="contact"
                data-home-section="contact"
                className="scroll-mt-24 border-t border-gray-200 bg-[#f6f5f1] py-24 text-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
            >
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                            CONTACT
                        </span>
                        <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                            Let's Work Together
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
                        {/* Left Column - Info & Cards */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    Get In Touch
                                </h3>
                                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
                                    I'm currently open to new opportunities and collaborations.
                                    Whether you have a project in mind, a question, or just want to
                                    say hi — my inbox is always open!
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Email */}
                                <a
                                    href="mailto:byshwythrwt8@gmail.com"
                                    className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-medium text-slate-400">Email</p>
                                        <p className="mt-0.5 truncate text-sm font-bold text-slate-900 dark:text-slate-200">
                                            byshwythrwt8@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/bishoy-tharwat-996987341"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                        <LinkedinLogo className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-medium text-slate-400">LinkedIn</p>
                                        <p className="mt-0.5 truncate text-sm font-bold text-slate-900 dark:text-slate-200">
                                            Bishoy Tharwat
                                        </p>
                                    </div>
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/bishoytharwat2005"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                                        <GithubLogo className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-medium text-slate-400">GitHub</p>
                                        <p className="mt-0.5 truncate text-sm font-bold text-slate-900 dark:text-slate-200">
                                            bishoytharwat2005
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl sm:p-10 dark:border-slate-800 dark:bg-slate-900">
                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        required
                                        className="mt-2 w-full rounded-xl border-none bg-[#f4f3ef] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:bg-slate-800 dark:focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        required
                                        className="mt-2 w-full rounded-xl border-none bg-[#f4f3ef] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:bg-slate-800 dark:focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Project Collaboration"
                                        value={formData.subject}
                                        onChange={handleFormChange}
                                        required
                                        className="mt-2 w-full rounded-xl border-none bg-[#f4f3ef] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:bg-slate-800 dark:focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Tell me about your project or idea..."
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        required
                                        className="mt-2 w-full resize-none rounded-xl border-none bg-[#f4f3ef] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:bg-slate-800 dark:focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1d3557] py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#152742] hover:shadow-lg active:scale-[0.99] dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    Send Message
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* Final CTA */}
            {/* ------------------------------------------------------------------ */}

            <section className="border-t border-slate-800 bg-slate-950 px-6 py-12 text-white">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                    <div>
                        <p className="text-lg font-bold">
                            Ready to create something meaningful?
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Let's connect and turn ideas into real products.
                        </p>
                    </div>

                    <a
                        href="mailto:byshwythrwt8@gmail.com"
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
                    >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Let's Talk
                    </a>
                </div>
            </section>
        </div>
    );
}

export default HomePage;