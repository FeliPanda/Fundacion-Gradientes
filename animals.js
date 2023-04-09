// // DOM HTML of animals array

// const likeAnimal = document.querySelector(".container_animals");

// const animals_images = animals.forEach((animal)=>{
//     const cardAnimal = document.createElement("div");
//     cardAnimal.className = "card_animals"
//     cardAnimal.innerHTML = `
//     <div class = "animal_img face front">
//         <img src=" ${animal.imagen}" alt="${animal.nombre}">
//         <p class = "tittle_pro"> ${animal.nombre} </p>
//     </div>

//     <div class = "Center_favorite">
//         <div class = "image_1">
//         </div>
//     </div>
//     `
//     likeAnimal.appendChild(cardAnimal);
// })

// // change hearth img to full hearth img as a like 

// const iLikeIt = document.querySelectorAll(".Center_favorite");
// const liked = document.querySelectorAll(".image_1");

// iLikeIt.forEach((like,index)=>{
//     like.addEventListener("click",()=>{
//         liked[index].classList.toggle("image_2");
//     });
// });

const likeAnimal = document.querySelector(".container_animals");

fetch('../informacion_animals.json')
.then(response => response.json())
.then(data => {
    data.animals.forEach(animal => {
        const cardAnimal = document.createElement("div");
        cardAnimal.className = "card_animals"
        cardAnimal.innerHTML = `
        <div class = "animal_img face front">
            <img src=" ${animal.imagen}" alt="${animal.nombre}">
            <p class = "tittle_pro"> ${animal.nombre} </p>
        </div>

        <div class = "Center_favorite">
            <div class = "image_1">
            </div>
        </div>
        `;
        likeAnimal.appendChild(cardAnimal);

        const iLikeIt = cardAnimal.querySelector(".Center_favorite");
        const liked = cardAnimal.querySelector(".image_1");

        iLikeIt.addEventListener("click",()=>{
            liked.classList.toggle("image_2");
            const emptyHeart = liked.querySelector(".empty-heart");
            const fullHeart = liked.querySelector(".full-heart");
            // emptyHeart.classList.toggle("hidden");
            // fullHeart.classList.toggle("hidden");
        });
    });
})
.catch(error => console.error(error));
