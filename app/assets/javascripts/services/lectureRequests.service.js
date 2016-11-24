(function () {

  'use strict';

  function LectureRequestsService($scope, user, $resource) {

    

    var LectureRequest = $resource('/lecture_request/:id', {id: '@id'}, {
      get: {method: 'GET'}, 
      update: {method: 'PUT'},
      delete: {method: 'DELETE'}
    });



    return LectureRequest;

    // function createRequest() {
    //   debugger
    //   var req = {
    //     method: 'POST',
    //     url: '/lecture_requests/'+user.id,
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     data: {
    //       user: user
    //     }
    //   }
    //   debugger

    //   return $http(req)
    //     .catch(handleError);
    // }

    // function all() {
    //     return $http.get('/lecture_requests/index.json',{}).success(function(data) {});
    // }

    // function all() {
    //     return $http.get('/lecture_requests/index.json',{}).success(function(data) {});
    // }

    // function find() {
    //     return $http.get('/lecture_requests/index.json',{}).success(function(data) {});
    // }

    // They can be called like this:

    // LectureRequestsService.httpShowAll().then(function(data) {
    //     vm.all() = data;
    // });
    
    // LectureRequestsService.resourceShowAll().index().$promise.then(function(success) {
    //     vm.allResources = success;
    // });
  }

  angular
    .module('lecture_requester')  
    .service('LectureRequestsService', LectureRequestsService)

}())
