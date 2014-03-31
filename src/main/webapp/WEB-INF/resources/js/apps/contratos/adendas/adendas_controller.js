define(["app", "apps/contratos/adendas/adendas_Layout"], function(ErzaManager, View){
    ErzaManager.module('ContratosApp.Form',function(List, ErzaManager,Backbone, Marionette, $, _){
        List.Controller = {
            listAdendas: function(){
                var adendasListLayout = new View.Layout();

                ErzaManager.mainRegion.show(adendasListLayout);
            }
        }
    });

    return ErzaManager.ContratosApp.Form.Controller;
});