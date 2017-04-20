function pressed(navi){
  navi.classList.remove("resting");
  navi.classList.add("pressed");
  setTimeout(function(){navi.classList.remove("pressed");navi.classList.add("resting")},1000)
}

function show_drawer(){
  box = document.getElementById("drawer");
  box.classList.add("expanded_drawer");
  box.classList.remove("hidden_drawer");
  box = document.getElementById("list");
  box.classList.add("hidden_list");
  box.classList.remove("expanded_list");
}

function show_dropdown(){
  box = document.getElementById("list");
  box.classList.add("expanded_list");
  box.classList.remove("hidden_list");
}

function change_beverage(name){
  document.getElementById("beverage").innerHTML = name.id
  box = document.getElementById("list");
  box.classList.add("hidden_list");
  box.classList.remove("expanded_list");
}

function hide_everything(){
  box = document.getElementById("drawer");
  box.classList.add("hidden_drawer");
  box.classList.remove("expanded_drawer");
  box = document.getElementById("list");
  box.classList.add("hidden_list");
  box.classList.remove("expanded_list");
}
