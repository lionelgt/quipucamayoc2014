define([ 'backbone', 'marionette', 'apps/servidores/form/collection/estadosciviles', 'hbs!apps/servidores/form/templates/estadosciviles' ],
    function (Backbone, Marionette, EstadosCiviles, estadoscivilesTemplate) {

        var EstadosCivilesView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: estadoscivilesTemplate,


            fetchEstCivil: function () {

                this.collection = new EstadosCiviles();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} });
            }



        });

        return EstadosCivilesView;
    }
);
