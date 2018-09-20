var pos = 0;
var speed = 75;
var str = document.getElementById('str').innerText;

// empty the str from span
document.getElementById('str').innerText = '';

// typing fn
function type() {
  if(pos<str.length) {
    document.getElementById('str').innerText += str.charAt(pos);
    pos++;
    setTimeout(type,speed); //call this fn again to type all letters
  } else {
    setTimeout(erase,speed);
  }
}

// start type
setTimeout(type,speed);

// erase fn
function erase() {
  if(pos>=0) {
    var temp = str.substring(0, pos);
    document.getElementById('str').innerText = temp;
    pos--;
    setTimeout(erase,speed);
  } else {
    // start type again
    setTimeout(type,speed);
  }
}
