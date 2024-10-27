let gameContainer = document.getElementById("gameContainer");
let gameDetailsContainer = document.getElementById("gameDetails");
let loadScreen = document.getElementById("theLoader");
export async function displayGames(dataPromise) {
    loadScreen.classList.replace("d-none", "d-flex")
    let data = await dataPromise;
    let allGames = "";
    for (let i = 0; i < data.length; i++) {
        allGames += `
       <div class="col" id="${data[i].id}">
                   <div data-id="582" class="card h-100 bg-transparent" role="button">
                       <div class=" card-body">
                           <figure class="position-relative">
                               <img class="card-img-top object-fit-cover h-100"
                                   src="${data[i].thumbnail}">

                           </figure>

                           <figcaption>

                               <div class="hstack justify-content-between">
                                   <h3 class="h6 small">${data[i].title}</h3>
                                   <span class="badge text-bg-primary p-2">Free</span>
                               </div>

                               <p class="card-text small text-center opacity-50">
                                   ${data[i].short_description}
                               </p>

                           </figcaption>
                       </div>

                       <footer class="card-footer small hstack justify-content-between">

                           <span class="badge badge-color">${data[i].genre}</span>
                           <span class="badge badge-color">${data[i].platform}</span>

                       </footer>
                   </div>
               </div>`

    }
    loadScreen.classList.replace("d-flex", "d-none");
    gameContainer.innerHTML = allGames;

}

export async function displayGameDetails(dataPromise) {
    loadScreen.classList.replace("d-none", "d-flex")
    let data = await dataPromise;
    let detailSection = "";
    detailSection += `<header class="hstack justify-content-between">
    <h1 class="text-center h3 py-4">Details Game</h1>
    <button class="btn-close btn-close-white" id="btnClose"></button>
    </header>
    <div class="row g-4" id="detailsContent">
    <div class="col-md-4">
    <img src="${data.thumbnail}" class="w-100" alt="image details">
    </div>
    <div class="col-md-8">
    <h3>Title: Ultimate Pirates</h3>
    <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                    <p class="small">${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank"
                        href="${data.game_url}">Show Game</a>
                </div>
                
                </div>`
                await setTimeout(() => {loadScreen.classList.replace("d-flex", "d-none")}, 100)
                gameDetailsContainer.innerHTML = detailSection;
                
            }
            
            
            