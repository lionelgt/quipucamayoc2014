define(['backbone', 'apps/resoluciones/form/model/updateServidor'], function (Backbone, UpdateServidor) {

    var UpdateServidor = Backbone.Collection.extend({

        model:  UpdateServidor,

        setUrlUpdateServidor: function(resol,dni,estado){
            console.log("entrando al collection update servidor")
            this.url= 'rest/resoluciones/updateServidor/'+resol+'/'+dni+'/'+estado;
        },

        setUrlUpdateServidorResol: function(resol,resol2){
            console.log("entrando al collection update servidor por resol")
            this.url= 'rest/resoluciones/updateServidorResol/'+resol+'/'+resol2;
        }

    });
    return UpdateServidor;
});
