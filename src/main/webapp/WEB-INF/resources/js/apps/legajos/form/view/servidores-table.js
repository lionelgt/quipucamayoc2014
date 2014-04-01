define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/servidores-modal', 'apps/legajos/form/collection/servidores'],
    function (Backbone, Marionette, servidoresModalTemplate,Servidores) {
        var servidoresModal=Backbone.Marionette.ItemView.extend({

            template: servidoresModalTemplate,
            collection: new Servidores(),

            fetchServidores: function(callback){
                this.collection. setUrlTodosServi()
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return servidoresModal;

    });