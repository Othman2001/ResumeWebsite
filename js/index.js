$(function () {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });
    
    typewriter.typeString('Hello!')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Iam Front End Devloper')
        .pauseFor(2500)
        .deleteChars(23)
        .typeString('<strong> Based In Egypt</strong>')
        .pauseFor(2500)
        .start();
      
       
$(function() {
    $(window).scroll(function () {
   var scroll = $(window).scrollTop();
   if(scroll > 440){
       $('nav').fadeIn();
   }
   if(scroll < 70){
       $('nav').FdeOut();
   }
    });

    $(".num").counterUp({delay:10,time:1000});
    
});
        
         $('.dark').click(function () { 
            $('body').hide() .fadeIn(4000);
            closeNav();
         $('.wrappe').addClass('wrapper-dark-mode');
         $('h1').css('color' , ' #fff');
         $('p').css('color' ,  'gray');
         $('.nav-link').addClass('dark-color-for-text');
             
         });
         $('.orginal').click(function () {
             $('body').hide() .fadeIn(4000);
             closeNav();
             $('.Wrappe').removeClass('wrapper-dark-mode');
             $('h1').css('color' , 'black');
             $('p').css('color' , '#fff');
             $('.nav-link').removeClass('dark-color-for-text');
         });
         
         

          $(document).ready(function(){
            $('body').fadeIn(3000);
          })

        });



        $('.orange').click(function () { 
            $('body').hide().fadeIn(4000);
             $('body').attr('class' , 'orangeClass');
             $('.wrappe').addClass('def');
             $('.nav-link').css('color' , '#f26b38 ');
             $('button').css('background-color' , '#f26b38 ');
             $('svg').css('color' , '#f26b38 ');
             $('.highlighted').css('color' , '#f26b38 ');
             $('.progress-bar').css('background-color' , '#f26b38 ');
             $('.progress-bar').css('color' , '#fff');
              
        });

      $('.green').click(function () { 
    $('body').hide().fadeIn(4000);
     $('body').attr('class' , 'greenClass');
     $('.wrappe').addClass('def');
     $('.nav-link').css('color' , '#78cc6d');
     $('button').css('background-color' , '#78cc6d');
     $('svg').css('color' , '#78cc6d');
     $('.highlighted').css('color' , '#78cc6d');
     $('.progress-bar').css('background-color' , '#78cc6d');
     $('.progress-bar').css('color' , '#fff');
    
});
$('.pink').click(function () { 
    $('body').hide().fadeIn(4000);
     $('body').attr('class' , 'pinkClass')
     $('.wrappe').addClass('def');
     $('.nav-link').css('color' , '#ff5e94');
     $('button').css('background-color' , '#ff5e94');

     $('svg').css('color' , '#ff5e94');
     $('.highlighted').css('color' , '#ff5e94');
     $('.progress-bar').css('background-color' , '#ff5e94');
     $('.progress-bar').css('color' , '#fff');
    
    
});
$('.purble').click(function () { 
    $('body').hide().fadeIn(4000);
     $('body').attr('class' , 'purbleClass');
     $('.wrappe').addClass('def');
     $('.nav-link').css('color' , '#c446da ');
     $('button').css('background-color' , '#c446da ');

     $('svg').css('color' , '#c446da ');
     $('.highlighted').css('color' , '#c446da ');
     $('.progress-bar').css('background-color' , '#c446da');
     $('.progress-bar').css('color' , '#fff ');
    
    
});
$('.red').click(function () { 
    $('body').hide().fadeIn(4000);
     $('body').attr('class' , 'redClass');
     $('.wrappe').addClass('def');
     $('.nav-link').css('color' , '#e8676b ');
     $('button').css('background-color' , '#e8676b ');
     $('svg').css('color' , '#e8676b ');
     $('.highlighted').css('color' , '#e8676b ');
     $('.progress-bar').css('background-color' , '#e8676b');
     $('.progress-bar').css('color' , '#fff ');
    
    
});