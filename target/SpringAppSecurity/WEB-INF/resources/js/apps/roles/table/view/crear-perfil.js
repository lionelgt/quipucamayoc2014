define([ 'jquery', 'backbone', 'marionette','hbs!apps/roles/table/templates/crear-perfil', 'apps/roles/table/collection/perfiles'],
    function ($, Backbone, Marionette, perfilesTemplate, Perfiles) {

        var PerfilesView = Backbone.Marionette.ItemView.extend({
            template: perfilesTemplate,
            collection: new Perfiles(),

            fetchPerfiles: function(callback){
                console.log("collection de roles");
                this.collection.setUrlSolic();
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(callback);
            }
        });
        return PerfilesView;
    }
);