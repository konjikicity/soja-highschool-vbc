import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { LaravelReactI18nProvider } from "laravel-react-i18n";
import { SearchProvider } from "./Context/SearchContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx"),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <LaravelReactI18nProvider
                locale={"ja"}
                fallbackLocale={"en"}
                files={import.meta.glob("/lang/*.json")}
            >
                <SearchProvider>
                    <App {...props} />
                </SearchProvider>
            </LaravelReactI18nProvider>,
        );
    },
    progress: {
        color: "#4B5563",
    },
});
