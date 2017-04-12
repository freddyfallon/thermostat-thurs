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
  });

  describe('#down', function() {
    it('#down decreases the temperature by 1 degree', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
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
  });

  describe('when power saving mode is on', function() {
    it('maximum temperature is 25 degrees', function() {
      expect(thermostat.maxTemperature()).toEqual(25);
    });
  });
});
