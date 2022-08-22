import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CountryList from "./components/CountryList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchData, setSearchData] = useState("");

  const getCountries = () => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res);
      setCountries(res.data);
    });
  };

  // fetch countries data on component mount
  useEffect(() => getCountries(), []);

  const countryList = countries?.filter((res) => {
    res.name.common = res?.name?.common.toLowerCase();
    return res.name.common.includes(searchData.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Countries" element={<CountryList />} />
          {/* <Route path="/details" element={<Detail />} /> */}
        </Routes>

        <input
          type="text"
          placeholder="Search countries"
          className="searchInput"
          onChange={handleSearch}
          value={searchData}
        />
        <div className="content">
          <CountryList countries={countryList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
