define([ 'backbone', 'marionette', 'apps/servidores/form/collection/nacdepartamentos', 'hbs! apps/servidores/form/templates/nacdepartamento' ],
    function (Backbone, Marionette, nacDepartamentos,nacdepartamentoTemplate) {

        var NacDepartamentoView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: nacdepartamentoTemplate,


            fetchNacDepart: function (callback) {

                //initialize collection
                this.collection = new nacDepartamentos();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} }).done(callback);
            }

        });

        return NacDepartamentoView;
    }
);

