'use strict';

module.exports = function($scope, $http) {
  $scope.booking = 'booking';

  var refresh = function () {
        $http.get('/movie/movie').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.movilist = response;
            $scope.movi = "";
        });
    };

    refresh();

    $scope.add= function(movi) {
      console.log('Hi Welcome');
      $http.get('http://www.omdbapi.com/?t=${movi.movieTitle}&y=${movi.movieYear&plot}=short&r=json').success
        // console.log($scope.movilist);
        var moviObj={};
        // success(function (response){
          // console.log(response);
   for(var key in response){

     if(key=='Title'|| key=='Year' || key== 'Language' || key== 'Poster' || key== 'Genre' || key== 'Director' || key== 'Actors')

         movieObj[key] = response[key];
         }
       }
       $http({
         method:'POST',
         url:'/movie/movie',
         headers:{'content-Type':'application/jason'},
         data:movieObj
       })
       .then(function(response){
         console.log(response);
         console.log("succccesssss");

       });






        // $http.post('/movie/movie', $scope.contact).success(function (response) {
        //     console.log(response);
        //     console.log("CREATE IS SUCCESSFUL");
        //     refresh();
        // });
    };

    $scope.removeMovie = function (id) {
        console.log(id);
        $http.delete('/movie/movie/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editMovie = function (id) {
         $http.get('/movie/movie/' + id._id).success(function (response) {
            $scope.movi = response[0];
        });
    };

    $scope.updateMovie= function () {
        console.log("REACHED UPDATE");
        console.log($scope.movi._id);
        $http.put('/movie/movie/' + $scope.movi._id, $scope.movi).success(function (response) {
            console.log(response);
            refresh();
        })
    };


// };
// 'use strict';
//
// module.exports = function($scope, $http) {
//   $scope.booking = 'booking';
//
//   var refresh = function () {
//         $http.get('/movie/movie').success(function (response) {
//             console.log('READ IS SUCCESSFUL');
//             $scope.movilist = response;
//             $scope.movi = "";
//         });
//     };
//
//     refresh();
//
//     $scope.addMovie = function () {
//         console.log($scope.movi);
//         $http.post('/movie/movie', $scope.movi).success(function (response) {
//             console.log(response);
//             console.log("CREATE IS SUCCESSFUL");
//             refresh();
//         });
//     };
//
//     $scope.removeMovie = function (id) {
//         console.log(id);
//         $http.delete('/movie/movie/' + id._id).success(function (response) {
//             console.log(response);
//             console.log('DELETED SUCCESSFULLY');
//             refresh();
//         });
//     };
//
//     $scope.editMovie = function (id) {
//          $http.get('/movie/movie/' + id._id).success(function (response) {
//             $scope.movi = response[0];
//         });
//     };
//
//     $scope.updateMovie = function () {
//         console.log("REACHED UPDATE");
//         console.log($scope.movi._id);
//         $http.put('/movie/movie/' + $scope.movi._id, $scope.movi).success(function (response) {
//             console.log(response);
//             refresh();
//         })
//     }
// };
