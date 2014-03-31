define(['backbone', 'apps/legajos/form/model/tipo-tiempo-servicio'], function (Backbone, TipoTiempoServicio) {

    var NivelEstud = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipoTiempoServicio,
        setUrl: function(tipo){
            this.url='api/legajos/tipotiemposervicio/'+tipo;
        }
    });
    return NivelEstud;
});
