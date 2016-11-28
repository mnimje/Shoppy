var app = angular.module("myApp",['ui.bootstrap','ui.router','shoppyControllers']);

configureShoppyApp.$inject = ["$stateProvider","$urlRouterProvider"] ;

app.config(configureShoppyApp);
function configureShoppyApp($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home",{
        url:"/home",
        views:{
            'headerView':{ templateUrl:"views/home/headerView.html" },
            'mainView':{ templateUrl:"views/home/mainView.html" },
            'footerView':{ templateUrl:"views/home/footerView.html" }  
            }        
    });
}


var _ctr = angular.module("shoppyControllers",[]);
_ctr.controller("homeController",homeController);

function homeController(){
    //alert("loaded");
}
