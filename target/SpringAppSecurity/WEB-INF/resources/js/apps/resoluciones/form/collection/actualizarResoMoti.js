define(['backbone','apps/resoluciones/form/model/guardarMotivoTrabajador'], function (Backbone, ActuaResoMoti) {

    var actuaResoMoti= Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ActuaResoMoti,
        setUrlUpdateResoMoti: function(nuevaR,resol){
            console.log("seturl actualizar resolucion en el motivo")
            this.url= 'rest/resoluciones/updateResoMoti/'+nuevaR+'/'+resol;
        }
    });
    return actuaResoMoti;
});

