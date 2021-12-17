document.querySelector("button").addEventListener("click",addCount);
var count=JSON.parse(localStorage.getItem("cartValue"))||0;
if(count>0){
    document.querySelector("#cart").textContent="cart"+"("+count+")";
}
function addCount(){
    count++;
    localStorage.setItem("cartValue",JSON.stringify(count));

    document.querySelector("#cart").textContent="cart"+"("+count+")";
}
document.querySelector("#remove").addEventListener("click",decCount);
function decCount(){
    count--;
    localStorage.setItem("cartValue",JSON.stringify(count));

    document.querySelector("#cart").textContent="cart"+"("+count+")";

}
document.querySelector("#go").addEventListener("click",go);
function go(){
    window.location.href="basket.html";
    mapIt(data);

}




