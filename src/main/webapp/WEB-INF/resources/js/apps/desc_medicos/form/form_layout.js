define(['app', 'hbs!apps/desc_medicos/form/templates/inicio_desc_medicos','lib/bootstrap-datetimepicker.min',"lib/moment","jquery","bootstrap"],
    function (ErzaManager, layoutTpl) {
        ErzaManager.module('DescansoMedicoApp.list.View', function (View, ErzaManager, Backbone, Marionette, $, _) {

            View.Layout = Marionette.Layout.extend({
                template: layoutTpl

            });
        });
        return ErzaManager.DescansoMedicoApp.list.View;
    });