define(['backbone', 'apps/estado_condicion/form/model/tabla_pago_banco'], function (Backbone, Tabla_Pago_BancoModel) {

    var TablaPagoBanco = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Tabla_Pago_BancoModel,
        setUrl: function(cod,numest){
            this.url= 'api/estado_condicion/pagobanco/'+cod +'/'+numest;

        }
    });
    return TablaPagoBanco;
});