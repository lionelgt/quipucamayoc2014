define(["app", "apps/asistencia/docente/docente_layout"], function(ErzaManager, View){
    ErzaManager.module('DocenteApp.Form',function(Form, ErzaManager,Backbone, Marionette, $, _){
        Form.Controller = {
            DocenteController: function(){
                var docenteLayout = new View.Layout();

                ErzaManager.mainRegion.show(docenteLayout);
            }
        }
    });

    return ErzaManager.DocenteApp.Form.Controller;
});

