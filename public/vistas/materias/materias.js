var appmaterias = new Vue({
    el:'#frm-materias',
    data:{
        materias :{
            idMateria   : 0,
            accion      : 'nuevo',
            codigo      : '',
            nombre      : '',
            descripcion : '',
            msg         : ''
        }
    },
    methods:{
        guardarMaterias :function(){
            fetch(`private/modulos/materias/procesos.php?proceso=recibirDatos&materias=${JSON.stringify(this.materias)}`).then( resp=>resp.json() ).then(resp=>{
                this.materias.msg = resp.msg;
                this.materias.idMateria = 0;
                this.materias.codigo = '';
                this.materias.nombre = '';
                this.materias.descripcion = '';
                this.materias.accion = 'nuevo';
                appBuscarMaterias.buscarMaterias();
            });
        }
    }
});