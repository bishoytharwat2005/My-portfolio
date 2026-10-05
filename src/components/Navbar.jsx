import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import useThemeStore from "./Store/theamStore";
import { cn } from "@/lib/utils";
import { Link, NavLink, Outlet, useLocation } from "react-router";

function Navbar() {
    const { toggletheme, theme } = useThemeStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const location = useLocation();

    const navLinks = [
        {
            name: "Home",
            path: "/",
            section: "home",
        },
        {
            name: "About",
            path: "/about",
            section: "about",
        },
        {
            name: "Skills",
            path: "/services",
            section: "skills",
        },
        {
            name: "Experience",
            path: "/experience",
            section: "experience",
        },
        {
            name: "Projects",
            path: "/projects",
            section: "projects",
        },
        {
            name: "Education",
            path: "/education",
            section: "education",
        },
        {
            name: "Contact",
            path: "/contact",
            section: "contact",
        },
    ];

    useEffect(() => {
        if (location.pathname !== "/") {
            setActiveSection("");
            return;
        }

        const sections = document.querySelectorAll(
            "[data-home-section]"
        );

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(
                        visibleSections[0].target.dataset
                            .homeSection
                    );
                }
            },
            {
                root: null,
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            }
        );

        sections.forEach((section) =>
            observer.observe(section)
        );

        return () => observer.disconnect();
    }, [location.pathname]);

    const handleNavClick = (event, link) => {
        setIsMenuOpen(false);

        if (location.pathname === "/" && link.section) {
            const section = document.querySelector(
                `[data-home-section="${link.section}"]`
            );

            if (section) {
                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                setActiveSection(link.section);
            }
        }
    };

    const getLinkClass = (link) => {
        const isHomePage = location.pathname === "/";

        const isActive = isHomePage
            ? activeSection === link.section
            : location.pathname === link.path;

        return cn(
            "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
            isActive
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/60"
        );
    };

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-gray-800/50 dark:bg-gray-900/80">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <Link
                        to="/"
                        onClick={() => {
                            setActiveSection("home");
                            setIsMenuOpen(false);
                        }}
                        className="text-2xl font-extrabold tracking-tight transition duration-200 hover:opacity-80"
                    >
                        Bishoy{" "}
                        <span className="text-blue-500">
                            Tharwat
                        </span>
                    </Link>

                    <nav className="hidden items-center space-x-1 md:flex lg:space-x-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={(event) =>
                                    handleNavClick(event, link)
                                }
                                className={() =>
                                    getLinkClass(link)
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="icon"
                            className="relative h-10 w-10 shrink-0 cursor-pointer overflow-hidden rounded-full border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                            onClick={toggletheme}
                            aria-label="Toggle Theme"
                        >
                            <Moon
                                className={cn(
                                    "absolute h-5 w-5 transform transition-all duration-300",
                                    theme === "dark"
                                        ? "rotate-90 scale-0 opacity-0"
                                        : "rotate-0 scale-100 text-gray-800 opacity-100"
                                )}
                            />

                            <Sun
                                className={cn(
                                    "absolute h-5 w-5 transform transition-all duration-300",
                                    theme === "light"
                                        ? "-rotate-90 scale-0 opacity-0"
                                        : "rotate-0 scale-100 text-amber-400 opacity-100"
                                )}
                            />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-lg text-gray-700 dark:text-gray-300 md:hidden"
                            onClick={() =>
                                setIsMenuOpen(
                                    (prev) => !prev
                                )
                            }
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="border-t border-gray-200 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/95 md:hidden">
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={(event) =>
                                        handleNavClick(
                                            event,
                                            link
                                        )
                                    }
                                    className={() =>
                                        cn(
                                            "rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-200",
                                            getLinkClass(link)
                                        )
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Navbar;