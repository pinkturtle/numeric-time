// Generated by CoffeeScript 1.10.0
(function() {
  Number.prototype.millisecond = Number.prototype.milliseconds = function() {
    return this.valueOf();
  };

  Number.prototype.second = Number.prototype.seconds = function() {
    return this.miliseconds() * 1000;
  };

  Number.prototype.minute = Number.prototype.minutes = function() {
    return this.seconds() * 60;
  };

  Number.prototype.hour = Number.prototype.hours = function() {
    return this.minutes() * 60;
  };

}).call(this);
