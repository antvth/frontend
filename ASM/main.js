var app = angular.module("myapp", []);
app.controller("laBController", function ($scope) {

    $scope.lienhe = "Liên Hệ";
    $scope.viet = "Việt Nam";
    $scope.Tong = "Tổng đài hỗ trợ vé máy bay";
    $scope.dien = "+84 1900 1166";
    $scope.email = "19001166@bambooairways.com";
    $scope.dien2 = "+84 1900 1133";

});

app.controller("demo", function ($scope) {
    $scope.Gioi = "Giới Thiệu"
    $scope.the = "Ưa Đãi Thẻ";
    $scope.GT = "Giới Thiệu Về Bamboariway"
    $scope.TT = "Tin Tức về Bamboo"
});