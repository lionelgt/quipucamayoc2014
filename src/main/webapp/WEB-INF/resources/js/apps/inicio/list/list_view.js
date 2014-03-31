define(["app", "hbs!apps/inicio/list/templates/submodulos","bootstrap"], function (ErzaManager, layoutTpl) {
    ErzaManager.module('InicioApp.List.View', function (View, ErzaManager, Backbone, Marionette, $, _) {

        View.Layout = Marionette.Layout.extend({
            template: layoutTpl
        });
    });
    return ErzaManager.InicioApp.List.View;
});