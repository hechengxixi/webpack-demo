/** @namespace */
geotoolkit3d.data.well = {};

/** @namespace */
geotoolkit3d.scene.well = {};

/** @namespace */
geotoolkit3d.scene.well.schematic = {};

/** @namespace */
geotoolkit3d.scene.well.logarray = {};

/** @namespace */
geotoolkit3d.util.well = {};

/**
 * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
 * @see geotoolkit3d.util.well.Direction
 * @class geotoolkit3d.util.well.Deviation
 */
geotoolkit3d.util.well.Deviation = {};
    /**
     * Computes trajectory deviation using specified method.<br>
     * <br>
     * This function can use one of the built-in algorithms to compute x, y, tvd values from inclination, azimuth and measure depth.<br>
     * The returned object contains the trajectory's deviation.<br>
     * 'x' stands for East, 'y' for North and 'tvd' the depth.<br>
     *
     * @param {object} options The method options used for computing the deviation
     * @param {geotoolkit3d.util.well.Deviation.Method} [options.mode=geotoolkit3d.util.well.Deviation.Method.MinimumCurvature] The method to use to compute the deviation values
     * @param {number} [options.tolerance=1E-10] Epsilon used ot determine if a segment is a straight line
     * @param {object} input The input values
     * @param {number[]} input.md The measured depth values
     * @param {number[]} input.inclination The inclination values in degrees
     * @param {number[]} input.azimuth The azimuth values in degrees
     * @param {object} [start] Initial deviation point, will not be used as an input for the method but as the starting point.
     * @param {number} [start.x=0] Initial deviation x value
     * @param {number} [start.y=0] Initial deviation y value
     * @param {number} [start.tvd=md[0]] Initial deviation tvd value
     * @returns {object} The deviation values as {x: number[], y: number[], tvd: number[]}
     */
    geotoolkit3d.util.well.Deviation.computeDeviation = function(options, input, start){};
    /**
     * Built-in algorithms to compute cartesian coordinates from direction values.<br>
     * These methods compute north, east and tvd values using the inclination-azimuth-md values.<br>
     * The methods implemented use different approach to create a trajectory using the given parameters.
     * @enum
     * @readonly
     */
    geotoolkit3d.util.well.Deviation.Method = {};
        /**
         * Minimum curvature method computes the path between input points using the DogLeg Severity to calculate displacements.
         * @type {function}
         */
        geotoolkit3d.util.well.Deviation.Method.MinimumCurvature = {};
        /**
         * Radius of curvature method generates a circular arc to connect input points.
         * @type {function}
         */
        geotoolkit3d.util.well.Deviation.Method.CurvatureRadius = {};
        /**
         * Average Angle is a simple approach that uses basic trigonometric function to compute the well path
         * @type {function}
         */
        geotoolkit3d.util.well.Deviation.Method.AverageAngle = {};
        /**
         * Tangential is a deprecated method that assumes that the path is a straight line throughout the course length
         * @type {function}
         */
        geotoolkit3d.util.well.Deviation.Method.Tangential = {};
        /**
         * Balanced tangential is an improved version of the Tangential method.
         * @type {function}
         */
        geotoolkit3d.util.well.Deviation.Method.BalancedTangential = {};

/**
 * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
 * @see geotoolkit3d.util.well.Deviation
 * @class geotoolkit3d.util.well.Direction
 */
geotoolkit3d.util.well.Direction = {};
    /**
     * Computes the direction values using specified method.<br>
     * <br>
     * This function can use one of the built-in algorithms to compute inclination (degrees), azimuth (degrees), md values from x, y and tvd.<br>
     * The returned object contains the trajectory's directions.<br>
     * 'x' stands for East, 'y' for North and 'tvd' the depth.<br>
     *
     * @param {object} options The method options used for computing the deviation
     * @param {geotoolkit3d.util.well.Direction.Method} [options.mode=geotoolkit3d.util.well.Direction.Method.MinimumCurvature] The method to use to compute the direction values
     * @param {number} [options.tolerance=1E-10] Epsilon used ot determine if a segment is a straight line
     * @param {object} input The input values
     * @param {number[]} input.tvd The true vertical depth values
     * @param {number[]} [input.x] The x values
     * @param {number[]} [input.y] The y values
     * @param {object} [start] Initial direction point, will not be used as an input for the method but as the reference direction.
     * @param {number} [start.inclination=0] Initial inclination in radians
     * @param {number} [start.azimuth=0] Initial azimuth in radians
     * @param {number} [start.md=tvd[0]] Initial measured depth value
     * @returns {object} The direction values as {inclination: number[], azimuth: number[], md: number[]}
     */
    geotoolkit3d.util.well.Direction.computeDirection = function(options, input, start){};
    /**
     * Built-in algorithms to compute direction values from cartesian coordinates.<br>
     * These methods compute the inclination-azimuth-md values from the north, east and tvd values.<br>
     * Based on the inverse transformation of the corresponding DeviationUtil.Method algorithm.
     * @enum
     * @readonly
     */
    geotoolkit3d.util.well.Direction.Method = {};
        /**
         * Minimum curvature method computes the path between input points using the DogLeg Severity to calculate displacements.
         * @type {function}
         */
        geotoolkit3d.util.well.Direction.Method.MinimumCurvature = {};
        /**
         * Radius of curvature method generates a circular arc to connect input points.
         * @type {function}
         */
        geotoolkit3d.util.well.Direction.Method.CurvatureRadius = {};
        /**
         * Average Angle is a simple approach that uses basic trigonometric function to compute the well path
         * @type {function}
         */
        geotoolkit3d.util.well.Direction.Method.AverageAngle = {};
        /**
         * Tangential is a deprecated method that assumes that the path is a straight line throughout the course length
         * @type {function}
         */
        geotoolkit3d.util.well.Direction.Method.Tangential = {};
        /**
         * Balanced tangential is an improved version of the Tangential method.
         * @type {function}
         */
        geotoolkit3d.util.well.Direction.Method.BalancedTangential = {};

