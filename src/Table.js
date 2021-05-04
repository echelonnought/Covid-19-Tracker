import React from "react";
import './Table.css';
import numeral from "numeral";

const Table = ({ filterCountries }) => {
  return (
    <div className="table">
      {filterCountries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("000,000")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
