$(window).load(function() {
  enquire.register("screen and (min-width: 992px)", {
      match : function() {
          
            var iframeBody = $('body', $('#fdbk_iframe_page').contents());
            $(iframeBody).on('click', 'h1', function(e) {
                $('.chatbox-wrapper.isFixed').toggleClass('isActive');
                e.preventDefault();
            });


            $('#fdbk_iframe_page').load(function() {
              var iframe = $('body', $('#fdbk_iframe_page').contents());
             $(iframe).on('click', '#status-chat', function(e) {
                $('.chatbox-wrapper.isFixed').toggleClass('isActive');
                e.preventDefault();
             });
            }); 
        
            $(iframeBody).on('click', '#status-chat', function(e) {
                $('.chatbox-wrapper.isFixed').toggleClass('isActive');
                e.preventDefault();
             });
  
                      


        $('.process-wrapper')
        .waypoint(function(direction) { 
          if (direction === 'down') {
            $('.process-wrapper').addClass("animate")
          }
          else {
            $('.process-wrapper').removeClass("animate")
            $('.chatbox-wrapper.isFixed').removeClass('isActive')
          }
        }, { offset: '100%' });

        $('.process-explanation-row')
              .waypoint(function(direction) { 
                if (direction === 'down') {
                  $('.process-box').addClass("animated fadeInUp")
                }
                else {
                  $('.process-box').removeClass("animated fadeInUp")
                }
              }, { offset: '100%' });

        $('.process-explanation-row')
              .waypoint(function(direction) { 
                if (direction === 'down') {
                  $('.connector-row').addClass("animate")
                }
                else {
                  $('.connector-row').removeClass("animate")
                }
              }, { offset: '100%' });
        $('#next')
              .waypoint(function(direction) { 
                if (direction === 'down') {
                  $(".chatbox-wrapper").addClass('isFixed');
                  $(".chatbox-wrapper").removeClass('fadeInUp');
                  $(".chatbox-wrapper").addClass('fadeInDown animated');
                  var iframeBody = $('body', $('#fdbk_iframe_page').contents());
                  $(iframeBody).find('form h1').css("font-size","12px");
                  $(iframeBody).find('form h1').css("cursor","pointer");
                  $(iframeBody).find('#status-chat').css("cursor","pointer");
                  $(iframeBody).find('form').css("padding-top","8px");
                  $(iframeBody).find('form').css("height","476px");
                }else{
                  $(".chatbox-wrapper").removeClass('fadeInDown');
                  $(".chatbox-wrapper").addClass('fadeInUp');
                  $(".chatbox-wrapper").removeClass('isFixed');
                  var iframeBody = $('body', $('#fdbk_iframe_page').contents());
                  $(iframeBody).find('form h1').css("font-size","80px");
                  $(iframeBody).find('form h1').css("cursor","auto");
                  $(iframeBody).find('#status-chat').css("cursor","auto");
                  $(iframeBody).find('form').css("padding-top","8px");
                  $(iframeBody).find('form').css("height","527px");
                }
              }, { offset: '0%' });

      },
      unmatch : function() {
          // Hide sidebar
      }
  });
});


  // $('#fdbk_iframe_page').load(function() {

  //    var iframe = $('#fdbk_iframe_page').contents();

  //    iframe.find(".btn-default").click(function(event){
  //       event.preventDefault();
  //        alert("test");
  //        console.log('fdf');
  //     });
  // });



//$(document).ready(function() {
//    $(window).scroll(function(){
//      if ($(window).scrollTop() > 300){
//          $(".chatbox-wrapper").addClass('isFixed');
//      }else{
//          $(".chatbox-wrapper").removeClass('isFixed');
//      }
//  });
//
//});



$(document).ready(function(){

$('html').on("touchstart",function(e) {                    
  if(!$(e.target).hasClass('.chatbox-wrapper') )
  {
//      console.log("touched");
      $('#fdbk_iframe_page').blur();            
  }
});
  
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top +5
        }, 1000);
        return false;
      }
    }
  });

  if (!Modernizr.svg) {
     var img = $("img[src$='.svg']").each(function() {
       var src = $(this).attr("src"); 
       var path = src.substring(0,src.lastIndexOf('/')); 
       var fileName = src.substring(src.lastIndexOf('/'));
       var newSrc = path+fileName.replace("svg","png");

       $(this).attr("src",newSrc);
     });
  }



  // Match for Bodoni
  var imgArr = new Array( // relative paths of images
    'images/stuff-bodoni-does/matchforbodoni-01.svg',
    'images/stuff-bodoni-does/matchforbodoni-02.svg',
    'images/stuff-bodoni-does/matchforbodoni-03.svg'
  );
  var preloadArr = new Array();
  var i;
  // preload images 
  for (i = 0; i < imgArr.length; i++) {
    preloadArr[i] = new Image();
    preloadArr[i].src = imgArr[i];
  }
  var currImg = 1;
  var intID = setInterval(changeImg, 1000);
  // image rotator 
  function changeImg() {
    setTimeout(function() {
      var src = preloadArr[currImg++ % preloadArr.length].src;
      $('#sb-2 .sf-image img').attr("src", src);
    }, 500)
  }






  // Ride with Bodoni
  function bikeSmokeFunction(attachTo) {
          bikeSmoke = new Emitter({
              particles:50,      
              attachTo: attachTo,
              color:'rgba(234,234,234,1)',
              ang: [1.5,0.5],
              r: [4,3],
              spd: [.02,.01],
              life: [1000,150],
              center: [0,0],
              loop:true,
              touch:false
          });
  }
  $('#sb-1').hover(function(){
    bikeSmokeFunction('bikeSmoke');
    $('#sb-1 .sf-image img').attr('src', 'images/stuff-bodoni-does/bike-on.svg');
  }, function(){
    bikeSmoke.destroy();
    $('#sb-1 .sf-image img').attr('src', 'images/stuff-bodoni-does/bike-off.svg');
  });

}); //document.ready end











/* center modal */
function centerModals(){
  $('.modal').each(function(i){
    var $clone = $(this).clone().css('display', 'block').appendTo('body');
    var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
    top = top > 0 ? top : 0;
    $clone.remove();
    $(this).find('.modal-content').css("margin-top", top);
  });
}

$('.modal').on('show.bs.modal', centerModals);
$(window).on('resize', centerModals);

$(".sample-modal").on("click", function () {
  var headline = $(this).data('headline');
  $(".modal-heading").text( headline+"");
  var image = $(this).data('image');
  $(".modal-img").attr( "src","images/"+image);
  $('#basicModal').modal('show');
});
