define(["app", "apps/solicitudes/table/table_layout"], function(ErzaManager, View){
    ErzaManager.module('SolicitudesApp.List',function(List, ErzaManager,Backbone, Marionette, $, _){
        List.Controller = {
            tableSolicitudes: function(){
                var SolicitudesListLayout = new View.Layout();

                ErzaManager.mainRegion.show(SolicitudesListLayout);
            }
        }
    });

    return ErzaManager.SolicitudesApp.List.Controller;
});