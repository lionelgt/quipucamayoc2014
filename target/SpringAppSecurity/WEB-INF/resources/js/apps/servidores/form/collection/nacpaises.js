define(['backbone', 'apps/servidores/form/model/nacpais'], function (Backbone, NacimientoPais) {

    var NaciPais = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: NacimientoPais,
        url: 'rest/cas/serv/paisNacimiento'

    });
    return NaciPais;
});
