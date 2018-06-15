'use strict';

/** Class representing a transit route */
class Route {
  /**
   * @param {Object} data All of the data returned from the API
   */
  constructor(data) {
    this.id = data.Route;
    this.provider_id = data.ProviderID;
    this.description = data.Description;
  }
}

module.exports = Route;
