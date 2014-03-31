define(['backbone','apps/servidores/form/model/nacprovincia'],function(Backbone, NacProvincia){

    var NacProvincias = Backbone.Collection.extend({
        model: NacProvincia,

        setUrl: function(idDep){
            this.url='rest/cas/serv/provincies/'+idDep;
        }
    });
    return NacProvincias;

});