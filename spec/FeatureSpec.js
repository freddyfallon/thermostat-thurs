describe('Feature tests', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

    it('Thermostat is set to 20 degrees by default', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('#up increases the temperature by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
});

