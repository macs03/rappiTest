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
            vm.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            articlesFactory
                .getAll()
                .then(function (data) {
                    console.log(data);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
})();
