define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/pais-estudio', 'apps/legajos/form/collection/pais-estudios'],
    function (Backbone, Marionette,legajosPaisEstudio,PaisEstudio) {
        var legajosNivEstud=Backbone.Marionette.ItemView.extend({
            template: legajosPaisEstudio,
            collection: new PaisEstudio(),

            fetchPaisEstudio: function(){

                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return legajosNivEstud;

    });

