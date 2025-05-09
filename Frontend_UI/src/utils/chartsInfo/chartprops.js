import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

var chartData = {}
var chartDataMean = {}

/// This func is currently not used by any comp

export const chartDataExport = (data, meanData, isLoading, option, selectedYear) => {

  chartData = {
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
        label: `Cpi Data - ${selectedYear}`,
        data: !isLoading
          ? data.map((item) => parseFloat(item.record_number)) // Assuming record_year is a property in each data object
          : [],
        backgroundColor: "#144F9A",
      },
    ],
  };

chartDataMean = {
    labels: !isLoading
      ? Object.keys(meanData).map((item) => {
          return item;
        }) // Assuming month is a property in each data object
      : [],
    scales: {
      x: {
        type: "linear", // Set the scale type to 'category'
      },
    },
    datasets: [
      {
        label: "Cpi Data yearly comparision",
        data: !isLoading
          ? Object.keys(meanData).map((item) => {
              return meanData[item];
            }) // Assuming record_year is a property in each data object
          : [],
        backgroundColor: "#144F9A",
      },
    ],
  };

  if (option == "bar"){
    return chartData
  }
  if (option == "mean"){
    return chartDataMean
  }
  

}

// Reminder : The above code is not in use .


// options

export const chartOptions = {
    title: {
      display: true, // Set to true to display the title (default: false)
      text: "Cpi_data", // Set the title text
      font: {
        size: 16, // Font size for the title
        family: "Arial", // Font family for the title (optional)
        weight: "bold", // Font weight for the title (optional)
      },
      padding: 10, // Padding around the title (optional)
    },

    legend: {
      display: true, // Set to true to display the legend (default: true)
      labels: {
        font: {
          size: 14, // Font size for legend labels
          family: "Source Sans 3", // Font family for legend labels (optional)
          weight: "normal", // Font weight for legend labels (optional)
        },
      },
      position: "bottom", // Set the legend position (e.g., 'top', 'right', 'bottom', 'left')
    },

    scales: {
      x: {
        gridLines: {
          color: "black", // Set the color of the grid lines
          lineWidth: 0.5, // Set the width of the grid lines
          borderDash: [5, 5], // Set a dashed line pattern (optional)
        }, // X-axis options
        ticks: {
          color: "black",
          font: {
            size: 18, // Font size for X-axis labels
            family: "Source Sans 3", // Font family for X-axis labels (optional)
            weight: "normal", // Font weight for X-axis labels (optional)
          },
        },
      },
      y: {
        // Y-axis options
        ticks: {
          color: "black",
          font: {
            size: 18, // Font size for Y-axis labels
            family: "Source Sans 3", // Font family for Y-axis labels (optional)
            weight: "normal", // Font weight for Y-axis labels (optional)
          },
        },
      },
    },
  };

  ChartJS.register(CategoryScale, LinearScale);
