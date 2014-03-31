/**
 * Created with IntelliJ IDEA.
 * User: jean-pc
 * Date: 13/11/13
 * Time: 18:25
 * To change this template use File | Settings | File Templates.
 */
define(['backbone', 'apps/solicitudes/table/model/solicitud'], function (Backbone, Solicitudes) {

    var updateEstado = Backbone.Collection.extend({

        model: Solicitudes,

        setUrlUp: function(estado,perf){
            console.log("entrando al collection update")
            this.url= 'api/solicitudes/update/'+estado+'/'+perf;
        }

    });
    return updateEstado;
});
