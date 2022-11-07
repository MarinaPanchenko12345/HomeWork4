function orderPizza() {
  let a, b, c;
  a = prompt("Which pizza do you want to order? Big or Small?");
  b = prompt("Meat or vegan?");
  c = prompt("With olives?Yes or No?");
  if (c == "yes") {
    alert("Ok!Your order " + a + " " + b + " pizza with olives!");
  } else if (c == "no") {
    let q1 = prompt("Are you sure?");
    if (q1 == "no") {
      let q2 = prompt("Do you want little or much?");
      if (q2 == "little") {
        alert("Ok!Your order " + a + " " + b + " pizza with little olives!");
      } else if (q2 == "much") {
        alert("Ok!Your order " + a + " " + b + " pizza with much olives!");
      }
    } else if (q1 == "yes") {
      alert("Ok!Your order " + a + " " + b + " pizza free olives!");
    }
  }
}

function orderHamburger() {
  let a, b, c, d, e, f;
  a = prompt("Which hamburger do you want to order? Big or Small?");
  b = prompt("Cutlet/s 1 or 2?");
  c = prompt("Roasting high or medium?");
  d = prompt("Ketchup?");
  if (d=="yes"){
    alert("Ok!Your order " + a + " hamburger with " + b + " cutlet/s " + c + " roasting, and with ketchup");
  }else if (d=="no") {
    let e = prompt("Mayonnaise?") ;
    if (e == "yes") {
      let f = prompt("Do you want little or much?");
      if (f == "little") {
        alert("Ok!Your order " + a + " hamburger with " + b + " cutlet/s " + c + " roasting, and little mayonnaise!");
      } else if (f == "much") {
        alert("Ok!Your order " + a + " hamburger with " + b + " cutlet/s " + c + " roasting, and much mayonnaise!");
      }
    } else if (e == "no") {
      alert("Ok!Your order " + a+ " hamburger with " + b + " cutlet/s " + c + " roasting, without mayonnaise!");
    }
  }
}



