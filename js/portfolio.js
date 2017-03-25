$(document).ready(function() {

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


    $('.scrollDown').click(function(){
      $.fn.pagepiling.moveSectionDown();
    });
});
