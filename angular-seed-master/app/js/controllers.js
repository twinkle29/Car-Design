'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller("MyCarCtrl1", function($scope,Car,$rootScope) {
var car=[];
$rootScope.type='';
$rootScope.name='';
$rootScope.seats='';
$rootScope.manager='';

alert("form controller")
$scope.addForecast=function(){
	alert("add forecast")
	car.push({type:$scope.typeOfCar,seats:$scope.noOfSeats});
	
	/*Car.addForecastFact($scope.typeOfCar,$scope.noOfSeats);*/
	alert($scope.typeOfCar)
	$rootScope.type=$scope.typeOfCar;
	alert($rootScope.type)
	$rootScope.seats=$scope.noOfSeats;
	$scope.typeOfCar='';
	$scope.noOfSeats='';
};
 
  
$scope.addInitialBlueprint=function(){
	car.push({image:$scope.uploadme});
	alert($rootScope.type)
	/*Car.addInitialBlueprintFact($scope.uploadme);*/
	$scope.uploadme = {};
$scope.uploadme.src = "";

  };

$scope.addMarketStudy=function(){
	car.push({file:$scope.marketStudy});
	
/*	Car.addMarketStudyFact($scope.marketStudy);*/
	
	$scope.marketStudy = '';


  }
 
  	$scope.addOtherDetails=function(){
  		
  	car.push({name:$scope.projectName,manager:$scope.projectManager});
  	/*	Car.addOtherDetailsFact($scope.projectName,$scope.projectManager);*/
  		$rootScope.name=$scope.projectName;
  		$rootScope.manager=$scope.projectManager;
  		$scope.projectName='';
  		$scope.projectManager='';
  		alert($rootScope.type);
  		alert($rootScope.seats);
  		Car.addCarFact($rootScope.type,$rootScope.seats,$rootScope.name,$rootScope.manager);
  	}

  })
  .controller("expCtrl",function($scope,Reviews)
{	/*var Reviews=[{yourName:"Akshay",yourRev:"Good"},{yourName:"asd",yourRev:"Good"}];
	$scope.Reviews=Reviews;*/
	/*alert("in excp controller")
	localStorage.clear();
	alert(cleared);*/
	$scope.reviews=[];
	$scope.addReview=function(){ 
		
	$scope.reviews.push({name:$scope.Name,rev:$scope.Rev});
	
	Reviews.addReviewFact($scope.Name,$scope.Rev);
	
	$scope.Name='';
	$scope.Rev='';
	
	};
})
 .controller("expCtrl1",function($scope,Reviews)
{	/*var Reviews=[{yourName:"Akshay",yourRev:"Good"},{yourName:"asd",yourRev:"Good"}];
	$scope.Reviews=Reviews;*/
	$scope.reviews=[];
	
	 
	$scope.reviews=Reviews.list();
	
	}
)
 .controller("MyCarCtrl",function($scope,Car)
{	/*var Reviews=[{yourName:"Akshay",yourRev:"Good"},{yourName:"asd",yourRev:"Good"}];
	$scope.Reviews=Reviews;*/
	$scope.car=[];
	
	 alert("1")
	$scope.car=Car.list();
	alert("2")
	}
)