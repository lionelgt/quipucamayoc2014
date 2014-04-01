define(["app", "hbs!apps/solicitudes/table/templates/solicitudesLayout","apps/solicitudes/table/view/solicitudes-table",
    "apps/solicitudes/table/view/perfil-table","apps/solicitudes/table/model/updateestadoperfil","apps/solicitudes/table/view/update-view",
    "apps/solicitudes/table/model/rechazados","apps/solicitudes/table/model/removehistorialperfilusuario",
    "apps/solicitudes/table/model/updatehistorialperfilusuario","bootstrap"],
    function (ErzaManager, layoutTpl,SolicitudesView,PerfilesView,UpdateEstadoServidor,UpdateEstadoView,AddRechazados,RemoveUsuarioPerfil, UpdateUsuarioPerfil) {
    ErzaManager.module('SolicitudesApp.List.View', function (View, ErzaManager, Backbone, Marionette, $, _) {

        var dependencyId;
        var dni;
        var  profileState;
        var observation;

        View.Layout = Marionette.Layout.extend({
            template: layoutTpl,

            solicitudesView : new SolicitudesView(),
            perfilView: new  PerfilesView(),
            updateView: new UpdateEstadoView(),


            IdDni:0,
            perfil:0,
            //rechazadosDatosView : new RechazadosDatosView(),

            estado:0,


            regions: {
                tablaSolicitudes: "#tabla-solicitudes",
                tablaPerfil: "#serv-table-modal"
               // ventanaRechazo: "#rechazo-modal"
            },

            //eventos dentro de layout
            events: {
                "click .button-action" : "rechazo_modal" ,
                "click #boton-aceptar": "aceptar_rechazo" ,    //# porque es id
                "click .boton-cancelar":"cancelar_rechazo",    //. porque es class
                "keyup :input#obs": 'changeObs',
                "click #asignar" : "seleccion_asignar",
                "click #aceptar" : "seleccion_aceptar",
                "click #cambiar-perfil":"cambiaPerfil"
            },

            onRender: function(){
                this.initialFetch();
                this.tablaSolicitudes.show(this.solicitudesView) ;
                this.tablaPerfil.show(this.perfilView);
            },

            initialize: function () {

                //initialize model
                this.model = new Backbone.Model();


                this.model.set({
                    "updateestadoperfil": new UpdateEstadoServidor(),
                    "rechazados" : new AddRechazados(),
                    "removehistorialperfilusuario": new RemoveUsuarioPerfil(),
                    "updatehistorialperfilusuario": new UpdateUsuarioPerfil()
                });
            },

            initialFetch: function(){
                var self=this;
                console.log(self.estado);
                var fetch=this.solicitudesView.fetchSolicitudes();
                var fetch2=this.perfilView.fetchPerfiles();
            },

            rechazo_modal:function(e){


                var clickedElement=$(e.currentTarget)
                dependencyId = clickedElement.attr('data');
                profileState= clickedElement.attr('data1');
                dni = clickedElement.attr('data2');
                $('#msg').hide();
                $("#modal-rechazado").modal();

            },

            cancelar_rechazo:function(){
                $("#modal-rechazado").blur;
            } ,

            disableButton:function(a){
                if(a==""){
                    return "disabled";
                }else{
                    return "";
                }
            } ,

            aceptar_rechazo:function(){


                var observation = $('#obs').val();

                if(profileState==0){


                    this.model.get("rechazados").set({

                        "dni": dni,
                        "ud": dependencyId,
                        "modcod": 24,
                        "obs": observation
                    })

                    this.model.get("rechazados").url = 'api/solicitudes/reject/add';

                    var self_s = this.model.get("rechazados").save({}, {wait: true});



                    self_s.done(function () {

                        console.log("done - datos no enviado");

                    });

                    self_s.fail(function () {

                        console.log("fail - datos enviados a la tabla rechazados");
                    });


                    this.model.get("removehistorialperfilusuario").set({

                        "dni": dni,
                        "moduleCode": 24
                    })
                    this.model.get("removehistorialperfilusuario").url='api/solicitudes/reject/remove/'+dni+'/'+24;

                    var sel_s = this.model.get("removehistorialperfilusuario").save({}, {wait: true});

                    var sel=this;

                    sel_s.done(function (){
                        console.log("done - datos no eliminados");
                    });

                    sel_s.fail(function (){
                        console.log("fail - datos eliminados de la tabla tb_hist_usu_perf ")
                    });

                }     else {
                    this.model.get("updatehistorialperfilusuario").set({

                        "dni": dni,
                        "modulecode": 24
                  })

                    //aqui se pone get y en RechazadosController post para el caso de update
                    this.model.get("updatehistorialperfilusuario").url='api/solicitudes/reject/update/'+dni+'/'+24;
                    console.log("el dni es: "+dni);
                    var sels_s = this.model.get("updatehistorialperfilusuario").save({}, {wait: true});

                    var sels=this;

                    sels_s.done(function (){
                        console.log("done - no actualizado");
                    });

                    sels_s.fail(function (){
                        console.log("fail - actualizado con exito")
                    });

                    /************PROBANDO INSERT EN RECHAZADOS CUANDO ESTADO=3 *************/
                    this.model.get("rechazados").set({

                        "dni": dni,
                        "ud": dependencyId,
                        "modcod": 24,
                        "obs": observation
                    })

                    this.model.get("rechazados").url = 'api/solicitudes/reject/add';

                    var seld_s = this.model.get("rechazados").save({}, {wait: true});

                    var seld = this;

                    seld_s.done(function () {

                        console.log("done - datos no enviado");

                    });

                    seld_s.fail(function () {

                        console.log("fail - datos enviados a la tabla rechazados");
                    });
                    $("#modal-rechazado").hide();
                }



            },
            fun_asig_perf:function(ev){

                var self = this;

                var element = $(ev.currentTarget);
                var dni=element.parent().parent().attr('id');
                console.log(dni);

                this.model.get("updateestadoperfil").set({
                    "dni":dni
                });

                this.model.get("updateestadoperfil").url = "api/solicitudes/updateEstado";

                var self_s = this.model.get("updateestadoperfil").save({}, {
                    wait: true
                });

                self_s.done(function(model,resp,opt){

                });

                self_s.fail(function(model,resp,opt){

                });
            },
            changeObs:function(e){

                var inputobs = $('#obs').val();
                if(inputobs==""){
                    $('#msg').show();
                    $("#boton-aceptar").attr('disabled','disabled');
                }
                else{
                    $('#msg').hide();
                    $("#boton-aceptar").removeAttr('disabled','disabled');
                }

            } ,
            seleccion_aceptar:function(ev){

                $('#serv-table-modal').modal('hide');


                this.solicitudesView.fetchSolicitudes();

            },

            cambiaPerfil:function(ev){
//

                var clickedElement=$(ev.currentTarget);
                var nroPerf=clickedElement.parent().parent().attr('id');



                console.log(nroPerf)
                this.perfil=nroPerf;

                $("#aceptar").prop('disabled', false);

                this.updateView.fetchUpdate(this.IdDni,this.perfil);




                var temp_help = $("#help_sin_cas");

                temp_help.show();

                temp_help.text("Usuario "+this.IdDni+" fue asignado");


            },

            seleccion_asignar :function(ev){


                var temp_help = $("#help_sin_cas");
                temp_help.hide();


                var element = $(ev.currentTarget);
                var dni=element.parent().parent().attr('id');


                this.IdDni=dni;


                $('#serv-table-modal').modal();


                $("#aceptar").prop('disabled', true);

            }



        });
    });

    return ErzaManager.SolicitudesApp.List.View;
});