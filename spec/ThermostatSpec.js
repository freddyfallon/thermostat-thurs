describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('has a default temperature constant set to 20 degrees', function() {
    expect(thermostat.DEFAULTTEMPERATURE).toEqual(20);
  });
});
