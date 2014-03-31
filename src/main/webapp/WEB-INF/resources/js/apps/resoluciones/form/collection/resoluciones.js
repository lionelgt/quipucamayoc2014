define(['backbone', 'apps/resoluciones/form/model/resolucion'], function (Backbone, Resolucion) {

    var Resoluciones = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Resolucion,

        setUrlReso: function(){
            //console.log("seturl resoluciones")
            this.url= 'rest/resoluciones/tipos';
        }
    });
    return Resoluciones;
});
