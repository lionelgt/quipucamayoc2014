define(['backbone', 'apps/legajos/form/model/table-familiar'], function (Backbone,Familiar) {

    var Familiar = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Familiar,
        setUrl: function(dni){
            this.url='api/legajos/cargafamiliar/'+dni;
        }
    });
    return Familiar;
});