/**
 * Utility class providing functions and constant for 3D well operations.<br>
 *
 * @class geotoolkit3d.util.well.Well
 */
geotoolkit3d.util.well.Well = {};
    /**
     * Offset mode enum.<br>
     * <br>
     * This mode define how the curve will be rendered when the offset is negative.<br>
     * It will either mirror the curve so that the minimum value is closer to the trajectory than the maximum value. (Mirror)<br>
     * Or it will keep the minimum value on the left, which means that the maximum value will be closer to the trajectory than the minimum value. (Regular)<br>
     * @enum
     * @readonly
     */
    geotoolkit3d.util.well.Well.OffsetMode = {};
        /**
         * Minimum value is closer to the trajectory than maximum value.<br>
         * @type {number}
         */
        geotoolkit3d.util.well.Well.OffsetMode.Mirror = NaN;
        /**
         * Minimum value is closer to the trajectory than maximum value ONLY if offset is positive.<br>
         * @type {number}
         */
        geotoolkit3d.util.well.Well.OffsetMode.Regular = NaN;

/**
 * A LogArray as a tubular shape.<br>
 * <br>
 * A logarray is the 3D equivalent of {@link geotoolkit.welllog.Log2DVisual}, it displays a two dimension welllog.<br>
 * Its representation is a tubular shape where each 'edge' of the tube is a sector that has its own radius and color.<br>
 * <br>
 * The orientation of the sector 0 is configurable using {@link geotoolkit3d.scene.well.logarray.ReferenceMode ReferenceMode} enum.<br>
 * <br>
 * Note that the logarray allows changing on the fly of the values but also path.<br>
 * However, the amount of data/mds should remain constant.<br>
 * This is intended to implement a sliding window in order to display a subpart of a logarray that would be too big to fit in memory/gpu.<br>
 * <br>
 *
 * @class geotoolkit3d.scene.well.logarray.LogArray
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} [options.data] The data options
 * @param {object} [options.data.path] The path data
 * @param {number[]} [options.data.path.x] The x deviation values
 * @param {number[]} [options.data.path.y] The y deviation values
 * @param {number[]} [options.data.path.elevation] The elevation values
 * @param {number[][]} [options.data.logarray] The logarray values as a two dimensional array, one row per md.
 * @param {number[][]} [options.data.values] The attribute values for coloring as a two dimensional array, one row per md.
 * @param {number} [options.logarraymin] The minimum value of logarray values (for normalization)
 * @param {number} [options.logarraymax] The maximum value of logarray values (for normalization)
 * @param {number} [options.logarraynullvalue=-999.25] The null value for logarray values
 * @param {number} [options.valuesnullvalue=-999.25] The null value for color values
 * @param {number} [options.radiusmin=10] The minimum radius of the tube (when logarray value is equal to logarraymin)
 * @param {number} [options.radiusdelta=10] The delta radius (when logarray value is equal to logarraymax, the radius is equal to "radiusmin + radiusdelta")
 * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider='red'] A color provider or a single color in css format
 * @param {geotoolkit3d.scene.well.logarray.LogArray.ReferenceMode|string} [options.referencemode=ReferenceMode.UpNorth] The reference mode to determine the sector 0 orientation
 */
geotoolkit3d.scene.well.logarray.LogArray = {};
    /**
     * Enum to configure the LogArray sector 0 location.<br>
     * <br>
     * This enum provides several reference mechanism to determine where the sector 0 should be.<br>
     * For example it could be the sector pointing upward, or the sector pointing toward the North.<br>
     * @enum
     * @readonly
     */
    geotoolkit3d.scene.well.logarray.LogArray.ReferenceMode = {};
        /**
         * This reference mode switches between Up or North depending on the inclination of the path.<br>
         * If the current section of the path has an inclination greater than the given angle, then Up will be used.<br>
         * <br>
         * As this check is done per 'section' of the LogArray, a 'twist' may appear on the resulting cylinder when the switch between Up/North reference occurs.<br>
         * <br>
         * This mode accepts a parameter to define the inclination angle threshold (in radians), the default value is 0.1745 (10 degrees).<br>
         * The angle is 0 for a vertical section and PI/2 for an horizontal section.<br>
         * <br>
         * To use a custom angle of 60 degrees for example, do geotoolkit3d.scene.well.logarray.LogArray.ReferenceMode.UpNorth(1.0472)
         * @type {function}
         */
        geotoolkit3d.scene.well.logarray.LogArray.ReferenceMode.UpNorth = {};
        /**
         * Use North as reference for sector 0.<br>
         * This is not suitable for horizontal trajectories pointing north.
         * @type {string}
         */
        geotoolkit3d.scene.well.logarray.LogArray.ReferenceMode.North = "";
        /**
         * Use Up as reference for sector 0.<br>
         * This is not suitable for vertical trajectories.
         * @type {string}
         */
        geotoolkit3d.scene.well.logarray.LogArray.ReferenceMode.Up = "";
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {object} [options.data] The data options
     * @param {object} [options.data.path] The path data
     * @param {number[]} [options.data.path.x] The x deviation values
     * @param {number[]} [options.data.path.y] The y deviation values
     * @param {number[]} [options.data.path.elevation] The elevation values
     * @param {number[][]} [options.data.logarray] The logarray values as a two dimensional array, one row per md.
     * @param {number[][]} [options.data.values] The color values as a two dimensional array, one row per md.
     * @param {number} [options.logarraymin] The minimum value of logarray values (for normalization)
     * @param {number} [options.logarraymax] The maximum value of logarray values (for normalization)
     * @param {number} [options.logarraynullvalue] The null value for logarray values
     * @param {number} [options.valuesnullvalue] The null value for color values
     * @param {number} [options.radiusmin] The minimum radius of the tube (when logarray value is equal to logarraymins)
     * @param {number} [options.radiusdelta] The delta radius (when logarray value is equal to logarraymax, the radius is equal to "radiusmin + radiusdelta")
     * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider] A color provider or a single color in css format
     * @returns {geotoolkit3d.scene.well.logarray.LogArray}
     */
    geotoolkit3d.scene.well.logarray.LogArray.prototype.setOptions = function(options){};

