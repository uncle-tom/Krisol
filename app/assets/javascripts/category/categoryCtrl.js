angular.module('MyStore').controller('categoryCtrl', 
  ['$scope', '$http', '$stateParams', '$localStorage', '$sessionStorage', 
  'Auth', 'ngCart', '$location', 'Category', 'Product',  categoryCtrl]);

function categoryCtrl($scope, $http, $stateParams, $localStorage, $sessionStorage, Auth, ngCart, $location, Category, Product) {

  $http.get('/categories/'+$stateParams.id+'.json').success(function(data, status, headers, config){
    $scope.resp = data;
    $scope.mybackground = $scope.resp.category_photos[0].image.url
  })
	
	Category.query({}, function(data){
    $scope.categories = data;
  });

 

  // $scope.category = new Category();

  $scope.categoryDel = function(category_id){
    Category.delete({id: category_id});
    console.log('del')
  }

  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };

  $scope.qty = 5000;

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

  $scope.SetIncludes = [];
  $scope.SoftIncludes = [];
  $scope.BoardIncludes = [];
  $scope.FiguresIncludes = [];
  $scope.PazzlesIncludes = [];

  // filters Is Set
  $scope.includesSet = function(is_set){
    var i = $.inArray(is_set, $scope.SetIncludes);
    if (i > -1) {
      $scope.SetIncludes.splice(i, 1);
    } else {
      $scope.SetIncludes.push(is_set);
    }
  }
  $scope.setFilter = function(products) {
    console.log('filter', $scope.SetIncludes)
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
    console.log('filter', $scope.SoftIncludes)
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
    console.log('filter', $scope.FiguresIncludes)
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
    console.log('filter', $scope.BoardIncludes)
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
    console.log('filter', $scope.PazzlesIncludes)
    if ($scope.PazzlesIncludes.length > 0) {
      if ($.inArray(products.is_puzzles, $scope.PazzlesIncludes) < 0)
        return;
    }
    return products;
  }


  $scope.sizes = [
    {size: "75A"},
    {size: "75B"},
    {size: "80B"},
    {size: "85B"},
    {size: "75C"},
    {size: "80C"},
    {size: "85C"},
    {size: "70D"},
    {size: "75D"},
    {size: "80D"},
    {size: "85D"},
    {size: "XS"},
    {size: "S"},
    {size: "M"},
    {size: "L"},
    {size: "XL"},
  ];

  $scope.colors = [
    {
      color: "Черный",
      html: 'black',
      border: 'none',
    },
    {
      color: "Белый",
      html: 'white',
      border: '1px solid',
    },
    {
      color: "Голубой",
      html: 'lightskyblue',
      border: 'none',
    },
    {
      color: "Бежевый",
      html: 'beige',
      border: 'none',
    },
    {
      color: "Коричневый",
      html: '#964B00',
      border: 'none',
    },
    {
      color: "Красный",
      html: 'red',
      border: 'none',
    },
    {
      color: "Темно-красный",
      html: 'Darkred',
      border: 'none',
    },
    {
      color: "Бордовый",
      html: 'Maroon',
      border: 'none',
    },
    {
      color: "Синий",
      html: 'blue',
      border: 'none',
    },
    {
      color: "Серый",
      html: 'grey',
      border: 'none',
    },
    {
      color: "Персиковый",
      html: '#FFE5B4',
      border: 'none',
    },
    {
      color: "Зеленый",
      html: 'green',
      border: 'none',
    },
    {
      color: "Фиолетовый",
      html: 'purple',
      border: 'none',
    },
    {
      color: "Розовый",
      html: 'pink',
      border: 'none',
    },
  ];
}
