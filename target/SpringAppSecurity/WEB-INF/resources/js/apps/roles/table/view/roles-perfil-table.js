define([ 'jquery', 'backbone', 'marionette','hbs!apps/roles/table/templates/roles-table', 'apps/roles/table/collection/rolesperfil'],
    function ($, Backbone, Marionette, rolesTemplate, RolesPerfil) {

        var RolesPerfilView = Backbone.Marionette.ItemView.extend({
            template: rolesTemplate,
            collection: new RolesPerfil(),

            fetchRolesPerfil: function(){
                console.log("collection de rolesperfil");
                this.collection.setUrlSolic();
                this.collection.on("sync", this.render, this);
//                this.collection.fetch({ data: $.param({"anio":anio, "mes":mes, "unidadId": unidadId}) });
                this.collection.fetch().done();
            }
        });
        return RolesPerfilView;
    }
);