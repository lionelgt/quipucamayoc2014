define(['backbone', 'apps/planillas/list/model/planillaCAS'], function (Backbone, PlanillaCAS) {

    var PlanillasCAS = Backbone.Collection.extend({

        model: PlanillaCAS,
        setUrl: function(anio, mes, unidadId){
            this.url= 'api/planillasCAS/unidades/'+unidadId+'/anio/'+anio+'/mes/'+mes;
        }

    });
    return PlanillasCAS;
});