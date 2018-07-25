$(document).ready(() => {
  $('#navButton').on('click', () => {  

  //side menu visible and non vivible  
  var menu = $('#sidemenu');
  if (menu.hasClass("visible")) {
     menu.removeClass('visible').animate({'margin-left':'-500px'});
     $('nav, #mycarousel, #testparagraph,#footerCustom').animate({'margin-left':'0px'});
   
  } else {menu.addClass('visible').animate({'margin-left':'0px'});
  $('nav, #mycarousel, #testparagraph,#footerCustom').animate({'margin-left':'500px'});
}   
 });

 var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                  $(".menuicon").attr('src', 'images/menu.jpg'); 
                    $("nav").css('background-color', 'white');
                    $("nav a").css('color', 'black');
                    
                   
                } else if (scroll_pos <= 210 ){
                 $(".menuicon").attr('src', 'images/menuwhite.jpg');
                  $("nav").css('background-color', 'black');
                  $("nav a").css('color', 'white');
               
                } 
            
        
});


//hover over text in navigation bar change scolour from grey to white
$('nav-link').hover(function () {
  $(this).css('color', 'white');
},
function () {
  $(this).css('color', 'grey');
});


 
});






