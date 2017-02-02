'use strict';

module.exports = function($scope, $http) {
  $scope.booking = 'booking';

  // var refresh = function () {
  //       $http.get('/movie/movie').success(function (response) {
  //           console.log('READ IS SUCCESSFUL');
  //           $scope.movitlist = response;
  //           $scope.movi = "";
  //       });
  //   };
  //
//   //   refresh();
// var movilist={};
//     $scope.get = function(){
//    console.log('Hi Welcome');
//     $http.get('http://www.omdbapi.com/?t='+$scope.movi.Title+'&y='+$scope.movi.Year+'&plot=short&r=json').success(function (response){
//          console.log(response);
//   for(var key in response)
//   {
//    if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors' ||key=='Runtime')
//        {
//        movilist[key] = response[key];
//        }
//
//      console.log(movilist);
//
//        }
//             refresh5();
//    });
//  }
//
//  var refresh5 = function () {
//                              $http.get('/movie/movie').success(function (response) {
//                                  console.log('READ IS SUCCESSFUL');
//                                  $scope.movilist = response;
//                                  $scope.movi = "";
//                              });
//                          };
//
//     $scope.addMovie = function () {
//       //  console.log(movi);
//       //   $scope.movi=movi;
//         // console.log($scope.movi);
//         $http.post('/movie/movie',movilist).success(function (response) {
//             console.log(response);
//             console.log("CREATE IS SUCCESSFUL");
//             refresh5();
//         });
//     };



var movieObj={};
$scope.get= function(){
  console.log('Hi Welcome');
   $http.get('http://www.omdbapi.com/?t='+$scope.movieObj.Title+'&y='+$scope.movieObj.Year+'&plot=full&r=json').success(function (response){
        console.log(response);
 for(var key in response)
 {
  if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors' || key== 'Plot' || key== 'imdbRating')
      {
      movieObj[key] = response[key];
      }

    console.log(movieObj);

      }
           refresh5();
  });
}

var refresh5 = function () {
                            $http.get('/movie/movie').success(function (response) {
                                console.log('READ IS SUCCESSFUL');
                                $scope.movieObj = response;
                                $scope.moviess = "";
                            });
                        };

                    refresh5();




                          $scope.addMovie = function () {
                              console.log(movieObj);
                              $http.post('/movie/movie',movieObj).success(function (response) {
                                  console.log(response);
                                  console.log("CREATE IS SUCCESSFUL");
                                  refresh5();
                              });
                          };

    // $scope.removeMovie = function (id) {
    //     console.log(id);
    //     $http.delete('/movie/movie/' + id._id).success(function (response) {
    //         console.log(response);
    //         console.log('DELETED SUCCESSFULLY');
    //         refresh();
    //     });
    // };
    //
    // $scope.editMovie = function (id) {
    //      $http.get('/movie/movie/' + id._id).success(function (response) {
    //         $scope.movi = response[0];
    //     });
    // };
    //
    // $scope.updateMovie = function () {
    //     console.log("REACHED UPDATE");
    //     console.log($scope.movi._id);
    //     $http.put('/movie/movie/' + $scope.movi._id, $scope.movi).success(function (response) {
    //         console.log(response);
    //         refresh();
    //     })
    // }
};
