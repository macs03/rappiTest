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

        MainCtrl.$inject = ['$scope','articlesFactory','$timeout'];

        function MainCtrl($scope, articlesFactory, $timeout) {
            var vm = this;
            vm.callNews = callNews;
            vm.titleSelected = "";
            vm.selectNew = selectNew;
            vm.news = [];
            vm.loadTitles = false;
            vm.introMainTitle = false;
            vm.outMainTitle = false;

            function callNews() {
                articlesFactory
                    .getAll()
                    .then(function (data) {
                        console.log(data);
                        vm.news = data;
                        vm.loadTitles = true;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
            var aux = 0;
            function selectNew(id) {
                console.log(id);
                if (aux == id) {
                    vm.outMainTitle = true;
                    console.log('cerramos');
                    aux = 0;
                }else{
                    aux = id;
                    console.log('nuevo');
                    vm.outMainTitle = false;
                    $('.title').removeClass('out-main-title');
                }
                angular.forEach(vm.news, function(value, key) {
                    if (value.id == id && !vm.outMainTitle) {
                        vm.introMainTitle = true;
                        vm.titleSelected = value.title;
                        $timeout(function () {
                            $('.title').removeClass('intro-main-title');
                            vm.introMainTitle = false;
                        }, 2000);
                    }
                });
            }

        }
})();
