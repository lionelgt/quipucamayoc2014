define(['backbone', 'apps/legajos/form/model/validacionEditDocumento'], function (Backbone, Validacion) {

    var validacion = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Validacion,

        setUrlEditvalidacion: function(numdoc,carfamsec){
            console.log("seturl validacion de resolucion")
            this.url= 'api/legajos/validarEditDocumento/'+numdoc+"/"+carfamsec;
        }
    });
    return validacion;
});

