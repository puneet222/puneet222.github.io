angular.module('portfolio').controller('portfolioController' , function ($scope) {

    $scope.init = function () {
        initializePagepiling() ;  // --------------  initializing pagePiling

        $("#pp-nav").hide() ;   // -----------   removing the tool tip (dots) of pagePiling

        $('.scrollDown').click(function(){      // ------------   function to scroll down the section of pagePiling
            $.fn.pagepiling.moveSectionDown();
        });

    };

    function initializePagepiling() {
        $('#pagepiling').pagepiling({
            scrollingSpeed: 500,
            afterRender : function () {
                // playing the video
                $('video').get(0).play();
            },
            onLeave: function(index, nextIndex, direction) {
                if(nextIndex == 2){
                    $(".skills").addClass("animated fadeInUpBig" , 1000) ;
                    $(".skills").addClass("sliding-middle-out" , 1000) ;
                    $(".skills").delay(2500).queue(function (next) {
                        $(".skills").trigger("hover");
                        next();
                    }) ;
                }
            }
        });
    }


});
