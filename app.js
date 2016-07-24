var cell_list;

function luigi() {
  cell_list = document.getElementsByClassName('red');
  for (var i = cell_list.length - 1; i >= 0; i--) {
    cell_list[i].className = 'green';
  }
}

var luigiButton = document.getElementById('luigi');

luigiButton.addEventListener('click', luigi);

function mario() {
  cell_list = document.getElementsByClassName('green');
  for (var i = cell_list.length - 1; i >= 0; i--) {
    cell_list[i].className = 'red';
  }
}

var marioButton = document.getElementById('mario');

marioButton.addEventListener('click', mario);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function blinky() {
  cell_list = document.getElementsByClassName('change');
  for (var i = cell_list.length - 1; i >= 0; i--) {
    cell_list[i].style.background = 'red';
  }
}

var blinkyButton = document.getElementById('blinky');

blinkyButton.addEventListener('click', blinky);

function pinky() {
  cell_list = document.getElementsByClassName('change');
  for (var i = cell_list.length - 1; i >= 0; i--) {
    cell_list[i].style.background = 'pink';
  }
}

var pinkyButton = document.getElementById('pinky');

pinkyButton.addEventListener('click', pinky);

function inky() {
  cell_list = document.getElementsByClassName('change');
  for (var i = cell_list.length - 1; i >= 0; i--) {
    cell_list[i].style.background = 'cyan';
  }
}

var inkyButton = document.getElementById('inky');

inkyButton.addEventListener('click', inky);

function clyde() {
  cell_list = document.getElementsByClassName('change');
  for (var i = cell_list.length - 1; i >= 0; i--) {
    cell_list[i].style.background = 'orange';
  }
}

var clydeButton = document.getElementById('clyde');

clydeButton.addEventListener('click', clyde);
