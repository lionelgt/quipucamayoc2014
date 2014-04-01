define(["app","hbs!apps/roles/table/templates/rolesLayout","apps/roles/table/view/roles-table","apps/roles/table/view/perfiles-table",
    "apps/roles/table/view/crear-perfil","apps/roles/table/view/roles-perfil-table","apps/roles/table/model/perfil","apps/roles/table/model/rolperfil",
    "apps/roles/table/model/historialusuarioperfil","apps/roles/table/collection/roles",
    "lib/jquery.dataTables.min","bootstrap"],
    function (ErzaManager, layoutTpl,RolesView,PerfilesView,CrearPerfilView, RolesPerfilView, Perfil, RolPerfil,HistUsuarioPerfil, Roles) {
    ErzaManager.module('RolesApp.List.View', function (View, ErzaManager, Backbone, Marionette, $, _) {

        var idPerfil=0;//id para borrar perfil
        var perfCode = 0;//id para cargar roles
        var rolsId = new Array();//= new Array();
        var rolsIdDelete = new Array();
        var perfilname;
        var dni = 0;


        View.Layout = Marionette.Layout.extend({

            template: layoutTpl,

            rolesView : new RolesView(),
            perfilesView: new PerfilesView(),
            crearPerfilView: new CrearPerfilView(),
            rolesPerfilView: new RolesPerfilView(),



            regions:{
                listPerfiles: "#list-perfiles",   //perfiles-table.hbs
                listRoles: "#list-roles",         //roles-table.hbs
                perfiles:"#perfiles",              //crear-perfil.hbs
                crearPerfilModal:"#crear-perfil-modal"

            },

            events: {
                "click #add-perfil":"invoke_modal",//add button call modal
                "click #save-perfil":"save_perfil",//button from modal call insert into perfil table
                "click #cancel-perfil":"cancel_perfil",
                "click #asign-roles":"asign_roles",
                "change #select-perfiles":"select_perfiles",
                "click #delete-button":"delete_button",
                "click #delete-perfil":"delete_perfil",
                "click #cancel-dperfil":"cancel_dperfil" ,
                "change .checks":"clickOnCheck",
                "click #lb": "lb_asign_roles"
                //"change #table-perfiles":"updatePerfiles"

            },
            initialize: function () {

                //initialize the model
                this.model = new Backbone.Model();
                this.collection = new Backbone.Collection();

                this.model.set({
                    "perfil": new Perfil()
                });
                this.model.set({
                    "rolperfil": new RolPerfil()
                });
                this.model.set({
                    "historialusuarioperfil": new HistUsuarioPerfil()
                })
                this.collection.set({
                    "roles" : new Roles()
                })

            },

            onRender: function(){
                this.initialFetch();
                this.listPerfiles.show(this.perfilesView);
                this.listRoles.show(this.rolesView);
                this.perfiles.show(this.crearPerfilView);



                $("#table-perfiles").dataTable();
                $('#serv-table-modal').addClass('container-modal');
                $('#table-perfiles_wrapper').addClass('table-position');
                $('#table-perfiles_paginate').addClass('table-footer');

                $('#table-perfiles_previous').click(function(){

                    $(this).addClass('previous');
                    $('#table-servidores2_next').addClass('next');
                });
                $('#table-perfiles_next').click(function(){
                    $(this).addClass('next');
                    $('#table-servidores2_previous').addClass('previous');
                });
                $('#table-perfiles_previous').addClass('previous');
                $('#table-perfiles_next').addClass('next');
                $('#table-perfiles').addClass('table-bordered');



            },

            initialFetch: function(){
                var self = this;
                this.perfilesView.fetchPerfiles();
                this.crearPerfilView.fetchPerfiles(function(){
                    $("#table-perfiles").dataTable();
                    $('#table-perfiles_length').hide();
                    $('#table-perfiles_filter').hide();
                    $('div#table-perfiles_info').hide();

                    $('a#table-perfiles_next').html('<b>&#160;&#160;&#160;&#160;</b><b>Siguiente ></b>');
                    $('a#table-perfiles_next').css({
                        "cursor":"pointer"
                    });
                    $('a#table-perfiles_previous').html('<b>< Anterior</b>&#160;&#160;&#160;&#160;<b></b>');
                    $('a#table-perfiles_previous').css({
                        "cursor":"pointer"
                    });
                    $('#table-perfiles_paginate').css({
                        "text-align": "center",
                        "font-size":"16px"
                    });

                });


                $("#table-perfiles").dataTable();

                $('#table-perfiles_wrapper').append("<div id='footer-table'></div>");
                $('#table-perfiles_next').html("<i  class='icon-forward'></i>");
                $('#table-perfiles_previous').html("<i class='icon-backward'></i>");


                $('#msg').hide();

                $("#input0").prepend("<option value='' selected='selected'></option>");


                $('#select-perfiles').attr("selectedIndex", -1);
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
            invoke_modal:function(){
                $('#msg').hide();
                $('#crear-perfil-modal').modal();
            },

            save_perfil: function(){
                var self = this;
                var desc = $('#descripcion').val();


                this.model.get("perfil").set({

                    "descripcion": desc
                })


                this.model.get("perfil").url = 'rest/cas/profile/add';


                var self_s = this.model.get("perfil").save({}, {wait: true});

                self_s.error(function(){
                    self.perfilesView.fetchPerfiles(function(){

                        $("#table-perfiles").dataTable();
                        $('#table-perfiles_length').hide();
                        $('#table-perfiles_filter').hide();
                    });

                });

                self_s.success(function(){

                })  ;

                $('#msg').show();
                self_s.perfilesView.fetchPerfiles();

            },
            cancel_perfil: function(){
                $('#crear-perfil-modal').modal('hide');
                $('#msg').hide();

            },

            asign_roles:function(){


               $('#msg2').show();

                perfCode = $('#select-perfiles').val();


                var self = this;

                var val = "";
                console.log("percode : "+perfCode);
                for(var ii=0; ii<rolsId.length; ii++){
                    val += rolsId[ii]+" ";
                    self.model.get("rolperfil").set({
                        "profileId" : perfCode,
                        "rolId": rolsId[ii]
                    })

                    self.model.get("rolperfil").url = 'rest/cas/roles/rolperfil/add';


                    var self_rr = self.model.get("rolperfil").save({}, {wait: true});

                }


                val = "";
                console.log("length de rolsIdDelete "+rolsIdDelete.length);
                for(var ii=0; ii<rolsIdDelete.length; ii++){
                    val += rolsIdDelete[ii]+" ";
                    self.model.get("rolperfil").set({
                        "rolId": rolsIdDelete[ii]
                    })


                    self.model.get("rolperfil").url = 'rest/cas/roles/rolperfil/delete';

                    var self_rr = self.model.get("rolperfil").save({}, {wait: true});

                }



            },

            select_perfiles:function(e){



                var self = this;
                $('#input0').remove();
                $('#msg2').hide();

                self.idRolSelected = $('#select-perfiles').val();
                perfCode = self.idRolSelected;

                rolsId = new Array();
                rolsIdDelete = new Array();
                this.rolesView.fetchRoles(self.idRolSelected,function(){


                       for(var i=0; i<self.rolesView.collection.length; i++){
                           var active = self.rolesView.collection.at(i).get("active");
                           var id = self.rolesView.collection.at(i).get("id");

                           if(active == 1){

                               $('#input'+id).attr('checked','checked');
                               rolsId.push(id);

                               for(var ii=0; ii<rolsIdDelete.length; ii++){
                                   if(rolsIdDelete[ii] == id){

                                       rolsIdDelete.splice(id,1);
                                   }
                               }

                           }else{

                               $('datar').attr('false');
                           }
                       }


                    }
                );

            },

            clickOnCheck: function(e){
                var aux= $(e.currentTarget);
                var iid = aux.attr('id');
                iid = iid.split('input');
                iid = (iid+"").replace(',','');

                if(aux.is(':checked')){
                    aux.attr('datar','true');
                    aux.attr('value','true');


                    rolsId.push(iid);


                }
                else{

                    aux.attr('datar','false');
                    var ae = "";
                    var ia=-1;
                    for(var i= 0; i<rolsId.length; i++){
                        ae += rolsId[i]+" ";
                        if(rolsId[i]==iid){
                           ia = i;
                            break;
                        }
                    }


                    rolsIdDelete.push(iid);

                    rolsId.splice(ia,1);
                }

            },



            delete_button: function(e){

                $('#msg1').hide();
                var clickedElement=$(e.currentTarget)

                dni = clickedElement.attr('data');
                perfilname = clickedElement.parent().parent().children(':nth-child(1)').text();

                idPerfil = dni;

                $('#modal_escribir').html('¿Esta seguro,desea eliminar el perfil '+'<b>'+perfilname+'</b>'+" ?");

                $('#modal-div').modal();

            },
            delete_perfil: function(){

                $('#msg1').show();
                $('#'+dni).remove();
                var self = this;


                self.model.get("perfil").set({

                    "codigo": idPerfil
                })


                self.model.get("perfil").url = 'rest/cas/profile/delete';


                var self_ss = self.model.get("perfil").save({}, {wait: true});





                var url='rest/cas/profile/delete';


                $.ajax({
                    type: 'DELETE',
                    url: url,
                    success: function(){

                        self.perfilesView.fetchPerfiles();
                        self.listPerfiles.show(this.perfilesView);


                    },
                    error: function(){


                        self.perfilesView.fetchPerfiles();
                       self.listPerfiles.show(this.perfilesView);

                    }
                });

            } ,
            cancel_dperfil: function(){
                $('#modal-div').modal('hide');
                $('#msg1').hide();

            },

            getElementTable :function(index, tr){
                $('#table-data').each(function(index, tr) {
                    var lines = $('td', tr).map(function(index, td) {
                        return $(td).text();
                    });

                });
            },
            lb_asign_roles: function(){
                var self = this;
                self.perfilesView.fetchPerfiles();
                this.select_perfiles();
            }



        });
    });
    return ErzaManager.RolesApp.List.View;
});