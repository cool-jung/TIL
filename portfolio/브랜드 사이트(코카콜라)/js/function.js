$(function(){

   
    var nav=$('.gnb1>ul');
    nav.mouseenter(function(){
            $('.sub').stop().slideDown(350);
            $('.gnb_bg').stop().slideDown(350);
        });
    nav.mouseleave(function(){
            $('.sub').stop().slideUp(300);
            $('.gnb_bg').stop().slideUp(300);
        });  
        

        window.onload = function(){ 
    var $slide = $(".slide_content>li");
    var $indicator = $(".slide1_arrow>a"); 
    var nowIdx = 0;


     
    

    nowIdx = 0;
    
    setInterval(function(){
        if(nowIdx<2){
                nowIdx++;
           }else{
                nowIdx = 0;
           }
        
            $(".slide_content").stop().animate({
                "left":-1920*nowIdx
            });
        
    },3000);
    
}
    


    var $slides = $(".new_production_imgs>li");
    var $indicator = $(".pagenate2>ul>li>a");
    var nowIdx = 0;
    var oldIdx = nowIdx;

    var fadeFn = function(){
        
        $indicator.eq(nowIdx).parent().addClass("on")
        .siblings().removeClass("on");

        
        $slides.eq(oldIdx).stop().fadeOut(1000);

        
        $slides.eq(nowIdx).stop().fadeIn(1000);

        oldIdx = nowIdx;
    };

    $indicator.on("click", function(evt){
        evt.preventDefault();

        nowIdx = $indicator.index(this);

        if(oldIdx != nowIdx){
            
            fadeFn();
            
        }

    });

    //이전
    $(".slide2_arrow>.prev").on("click",function(evt){
        evt.preventDefault();

        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=2;
        }
        fadeFn();

    });


    //다음
    $(".slide2_arrow>.next").on("click",function(evt){
        evt.preventDefault();
        
        if(nowIdx<2){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        fadeFn();
    });






});
