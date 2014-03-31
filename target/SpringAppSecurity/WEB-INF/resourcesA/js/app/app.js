'use strict'

var app = angular.module('app',['app.filters','app.services','app.directives'])

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/inicio',{
        templateUrl:'rest/template/inicio' ,
        controller:'inicioCtrl'
    })

    .when('/form',{
        templateUrl:'rest/template/form',
        controller:'formCtrl'
    })

    .otherwise({
        redirectTo: '/inicio'
    })
}])
