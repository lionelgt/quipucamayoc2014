define(['backbone', 'apps/legajos/form/model/idioma-estudiado'], function (Backbone, IdiomaEstudio) {

    var IdiomaEstud = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: IdiomaEstudio,
        url: 'api/legajos/idiomaEstudio'
    });
    return IdiomaEstud;
});
