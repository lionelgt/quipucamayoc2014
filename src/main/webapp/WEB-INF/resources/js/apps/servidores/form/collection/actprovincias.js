define(['backbone','apps/servidores/form/model/actprovincia'],function(Backbone, ActProvincia){

    var ActProvincias = Backbone.Collection.extend({
        model: ActProvincia,

        setUrl: function(idDep){
            this.url='rest/cas/serv/provincies/'+idDep;
        }
    });
    return ActProvincias;

});