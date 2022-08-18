element = document.getElementsByTagName("nav")[0];
//element.style.top = "0px";

let lastKnownScrollPosition = 0;

function func(x, y) {
  //console.log(x + " " + y);
  if (x < y) {
    if (element.style.top != "0px") {
      element.style.top = "0px";
    }
  } else {
    if (window.screen.width < window.screen.height * 0.65) {
      element.style.top = "-52px";
    }
    lastKnownScrollPosition = window.scrollY;
  }
}

document.addEventListener(
  "scroll",
  () => func(window.scrollY, lastKnownScrollPosition),
  setTimeout(() => 100)
);

setTimeout(() => {
  if (localStorage.getItem("theme") == "true") {
    document.documentElement.classList.toggle("dark");
    console.log(localStorage.getItem("theme"));
  }
  console.log(localStorage.getItem("theme"));
}, 0);

function dark_mode() {
  if (localStorage.getItem("theme") == "true") {
    localStorage.setItem("theme", false);
  } else {
    localStorage.setItem("theme", true);
  }
  document.documentElement.classList.toggle("dark");
  console.log(localStorage.getItem("theme"));
}

document.querySelector("#dark-mode-toggle").onclick = () => {
  dark_mode();
};

function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

// CALLOUT NOTIFICATION SCRIPT ALVI NEEDED JQUERY
$(".callout").click(function(){
  $(this).hide()
})


/*document.querySelector("#dark-mode-toggle-mb").onclick = () => {
    document.documentElement.classList.toggle("dark");
};*/
var graphDiv = document.getElementById('bar1')
function plotgraph (x, y, type){
    var trace1 = {
        type: type,
        x: x,
        y: y,
        marker: {
          color: "#C8A2C8",
          line: {
            width: 2.5,
            height: 2,
          },
        },
      };
      
      
      Plotly.newPlot(
        graphDiv,
        [trace1],
        {
          title: "Year Average",
          font: { size: 18 },
        },
        { responsive: true}
      );
}

// plotgraph( [1999, 2000, 2001, 2002],[10, 15, 13, 17], "bar" );
let res;
let arr = [[], [], []];

function bar() {
  arr = [[], [], []];
  let url = "/bar";
  fetch(url)
    .then((res) => res.json())
    .then((out) => {
      res = out;
      for (let i = 0; i < out.length; i++) {
        arr[0][i] = out[i].YEAR;
        arr[1][i] = out[i].MEAN;
      }

      //   Plotly.addTraces(graphDiv, [{y: arr[0]}, {y: arr[1]}]);
      //   console.log(arr[0]);
      // plotgraph(arr[0], arr[1], "line");
      var trace1 = {
        type: "bar",
        x: arr[0],
        y: arr[1],
        marker: {
          color: "#C8A2C8",
          line: {
            width: 2.5,
            height: 2,
          },
        },
      };

      // var trace2 = {
      //   type: "line",
      //   x: arr[0][0],
      //   y: arr[0][1],
      //   name: 'pa_mean',
      //   marker: {
      //     color: "#75DFBC",
      //     line: {
      //       width: 2.5,
      //       height: 2,
      //     },
      //   },
      // };

      var layout = {
        title: {
          text: "Bar Graph",
          font: {
            family: "monospace",
            size: 24,
          },
        },
        xaxis: {
          title: {
            text: "Date",
            font: {
              family: "monospace",
              size: 18,
              color: "#7f7f7f",
            },
          },
        },
        yaxis: {
          title: {
            text: "PM2.5",
            font: {
              family: "monospace",
              size: 18,
              color: "#7f7f7f",
            },
          },
        },
      };

      Plotly.newPlot(
        graphDiv,
        [trace1],
        layout,
        { responsive: true }
      );
    })
    .catch((err) => {
      throw err;
    });
}

function line() {
  arr = [[], [], []];
  let url = "/line";
  fetch(url)
    .then((res) => res.json())
    .then((out) => {
      res = out;
      for (let i = 0; i < out.length; i++) {
        arr[0][i] = out[i].DAY;
        arr[1][i] = out[i].EPA_MEAN;
        arr[2][i] = out[i].PA_MEAN;
      }

      var trace1 = {
        type: "line",
        x: arr[0],
        y: arr[1],
        name: "pa_mean",
        marker: {
          color: "#75DFBC",
          line: {
            width: 2.5,
            height: 2,
          },
        },
      };

      var trace2 = {
        type: "line",
        x: arr[0],
        y: arr[2],
        name: "pa_mean",
        marker: {
          color: "#C8A2C8",
          line: {
            width: 2.5,
            height: 2,
          },
        },
      };

      var layout = {
        title: {
          text: "Average year",
          font: {
            family: "monospace",
            size: 24,
          },
        },
        xaxis: {
          title: {
            text: "Date",
            font: {
              family: "monospace",
              size: 18,
              color: "#7f7f7f",
            },
          },
        },
        yaxis: {
          title: {
            text: "PM2.5",
            font: {
              family: "monospace",
              size: 18,
              color: "#7f7f7f",
            },
          },
        },
      };

      Plotly.newPlot(
        graphDiv,
        [trace1, trace2],
        layout,
        { responsive: true }
      );
    })
    .catch((err) => {
      throw err;
    });
}

bar();

function getSelectValue()
{
    var selectedValue = String(document.getElementById("list").value);
    for (let i = 0; i < res.length; i++) {
      arr[0][i] = res[i][selectedValue];
    }
    Plotly.animate(
      graphDiv,
      {
        data: [{ x: arr[0] }],
        // traces: [0],
      },
      {
        transition: {
          duration: 500,
          easing: "cubic-in-out",
        },
        frame: {
          duration: 500,
        },
      }
    );
}

  function scatter() {
    var arrx=[], arry=[], arr = [arrx,arry];
    const Http = new XMLHttpRequest();
    const url = "/scatter";
    Http.open("GET", url);
    Http.send();
  
    Http.onreadystatechange = (e) => {
      arr = JSON.parse(Http.response);

    //   Plotly.addTraces(graphDiv, [{y: arr[0]}, {y: arr[1]}]);
    //   console.log(arr[0]);
    
    var trace1 = {
      x: arr[0],
      y: arr[1],
      mode: 'markers',
      type: 'scatter',
      name: 'Scatter',
      marker: { size: 5 }
    };
    
    var data = [trace1];
    
    var layout = {
      // xaxis: {
      //   range: [ 0.75, 5.25 ]
      // },
      // yaxis: {
      //   range: [0, 8]
      // },
      title:'Scatter Plot Year'
    };

    Plotly.newPlot(graphDiv, data, layout);

    };
  }

