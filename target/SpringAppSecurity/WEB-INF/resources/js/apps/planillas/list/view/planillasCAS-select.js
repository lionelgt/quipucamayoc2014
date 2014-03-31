define([ 'backbone', 'marionette', 'apps/planillas/list/collection/planillasCAS', 'hbs!apps/planillas/list/templates/planillasCAS-select' ],
    function (Backbone, Marionette, PlanillasCAS, planillasCASSelectTemplate) {

        var PlanillasCASSelectView = Backbone.Marionette.ItemView.extend({
            template: planillasCASSelectTemplate,
            collection: new PlanillasCAS(),
            fetchPlanillasCAS: function(anio, mes, unidadId, planilla){
                this.collection.setUrl(anio, mes, unidadId);
                this.collection.on("sync", this.render, this);
                var fetch=this.collection.fetch();
                return fetch;
            }
        });

        return PlanillasCASSelectView;
    }
);