var app = angular.module("myapp", []);
app.controller("laBController", function ($scope) {
    $scope.photo = "anh.jpg";
    $scope.ten = "Nguyên văn tèo";
    $scope.birthday = "20-01-1995";
    $scope.gender = "nam";
    $scope.mark = 8.5;


});
// function myDemo2($scope) {
//     $scope.HoTen = "Nguyên văn tèo";
//     $scope.Tuoi = "120-01-19959";
//     $scope.Email = "antvtph22740";
// }