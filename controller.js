app.controller('temperatureMonitorController', function($scope, temperatureMonitor){

    $scope.recordedTemperaturesList = [];

    // field validation
    $scope.validateField = function(){
        $scope.isValidTemperature = temperatureMonitor.recordTemperature($scope.temperture);
    }

    // add temp
    $scope.addTemperture = function(temperture){
        var isValid = temperatureMonitor.recordTemperature($scope.temperture);
        if(isValid){
            temperture = parseInt(temperture);
            $scope.recordedTemperaturesList.push(temperture);
        }
    }

    // clear field
    $scope.clearList = function(){
        $scope.recordedTemperaturesList = [];
    }

    // get Current Median
    $scope.getCurrentMedian = function(){
        //var tempList = $scope.recordedTemperaturesList;
        $scope.median = temperatureMonitor.getCurrentMedian($scope.recordedTemperaturesList);
    }

});