var test = "";
var height = 4;
var space = ' '
var pound = '#'
var spaceNumber = height - 1
var poundNumber = height - 2

//Part 1 (need to comment out one for the other to work
//because of variable commonality)

// for(height; height > 0; height--) {
//   var spaceRepeat = space.repeat(spaceNumber);
//   var poundRepeat = pound.repeat(poundNumber);
  
//   console.log(spaceRepeat + poundRepeat);
//   spaceNumber--
//   poundNumber++
// }

//Part 2

for(height; height > 0; height--) {
  var spaceRepeat = space.repeat(spaceNumber);
  var poundRepeat = pound.repeat(poundNumber);
  
  console.log(spaceRepeat + poundRepeat + ' ' + poundRepeat + spaceRepeat);
  spaceNumber--;
  poundNumber++;
}  