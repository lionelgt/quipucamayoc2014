define(['backbone', 'apps/legajos/form/model/servidor'], function (Backbone, Servidor) {

    var Servidores = Backbone.Collection.extend({


        model: Servidor,

        setUrlTodosServi: function(){
            console.log("seturl servidores todos")
            this.url= 'api/legajos/servidores';
        }
    });
    return Servidores;
});