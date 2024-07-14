var Planet = function (name, position, type) {
  this.name = name;
  this.position = position;
  this.type = type;
  this.moons = [];

  this.showPlanet = function () {
    var info = this.name + ": planet " + this.position;
    info += " - " + this.type;
    console.log(info);
    console.log("Moons: " + this.moons.join(", ") + ".");
  };

  this.addMoon = function (moon) {
    this.moons.push(moon);
  };
  this.removeMoon = function () {
    if (this.moons.length > 0) {
      this.moons.pop();
    } else {
      console.log("No moons to remove.");
    }
  };
};
