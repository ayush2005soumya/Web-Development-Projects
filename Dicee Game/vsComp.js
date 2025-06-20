function playGame() {
    var userChoice = document.getElementById("userDice").value;
    var randnum1 = parseInt(userChoice);
    var randimsrc1 = "images/dice" + randnum1 + ".png";
    document.querySelector(".img1").setAttribute("src", randimsrc1);

    var randnum2 = Math.floor(Math.random() * 6) + 1;
    var randimsrc2 = "images/dice" + randnum2 + ".png";
    document.querySelector(".img2").setAttribute("src", randimsrc2);

    if (randnum1 > randnum2) {
      document.querySelector("h1").innerHTML = "🎉 You Win!";
    } else if (randnum2 > randnum1) {
      document.querySelector("h1").innerHTML = "💻 Computer Wins!";
    } else {
      document.querySelector("h1").innerHTML = "It's a Draw!";
    }
  }