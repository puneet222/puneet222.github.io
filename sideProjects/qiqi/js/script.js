$(document).ready(function() {
  var stateColorObject = {
    default : {
      backgroundColor : "#006064",
      buttonColor : ""
    },
    standBy : {
      backgroundColor : "#F44336",
      buttonColor : ""
    },
    warmUp : {
      backgroundColor : "",
      buttonColor : ""
    },
    ready : {
      backgroundColor : "#6A1B9A",
      buttonColor : ""
    },
    on : {
      backgroundColor : "#56ab2f",
      buttonColor : ""
    }
  } ;

  defaultState() ;

  function defaultState(){
    console.log("lll");
    $("html body").addClass("defaultBackground");
    $("html body").removeClass("warmUpBackground");
    $("html body").removeClass("readyBackground");
    $("html body").removeClass("onBackground");
    $("html body").removeClass("standByBackground");
    $("#warmUp").css({backgroundColor : "transparent" , color : "white"});
    $("#ready").css({backgroundColor : "transparent" , color : "white"});
    $("#on").css({backgroundColor : "transparent" , color : "white"});
    $("#standBy").css({backgroundColor : "transparent" , color : "white"});
  }

  function warmUpState(){
    defaultState();
    $("html body").addClass("warmUpBackground" , "slow");
    $("#warmUp").css({backgroundColor : "#FF6F00" , color : "white"});
  }

  function standByState(){
    defaultState();
    $("html body").addClass("standByBackground" , "slow");
    $("#standBy").css({backgroundColor : stateColorObject.standBy.backgroundColor , color : "white"})
  }

  function onState(){
    defaultState();
    $("html body").addClass("onBackground" , "slow");
    $("#on").css({backgroundColor : stateColorObject.on.backgroundColor , color : "white"})
  }

  function readyState(){
    defaultState();
    $("html body").addClass("readyBackground" , "slow");
    $("#ready").css({backgroundColor : stateColorObject.ready.backgroundColor , color : "white"})
  }


  $("#warmUp").click(function(){
    warmUpState();
  })

  $("#standBy").click(function(){
    console.log("click");
    standByState();
  })

  $("#on").click(function(){
    onState();
  })

  $("#ready").click(function(){
    readyState();
  })

  $("#exit").click(function() {
    defaultState() ;
  });
});
