define(['backbone'], function (Backbone) {

    var Apertura_planilla = Backbone.Model.extend({
        className: 'edu.quipu.rrhh.models.PlanillaCAS',
        url: '/api/planillasCAS/aperturaPlanilla'

    });

    return Apertura_planilla;
});