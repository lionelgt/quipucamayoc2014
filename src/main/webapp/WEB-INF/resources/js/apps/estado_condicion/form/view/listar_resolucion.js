define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/listar_resolucion', 'apps/estado_condicion/form/collection/listar_resolucion'],
    function (Backbone, Marionette, ListarResolucionTemp,ListarResolucionColl) {
        var listarResolucion=Backbone.Marionette.ItemView.extend({

            template: ListarResolucionTemp,
            collection: new ListarResolucionColl(),


            fetchResoluciones: function(codigo, numserest, callback){
                this.collection.setUrl(codigo, numserest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }

        })
        return listarResolucion/*Mygrid*/;

    });
