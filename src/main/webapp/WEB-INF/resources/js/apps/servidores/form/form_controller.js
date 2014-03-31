define(["app", "apps/servidores/form/form_layout"], function(ErzaManager, View){
    ErzaManager.module('ServidoresApp.Form',function(Form, ErzaManager,Backbone, Marionette, $, _){
        Form.Controller = {
            formServidores: function(){
                var servidoresFormLayout = new View.Layout();

                ErzaManager.mainRegion.show(servidoresFormLayout);
            }
        }
    });

    return ErzaManager.ServidoresApp.Form.Controller;
});
