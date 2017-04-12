describe('Feature tests', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe('temperature', function(){
    it('Thermostat is set to 20 degrees by default', function(){
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe('up', function(){
    it('#up increases the temperature by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('down', function(){
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

  describe('when power saving mode is on', function() {
    it('maximum temperature is 25 degrees', function() {
      expect(thermostat.maxTemperature()).toEqual(25);
    });
  });
  describe('when power saving mode is off', function() {
    it('maximum temperature is 32 degrees', function() {
      thermostat.disablePowerSavingMode();
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


