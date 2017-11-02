$(function(){

    $(window).on("scroll touchmove", function() {

        // Change .home navbar css styles
        if ($(document).scrollTop() >= $("#home").position().top) {
            $('body').css('background-color','#222');
            $('#mainNav').css('background-color','rgba(255,255,255,0.5');
            $('#mainNav li a').css('color','black');
            $('#nav-1 a').css('color','black');
            $('#mainNav li a').css('font-weight','400');
            $('#mainNav li a').css('text-transform','none');
            $('#nav-1 a').css('font-weight','700');
            $('#nav-1 a').css('text-transform','uppercase');
            $('a.navbar-brand.page-scroll').css('color','black');
        }
        // Change .education background/navbar css styles
        if ($(document).scrollTop() >= $("#education").position().top) {
            console.log("Education escapes me!");
            $('body').css('background-color','#222');
            $('#mainNav').css('background-color','rgba(255,255,255,0.5');
            $('#mainNav li a').css('color','black');
            $('#nav-2 a').css('color','black');
            $('#mainNav li a').css('font-weight','400');
            $('#mainNav li a').css('text-transform','none');
            $('#nav-2 a').css('font-weight','700');
            $('#nav-2 a').css('text-transform','uppercase');
            $('a.navbar-brand.page-scroll').css('color','black');
        }
        // Change .experience background/navbar css styles
        if($(document).scrollTop() >= $("#experience").position().top) {
            console.log("Experience escapes me!");
            $('body').css('background-color','#222');
            $('#mainNav').css('background-color','rgba(255,255,255,0.5');
            $('#mainNav li a').css('color','black');
            $('#nav-3 a').css('color','black');
            $('#mainNav li a').css('font-weight','400');
            $('#mainNav li a').css('text-transform','none');
            $('#nav-3 a').css('font-weight','700');
            $('#nav-3 a').css('text-transform','uppercase');
            $('a.navbar-brand.page-scroll').css('color','black');
        }
        // Change .skills background/navbar css styles
        if($(document).scrollTop() >= $("#skillset").position().top) {
            console.log("Skills escapes me!");
            $('body').css('background-color','#222');
            $('#mainNav').css('background-color','rgba(255,255,255,0.5');
            $('#mainNav li a').css('color','black');
            $('#nav-4 a').css('color','black');
            $('#mainNav li a').css('font-weight','400');
            $('#mainNav li a').css('text-transform','none');
            $('#nav-4 a').css('font-weight','700');
            $('#nav-4 a').css('text-transform','uppercase');
            $('a.navbar-brand.page-scroll').css('color','black');
        }
        // Change .location background/navbar css styles
        if($(document).scrollTop() >= $("#location").position().top) {
            console.log("Location escapes me!");
            $('body').css('background-color','#222');
            $('#mainNav').css('background-color','rgba(255,255,255,0.5');
            $('#mainNav li a').css('color','black');
            $('#nav-5 a').css('color','black');
            $('#mainNav li a').css('font-weight','400');
            $('#mainNav li a').css('text-transform','none');
            $('#nav-5 a').css('font-weight','700');
            $('#nav-5 a').css('text-transform','uppercase');
            $('a.navbar-brand.page-scroll').css('color','black');
        }
        // Change .contact background/navbar css styles
        if($(document).scrollTop() >= $("#contact").position().top) {
            console.log("Contact escapes me!");
            $('body').css('background-color','#222');
            $('#mainNav').css('background-color','rgba(255,255,255,0.5');
            $('#mainNav li a').css('color','black');
            $('#nav-6 a').css('color','black');
            $('#mainNav li a').css('font-weight','400');
            $('#mainNav li a').css('text-transform','none');
            $('#nav-6 a').css('font-weight','700');
            $('#nav-6 a').css('text-transform','uppercase');
            $('a.navbar-brand.page-scroll').css('color','black');
        }

    });


    window.sr = ScrollReveal();
    sr.reveal('#iconOne', {reset:true, duration: 500, delay: 300, scale: 1.5, mobile: true});
    sr.reveal('#iconTwo', {reset:true, duration: 500, delay: 450, scale: 1.5, mobile: true});
    sr.reveal('#iconThree', {reset:true, duration: 500, delay: 600, scale: 1.5, mobile: true});
    sr.reveal('#iconFour', {reset:true, duration: 500, delay: 300, scale: 1.5, mobile: true});
    sr.reveal('#iconFive', {reset:true, duration: 500, delay: 450, scale: 1.5, mobile: true});
    sr.reveal('#iconSix', {reset:true, duration: 500, delay: 600, scale: 1.5, mobile: true});
    sr.reveal('#iconRes', {reset:true, duration: 500, delay: 300, scale: 1.5, mobile: true});
    sr.reveal('#iconLinkedIn', {reset:true, duration: 500, delay: 450, scale: 1.5, mobile: true});
    sr.reveal('#iconGitHub', {reset:true, duration: 500, delay: 600, scale: 1.5, mobile: true});
    sr.reveal('#iconInsta', {reset:true, duration: 500, delay: 750, scale: 1.5, mobile: true});
    sr.reveal('.skill', {reset:true, duration: 500, delay: 300, scale: 0.9, mobile: true});
    sr.reveal('.connect', {reset:true, duration: 500, delay: 300, scale: 0.9, mobile: true});
    sr.reveal('.school', {reset:true, duration: 500, delay: 300, scale: 0.9, mobile: true});
    sr.reveal('.work', {reset:true, duration: 500, delay: 300, scale: 0.9, mobile: true});
    sr.reveal('.btn-circle', {reset:true, duration: 500, delay: 300, scale: 2, mobile: true});
    sr.reveal('#talkDigital', {reset:true, duration: 500, delay: 300, scale: 1.5, mobile: true});
    sr.reveal('#talkBusiness', {reset:true, duration: 500, delay: 1200, scale: 1.5, mobile: true});
    sr.reveal('#talkAudience', {reset:true, duration: 500, delay: 2100, scale: 1.5, mobile: true});
    sr.reveal('#workTogether', {reset:true, duration: 500, delay: 3000, scale: 1.5, mobile: true});


    $('.navbar-collapse a').on('click',function(){
        $('.navbar-collapse').collapse('hide');
    });

});


