define(['backbone','apps/servidores/form/model/nacdepartamento'], function(Backbone, NacDepartamento){
    var NacDepartamentos = Backbone.Collection.extend({
        model: NacDepartamento,
        url: 'rest/cas/serv/departments'
    });
    return NacDepartamentos;
});
