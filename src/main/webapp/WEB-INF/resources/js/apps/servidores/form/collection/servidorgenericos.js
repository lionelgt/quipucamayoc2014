define(['backbone', 'apps/servidores/form/model/servidorgenerico'], function (Backbone, ServidorGenerico) {

    var ServidorGenericos = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ServidorGenerico,
        url: 'rest/cas/serv/servidorgenericos'

    });
    return ServidorGenericos;
});
