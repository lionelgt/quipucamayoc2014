<!doctype html>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<html lang="es" ng-app="app">
<head>
    <title>unmsm</title>
    <link rel="stylesheet" href="resources/css/vendor/bootstrap.css">
    <link rel="stylesheet" href="resources/css/social-network.css"/>
    <link rel="stylesheet" href="resources/css/vendor/bootstrap-responsive.css"/>
    <link rel="stylesheet" href="resourcesA/css/quipu.css">

    <%--<link rel="stylesheet" href="/resources/css/vendor/mindyskin.css"/>--%>
</head>
<body>
<div class="page-header" style="margin-top: 0px;margin-bottom: 0px;padding-bottom: 0px;border-bottom-width: 0px;">
    <div class="container">
        <div class="navbar" style="margin-bottom: 0px;">
            <a href="#" class="brand"></a>

            <div class="nav-collapse collapse pull-right" style="padding-top: 34px;">
                <ul class="nav pull-right">

                    <li class="dropdown">
                        <a href="#"  class="dropdown-toggle" id="email" data-toggle="dropdown">${userDetails.username} <b class="caret"></b></a>
                        <ul class=" nav-child unstyled small dropdown-menu">
                            <!--<li><a href="#">Perfil</a></li>-->
                            <li><a href="#">Ayuda</a></li>
                            <li><a href="#">Configuraci&oacute;n</a></li>
                            <li class="divider"></li>
                            <li><a href="j_spring_security_logout">Cerrar sesi&oacute;n</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="navbar navbar-inverse">
    <div class="navbar-inner">
        <div class="container" style="padding-top: 10px;padding-bottom: 10px;padding-left: 10px;">
            <ul class="nav" style="color:#666 ">
                <li style="padding-top: 8px;font-size: 30px;margin-right: 20px;float: left;font-weight: bold;">Recursos Humanos</li>
                <li><a class="navlinks" href="#/inicio">Perfiles</a></li>
                <li><a class="navlinks" href="#/form">Solicitar Perfil</a></li>
                <li><a class="navlinks" href="#/contratos">Ayuda</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="container">

    <div ng-view>

    </div>
</div>



<%--<div>Angular seed app: v<span app-version></span></div>--%>




<footer class="footer" style="text-align: center;padding-top: 40px;padding-bottom: 20px;">© Quipucamayoc 2013</footer>


<%--<sec:authorize access="isAuthenticated()">
    <br>

    <p>Hi, ${userDetails.username}! <a href="/j_spring_security_logout">Sign Out</a></p>
</sec:authorize>

<sec:authorize access="hasRole('admin')">
    <p>
        <a href="/admin">Admin page</a>
        <a href="/planilla">Admin planilla</a>
    </p>
</sec:authorize>

   <h1>solicitud de perfil</h1>--%>
<script src="resourcesA/js/lib/jquery.js"></script>
<script src="resourcesA/js/lib/angular.js"></script>
<script src="resourcesA/js/app/app.js"></script>
<script src="resourcesA/js/app/services.js"></script>
<script src="resourcesA/js/app/controllers/inicioCtrl.js"></script>
<script src="resourcesA/js/app/controllers/formCtrl.js"></script>
<script src="resourcesA/js/app/filters.js"></script>
<script src="resourcesA/js/app/directives.js"></script>
<script src="resourcesA/js/lib/jquery.numeric.js"></script>
<script src="resourcesA/js/lib/bootstrap.js"></script>

</body>
</html>