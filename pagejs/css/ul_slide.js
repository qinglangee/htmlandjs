var box = $(".slide_box");
for(var i=1; i<=10;i++){
    box.append('<li>'+i+'</li>');
//    console.log((i*50) + 'px');
    box.width((i*50 + 21) + 'px');
//    $('.slide_box').width('800px');
}
$(".prev").on('click', function(){
    console.log(box.position());
    var left = box.position().left - 40;
    box.css({left:left});
});
$(".next").on('click', function(){
    console.log(box.position());
    var left = box.position().left + 40;
    box.css({left:left});
});