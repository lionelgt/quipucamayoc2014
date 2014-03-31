define([ 'backbone', 'marionette', 'apps/planillas/list/collection/origenes', 'hbs!apps/planillas/list/templates/origenes-select' ],
    function (Backbone, Marionette, Origenes, origenesTemplate) {

        var OrigenesView = Backbone.Marionette.ItemView.extend({

            template: origenesTemplate,
            collection: new Origenes(),
            fetchOrigenes: function(unidadId,origen){
                this.collection.setUrl(unidadId);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(origen);

            }

        });

        return OrigenesView;
    }
);