define([ 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/resolAsocServidor', 'apps/resoluciones/form/collection/resolAsocServidores'],
    function (Backbone, Marionette, resolAsocServidorTemplate,resolAsocServidor) {
        var listarResolucion=Backbone.Marionette.ItemView.extend({

            template: resolAsocServidorTemplate,
            collection: new resolAsocServidor(),


            fetchResolucionesasociadas: function(codigo, numserest, callback){
                this.collection.setUrl(codigo, numserest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }

        })
        return listarResolucion;

    });
