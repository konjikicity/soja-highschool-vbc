import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";
import { useMemo, useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { useSearch } from "@/Context/SearchContext";
import ReactPaginate from "react-paginate";

export default function Index({ auth, pictures }) {
    const { searchTerm } = useSearch();
    const [currentPage, setCurrentPage] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const pageSize = 8;

    const options = {
        keys: ["title", "format_picture_date"],
        includeScore: true,
        threshold: 0.1,
    };

    const fuse = new Fuse(pictures, options);

    const filteredPictures = useMemo(() => {
        return searchTerm
            ? fuse.search(searchTerm).map((result) => result.item)
            : pictures;
    }, [pictures, searchTerm]);

    const pageCount = Math.ceil(filteredPictures.length / pageSize);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const currentPictures = useMemo(() => {
        const offset = currentPage * pageSize;
        return filteredPictures.slice(offset, offset + pageSize);
    }, [currentPage, filteredPictures, pageSize]);

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

    const handleImageClick = (url) => {
        setModalImage(url);
    };

    const closeImageModal = () => {
        setModalImage(null);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="写真" />
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
                            {currentPictures.map((item, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer lg:hover:opacity-40 transition my-4 w-full md:w-1/2 lg:px-4 lg:w-1/4"
                                    onClick={() =>
                                        handleImageClick(
                                            item.format_picture_url,
                                        )
                                    }
                                >
                                    <article className="overflow-hidden rounded-lg shadow-lg">
                                        <img
                                            alt="Placeholder"
                                            className="block h-auto w-full"
                                            src={item.format_picture_url}
                                        />
                                    </article>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    <div className="hidden sm:block sm:mt-4">
                        <ReactPaginate
                            breakLabel="..."
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName="pagination"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-previou"
                            nextClassName="page-next"
                            activeClassName="active"
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
                            className="lg:hidden fixed bottom-5 right-5 w-12 h-12 rounded-full bg-red-400 text-white text-3xl"
                        >
                            ↑
                        </button>
                    </motion.div>
                )}
                {modalImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                            <button
                                onClick={closeImageModal}
                                className="absolute top-5 right-5 text-white text-4xl"
                            >
                                ×
                            </button>
                            <img
                                src={modalImage}
                                className="rounded max-w-[90%] max-h-[90%]"
                                alt="Expanded"
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
