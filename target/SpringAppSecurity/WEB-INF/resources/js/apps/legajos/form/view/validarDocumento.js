define([ 'jquery', 'backbone', 'marionette', 'hbs!apps/legajos/form/templates/validacion','apps/legajos/form/collection/validacionDocumento'],
    function ($, Backbone, Marionette,template, validacion) {

        var existeDocumento = Backbone.Marionette.ItemView.extend({
            template: template,
            collection: new validacion(),

            fetchdocumento: function(numdoc,callback){

                this.collection.setUrlvalidacion(numdoc);

                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);
            }
        });
        return existeDocumento;
    }
);


