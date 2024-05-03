import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";
import { useMemo, useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { useSearch } from "@/Context/SearchContext";
import ReactPaginate from "react-paginate";

export default function Index({ auth, games }) {
    const { searchTerm } = useSearch();
    const [currentPage, setCurrentPage] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const pageSize = 8;

    const options = {
        keys: ["title", "format_game_date"],
        includeScore: true,
        threshold: 0.1,
    };

    const fuse = new Fuse(games, options);

    const filteredGames = useMemo(() => {
        return searchTerm
            ? fuse.search(searchTerm).map((result) => result.item)
            : games;
    }, [games, searchTerm]);

    const pageCount = Math.ceil(filteredGames.length / pageSize);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const currentGames = useMemo(() => {
        const offset = currentPage * pageSize;
        return filteredGames.slice(offset, offset + pageSize);
    }, [currentPage, filteredGames, pageSize]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="試合一覧" />
            <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div className="container my-8 md:my-10 mx-auto md:px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-wrap mx-4 lg:-mx-4"
                        >
                            {currentGames.map((item, index) => (
                                <div
                                    key={index}
                                    className="hover:opacity-40 transition my-4 w-full md:w-1/2 lg:px-4 lg:w-1/4"
                                >
                                    <article className="overflow-hidden rounded-lg shadow-lg">
                                        <a
                                            href={item.youtube_url}
                                            target="_blank"
                                        >
                                            <img
                                                alt="Placeholder"
                                                className="block h-auto w-full"
                                                src={item.image_url}
                                            />
                                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                <p className="text-lg font-bold text-grey-darker">
                                                    {item.title}
                                                </p>
                                            </header>
                                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                                <p className="text-grey-darker text-sm">
                                                    {item.format_game_date}
                                                </p>
                                            </footer>
                                        </a>
                                    </article>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    <div className="hidden sm:block sm:mt-4">
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                        />
                    </div>
                </div>
                {showScrollTop && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-black text-white text-3xl"
                        >
                            ↑
                        </button>
                    </motion.div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
