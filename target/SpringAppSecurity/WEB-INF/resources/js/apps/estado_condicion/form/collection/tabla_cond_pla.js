define(['backbone', 'apps/estado_condicion/form/model/tabla_cond_pla'], function (Backbone, Tabla_Cond_PlaModel) {

    var TablaCondPla = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Tabla_Cond_PlaModel,
        setUrl: function(cod,numest){
            this.url= 'api/estado_condicion/planilla/'+cod +'/'+numest;

        }
    });
    return TablaCondPla;
});


