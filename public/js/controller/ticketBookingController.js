  'use strict';

module.exports = function($scope, $http,$log, $rootScope,$location) {
  $scope.movieinfo = $rootScope.bookedMovie;
$scope.seat=false;  var i;
console.log(  $scope.movieinfo );




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
        document.getElementById("seatno").innerHTML=selected;
        // document.getElementById('myImage').src="img/seat1.gif";
// selected=document.getElementById("seatno").innerHTML;
$scope.NumberOfSeats=selected.length;
// $scope.book.seatnumbers=selected;


}
};

// $scope.add=function(){
//   $scope.seat=true;
//
//         var blockSeat = "";
// $scope.book.Title=$scope.movieinfo.moviTitle;
//
//   console.log($scope.book.Title);
//   console.log($scope.book.CityName);
//   console.log($scope.book.HallName);
//   console.log($scope.book.Day);
//   console.log($scope.book.ShowTime);
//   console.log($scope.book.Amount);
//
//
// console.log($scope.Booklist);
//       for (i = 0; i < $scope.Booklist.length; i++)
//         {
//
//   if($scope.Booklist[i].Title== $scope.book.Title &&  $scope.Booklist[i].CityName==$scope.book.CityName && $scope.Booklist[i].HallName==$scope.book.HallName && $scope.Booklist[i].Day==$scope.book.Day && $scope.Booklist[i].ShowTime==$scope.book.ShowTime && $scope.Booklist[i].Amount==$scope.book.Amount)
//         {
//           console.log($scope.Booklist[i].Title);
//               console.log($scope.Booklist[i].CityName);
//             console.log($scope.Booklist[i].HallName);
//             console.log($scope.Booklist[i].Day);
//             console.log($scope.Booklist[i].ShowTime);
//             console.log($scope.Booklist[i].Amount);
//             $scope.seat=true;
//           reserved=$scope.Booklist[i].seatnumbers;
//           console.log(reserved)
//           alert(reserved);
//
// }        }
//
// };
/////////////////////////////////////////////////////////

$scope.add =function()
{
  $scope.book.Title=$scope.movieinfo.moviTitle;
console.log($scope.book.Title);
console.log($scope.book.CityName);
 // selectdate = document.getElementById("date").value;
 // console.log(selectdate);
console.log($scope.book.ShowTime);
try
{
 for(i=0;i<=$scope.Booklist.length;i++)
       {
         if($scope.Booklist.length==0)
         {
           $scope.seat = true;
         }
       else
         {
 if($scope.Booklist[i].Title===$scope.book.Title && $scope.Booklist[i].CityName===$scope.book.CityName  && $scope.Booklist[i].HallName===$scope.book.HallName  && $scope.Booklist[i].Day===$scope.book.Day && $scope.Booklist[i].ShowTime==$scope.book.ShowTime)

           {
             console.log($scope.Booklist[i].Title);
              console.log($scope.Booklist[i].CityName);
            console.log($scope.Booklist[i].HallName);
            console.log($scope.Booklist[i].Day);
            console.log($scope.Booklist[i].ShowTime);
          $scope.seat = true;
          reserved=$scope.Booklist[i].seatnumbers;
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







///////////////////////////////////////////////////
$scope.bk = function (Booklist) {
  $scope.book.Title=$scope.movieinfo.moviTitle;
$scope.book.seatnumbers=selected;
    console.log($scope.book);
    $http.post('/bok/bok', $scope.book).success(function (response) {
            console.log(response);

               alert(" booked successfully ");

        });
        $rootScope.confirmPage=$scope.Booklist;
$location.path('/Confirm');
        refreshBookin();

};


$scope.submitForm=function(){

}


var refreshLocat = function () {
      $http.get('/cty/cty').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.loclist = response;
          $scope.loc = "";
      });
  };

  refreshLocat();


  var refreshMape = function () {
        $http.get('/map/map').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.maplist = response;
            $scope.map = "";
        });
    };

    refreshMape();

    var refreshTheat = function () {
          $http.get('/theater/theater').success(function (response) {
              console.log('theater READ IS SUCCESSFUL');
              $scope.thtrelist = response;
              $scope.thtre = "";
          });
      }

      refreshTheat();
      //
      // var refreshRating = function () {
      //       $http.get('/rt/rt').success(function (response) {
      //           console.log('Ratinggg READ IS SUCCESSFUL');
      //           $scope.Ratinglist = response;
      //           $scope.Rating = "";
      //   });
      //   };
      //
      //   refreshRating();
  //
  // $scope.Rating.rateFirst=value;
  // $scope.Rating.rateSecond=2;
  // $scope.Rating.rateThird=3;
  // $scope.Rating.rateFourth=4;
  // $scope.Rating.rateFifth=5;
//
//   $scope.rt1=function(){
// console.log($scope.Rating.rateFirst);
//     alert($scope.rateFirst);
//
//   }
//   $scope.Total=function(){
//     var sum=0;
//   for (var i=0; i<5; i++)
//   {
//       sum += this.getField("Rating." + i).value;
//   }
//   event.value = sum / 5;
//   }



    };
