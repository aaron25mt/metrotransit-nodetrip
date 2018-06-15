'use strict';

/** Class representing a scheduled departure */
class Departure {
  /**
   * @param {Object} data All of the data returned from the API
   */
  constructor(data) {
    this.actual = data.Actual;
    this.block_number = data.BlockNumber;
    this.departure_text = data.DepartureText;
    this.departure_time = data.DepartureTime;
    this.description = data.Description;
    this.gate = data.Gate;
    this.route = data.Route;
    this.route_direction = data.RouteDirection;
    this.terminal = data.Terminal;
    this.vehicle_heading = data.VehicleHeading;
    this.vehicle_latitude = data.VehicleLatitude;
    this.vehicle_longitude = data.VehicleLongitude;
  }
}

module.exports = Departure;
