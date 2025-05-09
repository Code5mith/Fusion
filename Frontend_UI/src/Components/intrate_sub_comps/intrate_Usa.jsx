import React from "react";

import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

import Header_group from "../headers";


function IntrateUsa(props) {
  return (
    <div className="w-100 h-100">
      <div className="row mb-5">
        <Bar data={props.chartData} options={props.chartOptions} />
        <div className="w-75 mx-auto my-2 p-3 d-flex flex-column align-items-center justify-content-center border border-primary rounded-3 border-3">
          <h3 className="m-5 fs-3"> How do I read the data </h3>
          <div className="fs-5">
            <ul>
              <li>
                <strong>The Federal Funds Rate:</strong> This is the target
                interest rate set by the Fed at which banks lend reserves to
                each other overnight. It's a key benchmark rate that influences
                other borrowing costs. The table shows the target rate and the
                actual effective federal funds rate.
              </li>
              <li>
                <strong>Treasury Yields:</strong> These are the interest rates
                offered on U.S. government bonds with different maturities like
                5-year or 30-year. You can see yields for both nominal regular
                Treasury securities and Treasury Inflation-Protected Securities
                TIPS.
              </li>
              <li>
                <strong> What is the data: </strong> The data presented here is
                the
                <i className="text-decoration-underline"> Interbank :</i> also
                refers to the interest rate charged when banks conduct wholesale
                transactions in foreign currencies with banks in other nations.
                The interbank rate, also known as the federal funds rate, is the
                interest charged on short-term loans made between financial
                institutions/banks.
              </li>
            </ul>
          </div>
        </div>

        <Header_group page_name={"Interest-rates"} />
        <Line data={props.chartData2} options={props.chartOptions} />
      </div>
    </div>
  );
}

export default IntrateUsa;
