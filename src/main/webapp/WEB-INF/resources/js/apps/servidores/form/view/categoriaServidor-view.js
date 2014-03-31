define([ 'backbone', 'marionette', 'apps/servidores/form/collection/CategoriasServidor', 'hbs!apps/servidores/form/templates/categoriaServidor'],
    function (Backbone, Marionette, ServidorCategorias, servidorcategoriasTemplate) {

        var CategoriasServidorView = Backbone.Marionette.ItemView.extend({

            // Define view template
            template: servidorcategoriasTemplate,
            collection : new ServidorCategorias(),


            fetchCategoria: function(tipo,callback){
                this.collection.setUrl(tipo);
                this.collection.on("sync", this.render, this);
                this.collection.fetch().done(callback);

            }

        });

        return CategoriasServidorView;
    }
);
