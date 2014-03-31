define(['backbone'], function (Backbone) {

    var NacimientoPais = Backbone.Model.extend({
        defaults: {
            name: 'default'
        }
    });

    return NacimientoPais;
});
