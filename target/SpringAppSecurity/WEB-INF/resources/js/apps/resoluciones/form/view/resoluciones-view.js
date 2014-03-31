define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/resolucionLayout', 'apps/resoluciones/form/collection/resoluciones'],
    function ($, Backbone, Marionette, resolucionTemplate, Resoluciones) {

        var ResolucionesView = Backbone.Marionette.ItemView.extend({
            template: resolucionTemplate,
            collection: new Resoluciones(),

            fetchTipoResoluciones: function(){
                console.log("collection resolucion")
                this.collection.setUrlReso();
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done();
            }
        });
        return ResolucionesView;
    }
);
