define([ 'backbone', 'marionette','hbs!apps/asistencia/administrativo/templates/tabla_dependencias', 'apps/asistencia/administrativo/collection/servidores'],
    function (Backbone, Marionette, TablaDependenciaTemplate,Dependencias) {
        var dependenciaModal=Backbone.Marionette.ItemView.extend({

            template: TablaDependenciaTemplate,
            collection: new Dependencias(),

            TodasDependencias: function(){
                this.collection. setUrlTodosServi()
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return dependenciaModal;

    });
