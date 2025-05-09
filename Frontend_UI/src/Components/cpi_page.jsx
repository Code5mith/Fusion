import { useContext, useEffect, useState, useMemo } from "react";
import Dropdown_item from "./dropdown";

//import {} from "../utils/helpers/My_functions";
import { useSelector } from "react-redux";
import { chartOptions, chartDataExport } from "../utils/chartsInfo/chartprops";
import CpiUSA from "./cpi_sub_comps/cpi_USA";
import Header_group from "./headers";

import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

export const CpiPage = (props) => {
  const [data, setData] = useState([]); // State to hold fetched data
  const [meanData, setMeanData] = useState([]); // mean data state
  const [isLoading, setIsLoading] = useState(); // State for loading indicator
  const selectedYear = useSelector((state) => state.selectedYear);
  const selectedCountry = useSelector((state) => state.selectedCountry);

  // Fetch data on component mount

  // Use the memoized fetch function inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        var endPoint = "http://127.0.0.1:8000/cpi-page/";
        
        const response = await fetch(
          endPoint + selectedCountry + "/" + selectedYear + "/",
          {
            method: "GET",
          }
        );
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
        label: `Cpi Data - ${selectedYear} Reference year 1982-84`,
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
        label: "Cpi Data yearly comparision in percent %",
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
    "Year mean data :",
    meanData,
    meanData.map((item) => {
      console.log("Full item info :", item, "year is ", item.year, "item is ", item.year_mean, typeof(meanData))
    })
  );

  return (
    <div>
      <Header_group choice={"title"} page_name={"Cpi"} />
      <Dropdown_item />
      <div className="w-100 h-100 position-relative">
        {isLoading ? (
          <h3 className="w-100 vh-100 d-flex align-items-center justify-content-center">
            {" "}
            Loading Data ...{" "}
          </h3>
        ) : (
          //handleCountryComp()

          <CpiUSA
            chartData={chartData}
            chartData2={chartData2}
            chartOptions={chartOptions}
          />
        )}
      </div>
    </div>
  );
};

export default CpiPage;
