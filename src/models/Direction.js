'use strict';

/** Class representing a direction */
class Direction {
  /**
   * @param {Object} data All of the data returned from the API
   */
  constructor(data) {
    this.id = data.Value;
    this.direction = data.Text;
  }
}

module.exports = Direction;
