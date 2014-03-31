define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/idioma-estudiado', 'apps/legajos/form/collection/idioma-estudiado'],
    function (Backbone, Marionette,IdiomaEstudio,IdiomaEstudiado,$) {
        var IdiomaEstudiado=Backbone.Marionette.ItemView.extend({
            template: IdiomaEstudio,
            collection: new IdiomaEstudiado(),

            fetchIdiomasEstudios: function(callback){
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return IdiomaEstudiado;

    });

