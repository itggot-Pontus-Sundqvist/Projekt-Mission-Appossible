function pressed(navi){
  navi.classList.remove("resting");
  navi.classList.add("pressed");
  setTimeout(function(){navi.classList.remove("pressed");navi.classList.add("resting")},1000)
}

function show_drawer(){
  box = document.getElementById("drawer");
  box.classList.add("expanded_drawer");
  box.classList.remove("hidden_drawer");
}

function hide_drawer(){
  box = document.getElementById("drawer");
  box.classList.add("hidden_drawer");
  box.classList.remove("expanded_drawer");
}
