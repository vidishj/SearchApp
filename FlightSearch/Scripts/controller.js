var flightsearch = angular.module('flightSearch', []);

flightsearch.controller('flightList', function ($scope, $http) {
    $http.get('flights-list.json').success(function (data) {
        $scope.flights = data;
        
       
    
        $scope.isActive = function(data){
            
            var filtered = [];
            
            angular.forEach(data, function(value, key){
                if(value.price >= $( "#flight-search" ).slider( "values", 0 ) && value.price <= $( "#flight-search" ).slider( "values", 1 ))
                {
                    filtered.push(value,key);
                }
            })
            
            return filtered;
            //var value = data.price >= $( "#flight-search" ).slider( "values", 0 ) && data.price <= $( "#flight-search" ).slider( "values", 1 ) && data.source == $("#from").val() && data.destination == $("#destination").val() && data.departdate == $("#departuredate").val();
            //if (value == false){
             //   return value;
           // }
            //else{
           // return (data.price >= $( "#flight-search" ).slider( "values", 0 ) && data.price <= $( "#flight-search" ).slider( "values", 1 ) && data.source == $("#from").val() && data.destination == $("#destination").val() && data.departdate == $("#departuredate").val());
          //  }
            
            
            
        
        }
    });
});

