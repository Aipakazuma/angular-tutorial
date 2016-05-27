var app = angular.module('App', []);

app.controller('AppController', function($scope){
  $scope.display = function(){
    var str = $scope.displayText;
    $scope.text = str;
  }
  $scope.comments = [
      {name: "Yamada", text: "Hello!"},
      {name: "Tanaka", text: "Thanks!"},
      {name: "Nakamura", text: "Yeah!"}
  ];
});

app.controller('mainCtrl', function($scope) {
  $scope.users = [
    {'name':'yamada', 'score':'1000'},
    {'name':'okinawa', 'score':'1001'},
    {'name':'okinawa1', 'score':'1001'},
    {'name':'okinawa2', 'score':'1001'},
    {'name':'okinawa3', 'score':'1001'},
    {'name':'okinawa4', 'score':'1201'},
    {'name':'okinawa5', 'score':'1001'},
    {'name':'okinawa6', 'score':'1001'},
    {'name':'okinawa7', 'score':'1001'},
  ];
  $scope.today = new Date();

  $scope.addUser = function() {
    
  }
});

app.controller('userItemCtrl', function ($scope) {
  $scope.increment = function() {
    $scope.user.score++;
  }
});