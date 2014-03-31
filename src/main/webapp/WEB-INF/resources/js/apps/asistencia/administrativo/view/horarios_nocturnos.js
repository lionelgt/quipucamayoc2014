define(['backbone','marionette','hbs!apps/asistencia/administrativo/templates/horarios_nocturno', 'apps/asistencia/administrativo/collection/horarios_nocturno'],
    function(Backbone, Marionette,HorariosNoctTemplate,HorariosNoct){
        var Horarios=Backbone.Marionette.ItemView.extend({

            template:HorariosNoctTemplate,
            collection:new HorariosNoct(),

            buscarHorariosNoct:function(codigo_clase,callback){
                this.collection.setUrlHorarios(codigo_clase);
                this.collection.on("sync",this.render,this),
                    this.collection.fetch().done(callback);
            }
        })
        return Horarios;

    });