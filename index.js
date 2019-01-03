// Code your solution in this file!
const logDriverNames=function(drivers){
drivers.forEach(function (driver) {
 console.log(driver.name)
})
}
const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
     })
      }
      const driversByRevenue = function (drivers, Revenue) {
  drivers.forEach(function (driver) {
    return driver.sort(driver.Revenue) 
      console.log(driver.name);
    
  });
};