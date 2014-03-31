define(["app"], function(ErzaManager){

    ErzaManager.module('InicioApp', function(InicioApp, ErzaManager, Backbone, Marionette, $, _){

        InicioApp.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "inicio": "listModulos"
            }
        });

        var API = {
            listModulos: function(){
                require(["apps/inicio/list/list_controller"], function(ListController){
                    ListController.listModulos();
                });
            }
        };

        ErzaManager.on("iniciar:list", function(){
            console.log(' on submodulos list');
            ErzaManager.navigate("inicio");
            API.listModulos();
        });

        ErzaManager.addInitializer(function(){
            new InicioApp.Router({
                controller: API                       //API contiene todos los controladores
            });
        });
    });

    return ErzaManager.InicioApp;
});