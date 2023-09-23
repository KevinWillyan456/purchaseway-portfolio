import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import "./Search.css";

interface SearchProps {
  projectSearch: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
  clearSearch: () => void;
}

function Search({ projectSearch, handleSearch, clearSearch }: SearchProps) {
  return (
    <div className="search-project">
      <AiOutlineSearch className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Pesquise por Projetos..."
        onChange={handleSearch}
        value={projectSearch}
      />
      <AiOutlineClose className="close-icon" onClick={clearSearch} />
    </div>
  );
}

export default Search;
