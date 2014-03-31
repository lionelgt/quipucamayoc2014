define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/tipo-parentesco', 'apps/legajos/form/collection/tipo-parentescos'],
    function (Backbone, Marionette,TipoParentesco,TipParentesco) {
        var legajosTipoParentesco=Backbone.Marionette.ItemView.extend({
            template: TipoParentesco,
            collection: new TipParentesco(),


            getTipParentesco: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return legajosTipoParentesco;

    });
