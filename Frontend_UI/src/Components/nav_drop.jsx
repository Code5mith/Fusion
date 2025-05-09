import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";

const NavDrop = (props) => {

  const dispatch = useDispatch();
  const [country, setCountry] = useState("USA");

  const handleCountryChange = (country) => {

    dispatch({ type: "SET_SELECTED_COUNTRY", payload: `${country}` });
    // console.log("current updated country is this ", country);
  };

  const nav_render = (props) => {

    
    if (
      props.options.link_name == "CPI Date" 
    ) {
      return (
        <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_first[0])
              }
            >
              <div>{props.options.items}</div>
            </a>
          </div>
      );
    }

    if (
      props.options.link_name == "Unemployement Date"
    ) {
      return (
        <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_second[0])
              }
            >
              <div>{props.options.items}</div>
            </a>
          </div>
      );
    }


    if (props.options.link_name == "Interest Rates") {
      return (
        <div>
          <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_third[0])
              }
            >
              <div>{props.options.items[0]}</div>
            </a>
          </div>

          <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_third[1])
              }
            >
              <div>{props.options.items[1]}</div>
            </a>
          </div>

          <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_third[2])
              }
            >
              <div>{props.options.items[2]}</div>
            </a>
          </div>

          <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_third[3])
              }
            >
              <div>{props.options.items[3]}</div>
            </a>
          </div>

        </div>
      );
    }
    if (props.options.link_name == "COT Data") {
      return (
        <div>
          <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_fourth[0])
              }
            >
              <div>{props.options.items[0]}</div>
            </a>
          </div>

          <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_fourth[1])
              }
            >
              <div>{props.options.items[1]}</div>
            </a>
          </div>

          <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
                () => handleCountryChange(props.options.route_fourth[2])
              }
            >
              <div>{props.options.items[2]}</div>
            </a>
          </div>

          <div className="fs-6 p-2 nav_drop_style d-flex align-items-center justify-content-center">
            <a
              href={props.options.primary_link}
              className="text-decoration-none text-black h-auto"
              onClick={
               () => handleCountryChange(props.options.route_fourth[3])
              }
            >
              <div>{props.options.items[3]}</div>
            </a>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-2 ">
      <div className=" w-100 p-2 d-flex nav_component">
        <div>
          <img
            className="icons mx-4"
            src={props.options.icon}
            alt={props.options.link_name}
          />
        </div>
        <div className=" w-100 mx-auto">
          <a
            href={props.options.primary_link}
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <p className="fs-5 mx-auto my-auto">
              {" "}
              {props.options.link_name}{" "}
            </p>
          </a>
        </div>
      </div>

      <div className="w-50 d-flex flex-column align-items-end justify-content-center">
        <div>
          { nav_render(props)}
        </div>
      </div>
    </div>
  );
};

export default NavDrop;
