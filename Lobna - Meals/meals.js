const buttons = document.querySelectorAll('.cart');

for (let i=0; i<buttons.length; i++) {

  buttons[i].addEventListener("click" , (e)=> {

    if (buttons[i].innerHTML=="Add to cart") {
      buttons[i].innerHTML = "Remove";
      buttons[i].style.backgroundColor = "grey";
    }

    else {
      buttons[i].innerHTML = "Add to cart" ;
      buttons[i].style.backgroundColor = "#f17228" ;
    }

  })

}