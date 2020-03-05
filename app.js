document.addEventListener("DOMContentLoaded",e=>{
    document.addEventListener("submit",event=>{
        event.preventDefault();

        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtAPP_estadistica").value,
            $res = document.querySelector("#lblRespuesta");
        let monedas={
            'Media':1,
            'Mediana':0.92,
            'Moda':7.63,
            'Desviacion Tipica':24.86,
            'Desviacion Estandar':34.20
        };
        $res.innerHTML = `Respuesta: ${ monedas[a] / monedas[de] * cantidad }`;
    });
});