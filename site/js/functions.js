function pressed(navi){
  navi.classList.remove("resting");
  navi.classList.add("pressed");
  setTimeout(function(){navi.classList.remove("pressed");navi.classList.add("resting")},1000)
}

function show_drawer(){
  box = document.getElementById("drawer");
  if (box.style.left != "0px"){
    box.style.left = "0px"
  } else {
    box.style.left = "-1000px"
  }
}

function hide_drawer(){
  box = document.getElementById("drawer");
  box.style.left = "-1000px"
}
