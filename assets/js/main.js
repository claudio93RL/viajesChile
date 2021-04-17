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

      var scroll = new SmoothScroll('a[href*="#menu"]',{  
        speed: 3000,
      });
      var scroll = new SmoothScroll('a[href*="#quienes"]',{
        speed: 3000
      });
      var scroll = new SmoothScroll('a[href*="#destacado"]',{
        speed: 3000
      });
      var scroll = new SmoothScroll('a[href*="#contacto"]',{
        speed: 3000
      });
      
})