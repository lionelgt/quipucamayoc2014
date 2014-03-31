define([ 'backbone', 'marionette', 'apps/contratos/adendas/collection/servidorcargos', 'hbs!apps/contratos/adendas/templates/servidorcargos' ],
    function (Backbone, Marionette, ServidorCargos, servidorcargosTemplate) {

        var ServidorCargosView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: servidorcargosTemplate,

            initialize: function () {

                //initialize collection
                this.collection = new ServidorCargos();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} });
            }

        });

        return ServidorCargosView;
    }
);