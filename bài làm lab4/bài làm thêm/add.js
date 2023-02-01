var app = angular.module("myapp", []);
app.controller("sanPhamController", function ($scope) {
    $scope.welcome = "hello ";
    $scope.info = [{
        tenSP: "ao có lỗ",
        Gia: "4000$",
        mau: "do",
        KM: "20%"
    }, {
        tenSP: "ao ko lỗ",
        Gia: "4000$",
        mau: "do",
        KM: "20%"
    }, {
        tenSP: "ao  ko có lỗ",
        Gia: "4000$",
        mau: "do",
        KM: "20%"
    }];

});