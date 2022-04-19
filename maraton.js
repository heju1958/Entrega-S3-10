function positions(firstPlace, secondPlace, lastPlace) {
  array = [firstPlace, secondPlace, lastPlace];

  if (secondPlace == "Daniel") {
    array[1] = firstPlace;
    array[0] = secondPlace;
  } 
  else if (lastPlace == "Daniel") {
    array[1] = lastPlace;
    array[2] = secondPlace
  }

  console.log(`1º colocado ${array[0]}`)
  console.log(`2º colocado ${array[1]}`)
  console.log(`3º colocado ${array[2]}`)
}

positions( "Monoel", "Rafael", "Daniel");

//simplificado//

//function podio(firstPlace, secondPlace, lastPlace){
//if (secondPlace == "Daniel"){
// return "1º Colocado Daniel"
//}
//return `1º Colocado ${firstPlace}`;
//}
