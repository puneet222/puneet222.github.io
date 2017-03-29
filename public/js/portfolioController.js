angular.module('portfolio').controller('portfolioController' , function ($scope) {

    $scope.init = function () {
        // getProgress() ;
        $scope.htmlll = 555 ;

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