/**
 * A Tube-like geometry.<br>
 * <br>
 * This geometry generates the vertices required to render an elliptic tube.<br>
 * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
 * <br>
 * This is intended to be used for advanced/complex scenarios that require those capabilities.
 *
 * @class geotoolkit3d.scene.well.TubeGeometry
 * @augments THREE.BufferGeometry
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {number[]|number} [options.data.widths=1] Radiuses of the ellipsis for the East-West axis (For first ellipsis)
 * @param {number[]|number} [options.data.heights=widths] Radiuses of the ellipsis North-South axis (For first ellipsis)
 * @param {number[]|number} [options.data.rolls=0] Rolling angles in radians
 * @param {number[]|number} [options.data.values] A value attribute used for coloring the trajectory (see options.colorprovider)
 * @param {number} [options.radiusmin=0] The minimum radius, this is used as a size factor applied to the ellipses
 * @param {number} [options.radiusmax=1] The maximum radius, this is used as a size factor applied to the ellipses
 * @param {number} [options.tubeprecision=3] The ellipsis shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
 * @param {boolean} [options.openended=false] False if the tube should have a cap at both ends
 * @param {boolean} [options.usefrenet=true] calculate tube using Frenet Frames
 */
geotoolkit3d.scene.well.TubeGeometry = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {object} [options.data] The data options
     * @param {number[]} [options.data.x] The x deviation values
     * @param {number[]} [options.data.y] The y deviation values
     * @param {number[]} [options.data.z] The elevation values
     * @param {number[]|number} [options.data.widths=1] Radiuses of the ellipsis for the East-West axis (For first ellipsis)
     * @param {number[]|number} [options.data.heights=widths] Radiuses of the ellipsis North-South axis (For first ellipsis)
     * @param {number[]|number} [options.data.rolls=0] Rolling angles in radians
     * @param {number[]|number} [options.data.values] A value attribute used for coloring the trajectory (see options.colorprovider)
     * @param {number} [options.radiusmin] The minimum radius, this is used as a size factor applied to the ellipses
     * @param {number} [options.radiusmax] The maximum radius, this is used as a size factor applied to the ellipses
     * @param {number} [options.tubeprecision] The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
     * @param {boolean} [options.openended] False if the tube should have a cap at both ends
     * @returns {geotoolkit3d.scene.well.TubeGeometry} this
     */
    geotoolkit3d.scene.well.TubeGeometry.prototype.setOptions = function(options){};

/**
 * A Tube-like geometry.<br>
 * <br>
 * This geometry generates the vertices required to render an elliptic tube.<br>
 * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
 * <br>
 * This is intended to be used for advanced/complex scenarios that require those capabilities.
 *
 * @class geotoolkit3d.scene.well.PipeGeometry
 * @augments THREE.BufferGeometry
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {THREE.Vector3[]} options.data.path the XYZ coordinates for the path
 * @param {THREE.Vector3[]} options.data.normals the XYZ normals for the path
 * @param {THREE.Vector3[]} options.data.binormals the XYZ binormals for the path
 * @param {number[]|number} [options.data.radii=1] Radiuses of the ellipsis for the East-West axis (For first ellipsis)
 * @param {number[]|number} [options.data.values] A value attribute used for coloring the trajectory (see options.colorprovider)
 * @param {number} [options.tubeprecision=3] The ellipsis shape is approximated using triangles. This factor is used to define how many
 * triangles will be used for the approximation.
 * @param {boolean} [options.openended=false] False if the tube should have a cap at both ends
 * @param {boolean} [options.hardedges=true] create hard edges for size changes
 */
geotoolkit3d.scene.well.PipeGeometry = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {object} [options.data] The data options
     * @param {THREE.Vector3[]} [options.data.positions] the XYZ coordinates for the path
     * @param {THREE.Vector3[]} [options.data.normals] the XYZ normals for the path
     * @param {THREE.Vector3[]} [options.data.binormals] the XYZ binormals for the path
     * @param {THREE.Vector3[]} [options.data.tangents] the XYZ tangents for the path
     * @param {number[]|number} [options.data.radii] radius of the tube for each deviation value
     * @param {number[]|number} [options.data.values] A value attribute used for coloring the trajectory (see options.colorprovider)
     * @param {number} [options.tubeprecision] The ellipsis shape is approximated using triangles. This defines how many segments will be
     * used for the approximation.
     * @param {boolean} [options.openended] False if the tube should have a cap at both ends
     * @returns {geotoolkit3d.scene.well.PipeGeometry} this
     */
    geotoolkit3d.scene.well.PipeGeometry.prototype.setOptions = function(options){};

