define([ 'backbone', 'marionette', 'apps/servidores/form/collection/nacdistritos', 'hbs! apps/servidores/form/templates/nacdistrito' ],
    function (Backbone, Marionette,NacDistritos, nacdistritoTemplate) {

        var NacDistritoView = Backbone.Marionette.ItemView.extend({

            template: nacdistritoTemplate,
            collection: new NacDistritos(),

            fetchNacDistritos: function(idDep,idPro,callback){
                this.collection.setUrl(idDep, idPro);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }

        });

        return NacDistritoView;
    }
);

