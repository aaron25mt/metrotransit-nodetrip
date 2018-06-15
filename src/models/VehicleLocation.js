'use strict';

/** Class representing a vehicle's location */
class VehicleLocation {
  /**
   * @param {Object} data All of the data returned from the API
   */
  constructor(data) {
    this.bearing = data.Bearing;
    this.block_number = data.BlockNumber;
    this.direction = data.Direction;
    this.location_time = data.LocationTime;
    this.odometer = data.Odometer;
    this.route = data.Route;
    this.speed = data.Speed;
    this.terminal = data.Terminal;
    this.vehicle_latitude = data.VehicleLatitude;
    this.vehicle_longitude = data.VehicleLongitude;
  }
}

module.exports = VehicleLocation;
