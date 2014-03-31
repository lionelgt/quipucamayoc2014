define(["app", "apps/resoluciones/form/form_layout"], function(ErzaManager, View){
    ErzaManager.module('ResolucionesApp.Form',function(List, ErzaManager,Backbone, Marionette, $, _){
        List.Controller = {
            formResoluciones: function(){ //ese nombre tmb tiene que ser igual en resoluciones_app, en la parte var API
                var ResolucionesFormLayout = new View.Layout();

                ErzaManager.mainRegion.show(ResolucionesFormLayout);
            }
        }
    });

    return ErzaManager.ResolucionesApp.Form.Controller;
});
