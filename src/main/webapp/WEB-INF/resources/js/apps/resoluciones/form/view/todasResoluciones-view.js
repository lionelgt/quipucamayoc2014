define([ 'jquery', 'backbone', 'marionette','hbs!apps/resoluciones/form/templates/todasResoluciones', 'apps/resoluciones/form/collection/todasResoluciones'],
    function ($, Backbone, Marionette, todasTemplate, todasRe) {

        var TodasView = Backbone.Marionette.ItemView.extend({
            template: todasTemplate,
            collection: new todasRe(),

            fetchTodasResolucionesAnio: function(anio,callback){
                console.log("collection todas resoluciones")
                //this.collection.setUrlServi(cod)
                this.collection.setUrlTodasResoluciones(anio)

                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(callback);
            },
            fetchTodasResolucionesxfecha: function(inicio,fin,callback){
                console.log("collection todas resoluciones x fecha")
                //this.collection.setUrlServi(cod)
                this.collection.setUrlTodasResolucionesxfecha(inicio,fin)

                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(callback);
            }
        });
        return TodasView;
    }
);
