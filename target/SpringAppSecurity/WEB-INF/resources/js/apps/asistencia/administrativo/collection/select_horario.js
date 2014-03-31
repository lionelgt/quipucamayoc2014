define(['backbone', 'apps/asistencia/administrativo/model/select_horario'], function (Backbone, selectHorario) {

    var Horarios = Backbone.Collection.extend({


        model: selectHorario,

        setUrlHorarios: function(codigoHor){
            this.url= 'api/asistencia/administrativo/selectHorario/'+codigoHor;
        }
    });
    return Horarios;
});

