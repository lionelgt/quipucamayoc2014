define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/estadoafp', 'apps/estado_condicion/form/collection/estadoafp'],
    function (Backbone, Marionette, EstadoAfpTemp, EstadoAfpColl) {
        var EstadoAfp=Backbone.Marionette.ItemView.extend({

            template: EstadoAfpTemp,
            collection: new EstadoAfpColl(),


            getEstadoAfp: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return EstadoAfp;

    });
