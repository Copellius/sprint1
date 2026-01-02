"use strict"

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("hidden");
  sidebar.classList.add("flex");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("hidden");
  sidebar.classList.remove("flex");
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

function setActive(tab) {

  document.querySelectorAll("h3 span.bg-red-500").forEach(line => {
    line.classList.add("hidden");
  });

  tab.querySelector("span.bg-red-500").classList.remove("hidden");
}