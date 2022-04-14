function positions(firstPlace, secondPlace, lastPlace) {
  array = [firstPlace, secondPlace, lastPlace];

  if (firstPlace == "Daniel") {
  } else if (secondPlace == "Daniel") {
    array[1] = firstPlace;
    array[0] = secondPlace;
  } else lastPlace == "Daniel";
  {
    array[1] = lastPlace;
  }

  return `1º Colocado ${array[0]}`;
}

console.log(positions("Daniel", "Monoel", "Rafael"));

//simplificado//

//function podio(firstPlace, secondPlace, lastPlace){
//if (secondPlace == "Daniel"){
// return "1º Colocado Daniel"
//}
//return `1º Colocado ${firstPlace}`;
//}
