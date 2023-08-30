// #########################################
// Electricity Line Chart used in Dashboard
// #########################################

let elecLineChart = {
  id: 1,
  category: "Consumption per Month",
  title: "Electricity",
  type: "line",
  data: {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
    datasets: [
      {
        label: "Usage",
        borderColor: "#F6BE00",
        backgroundColor: "#D3D3D3",
        data: [100, 101, 75, 65, 65],
      },
    ],
  },
};

// #########################################
//  Water Line Chart used in Dashboard
// #########################################

let waterLineChart = {
  id: 2,
  category: "Consumption per Month",
  title: "Water",
  type: "line",
  data: {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
    datasets: [
      {
        label: "Usage",
        borderColor: "blue",
        backgroundColor: "#D3D3D3",
        data: [80, 101, 60, 25, 65],
      },
    ],
  },
};

// #########################################
//  Gas Line Chart used in Dashboard
// #########################################
const gasLineChart = {
  id: 3,
  category: "Consumption per Month",
  title: "Gas",
  type: "line",
  data: {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
    datasets: [
      {
        label: "Usage",
        borderColor: "red",
        backgroundColor: "#D3D3D3",
        data: [90, 27, 60, 12, 80],
      },
    ],
  },
};

// #########################################
// Electricity Pie Chart used in Dashboard
// #########################################
const elecPieChart = {
  id: 4,
  category: "Consumption",
  title: "Electricity",
  type: "pie",
  data: {
    labels: [
      "Refrigration",
      "Lighting",
      "Air Condition",
      "Water Heating",
      "Ventilation",
    ],
    datasets: [
      {
        label: "Data",
        data: [12, 47, 22, 15, 4],
        borderWidth: 0,
        backgroundColor: [
          "#FFD400",
          "#FFDD3C",
          "#FFEA61",
          "#FFF192",
          "#FFFFB7",
        ],
        hoverBackgroundColor: [
          "#FFD400",
          "#FFDD3C",
          "#FFEA61",
          "#FFF192",
          "#FFFFB7",
        ],
      },
    ],
  },
};

// #########################################
//  Water Pie Chart used in Dashboard
// #########################################
let waterPieChart = {
  id: 5,
  category: "Consumption",
  title: "Water",
  type: "pie",
  data: {
    labels: ["Washing Machine", "Gardening", "Toilet", "Shower", "Faucet"],
    datasets: [
      {
        label: "Data",
        data: [17, 21, 24, 20, 18],
        borderWidth: 0,
        backgroundColor: [
          "#1a84b8",
          "#1a8cb8",
          "#1a94b8",
          "#1a9cb8",
          "#1aa4b8",
        ],
        hoverBackgroundColor: [
          "#1a84b8",
          "#1a8cb8",
          "#1a94b8",
          "#1a9cb8",
          "#1aa4b8",
        ],
      },
    ],
  },
};

// #########################################
//  Gas Pie Chart used in Dashboard
// #########################################
const gasPieChart = {
  id: 6,
  category: "Consumption",
  title: "Gas",
  type: "pie",
  data: {
    labels: ["Cooking", "Space Heating", "Water Heating"],
    datasets: [
      {
        label: "Data",
        data: [31, 49, 20],
        borderWidth: 0,
        backgroundColor: ["#DC1C13", "#F07470", "#F6BDC0"],
        hoverBackgroundColor: ["#DC1C13", "#F07470", "#F6BDC0"],
      },
    ],
  },
};

export const lineCharts = [elecLineChart, waterLineChart, gasLineChart];
export const pieCharts = [elecPieChart, waterPieChart, gasPieChart];


