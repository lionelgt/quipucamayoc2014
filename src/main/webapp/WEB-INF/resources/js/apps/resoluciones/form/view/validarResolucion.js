define([ 'jquery', 'backbone', 'marionette', 'hbs!apps/resoluciones/form/templates/validacion','apps/resoluciones/form/collection/validacion'],
    function ($, Backbone, Marionette,template, validacion) {

        var TrabaView = Backbone.Marionette.ItemView.extend({
            template: template,
            collection: new validacion(),

            fetchresolucion: function(restranum,callback){
                console.log("collection servidores")
                //this.collection.setUrlServi(cod)
                this.collection.setUrlvalidacion(restranum)

                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(callback);
            }
        });
        return TrabaView;
    }
);

