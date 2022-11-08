// function changeBackgroundToDay() {
//   (document.getElementById("whole-div-id").style.filter = "brightness(3)"),
//   setTimeout(function () {
//     (document.getElementById("whole-div-id").style.backgroundImage = "url(/../media/day.png)");
//   }, 50),
//     setTimeout(function () {
//       document.getElementById("whole-div-id").style.filter = "brightness(100%)";
//     }, 100);
// }
// function changeBackgroundToNight() {
//   (document.getElementById("whole-div-id").style.filter = "brightness(3)"),
//   setTimeout(function () {
//     (document.getElementById("whole-div-id").style.backgroundImage = "url(/../media/night.png)");
//   }, 50);
//     setTimeout(function () {
//       document.getElementById("whole-div-id").style.filter = "brightness(100%)";
//     }, 100);
// }

function changeBackgroundToDay()
{
  document.getElementById("whole-div-id").style.backgroundImage = "url(/../media/day.png)";
}

function changeBackgroundToNight()
{
  document.getElementById("whole-div-id").style.backgroundImage = "url(/../media/night.png)";
}