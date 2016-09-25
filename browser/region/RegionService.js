angular.module('acme_assignments')
	.factory('RegionService', function($http){
		var regions = [];

		return {
			findAll: findAll,
			create: create,
			destroy: destroy
		};

		function findAll(){
			return $http.get('/api/regions')
				.then(function(result){
					angular.copy(result.data, regions);
					return regions;
				})
		};

		function create(region){
			return $http.post('/api/regions', region)
				.then(function(result){
					regions.push(result.data)
				})
		};

		function destroy(region){
			return $http.delete('/api/regions/' + region.id)
				.then(function(){
					regions.splice(regions.indexOf(region), 1);
				})
		}	
	})
