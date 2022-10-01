
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
            alert("Tu correo fue enviado correctamente, Viajes Chile se contactará contigo a la brevedad.");
        }else{
            alert("ERROR! Debes ingresar todos los campos")
        }


    });

   
    $(".card-title").click(function () {
        $(".card-text").toggle();
    });
   

});
