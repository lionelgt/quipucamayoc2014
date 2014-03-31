define(['backbone','apps/resoluciones/form/model/guardarServidor'], function (Backbone, ActuaResoServi) {

    var actuaResoServi= Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ActuaResoServi,
        setUrlUpdateResoServi: function(nuevaR,resol){
            console.log("seturl actualizar resolucion en el trabajador")
            this.url= 'rest/resoluciones/updateResoServi/'+nuevaR+'/'+resol;
        }
    });
    return actuaResoServi;
});
