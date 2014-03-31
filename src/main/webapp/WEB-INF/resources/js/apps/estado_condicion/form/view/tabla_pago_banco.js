define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/tabla_pago_banco', 'apps/estado_condicion/form/collection/tabla_pago_banco'],
    function (Backbone, Marionette, Tabla_Pago_BancoTemp, Tabla_Pago_BancoColl) {
        var TablaPagoBanco=Backbone.Marionette.ItemView.extend({

            template: Tabla_Pago_BancoTemp,
            collection: new Tabla_Pago_BancoColl(),


            fetchTablaPagoBanco: function(cod,numest,callback){
                this.collection.setUrl(cod,numest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return TablaPagoBanco;

    });
