define(['backbone', 'apps/resoluciones/form/model/validacion'], function (Backbone, Validacion) {

    var validacion = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Validacion,

        setUrlvalidacion: function(restranum){
            console.log("seturl validacion de resolucion")
            this.url= 'rest/resoluciones/validarResolucion/'+restranum;
        }
    });
    return validacion;
});
