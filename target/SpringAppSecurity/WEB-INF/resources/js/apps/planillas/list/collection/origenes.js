define(['backbone', 'apps/planillas/list/model/origen'], function (Backbone, Origen) {

    var Unidades = Backbone.Collection.extend({

        model: Origen,
        setUrl: function(unidadId){
            this.url= 'api/unidades/'+unidadId+'/origenes';
        }

    });
    return Unidades;
});