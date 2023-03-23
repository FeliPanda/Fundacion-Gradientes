var animals = [
    {
    nombre: "Cóndor de los Andes",
    nombre_cientifico: "Vultur gryphus",
    habitat: "Montañas de los Andes",
    descripcion: "El cóndor de los Andes es una especie de ave rapaz que habita en las montañas de los Andes en Sudamérica. Es una de las aves más grandes del mundo, con una envergadura de hasta 3 metros."
    },
    {
    nombre: "Oso de anteojos",
    nombre_cientifico: "Tremarctos ornatus",
    habitat: "Bosques tropicales",
    descripcion: "El oso de anteojos es una especie de oso que habita en los bosques tropicales de Sudamérica, incluyendo Colombia. Es uno de los pocos osos que habita en América del Sur y se caracteriza por tener manchas blancas alrededor de los ojos."
    },
    {
    nombre: "Caimán",
    nombre_cientifico: "Crocodylus intermedius",
    habitat: "Ríos y lagunas",
    descripcion: "El caimán del Orinoco es una especie de caimán que habita en los ríos y lagunas de Sudamérica, incluyendo Colombia. Es uno de los caimanes más grandes del mundo, con una longitud de hasta 6 metros."
    },
    {
    "nombre": "Jaguar",
    "nombre_cientifico": "Panthera onca",
    "habitat": "Selvas tropicales",
    "imagen": "https://www.nationalgeographic.com.es/medio/2021/01/19/jaguar_37b3f3f3_2000x1333.jpg",
    "descripcion": "El jaguar es el felino más grande de América y uno de los más emblemáticos de Colombia. Su pelaje es de un color amarillo dorado con manchas negras. Es un depredador solitario y su dieta consiste principalmente en mamíferos grandes como monos, tapires y venados."
}
];
// starting favorites section, add an animal to a favorites and save it on storage

// var favoriteAnimal = document.getElementById("favorite_animal");
// favoriteAnimal.addEventListener("click", function() {
//     var addedFavorites = new Image();
//     addedFavorites.src = "favorito_lleno.png";
//     addedFavorites.onload = function(){
//         favoriteAnimal.src = addedFavorites.src;
//     }
// });

// esta parte de arriba no me funciono para cambiar la imagen al dar click :( 

// intento dos para cambiar imagen al dar click, 

const favorites = document.querySelector(".Center_favorite");
const like = document.querySelector(".div_like")

favorites.onclick = (e) => {
    like.classList.toggle("image_2")
}

// funciono la segunda opcion, pero solo para el primero(el jaguar), 
// intente cambiar query selector por queryselectorAll, que lei que podia funcionar, pero no me funciono

// ahora agregarlos al storage tambien
// no me va no se si es porque debo crear un obligatoriamente un boton.
// o si debe ir dentro del html el nombre de cada animal, pero como tengo las imagenes no queria que 
// aparecieran los nombres y asi.

var addFavorites = document.querySelectorAll(".div_like");
for (var i = 0; i < addFavorites.length; i++) {
    addFavorites[i].addEventListener("click", function(){
        var animal = this.getAttribute("data-animal");
        var animalInformation = animal[animals];
        var animalInformationJSON = JSON.stringify(animalInformation);
        localStorage.setItem("animal_favorito", animalInformationJSON);
        alert("El animal " + animalInformation.nombre + " ha sido agregado a favoritos.");
    });
}


// esta es una funcion para agrandar la imagen al dar click, la hice unicamente para el jaguar tambien,
// sin embargo aun no funciona bien porque me expanda la imagen como si hiciera zoom
// y no me la muestra completa, no se si si es porque estoy usando un link y debo descargar la imagen
// o porque sucede eso

function enlargeImage(container) {
    if (!container.isEnlarged) {
    container.querySelector('img').style.transform = 'scale(3)';
    container.style.width = '1650px';
    container.style.height = '850px';
    container.isEnlarged = true;
    container.preventDefault()
    }
}

function shrinkImage(container) {
    container.querySelector('img').style.transform = 'scale(1)';
    container.style.width = '500px';
    container.style.height = '500px';
    container.isEnlarged = false;
}


