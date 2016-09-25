angular.module('acme_assignments')
	.controller('SalesPersonListCtrl', function($scope, SalesPersonService){
		SalesPersonService.findAll()
			.then(function(salesPeople){
				$scope.salesPeople = salesPeople;
			})
			.catch(function(err){
				console.log(err);
			});

		$scope.create = function(){
			SalesPersonService.create({ name: $scope.name })
				.then(function(salesPerson){
					$scope.name = '';
				})
				.catch(function(err){
					console.log(err);
				})
		};

		$scope.destroy = function(salesPerson){
			SalesPersonService.destroy(salesPerson)
				.catch(function(err){
					console.log(err);
				})
		};
	})