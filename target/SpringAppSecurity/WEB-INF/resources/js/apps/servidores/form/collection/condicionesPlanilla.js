define(['backbone', 'apps/servidores/form/model/condicionPlanilla'], function (Backbone, CondicionPlanilla) {

    var CondicionesPlanilla = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: CondicionPlanilla,
        url: 'rest/cas/serv/condicionesplanilla'

    });
    return CondicionesPlanilla;
});
