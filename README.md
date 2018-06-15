# MetroTransit-NodeTrip

A node module for interacting with the [MetroTransit NexTrip API](http://svc.metrotransit.org)

## Setup and Installation
```
$ npm install metrotransit-nodetrip --save
```

## Getting Started
```js
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
```

More examples [here](example.js)x
