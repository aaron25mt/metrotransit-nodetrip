'use strict';

const fetch = require("node-fetch");

const Provider = require("./models/Provider");
const Route = require("./models/Route");
const Direction = require("./models/Direction");
const Stop = require("./models/Stop");
const Departure = require("./models/Departure");
const VehicleLocation = require("./models/VehicleLocation");

/**
 * Main class for interacting with API
 *
 * @author Aaron Thomas
 */
class MTNT {
  constructor() {
    this.url = "http://svc.metrotransit.org/NexTrip";
    this.format = "json";

    this.DIRECTION = {
      SOUTH: 1,
      EAST: 2,
      WEST: 3,
      NORTH: 4
    };
  }

  getProviders() {
    return new Promise((resolve, reject) => {
      let result;
      let data;

      (async () => {
        try {
          result = await fetch(`${this.url}/Providers?format=${this.format}`);
          data = await result.json();
        } catch (error) {
          return reject(error);
        }

        let modeled = data.map(provider => new Provider(provider));
        return resolve(modeled);
      })();

      return undefined;
    });
  }

  getRoutes() {
    return new Promise((resolve, reject) => {
      let result;
      let data;

      (async () => {
        try {
          result = await fetch(`${this.url}/Routes?format=${this.format}`);
          data = await result.json();
        } catch (error) {
          return reject(error);
        }

        let modeled = data.map(route => new Route(route));
        return resolve(modeled);
      })();

      return undefined;
    });
  }

  getDirectionsForRoute(route_id) {
    return new Promise((resolve, reject) => {
      //No values given
      if (!route_id) return reject(new Error("You must supply a route id."));

      //Invalid value type
      if (!(typeof route_id == "string") && isNaN(route_id)) return reject(new Error("Route id should be a number or a string."));

      let result;
      let data;

      (async () => {
        try {
          result = await fetch(`${this.url}/Directions/${route_id}?format=${this.format}`);
          data = await result.json();
        } catch (error) {
          return reject(error);
        }

        let modeled = data.map(direction => new Direction(direction));
        return resolve(modeled);
      })();

      return undefined;
    });
  }

  getStopsForRouteGoing(route_id, direction) {
    return new Promise((resolve, reject) => {
      //No values given
      if (!route_id) return reject(new Error("You must supply a route id."));
      if (!direction) return reject(new Error("You must supply a direction."));

      //Invalid value type
      if (!(typeof route_id == "string") && isNaN(route_id)) return reject(new Error("Route id should be a number or a string."));
      if (direction < 1 || direction > 4) return reject(new Error("Direction must be between 1 and 4."));

      let result;
      let data;

      (async () => {
        try {
          result = await fetch(`${this.url}/Stops/${route_id}/${direction}?format=${this.format}`);
          data = await result.json();
        } catch (error) {
          return reject(error);
        }

        let modeled = data.map(stop => new Stop(stop));
        return resolve(modeled);
      })();

      return undefined;
    });
  }

  getDeparturesForRouteGoingAndEnding(route_id, direction, stop) {
    return new Promise((resolve, reject) => {
      //No values given
      if (!route_id) return reject(new Error("You must supply a route id."));
      if (!direction) return reject(new Error("You must supply a direction."));
      if (!stop) return reject(new Error("You must supply a stop."));

      //Invalid value type
      if (!(typeof route_id == "string") && isNaN(route_id)) return reject(new Error("Route id should be a number or a string."));
      if (direction < 1 || direction > 4) return reject(new Error("Direction must be between 1 and 4."));
      if (!(typeof stop == "string") || stop.length != 4) return reject(new Error("Stop identifier must be a 4 character string."));

      let result;
      let data;

      (async () => {
        try {
          result = await fetch(`${this.url}/${route_id}/${direction}/${stop}?format=${this.format}`);
          data = await result.json();
        } catch (error) {
          return reject(error);
        }

        let modeled = data.map(departure => new Departure(departure));
        return resolve(modeled);
      })();

      return undefined;
    });
  }

  getVehicleLocationsForRoute(route_id) {
    return new Promise((resolve, reject) => {
      //No values given
      if (!route_id) return reject(new Error("You must supply a route id."));

      //Invalid value type
      if (!(typeof route_id == "string") && isNaN(route_id)) return reject(new Error("Route id should be a number or a string."));

      let result;
      let data;

      (async () => {
        try {
          result = await fetch(`${this.url}/VehicleLocations/${route_id}?format=${this.format}`);
          data = await result.json();
        } catch (error) {
          return reject(error);
        }

        let modeled = data.map(vehicle_location => new VehicleLocation(vehicle_location));
        return resolve(modeled);
      })();

      return undefined;
    });
  }
}

module.exports = MTNT;
