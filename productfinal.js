
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
        Qty:1,
    }
   
    if(size == "null"){
        alert("YOU MUST SELECT A SIZE")
    }
    else{
        proceed.style.visibility= "visible";
        cart.push(cartobj);
        localStorage.setItem("ZaraCart", JSON.stringify(cart))
    }
       
   
    // console.log(proceed)
    
    
    // console.log(size)
    // console.log(cart)
    // document.querySelector("#cartlength").textContent = cart.length
    
    // console.log(cart)
    
}

function goToProceed() {
    window.location.href="basket.html"
}


// this id the data of atheletsection don't disturd this//
var tarr = [
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1368/401/505/612/w/287/1368401505_15_2_1.jpg?ts=1638532704497",
        "Colors": "+3 COLOURS",
        "Name": "SEAMLESS SHORT SLEEVE T-SHIRT",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1368/401/800/612/w/287/1368401800_15_1_1.jpg?ts=1638524140417",
        "Colors": "+3 COLOURS",
        "Name": "SEAMLESS SHORT SLEEVE T-SHIRT",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "+3 COLOURS",
        "Name": "SEAMLESS SHORT SLEEVE T-SHIRT",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1368/401/505/2/w/287/1368401505_15_1_1.jpg?ts=1638532745293",
        "Colors": "+3 COLOURS",
        "Name": "SEAMLESS SHORT SLEEVE T-SHIRT",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "+2 COLOURS",
        "Name": " SINGLET TOP",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/2651/400/055/2/w/287/2651400055_15_1_1.jpg?ts=1638523108220",
        "Colors": "+2 COLOURS",
        "Name": "TEXTURED T-SHIRT",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/2651/400/811/2/w/287/2651400811_15_1_1.jpg?ts=1638523049981",
        "Colors": "+2 COLOURS",
        "Name": "TEXTURED T-SHIRT",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/2651/400/401/2/w/287/2651400401_15_1_1.jpg?ts=1638523084252",
        "Colors": "+2 COLOURS",
        "Name": "TEXTURED T-SHIRT",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/5584/554/250/2/w/287/5584554250_15_1_1.jpg?ts=1636977866244",
        "Colors": "",
        "Name": "NYC PRINT T-SHIRT",
        "Price": "1,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/5584/555/800/2/w/287/5584555800_15_1_1.jpg?ts=1636977788564",
        "Colors": "",
        "Name": "NYC PRINT T-SHIRT",
        "Price": "1,990.00"
    }]
  
    localStorage.setItem("tshirts", JSON.stringify(tarr))

var shoes=[
    {
        "URL": "https://static.zara.net/photos///2021/I/1/1/p/2382/820/009/2/w/287/2382820009_15_1_1.jpg?ts=1632938992718",
        "Colors": "",
        "Name": "JOMA® RUNNING SNEAKERS",
        "Price": "7,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/1/1/p/2382/820/009/82/w/287/2382820009_15_1_1.jpg?ts=1632939166112",
        "Colors": "",
        "Name": "JOMA® RUNNING SNEAKERS",
        "Price": "7,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/1/1/p/2380/820/040/2/w/287/2380820040_15_1_1.jpg?ts=1632938903799",
        "Colors": "",
        "Name": "JOMA® RUNNING SNEAKERS",
        "Price": "7,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/1/1/p/2380/820/040/82/w/287/2380820040_15_1_1.jpg?ts=1632941656392",
        "Colors": "",
        "Name": "JOMA® RUNNING SNEAKERS",
        "Price": "7,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/1/1/p/2381/820/032/82/w/287/2381820032_15_1_1.jpg?ts=1632944642696",
        "Colors": "",
        "Name": "JOMA® RUNNING SNEAKERS",
        "Price": "7,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/1/1/p/2381/820/032/2/w/287/2381820032_15_1_1.jpg?ts=1632939051252",
        "Colors": "",
        "Name": "JOMA® RUNNING SNEAKERS",
        "Price": "7,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/1/1/p/2730/820/040/2/w/563/2730820040_1_1_1.jpg?ts=1632938751815",
        "Colors": "+1 COLOUR",
        "Name": "SPUMEFOAM SLIDE SANDALS",
        "Price": "2,290.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/1/1/p/2730/820/032/2/w/287/2730820032_15_1_1.jpg?ts=1633014478232",
        "Colors": "+1 COLOUR",
        "Name": "SPUMEFOAM SLIDE SANDALS",
        "Price": "2,290.00"
    }
]

localStorage.setItem("shoes", JSON.stringify(shoes))

