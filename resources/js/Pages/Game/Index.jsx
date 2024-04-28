import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, games }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="試合動画" />

            <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <div className="container my-12 mx-auto px-4 md:px-12">
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {games.map((item, index) => (
                            <div
                                key={index}
                                className="hover:opacity-40 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                            >
                                <article className="overflow-hidden rounded-lg shadow-lg">
                                    <a href={item.youtube_url} target="_blank">
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
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
