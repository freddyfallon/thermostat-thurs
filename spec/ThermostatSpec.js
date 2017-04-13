'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  describe('DEFAULTTEMPERATURE', function(){
    it('has a default temperature constant set to 20 degrees', function() {
      expect(thermostat.DEFAULTTEMPERATURE).toEqual(20);
    });
  });

  describe('MAXIMUMTEMPERATURE', function(){
    it('has a maximum temperature set to 32 degrees', function() {
      expect(thermostat.MAXIMUMTEMPERATURE).toEqual(32);
    });
  });

  describe('#up', function(){
    it('increases the temperature by 1', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('has a maximum temperature of 25 if power saving mode is on', function() {
      for (var i = 0; i < 5; i++){
        thermostat.up();
      };
      expect(function(){thermostat.up();}).toThrowError("Power saving mode on: maximum temperature is 25 degrees");
    });

    it('has a maximum temperature of 32 if power saving mode is off', function() {
      thermostat.powerSavingOff();
      for (var i = 0; i < 12; i++){
        thermostat.up();
      };
      expect(function(){thermostat.up();}).toThrowError("Power saving mode off: maximum temperature is 32 degrees");
    });
  });

  describe('#down', function() {
    it('#down decreases the temperature by 1 degree', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature of 10', function() {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
    };
      expect(function(){thermostat.down();}).toThrowError("Minimum temperature is 10 degrees");
    });
  });

  describe('minimum temperature', function(){
    it('Minimum temperature is 10 degrees', function(){
      expect(thermostat.minimumTemperature).toEqual(10);
    });
  });

  describe('power saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.isPowerSavingModeEnabled).toBe(true);
    });

    it('can be turned off', function() {
      thermostat.powerSavingOff();
      expect(thermostat.isPowerSavingModeEnabled).toBe(false);
    });

    it('can be turned on', function() {
      thermostat.powerSavingOff();
      thermostat.powerSavingOn();
      expect(thermostat.isPowerSavingModeEnabled).toBe(true);
    });

  });

  describe('maximum temperature', function() {

    it('is 25 degrees when power saving mode is enabled', function() {
      expect(thermostat.maxTemperature()).toEqual(25);
      });

    it('is 32 degrees when power saving mode is disabled', function() {
      thermostat.powerSavingOff();
      expect(thermostat.maxTemperature()).toEqual(32);
      });
    });

  describe('reset function', function() {
    it('resets the temperature to 20', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('usage', function() {
    it('returns low usage when temperature is less than 18', function() {
     thermostat.temperature = 17;
      expect(thermostat.usage()).toEqual('low-usage');
    });

    it('returns high usage when temperature is more than 25', function() {
     thermostat.temperature = 26;
      expect(thermostat.usage()).toEqual('high-usage');
    });

    it('returns medium usage when temperature is less than 25 but more than 18', function() {
     thermostat.temperature = 20;
      expect(thermostat.usage()).toEqual('medium-usage');
    });
  });
});
