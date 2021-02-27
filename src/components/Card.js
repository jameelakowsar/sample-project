import React from "react";
import Icon from "@material-ui/core/Icon";

const Card = ({ countryDetails }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-header">
          <div className="card-title">{countryDetails.name}</div>
          <div className="card-delete">
            <Icon>delete</Icon>
          </div>
        </div>
        <div className="card-body">
          <div className="card-row-1">
            <span>Capital</span>
            <span>Region</span>
            <span>Population</span>
          </div>
          <div className="card-row-2">
            <span>{countryDetails.capital || "N/A"}</span>
            <span>{countryDetails.region || "N/A"}</span>
            <span>{countryDetails.population || "N/A"}</span>
          </div>
        </div>
        <div className="card-bottom">
            <div className="card-row-1">
                <span>Code</span>
            </div>
            <div className="card-row-2">
                <span>{countryDetails.alpha2Code}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
