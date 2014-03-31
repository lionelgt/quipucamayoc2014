define(['backbone', 'apps/roles/table/model/rolperfil'], function (Backbone, RolesPerfil) {

    var RolesPerfil = Backbone.Collection.extend({

        model: RolesPerfil,

        setUrlSolic: function(){
            console.log("seturl de roles")
            this.url= 'rest/cas/roles/rolperfil';
        }



    });
    return RolesPerfil;
});

