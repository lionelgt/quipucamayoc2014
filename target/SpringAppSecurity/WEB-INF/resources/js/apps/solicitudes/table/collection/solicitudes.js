define(['backbone', 'apps/solicitudes/table/model/solicitud'], function (Backbone, Solicitudes) {

    var SolicitudesPendientes = Backbone.Collection.extend({

        model: Solicitudes,

        setUrlSolic: function(){
            console.log("seturl")
            this.url= 'api/solicitudes/estados';
        }

    });
    return SolicitudesPendientes;
});
