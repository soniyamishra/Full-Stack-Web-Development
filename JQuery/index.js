
$("h1").addClass("big-title margin-50")
$("button").html("<em>hey</em>");
console.log($("img").attr("src"));
$("a").attr("href","https://in.yahoo.com/?p=us")



$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({margin:"20%"});
})

$(document).keypress(function(event){
    $("h1").text(event.key);

})