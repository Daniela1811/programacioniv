document.addEventListener("DOMContentLoaded", e=>{
    document.querySelector("#frmAlumnos").addEventListener("submit", event=>{
        event.preventDefault();
        
        var codigo =  JSON.parse(localStorage.getItem("codigo"));
        var codigo = prompt("New member codigo?");
        names[++index] = Codigo;
        localStorage.setItem("codigo ", JSON.stringify(codigo));

        var nombre =  JSON.parse(localStorage.getItem("nombre"));
        var nmbre = prompt("New member nombre?");
        names[++index] = nombre;
        localStorage.setItem("nombre", JSON.stringify(nombre));

        var direccion =  JSON.parse(localStorage.getItem("direccion"));
        var direccion = prompt("New member direccion?");
        names[++index] = direccion;
        localStorage.setItem("direccion ", JSON.stringify(direccion));

        var telefono=  JSON.parse(localStorage.getItem("telefono"));
        var telefono = prompt("New member telefono?");
        names[++index] = telefono;
        localStorage.setItem("telefono ", JSON.stringify(telefono));





        let codigo = document.querySelector("#txtCodigoAlumno").value,
            nombre = document.querySelector("#txtNombreAlumno").value,
            direccion = document.querySelector("#txtDireccionAlumno").value,
            telefono = document.querySelector("#txtTelefonoAlumno").value;

        console.log(codigo, nombre, direccion, telefono);

        if( 'localStorage' in window ){
            window.localStorage.setItem("codigo", codigo);
            window.localStorage.setItem("nombre", nombre);
            window.localStorage.setItem("direccion", direccion);
            window.localStorage.setItem("telefono", telefono);
        } else {
            alert("Por favor ACTUALIZATE!!!.");
        }
    });
    document.querySelector("#btnRecuperarAlumno").addEventListener("click", event=>{
        document.querySelector("#txtCodigoAlumno").value = window.localStorage.getItem("codigo");
        document.querySelector("#txtNombreAlumno").value = window.localStorage.getItem("nombre");
        document.querySelector("#txtDireccionAlumno").value = window.localStorage.getItem("direccion");
        document.querySelector("#txtTelefonoAlumno").value = window.localStorage.getItem("telefono");
    });
});

/*document.addEventListener("DOMContentLoaded",function(e){
    alert("CALLBACK LISTO");
});*/

/*document.addEventListener("DOMContentLoaded", init);
function init(e){
    alert("LISTO");
}*/