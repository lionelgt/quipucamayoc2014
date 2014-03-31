define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/dependenciaLayout', 'apps/resoluciones/form/collection/dependencia'],
    function ($, Backbone, Marionette, depenTemplate, Dependencias) {

        var DepenView = Backbone.Marionette.ItemView.extend({
            template: depenTemplate,
            collection: new Dependencias(),

            fetchTipoDepen: function(tipo,callback){
                console.log("collection dependencias")
                this.collection.setUrlDepen(tipo)
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(callback);
            }
        });
        return DepenView;
    }
);
