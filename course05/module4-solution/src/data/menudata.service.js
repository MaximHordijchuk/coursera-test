(function() {
    "use strict";

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: ApiBasePath + "/categories.json"
            });
        };

        service.getItemFromCategory = function (category) {
            return $http({
                method: "GET",
                url: ApiBasePath + "/menu_items.json?category=" + category
            });
        };
    }
})();