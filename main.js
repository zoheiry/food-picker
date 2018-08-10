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

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomlySelectAPlace = function() {
  var placeIndex = getRandomInt(0, foodPlaces.length);
  pickedPlace = foodPlaces[placeIndex];
  document.querySelector('h1').innerHTML = foodPlaces[placeIndex];
}

var pickComplete = function() {
  document.querySelector('body').style.background = '#aecc76';
  document.querySelector('h1').style.animation = 'zoomIn .6s ease';
  setTimeout(function() {
    document.querySelector('#locationLink').style.display = 'inline-block';
    document.querySelector('#locationLink').href = 'https://www.google.com/maps/search/' + pickedPlace;
  }, 1000);
  setTimeout(function() {
    document.querySelector('#viewFullList').style.display = 'inline-block';
  }, 1500);
}

var loopBetweenRandomPlaces = function() {
  document.querySelector('button').style.display = 'none';
  document.querySelector('body').style.background = '#5F9DC7';
  var interval = setInterval(randomlySelectAPlace, 100);
  setTimeout(function() {
    clearInterval(interval);
    pickComplete();
  }, 5000)
}

var constructFullList = function() {
  var fullList = document.querySelector('#fullList');
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
  document.querySelector('#fullList').style.display = 'block';
  setTimeout(function() {
    document.querySelector('p').style.display = 'block';
  }, 1000)
}

window.onload = constructFullList;
