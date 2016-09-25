angular.module('acme_assignments', ['ui.router'] );

angular.module('acme_assignments')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html'
			})
			.state('salesPeople', {
				url: '/salesPeople',
				templateUrl: '/salesPerson/salesPeople.html',
				controller: 'SalesPersonListCtrl'
			})
			.state('regions', {
				url: '/regions',
				templateUrl: '/region/regions.html',
				controller: 'RegionListCtrl'
			})

			$urlRouterProvider.otherwise('/');

	})