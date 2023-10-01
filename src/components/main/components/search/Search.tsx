import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import "./Search.css";
import { useState } from "react";

interface SearchProps {
    projectSearch: string;
    handleSearch: React.ChangeEventHandler<HTMLInputElement>;
    clearSearch: () => void;
}

function Search({ projectSearch, handleSearch, clearSearch }: SearchProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`search-project ${isFocused ? "focused" : ""}`}>
            <AiOutlineSearch className="search-icon" />
            <input
                className="search-input"
                type="text"
                placeholder="Pesquise por Projetos..."
                onChange={handleSearch}
                value={projectSearch}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <AiOutlineClose className="close-icon" onClick={clearSearch} />
        </div>
    );
}

export default Search;
