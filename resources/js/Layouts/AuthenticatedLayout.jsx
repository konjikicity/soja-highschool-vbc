import { useState } from "react";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { useSearch } from "@/Context/SearchContext";

export default function Authenticated({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { searchTerm, setSearchTerm } = useSearch();

    const sidebarVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: { y: { stiffness: 1000 } },
        },
        closed: {
            opacity: 0,
            x: "-100%",
            transition: { y: { stiffness: 1000 } },
        },
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <nav className="bg-white flex items-center h-16">
                <div className="flex items-center container max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <img src="/image/logo.png" alt="Logo" className="h-16" />
                    <div className="w-full font-bold text-lg">
                        総社高校排球部 第二部室
                    </div>
                </div>
            </nav>
            <nav className="bg-white border-b border-gray-100">
                <div className="container max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-full flex justify-between items-center h-20 px-4">
                        <div className="hidden sm:flex sm:items-center">
                            <div className="mr-4">
                                <NavLink
                                    href={route("game.index")}
                                    active={route().current("game.index")}
                                    icon="court"
                                >
                                    試合
                                </NavLink>
                            </div>
                            <div>
                                <NavLink
                                    href={route("picture.index")}
                                    active={route().current("picture.index")}
                                    icon="picture"
                                >
                                    写真
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center">
                            <div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    placeholder="タイトルと日付で検索"
                                    className="w-[300px] border rounded-full py-2 px-5 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                />
                            </div>
                            <div className="ms-4">
                                <NavLink
                                    href={route("logout")}
                                    method="post"
                                    icon="logout"
                                >
                                    ログアウト
                                </NavLink>
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center sm:hidden">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="タイトルと日付で検索できます"
                                className="w-[300px] border rounded-full py-2 px-5 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                            />

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="block sm:hidden">
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-50 z-50"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={sidebarVariants}
                            >
                                <motion.div
                                    className="w-full h-screen bg-gray-900 relative"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <ResponsiveNavLink
                                        href={route("game.index")}
                                        active={route().current("game.index")}
                                        icon="court"
                                        as="button"
                                    >
                                        試合
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        href={route("picture.index")}
                                        active={route().current(
                                            "picture.index",
                                        )}
                                        icon="picture"
                                        as="button"
                                    >
                                        写真
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        icon="logout"
                                        as="button"
                                    >
                                        ログアウト
                                    </ResponsiveNavLink>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
