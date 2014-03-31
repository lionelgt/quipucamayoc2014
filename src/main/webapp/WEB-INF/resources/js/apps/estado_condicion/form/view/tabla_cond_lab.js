define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/tabla_cond_lab', 'apps/estado_condicion/form/collection/tabla_cond_lab'],
    function (Backbone, Marionette, Tabla_Cond_LabTemp, Tabla_Cond_LabColl) {


        var TablaCondLab=Backbone.Marionette.ItemView.extend({

            template: Tabla_Cond_LabTemp,
            collection: new Tabla_Cond_LabColl(),


            fetchTablaCondLab: function(cod,numest,callback){
                this.collection.setUrl(cod,numest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return TablaCondLab;

    });

