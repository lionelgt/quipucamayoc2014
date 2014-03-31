define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/resoluciones-modal', 'apps/legajos/form/collection/resoluciones'],
    function (Backbone, Marionette, resolucionesModalTemplate,Resoluciones) {
        var resolucionesModal=Backbone.Marionette.ItemView.extend({

            template: resolucionesModalTemplate,
            collection: new Resoluciones(),

            fetchResoluciones: function(codigo,numserest,callback){
                this.collection.setUrl(codigo,numserest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }

        })
        return resolucionesModal;

    });