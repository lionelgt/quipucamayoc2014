define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/nivel-estudio', 'apps/legajos/form/collection/nivel-estudios'],
    function (Backbone, Marionette,legajosNivEstudio,NivEstudio) {
        var legajosNivEstud=Backbone.Marionette.ItemView.extend({
            template: legajosNivEstudio,
            collection: new NivEstudio(),

            fetchNivelEstudio: function(tipo,callback){
                this.collection.setUrl(tipo);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return legajosNivEstud;

    });

