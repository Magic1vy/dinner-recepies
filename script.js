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
function meal() {
  imgOne.setAttribute(
    "src",
    "https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1.jpg"
  );
  imgTwo.setAttribute(
    "src",
    "https://nourishedbynutrition.com/wp-content/uploads/2020/06/Summer-Vegetable-Pesto-Pasta-1-1.jpg"
  );

  imgThree.style.display = "block";
  imgThree.setAttribute(
    "src",
    "https://cookieandkate.com/images/2013/05/best-veggie-burger-recipe-3.jpg"
  );

  question.innerHTML = "Pizza night, pasta or burger?";
  btnOne.innerHTML = "Veggie Pizza";
  btnTwo.innerHTML = "Pesto Pasta";

  btnThree.style.display = "block";
  btnThree.innerHTML = "Veggie Burger";

  // Условная проверка перед добавлением слушателей
  if (!btnOne.hasEventListener("click", vegetarianPizza)) {
    btnOne.addEventListener("click", vegetarianPizza);
  }
  if (!btnTwo.hasEventListener("click", vegetarianPasta)) {
    btnTwo.addEventListener("click", vegetarianPasta);
  }
  if (!btnThree.hasEventListener("click", vegetarianBurger)) {
    btnThree.addEventListener("click", vegetarianBurger);
  }
}

function meat() {
  imgOne.setAttribute(
    "src",
    "https://cdn.glitch.global/7e5cf385-22f9-4296-819d-3074fcccd348/6.jpeg?v=1659402287870"
  );
  imgTwo.setAttribute(
    "src",
    "https://cdn.glitch.global/7e5cf385-22f9-4296-819d-3074fcccd348/7.jpeg?v=1659402291133"
  );
  question.innerHTML = "Today is a fish day?";
  btnOne.innerHTML = "Fish day";
  btnTwo.innerHTML = "Meat day";

  // Условная проверка перед добавлением слушателей
  if (!btnOne.hasEventListener("click", fishDay)) {
    btnOne.addEventListener("click", fishDay);
  }
  if (!btnTwo.hasEventListener("click", meatDay)) {
    btnTwo.addEventListener("click", meatDay);
  }
}


