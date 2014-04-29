define(["app", "apps/desc_medicos/form/form_layout"], function(ErzaManager, View){
    ErzaManager.module('DescanMedicoApp.Form',function(Form, ErzaManager,Backbone, Marionette, $, _){
        Form.Controller = {
            formDescanMedico: function(){
                var desc_medicoFormLayout = new View.Layout();

                ErzaManager.mainRegion.show(desc_medicoFormLayout);
            }
        }
    });

    return ErzaManager.DescanMedicoApp.Form.Controller;
});

