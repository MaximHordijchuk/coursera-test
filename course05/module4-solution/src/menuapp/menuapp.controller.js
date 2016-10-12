(function() {
    "use strict";

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController)
        .controller('ItemsController', ItemsController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        var vm = this;
        vm.categories = categories.data;
    }

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var vm = this;
        vm.items = items.data;
    }
})();