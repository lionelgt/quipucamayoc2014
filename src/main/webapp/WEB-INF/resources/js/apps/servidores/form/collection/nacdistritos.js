define(['backbone','apps/servidores/form/model/nacdistrito'],function(Backbone, NacDistrito){

    var NacDistritos = Backbone.Collection.extend({
        model: NacDistrito,

        setUrl: function(idDep, idPro){
            console.log("dentro de seturl");
            this.url='rest/cas/serv/districts/'+idDep+'/'+idPro;
        }
    });
    return NacDistritos;

});
