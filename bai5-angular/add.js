
function myDemo($scope) {
    $scope.welcome = "hello world";
}

function myDemo2($scope) {
    $scope.HoTen = "AN";
    $scope.Tuoi = "19";
    $scope.Email = "antvtph22740";
}
// function myinfo($scope) {
//     $scope.huhu = "chu mung nam moi";
// }
var app = angular.module("myapp", []);
app.controller("demoController", myDemo);
app.controller("demo2", myDemo2);
// app.controller("myinfoController", myinfo);

app.controller("myinfoController", function ($scope) {
    $scope.huhu = "chu mung nam moi";
    $scope.info = [{
        "ten": "sondauvang",
        "tuoi": 18,
        "photo": "the-spectator-nicebleed.jpg",
        "email": "dauvang@gmail.com",
        "sdt": "096756756756"
    }, {
        "ten": "sondauvang",
        "tuoi": 18,
        "email": "dauvang@gmail.com",
        "sdt": "096756756756"
    }, {
        "ten": "sondauvang",
        "tuoi": 18,
        "email": "dauvang@gmail.com",
        "sdt": "096756756756"
    }];
});


