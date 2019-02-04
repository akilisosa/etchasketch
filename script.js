function buildWeb(){

    var i = 0;
    while ( i<575){
    
    var node = document.createElement("div");
    node.setAttribute("style", "color:red; border: 1px solid blue;display:flex;height:12px;width:12px;");

    node.addEventListener("mouseover", function( event ) {   
        // highlight the mouseenter target
        event.target.style.backgroundColor = "purple";
    
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.backgroundColor = "";
        }, 1500);
      }, false);
    var element = document.getElementById("card");
    element.appendChild(node);


        i++;
    }
    /*let div = document.createElement('div');
    div.setAttribute("style", "color:red; border: 1px solid blue;");
    div.appendChild(body);*/
}
   