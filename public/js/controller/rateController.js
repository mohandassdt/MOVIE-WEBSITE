'use strict';

module.exports = function($scope, $http,$log, $rootScope) {
$scope.movieinfo = $rootScope.bookedMovie;

console.log(  $scope.movieinfo );

var refreshRate = function() {
    $http.get('/rt/rt').success(function(response) {
        console.log('ratingg IS SUCCESSFUL');
        $scope.rateList = response;
        $scope.rate = "";
    });
};
refreshRate();


$scope.doneRate= function (rateList) {
  $scope.rate.Title=$scope.movieinfo.moviTitle;
$scope.rate.moviYear=$scope.movieinfo.moviYear;

  $scope.rate.moviLanguage=$scope.movieinfo.moviLanguage;
  // $scope.rate.comments=$scope.movieinfo.Day;
  // $scope.rate.cnShowTime=$scope.movieinfo.ShowTime;
  // $scope.rate.cnAmount=$scope.movieinfo.Amount;
  // $scope.rate.cnNoTickets=$scope.movieinfo.NoTickets;
  // $scope.rate.cnseatnumbers=$scope.movieinfo.seatnumbers;


    $http.post('/rt/rt', $scope.rate).success(function (response) {
            console.log(response);


        });

refreshRate();
         };

         var sMax;
         var holder;
         var reset;
         var rated;


         function rating(num){
         sMax = 0;
         for(n=0; n<num.parentNode.childNodes.length; n++){
         if(num.parentNode.childNodes[n].nodeName == "A"){
         sMax++;
         }
         }

         if(!rated){
         s = num.id.replace("_", '');
         a = 0;
         for(i=1; i<=sMax; i++){
         if(i<=s){
         document.getElementById("_"+i).className = "on";
         document.getElementById("rateStatus").innerHTML = num.title;
         holder = a+1;
         a++;
         }else{
         document.getElementById("_"+i).className = "";
         }
         }
         }
         }


         function off(me){
         if(!rated){
         if(!reset){
         for(i=1; i<=sMax; i++){
         document.getElementById("_"+i).className = "";
         document.getElementById("rateStatus").innerHTML = me.parentNode.title;
         }
         }else{
         rating(reset);
         document.getElementById("rateStatus").innerHTML = document.getElementById("ratingSaved").innerHTML;
         }
         }
         }


         function rateIt(me){
         if(!rated){
         document.getElementById("rateStatus").innerHTML = document.getElementById("ratingSaved").innerHTML + " :: "+me.title;
         reset = me;
         rated=1;
         sendRate(me);
         rating(me);
         }
         }


         function sendRate(sel){
         alert("Your rating was: "+sel.title);
         }



};
