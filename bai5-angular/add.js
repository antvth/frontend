
function myDemo($scope) {
    $scope.welcome = "hello world";
}
var add = angular.module("myapp", []);
add.controller("demoController", myDemo);


