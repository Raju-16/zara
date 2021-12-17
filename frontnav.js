var count = 0;

$('.btn').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});
$('.feat-btn').click(function () {
    $('nav ul .feat-show').toggleClass("show");

});
$('.serv-btn').click(function () {
    $('nav ul .serv-show').toggleClass("show1");
});
$('nav ul li').click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});

document.querySelector(".left").addEventListener("click", function () {

    count--;
    if (count%3 == 1) {
        var img1 = document.querySelector(".image1");

        img1.setAttribute("src", "https://static.zara.net/photos///contents/2021/I/L/L21130-I2021//w/1920/Look1_1.jpg?ts=1638261185048");
        img1.style.width = "432px"
    }
    if (count%3 == 2) {
        var img1 = document.querySelector(".image1");

        img1.setAttribute("src", "https://static.zara.net/photos///2021/I/M/1/p/0000/003/066/2/w/1030/0000003066_9_2_1.jpg?ts=1635251099550");
        img1.style.width = "687px"
    }
    if (count == -1 || count%3 == 0) {
        var img1 = document.querySelector(".image1");

        img1.setAttribute("src", "https://static.zara.net/photos///2021/I/M/1/p/0000/003/785/2/w/1238/0000003785_13_1_1.jpg?ts=1638519919203");
        img1.style.width = "1181px"
    }
    
})



document.querySelector(".right").addEventListener("click", function () {

    count++;

    if (count%3 == 1) {
        var img1 = document.querySelector(".image1");

        img1.setAttribute("src", "https://static.zara.net/photos///contents/2021/I/L/L21130-I2021//w/1920/Look1_1.jpg?ts=1638261185048");
        img1.style.width = "432px"
    }

    if (count%3 == 2) {
        var img1 = document.querySelector(".image1");

        img1.setAttribute("src", "https://static.zara.net/photos///2021/I/M/1/p/0000/003/066/2/w/1030/0000003066_9_2_1.jpg?ts=1635251099550");
        img1.style.width = "687px"
    }
    if (count == -1 || count%3 == 0) {
        var img1 = document.querySelector(".image1");

        img1.setAttribute("src", "https://static.zara.net/photos///2021/I/M/1/p/0000/003/785/2/w/1238/0000003785_13_1_1.jpg?ts=1638519919203");
        img1.style.width = "1181px"
    }

    
})

