define([ 'backbone', 'marionette', 'apps/servidores/form/collection/regimenPensionario', 'hbs! apps/servidores/form/templates/regimenPensionario' ],
    function (Backbone, Marionette, RegimenesPensionarios, regimenespensionariosTemplate) {

        var RegimenesPensionariosView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: regimenespensionariosTemplate,

            initialize: function (callback) {

                //initialize collection
                this.collection = new RegimenesPensionarios();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);

                // Request unpaginated URL
                this.collection.fetch({ data: { page: 'no'} }).done(callback);
            }

        });

        return RegimenesPensionariosView;
    }
);