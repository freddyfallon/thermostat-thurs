function Thermostat() {
  this.temperature = this.DEFAULTTEMPERATURE;
  this.minimumTemperature = this.MINIMUMTEMPERATURE;
  this.isPowerSavingModeEnabled = true;
};

Thermostat.prototype.MINIMUMTEMPERATURE = 10;

Thermostat.prototype.DEFAULTTEMPERATURE = 20;

Thermostat.prototype.MAXIMUMTEMPERATUREPOWERSAVE = 25;

Thermostat.prototype.MAXIMUMTEMPERATURE = 32;

Thermostat.prototype.LOWUSAGELIMIT = 18;

Thermostat.prototype.HIGHUSAGELIMIT = 25;

Thermostat.prototype.up = function() {

  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  this.temperature -= 1;
};

Thermostat.prototype.maxTemperature = function() {
  if (this.isPowerSavingModeEnabled === true) {
  return this.MAXIMUMTEMPERATUREPOWERSAVE;
  } else
   return this.MAXIMUMTEMPERATURE;
};

Thermostat.prototype.disablePowerSavingMode = function() {
  this.isPowerSavingModeEnabled = false;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULTTEMPERATURE;
};

Thermostat.prototype.usage = function() {
  if(this.temperature < this.LOWUSAGELIMIT) {
    return 'low-usage';
  }
  else if(this.temperature < this.HIGHUSAGELIMIT && this.temperature > this.LOWUSAGELIMIT) {
    return 'medium-usage';
  } else
    return 'high-usage';
};
