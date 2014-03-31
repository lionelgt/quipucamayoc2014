define([ 'backbone', 'marionette', 'apps/contratos/adendas/model/contratocas', 'hbs!apps/contratos/adendas/templates/plazas-view' ],
    function (Backbone, Marionette, ContratoCAS, plazaTemplate) {

        var PlazasView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: plazaTemplate,

            events: {

            },

            initialize: function () {

                // Initialize the collection
                this.model = new ContratoCAS();

            }

        });

        return PlazasView;
    }
);
