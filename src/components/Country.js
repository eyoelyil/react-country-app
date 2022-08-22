import React from "react";

const Country = ({ name, lang, population, flags, currencies }) => {
  return (
    <div className="country">
      <div>
        <h3>{name}</h3>
        <br />
        <div className="currencies">
          <h4>Currencies</h4>
          {Object.values(currencies || {}).map((value, i) => (
            <span key={i}>{(i ? ", " : "") + value.name}</span>
          ))}
        </div>
        <br />
        <div className="lang-pop">
          <div>
            <h4>Language:</h4>

            {Object.values(lang || {}).map((value, i) => [
              <span key={i}>{(i ? ", " : "") + value}</span>,
            ])}
          </div>
          <br />

          <div className="population">
            <h4>Polulation</h4>
            <div>
              <span>{population}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flag">
        <img src={flags} alt={name} width="60px" height="60px" />
      </div>
    </div>
  );
};

export default Country;
