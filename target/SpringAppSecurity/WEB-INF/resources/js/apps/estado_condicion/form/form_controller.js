define(["app", "apps/estado_condicion/form/form_layout"], function(ErzaManager, View){
    ErzaManager.module('EstadoCondicionApp.Form',function(Form, ErzaManager,Backbone, Marionette, $, _){
        Form.Controller = {
            formEstadoCondicion: function(){
                var estado_condicionFormLayout = new View.Layout();

                ErzaManager.mainRegion.show(estado_condicionFormLayout);
            }
        }
    });

    return ErzaManager.EstadoCondicionApp.Form.Controller;
});

