var span = document.getElementById('span')
function time(){
    var d = new Date ();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent =
        ("0" +h).substring(-2) + ":"+("0"+m).substring(-2)+ ":" + ("0" + s ).substring(-2);       
}
setInterval(time, 1000);
<span id = "span"></span>