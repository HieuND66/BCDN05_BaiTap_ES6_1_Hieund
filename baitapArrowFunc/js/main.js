const colorList = ["pallet", "viridian", "pewter", "cerulean",  "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

let loadColorBtn = (colorList) =>{
  let content = '';
    colorList.map(function (sp, index) {
    // console.log(colorList[color]);
    console.log(sp);
    if(index == 0){
      content  += `
      <button class="color-button ${colorList[index]} active" onclick=""></button>
      `
    }
    else{
      content += `
      <button class="color-button ${colorList[index]}"></button>
      `

    }
  })
  document.getElementById("colorContainer").innerHTML = content;
}
loadColorBtn(colorList)

let colorBtn = document.getElementsByClassName("color-button");

for(let i = 0; i < colorBtn.length; i++){
  colorBtn[i].addEventListener("click", function(){
       // console.log(colorList[i]);
    changeColor(colorList[i], i)
 
  })
}

let house = document.getElementById("house");
let changeColor = (color, index) => {
  for(let i = 0; i < colorBtn.length; i++){

    colorBtn[i].classList.remove('active');
    colorBtn[index].classList.add("active");
    house.className = "house " + color;
  }
}
 