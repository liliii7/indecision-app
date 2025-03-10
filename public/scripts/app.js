"use strict";

var user = {
  name: 'lidia',
  cities: ['new york', 'new jersey', 'california'],
  printPlaces: function printPlaces() {
    var _this = this;
    this.cities.forEach(function (city) {
      console.log(_this.name + 'has lived in ' + city);
    });
  }
};
user.printPlaces();