/**
 * A Tube-like geometry.<br>
 * <br>
 * This geometry generates the vertices required to render an elliptic tube.<br>
 * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
 * <br>
 * This is intended to be used for advanced/complex scenarios that require those capabilities.
 *
 * @class geotoolkit3d.scene.well.DynamicTubeGeometry
 * @augments THREE.BufferGeometry
 * @param {object} options The options
 * @param {number} [options.axismin] The minimum radius value this corresponds to the value that will be mapped to radiusmin
 * @param {number} [options.axismax] The maximum radius value this corresponds to the value that will be mapped to radiusmax
 * @param {number} [options.radiusmin=0] The minimum radius, this is used as a size factor applied to the ellipses
 * @param {number} [options.radiusmax=1] The maximum radius, this is used as a size factor applied to the ellipses
 * @param {number} [options.tubeprecision=3] The ellipsis shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
 * @param {boolean} [options.openended=false] False if the tube should have a cap at both ends
 * @param {boolean} [options.startbuffersize=1000] the number of points this will create as a starting buffer for vertexs
 * @param {number} [options.bufferresizefactor=0.1] the amount to grow GPU buffers when points overflow
 */
geotoolkit3d.scene.well.DynamicTubeGeometry = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {number} [options.radiusmin] The minimum radius, this is used as a size factor applied to the ellipses
     * @param {number} [options.radiusmax] The maximum radius, this is used as a size factor applied to the ellipses
     * @param {number} [options.axismin] The minimum radius value this corresponds to the value that will be mapped to radiusmin
     * @param {number} [options.axismax] The maximum radius value this corresponds to the value that will be mapped to radiusmax
     * @param {number} [options.tubeprecision] The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
     * @param {boolean} [options.openended] False if the tube should have a cap at both ends
     * @param {number} [options.bufferresizefactor=0.1] the amount to grow GPU buffers when points overflow
     * @returns {geotoolkit3d.scene.well.DynamicTubeGeometry} this
     */
    geotoolkit3d.scene.well.DynamicTubeGeometry.prototype.setOptions = function(options){};
    /**
     * Clears the geometry of all points and data
     *
     * @returns {geotoolkit3d.scene.well.DynamicTubeGeometry} this
     */
    geotoolkit3d.scene.well.DynamicTubeGeometry.prototype.resetData = function(){};
    /**
     * Gets the current data
     *
     * @returns {object} object data object
     * @returns {Array<number>} object.xs X coordinates
     * @returns {Array<number>} object.ys Y coordinates
     * @returns {Array<number>} object.zs Z coordinates
     * @returns {Array<number>} object.values values for the vertexes
     * @returns {Array<number>} object.widths width attribute for the vertexes
     * @returns {Array<number>} object.heights heights attribute for the vertexes
     * @returns {Array<number>} object.rolls roll value for the vertexes
     */
    geotoolkit3d.scene.well.DynamicTubeGeometry.prototype.getData = function(){};
    /**
     * Adds the geometry to the Tube, if the options are changed the geometry will be recalculated.
     *
     * @param {number[]} xs The x deviation values
     * @param {number[]} ys The y deviation values
     * @param {number[]} zs The elevation values
     * @param {number[]} [values] A value attribute used for coloring the trajectory (see options.colorprovider)
     * @param {number[]} [widths] Radiuses of the ellipsis for the East-West axis (For first ellipsis)
     * @param {number[]} [heights] Radiuses of the ellipsis for the North-South axis (For first ellipsis)
     * @param {number[]} [rolls] Rolling angles in radians
     * @returns {geotoolkit3d.scene.well.DynamicTubeGeometry} this
     */
    geotoolkit3d.scene.well.DynamicTubeGeometry.prototype.addGeometry = function(xs, ys, zs, values, widths, heights, rolls){};

/**
 * A well trajectory as a 3D tube.<br>
 * <br>
 * This shape displays a well trajectory as a tube that can be colored with an optional attribute.<br>
 * Note that the shape of the tube will be preserved even when changing the global scale of the plot.<br>
 *
 * @class geotoolkit3d.scene.well.TrajectoryTube
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {number[]|number} [options.data.values] A value attribute used for coloring the trajectory
 * @param {number} [options.size=100] The tube size in model space
 * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider='red'] A color provider or a single color in css format
 * @param {number} [options.tubeprecision=3] The tube shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
 * @param {boolean} [options.closed=false] True if the tube should have a cap at both ends
 */
geotoolkit3d.scene.well.TrajectoryTube = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {number} [options.size] The tube size in model space
     * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider] A color provider or a single color in css format
     * @param {number} [options.tubeprecision] The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
     * @returns {geotoolkit3d.scene.well.TrajectoryTube} this
     */
    geotoolkit3d.scene.well.TrajectoryTube.prototype.setOptions = function(options){};

/**
 * Utility class related to geotoolkit3d.scene.well.CylinderLog
 * @class geotoolkit3d.util.well.CylinderLog
 */
geotoolkit3d.util.well.CylinderLog = {};
    /**
     * Change the parameters that affects the cylinder precision.<br>
     * <br>
     * Note that this applies only to the Cylinders created after this has been changed.<br>
     * <br>
     * The corner counts affects how 'round' the circles will look like.<br>
     * The diskCount defines how many circles will be created for each log value.<br>
     * <br>
     * @param {number} cornerCount The amount of points to create a cylinder like shape
     * @param {number} diskCount The amount of of disks for each sample
     */
    geotoolkit3d.util.well.CylinderLog.setCylinderPrecision = function(cornerCount, diskCount){};

