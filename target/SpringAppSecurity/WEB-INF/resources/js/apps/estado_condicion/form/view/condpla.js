define([ 'backbone', 'marionette','hbs!apps/estado_condicion/form/templates/condpla', 'apps/estado_condicion/form/collection/condpla'],
    function (Backbone, Marionette, CondPlaTemp, CondPlaColl) {
        var CondPla=Backbone.Marionette.ItemView.extend({

            template: CondPlaTemp,
            collection: new CondPlaColl(),


            getCondPla: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return CondPla;

    });
