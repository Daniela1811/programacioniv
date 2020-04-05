var appBuscarDocentes = new Vue({
    el:'#frm-buscar-docentes',
    data:{
        misdocentes:[],
        valor:''
    },
    methods:{
        buscarDocentes:function(){
            fetch(`private/modulos/docentes/procesos.php?proceso=buscarDocentes&docentes=${this.valor}`).then(resp=>resp.json()).then(resp=>{
                this.misdocentes = resp;
            });
        },
        modificarDocentes:function(docentes){
            appdocentes.docentes = docentes;
            appdocentes.docentes.accion = 'modificar';
        },
        eliminarDocentes:function(idDocentes){
            fetch(`private/modulos/docentes/procesos.php?proceso=eliminarDocentes&docentes=${idDocentes}`).then(resp=>resp.json()).then(resp=>{
                this.buscarDocentes();
            });
        }
    },
    created:function(){
        this.buscarDocentes();
    }
});