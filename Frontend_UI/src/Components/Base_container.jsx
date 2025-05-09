import React from "react";
import { useContext, useEffect, useState, useMemo } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  BrowserRouter,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Nav_component from "./Nav_comp";
import CpiPage from "./cpi_page";
import UnempPage from "./unemp_page";
import InterestRates from "./interest_rates";


const Base_component = ({}) => {
  return (
    <>
      <div className="screen_support">
        <div className="row mt-5">
          <div className="row m-0 w-100">
            <div className="m-0 p-0 col-3 rich_orange rounded-end-4">
              <Nav_component />
            </div>

            <div className="col-9">
              <div>
                {/* <Dropdown_item /> */}
                <Router>
                  <Routes>
                    <Route path="/cpi-page" element={<CpiPage />} />
                    <Route path="/unemployement-page" element={<UnempPage />} />
                    <Route path="/interest-rates" element={<InterestRates />} />
                  </Routes>
                </Router>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center py-4 w-100 bg-black h-auto text-white">
          <footer>
            <p className="fs-5 fw-normal">
              {" "}
              &copy; {new Date().getFullYear()}
              <span> </span> Fusion Economics. All Rights Reserved.{" "}
            </p>
          </footer>
        </div>
      </div>
      <div className="notify_user">
        <h1>
          {" "}
          Sorry but this Device is not supported by our application try using a
          Pc or Desktop.
        </h1>
      </div>
    </>
  );
};
export default Base_component;
