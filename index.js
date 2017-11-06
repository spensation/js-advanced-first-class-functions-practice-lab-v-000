// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach((driver) => {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice()
  .sort((a, b) => {
    return a.revenue - b.revenue;
  })
}

const driversByName = function (drivers) {
  return drivers.slice()
  .sort((a, b) => {
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce((total, currentDriver) => {
    return total + currentDriver.revenue;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
