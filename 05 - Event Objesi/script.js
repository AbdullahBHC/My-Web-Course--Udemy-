let input = document.getElementById("text")

input.onfocus = function(){console.log("onFocus ile oluşturuldu")}
input.addEventListener("focus",function(e) // e : event eklenen element
{
    console.log("addEventListener ile oluşturuldu.")
    console.log(e)
    console.log(e.target)
    console.log(e.target.placeholder)
    console.log(e.target.id)
})

let btn = document.getElementById("btnTikla")
btn.onclick=function(){console.log("onClick ile Butona Tıklandı")}
