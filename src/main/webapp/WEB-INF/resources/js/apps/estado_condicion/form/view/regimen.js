define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/regimen', 'apps/estado_condicion/form/collection/regimen'],
    function (Backbone, Marionette, RegimenTemp, RegimenColl) {
        var Regimen=Backbone.Marionette.ItemView.extend({

            template: RegimenTemp,
            collection: new RegimenColl(),


            getRegimen: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return Regimen;

    });
