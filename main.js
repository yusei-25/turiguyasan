$(function(){
    $('.pickup-title2').on('pickup-title2', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('pickup-title2');
    }
  });
});