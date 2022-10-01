
$(document).ready(function(){

    
    $(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
      });
      
    
    $(document).scroll(function() {
        const y = $("html").scrollTop();
    
        y > 150 ? $("nav").addClass ("navbar-opaco") : $("nav").removeClass("navbar-opaco");
    
    })

    $("#boton-enviar").click(function() {
        var nombre= $("#formularioContactoNombre").val().trim();
        var asunto= $("#formularioContactoAsunto").val().trim();
        var mensaje= $("#formularioContactoMensaje").val().trim();

        if ( nombre != "" && asunto != "" && mensaje != "" ) {
            $(".alert-danger").addClass("d-none")
            $(".alert-success").removeClass("d-none")
        }else{
            $(".alert-danger").removeClass("d-none");
            $(".alert-success").addClass("d-none")
        }

    });

   
    $(".card-title").click(function () {
        $(".card-text").toggle();
    });
   

});
