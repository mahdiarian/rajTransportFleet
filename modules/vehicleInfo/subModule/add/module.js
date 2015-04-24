angular.module('mainModule').controller('vehicleInfo.addController', ['$rootScope', '$scope', '$stateParams', 'vehicleInfo.updateService' , function($rootScope, $scope, $stateParams, updateService){
	// get the id

    $rootScope.activeMenu="vehicleDetail";

    $scope.isEdit = $stateParams.isEdit;
   	
   	function init(){
   		 $scope.model = {
				vehicleNo:'',
                date:'',
                amtPurchaed:'',
                modelYear:'',
                make:'',
                typeOfVehicle:'',
                chasisNo:'',
                engineNo:'',
                ownership:'',
                odometer:'',
                fuelType:''
                inService:''
		   };
   	}

    if($scope.isEdit === 'update'){
    	updateService.get($stateParams.editId).then(function(data){
    		$scope.model = data[0];
    	});    	
    }
    $scope.updateDetails = function(){
    	updateService.add($scope.model);
    }

    $scope.reset = function(){
    	init();
    	$scope.vehicleInfoForm.$setPristine()
    } 


    init();

}]);