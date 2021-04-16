$(function(){
    $(window).scroll(function(){
        if($("#menu").offset().top > 56){
            $("#menu").addClass("barra-scroll");
            
            
        }else{
            $("#menu").removeClass("barra-scroll");
        }
    })
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
      
})