app.service('temperatureMonitor', function(){
    this.recordTemperature = function(temperture){
        var validFlag;
        var recordFlag;
        if((temperture != undefined) && (temperture != '')){
            if(temperture[0] == '-'){
                validFlag = temperture.substr(1, temperture.length);
            }else{
                validFlag = temperture;
            }
            if(isNaN(validFlag)){
                recordFlag = false;
            }else{
                recordFlag = true;
            }
        }else{
            recordFlag = false;
        }
        return recordFlag;
    }

    this.getCurrentMedian = function(temperaturesList){
        var median;
        var tempList = temperaturesList.sort(function(a, b){ return a-b; });
        var midValue = tempList.length/2;
        if((tempList.length % 2) == 0){
            median = (tempList[(midValue-1)] + tempList[midValue])/2;
        }else{
            midValue = Math.round(midValue);
            median = tempList[(midValue-1)];
        }
        return median;
    }
});