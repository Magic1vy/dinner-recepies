const imgOne = document.querySelector("#imgOne");
const imgTwo = document.querySelector("#imgTwo");

const question = document.querySelector("h2");

const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");

const buttonContainer= document.querySelector(".btn");
const btnThree = document.createElement("button");
btnThree.classList.add("btnThree");
buttonContainer.appendChild(btnThree);

const imagesContainer= document.querySelector(".images");
const imgThree = document.createElement("img");
imgThree.classList.add("imgThree");
imagesContainer.appendChild(imgThree);

btnOne.addEventListener("click", vegetarian);
btnTwo.addEventListener("click", meat);

function vegetarian(){
    

    imgOne.setAttribute("src", "https://cdn.glitch.global/7e5cf385-22f9-4296-819d-3074fcccd348/4.jpeg?v=1659402280454");
    imgTwo.setAttribute("src", "https://cdn.glitch.global/7e5cf385-22f9-4296-819d-3074fcccd348/5.jpeg?v=1659402283535");
    question.innerHTML = "Do you prefer salad or main dish?";
    btnOne.innerHTML = "Salad";
    btnTwo.innerHTML = "Main dish";

    btnOne.removeEventListener("click", vegetarian); 
    btnTwo.removeEventListener("click", meat);
    btnTwo.addEventListener("click", meal);
    btnOne.addEventListener("click", salad);
}
function salad (){
    

    imgOne.setAttribute("src", "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps100714_SD153320C12_04_6b-4.jpg?w=1200");
    imgTwo.setAttribute("src", "https://stephaniesain.com/wp-content/uploads/2019/04/Summer-Fruit-Salad3.jpg");
    question.innerHTML = "Wich salad do you want to try?";
    btnOne.innerHTML = "Bow Tie & Spinach Salad";
    btnTwo.innerHTML = "Summer fruit salad";

    btnOne.removeEventListener("click", salad); 
    btnTwo.removeEventListener("click", meal);
    btnOne.addEventListener("click", vegetarianSalad);
    btnTwo.addEventListener("click", fruitSalad);
}

function vegetarianSalad(){
    window.open("https://www.tasteofhome.com/recipes/bow-tie-spinach-salad/");
}
function fruitSalad(){
    window.open("https://stephaniesain.com/summer-fruit-salad/");
}
function meal (){
    

    imgOne.setAttribute("src", "https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1.jpg");
    imgTwo.setAttribute("src",  "https://nourishedbynutrition.com/wp-content/uploads/2020/06/Summer-Vegetable-Pesto-Pasta-1-1.jpg");
    
    imgThree.style.display= "block";
    imgThree.setAttribute("src", "https://cookieandkate.com/images/2013/05/best-veggie-burger-recipe-3.jpg");


    question.innerHTML = "Pizza night, pasta or burger?";
    btnOne.innerHTML = "Veggie Pizza";
    btnTwo.innerHTML = "Pesto Pasta";

    btnThree.style.display= "block";
    btnThree.innerHTML = "Veggie Burger";

    btnOne.addEventListener("click", vegetarianPizza );
    btnTwo.addEventListener("click", vegetarianPasta);
    btnThree.addEventListener("click", vegetarianBurger);
}

function vegetarianPizza(){
    window.open("https://cookieandkate.com/veggie-pizza-recipe/");
}
function vegetarianPasta(){
    window.open("https://nourishedbynutrition.com/summer-vegetable-pesto-pasta/");
}
function vegetarianBurger(){
    window.open("https://cookieandkate.com/best-veggie-burger-recipe/");
}


function meat(){
    

    imgOne.setAttribute("src", "https://cdn.glitch.global/7e5cf385-22f9-4296-819d-3074fcccd348/6.jpeg?v=1659402287870");
    imgTwo.setAttribute("src", "https://cdn.glitch.global/7e5cf385-22f9-4296-819d-3074fcccd348/7.jpeg?v=1659402291133");
    question.innerHTML = "Today is a fish day?";
    btnOne.innerHTML = "Fish day";
    btnTwo.innerHTML = "Meat day";

    btnOne.addEventListener("click", fishDay);
    btnTwo.addEventListener("click", meatDay);
} 
function fishDay(){
    

    imgOne.setAttribute("src", "https://www.feastingathome.com/wp-content/uploads/2018/09/Halibut-with-Zucchini-Noodles-102-2.jpg");
    imgTwo.setAttribute("src", "https://www.feastingathome.com/wp-content/uploads/2017/07/fish-tacos-with-cilantro-cabbage-slaw-100-2.jpg");

    imgThree.style.display= "block";
    imgThree.setAttribute("src", "https://www.feastingathome.com/wp-content/uploads/2017/01/poke-bowl-114.jpg");


    question.innerHTML = "Wich dish with fish do you like?";
    btnOne.innerHTML = "Zucchini Noodles";
    btnTwo.innerHTML = "Fish Tacos";
    
    btnThree.style.display= "block";
    btnThree.innerHTML = " Poke Bowl";

    btnOne.addEventListener("click", zucchiniNoodles);
    btnTwo.addEventListener("click", fishTacos);
    btnThree.addEventListener("click", pokeBowl);
}
function zucchiniNoodles(){
    window.open("https://www.feastingathome.com/pan-seared-halibut-with-lemony-zucchini-noodles/");
}
function fishTacos(){
    window.open("https://www.feastingathome.com/grilled-fish-tacos-with-cabbage-slaw/");
}
function pokeBowl(){
    window.open("https://www.feastingathome.com/poke-bowl/");
}
function meatDay() {
    

    imgOne.setAttribute("src", "https://girlandthekitchen.com/wp-content/uploads/2014/03/Wild-Mushroom-and-Beef-Stew-Recipe-6-of-10.jpg.webp");
    imgTwo.setAttribute("src",  "https://cafedelites.com/wp-content/uploads/2017/12/Teriyaki-Cocktail-Meatballs-IMAGE-510.jpg" );

    imgThree.style.display= "block";
    imgThree.setAttribute("src","https://www.bakersroyale.com/wp-content/uploads/2016/01/Wine-Braised-Short-Ribs-via-Bakers-Royale.jpg" );


    question.innerHTML = "Chose your passion?";
    btnOne.innerHTML = "Wild Mushroom and Beef Stew";
    btnTwo.innerHTML = "Teriyaki Beef Meatballs";
    
    btnThree.style.display= "block";
    btnThree.innerHTML = "Wine Braised Short Ribs";

    btnOne.addEventListener("click", stew);
    btnTwo.addEventListener("click", meatballs);
    btnThree.addEventListener("click", ribs);
}
function stew(){
    window.open("https://girlandthekitchen.com/wild-mushroom-and-beef-stew/");
}
function meatballs(){
    window.open("https://cafedelites.com/best-teriyaki-beef-meatballs/");
}
function ribs(){
    window.open("https://www.bakersroyale.com/wine-braised-short-ribs/?utm_source=feedburner&utm_medium=email&utm_campaign=Feed%3A+bakersroyaleblog+%28Bakers+Royale%29");
}


