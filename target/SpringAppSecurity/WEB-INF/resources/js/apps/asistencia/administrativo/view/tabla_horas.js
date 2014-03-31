define(['backbone','marionette','hbs!apps/asistencia/administrativo/templates/select_horario', 'apps/asistencia/administrativo/collection/select_horario'],
    function(Backbone, Marionette,HorariosTemplate,SelectHorario){
        var Horarios=Backbone.Marionette.ItemView.extend({

            template:HorariosTemplate,
            collection:new SelectHorario(),

            selectHorarios:function(codigoHor){
                this.collection.setUrlHorarios(codigoHor);
                this.collection.on("sync",this.render,this),
                    this.collection.fetch().done();
            }
        })
        return Horarios;

    });