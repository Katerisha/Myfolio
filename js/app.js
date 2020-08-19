    $(function(){
      $('.burger-button').on('click', function(){
        $('ul').toggleClass('active');
      });
      $(window).on('resize', function(){
        if ($(window).width() >= 760) {
          $('ul').removeClass('active');
        }
      });
    });
