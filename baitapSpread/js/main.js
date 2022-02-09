let text = document.querySelector(".heading").innerHTML;

let charset = [...text];

let hoverText = () =>{
  let content = "";
  for(let  i in charset){
    content += `
    <span>${charset[i]}</span>
    `
  }
  document.querySelector(".heading").innerHTML = content;
}
hoverText()