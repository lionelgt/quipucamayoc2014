define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/tabla_dep', 'apps/estado_condicion/form/collection/tabla_dep'],
    function (Backbone, Marionette, Tabla_DepTemp, Tabla_DepColl) {
        var TablaDep=Backbone.Marionette.ItemView.extend({

            template: Tabla_DepTemp,
            collection: new Tabla_DepColl(),


            fetchTablaDep: function(cod,numest,callback){
                this.collection.setUrl(cod,numest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return TablaDep;

    });

