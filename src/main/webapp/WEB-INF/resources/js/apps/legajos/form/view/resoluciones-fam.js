define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/resoluciones-fam', 'apps/legajos/form/collection/resoluciones'],
    function (Backbone, Marionette, resolucionesFamiliar,Resoluciones) {
        var resolucionesModalFam=Backbone.Marionette.ItemView.extend({

            template: resolucionesFamiliar,
            collection: new Resoluciones(),

            fetchResolucionesFamiliar: function(codigo,numserest,callback){
                this.collection.setUrl(codigo,numserest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }

        })
        return resolucionesModalFam;

    });
