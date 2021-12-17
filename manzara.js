var image = document.querySelectorAll(".centerimg")
// console.log(image)

for(var i=0; i<image.length; i++){
 image[i].addEventListener("click", productfinal)   
}



function productfinal(event){
  var img= event.target;
    img = img.getAttribute("src");
    
    // console.log(event.target.parentNode)
    var condition = event.target.nextElementSibling;
    var cat = condition.nextElementSibling;
    var price = cat.nextElementSibling;
    var obj = {
        img : img,
        cat : cat.textContent,
        price : price.textContent,

    }
    localStorage.setItem("currentItems", JSON.stringify(obj));
    window.location.href="productfinal.html"

    // console.log(img,condition.textContent, cat, price)
    // console.log(event.target.nextElementSibling)
    // console.log(event.target.nextElementSibling.nextElementSibling)
    // console.log(event.target.nextElementSibling.nextElementSibling.nextElementSibling)
}


 // this is for product final.html code//





 

