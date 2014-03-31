define(['backbone', 'apps/legajos/form/model/table-resolucion'], function (Backbone, Resolucion) {

    var Resoluciones = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Resolucion,
        setUrl: function(dni,numserest){
            this.url='api/legajos/codigo/'+dni+'/numserest/'+numserest;
        }
    });
    return Resoluciones;
});