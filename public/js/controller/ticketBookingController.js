  'use strict';

module.exports = function($scope, $http,$log, $rootScope,$location) {
  $scope.movieinfo = $rootScope.bookedMovie;
  var date;
  var details=[];
$scope.seat=false;  var i;
$rootScope.seatArrange=[];
console.log(  $scope.movieinfo );

// document.getElementById("datebook").value=date;


var refreshBookin = function () {
      $http.get('/bok/bok').success(function (response) {
          console.log('book READ IS SUCCESSFUL');
          $scope.Booklist = response;
          $scope.book = "";
  });
  };

  refreshBookin();




//
// $scope.rt1=function(){
// var value=1;
// return value;
// }

var refreshConfirm = function () {

    $http.get('/con/con').success(function (response) {
        console.log('Confirm READ IS SUCCESSFUL');
        $scope.confirmlist = response;
        $scope.confirm = "";
});
};

refreshConfirm();






  //
  var selected=[];
  var reserved=[];

  $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
       $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10 ];

       $scope.getStatus = function(seatPos) {
         if(reserved.indexOf(seatPos) > -1) {
                       return 'reserved';
                   } else if(selected.indexOf(seatPos) > -1) {
                       return 'selected';
                   }

               }



$scope.seatClicked=function(seatPos){
  var index = selected.indexOf(seatPos);
   if(index != -1) {
       // seat already selected, remove
       selected.splice(index, 1)
   } else {
       // new seat, push
       selected.push(seatPos);
        console.log(selected);
        // $rootScope.seatArrange=selected;
        // console.log($rootScope.seatArrange);


        document.getElementById("seatno").innerHTML=selected;
        // document.getElementById('myImage').src="img/seat1.gif";
// selected=document.getElementById("seatno").innerHTML;
$scope.NumberOfSeats=selected.length;
// $scope.book.seatnumbers=selected;
$scope.book.totalAmnt=$scope.book.Amount*$scope.NumberOfSeats;


}
};

$scope.d=function(){
  date=document.getElementById("datebook").value;
// alert(date);
console.log(date);
}
//
// $scope.e=function(){
//   cityNmae=document.getElementById("citybook").value;
// alert(cityNmae);
// console.log(cityNmae);
// }




$scope.add =function()
{
      // $scope.seat = true;

$scope.book.Day=date;
  $scope.book.Title=$scope.movieinfo.moviTitle;
console.log($scope.book.Title);
console.log($scope.book.CityName);
console.log($scope.book.HallName);
console.log($scope.book.Day);

console.log($scope.book.ShowTime);


 // selectdate = document.getElementById("date").value;
 // console.log(selectdate);
// console.log($scope.book.ShowTime);

  //  details=$scope.confirmlist;
try
{
 for(i=0;i<=$scope.confirmlist.length;i++)
       {
         if($scope.confirmlist.length==0)
         {
           $scope.seat = true;
         }
         else{
           console.log($scope.confirmlist[i].Title);
           console.log($scope.confirmlist[i].cnCityName);
           console.log($scope.confirmlist[i].cnHallName);
           console.log($scope.confirmlist[i].cnDay);
           console.log($scope.confirmlist[i].cnShowTime);


// console.log($scope.confirmlist[i].Title);

       if ($scope.confirmlist[i].Title==$scope.book.Title && $scope.confirmlist[i].cnCityName==$scope.book.CityName  && $scope.confirmlist[i].cnHallName==$scope.book.HallName  && $scope.confirmlist[i].cnDay==$scope.book.Day && $scope.confirmlist[i].cnShowTime==$scope.book.ShowTime)
 {
       $scope.seat = true;
             console.log($scope.confirmlist[i].Title);
              console.log($scope.confirmlist[i].cnCityName);
            console.log($scope.confirmlist[i].cnHallName);
            console.log($scope.confirmlist[i].cnDay);
            console.log($scope.confirmlist[i].cnShowTime);

          // reserved.push($scope.confirmlist[i].cnseatnumbers);
          // selected.push($scope.confirmlist[i].cnseatnumbers);

          reserved=$scope.confirmlist[i].cnseatnumbers;
        console.log(reserved);

      }
       else
       {
          $scope.seat = true;
       }
     }
       }

    }
     catch(e){}

};


//
// $scope.touch=function(Booklist){
//   $scope.book.Title=$scope.movieinfo.moviTitle;
//   $http.post('/bok/bok', $scope.book).success(function (response) {
//           console.log(response);
//
//       });
//         refreshBookin();
// }



