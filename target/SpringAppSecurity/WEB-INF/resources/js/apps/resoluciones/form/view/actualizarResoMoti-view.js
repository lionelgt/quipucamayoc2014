define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/mostrarMotivoTraba', 'apps/resoluciones/form/collection/actualizarResoMoti'],
    function ($, Backbone, Marionette, trabaTemplate, Trabajadores) {

        var TrabaView = Backbone.Marionette.ItemView.extend({
            template: trabaTemplate,
            collection: new Trabajadores(),

            fetchUpdateResoMoti: function(nuevaR,resol){
                console.log("collection update resolucion motivo")
                //this.collection.setUrlServi(cod)
                this.collection.setUrlUpdateResoMoti(nuevaR,resol)

                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done();
            }
        });
        return TrabaView;
    }
);
