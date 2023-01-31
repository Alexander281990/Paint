//$("#some").hide(); // Прячем объект
//let divBlock = $("#some"); // Помещаем в переменную
//$("#some").html(); // Берем содержимое объекта

let divBlock = $("#some");
let flag = true;
let flag_container = true;
//divBlock.css("color", "red");

$(document).ready(function() {
    divBlock.click(function() {
        // if (flag == true) {
        //     $(".box_inner").animate({left: "600px"}, 1000);
        //     divBlock.css("color", "red");
        //     flag = false;
        // } else {
        //     $(".box_inner").animate({left: "50px"}, 1000);
        //     divBlock.css("color", "black");
        //     flag = true;
        // }
        $(".box_inner").animate({top: "200px"}, 500);
        $(".box_inner").animate({top: "50px"}, 500);
    });
});

$(document).ready(function() {
    $(".con_head").click(function() {
        // if(flag_container == true) {
        //     $(".con_body").show(1000);
        //     flag_container = false;
        // } else {
        //     $(".con_body").hide(1000);
        //     flag_container = true;
        // }
        //$(".con_body").fadeToggle(500);
        $(".con_body").slideToggle(1000);
    });
});

$(document).ready(function() {
    $(".link_1").click(function() {
        $(".article_1").slideToggle(500);
    });
    $(".link_2").click(function() {
        $(".article_2").slideToggle(500);
    });
    $(".link_3").click(function() {
        $(".article_3").slideToggle(500);
    });
});

$(document).ready(function() {
    $("#btn1").click(function() {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function() {
        alert("HTML: " + $("#test").html());
    });
    $("#btn").click(function() {
        let textOfLink = $("textEnter").val();
        $("#link").attr("href", "https://" + textOfLink);
        $("#textEnter").val("");
    });
});