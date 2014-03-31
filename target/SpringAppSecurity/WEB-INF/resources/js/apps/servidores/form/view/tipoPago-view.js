define([ 'backbone', 'marionette', 'apps/servidores/form/collection/tipoPago', 'hbs! apps/servidores/form/templates/tipoPago' ],
    function (Backbone, Marionette, TiposDePago, tiposdepagoTemplate) {

        var TiposDePagoView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: tiposdepagoTemplate,


            initialize: function (callback) {

                //initialize collection
                this.collection = new TiposDePago();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} }).done(callback);
            }

        });

        return TiposDePagoView;
    }
);
