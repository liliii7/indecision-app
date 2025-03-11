"use strict";

console.log("App.js hii");
var titles = {
  title: "lidia",
  subtitle: "",
  options: []
};
var namee = "lidia maria";
var getName = function getName(name) {
  return name.split(" ")[0];
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, titles.title), titles.subtitle && /*#__PURE__*/React.createElement("p", null, titles.subtitle), titles.options.length > 0 ? /*#__PURE__*/React.createElement("p", null, "Here are your options") : /*#__PURE__*/React.createElement("p", null, "no options"), getName("lidia maria"));
var user = {
  name: "lidia",
  age: 20,
  location: ""
};
var getLocation = function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "location: ", location);
  }
  return /*#__PURE__*/React.createElement("p", null, "location not found");
};
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};
var count = 0;
var appRoot = document.getElementById("app");
var renderCounterApp = function renderCounterApp() {
  var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: minusOne
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    onClick: reset
  }, "reset"));
  ReactDOM.render(template2, appRoot);
};
renderCounterApp();
