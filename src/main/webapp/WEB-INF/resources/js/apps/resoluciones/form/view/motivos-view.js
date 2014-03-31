define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/motivoLayout', 'apps/resoluciones/form/collection/motivos'],
    function ($, Backbone, Marionette, motivoTemplate, Motivos) {

        var MotivoView = Backbone.Marionette.ItemView.extend({
            template: motivoTemplate,
            collection: new Motivos(),

            fetchTipoMotivos: function(){
                console.log("collection motivos")
                this.collection.setUrlMotiv();
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done();
            }
        });
        return MotivoView;
    }
);

