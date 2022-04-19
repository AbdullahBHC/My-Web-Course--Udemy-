let div = document.getElementById("div")
div.addEventListener("click",run)
function run(e){
    console.log("Tıklandı")
}

let text = document.getElementById("text")
text.addEventListener("dblclick",run)
function run(e){
    console.log(e.type)
}

div.addEventListener("mousedown",function(){console.log("mousedown")}) // tıklayınca / click benzer
div.addEventListener("mouseup",function(){console.log("mouseup")}) // tıklamayı bırakınca

text.addEventListener("mouseover",function(){console.log("mouseover")}) // üzerine gelince
// içindeki elemanların üzerine gelince de çalışır
text.addEventListener("mouseout",function(){console.log("mouseout")}) // üzerinden çıkınca

div.addEventListener("mouseenter",function(){console.log("mouseenter")}) // üzerine gelince
// içindeki elemanların üzerine gelince çalışmaz
div.addEventListener("mouseleave",function(){console.log("mouseleave")}) // üzerinden çıkınca