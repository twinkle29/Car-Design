'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
.service("Reviews",function(){
	var Reviews=[];

	this.addReviewFact=function(n,r)
	{
	
		Reviews.push({name:n,rev:r});
		
		var jsonObject = JSON.stringify(Reviews);
		
		localStorage.setItem("ReviewList",jsonObject);
		 };


	
this.list=function() {
		
	
 var ReviewsString=localStorage.getItem("ReviewList");
 
 Reviews=JSON.parse(ReviewsString);

		return Reviews;
	};
})
.service("Car",function(){
/*this.addForecastFact=function(n,r)
	{
	
		Car.push({type:n,seats:r});
		
		var jsonObject = JSON.stringify(Car);
		
		localStorage.setItem("Forecast",jsonObject);
		

		
  
  };
  	this.addInitialBlueprintFact=function(n)
	{
	
		Car.push({image:n});
		
		var jsonObject = JSON.stringify(Car);
		
		localStorage.setItem("Blueprint",jsonObject);
		

		
  
  };
  this.addMarketStudyFact=function(n)
	{
	
		Car.push({file:n});
		
		var jsonObject = JSON.stringify(Car);
		
		localStorage.setItem("MarketStudy",jsonObject);
		

		
  
  };
  this.addOtherDetailsFact=function(n,r)
	{
	alert("inside other details fact")
		Car.push({name:n,manager:r});
		
		var jsonObject = JSON.stringify(Car);
		alert(jsonObject)
		localStorage.setItem("OtherDetails",jsonObject);
		

		
  
  };*/

  var Car=[];
  this.addCarFact=function(t,s,n,m)
  {
  	alert("inside add car fact")
  	Car.push({type:t,name:n,manager:m,seats:s});
  	alert("pushed")
  	var jsonObject = JSON.stringify(Car);
  	localStorage.setItem("CarList",jsonObject);

  }


	
	this.list=function() {
		alert("3")
	
 /*var ForecastString=localStorage.getItem("Forecast");
 var BlueprintString=localStorage.getItem("Blueprint");
 var MarketStudyString=localStorage.getItem("MarketStudy");
 var OtherDetailsString=localStorage.getItem("OtherDetails");
  var Carf=JSON.parse(ForecastString);
   var Carb=JSON.parse(BlueprintString);
    var Carm=JSON.parse(MarketStudyString);
     var Caro=JSON.parse(OtherDetailsString);
 alert(OtherDetailsString)
 alert(Caro)
 var i=0;
  angular.forEach(Carf, function(value, key){
  	Car[i].type=value.type;
  	Car[i].seats=value.seats;
  	 angular.forEach(Carb, function loop(value, key){
  Car[i].image=value.image;
  angular.forEach(Carm, function loop(value, key){
Car[i].file=value.file;
 angular.forEach(Caro, function loop(value, key){
 	Car[i].name=value.name;
 	Car[i].manager=value.manager;
 	loop.stop=true;
  })
 loop.stop=true; 
  })
 loop.stop=true;
  })*/

/*}) */
 /*alert(CarString)
 Car=JSON.parse(CarString);*/
 var CarString=localStorage.getItem("CarList");
 Car=JSON.parse(CarString);
alert(Car)
		return Car;
	};
})