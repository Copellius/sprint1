"use strict"

function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}

function showFeatureOne(){
    const featureOne = document.querySelector(".feature-one")
    const featureTwo = document.querySelector(".feature-two")
    const featureThree = document.querySelector(".feature-three")
    featureOne.style.display = "block"
    featureTwo.style.display = "none"
    featureThree.style.display = "none"
}
function showFeatureTwo(){
    const featureOne = document.querySelector(".feature-one")
    const featureTwo = document.querySelector(".feature-two")
    const featureThree = document.querySelector(".feature-three")
    featureOne.style.display = "none"
    featureTwo.style.display = "block"
    featureThree.style.display = "none"
}
function showFeatureThree(){
    const featureOne = document.querySelector(".feature-one")
    const featureTwo = document.querySelector(".feature-two")
    const featureThree = document.querySelector(".feature-three")
    featureOne.style.display = "none"
    featureTwo.style.display = "none"
    featureThree.style.display = "block"
}

