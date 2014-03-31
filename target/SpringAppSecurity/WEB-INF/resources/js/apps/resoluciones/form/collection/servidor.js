define(['backbone','apps/resoluciones/form/model/servidor'], function (Backbone, Servidor) {

    var Servidores= Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Servidor,
        setUrlServi: function(cod){
            console.log("seturl servidores")
            this.url= 'rest/cas/serv/buscaServidor/'+cod;
        },
        setUrlTodosServi: function(){
            console.log("seturl servidores todos")
            this.url= 'rest/cas/serv/servidores';
        }
    });
    return Servidores;
});

