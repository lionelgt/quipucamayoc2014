define([ 'backbone', 'marionette', 'apps/contratos/adendas/collection/contratoscas', 'hbs!apps/contratos/adendas/templates/contratoscas' ],
    function (Backbone, Marionette, ContratosCAS, contratoscasTemplate) {

        var ContratosCASView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: contratoscasTemplate,

            initialize: function () {

                //initialize collection
                this.collection = new ContratosCAS();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);
            },

            findByUnidad: function (unidad, callback) {

                console.log('unidad : ' + unidad);

                // Update url
                this.collection.url = "rest/cas/plazas/unidad/" + unidad;

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch().done(callback);

                return false;
            }

        });

        return ContratosCASView;
    }
);