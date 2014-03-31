
<form class="form-search" style="margin-left:137px">
    <div class="input-append">
        <input type="text" class="span2 search-query" placeholder="Buscar...." ng-model="dni" id="search1">
        <button class="btn btn-primary" ng-click="validardni(dni)"  id="query"><i class="icon-search icon-white"></i></button>
    </div>
</form>
<br>
<br>

<div id="msg" class="alert alert-error" style="display:none;position: absolute; top: auto; left: 19%; right: auto; margin: 0 auto 20px; max-width: 100%; text-align: center; width: 57%; top:30%; ">
    Usuario incorrecto.
</div>
<div id="msg1" class="alert alert-error" style="display:none;position: absolute; top: auto; left: 19%; right: auto; margin: 0 auto 20px; max-width: 100%; text-align: center; width: 57%; top:30%;">
    UD ya ha solicitado perfil!
</div>

<div id="msg2" class="alert alert-success" style="display:none;position: absolute; top: auto; left: 19%; right: auto; margin: 0 auto 20px; max-width: 100%; text-align: center; width: 57%; top:30%;">
    Su solicitud ha sido procesada con &#233;xito.  Gracias!
</div>

<div id="msg3"class="alert alert-success" style="display:none;position: absolute; top: auto; left: 19%; right: auto; margin: 0 auto 20px; max-width: 100%; text-align: center; width: 57%; top:30%;">
    Su solicitud de actualizaci&#243;n de perfil ha sido enviada con &#233;xito!
</div>

<div id="msg4"class="alert alert-info" style="display:none;position: absolute; top: auto; left: 19%; right: auto; margin: 0 auto 20px; max-width: 100%; text-align: center; width: 57%; top:30%;">
    Su perfil no puede ser actualizado, ya se realiz&#243; esta acci&#243;n.
</div>

<div id="msg5"class="alert alert-error" style="display:none;position: absolute; top: auto; left: 19%; right: auto; margin: 0 auto 20px; max-width: 100%; text-align: center; width: 57%; top:30%;">
    Su dni esta registrado con otro mail. Usted no puede solicitar perfil
</div>




<form class="form-horizontal" id="form-display" style="margin-left:120px">
    <div class="row control-group">
        <div class="span8">
            <label class="control-label" for="name">Nombres y Apellidos:</label>

            <div class="controls">
                <input type="text" id="name" ng-model="datos.fullname" class="span4" disabled>
            </div>
        </div>
    </div>

    <div class="row control-group">
        <div class="span4">
            <label class="control-label" for="desc_estado">Descripci&#243;n estado:</label>

            <div class="controls">
                <input type="text" id="desc_estado" ng-model="datos.stateDescription" disabled>
            </div>
        </div>
        <div class="span5">
            <label class="control-label" for="desc_categoria">Descripci&#243;n categor&#237;a:</label>

            <div class="controls">
                <input type="text" id="desc_categoria" ng-model="datos.categoryDescription " disabled>
            </div>
        </div>

    </div>
    <div class="row control-group">
        <div class="span4">
            <label class="control-label" for="categoria">Categor&#237;a:</label>

            <div class="controls">
                <input type="text" id="categoria" ng-model="datos.category" disabled>
            </div>
        </div>


        <div class="span5" style="display:none">
            <div class="controls">
                <input type="hidden" id="email"  ng-model="datos.email">
            </div>
        </div>


        <div class="span5" style="display:none">
            <div class="controls">
                <input type="hidden" id="pdesc"  ng-model="datos.profileDescription">
            </div>
        </div>


        <div class="span5" style="display:none">
            <div class="controls">
                <input type="hidden" id="iderp"  ng-model="datos.erpId">
            </div>
        </div>

        <div class="span5" style="display:none">
            <div class="controls">
                <input type="hidden" id="idestado"  ng-model="datos.stateId">
            </div>
        </div>


    </div>

    <div class="row control-group">
        <div class="span5">
            <label class="control-label" for="dependencia">Dependencia:</label>

            <div class="controls">
                <input type="text" id="dependencia"  ng-model="datos.dependency" disabled style="width:700px;">
            </div>
        </div>
    </div>
    <br>
    <%--<div class="hero-unitt offset2" style="margin-left:30px;width:733px">--%>
            <%--<input type="text" ng-model="notFoundMessage" disabled>--%>
            <div class="hero-unitt offset2 row" style="margin-left:30px">

                <div  id="botton_fut">
                   <!-- <input type="submit" value="Enviar" ng-click="enviar(dni,datos)" class="btn btn-primary">-->
                    <!--<a href="#modal-div" ng-click="enviar(dni,datos)" class="btn btn-primary" data-toggle="modal" >Enviar</a>-->
                    <a id="enviar-button" ng-click="enviar(dni,datos)" class="btn btn-primary" data-toggle="modal" >Enviar</a>
                    <!--<a href="#modal-div" ng-click="enviar(dni,datos)" class="btn btn-primary" data-toggle="modal">Enviar</a>  -->
                </div>
            </div>

    <%--</div>--%>

</form>

<div id="modal-div" class="modal fade hide" style="display:none;position: absolute; top: auto; left: 36%; right: auto; margin: 0 auto 20px; max-width: 100%; top:30%; {{displayValue3}};">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&#88;</button>
        <h3>Perfil Solicitado</h3>
        <p>{{statusMessage}}</p>
    </div>
    <div class="modal-body">
        <p>El perfil </p>
    </div>

    <div class="modal-footer"  style="{{displayValue}}">
        <a id="aceptar-button" href="#" class="btn btn-primary" data-dismiss="modal" ng-click="hideModal()">Aceptar</a>

    </div>
    <div class="modal-footer1" style="{{displayValue1}}">
        <a id="cancelar-button2" href="/perfil#/form" class="btn btn-primary" ng-click="hideModal();"  data-dismiss="modal" style="margin-left:80%; margin-right:2%; margin-bottom:2%;">No</a>
        <a id="aceptar-button2" href="/perfil#/form" class="btn btn-primary"  ng-click="updateUserState();" data-dismiss="modal" style="margin-right:2%; margin-bottom:2%;">S&#237;</a>
    </div>
</div>

<!--<div id="msg3" class="modal alert hide" style="display:none;position: absolute; top: auto; left: 36%; right: auto; margin: 0 auto 20px; max-width: 100%; ">

    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&#88;</button>
        <h3>Perfil Solicitado</h3>
        <p>{{statusMessage}}</p>
    </div>
    <div class="modal-body">
        <p>El perfil </p>
    </div>
    <div class="modal-footer">
        <a id="aceptar-button3" href="/perfil#/form" class="btn btn-primary" ng-click="hideModal()"  data-dismiss="modal" >Aceptar</a>
        <a id="aceptar-button1" href="/perfil#/form" class="btn btn-primary"  ng-click="updateUserState()" data-dismiss="modal" >aaa</a>
    </div>
</div>-->
<!--el boton aaa estaba comentado-->