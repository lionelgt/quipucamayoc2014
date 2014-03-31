define(['backbone', 'apps/asistencia/administrativo/model/servidor'], function (Backbone, Servidor) {

    var Servidores = Backbone.Collection.extend({


        model: Servidor,

        setUrlTodosServi: function(){
            this.url= 'api/asistencia/administrativo/servidores';
        }
    });
    return Servidores;
});