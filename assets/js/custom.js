

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activee");
    var S = 0;
    var ThisDejaVu = 0;
    for (i=0; i < coll.length; i ++)
    {
      if(coll[i] == this)
      {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
          //content.animate({display : "block"},{duration : 1000});
          //S -= content.scrollHeight;
          ThisDejaVu = 1;
        }
      }
      else
      {
        var content = coll[i].nextElementSibling;
        if (content.style.display === "block") {
          if(!ThisDejaVu) {S -= content.scrollHeight;}
          coll[i].classList.toggle("activee");
        }
        content.style.display = "none";
      }
    }

    document.body.scrollTop += S;
    document.documentElement.scrollTop += S;


  });
}
