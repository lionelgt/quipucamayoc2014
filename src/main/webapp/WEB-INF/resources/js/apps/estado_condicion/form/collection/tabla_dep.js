define(['backbone', 'apps/estado_condicion/form/model/tabla_dep'], function (Backbone, Tabla_DepModel) {

    var TablaDep = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Tabla_DepModel,
        setUrl: function(cod,numest){
            this.url= 'api/estado_condicion/dependencia/'+cod +'/'+numest;

        }
    });
    return TablaDep;
});


