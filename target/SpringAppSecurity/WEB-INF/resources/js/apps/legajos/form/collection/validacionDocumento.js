define(['backbone', 'apps/legajos/form/model/validacionDocumento'], function (Backbone, Validacion) {

    var validacion = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Validacion,

        setUrlvalidacion: function(numdoc){
            console.log("seturl validacion de resolucion")
            this.url= 'api/legajos/validarDocumento/'+numdoc;
        }
    });
    return validacion;
});
