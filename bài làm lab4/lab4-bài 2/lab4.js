var app = angular.module("myapp", []);
app.controller("laBController", function ($scope) {
    $scope.info = {
        "ten": "Nguyên văn tèo",
        "birthday": "20-01-1995",
        "gender": "nam",
        "mark": 8.5
    };
});

