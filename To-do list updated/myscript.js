var myNodelist = document.getElementsByTagName("LI");
var i;
for(i=0;i<myNodelist.length;i++)
{
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for(i=0; i< close.length; i++)
{
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";

    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function heading() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("heading").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You Forgot to write something pal!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("heading").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }