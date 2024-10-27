// let currentCategory = document.querySelector(".active");
/* 
 */

import { Games } from "./gameCategory.js"
import { displayGames, displayGameDetails } from "./UI.js"
import { GameDetails } from "./gameDetails.js"

let allCategories = document.getElementById("categories");
let currentCategory = document.querySelector(".active");
let starter = new Games("mmorpg");
let gameContainer = document.getElementById("gameContainer");
let gameDetailsContainer = document.getElementById("gameDetails");
//loadScreen.classList.replace("d-none", "d-flex")

displayGames(starter.fetchGames(currentCategory.innerHTML)); // display games on startup
allCategories.addEventListener("click", async function (e) { // display clicked category of games
    e.target.classList.add("active");
    currentCategory.classList.remove("active");
    currentCategory = e.target;
    displayGames(starter.fetchGames(currentCategory.innerHTML));
});

gameContainer.addEventListener("click", async function (e) { // display clicked game details
    let requiredTarget = e.target.closest(".col");
    let gameDetails = new GameDetails(requiredTarget.id);
    let data = await gameDetails.fetchGameDetails();
    displayGameDetails(data);
    gameDetailsContainer.closest("section").classList.replace("d-none", "d-block");
    gameContainer.closest("section").classList.replace("d-block", "d-none");
})


gameDetailsContainer.addEventListener("click", function (e) { // hide clicked game details
    console.log(e.target);
    if (e.target.classList.contains("btn-close")) {
        gameDetailsContainer.closest("section").classList.replace("d-block", "d-none");
        gameContainer.closest("section").classList.replace("d-none", "d-block");

    }
})

