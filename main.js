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
  const features = document.querySelectorAll(
    ".feature-one, .feature-two, .feature-three"
  );

  features.forEach(feature => {
    feature.classList.add("hidden");
  });

  if (which === 1) document.querySelector(".feature-one").classList.remove("hidden");
  if (which === 2) document.querySelector(".feature-two").classList.remove("hidden");
  if (which === 3) document.querySelector(".feature-three").classList.remove("hidden");
}