define([ 'backbone', 'marionette','hbs!apps/asistencia/administrativo/templates/tabla_servidores', 'apps/asistencia/administrativo/collection/servidores'],
    function (Backbone, Marionette, TablaServidoresTemplate,Servidores) {
        var servidoresModal=Backbone.Marionette.ItemView.extend({

            template: TablaServidoresTemplate,
            collection: new Servidores(),

            TodosServidores: function(){
                this.collection. setUrlTodosServi()
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return servidoresModal;

    });