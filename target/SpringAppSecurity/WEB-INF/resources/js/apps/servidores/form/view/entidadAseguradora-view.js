define([ 'backbone', 'marionette', 'apps/servidores/form/collection/entidadAseguradora', 'hbs!apps/servidores/form/templates/entidadAseguradora' ],
    function (Backbone, Marionette, EntidadesAseguradoras, entidadesaseguradorasTemplate) {

        var EntidadesAseguradorasView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: entidadesaseguradorasTemplate,

            initialize: function () {

                //initialize collection
                this.collection = new EntidadesAseguradoras();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);
            },

            findByRpe: function (reg_pen, callback) {

                // Render the view when the collection is retreived from the server
                this.collection.on("sync", this.render, this);

                // Request unpaginated URL
                this.collection.fetch({ data: $.param({"regPen": reg_pen}) }).done(callback);
            }

        });

        return EntidadesAseguradorasView;
    }
);
