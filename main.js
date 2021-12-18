// var data=[

//     {
//         imgURL:"https://static.zara.net/photos///2021/I/0/3/p/6855/669/427/302/w/260/6855669427_1_1_1.jpg?ts=1626273109663",
//         name:"STRAIGHT MEDIUM WASH DESTROYS JEANS",
//         color:"MID-BLUE - REF.6840/669",
//         Price:"1999.00",
//         size:"13-14 YEARS (164 CM)"
//     },
//     {
//         imgURL:"https://static.zara.net/photos///2021/I/0/3/p/6855/669/427/302/w/260/6855669427_1_1_1.jpg?ts=1626273109663",
//         name:"STRAIGHT MEDIUM WASH DESTROYS JEANS",
//         color:"MID-BLUE - REF.6840/669",
//         Price:"1999.00",
//         size:"13-14 YEARS (164 CM)"
//     },
//     {
//         imgURL:"https://static.zara.net/photos///2021/I/0/3/p/6855/669/427/302/w/260/6855669427_1_1_1.jpg?ts=1626273109663",
//         name:"STRAIGHT MEDIUM WASH DESTROYS JEANS",
//         color:"MID-BLUE - REF.6840/669",
//         Price:"1999.00",
//         size:"13-14 YEARS (164 CM)"
//     },
//     {
//         imgURL:"https://static.zara.net/photos///2021/I/0/3/p/6855/669/427/302/w/260/6855669427_1_1_1.jpg?ts=1626273109663",
//         name:"STRAIGHT MEDIUM WASH DESTROYS JEANS",
//         color:"MID-BLUE - REF.6840/669",
//         Price:"1999.00",
//         size:"13-14 YEARS (164 CM)"
//     }

//     ]
// console.log(cart)
//   document.querySelector("#cartlength").textContent = cart.length
// var price = 0;

// document.querySelector("#total").textContent= +price+".00";
// cart.map(function (elem, index) {
//     var box = document.createElement("div");
//     box.setAttribute("class", "boxes");
//     var img = document.createElement("img");
//     img.setAttribute("src", elem.imgURL);
//     img.setAttribute("width", "250px");
//     img.setAttribute("height", "100%");
//     var sub = document.createElement("div");
//     sub.setAttribute("class", "suBox");
//     var p1 = document.createElement("p");
//     p1.textContent = elem.name;
//     var p2 = document.createElement("p");
//     p2.textContent = elem.color;
//     var p3 = document.createElement("p");
//     p3.textContent = elem.Price;
//     // price=price+(+elem.Price);
//     var p4 = document.createElement("p");
//     p4.textContent = elem.size;
//     var small = document.createElement("div");
//     small.setAttribute("class", "small");
//     var elem1 = document.createElement("p");
//     elem1.setAttribute("class", "count");
//     elem1.textContent = "-";
//     // elem1.addEventListener("click", function (elem) {
//     //     decCount(elem.Price);
//     // })
//     var elem2 = document.createElement("p");
//     elem2.setAttribute("class", "countofItems")
//     elem2.textContent = 1;
//     var elem3 = document.createElement("p");
//     elem3.setAttribute("class", "count");
//     elem3.textContent = "+";
//     // elem3.addEventListener("click", function (elem) {
//     //     inCount(elem.Price);
//     // });
//     small.append(elem1, elem2, elem3);
//     var button = document.createElement("button");
//     button.textContent = "Remove";
//     button.addEventListener("click", function () {
//         Remove(index)
//     });
//     //     button.addEventListener("click", function (elem, index) {
//     //     //   price=JSON.parse(localStorage.getItem("price"))-p3.textContent;
//     //     cart.splice(index, 1);
//     //     displayCart(cart);
//     // })

//     sub.append(p1, p2, p3, p4, small, button);
//     box.append(img, sub);
//     document.querySelector("#mainbox").append(box);

// })
// document.querySelector("#cartlength").textContent = cart.length
// if (cart.length == 0) {
//   document.querySelector("#finalprice").innerHTML = "0"
// }
// document.querySelector("#total").textContent= JSON.parse(localStorage.getItem("price"))+".00"||price;

// document.querySelector(".countofItems").textContent=JSON.parse(localStorage.getItem("itemCount"))
// var itemCount=JSON.parse(localStorage.getItem("itemCount"))||1;
// localStorage.setItem("itemCount",JSON.stringify(itemCount));
// price = JSON.parse(localStorage.getItem("price")) - pricevalue;
// localStorage.setItem("price", JSON.stringify(price))
// document.querySelector("#total").textContent = JSON.parse(localStorage.getItem("price")) + ".00";
// localStorage.setItem("itemCount", JSON.stringify(itemCount));
// price = JSON.parse(localStorage.getItem("price")) + (+num);
// localStorage.setItem("itemCount", JSON.stringify(itemCount));
// localStorage.setItem("price", JSON.stringify(price))
// document.querySelector("#total").textContent = JSON.parse(localStorage.getItem("price")) + ".00";
// elem1.addEventListener("click", function (elem) {
//     decCount(elem.Price);
// })
// elem3.addEventListener("click", function (elem) {
//     // inCount(elem.Price);
// });
// button.addEventListener("click", function (elem, index) {
//     // price = price - p3.textContent;
//     //   console.log(p3.textContent)
//     cart.splice(index, 1);
//     //   console.log(cart)
//     localStorage.setItem("ZaraCart", JSON.stringify(cart))
//     displayCart(cart);
// })
// document.querySelector("#total").textContent = JSON.parse(localStorage.getItem("price")) + ".00" || price;
// console.log(sum, "sum")


var cart = JSON.parse(localStorage.getItem("ZaraCart")) || [];
document.querySelector("#item").textContent = cart.length + "  " + document.querySelector("#item").textContent;
// this is split function help to remove cart
function Remove(index) {
    cart.splice(index, 1)
    localStorage.setItem("ZaraCart", JSON.stringify(cart))
    displayCart(cart)
    TotalPrice(cart)
}

function decCount(pricevalue) {
    if (itemCount > 1) {
        itemCount = (+itemCount) - 1;
        document.querySelector(".countofItems").textContent = itemCount;

    }
}
function inCount(num) {
    itemCount = (+itemCount) + 1;
    document.querySelector(".countofItems").textContent = itemCount;
}


var credentials = "";
document.querySelector(".butt").addEventListener("click", function () {
    if (credentials == "") {
        window.location.href = "nextTarget.html"
    }
})
displayCart(cart)
function displayCart(cart) {
    var sum = 0;
    document.querySelector("#mainbox").textContent = "";
    console.log(document.querySelector("#mainbox"))
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
        sum = sum + Number(elem.price);
        var p4 = document.createElement("p");
        p4.textContent = elem.size;
        var small = document.createElement("div");
        small.setAttribute("class", "small");
        var elem1 = document.createElement("p");
        elem1.setAttribute("class", "count");
        elem1.textContent = "-";

        var elem2 = document.createElement("p");
        elem2.setAttribute("class", "countofItems")
        elem2.textContent = 1;
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
    var final = 0;
    for (var i = 0; i < cart.length; i++) {
        var x = cart[i].Price
        var y = x.split(",");
        y = y[0] + y[1]
        final += +y;

    }

    document.querySelector("#total").textContent = final
}
TotalPrice(cart)


var boxes = document.querySelectorAll(".small");
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", ChangeCount);
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


}



