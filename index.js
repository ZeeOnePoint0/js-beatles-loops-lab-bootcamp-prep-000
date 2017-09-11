var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musician, instrument) {

  var newArr = [];

  for (i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + "plays" + instruments[i])
  }
  return newArr
}
