define(['backbone', 'apps/legajos/form/model/tipo-parentesco'], function (Backbone,TipParentesco) {

    var TipoParentesco = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipParentesco,
        url: 'api/legajos/TipoParentesco'
    });
    return TipoParentesco;
});


