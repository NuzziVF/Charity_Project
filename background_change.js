var totalCount = 5;
function ChangeIt() {
  var num = Math.ceil(Math.random() * totalCount);
  document.body.background = "bgimages/" + num + ".jpg";
  document.body.style.backgroundRepeat = "no-repeat"; // Background repeat
  document.body.style.backgroundSize = "cover"; //Background will cover screen
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.body.style.backgroundBlendMode = "multiply";
}

ChangeIt();
