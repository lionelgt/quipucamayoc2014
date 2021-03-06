define(["app","hbs!apps/resoluciones/form/templates/ResolucionGeneralLayout",'lib/bootstrap-datepicker',"apps/resoluciones/form/view/resoluciones-view","apps/resoluciones/form/view/motivos-view",
    "apps/resoluciones/form/view/dependencias-view","apps/resoluciones/form/view/servidor-view","apps/resoluciones/form/view/trabajador-view","apps/resoluciones/form/view/updateServidor-view",
    "apps/resoluciones/form/view/todasResoluciones-view","apps/resoluciones/form/view/tablaActuaResol-view","apps/resoluciones/form/view/tablaMotivos-view","apps/resoluciones/form/view/addMotivos-view",
    "apps/resoluciones/form/view/mostrarMotivosTraba-view","apps/resoluciones/form/view/actualizarResoServi-view","apps/resoluciones/form/view/actualizarResoMoti-view","apps/resoluciones/form/model/guardaresolucion",
    "apps/resoluciones/form/model/guardarServidor","apps/resoluciones/form/model/updateServidor",
    "apps/resoluciones/form/model/deleteServidor", "apps/resoluciones/form/model/guardarMotivoTrabajador","apps/resoluciones/form/model/deleteMotivo","apps/resoluciones/form/view/validarResolucion",
    "lib/jquery.dataTables.min","lib/avgrund","bootstrap"],
    function (ErzaManager, layoutTpl,datePicker,ResolucionView,MotivoView,DepenView,ServiView,TrabaView,UpdateServiView,TodasResolucionesView,TablaActuaResolView,TablaMotivosTrabaView,TablaMotivoAddView,MostrarMotivoTrabaView, ActualizarResoServiView, ActualizarResoMotiView, addResolucion,
              addServidor,updateServidor,deleteServidor,addMotivoTrabajador,BorrarMotivoTraba,ValidarExisteResolucion) {
        ErzaManager.module('ResolucionApp.List.View', function (View, ErzaManager, Backbone, Marionette, $, _) {

            View.Layout = Marionette.Layout.extend({
                template: layoutTpl,

                resoluView : new ResolucionView(),

                depenView: new DepenView(),
                motivossView: new  MotivoView(),
                serviView:new ServiView(),
                trabaView: new TrabaView(),
                updateServiView: new UpdateServiView(),
                todasResolucionesView: new TodasResolucionesView(),
                tablaActuaResol: new TablaActuaResolView(),
                tablaMotivos: new addMotivoTrabajador(),
                tablaMotivoTraba:new TablaMotivosTrabaView(),
                tablaMotivoadd:new TablaMotivoAddView(),
                mostrarMotivoTrabaView:new MostrarMotivoTrabaView(),
                actualizarResoServiView : new ActualizarResoServiView() ,
                actualizarResoMotiView: new ActualizarResoMotiView(),
                validarExisteResolucion:new ValidarExisteResolucion(),



                 tipo: 0,  //var para determinar dependencias
                 tipoResolucion:0, //se guarda la abreviatura del tipo de resolucion
                 nroR:0,     //se guarda el nro de la  resolucion
                 anioR:0,    //se guarda el anio de la resolucion
                 anioR2:0,
                elimResol:null,
                 tipoDependencia:0,   //se guarda la abreviatura de la dependencia
                 tipoResolu:0,
                 fechaExp:0,
                 fechaIni:0,
                 fechaFin:0,
                 motivo:0, //se guarda el motivo
                descriObli:0, //se guarda la descrip obligatoria
                descriOp:0, //se guarda la descrip opcional
                auxbuscador:0, //para la tarea de buscar resoluciones
                resolCompleta:0, //nombre total de una resolucion
                dniTable:0, //para capturar el dni de la tabla de servidorResolucion
                estadoTraba:0, //estado del trabajador
                anioModal:0, //varaible que sirve para actualizar resoluciones
                IdResolucion:0, //el codigo unico de la resolucion, sivve para updatear
                band:0, //determina si se guarda o se updatea
                trabajadoresSeleccionados:[ ],
                estadosTraba:[ ],
                codeAntiguo:[ ],
                motivosSeleccionados: [ ],
                codMotivos: [],
                fec1busc:null,
                fec2busc:null,
                numero_click:1,
                idMotivo:0,
                btnasignar:2,
                del_nroresol:null,
                del_dni:null,
                del_num_ser:null,
                del_cod_mot:"",
                modal_motivo:0,

                regions: {
                    comboResolucion: "#div_resoluc_est",
                    comboDepen: "#div_depen_est",
                    comoboMotivo: "#div_motivi_est",
                    tableServi: "#serv-table-modal",
                    tableUpdateReso: "#serv-table-modal2",
                    deleteResoluion:"#serv-table-modal6",
                    tablaTraba: "#tabla-resoluciones",
                    tablaasociaciondirecta:"#tabla-serv-asociados",
                    tablaTodasResolucionesAnio: "#tabla-totalResoluciones",
                    tableMotivos:"#serv-table-modal3",
                    addMotivos:"#serv-table-modal5",
                    mostrarMotivoTraba:"#serv-table-modal4"

                },

                //eventos dentro de layout
                events: {
                    "change #resolucion_ver": "fun_cambio_reso",
                    "change #dependencias_ver": "fun_cambio_depen",
                    "change #motivo_ver": "fun_cambio_moti" ,

                   "keyup :input#nro_resol": "ingre_nro_resol",
                    "keyup :input#descriOb": "ingre_descriOb",
                    "keyup :input#descriOp": "ingre_descriOp",
                    "keyup :input#busca-resol": "ingre_anio_resol2",
                    "keyup :input#anio_resol" :"ingre_anio_resol",
                    "keyup :input#anio-resol-modal":"ingre_anio_resol_modal",

                    "click #fechaR_clos": "fechaR_clos",
                    "click #fechaR_show": "fechaR_show",
                    "click #fechaIni_clos": "fechaIni_clos",
                    "click #fechaIni_show": "fechaIni_show",
                    "click #fec_fin_mot_show": "fec_fin_mot_show",
                    "click #fec_ini_mot_show": "fec_ini_mot_show",
                    "click #fec_ini_mot_clos": "fec_ini_mot_clos",
                    "click #fec_fin_mot_clos": "fec_fin_mot_clos",
                    "click #fechaFin_clos": "fechaFin_clos",
                    "click #fechaFin_show": "fechaFin_show",
                    "click #guardar": "fun_guardar",
                    "click #mostrar_servi": "fun_selec_servi",
                    "click #mostrar_servi2": "fun_selec_servi2",
                    "click #nuevo": "fun_limpiar_formulario",
                    "click #mostrar_traba": "fun_mostrar_trabajores",

                    "click #buscar_res":"fun_actualizar_resolucion",
                   // "click #eliminar_servi": "fun_eliminar_traba",
                    "click #busca-resolu": "fun_selec_resoluciones",
                    "click #buscaAnio": "fun_buscar_anio_resol",
                    "click #buscaxfechas": "fun_buscarxfechas_anio_resol",

                    "click #buscarPorAnio-modal": "fun_buscar_anio_resol_modal",
                    "click #muestra-reso-modal": "seleccionarResolucionModal",
                    "click #select-all":"selecTrabajadores",
                    "click #select-all2":"selecMotivos",
                    "click #eliminar_trabajadores": "action_eliminarTrabaja",
                    "click #checkCania":"fun_selec_trabajador" ,
                    "click #tabla-motivo-traba > tbody > tr ":"fun_selec_motivo_traba" ,
                    "click #agregar-motivo-trabajador": "fun_ver_motivoTrabajador",
                    "click #ver-motivo-trabajador": "fun_ver_motivos",
                    "click #quitar-motivo-trabajador": "fun_eliminar_motivo",
                    "click #elimina-reso-modal":"eliminarResoluciones",
                    "click #eliminar_resoluciones":"fun_eliminar_resol_modal",
                    "click #Radios1": "buscarporanio",
                    "click #Radios2": "buscarporfechas",
                    "click #r_ini_show":"fun_r_ini_show",
                    "click #r_ini_clos":"fun_r_ini_clos",
                    "click #r_fin_show":"fun_r_fin_show",
                    "click #r_fin_clos":"fun_r_fin_clos",
                    "click #AVModal":"eliminarTrabajadores",
                    "click #select_resol":"fun_select_motivos",
                    "click .avgrund-close":"cancelaravmodal",
                    "click #cancavmodal":"cancelaravmodal",
                    "click #close_modal":"cancelarmodal",
                    "click .tab-b":"fun_camb_b",
                    "click .tab-a":"fun_camb_a",
                    "dblclick #table-servidor > tbody > tr ": "seleccionarServidor",
                    "dblclick #table-todas > tbody > tr ": "seleccionarResolucion",
                    "dblclick #tablaMotivos > tbody > tr ": "selec_save_MotivoTraba",
                    "dblclick #tablaAddMotivo > tbody >tr":"selec_save_MotivoTraba"


//
                },

                onRender: function(){
                    this.initialFetch();
//                    this.tablaSolicitudes.show(this.solicitudesView) ;
//                    this.tablaPerfil.show(this.perfilView);
                    this.comoboMotivo.show(this.motivossView);
                    this.comboDepen.show(this.depenView);
                    this.comboResolucion.show(this.resoluView);
                    //this.tablaTraba.show(this.trabaView);

                    var temp_help = $("#advertencia");
                    temp_help.hide();

                },

                initialize: function () {

                    // initialize model
                    this.model = new Backbone.Model();
                     this.model.set({
                         "resolucion":new addResolucion(),
                         "trabajadorResolucion": new addServidor() ,
                         "updateServidor":new updateServidor(),
                         "borraServidor":new deleteServidor(),
                         "saveMotivoTrabajador":new addMotivoTrabajador(),
                         "addMotivoTraba":new addMotivoTrabajador(),
                         "borrarMotivoTraba":new BorrarMotivoTraba()
                        //
                        // "BorrarOtroMotivoTrabajador": new BorrarOtroMotivoTrabajador
                     });

//
//                    this.model.set({
//                        "updateestadoperfil": new UpdateEstadoServidor()
//                    });
                },

                initialFetch: function(){

                    var self=this;
                    console.log("Llegue al initial fech de resoluciones");

//                    var fetch=this.solicitudesView.fetchSolicitudes();
//                    var fetch2=this.perfilView.fetchPerfiles();
                    this.resoluView.fetchTipoResoluciones();

                    this.motivossView.fetchTipoMotivos();
                    this.depenView.fetchTipoDepen(this.tipo);
                    this.serviView.fetchServidores();
                    //this.tablaMotivoTraba.fetchTodosMotivos(function(){

                    //});

                },
                cancelaravmodal:function(){
                    Avgrund.hide();
                },
                cancelarmodal:function(){
                    Avgrund.hide();
                } ,
                buscarporanio:function(){

                    $('#div_busc_fecha').hide();
                    $('#div_busc_anio').show();
                },

                buscarporfechas:function(){
                    $('#div_busc_fecha').show();
                    $('#div_busc_anio').hide();
                },
                fun_r_ini_show:function(){
                    var legaj_nac = $('#r_ini');

                    legaj_nac.datepicker({
                        format: 'dd-mm-yyyy',
                        viewMode: 2
                    });

                    legaj_nac.datepicker('show');
                },

                fun_r_ini_clos:function(){

                    $("#r_ini").val("");
                },
                fun_r_fin_show:function(){
                    var legaj_nac = $('#r_fin');

                    legaj_nac.datepicker({
                        format: 'dd-mm-yyyy',
                        viewMode: 2
                    });

                    legaj_nac.datepicker('show');
                },
                fun_camb_b:function(){
                    this.btnasignar=1;
                    $("#busca-resol").val("");
                    $("#buscar_res").hide();

                    this.tablaTodasResolucionesAnio.reset();
                    this.tablaasociaciondirecta.reset();
                    this.fun_limpiar_formulario();
                },
                fun_camb_a:function(){
                  this.btnasignar=2;

                    $("#buscar_res").show();
                    $("#tabla-serv-asociados").show();
                   this.tablaTraba.reset();
                },
                fun_r_fin_clos:function(){

                    $("#r_fin").val("");
                },
                fun_selec_servi2:function(ev){
                    this.btnasignar=2;
                    var clickedElement=$(ev.currentTarget);
                    this.resolCompleta=clickedElement.parent().parent().attr('id');
                    this.dniTable=clickedElement.attr('data1');

                    this.tableServi.show(this.serviView);

                    $("#table-servidor").dataTable({
                        "bJQueryUI": false,
                        "bPaginate":true,
                        "bLengthChange": false
                    });


                    $("#table-servidor").dataTable();
                    $('#table-servidor_wrapper').addClass('table-position');
                    $('#table-servidor_wrapper').append("<div id='footer-table'></div>");
                    $('#table-servidor_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                    $('#table-servidor_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                    $('.dataTables_filter input').addClass('buscador');
                    $('.dataTables_filter input').attr('placeholder','Buscar..');
                    $('#serv-table-modal').modal()
                },

                tablaEstilos: function(id){
                    $("#"+id+"_wrapper").addClass('table-position');
                    $('#'+id+'_paginate').addClass('table-footer');
                    $('#'+id+'_filter input').on('keyup',function(){
                        $('#'+id+'_previous').addClass('previous');
                        $('#'+id+'_next').addClass('next');
                    })  ;
                    $('#'+id+'_previous').click(function(){

                        $(this).addClass('previous');
                        $('#'+id+'_next').addClass('next');
                    });
                    $('#'+id+'_next').click(function(){
                        $(this).addClass('next');
                        $('#'+id+'_previous').addClass('previous');
                    });
                    $('#'+id+'_previous').addClass('previous');
                    $('#'+id+'_next').addClass('next');
                    $('#'+id).addClass('table-bordered');
                },

                fun_select_motivos:function(){
                    this.numero_click=1;

                    this.tablaMotivoTraba.fetchTodosMotivos(function(){
                        $('#tablaMotivos').dataTable();
                        $('#tablaMotivos_wrapper').addClass('table-position');
                        $('#tablaMotivos_wrapper').append("<div id='footer-table'></div>");
                        $('#tablaMotivos_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                        $('#tablaMotivos_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                        $('.dataTables_filter input').addClass('buscador');
                        $('.dataTables_filter input').attr('placeholder','Buscar..');
                        $('#form_motivo').hide();
                    });
                    this.tableMotivos.show(this.tablaMotivoTraba)


                    $('#serv-table-modal3').modal()  //se activa modal
                },
                selecTrabajadores:function(){
                    if($('#select-all').is(':checked'))
                    {
                        var parent=$('.check-all').prop('checked',true);
                        $('.check-all').addClass("check");
                        var dni_sel=parent.parent().parent().children(':nth-child(3)');
                        for(var i=0;i<dni_sel.length;i++){
                            this.trabajadoresSeleccionados[i]=dni_sel[i].innerHTML;
                        };
                        $('.table-trabajador > tbody > tr ').addClass("highlight");
                    }else{
                        $('.check-all').prop('checked',false);
                        $('.check-all').removeClass("check");
                        $('.table-trabajador > tbody > tr').removeClass("highlight");
                        this.trabajadoresSeleccionados.splice(0,this.trabajadoresSeleccionados.length);
                    };
                    console.log("atrape el dni "+ dni_sel);

                    for(var j=0;j<this.trabajadoresSeleccionados.length;j++){
//
                        console.log(" el vector de los dni son baba "+this.trabajadoresSeleccionados[j]+" "  );
                    }

                },

                fun_cambio_reso:function(){
                    var aux=$('#resolucion_ver').val();
                    $("#sec_depen").show();


                    switch(aux){
                        case '0': this.tipoResolucion="RR";
                            break;
                        case '1': this.tipoResolucion="RD";
                            break;
                        case '2': this.tipoResolucion="DI";
                            break;
                        case '3': this.tipoResolucion="RJ";
                            break;
                        case '4': this.tipoDependencia=0; $("#sec_depen").hide();
                            break;
                    }
                    this.tipo=aux;


                    console.log("Cambie la dependencia a valor  ="+ aux);
                    console.log("la bre es : "+this.tipoResolucion);
                    this.depenView.fetchTipoDepen(this.tipo,function(){
                        $('#dependencias_ver').trigger('change');
                    });
                } ,

                fun_limpiar_formulario:function(){

                    this.band=0;
                    $('#nro_resol').val("");
                    $('#fechaR').val("");
                    $('#motivi_est').val("");
                    $('#fechaIni').val("");
                    $('#fechaFin').val("");
                    $('#descriOb').val("");
                    $('#descriOp').val("");
                    $("#resolucion_ver").val("4").trigger("change");
                    $("#advertencia").hide();
                    this.tipoDependencia=0;
                    $("#mostrar_servi2").hide();
                    $("#tabla-serv-asociados").hide();

                },

                fun_cambio_depen:function(){
                    this.capturar_formato_resolucion();
                    console.log("La depeendencia es: "+ this.tipoDependencia);
                },
                ingre_nro_resol:function(ev){
                    this.nroR=$('#nro_resol').val();
                    console.log("Registrado en nroR :"+this.nroR);
//                    if(this.nroR!=null)this.trabaView.fetchTrabajadores(this.nroR);
                },

                ingre_anio_resol2:function(ev){
//                     this.anioR2=$('#anio_resol').val();
                    this.anioR2=$('#busca-resol').val();
                    console.log("Registrado en nroR2 :"+this.anioR2);
                },

                ingre_anio_resol:function(ev){
                    this.anioR=$('#anio_resol').val();
                    console.log("Registrado en anioR :"+this.anioR);
                },

                ingre_descriOb:function(ev){
                  this.descriObli=$('#descriOb').val();
                    console.log("Registrado en descriOb :"+this.descriObli);
                },

                ingre_descriOp:function(ev){
                    this.descriOp=$('#descriOp').val();
                    console.log("Registrado en descriOp :"+this.descriOp);
                },

                ingre_anio_resol_modal:function(ev){
                    this.anioModal=$('#anio-resol-modal').val();
                    console.log("La resol que se busca en el modal es  :"+this.anioModal)


               },

                busca_resol:function(ev){
                    this.auxbuscador=$('#busca-resol').val();
                    console.log("Registrado en auxBucador: "+ this.auxbuscador)

                    this.trabaView.fetchTrabajadores(this.auxbuscador)
//                    this.trabaView.fetchTrabajadores().setUrlTodosServi()
                },

                fun_cambio_moti:function(ev){
                   this.motivo=$('#motivo_ver').val();
                    console.log("El motivo es :"+this.motivo);
                },

                fechaR_show:function(){
                    var temp_fechaR= $('#fechaR');

                    temp_fechaR.datepicker({
                        format: 'dd/mm/yyyy',
                        viewMode: 2
                    });

                    temp_fechaR.datepicker('show');


                } ,

                fechaR_clos:function(ev){
                    $("#fechaR").val("");
                },

                fechaIni_show:function(ev){
                    var temp_fechaIni= $('#fechaIni');

                    temp_fechaIni.datepicker({
                        format: 'dd/mm/yyyy',
                        viewMode: 2
                    });

                    temp_fechaIni.datepicker('show');
                } ,

                fechaIni_clos:function(ev){

                    $("#fechaIni").val("");
                } ,
                fec_ini_mot_show:function(ev){
                    var temp_fechaIni= $('#fec_ini_mot');

                    temp_fechaIni.datepicker({
                        format: 'dd/mm/yyyy',
                        viewMode: 2
                    });

                    temp_fechaIni.datepicker('show');
                } ,

                fec_ini_mot_clos:function(ev){

                    $("#fec_ini_mot").val("");
                } ,
                fec_fin_mot_show:function(ev){
                    var temp_fechaIni= $('#fec_fin_mot');

                    temp_fechaIni.datepicker({
                        format: 'dd/mm/yyyy',
                        viewMode: 2
                    });

                    temp_fechaIni.datepicker('show');
                } ,

                fec_fin_mot_clos:function(ev){

                    $("#fec_fin_mot").val("");
                } ,

                fechaFin_show:function(ev){
                    var temp_fechaFin= $('#fechaFin');

                    temp_fechaFin.datepicker({
                        format: 'dd/mm/yyyy',
                        viewMode: 2
                    });

                    temp_fechaFin.datepicker('show');
                } ,

                fechaFin_clos:function(ev){
                    $("#fechaFin").val("");
                },

                fun_buscar_anio_resol:function(ev){
                    var self=this;
                    this.todasResolucionesView.fetchTodasResolucionesAnio( this.anioR2.substring(2,4),function () {
                        if(self.todasResolucionesView.collection.length!=0){

                            $("#table-todas").dataTable();
                            $('#table-todas_wrapper').append("<div id='footer-table'></div>");
                           $('#table-todas_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                           $('#table-todas_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                          $('.dataTables_filter input').addClass('buscador');

                           $('.dataTables_filter input').attr('placeholder','Buscar..');
                            console.log("entro");



                        }
                    });

                    this.tablaTodasResolucionesAnio.show(this.todasResolucionesView) ;
//
                    this.tablaEstilos('table-todas');

//
//
                },

                fun_buscarxfechas_anio_resol:function(){
//                  this.tablaTodasResolucionesAnio.reset();
                    var self=this;
                    console.log( $('#r_ini').val()+"---"+$('#r_fin').val());
                    if($('#r_ini').val()==""){
                       this.fec1busc="0";
                    }else{
                        this.fec1busc=$('#r_ini').val();
                    };
                    if($('#r_fin').val()==""){
                       this.fec2busc="0";
                    }else{
                        this.fec2busc=$('#r_fin').val();
                    };

                    this.todasResolucionesView.fetchTodasResolucionesxfecha( this.fec1busc,this.fec2busc,function () {
                            if(self.todasResolucionesView.collection.length!=0){
                               $("#table-todas").dataTable();
                                $('#table-todas_wrapper').append("<div id='footer-table'></div>");
                                $('#table-todas_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                $('#table-todas_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                $('.dataTables_filter input').addClass('buscador');

                                $('.dataTables_filter input').attr('placeholder','Buscar..');

                            }
                    });
                    this.tablaTodasResolucionesAnio.show(this.todasResolucionesView) ;
//
//
                    this.tablaEstilos('table-todas');

                },

                fun_selec_servi:function(ev){
                    //this.btnasignar=1;
                    var clickedElement=$(ev.currentTarget);
                    this.resolCompleta=clickedElement.parent().parent().attr('id');
                    this.dniTable=clickedElement.attr('data1');

                    this.tableServi.show(this.serviView);



                    $("#table-servidor").dataTable();
                    $('#table-servidor_wrapper').addClass('table-position');
                    $('#table-servidor_wrapper').append("<div id='footer-table'></div>");
                    $('#table-servidor_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                    $('#table-servidor_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                    $('.dataTables_filter input').addClass('buscador');
                    $('.dataTables_filter input').attr('placeholder','Buscar..');


                    $('#serv-table-modal').modal()
                },

                fun_selec_resoluciones:function(ev){
                    var clickedElement=$(ev.currentTarget);


                    this.tablaTodasResolucionesAnio.show(this.todasResolucionesView)

                    $("#table-todas").dataTable({
                        "bJQueryUI": false,
                        "bPaginate":true,
                        "bLengthChange": false
                    });


                },
                action_eliminarTrabaja:function(){


                    var self=this;
                    console.log("ACAAAAAAAA!!!!!!!!");
                    console.log("valor"+this.btnasignar);
                    if(this.btnasignar==1){

                        this.model.get("borraServidor").set({
                            "dni":this.del_dni,
                            "nroResol":this.del_nroresol,
                            "serEstado":this.del_num_ser,
                            "cod_motivo":this.del_cod_mot
                        });
                        this.model.get("borraServidor").url = "rest/resoluciones/deleteServidor";

                        var self_s = this.model.get("borraServidor").save({}, {wait: true});


                        self_s.done(function(){

                        });

                        self_s.fail(function(){
                            console.log("Se elimino Servidor "+self.nroResol);
                            self.trabaView.fetchTrabajadores(self.nroResol, function(){
                                if(self.trabaView.collection.length!=0){
                                    $("#table-trabajador").dataTable();
                                    $('#table-trabajador').addClass('container-modal');
                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                    $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                    $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                    $('.dataTables_filter input').addClass('buscador');
                                    $('.dataTables_filter input').attr('placeholder','Buscar..');
                                    $('#desc-resolucion').text(self.nroResol);
                                }
                            })
                            self.tablaTraba.show(self.trabaView);
                        }) ;





                        Avgrund.hide();
                    }
                    if(this.btnasignar==2){

                        this.model.get("borraServidor").set({
                            "dni":this.del_dni,
                            "nroResol":this.del_nroresol,
                            "serEstado":this.del_num_ser,
                            "cod_motivo":this.del_cod_mot


                        });
                        this.model.get("borraServidor").url = "rest/resoluciones/deleteServidor";


                        var self_s = this.model.get("borraServidor").save({}, {wait: true});


                        self_s.done(function(){

                        });

                        self_s.fail(function(){
                            console.log("Se elimino Servidor "+self.nroResol);
                            self.trabaView.fetchTrabajadores(self.nroResol, function(){
                                if(self.trabaView.collection.length!=0){
                                    $("#table-trabajador").dataTable();
                                    $('#table-trabajador').addClass('container-modal');
                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                    $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                    $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                    $('.dataTables_filter input').addClass('buscador');
                                    $('.dataTables_filter input').attr('placeholder','Buscar..');
                                    $('#desc-resolucion').text(self.nroResol);
                                }
                            })

                            self.tablaasociaciondirecta.show(self.trabaView);
                        }) ;

                        Avgrund.hide();

                    }

                },

                eliminarTrabajadores: function(ev){

                    var clickedElement=$(ev.currentTarget);
                    this.del_dni=clickedElement.attr('data1');
                    this.del_nroresol=clickedElement.attr('data2');
                    this.del_num_ser=clickedElement.attr('data3');
                    this.del_cod_mot=clickedElement.attr('data4');

                        //Avgrund.show("#default-popup");

                        console.log("Selecciono mas de 0");





                },
                eliminarResoluciones: function(ev){
                    //$('#serv-table-modal2').modal('hide');
                    var clickedElement=$(ev.currentTarget);

                    this.elimResol=clickedElement.attr('data1');
                    console.log("eliminar:"+this.elimResol);

                    //Avgrund.show("#default-popup2");


                },


                seleccionarServidor:function(e){
                   // alert("hola mundo");
                    var self=this;

                    var clickedElement=$(e.currentTarget);
                    var dni=clickedElement.children(':nth-child(1)').text();
                    var estado=clickedElement.children(':nth-child(6)').text();
                    var codAnti=clickedElement.attr('data2');

                    if(codAnti==null){ codAnti="null"}
                    //$('#'+dni).val

                    console.log(this.btnasignar+" el boton esta en")
                    if(this.btnasignar==1){
                        console.log("PARTE 1");
                        console.log("Atrape a la resolucion : "+self.nroResol+" Atrape a dni="+dni+" atrape al estado="+estado+" con cod Anti: "+codAnti)

                        self.model.get("trabajadorResolucion").set({
                            "idTrabajadorResolucion": '0',
                            "nroResol": self.nroResol,
                            "dni": dni,
                            "serEstado":estado,
                            "codAntiguo":codAnti

                        });


                        self.model.get("trabajadorResolucion").url = "rest/resoluciones/addServidor";


                        var self_s = this.model.get("trabajadorResolucion").save({}, {wait: true});
                        self_s.done(function () {
                            self.trabaView.fetchTrabajadores(self.nroResol, function(){
                                $('#desc-resolucion').text(this.nroResol);
                                if(self.trabaView.collection.length!=0){
                                    $("#table-trabajador").dataTable();
                                    $('#table-trabajador').addClass('container-modal');
                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                    $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                    $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                    $('.dataTables_filter input').addClass('buscador');
                                    $('.dataTables_filter input').attr('placeholder','Buscar..');
                                }
                            })

                            self.tablaEstilos('table-trabajador');
                            self.tablaTraba.show(this.trabaView);

                        });
                        self_s.fail(function () {
                            self.trabaView.fetchTrabajadores(self.nroResol, function(){

                                if(self.trabaView.collection.length!=0){
                                    $("#table-trabajador").dataTable();
                                    $('#table-trabajador').addClass('container-modal');
                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                    $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                    $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                    $('.dataTables_filter input').addClass('buscador');
                                    $('.dataTables_filter input').attr('placeholder','Buscar..');
                                    $('#desc-resolucion').text(self.nroResol);
                                    console.log("error"+self.nroResol);
                                }
                            })

                            self.tablaEstilos('table-trabajador');
                            self.tablaTraba.show(this.trabaView);
                        });
                    }
                    if(this.btnasignar==2){



                        console.log("PARTE 2");
                        console.log("Atrape a la resolucion : "+self.nroResol+" Atrape a dni="+dni+" atrape al estado="+estado+" con cod Anti: "+codAnti)

                        self.model.get("trabajadorResolucion").set({
                            "idTrabajadorResolucion": '0',
                            "nroResol": self.nroResol,
                            "dni": dni,
                            "serEstado":estado,
                            "codAntiguo":codAnti

                        });


                        this.model.get("trabajadorResolucion").url = "rest/resoluciones/addServidor";


                        var self_s = self.model.get("trabajadorResolucion").save({}, {wait: true});
                        self_s.done(function () {

                            self.trabaView.fetchTrabajadores(self.nroResol, function(){
                                if(self.trabaView.collection.length!=0){
                                    $("#table-trabajador").dataTable();
                                    $('#table-trabajador').addClass('container-modal');
                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                    $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                    $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                    $('.dataTables_filter input').addClass('buscador');
                                    $('.dataTables_filter input').attr('placeholder','Buscar..');
                                }
                            })

                            self.tablaEstilos('table-trabajador');
                            self.tablaasociaciondirecta.show(this.trabaView);


                        });
                        self_s.fail(function () {
                           // alert("Resolucion:"+self.nroResol);

                            self.trabaView.fetchTrabajadores(self.nroResol, function(){
                                if(self.trabaView.collection.length!=0){
                                    console.log("acaa!!!!");
                                    $("#table-trabajador").dataTable();
                                    $('#table-trabajador').addClass('container-modal');
                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                    $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                    $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                    $('.dataTables_filter input').addClass('buscador');
                                    $('.dataTables_filter input').attr('placeholder','Buscar..');

                                    console.log("Numero de resolucion:"+self.nroResol)
                                    $('#desc-resolucion').text(self.nroResol);
                                }
                            })

                            self.tablaEstilos('table-trabajador');
                            self.tablaasociaciondirecta.show(self.trabaView);
                        });
                    }

                    console.log("Ya inserto")

                    $('#serv-table-modal').modal("hide")

                } ,


                seleccionarResolucion:function(e){

                    //this.tablaasociaciondirecta.hidden();
                   // alert("selecciono resolucion");

                    var self=this;
                    var clickedElement=$(e.currentTarget);
                    this.IdResolucion=clickedElement.attr('id'); // atrapo al id de la resolucion
                    var nroResol=clickedElement.children(':nth-child(2)').text();
                    this.fecha_inicio=clickedElement.children(':nth-child(4)').text();
                    this.fecha_fin=clickedElement.children(':nth-child(5)').text();
                    this.descriObli=clickedElement.children(':nth-child(7)').text();



                    console.log("Atrape a su resolu: "+nroResol+" y a la ID: "+this.IdResolucion)
                    this.trabaView.fetchTrabajadores(nroResol, function(){
                        if(self.trabaView.collection.length!=0){
                        $("#table-trabajador").dataTable();
                        $('#table-trabajador').addClass('container-modal');
                        $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                        $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                        $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                        $('.dataTables_filter input').addClass('buscador');
                        $('.dataTables_filter input').attr('placeholder','Buscar...');
                        }

                        $('#desc-resolucion').text(nroResol);

                    })

                    self.tablaTraba.show(self.trabaView);
                    //this.tablaEstilos('table-trabajador');
                    //this.tablaTraba.show(this.trabaView);
                    this.nroResol=nroResol; //se guarda el nombre de la resolucion  para su posterior uso
//                    $('#serv-table-modal3').modal("hide")
                },

                fun_actualizar_resolucion:function(){

                    this.tableUpdateReso.show(this.tablaActuaResol);

                    $('#serv-table-modal2').modal();
                },

                fun_buscar_anio_resol_modal:function(ev){

                    this.tablaActuaResol.fetchTablaResolucionesAnio(this.anioModal.substring(2,4),function () {
                        $('#table-resol-modal').show();
                        $("#table-resol-modal").dataTable();
                        $('#table-resol-modal').addClass('container-modal');
                        $('#table-resol-modal_wrapper').addClass('table-position');
                        $('#table-resol-modal_wrapper').append("<div id='footer-table'></div>");
                        $('#table-resol-modal_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                        $('#table-resol-modal_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                        $('.dataTables_filter input').addClass('buscador');

                        $('.dataTables_filter input').attr('placeholder','Buscar..');
                    })
                    this.tableUpdateReso.show(this.tablaActuaResol)
                   // this.tablaEstilos('table-resol-modal');
                },

                seleccionarResolucionModal:function(e){

//                    $("#guardar").hide()
//                    $("#confirmar-actualizar").show()
                    $("#advertencia").hide();
                    var self=this;
                    var aux;
                    var anio;
                    var clickedElement=$(e.currentTarget);
                    var fecha_resol=clickedElement.attr('data3');
                    this.IdResolucion=clickedElement.attr('data0');
                    var numero_resol=clickedElement.attr('data1');
                    var cod_resol=clickedElement.attr('data2');
                    var fecha_expedicion=clickedElement.attr('data3');
                    var motivo=clickedElement.attr('data9');
                    this.idMotivo= clickedElement.attr('data4');
                    console.log(motivo+" este es el motivo") ;
                    var fecha_inicio=clickedElement.attr('data5');
                    var fecha_fin=clickedElement.attr('data6');
                    var obliga=clickedElement.attr('data7');
                    var adicional=clickedElement.attr('data8');

                    console.log("atrape el motivo: "+motivo+" y podria hasta mas cosas")

                    this.resolCompleta=numero_resol; //se guarda para el update de la tabla tb_trabajador_resolucion

                    var splits= new Array();
                    var splitFecha=new Array();
                    splits=numero_resol.split("-")
                    console.log("----"+splits[1]);
                    if(splits[1]=="R"){
                        splits[1]="RECTOR";
                        console.log("----"+splits[1]);
                    };
                    if(splits.length==4){
                        splits[1]= splits[2];
                    }
                    splitFecha=fecha_expedicion.split("-")

                    $('#serv-table-modal2').modal('hide')

                    //por si se updatea la resolucion
                    switch(cod_resol.trim()){
                        case '0': cod_resol='RR';
                            break;
                        case '1': cod_resol='RD';
                            break;
                        case '2': cod_resol='DI';
                            break;
                        case '3': cod_resol='RJ' ;
                            break;
                    }

                    switch(cod_resol){
                        case 'RR': aux='0';
                            break;
                        case 'RD': aux='1';
                            break;
                        case 'DI': aux='2';
                            break;
                        case 'RJ': aux='3' ;
                            break;
                    }


                    console.log("El valor de : "+cod_resol+" de aux es ahora: "+aux)
                    console.log("El valor que ira a dependencias es :"+splits[1])



                    $("#resolucion_ver").val(aux).trigger('change') ;
//                   $("#dependencias_ver").val(splits[1]).trigger('change');
                    $("#nro_resol").val(splits[0]);

                    this.depenView.fetchTipoDepen(aux,function(){
                        $("#dependencias_ver").val(splits[1]).delay(400).queue( function(){
                            $("#dependencias_ver").trigger('change');
                        });


                    });

                    this.tipoDependencia=splits[1];

                    if(splits[2]<55){anio="20"+splits[2];}
                    else{anio="19"+splits[2];}
                    $("#anio_resol").val(anio);

                    $("#fechaR").val(fecha_resol);

                    //this.motivo=motivo;
                    if(motivo.length<3){motivo=motivo+" ";}
                    $("#motivi_est").val(motivo)

//                    alert("fecha inicio"+fecha_inicio);
                    splitFecha=fecha_inicio.split("-")
                    $("#fechaIni").val(fecha_inicio)

                    splitFecha=fecha_fin.split("-")
                    $("#fechaFin").val(fecha_fin)

                    $("#descriOb").val(obliga)

                    if(adicional=="0"){
                        $("#descriOp").val("");
                    }
                    else{
                        $("#descripOp").val(adicional);
                    }


                    //updateando en la resolucion
                    // this.updateResolucionView.fetchUpdateResolucion()
                    this.band=1

                    //mostrando los servidores asociados a esa resolucion

                    console.log("Atrape a su resolu: "+numero_resol+" y a la ID: "+this.IdResolucion)
                    this.trabaView.fetchTrabajadores(numero_resol, function(){
                        if(self.trabaView.collection.length!=0){
                            $("#table-trabajador").dataTable();
                            $('#table-trabajador').addClass('container-modal');
                            $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                            $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                            $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                            $('.dataTables_filter input').addClass('buscador');
                            $('.dataTables_filter input').attr('placeholder','Buscar...');
                        }

                        $('#desc-resolucion').text(numero_resol);

                    })

                    self.tablaasociaciondirecta.show(self.trabaView);

                    $("#tabla-serv-asociados").show();
                    //this.tablaEstilos('table-trabajador');
                    //this.tablaTraba.show(this.trabaView);
                    this.nroResol=numero_resol; //se guarda el nombre de la resolucion  para su posterior uso
//                    $('#serv-table-modal3').modal("hide")
                    console.log("termino de hacer todo lo que ")

                },


                fun_selec_trabajador:function(ev){

                        var clickedElement=$(ev.currentTarget);
                        var dni=clickedElement.parent().parent().children(':nth-child(3)').text();         //doble parent() para seleccionar dni
                        var check=clickedElement.parent().parent().children(':nth-child(1)').children();   //doble parent atrapar chek y ponerlo en el vector
                        console.log("viendo el chechk "+check);
                        console.log("atrape el dni "+ dni);
                        if(clickedElement.hasClass('highlight')&&check.hasClass("check")){
                            clickedElement.removeClass("highlight");
                            check.removeClass("check");
                            check.prop('checked',false);
                            this.trabajadoresSeleccionados.splice(this.trabajadoresSeleccionados.indexOf(dni),1);



                        }
                        else{
                            clickedElement.addClass("highlight");
                            check.addClass("check");
                            check.prop('checked',true);
                            this.trabajadoresSeleccionados.push(dni);
                            //console.log("atrape el dni "+ dni);

                        }
                    console.log("Array "+this.trabajadoresSeleccionados.length);
                    //var estado=clickedElement.children(':nth-child(6)').text();
                    var resol=clickedElement.attr('data2');
                    var est=clickedElement.attr('data3');
                    var codAn=clickedElement.attr('data4');

                    for(var j=0;j<this.trabajadoresSeleccionados.length;j++){

                        console.log(" de un solo check el vector de los dni seleccionados asi nomas es de  "+this.trabajadoresSeleccionados[j]+"   solamente");
                    }


                },
                capturar_formato_resolucion:function(){
                    //alert("hojas");
                    if($('#dependencias_ver').val()=='DGA'){
                        this.tipoDependencia= $('#dependencias_ver').val();
                    }else{
                        if($('#dependencias_ver').val()=='RECTOR'){
                            this.tipoDependencia= "R";
                        }else{
                            if($('#dependencias_ver').val()=='OGRRHH'){
                                this.tipoDependencia= "DGA-OGRRHH";
                            }else{
                                //alert("esta vez:"+$('#dependencias_ver').val());
                                if($('#dependencias_ver').val()==null){
                                   this.tipoDependencia=0;
                                }
                                else{
                                this.tipoDependencia="D-"+$('#dependencias_ver').val();
                                }
                            }
                        }
                    }
                },
                fun_guardar:function(){
                    var temp_help = $("#advertencia");
                    var self=this;
                    this.anioR=$("#fechaR").val().substring(6,10);
                    $('#anio_resol').val(this.anioR);

                    if(self.band==0) {  //guardar
                       /* alert("dimen:"+self.validarExisteResolucion.collection.length);
                        alert("resol:"+self.nroR+" :-: "+self.tipoDependencia+" :-: "+self.anioR); */
                         console.log(" AQUIIII!!!!!");
                        if($("#nro_resol").val()!=""){
                                self.nroR=$("#nro_resol").val().trim();
                        }
                        self.validarExisteResolucion.fetchresolucion(self.nroR+"-"+self.tipoDependencia+"-"+self.anioR,function(){
                            console.log("ajshahsajhs");
                            console.log(self.validarExisteResolucion.collection.length);
                            if(self.validarExisteResolucion.collection.length!=0){

                                $("#advertencia").removeClass("alert-success");
                                $("#advertencia").removeClass("alert-warning");
                                $("#advertencia").addClass("alert-danger");
                                temp_help.show();

                                temp_help.html("<strong>La resolución "+self.nroR+"-"+self.tipoDependencia+"-"+self.anioR+" ya existe</strong>");
                            }else{
                                console.log("el anio es: "+$("#fechaR").val().substring(6,10));
                                if(isNaN($('#nro_resol').val())){
                                    $("#advertencia").removeClass("alert-success");
                                    $("#advertencia").removeClass("alert-danger");
                                    $("#advertencia").addClass("alert-warning");
                                    temp_help.show();
                                    // self.validarExisteResolucion.collection.length=0;
                                    temp_help.html("<strong>El número de resolución no debe tener caracteres</strong>");
                                }else{
                                if($("#motivi_est").val()=="MOTIVOS VARIOS"){
                                    if($("#fechaR").val()=="" || $("#nro_resol").val()=="" ||  $("#resolucion_ver").val()=="4"){

                                        $("#advertencia").removeClass("alert-success");
                                        $("#advertencia").removeClass("alert-danger");
                                        $("#advertencia").addClass("alert-warning");
                                        temp_help.show();
                                        // self.validarExisteResolucion.collection.length=0;
                                        temp_help.html('<strong>Existen campos obligatorios vacíos</strong>');
                                    }
                                    else{
                                        temp_help.hide();
                                        console.log("La resolucion sera : "+self.nroR+"-"+self.tipoDependencia+"-"+self.anioR)
                                        self.model.get("resolucion").set({
                                            "idResolucion":self.IdResolucion,
                                            "numero_resol": self.nroR+"-"+self.tipoDependencia+"-"+self.anioR,
                                            "cod_resol":self.tipoResolucion,
                                            "fecha_expedicion": $("#fechaR").val(),
                                            "motivo": self.idMotivo,
                                            "fecha_inicio": $("#fechaIni").val(),
                                            "fecha_fin": $("#fechaFin").val(),
                                            "obliga": self.descriObli,
                                            "adicional": self.descriOp

                                        });


                                        console.log(self.model.get("resolucion"));
                                        console.log("la fecha es : "+$("#fechaR").val())
                                        console.log(self.tipoResolucion+"-"+self.nroR+"-"+self.tipoDependencia+"-"+self.anioR)

                                        self.model.get("resolucion").url = "rest/resoluciones/addResolucion";
                                        self.numero_resol =self.nroR+"-"+self.tipoDependencia+"-"+self.anioR;

                                        self.nroResol=self.numero_resol;
                                        // alert("Resolucion:"+self.numero_resol);
                                        var self_s = self.model.get("resolucion").save({}, {wait: true});
                                        self_s.fail(function(){
                                            // alert("entro acaa"+self.numero_resol);
                                            self.trabaView.fetchTrabajadores(self.numero_resol, function(){
                                                if(self.trabaView.collection.length!=0){

                                                    $("#table-trabajador").dataTable();
                                                    $('#table-trabajador').addClass('container-modal');
                                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                                    $('#table-trabajador_next').html("<i  class='icon-forward'></i>");
                                                    $('#table-trabajador_previous').html("<i class='icon-backward'></i>");
                                                    $('.dataTables_filter input').addClass('buscador');
                                                    $('.dataTables_filter input').attr('placeholder','Buscar...');

                                                }
                                                else{
                                                    $("#tabla-serv-asociados").show();
                                                    $('#desc-resolucion').text(self.numero_resol);
                                                }


                                            })

                                            self.tablaasociaciondirecta.show(self.trabaView);
                                        });
                                        console.log("Ya inserto")
                                        $("#advertencia").removeClass("alert-danger");
                                        $("#advertencia").removeClass("alert-warning");
                                        $("#advertencia").addClass("alert-success");
                                        temp_help.show();
                                        temp_help.html("<strong>Se registró con éxito la resolución "+self.nroR.trim()+"-"+self.tipoDependencia+"-"+self.anioR+"</strong>")
                                        $('#mostrar_servi2').show();
                                        $('#nuevo').show();
                                        //refrescar

                                    }

                                }
                                else{
                                if($('#descriOb').val()=="" || $("#fechaR").val()=="" || $("#nro_resol").val()=="" || $('#motivi_est').val()=="" ||  $("#resolucion_ver").val()=="4"){

                                    $("#advertencia").removeClass("alert-success");
                                    $("#advertencia").removeClass("alert-danger");
                                    $("#advertencia").addClass("alert-warning");
                                    temp_help.show();
                                   // self.validarExisteResolucion.collection.length=0;
                                    temp_help.html("<strong>Existen campos obligatorios vacíos</strong>");
                                }
                                else{
                                    temp_help.hide();
                                    console.log("La resolucion sera : "+self.nroR+"-"+self.tipoDependencia+"-"+self.anioR)
                                    self.model.get("resolucion").set({
                                        "idResolucion":self.IdResolucion,
                                        "numero_resol": self.nroR.trim()+"-"+self.tipoDependencia+"-"+self.anioR,
                                        "cod_resol":self.tipoResolucion,
                                        "fecha_expedicion": $("#fechaR").val(),
                                        "motivo": self.idMotivo,
                                        "fecha_inicio": $("#fechaIni").val(),
                                        "fecha_fin": $("#fechaFin").val(),
                                        "obliga": self.descriObli,
                                        "adicional": self.descriOp

                                    });


                                    console.log(self.model.get("resolucion"));
                                    console.log("la fecha es : "+$("#fechaR").val())
                                    console.log(self.tipoResolucion+"-"+self.nroR.trim()+"-"+self.tipoDependencia+"-"+self.anioR)

                                    self.model.get("resolucion").url = "rest/resoluciones/addResolucion";
                                      self.numero_resol =self.nroR.trim()+"-"+self.tipoDependencia+"-"+self.anioR;

                                    self.nroResol=self.numero_resol;
                                    // alert("Resolucion:"+self.numero_resol);
                                    var self_s = self.model.get("resolucion").save({}, {wait: true});
                                    self_s.fail(function(){
                                       // alert("entro acaa"+self.numero_resol);
                                        self.trabaView.fetchTrabajadores(self.numero_resol, function(){
                                            if(self.trabaView.collection.length!=0){

                                                $("#table-trabajador").dataTable();
                                                $('#table-trabajador').addClass('container-modal');
                                                $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                                $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                                $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                                $('.dataTables_filter input').addClass('buscador');
                                                $('.dataTables_filter input').attr('placeholder','Buscar...');

                                            }
                                            else{
                                                $("#tabla-serv-asociados").show();
                                                $('#desc-resolucion').text(self.numero_resol);
                                            }


                                        })

                                        self.tablaasociaciondirecta.show(self.trabaView);
                                    });
                                    console.log("Ya inserto")
                                    $("#advertencia").removeClass("alert-danger");
                                    $("#advertencia").removeClass("alert-warning");
                                    $("#advertencia").addClass("alert-success");
                                    temp_help.show();
                                    temp_help.html("<strong>Se registró con éxito la resolución "+self.nroR+"-"+self.tipoDependencia+"-"+self.anioR+"</strong>")
                                    $('#mostrar_servi2').show();
                                    $('#nuevo').show();
                                    //refrescar

                                }
                                }
                            }
                            }
                        })

                    }
                    else{   //actualizar  cambiar

                        console.log("el anio es: "+$("#fechaR").val().substring(6,10))
                        if($('#descriOb').val()=="" || $("#fechaR").val()=="" || $("#nro_resol").val()=="" || $('#motivi_est').val()=="" ){

                            $("#advertencia").removeClass("alert-success");
                            $("#advertencia").removeClass("alert-error");
                            temp_help.show();

                            temp_help.text("Existen campos obligatorios vacíos")
                        }else{
                            temp_help.hide();

                            var nueva= $("#nro_resol").val()+"-"+self.tipoDependencia+"-"+self.anioR

                            self.model.get("resolucion").set({
                                "idResolucion":self.IdResolucion,
                                "numero_resol":nueva,
                                "cod_resol": $("#resolucion_ver").val(),
                                "fecha_expedicion": $("#fechaR").val(),
                                "motivo": self.idMotivo,
                                "fecha_inicio": $("#fechaIni").val(),
                                "fecha_fin": $("#fechaFin").val(),
                                "obliga":  $("#descriOb").val(),
                                "adicional":  $("#descriOp").val()

                            });

                            self.model.get("resolucion").url = "rest/resoluciones/updateResolucion";
                            var self_s = self.model.get("resolucion").save({}, {wait: true});


                            console.log("La r anterior es: "+self.resolCompleta)
                            console.log("la r nueva es : "+nueva)
                            self.actualizarResoServiView.fetchUpdateResoServi(nueva,self.resolCompleta)
                            self.actualizarResoMotiView.fetchUpdateResoMoti(nueva,self.resolCompleta)
                            console.log("Ya updateo todo")


                            self.band=2;
                            console.log("La dependencia es: "+$("#dependencias_ver").val());
                            console.log("updateo de resol listo");

                            var aux=" "
                            $("#advertencia").removeClass("alert-error");
                            $("#advertencia").addClass("alert-success");
                            temp_help.show();

                            temp_help.text("Se actualizó con éxito "+nueva);
                            $('#mostrar_servi2').show();
                            $('#nuevo').show();
                        }


                    }

                },

                fun_ver_motivoTrabajador:function(ev){
                    this.numero_click=2;

                    var self=this;
                    //$('#tablaMotivos').dataTable();
                    var clickedElement=$(ev.currentTarget);
                    this.dniTable=clickedElement.attr('data5'); //se guarda dni
                    this.estadoTraba=clickedElement.attr('data6');   //se guarda estado

                    console.log("El dni actual es: "+ this.dniTable)
                    console.log("El estado actual es:"+this.estadoTraba)
                      this.tablaMotivoadd.fetchAddMotivos(function(){
                          console.log("ACAAAAAA!!!!");
                          $('#tablaAddMotivo').dataTable();
                          $('#tablaAddMotivo_wrapper').addClass('table-position');
                          $('#tablaAddMotivo_wrapper').append("<div id='footer-table'></div>");
                          $('#tablaAddMotivo_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                          $('#tablaAddMotivo_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                          $('.dataTables_filter input').addClass('buscador');
                          $('.dataTables_filter input').attr('placeholder','Buscar..');

                      })
                    self.addMotivos.show(self.tablaMotivoadd);
                    $('#serv-table-modal5').modal();
                      //la region pinta a la vista
                  //  $('#serv-table-modal5').modal();

                     //se activa modal
                },
                fun_eliminar_resol_modal:function(){
                    var self=this;


                    var url='rest/resoluciones/deleteResolucion/'+this.elimResol;
                    // alert(idfamiliar);
                    $.ajax({
                        type: 'DELETE',
                        url: url,
                        success: function(){
                            self.tablaActuaResol.fetchTablaResolucionesAnio(self.anioModal.substring(2,4),function () {
                                $('#table-resol-modal').show();
                                $("#table-resol-modal").dataTable();
                                $('#table-resol-modal').addClass('container-modal');
                                $('#table-resol-modal_wrapper').addClass('table-position');
                                $('#table-resol-modal_wrapper').append("<div id='footer-table'></div>");
                                $('#table-resol-modal_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                $('#table-resol-modal_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                $('.dataTables_filter input').addClass('buscador');

                                $('.dataTables_filter input').attr('placeholder','Buscar..');
                            })
                            self.tableUpdateReso.show(self.tablaActuaResol)
                        },
                        error: function(){
                            self.tablaActuaResol.fetchTablaResolucionesAnio(self.anioModal.substring(2,4),function () {
                                $('#table-resol-modal').show();
                                $("#table-resol-modal").dataTable();
                                $('#table-resol-modal').addClass('container-modal');
                                $('#table-resol-modal_wrapper').addClass('table-position');
                                $('#table-resol-modal_wrapper').append("<div id='footer-table'></div>");
                                $('#table-resol-modal_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                $('#table-resol-modal_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                $('.dataTables_filter input').addClass('buscador');

                                $('.dataTables_filter input').attr('placeholder','Buscar..');
                            })
                            self.tableUpdateReso.show(self.tablaActuaResol)
                        }
                    });
                    Avgrund.hide();
                },


                selec_save_MotivoTraba:function(e){
                    var self=this;
                    var temp_help = $("#advertencia");
                    var clickedElement=$(e.currentTarget);
                    var idMoti=clickedElement.children(':nth-child(1)').text();
                    this.idMotivo=idMoti;
                    var desMoti=clickedElement.children(':nth-child(2)').text();
                    if(this.idMotivo=="969"){

                        $("#descr_obli").hide();
                     }
                    else{
                        $("#descr_obli").show();
                    }
                    if(this.numero_click==2){
                        if($('#descriOb_motivo').val()==""){
                            $('#advertencia_motivo').html("<strong>Campos obligatorios vacíos</strong>");
                            $('#advertencia_motivo').show();
                        }else{

                        if(idMoti.length==2){idMoti=idMoti+" ";  }
                        if(idMoti.length==1){idMoti=idMoti+"  ";  }


                        console.log("los datos enviados :")
                        console.log("Reso: "+this.nroResol)
                        console.log("Cod del traba: "+this.dniTable)
                        console.log("esto del traba: "+this.estadoTraba)
                        console.log("Motivo: "+idMoti)

                        console.log("La fecha ini: "+this.fecha_inicio)
                        console.log("fecha fin: "+this.fecha_fin)
                        console.log("descripcion: "+this.descriObli)

                        //verificando fechas


                        //desmembrando fecha
                        var splitFecha=new Array();
                        var splitFecha2=new Array();
                        var fechaAux,fechaAux2;

                        //verificando fechas
                        if(!this.fecha_inicio){
                            //temp_help.show();

                            //temp_help.text("La resolucion no tiene fecha inicial")
                        }
                        if(!this.fecha_inicio==false){

                            fechaAux=this.fecha_inicio;
                        }


                        if(!this.fecha_fin){
                           // temp_help.show();

                           // temp_help.text("La resolucion no tiene fecha final")
                        }
                        if(!this.fecha_fin==false){

                            fechaAux2=this.fecha_fin;

                        }

                        this.fechaIni=fechaAux
                        this.fechaFin=fechaAux2


                        console.log("La fecha inicial sera ahora: "+fechaAux)

                        console.log("La fecha final sera ahora: "+fechaAux2)


                        self.model.get("addMotivoTraba").set({
                            "idMotivoTraba":"0",
                            "resolucion":this.nroResol,
                            "codTraba": this.dniTable,
                            "serviEstado": this.estadoTraba,
                            "nroMotivo": idMoti,
                            "fechaIni": $('#fec_ini_mot').val(),
                            "fechaFin":$('#fec_fin_mot').val(),
                            "descrip": $('#descriOb_motivo').val()

                        });


                        console.log(this.model.get("saveMotivoTrabajador"));


                        this.model.get("addMotivoTraba").url = "rest/resoluciones/addMotivoTrabajador";


                        var self_s = this.model.get("addMotivoTraba").save({}, {wait: true});
                        self_s.done(function(){

                            self.trabaView.fetchTrabajadores(self.nroResol, function(){
                                if(self.trabaView.collection.length!=0){
                                    $("#table-trabajador").dataTable();
                                    $('#table-trabajador').addClass('container-modal');
                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                    $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                    $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                    $('.dataTables_filter input').addClass('buscador');
                                    $('.dataTables_filter input').attr('placeholder','Buscar...');
                                }

                                $('#desc-resolucion').text();

                            })
                        });
                        self_s.fail(function(){
                            console.log("Hola Mundo");
                            self.trabaView.fetchTrabajadores(self.nroResol, function(){
                                if(self.trabaView.collection.length!=0){
                                    $("#table-trabajador").dataTable();
                                    $('#table-trabajador').addClass('container-modal');
                                    $('#table-trabajador_wrapper').append("<div id='footer-table'></div>");
                                    $('#table-trabajador_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                    $('#table-trabajador_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                    $('.dataTables_filter input').addClass('buscador');
                                    $('.dataTables_filter input').attr('placeholder','Buscar...');
                                }

                                $('#desc-resolucion').text(self.nroResol);

                            })

                        });
                        console.log("Ya inserto el motivo para el trabajador")
                        $('#serv-table-modal5').modal("hide")
                    }};
                    if(this.numero_click==1){
                        $('#motivi_est').val(desMoti)
                        $('#serv-table-modal5').modal("hide");
                        $("#serv-table-modal3").modal("hide");
                    }


                },

                fun_ver_motivos:function(ev){
                    var self=this;
                    var clickedElement=$(ev.currentTarget);
                    $("#serv-table-modal4").delay(100).queue(function(){


                        self.dniTable=clickedElement.attr('data7'); //se guarda dni
                        self.mostrarMotivoTrabaView.fetchMostrarMotivoTraba(self.dniTable,function(){

                            if(self.mostrarMotivoTrabaView.collection.length!=0){
                               // alert("aca entro");
                            $("#tabla-motivo-traba").dataTable();
                            $('#tabla-motivo-traba_wrapper').addClass('table-position');
                            $('#tabla-motivo-traba_wrapper').append("<div id='footer-table'></div>");
                                $('#tabla-motivo-traba_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                                $('#tabla-motivo-traba_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                                $('.dataTables_filter input').addClass('buscador');
                                $('.dataTables_filter input').attr('placeholder','Buscar..');
                                /*this.tablaMotivoTraba.fetchTodosMotivos(function(){

                                 $('#tablaMotivos').dataTable();
                                 $('#tablaMotivos_wrapper').addClass('table-position');
                                 $('#tablaMotivos_wrapper').append("<div id='footer-table'></div>");
                                 $('#tablaMotivos_next').html("<i  class='icon-forward'></i>");
                                 $('#tablaMotivos_previous').html("<i class='icon-backward'></i>");
                                 $('.dataTables_filter input').addClass('buscador');
                                 $('.dataTables_filter input').attr('placeholder','Buscar..');
                                 });*/

                            self.tablaEstilos('tabla-motivo-traba')
                            $('#serv-table-modal4').modal()  //se activa modal

                            $("#serv-table-modal4").dequeue();    }


                        })
                        self.mostrarMotivoTraba.show(self.mostrarMotivoTrabaView)  //la region pinta a la vista
                        self.tablaEstilos('tabla-motivo-traba');
                        $('#serv-table-modal4').modal();  //se activa modal
                        $("#serv-table-modal4").dequeue();


                    });

                },

                selecMotivos:function(){
                    if($('#select-all2').is(':checked'))
                    {
                        var parent=$('.check-all').prop('checked',true);
                        $('.check-all').addClass("check");
                        var moti_sel=parent.parent().parent().children(':nth-child(2)');
                        for(var i=0;i<moti_sel.length;i++){
                            this.motivosSeleccionados[i]=moti_sel[i].innerHTML;
                        };
                        $('.tabla-motivo-traba > tbody > tr ').addClass("highlight");
                    }else{
                        $('.check-all').prop('checked',false);
                        $('.check-all').removeClass("check");
                        $('.tabla-motivo-traba > tbody > tr').removeClass("highlight");
                        this.motivosSeleccionados.splice(0,this.motivosSeleccionados.length);
                    };
                    console.log("atrape el motivo "+ moti_sel);

                    for(var j=0;j<this.motivosSeleccionados.length;j++){
                        console.log("el vector de los motivos son: "+this.motivosSeleccionados[j]+"   bababa");
                    }
                },

                fun_selec_motivo_traba:function(ev){
                    var clickedElement=$(ev.currentTarget);
                    var moti=clickedElement.children(':nth-child(2)').text();
                    var check=clickedElement.children(':nth-child(1)').children();
                    console.log("viendo el chechk "+check);
                    console.log("atrape el motivo "+ moti);
                    if(clickedElement.hasClass('highlight')&&check.hasClass("check")){
                        clickedElement.removeClass("highlight");
                        check.removeClass("check");
                        check.prop('checked',false);
                        this.motivosSeleccionados.splice(this.motivosSeleccionados.indexOf(moti),1);
                    }
                    else{
                        clickedElement.addClass("highlight");
                        check.addClass("check");
                        check.prop('checked',true);
                        this.motivosSeleccionados.push(moti);

                    }

                    for(var j=0;j<this.motivosSeleccionados.length;j++){
//
                        console.log(" bababa el vector de los motivos seleccionados asi nomas es de  "+this.motivosSeleccionados[j]+"   solamente");
                    }

                },


                fun_eliminar_motivo:function(){
                    var aux="",aux1="",aux2="";
                    var dnis= new Array();
                    var estados= new Array();
                    var codeAntiguos=new Array();
                    var self=this;
                    if(this.motivosSeleccionados.length==0){
                        console.log("debe seleccionar al menos un motivo ahoraaaaaa!!!!!!!!");

                    }else{


                        for(var i=0;i<this.motivosSeleccionados.length;i++){
                           // this.codMotivos[i]=$("#"+this.motivosSeleccionados[i]).children(':nth-child(2)').text();
                            aux=aux+this.motivosSeleccionados[i]+"-";
                            //aux1=aux1+this.codMotivos[i]+"-";
                            console.log("los motivos originales son: "+this.motivosSeleccionados[i])
                            console.log("los motivos aux son: "+aux)
                        }
                        console.log("El aux en total es: "+aux)



                        for(var j=0;j<this.motivosSeleccionados.length;j++){
                            //borrando
                            this.model.get("borrarMotivoTraba").set({
                                "idMotivoTraba":"0",
                                "resolucion":this.nroResol,
                                "codTraba": this.dniTable,
                                "serviEstado": this.estadoTraba,
                                "nroMotivo":this.motivosSeleccionados[j],
                                "fechaIni": this.fechaIni,
                                "fechaFin":this.fechaFin,
                                "descrip": this.descriObli


                            });
                            this.model.get("borrarMotivoTraba").url = "rest/resoluciones/deleteMotivo/"+this.dniTable+"/"+this.motivosSeleccionados[j];


                            var self_s = this.model.get("borrarMotivoTraba").save({}, {wait: true});

                            self_s.done(function(){

                            });
                            self_s.fail(function(){


                            });
                            console.log("Ya borro ahorita "+this.motivosSeleccionados[j]+" de resolucion "+this.nroResol+" de usuario: "+this.dniTable)
                        }

                    }


                   // this.trabaView.fetchTrabajadores(this.nroResol) //la variable que posee el nombre de la resolucion, dond estamos eliminando el servidor
                    this.motivosSeleccionados.length=0;
                    this.estadosTraba.length=0
                    this.codeAntiguo.length=0
                    //this.trabaView.fetchTrabajadores(this.nroResol) //la variable que posee el nombre de la resolucion, dond estamos eliminando el servidor
                    $('#serv-table-modal4').modal("hide")  //se activa modal
                }

            });
        });
        return ErzaManager.ResolucionApp.List.View;
    });
