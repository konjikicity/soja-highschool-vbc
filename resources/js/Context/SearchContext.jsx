import React, { createContext, useContext, useState } from "react";

// コンテキストの作成
const SearchContext = createContext({
    searchTerm: "",
    setSearchTerm: () => { },
});

// コンテキストプロバイダコンポーネント
export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};

// カスタムフック
export const useSearch = () => {
    const context = useContext(SearchContext);

    return context;
};
