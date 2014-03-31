define(['backbone', 'apps/servidores/form/model/tipoOcupacionUniv'], function (Backbone, TipoOcupacion) {

    var TiposOcupaciones = Backbone.Collection.extend({

        model: TipoOcupacion,
        url: 'rest/cas/serv/tipocupacionuni'

    });
    return TiposOcupaciones;
});