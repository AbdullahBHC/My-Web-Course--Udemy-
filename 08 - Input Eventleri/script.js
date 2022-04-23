document.addEventListener("DOMContentLoaded",function(e){console.log("Sayfa Yüklendi")})

let text = document.getElementById("text")
text.addEventListener("focus",function(e){console.log("Objeye Odaklanıldı")})
text.addEventListener("focusout",function(e){console.log("Objeye Odaktan Çıkıldı")})
text.addEventListener("paste",function(e){console.log("Yapıştırma İşlemi Başarılı")})
text.addEventListener("copy",function(e){console.log("Kopyalama İşlemi Başarılı")})
text.addEventListener("cut",function(e){console.log("Kesme İşlemi Başarılı")})
text.addEventListener("select",function(e){console.log("Tümünü Seçme İşlemi Başarılı")})
