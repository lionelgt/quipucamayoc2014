define([ 'backbone', 'marionette', 'apps/servidores/form/collection/actprovincias', 'hbs! apps/servidores/form/templates/actprovincia' ],
    function (Backbone, Marionette, ActProvincias, ActprovinciaTemplate) {

        var ActProvinciaView = Backbone.Marionette.ItemView.extend({

            template: ActprovinciaTemplate,
            collection: new ActProvincias(),

            fetchActProvincias: function(idDep,callback){
                this.collection.setUrl(idDep);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        });

        return ActProvinciaView;
    }
);


