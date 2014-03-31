define(['backbone', 'apps/servidores/form/model/entidadAseguradora'], function (Backbone, EntidadAseguradora) {

    var EntidadesAseguradoras = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: EntidadAseguradora,
        url: 'rest/cas/serv/entidadesaseguradoras'

    });
    return EntidadesAseguradoras;
});