angular.module('acme_assignments')
	.factory('SalesPersonService', function($http){
		var salesPeople = [];

		return {
			findAll: function(){
				return $http.get('/api/salesPeople')
					.then(function(result){
						angular.copy(result.data, salesPeople);
						return salesPeople;
					})
			},

			create: function(salesPerson){
				return $http.post('/api/salesPeople', salesPerson)
					.then(function(result){
						salesPeople.push(result.data);
					})
			},

			destroy: function(salesPerson){
				return $http.delete('/api/salesPeople/' + salesPerson.id)
					.then(function(){
						salesPeople.splice(salesPeople.indexOf(salesPerson), 1);
					})
			},

			toggleAssignment: function(salesPerson, region){
				var that = this;
				return $http.post('api/salesPeople/' + salesPerson.id + '/region/' + region.id)
					.then(function(result){
						return that.findAll();
					})
			}
		}

	})