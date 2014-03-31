define(['backbone', 'apps/asistencia/administrativo/model/horario'], function (Backbone, Horario) {

    var Horarios = Backbone.Collection.extend({


        model: Horario,

        setUrlHorarios: function(codigo_clase,tolerancia,lactancia){
            this.url= 'api/asistencia/administrativo/codigo/'+codigo_clase+'/tolerancia/'+tolerancia+'/lactancia/'+lactancia;
        }
    });
    return Horarios;
});