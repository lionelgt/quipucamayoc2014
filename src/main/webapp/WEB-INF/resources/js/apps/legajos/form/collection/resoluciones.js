define(['backbone', 'apps/legajos/form/model/resolucion'], function (Backbone, Resolucion) {

    var Resoluciones = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Resolucion,
        setUrl: function(codigo,numserest){
            this.url='api/legajos/resoluciones/codigo/'+codigo+'/numserest/'+numserest;
        }
    });
    return Resoluciones;
});