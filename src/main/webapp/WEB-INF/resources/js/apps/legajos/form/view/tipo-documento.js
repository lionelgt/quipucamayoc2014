define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/tipo-documento', 'apps/legajos/form/collection/tipo-documentos'],
    function (Backbone, Marionette,TipoDocumento,TipDocument) {
        var legajosTipDocument=Backbone.Marionette.ItemView.extend({
            template: TipoDocumento,
            collection: new TipDocument(),


            getTipDocument: function(){
                //this.collection.setUrl();
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done();

            }

        })
        return legajosTipDocument;

    });
