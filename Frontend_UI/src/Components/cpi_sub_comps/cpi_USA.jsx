import React from "react";

import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

import Header_group from "../headers";


function CpiUSA(props) {

  return (
    <div className="w-100 h-100">
      <div className="row mb-5">

        {/* chart render logic for bar charts expanded year view */}
        
        <Bar data={props.chartData} options={props.chartOptions} />

        <div className="w-75 mx-auto my-2 p-3 d-flex flex-column align-items-center justify-content-center border border-primary rounded-3 border-3">
          <h3 className="m-5 fs-3"> How is the data Calculated </h3>
          <p className="fs-5">
            The Bureau of Labor Statistics which is the source of CPI data in
            the United States, states that most CPI index series have a
            1982-84=100 reference base
            <span>
              <a href="https://www.bls.gov/bls/faqs.htm.">
                {" "}
                Bureau of Labor Statistics.{" "}
              </a>
            </span>{" "}
            This means that the average price level for the urban consumer
            basket of goods and services during the period 1982-1984 was set as
            100. An index of 110 would then indicate a 10% increase in prices
            since that period.
            <br />
            <div className="w-75 my-2 mx-auto text-underline border text-center bg-primary">
              <strong className="fw-bolder text-decoration-underline text-white">
                <i>
                  {" "}
                  This graph shows the percentage difference from the reference
                  year 1982-84
                </i>
              </strong>
            </div>
          </p>
        </div>
        <Header_group page_name={"Cpi"} />

        {/* Line chart render */}
        <Line data={props.chartData2} options={props.chartOptions} />
        
      </div>
    </div>
  );
}

export default CpiUSA;
