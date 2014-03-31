define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/estado-civil', 'apps/legajos/form/collection/estado-civil'],
    function (Backbone, Marionette,legajosEstCivil,EstCivil) {
        var legajosEstadoCivil=Backbone.Marionette.ItemView.extend({
            template: legajosEstCivil,
            collection: new EstCivil(),


            getEstadoCivil: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return legajosEstadoCivil;

   });
