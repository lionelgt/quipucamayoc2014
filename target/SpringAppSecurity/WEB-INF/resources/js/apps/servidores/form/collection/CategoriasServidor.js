define(['backbone', 'apps/servidores/form/model/categoriaServidor'], function (Backbone, CategoriaServidor) {

    var CategoriasServidor = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: CategoriaServidor,
        setUrl: function(tipo){
            this.url='rest/cas/serv/categoriaservidor/'+tipo;
        }
    });
    return CategoriasServidor;
});


