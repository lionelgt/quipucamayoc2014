define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/table-estudio', 'apps/legajos/form/collection/table-estudios'],
    function (Backbone, Marionette, TableEstudiosTemplate,Estudios) {
        var tableEstudios=Backbone.Marionette.ItemView.extend({

            template: TableEstudiosTemplate,
            collection: new Estudios(),

            fetchEstudios: function(dni,callback){
                this.collection.setUrl(dni);

                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }

        })
        return tableEstudios;

    });