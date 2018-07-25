// Code your solution in this file!

const logDriverNames = function (drivers)
{
  drivers.forEach(function (array) {
    console.log(array.name);
  });
};
const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};
const driversByRevenue = function(drivers)
{
  return drivers.slice().sort(function(driver1,driver2)
  {
    return driver1.revenue - driver2.revenue;
  }
  );
};
const driversByName = function(drivers)
{
  return drivers.slice().
}