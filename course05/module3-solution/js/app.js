(function (){
  "use strict";

  var app = angular.module("NarrowItDownApp", []);

  app.service("MenuSearchService", ["$http", function ($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data.menu_items.filter(function (item) {
          return item.description.includes(searchTerm);
        });

        // return processed items
        return foundItems;
      });
    };
  }]);

  app.directive("foundItems", [function () {
    var ddo = {
      restrict: "E",
      templateUrl: "foundItemsTemplate.html",
      scope: {
        foundItems: "<",
        onRemove: "&",
      }
    };

    return ddo;
  }]);

  app.controller("NarrowItDownController", ["MenuSearchService", function (MenuSearchService) {
    var vm = this;

    vm.searchTerm = "";

    vm.getMatchedMenuItems = function () {
      if (vm.searchTerm === "") {
        vm.found = [];
      } else {
        var menuItemsPromise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);
        menuItemsPromise.then(function(foundItems) {
          vm.found = foundItems;
        }, function() {
          vm.found = [];
        });
      }
    };
    
    vm.removeItem = function (index) {
      vm.found.splice(index, 1);
    };
  }]);
})();
