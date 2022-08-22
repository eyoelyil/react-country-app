import React from "react";
import Country from "./Country";

const CountryList = ({ countries }) => {
  return (
    <div className="countries">
      {countries &&
        countries.map((country) => (
          <div key={country.name.common}>
            <Country
              name={country.name.common}
              lang={country.languages}
              population={country.population}
              flags={country.flags.png}
              currencies={country.currencies}
            />
          </div>
        ))}
    </div>
  );
};

export default CountryList;
