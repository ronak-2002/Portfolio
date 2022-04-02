var post = document.getElementById("post");
var count = 0;
post.addEventListener("click",
function(){
    var name = document.getElementById("ip1").value;
    var prof = document.getElementById("ip2").value;
    var comment = document.getElementById("ip3").value;

    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var i = document.createElement("img");
    i.src = "user.jpg";
    i.style.width = "30px";
    i.style.height = "30px";
    li.appendChild(i);
    li.style.fontSize = "20px";
    ul.appendChild(li);

    var li = document.createElement("li");
    var text1 = document.createTextNode(name);
    li.appendChild(text1);
    li.style.fontSize = "20px";
    li.style.marginLeft = "20px";
    ul.appendChild(li);
    // ul.style.display = "flex";

    var li = document.createElement("li");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();
    var DATE = month + ' ' + date + ', ' + year;
    var text3 = document.createTextNode(DATE);
    li.appendChild(text3);
    li.style.marginLeft = "0";
    li.style.marginTop = "30px";
    ul.appendChild(li);

    var li = document.createElement("li");
    var text2 = document.createTextNode(prof);
    li.appendChild(text2);
    ul.appendChild(li);

    var li = document.createElement("li");
    var text = document.createTextNode(comment);
    li.appendChild(text);
    ul.appendChild(li);

    ul.style.backgroundColor = "aliceblue";
    ul.style.marginTop = "10px";
    ul.style.listStyle = "none";
    ul.style.marginLeft = "10%"
    ul.style.width = "65%";
    ul.style.padding = "5px";
    ul.style.boxShadow = "0 0 6px 0 grey";
    document.getElementById("commentlist").appendChild(ul);
    count = count + 1;
    document.getElementById("com").innerHTML = "Comments ["+count + "]";
    document.getElementById("ip1").value = null;
    document.getElementById("ip2").value = null;
    document.getElementById("ip3").value = null;
    alert("Review submitted successfully, Thank You!")
});

var clr = document.getElementById("clear");
clr.addEventListener("click",
function(){
    document.getElementById("ip1").value = null;
    document.getElementById("ip2").value = null;
    document.getElementById("ip3").value = null;
});