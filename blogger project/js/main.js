$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');
    
    /* ------click event on toggle menu------*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
// owl carousel for blog
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText: ["<span class='owl-nav-prev'><i class='fas fa-long-arrow-alt-left'></i></span>", "<span class='owl-nav-next'><i class='fas fa-long-arrow-alt-right'></i></span>"]

});

// click to scroll up.
$('.move-up span').click(function(){

    $('html,body').animate({
        scrollTop:0
    },1000);
})


});
