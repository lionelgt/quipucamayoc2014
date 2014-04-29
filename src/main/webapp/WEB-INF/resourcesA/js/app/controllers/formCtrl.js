'use strict '

var formCtrl;
formCtrl = function ($scope, $http,$location) {

    $scope.datos ={};
    $scope.statusMessage="";
    $scope.displayValue = 'display:none;';
    $scope.displayValue1 = 'display:none;';
    $scope.displayValue3 = 'display:none;';
    idhist=0;
    $scope.stateUser=0;
    $scope.esthist;
    var email= $('#email').val();
    $('#search1').numeric();
    $('#form-display').hide();
    $('#msg').hide();
    $('#msg1').hide();
    $('#msg2').hide();
    $('#msg3').hide();
    $('#msg4').hide();
    $('#msg5').hide();

    $('#query').click(function () {
        //esconde los mensajes al darle clic en el boton buscar
        $('#msg').hide();
        $('#msg1').hide();
        $('#msg2').hide();
        $('#msg3').hide();
        $('#msg4').hide();
        $('#msg5').hide();

    });

    $scope.hideModal = function(){
        //$location.path('/form');
        $('#modal-div').hide();
        $('#modal-ok').hide();
        $('#message1').hide();
        $('modal-backdrop').hide();
        $('#form-display').hide();
        $scope.datos="";
        $scope.dni="";
    } ;



    $scope.validardni = function (dni) {
        email = $('#email').text();
        $scope.datos.id = dni;//Agregamos dni
        if(dni==""){
            dni="undefined";

        }

        $http.get('rest/cas/worker/worker/' + dni).success(function (worker) {
            $scope.datos = worker;
            $scope.dependencyId = worker.dependencyId;
            if (worker.name != undefined ) {

                $('#msg').hide();
                $('#form-display').show();
                //apellidos = worker.firstLastName+" "+worker.secondLastName;
                $scope.datos.lastName = worker.firstLastName+" "+worker.secondLastName;
                //name = worker.name;
                $scope.datos.name = worker.name;
                //id = dni;
                $scope.datos.id = dni;
                $scope.datos.fullname = worker.name + " " + worker.firstLastName + " " + worker.secondLastName;
                $scope.datos.dependency = worker.dependency;

            } else {

                $scope.datos.name = "";
                $scope.datos.firstLastName = "";
                $scope.datos.secondLastName = "";
                $scope.datos.statusDescription = "";
                $scope.datos.category = "";
                $scope.datos.dependency = "";
                $scope.datos.nombrecompleto = "";
                $scope.datos.email="";
                $scope.notFoundMessage = "El trabajador no ha sido encontrado!";
                $('#form-display').hide();
                $('#msg').show();
                //$scope.statusMessage = ' Usuario incorrecto.';


            }
        });


        $scope.enviar = function (dni,datos) {

            //alert("entro a enviar y empiezo a validar al usuario");
            $http.get('rest/cas/worker/worker/validationDni/'+dni).success(function (worker){


                if(email === (worker.email)+" "){

                    if($scope.datos.profileDescription != undefined){   //trae la descripcion del perfil segun el dni introducido

                        $scope.statusMessage = 'Usted ya cuenta con un perfil en este modulo, ¿Desea actualizar su perfil?';
                        $scope.displayValue = 'display:none;';
                        $scope.displayValue1 = 'display:block;';
                        $('#modal-div').modal('show');


                    }
                    else{
                        $scope.stateUser = 1;
                        console.log("es usuario y no tiene perfil, en histusuperf cod_perf = null(ha pedido) o no existe eb la tabla(nunca ha pedido)");

                        console.log("dni before findHistUser: "+dni);



                        $scope.findHistUser(dni,idhist,datos);




                    }

                }
                else if ((worker.email)+"" != "undefined"){

                    $scope.hideModal();
                    $('#form-display').hide();
                    $('.modal-backdrop').hide();
                    $('.modal').hide();
                    $('#msg5').show();
                    $('#modal-div').modal('hide');
                    $scope.displayValue = 'display:none;';
                    $scope.displayValue1 = 'display:none;';


                }
                    else {

                    console.log("usuario nuevo");
                    $scope.datos.email = email;
                    datos.id=dni;

                    console.log(datos.id);
                    console.log(datos.firstLastName);
                    console.log(datos.secondLastName);
                    console.log(datos.name);
                    console.log("antes de llamar adderp");
                   $http.get('rest/cas/worker/worker/add/erp/'+datos.id+'/'+datos.email+'/'+datos.name+'/'+datos.firstLastName+' '+datos.secondLastName).success(function(){
                        console.log("add erp");

                       console.log("adderp");
                       $scope.addHist(datos.id, datos.dependencyId);
                    })  ;

                    $('#enviar-button').removeAttr('data-toggle');
                    $('#msg2').show();
                    $('#form-display').hide();
                }

            }) ;
        };
    }


    $scope.updateUserState = function(){

        $http.get('rest/cas/worker/worker/findEstHistUser/'+$scope.datos.id).success(function(worker){
                console.log('findEstHistUser');

                $scope.esthist = worker.est;
                console.log($scope.esthist+"kkk");
                if(worker.est=='3' || worker.est=='0'){

                    console.log("ya se ha enviado una solicitud de este perfil");
                    $('#msg4').show();
                    $('#form-display').hide();//parece no es necesario


                } else{
                    console.log("second");

                    $http.post('rest/cas/worker/worker/update/'+$scope.datos.id).success(function(){
                        //$scope.displayValue = 'display:none;';
                        $scope.displayValue1 = 'display:none;';
                        //$scope.statusMessage = ' Su perfil ha sido actualizado con éxito!';

                        console.log("actualizo");
                        $('#form-display').hide();
                        $scope.datos="";
                        $scope.dni="";
                        $('#msg3').show();
                    }).error(function(){
                            console.log('wrong update');
                        });
                }

            }
        );

    }
    $scope.addHist = function(id, dependencyId){
        console.log(email+" ----------------------------------");
        $http.get('rest/cas/worker/add/hist/'+id+'/'+email+'/'+dependencyId).success(function(){
            console.log("add hist "+email);

        })  ;
    }

    $scope.findHistUser = function(dni,histid,datos){
        console.log("dni at the beggining: "+dni);
        $http.get('rest/cas/worker/worker/findHistUser/'+dni).success(function(worker){
                console.log('findHistUser');
                idhist = worker.id;

                if(typeof idhist === "undefined"){
                    //idhist = 1;
                    $scope.addHist(datos.id, datos.dependencyId);
                    $('#form-display').hide();
                    $scope.displayValue1 = 'display:none;';
                    $scope.displayValue = 'display:block;';
                    $('#msg2').show();

                } else{
                    console.log("no add hist");
                    $scope.displayValue1 = 'display:none;';
                    $scope.displayValue = 'display:block;';
                    $('#form-display').hide();
                    $('#msg1').show();

                }


            }

        );
    }

}