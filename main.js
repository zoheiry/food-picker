var timeToPick = 3000;
var pickedPlace = '';
var foodPlaces = [
  'Burger Bar',
  'California Burrito',
  'The Lebanese Sajeria',
  'Lombardo\'s',
  'O MAI',
  'Meat & Greek',
  'Burgermeester',
  'Sla',
  'Asian Kitchen',
  'FuLu Mandarijn',
];

var getElement = function(query) {
  return document.querySelector(query);
}

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomlySelectAPlace = function() {
  var placeIndex = getRandomInt(0, foodPlaces.length);
  pickedPlace = foodPlaces[placeIndex];
  getElement('h1').innerHTML = foodPlaces[placeIndex];
}

var pickComplete = function() {
  getElement('body').style.background = '#aecc76';
  getElement('h1').style.animation = 'zoomIn .6s ease';
  setTimeout(function() {
    var link = getElement('#locationLink');
    link.style.display = 'inline-block';
    link.href = 'https://www.google.com/maps/search/' + pickedPlace;
    setTimeout(function() { getElement('#viewFullList').style.display = 'inline-block'; }, 500);
  }, 1000);
}

var loopBetweenRandomPlaces = function() {
  getElement('button').style.display = 'none';
  getElement('body').style.background = '#5F9DC7';
  var interval = setInterval(randomlySelectAPlace, 100);
  setTimeout(function() {
    clearInterval(interval);
    pickComplete();
  }, timeToPick)
}

var constructFullList = function() {
  var fullList = getElement('#fullList');
  foodPlaces.forEach(function(place){
    var link = document.createElement('a');
    link.target = '_blank';
    var href = 'https://www.google.com/maps/search/' + place;
    link.href = href;
    var listItem = document.createElement('li');
    link.innerHTML = place;
    listItem.appendChild(link);

    fullList.appendChild(listItem)
  });
}

var showFullList = function() {
  getElement('#fullList').style.display = 'block';
  setTimeout(function() {
    getElement('p').style.display = 'block';
  }, 1000)
}

window.onload = constructFullList;
