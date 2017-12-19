//INDIVIDUAL EXERCISE 1

var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}
function keysToLowerCase(obj) {
  var keys = Object.keys(obj);
  var n = keys.length;
  while (n--) {
    var key = keys[n]; // "cache" it, for less lookups to the array
    if (key !== key.toLowerCase()) { // might already be in its lower case version
      obj[key.toLowerCase()] = obj[key] // swap the value to a new lower case key
      delete obj[key] // delete the old key
    }
  }
  return (obj);
}
keysToLowerCase(reservations);

var claimReservation = function () {
  var name = document.getElementById("pers").value;

  name = name.toLowerCase();


  //if person has a reservation
  if (reservations[name]) {
    //if their table is claimed 
    if (reservations[name].claimed) {
      alert("sorry it was claimed!");
    } else {
      alert('Welcome');
    }
  }
  // if the person hasnt made a res...add to reservations array
  else {
    reservations[name] = { claimed: true };
    document.getElementById('output').innerHTML = "New Reservation made for " + name;
  }
}

//claimReservation();
