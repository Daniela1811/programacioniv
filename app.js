document.addEventListener("DOMContentLoaded",e=>{
    document.addEventListener("submit",event=>{
        event.preventDefault();

        let de = document.querySelector("#cboDe").value,
            a = document.querySelector("#cboA").value,
            cantidad = document.querySelector("#txtCantidadConversores").value,
            $res = document.querySelector("#lblRespuesta");
        let monedas={
            'dolar':1,
            'euro':0.92,
            'quetzal':7.63,
            'lempira':24.86,
            'cordoba':34.20,
            
            'Peso Mexicano':19.77,
            'Yen Japones':106.60,
            'Rupias india':73.59,
            'Bitcoin':0.00011,
            'Cedi':5.44,
            'Kina':3.40,
            'Balboa':1.00,
            'Boliviano':6.90,


        };
        $res.innerHTML = `Respuesta: ${ monedas[a] / monedas[de] * cantidad }`;
    });
});