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

//theater controller.............


var refreshTheat = function () {
      $http.get('/theater/get').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.thtrelist = response;
          $scope.thtre = "";
      });
  };

  refreshTheat();

  $scope.addTheater = function () {
      console.log($scope.thtre);
      $http.post('/theater/theater', $scope.thtre).success(function (response) {
          console.log(response);
          console.log("CREATE IS SUCCESSFUL");
          refreshTheat();
      });
  };

// $http({
//   method: 'POST',
//   url:'thetr/addTheater',
//   headers:{'content-Type':'application/jason'},
//   data: $scope.thtre
// })
// .then(function(response){
//   console.log(response);
//   console.log("create is successfull");
//   refreshTheat();
// });


  $scope.removeTheater = function (id) {
      console.log(id);
      $http.delete('/theater/theater/' + id._id).success(function (response) {
          console.log(response);
          console.log('DELETED SUCCESSFULLY');
          refreshTheat();
      });
  };

  $scope.editTheater = function (id) {
       $http.get('/theater/theater/' + id._id).success(function (response) {
          $scope.thtre = response[0];
      });
  };

  $scope.updateTheater = function () {
      console.log("REACHED UPDATE");
      console.log($scope.thtre._id);
      $http.put('/theater/theater/' + $scope.thtre._id, $scope.thtre).success(function (response) {
          console.log(response);
          refreshTheat();
      })
  }





//city controllerr...........................
var refreshLocat = function () {
      $http.get('/cty/cty').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.loclist = response;
          $scope.loc = "";
      });
  };

  refreshLocat();

  $scope.addCity = function () {
      console.log($scope.loc);
      $http.post('/cty/cty', $scope.loc).success(function (response) {
          console.log(response);
          console.log("CREATE IS SUCCESSFUL");
          refreshLocat();
      });
  };

  $scope.removeCity = function (id) {
      console.log(id);
      $http.delete('/cty/cty/' + id._id).success(function (response) {
          console.log(response);
          console.log('DELETED SUCCESSFULLY');
          refreshLocat();
      });
  };

  $scope.editCity = function (id) {
       $http.get('/cty/cty/' + id._id).success(function (response) {
          $scope.loc = response[0];
      });
  };

  $scope.updateCity = function () {
      console.log("REACHED UPDATE");
      console.log($scope.loc._id);
      $http.put('/cty/cty/' + $scope.loc._id, $scope.loc).success(function (response) {
          console.log(response);
          refreshLocat();
      })
  }



//showtime controllerr..............................

var refreshShow = function () {
      $http.get('/showt/showt').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.timlist = response;
          $scope.tim = "";
      });
  };

  refreshShow();

  $scope.addShow = function () {
      console.log($scope.tim);
      $http.post('/showt/showt', $scope.tim).success(function (response) {
          console.log(response);
          console.log("CREATE IS SUCCESSFUL");
          refreshShow();
      });
  };

  $scope.removeShow = function (id) {
      console.log(id);
      $http.delete('/showt/showt/' + id._id).success(function (response) {
          console.log(response);
          console.log('DELETED SUCCESSFULLY');
          refreshShow();
      });
  };

  $scope.editShow = function (id) {
       $http.get('/showt/showt/' + id._id).success(function (response) {
          $scope.tim = response[0];
      });
  };

  $scope.updateShow = function () {
      console.log("REACHED UPDATE");
      console.log($scope.tim._id);
      $http.put('/showt/showt/' + $scope.tim._id, $scope.tim).success(function (response) {
          console.log(response);
          refreshShow();
      })
  }

};
