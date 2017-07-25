window.onload = function(){
  var d = new Date();
  document.getElementById("today").innerHTML = ('0' + d.getDate()).slice(-2)+"/"+('0' + d.getMonth()).slice(-2)+"/"+d.getFullYear();

  document.getElementById("time").innerHTML = ('0' + d.getHours()).slice(-2)+":"+('0' + d.getMinutes()).slice(-2);

};

function disp()
{
  document.getElementById("signup").style.display = "block";
};
function nodisp()
{
  document.getElementById("signup").style.display = "none";
};

$(document).ready(function () {
  setTimeout(function () {
      $('#claim').hide();
      // $('#claim').fadeOut('fast');
  }, 5000);
});

function product(p){
  var ps = document.getElementsByClassName("thumbnail");
  for (var i = 0; i < ps.length; i++) {
    if (ps[i].id==p) {
      document.getElementById(ps[i].id).style.background = "white";
      document.getElementById(ps[i].id+"div").style.display = "block";
    }
    else {
      document.getElementById(ps[i].id).style.background = "black";
      document.getElementById(ps[i].id+"div").style.display = "none";
    };
  };


};

function disableMute() {
  if (document.getElementById("myVideo").muted==true) {
    document.getElementById("myVideo").muted=false;
    document.getElementById("on").style.display="block";
    document.getElementById("off").style.display="none";
  }
  else {
    document.getElementById("myVideo").muted=true;
    document.getElementById("on").style.display="none";
    document.getElementById("off").style.display="block";
  }
}