var outdoors=[
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "+1 COLOUR",
        "Name": "TECHNICAL T-SHIRT WITH ZIP",
        "Price": "3,990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "TECHNICAL T-SHIRT WITH ZIP",
        "Price": "3,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/2651/402/442/2/w/287/2651402442_15_1_1.jpg?ts=1632839542054",
        "Colors": "",
        "Name": "TECHNICAL T-SHIRT WITH ZIP",
        "Price": "3,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1591/401/800/2/w/287/1591401800_15_2_1.jpg?ts=1638527120909",
        "Colors": "",
        "Name": "COMBINED QUILTED GILET",
        "Price": "4,590.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1591/401/800/612/w/287/1591401800_15_1_1.jpg?ts=1638526980354",
        "Colors": "",
        "Name": "COMBINED QUILTED GILET",
        "Price": "4,590.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "WINDBREAKER",
        "Price": "7,790.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "WINDBREAKER",
        "Price": "7,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1591/401/800/2/w/287/1591401800_15_2_1.jpg?ts=1638527120909",
        "Colors": "+1-COLOR",
        "Name": "WINDBREAKER",
        "Price": "4,590.00"
    }
]

localStorage.setItem("outdoors", JSON.stringify(outdoors))

var trousers=[
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "+1 COLOUR",
        "Name": "SEAMLESS LEGGINGS",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1368/402/507/2/w/287/1368402507_15_1_1.jpg?ts=1638525174458",
        "Colors": "+1 COLOUR",
        "Name": "SEAMLESS LEGGINGS",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1368/402/803/612/w/287/1368402803_15_3_1.jpg?ts=1638525240955",
        "Colors": "+1 COLOUR",
        "Name": "SEAMLESS LEGGINGS",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/1368/402/803/2/w/287/1368402803_15_2_1.jpg?ts=1638525218687",
        "Colors": "+1 COLOUR",
        "Name": "SEAMLESS LEGGINGS",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "TRAINING TROUSERS",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/5320/204/807/82/w/287/5320204807_15_2_1.jpg?ts=1635955910762",
        "Colors": "",
        "Name": "TRAINING TROUSERS",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/601/250/2/w/287/0761601250_15_1_1.jpg?ts=1635956078468",
        "Colors": "+1 COLOUR",
        "Name": "BASIC JOGGING TROUSERS",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/601/250/2/w/287/0761601250_15_2_1.jpg?ts=1635956081121",
        "Colors": "+1 COLOUR",
        "Name": "BASIC JOGGING TROUSERS",
        "Price": "2,790.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "CONTRAST RUNNING LEGGINGS",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "+1 COLOUR",
        "Name": "+1 COLOUR",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "JOGGER TROUSERS",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "CONTRAST TRAINING TROUSERS",
        "Price": "5,590.00"
    }
]

localStorage.setItem("trousers", JSON.stringify(trousers))

accessories=[
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/3025/400/800/614/w/287/3025400800_15_1_1.jpg?ts=1638528302017",
        "Colors": "",
        "Name": "TRX® MOVE TRAINING SYSTEM",
        "Price": "7,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/3025/400/800/615/w/287/3025400800_15_2_1.jpg?ts=1638528607336",
        "Colors": "",
        "Name": "TRX® MOVE TRAINING SYSTEM",
        "Price": "7,990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "+1 COLOUR",
        "Name": "TECHNICAL CAP",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/3920/318/802/2/w/287/3920318802_15_1_1.jpg?ts=1632931067565",
        "Colors": "+1 COLOUR",
        "Name": "TECHNICAL CAP",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/3920/318/800/82/w/287/3920318800_15_1_1.jpg?ts=1632857692332",
        "Colors": "+1 COLOUR",
        "Name": "TECHNICAL CAP",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "+1 COLOUR",
        "Name": "TECHNICAL CAP",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/1281/301/555/2/w/287/1281301555_15_1_1.jpg?ts=1632858521281",
        "Colors": "",
        "Name": "2-PACK OF BOXERS",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/3920/319/555/2/w/287/3920319555_15_1_1.jpg?ts=1632858122693",
        "Colors": "",
        "Name": "2-PACK OF BOXERS",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/1281/300/555/2/w/287/1281300555_15_1_1.jpg?ts=1632944012294",
        "Colors": "",
        "Name": "2-PACK OF BOXERS",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "2-PACK OF BOXERS",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/1089/301/555/2/w/287/1089301555_15_1_1.jpg?ts=1632925777679",
        "Colors": "",
        "Name": "2-PACK SHORT SEAMLESS SOCKS",
        "Price": "990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/1089/301/555/82/w/287/1089301555_15_1_1.jpg?ts=1632924546010",
        "Colors": "",
        "Name": "2-PACK SHORT SEAMLESS SOCKS",
        "Price": "990.00"
    }
]

localStorage.setItem("accessories", JSON.stringify(accessories))

