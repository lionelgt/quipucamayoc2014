/**
 * Created with IntelliJ IDEA.
 * User: jean-pc
 * Date: 13/11/13
 * Time: 18:27
 * To change this template use File | Settings | File Templates.
 */

define(['backbone'], function (Backbone) {

    var Perfiles = Backbone.Model.extend({
        className: 'edu.quipu.rrhh.models.Perfil'
    });

    return Perfiles;
});