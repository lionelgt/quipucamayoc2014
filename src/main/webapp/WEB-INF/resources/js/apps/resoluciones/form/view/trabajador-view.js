define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/trabajadorLayout', 'apps/resoluciones/form/collection/trabajador'],
    function ($, Backbone, Marionette, trabaTemplate, Trabajadores) {

        var TrabaView = Backbone.Marionette.ItemView.extend({
            template: trabaTemplate,
            collection: new Trabajadores(),

            fetchTrabajadores: function(resol,callback){


                this.collection.setUrlTraba(resol)

                this.collection.on("sync", this.render, this);

                this.collection.fetch().done(callback);
            }
        });
        return TrabaView;
    }
);

