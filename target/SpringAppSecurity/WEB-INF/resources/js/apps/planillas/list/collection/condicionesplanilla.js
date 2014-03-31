define(['backbone', 'apps/planillas/list/model/condicionplanilla'], function (Backbone, CondicionPlanilla) {

    var CondicionesPlanilla = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: CondicionPlanilla,
        url: 'rest/cas/condicionesplanilla'

    });
    return CondicionesPlanilla;
});