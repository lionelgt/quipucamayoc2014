define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/LegajosTipEstudio', 'apps/legajos/form/collection/legajosTipEstudio'],
    function (Backbone, Marionette,legajosTipEstudio,TipEstudio) {
        var legajosTipEstud=Backbone.Marionette.ItemView.extend({
            template: legajosTipEstudio,
            collection: new TipEstudio(),


            getTipoEstudio: function(callback){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return legajosTipEstud;

    });
