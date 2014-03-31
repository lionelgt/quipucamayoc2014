define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/tipo-beneficio', 'apps/legajos/form/collection/tipo-beneficio'],
    function (Backbone, Marionette,tipoBenecicoFam,TipBenef) {
        var legajosTipoBeneficio=Backbone.Marionette.ItemView.extend({
            template: tipoBenecicoFam,
            collection: new TipBenef(),


            getTipoBeneficio: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return legajosTipoBeneficio;

    });
