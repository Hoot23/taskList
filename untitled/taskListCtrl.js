/**
 * Created by Jacob on 08-Jul-16.
 */
var taskApp = angular.module('taskApp', []);

taskApp.controller('tAppCtrl', function($scope)
{
    $scope.taskList = [];

    $scope.addTask = function()
    {
        $scope.taskList.push({taskListText:$scope.taskListInput, checked: false});
        $scope.taskListInput="";
    };

    $scope.removeTask = function()
    {
        var tempList = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(tempList, function(task)
        {
            if(!task.checked)
                $scope.taskList.push(task);
        });
    };

    $scope.boxesChecked = function()
    {
        var numBoxesCheck = 0;
        angular.forEach($scope.taskList, function(task){
            if(task.checked)
                numBoxesCheck++;
        });
        return numBoxesCheck;
    };

});