define(['backbone', 'apps/legajos/form/model/table-estudio'], function (Backbone, Estudio) {

    var Estudios = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Estudio,
        setUrl: function(dni){
            this.url='api/legajos/dni/'+dni;
        }
    });
    return Estudios;
});