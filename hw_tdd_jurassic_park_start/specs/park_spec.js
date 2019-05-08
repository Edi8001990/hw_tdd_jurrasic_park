const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;
let dinosaur1;
let dinosaur2;
let dinosaur3;




  beforeEach(function () {
    dinosaur1 = new Dinosaur("Bob", "diet1", 50);
    dinosaur2 = new Dinosaur("John" , "diet2", 80);
    dinosaur3 = new Dinosaur("John" , "diet3", 100);
  //   dinosaur2 = new Dinosaur("John");
  //   dinosaur3 = new Dinosaur("Matty");
  //
  //dino_pack = [dinosaur1, dinosaur2, dinosaur3];

  })

  it('should have a name', function(){
    park = new Park("Jurassic Park");
  });

  it('should have a ticket price', function(){
    park = new Park(50);
  });


  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0)
  });




  it('should be able to add a dinosaur to its collection' , function(){
    park.addDino(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection' ,function(){
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.removeDino(dinosaur2);
    const expected = [dinosaur3];
    const actual = park.dinosaurs_collection;
    assert.strictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
