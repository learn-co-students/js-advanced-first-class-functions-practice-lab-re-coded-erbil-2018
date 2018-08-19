// Code your solution in this file!
function logDriverNames(drivers){
  for(const driver of drivers){
    console.log(driver.name);
    
  }
}

function logDriversByHometown(drivers,hometown){
  for(const driver of drivers){
    if(driver.hometown === hometown){
      console.log(driver.name);
    }
  }
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a,b){
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function(agg,el){
    return parseInt(agg + el.revenue);
  },[])
}

function averageRevenue(drivers){
  let average = (drivers.reduce(function(agg,el){
    return parseInt(agg + el.revenue);
  },[])/drivers.length)
  return average;
}