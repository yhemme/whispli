import { useState } from "react";
import "./App.css";
import { getPricesForSymbole } from "./api";
import { CurrencyType } from "./models/currencyType";
import CurrencyTable from "./components/currencyTable";
import SearchBar from "./components/searchBar";

function App() {
  const [currencies, setCurrencies] = useState<CurrencyType[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = () => {
    setError(undefined);
    setIsLoading(true);
    getPricesForSymbole(searchText)
      .then((val) => {
        setCurrencies(Array.isArray(val) ? val : [val]);
        setIsLoading(false);
      })
      .catch(() => {
        setError(
          "There was a problem while fetching the informations. Perhaps try a different symbol"
        );
        setCurrencies([]);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <SearchBar
        setValue={(val) => setSearchText(val)}
        onSearch={() => {
          if (!isLoading) handleSearch();
        }}
      />
      <CurrencyTable currencies={currencies} />
      {error && <div className="error">{error}</div>}
      {isLoading && <div>... Loading ...</div>}
    </div>
  );
}

export default App;
