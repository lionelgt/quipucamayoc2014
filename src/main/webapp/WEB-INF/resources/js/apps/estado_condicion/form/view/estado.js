define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/estado', 'apps/estado_condicion/form/collection/estado'],
    function (Backbone, Marionette, EstadoTemp, EstadoColl) {
        var TipoEstado=Backbone.Marionette.ItemView.extend({

            template: EstadoTemp,
            collection: new EstadoColl(),


            getTipoEstado: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return TipoEstado;

    });