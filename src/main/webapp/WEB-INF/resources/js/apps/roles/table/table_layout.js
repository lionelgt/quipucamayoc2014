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
                listaRoles: "#list-roles",         //roles-table.hbs
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
                this.listaRoles.show(this.rolesView);
                this.perfiles.show(this.crearPerfilView);





            },

            initialFetch: function(){

                this.perfilesView.fetchPerfiles();
                this.crearPerfilView.fetchPerfiles(function(){
                    $('#table-perfiles').show();
                    $("#table-perfiles").dataTable();


                    $('#table-perfiles_wrapper').append("<div id='footer-table'></div>");
                    $('#table-perfiles_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                    $('#table-perfiles_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                    $('.dataTables_filter input').addClass('buscador');

                    $('.dataTables_filter input').attr('placeholder','Buscar..');

                });


                $('#msg').hide();

                $("#input0").prepend("<option value='' selected='selected'></option>");


                $('#select-perfiles').attr("selectedIndex", -1);
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

                    self.perfilesView.fetchPerfiles();
                    self.crearPerfilView.fetchPerfiles(function(){
                        $('#table-perfiles').show();
                        $("#table-perfiles").dataTable();


                        $('#table-perfiles_wrapper').append("<div id='footer-table'></div>");
                        $('#table-perfiles_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                        $('#table-perfiles_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                        $('.dataTables_filter input').addClass('buscador');

                        $('.dataTables_filter input').attr('placeholder','Buscar..');

                    });

                    self.perfiles.show(self.crearPerfilView);

                });

                self_s.success(function(){

                })  ;

                //$('#msg').show();


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
                        $('#table-roles-1').show();
                        $("#table-roles-1").dataTable();


                        $('#table-roles-1_wrapper').append("<div id='footer-table'></div>");
                        $('#table-roles-1_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                        $('#table-roles-1_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                        $('.dataTables_filter input').addClass('buscador');

                        $('.dataTables_filter input').attr('placeholder','Buscar..');

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


                var self_s = self.model.get("perfil").save({}, {wait: true});

                 self_s.fail(function(){
                     self.crearPerfilView.fetchPerfiles(function(){
                         $('#table-perfiles').show();
                         $("#table-perfiles").dataTable();


                         $('#table-perfiles_wrapper').append("<div id='footer-table'></div>");
                         $('#table-perfiles_next').html("<i  class='glyphicon glyphicon-forward'></i>");
                         $('#table-perfiles_previous').html("<i class='glyphicon glyphicon-backward'></i>");
                         $('.dataTables_filter input').addClass('buscador');

                         $('.dataTables_filter input').attr('placeholder','Buscar..');

                     });

                     self.perfiles.show(self.crearPerfilView);
                 });




            } ,
            cancel_dperfil: function(){
                $('#modal-div').modal('hide');
                $('#msg1').hide();

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