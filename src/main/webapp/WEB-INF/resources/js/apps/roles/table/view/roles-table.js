define([ 'jquery', 'backbone', 'marionette','hbs!apps/roles/table/templates/roles-table', 'apps/roles/table/collection/roles'],
    function ($, Backbone, Marionette, rolesTemplate, Roles) {

        var RolesView = Backbone.Marionette.ItemView.extend({
            template: rolesTemplate,
            collection: new Roles(),

            fetchRoles: function(perfCode,active){
                console.log("collection de roles");
                this.collection.setUrlSolic(perfCode);
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done(active);
            }
        });
        return RolesView;
    }
);