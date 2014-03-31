define([ 'backbone', 'marionette', 'apps/servidores/form/collection/actdistritos', 'hbs! apps/servidores/form/templates/actdistrito' ],
    function (Backbone, Marionette,ActDistritos, actdistritoTemplate) {

        var ActDistritoView = Backbone.Marionette.ItemView.extend({

            template: actdistritoTemplate,
            collection: new ActDistritos(),

            fetchActDistritos: function(idDep,idPro,callback){
                this.collection.setUrl(idDep, idPro);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }

        });

        return ActDistritoView;
    }
);


