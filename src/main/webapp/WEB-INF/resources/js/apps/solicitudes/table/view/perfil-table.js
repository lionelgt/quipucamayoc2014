
define([ 'jquery', 'backbone', 'marionette','hbs!apps/solicitudes/table/templates/perfil_template', 'apps/solicitudes/table/collection/perfiles'],
    function ($, Backbone, Marionette, perfilTemplate, Perfiles) {

        var PerfilesView = Backbone.Marionette.ItemView.extend({
            template: perfilTemplate,
            collection: new Perfiles(),

            fetchPerfiles: function(){
                console.log("collection perfil activada")
                // this.collection.setUrl(estado);
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch();
            }
        });
        return PerfilesView;
    }
);
