$(function(){

    var count = $("tr.itemPrice").length;
    console.log(count);

    var money = [];
    console.log(money);
    
    for(var i = 0; i < count; i++) {
        money[i] = $("tr.itemPrice").eq(i).find("span").text();
        money[i] = parseInt(money[i]);
        money[i] = money[i].toLocaleString();
        $("tr.itemPrice").eq(i).find("span").text(money[i]);
    }

    // 모달 레이어 클로즈
    $("#modalBG button").click(function(){
        $("div#modalBG").css({
            "display" : "none"
        });
    });
    
    // 모달 레이어 팝업 시작
    $("table.productItem").click(function(){
        $("div#modalBG").css({
            "display" : "block"
        });
        var imgSrc = $(this).find("img").attr("src");
        $("div#popIMG").children("img").attr("src", imgSrc);
        
        var itemName = $(this).find("tr.itemTitle").children("td").html();
        $("div#popTitle").html(itemName);

        var itemPrice = $(this).find("tr.itemPrice").children("td").html();
        $("div#popPrice").html(itemPrice);

        $("span.itemTag").css({
            "display" : "none"
        })
        
    });

});