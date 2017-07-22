window.onload = function(){
  var d = new Date();
  document.getElementById("today").innerHTML = ('0' + d.getDate()).slice(-2)+"/"+('0' + d.getMonth()).slice(-2)+"/"+d.getFullYear();

  document.getElementById("time").innerHTML = ('0' + d.getHours()).slice(-2)+":"+('0' + d.getMinutes()).slice(-2);
};

function disp()
{
  document.getElementById("signup").style.display = "block";
}
function nodisp()
{
  document.getElementById("signup").style.display = "none";
}
