
var centerimg = document.querySelector(".centerimgprod")
// console.log(centerimg)
var obj = JSON.parse(localStorage.getItem("currentItems"))
// console.log(obj)
 centerimg.setAttribute("src",obj.img)


 var pricex = document.querySelector(".pricetag");
 pricex.innerHTML = obj.price;
var cat = document.querySelector(".cat");
cat.textContent = obj.cat;


var cart = JSON.parse(localStorage.getItem("ZaraCart")) || [];

function addToCart(){
    var size = document.querySelector("#prodsize").value;
    var proceed = document.querySelector(".right button~button");
    var cartobj = {
        imgURL : obj.img,
        name : obj.cat,
        Price : obj.price,
        size : size,
    }
    console.log(cartobj)
    if(size == "null"){
        alert("YOU MUST SELECT A SIZE")
    }
    else{
        proceed.style.visibility= "visible";
        cart.push(cartobj);
        localStorage.setItem("ZaraCart", JSON.stringify(cart))
    }
       
   
    // console.log(proceed)
    
    
    console.log(size)
    console.log(cart)
    // document.querySelector("#cartlength").textContent = cart.length
    
    // console.log(cart)
    
}



