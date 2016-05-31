var app = angular.module('app', ['ngSanitize']);

app.controller('hogeCtrl', function($scope, $http) {

    //init
    $scope.user = {};
    $scope.user.name  = '';
    $scope.user.email = '';
    $scope.user.file  = '';

    //onclick
    $scope.btnClick = function(){

        //formdata
        var fd = new FormData();
        fd.append('name',$scope.user.name);
        fd.append('email',$scope.user.email);
        fd.append('file',$scope.user.file);

        //post
        $http.post('/php/file-upload.php',
          fd,
          {
            transformRequest: null,
            headers: {'Content-type':undefined}
          }
        )
        .success(function(res){
            $scope.user.response = res;
        });
    }

});

//directive
app.directive('fileModel',function($parse){
    return{
        restrict: 'A',
        link: function(scope,element,attrs){
            var model = $parse(attrs.fileModel);
            element.bind('change',function(){
                scope.$apply(function() {
                    model.assign(scope, element[0].files[0]);
                });
            });
        }
    };
});