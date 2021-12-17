
var centerimg = document.querySelector(".centerimgprod")
// console.log(centerimg)
var obj = JSON.parse(localStorage.getItem("currentItems"))
console.log(obj)
 centerimg.setAttribute("src",obj.img)


 var pricex = document.querySelector(".pricetag");
 pricex.innerHTML = obj.price;
var cat = document.querySelector(".cat");
cat.textContent = obj.cat;




