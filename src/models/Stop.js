'use strict';

/** Class representing a direction */
class Stop {
  /**
   * @param {Object} data All of the data returned from the API
   */
  constructor(data) {
    this.id = data.Value;
    this.name = data.Text;
  }
}

module.exports = Stop;
