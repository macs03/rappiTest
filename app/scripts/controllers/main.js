(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name rappiApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the rappiApp
     */
    angular
        .module('rappiApp')
        .controller('MainCtrl', MainCtrl);

        MainCtrl.$inject = ['$scope','articlesFactory'];

        function MainCtrl($scope, articlesFactory) {
            var vm = this;
            vm.callNews = callNews;
            vm.titleSelected = "";
            vm.selectNew = selectNew;
            vm.news = [];

            function callNews() {
                articlesFactory
                    .getAll()
                    .then(function (data) {
                        console.log(data);
                        vm.news = data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }

            function selectNew(id) {
                console.log(id);
                angular.forEach(vm.news, function(value, key) {
                    if (value.id == id) {
                        vm.titleSelected = value.title;
                    }
                });
            }

        }
})();
