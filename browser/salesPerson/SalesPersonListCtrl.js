angular.module('acme_assignments')
	.controller('SalesPersonListCtrl', function($scope, SalesPersonService, RegionService){
		SalesPersonService.findAll()
			.then(function(salesPeople){
				$scope.salesPeople = salesPeople;
			})
			.catch(function(err){
				console.log(err);
			});

		RegionService.findAll()
			.then(function(regions){
				$scope.regions = regions;
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

		$scope.toggleAssignment = function(salesPerson, region){
			SalesPersonService.toggleAssignment(salesPerson, region)
				.then(function(assignment){
					console.log(assignment);
				})
				.catch(function(err){
					console.log(err);
				})
		}
		$scope.hasAssignment = function(salesPerson, region){
			var hasAssignment = false;
			if(salesPerson.assignments){
				salesPerson.assignments.filter(function(assignment){
					if (assignment.regionId === region.id){
						return hasAssignment = true;
					}
				})	
			}
			return hasAssignment;
		}
	})