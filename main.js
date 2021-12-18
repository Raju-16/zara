

var cart = JSON.parse(localStorage.getItem("ZaraCart")) || [];
TotalPrice(cart)
document.querySelector("#item").textContent = cart.length + "  " + document.querySelector("#item").textContent;
function Remove(index) {
    cart.splice(index, 1)
    localStorage.setItem("ZaraCart", JSON.stringify(cart))
    displayCart(cart)
    TotalPrice(cart)
}

displayCart(cart)
function displayCart(cart) {
    
    document.querySelector("#mainbox").textContent = "";
    
    cart.map(function (elem, index) {
        var box = document.createElement("div");
        box.setAttribute("class", "boxes");
        var img = document.createElement("img");
        img.setAttribute("src", elem.imgURL);
        img.setAttribute("width", "250px");
        img.setAttribute("height", "100%");
        var sub = document.createElement("div");
        sub.setAttribute("class", "suBox");
        var p1 = document.createElement("p");
        p1.textContent = elem.name;
        var p2 = document.createElement("p");
        p2.textContent = elem.color;
        var p3 = document.createElement("p");
        p3.textContent = elem.Price;
        
        var p4 = document.createElement("p");
        p4.textContent = elem.size;
        var small = document.createElement("div");
        small.setAttribute("class", "small");
        small.addEventListener("click",function() {
            ChangeCount(event)
        })
        
        var elem1 = document.createElement("p");
        elem1.setAttribute("class", "count");
        elem1.textContent = "-";

        var elem2 = document.createElement("p");
        elem2.setAttribute("class", "countofItems")
        elem2.textContent = elem.Qty||1;

        var elem3 = document.createElement("p");
        elem1.setAttribute("class", "count");
        elem3.textContent = "+";


        small.append(elem1, elem2, elem3);
        var button = document.createElement("button");
        button.textContent = "Remove";
        button.addEventListener("click", function () {
            Remove(index)
        });


        sub.append(p1, p2, p3, p4, small, button);
        box.append(img, sub);
        document.querySelector("#mainbox").append(box);

       


    }
    )

}

function TotalPrice(cart) {
    var Total = 0;
   
    for (var i = 0; i < cart.length; i++) {
        var final = 0;
        var x = cart[i].Price
        var y = x.split(",");
        y = y[0] + y[1]
        final = +cart[i].Qty*(+y)       
        Total += final;        
    }
    
    document.querySelector("#total").textContent = Total;
}






function ChangeCount(event) {

    var first = event.target.textContent;

    if (first == "-") {
        var sum = event.target.nextElementSibling.textContent;
        if (sum > 1) {
            sum--
        }
        event.target.nextElementSibling.textContent = sum;
    }
    else if (first == "+") {

        var sum = event.target.previousElementSibling.textContent;
        sum++
        event.target.previousElementSibling.textContent = sum;

    }
    normaltest()

}



function normaltest() {
    var normal = document.querySelectorAll(".countofItems")
    for(var i=0; i<normal.length; i++){
        p = normal[i].textContent

        cart.map(function (elem,index) {
            if(i==index){
                elem.Qty = p;
            }
            
        })
        
        localStorage.setItem("ZaraCart", JSON.stringify(cart))
    }
    TotalPrice(cart)
    
    
}

function gotoproceed() {
    window.location.href = "pay.html"
}



