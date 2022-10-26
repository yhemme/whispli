import "./index.css"

import { SetStateAction, Dispatch } from "react";

type Props = {
  setValue: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
};

const SearchBar = ({ setValue, onSearch }: Props) => {
  return (
    <input
      type="text"
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") onSearch();
      }}
      className="searchBar"
      placeholder="Search For Symbol"
    />
  );
};

export default SearchBar;
