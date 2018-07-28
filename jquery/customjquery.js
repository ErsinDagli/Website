$(document).ready(() => {
  $('#navButton').on('click', () => {  

  //side menu visible and non vivible  
  var menu = $('#sidemenu');
  if (menu.hasClass("visible")) {
     menu.removeClass('visible').animate({'left':'350px'});
     $('nav, #mycarousel,#footerCustom').animate({'margin-right':'0px'});
     $('#testparagraph').animate({'margin-right':'300px'});
  } else {menu.addClass('visible').animate({'left':'-350px'});
  $('nav, #mycarousel,#footerCustom').animate({'margin-right':'350px'});
  $('#testparagraph').animate({'margin-right':'750px'});

}   
 });

 var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 210) {
                  $(".menuicon").attr('src', 'images/menu.jpg'); 
                    $("nav").css('background-color', 'white');
                    $("nav a").css('color', 'black');
                    
                    //swap from black to grey
                    $('nav a').hover(function () {
                      $(this).css('color', 'grey');
                    },
                    function () {
                      $(this).css('color', 'black');
                    });
          //swapping menu icon ED from white to orange as you scroll down
                    $('#icon').attr('src', 'images/orangelabel.png');

                   
                } else if (scroll_pos <= 210 ){
                 $(".menuicon").attr('src', 'images/menuwhite.jpg');
                  $("nav").css('background-color', 'black');
                  $("nav a").css('color', 'grey');
                  
                  //swap from grey to white
                  $('nav a').hover(function () {
                    $(this).css('color', 'white');
                  },
                  function () {
                    $(this).css('color', 'grey');
                  });
                  //swapping menu icon ED from orange to white as you scroll down
                  $('#icon').attr('src', 'images/whitelabel.png');
                } 
            
        
});


//hover over text in navigation bar change scolour from grey to white



 
});






