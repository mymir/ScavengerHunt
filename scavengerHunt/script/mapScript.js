function initMap() {
  // The starting center of the map.
  var london = {lat: 51.503588, lng: -0.093798};

  var found = 0;

  // The locations of the items
  var one = {lat: 51.523784, lng: -0.158471};
  var two = {lat:37.984930, lng: 23.734991};
  var three = {lat: 29.976116, lng: 31.130832};
  var four = {lat: 25.197328, lng: 55.274383};
  var five = {lat: 40.999834, lng: 28.989908};
  var six = {lat: 50.713618, lng: 4.399736};
  var seven = {lat: 27.987830, lng: 86.925241};
  var eight = {lat: 48.861111, lng: 2.336389};
  var nine = {lat: 39.904389, lng: 116.407050};
  var ten = {lat: 17.153995, lng: -62.585850};

  //The map variable
  var map = new google.maps.Map(document.getElementById('map'), {
    center: london,
    mapTypeId: 'roadmap',
    mapTypeControl: false,
    gestureHandling: 'greedy',
    zoom: 3
  });

  var markerOne = new google.maps.Marker({
    position: one,
    map: map
  });
  markerOne.setVisible(false);
  var markerTwo = new google.maps.Marker({
    position: two,
    map: map
  });
  markerTwo.setVisible(false);
  var markerThree = new google.maps.Marker({
    position: three,
    map: map
  });
  markerThree.setVisible(false);
  var markerFour = new google.maps.Marker({
    position: four,
    map: map
  });
  markerFour.setVisible(false);
  var markerFive = new google.maps.Marker({
    position: five,
    map: map
  });
  markerFive.setVisible(false);
  var markerSix = new google.maps.Marker({
    position: six,
    map: map
  });
  markerSix.setVisible(false);
  var markerSeven = new google.maps.Marker({
    position: seven,
    map: map
  });
  markerSeven.setVisible(false);
  var markerEight = new google.maps.Marker({
    position: eight,
    map: map
  });
  markerEight.setVisible(false);
  var markerNine = new google.maps.Marker({
    position:  nine,
    map: map
  });
  markerNine.setVisible(false);
  var markerTen = new google.maps.Marker({
    position: ten,
    map: map
  });
  markerTen.setVisible(false);

  map.addListener('zoom_changed', function() {
    if(map.getZoom() < 13){
          markerOne.setVisible(false);
          markerThree.setVisible(false);
          markerFour.setVisible(false);
          markerEight.setVisible(false);
    }
    if(map.getZoom() < 10){
          markerTwo.setVisible(false);
          markerFive.setVisible(false);
          markerSix.setVisible(false);
          markerSeven.setVisible(false);
          markerNine.setVisible(false);
          markerTen.setVisible(false);
    }
    if(map.getZoom() >= 13){
          // marker.setVisible(true);
          markerOne.setVisible(true);
          markerThree.setVisible(true);
          markerFour.setVisible(true);
          markerEight.setVisible(true);
    }
    if(map.getZoom() >= 10){
          markerTwo.setVisible(true);
          markerFive.setVisible(true);
          markerSix.setVisible(true);
          markerSeven.setVisible(true);
          markerNine.setVisible(true);
          markerTen.setVisible(true);
    }
  });

  markerOne.addListener('click', function() {
    // infoWindow.open(map, markerOne);
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerOne.setMap(null);
    // document.getElementById('one').style.textDecoration = 'line-through';
    document.getElementById('one').style.backgroundColor = "#eeeeee";
    document.getElementById('one').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerTwo.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerTwo.setMap(null);
    document.getElementById('two').style.backgroundColor = "#eeeeee";
    document.getElementById('two').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerThree.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerThree.setMap(null);
    document.getElementById('three').style.backgroundColor = "#eeeeee";
    document.getElementById('three').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerFour.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerFour.setMap(null);
    document.getElementById('four').style.backgroundColor = "#eeeeee";
    document.getElementById('four').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerFive.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerFive.setMap(null);
    document.getElementById('five').style.backgroundColor = "#eeeeee";
    document.getElementById('five').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerSix.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerSix.setMap(null);
    document.getElementById('six').style.backgroundColor = "#eeeeee";
    document.getElementById('six').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerSeven.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerSeven.setMap(null);
    document.getElementById('seven').style.backgroundColor = "#eeeeee";
    document.getElementById('seven').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerEight.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerEight.setMap(null);
    document.getElementById('eight').style.backgroundColor = "#eeeeee";
    document.getElementById('eight').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerNine.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerNine.setMap(null);
    document.getElementById('nine').style.backgroundColor = "#eeeeee";
    document.getElementById('nine').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });

  markerTen.addListener('click', function() {
    document.getElementById('info').style.visibility = "visible";
    setTimeout(function(){document.getElementById('info').style.visibility = "hidden"} , 2000);
    markerTen.setMap(null);
    document.getElementById('ten').style.backgroundColor = "#eeeeee";
    document.getElementById('ten').style.color = "#444";
    found++;
    if( found == 10 ) {
      document.getElementById("win-screen").style.visibility = "visible";
    }
  });
}

function playAgain() {
  location.reload();
}
