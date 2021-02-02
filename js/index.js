$(function(){
    $(".humburger").click(function(){
        $(this).toogleClass("is-active");


        if($(this)).hasClass('.is-active')){
            $('#main_nav').slideDown(300);
        }else{
            $('#main_nav').slideUp(300);
        }
    });
});

