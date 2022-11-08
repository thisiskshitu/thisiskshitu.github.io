document.getElementById("whole-div-id").style.backgroundImage = "url(media/day.png)";

function changeBackgroundToDay()
{
  document.getElementById("whole-div-id").style.filter = "blur(5px)";
  setTimeout
  (
    function changeBackgroundToDayBlur0()
    {
      document.getElementById("whole-div-id").style.filter = "blur(0px)";
    }, 200
  )
  setTimeout
  (
    function changeBackgroundToDayDisplay()
    {
      document.getElementById("whole-div-id").style.backgroundImage = "url(media/day.png)";
      // document.getElementById("btn-id1").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id2").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id3").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id4").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id5").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id6").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id7").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id8").style.background = "rgb(0, 0, 0, 0.50)";

      // document.getElementById("btn-id1").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id2").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id3").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id4").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id5").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id6").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id7").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id8").style.background = "rgb(0, 0, 0, 0.50)";
    }, 100
  )
}

function changeBackgroundToNight()
{
  // document.getElementById("whole-div-id").style.filter = "brightness(0)";
  document.getElementById("whole-div-id").style.filter = "blur(5px)";
  setTimeout
  (
    function changeBackgroundToNightBlur0()
    {
      // document.getElementById("whole-div-id").style.filter = "brightness(100%)";
      document.getElementById("whole-div-id").style.filter = "blur(0px)"; 
    }, 200
  )
  setTimeout
  (
    function changeBackgroundToNightDisplay()
    {
      document.getElementById("whole-div-id").style.backgroundImage = "url(media/night.png)";
      // document.getElementById("btn-id1").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id2").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id3").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id4").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id5").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id6").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id7").style.background = "rgb(0, 0, 0, 0.50)";
      // document.getElementById("btn-id8").style.background = "rgb(0, 0, 0, 0.50)";
    }, 100
  )
}