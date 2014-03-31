define([ 'backbone', 'marionette', 'apps/servidores/form/collection/nacprovincias', 'hbs! apps/servidores/form/templates/nacprovincia' ],
    function (Backbone, Marionette, NacProvincias, NacprovinciaTemplate) {

        var NacProvinciaView = Backbone.Marionette.ItemView.extend({

            template: NacprovinciaTemplate,
            collection: new NacProvincias(),

            fetchNacProvincias: function(idDep,callback){
                this.collection.setUrl(idDep);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        });

        return NacProvinciaView;
    }
);

