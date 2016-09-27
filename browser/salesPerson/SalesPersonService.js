angular.module('acme_assignments')
	.factory('SalesPersonService', function($http){
		var salesPeople = [];

		return {
			findAll: findAll,
			create: create,
			destroy: destroy,
			toggleAssignment: toggleAssignment
		};

		function findAll(){
			return $http.get('/api/salesPeople')
				.then(function(result){
					angular.copy(result.data, salesPeople);
					return salesPeople;
				})
		};

		function create(salesPerson){
			return $http.post('/api/salesPeople', salesPerson)
				.then(function(result){
					salesPeople.push(result.data);
				})
		};

		function destroy(salesPerson){
			return $http.delete('/api/salesPeople/' + salesPerson.id)
				.then(function(){
					salesPeople.splice(salesPeople.indexOf(salesPerson), 1);
				})
		};

		function toggleAssignment(salesPerson, region){
			return $http.post('api/salesPeople/' + salesPerson.id + '/region/' + region.id)
				.then(function(result){
					return result.data;
				})
		}
	})