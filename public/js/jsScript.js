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

var trace1 = {
  type: "bar",
  x: [1, 2, 3, 4],
  y: [11, 10, 5, 8],
  marker: {
    color: "#C8A2C8",
    line: {
      width: 2.5,
    },
  },
};

function bar() {
  const Http = new XMLHttpRequest();
  const url = "/bar";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };
}

Plotly.newPlot(
  "bar1",
  [trace1],
  {
    title: "Nice Bar Graph",
    font: { size: 18 },
  },
  { responsive: true, theme: "dark" }
);
