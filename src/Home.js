import { useState } from "react";

const Home = () => {
  const [countries, setCountries] = useState([
    {
      name: "Afghanistan",
      languages: "Kabul",
      currenies: "Afghani",
      population: "35000000",
      id: "1",
    },
    {
      name: "Albania",
      languages: "Tirana",
      currenies: "Lek",
      population: "3300000",
      id: "2",
    },
    {
      name: "Algeria",
      languages: "Algiers",
      currenies: "Algerian Dinar",
      population: "35000000",
      id: "3",
    },
  ]);

  return (
    <div className="home">
      {countries.map((country) => (
        <div className="country-preview" key={country.id}>
          <h2>{country.name}</h2>
          <p>Language - {country.languages}</p>
          <p>Currency - {country.currenies}</p>
          <p>Population - {country.population}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
