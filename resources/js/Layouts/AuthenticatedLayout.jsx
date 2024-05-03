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
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100 flex items-center h-16">
                <div className="container max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 w-full font-bold text-lg">
                        総社高校排球部 第二部室
                    </div>
                </div>
            </nav>
            <nav className="bg-white border-b border-gray-100">
                <div className="container max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-full flex justify-between h-20 px-4">
                        <div className="flex">
                            <div className="hidden space-x-8 sm:-my-px sm:flex">
                                <NavLink
                                    href={route("game.index")}
                                    active={route().current("game.index")}
                                >
                                    試合一覧
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
                                    className="w-[300px] px-4 py-2 border rounded-full"
                                />
                            </div>
                            <div className="ms-12 relative">
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="hover:opacity-40"
                                >
                                    ログアウト
                                </Link>
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center sm:hidden">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="タイトルと日付で検索できます"
                                className="w-[300px] px-4 py-2 border rounded-full"
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
                                <motion.div className="h-screen bg-white relative">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="absolute top-4 right-4 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className="black inline-flex"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
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
