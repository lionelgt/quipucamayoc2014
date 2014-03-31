define(['backbone','apps/servidores/form/model/actdepartamento'], function(Backbone, ActDepartamento){
    var ActDepartamentos = Backbone.Collection.extend({
        model: ActDepartamento,
        url: 'rest/cas/serv/departments'
    });
    return ActDepartamentos;
});

