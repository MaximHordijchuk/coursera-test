(function (){
  "use strict";

  var app = angular.module("ShoppingListCheckOff", []);

  app.service('ShoppingListCheckOffService', function () {
    var service = this;

    var buy = [
      { name: "cookies", quantity: 10},
      { name: "apples", quantity: 4},
      { name: "tomatoes", quantity: 7},
      { name: "lemons", quantity: 2},
      { name: "ice creams", quantity: 2},
      { name: "potatoes", quantity: 15},
    ];
    var bought = [];

    service.getBuyItems = function () {
      return buy;
    };

    service.getBoughtItems = function () {
      return bought;
    };

    service.buyItem = function (index) {
      bought.push(buy[index]);
      buy.splice(index, 1);
    }
  });

  app.controller("ToBuyController", ["ShoppingListCheckOffService", function (ShoppingListCheckOffService) {
    var vm = this;
    vm.items = ShoppingListCheckOffService.getBuyItems();
    vm.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }]);

  app.controller("AlreadyBoughtController", ["ShoppingListCheckOffService", function (ShoppingListCheckOffService) {
    var vm = this;
    vm.items = ShoppingListCheckOffService.getBoughtItems();
  }]);
})();
