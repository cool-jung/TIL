$(function(){

    var $slide = $("section>.main_slides>.slides_content>li");
    var $indicator = $("section>.main_slides>.slides_pagination>li>a"); 
    var nowIdx = 0;

    $("a").on("click", function(evt){
        evt.preventDefault();
    });

    $indicator.on("click",function(evt){
        evt.preventDefault();

        nowIdx = $indicator.index(this);

        $indicator.eq(nowIdx).parent().addClass("on")
                             .siblings().removeClass("on");

        $slide.eq(nowIdx).show().siblings().hide();
    });

    
    intervalKey = setInterval(function(){

        if(nowIdx<4){
            nowIdx++;
        }else{
            nowIdx = 0;
        }

        $indicator.eq(nowIdx).parent().addClass("on")
                             .siblings().removeClass("on");
        
        $slide.eq(nowIdx).show().siblings().hide();
            
    },2500);


    

    $("header>.header_container>.mobile_gnb_button1").on("click", function(){

        $(this).hide();
        $("header>.header_container>.mobile_gnb_button2").show();
        $("header>.header_container>.mobile_gnb").css({
            "display":"block"
        });

    });

    $("header>.header_container>.mobile_gnb_button2").on("click", function(){

        $(this).hide();
        $("header>.header_container>.mobile_gnb_button1").show();
        $("header>.header_container>.mobile_gnb").css({
            "display":"none"
        });

    });




});
