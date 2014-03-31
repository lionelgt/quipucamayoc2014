define(['backbone', 'apps/roles/table/model/rol'], function (Backbone, Roles) {

    var Roles = Backbone.Collection.extend({

        model: Roles,

        setUrlSolic: function(perfCode){
            console.log("seturl de roles")
            this.url= 'rest/cas/roles/rols/'+perfCode;
        },
        initialize:function()
            {
                this.on( "change:active", this.changeActive,this);
                this.on( "change:descripcion", this.changeDescripcion,this);
            },
        changeActive:
            function( model, val, options)
            {
                var prev = model.previousAttributes();
                this.log( model.get("active") + " changed his active from " + prev.active);
            },
        changeDescripcion:
            function( model, val, options)
            {
                var prev = model.previousAttributes();
                this.log( model.get("descripcion") + " changed his age from " + prev.descripcion + " to " + model.get("descripcion"));
            },
        log:
            function( message)
            {
                debugger
                $("#results").append( "<li>" + message + "</li>");
            }

    });
    return Roles;
});
