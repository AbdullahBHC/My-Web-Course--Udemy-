const element=document.querySelector("#btn-tikla")
element.style.color="yellow"
element.style.background="black"
element.href="https://www.google.com"
element.innerHTML="Tıklayın"
console.log(element)
console.log(element.id)
console.log(element.textContent)

let element2=document.querySelector("h3:first-child")
console.log(element2)
element2=document.querySelector("h3:last-child")
console.log(element2)
element2=document.querySelectorAll("h3:nth-child(odd)")
console.log(element2)
element2=document.querySelectorAll("h3:nth-child(even)")
console.log(element2)
