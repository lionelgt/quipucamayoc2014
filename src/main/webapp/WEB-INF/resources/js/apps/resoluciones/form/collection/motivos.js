define(['backbone','apps/resoluciones/form/model/motivo'], function (Backbone, Motivo) {

    var Motivos= Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Motivo,
        setUrlMotiv: function(){
            console.log("seturl motivos")
            this.url= 'rest/resoluciones/dependencia/motivos';
        },

        setUrlMotivTraba: function(codser){
            console.log("seturl motivos trabas")
            this.url= 'rest/resoluciones/mostrarMotivo/'+codser;
        }
    });
    return Motivos;
});

