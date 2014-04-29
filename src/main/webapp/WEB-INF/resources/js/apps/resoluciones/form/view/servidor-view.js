define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/servidorLayout', 'apps/resoluciones/form/collection/servidor'],
    function ($, Backbone, Marionette, serviTemplate, Servidores) {

        var ServiView = Backbone.Marionette.ItemView.extend({
            template: serviTemplate,
            collection: new Servidores(),

            fetchServidores: function(){
                this.collection.setUrlTodosServi()
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();
            }
        });
        return ServiView;
    }
);

