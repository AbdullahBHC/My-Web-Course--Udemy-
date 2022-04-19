// document.addEventListener("keypress",function(e){
//     console.log(e)
//     console.log(e.key) // ctrl alt shift gibi tuşlara basıldığını göstermez.
// })

// document.addEventListener("keydown",function(e){
//     console.log(e.key+" Tuşuna Basıldı") // ctrl alt shift gibi tuşlara basıldığını gösterir.
// })

// document.onkeyup=function(e){
//     console.log(e.key+" Tuşundan El Çekildi")
// }

console.log("Benim Yöntem :D")
let text = document.getElementById("prg")
console.log(text)
// text.innerHTML = ""
document.addEventListener("keydown", run)
function run(e) {
    console.log(e.key)
    text.textContent += e.key.toString()
}

console.log("Hocanın Yöntem")
let textInput = document.getElementById("text")
let text2 = document.getElementById("prg2")

console.log(textInput)
textInput.addEventListener("keyup",run)
function run(e){
    console.log(e.target.value)
    text2.textContent=e.target.value
}