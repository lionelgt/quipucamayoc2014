define(['app', 'hbs!apps/asistencia/docente/templates/docenteLayout','lib/bootstrap-datetimepicker.min',"lib/moment","jquery","bootstrap"],
    function (ErzaManager, layoutTpl) {
        ErzaManager.module('AsistenciaApp.list.View', function (View, ErzaManager, Backbone, Marionette, $, _) {

            View.Layout = Marionette.Layout.extend({
                template: layoutTpl

            });
        });
        return ErzaManager.AsistenciaApp.list.View;
    });