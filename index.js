// Code your solution in this file!

const callBack = function (drivers) {
  console.log(drivers.name)

}
function logDriverNames(drivers) {
  drivers.forEach(callBack)
}



function logDriversByHometown(drivers, hometown) {

  let x = drivers.forEach(function (c) {
  let y =''
    if (hometown===c.hometown){
    y = c.name
    }
console.log( y);
  })
  console.log(x);
}

function driversByRevenue(drivers) {
  let z = [...drivers].sort(function(c1, c2){
    return c1.revenue - c2.revenue
  })

  return z
}

function driversByName(drivers) {
  let z = [...drivers].sort(function(c1, c2){
    return c1.name.localeCompare(c2.name)
  })

  return z
}

function totalRevenue(drivers) {
  let totalRevenue = 0
  drivers.forEach(function (c) {
    totalRevenue += c.revenue
      })
  return totalRevenue
}

function averageRevenue(drivers) {
  let averageRevenue = totalRevenue(drivers)/5
return averageRevenue
  }
