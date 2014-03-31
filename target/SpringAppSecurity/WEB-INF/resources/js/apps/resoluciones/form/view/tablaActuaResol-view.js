define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/actualizarResol', 'apps/resoluciones/form/collection/todasResoluciones'],
    function ($, Backbone, Marionette, todasTemplate, todasRe) {

        var TablaResolView = Backbone.Marionette.ItemView.extend({
            template: todasTemplate,
            collection: new todasRe(),

            fetchTablaResolucionesAnio: function(anio,callback){
                console.log("collection resoluciones por año")
                //this.collection.setUrlServi(cod)
                this.collection.setUrlTodasResoluciones(anio)

                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(callback);
            }
        });
        return TablaResolView;
    }
);
