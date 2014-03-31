define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/tabla_cond_pla', 'apps/estado_condicion/form/collection/tabla_cond_pla'],
    function (Backbone, Marionette, Tabla_Cond_PlaTemp, Tabla_Cond_PlaColl) {
        var TablaCondPla=Backbone.Marionette.ItemView.extend({

            template: Tabla_Cond_PlaTemp,
            collection: new Tabla_Cond_PlaColl(),


            fetchTablaCondPla: function(cod,numest,callback){
                this.collection.setUrl(cod,numest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return TablaCondPla;

    });

