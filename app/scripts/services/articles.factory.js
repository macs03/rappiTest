(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name rappiApp.articles.factory
     * @description
     * # articles.factory
     * Service in the rappiApp.
     */
    angular.module('rappiApp')
      .factory('articlesFactory', articlesFactory);

      articlesFactory.$inject =['$http','$q','apiUrl'];

      function articlesFactory($http,$q,apiUrl) {
        return {
            getAll: getAll
        }

        function getAll (idDeparture,idReturn) {
            var defered = $q.defer();
            var promise = defered.promise;
            $http({
                    method:'GET',
                    url: apiUrl
                })
                .success(function(data) {
                    defered.resolve(data);
                })
                .error(function(err) {
                    defered.reject(err);
                });

            return promise;
        }
      }
})();
