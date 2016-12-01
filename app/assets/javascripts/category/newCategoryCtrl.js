angular.module('MyStore').controller('addNewCategory', 
  ['$scope', '$http', '$state', '$localStorage', '$sessionStorage', 'Auth', 'Category', 'FileUploader', addNewCategory]);

function addNewCategory($scope, $http, $state, $localStorage, $sessionStorage, Auth, Category, FileUploader) {
	console.log('addNewCategory');

	$scope.category = new Category;

  Category.query({}, function(data){
    $scope.categories = data;
  });

  var uploader = $scope.uploader = new FileUploader({});
  
  $scope.addCategory = function(){
    $scope.category.$save(function(){
      console.log($scope.category);
      $state.go('admincategory')

      uploader.url = '/categories/'+$scope.category.id+'/photos';

      $.map(uploader.queue, function(file_obj) {
        file_obj.url = '/categories/'+$scope.category.id+'/photos';
      })
      
      uploader.onCompleteAll = function() {
        $state.go('editcategory', {id: $scope.category.id});
      };

      if(uploader.queue.length > 0){
        uploader.uploadAll();
      } else {
        $state.go('editcategory', {id: $scope.category.id});
      }
    })
  }

  
}
