function Thermostat() {
  this.temperature = this.DEFAULTTEMPERATURE;
};

Thermostat.prototype.DEFAULTTEMPERATURE = 20;

Thermostat.prototype.up = function() {
  this.temperature += 1;
};
