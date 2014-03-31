define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/tipo', 'apps/estado_condicion/form/collection/tipo'],
    function (Backbone, Marionette, TipoTemp, TipoColl) {
        var Tipo=Backbone.Marionette.ItemView.extend({

            template: TipoTemp,
            collection: new TipoColl(),


            getTipo: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return Tipo;

    });
