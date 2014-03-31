define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/tipo-tiempo-servicio','apps/legajos/form/collection/tipo-tiempo-servicios'],
    function (Backbone, Marionette,tipoTiempoServicio,TipoTiempoServicio) {
        var tipoTiempoServicio=Backbone.Marionette.ItemView.extend({
            template: tipoTiempoServicio,
            collection: new TipoTiempoServicio(),


            fetchTipots: function(tipo,callback){
                this.collection.setUrl(tipo);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return tipoTiempoServicio;

    });
