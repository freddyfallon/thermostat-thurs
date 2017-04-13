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
  if (this.isPowerSavingModeEnabled === true && (this.temperature + 1 > 25)) {
    throw new Error("Power saving mode on: maximum temperature is 25 degrees");
  }
  else if (this.isPowerSavingModeEnabled === false && (this.temperature + 1 > 32)) {
    throw new Error("Power saving mode off: maximum temperature is 32 degrees");
  }
  return (this.temperature += 1);
};

Thermostat.prototype.down = function(){
  if ((this.temperature -1) < 10) {
    throw new Error("Minimum temperature is 10 degrees");
  }
  this.temperature -= 1;
};

Thermostat.prototype.maxTemperature = function() {
  if (this.isPowerSavingModeEnabled === true) {
  return this.MAXIMUMTEMPERATUREPOWERSAVE;
  } else
   return this.MAXIMUMTEMPERATURE;
};

Thermostat.prototype.powerSavingOff = function() {
  this.isPowerSavingModeEnabled = false;
};

Thermostat.prototype.powerSavingOn = function() {
  if (this.temperature > 25){
    this.reset();
    this.isPowerSavingModeEnabled = true;
  }
  this.isPowerSavingModeEnabled = true;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULTTEMPERATURE;
};

Thermostat.prototype.usage = function() {
  if(this.temperature < this.LOWUSAGELIMIT) {
    return 'low-usage';
  } else if(this.temperature > this.HIGHUSAGELIMIT) {
    return 'high-usage';
  }
   else {
    return 'medium-usage';
  }
};
