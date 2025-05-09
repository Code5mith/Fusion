import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import { yearList } from "../utils/helpers/My_functions";
import { useDispatch } from "react-redux";

const Dropdown_item = () => {

  var [Year, setYear] = useState(2024);
  
  const dispatch = useDispatch()

  const handleYearChange = (year) => {
      setYear(year)
      dispatch({ type: 'SET_SELECTED_YEAR', payload: year });
  }

  return (
      <div className="w-100 d-flex justify-content-end me-3">
        <Dropdown>
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-basic"
            className="d-flex flex-row align-items-center justify-content-center"
          >
            <div className="text-center w-100 h-100 px-2">
              <p className="p-0 m-0" style={{ fontSize: "1.3rem" }}>
                Select the year
              </p>
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{backgroundColor: "#000000"}}>
            {yearList.map((year) => {
              return (
                <Dropdown.Item
                  key={year}
                  onClick={() => {
                    handleYearChange(year)
                  }}
                >
                  <div className="text-center w-100 h-100 px-2">
                    <p className="p-0 m-0" style={{ fontSize: "1.1rem" , color: "#144F9A"}}>
                      {year}
                    </p>
                  </div>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
  );
};

export default Dropdown_item;
