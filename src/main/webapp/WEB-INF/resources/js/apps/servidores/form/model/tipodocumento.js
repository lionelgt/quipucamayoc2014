define(['backbone'], function (Backbone) {

    var TipoDocumento = Backbone.Model.extend({
        defaults: {
            name: 'default'
        }
    });

    return TipoDocumento;
});