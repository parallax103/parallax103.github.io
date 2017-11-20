var container = document.querySelector(".parallax");
var layers = document.querySelectorAll(".layer");

function shadow(event) {
    var width = container.offsetWidth;
    var height = container.offsetHeight;
    
    var walk = 90; // 90px
    
    var x = event.offsetX;
    var y = event.offsetY;
    var z = 0;

    var xWalk = Math.round((x / width * walk) - (walk / 2));
    var yWalk = Math.round((y / height * walk) - (walk / 2));
    
    layers.forEach(function(layer, index) {
        layer.style.webkitTransform = `
translate3d(${xWalk*index/10}px, ${yWalk*index/20}px, ${z}px)`; 
    })
    
}

container.addEventListener("mousemove", shadow);