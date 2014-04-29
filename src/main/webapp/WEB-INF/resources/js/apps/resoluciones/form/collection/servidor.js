define(['backbone','apps/resoluciones/form/model/servidor'], function (Backbone, Servidor) {

    var Servidores= Backbone.Collection.extend({

        model: Servidor,
        setUrlServi: function(cod){
            this.url= 'rest/cas/serv/buscaServidor/'+cod;
        },
        setUrlTodosServi: function(){
            this.url= 'rest/cas/serv/servidores';
        }
    });
    return Servidores;
});

