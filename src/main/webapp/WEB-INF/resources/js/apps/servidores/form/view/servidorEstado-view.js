define([ 'backbone', 'marionette', 'apps/servidores/form/collection/servidorestados', 'hbs!apps/servidores/form/templates/servidorestados' ],
    function (Backbone, Marionette, ServidorEstados, servidorestadosTemplate) {

        var ServidorEstadosView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: servidorestadosTemplate,


            initialize: function () {

                //initialize collection
                this.collection = new ServidorEstados();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} });
            }

        });

        return ServidorEstadosView;
    }
);
