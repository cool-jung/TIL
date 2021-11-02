$(function(){



   var $mainmnu = $(".gnb1>li:nth-child(1)");
   var $sub_ul = $(".sub_ul");
   var $sub_ul2 = $(".sub_ul2");
	// var $submnu = $(".sub>li");

	//메인메뉴
	$mainmnu.on("mouseover", function(){
		$(this).addClass("on");
		$(".sub_ul").stop().slideDown();
	});

	$mainmnu.on("mouseout", function(){
		$(this).removeClass("on");
		$(".sub_ul").stop().slideUp();
   });


   $sub_ul.on("mouseover",function(){
      $(this).stop().slideDown();
   });

   
   $sub_ul.on("mouseout",function(){
      $(this).stop().slideUp();
   });

   
   var $mainmnu2 = $(".gnb1>li:nth-child(2)");
	// var $submnu = $(".sub>li");

	//메인메뉴
	$mainmnu2.on("mouseover", function(){
		$(this).addClass("on");
		$(".sub_ul2").stop().slideDown();
	});

	$mainmnu2.on("mouseout", function(){
		$(this).removeClass("on");
		$(".sub_ul2").stop().slideUp();
   });


   $sub_ul2.on("mouseover",function(){
      $(this).stop().slideDown();
   });

   
   $sub_ul2.on("mouseout",function(){
      $(this).stop().slideUp();
   });
   

  
   window.onload = function(){ 
   var $slide = $("section>.cont1>.maincontainer>li");
   var $indicator = $("section>.cont1>.slides_pagination>li>a"); 
   var nowIdx = 0;

   $("a").on("click", function(evt){
       evt.preventDefault();
   });

   $indicator.on("click",function(evt){
       evt.preventDefault();

       nowIdx = $indicator.index(this);

       $indicator.eq(nowIdx).parent().addClass("on")
                            .siblings().removeClass("on");

       $slide.eq(nowIdx).fadeIn().siblings().fadeOut();
   });

   
      
      var  intervalKey = setInterval(function(){
  

       if(nowIdx<3){
           nowIdx++;
       }else{
           nowIdx = 0;
       }

       $indicator.eq(nowIdx).parent().addClass("on")
                            .siblings().removeClass("on");
       
       $slide.eq(nowIdx).fadeIn().siblings().fadeOut();
           
   },2500);
}

   







   var $mainmnu3 = $("section>.cont2>ul>li");
   
   // var $bg = $(".bg");


   //메인메뉴
   $mainmnu3.on("mouseover", function(){
      $(this).addClass("on");
      // $bg.stop().fadeIn(0);//배경레이어
   });

   $mainmnu3.on("mouseout", function(){
      $(this).removeClass("on");
      // $bg.stop().fadeOut(0);//배경레이어
   });


   


   //슬라이드
   var nowIdx = 0;

   setInterval(function(){
      
      if(nowIdx<5){
         nowIdx++;
      }else{
         nowIdx = 0;
      }

      $("section>.cont3>ul").stop().animate({
         "left":-1920*nowIdx
      });

   }, 3000);//슬라이드 끝!


   $("section>.cont2>ul>li").on("mouseover",function(){
      $(this).children().attr({
         "overflow":"visible",
         "width":"120px",
         "height":"120px"
      });
   });

   



   //라이트박스 시작
   var $lightbox1 = $(".lightbox_1");
         var $shadow = $(".shadow");

         //썸네일에 대한 클릭이벤트 구문
         $(".img_1").on("click", function(evt){
            evt.preventDefault();

            var imgSrc1 = $(this).attr("href");
            var imgAlt1 = $(this).children().attr("alt");

            $lightbox1.children(".content1").attr({
               src : imgSrc1,
               alt : imgAlt1
            });

            $shadow.show();
            $lightbox1.show();
         });//.img 이벤트 끝!

         //닫기버튼, 그림자영역에 대한 클릭이벤트 구문
         $(".clse, .shadow").on("click", function(){
            $lightbox1.hide();
            $shadow.hide();
         });//.clse 이벤트 끝!

         //ESC키에 대한 클릭이벤트 구문
         $(document).on("keyup", function(evt){
            console.log("현재 눌린키 번호는 ", evt.which);
            if(evt.which == "27"){
               //$lightbox.hide();
               //$shadow.hide();

               $(".clse").trigger("click");
            }
         });//ESC키(27)를 이용한 라이트박스 닫기



         
   //라이트박스 시작
   var $lightbox2 = $(".lightbox_2");
   var $shadow = $(".shadow");

   //썸네일에 대한 클릭이벤트 구문
   $(".img_2").on("click", function(evt){
      evt.preventDefault();

      var imgSrc2 = $(this).attr("href");
      var imgAlt2 = $(this).children().attr("alt");

      $lightbox2.children(".content2").attr({
         src : imgSrc2,
         alt : imgAlt2
      });

      $shadow.show();
      $lightbox2.show();
   });//.img 이벤트 끝!

   //닫기버튼, 그림자영역에 대한 클릭이벤트 구문
   $(".clse, .shadow").on("click", function(){
      $lightbox2.hide();
      $shadow.hide();
   });//.clse 이벤트 끝!

   //ESC키에 대한 클릭이벤트 구문
   $(document).on("keyup", function(evt){
      console.log("현재 눌린키 번호는 ", evt.which);
      if(evt.which == "27"){
         //$lightbox.hide();
         //$shadow.hide();

         $(".clse").trigger("click");
      }
   });//ESC키(27)를 이용한 라이트박스 닫기




   
   //라이트박스 시작
   var $lightbox3 = $(".lightbox_3");
         var $shadow = $(".shadow");

         //썸네일에 대한 클릭이벤트 구문
         $(".img_3").on("click", function(evt){
            evt.preventDefault();

            var imgSrc3 = $(this).attr("href");
            var imgAlt3 = $(this).children().attr("alt");

            $lightbox3.children(".content3").attr({
               src : imgSrc3,
               alt : imgAlt3
            });

            $shadow.show();
            $lightbox3.show();
         });//.img 이벤트 끝!

         //닫기버튼, 그림자영역에 대한 클릭이벤트 구문
         $(".clse, .shadow").on("click", function(){
            $lightbox3.hide();
            $shadow.hide();
         });//.clse 이벤트 끝!

         //ESC키에 대한 클릭이벤트 구문
         $(document).on("keyup", function(evt){
            console.log("현재 눌린키 번호는 ", evt.which);
            if(evt.which == "27"){
               //$lightbox.hide();
               //$shadow.hide();

               $(".clse").trigger("click");
            }
         });//ESC키(27)를 이용한 라이트박스 닫기




       







       
         var moveFn = function(){           
            
            //컨테이너 이동
            $(".newitem").stop().animate({
                                    "left" :-1520*nowIdx  });
        };


          //이전버튼
        $(".prev").on("click", function(evt){
           evt.preventDefault();
         //1. nowIdx>0 이면 1 차감
         if(nowIdx>0){
             nowIdx--;
         }else{
             nowIdx=1;
         }
         moveFn();
     });
     
     //다음버튼
     $(".next").on("click", function(evt){
        evt.preventDefault();
         //1. nowIdx<2 이면 1 더하기
         if(nowIdx<1){
             nowIdx++;
         }else{
             nowIdx=0;
         }
         moveFn();
     });

   

});