define([ 'backbone', 'marionette', 'apps/contratos/adendas/collection/servidorgenericos', 'hbs!apps/contratos/adendas/templates/servidorgenericos' ],
    function (Backbone, Marionette, ServidorGenericos, servidorGenericosTemplate) {

        var ServidorGenericosView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: servidorGenericosTemplate,


            initialize: function (callback) {

                //initialize collection
                this.collection = new ServidorGenericos();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} }).done(callback);
            }

        });

        return ServidorGenericosView;
    }
);
