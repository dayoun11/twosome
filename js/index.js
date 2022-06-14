$(document).ready(function(){

   /* ///////topMenu/////////// */
  $(".gnb").mouseenter(function(){ //주메뉴 영역에 오버시
    $(this).find("li>.snb").stop().slideDown(500);
    $(".topMenu .logo img").attr("src","image/logo_2.png");
    $(this).find("li>a").css({"color":"#333"});
    $(".bg_box").stop().slideDown();
  });
  
  $(".topMenu").mouseleave(function(){ //헤더영역을 나갔을 때
    $(this).find("li>.snb").stop().slideUp(100);
    $(".topMenu .logo img").attr("src","image/logo_1.png");
    $(this).find("li>a").css({"color":"#fff"});
    $(".bg_box").stop().slideUp();
  }); 

   /* ///// Main VisualImage ///// */
 let img=$(".mainvisual ul li");
 let btn=$(".mainvisual .btn>span");
 let oldidx=0;
 let idx=0;
 let img_n=img.length; 

  function changeImg(idx){ 

     if(oldidx!=idx){ 

        btn.eq(oldidx).removeClass("active"); 

        btn.eq(idx).addClass("active"); 

        img.eq(oldidx).stop(true,true).fadeOut(300); 

        img.eq(idx).stop(true,true).fadeIn(300); 

     }

     oldidx=idx; 
  }

  function changeAuto(){
     idx++;   

     if(idx>img_n-1){
        idx=0;
     }
     
     changeImg(idx);
  }

  timer=setInterval(changeAuto,5000);

  btn.click(function(){

     clearInterval(timer); 
     $(".play").hide();
     $(".stop").show();
     
     idx=$(this).index(); 
     changeImg(idx);

     timer=setInterval(changeAuto,4000); 
  });
   
   $(".play").hide(); 

   $(".stop").click(function(){
     clearInterval(timer);
     $(".stop").hide();
     $(".play").show();
   });
   $(".play").click(function(){
     timer=setInterval(changeAuto,4000);
     $(".play").hide();
     $(".stop").show();
   });


   /* ///////// contents1 /////////// */
   let goldidx=0;
   let gidx=0; 

   let goldidx1=0; 
   let gidx1=0;

   let goldidx2=0; 
   let gidx2=0;

   function galleryImg(gidx){ 

   if(goldidx!=gidx){

      $(".thumbs1 li").eq(goldidx).css({"opacity":1});
      $(".thumbs1 li").eq(gidx).css({"opacity":0.5});
      $(".largeImg1 li").eq(goldidx).stop(true,true).fadeOut(300);
      $(".largeImg1 li").eq(gidx).stop(true,true).fadeIn(300); 
      $(".imgText1 li").eq(goldidx).stop(true,true).fadeOut(300); 
      $(".imgText1 li").eq(gidx).stop(true,true).fadeIn(300); 

   }
   goldidx=gidx; 

   };

   $(".thumbs1 li").click(function(){
   gidx=$(this).index();
   galleryImg(gidx);
   });

   $(".lbtn1").click(function(){
   gidx--;
   if(gidx<0){ 
      gidx=3; 
   }
   galleryImg(gidx);
   });

   $(".rbtn1").click(function(){
   gidx++;
   if(gidx>3){
      gidx=0; 
   }
   galleryImg(gidx);
   });


   function galleryImg1(gidx1){ 

      if(goldidx1!=gidx1){
   
         $(".thumbs2 li").eq(goldidx1).css({"opacity":1});
         $(".thumbs2 li").eq(gidx1).css({"opacity":0.5});
         $(".largeImg2 li").eq(goldidx1).stop(true,true).fadeOut(300);
         $(".largeImg2 li").eq(gidx1).stop(true,true).fadeIn(300); 
          $(".imgText2 li").eq(goldidx1).stop(true,true).fadeOut(300); 
          $(".imgText2 li").eq(gidx1).stop(true,true).fadeIn(300); 
   
      }
      goldidx1=gidx1; 
   
      };
   
      $(".thumbs2 li").click(function(){
      gidx1=$(this).index();
      galleryImg1(gidx1);
      });
   
      $(".lbtn2").click(function(){
      gidx1--;
      if(gidx1<0){ 
         gidx1=3; 
      }
      galleryImg1(gidx1);
      });
   
      $(".rbtn2").click(function(){
      gidx1++;
      if(gidx1>3){
         gidx1=0; 
      }
      galleryImg1(gidx1);
      });
   

      function galleryImg2(gidx2){ 

         if(goldidx2!=gidx2){
      
            $(".thumbs3 li").eq(goldidx2).css({"opacity":1});
            $(".thumbs3 li").eq(gidx2).css({"opacity":0.5});
            $(".largeImg3 li").eq(goldidx2).stop(true,true).fadeOut(300);
            $(".largeImg3 li").eq(gidx2).stop(true,true).fadeIn(300); 
             $(".imgText3 li").eq(goldidx2).stop(true,true).fadeOut(300); 
             $(".imgText3 li").eq(gidx2).stop(true,true).fadeIn(300); 
      
         }
         goldidx2=gidx2; 
      
         };
      
         $(".thumbs3 li").click(function(){
         gidx2=$(this).index();
         galleryImg2(gidx2);
         });
      
         $(".lbtn3").click(function(){
         gidx2--;
         if(gidx2<0){ 
            gidx2=3; 
         }
         galleryImg2(gidx2);
         });
      
         $(".rbtn3").click(function(){
         gidx2++;
         if(gidx2>3){
            gidx2=0; 
         }
         galleryImg2(gidx2);
         });



/* ///////// contents2 /////////// */
   $("#contents2 ul li").hover(function(){
      $(this).find(".brand").stop(true,true).animate({marginTop:"-220px"},250);
   },function(){
      $(this).find(".brand").stop(true,true).animate({marginTop:"0px"},250);
   });



});