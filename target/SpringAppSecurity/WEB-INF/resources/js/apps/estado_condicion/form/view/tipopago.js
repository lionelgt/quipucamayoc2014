define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/tipopago', 'apps/estado_condicion/form/collection/tipopago'],
    function (Backbone, Marionette, TipoPagoTemp, TipoPagoColl) {
        var TipoPago=Backbone.Marionette.ItemView.extend({

            template: TipoPagoTemp,
            collection: new TipoPagoColl(),


            getTipoPago: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return TipoPago;

    });
