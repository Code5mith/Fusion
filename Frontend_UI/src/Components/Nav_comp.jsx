import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import interestRates from "../assets/icons8-interest-rate-96.png";
import inflation from "../assets/icons8-inflation-68.png";
import unemployement from "../assets/icons8-work-50.png";
import cot from "../assets/file-invoice-dollar_7928185.png";

import NavDrop from "./nav_drop";

const Nav_component = ({}) => {
  return (
    <div className="w-100 m-0 d-flex flex-column align-items-center justify-content-center ">
      <div className="row w-100 fs-1 d-flex align-items-center justify-content-center ">
        Fusion
      </div>

      <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column m-0 mt-5 h-auto pb-5">

          <NavDrop
            options={{
              link_name: "CPI Date",
              icon: inflation,
              primary_link: "/cpi-page",
              items: "United States",
              route_first: ["USA"]
            }}
          />

          <NavDrop
            options={{
              link_name: "Unemployement Date",
              icon: unemployement,
              primary_link: "/unemployement-page",
              items: "United States",
              route_second: ["USA"]
            }}
          />

          <NavDrop
            options={{
              link_name: "Interest Rates",
              icon: interestRates,
              primary_link: "/interest-rates",
             items: ["United States", "Canada", "Japan", "Europe"],
              route_third: ["USA","CAD","JPY","EURO"]
            }}
          />
{/* 
          <NavDrop
            options={{
              link_name: "COT Data",
              icon: cot,
              primary_link: "/cot-page",
              items: ["NASDAQ-100", "S&P500", "GOLDUSD", "USOIL"],
              route_fourth: ["NAS","SPX","XAU","OIL"]
            }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Nav_component;
