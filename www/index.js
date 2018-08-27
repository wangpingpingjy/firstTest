var appmodule=angular.module("app", ['ionic', 'oc.lazyLoad'])
.controller("parentCtrl", ['$scope', function($scope){
	$scope.data={
		name:'htf'
	}
	$scope.$on("someEvent",function(event,data){
		$scope.data.name=data;
		});
	}])
	
.controller('childCtrl',  ['$scope', function($scope){
	$scope.clicks=function(){
		     $scope.$emit('someEvent',$scope.data.name+'dsd');
			 
	}
	
	}])
	
.factory('Data', function(){
	return {
		name:'htf'
	};
})
.service('myService',function(){
	this.name="wangpp";
	this.getData=function(){
		return "wangpp";
	}
});
appmodule.controller("childCtrl1",['$scope','Data','$rootScope',function($scope,Data,$rootScope){
	$scope.data=Data;
	var datas={
				name:"wangpingping"
			};
	$scope.change=function(){
		$rootScope.$broadcast('namechanged',datas);
	};
	$rootScope.$on('namechanged',function(event,data){
		$scope.data=data;
	});
}])
appmodule.controller("childCtrl2",['$scope','Data','myService','myProvider','$rootScope',function($scope,Data,myService,myProvider,$rootScope){
	$scope.r=myService.getData();
	$scope.data=Data;
	$scope.lastName=myProvider.lastName;
	var datas={
			name:"wangpingping"
		};
	$scope.change=function(){
		$rootScope.$broadcast('namechanged',datas);
	};
	$rootScope.$on('namechanged',function(event,data){
		$scope.data=data;
	});
}])