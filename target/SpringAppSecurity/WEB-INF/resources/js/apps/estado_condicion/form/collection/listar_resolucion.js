define(['backbone', 'apps/estado_condicion/form/model/listar_resolucion'], function (Backbone, ListarResolucion) {

    var listarResolucion = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ListarResolucion,
       setUrl: function(codigo, numserest){
        this.url= 'api/estado_condicion/listar_resol/'+codigo+"/"+numserest;
       }
    });
    return listarResolucion;
});
