/**
 * Created with IntelliJ IDEA.
 * User: jean-pc
 * Date: 13/11/13
 * Time: 18:24
 * To change this template use File | Settings | File Templates.
 */
define(['backbone', 'apps/solicitudes/table/model/perfil'], function (Backbone, Perfil) {

    var Perfiles = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Perfil,
        url: 'api/solicitudes/perfiles'
    });
    return Perfiles;
});