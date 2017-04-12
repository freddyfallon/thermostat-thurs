function Thermostat() {
  this.temperature = this.DEFAULTTEMPERATURE;
  this.minimumTemperature = this.MINIMUMTEMPERATURE;
};

Thermostat.prototype.MINIMUMTEMPERATURE = 10;

Thermostat.prototype.DEFAULTTEMPERATURE = 20;

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  this.temperature -= 1;
};
