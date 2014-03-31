define(['backbone', 'apps/estado_condicion/form/model/tabla_cond_lab'], function (Backbone, Tabla_Con_LabModel) {

    var TablaCondLab = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Tabla_Con_LabModel,
        setUrl: function(cod,numest){
            this.url= 'api/estado_condicion/condlab/'+cod +'/'+numest;

        }
    });
    return TablaCondLab;
});


