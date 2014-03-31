/**
 * Created with IntelliJ IDEA.
 * User: jean-pc
 * Date: 13/11/13
 * Time: 18:38
 * To change this template use File | Settings | File Templates.
 */

define([ 'jquery', 'backbone', 'marionette','hbs!apps/solicitudes/table/templates/solicitudes-table', 'apps/solicitudes/table/collection/updateEstado'],
    function ($, Backbone, Marionette, solicitudesTemplate, UpdateSolicitud) {

        var SolicitudesView = Backbone.Marionette.ItemView.extend({
            template: solicitudesTemplate,
            collection: new UpdateSolicitud(),

            fetchUpdate: function(estado,perf,callback){
                console.log("collection update activada")
                this.collection.setUrlUp(estado,perf);
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(estado);
            }
        });
        return SolicitudesView;
    }
);