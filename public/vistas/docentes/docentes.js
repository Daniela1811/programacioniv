var appdocentes = new Vue({
    el:'#frm-docentes',
    data:{
        docentes:{
            idDocentes  : 0,
            accion    : 'nuevo',
            codigo    : '',
            nombre    : '',
            direccion : '',
            telefono  : '',
            DUI       : '',
            msg       : ''
        }
    },
    methods:{
        guardarDocentes:function(){
            fetch(`private/modulos/docentes/procesos.php?proceso=recibirDatos&docente=${JSON.stringify(this.docentes)}`).then( resp=>resp.json() ).then(resp=>{
                this.docentes.msg = resp.msg;
                this.docentes.idDocentes = 0;
                this.docentes.codigo = '';
                this.docentes.nombre = '';
                this.docentes.direccion = '';
                this.docentes.telefono = '';
                this.docentes.DUI = '';
                this.docentes.accion = 'nuevo';
                appBuscarDocentes.buscarDocentes();
            });
        }
    }
});