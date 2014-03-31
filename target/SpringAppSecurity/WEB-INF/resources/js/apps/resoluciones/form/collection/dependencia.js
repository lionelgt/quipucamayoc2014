define(['backbone','apps/resoluciones/form/model/dependencia'], function (Backbone, Dependencia) {

    var Dependencias= Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Dependencia,
        setUrlDepen: function(tipo){
            console.log("seturl dependencias")
            this.url= 'rest/resoluciones/dependencia/tipo/'+tipo;
        }
    });
    return Dependencias;
});