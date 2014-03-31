define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/addMotivos', 'apps/resoluciones/form/collection/motivos'],
    function ($, Backbone, Marionette, motivoTemplate, motiC) {

        var TodosMotivoView = Backbone.Marionette.ItemView.extend({
            template: motivoTemplate,
            collection: new motiC(),

            fetchAddMotivos: function(callback){
                console.log("collection todos motivos")
                //this.collection.setUrlServi(cod)
                this.collection.setUrlMotiv();

                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(callback);
            }
        });
        return TodosMotivoView;
    }
);

