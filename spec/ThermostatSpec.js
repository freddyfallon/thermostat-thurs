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
});
