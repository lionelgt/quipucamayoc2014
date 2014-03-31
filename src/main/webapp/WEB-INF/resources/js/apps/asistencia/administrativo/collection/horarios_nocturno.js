define(['backbone', 'apps/asistencia/administrativo/model/horario_nocturno'], function (Backbone, HorarioNoct) {

    var Horarios = Backbone.Collection.extend({


        model: HorarioNoct,

        setUrlHorarios: function(codigo_clase){
            this.url= 'api/asistencia/administrativo/horarioNoct/'+codigo_clase;
        }
    });
    return Horarios;
});
