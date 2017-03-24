var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos ;
    y_elem = y_pos;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.parentNode.style.left = (x_pos) + 'px';
        selected.parentNode.style.top = (y_pos) + 'px';
        document.getElementsByTagName("iframe")[0].setAttribute("style", "pointer-events:none");
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
    document.getElementsByTagName("iframe")[0].setAttribute("style", "pointer-events:initial");
}

// Bind the functions...
var draggables = document.getElementsByClassName('draggable-element');
for(var i = 0; i < draggables.length; i++){
  draggables[i].onmousedown = function () {
      _drag_init(this);
      return false;
  };
}

document.onmousemove = _move_elem;
document.onmouseup = _destroy;