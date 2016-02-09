var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
function addFriend($scope) {
  $scope.friends = [
    'Tyler',
    'Alyssa',
    'Christy',
    'Claudio'
  ];
});
