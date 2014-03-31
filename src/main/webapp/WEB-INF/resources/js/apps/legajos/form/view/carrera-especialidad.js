define([ 'backbone', 'marionette','hbs!apps/legajos/form/templates/carrera-especialidad'],
    function (Backbone, Marionette,legajosTipEstudio) {

        var legajosTipEstud=Backbone.Marionette.ItemView.extend({
            template: legajosTipEstudio
        })
        return legajosTipEstud;

    });
