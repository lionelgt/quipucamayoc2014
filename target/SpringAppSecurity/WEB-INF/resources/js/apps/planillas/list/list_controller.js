define(["app", "apps/planillas/list/list_Layout"], function(ErzaManager, View){
    ErzaManager.module('PlanillasApp.List',function(List, ErzaManager,Backbone, Marionette, $, _){
        List.Controller = {
            listPlanillas: function(){
                var planillasListLayout = new View.Layout();

                ErzaManager.mainRegion.show(planillasListLayout);
            }
        }
    });

    return ErzaManager.PlanillasApp.List.Controller;
});