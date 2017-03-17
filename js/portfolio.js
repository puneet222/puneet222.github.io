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
            }
        }
    });


    $('.scrollDown').click(function(){
      $.fn.pagepiling.moveSectionDown();
    });
    function haha(){
        alert("ko") ;
    }
    $("#but").click(function () {
        // alert("aa") ;
        $("#skills").addClass("animated slideInUp") ;
    })
});
