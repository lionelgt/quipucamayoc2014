define(["app", "apps/asistencia/administrativo/administrativo_layout"], function(ErzaManager, View){
    ErzaManager.module('AdministrativoApp.Form',function(Form, ErzaManager,Backbone, Marionette, $, _){
        Form.Controller = {
            AdministrativoController: function(){
                var administrativoLayout = new View.Layout();

                ErzaManager.mainRegion.show(administrativoLayout);
            }
        }
    });

    return ErzaManager.AdministrativoApp.Form.Controller;
});

