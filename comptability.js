var myComptabilityApp = angular.module("myComptabilityApp", []);

myComptabilityApp.controller("mycontrollertest", function($scope, $http){                        

    $http.get('AccountRecord.json').success(function(data) {
      $scope.Records = data;
    });


    //$scope.AddRecord = function(){
    //    $scope.Records.push({"wDescription":$scope.wDescription, "wAmount":$scope.wAmount, "wDateTime":$scope.wDateTime, "wType":$scope.wType});
    //    $scope.wDescription = '';
    //    $scope.wAmount = '';
    //    $scope.wDateTime = '';
    //    $scope.wType = '';
    //};





$scope.AddRecord = function(){      
        $scope.Records.push({"wDescription":$scope.wDescription, "wAmount":$scope.wAmount, "wDateTime":$scope.wDateTime, "wType":$scope.wType});
        // Writing it to the server
        //      
        var dataObj = {
                wDescription:$scope.wDescription,
                wAmount:$scope.wAmount,
                wDateTime:$scope.wDateTime,
                wType:$scope.wType        
        };  
        var res = $http.post('AccountRecord.json', dataObj);
        res.success(function(data, status, headers, config) {
            $scope.message = data;
        });
        res.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });     
        // Making the fields empty
        //
   //     $scope.wDescription = '';
    //    $scope.wAmount = '';
      //  $scope.wDateTime = '';
       // $scope.wType = '';
    };


    $scope.sortField = 'population';
});