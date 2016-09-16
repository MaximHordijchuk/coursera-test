(function (){
  'use strict';

  var app = angular.module("LunchCheck", []);

  app.controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController ($scope) {
    $scope.check = function () {
      var dishesCount = checkDishesCount($scope.lunch);
      if (dishesCount == 0) {
        $scope.message = "Please enter data first";
        $scope.messageStyle = { color: "red" };
        $scope.inputStyle = { border: "1px solid red" };
      } else {
        $scope.messageStyle = { color: "green" };
        $scope.inputStyle = { border: "1px solid green" };
        if (dishesCount <= 3) {
            $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
      }
    }
  }

  function checkDishesCount(lunchString) {
    if (lunchString === undefined || lunchString === "") {
      return 0;
    }
    var dishes = lunchString.split(",");
    var dishesCount = 0;
    for (var i in dishes) {
      if (dishes[i].trim() !== '') {
        dishesCount++;
      }
    }
    return dishesCount;
  }
})();
