$(document).ready(function() {
  // Preload
  if (
    $(window).load(function() {
      $("#preloader").fadeOut("slow", function() {
        $(this).remove();
        $('.cover__title').velocity({opacity: 1, top: "5%"}, {delay: 1500, duration: 700});
        //$('.cover__description').velocity({opacity: 1}, {delay: 100, duration: 700});
        //$('.cover__figure__item').velocity({opacity: 1}, {delay: 700, duration: 1000});
        // $('.cover__figure__item--siti').velocity({opacity: 1}, {delay: 700, duration: 1000});
        // $('.cover__figure__item--yuyun').velocity({opacity: 1}, {delay: 900, duration: 1000});
        // $('.cover__figure__item--nini').velocity({opacity: 1}, {delay: 1100, duration: 1000});
        $('.cover__figure__name--1').velocity({opacity: 1}, {delay: 900, duration: 700});
        $('.cover__figure__name--2').velocity({opacity: 1}, {delay: 700, duration: 700});
        $('.cover__figure__name--3').velocity({opacity: 1}, {delay: 1100, duration: 700});
      });
    })
  );

  // Fullpage Js
  //adding the action to the button
  $(document).on("click", "#moveDown", function() {
    $.fn.fullpage.moveSectionDown();
  });

  $(document).on("click", ".nextDown", function() {
    $.fn.fullpage.moveSectionDown();
  });
  
  var fullIndex = $(".section").length;  
  
  // Desktop Version	
  $("#fullpage").fullpage({
    scrollOverflow: false,  // Overlap Page
    //responsiveWidth: 768,

    afterLoad: function(anchorLink, index) {
      
    },

    onLeave: function(index, nextIndex, direction) {
      var leavingSection = $(this);

      if (index == 1 && direction == "down") {
        $(".page__static__siti").removeClass("hide");
        $(".backtop").addClass("show");
        setTimeout(function(){
          $(".page__2").addClass("page__shadow--top");
        },1000);
        $(".tagline__title").velocity({opacity: 1,}, {delay: 1000, duration: 1000});               
        $(".tagline__name").velocity({opacity: 1,}, {delay: 1500, duration: 800});               
      } 
      else if (index == 2 && direction == "up") {
        $(".backtop").removeClass("show");
      } 
      else if (index == 2 && direction == "down") {            
        $(".page__static__market").removeClass("hide");  
        $('.album__1').velocity({opacity: 1,}, {delay: 500, duration: 1000});   
        $('.album__2').velocity({opacity: 1,}, {delay: 1000, duration: 1000});   
        $('.album__3').velocity({opacity: 1,}, {delay: 1500, duration: 1000});   
        $('.page__3 .article').velocity({opacity: 1,}, {delay: 2000, duration: 1000});   
        
      } 
      else if (index == 3 && direction == "up") {
        $(".page__static__market").addClass("hide");     
      }
      else if (index == 3 && direction == "down") {            
        $(".page__static__rain").removeClass("hide");     
        $('.page__4 .text').velocity({opacity: 1,}, {delay: 500, duration: 1000});                   
      } 
      else if (index == 4 && direction == "up") {
        $(".page__static__rain").addClass("hide");     
      }
      else if (index == 4 && direction == "down") {            
        $(".page__static__rain").addClass("hide");     
        $(".page__static__market").removeClass("hide");             
        //$(".page__5 .article").velocity({opacity: 1,}, {delay: 500, duration: 1000});          
        setTimeout(function(){
          $(".page__5 .article").addClass("animate--show");  
        },500);        
      } 
      else if (index == 5 && direction == "up") {
        $(".page__static__rain").removeClass("hide");          
      }
      else if (index == 5 && direction == "down") {      
        $(".quotes__bubble").addClass("animate--scaleIn")
      } 
      else if (index == 6 && direction == "up") {
        $(".quotes__bubble").removeClass("animate--scaleIn")
      }
      else if (index == 6 && direction == "down") {  
        $(".quotes__bubble").removeClass("animate--scaleIn")
        $(".page__static__yuyun").removeClass("hide");     
      } 
      else if (index == 7 && direction == "up") {
        $(".quotes__bubble").addClass("animate--scaleIn")
        $(".page__static__yuyun").addClass("hide");      
      }
      else if (index == 7 && direction == "down") {  
        $(".page__static__kios").removeClass("hide");     
      } 
      else if (index == 8 && direction == "up") {
        $(".page__static__kios").addClass("hide");      
      }
      else if (index == 8 && direction == "down") {
             
      }
      else if (index == 9 && direction == "up") {
             
      }
      else if (index == 9 && direction == "down") {
        $(".social").fadeOut(300);
      }
      else if (index == 10 && direction == "up") {
        $(".social").fadeIn(300);
        
      }
      else if (index == 10 && direction == "down") {
        $(".social").fadeIn(300);      
        $(".quotes__bubble__2").addClass("animate--scaleIn")       
      }
      else if (index == 11 && direction == "up") {
        $(".social").fadeOut(300);
        $(".quotes__bubble__2").removeClass("animate--scaleIn")       
        
      }
      else if (index == 11 && direction == "down") {
        $(".quotes__bubble__2").removeClass("animate--scaleIn")       
        $(".page__static__nini").removeClass("hide");
      }
      else if (index == 12 && direction == "up") {
        $(".quotes__bubble__2").addClass("animate--scaleIn")       
        $(".page__static__nini").addClass("hide");
      }
      else if (index == 12 && direction == "down") {
        $(".page__static__transaksi").removeClass("hide");
      }
      else if (index == 13 && direction == "up") {
        $(".page__static__transaksi").addClass("hide");
      }
      else if (index == 13 && direction == "down") {
        
      }
      else if (index == 14 && direction == "up") {
        
      }
      else if (index == 14 && direction == "down") {
        $(".social").fadeOut(300);
      }
      else if (index == 15 && direction == "up") {
        $(".social").fadeIn(300);
        
      }
      else if (index == 15 && direction == "down") {
        $(".social").fadeIn(300);
        $(".page__static__ukm").removeClass("hide");
      }
      else if (index == 16 && direction == "up") {
        $(".social").fadeOut(300);
        $(".page__static__ukm").addClass("hide");        
      }
      else if (index == 16 && direction == "down") {
        $(".page__static__black").removeClass("hide");
      }
      else if (index == 17 && direction == "up") {
        $(".page__static__black").addClass("hide");        
      }
      else if (index == 17 && direction == "down") {
        $(".page__content__hand").addClass("animate--pullUp")
        $(".social").fadeOut(300);
      }
      else if (index == 18 && direction == "up") {
        $(".page__content__hand").removeClass("animate--pullUp")               
        $(".social").fadeIn(300);
      }
      else if (index == 18 && direction == "down") {
        $(".social").fadeIn(300);
        $(".top-hand").addClass("animate--pullUp");        
      }
      else if (index == 19 && direction == "up") {
        $(".social").fadeOut(300);
        //$(".top-hand").removeClass("animate--pullUp");        
      }
      else if (index == 19 && direction == "down") {
        $(".social").fadeOut(300);
      }
      else if (index == 20 && direction == "up") {
        $(".social").fadeIn(300);        
      }
      else if (index == 20 && direction == "down") {
        $(".social").fadeIn(300);
        $(".page__static__lamp").removeClass("hide");
      }
      else if (index == 21 && direction == "up") {
        $(".social").fadeOut(300);
        $(".page__static__lamp").addClass("hide");
        $(".page__static__black").removeClass("hide");
      }
      else if (index == 21 && direction == "down") {
        $(".page__static__lamp").addClass("hide");
        $(".page__static__black").removeClass("hide");
        $(".social").fadeOut(300);
      }
      else if (index == 22 && direction == "up") {
        $(".page__static__lamp").removeClass("hide");
        $(".page__static__black").addClass("hide");
        $(".social").fadeIn(300);
      }
      else if (index == 22 && direction == "down") {
        $(".social").fadeIn(300);
        
      }
      else if (index == 23 && direction == "up") {
        $(".social").fadeOut(300);
        
      }
      else if (index == 23 && direction == "down") {
        //$.fn.fullpage.setAutoScrolling(false)
      }
      else if (index == 27 && direction == "down") {
        $(".page__static__figure").removeClass("hide");        
      }
      else if (index == 28 && direction == "up") {
        $(".page__static__figure").addClass("hide");   
      }
      else if (index == 28 && direction == "down") {
        
      }
      else if (index == 29 && direction == "up") {
        
      }
      else if (index == 29 && direction == "down") {
        $(".page__static__figure2").removeClass("hide");                     
      }
      else if (index == 30 && direction == "up") {
        $(".page__static__figure2").addClass("hide");                     
      }
      else if (index == 30 && direction == "down") {                     
        $(".page__static__figure2").addClass("hide");                     
        $(".page__static__black2").removeClass("hide");                     
      }
      else if (index == 31 && direction == "up") {                     
        $(".page__static__figure2").removeClass("hide");                     
        $(".page__static__black2").addClass("hide");                     
      }
      
    }
  });

  // Picture element HTML5 shiv
  document.createElement("picture");


  // Parallax Cover
  var scene = document.getElementById("cover__parallax");
  var parallaxInstance = new Parallax(scene, {
    calibrateY: false,
    scalarY: 5,
    scalarX: 3
  });

  // Rain Effect
  var makeItRain = function() {
    $(".rain").empty();
    var increment = 0;
    var drops = "";
    var backDrops = "";
    while (increment < 100) {
      var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      increment += randoFiver;
      drops +=
        '<div class="drop" style="left: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
      backDrops +=
        '<div class="drop" style="right: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
    }
    $(".rain.front-row").append(drops);
    $(".rain.back-row").append(backDrops);
  };
  makeItRain();
});

// Mobile Version
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $(".cover__background").remove();
} else {
   
}
