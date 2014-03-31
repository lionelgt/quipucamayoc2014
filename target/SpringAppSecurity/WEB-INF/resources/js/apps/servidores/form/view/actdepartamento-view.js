define([ 'backbone', 'marionette', 'apps/servidores/form/collection/actdepartamentos', 'hbs! apps/servidores/form/templates/actdepartamento' ],
    function (Backbone, Marionette, actDepartamentos,actdepartamentoTemplate) {

        var ActDepartamentoView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: actdepartamentoTemplate,


            fetchActDepart: function (callback) {

                //initialize collection
                this.collection = new actDepartamentos();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} }).done(callback);
            }

        });

        return ActDepartamentoView;
    }
);