///////////////////////////////////////////////////
$scope.bk = function (Booklist) {
  var arr = [];
while(arr.length < 1){
    var randomnumber = Math.ceil(Math.random()*100000)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
$scope.book.bookingid= arr;
console.log($scope.book.bookingid);
  $scope.book.Title=$scope.movieinfo.moviTitle;
$scope.book.seatnumbers=selected;
// $scope.book.seatnumber=
    console.log($scope.book);
    $http.post('/bok/bok', $scope.book).success(function (response) {
            console.log(response);

        });
        $rootScope.confirmPage=$scope.book;
$location.path('/Confirm');
        refreshBookin();

};

//
// var uniqueNames = [];
//              var uniqueObj = [];
//        for(i = 0; i< data.length; i++){
//                if(uniqueNames.indexOf(data[i].City) === -1){
//                    uniqueObj.push(data[i])
//              uniqueNames.push(data[i].City);
//                }
//        }


var refreshLocat = function () {
      $http.get('/cty/cty').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.loclist = response;
          $scope.loc = "";



      });
  };

  refreshLocat();
  var uniqueNames = [];
var uniqueObj = [];
var uniqueHall=[];
var uniqueTheat=[];


  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            console.log($scope.maplist);
            $scope.map = "";


               for(i = 0; i< $scope.maplist.length; i++){
                 if($scope.maplist[i].Film==$scope.movieinfo.moviTitle){
               if(uniqueNames.indexOf($scope.maplist[i].City) === -1){
                   uniqueObj.push($scope.maplist[i]);
               uniqueNames.push($scope.maplist[i].City);

          //      if($scope.maplist[i].City==$scope.book.CityName){
          //    if(uniqueNames.indexOf($scope.maplist[i].City) === -1){
          //        uniqueObj.push($scope.maplist[i]);
          //    uniqueNames.push($scope.maplist[i].City);
          //  }
          //    }}
        }
           }}
           console.log(uniqueNames);

               console.log($scope.locMovie);
console.log($scope.book.CityName);



                          console.log(uniqueNames);
                            console.log(uniqueNames);

                              console.log($scope.locMovie);

        });

    };
    $scope.locMovie=uniqueNames;
    $scope.loctheat=uniqueHall;

    refreshMape();

$scope.sel=function(){
  var j;
  for( j= 0; j< $scope.maplist.length; j++){

if($scope.maplist[j].Film==$scope.movieinfo.moviTitle&&$scope.maplist[j].City==$scope.book.CityName){
  if(uniqueHall.indexOf($scope.maplist[j].Hall) === -1){
      uniqueTheat.push($scope.maplist[j]);
  uniqueHall.push($scope.maplist[j].Hall);
console.log(uniqueHall);
}}
}
}
  // var refreshMape = function () {
  //       $http.get('/map/map').success(function (response) {
  //           console.log('READ IS SUCCESSFUL');
  //           $scope.maplist = response;
  //           $scope.map = "";
  //
  //           var uniqueNames = [];
  //              var uniqueObj = [];
  //
  //                for(i = 0; i< maplist.length; i++){
  //                  if(uniqueNames.indexOf(maplist[i].City) === -1){
  //                      uniqueObj.push(maplist[i])
  //                  uniqueNames.push(maplist[i].City);
  //                      }
  //                  }
  //
  //              };
  //
  //
  //       )};
  //
  //   refreshMape();




      //    document.getElementById("cityNames").innerHTML=uniqueNames;
      //  alert(uniqueNames);
      //  console.log(uniqueNames);
      //  }

    var refreshTheat = function () {
          $http.get('/theater/theater').success(function (response) {
              console.log('theater READ IS SUCCESSFUL');
              $scope.thtrelist = response;
              $scope.thtre = "";

          });
      }

      refreshTheat();
      /////////////////////////

      // (function() {
      // 	 function IDGenerator() {
      //
      // 		 this.length = 4;
      // 		 this.timestamp = +new Date;
      //
      // 		 var _getRandomInt = function( min, max ) {
      // 			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
      // 		 }
      //
      // 		 this.generate = function() {
      // 			 var ts = this.timestamp.toString();
      // 			 var parts = ts.split( "" ).reverse();
      // 			 var id = "";
      //
      // 			 for( var i = 0; i < this.length; ++i ) {
      // 				var index = _getRandomInt( 0, parts.length - 1 );
      // 				id += parts[index];
      // 			 }
      //
      // 			 return id;
      // 		 }
      //
      //
      // 	 }
      //
      //
      // 	 document.addEventListener( "DOMContentLoaded", function() {
      // 		var btn = document.querySelector( "#generate" ),
      // 			output = document.querySelector( "#output" );
      //
      // 		btn.addEventListener( "click", function() {
      // 			var generator = new IDGenerator();
      // 			output.innerHTML = generator.generate();
      //
      // 		}, false);
      //
      // 	 });
      //
      //
      //  })();










    };
