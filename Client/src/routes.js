
export default function route ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./app/home/home.html'),
      controller: 'HomeCtrl'
    })
    .state('login', {
      url: '/login',
      template: require('./app/authentication/login.html'),
      controller: 'LoginCtrl'
    })
    .state('register', {
      url: '/register',
      template: require('./app/authentication/register.html'),
      controller: 'RegisterCtrl'
    })
    /*******************************/
    /* ---------- ADMIN ---------- */
    /*******************************/
    .state('admin', {
      url: '/admin',
      template: require('./app/admin/admin.html')
    })
    .state('admin.questions', {
      url: '/points',
      template: require('./app/admin/questions.html'),
      controller: 'AdminQuestionsCtrl'
    })
    .state('admin.questions.add', {
      url: '/add',
      template: require('./app/admin/questions.add.html'),
      controller: 'AdminAddQuestionCtrl'
    })
    /* .state('admin.questions.edit', {
      url: '/{id}/edit',
      template: require('./app/admin/question-form.html'),
      controller: 'AdminEditQuestionCtrl'
    }) */
    .state('game', {
      url: '/game',
      template: require('./app/game/game.html'),
      controller: 'GameCtrl'
    })
}
