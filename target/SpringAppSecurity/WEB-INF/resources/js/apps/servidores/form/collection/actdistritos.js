define(['backbone','apps/servidores/form/model/actdistrito'],function(Backbone, ActDistrito){

    var ActDistritos = Backbone.Collection.extend({
        model: ActDistrito,

        setUrl: function(idDep, idPro){
            console.log("dentro de seturl");
            this.url='rest/cas/serv/districts/'+idDep+'/'+idPro;
        }
    });
    return ActDistritos;

});

