define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/tabla_cond_aseg', 'apps/estado_condicion/form/collection/tabla_cond_aseg'],
    function (Backbone, Marionette, Tabla_Cond_AsegTemp, Tabla_Cond_AsegColl) {
        var TablaCondAseg=Backbone.Marionette.ItemView.extend({

            template: Tabla_Cond_AsegTemp,
            collection: new Tabla_Cond_AsegColl(),


            fetchTablaCondAseg: function(cod,numest,callback){
                this.collection.setUrl(cod,numest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return TablaCondAseg;

    });

