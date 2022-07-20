/** @namespace */
geotoolkit3d.geodata = {};

/**
 * Class Trajectory3d is used to define trajectory and it provides coordinates of each point along the planned well path.
 * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
 * If measured depth is not provided it is calculated from 0 along the path.
 * @class geotoolkit3d.geodata.Trajectory3d
 * @augments geotoolkit.util.EventDispatcher
 * @param {Array.<number>} x x-coordinate of the transformed stations
 * @param {Array.<number>} y y-coordinate of the transformed stations
 * @param {Array.<number>} z z-coordinate of the transformed stations
 * @param {THREE.Vector3} [origin] if xyz coordinates are in deviation from origin
 * @param {Array.<number>} [d] d-measured depths array for each station will linear calculate estimated depths if not supplied
 * @param {Array.<geotoolkit3d.geodata.TrajectoryValue>} [values] values that are associated with this trajectory
 */
geotoolkit3d.geodata.Trajectory3d = {};
    /**
     * Gets x-value at specified position
     * @param {number} index index of the station
     * @returns {number} value if found; "undefined" otherwise
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getX = function(index){};
    /**
     * Gets y-value at specified position
     * @param {number} index index of the station
     * @returns {number} value if found; "undefined" otherwise
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getY = function(index){};
    /**
     * Gets z-value at specified position
     * @param {number} index index of the station
     * @returns {number} value if found; "undefined" otherwise
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getZ = function(index){};
    /**
     * Gets MD-value at specified position
     * @param {number} index index of the station
     * @returns {number} value if found; "undefined" otherwise
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getDepth = function(index){};
    /**
     * Gets number of stations in the trajectory
     * @returns {number} number of stations
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.count = function(){};
    /**
     * Gets calculated minimal MD
     * @returns {number} minimal MD
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.minDepth = function(){};
    /**
     * Gets calculated maximal MD
     * @returns {number} maximal MD
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.maxDepth = function(){};
    /**
     * Gets calculated minimal x-value (convenience method)
     * @returns {number}
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getMinX = function(){};
    /**
     * Gets calculated minimal y-value (convenience method)
     * @returns {number}
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getMinY = function(){};
    /**
     * Gets calculated maximal x-value (convenience method)
     * @returns {number}
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getMaxX = function(){};
    /**
     * Gets calculated maximal y-value (convenience method)
     * @returns {number}
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getMaxY = function(){};
    /**
     * Gets calculated minimal Z-value (convenience method)
     * @returns {number}
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getMinZ = function(){};
    /**
     * Gets calculated maximal Z-value (convenience method)
     * @returns {number}
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getMaxZ = function(){};
    /**
     * Gets calculated minimal Depth (convenience method)
     * @returns {number}
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getMinDepth = function(){};
    /**
     * Gets calculated maximal Depth (convenience method)
     * @returns {number}
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getMaxDepth = function(){};
    /**
     * Gets the points from start to end depths - will return all depths if no parameters passed
     * @param {number} [start] depth to start if returns everything before end
     * @param {number} [end] depth to end
     * @returns {object} obj
     * @returns {array<number>} obj.x
     * @returns {array<number>} obj.y
     * @returns {array<number>} obj.z
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getCoordinatesForDepths = function(start, end){};
    /**
     * gets the direction of the trajectory at the requested depth
     * @param {number} [location] depth to start if returns everything before end
     * @param {boolean} [preferForward=true] in the case where a depth is on a real position, prefers the forward direction
     * @returns {THREE.Vector3} pos
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getDirectionAtDepth = function(location, preferForward){};
    /**
     * Gets the interpolated position at the requested depth
     * @param {number} [location] depth for position
     * @returns {THREE.Vector3} pos
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getCoordinateForDepth = function(location){};
    /**
     * Gets the points from start to end depths - will return all depths if no parameters passed
     * @param {number} [valueName] name of the value to get
     * @param {number} [start] depth to start if returns everything before end
     * @param {number} [end] depth to end
     * @returns {array<number>} values
     */
    geotoolkit3d.geodata.Trajectory3d.prototype.getValuesForDepths = function(valueName, start, end){};

/**
 * Class TrajectoryValue
 * @class geotoolkit3d.geodata.TrajectoryValue
 * @param {string} name descriptor for what this value represents
 * @param {Array.<number>} values values that correspond to the xyz locations of the trajectory
 */
geotoolkit3d.geodata.TrajectoryValue = {};
    /**
     * gets the name for this value array
     * @returns {string}
     */
    geotoolkit3d.geodata.TrajectoryValue.prototype.getName = function(){};
    /**
     * gets the name for this value array
     * @returns {Array.<number>}
     */
    geotoolkit3d.geodata.TrajectoryValue.prototype.getValues = function(){};

