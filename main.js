

var reservations = {
  'Bob': { claimed: false },

  'Ted': { claimed: true }
};


var claimReservation = function () {
  var name = document.getElementById("pers").value;
  for (var input in reservations) {
    if (name.toLowerCase() == input.toLowerCase() && reservations[input].claimed === false) {
      alert("Welcome!");
      document.getElementById('confirmed').innerHTML = "Your table is ready " + name;
      return;
    } else if (name.toLowerCase() == input.toLowerCase() && reservations[input].claimed === true) {
      alert("your friends are waiting");
      document.getElementById('taken').innerHTML = "Table has been claimed for " + name;
      return;
    }

  }

  reservations[name] = { claimed: true };
  alert("We've added your reservation");
  document.getElementById('new-res').innerHTML = "New Reservation made for " + name;
  return;
};