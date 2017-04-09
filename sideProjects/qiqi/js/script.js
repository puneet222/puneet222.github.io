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
      backgroundColor : "#FFC107",
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
    $("meta[name='theme-color']").attr('content', '#455A64');
  }

  function warmUpState(){
    defaultState();
    $("html body").addClass("warmUpBackground" , "slow");
    $("#warmUp").css({backgroundColor : stateColorObject.warmUp.backgroundColor , color : "white"});
    $("meta[name='theme-color']").attr('content', stateColorObject.warmUp.backgroundColor);
  }

  function standByState(){
    defaultState();
    $("html body").addClass("standByBackground" , "slow");
    $("#standBy").css({backgroundColor : stateColorObject.standBy.backgroundColor , color : "white"});
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", stateColorObject.standBy.backgroundColor);
  }

  function onState(){
    defaultState();
    $("html body").addClass("onBackground" , "slow");
    $("#on").css({backgroundColor : stateColorObject.on.backgroundColor , color : "white"});
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", stateColorObject.on.backgroundColor);
  }

  function readyState(){
    defaultState();
    $("html body").addClass("readyBackground" , "slow");
    $("#ready").css({backgroundColor : stateColorObject.ready.backgroundColor , color : "white"});
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", stateColorObject.ready.backgroundColor);
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
