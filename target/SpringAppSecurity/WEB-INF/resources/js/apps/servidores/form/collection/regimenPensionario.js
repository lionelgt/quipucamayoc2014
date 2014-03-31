define(['backbone', 'apps/servidores/form/model/regimenPensionario'], function (Backbone, RegimenPensionario) {

    var RegimenensPensionarios = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: RegimenPensionario,
        url: 'rest/cas/serv/regimenpensionario'

    });
    return RegimenensPensionarios;
});
