var app = angular.module('Business', []);

app.directive('companyHeading', function() {
    return {
        'restrict': 'E',
        'templateUrl': '_partials/company-name-heading.html',
    };
});

// Custom filter for making first character in sentence upper case
app.filter('ucfirst', function() {
    return function(input) {
        input += '';
        var f = input.charAt(0)
          .toUpperCase();
        return f + input.substr(1);
    };
});

// Our staff controller which handles grabbing our employee collection
// and passing it to the view
app.controller('StaffController', function($scope,$http) {
    $http.get("employees.json")
        .success(function(data, status, headers, config) {
            $scope.employees = data;
        })
        .error(function(data, status, headers, config) {
            console.log('failed');
        });
    $scope.addEmployee = function(user) {
        // add to the end of employees collection
        $scope.employees.push(user);
        // reset
        $scope.form.$setPristine();
    };

}).directive('employeeList', function() {
    return {
        'restrict': 'E',
        'templateUrl': '_partials/employee-list.html',
    };
});

app.directive('newEmployeeForm', function() {
    return {
        'restrict': 'E',
        'templateUrl': '_partials/new-employee-form.html',
    };
});