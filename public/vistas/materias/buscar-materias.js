var appBuscarMaterias = new Vue({
    el:'#frm-buscar-materias',
    data:{
        mismaterias:[],
        valor:''
    },
    methods:{
        buscarMaterias:function(){
            fetch(`private/modulos/materias/procesos.php?proceso=buscarMaterias&materias=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.mismaterias = resp;
            });
        },
        modificarMaterias:function(materias){
            appmaterias.materias = materias;
            appmaterias.materias.accion = 'modificar';
        },
        eliminarMaterias:function(idMateria){
            fetch(`private/modulos/materias/procesos.php?proceso=eliminarMaterias&materias=${idMateria}`).then(resp=>resp.json()).then(resp=>{
                this.buscarMaterias();
            });
        }
    },
    created:function(){
        this.buscarMaterias();
    }
});