// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
let chart1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample1 = {
  data1: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,255,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(255,255,0,0.0)");
    gradientStroke.addColorStop(0, "rgba(255,255,0,0)"); //yellow colors

    return {
      labels: [
          "JAN 1",
          "JAN 2",
          "JAN 3",
          "JAN 4",
          "JAN 5",
          "JAN 6",
          "JAN 7",
          "JAN 8",
          "JAN 9",
          "JAN 10",
          "JAN 11",
          "JAN 12",
          "JAN 13",
          "JAN 14",
          "JAN 15",
          "JAN 16",
          "JAN 17",
          "JAN 18",
          "JAN 19",
          "JAN 20",
          "JAN 21",
          "JAN 22",
          "JAN 23",
          "JAN 24",
          "JAN 25",
          "JAN 26",
          "JAN 27",
          "JAN 28",
          "JAN 29",
          "JAN 30",
          "JAN 31",
      ],
      datasets: [
        {
          label: "Electricity Consumption (Wh)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#FFFF00",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FFFF00",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#FFFF00",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
              5263,
              5828,
              5967,
              5890,
              5779,
              5472,
              5809,
              5821,
              5783,
              5751,
              5805,
              5326,
              5203,
              5999,
              5997,
              5885,
              5870,
              5627,
              5139,
              5056,
              5539,
              5761,
              5764,
              5733,
              5626,
              5167,
              4944,
              5617,
              5602,
              5574,
              5663,
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },

  data2: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,255,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(255,255,0,0.0)");
    gradientStroke.addColorStop(0, "rgba(255,255,0,0)"); //yellow colors


    return {
      labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
      ],
      datasets: [
        {
          label: "Electricity Consumption (Wh)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#FFFF00",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FFFF00",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#FFFF00",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
              28727,
              39767,
              39720,
              38646,
              38416,
              40157,
              40114,
              40213,
              38437,
              38831,
              37393,
              37255,
              36870,
              37468,
              37356,
              38137,
              39155,
              38783,
              39025,
              38902,
              37010,
              37376,
              42324,
              48036,
              43486,
              43308,
              43452,
              46653,
              48958,
              54012,
              51627,
              49979,
              50845,
              49381,
              53615,
              53911,
              48202,
              45573,
              46852,
              38964,
              40364,
              39521,
              42396,
              37669,
              39756,
              38550,
              39379,
              39192,
              40706,
              40454,
              42212,
              40042,
              16761,
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },

  data3: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,255,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(255,255,0,0.0)");
    gradientStroke.addColorStop(0, "rgba(255,255,0,0)"); //yellow colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Electricity Consumption (Wh)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#FFFF00",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FFFF00",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#FFFF00",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
            174260,
            159179,
            165976,
            163624,
            169300,
            208422,
            236881,
            225792,
            205280,
            177294,
            167755,
            180175
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },
  options: chart1
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################

let chartExample2 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "Usage",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [80, 101, 60, 25, 65]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
const chartExample3 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,0,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(255,0,0,0.0)");
    gradientStroke.addColorStop(0, "rgba(255,0,0,0)"); //red colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "Usage",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#FF0000",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FF0000",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#FF0000",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [90, 27, 60, 12, 80]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,0,0,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample4 = {
  data: {
    labels: [
      "Refrigration",
      "Lighting",
      "Air Condition",
      "Water Heating",
      "Ventilation"
    ],
    datasets: [
      {
        label: "Data",
        fill: true,
        borderWidth: 0,
        backgroundColor: [
          "#FFD400",
          "#FFDD3C",
          "#FFEA61",
          "#FFF192",
          "#FFFFB7"
        ],
        hoverBackgroundColor: [
          "#FFD400",
          "#FFDD3C",
          "#FFEA61",
          "#FFF192",
          "#FFFFB7"
        ],
        data: [12, 47, 22, 15, 4]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
let chartExample5 = {
  data: {
    labels: ["Washing Machine", "Gardening", "Toilet", "Shower", "Faucet"],
    datasets: [
      {
        label: "Data",
        fill: true,
        borderWidth: 0,
        backgroundColor: [
          "#1a84b8",
          "#1a8cb8",
          "#1a94b8",
          "#1a9cb8",
          "#1aa4b8"
        ],
        hoverBackgroundColor: [
          "#1a84b8",
          "#1a8cb8",
          "#1a94b8",
          "#1a9cb8",
          "#1aa4b8"
        ],
        data: [17, 21, 24, 20, 18]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################
const chartExample6 = {
  data: {
    labels: ["Cooking", "Space Heating", "Water Heating"],
    datasets: [
      {
        label: "Data",
        fill: true,
        borderWidth: 0,
        backgroundColor: ["#DC1C13", "#F07470", "#F6BDC0"],
        hoverBackgroundColor: ["#DC1C13", "#F07470", "#F6BDC0"],
        data: [31, 49, 20]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
};

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################

let chartExample7 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,255,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(255,255,0,0.0)");
    gradientStroke.addColorStop(0, "rgba(255,255,0,0)"); //yellow colors

    return {
      labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
      datasets: [
        {
          label: "Usage",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#FFFF00",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FFFF00",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#FFFF00",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [100, 101, 75, 65, 65]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,0,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};

// #########################################
// // // used inside src/views/Water.jsx
// #########################################

let chartExample8 = {
  data1: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
          "JAN 1",
          "JAN 2",
          "JAN 3",
          "JAN 4",
          "JAN 5",
          "JAN 6",
          "JAN 7",
          "JAN 8",
          "JAN 9",
          "JAN 10",
          "JAN 11",
          "JAN 12",
          "JAN 13",
          "JAN 14",
          "JAN 15",
          "JAN 16",
          "JAN 17",
          "JAN 18",
          "JAN 19",
          "JAN 20",
          "JAN 21",
          "JAN 22",
          "JAN 23",
          "JAN 24",
          "JAN 25",
          "JAN 26",
          "JAN 27",
          "JAN 28",
          "JAN 29",
          "JAN 30",
          "JAN 31",
      ],
      datasets: [
        {
          label: "Water Consumption (L)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
              518,
              513,
              507,
              515,
              511,
              497,
              478,
              532,
              540,
              557,
              555,
              516,
              491,
              498,
              563,
              531,
              505,
              499,
              479,
              450,
              443,
              432,
              488,
              495,
              499,
              480,
              451,
              458,
              501,
              508,
              512,
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },

  data2: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors


    return {
      labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
      ],
      datasets: [
        {
          label: "Water Consumption (L)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
              3226,
              4342,
              4463,
              4342,
              4366,
              4991,
              4850,
              4798,
              4862,
              4811,
              4265,
              3755,
              3772,
              3530,
              3664,
              3520,
              3283,
              3423,
              3540,
              3468,
              3419,
              3424,
              3592,
              4055,
              3786,
              3660,
              3640,
              3960,
              3980,
              4220,
              4201,
              4206,
              3967,
              4001,
              4213,
              4012,
              3665,
              3468,
              3501,
              3679,
              3754,
              3709,
              3686,
              4249,
              4022,
              3891,
              4109,
              4584,
              4537,
              4414,
              4588,
              4359,
              1847,
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },

  data3: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Water Consumption (L)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#1f8ef1",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#1f8ef1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
              19582,
              19341,
              18444,
              15005,
              15326,
              16116,
              17680,
              18236,
              15712,
              16886,
              17781,
              19765,
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },
  options: chart1
};

// #########################################
// // // used inside src/views/Gas.jsx
// #########################################

let chartExample9 = {
  data1: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,0,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(255,0,0,0.0)");
    gradientStroke.addColorStop(0, "rgba(255,0,0,0)"); //red colors

    return {
      labels: [
        "JAN 1",
        "JAN 2",
        "JAN 3",
        "JAN 4",
        "JAN 5",
        "JAN 6",
        "JAN 7",
        "JAN 8",
        "JAN 9",
        "JAN 10",
        "JAN 11",
        "JAN 12",
        "JAN 13",
        "JAN 14",
        "JAN 15",
        "JAN 16",
        "JAN 17",
        "JAN 18",
        "JAN 19",
        "JAN 20",
        "JAN 21",
        "JAN 22",
        "JAN 23",
        "JAN 24",
        "JAN 25",
        "JAN 26",
        "JAN 27",
        "JAN 28",
        "JAN 29",
        "JAN 30",
        "JAN 31",
      ],
      datasets: [
        {
          label: "Gas Consumption (L)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#FF0000",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FF0000",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#FF0000",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
              4840,
              5100,
              5200,
              5060,
              4690,
              4820,
              5460,
              5410,
              5270,
              5210,
              5210,
              4800,
              4720,
              5180,
              5310,
              5540,
              5360,
              5200,
              4780,
              4760,
              5630,
              6070,
              5820,
              6210,
              6080,
              5310,
              4910,
              5140,
              5080,
              4930,
              4940,
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },

  data2: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,0,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(255,0,0,0.0)");
    gradientStroke.addColorStop(0, "rgba(255,0,0,0)"); //red colors


    return {
      labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
      ],
      datasets: [
        {
          label: "Gas Consumption (cbm)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#FF0000",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FF0000",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#FF0000",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
              22.5,
              21.8,
              22.1,
              22.8,
              21.9,
              19.8,
              21.4,
              20.9,
              20.7,
              15.6,
              14.7,
              14.1,
              13.6,
              14.1,
              13.8,
              13.9,
              16.1,
              14.8,
              14.4,
              14.9,
              15.9,
              16.3,
              16,
              17.3,
              15.9,
              17,
              16.5,
              15.9,
              16.4,
              15.8,
              15.8,
              16.8,
              16.8,
              17.1,
              15.9,
              15.4,
              15,
              13.5,
              13.3,
              12.9,
              13.2,
              12.8,
              13.2,
              15.1,
              16.3,
              16.7,
              12.8,
              13.1,
              16.8,
              19.1,
              20.1,
              21,
              21.7,
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },

  data3: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,0,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(255,0,0,0.0)");
    gradientStroke.addColorStop(0, "rgba(255,0,0,0)"); //red colors

    return {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      datasets: [
        {
          label: "Gas Consumption (cbm)",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#FF0000",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#FF0000",
          pointBorderColor: "rgba(255,255,255,0)",
          pointHoverBackgroundColor: "#FF0000",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: [
              98.1,
              93.7,
              68.9,
              63.1,
              64.4,
              72.6,
              52,
              58.5,
              63.4,
              56.5,
              72.8,
              81.9,
          ]
        }
      ],
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(225,255,0,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ]
      }
    };
  },
  options: chart1
};

module.exports = {
  chartExample1, // in src/views/Dashboard.jsx
  chartExample2, // in src/views/Dashboard.jsx
  chartExample3, // in src/views/Dashboard.jsx
  chartExample4, // in src/views/Dashboard.jsx
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9
};
