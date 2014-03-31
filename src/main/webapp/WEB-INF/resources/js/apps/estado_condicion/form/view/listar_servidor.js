
define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/listar_servidor', 'apps/estado_condicion/form/collection/listar_servidor'],
    function (Backbone, Marionette, ListarServidorTemp,ListarServidorColl) {
        var listarServidor=Backbone.Marionette.ItemView.extend({

            template: ListarServidorTemp,
            collection: new ListarServidorColl(),

            fetchServ: function(){
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();
            }

        })
        return listarServidor/*Mygrid*/;

    });