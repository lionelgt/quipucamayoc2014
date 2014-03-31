define(['backbone', 'apps/roles/table/model/perfil'], function (Backbone, Perfiles) {

    var Perfiles = Backbone.Collection.extend({

        model: Perfiles,

        setUrlSolic: function(){
            console.log("seturl de perfiles")
            this.url= 'rest/cas/profile/profiles';
        }

    });
    return Perfiles;
});
