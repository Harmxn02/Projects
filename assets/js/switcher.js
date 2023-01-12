"use strict";

document.addEventListener("DOMContentLoaded", setActive );


function setActive() {
    const $work = document.querySelector("#work");
    const $about = document.querySelector("#about");

    const $work_section = document.querySelector("#work_section");
    const $about_section = document.querySelector("#about_section");


    $about_section.classList.add("hidden");
    $work.classList.add("selected");


    $work.addEventListener("click", function() {
        $work.classList.add("selected");
        $about.classList.remove("selected");

        $about_section.classList.add("hidden");
        $work_section.classList.remove("hidden");
    })
    
    $about.addEventListener("click", function() {
        $about.classList.add("selected");
        $work.classList.remove("selected");

        $work_section.classList.add("hidden");
        $about_section.classList.remove("hidden");
    })
}