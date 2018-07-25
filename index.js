// Code your solution in this file!
function logDriverNames(drivers){
    return drivers.forEach(function(ele){
    	console.log(ele['name']);
    });
}
function logDriversByHometown(drivers,location){
	 return drivers.forEach(function(ele){
    	if(ele.hometown === location){
    		console.log(ele.name)
    	}
    });
}
function driversByRevenue(drivers){
   return drivers.slice().sort(function(a, b){
   	return a.revenue -  b.revenue
   });
}
const driversByName = function (drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.name > b.name;
  });
}
function totalRevenue(drivers){
       return drivers.reduce(function(total, driver){
       	return driver.revenue + total;
       },0)
}
function averageRevenue(drivers){
   return totalRevenue(drivers)/ drivers.length;
}