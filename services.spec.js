describe('when I pass the string as parameter to recordTemperature', function(){
    beforeEach(module('temperatureApp'));
    it('returns false for string', inject(function(temperatureMonitor){
        expect(temperatureMonitor.recordTemperature('str')).toEqual(false);
    }))
});
describe('when I pass the number as parameter to recordTemperature', function(){
    beforeEach(module('temperatureApp'));
    it('returns true for number', inject(function(temperatureMonitor){
        expect(temperatureMonitor.recordTemperature(6)).toEqual(true);
    }))
});
describe('when I pass the negitive number as parameter to recordTemperature', function(){
    beforeEach(module('temperatureApp'));
    it('returns true for number', inject(function(temperatureMonitor){
        expect(temperatureMonitor.recordTemperature(-6)).toEqual(true);
    }))
});
describe('when I pass the array([5, 1, -7, 7, 8, 3]) to getCurrentMedian', function(){
    beforeEach(module('temperatureApp'));
    it('returns median as 4 for the array([5, 1, -7, 7, 8, 3])', inject(function(temperatureMonitor){
        var temperaturesList = [5, 1, -7, 7, 8, 3];
        expect(temperatureMonitor.getCurrentMedian(temperaturesList)).toEqual(4);
    }))
});
describe('when I pass the array([5, 1, -7, 7, 8, 3, 9]) to getCurrentMedian', function(){
    beforeEach(module('temperatureApp'));
    it('returns median as 4 for the array([5, 1, -7, 7, 8, 3, 9])', inject(function(temperatureMonitor){
        var temperaturesList = [5, 1, -7, 7, 8, 3, 9];
        expect(temperatureMonitor.getCurrentMedian(temperaturesList)).toEqual(5);
    }))
});