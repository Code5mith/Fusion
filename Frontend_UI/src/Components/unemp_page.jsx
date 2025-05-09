import React from "react";

import { useContext, useEffect, useState, useMemo } from "react";
import Dropdown_item from "./dropdown";
import Button from "react-bootstrap/Button";

import {} from "../utils/helpers/My_functions";
import { useSelector } from "react-redux";
import { chartOptions, chartDataExport } from "../utils/chartsInfo/chartprops";
import Header_group from "./headers";

import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const UnempPage = () => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [meanData, setMeanData] = useState([]); // mean data state
  const [isLoading, setIsLoading] = useState(); // State for loading indicator
  const selectedYear = useSelector((state) => state.selectedYear);
  const selectedCountry = useSelector((state) => state.selectedCountry);


  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        var endPoint = "http://127.0.0.1:8000/unemployement-page/";

        const response = await fetch(endPoint + selectedCountry + "/" + selectedYear + "/", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData);
        const meanResponse = await fetch(endPoint  + selectedCountry + "/" + "year-mean", {
          method: "GET",
        });
        if (!meanResponse.ok) {
          throw new Error(`Error fetching data: ${meanResponse.statusText}`);
        }
        const meanFetchedData = await meanResponse.json();
        setMeanData(meanFetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors (e.g., display an error message to the user)
      } finally {
        setIsLoading(false); // Set loading state to false after fetch
      }
    };

    fetchData();
  }, [selectedYear, selectedCountry]);

  const chartData = {
    labels: !isLoading
      ? data.map((item) => item.month) // Assuming month is a property in each data object
      : [],
    scales: {
      x: {
        type: "linear", // Set the scale type to 'category'
      },
    },
    datasets: [
      {
        label: `Unemployement Data - ${selectedYear}`,
        data: !isLoading
          ? data.map((item) => parseFloat(item.record_number)) // Assuming record_year is a property in each data object
          : [],
        backgroundColor: "#144F9A",
      },
    ],
  };

  const chartData2 = {
    labels: !isLoading
      ? meanData.map((item) => {
          return item.year;
        }) // Assuming month is a property in each data object
      : [],
    scales: {
      x: {
        type: "linear", // Set the scale type to 'category'
      },
    },
    datasets: [
      {
        label: "Unemployement Data yearly comparision",
        data: !isLoading
          ? meanData.map((item) => {
            return item.year_mean;
            }) // Assuming record_year is a property in each data object
          : [],
        backgroundColor: "#144F9A",
      },
    ],
  };

  ChartJS.register(CategoryScale, LinearScale);

  console.log(
    "type of record data :",
    typeof data,
    "record data :",
    data,
    "Loop with map :",
    data.map((item) => {
      return item.month;
    }),
    "preped data: ",
    data,
    isLoading,
    "redux year is :",
    selectedYear,
    "and",
    selectedCountry,
    "The new data fetch is here :",
    meanData,
    Object.keys(meanData).map((item) => {
      return item;
    })
  );

  return (
    <div>
      <Header_group choice={"title"} page_name={"Unemployement"} />
      <Dropdown_item />
      <div className="w-100 h-100 position-relative">
        {isLoading ? (
          <h3 className="w-100 vh-100 d-flex align-items-center justify-content-center">
            {" "}
            Loading Data ...{" "}
          </h3>
        ) : (
          <div className="w-100 h-100">
            <div className="row mb-5">
              <Bar data={chartData} options={chartOptions} />
              <div className="w-75 mx-auto my-2 p-3 d-flex flex-column align-items-center justify-content-center border border-primary rounded-3 border-3">
                <h3 className="m-5 fs-3"> How do I read the data </h3>
                <p className="fs-5">
                  <ul>
                    <li>
                      <strong>
                        {" "}
                        The unemployment rate is a lagging indicator:{" "}
                      </strong>
                      It reflects economic conditions from a few months prior.
                    </li>
                    <li>
                      <strong> Focus on trends: </strong> While a single month's
                      data point is informative, looking at trends over time
                      provides a better understanding of the labor market's
                      health.
                    </li>
                    <li>
                      <strong> For example :</strong> the line "1948-01-01 3.4"
                      means that the unemployment rate on January 1, 1948, was
                      3.4%.
                    </li>
                  </ul>
                </p>
              </div>

              <Header_group page_name={"Unemployement"} />
              <Line data={chartData2} options={chartOptions} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnempPage;
