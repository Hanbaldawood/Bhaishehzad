jQuery(document).ready(function ($) {
    $(document).on('click', '.pow--courses-selector li', function (e) {
        e.preventDefault();
        $('.pow--education-courses__sidebar li').removeClass('active');
        $(this).addClass('active');
        var tabid = $(this).data('tab');
        $('.pow--education-courses__content--item').hide();
        $(tabid).fadeIn();
    });  
    $(document).on('change', '#pow--courses', function () {
        var tabid = $('#pow--courses').val();
        $('.pow--education-courses__content--item').hide();
        $(tabid).fadeIn();
    });

    //POW banker tabs
    $(document).on('click', '.pow--banker-ea__sidebar li', function (e) {
    e.preventDefault();
    $('.pow--banker-ea__sidebar li').removeClass('active');
    $(this).addClass('active');
    var tabid = $(this).data('tabid');
    $('.pow--banker-ea__content--item').hide();
        $(tabid).fadeIn();
    }); 
    $(document).on('change', '#pow--selectbank', function () {
        var tabid = $('#pow--selectbank').val();
        $('.pow--banker-ea__content--item').hide();
        $(tabid).fadeIn();
    });
 $('.pow--select select').niceSelect();
    //POW Accordions
    $('.pow--acordians__item--header').click(function () {
        $('.pow--acordians__item--header').removeClass('active');
        $(this).addClass('active');
        // Close all other content sections
        $('.pow--acordians__item--content').not($(this).next('.pow--acordians__item--content')).slideUp();
        $('.accordion-icon span').not($(this).find('.accordion-icon span')).addClass('fa-plus');
        // Toggle the accordion content
        $(this).next('.pow--acordians__item--content').slideToggle();

        // Toggle the "+" and "-" icons
        var icon = $(this).find('.accordion-icon span');
        icon.hasClass('fa-plus') ? icon.removeClass('fa-plus').addClass('fa-minus') : icon.removeClass('fa-minus').addClass('fa-plus');
    });
    //pow video popup
  $('.pow--video-btn').click(function(e) {
    e.preventDefault();
    var popup = $(this).parents('.pow--videowrap').find('.pow--popup');
    var video = popup.find('video');
    if (video.length > 0) {
        video[0].play(); 
    }
    popup.addClass('active');
    });
    $('.pow--cancel').click(function (e){
        e.preventDefault();
        var popup = $(this).parents('.pow--popup');
        popup.removeClass('active');
         var video = popup.find('video');
        if (video.length > 0) {
            video[0].pause(); 
        }
    });
    $(".change-pass").click(function(){
        $(".popup-wrapper").css('display','flex');

    })
    $(".pop-close").click(function(){
        $(".popup-wrapper").hide();
        
    })
    $(".step-counter").click(function(){
        var active_step = $(this).attr('data-number');
        $(".step-counter").removeClass("active");
        $(this).addClass("active");
        $(".quize-section-dublicator").removeClass("active");
        $('[data-form="'+ active_step +'"]').addClass('active');
    })
    $(".prev-btn").click(function(){
        var active_step =  parseInt($(".step-counter.active").attr('data-number'));
       
        var step_decrement = active_step - 1;
        if(active_step == 1){
            
        }
        else{
            $('.step-counter').removeClass("active");
            $('[data-number="'+ step_decrement +'"]').addClass('active');
            $(".quize-section-dublicator").removeClass("active");
            $('[data-form="'+ step_decrement +'"]').addClass('active');
        }
        

    })
    $(".next-btn").click(function(){
        var active_step =  parseInt($(".step-counter.active").attr('data-number'));
        var step_increment = active_step + 1;
        var total =  $('div[data-number]').length;
       
        if(active_step == total){
            
        }
        else{
            $('.step-counter').removeClass("active");
            $('[data-number="'+ step_increment +'"]').addClass('active');
            $(".quize-section-dublicator").removeClass("active");
            $('[data-form="'+ step_increment +'"]').addClass('active');
        }
        

    })
});

//Copy to Clipboard with clipboard API
var copyselector = '.pow--copyclipboard';
if (copyselector.length > 0) {
    $(document).on('click', copyselector, function (event) {
        event.preventDefault();
    });
    var clipboard = new ClipboardJS(copyselector);

    clipboard.on('success', function (e) {
    });

    clipboard.on('error', function (e) {
        console.error('Failed to copy text: ', e.action);
    });

}