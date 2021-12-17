var data=[

    {
        imgURL:"https://static.zara.net/photos///2021/I/0/3/p/6855/669/427/302/w/260/6855669427_1_1_1.jpg?ts=1626273109663",
        name:"STRAIGHT MEDIUM WASH DESTROYS JEANS",
        color:"MID-BLUE - REF.6840/669",
        Price:"1999.00",
        size:"13-14 YEARS (164 CM)"
    },
    {
        imgURL:"https://static.zara.net/photos///2021/I/0/3/p/6855/669/427/302/w/260/6855669427_1_1_1.jpg?ts=1626273109663",
        name:"STRAIGHT MEDIUM WASH DESTROYS JEANS",
        color:"MID-BLUE - REF.6840/669",
        Price:"1999.00",
        size:"13-14 YEARS (164 CM)"
    },
    {
        imgURL:"https://static.zara.net/photos///2021/I/0/3/p/6855/669/427/302/w/260/6855669427_1_1_1.jpg?ts=1626273109663",
        name:"STRAIGHT MEDIUM WASH DESTROYS JEANS",
        color:"MID-BLUE - REF.6840/669",
        Price:"1999.00",
        size:"13-14 YEARS (164 CM)"
    },
    {
        imgURL:"https://static.zara.net/photos///2021/I/0/3/p/6855/669/427/302/w/260/6855669427_1_1_1.jpg?ts=1626273109663",
        name:"STRAIGHT MEDIUM WASH DESTROYS JEANS",
        color:"MID-BLUE - REF.6840/669",
        Price:"1999.00",
        size:"13-14 YEARS (164 CM)"
    }
     
    ]

    document.querySelector("#item").textContent=data.length+"  "+ document.querySelector("#item").textContent;
    var price=0;
   
   // document.querySelector("#total").textContent= +price+".00";
        data.map(function(elem,index){
            var box=document.createElement("div");
            box.setAttribute("class","boxes");
            var img=document.createElement("img");
            img.setAttribute("src",elem.imgURL);
            img.setAttribute("width","250px");
            img.setAttribute("height","100%");
            var sub=document.createElement("div");
            sub.setAttribute("class","suBox");
            var p1=document.createElement("p");
               p1.textContent=elem.name;
            var p2=document.createElement("p");
                p2.textContent=elem.color;
            var p3=document.createElement("p");
                p3.textContent=elem.Price;
                price=price+(+elem.Price);
           var p4=document.createElement("p");
                p4.textContent=elem.size;
                var small=document.createElement("div");
                small.setAttribute("class","small");
                var elem1=document.createElement("p");
                elem1.textContent="-";
                elem1.addEventListener("click",function(elem){
                       decCount(p3.textContent);
                })
                var elem2=document.createElement("p");
                elem2.setAttribute("class","countofItems")
                elem2.textContent=1;
                var elem3=document.createElement("p");
                elem3.textContent="+";
                elem3.addEventListener("click",function(elem){
                    inCount(p3.textContent);
                });
                small.append(elem1,elem2,elem3);
                var button=document.createElement("button");
                button.textContent="Remove";
                button.addEventListener("click",function(elem,index){
                  price=JSON.parse(localStorage.getItem("price"))-p3.textContent;
                  data.splice(index,1);
                  displayCart(data);
                })
                 
                sub.append(p1,p2,p3,p4,small,button);
                box.append(img,sub);
                document.querySelector("#mainbox").append(box);

        }) 
     
       
        document.querySelector("#total").textContent= JSON.parse(localStorage.getItem("price"))+".00"||price;
     
        document.querySelector(".countofItems").textContent=JSON.parse(localStorage.getItem("itemCount"))
        var itemCount=JSON.parse(localStorage.getItem("itemCount"))||1;
        localStorage.setItem("itemCount",JSON.stringify(itemCount));
      
          function decCount(pricevalue){
            if(itemCount>1){
              itemCount=(+itemCount)-1;
              price=JSON.parse(localStorage.getItem("price"))-pricevalue;
             
              document.querySelector(".countofItems").textContent=itemCount;
              localStorage.setItem("price",JSON.stringify(price))
             document.querySelector("#total").textContent= JSON.parse(localStorage.getItem("price"))+".00";
              localStorage.setItem("itemCount",JSON.stringify(itemCount));
        
          }
       }
       function inCount(num){
        itemCount=(+itemCount)+1;
        price=JSON.parse(localStorage.getItem("price"))+(+num);
        document.querySelector(".countofItems").textContent=itemCount;
        localStorage.setItem("itemCount",JSON.stringify(itemCount));
        localStorage.setItem("price",JSON.stringify(price))
        document.querySelector("#total").textContent= JSON.parse(localStorage.getItem("price"))+".00";
    }
    var credentials="";
document.querySelector(".butt").addEventListener("click",function(){
    if(credentials==""){
        window.location.href="nextTarget.html"
    }
})

   function displayCart(data){
   //
    document.querySelector("#mainbox").textContent="";
    console.log(document.querySelector("#mainbox"))
    data.map(function(elem,index){
        var box=document.createElement("div");
        box.setAttribute("class","boxes");
        var img=document.createElement("img");
        img.setAttribute("src",elem.imgURL);
        img.setAttribute("width","250px");
        img.setAttribute("height","100%");
        var sub=document.createElement("div");
        sub.setAttribute("class","suBox");
        var p1=document.createElement("p");
           p1.textContent=elem.name;
        var p2=document.createElement("p");
            p2.textContent=elem.color;
        var p3=document.createElement("p");
            p3.textContent=elem.Price;
            price=price+(+elem.Price);
       var p4=document.createElement("p");
            p4.textContent=elem.size;
            var small=document.createElement("div");
            small.setAttribute("class","small");
            var elem1=document.createElement("p");
            elem1.textContent="-";
            elem1.addEventListener("click",function(elem){
                   decCount(p3.textContent);
            })
            var elem2=document.createElement("p");
            elem2.setAttribute("class","countofItems")
            elem2.textContent=1;
            var elem3=document.createElement("p");
            elem3.textContent="+";
            elem3.addEventListener("click",function(elem){
                inCount(p3.textContent);
            });
            small.append(elem1,elem2,elem3);
            var button=document.createElement("button");
            button.textContent="Remove";
            button.addEventListener("click",function(elem,index){
              price=price-p3.textContent;
              console.log(p3.textContent)
              data.splice(index,1);
            displayCart(data);
            })
             
            sub.append(p1,p2,p3,p4,small,button);
            box.append(img,sub);
            document.querySelector("#mainbox").append(box);
            
            document.querySelector("#total").textContent= JSON.parse(localStorage.getItem("price"))+".00"||price;
        
  }
   ) 

   }
       
    