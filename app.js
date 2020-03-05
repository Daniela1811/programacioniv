document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversor").value,
            opcion = document.getElementById('cboConvertir');
  
        let monedas = {
            "dolar":1,
            "colones":8.75,
            "yenes":106.31,
            "rupias":73.85,
            "lempiras":24.64,
            "peso":19.95,
            "bitcoin":0.00011},
            longitudes = {
              "metro":1,
              "cm": 100,
              "pulgada":39.3701,
              "pie":3.28084,
              "varas":1.1963081929167,
              "yardas":1.09361,
              "km":0.001,
              "millas":0.000621371,}
            
            Almacenamiento = {
                "Megabyte":1,  
                "bit": 8388608,   
                "byte":1048576,
                "Kilobyte":1024,
                "Gigabyte":0.0009765625,
                "Terabyte":0.00000095367431660625

            
            
            };
  
        let $res = document.querySelector("#lblRespuesta");
        if(opcion.value == "moneda"){
          $res.innerHTML = `Respuesta: ${ (monedas[a]/monedas[de]*cantidad).toFixed(2) }`;
        } else if(opcion.value == "longitud"){
          $res.innerHTML = `Respuesta: ${ (longitudes[a]/longitudes[de]*cantidad).toFixed(2) }`;
        }  else if(opcion.value == "almacenamiento"){
            $res.innerHTML = `Respuesta: ${ (Almacenamiento[a]/Almacenamiento[de]*cantidad).toFixed(2) }`;
        };
    });
  });
  
  //llenar los select box 
  function elegir_opcion() {
    let opcion = document.getElementById('cboConvertir'),
    de1 = document.getElementById('cboDe'),
    a1 = document.getElementById('cboA');
    //limpia antes de actualizar
    de1.value="";
    a1.value="";
    de1.innerHTML="";
    a1.innerHTML="";
  
    if(opcion.value == "moneda"){
      var  array = ["dolar!Dolar","colones!Colones","yenes!Yenes","rupias!Rupias","lempiras!Lempiras","peso!Peso","bitcoin!Bitcoin"]; 
    } else if(opcion.value == "longitud"){
      var array = ["metro!Metro","cm!CM","pulgada!Pulgada","pie!Pie","varas!Varas","yardas!Yardas","km!KM","millas!Millas"];
    } else if(opcion.value == "almacenamiento"){
        var array = ["megabyte!Megabyte","bit!bit","byte!byte","kylobyte!kylobyte","gigabyte!Gigabyte","terabyte!terabyte"];
    };
  
    for(var i=0;i<array.length;i++){ 
      var repair = array[i].split("!");
      var newop = document.createElement("option");
      newop.value = repair[0]
      newop.innerHTML = repair[1];
      de1.options.add(newop);
    };
    for(var i=0;i<array.length;i++){ 
      var repair = array[i].split("!");
      var newop = document.createElement("option");
      newop.value = repair[0]
      newop.innerHTML = repair[1];
      a1.options.add(newop);
    };
   }