define(['backbone','marionette','hbs!apps/asistencia/administrativo/templates/tipo_documentos','apps/asistencia/administrativo/collection/tipo_documentos'],
    function(Backbone,Marionette,TipoDocumentoTemplate,TiposDocumentos){
        var Tipodocumentos=Backbone.Marionette.ItemView.extend({
             template:TipoDocumentoTemplate,
             collection:new TiposDocumentos(),

            getTiposDocumentos:function(callback){
                this.collection.on("sync",this.render,this);
                this.collection.fetch().done(callback)
            }
        })
        return Tipodocumentos;

});