angular.module('acme_assignments')
	.factory('SalesPersonService', function($http){
		var salesPeople = [];

		return {
			findAll: findAll,
			create: create,
			destroy: destroy
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
					console.log('in factory create');
					console.log(result.data, salesPeople);
					salesPeople.push(result.data);
				})
		};

		function destroy(salesPerson){
			return $http.delete('/api/salesPeople/' + salesPerson.id)
				.then(function(){
					salesPeople.splice(salesPeople.indexOf(salesPerson), 1);
				})
		}
	})