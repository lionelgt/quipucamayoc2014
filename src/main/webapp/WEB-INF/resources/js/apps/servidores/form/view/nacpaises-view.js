define([ 'backbone', 'marionette', 'apps/servidores/form/collection/nacpaises', 'hbs!apps/servidores/form/templates/paisnacimiento' ],
    function (Backbone, Marionette,NacPais, paisNacimienTemplate) {

        var PaisNacimientoView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: paisNacimienTemplate,


            fetchNacPais: function (callback) {
                // Initialize the collection
                this.collection = new NacPais();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} }).done(callback);
            }

        });

        return PaisNacimientoView;
    }
);