/**
 * A well log as a cylinder like 3D shape.<br>
 * <br>
 * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
 * The diameter and color of the tube will vary for each log curve sample.<br>
 * <br>
 * Note that this object assumes that the given path and curve values have the same sampling.<br>
 *
 * @class geotoolkit3d.scene.well.CylinderLog
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.elevation The elevation values
 * @param {number[]} options.data.radius A curve attribute used for the size of the cylinder
 * @param {number} [options.data.radiusnullvalue=NaN] The nullvalue for the radius
 * @param {number[]} [options.data.values] A value attribute used for coloring the cylinder (see options.colorprovider)
 * @param {number} [options.data.valuesnullvalue=NaN] A value attribute used for coloring the cylinder (see options.colorprovider)
 * @param {number} [options.radiusmin=5] The cylinder minimum radius
 * @param {number} [options.radiusmax=10] The cylinder maximum radius
 * @param {number} [options.radiuslogmin] The radius log minimum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder
 * @param {number} [options.radiuslogmax] The radius log maximum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder
 * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider='red'] A color provider or a single color in css format
 */
geotoolkit3d.scene.well.CylinderLog = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {object} [options.data] Note that specifying the data option object will trigger a geometry update.
     * @param {number[]} [options.data.radius] A curve attribute used for the size of the cylinder
     * @param {number} [options.data.radiusnullvalue] The nullvalue for the radius
     * @param {number[]} [options.data.values] A value attribute used for coloring the cylinder (see options.colorprovider)
     * @param {number} [options.data.valuesnullvalue] A value attribute used for coloring the cylinder (see options.colorprovider)
     * @param {number} [options.radiusmin] The cylinder minimum radius
     * @param {number} [options.radiusmax] The cylinder maximum radius
     * @param {number} [options.radiuslogmin] The radius log minimum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder.<br> Pass null to reset it to data min
     * @param {number} [options.radiuslogmax] The radius log maximum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder.<br> Pass null to reset it to data max
     * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider='red'] A color provider or a single color in css format
     * @returns {geotoolkit3d.scene.well.CylinderLog}
     */
    geotoolkit3d.scene.well.CylinderLog.prototype.setOptions = function(options){};

/**
 * A cylinder log geometry.<br>
 * <br>
 * This geometry class will generate all the vertices and indices necessary to render a cylinderlog 3d shape.<br>
 * Note that the quality of the cylinder logs can be globally modified through static functions in {@link geotoolkit3d.util.well.CylinderLog}.<br>
 * If a radius value is equals to the given radiusnullvalue, a gap will be generated in the cylinder.<br>
 * A gap will also be generated if a value is equals to valuesnullvalue.<br>
 * Note that the current implementation will still generate the vertices for those gaps but will abstain from rendering them.
 *
 * @class geotoolkit3d.scene.well.CylinderLogGeometry
 * @augments THREE.BufferGeometry
 * @param {object} options The options
 * @param {object} options.data input cylinder data
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {number[]} options.data.radius A curve attribute used for the size of the cylinder
 * @param {number} [options.data.radiusnullvalue] The nullvalue for the radius
 * @param {number[]} [options.data.values] A value attribute used for coloring the cylinder (see options.colorprovider)
 * @param {number} [options.data.valuesnullvalue] The nullvalue for color attribute
 */
geotoolkit3d.scene.well.CylinderLogGeometry = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {object} [options.data] Note that specifying the data option object will trigger a geometry update.
     * @param {number[]} [options.data.radius] A curve attribute used for the size of the cylinder
     * @param {number} [options.data.radiusnullvalue] The nullvalue for the radius
     * @param {number[]} [options.data.values] A value attribute used for coloring the cylinder
     * @param {number} [options.data.valuesnullvalue] The nullvalue for color attribute
     * @returns {geotoolkit3d.scene.well.CylinderLogGeometry} this
     */
    geotoolkit3d.scene.well.CylinderLogGeometry.prototype.setOptions = function(options){};

/**
 * A line geometry intended to be use for well trajectory representation.<br>
 * <br>
 * This geometry class builds a line's geometry using given xyz values.<br>
 * Each vertex can be colored using the values parameter and a colorprovider.<br>
 *
 * @class geotoolkit3d.scene.well.LineGeometry
 * @augments THREE.Geometry
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {number[]|number} [options.data.values] A value attribute used for coloring the trajectory (see options.colorprovider for colormapping)
 * @param {geotoolkit.util.ColorProvider|string} [options.colorprovider='blue'] A color provider or a single color in css format
 */
geotoolkit3d.scene.well.LineGeometry = {};

/**
 * A log fill displayed as a 2D shape along a wellpath.<br>
 * <br>
 * This class will create the required geometry and material to represent a fill going from the given curve to the other curve.<br>
 * Like a regular LogFill, this also supports reference values instead of curves.<br>
 * Note that the resulting geometry may contains extra vertex to deal with curves intersection.<br>
 *
 * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
 * In order for the user to see the 2D curve it's always projected toward the camera.<br>
 * Which means that when the user moves the camera the log will try to adapt its representation to be as much visible as possible.<br>
 * However that also means that some camera angles will not be ideal to look at the log.<br>
 * Typically when the camera and the trajectory path are aligned.<br>
 * This algorithm is implemented at the shader level to ensure best performances.<br>
 * <br>
 * Note that curvemin&curvemax options are not supported for dual curve fill (if both values1 and values2 are curves).
 *
 * @class geotoolkit3d.scene.well.LogFill2D
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data The trajectory data
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {number[]|number} [options.data.values1=0] The curve1 values or a reference value in range [0,1]
 * @param {number[]|number} [options.data.nullvalue1=NaN] The values1's nullvalue
 * @param {number[]|number} [options.data.values2=1] The curve2 values or a reference value in range [0,1]
 * @param {number[]|number} [options.data.nullvalue2=NaN] The values2's nullvalue
 * @param {number[]|number} [options.data.values] Optional attribute used for coloring the trajectory (see options.colorprovider for colormapping)
 * @param {number[]|number} [options.data.nullvalue=NaN] The values's nullvalue
 * @param {number} [options.curvemin] The lower normalisation limit, any value lesser than this will be clamped
 * @param {number} [options.curvemax] The upper normalisation limit, any value greater than this will be clamped
 * @param {number} [options.radius=1] The radius factor to apply, this will increase the fill amplitude on screen.
 * @param {number} [options.offset=1] An offset value to shift the fill location by 'n' times the radius. Use negative value to display the fill on the left of the path
 * @param {geotoolkit3d.util.well.Well.OffsetMode} [options.offsetmode=geotoolkit3d.util.well.Well.OffsetMode.Mirror] Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
 * @param {THREE.Color|THREE.Colors} [options.positivecolor] The color or the flag 'THREE.FaceColors' to enable per face color
 * @param {THREE.Color|THREE.Colors} [options.negativecolor] The color or the flag 'THREE.FaceColors' to enable per face color
 * @param {geotoolkit.util.ColorProvider|string} [options.colorprovider='blue'] A color provider or a single color in css format (Used if no positive/negative color is set)
 */
