define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/table-familiares', 'apps/legajos/form/collection/table-familiares'],
    function (Backbone, Marionette, TableFamiliaresTemplate,Familiares) {
        var tableFamiliares=Backbone.Marionette.ItemView.extend({

            template: TableFamiliaresTemplate,
            collection: new Familiares(),

            fetchFamiliares: function(dni,callback){
                this.collection.setUrl(dni);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        })
        return tableFamiliares;

    });
