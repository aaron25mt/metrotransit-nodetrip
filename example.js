const MTNT = require("./metrotransit-nodetrip");
const API = new MTNT();

// Get all providers
API.getProviders()
.then(providers => {
  console.log(providers)
})
.catch(error => {
  console.log(error)
});

// Get all routes
API.getRoutes()
.then(routes => {
  console.log(routes)
})
.catch(error => {
  console.log(error)
});

// Get all directions for route 902
API.getDirectionsForRoute(902)
.then(routes => {
  console.log(routes);
})
.catch(error => {
  console.log(error);
});

// Get all stops for route 902 going east
API.getStopsForRouteGoing(902, API.DIRECTION.EAST)
.then(stops => {
  console.log(stops);
})
.catch(error => {
  console.log(error);
});

// Get all departure times for route 902 going east and stopping at STVI
API.getDeparturesForRouteGoingAndEnding(902, API.DIRECTION.EAST, "STVI")
.then(departures => {
  console.log(departures);
})
.catch(error => {
  console.log(error);
});
