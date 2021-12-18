var image = document.querySelectorAll(".centerimg")

for(var i=0; i<image.length; i++){
 image[i].addEventListener("click", productfinal)   
}



function productfinal(event){
  var img= event.target;
    img = img.getAttribute("src");
    
    var condition = event.target.nextElementSibling;
    var cat = condition.nextElementSibling;
    var price = cat.nextElementSibling;
    var obj = {
        img : img,
        cat : cat.textContent,
        price : price.textContent,
        Qty : 1,

    }
    localStorage.setItem("currentItems", JSON.stringify(obj));
    window.location.href="productfinal.html"

}


 





 

