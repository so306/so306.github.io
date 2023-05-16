document.addEventListener("mousemove", function(event) {
    const x = event.pageX - 10;
    const y = event.pageY - 10;
    const cursor = document.querySelector("#cursor");
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
  
  $('div').on("mouseover", function(){
    $('#cursor').css({'transform': 'scale(2)'});
  });
  
  $('div').on("mouseleave", function(){
    $('#cursor').css({'transform': 'scale(1)'});
  });