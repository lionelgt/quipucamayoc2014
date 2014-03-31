define(['backbone','marionette','hbs!apps/asistencia/administrativo/templates/horarios_nocturno', 'apps/asistencia/administrativo/collection/horarios'],
    function(Backbone, Marionette, TablaHorariosTemplate,Horarios){
        var Horarios=Backbone.Marionette.ItemView.extend({

            template:TablaHorariosTemplate,
            collection:new Horarios(),

            buscarHorarios:function(codigo_clase,tolerancia,lactancia,callback){
                this.collection.setUrlHorarios(codigo_clase,tolerancia,lactancia);
                    this.collection.on("sync",this.render,this),
                    this.collection.fetch().done(callback);
            }
        })
        return Horarios;

});