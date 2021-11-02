$(function(){
	var $mnu = $("header>nav>.gnb>li>a");
	var nowIdx = 0;

	{
		//기본 초기화
		$mnu.eq(0).parent().addClass("on");
		$("html,body").stop().animate({
			"scrollTop":0
		});
	}
	
	$mnu.on("click",function(evt){
		evt.preventDefault();

		nowIdx = $mnu.index(this);


		//네비게이션 활성화 표시
		$(this).parent().addClass("on").siblings().removeClass("on");

		$("html,body");//문서전체

		

		var artiTopVal = [0,1080,3560,6052,8479];

		$("html,body").stop().animate({
			"scrollTop":artiTopVal[nowIdx]
		});
	});//원페이지 

	$(window).on("load",function(){
		console.log("로드 이벤트 발생");
	});




	$(function(){
		$('section>.cont1').tubular({ratio:16/9,videoId:'hVvEISFw9w0'});    
	});//영상










	$(function(){

		//변수선언
        var $indicator = $(".slides>.slides-pagination>li>a");
        var nowIdx = 0;
        
    //함수선언
        var moveFn = function(){
            //인디케이터 활성화 표시
            $indicator.eq(nowIdx).parent().addClass("on")
                                 .siblings().removeClass("on");
            
            //컨테이너 이동
            $("section>.cont2>.about>.about_cont").stop().animate({
                                    "left" : (-100 * nowIdx)+"%"});   
		};


    //이벤트처리 구문
        $indicator.on("click", function(evt){
            evt.preventDefault();            
            
            //인덱스추출
            nowIdx = $indicator.index(this);
            
            moveFn();         
		});
		


		//이전버튼
        $(".slides-prev").on("click", function(){
            //1. nowIdx>0 이면 1 차감
            if(nowIdx>0){
                nowIdx--;
            }else{
                nowIdx=1;
            }
            moveFn();
        });

		//다음버튼
        $(".slides-next_1").on("click", function(){
            //1. nowIdx<2 이면 1 더하기
            if(nowIdx<1){
                nowIdx++;
            }else{
                nowIdx=0;
            }
            moveFn();
        });

	});//슬라이드






	$(function(){

		//변수선언
        var $indicator = $(".slides>.slides-pagination>li>a");
        var nowIdx = 0;
        
    //함수선언
        var moveFn = function(){
            //인디케이터 활성화 표시
            $indicator.eq(nowIdx).parent().addClass("on")
                                 .siblings().removeClass("on");
            
            //컨테이너 이동
			$("section>.cont3>.blue").stop().animate({
				"left" : (-100 * nowIdx)+"%"});   
		};


    //이벤트처리 구문
        $indicator.on("click", function(evt){
            evt.preventDefault();            
            
            //인덱스추출
            nowIdx = $indicator.index(this);
            
            moveFn();         
		});
		


		//이전버튼
        $(".slides-prev").on("click", function(){
            //1. nowIdx>0 이면 1 차감
            if(nowIdx>0){
                nowIdx--;
            }else{
                nowIdx=1;
            }
            moveFn();
        });

		//다음버튼
        $(".slides-next").on("click", function(){
            //1. nowIdx<2 이면 1 더하기
            if(nowIdx<1){
                nowIdx++;
            }else{
                nowIdx=0;
            }
            moveFn();
        });

	});//슬라이드




	$(function(){

		//변수선언
        var $indicator = $(".slides>.slides-pagination>li>a");
        var nowIdx = 0;
        
    //함수선언
        var moveFn = function(){
            //인디케이터 활성화 표시
            $indicator.eq(nowIdx).parent().addClass("on")
                                 .siblings().removeClass("on");
            
            //컨테이너 이동
			$("section>.cont4>.nature").stop().animate({
				"left" : (-100 * nowIdx)+"%"});   
		};


    //이벤트처리 구문
        $indicator.on("click", function(evt){
            evt.preventDefault();            
            
            //인덱스추출
            nowIdx = $indicator.index(this);
            
            moveFn();         
		});
		


		//이전버튼
        $(".slides-prev").on("click", function(){
            //1. nowIdx>0 이면 1 차감
            if(nowIdx>0){
                nowIdx--;
            }else{
                nowIdx=1;
            }
            moveFn();
        });

		//다음버튼
        $(".slides-next").on("click", function(){
            //1. nowIdx<2 이면 1 더하기
            if(nowIdx<1){
                nowIdx++;
            }else{
                nowIdx=0;
            }
            moveFn();
        });

	});//슬라이드





	$(function(){

		//변수선언
        var $indicator = $(".slides>.slides-pagination>li>a");
        var nowIdx = 0;
        
    //함수선언
        var moveFn = function(){
            //인디케이터 활성화 표시
            $indicator.eq(nowIdx).parent().addClass("on")
                                 .siblings().removeClass("on");
            
            //컨테이너 이동
			$("section>.cont5>.history").stop().animate({
				"left" : (-100 * nowIdx)+"%"});   
		};


    //이벤트처리 구문
        $indicator.on("click", function(evt){
            evt.preventDefault();            
            
            //인덱스추출
            nowIdx = $indicator.index(this);
            
            moveFn();         
		});
		


		//이전버튼
        $(".slides-prev").on("click", function(){
            //1. nowIdx>0 이면 1 차감
            if(nowIdx>0){
                nowIdx--;
            }else{
                nowIdx=1;
            }
            moveFn();
        });

		//다음버튼
        $(".slides-next").on("click", function(){
            //1. nowIdx<2 이면 1 더하기
            if(nowIdx<1){
                nowIdx++;
            }else{
                nowIdx=0;
            }
            moveFn();
        });

	});//슬라이드






	
});//준비핸들러 끝!