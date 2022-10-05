
document.getElementById("texts").innerHTML = '<div class="text"><span>HUMATURE</span></div>'
  .repeat(7)

var texts = $('.text')

/*
for(i=0;i<texts.length;i++) {
  myFunction($('.text').eq(i), $('.text').eq(i).children('span').eq(i),'20px','0px')
}*/

  myFunction($('.text').eq(0), $('.text').eq(0).children('span').eq(0),'4px','-10px')

  myFunction($('.text').eq(1), $('.text').eq(1).children('span').eq(0),'7px','-10px')
  myFunction($('.text').eq(2), $('.text').eq(2).children('span').eq(0),'15px','-10px')

  myFunction($('.text').eq(3), $('.text').eq(3).children('span').eq(0),'80px','3px')
  myFunction($('.text').eq(4), $('.text').eq(4).children('span').eq(0),'15px','-30px')

  myFunction($('.text').eq(5), $('.text').eq(5).children('span').eq(0),'7px','-38px')
  myFunction($('.text').eq(6), $('.text').eq(6).children('span').eq(0),'4px','-42px')

function myFunction(item, child, height, pos) {
  item.height(height)
  child.css('top', pos)
}

function changeTop(item, height, pos, top, bottom) {
  item.css('top', top)
  item.css('bottom', bottom)
  child.height(height)
  child.css('top', pos)
}
$('#texts').hover(function(){
      $(this).toggleClass("active");  
});
