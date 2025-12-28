"use strict"

function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "hidden"
}

function showFeature(which) {
  const one = document.querySelector(".feature-one");
  const two = document.querySelector(".feature-two");
  const three = document.querySelector(".feature-three");

  one.classList.remove("active");
  two.classList.remove("active");
  three.classList.remove("active");

  if (which === 1) one.classList.add("active");
  if (which === 2) two.classList.add("active");
  if (which === 3) three.classList.add("active");
}
