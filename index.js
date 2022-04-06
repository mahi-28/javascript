function myMass() {
  const mass = document.getElementById("mass").value;
  console.log(mass);
  const planet = document.getElementById("planets").value;
  console.log(planet);
  if (mass == "" && planet == "") {
    document.getElementById(
      "err"
    ).innerHTML += `<p class = "err-msg">Mass and planet is required!!<p>`;
  }
  if (mass != "" && planet != "") {
    document.getElementById("err").style.display = "none";
  }

  if (planet == "Earth") {
    const value = mass * 9.8;
    document.getElementById(
      "ans"
    ).innerHTML += `<p class = "ans"> ${value} <p>`;
  }
}
