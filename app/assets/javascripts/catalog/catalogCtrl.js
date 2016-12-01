angular.module('MyStore').controller('catalogCtrl', 
  ['$scope', '$http', '$localStorage', '$sessionStorage', 'Auth', '$stateParams', '$location', 'Product', catalogCtrl]);

function catalogCtrl($scope, $http, $localStorage, $sessionStorage, Auth, $stateParams, $location, Product) {
	console.log('catalogCtrl');
	
	// $http.get('assets/products/'+$stateParams.id+'.json').success(function(data, status, headers, config){
 //    $scope.products = data;
 //  });
  

  Product.query({},function(data){
    $scope.products = data;
  });

  $scope.price = 5000;
  //filter price_min
  $scope.minpriceFilter = function(products) {
    return parseFloat(products.price) <= parseFloat($scope.price);
  }
  
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

  $scope.colors = '';
  $scope.filterProductsByColor = function(color){
    $scope.colors = color;
    console.log($scope.colors)
  };

  $scope.sizes = '';
  $scope.filterProductsBySize = function(size){
    $scope.sizes = size;
    console.log($scope.sizes)
  };

  // $scope.sizeIncludes = [];
  // $scope.setSelectedSize = function(size) {
  //   var i = $.inArray(size, $scope.sizeIncludes);
  //   if (i > -1) {
  //     $scope.sizeIncludes.splice(i, 1);
  //   } else {
  //     $scope.sizeIncludes.push(size);
  //   }
  //   console.log($scope.sizeIncludes);
  // }

  // $scope.sizeFilter = function(products) {
  //   if ($scope.sizeIncludes.length > 0) {
  //     if ($.inArray(products.sizes, $scope.sizeIncludes) < 0)
  //       return;
  //   }
  //   return products;
  // }

  
  $scope.SetIncludes = [];
  $scope.SoftIncludes = [];
  $scope.BoardIncludes = [];
  $scope.FiguresIncludes = [];
  $scope.PazzlesIncludes = [];

  // filters Is Set
  $scope.includesSet = function(is_set){
    console.log('set');
    var i = $.inArray(is_set, $scope.SetIncludes);
    if (i > -1) {
      $scope.SetIncludes.splice(i, 1);
    } else {
      $scope.SetIncludes.push(is_set);
    }
  }
  $scope.setFilter = function(products) {
    if ($scope.SetIncludes.length > 0) {
      if ($.inArray(products.is_set, $scope.SetIncludes) < 0)
        return;
    }
    return products;
  }

  // filters Is Soft
  $scope.includesSoft = function(is_soft){
    var i = $.inArray(is_soft, $scope.SoftIncludes);
    if (i > -1) {
      $scope.SoftIncludes.splice(i, 1);
    } else {
      $scope.SoftIncludes.push(is_soft);
    }
  }
  $scope.softFilter = function(products) {
    if ($scope.SoftIncludes.length > 0) {
      if ($.inArray(products.is_soft, $scope.SoftIncludes) < 0)
        return;
    }
    return products;
  }

  // filters Is Figures
  $scope.includesFigures = function(is_figures){
    var i = $.inArray(is_figures, $scope.FiguresIncludes);
    if (i > -1) {
      $scope.FiguresIncludes.splice(i, 1);
    } else {
      $scope.FiguresIncludes.push(is_figures);
    }
  }
  $scope.figuresFilter = function(products) {
    if ($scope.FiguresIncludes.length > 0) {
      if ($.inArray(products.is_figures, $scope.FiguresIncludes) < 0)
        return;
    }
    return products;
  }

  // filters Is Board
  $scope.includesBoard = function(is_board){
    var i = $.inArray(is_board, $scope.BoardIncludes);
    if (i > -1) {
      $scope.BoardIncludes.splice(i, 1);
    } else {
      $scope.BoardIncludes.push(is_board);
    }
  }
  $scope.boardFilter = function(products) {
    if ($scope.BoardIncludes.length > 0) {
      if ($.inArray(products.is_board, $scope.BoardIncludes) < 0)
        return;
    }
    return products;
  }

  // filters Is Pazzles
  $scope.includesPazzles = function(is_puzzles){
    var i = $.inArray(is_puzzles, $scope.PazzlesIncludes);
    if (i > -1) {
      $scope.PazzlesIncludes.splice(i, 1);
    } else {
      $scope.PazzlesIncludes.push(is_puzzles);
    }
  }
  $scope.pazzlesFilter = function(products) {
    if ($scope.PazzlesIncludes.length > 0) {
      if ($.inArray(products.is_puzzles, $scope.PazzlesIncludes) < 0)
        return;
    }
    return products;
  }
}
