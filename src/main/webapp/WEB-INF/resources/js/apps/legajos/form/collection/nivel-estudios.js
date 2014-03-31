define(['backbone', 'apps/legajos/form/model/nivel-estudio'], function (Backbone, NivEstudio) {

    var NivelEstud = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: NivEstudio,
        setUrl: function(tipo){
            this.url='api/legajos/tipo/'+tipo;
        }
    });
    return NivelEstud;
});
