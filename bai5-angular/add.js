
function myDemo($scope) {
    $scope.welcome = "hello world";
}

function myDemo2($scope) {
    $scope.HoTen = "AN";
    $scope.Tuoi = "19";
    $scope.Email = "antvtph22740";
}
function myinfo($scope) {
    $scope.huhu = "chu mung nam moi";
}
var app = angular.module("myapp", []);
app.controller("demoController", myDemo);
app.controller("demo2", myDemo2);
app.controller("myinfoController", myinfo);

