const div = document.getElementById("mydiv")
console.log(div)
console.log(div.classList)
div.classList.add("header-div")
console.log(div.classList)
div.classList.remove("section1")
console.log(div.classList)

div.getAttribute("placeholder")
div.setAttribute("placeholder","metin gir")
console.log(div)
console.log(div.hasAttribute("id")) // attribute varsa true
div.removeAttribute("id") // attribute kaldırır
console.log(div)