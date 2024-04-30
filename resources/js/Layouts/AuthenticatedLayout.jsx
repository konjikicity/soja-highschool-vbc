import { useState } from "react";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { useSearch } from "@/Context/SearchContext";

export default function Authenticated({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const { searchTerm, setSearchTerm } = useSearch();

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100 flex items-center h-16">
                <div className="container max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="w-full px-4 font-bold text-lg">
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
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                ログアウト
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
