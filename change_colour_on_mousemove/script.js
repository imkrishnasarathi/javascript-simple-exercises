const div = document.querySelector('#colors');

div.addEventListener('mousemove', function(e){
    div.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",0)";
})