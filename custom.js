
  (function ($) {
  
  "use strict";

    // MENU
    $('#sidebarMenu .nav-link').on('click',function(){
      $("#sidebarMenu").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


function emailSend(){

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "devsammy3@gmail.com",
    Password : "9368BF28B8BFAEF57B4C00B6B8031C552F1F",
    To : 'devsammy3@gmail.com',
    From : "devsammy3@gmail.com",
    Subject : "This is the subject",
    Body : "messageBody"
}).then(
  message => {
    if(message=='OK'){
      swal("Successful!", "Fresh Icon will get your messages now.", "success");
    }
  }
);

}