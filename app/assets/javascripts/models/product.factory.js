// Product Resource
angular
  .module('MyStore')
  .factory("Product", function ($resource) {
    return $resource('/products/:id', 
      { 
        id: '@id'
      },
    {
      'get': { 
        method: 'GET', isArray: false,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      'query': { 
        method: 'GET', isArray: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      'save': {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      'delete': {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      },
      'update': {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    });
});
