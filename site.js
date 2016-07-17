$(document).ready(function(){
    $(".scroll").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
        $('.navbar-default a').removeClass('selected');
        $(this).addClass('selected');
        });

    $("a").hover(function(){
    $(".content-social").toggleClass("color-"+ this.className );
    });
});