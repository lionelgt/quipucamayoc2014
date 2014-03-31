define([ 'jquery', 'backbone', 'marionette','hbs!apps/solicitudes/table/templates/solicitudes-table', 'apps/solicitudes/table/collection/solicitudes'],
    function ($, Backbone, Marionette, solicitudesTemplate, Solicitudes) {

        var SolicitudesView = Backbone.Marionette.ItemView.extend({
            template: solicitudesTemplate,
            collection: new Solicitudes(),

            fetchSolicitudes: function(){
                console.log("collection")
                this.collection.setUrlSolic();
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done();
            }
        });
        return SolicitudesView;
    }
);