geotoolkit3d.scene.well.LogFill2D = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {number} [options.curvemin] The lower normalisation limit, any value lesser than this will be clamped
     * @param {number} [options.curvemax] The upper normalisation limit, any value greater than this will be clamped
     * @param {number} [options.radius] The radius factor to apply, this will increase the fill amplitude on screen.
     * @param {number} [options.offset] An offset value to shift the fill location by 'n' times the radius. Use negative value to display the fill on the left of the path
     * @param {geotoolkit3d.util.well.Well.OffsetMode} [options.offsetmode] Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
     * @param {THREE.Color|THREE.Colors} [options.positivecolor] The color or the flag 'THREE.FaceColors' to enable per face color
     * @param {THREE.Color|THREE.Colors} [options.negativecolor] The color or the flag 'THREE.FaceColors' to enable per face color
     * @param {string} [options.colorprovider] A single color in css format (Used if no positive/negative color is set)
     */
    geotoolkit3d.scene.well.LogFill2D.prototype.setOptions = function(options){};

/**
 * A LogCurve material to render a log curve as a 2D line along a well trajectory.<br>
 * <br>
 * This class implements the material for {@link geotoolkit3d.scene.well.LogCurve2D}.<br>
 * It contains the logic to render the actual welllog along the trajectory.<br>
 *
 * @class geotoolkit3d.scene.well.LogCurve2DMaterial
 * @augments THREE.ShaderMaterial
 * @param {object} options The options
 * @param {object} options.data The data
 * @param {number[]} options.data.x The x deviation of the well path
 * @param {number[]} options.data.y The y deviation of the well path
 * @param {number[]} options.data.z The elevation coordinate of the well path
 * @param {number[]} options.data.values The log curve values
 * @param {number} [options.data.nullvalue=NaN] The log curve nullvalue, note that NaN will always be considered as nullvalue
 * @param {number} [options.curvemin] The lower normalisation limit, any value lesser than this will be clamped
 * @param {number} [options.curvemax] The upper normalisation limit, any value greater than this will be clamped
 * @param {number} [options.radius=5] The radius factor to apply, this will increase the curve amplitude on screen.
 * @param {number} [options.offset=1] An offset value to shift the curve location by 'n' times the radius. Use negative value to display the log on the left of the path
 * @param {THREE.Color|THREE.Colors} [options.color] The color or the flag 'THREE.VertexColors' to enable per vertex color
 * @see {@link geotoolkit3d.scene.well.LogCurve2D}
 */
geotoolkit3d.scene.well.LogCurve2DMaterial = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {number} [options.curvemin] The lower normalisation limit, any value lesser than this will be clamped
     * @param {number} [options.curvemax] The upper normalisation limit, any value greater than this will be clamped
     * @param {number} [options.radius] The radius factor to apply
     * @param {number} [options.offset] An offset factor for the curve location relative to the path. Use negative value to display the log on the left of the path
     * @param {geotoolkit3d.util.well.Well.OffsetMode} [options.offsetmode=geotoolkit3d.util.well.Well.OffsetMode.Mirror] Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
     * @param {THREE.Color|THREE.Colors} [options.color] The color or the flag 'THREE.VertexColors' to enable per vertex color
     * @returns {geotoolkit3d.scene.well.LogCurve2DMaterial}
     */
    geotoolkit3d.scene.well.LogCurve2DMaterial.prototype.setOptions = function(options){};

/**
 * A LogCurve object representing a well curve along a path as a 2D shape.<br>
 * <br>
 * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
 * In order for the user to see the 2D curve it's always projected toward the camera.<br>
 * Which means that when the user moves the camera the log will try to adapt its representation to be as mush visible as possible.<br>
 * However that also means that some camera angles will not be ideal to look at the log.<br>
 * Typically when the camera and the trajectory path are aligned.<br>
 * This algorithm is implemented at the shader level to ensure best performances.<br>
 * <br>
 *
 * @class geotoolkit3d.scene.well.LogCurve2D
 * @augments geotoolkit3d.scene.Object3D
 *
 * @param {object} options The options
 * @param {object} options.data The trajectory data
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {number[]} [options.data.values] The values of the welllog curve
 * @param {number} [options.data.nullvalue=NaN] The log curve nullvalue, note that NaN will always be considered as nullvalue
 * @param {number} [options.curvemin] The lower normalisation limit, any value lesser than this will be clamped
 * @param {number} [options.curvemax] The upper normalisation limit, any value greater than this will be clamped
 * @param {number} [options.radius=5] The radius factor to apply, this will increase the curve amplitude on screen.
 * @param {number} [options.offset=1] An offset value to shift the curve location by 'n' times the radius. Use negative value to display the log on the left of the path
 * @param {geotoolkit3d.util.well.Well.OffsetMode} [options.offsetmode=geotoolkit3d.util.well.Well.OffsetMode.Mirror] Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
 * @param {THREE.Color|THREE.Colors} [options.color] The color or the flag 'THREE.VertexColors' to enable per vertex color
 */
