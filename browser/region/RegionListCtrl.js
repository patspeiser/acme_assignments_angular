angular.module('acme_assignments')
	.controller('RegionListCtrl', function($scope, RegionService){
		RegionService.findAll()
			.then(function(regions){
				$scope.regions = regions;
			})
			.catch(function(err){
				console.log(err);
			});

		$scope.create = function(){
			RegionService.create( {zipCode: $scope.zipCode} )
				.then(function(region){
					$scope.zipCode = '';
				})
				.catch(function(err){
					console.log(err);
				});
		};

		$scope.destroy = function(region){
			RegionService.destroy( region )
				.catch(function(err){
					console.log(err);
				});
		}
	});