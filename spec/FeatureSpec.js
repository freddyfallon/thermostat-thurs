describe('Feature tests', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('Thermostat is set to 20 degrees by default', function(){
    expect(thermostat.temperature).toEqual(20);
  });
});

