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

/*document.querySelector("#dark-mode-toggle-mb").onclick = () => {
    document.documentElement.classList.toggle("dark");
};*/

function plotgraph (x, y){
    var trace1 = {
        type: "bar",
        x: x,
        y: y,
        marker: {
          color: "#C8A2C8",
          line: {
            width: 2.5,
          },
        },
      };
      
      var graphDiv = document.getElementById('bar1')
      
      Plotly.newPlot(
        graphDiv,
        [trace1],
        {
          title: "Nice Bar Graph",
          font: { size: 18 },
        },
        { responsive: true}
      );
}

plotgraph( [1999, 2000, 2001, 2002],[10, 15, 13, 17] );

function bar() {
    var arrx=[], arry=[], arr = [arrx,arry];
    const Http = new XMLHttpRequest();
    const url = "/bar";
    Http.open("GET", url);
    Http.send();
  
    Http.onreadystatechange = (e) => {
      arr = JSON.parse(Http.response);

    //   Plotly.addTraces(graphDiv, [{y: arr[0]}, {y: arr[1]}]);
    //   console.log(arr[0]);
        plotgraph(arr[0], arr[1]);

    };
  }
