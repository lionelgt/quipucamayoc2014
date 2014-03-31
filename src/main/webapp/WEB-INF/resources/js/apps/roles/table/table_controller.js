define(["app", "apps/roles/table/table_layout"], function(ErzaManager, View){
    ErzaManager.module('RolesApp.List',function(List, ErzaManager,Backbone, Marionette, $, _){
        List.Controller = {
            listRoles: function(){
                var RolesListLayout = new View.Layout();

                ErzaManager.mainRegion.show(RolesListLayout);
            }
        }
    });

    return ErzaManager.RolesApp.List.Controller;
});

