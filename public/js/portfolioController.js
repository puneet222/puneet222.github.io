angular.module('portfolio').controller('portfolioController' , function ($scope) {

    $scope.init = function () {
        // getProgress() ;
        $scope.htmlll = 555 ;

        $scope.skills = {
          html : 80,
          css : 60,
          javascript : 85,
          bootstrap : 90,
          "cc++" : 68,
          sql : 60,
          "mongo" : 80
        };

        $scope.skillsColors = {
          red : "#f44336",
          pink : "#e91e63",
          purple : "#9c27b0",
          "deep-purple" : "#673ab7",
          indigo : "#3f51b5",
          blue : "#2196f3",
          "lightBlue" : "#03a9f4",
          cyan : "#00bcd4",
          teal : "#009688",
          green : "#4caf50",
          "light-green" : "#8bc34a",
          lime : "#cddc39",
          yellow : "#ffeb3b",
          amber : "#ffc107",
          orange : "#ff9800",
          "deepOrange" : "#ff5722",
          brown : "#795548",
          grey : "#9e9e9e",
          "blueGrey" : "#607d8b"
        };








        $scope.skillsMetadata = [
            {
                "skill" : "HTML",
                "knowledge" : 85,
                "color" : $scope.skillsColors.red,
                "size" : 6,
                "image" : "../images/logo/html5.png"
            },
            {
                "skill" : "CSS",
                "knowledge" : 68,
                "color" : $scope.skillsColors.blue,
                "size" : 6,
                "image" : "../images/logo/css.png"
            },
            {
                "skill" : "JAVASCRIPT",
                "knowledge" : 88,
                "color" : $scope.skillsColors.amber,
                "size" : 6,
                "image" : "../images/logo/javascript.png"
            },
            {
                "skill" : "C++",
                "knowledge" : 75,
                "color" : $scope.skillsColors.indigo,
                "size" : 6,
                "image" : "../images/logo/cpp.png"
            },
            {
                "skill" : "C",
                "knowledge" : 88,
                "color" : $scope.skillsColors.blueGrey,
                "size" : 6,
                "image" : "../images/logo/c.png"
            },
            {
                "skill" : "JAVA",
                "knowledge" : 65,
                "color" : $scope.skillsColors.deepOrange,
                "size" : 6,
                "image" : "../images/logo/java.png"
            },
            {
                "skill" : "AJAX",
                "knowledge" : 80,
                "color" : $scope.skillsColors.blue,
                "size" : 6,
                "image" : "../images/logo/ajax.png"
            },
            {
                "skill" : "MONGODB",
                "knowledge" : 85,
                "color" : $scope.skillsColors.green,
                "size" : 6,
                "image" : "../images/logo/mongo.png"
            },
            {
                "skill" : "SQL",
                "knowledge" : 78,
                "color" : $scope.skillsColors.orange,
                "size" : 6,
                "image" : "../images/logo/mysql.png"
            },
            {
                "skill" : "GIT",
                "knowledge" : 75,
                "color" : $scope.skillsColors.red,
                "size" : 6,
                "image" : "../images/logo/git.png"
            },
            {
                "skill" : "BOOTSTRAP",
                "knowledge" : 90,
                "color" : $scope.skillsColors.purple,
                "size" : 6,
                "image" : "../images/logo/bootstrap.png"
            },
            {
                "skill" : "ANGULAR.JS",
                "knowledge" : 85,
                "color" : $scope.skillsColors.red,
                "size" : 6,
                "image" : "../images/logo/angular.png"
            },
            {
                "skill" : "NODE.JS",
                "knowledge" : 82,
                "color" : $scope.skillsColors.green,
                "size" : 6,
                "image" : "../images/logo/node.png"
            },
            {
                "skill" : "JQUERY",
                "knowledge" : 85,
                "color" : $scope.skillsColors.lightBlue,
                "size" : 6,
                "image" : "../images/logo/jquery.png"
            },
            {
                "skill" : "PYTHON",
                "knowledge" : 65,
                "color" : $scope.skillsColors.yellow,
                "size" : 6,
                "image" : "../images/logo/python.png"
            },
            {
                "skill" : "KONG",
                "knowledge" : 85,
                "color" : $scope.skillsColors.indigo,
                "size" : 6,
                "image" : "../images/logo/kong.png"
            },

            {
                "skill" : "R",
                "knowledge" : 65,
                "color" : $scope.skillsColors.blue,
                "size" : 6,
                "image" : "../images/logo/r.png"
            },
            {
                "skill" : "HTML",
                "knowledge" : 85,
                "color" : $scope.skillsColors.blue,
                "size" : 6,
                "image" : "../images/logo/html5.png"
            },
            {
                "skill" : "HTML",
                "knowledge" : 85,
                "color" : $scope.skillsColors.blue,
                "size" : 6,
                "image" : "../images/logo/html5.png"
            }
        ];

        console.log($scope.skillsMetadata) ;

        newStar();
        setInterval(starLight, 10);
        setInterval(starLight, 10);
    };

    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d");

    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    var count = 400;
    var stars = [];
    var opacity = 0.1;
    var r = 0;

    function draw (j) {
        ctx.fillStyle = "rgba(255,255,255," + opacity + ")";
        ctx.beginPath();
        if (opacity === 1) {
            var size = 1;
        } else {
            size = stars[j].size;
        }
        ctx.rect(stars[j].xpos, stars[j].ypos, size, size);
        ctx.fill();
    }

    function newStar () {
        r = Math.floor(Math.random() * (count));
        opacity = 1;
    }

    function starLight() {
        var star = stars[r];
        ctx.clearRect(star.xpos, star.ypos, 2, 2);
        draw(r);
        opacity -= 0.01;

        if (opacity <= star.op) {
            newStar();
        }
    }

    for (var i=0; i<count; i++) {
        opacity += 0.5/count;
        stars.push({
            xpos: Math.floor(Math.random()*W),
            ypos: Math.floor(Math.random()*H),
            size: 1,
            op: opacity
        });
        draw(i);
    }

});
