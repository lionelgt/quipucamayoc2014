define(['backbone', 'apps/asistencia/administrativo/model/tipo_documento'], function (Backbone,TipoDocumento) {

    var TipoDocumento = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipoDocumento,
        url: 'api/asistencia/administrativo/tipo_documentos'
    });
    return TipoDocumento;
});
