define(['backbone', 'apps/planillas/list/model/servidorCAS'], function (Backbone, ServidorCAS) {

    var ServidoresCAS = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ServidorCAS,

        setUrl: function(anio, mes, unidadId, planilla){
            this.url= 'api/servidoresCAS/unidades/'+unidadId+'/anio/'+anio+'/mes/'+mes+'/planillasCAS/'+planilla;
        }
        /*        ,
         fetch: function(options) {
         this.trigger('fetch', this, options);
         return Backbone.Collection.prototype.fetch.call(this, options);
         }*/

    });
    return ServidoresCAS;
});
