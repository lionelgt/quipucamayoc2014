define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/tipo-pago', 'apps/legajos/form/collection/tipo-pagos'],
    function (Backbone, Marionette,TipoPago,TipPago) {
        var legajosTipoPago=Backbone.Marionette.ItemView.extend({
            template: TipoPago,
            collection: new TipPago(),


            getTipPago: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return legajosTipoPago;

    });
