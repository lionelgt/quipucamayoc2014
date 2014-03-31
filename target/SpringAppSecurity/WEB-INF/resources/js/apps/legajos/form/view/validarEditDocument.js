define([ 'jquery', 'backbone', 'marionette', 'hbs!apps/legajos/form/templates/validacion','apps/legajos/form/collection/validacionEditDocumento'],
    function ($, Backbone, Marionette,template, validacion) {

        var existeEditDocumento = Backbone.Marionette.ItemView.extend({
            template: template,
            collection: new validacion(),

            fetchEditdocumento: function(numdoc,carfamsec,callback){

                this.collection.setUrlEditvalidacion(numdoc,carfamsec);

                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }
        });
        return existeEditDocumento;
    }
);