geotoolkit3d.scene.well.LogCurve2D = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options
     * @param {number} [options.curvemin] The lower normalisation limit, any value lesser than this will be clamped
     * @param {number} [options.curvemax] The upper normalisation limit, any value greater than this will be clamped
     * @param {number} [options.radius] The radius factor to apply
     * @param {number} [options.offset] An offset factor for the curve location relative to the path. Use negative value to display the log on the left of the path
     * @param {geotoolkit3d.util.well.Well.OffsetMode} [options.offsetmode] Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
     * @param {THREE.Color|string} [options.color] A single color in css format
     * @returns {geotoolkit3d.scene.well.LogCurve2D} this
     */
    geotoolkit3d.scene.well.LogCurve2D.prototype.setOptions = function(options){};

/**
 * Parent class of schematic objects
 *
 * @class geotoolkit3d.scene.well.schematic.SchematicBase
 * @augments geotoolkit3d.scene.Object3D
 */
geotoolkit3d.scene.well.schematic.SchematicBase = {};
    /**
     * Get the current annotation holding title, icon, text...
     *
     * @returns {geotoolkit3d.scene.AnnotationBase} annotation
     */
    geotoolkit3d.scene.well.schematic.SchematicBase.prototype.getAnnotation = function(){};
    /**
     * Set the current annotation holding title, icon, text...
     *
     * @param {geotoolkit3d.scene.AnnotationBase} annotation
     * @returns {geotoolkit3d.scene.well.schematic.SchematicBase} this
     */
    geotoolkit3d.scene.well.schematic.SchematicBase.prototype.setAnnotation = function(annotation){};
    /**
     * Get options, font, color, etc...
     *
     * @returns {Object} geotoolkit.attributes.FillStyle
     */
    geotoolkit3d.scene.well.schematic.SchematicBase.prototype.getOptions = function(){};
    /**
     * Set options, font, color, etc...
     *
     * @param {Object} newOptions geotoolkit.attributes.FillStyle
     * @returns {geotoolkit3d.scene.well.schematic.SchematicBase} this
     */
    geotoolkit3d.scene.well.schematic.SchematicBase.prototype.setOptions = function(newOptions){};
    /**
     * Return the material of the schematic being a material provided by the user ar creation or a created material
     * depending on the "fillstyle" option parameter at creation.
     *
     * @returns {THREE.Material}
     */
    geotoolkit3d.scene.well.schematic.SchematicBase.prototype.getMaterial = function(){};

/**
 * Creates a cone three.js.
 *
 * @class geotoolkit3d.scene.well.schematic.Cone
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data 2 points required; the first one is the localisation and the second provide the direction to tend to.
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {geotoolkit.attributes.FillStyle} [options.fillstyle]
 * @param {number} [options.radiustop = 0] Radius of the cylinder at the top
 * @param {number} [options.radiusbottom = 50] Radius of the cylinder at the bottom
 * @param {number} [options.height = 50] Height of the cylinder
 * @param {number} [options.radiussegments = 28] Number of segmented faces around the circumference of the cylinder
 * @param {number} [options.heightsegments = 1] Number of rows of faces along the height of the cylinder
 * @param {number} [options.openended = false] A Boolean indicating whether the ends of the cylinder are open or capped
 */
geotoolkit3d.scene.well.schematic.Cone = {};
    /**
     * Returns the bounding box of the schematic.
     *
     * @returns {THREE.Box3}
     */
    geotoolkit3d.scene.well.schematic.Cone.prototype.getBoundingBox = function(){};
    /**
     * Returns the geometry of the schematic.
     *
     * @returns {THREE.CylinderGeometry}
     */
    geotoolkit3d.scene.well.schematic.Cone.prototype.getGeometry = function(){};

/**
 * Creates a cube three.js.
 *
 * @class geotoolkit3d.scene.well.schematic.Cube
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data 2 points required, the first one is the localisation and the second provide the direction to tend to.
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {geotoolkit.attributes.FillStyle} [options.fillstyle] Fillstyle used to create the cube's material
 * @param {number} [options.width=50] Size of the cube in model space
 * @param {number} [options.widthsegments = 1] Number of segmented faces along the width of the sides
 */
geotoolkit3d.scene.well.schematic.Cube = {};
    /**
     * Returns the bounding box of the schematic.
     *
     * @returns {THREE.Box3}
     */
    geotoolkit3d.scene.well.schematic.Cube.prototype.getBoundingBox = function(){};
    /**
     * Returns the geometry of the schematic.
     *
     * @returns {THREE.BoxGeometry}
     */
    geotoolkit3d.scene.well.schematic.Cube.prototype.getGeometry = function(){};

