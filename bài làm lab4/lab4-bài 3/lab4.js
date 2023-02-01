var app = angular.module("myapp", []);
app.controller("laBController", function ($scope) {
    $scope.info = [{
        "ten": "Nguyên văn tèo",
        "birthday": "20-01-1995",
        "gender": "nam",
        "photo": "the-spectator-nicebleed.jpg",
        "mark": 9.5
    }, {
        "ten": "Nguyên văn nở",
        "birthday": "20-01-1999",
        "gender": "nữ",
        "photo": "lonely-man-standing-on-the-sea-under-tithi-luadthong.jpg",
        "mark": 9.9
    }, {
        "ten": "Nguyên văn chèo",
        "birthday": "20-01-2000",
        "gender": "nam",
        "photo": "sonork_outpost_by_tobiasroetsch_defrvqt-pre.jpg",
        "mark": 2.0
    }];
});