shorts=[
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/5644/405/803/2/w/287/5644405803_15_1_1.jpg?ts=1635951469315",
        "Colors": "+1 COLOUR",
        "Name": "LOOSE-FIT SOFT SHORTS",
        "Price": "1,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/5644/405/800/82/w/287/5644405800_15_1_1.jpg?ts=1635952369723",
        "Colors": "+1 COLOUR",
        "Name": "LOOSE-FIT SOFT SHORTS",
        "Price": "1,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/5644/405/800/82/w/287/5644405800_15_1_1.jpg?ts=1635952369723",
        "Colors": "+1 COLOUR",
        "Name": "LOOSE-FIT SOFT SHORTS",
        "Price": "1,990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "",
        "Name": "3” RUNNING SHORTS",
        "Price": "1,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0495/550/681/2/w/287/0495550681_15_1_1.jpg?ts=1632905613162",
        "Colors": "",
        "Name": "3” RUNNING SHORTS",
        "Price": "1,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0119/401/803/2/w/287/0119401803_15_1_1.jpg?ts=1632847239808",
        "Colors": "",
        "Name": "SEAMLESS SHORTS",
        "Price": "1,990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "40% OFF / +1 COLOUR",
        "Name": "COLOUR BLOCK 5” TRAINING SHORTS",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/5320/206/074/82/w/287/5320206074_15_1_1.jpg?ts=1632852190974",
        "Colors": "40% OFF / +1 COLOUR",
        "Name": "COLOUR BLOCK 5” TRAINING SHORTS",
        "Price": "1,790.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/1105/450/401/82/w/287/1105450401_15_1_1.jpg?ts=1632944155398",
        "Colors": "40% OFF / +1 COLOUR",
        "Name": "7” TRAINING SHORTS",
        "Price": "1,590.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/1105/451/300/2/w/287/1105451300_15_1_1.jpg?ts=1632851766975",
        "Colors": "40% OFF / +1 COLOUR",
        "Name": "5” TRAINING SHORTS",
        "Price": "990.00"
    },
    {
        "URL": "https://static.zara.net/photos//contents/cm/athletics/watermarks/simple-large_0.svg?ts=1587055628000",
        "Colors": "50% OFF / +1 COLOUR",
        "Name": "7” TRAINING SHORTS",
        "Price": "1, 990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/5320/207/442/82/w/287/5320207442_15_1_1.jpg?ts=1632846515783",
        "Colors": "",
        "Name": "RUNNIING SHORTS",
        "Price": "1, 990.00"
    }
];

localStorage.setItem("shorts", JSON.stringify(shorts))

sweatshirts=[
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/603/681/2/w/287/0761603681_15_1_1.jpg?ts=1632843474946",
        "Colors": "",
        "Name": "HOODIE",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/603/681/82/w/287/0761603681_15_1_1.jpg?ts=1632843789834",
        "Colors": "",
        "Name": "HOODIE",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/605/505/82/w/287/0761605505_15_1_1.jpg?ts=1632923667291",
        "Colors": "+1 COLOUR",
        "Name": "HOODED CARDIGAN WITH ZIP",
        "Price": "3,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/605/505/2/w/287/0761605505_15_1_1.jpg?ts=1632923131360",
        "Colors": "+1 COLOUR",
        "Name": "HOODED CARDIGAN WITH ZIP",
        "Price": "3,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/1/p/0761/605/800/2/w/287/0761605800_15_2_1.jpg?ts=1638526504724",
        "Colors": "+1 COLOUR",
        "Name": "HOODED CARDIGAN WITH ZIP",
        "Price": "3,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2022/V/0/2/p/0761/605/800/612/w/287/0761605800_15_1_1.jpg?ts=1638527170475",
        "Colors": "+1 COLOUR",
        "Name": "HOODED CARDIGAN WITH ZIP",
        "Price": "3,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/602/803/2/w/287/0761602803_15_1_1.jpg?ts=1632843257803",
        "Colors": "+1 COLOUR",
        "Name": "HOODED CARDIGAN WITH ZIP",
        "Price": "3,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/602/250/2/w/287/0761602250_15_1_1.jpg?ts=1635954999449",
        "Colors": "+1 COLOUR",
        "Name": "HOODIE",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/602/250/83/w/287/0761602250_15_2_1.jpg?ts=1635955074173",
        "Colors": "+1 COLOUR",
        "Name": "HOODIE",
        "Price": "2,990.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/5320/201/807/2/w/287/5320201807_15_1_1.jpg?ts=1635955320115",
        "Colors": "",
        "Name": "TECHNICAL JACKET",
        "Price": "4,590.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/5320/201/807/2/w/287/5320201807_15_1_1.jpg?ts=1635955320115",
        "Colors": "",
        "Name": "TECHNICAL JACKET",
        "Price": "4,590.00"
    },
    {
        "URL": "https://static.zara.net/photos///2021/I/0/1/p/0761/605/442/2/w/287/0761605442_15_1_1.jpg?ts=1632844592030",
        "Colors": "",
        "Name": "HOODED CARDIGAN WITH ZIP",
        "Price": "3,990.00"
    }
]

localStorage.setItem("sweatshirts", JSON.stringify(sweatshirts))