/**
 * A 3D cylinder schematic object.
 *
 * @class geotoolkit3d.scene.well.schematic.Cylinder
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {number} [options.radius = 30] The radius of the cylinder in modelspace
 * @param {number} [options.depth] The length of the cylinder in modelspace (used if there is only 2 points in the given path)
 * @param {number} [options.tubeprecision = 8] The tube approximation precision
 * @param {geotoolkit.attributes.FillStyle} [options.fillstyle]
 * @param {object} options.data 2 points minimum required; if 2 points are provided the first one is the localisation
 * and the second provide the direction to tend to. If more than 2 points are provided then the points are actual
 * trajectory points around which a tube will be created.
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 */
geotoolkit3d.scene.well.schematic.Cylinder = {};
    /**
     * Returns the bounding box of the schematic in local coordinates.
     *
     * @returns {THREE.Box3}
     */
    geotoolkit3d.scene.well.schematic.Cylinder.prototype.getBoundingBox = function(){};
    /**
     * Returns the geometry of the schematic.
     *
     * @returns {THREE.Geometry|THREE.BufferGeometry}
     */
    geotoolkit3d.scene.well.schematic.Cylinder.prototype.getGeometry = function(){};

/**
 * A 3D parallelepiped schematic object.
 *
 * @class geotoolkit3d.scene.well.schematic.Parallelepiped
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data 2 points minimum required; if 2 points are provided the first one is the localisation
 * and the second provide the direction to tend to. If more than 2 points are provided then the points are actual
 * trajectory points around which a 4 side tube will be created.
 * @param {number[]} options.data.x The x deviation values
 * @param {number[]} options.data.y The y deviation values
 * @param {number[]} options.data.z The elevation values
 * @param {geotoolkit.attributes.FillStyle} options.fillstyle
 * @param {number} [options.width = 50] The width of the parallelepiped in modelspace (x axis)
 * @param {number} [options.height = 50] The height of the parallelepiped in modelspace (y axis)
 * @param {number} [options.depth] The length of the parallelepiped in modelspace (used if there is only 2 points in the given path) (z axis)
 * @param {number} [options.widthsegments = 1] Number of segmented faces along the width of the sides
 * @param {number} [options.heightsegments = 1] Number of segmented faces along the height of the sides
 * @param {number} [options.depthsegments = 1] Number of segmented faces along the depth of the sides
 */
geotoolkit3d.scene.well.schematic.Parallelepiped = {};
    /**
     * Returns the bounding box of the schematic in local coordinates.
     *
     * @returns {THREE.Box3}
     */
    geotoolkit3d.scene.well.schematic.Parallelepiped.prototype.getBoundingBox = function(){};
    /**
     * Returns the geometry of the schematic.
     *
     * @returns {THREE.Geometry|THREE.BufferGeometry}
     */
    geotoolkit3d.scene.well.schematic.Parallelepiped.prototype.getGeometry = function(){};

/**
 * Creates a Sphere three.js.
 *
 * @class geotoolkit3d.scene.well.schematic.Sphere
 * @augments geotoolkit3d.scene.well.schematic.SchematicBase
 * @param {object} options The options
 * @param {object} options.data 2 points required; the first one is the localisation and the second provide the direction to tend to.
 * @param {number[] | number} options.data.x The x deviation values
 * @param {number[] | number} options.data.y The y deviation values
 * @param {number[] | number} options.data.z The elevation values
 * @param {geotoolkit.attributes.FillStyle} [options.fillstyle]
 * @param {number} [options.radius = 50] The sphere radius
 * @param {number} [options.widthsegments = 28] The number of horizontal segments. Minimum value is 3
 * @param {number} [options.heightsegments = 14] The number of vertical segments. Minimum value is 2
 * @param {number} [options.phistart = 0] The specify horizontal starting angle
 * @param {number} [options.philength = Math.PI * 2] The specify horizontal sweep angle size
 * @param {number} [options.thetastart = 0] The specify vertical starting angle
 * @param {number} [options.thetalength = Math.PI] The specify vertical sweep angle size
 */
geotoolkit3d.scene.well.schematic.Sphere = {};
    /**
     * Returns the bounding box of the schematic.
     *
     * @returns {THREE.Box3}
     */
    geotoolkit3d.scene.well.schematic.Sphere.prototype.getBoundingBox = function(){};
    /**
     * Returns the geometry of the schematic.
     *
     * @returns {THREE.SphereGeometry}
     */
    geotoolkit3d.scene.well.schematic.Sphere.prototype.getGeometry = function(){};

/**
 * A well log as a cylinder like 3D shape.<br>
 * <br>
 * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
 * The diameter and color of the tube will vary for each log curve sample.<br>
 * <br>
 * Note that this object assumes that the given path and curve values have the same sampling.<br>
 *
 * @class geotoolkit3d.scene.well.Vector
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {THREE.Vector3} options.data.start start point
 * @param {THREE.Vector3} options.data.end end point
 * @param {number} [options.radius=2] the radius of the vector
 * @param {THREE.Color|string} [options.color] color for the vector
 */
geotoolkit3d.scene.well.Vector = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.color='red'] A color provider or a single color in css format
     * @returns {geotoolkit3d.scene.well.Vector}
     */
    geotoolkit3d.scene.well.Vector.prototype.setOptions = function(options){};

/**
 * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
 * @see geotoolkit3d.util.well.Direction
 * @class geotoolkit3d.data.well.DirectionUtil
 * @deprecated Use geotoolkit3d.util.well.Direction instead
 */
geotoolkit3d.data.well.DirectionUtil = {};

/**
 * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
 * @see geotoolkit3d.util.well.Deviation
 * @class geotoolkit3d.data.well.DeviationUtil
 * @deprecated Use geotoolkit3d.util.well.Deviation instead
 */
geotoolkit3d.data.well.DeviationUtil = {};

/**
 * Utility class related to geotoolkit3d.scene.well.CylinderLog
 * @class geotoolkit3d.scene.well.CylinderLogUtil
 * @deprecated Use geotoolkit3d.util.well.CylinderLog instead
 */
geotoolkit3d.scene.well.CylinderLogUtil = {};

