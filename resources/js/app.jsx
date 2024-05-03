import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { LaravelReactI18nProvider } from "laravel-react-i18n";
import { SearchProvider } from "./Context/SearchContext";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const variantFlushed = () => ({
    field: {
        _focus: {
            borderColor: "var(--chakra-ui-focus-ring-color)",
            boxShadow: "0 1px 0 0 var(--chakra-ui-focus-ring-color)",
        },
    },
});

export const theme = extendTheme({
    styles: {
        global: {
            ":host,:root": {
                "--chakra-ui-focus-ring-color": "#ef4444",
            },
        },
    },
    shadows: {
        outline: "0 0 0 3px var(--chakra-ui-focus-ring-color)",
    },
    components: {
        Input: {
            variants: {
                flushed: variantFlushed,
            },
        },
    },
});

const appName = "総社高校排球部 第二部室";

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
                    <ChakraProvider theme={theme}>
                        <App {...props} />
                    </ChakraProvider>
                </SearchProvider>
            </LaravelReactI18nProvider>,
        );
    },
    progress: {
        color: "#4B5563",
    },
});
