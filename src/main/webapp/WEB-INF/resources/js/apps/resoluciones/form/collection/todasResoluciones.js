define(['backbone','apps/resoluciones/form/model/guardaresolucion'], function (Backbone, TodasResoluciones) {

    var Todas= Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TodasResoluciones,
        setUrlTodasResoluciones: function(anio){
            console.log("buscando todas las resoluciones por año")
            this.url= 'rest/resoluciones/findResolucion/'+anio;
        },
        setUrlTodasResolucionesxfecha: function(inicio,fin){
            console.log("buscando todas las resoluciones por fecha")
            this.url= 'rest/resoluciones/findResolucion/'+inicio+'/'+fin;
        }
    });
    return Todas;
});
