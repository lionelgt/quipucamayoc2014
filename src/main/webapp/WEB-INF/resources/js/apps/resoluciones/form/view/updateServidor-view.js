define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/trabajadorLayout', 'apps/resoluciones/form/collection/updateServidor'],
    function ($, Backbone, Marionette, trabaTemplate, UpdateServidor) {

        var SolicitudesView = Backbone.Marionette.ItemView.extend({
            template: trabaTemplate,
            collection: new UpdateServidor(),

            fetchUpServi: function(resol,dni,estado){
                console.log("collection update activada servidor")
                this.collection.setUrlUpdateServidor(resol,dni,estado)
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(estado);
            },
            fetchUpServiResol: function(resol,resol2){
                console.log("collection update activada servidor por resol")
                this.collection.setUrlUpdateServidorResol(resol,resol2)
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done();
            }
        });
        return SolicitudesView;
    }
);

