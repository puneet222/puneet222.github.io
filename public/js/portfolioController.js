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
          mongo : 80,
        }

        $scope.skillsColors : {
          red : rgb(244, 67, 54),
          pink : rgb(233, 30, 99),
          purple : rgb(156, 39, 176),
          deep-purple : rgb(103, 58, 183),
          indigo : rgb(63, 81, 181),
          blue : rgb(33, 150, 243),
          light-blue : rgb(3, 169, 244),
          cyan : rgb(0, 188, 212),
          teal : rgb(0, 150, 136),
          green : rgb(76, 175, 80),
          light-green : rgb(139, 195, 74),
          lime : rgb(205, 220, 57),
          yellow : rgb(255, 235, 59),
          amber : rgb(255, 193, 7),
          orange : rgb(255, 152, 0),
          deep-orange : rgb(255, 87, 34),
          brown : rgb(121, 85, 72),
          grey : rgb(158, 158, 158),
          blue-grey : rgb(96, 125, 139)
        }

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
            var size = 2;
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
