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

function setActiveTab(activeTab) {
  const tabs = document.querySelectorAll('[role="tab"]');

  tabs.forEach(tab => {
    tab.setAttribute("aria-selected", "false");
  });

  activeTab.setAttribute("aria-selected", "true");
}