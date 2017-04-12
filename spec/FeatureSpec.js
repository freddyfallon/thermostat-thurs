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
});


