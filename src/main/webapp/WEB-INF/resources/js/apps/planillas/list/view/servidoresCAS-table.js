define([ 'jquery', 'backbone', 'marionette','hbs!apps/planillas/list/templates/servidoresCAS-table', 'apps/planillas/list/collection/servidoresCAS'],
    function ($, Backbone, Marionette, servidoresCASTemplate, ServidoresCAS) {

        var ServidoresCASView = Backbone.Marionette.ItemView.extend({
            template: servidoresCASTemplate,
            collection: new ServidoresCAS(),
            fetchServidoresCAS: function(anio, mes, unidadId, planilla,estado){
                this.collection.setUrl(anio, mes, unidadId, planilla);
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(estado);
            }
        });
        return ServidoresCASView;
    }
);