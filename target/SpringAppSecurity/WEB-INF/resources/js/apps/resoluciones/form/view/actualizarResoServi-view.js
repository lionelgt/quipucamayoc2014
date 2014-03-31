define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/trabajadorLayout', 'apps/resoluciones/form/collection/actualizarResoServi'],
    function ($, Backbone, Marionette, trabaTemplate, Trabajadores) {

        var TrabaView = Backbone.Marionette.ItemView.extend({
            template: trabaTemplate,
            collection: new Trabajadores(),

            fetchUpdateResoServi: function(nuevaR,resol){
                console.log("collection update resolucion trabajador")
                //this.collection.setUrlServi(cod)
                this.collection.setUrlUpdateResoServi(nuevaR,resol)

                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done();
            }
        });
        return TrabaView;
    }
);
