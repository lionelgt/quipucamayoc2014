define([ 'backbone', 'marionette', 'apps/servidores/form/collection/tiposocupaciones', 'hbs!apps/servidores/form/templates/tiposocupacionuniv' ],
    function (Backbone, Marionette, TiposOcupaciones, tiposocupacionunivTemplate) {

        var TiposOcupacionView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template:  tiposocupacionunivTemplate,


            initialize: function () {
                // Initialize the collection
                this.collection = new TiposOcupaciones();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} });
            }

        });

        return TiposOcupacionView;
    }
);