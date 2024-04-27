import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth }) {
    const articleCount = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    総社高校排球部 試合動画
                </h2>
            }
        >
            <Head title="Game" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div class="container my-12 mx-auto px-4 md:px-12">
                        <div class="flex flex-wrap -mx-1 lg:-mx-4">
                            {articleCount.map((item, index) => (
                                <div
                                    key={index}
                                    className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                                >
                                    <article className="overflow-hidden rounded-lg shadow-lg">
                                        <a
                                            href="https://www.youtube.com/watch?v=PTx5z1iMJIs"
                                            target="_blank"
                                        >
                                            <img
                                                alt="Placeholder"
                                                className="block h-auto w-full"
                                                src={`https://img.youtube.com/vi/PTx5z1iMJIs/hqdefault.jpg`}
                                            />
                                        </a>
                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h1 className="text-lg">
                                                <a
                                                    className="no-underline hover:underline text-black"
                                                    href="#"
                                                >
                                                    Article Title {item}
                                                </a>
                                            </h1>
                                        </header>
                                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                            <p className="text-grey-darker text-sm">
                                                11/1/19
                                            </p>
                                        </footer>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
