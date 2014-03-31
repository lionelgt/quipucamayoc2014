define(['backbone', 'apps/resoluciones/form/model/trabajador'], function (Backbone, Trabajador) {

    var Trabajadores = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Trabajador,

        setUrlTraba: function(resol){
            console.log("seturl trabajadores por resolucion")
            this.url= 'rest/resoluciones/trabajador/'+resol;
        }
    });
    return Trabajadores;
});
