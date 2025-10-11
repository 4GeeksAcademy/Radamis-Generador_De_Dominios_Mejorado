import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let ext = [".com", ".com.br", ".us", ".es", ".net", ".io"];

  let list = "<ul>";

  for(let a=0; a<pronoun.length; a++){
    for(let b=0; b<adj.length; b++){
      for(let c=0; c<noun.length; c++){
        for(let d=0; d<ext.length; d++){

          list = list + "<li>" + pronoun[a] + adj[b] + noun[c] + ext[d] + "</li>";
                  
         console.log(list);
         list = list + "</ul>";
        }
      }
    } 
  }

document.getElementById("dominio").innerHTML = list;
  console.log("Hello Rigo from the console!");
};



