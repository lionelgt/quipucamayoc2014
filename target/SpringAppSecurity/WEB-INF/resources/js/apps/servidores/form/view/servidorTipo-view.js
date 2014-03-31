define([ 'backbone', 'marionette', 'apps/servidores/form/collection/servidorTipo', 'hbs! apps/servidores/form/templates/servidorTipo' ],
    function (Backbone, Marionette, ServidorTipos, servidortiposTemplate) {

        var ServidorTiposView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: servidortiposTemplate,


            initialize: function () {

                //initialize collection
                this.collection = new ServidorTipos();

                // Render the view when the collection is retreived from the server
                this.listenTo(this.collection, 'sync', this.render);
            },

            findByTipGen: function (cod_serv_tip_gen, callback) {

                this.collection.url = "rest/cas/serv/servidortipo/tipgen/" + cod_serv_tip_gen;

                var self_p = this.collection.fetch({ data: { page: 'no'} }).done(callback);
            }

        });

        return ServidorTiposView;
    }
);
