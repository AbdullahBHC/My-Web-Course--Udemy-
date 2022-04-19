const div = document.getElementById("mydiv")

const newElement=document.createElement("a")
newElement.id="myLink"
newElement.href="https://www.google.com"
newElement.appendChild(document.createTextNode("Linke Tıkla")) // text ekleme
div.appendChild(newElement)
console.log(newElement)

const text = document.createTextNode("selam")
div.appendChild(text)
console.log(div)

let li = document.getElementsByTagName("li")
console.log(li)
li[1].remove()
console.log(li)
