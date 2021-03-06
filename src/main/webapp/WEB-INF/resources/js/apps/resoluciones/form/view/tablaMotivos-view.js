define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/tablaMotivos', 'apps/resoluciones/form/collection/motivos'],
    function ($, Backbone, Marionette, motiTemplate, motiC) {

        var TodosMotiView = Backbone.Marionette.ItemView.extend({
            template: motiTemplate,
            collection: new motiC(),

            fetchTodosMotivos: function(callback){
                console.log("collection todos motivos")
                //this.collection.setUrlServi(cod)
                this.collection.setUrlMotiv();

                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(callback);
            }
        });
        return TodosMotiView;
    }
);
