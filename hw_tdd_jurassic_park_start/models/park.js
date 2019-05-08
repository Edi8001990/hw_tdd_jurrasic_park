const Park = function(name, ticket_price){
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs_collection = [];

}

Park.prototype.numberOfDinosaurs = function(){
  return this.dinosaurs_collection.length;
}

Park.prototype.addDino = function(dinosaur){
  this.dinosaurs_collection.push(dinosaur);
}


Park.prototype.removeDino = function(dinosaur){
  const indexOfDinosaur = this.dinosaurs_collection.indexOf(dinosaur);
  this.dinosaurs_collection.splice(indexOfDinosaur, 1);
}

module.exports = Park;
