define(["app", "apps/legajos/form/form_layout"], function(ErzaManager, View){
    ErzaManager.module('LegajosApp.Form',function(Form, ErzaManager,Backbone, Marionette, $, _){
        Form.Controller = {
            formLegajos: function(){
                var legajosFormLayout = new View.Layout();

                ErzaManager.mainRegion.show(legajosFormLayout);
            }
        }
    });

    return ErzaManager.LegajosApp.Form.Controller;
});

