var box = document.getElementById('cform')
var down = false;
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function togNotf() {
    if (down) {
        box.style.display = 'none';
        down = false;
    }else {
        box.style.display = 'block';
        down = true;
    }

    if (i < txt.length) {
        document.getElementById("txt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
}