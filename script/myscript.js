$(function(){

//menu  
$(".main > li").hover(function(){
    $(this).find(".sub").stop().show();
}, function(){
    $(this).find(".sub").stop().hide();
})

//slide
    var n = 0;
    setInterval(function(){
        if(n < 2){
            n++;
        }else{
            n=0;
        }
        pos = n * (-600) + "px";
        $(".top_move").animate({top:pos});

    }, 2500)


//pop
$(".p_click").click(function(){
    $(".pop").fadeIn();
})
$(".close").click(function(){
    $(".pop").fadeOut();
})






})//jquery