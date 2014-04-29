define(['backbone', 'apps/resoluciones/form/model/resolAsocServidor'], function (Backbone, resolAsocServidor) {

    var resolAsocServidor = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: resolAsocServidor,
        setUrl: function(codigo, numserest){
            this.url= 'rest/resoluciones/resolAsociados/'+codigo+"/"+numserest;
        }
    });
    return resolAsocServidor;
});
