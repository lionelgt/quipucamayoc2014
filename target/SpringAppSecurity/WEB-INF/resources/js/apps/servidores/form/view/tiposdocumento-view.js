define([ 'backbone', 'marionette', 'apps/servidores/form/collection/tiposdocumento', 'hbs!apps/servidores/form/templates/tiposdocumentos' ],
    function (Backbone, Marionette, TiposDocumento, tiposdocumentoTemplate) {

        var TiposDocumentoView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: tiposdocumentoTemplate,


            fetchTipoDocument: function () {
                // Initialize the collection
                this.collection = new TiposDocumento();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} });
            }

        });

        return TiposDocumentoView;
    }
);
