define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/table-resoluciones', 'apps/legajos/form/collection/table-resoluciones'],
    function (Backbone, Marionette, TableResolucionesTemplate,Resoluciones) {
        var tableResoluciones=Backbone.Marionette.ItemView.extend({

            template: TableResolucionesTemplate,
            collection: new Resoluciones(),

            fetchResol: function(dni,numserest,callback){
                this.collection.setUrl(dni,numserest);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }

        })
        return tableResoluciones;

    });