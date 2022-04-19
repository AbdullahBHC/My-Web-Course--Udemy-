// Id'ye göre seçme

console.log("Id'ye göre seçme")
let element;
element = document.getElementById("title");
console.log(element);

// Class'a göre seçme

console.log("Class'a göre seçme")
element = document.getElementsByClassName("titles")
console.log(element)

// Tag'e göre seçme

console.log("Tag'e göre seçme")
element = document.getElementsByTagName("h5")
console.log(element)

// Query Selector ile seçme

console.log("Query Selector ile bir tane seçme")
element=document.querySelector("#title")
console.log(element)
element=document.querySelector(".titles")
console.log(element)

console.log("Query Selector ile hepsini seçme")
element=document.querySelectorAll(".titles")
console.log(element)

console.log("foreach ile yazdırma")
element.forEach(function(el){
    console.log(el)
})