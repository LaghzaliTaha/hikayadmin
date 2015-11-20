(function(){
  var app = angular.module('Routes', []);
    app.config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state("Home",{
          url:"/",
          templateUrl: "AjoutHistoire.html",
        })

  .state('AjoutPartie', {
        url: "/AjoutPartie/:id",
        templateUrl: 'AjoutPartie.html',
        controller: 'MyController1'

        })

        .state('Question', {
              url: "/Question/:id",
              templateUrl: 'Question.html',
                  controller:'MyController1'
              })


			  .state('Affichage', {
              url: "/Affichage",
              templateUrl: 'Affichage.html',
			   controller:'MyController1'
              })

        .state('ModifierPartie/:id', {
                    url: '/ModifierPartie/:id',
                    templateUrl: 'ModifierPartie.html',
               controller:'MyController3'
                    })

          .state('EditerPartie/:id', {
                                url: '/EditerPartie/:id',
                                templateUrl: 'EditerPartie.html',
                           controller:'MyController3'
                                })

        .state("page",{
          url:"/page",
          templateUrl: "page.html"
        })
        .state("login",{
          url:"/login",
          templateUrl: "login.html"
        })
        $urlRouterProvider.otherwise("/");
    })
  })();
