define(['backbone'], function (Backbone) {

    var ServidorLaboral = Backbone.Model.extend({
        className: 'edu.quipu.rrhh.models.ServidorLaboral',

        validation: {
            cod: {
                required: true,
                msg: 'Campo requerido.'
            },
            regLab: {
                required: true,
                msg: 'Campo requerido.'
            }
        }
    });

    return ServidorLaboral;
});