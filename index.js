// Code your solution in this file!
const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];
  
 const logDriverNames = function(arr){
   arr.forEach(function(el, i, arr){
     console.log(el.name);
   });
 }
 
 
const logDriversByHometown = function(arr,location){
  arr.forEach(function(el, i, arr){
    if (el.hometown == location)
    console.log (el.name);
  });
}

const driversByRevenue = function(drivers)
{
   return drivers.slice().sort(function(d1,d2){
     return d1.revenue - d2.revenue;
   })
}

const driversByName = function(drivers)
{
  return drivers.slice().sort(function(d1,d2)
  {
    return d1.name.localeCompare(d2.name)
  })
}

 const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function(drivers)
{
  let total = 0;
  drivers.forEach(function(driver){total+=driver.revenue});
  
  return total/drivers.length;
}


