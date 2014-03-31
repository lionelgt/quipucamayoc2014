define(['backbone', 'apps/estado_condicion/form/model/tabla_cond_aseg'], function (Backbone, Tabla_Cond_AsegModel) {

    var TablaCondAseg = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Tabla_Cond_AsegModel,
        setUrl: function(cod,numest){
            this.url= 'api/estado_condicion/condaseg/'+cod +'/'+numest;

        }
    });
    return TablaCondAseg;
});


