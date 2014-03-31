define(["app", "apps/inicio/list/list_view"], function(ErzaManager, View){
    ErzaManager.module('InicioApp.List',function(List, ErzaManager,Backbone, Marionette, $, _){
        List.Controller = {
            listModulos: function(){
                var inicioListLayout = new View.Layout();

                ErzaManager.mainRegion.show(inicioListLayout);
            }
        }
    });

    return ErzaManager.InicioApp.List.Controller;
});