angular.module('acme_assignments')
	.controller('CompanyCtrl', function(SalesPersonService, RegionService, $scope){
		SalesPersonService.findAll()
			.then(function(salesPeople){
				$scope.salesPeople = salesPeople
			})
			.catch(function(err){
				console.log(err);
			})

		RegionService.findAll()
			.then(function(regions){
				$scope.regions = regions
			})
			.catch(function(err){
				console.log(err);
			})
	})