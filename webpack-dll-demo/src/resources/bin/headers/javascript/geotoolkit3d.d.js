/** @namespace */
geotoolkit3d = {};

/** @namespace */
geotoolkit3d.data = {};

/** @namespace */
geotoolkit3d.data.loader = {};

/** @namespace */
geotoolkit3d.data.surface = {};

/** @namespace */
geotoolkit3d.data.loader.vtk = {};

/** @namespace */
geotoolkit3d.tool = {};

/** @namespace */
geotoolkit3d.tool.devicesupport = {};

/** @namespace */
geotoolkit3d.tool.cursor = {};

/** @namespace */
geotoolkit3d.transformation = {};

/** @namespace */
geotoolkit3d.scene = {};

/** @namespace */
geotoolkit3d.picking = {};

/** @namespace */
geotoolkit3d.picking.pickingrenderer = {};

/** @namespace */
geotoolkit3d.controller = {};

/** @namespace */
geotoolkit3d.scene.animation = {};

/** @namespace */
geotoolkit3d.scene.ellipse = {};

/** @namespace */
geotoolkit3d.scene.compass = {};

/** @namespace */
geotoolkit3d.scene.grid = {};

/** @namespace */
geotoolkit3d.scene.pointset = {};

/** @namespace */
geotoolkit3d.scene.surface = {};

/** @namespace */
geotoolkit3d.selection = {};
    /**
     * Query all nodes from the specified node and do the specified action
     *
     * @param {geotoolkit3d.scene.Object3D} node node to start search
     * @returns {geotoolkit.selection.NodeQueryBuilder} a new node query builder
     * @example
     * geotoolkit.selection.from(node)
     * .where(function(node) { return node.getId() === 'line'})
     * .select(function(node) {node.setLineStyle(mystyle)));
     */
    geotoolkit3d.selection.from = function(node){};

/** @namespace */
geotoolkit3d.util = {};

/** @namespace */
geotoolkit3d.util.loader = {};

/** @namespace */
geotoolkit3d.util.surface = {};

/**
 * Utility class providing functions and constant for 3D scene operations.<br>
 *
 * @class geotoolkit3d.Util
 */
geotoolkit3d.Util = {};
    /**
     * Computes the world bounding box of the given object and its children.<br>
     * This function uses geometries boundingBox and matrixWold to do so.<br>
     * Note that this function uses all nodes by default (even the not visible ones)<br>
     *<br>
     * @param {THREE.Object3D} object The object to compute world bounding box of
     * @param {function} [filter=null] A filter function to ignore some nodes
     * @param {boolean} [alwaysTraverseChildren=false] Forces the calculation to traverse children to get the extents of the whole view
     * @returns {THREE.Box3|null} The computed world bounding box
     */
    geotoolkit3d.Util.computeWorldBoundingBox = function(object, filter, alwaysTraverseChildren){};
    /**
     * Dispose an object's WebGL resources and all its children recursively.<br>
     * The sequence in witch the dispose steps will occur is:
     * <ul>
     * <li> disposeResources : If the object has any specific resources to dispose, the disposeResources() function will be called.</li>
     * <li> dispose children: Calls Util.dispose() on the children of this object.</li>
     * <li> dispose object: If the object has any custom implementation of the dispose function.</li>
     * <li> remove object: Removes the object from its parent.</li>
     * <li> dispose geometry: Disposes the geometry, releasing the memory used on the graphic card.</li>
     * <li> dispose material: Disposes the material, releasing the memory used on the graphic card.</li>
     * <ul>
     * <li> dispose texture: Disposes the texture stored in the material (if any).</li>
     * </ul>
     * </ul>
     *
     * @param {THREE.Object3D|Array.<THREE.Object3D>} object The object or array of objects to dispose
     */
    geotoolkit3d.Util.dispose = function(object){};
    /**
     * @function
     * @desc
     * Compute the device coordinates for the given world coordinates.<br>
     * This function will compute the projection of the given position using the given parameters.<br>
     *
     * @param {THREE.Vector3} position The position to project
     * @param {THREE.Camera} camera The camera
     * @param {geotoolkit.util.Dimension} rendererSize The renderer dimension in virtual pixels
     * @param {THREE.Vector3} [target] An optional target to store the result
     * @returns {THREE.Vector3} The z is the 'depth' in the screen
     */
    geotoolkit3d.Util.worldToDevice = function(position, camera, rendererSize, target){};
    /**
     * @function
     * @desc
     * Compute the device coordinates for the given world coordinates.<br>
     * This function will compute the projection of the given position using the given parameters.<br>
     *
     * @param {THREE.Vector3} position The position to project
     * @param {THREE.Camera} camera The camera
     * @param {geotoolkit.util.Dimension} rendererSize The renderer dimension in virtual pixels
     * @param {THREE.Vector2} [target] An optional target to store the result
     * @returns {THREE.Vector2}
     */
    geotoolkit3d.Util.worldToDevice2D = function(position, camera, rendererSize, target){};
    /**
     * Seismic display mode enum.<br>
     * <br>
     * This enum is used to determine how to transform Index coordinates when rendering Seismic related objects.<br>
     * @readonly
     * @enum
     */
    geotoolkit3d.Util.SeismicModes = {};
        /**
         * Display mode for Inline-crossline, ij, index.
         * @type {string}
         */
        geotoolkit3d.Util.SeismicModes.ij = "";
        /**
         * Display mode for Inline-crossline, ij, index with the I coordinate flipped
         * @type {string}
         */
        geotoolkit3d.Util.SeismicModes.ijflipped = "";
        /**
         * Display mode for XY
         * @type {string}
         */
        geotoolkit3d.Util.SeismicModes.xy = "";

/**
 * This utility class provides functions to deal with common 3D related math problems.
 * @class geotoolkit3d.util.Math
 */
geotoolkit3d.util.Math = {};
    /**
     * Computes area of a triangle using Heron's formula.<br>
     * <br>
     * This function computes the area of the triangle made by the three given points.<br>
     * To do so, it uses the Heron's stabilized formula:<br>
     * <br>
     * <i>
     * Let a, b, c the length of each edge of the triangle with (a >= b >= c).<br>
     * ∆ := √((a+(b+c)) (c-(a-b)) (c+(a-b)) (a+(b-c)))<br>
     * </i>
     * @see {@link https://en.wikipedia.org/wiki/Heron's_formula Heron's formula}
     * @param {THREE.Vector2} p0 The first point
     * @param {THREE.Vector2} p1 The second point
     * @param {THREE.Vector2} p2 The third point
     * @returns {number} The area of the triangle
     */
    geotoolkit3d.util.Math.computeHeronArea = function(p0, p1, p2){};
    /**
     * Computes the 'surface normal' of three vertex in the given array (at the given indices).<br>
     * This will compute the normal vector of the plane made by the given 3 vertex.
     * @param {number[]} vertices The xyz values of the vertices
     * @param {number} index0 The first vector index
     * @param {number} index1 The second vector index
     * @param {number} index2 The third vector index
     * @param {number[]} [normal] Optional target array
     * @param {number} [nullvalue] A nullvalue to ignore (cannot be NaN)
     * @returns {number[]} The resulting normal as an array of 3 components [x,y,z]
     */
    geotoolkit3d.util.Math.normal = function(vertices, index0, index1, index2, normal, nullvalue){};
    /**
     * Computes the 'surface normal' of three vertex in the given array (at the given indices).<br>
     * This will compute the normal vector of the plane made by the given 3 vertex.
     * @param {THREE.BufferAttribute} vertices The xyz values of the vertices
     * @param {number} index0 The first vector index
     * @param {number} index1 The second vector index
     * @param {number} index2 The third vector index
     * @param {number[]} [normal] Optional target array
     * @param {number} [nullvalue] A nullvalue to ignore (cannot be NaN)
     * @returns {number[]} The resulting normal as an array of 3 components [x,y,z]
     */
    geotoolkit3d.util.Math.normalBufferAttribute = function(vertices, index0, index1, index2, normal, nullvalue){};
    /**
     * Finds intersection between the given segments if there is any, null otherwise.<br>
     * @param {THREE.Vector2|geotoolkit.util.Point} segment0p0 First segment first point
     * @param {THREE.Vector2|geotoolkit.util.Point} segment0p1 First segment second point
     * @param {THREE.Vector2|geotoolkit.util.Point} segment1p0 Second segment first point
     * @param {THREE.Vector2|geotoolkit.util.Point} segment1p1 Second segment second point
     * @returns {THREE.Vector2|null} The intersection point or null
     */
    geotoolkit3d.util.Math.intersect = function(segment0p0, segment0p1, segment1p0, segment1p1){};
    /**
     * Linear interpolation between two Vector3.<br>
     * @param {THREE.Vector3} t0 Initial point
     * @param {THREE.Vector3} t1 Target point
     * @param {number} t Current step (0 to 1)
     * @returns {THREE.Vector3} The interpolated coordinates
     * @deprecated THREE.Vector3 has now this feature builtin (THREE.Vector3.lerp())
     */
    geotoolkit3d.util.Math.lerp = function(t0, t1, t){};
    /**
     * Convert an angle in degree to radians.
     * @param {number} angle The angle value in degree
     * @returns {number} The angle in radians
     */
    geotoolkit3d.util.Math.degreeToRadians = function(angle){};
    /**
     * Convert an angle in radians to degree.
     * @param {number} angle The angle value in radians
     * @returns {number} The angle in degrees
     */
    geotoolkit3d.util.Math.radiansToDegree = function(angle){};
    /**
     * Creates a normalized version of the given array.<br>
     * If given array's min&max are identical then the returned normalized values will be 'start + (end - start) / 2'.<br>
     * If given srcstart is NaN the actual minimum will be used instead.<br>
     * If given srcend is NaN the actual maximum will be used instead.<br>
     * @param {number[]} values Values to normalize
     * @param {number} [dststart=0] Normalization min value (ie normalized minimum value)
     * @param {number} [dstend=1] Normalization max value (ie normalized maximum value)
     * @param {number} [srcstart] Origin min value, by default will be the array actual min
     * @param {number} [srcend] Origin max value, by default will be the array actual max
     * @param {number} [nullvalue] A nullvalue to normalize differently, note that null and NaN are considered as nullvalue by default
     * @param {number} [normednullvalue] The normalized value to use in place of the nullvalue in the returned array
     * @returns {Array.<number>} The normalized values
     */
    geotoolkit3d.util.Math.normalizeArray = function(values, dststart, dstend, srcstart, srcend, nullvalue, normednullvalue){};
    /**
     * Returns the maximum values of both vectors as a new vector
     * @param {THREE.Vector3} v1 First vector
     * @param {THREE.Vector3} v2 Second vector
     * @returns {THREE.Vector3} A new vector containing the maximum value for each component
     */
    geotoolkit3d.util.Math.maxVector3 = function(v1, v2){};
    /**
     * Returns the minimum values of both vectors as a new vector
     * @param {THREE.Vector3} v1 First vector
     * @param {THREE.Vector3} v2 Second vector
     * @returns {THREE.Vector3} A new vector containing the minimum value for each component
     */
    geotoolkit3d.util.Math.minVector3 = function(v1, v2){};
    /**
     * Returns if the two boxes intersect
     * @param {THREE.Box2} b1 First box
     * @param {THREE.Box2} b2 Second box
     * @returns {boolean} box intersect
     */
    geotoolkit3d.util.Math.intersectBox = function(b1, b2){};
    /**
     * Returns if box2 is contained inside box1
     * @param {THREE.Box2} box1 First box
     * @param {THREE.Box2} box2 Second box
     * @returns {boolean} box contained
     */
    geotoolkit3d.util.Math.containsBox = function(box1, box2){};
    /**
     * Returns a THREE.Box2 of the space contained by both boxes
     * @param {THREE.Box2} box1 First box
     * @param {THREE.Box2} box2 Second box
     * @returns {THREE.Box2} overlapping space
     */
    geotoolkit3d.util.Math.createFitBox = function(box1, box2){};
    /**
     * This function turns measuredDepths inclinations and azimuth into XYZ deviation coordinates
     * @param {number[]} measuredDepth measured depth array
     * @param {number[]} inclination inclination array
     * @param {number[]} azimuth azimuth array
     * @param {boolean} [neg=false] resulting depths should be negative
     * @returns {{x: number[], y: number[], z: number[]}}
     */
    geotoolkit3d.util.Math.minimumCurvature = function(measuredDepth, inclination, azimuth, neg){};

/**
 * Utility class providing glsl code snippets that can be included in shaders.<br>
 *
 * @class geotoolkit3d.util.WebGLConstants
 */
geotoolkit3d.util.WebGLConstants = {};
    /**
     * Get the WebGL maximum texture size
     */
    geotoolkit3d.util.WebGLConstants.getCompressedTextureFormats = function(){};
    /**
     * Get the WebGL maximum texture size
     */
    geotoolkit3d.util.WebGLConstants.getMaxTextureSize = function(){};
    /**
     * Get the WebGL maximum number of textures
     */
    geotoolkit3d.util.WebGLConstants.getMaxTextures = function(){};

/**
 * This class can parse vtk files and return a comprehensive json object.<br>
 * <br>
 * This JSON object can be used to generate Geometries and Object3D.<br>
 * See {@link geotoolkit3d.data.loader.vtk.VTKLoader~loadCallback loadCallback} for the JSON specification.<br>
 * See {@link geotoolkit3d.data.loader.vtk.VTKFactory} for a default implementation of VTK_JSON-to-Object3D implementation.<br>
 * <br>
 * Refer to the {@link http://www.vtk.org/wp-content/uploads/2015/04/file-formats.pdf VTK-File-specification} for details.<br>
 * <br>
 * Note that, for now, only ASCII format is supported.
 *
 * @class geotoolkit3d.data.loader.vtk.VTKLoader
 */
geotoolkit3d.data.loader.vtk.VTKLoader = {};
    /**
     * Loads the vtk file at the given URL.<br>
     * <br>
     * This convenience function exists to mimic THREEJS loaders API.<br>
     * Internally it uses THREE.XHRLoader and THREE.LoadingManager.<br>
     * <br>
     * One could also use directly the function parse() to handle loading the dataset manually/differently.
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * <br>
     * @param {string} url The url of the VTK file
     * @param {geotoolkit3d.data.loader.vtk.VTKLoader~loadCallback} onLoad The function called upon success
     * @param {function} onError The function called if an error occurs
     */
    geotoolkit3d.data.loader.vtk.VTKLoader.prototype.load = function(url, onLoad, onError){};
    /**
     * Parses the content of the given reader.<br>
     * <br>
     * This function will asynchronously parse the content of the VTK dataset and build a JSON representation of it.<br>
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the parsing has been done.<br>
     * <br>
     * @param {geotoolkit.util.stream.LineReader} reader The reader
     * @param {geotoolkit3d.data.loader.vtk.VTKLoader~loadCallback} onLoad callback function
     * @param {function} onError The function called if an error occurs
     * @returns {geotoolkit.util.Promise} A promise fulfilled when the dataset has been parsed
     */
    geotoolkit3d.data.loader.vtk.VTKLoader.prototype.parse = function(reader, onLoad, onError){};

/**
 * This class can parse vtk files and return a comprehensive json object.<br>
 * <br>
 * This object can be used to generate Geometries and Object3D.<br>
 * <br>
 * Note that, for now, only ASCII format is supported
 *
 * @class geotoolkit3d.data.loader.vtk.VTKFactory
 */
geotoolkit3d.data.loader.vtk.VTKFactory = {};
    /**
     * Creates objects 3D from the given JSON (generated by parsing a VTK dataset).<br>
     * <br>
     * Note, that this factory will automatically apply a recenter and a rotation (to apply Z = UP paradigm) on the given vertices.<br>
     *
     *
     * @param {object} json The input json object
     * @param {object} json.data The actual data
     * @param {number[]} [json.data.position] The vertices (XYZ)
     * @param {object} [json.data.fielddata] The fielddata object if any is present
     * @param {object} [json.data.fielddata.name] The fielddata name
     * @param {object} [json.data.fielddata.type] The fielddata type
     * @param {object[]} [json.data.fielddata.arrays] The fielddata content
     * @param {object} [json.data.fielddata.arrays0] An example of the elements in arrays
     * @param {string} [json.data.fielddata.arrays0.name] The name of this fielddata
     * @param {number} [json.data.fielddata.arrays0.stride] The stride of this fielddata
     * @param {number[]} [json.data.fielddata.arrays0.values] The values of this fielddata
     * @param {object} [json.data.ATTRIBUTE] Some attributes can be present, the name of the actual attribute will be used in place of ATTRIBUTE
     * @param {string} [json.data.ATTRIBUTE.name] The name of the attribute
     * @param {string} [json.data.ATTRIBUTE.type] The type of the attribute (scalar, vector)
     * @param {number[]} [json.data.ATTRIBUTE.values] The values of the attribute
     * @param {number[]} [json.data.index] The indices for meshes (if any)
     * @param {Array.<number[]>} [json.data.lineindex] The indices for lines (if any)
     * @param {number[]} [json.data.pointindex] The indices for pointset/pointcloud (if any)
     * @param {number[]} [json.data.cells] The cells information, this is an intermediate representation, might not be necessary to create 3D objects
     * @param {object} options The options to use to customize resulting objects
     * @param {object} [options.mesh] The options to use to customize resulting mesh
     * @param {THREE.Material} options.mesh.material The material to customize resulting mesh
     * @param {THREE.Vector3} [options.mesh.position] The mesh position
     * @param {THREE.Vector3} [options.mesh.scale] The mesh scale
     * @param {THREE.Vector3} [options.mesh.rotation] The mesh rotation
     * @param {object} [options.line] The options to use to customize resulting line
     * @param {THREE.Material} options.line.material The material to customize resulting line
     * @param {THREE.Vector3} [options.line.position] The line position
     * @param {THREE.Vector3} [options.line.scale] The line scale
     * @param {THREE.Vector3} [options.line.rotation] The line rotation
     *
     */
    geotoolkit3d.data.loader.vtk.VTKFactory.prototype.create = function(json, options){};
    /**
     * Creates a mesh from the given JSON (generated by parsing a VTK dataset).
     * @param {object} json The input json object
     * @param {object} json.data The actual data
     * @param {number[]} json.data.position The vertices (XYZ)
     * @param {number[]} json.data.index The indices for meshes
     * @param {object} options The options to use to customize resulting objects
     * @param {object} [options.mesh] The options to use to customize resulting mesh
     * @param {THREE.Material} [options.mesh.material] The material to customize resulting mesh
     * @param {THREE.Vector3} [options.mesh.position] The mesh position
     * @param {THREE.Vector3} [options.mesh.scale] The mesh scale
     * @param {THREE.Vector3} [options.mesh.rotation] The mesh rotation
     * @returns {THREE.Mesh} m The mesh
     */
    geotoolkit3d.data.loader.vtk.VTKFactory.prototype.createMesh = function(json, options){};
    /**
     * Creates lines from the given JSON (generated by parsing a VTK dataset).
     * @param {object} json The input json object
     * @param {object} json.data The actual data
     * @param {number[]} json.data.position The vertices (XYZ)
     * @param {Array.<number[]>} json.data.lineindex The indices for the lines
     * @param {object} options The options to use to customize resulting objects
     * @param {object} [options.line] The options to use to customize resulting line
     * @param {THREE.Material} [options.line.material] The material to customize resulting line
     * @param {THREE.Vector3} [options.line.position] The line position
     * @param {THREE.Vector3} [options.line.scale] The line scale
     * @param {THREE.Vector3} [options.line.rotation] The line rotation
     * @returns {THREE.Line[]} l The line
     */
    geotoolkit3d.data.loader.vtk.VTKFactory.prototype.createLines = function(json, options){};
    /**
     * Creates a pointcloud from the given JSON (generated by parsing a VTK dataset).<br>
     * <br>
     * One can choose what attribute will be used for point size and point color based on their names.<br>
     * Note that only 'scalar' attributes and FieldData with a stride of 1 can be used.<br>
     *
     * @param {object} json The input json object
     * @param {object} json.data The actual data
     * @param {number[]} json.data.position The vertices (XYZ)
     * @param {number[]} [json.data.pointindex] The indices for points, if null all vertices will be used
     * @param {object} options The options to use to customize resulting objects
     * @param {THREE.Vector3} [options.scale] scale for every resulting object
     * @param {object} [options.pointcloud] The options to use to customize resulting pointcloud
     * @param {object} [options.pointcloud.attributes] The names of the attribute to use.
     * @param {string} [options.pointcloud.attributes.sizes] The key for the size attribute
     * @param {string} [options.pointcloud.attributes.value] The key for the value attribute
     * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.pointcloud.colorprovider] A color provider or a single color in css format
     * @param {THREE.Vector3} [options.mesh.position] The pointcloud position
     * @param {THREE.Vector3} [options.mesh.scale] The pointcloud scale
     * @param {THREE.Vector3} [options.mesh.rotation] The pointcloud rotation
     * @returns {geotoolkit3d.scene.pointset.PointCloud} p The pointcloud
     */
    geotoolkit3d.data.loader.vtk.VTKFactory.prototype.createPointcloud = function(json, options){};

/**
 * Base class of Carnac3D objects.<br>
 * <br>
 * This class extends THREE.Object3D to expose some useful functions and add some new features.<br>
 * It is similar to a CarnacJS Group (has children and holds a transformation that applies to its children).<br>
 * <br>
 * To change the location/size/orientation of an Object3D, refer to THREEJS documentation.<br>
 * > position, scale, rotation/quaternion
 *
 * @class geotoolkit3d.scene.Object3D
 * @augments THREE.Object3D
 */
geotoolkit3d.scene.Object3D = {};
    /**
     * Notifies this object and its parent that this object has been invalidated.<br>
     * If this object is in a Plot, it will be marked as dirty and will trigger a rendering cycle.<br>
     * @param {geotoolkit3d.Event} [event] The event to fire
     */
    geotoolkit3d.scene.Object3D.prototype.invalidateObject = function(event){};
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     *<br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call updateObject on this object's children as updateObject will be called on all nodes present in the scene.<br>
     *<br>
     * This will be executed before the transformations simplification.<br>
     *<br>
     * @see geotoolkit3d.Plot for more details on the render steps
     * @param {THREE.Scene} scene The scene
     * @param {THREE.Camera} camera The camera
     */
    geotoolkit3d.scene.Object3D.prototype.updateObject = function(scene, camera){};
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     *<br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call beforeRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
     *<br>
     * This will be executed after the transformations simplification.<br>
     *<br>
     * @see geotoolkit3d.Plot for more details on the render steps
     * @param {THREE.Scene} scene The scene
     * @param {THREE.Camera} camera The camera used for this render phase.
     * @param {geotoolkit3d.Plot} plot The 3D plot
     * @param {THREE.Renderer} renderer The renderer
     */
    geotoolkit3d.scene.Object3D.prototype.beforeRender = function(scene, camera, plot, renderer){};
    /**
     * Register an object with a dispose() function that needs to be called if this object is disposed.<br>
     * This can be used to reference extra resources used by this object that requires disposing when this object is destroyed.<br>
     *<br>
     * Note that the application code is still responsible of calling the dispose function on the object/scene/plot.<br>
     * @see geotoolkit3d.Util.dispose()
     *
     * @param {object} resource A disposable object
     * @returns {geotoolkit3d.scene.Object3D} this
     */
    geotoolkit3d.scene.Object3D.prototype.addResource = function(resource){};
    /**
     * Removes a disposable object from the list of resources.<br>
     * The object will not be disposed if this object is destroyed.<br>
     * @returns {geotoolkit3d.scene.Object3D}
     */
    geotoolkit3d.scene.Object3D.prototype.removeResource = function(){};

/**
 *
 * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
 * For example MSPointers or Touch events.<br>
 * <br>
 * When receiving an event, it will trigger the correct generic function of the given 'target'.<br>
 * Therefore it will convert 'browser-specific' events to a 'more generic' behavior.<br>
 * <br>
 * The event passed down to the target will be the native event.<br>
 * However, implementation of this class will also introduce 'plotX', 'plotY' attributes in the event.<br>
 * They corresponds to the cursor/fingers/pen location converted to plot-relative coordinates.<br>
 * <br>
 * In case of multiple cursor/fingers/pen location, the array attributes 'plotXs', 'plotYs' will also be populated accordingly.<br>
 * <br>
 * Builtin implementations include:<br>
 * <ul>
 * <li>Mouse: Supports {@link http://www.w3schools.com/jsref/dom_obj_event.asp w3c-mouse-event} based devices</li>
 * <li>Pointer: Supports system using the {@link https://www.w3.org/TR/pointerevents/ w3c-pointers} architecture.</li>
 * <li>Touch: Supports system using the {@link https://www.w3.org/TR/touch-events/ w3c-touch} architecture.</li>
 * </ul>
 * <br>
 * @class geotoolkit3d.tool.devicesupport.AbstractDeviceSupport
 * @extends geotoolkit.util.EventDispatcher
 * @param {Object} options The options
 * @param {HTMLElement} options.domelement The div element in which the canvas will be created and added.
 * @param {geotoolkit3d.Plot} options.plot The plot using this devicesupport
 * @param {geotoolkit3d.tool.AbstractTool} options.target The tool to notify when an event occurs
 */
geotoolkit3d.tool.devicesupport.AbstractDeviceSupport = {};
    /**
     * Event types
     * @enum
     * @readonly
     */
    geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events = {};
        /**
         * onContext
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onContext = "";
        /**
         * onMouseDown
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onMouseDown = "";
        /**
         * onMouseMove
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onMouseMove = "";
        /**
         * onMouseUp
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onMouseUp = "";
        /**
         * onMouseWheel
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onMouseWheel = "";
        /**
         * onTouchStart
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onTouchStart = "";
        /**
         * onTouchEnd
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onTouchEnd = "";
        /**
         * onTouchMove
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onTouchMove = "";
        /**
         * onDoubleClick
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onDoubleClick = "";
        /**
         * onKeyDown
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onKeyDown = "";
        /**
         * onKeyUp
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onKeyUp = "";
        /**
         * onPointerStart
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onPointerStart = "";
        /**
         * onPointerMove
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onPointerMove = "";
        /**
         * onPointerEnd
         * @type {string}
         */
        geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.Events.onPointerEnd = "";
    /**
     * Function called to attach the device-support class to an actual plot.<br>
     * Implementation should be reentrant and attach any native listener they need.<br>
     * @function
     * @param {geotoolkit3d.Plot} plot The plot to attach to
     * @param {HTMLElement} domelement The dom element to attach to
     * @param {geotoolkit3d.tool.AbstractTool} target The tool to notify on native events
     */
    geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.prototype.setup = function(plot, domelement, target){};
    /**
     * Function called to check if this class should be used for the current context.<br>
     * <br>
     * This will be called as part of the lookup mechanism of the {@link geotoolkit3d.tool.devicesupport.DeviceSupportRegistry}.<br>
     * This static function should be implemented in each subclass and return true if and only if it should be used in the current
     * context.<br>
     * <br>
     * Typical implementation will check for the presence of some known attributes in the window or user-agent to determine the nature of
     * the current platform/browser.
     * @function
     * @abstract
     */
    geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.isSupported = function(){};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {Object} options The options
     * @param {HTMLElement} [options.domelement] The div element in which the canvas will be created and added.
     * @param {geotoolkit3d.Plot} [options.plot] The plot using this devicesupport
     * @param {geotoolkit3d.tool.AbstractTool} [options.target] The tool to notify when an event occurs
     * @returns {geotoolkit3d.tool.devicesupport.AbstractDeviceSupport} this
     */
    geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.prototype.setOptions = function(options){};
    /**
     * @inheritdoc
     */
    geotoolkit3d.tool.devicesupport.AbstractDeviceSupport.prototype.dispose = function(){};

/**
 * This class manages 'device-support' classes.<br>
 *<br>
 * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
 * For example MSPointers or Touch events.<br>
 *<br>
 * Multiple implementation can coexist and this class will provide to the client code the implementation the 'most adapted' to the current browser.<br>
 *<br>
 * To determine which device support to use, this class prompts each devicesupport if it can works in the current environment.<br>
 * > device.isSupported()<br>
 *<br>
 * The first devicesupport to answer 'true' will be picked.<br>
 * If no device answers true, the default device support is used as a fallback.<br>
 *<br>
 * @class geotoolkit3d.tool.devicesupport.DeviceSupportRegistry
 */
geotoolkit3d.tool.devicesupport.DeviceSupportRegistry = {};
    /**
     * Sets the default device support class
     * @param {geotoolkit3d.tool.devicesupport.AbstractDeviceSupport} devicesupport The constructor/class to instantiate and use as the default device support
     */
    geotoolkit3d.tool.devicesupport.DeviceSupportRegistry.setDefaultDeviceSupport = function(devicesupport){};
    /**
     * Finds a devicesupport that is supported in the current browser.
     * @returns {*}
     */
    geotoolkit3d.tool.devicesupport.DeviceSupportRegistry.getDeviceSupport = function(){};
    /**
     * Gets the array containing the constructors/class that could be instantiated and used as a device support.
     * @returns {Array<geotoolkit3d.tool.devicesupport.AbstractDeviceSupport>}
     */
    geotoolkit3d.tool.devicesupport.DeviceSupportRegistry.getAllDeviceSupport = function(){};

/**
 * The parent class for picking materials that uses a Shader based picking mechanism.<br>
 * <br>
 * The shader chunks and uniforms contained in this class should be used to compute/write picking information in pixels.<br>
 * <br>
 * @class geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial
 * @augments THREE.ShaderMaterial
 *
 * @param {object} [options] The options
 * @param {object} [options.uniforms] The object describing the uniforms for this material in the usual THREEJS format
 * @param {string} [options.vertexshader] The vertex shader (GLSL code)
 * @param {string} [options.fragmentshader] The fragment shader (GLSL code)
 * @param {THREE.Material} [options.material] The material replaced by this picking material
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial = {};
    /**
     * Builtin picking modes.<br>
     * <br>
     * This is used to tell the GPU which picking phase is currently occurring.<br>
     * It will be use din the picking shaders to choose which information to encode in the picked pixel.<br>
     * @readonly
     * @enum
     */
    geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes = {};
        /**
         * ID mode, shader will encode the shape unique id.
         * @type {number}
         */
        geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes.Id = NaN;
        /**
         * X mode, shader will encode the picked point x coordinate.
         * @type {number}
         */
        geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes.X = NaN;
        /**
         * ID mode, shader will encode the picked point y coordinate.
         * @type {number}
         */
        geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes.Y = NaN;
        /**
         * ID mode, shader will encode the picked point z coordinate.
         * @type {number}
         */
        geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes.Z = NaN;
    /**
     * Set picking options, note that this setOptions expects all mandatory parameters to be set
     * @param {object} options The picking options
     * @param {geotoolkit3d.Plot} [options.plot] The plot
     * @param {number} [options.x] The x coordinate in device
     * @param {number} [options.y] The y coordinate in device
     * @param {geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes|number} [options.pickingmode] The picking mode
     * @param {THREE.Vector4} [options.pickingrgba] The shape unique identifier as RGBA
     * @param {THREE.Object3D[]} [options.candidates] The objects being picked (mandatory for XYZ)
     * @param {THREE.Matrix4} [options.projectioninversematrix] The inverse projection matrix (mandatory for XYZ)
     * @param {THREE.Matrix4} [options.viewinversematrix] The inverse view matrix (mandatory for XYZ)
     * @param {THREE.Matrix4} [options.normalizationmatrix] The matrix that normalize model coordinates
     * @returns {geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial} this
     */
    geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.prototype.setOptions = function(options){};
    /**
     * Computes a matrix to transform coordinates contained in the plot model space to ]0...1[.<br>
     * This is used to normalize coordinates during picking so that the GPU will only handle normalized coordinates.<br>
     * @param {geotoolkit3d.Plot} plot The plot to compute the normalization matrix for
     * @returns {THREE.Matrix4} The matrix to normalize coordinates
     */
    geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.computePlotNormMatrix = function(plot){};
    /**
     * Computes a matrix to transform coordinates contained in ]0...1[ to a plot model space.<br>
     * This is used to un-normalize coordinates returned by the GPU.<br>
     * @param {geotoolkit3d.Plot} plot The Plot to compute the inverse normalization matrix for
     * @returns {THREE.Matrix4} The matrix to un-normalize coordinates
     */
    geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.computePlotNormInvMatrix = function(plot){};

/**
 * Utility class to manage colorprovider in 3D.<br>
 * <br>
 * This class provides function, constants and shader chunks to use a colorprovider in WebGL.<br>
 * This implementation reduces the amount of memory used for a given geometry as it requires only one float per vertex (and a fixed size texture).<br>
 * To do so, it generates a texture of the colormap and uses the value to retrieve the color in that colormap on the fly in the shader.<br>
 * <br>
 * This implementation uses the natural interpolation done by the graphic card on varying.<br>
 * This interpolation occurs on the graphic card when it executes the fragment shader for each fragment (rasterization step).<br>
 * See {@link https://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf GLSL Specification Section 4.3.5}<br>
 * See {@link https://www.opengl.org/sdk/docs/tutorials/ClockworkCoders/varying.php OpenGL example}.<br>
 * <br>
 * However the interpolation is done on the actual value rather than on the color.<br>
 * Which means that the interpolation will <b>not</b> create artificial colors that are not present in the colorprovider.<br>
 * However when interpolating the value it will render fragments with an interpolated value that was not present in the original data.<br>
 * <br>
 * <br>
 * When implementing a custom material, one could reuse this mechanism by:<br>
 * <ul>
 * <li>Include shader code provided by this class into his vertexShader and fragmentShader.<br>
 * <ul>
 * <li>COLORMAP_SHADER_VERTEX_PREFIX: Declares uniforms, attributes and varying required by vertexShader</li>
 * <li>COLORMAP_SHADER_VERTEX: Compute normalized value that can be used by colormapping in the fragment shader</li>
 * <li>COLORMAP_SHADER_FRAG_PREFIX: Declares uniforms and varying required by fragmentShader</li>
 * <li>COLORMAP_SHADER_FRAG: Use normalized value to get the actual color that should be used for the current fragment</li>
 * </ul>
 * </li>
 * <br>
 * <li>Declare attributes and uniforms in his material
 * <ul>
 * <li>COLORMAPVALUES_ATTRIBUTE_NAME: Attribute storing the values to be mapped to a color</li>
 * <li>UNIFORM_COLORMAP: Uniforms used to store the colormap texture and the scale</li>
 * </ul>
 * </li>
 * <br>
 * <li>Push the values as an attribute on the THREE.BufferGeometry
 * <ul>
 * <li>Named using COLORMAPVALUES_ATTRIBUTE_NAME constant.</li>
 * <li>One float per vertex</li>
 * </ul>
 * </li>
 * <br>
 * <li>Enable the colormap mode on his material
 * <ul>
 * <li>Set vertexColors to THREE.NoColors</li>
 * <li>Set color to 'white'</li>
 * <li>Set a define (material.defines[ColorMapUtil.COLORMAP_DEFINE_NAME] = 1)</li>
 * </ul>
 * </li>
 * <br>
 * <li>Initialize/Refresh the colormap uniforms and mark the material as dirty
 * <ul>
 * <li>refreshUniformsColorMap(material.uniforms, colorprovider)</li>
 * <li>material.needsUpdate = true</li>
 * </ul>
 * </li>
 * </ul>
 *<br>
 * @class geotoolkit3d.util.ColorMap
 */
geotoolkit3d.util.ColorMap = {};

/**
 * Utility class providing glsl code snippets that can be included in shaders.<br>
 *
 * @class geotoolkit3d.util.Shaders
 */
geotoolkit3d.util.Shaders = {};
    /**
     * Vector used to encode/decode float from vec4
     * @type {THREE.Vector4}
     * @readonly
     */
    geotoolkit3d.util.Shaders.BITMASK = {};
    /**
     * Vector used to encode/decode float from vec4
     * @type {THREE.Vector4}
     * @readonly
     */
    geotoolkit3d.util.Shaders.BITMASK_INV = {};
    /**
     * @function
     * @desc
     * CPU version of geotoolkit3d.util.Shaders.SHADER_FLOAT_TO_VEC4;
     * @param {number} float The value contained in [0...1[ to be converted to a THREE.Vector4
     * @returns {THREE.Vector4} Normalized vector4 (Caller should make a defensive copy of the returned vector)
     */
    geotoolkit3d.util.Shaders.packFloatToVec4 = function(float){};
    /**
     * @see Shaders.packFloatToVec4
     * @param {number} float [0...1[
     * @returns {THREE.Vector4} RGBA vector4 (Caller should make a defensive copy)
     */
    geotoolkit3d.util.Shaders.packFloatToRGBA = function(float){};
    /**
     * @function
     * @desc
     * Unpack a RGBA as a float value
     * @see Shaders.unpackVec4ToFloat
     * @param {THREE.Vector4|number[]} vec4 RGBA vector4 components should be contained in [0...256[
     * @returns {number} The converted float value
     */
    geotoolkit3d.util.Shaders.unpackRGBAToFloat = function(vec4){};
    /**
     * Unpack a Vector4 as a float value
     * @see Shaders.packFloatToVec4
     * @param {THREE.Vector4|number[]} vec4 RGBA vector4 components should be contained in [0...1[
     * @returns {number} The converted float value
     */
    geotoolkit3d.util.Shaders.unpackVec4ToFloat = function(vec4){};
    /**
     * A shader utility function that rounds a float
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.SHADER_ROUND_FLOAT = "";
    /**
     * A shader utility function that can pack a float [0...1[ into a vec4
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.SHADER_FLOAT_TO_VEC4 = "";
    /**
     * Vertex shader code converting a value to a colormap friendly value
     * @see Shaders.COLORMAPVALUES_ATTRIBUTE_NAME
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.COLORMAP_SHADER_VERTEX = "";
    /**
     * Vertex shader utilities to convert a float value to a colormap friendly value
     * @see Shaders.COLORMAP_SHADER_VERTEX
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.COLORMAP_SHADER_VERTEX_PREFIX = "";
    /**
     * Fragment shader code that convertd a colormap value to a color and applies it to the diffuseColor variable.
     * @see Shaders.COLORMAP_SHADER_VERTEX
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.COLORMAP_SHADER_FRAG = "";
    /**
     * Fragment shader utilities to convert a colormap value to a color;
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.COLORMAP_SHADER_FRAG_PREFIX = "";
    /**
     * The vertex shader code that defines the builtin picking modes as constants/defines.
     * @type {string}
     * @readonly
     * @see geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes
     */
    geotoolkit3d.util.Shaders.SHADER_PICKING_MODE = "";
    /**
     * The vertex shader code that defines the uniforms and varyings used for picking.
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.SHADER_PICKING_VERTEXPREFIX = "";
    /**
     * The vertex shader code that computes the varyings reused by the fragment shader.
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.SHADER_PICKING_VERTEXSUFFIX = "";
    /**
     * The fragment shader code that defines the varyings used for picking.
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.SHADER_PICKING_FRAGPREFIX = "";
    /**
     * The fragment shader code that writes the gl_FragColor based on the current picking mode and the varying defined by the vertexShader.
     * @type {string}
     * @readonly
     */
    geotoolkit3d.util.Shaders.SHADER_PICKING_FRAGSUFFIX = "";
    /**
     * Updates given uniforms based on the given colorprovider.<br>
     * <br>
     * This function will update the uniforms related to the colorprovider.<br>
     * To do so it will regenerate the corresponding texture and update the associated scale parameters.<br>
     * @param {object} material to update options on
     * @param {object} options The options to be used.
     */
    geotoolkit3d.util.Shaders.refreshUniformsColorMap = function(material, options){};

/**
 * Basic implementation of a picking material.<br>
 * This material assumes that the material used for rendering is using the common features of THREEJS (common uniforms).<br>
 * This class combines the features provided by {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial} to create a working picking material.<br>
 * However, even if this material is fully operational, it's not used directly.<br>
 * It's inherited by default implementations of picking materials which are used in place of this raw/basic class.<br>
 *
 * @class geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial
 * @augments geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial
 * @see {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial} For details about picking-material.
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial = {};
    /**
     * See {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial#setOptions} for details
     * @param {object} options The picking options
     * @returns {geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial} this
     * @see {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial} For options details
     */
    geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial.prototype.setOptions = function(options){};

/**
 * Material used to do renderer picking on a Line.<br>
 *
 * @class geotoolkit3d.picking.pickingrenderer.DefaultLinePickingMaterial
 * @augments geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial
 * @see {@link geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial} For details about picking-material.
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.DefaultLinePickingMaterial = {};

/**
 * Material used to do renderer picking on a plain/simple Mesh.<br>
 *
 * @class geotoolkit3d.picking.pickingrenderer.DefaultMeshPickingMaterial
 * @augments geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial
 * @see {@link geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial} For details about picking-material.
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.DefaultMeshPickingMaterial = {};

/**
 * This class implements the renderer-based-picking behavior for Sprites.<br>
 * As Sprites are renderer through the THREE.SpritePlugin, there is no easy way to override the shader used. (r71)<br>
 *<br>
 * This class emulates some of the behavior that should have been in the shader itself.<br>
 * So that renderer pickin can be done on Sprites.<br>
 * Note that this implementation ignores any transparency in the sprite and does picking on the whole area covered by the sprite.<br>
 *<br>
 * @class geotoolkit3d.picking.pickingrenderer.DefaultSpritePickingMaterial
 * @augments THREE.SpriteMaterial
 * @see {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial} For details about picking-material.
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.DefaultSpritePickingMaterial = {};
    /**
     * Set picking options, note that this setOptions expects all mandatory parameters to be set
     * @param {object} options The picking options
     * @param {geotoolkit3d.Plot} [options.plot] The plot
     * @param {number} [options.x] The x coordinate in device
     * @param {number} [options.y] The y coordinate in device
     * @param {geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes|number} [options.pickingmode] The picking mode
     * @param {THREE.Vector4} [options.pickingrgba] The shape unique identifier as RGBA
     * @param {THREE.Object3D[]} [options.candidates] The objects being picked (mandatory for XYZ)
     * @param {THREE.Matrix4} [options.projectioninversematrix] The inverse projection matrix (mandatory for XYZ)
     * @param {THREE.Matrix4} [options.viewinversematrix] The inverse view matrix (mandatory for XYZ)
     * @param {THREE.Matrix4} [options.normalizationmatrix] The matrix that normalize model coordinates
     * @returns {geotoolkit3d.picking.pickingrenderer.DefaultSpritePickingMaterial} this
     */
    geotoolkit3d.picking.pickingrenderer.DefaultSpritePickingMaterial.prototype.setOptions = function(options){};

/**
 * Material used to do renderer picking on a shader based Mesh.<br>
 * Unlike picking materials based on {@link geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial}, this materials does not assumes any uniform exists on the replaced material.<br>
 *
 * @class geotoolkit3d.picking.pickingrenderer.DefaultShaderPickingMaterial
 * @augments geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial
 * @see {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial} For details about picking-material.
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.DefaultShaderPickingMaterial = {};

/**
 * Material used to do renderer picking on a PointCloud.<br>
 *
 *
 * @class geotoolkit3d.picking.pickingrenderer.DefaultPointCloudPickingMaterial
 * @augments geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial
 * @see {@link geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial} For details about picking-material.
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.DefaultPointCloudPickingMaterial = {};

/**
 * Parent class for picking algorithms.<br>
 * <br>
 * Subclasses should implement 3D picking (pixel to worldcoordinate).<br>
 * Builtin implementation include raytracing and renderer-picking.<br>
 *
 * @class geotoolkit3d.picking.AbstractPicking
 */
geotoolkit3d.picking.AbstractPicking = {};
    /**
     * Pick the object(s) at the given plot coordinates
     * @function
     * @abstract
     * @param {geotoolkit3d.Plot} plot The target plot
     * @param {number} x The x coordinate in plot device space
     * @param {number} y The y coordinate in plot device space
     * @returns {object[]} An array of jsons containing the intersecting object3d(s) [{object, point}]
     */
    geotoolkit3d.picking.AbstractPicking.pick = function(plot, x, y){};

/**
 * Picking using raycasting algorithm.<br>
 *<br>
 * This selection strategy use a raycasting algorithm to determine what objects are at the requested location.<br>
 * Note that this algorithm has some known limitations as it's a CPU approach:<br>
 * <ul>
 * <li>Vertex&Fragment shader are not supported, therefore objects making use of them might not be pickable or picked at the wrong coordinates</li>
 * <li>Raycasting use a distance-based criteria</li>
 * <li>Can be slow if the picked object or any object considered as a candidate internally has a lot of triangles </li>
 * <li>Returns all objects at the given location that match the criteria </li>
 * </ul>
 * @class geotoolkit3d.picking.RayCastPicking
 */
geotoolkit3d.picking.RayCastPicking = {};
    /**
     *
     * @param {geotoolkit3d.Plot} plot The target plot
     * @param {number} x The x coordinate in client device space
     * @param {number} y The y coordinate in client device space
     * @returns {THREE.Ray}
     */
    geotoolkit3d.picking.RayCastPicking.getPickingRayClient = function(plot, x, y){};
    /**
     *
     * @param {geotoolkit3d.Plot} plot The target plot
     * @param {number} x The x coordinate in plot device space
     * @param {number} y The y coordinate in plot device space
     * @returns {THREE.Ray}
     */
    geotoolkit3d.picking.RayCastPicking.getPickingRay = function(plot, x, y){};
    /**
     * Cast a ray at the given pixel location (relative to the plot).<br>
     * <br>
     * Objects close enough to the ray will be retrieved by the raycast operation.<br>
     *
     * @param {geotoolkit3d.Plot} plot The target plot
     * @param {number} x The x coordinate in device space (pixels)
     * @param {number} y The x coordinate in device space (pixels)
     * @returns {object[]} An array of json objects containing the intersecting shapes [{object, point}]
     */
    geotoolkit3d.picking.RayCastPicking.pick = function(plot, x, y){};

/**
 * Default implementation for the picking renderer mechanism.<br>
 *<br>
 * This class uses rendering as a way to do picking.<br>
 * The idea is similar to the one used here: {@link http://threejs.org/examples/webgl_interactive_cubes_gpu.html THREEJS tutorial}<br>
 * Instead of rendering color in each pixel, it will render more information coded as a rgba pixel.<br>
 * Then it will read the pixel and extract the information encoded in it.<br>
 *<br>
 * To do so, it will replace the current materials by custom shader-materials which will encode the required information into the pixel.<br>
 * The picking might require several steps to retrieve all the information it needs, for each pass one rgba component will be read from the graphic card.<br>
 * Typically it will execute the picking-rendering 4 passes:<br>
 * <ul>
 * <li>shape-identifier: First pass to find which shapes is at the given position using its identifier</li>
 * <li>x-coordinate: Another pass to retrieve the world x coordinate at the pick position</li>
 * <li>y-coordinate: Another pass to retrieve the world y coordinate at the pick position</li>
 * <li>z-coordinate: Another pass to retrieve the world z coordinate at the pick position</li>
 * </ul>
 * For each pass, the scene will be reconfigured to write the corresponding attribute in place of the regular pixels.<br>
 * One could add more passes to the picking by declaring them in the #getExtraPickingModes() of the picking material.<br>
 *<br>
 * Unlike the Raycasting approach, the picking occurs on the GPU, which means that:<br>
 * <ul>
 * <li>Vertex&Fragment shader are supported</li>
 * <li>No distance based criteria, the shape rendered at the given pixel coordinates is the one picked</li>
 * <li>Performance is based on frame rendering performance only, however it may require several frames for a single picking operation</li>
 * <li>Returns only the closest object(s) to the camera (the one(s) visible on screen), transparency is ignored. (see filtering)</li>
 * </ul>
 * <br>
 * Note that this picking implementation accepts a width&height parameters to select shapes in a rectangle centered on the given coordinates.<br>
 * A given shape will be returned only once even if it has several pixels in the picked area.<br>
 * The results entry for such case would correspond to the pixel closest to the given picking coordinate.<br>
 * For example if the picked object fills the whole area being picked.<br>
 * Then the picking coordinates returned will match the center of the picked rectangle.<br>
 * <br>
 * This picking also accepts a 'filter' function that can hide objects that are not pickable.<br>
 * As this filtering occurs prior to said GPU picking it may make some objects pickable even if those were initially hidden.<br>
 * For example, if a cube is behind a plane, it's not pickable because it's hidden.<br>
 * But if a filter that discards the plane is given, then the cube can be picked 'through' the plane.<br>
 * This feature is intended to implement picking through non opaque object not as a convenience filter to ignore some shapes.<br>
 * <br>
 * @class geotoolkit3d.picking.RendererPicking
 * @augments geotoolkit3d.picking.AbstractPicking
 */
geotoolkit3d.picking.RendererPicking = {};
    /**
     * Register the picking material class to be used for picking for a given material.<br>
     * <br>
     * The picking renderer requires custom implementation of materials that write information instead of pixels.<br>
     * To customize the picking for a given object, one should implement the corresponding material and register it.<br>
     * <br>
     * @param {string} materialClassName The picked material's classname to replace
     * @param {THREE.Material} pickingMaterialConstructor The picking material's constructor
     * @see geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial
     */
    geotoolkit3d.picking.RendererPicking.setPickingMaterial = function(materialClassName, pickingMaterialConstructor){};
    /**
     * Do a picking at the given plot coordinates and returns the objects found at this location.<br>
     * The returned objects will be in a json along with some meta information like xyz coordinates of the picked points.<br>
     * <br>
     * If using a width or height greater than 0, several object might be picked at once.<br>
     * In that case, the returned array would be sorted by distance to center pixel (device point given as parameter to this function).<br>
     * <br>
     * If using a width or height greater than 0, one object may occupy several pixels in the picked area.<br>
     * Such object will be be returned only once in the result array.<br>
     * The results entry will correspond to the pixel closest to the given picking coordinate.<br>
     * <br>
     * @param {geotoolkit3d.Plot} plot The target plot
     * @param {number} x The x coordinate in plot device space
     * @param {number} y The y coordinate in plot device space
     * @param {number} [width=0] The amount of pixels to consider on the left and right side of the given x (effective width will be 2 times given width, plus 1 (the center pixel))
     * @param {number} [height=0] The amount of pixels to consider on the top and bottom side of the given y (effective height will be 2 times given height, plus 1 (the center pixel))
     * @param {function} [filter=function(object, pickable){return pickable;}] A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
     * @returns {object[]} An array of jsons containing the intersecting object3d(s) [{object, point, devicepoint}]
     * @example
     * // Pick the objects in the rectangle of size 5,5 centered at (12,13)
     * var selection = geotoolkit3d.picking.RendererPicking.pick(myplot, 12, 13, 2, 2, function(object, pickable){
     * if(!pickable) return false; // If object is already filtered natively, keep filtering it
     * else return !(object instanceof THREE.Line); // Prevent line picking, letting user pick through a line
     * }
     * );
     */
    geotoolkit3d.picking.RendererPicking.pick = function(plot, x, y, width, height, filter){};

/**
 * The base class for tools in the 3D Plot.<br>
 * <br>
 * This implementation uses DeviceSupportRegistry mechanism to retrieve a bridge-object that will deal with hardware/browser specific input
 * devices.<br> The retrieved DeviceSupport object will listen to native events and call the corresponding generic functions on this
 * tool.<br>
 * <br>
 * Inheriting classes are responsible to implement those generic function.<br>
 * <br>
 * One may consider inheriting from {@link geotoolkit3d.tool.AbstractGestureTool} for an even more generic/crossplatform approach.<br>
 * @class geotoolkit3d.tool.AbstractTool
 * @extends geotoolkit.util.EventDispatcher
 * @param {Object} options The options
 * @param {HTMLElement} [options.domelement] The div element containing the canvas.
 * @param {geotoolkit3d.Plot} [options.plot] The plot
 * @param {string} [options.name] The tool name
 */
geotoolkit3d.tool.AbstractTool = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {Object} options The options
     * @param {string} [options.name] The tool name
     * @param {geotoolkit3d.Plot} [options.plot] The plot
     * @param {HTMLElement} [options.domelement] The div element containing the canvas.
     * @returns {geotoolkit3d.tool.AbstractTool} this
     */
    geotoolkit3d.tool.AbstractTool.prototype.setOptions = function(options){};
    /**
     * Event types
     * @enum
     * @readonly
     */
    geotoolkit3d.tool.AbstractTool.Events = {};
        /**
         * onContext
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onContext = "";
        /**
         * onMouseDown
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onMouseDown = "";
        /**
         * onMouseMove
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onMouseMove = "";
        /**
         * onMouseUp
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onMouseUp = "";
        /**
         * onMouseWheel
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onMouseWheel = "";
        /**
         * onTouchStart
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onTouchStart = "";
        /**
         * onTouchEnd
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onTouchEnd = "";
        /**
         * onTouchMove
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onTouchMove = "";
        /**
         * onDoubleClick
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onDoubleClick = "";
        /**
         * onKeyDown
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onKeyDown = "";
        /**
         * onKeyUp
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onKeyUp = "";
        /**
         * onPointerStart
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onPointerStart = "";
        /**
         * onPointerMove
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onPointerMove = "";
        /**
         * onPointerEnd
         * @type {string}
         */
        geotoolkit3d.tool.AbstractTool.Events.onPointerEnd = "";
    /**
     * This function allows tools to bind their events to the device support
     * @param {geotoolkit3d.tool.devicesupport.AbstractDeviceSupport} deviceSupport the type of device we are attaching to
     * @returns {geotoolkit3d.tool.AbstractTool}
     */
    geotoolkit3d.tool.AbstractTool.prototype.setup = function(deviceSupport){};
    /**
     * Returns the tool name.
     * @returns {string} The tool's name
     */
    geotoolkit3d.tool.AbstractTool.prototype.getName = function(){};
    /**
     * Called when a 'context' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onContext = function(event){};
    /**
     * Called when a 'mousedown' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onMouseDown = function(event){};
    /**
     * Called when a 'mousemove' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onMouseMove = function(event){};
    /**
     * Called when a 'mouseup' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onMouseUp = function(event){};
    /**
     * Called when a 'mouseout' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onMouseOut = function(event){};
    /**
     * Called when a 'mousewheel' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onMouseWheel = function(event){};
    /**
     * Called when a 'touchstart' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onTouchStart = function(event){};
    /**
     * Called when a 'touchend' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onTouchEnd = function(event){};
    /**
     * Called when a 'touchmove' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onTouchMove = function(event){};
    /**
     * Called when a 'doubleclick' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onDoubleClick = function(event){};
    /**
     * Called when a 'keydown' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onKeyDown = function(event){};
    /**
     * Called when a 'keyup' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractTool.prototype.onKeyUp = function(event){};
    /**
     * Disposes the tool
     */
    geotoolkit3d.tool.AbstractTool.prototype.dispose = function(){};

/**
 * A tool that convert classic device events to gesture-like calls.<br>
 * This tool inherits the 'device support' feature from AbstractTool and transforms the native events to a basic gesture mechanism.<br>
 * <br>
 * An 'armingkey' can be defined to limit when this tool operates.<br>
 * This tool will operate only if the defined key is pressed.<br>
 * <br>
 * It will call onDrag/onPinch/onSide/onTap/etc when the corresponding pattern is detected.<br>
 * Inheriting classes have to implement those functions.<br>
 * <br>
 * @class geotoolkit3d.tool.AbstractGestureTool
 * @augments geotoolkit3d.tool.AbstractTool
 *
 * @param {object} options The options
 * @param {object} [options.dragbutton=0] The button id for dragging
 * @param {object} [options.pinchbutton=1] The button id for pinching
 * @param {object} [options.slidebutton=2] The button id for sliding
 * @param {object} [options.dragtouchcount=1] The touch count to do a drag
 * @param {object} [options.pinchtouchcount=2] The touch count to do a pinch
 * @param {object} [options.slidetouchcount=3] The touch count to do a slide
 * @param {object} [options.radius=0] picking radius in pixels
 * @param {object} [options.doubletapdelay=250] The delay to trigger a doubleTap when using 'touch' based device (ms)
 * @param {object} [options.armingkey=null] The key that needs to be pressed to arm this tool, if not armed the tool won't operate. 'null' means that the tool is always armed.
 */
geotoolkit3d.tool.AbstractGestureTool = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {object} [options.dragbutton] The button id for dragging
     * @param {object} [options.pinchbutton] The button id for pinching
     * @param {object} [options.slidebutton] The button id for sliding
     * @param {object} [options.dragtouchcount] The touch count to do a drag
     * @param {object} [options.pinchtouchcount] The touch count to do a pinch
     * @param {object} [options.slidetouchcount] The touch count to do a slide
     * @param {object} [options.doubletapdelay] The delay to trigger a doubleTap when using 'touch' based device (ms)
     * @param {object} [options.radius] picking radius in pixels
     * @param {object} [options.armingkey] The key that needs to be pressed to arm this tool, if not armed the tool won't operate
     * @returns {geotoolkit3d.tool.AbstractGestureTool} this
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.setOptions = function(options){};
    /**
     * Called when a 'context' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onContext = function(event){};
    /**
     * Called when a 'mousedown' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onMouseDown = function(event){};
    /**
     * Called when a 'mousemove' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onMouseMove = function(event){};
    /**
     * Called when a 'mouseout' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onMouseOut = function(event){};
    /**
     * Called when a 'mouseup' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onMouseUp = function(event){};
    /**
     * Called when a 'doubleclick' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onDoubleClick = function(event){};
    /**
     * Called when a 'touchstart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onTouchStart = function(event){};
    /**
     * Called when a 'touchend' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onTouchEnd = function(event){};
    /**
     * Called when a 'touchmove' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onTouchMove = function(event){};
    /**
     * Called when a 'keydown' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onKeyDown = function(event){};
    /**
     * Called when a 'onVisibilityChanged' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onVisibilityChanged = function(event){};
    /**
     * Called when a 'keyup' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onKeyUp = function(event){};
    /**
     * Called when a 'onKeyStart' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onKeyStart = function(event){};
    /**
     * Called when a 'onKey' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onKey = function(event){};
    /**
     * Called when a 'onKeyEnd' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onKeyEnd = function(event){};
    /**
     * Called when a 'onVisibilityGained' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onVisibilityGained = function(event){};
    /**
     * Called when a 'onVisibilityLost' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onVisibilityLost = function(event){};
    /**
     * Called when a 'onCursorMove' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onCursorMove = function(event){};
    /**
     * Called when a 'onTap' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onTap = function(event){};
    /**
     * Called when a 'onDoubleTap' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onDoubleTap = function(event){};
    /**
     * Called when a 'onPinchStart' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onPinchStart = function(event){};
    /**
     * Called when a 'onPinch' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onPinch = function(event){};
    /**
     * Called when a 'onPinchEnd' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onPinchEnd = function(event){};
    /**
     * Called when a 'onDragStart' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onDragStart = function(event){};
    /**
     * Called when a 'onDrag' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onDrag = function(event){};
    /**
     * Called when a 'onDragEnd' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onDragEnd = function(event){};
    /**
     * Called when a 'onSlideStart' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onSlideStart = function(event){};
    /**
     * Called when a 'onSlide' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onSlide = function(event){};
    /**
     * Called when a 'onSlideEnd' event has occurred
     * @function
     * @abstract
     * @param {object} event the native event with plot coordinates added
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.onSlideEnd = function(event){};
    /**
     * Function to clean up the references from this tool.
     * @override
     */
    geotoolkit3d.tool.AbstractGestureTool.prototype.dispose = function(){};

/**
 * A tool that implements selection mechanism.<br>
 * <br>
 * This tool will perform a picking operation on click/tap using {@link geotoolkit3d.picking.RendererPicking}.<br>
 * Then it will notify the attached listeners about what has been picked.<br>
 * <br>
 * To be notified when a selection has occurred, one should add a callback using addSelectionListener().<br>
 * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
 * <br>
 * The selection tool can be configured to pick an area instead of a single pixel.<br>
 * In that case it may propagate a selection containing more than one object.<br>
 * @class geotoolkit3d.tool.SelectionTool
 * @augments geotoolkit3d.tool.AbstractGestureTool
 * @param {object} options See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
 * @param {number} [options.radius=0] The picking area radius in pixels (approximated by a rectangle during picking)
 * @param {boolean} [options.hover] setting to set selection on cursormove
 * @param {function} [options.filter] A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
 * @param {string} [options.name=selectiontool] tool name
 * status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
 */
geotoolkit3d.tool.SelectionTool = {};
    /**
     * Event types
     * @enum
     * @readonly
     */
    geotoolkit3d.tool.SelectionTool.Events = {};
        /**
         * onSelection
         * @type {string}
         */
        geotoolkit3d.tool.SelectionTool.Events.onSelection = "";
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
     * @param {number} [options.radius] The picking area radius in pixels (approximated by a rectangle during picking)
     * @param {boolean} [options.hover] setting to set selection on cursormove
     * @param {function} [options.filter] A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
     * @returns {geotoolkit3d.tool.SelectionTool}
     */
    geotoolkit3d.tool.SelectionTool.prototype.setOptions = function(options){};
    /**
     * Called when a 'onCursorMove' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onCursorMove = function(event){};
    /**
     * Called when a 'onTap' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onTap = function(event){};
    /**
     * onSelectionFunction
     * @param {Array.<object>} selection
     * @param {object} event
     */
    geotoolkit3d.tool.SelectionTool.prototype.onSelection = function(selection, event){};
    /**
     * Adds a listener that will be triggered each time this tool selection occurs.
     * @param {function} callback The function that will be called. Function parameters will be an array of selected objects3d and the browser event that triggered it
     * @deprecated use tool.on(geotoolkit3d.tool.SelectionTool.Events.onSelection, function)
     * @returns {geotoolkit3d.tool.SelectionTool} this
     */
    geotoolkit3d.tool.SelectionTool.prototype.addSelectionListener = function(callback){};
    /**
     * Removes a selection listener
     * @param {function} callback The callback to remove
     * @deprecated use tool.off(geotoolkit3d.tool.SelectionTool.Events.onSelection, function)
     * @returns {geotoolkit3d.tool.SelectionTool} this
     */
    geotoolkit3d.tool.SelectionTool.prototype.removeSelectionListener = function(callback){};
    /**
     * Called when a 'onKeyStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onKeyStart = function(event){};
    /**
     * Called when a 'onKey' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onKey = function(event){};
    /**
     * Called when a 'onKeyEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onKeyEnd = function(event){};
    /**
     * Called when a 'onDoubleTap' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onDoubleTap = function(event){};
    /**
     * Called when a 'onMouseWheel' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onMouseWheel = function(event){};
    /**
     * Called when a 'onPinchStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onPinchStart = function(event){};
    /**
     * Called when a 'onPinch' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onPinch = function(event){};
    /**
     * Called when a 'onPinchEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onPinchEnd = function(event){};
    /**
     * Called when a 'onDragStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onDragStart = function(event){};
    /**
     * Called when a 'onDrag' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onDrag = function(event){};
    /**
     * Called when a 'onDragEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onDragEnd = function(event){};
    /**
     * Called when a 'onSlideStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onSlideStart = function(event){};
    /**
     * Called when a 'onSlide' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onSlide = function(event){};
    /**
     * Called when a 'onSlideEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onSlideEnd = function(event){};
    /**
     * Called when a 'onVisibilityGained' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onVisibilityGained = function(event){};
    /**
     * Called when a 'onVisibilityLost' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.SelectionTool.prototype.onVisibilityLost = function(event){};

/**
 * A base class to implement custom tools that move objects into the scene.<br>
 * @class geotoolkit3d.tool.AbstractMoveTool
 * @augments geotoolkit3d.tool.AbstractGestureTool
 *
 * @param {object} options See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
 * @param {THREE.Object3D} [options.object] The object to be moved
 * @param {number} [options.armingkey=ctrl_keycode] The keycode to arm this tool, see {@link geotoolkit3d.tool.AbstractGestureTool}
 * @param {boolean} [options.pickenabled=true] True if this tool should permit selection of the object to move
 */
geotoolkit3d.tool.AbstractMoveTool = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {THREE.Object3D} [options.object] The object to be moved
     * @param {boolean} [options.enabled] The status of this tool
     * @param {boolean} [options.pickenabled] True if this tool should also handle selection (picking) of theobject to move
     * @returns {geotoolkit3d.tool.AbstractMoveTool} this
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.setOptions = function(options){};
    /**
     * Called when a 'onPick' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onPick = function(event){};
    /**
     * Move status enumerator.<br>
     * <br>
     * This enum is used to describe the state of the tool.<br>
     * @enum
     * @readonly
     */
    geotoolkit3d.tool.AbstractMoveTool.Status = {};
        /**
         * Object selected
         * @type {string}
         */
        geotoolkit3d.tool.AbstractMoveTool.Status.Selected = "";
        /**
         * Move started
         * @type {string}
         */
        geotoolkit3d.tool.AbstractMoveTool.Status.Start = "";
        /**
         * Move occurred
         * @type {string}
         */
        geotoolkit3d.tool.AbstractMoveTool.Status.Move = "";
        /**
         * Move ended
         * @type {string}
         */
        geotoolkit3d.tool.AbstractMoveTool.Status.End = "";
    /**
     * Adds a listener that will be triggered each time this tool 'move' occurs.
     * @param {function} callback The function that will be called
     * @returns {geotoolkit3d.tool.AbstractMoveTool} this
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.addMoveListener = function(callback){};
    /**
     * Removes a listener
     * @param {function} callback The callback to remove
     * @returns {geotoolkit3d.tool.AbstractMoveTool} this
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.removeSelectionListener = function(callback){};
    /**
     * Called when a 'onKeyEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onKeyEnd = function(event){};
    /**
     * Called when a 'onDragStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onDragStart = function(event){};
    /**
     * Called when a 'onDrag' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onDrag = function(event){};
    /**
     * Called when a 'onDragEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onDragEnd = function(event){};
    /**
     * Called when a 'onTap' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onTap = function(event){};
    /**
     * Called when a 'onCursorMove' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onCursorMove = function(event){};
    /**
     * Called when a 'onKeyStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onKeyStart = function(event){};
    /**
     * Called when a 'onKey' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onKey = function(event){};
    /**
     * Called when a 'onDoubleTap' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onDoubleTap = function(event){};
    /**
     * Called when a 'onMouseWheel' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onMouseWheel = function(event){};
    /**
     * Called when a 'onPinchStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onPinchStart = function(event){};
    /**
     * Called when a 'onPinch' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onPinch = function(event){};
    /**
     * Called when a 'onPinchEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onPinchEnd = function(event){};
    /**
     * Called when a 'onSlideStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onSlideStart = function(event){};
    /**
     * Called when a 'onSlide' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onSlide = function(event){};
    /**
     * Called when a 'onSlideEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onSlideEnd = function(event){};
    /**
     * Called when a 'onVisibilityGained' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onVisibilityGained = function(event){};
    /**
     * Called when a 'onVisibilityLost' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.onVisibilityLost = function(event){};
    /**
     * @inheritdoc
     */
    geotoolkit3d.tool.AbstractMoveTool.prototype.dispose = function(){};

/**
 * This class offers the ability to drag an object across the scene.<br>
 * <br>
 * It internally uses a plane facing the camera to compute the movement to be applied to the object.<br>
 * Which mean that the object will move in a 2D plane facing the camera.<br>
 *<br>
 * The movement operation applied to the object can be adjusted to fit a specific need by changing the adjust-function.<br>
 *<br>
 * @class geotoolkit3d.tool.PlanarMoveTool
 * @augments geotoolkit3d.tool.AbstractMoveTool
 * @param {object} options The options
 * @param {?THREE.Object3D} options.object The object to be moved
 * @param {number} [options.armingkey=ctrl_keycode] The keycode to arm this tool (see AbstractMoveTool)
 * @param {function} [options.filter] A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
 * @param {boolean} [options.pickenabled] True if this tool should permit selection of the object to move
 * @param {string} [options.name=planarmovetool] tool name
 */
geotoolkit3d.tool.PlanarMoveTool = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {THREE.Object3D} [options.object] The object to be moved
     * @param {boolean} [options.enabled] The status of this tool
     * @param {boolean} [options.pickenabled] True if this tool should also handle selection (picking)
     * @param {THREE.Vector3} [options.pickingplanecenter] The center point of the plane used to compute displacement
     * @param {function} [options.filter] A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
     * @returns {geotoolkit3d.tool.PlanarMoveTool} this
     */
    geotoolkit3d.tool.PlanarMoveTool.prototype.setOptions = function(options){};
    /**
     * Sets the function to use in order to control the displacement to be applied.<br>
     * <br>
     * Can be used to snap the object to a given step or to limit maximum/minimum position.<br>
     * Function parameters are:<br>
     * {THREE.Object3D} object The object being moved<br>
     * {THREE.Vector3} move The displacement to adjust<br>
     * @param {function} func The function to use
     * @returns {geotoolkit3d.tool.PlanarMoveTool} this
     */
    geotoolkit3d.tool.PlanarMoveTool.prototype.setAdjustFunction = function(func){};

/**
 * This class offers the ability to drag an object across the scene.<br>
 * <br>
 * Internally it computes the distance dragged considering the Plot as a two dimension slider (horizontal/vertical).<br>
 * Calling code should provide the function that convert this 2D displacement in an actual 'move'.<br>
 *
 * @class geotoolkit3d.tool.SliderMoveTool
 * @augments geotoolkit3d.tool.AbstractMoveTool
 * @param {object} options See geotoolkit3d.tool.AbstractMoveTool for inherited options
 * @param {string} [options.name=SliderMoveTool] tool name
 */
geotoolkit3d.tool.SliderMoveTool = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options See geotoolkit3d.tool.AbstractMoveTool for inherited options
     * @param {THREE.Vector2} [options.initialpoint] The starting point for displacement in device coordinates
     * @returns {geotoolkit3d.tool.SliderMoveTool} this
     */
    geotoolkit3d.tool.SliderMoveTool.prototype.setOptions = function(options){};
    /**
     * Sets the function that should apply the computed 'move operation' to the targeted object.<br>
     * <br>
     * Function parameters are:<br>
     * {THREE.Object3D} object The object being moved<br>
     * {THREE.Vector2} move The displacement in screen space to apply<br>
     * {THREE.Vector2} initialPoint The initial point<br>
     * Function should return 'true' to reset the reference point used for distance calculation<br>
     * @param {function} func The function
     * @returns {geotoolkit3d.tool.SliderMoveTool} this
     */
    geotoolkit3d.tool.SliderMoveTool.prototype.setMoveFunction = function(func){};
    /**
     * Function to clean up the references from this tool.
     * @override
     */
    geotoolkit3d.tool.SliderMoveTool.prototype.dispose = function(){};

/**
 * A tool that implements selection mechanism.<br>
 * <br>
 * This tool will perform a picking operation on click/tap using {@link geotoolkit3d.picking.RendererPicking}.<br>
 * Then it will notify the attached listeners about what has been picked.<br>
 * <br>
 * To be notified when a selection has occurred, one should add a callback using addSelectionListener().<br>
 * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
 * <br>
 * The selection tool can be configured to pick an area instead of a single pixel.<br>
 * In that case it may propagate a selection containing more than one object.<br>
 * @class geotoolkit3d.tool.MeasuringTool
 * @augments geotoolkit3d.tool.AbstractGestureTool
 * @param {object} options See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
 * @param {number} [options.radius=0] The picking area radius in pixels (approximated by a rectangle during picking)
 * @param {string} [options.name=measuretool] tool name
 */
geotoolkit3d.tool.MeasuringTool = {};
    /**
     * Event types
     * @enum
     * @readonly
     */
    geotoolkit3d.tool.MeasuringTool.Events = {};
        /**
         * DistanceChanged
         * @type {string}
         */
        geotoolkit3d.tool.MeasuringTool.Events.DistanceChanged = "";
    /**
     * sets the visibility of the children objects
     * @param {boolean} visible
     * @returns {geotoolkit3d.tool.MeasuringTool}
     */
    geotoolkit3d.tool.MeasuringTool.prototype.setChildrenVisibilty = function(visible){};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
     * @param {number} [options.radius] The picking area radius in pixels (approximated by a rectangle during picking)
     * @returns {geotoolkit3d.tool.MeasuringTool}
     */
    geotoolkit3d.tool.MeasuringTool.prototype.setOptions = function(options){};
    /**
     * Called when a 'onCursorMove' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onCursorMove = function(event){};
    /**
     * Called when a 'onTap' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onTap = function(event){};
    /**
     * Called when a 'mouseup' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onMouseUp = function(event){};
    /**
     * Function to get the current distance of the two points from the tool
     * @function
     * @returns {number} distance between the two points
     */
    geotoolkit3d.tool.MeasuringTool.prototype.getDistance = function(){};
    /**
     * Called when a 'onKeyStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onKeyStart = function(event){};
    /**
     * Called when a 'onKey' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onKey = function(event){};
    /**
     * Called when a 'onKeyEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onKeyEnd = function(event){};
    /**
     * Called when a 'onDoubleTap' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onDoubleTap = function(event){};
    /**
     * Called when a 'onMouseWheel' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onMouseWheel = function(event){};
    /**
     * Called when a 'onPinchStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onPinchStart = function(event){};
    /**
     * Called when a 'onPinch' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onPinch = function(event){};
    /**
     * Called when a 'onPinchEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onPinchEnd = function(event){};
    /**
     * Called when a 'onDragStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onDragStart = function(event){};
    /**
     * Called when a 'onDrag' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onDrag = function(event){};
    /**
     * Called when a 'onDragEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onDragEnd = function(event){};
    /**
     * Called when a 'onSlideStart' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onSlideStart = function(event){};
    /**
     * Called when a 'onSlide' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onSlide = function(event){};
    /**
     * Called when a 'onSlideEnd' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onSlideEnd = function(event){};
    /**
     * Called when a 'onVisibilityGained' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onVisibilityGained = function(event){};
    /**
     * Called when a 'onVisibilityLost' event has occurred
     * @function
     * @param {object} event the native event with plot coordinates added
     * @override
     */
    geotoolkit3d.tool.MeasuringTool.prototype.onVisibilityLost = function(event){};

/**
 * A tool providing cursor representation in 3D.<br>
 * This tool will listen to cursor events and notify the internal cursor representation.<br>
 *
 * @class geotoolkit3d.tool.cursor.CursorTool
 * @augments geotoolkit3d.tool.AbstractGestureTool
 *
 * @param {object} options See geotoolkit3d.tool.AbstractGestureTool for inherited options
 * @param {geotoolkit3d.tool.cursor.AbstractCursor} [options.cursor=geotoolkit3d.tool.cursor.CrossCursor] The cursor to update on mouse move
 * @param {string} [options.name=CursorTool] tool name
 */
geotoolkit3d.tool.cursor.CursorTool = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {boolean} [options.enabled] The status of this tool
     * @param {geotoolkit3d.tool.cursor.AbstractCursor} [options.cursor=geotoolkit3d.tool.cursor.CrossCursor] The cursor to update on mouse move
     * @returns {geotoolkit3d.tool.cursor.CursorTool} this
     */
    geotoolkit3d.tool.cursor.CursorTool.prototype.setOptions = function(options){};
    /**
     * Moves the cursor at the given position.<br>
     * This does not fire an event.<br>
     * @param {THREE.Vector3|null} position The new position or null to hide the cursor
     */
    geotoolkit3d.tool.cursor.CursorTool.prototype.moveCursor = function(position){};
    /**
     * Adds a listener that will be triggered each time this tool 'move' occurs.
     * @param {function} callback The function that will be called
     * @returns {geotoolkit3d.tool.cursor.CursorTool} this
     */
    geotoolkit3d.tool.cursor.CursorTool.prototype.addMoveListener = function(callback){};
    /**
     * Removes a listener
     * @param {function} callback The listener callback
     * @returns {geotoolkit3d.tool.cursor.CursorTool} this
     */
    geotoolkit3d.tool.cursor.CursorTool.prototype.removeMoveListener = function(callback){};

/**
 * Abstract class for 3D cursor shapes.<br>
 * <br>
 * Subclasses are responsible of implementing the actual rendering by adding a Mesh/Line to this object3d.<br>
 * The setCursorPosition will be called whenever the cursor is moved by the user.<br>
 * <br>
 * @class geotoolkit3d.tool.cursor.AbstractCursor
 * @augments geotoolkit3d.scene.Object3D
 *
 */
geotoolkit3d.tool.cursor.AbstractCursor = {};
    /**
     * Sets the cursor position in world coordinates.<br>
     * This can be called manually to move the cursor programmatically.<br>
     * @function
     * @abstract
     * @param {THREE.Vector3} position The new cursor position
     * @returns {geotoolkit3d.tool.cursor.AbstractCursor} this
     */
    geotoolkit3d.tool.cursor.AbstractCursor.prototype.setCursorPosition = function(position){};

/**
 * A small 3D cross representation of the cursor
 *
 * @class geotoolkit3d.tool.cursor.CrossCursor
 * @augments geotoolkit3d.tool.cursor.AbstractCursor
 *
 * @param {object} options See geotoolkit3d.scene.Object3D for inherited options
 * @param {geotoolkit.attributes.LineStyle} [options.linestyle='red'] The linestyle for the cursor
 * @param {number} [options.cursorsize=5] The cursor size in device
 */
geotoolkit3d.tool.cursor.CrossCursor = {};
    /**
     * Set the cursor position in world coordinates
     * @param {THREE.Vector3} position The new cursor position
     * @returns {geotoolkit3d.tool.cursor.CrossCursor} this
     */
    geotoolkit3d.tool.cursor.CrossCursor.prototype.setCursorPosition = function(position){};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {geotoolkit.attributes.LineStyle} [options.linestyle] The linestyle for the cursor
     * @param {number} [options.cursorsize] The cursor size in device
     * @returns {geotoolkit3d.tool.cursor.CrossCursor} this
     */
    geotoolkit3d.tool.cursor.CrossCursor.prototype.setOptions = function(options){};

/**
 * A crosshair representation of the cursor
 *
 * @class geotoolkit3d.tool.cursor.CrossHairCursor
 * @augments geotoolkit3d.tool.cursor.AbstractCursor
 *
 * @param {object} options See geotoolkit3d.scene.Object3D for inherited options
 * @param {geotoolkit.attributes.LineStyle} [options.visiblelinestyle='red'] The linestyle for the visible part of the cursor
 * @param {geotoolkit.attributes.LineStyle} [options.hiddenlinestyle='red, dash'] The linestyle for the hidden part of the cursor
 * @param {THREE.Box3} options.limits The limiting bounding box for the crosshair, used to compute the line length
 */
geotoolkit3d.tool.cursor.CrossHairCursor = {};
    /**
     * Set the cursor position in world coordinates
     * @param {THREE.Vector3} position The new cursor position
     * @returns {geotoolkit3d.tool.cursor.CrossHairCursor} this
     */
    geotoolkit3d.tool.cursor.CrossHairCursor.prototype.setCursorPosition = function(position){};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {geotoolkit.attributes.LineStyle} [options.linestyle] The linestyle for the cursor
     * @returns {geotoolkit3d.tool.cursor.CrossHairCursor} this
     */
    geotoolkit3d.tool.cursor.CrossHairCursor.prototype.setOptions = function(options){};

/**
 * A cross hair 2D representation of the cursor
 *
 * @class geotoolkit3d.tool.cursor.CrossHair2DCursor
 * @augments geotoolkit3d.tool.cursor.AbstractCursor
 *
 * @param {object} options See geotoolkit3d.scene.Object3D for inherited options
 * @param {geotoolkit.attributes.LineStyle} [options.linestyle='red'] The linestyle for the cursor
 * @param {THREE.Box3} options.limits The limiting bounding box for the crosshair, used to compute the line length
 * @param {geotoolkit3d.scene.grid.Grid.Mode} [options.mode] The display strategy to show/hide lines depending on camera position
 */
geotoolkit3d.tool.cursor.CrossHair2DCursor = {};
    /**
     * Set the cursor position in world coordinates
     * @param {THREE.Vector3} position The new cursor position
     * @returns {geotoolkit3d.tool.cursor.CrossHair2DCursor} this
     */
    geotoolkit3d.tool.cursor.CrossHair2DCursor.prototype.setCursorPosition = function(position){};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {geotoolkit.attributes.LineStyle} [options.linestyle] The linestyle for the cursor
     * @returns {geotoolkit3d.tool.cursor.CrossHair2DCursor} this
     */
    geotoolkit3d.tool.cursor.CrossHair2DCursor.prototype.setOptions = function(options){};

/**
 * A composite cursor that can contain several cursors.<br>
 * <br>
 * The main advantage of using CompositeCursor instead of having several CursorTool is that is avoid doing a Picking operation for each sub cursor.
 *
 * @class geotoolkit3d.tool.cursor.CompositeCursor
 * @augments geotoolkit3d.tool.cursor.AbstractCursor
 *
 * @param {object} options See geotoolkit3d.scene.Object3D for inherited options
 * @param {geotoolkit3d.tool.cursor.AbstractCursor[]} options.cursors The cursors to add
 */
geotoolkit3d.tool.cursor.CompositeCursor = {};
    /**
     * Set the cursor position in world coordinates
     * @param {THREE.Vector3} position The new cursor position
     * @returns {geotoolkit3d.tool.cursor.CompositeCursor} this
     */
    geotoolkit3d.tool.cursor.CompositeCursor.prototype.setCursorPosition = function(position){};

/**
 * A XYCoordinates coordinates object.<br>
 * <br>
 * This object holds the information about the XY coordinates of a seismic volume.<br>
 * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the XY coordinates.<br>
 * @class geotoolkit3d.transformation.XYCoordinates
 */
geotoolkit3d.transformation.XYCoordinates = {};
    /**
     * Initialize XYCoordinates using given json.<br>
     * <br>
     * Only 3 corners out of 4 are required.<br>
     * @param {object} xy The xy json
     * @param {number} [xy.x0] The first point x value
     * @param {number} [xy.y0] The first point y value
     * @param {number} [xy.x1] The second point x value
     * @param {number} [xy.y1] The second point y value
     * @param {number} [xy.x2] The third point x value
     * @param {number} [xy.y2] The third point y value
     * @param {number} [xy.x3] The fourth point x value
     * @param {number} [xy.y3] The fourth point y value
     * @param {number} [xy.z0=0] The start depth
     * @param {number} [xy.z1=xy.z0] The end depth
     * @returns {geotoolkit3d.transformation.XYCoordinates} this
     */
    geotoolkit3d.transformation.XYCoordinates.prototype.fromJSONXY = function(xy){};
    /**
     * Initialize XYCoordinates using given json.<br>
     * <br>
     * Only 3 corners out of 4 are required.<br>
     * @param {object} xy
     * @param {THREE.Vector2} [xy.p0] The first point
     * @param {THREE.Vector2} [xy.p1] The second point
     * @param {THREE.Vector2} [xy.p2] The third point
     * @param {THREE.Vector2} [xy.p3] The fourth point
     * @param {number} [xy.z0=0] The first z value
     * @param {number} [xy.z1=xy.z0] The last z value
     * @returns {geotoolkit3d.transformation.XYCoordinates} this
     */
    geotoolkit3d.transformation.XYCoordinates.prototype.fromJSONPoints = function(xy){};
    /**
     * Returns the bounding box
     * @returns {THREE.Box3} The xyz coordinates as a box 3d
     */
    geotoolkit3d.transformation.XYCoordinates.prototype.asBox3 = function(){};
    /**
     * Returns the bounding box with z being elevation
     * @returns {THREE.Box3} The xyz coordinates as a box 3d
     */
    geotoolkit3d.transformation.XYCoordinates.prototype.asElevationBox3 = function(){};
    /**
     * Returns if the point is inside the box
     * @param {THREE.Vector3} point the point to check if it is inside the box
     * @returns {boolean} true if the point is inside the box
     */
    geotoolkit3d.transformation.XYCoordinates.prototype.isPointInside = function(point){};

/**
 * IndexCoordinates coordinates object.<br>
 * <br>
 * This object holds the information about the index coordinates of a seismic volume.<br>
 * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the index coordinates.<br>
 * @augments geotoolkit3d.transformation.XYCoordinates
 * @class geotoolkit3d.transformation.IndexCoordinates
 *
 */
geotoolkit3d.transformation.IndexCoordinates = {};
    /**
     * Gets the sample rate
     * @returns {number} The sample rate
     */
    geotoolkit3d.transformation.IndexCoordinates.prototype.getSampleRate = function(){};
    /**
     * Gets the I step
     * @returns {number} The sample rate
     */
    geotoolkit3d.transformation.IndexCoordinates.prototype.getIStep = function(){};
    /**
     * Gets the J step
     * @returns {number} The sample rate
     */
    geotoolkit3d.transformation.IndexCoordinates.prototype.getJStep = function(){};
    /**
     * Initialize index using given json.<br>
     * <br>
     * Only 3 corners out of 4 are required.<br>
     * The third dimension (z) can be specified either using z0&z1&samplerate or z0&samplecount&samplerate.<br>
     * @param {object} index
     * @param {number} [index.i0]
     * @param {number} [index.j0]
     * @param {number} [index.i1]
     * @param {number} [index.j1]
     * @param {number} [index.i2]
     * @param {number} [index.j2]
     * @param {number} [index.i3]
     * @param {number} [index.j3]
     * @param {number} [index.z0=0]
     * @param {number} [index.z1=index.z0 + index.samplerate*index.samplecount]
     * @param {number} [index.samplerate=1]
     * @param {number} [index.samplecount=(index.z1-index.z0)/index.samplerate]
     * @deprecated since 2.3 use fromJsonIndex instead
     * @returns {geotoolkit3d.transformation.IndexCoordinates} this
     */
    geotoolkit3d.transformation.IndexCoordinates.prototype.fromJSONCornerPoints = function(index){};
    /**
     * Initialize index using given json.<br>
     * <br>
     * The third dimension (z) can be specified either using z0&z1&samplerate or z0&samplecount&samplerate<br>
     * @param {object} index The json
     * @param {number} [index.i0] The starting 'i' index value
     * @param {number} [index.icount] The 'i' index count
     * @param {number} [index.istep] The 'i' index step
     * @param {number} [index.j0] The starting 'j' index value
     * @param {number} [index.jcount] The 'j' index count
     * @param {number} [index.jstep] The 'j' index step
     * @param {number} [index.z0] The starting 'z' index value
     * @param {number} [index.z1=index.z0 + index.samplerate*index.samplecount] The last 'z' index value
     * @param {number} [index.samplerate=1] The 'z' index step
     * @param {number} [index.samplecount=(index.z1-index.z0)/index.samplerate] The 'z' index count
     * @returns {geotoolkit3d.transformation.IndexCoordinates} this
     */
    geotoolkit3d.transformation.IndexCoordinates.prototype.fromJSONIndex = function(index){};

/**
 * Utility class offering various functions to manipulate attributes and threejs materials.<br>
 * <br>
 *
 * @class geotoolkit3d.util.Attributes
 */
geotoolkit3d.util.Attributes = {};
    /**
     * Builds a line material for the given linestyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     * <br>
     * Note that supported patterns are only the simple regular ones.<br>
     * Per THREEJS requirements you will also have to call geometry.computeLineDistances() on your THREE.Geometry object.<br>
     * <br>
     * Note that style.width is not supported on windows-webgl.<br>
     * See:<br>
     * {@link http://alteredqualia.com/tmp/webgl-linewidth-test/}<br>
     * {@link http://en.wikipedia.org/wiki/WebGL#Desktop_browsers}<br>
     * {@link https://code.google.com/p/angleproject/issues/detail?id=334}<br>
     * <br>
     * @param {geotoolkit.attributes.LineStyle} style The style to use to create a material
     * @returns {THREE.LineBasicMaterial|THREE.LineDashedMaterial} The created material
     */
    geotoolkit3d.util.Attributes.createLineMaterial = function(style){};
    /**
     * Build a mesh material (Lambertian reflectance) for the given fillstyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     *
     * @param {geotoolkit.attributes.FillStyle} style The style to build a material for
     * @returns {THREE.MeshLambertMaterial} The created material
     */
    geotoolkit3d.util.Attributes.createMeshMaterial = function(style){};
    /**
     * Build a mesh material (Phong reflectance) for the given fillstyle.<br>
     * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
     *
     * @param {geotoolkit.attributes.FillStyle} style The style to build a material for
     * @returns {THREE.MeshPhongMaterial} The created material
     */
    geotoolkit3d.util.Attributes.createPhongMeshMaterial = function(style){};
    /**
     * Convert a color coded as a css-color to a THREE color.<br>
     * @param {string} cssColor The color in css format
     * @returns {object} A json containing the converted color and the corresponding opacity
     */
    geotoolkit3d.util.Attributes.getThreeColor = function(cssColor){};
    /**
     * Updates a mesh material (Lambert) for the given fillstyle.<br>
     *
     * @param {THREE.MeshLambertMaterial} material The material to update
     * @param {geotoolkit.attributes.FillStyle} style The style to use to update the material
     * @returns {THREE.MeshLambertMaterial} The updated material
     */
    geotoolkit3d.util.Attributes.updateMeshMaterial = function(material, style){};

/**
 * A Plot with 3D capabilities.<br>
 * Unlike a geotoolkit 2D plot, this plot requires a DIV element to be passed and not a canvas.<br>
 *<br>
 * The plot is internally structured as a SceneGraph using THREE.Scene.<br>
 * It uses a camera system to represent user's eye location in 3D space.<br>
 * This camera position can be moved anywhere in the plot and can look in any direction (although controller are encouraged to limit this freedom to ensure meaningful displays)<br>
 * The camera type and option can be configured at creation or on the fly using setOptions().<br>
 *<br>
 * To increase rendering accuracy the plot will try to compute ideal near/far planes positions and simplify transformation matrices.<br>
 * These mechanism relies on the fact that the plot can compute its own modellimits and that those limits are reasonably small.<br>
 * The rendering accuracy might suffer from modellimits too big because of GPU floating point computing accuracy.<br>
 <br>
 * To render its content the plot a render cycle made of the following steps:<br>
 * <ul>
 * <li>Call updateObject on <b>all</b> nodes: Offers a chance to each node to update its status before rendering occurs. This should not trigger any invalidation event though.</li>
 * <li>Call prepareRender: Simplifies transformation matrices, move near/far planes to increase accuracy.</li>
 * <li>Call beforeRender on <b>visible</b> nodes. This can be used to update nodes 'on the fly' in the render pass. However be careful when overriding this function as its impact heavily the rendering logic.</li>
 * <li>Render: The WebGLRenderer traverses the scene, rendering node using WebGL (all GL operations occur at this stage).</li>
 * <li>Call finishRender: Restores the matrices, revert near/far planes.</li>
 * </ul>
 *<br>
 * The updateObject phase differs from beforeRender as it is executed before the plot's matrices/transformation have been simplified&optimized.<br>
 * Which means that it its implementation modifies a transformation it will be taken into account during this render pass for the simplification step.<br>
 * However beforeRender is executed after the simplification, so any modification done in this function will be rendered but will not be used for simplification.<br>
 * Also, beforeRender expose a bit more of the internal plot logic and usage of those elements that are not part of the public API should be done with caution.<br>
 * Generally, updateObject is used to implement application level changes.<br>
 * And beforeRender is generally used to execute low level operations like GPU resource loading and management.<br>
 *<br>
 * The plot also exposes some rendering options like anti-aliasing, clear-color or preferred GPU precision.<br>
 * Some of them cannot be changed on the fly though like the transparency of the background.<br>
 *<br>
 * A notification system using EventDispatcher exposes the events occurring in the plot (object added, removed, invalidate, camera changes, etc).<br>
 * One could listen to events occurring on any node of the plot by listening to the Plot's events.<br>
 * Note that you can also send custom events from your nodes to implement your application's logic.<br>
 * See geotoolkit3d.Event.Type for the builtin events.<br>
 *<br>
 * When an event is fired and caught by the plot, it marks itself as dirty.<br>
 * Whenever the next renderCycle occurs (based on requestanimationframe), this flag will be checked.<br>
 * If it's true then a render cycle will occur, otherwise the plot will hibernate until the next requestanimationframe lands.<br>
 * That's why one may need to call manually invalidateObject() on a node after modifying it through direct access (like position, scale, rotation, etc).<br>
 * It will flag the plot as dirty (through the event notification system), resulting in a render.<br>
 * Note that because the rendering is asynchronous, during invalidate several time in a row will trigger only one render.<br>
 *<br>
 * The plot also offers some useful features like builtin lighting (ambient light and camera headlight) and global scale.<br>
 * Those options can be enabled/disabled and configured through the setOptions().<br>
 *<br>
 * Like a geotoolkit widget, the plot uses a Tool system to catch, process and dispatch user input. (See {@link geotoolkit3d.tool.AbstractTool}).<br>
 * One of those tools is the controller, it's a special tool that allow the user to manipulate the camera using an input device (mouse, touch screen, ...).<br>
 *<br>
 * The plot will also have a compass added to it (as an overlay).<br>
 * This compass can be configured/changed and also replaced by a custom one.<br>
 *<br>
 * @class geotoolkit3d.Plot
 * @augments geotoolkit.util.EventDispatcher
 * @param {Object} options The plot options
 * @param {HTMLElement} [options.container] The div element in which the canvas will be created and added (this or options.canvas need to be set)
 * @param {Object} [options.canvas] Canvas for the plot to render to (this or options.container need to be set)
 * @param {THREE.Vector3} [options.translation = new THREE.Vector3(0,0,0)] This position becomes the effective origin for the scene for
 * scaling purposes.
 * @param {boolean} [options.autoupdatemodellimits=true] True to let the plot update the modellimits when an object is inserted/removed into the scene. If an object is moved outside of the current modellimits you can manually call plot.updateModelLimits()
 * @param {THREE.Box3} [options.modellimits=null] The modellimits mandatory if autoupdatemodellimits is not enabled. Must contain the whole scene and it's center should be close to the area of interest
 * @param {THREE.Vector3} [options.scale=new THREE.Vector3(1, 1, 1)] The global scale to be applied to the scene graph
 * @param {Object} [options.renderer] The renderer configuration
 * @param {Object} [options.renderer.parameters={antialias:true, 'precision':'highp'}] The renderer configuration. See ThreeJS documentation
 * @param {THREE.Color} [options.renderer.clearcolor='black'] The renderer clearcolor color
 * @param {number} [options.renderer.clearcoloralpha=1] The renderer clearcolor alpha value (0,1)
 * @param {Object} [options.camera] The camera options
 * @param {geotoolkit3d.Plot.CameraType} [options.camera.type=geotoolkit3d.Plot.CameraType.Perspective] The camera type
 * @param {THREE.Vector3} [options.camera.position=new THREE.Vector3(0, -500, 500)] The location of the camera in the scene
 * @param {THREE.Vector3} [options.camera.lookat=new THREE.Vector3(0, 0, 0)}] The coordinates of the point the camera will look at
 * @param {number} [options.camera.fov=50] The field-of-view angle in degrees (applies only to perspective camera)
 * @param {number} [options.camera.near=auto] The frustum near clipping plane, the 'auto' mode let the plot compute the ideal planes that fit the current modellimits and provide the best accuracy
 * @param {number} [options.camera.far=auto] The frustum near clipping plane, the 'auto' mode let the plot compute the ideal planes that fit the current modellimits and provide the best accuracy
 * @param {number} [options.camera.minnear=1] when set to Auto clipping planes, this is the minimum value that will be set on the near plane
 * @param {number} [options.camera.minfar=100] when set to Auto clipping planes, this is the minimum value that will be set on the far plane
 * @param {number} [options.camera.nearfarscale=null] this will adjust the near plane to stay within this scale of the far (0 to disable)
 * @param {Object} [options.camera.controller] The camera controller configuration
 * @param {geotoolkit3d.Plot.OrthographicResizeMode} [options.camera.orthoresize] The way a plot handles resize when in Orthographic mode
 * @param {boolean} [options.camera.movewithscale=false] moves the camera in world coordinates to maintain its location in user coordinates when a scale is applied to the plot
 * @param {geotoolkit3d.Plot.CameraControllerType|function} [options.camera.controller.type=geotoolkit3d.Plot.CameraControllerType.Orbit] The controller to be used to change the camera location.
 * @param {Object} [options.camera.controller.options] The camera controller's options
 * @param {boolean} [options.ambientlighting] Ambient lighting options
 * @param {boolean} [options.ambientlighting.enabled=true] Determines if the ambient light is enabled
 * @param {string} [options.ambientlighting.color="#1c1c1c"] The color of the ambient light.
 * @param {boolean} [options.cameralighting] The camera lighting options
 * @param {boolean} [options.cameralighting.enabled=true] The color of the camera light.
 * @param {string} [options.cameralighting.color="white"] The color of the camera light.
 * @param {string} [options.cameralighting.intensity="1"] The intensity of the camera light.
 * @param {Object} [options.compass] The default compass options.
 * @param {Object} [options.compass.container=created] An optional container for the default compass, if not specified one will be created. Note that in order to be correctly positioned, this container requires the given container to have a 'position' set.
 * @param {Object} [options.compass.canvas] An optional canvas to render the compass to
 * @param {Object} [options.compass.enabled=true] flag to create the compass canvas.
 * @throws Will throw an error if the browser does not support WebGL
 */
geotoolkit3d.Plot = {};
    /**
     * Enum of builtin camera types.<br>
     * Each Camera has its own projection algorithm.<br>
     * @readonly
     * @enum
     */
    geotoolkit3d.Plot.CameraType = {};
        /**
         * Camera will be using a perspective projection
         * @type {string}
         */
        geotoolkit3d.Plot.CameraType.Perspective = "";
        /**
         * Camera will be using an orthographic projection
         * @type {string}
         */
        geotoolkit3d.Plot.CameraType.Orthographic = "";
    /**
     * Enum of ways to have the orthographic camera resize<br>
     * @readonly
     * @enum
     */
    geotoolkit3d.Plot.OrthographicResizeMode = {};
        /**
         * Cameras view port will not be modified <br>
         * @type {string}
         */
        geotoolkit3d.Plot.OrthographicResizeMode.None = "";
        /**
         * Cameras view port will try to maintain the current view scale<br>
         * scene will keep the view but cut off space to maintain view scale.
         * @type {string}
         */
        geotoolkit3d.Plot.OrthographicResizeMode.MaintainScale = "";
    /**
     * Enum of builtin controller types.<br>
     * To provide your own controller simply pass the constructor function/class to the setOption instead of one of the enum value.<br>
     * <br>
     * This constructor will be called with this json:<br>
     * <pre>
     * {
     * 'camera': The camera object,
     * 'plot': This plot,
     * 'position': The initial/current position,
     * 'lookat': The initial/current lookat
     * }</pre>
     * @readonly
     * @enum
     */
    geotoolkit3d.Plot.CameraControllerType = {};
        /**
         * Moves the camera so that it revolves around a given point.
         * @type {string}
         */
        geotoolkit3d.Plot.CameraControllerType.Orbit = "";
        /**
         * Behaves like a trackball, the 3D scene being the ball.
         * @type {string}
         */
        geotoolkit3d.Plot.CameraControllerType.TrackBall = "";
        /**
         * Moves like a first person camera - commonly referred to as FPS controllers
         * @type {string}
         */
        geotoolkit3d.Plot.CameraControllerType.FirstPerson = "";
        /**
         * No interactive controller.
         * @type {string}
         */
        geotoolkit3d.Plot.CameraControllerType.None = "";
    /**
     * Converts user coordinates to world coordinates in place (modifies the given object).<br>
     *<br>
     * User coordinates are world coordinates without global scaling applies.<br>
     * Use #setOptions({ scale: ... } to change the global scaling.<br>
     *<br>
     * @param {THREE.Vector3} vector3 Source AND target vector3
     * @returns {THREE.Vector3} The converted coordinates
     */
    geotoolkit3d.Plot.prototype.rootScale = function(vector3){};
    /**
     * Converts world coordinates to user coordinates in place (modifies the given object).<br>
     *<br>
     * User coordinates are world coordinates without global scaling applies.<br>
     * Use #setOptions({ scale: ... } to change the global scaling.<br>
     *<br>
     * @param {THREE.Vector3} vector3 Source AND target vector3
     * @returns {THREE.Vector3} The converted coordinates
     */
    geotoolkit3d.Plot.prototype.rootScaleInv = function(vector3){};
    /**
     * Returns camera location in user coordinates.<br>
     * @param {THREE.Vector3} [target] Optional target vector
     * @returns {THREE.Vector3} The camera location
     */
    geotoolkit3d.Plot.prototype.getCameraLocation = function(target){};
    /**
     * @function
     * @desc
     * Returns the camera lookat point in user coordinates IF such information is available (depends on the controller used).<br>
     * Otherwise returns camera.location + camera.direction.<br>
     * @param {THREE.Vector3} [target] Optional target vector
     * @returns {THREE.Vector3} The camera lookat
     */
    geotoolkit3d.Plot.prototype.getCameraLookAt = function(target){};
    /**
     * This function will try to reset the camera position along the y axis so most of the scene fits into the view.<br>
     * It will also change the camera anchor point to the scene center.<br>
     * If the there is no visible geometry in the scene this will silently fail.
     * @param {boolean} [animate=false] Animate the camera change
     * @param {number} [animationDuration=1000] Duration of the animation in milliseconds
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.resetCamera = function(animate, animationDuration){};
    /**
     * This function will try to adjust the camera position along the direction axis so that most of the scene fits into the view. It
     * will also change the camera anchor point to the scene center.
     * If the there is no visible geometry in the scene this function will silently fail.
     * @param {THREE.Vector3} [direction=null] Direction to move the camera in, will use scene center to camera if null. This should be a
     * unit vector
     * @param {boolean} [animate=false] Animate the camera change
     * @param {number} [animationDuration=1000] Duration of the animation in milliseconds
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.fitCamera = function(direction, animate, animationDuration){};
    /**
     * Sets camera location in user coordinates.<br>
     * It is recommended to use #moveCamera() instead as it handles both the location and the direction of the camera.<br>
     * @param {THREE.Vector3} position The position to move to (in USER coordinates)
     * @param {boolean} [animate=false] Animate the camera change
     * @param {number} [animationDuration=1000] Duration of the animation in milliseconds
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.setCameraLocation = function(position, animate, animationDuration){};
    /**
     * Sets camera target in user coordinates.<br>
     * It is recommended to use #moveCamera() instead as it handles both the location and the direction of the camera.<br>
     * @param {THREE.Vector3} lookat The point to look at (in USER coordinates)
     * @param {boolean} [animate=false] Animate the camera change
     * @param {number} [animationDuration=1000] Duration of the animation in milliseconds
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.setCameraLookAt = function(lookat, animate, animationDuration){};
    /**
     * Moves the camera to the given position and rotate it to look at the given lookat.<br>
     * Note that the given points should be in user coordinates (world coordinates without global scaling).<br>
     *
     * @param {THREE.Vector3} [position=null] The position to move to in USER coordinates
     * @param {THREE.Vector3} [lookAt=null] The point to look at (in USER coordinates)
     * @param {boolean} [animate=false] Animate the camera change
     * @param {number} [animationDuration=1000] Duration of the animation in milliseconds
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.moveCamera = function(position, lookAt, animate, animationDuration){};
    /**
     * Returns the scene graph root.<br>
     * One should use it to append nodes to the scene using the add() function.<br>
     * @returns {THREE.Object3D} The root node
     */
    geotoolkit3d.Plot.prototype.getRoot = function(){};
    /**
     * Returns the scene graph animation manager.<br>
     * This manager should be used to perform smooth animations in the plot.<br>
     * See {@link geotoolkit3d.scene.animation.AnimationManager} for more details.<br>
     * @returns {geotoolkit3d.scene.animation.AnimationManager} The animation manager
     */
    geotoolkit3d.Plot.prototype.getAnimationManager = function(){};
    /**
     * Returns the compass object.<br>
     * The returned compass can be configured/modified.<br>
     * See {@link geotoolkit3d.scene.compass.Compass} for more details.<br>
     * @returns {geotoolkit3d.scene.compass.Compass} The compass object
     */
    geotoolkit3d.Plot.prototype.getCompass = function(){};
    /**
     * Set size of the Plot.<br>
     * This increase the rendering-area size (canvas) to the given dimension.<br>
     * It also notifies the WebGl renderer.<br>
     * The given pixelDeviceRatio can be used to take into account the current Browser zoom level.<br>
     *
     * @param {number} width The new width that should be set
     * @param {number} height The new height that should be set
     * @param {number} [pixelDeviceRatio=geotoolkit.window.devicePixelRatio] The pixel device ratio, if unset, will use the value provided by the window if available.
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.setSize = function(width, height, pixelDeviceRatio){};
    /**
     * Returns the 'virtual device' size of the plot.<br>
     * <br>
     * This returns the raw size given at initialization or through the setSize function.<br>
     * Ignoring any pixelRatio that could have been set on the WebGL renderer.<br>
     *
     * @param {geotoolkit.util.Dimension} [target] optional object to store the dimensions
     * @returns {geotoolkit.util.Dimension} The plot size
     */
    geotoolkit3d.Plot.prototype.getSize = function(target){};
    /**
     * Returns a copy of the model origin in world coordinates.<br>
     * The model origin is the center of the modellimits.<br>
     * @returns {THREE.Vector3} The model origin
     */
    geotoolkit3d.Plot.prototype.getModelOrigin = function(){};
    /**
     * Returns a copy of the modellimits in world coordinates.<br>
     * The returned limits are either the one provided through the setOptions() or the one automatically computed by the plot.<br>
     * @param {boolean} [viewModelLimits] gets the modelLimits that includes grid sprites and children of objects with a getWorldBoundingBox
     * @param {function} [filter] that gets applied to the compute the model limits
     * @returns {THREE.Box3} The model limits
     */
    geotoolkit3d.Plot.prototype.getModelLimits = function(viewModelLimits, filter){};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {Object} options options to set on this object
     * @param {THREE.Box3} [options.modellimits] The modellimits, necessary if autoupdatemodellimits is not enabled. Should be the boundingbox of the scene.
     * @param {Object} [options.camera] The camera options
     * @param {geotoolkit3d.Plot.CameraType} [options.camera.type] The camera type, note that changing the camera type will not preserve the current display.
     * @param {Object} [options.camera.controller] The camera controller configuration
     * @param {geotoolkit3d.Plot.CameraControllerType|Object} [options.camera.controller.type] The controller to be used to change the camera location.
     * @param {Object} [options.camera.controller.options] The camera controller's options, see to the Controller documentation for available options
     * @param {THREE.Vector3} [options.translation] This position becomes the effective origin for the scene for scaling purposes.
     * @param {number} [options.camera.fov] The field-of-view angle in degrees (applies only to perspective camera)
     * @param {number} [options.camera.near] The frustum near clipping plane
     * @param {number} [options.camera.far] The frustum far clipping plane
     * @param {number} [options.camera.minnear] the minimum value for auto clipping planes
     * @param {number} [options.camera.minfar] the minimum value for auto clipping planes
     * @param {geotoolkit3d.Plot.OrthographicResizeMode} [options.camera.orthoresize] the way the plot will resize when in orthographic mode
     * @param {THREE.Vector3} [options.camera.position] The camera position, note that this internally use moveCamera() and is here for convenience
     * @param {THREE.Vector3} [options.camera.lookat] The camera lookat, note that this internally use moveCamera() and is here for convenience
     * @param {boolean} [options.camera.movewithscale=false] moves the camera in world coordinates to maintain its location in user coordinates when a scale is applied to the plot
     * @param {Object} [options.renderer] The renderer configuration
     * @param {THREE.Color} [options.renderer.clearcolor] The renderer clearcolor color
     * @param {number} [options.renderer.clearcoloralpha] The renderer clearcolor alpha value (0,1).<br>Note that plot must have been created with a clearcoloralpha lesser than 1 to support alpha.
     * @param {THREE.Vector3} [options.scale] The global scale to be applied to the scene graph. This change the relation between user coordinates and world coordinates
     * @param {boolean} [options.ambientlighting.enabled=true] Determines if the ambient light is enabled
     * @param {string} [options.ambientlighting.color="#1c1c1c"] The color of the ambient light.
     * @param {boolean} [options.cameralighting.enabled=true] The color of the camera light.
     * @param {string} [options.cameralighting.color="white"] The color of the camera light.
     * @param {string} [options.cameralighting.intensity="#1c1c1c"] The intensity of the camera light.
    
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.setOptions = function(options){};
    /**
     * Project the given (world) point to virtual screen space in place.<br>
     * @param {THREE.Vector3} point The point to project in world coordinates.<br>
     * @returns {THREE.Vector3} The projected point
     */
    geotoolkit3d.Plot.prototype.project = function(point){};
    /**
     * Adds and initializes the given tool.<br>
     * The tool will be notified it has been added and it will attach its system-event listeners.<br>
     * @param {geotoolkit3d.tool.AbstractTool} tool The tool to initialize and add.
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.addTool = function(tool){};
    /**
     * Finds the tool matching the given name.<br>
     * If several tool match this name, the 'first' is returned.<br>
     * @param {string} name The name of the tool to look for
     * @returns {geotoolkit3d.tool.AbstractTool} The tool matching the given name
     */
    geotoolkit3d.Plot.prototype.getToolByName = function(name){};
    /**
     * Removes a tool (and disposes it).<br>
     * The given tool will be disposed only if it does belong to this plot.<br>
     * @param {geotoolkit3d.tool.AbstractTool} tool The tool to remove and dispose
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.removeTool = function(tool){};
    /**
     * Set the plot as 'dirty' so it gets redrawn during the next render phase.<br>
     * This also propagates an event notifying the plot's listeners that an invalidation has occurred.<br>
     * <br>
     * See {@link geotoolkit3d.Event.Type} for built-in events, custom event types can also be used.<br>
     *
     * @param {geotoolkit3d.Event} [event] The event that should be propagated as the reason of the invalidate
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.invalidateObject = function(event){};
    /**
     * Updates the model limits of the Plot by computing it using the current scene state.<br>
     * <br>
     * If 'automodellimits' is enabled, this should be called automatically when some operations occur (adding, removing a node, etc).<br>
     *<br>
     * However it should be called manually if an object in the scene is moved outside of the current modellimits manually.<br>
     * For example by changing its position attribute.<br>
     * <br>
     * The modellimits are used internally to improves accuracy of rendering & picking.<br>
     * @returns {geotoolkit3d.Plot} this
     */
    geotoolkit3d.Plot.prototype.updateModelLimits = function(){};
    /**
     * Gets the WebGLRenderer
     * @returns {THREE.WebGLRenderer} renderer
     */
    geotoolkit3d.Plot.prototype.getRenderer = function(){};
    /**
     * Returns usage statistics like WebGl calls per frame or amount of vertices rendered per frame.
     * @returns {object} The statistics see THREE.WebGLRenderer.info for more details.
     */
    geotoolkit3d.Plot.prototype.getUsageStatistics = function(){};
    /**
     * Disposes the plot and all its resources.<br>
     * To do so, all objects contained in the scene will be disposed.<br>
     * The tools registered on this plot will also be disposed.<br>
     */
    geotoolkit3d.Plot.prototype.dispose = function(){};

/**
 * A controller that emulates an 'Orbit' behavior.<br>
 * <br>
 * This controller let the user manipulate the camera position using mouse or touch input.<br>
 * <br>
 * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
 * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
 * <br>
 * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
 * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
 * So that the user cannot put the camera upside down.<br>
 * <br>
 * This controller also support 'zooming' by moving the camera forward or backward.<br>
 * <br>
 * To be used, it should be set on the Plot through the setOptions function.
 * <br>
 * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
 * <br>
 *
 * @class geotoolkit3d.controller.OrbitController
 * @augments geotoolkit3d.tool.AbstractGestureTool
 *
 * @param {object} [options] The options
 * @param {boolean} [options.enabled=true] Disable this controller
 * @param {boolean} [options.nozoom=false] Disable zooming
 * @param {number} [options.zoomspeed=1] Zoom speed factor
 * @param {number} [options.mindistance=0] Minimum distance when zooming
 * @param {number} [options.maxdistance=Infinity] Maximum distance when zooming
 * @param {boolean} [options.norotate=false] Disable rotation
 * @param {number} [options.rotatespeed=2] Rotation speed factor
 * @param {boolean} [options.nopan=false] Disable panning
 * @param {boolean} [options.nodblclick=false] Disable lookAt redefinition using double click
 * @param {number} [options.dblclickspeed=250] Double click speed emulation (for touch devices) in ms
 * @see {@link geotoolkit3d.tool.AbstractGestureTool} for input device support.
 * @see {@link geotoolkit3d.Plot} for more details
 */
geotoolkit3d.controller.OrbitController = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} [options] The options
     * @param {boolean} [options.enabled] Disable this controller
     * @param {boolean} [options.nozoom] Disable zooming
     * @param {number} [options.zoomspeed] Zoom speed factor
     * @param {number} [options.mindistance] Minimum distance when zooming
     * @param {number} [options.maxdistance] Maximum distance when zooming
     * @param {boolean} [options.norotate] Disable rotation
     * @param {number} [options.rotatespeed] Rotation speed factor
     * @param {boolean} [options.nopan] Disable panning
     * @param {boolean} [options.nodblclick] Disable lookAt redefinition using double click
     * @param {number} [options.dblclickspeed] Double click speed emulation (for touch devices) in ms
     * @returns {geotoolkit3d.controller.OrbitController} this
     */
    geotoolkit3d.controller.OrbitController.prototype.setOptions = function(options){};

/**
 * A controller that emulates an 'Orbit' behavior.<br>
 * <br>
 * This controller let the user manipulate the camera position using mouse or touch input.<br>
 * <br>
 * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
 * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
 * <br>
 * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
 * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
 * So that the user cannot put the camera upside down.<br>
 * <br>
 * This controller also support 'zooming' by moving the camera forward or backward.<br>
 * <br>
 * To be used, it should be set on the Plot through the setOptions function.
 * <br>
 * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
 * <br>
 *
 * @class geotoolkit3d.controller.FirstPersonController
 * @augments geotoolkit3d.controller.OrbitController
 *
 * @param {object} [options] The options
 * @param {boolean} [options.enabled=true] Disable this controller
 * @param {boolean} [options.nozoom=false] Disable zooming
 * @param {number} [options.zoomspeed=1] Zoom speed factor
 * @param {number} [options.mindistance=0] Minimum distance when zooming
 * @param {number} [options.maxdistance=Infinity] Maximum distance when zooming
 * @param {boolean} [options.norotate=false] Disable rotation
 * @param {number} [options.rotatespeed=2] Rotation speed factor
 * @param {boolean} [options.nopan=false] Disable panning
 * @param {boolean} [options.nodblclick=false] Disable lookAt redefinition using double click
 * @param {number} [options.dblclickspeed=250] Double click speed emulation (for touch devices) in ms
 * @param {boolean} [options.pointerlock=false] lock the cursor to the canvas on mouse down
 * @param {boolean} [options.inverty=false] invert the y values, false = mouse down, camera looks down
 * @see {@link geotoolkit3d.tool.AbstractGestureTool} for input device support.
 * @see {@link geotoolkit3d.Plot} for more details
 */
geotoolkit3d.controller.FirstPersonController = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} [options] The options
     * @param {boolean} [options.enabled] Disable this controller
     * @param {boolean} [options.nozoom] Disable zooming
     * @param {number} [options.zoomspeed] Zoom speed factor
     * @param {number} [options.mindistance] Minimum distance when zooming
     * @param {number} [options.maxdistance] Maximum distance when zooming
     * @param {boolean} [options.norotate] Disable rotation
     * @param {number} [options.rotatespeed] Rotation speed factor
     * @param {boolean} [options.nopan] Disable panning
     * @param {boolean} [options.nodblclick] Disable lookAt redefinition using double click
     * @param {number} [options.dblclickspeed] Double click speed emulation (for touch devices) in ms
     * @param {boolean} [options.pointerlock=false] lock the cursor to the canvas on mouse down
     * @param {boolean} [options.inverty=false] invert the y values, false = mouse down, camera looks down
     */
    geotoolkit3d.controller.FirstPersonController.prototype.setOptions = function(options){};

/**
 * A controller that emulates an 'Trackball' behavior.<br>
 * <br>
 * This controller let the user manipulate the camera position using mouse or touch input.<br>
 * <br>
 * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
 * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
 * <br>
 * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
 * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
 * So that the user cannot put the camera upside down.<br>
 * <br>
 * This controller also support 'zooming' by moving the camera forward or backward.<br>
 * <br>
 * To be used, it should be set on the Plot through the setOptions function.
 * <br>
 * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
 * <br>
 *
 * @class geotoolkit3d.controller.TrackballController
 * @augments geotoolkit3d.tool.AbstractGestureTool
 *
 * @param {object} [options]
 * @param {boolean} [options.enabled=true] Disable this controller
 * @param {boolean} [options.nozoom=false] Disable zooming
 * @param {number} [options.zoomspeed=0.005] Zoom speed factor
 * @param {number} [options.mindistance=0] Minimum distance when zooming
 * @param {number} [options.maxdistance=Infinity] Maximum distance when zooming
 * @param {boolean} [options.norotate=false] Disable rotation
 * @param {number} [options.rotatespeed=1] Rotation speed factor
 * @param {boolean} [options.nopan=false] Disable panning
 * @param {number} [options.panspeed=0.001] Panning speed factor
 * @param {boolean} [options.noroll=false] Disable rolling
 * @param {boolean} [options.nodblclick=false] Disable lookAt redefinition using double click
 * @param {number} [options.dblclickspeed=250] Double click speed emulation (for touch devices) in ms
 * @see {@link geotoolkit3d.tool.AbstractGestureTool} for input device support.
 * @see {@link geotoolkit3d.Plot} for more details
 */
geotoolkit3d.controller.TrackballController = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} [options] The options
     * @param {boolean} [options.enabled] Disable this controller
     * @param {boolean} [options.nozoom] Disable zooming
     * @param {number} [options.zoomspeed] Zoom speed factor
     * @param {number} [options.mindistance] Minimum distance when zooming
     * @param {number} [options.maxdistance] Maximum distance when zooming
     * @param {boolean} [options.norotate] Disable rotation
     * @param {number} [options.rotatespeed] Rotation speed factor
     * @param {boolean} [options.nopan] Disable panning
     * @param {number} [options.panspeed] Panning speed factor
     * @param {boolean} [options.noroll] Disable rolling
     * @param {boolean} [options.nodblclick] Disable lookAt redefinition using double click
     * @param {number} [options.dblclickspeed] Double click speed emulation (for touch devices) in ms
     * @returns {geotoolkit3d.controller.TrackballController} this
     */
    geotoolkit3d.controller.TrackballController.prototype.setOptions = function(options){};

/**
 * A material implementing colormap logic through a texture.<br>
 * <br>
 * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
 * This float value (per vertex) will be used ot retrieve a color in the given colorprovider (converted to a colormap texture).<br>
 * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
 * <br>
 * If the given colorprovider is null then only the single color will be used.<br>
 * <br>
 * @see geotoolkit3d.util.Shaders
 *
 * @class geotoolkit3d.scene.MeshColorMapBasicMaterial
 * @augments THREE.ShaderMaterial
 * @param {object} options The options
 * @param {THREE.Color} [options.color=new THREE.Color(0xffffff)] Optional single color
 * @param {geotoolkit.util.ColorProvider} [options.colorprovider=null] A color provider to generate the colormap
 */
geotoolkit3d.scene.MeshColorMapBasicMaterial = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {THREE.Color} [options.color] Optional single color (reset to white if a colorprovider is given)
     * @param {geotoolkit.util.ColorProvider} [options.colorprovider] A color provider to generate the colormap
     * @returns {geotoolkit3d.scene.MeshColorMapBasicMaterial} this
     */
    geotoolkit3d.scene.MeshColorMapBasicMaterial.prototype.setOptions = function(options){};

/**
 * A material implementing Lambertertian reflectance and colormap logic through a texture.<br>
 * <br>
 * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
 * This float value (per vertex) will be used ot retrieve a color in the given colorprovider (converted to a colormap texture).<br>
 * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
 * Lighting will be applied to this color using the same algorithm that THRRE.LambertMeshMaterial.<br>
 * <br>
 * If the given colorprovider is null then only the single color will be used (lighting still applies).<br>
 * <br>
 * @see geotoolkit3d.util.Shaders
 *
 * @class geotoolkit3d.scene.MeshColorMapLambertMaterial
 * @augments THREE.ShaderMaterial
 * @param {object} options The options
 * @param {THREE.Color} [options.color=new THREE.Color(0xffffff)] Optional single color
 * @param {geotoolkit.util.ColorProvider} [options.colorprovider=null] A color provider to generate the colormap
 */
geotoolkit3d.scene.MeshColorMapLambertMaterial = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {THREE.Color} [options.color] Optional single color (reset to white if a colorprovider is given)
     * @param {geotoolkit.util.ColorProvider} [options.colorprovider] A color provider to generate the colormap
     * @returns {geotoolkit3d.scene.MeshColorMapLambertMaterial} this
     */
    geotoolkit3d.scene.MeshColorMapLambertMaterial.prototype.setOptions = function(options){};

/**
 * This class manage animations in the scene.<br>
 * <br>
 * It provides an easy way to insert animations and can handle several animations at a time.<br>
 * Note that this AnimationMechanism is focused on providing smooth animation while keeping the resources usage as low as possible.<br>
 * Therefore the animation intermediate steps count is not guaranteed.<br>
 *<br>
 * Once added, an animation will be started and will be executed for each frame until it returns 'true'.<br>
 * Then it will be discarded.<br>
 *<br>
 * This manager will optimize the animations to run around 60 fps (if possible), it may pause animation when the plot is not visible.<br>
 *<br>
 * To use this AnimationManager, insert it into the scene like a regular node.<br>
 * Then push an animation function in it.<br>
 *<br>
 * Note that this class is not responsible for actually interpolating values between steps.<br>
 * Client code should implement the logic to compute intermediate steps.<br>
 *
 * @class geotoolkit3d.scene.animation.AnimationManager
 * @augments geotoolkit3d.scene.Object3D
 */
geotoolkit3d.scene.animation.AnimationManager = {};
    /**
     * Check for an animation in the manager<br>
     *
     * @param {function} animation A function that will be called by the AnimationManager
     * @returns {boolean} animation if an animation is already in the manager
     */
    geotoolkit3d.scene.animation.AnimationManager.prototype.checkAnimation = function(animation){};
    /**
     * remove an animation from the manager<br>
     *
     * @param {function} animation function that will be removed from the manager
     */
    geotoolkit3d.scene.animation.AnimationManager.prototype.removeAnimation = function(animation){};
    /**
     * Add a animation function that will be called to update the animation state.<br>
     * <br>
     * It will be called before the rendering occurs.<br>
     * The provided function is responsible of animating one or several objects.<br>
     * <br>
     * If the animation has ended, the function should return True to notify the AnimationManager to remove/discard this animation.<br>
     * Otherwise it will be called indefinitely.<br>
     *
     * @param {function} animation A function that will be called by the AnimationManager
     * @returns {geotoolkit3d.scene.animation.AnimationManager} this
     */
    geotoolkit3d.scene.animation.AnimationManager.prototype.addAnimation = function(animation){};

/**
 * A 3D compass.<br>
 * <br>
 * This class adds a canvas in the given HTML element that will be used to render a 3D compass shape.<br>
 * <br>
 * The compass will rotate the camera to look at the compass shape in the same direction that the parent plot is looking.<br>
 * The compass shape itself can be static.<br>
 *
 * @class geotoolkit3d.scene.compass.Compass
 * @param {Object} options The options
 * @param {HTMLElement} [options.container] The div element in which the canvas will be created and added.
 * @param {HTMLElement} [options.canvas] The canvas element to render to.
 * @param {object} [options.renderer] renderer options for the compass
 * @param {object} [options.renderer.parameters] renderer parameters for the compass
 * @param {boolean} [options.visible=true] The visibility
 */
geotoolkit3d.scene.compass.Compass = {};
    /**
     * Return the compass shape
     *
     * @returns {THREE.Object3D} The compass shape
     */
    geotoolkit3d.scene.compass.Compass.prototype.getCompassObject = function(){};
    /**
     * Sets the compass shape
     *
     * @param {THREE.Object3D} newObject The new compass shape
     * @returns {geotoolkit3d.scene.compass.Compass} this
     */
    geotoolkit3d.scene.compass.Compass.prototype.setCompassObject = function(newObject){};

/**
 * A compass made of a red/green arrow pointing north.<br>
 *
 * @class geotoolkit3d.scene.compass.CompassArrow
 * @augments geotoolkit3d.scene.Object3D
 * @param {Object} [options] The options
 * @param {THREE.Vector3} [options.origin=new THREE.Vector3(0,0,0)] The origin of the arrow in normalized coordinates
 * @param {THREE.Vector3} [options.direction=new THREE.Vector3(0,1,0)] The direction of the arrow in normalized coordinates
 * @param {THREE.Color} [options.topcolor=new THREE.Color(0x00FF00)] Optional color for top of the compass arrow
 * @param {THREE.Color} [options.bottomcolor=new THREE.Color(0xFF0000)] Optional color for bottom of the compass arrow
 * @param {THREE.Color} [options.outlinecolor=new THREE.Color(0x000000)] Optional color for compass arrow outline
 */
geotoolkit3d.scene.compass.CompassArrow = {};

/**
 * A compass made of 3 colored lines.<br>
 * <br>
 * <ul>
 * <li> X axis: Red</li>
 * <li> Y axis: Green</li>
 * <li> Z axis: blue</li>
 * </ul>
 *
 * @class geotoolkit3d.scene.compass.CompassAxis
 * @augments geotoolkit3d.scene.Object3D
 * @param {Object} [options] The options
 * @param {THREE.Color} [options.zaxiscolor=new THREE.Color(0x0000FF)] Optional color for Z axis
 * @param {THREE.Color} [options.yaxiscolor=new THREE.Color(0x00FF00)] Optional color for Y axis
 * @param {THREE.Color} [options.xaxiscolor=new THREE.Color(0xFF0000)] Optional color for X axis
 */
geotoolkit3d.scene.compass.CompassAxis = {};

/**
 * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
 * <br>
 * One could listen to events occurring on any node of the plot by adding a listener/callback on the geotoolkit3d.Plot.<br>
 * Note that you can also send custom events from your nodes to implement your application's logic.<br>
 * See {@link geotoolkit3d.Event.Type} for builtin events.<br>
 *
 * @class geotoolkit3d.Event
 * @param {object} options The options
 * @param {object} options.source The object that triggered this event (or at least the one passed when creating the event).
 * @param {string|geotoolkit3d.Event.Type} options.type The event type, used to distinguish events from each other.
 * @param {object} [options.args] The event arguments, can be used to provide more details and context about the event.
 */
geotoolkit3d.Event = {};
    /**
     * Returns event's type
     * @returns {string|geotoolkit3d.Event.Type} The event type
     */
    geotoolkit3d.Event.prototype.getType = function(){};
    /**
     * Returns event's source
     * @returns {object} The event source
     */
    geotoolkit3d.Event.prototype.getSource = function(){};
    /**
     * Returns event's arguments
     * @returns {object} The events arguments
     */
    geotoolkit3d.Event.prototype.getArgs = function(){};
    /**
     * disposes this event
     * @returns {null}
     */
    geotoolkit3d.Event.prototype.dispose = function(){};
    /**
     * List of builtin events fired/listened by the 3D toolkit itself.<br>
     * <br>
     * Those event types will be used by the 3D toolkit when a corresponding event occurs.<br>
     * The toolkit also listen to some of those events to update its state (dirty, size, etc).<br>
     *
     * @enum
     * @readonly
     */
    geotoolkit3d.Event.Type = {};
        /**
         * BeforeRender.<br>
         * <br>
         * Plot fires this event before the plot prepares it render
         * @type {string}
         */
        geotoolkit3d.Event.Type.BeforeRender = "";
        /**
         * AfterRender.<br>
         * <br>
         * Plot fires this event after the plot completes its render
         * @type {string}
         */
        geotoolkit3d.Event.Type.AfterRender = "";
        /**
         * Invalidate.<br>
         * <br>
         * Used whenever a change on a node explicitly requires an invalidation and render.
         * @type {string}
         */
        geotoolkit3d.Event.Type.Invalidate = "";
        /**
         * Node added.<br>
         * <br>
         * Used whenever a node has been added to the scenegraph, note that it will be sent only once even if the given node itself has children.
         * @type {string}
         */
        geotoolkit3d.Event.Type.Add = "";
        /**
         * Node removed.<br>
         * <br>
         * Used whenever a node has been removed from the scenegraph.<br>
         * Note that this event will be sent only for the removed node.<br>
         * And not for its own children as those have not been removed from their parent.<br>
         * @type {string}
         */
        geotoolkit3d.Event.Type.Remove = "";
        /**
         * Camera related.<br>
         * <br>
         * Used whenever the camera moves, rotates or has changed in any way
         * @type {string}
         */
        geotoolkit3d.Event.Type.Camera = "";
        /**
         * Plot resizing.<br>
         * <br>
         * Used when the plot has been resized
         * @type {string}
         */
        geotoolkit3d.Event.Type.Resize = "";
        /**
         * Animation occurred.<br>
         * <br>
         * Used when an intermediate step of an animation has finished in the {@link geotoolkit3d.scene.animation.AnimationManager}
         * @type {string}
         */
        geotoolkit3d.Event.Type.Animation = "";
        /**
         * Model limits changed.<br>
         * <br>
         * Used when a node has changed its boundingbox. <br>
         * This may trigger a recompute of the modellimits of the Plot
         * @type {string}
         */
        geotoolkit3d.Event.Type.ModelLimits = "";

/**
 * Parent class of schematic objects
 *
 * @class geotoolkit3d.scene.AnnotationBase
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} [options] The options
 * @param {string} [options.title] The text to display
 * @param {number} [options.titledistancefactor=1] A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
 * @param {geotoolkit.attributes.TextStyle} [options.titlestyle] The text attributes
 * @param {geotoolkit.attributes.LineStyle} [options.linestyle] The segment connector attributes
 * @param {geotoolkit3d.scene.AnnotationBase.Mode} [options.mode=geotoolkit3d.scene.AnnotationBase.Mode.Center] The display strategy for the segment origin
 * @param {THREE.Vector3} [options.anchorpoint=null] the point to anchor the annotation to
 */
geotoolkit3d.scene.AnnotationBase = {};
    /**
     * @inheritdoc
     */
    geotoolkit3d.scene.AnnotationBase.prototype.beforeRender = function(){};
    /**
     * Sets the text to display
     * @param {string} title title
     * @returns {geotoolkit3d.scene.AnnotationBase} this
     */
    geotoolkit3d.scene.AnnotationBase.prototype.setTitle = function(title){};
    /**
     * Gets the text to display
     * @returns {string} title
     */
    geotoolkit3d.scene.AnnotationBase.prototype.getTitle = function(){};
    /**
     * Sets a factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol
     * @param {number} titleDistanceFactor title distance factor
     * @returns {geotoolkit3d.scene.AnnotationBase} this
     */
    geotoolkit3d.scene.AnnotationBase.prototype.setTitleDistanceFactor = function(titleDistanceFactor){};
    /**
     * Gets a factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol
     * @returns {number} title distance factor
     */
    geotoolkit3d.scene.AnnotationBase.prototype.getTitleDistanceFactor = function(){};
    /**
     * Sets text attributes
     * @param {geotoolkit.attributes.TextStyle} titleStyle title style
     * @returns {geotoolkit3d.scene.AnnotationBase} this
     */
    geotoolkit3d.scene.AnnotationBase.prototype.setTitleStyle = function(titleStyle){};
    /**
     * Gets text attributes
     * @returns {geotoolkit.attributes.TextStyle} title style
     */
    geotoolkit3d.scene.AnnotationBase.prototype.getTitleStyle = function(){};
    /**
     * Sets the segment connector attributes
     * @param {geotoolkit.attributes.LineStyle} lineStyle line style
     * @returns {geotoolkit3d.scene.AnnotationBase} this
     */
    geotoolkit3d.scene.AnnotationBase.prototype.setLineStyle = function(lineStyle){};
    /**
     * Gets the segment connector attributes
     * @returns {geotoolkit.attributes.LineStyle} line style
     */
    geotoolkit3d.scene.AnnotationBase.prototype.getLineStyle = function(){};
    /**
     * Sets the display strategy for the segment origin
     * @param {geotoolkit3d.scene.AnnotationBase.Mode} mode mode
     * @returns {geotoolkit3d.scene.AnnotationBase} this
     */
    geotoolkit3d.scene.AnnotationBase.prototype.setMode = function(mode){};
    /**
     * Gets the display strategy for the segment origin
     * @returns {geotoolkit3d.scene.AnnotationBase.Mode} mode
     */
    geotoolkit3d.scene.AnnotationBase.prototype.getMode = function(){};
    /**
     * Sets the anchor-point of the annotation, this is needed in case of a single annotation not contained by a
     * schematic for example.
     *
     * @param {THREE.Vector3} anchorPoint the point to anchor the annotation to
     * @returns {geotoolkit3d.scene.AnnotationBase} this
     */
    geotoolkit3d.scene.AnnotationBase.prototype.setAnchorPoint = function(anchorPoint){};
    /**
     * Gets the point to anchor the annotation to
     * @returns {?THREE.Vector3} anchor point
     */
    geotoolkit3d.scene.AnnotationBase.prototype.getAnchorPoint = function(){};
    /**
     * Sets options
     * @param {object} [options] The options
     * @param {string} [options.title] The text to display
     * @param {number} [options.titledistancefactor] A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
     * @param {geotoolkit.attributes.TextStyle} [options.titlestyle] The text attributes
     * @param {geotoolkit.attributes.LineStyle} [options.linestyle] The segment connector attributes
     * @param {geotoolkit3d.scene.AnnotationBase.Mode} [options.mode] The display strategy for the segment origin
     * @param {THREE.Vector3} [options.anchorpoint] the point to anchor the annotation to
     * @returns {geotoolkit3d.scene.AnnotationBase} this
     */
    geotoolkit3d.scene.AnnotationBase.prototype.setOptions = function(options){};
    /**
     * Gets options
     * @returns {object} options The options
     * @returns {string} options.title The text to display
     * @returns {number} options.titledistancefactor A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
     * @returns {geotoolkit.attributes.TextStyle} options.titlestyle The text attributes
     * @returns {geotoolkit.attributes.LineStyle} options.linestyle The segment connector attributes
     * @returns {geotoolkit3d.scene.AnnotationBase.Mode} options.mode The display strategy for the segment origin
     * @returns {THREE.Vector3} options.anchorpoint the point to anchor the annotation to
     */
    geotoolkit3d.scene.AnnotationBase.prototype.getOptions = function(){};
    /**
     * Enum of display strategy.<br>
     * <br>
     * The functions provided through this enum defines how the line linking the annotation text to the annotated object will be positioned.<br>
     * @enum
     * @readonly
     */
    geotoolkit3d.scene.AnnotationBase.Mode = {};
        /**
         * Use the center of the bounding box of the parent (basically a geotoolkit3d.scene.well.schematic.SchematicBase).<br>
         * Default behavior, the line goes from the center of the annotated shape to text.
         * @type {string}
         */
        geotoolkit3d.scene.AnnotationBase.Mode.Center = "";
        /**
         * Always use the direct intersection from camera direction.<br>
         * This computes the anchor of the line on the fly to be the closest vertex of the annotated shape from the text location.<br>
         * Note that this implementation is more CPU demanding than the default one.
         * @type {string}
         */
        geotoolkit3d.scene.AnnotationBase.Mode.Closest = "";

/**
 * This class implements text as a 2D sprite.<br>
 * A 2D text is a text that will always face the camera and that is horizontal.<br>
 * Internally it uses a texture created using a regular canvas.<br>
 * <br>
 * It also offers a 'fixed size' mode that force the text to be always the same size on screen.<br>
 * Note that this mode introduces some blurriness as the texture is rescaled by the graphic card on the fly.<br>
 *
 * @class geotoolkit3d.scene.Text2d
 * @augments THREE.Sprite
 * @param {string} text text
 * @param {object} [options] options object
 * @param {geotoolkit.attributes.TextStyle} [options.style] text style
 * @param {string} [options.font='24px Arial'] font
 * @param {string|geotoolkit.util.RgbaColor} [options.color='rgba(255, 255, 255, 1.0)'] text color
 * @param {boolean} [options.issizeindevice=true] True if the text should always be drawn with the same size, no matter of how far it is
 */
geotoolkit3d.scene.Text2d = {};
    /**
     * Gets text
     * @returns {string}
     */
    geotoolkit3d.scene.Text2d.prototype.getText = function(){};
    /**
     * Sets text
     * @param {string} text text
     * @returns {geotoolkit3d.scene.Text2d} this
     */
    geotoolkit3d.scene.Text2d.prototype.setText = function(text){};
    /**
     * Gets text style
     * @returns {geotoolkit.attributes.TextStyle}
     */
    geotoolkit3d.scene.Text2d.prototype.getTextStyle = function(){};
    /**
     * Sets text style
     * @param {geotoolkit.attributes.TextStyle} textStyle text style
     * @returns {geotoolkit3d.scene.Text2d} this
     */
    geotoolkit3d.scene.Text2d.prototype.setTextStyle = function(textStyle){};
    /**
     * The given xyz vector will be used when computing the text location after scaling.<br>
     * It will translate the text in the given direction by half the text size.<br>
     *
     * finalPosition = position + anchorOffsetRatio * (sizeInDevice/2 + offsetInDevice)
     *
     * @param {THREE.Vector3} ratio The anchor offset factor to be applied when computing offset
     * @returns {geotoolkit3d.scene.Text2d} this
     */
    geotoolkit3d.scene.Text2d.prototype.setAnchorOffsetRatio = function(ratio){};
    /**
     * The given xyz vector will be used when computing the text location after scaling.<br>
     * It will be added to the offset value.<br>
     *
     * finalPosition = position + anchorOffsetRatio * (sizeInDevice/2 + offsetInDevice)
     *
     * @param {THREE.Vector2} offset The anchor offset in device to be applied when computing offset
     * @returns {geotoolkit3d.scene.Text2d} this
     */
    geotoolkit3d.scene.Text2d.prototype.setAnchorOffset = function(offset){};
    /**
     * @inheritdoc
     */
    geotoolkit3d.scene.Text2d.prototype.beforeRender = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit3d.scene.Text2d.prototype.dispose = function(){};

/**
 * PointSet is a set of 3D coordinates rendered as symbols.<br>
 * <br>
 * It's similar to a PointCloud and share most of the same API (even if there is no inheritance between them).<br>
 * The main difference between PointSet and PointCloud is that a PointSet uses real 3D mesh for each symbol.<br>
 * As a consequence, the rendered symbols are cleaner and sharper.<br>
 * However, it consume more memory and and more GPU time per frame.<br>
 * <br>
 * For large datasets, it's recommended to use PointCloud.<br>
 *
 * @class geotoolkit3d.scene.pointset.PointSet
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {number[]} options.data.x The x values
 * @param {number[]} options.data.y The y values
 * @param {number[]} options.data.z The elevation values
 * @param {number[]|number} [options.data.sizes] Sizes of the symbols, can be an array or a single value
 * @param {number[]|number} [options.data.values] A value attribute used for coloring the symbols
 * @param {geotoolkit3d.scene.pointset.PointSet.Symbol|function} [options.symbol=PointSet.Symbol.sphere] The symbol from the enum or a function that creates a THREE.Geometry
 * @param {number} [options.symbolminsize=1] The size of the symbol in pixels/model for the smallest value
 * @param {number} [options.symbolmaxsize=6] The size of the symbol in pixels/model for the biggest value
 * @param {boolean} [options.symbolsizeisindevice=false] True if the symbol size should only depend of their value, ignores the projection and any scale.
 * @param {boolean} [options.inverseplot=false] True if the symbol should not scale based on the plot scale, should not be used with .
 * @param {geotoolkit.util.ColorProvider|string} [options.colorprovider='red'] A color provider or a single color in css format
 * @param {number} [options.opacity=1] The symbols opacity
 * @param {number} [options.precision=~8] This factor is used to determine how many triangles will be used for each symbol
 */
geotoolkit3d.scene.pointset.PointSet = {};
    /**
     * Enum of symbols.<br>
     * <br>
     * The functions provided by this enum are responsible of loading/creating a Three.Geometry that will be used to display a symbol in 3D.
     * @enum
     * @readonly
     */
    geotoolkit3d.scene.pointset.PointSet.Symbol = {};
        /**
         * A sphere symbol
         * @type {function}
         */
        geotoolkit3d.scene.pointset.PointSet.Symbol.sphere = {};
        /**
         * A cube symbol
         * @type {function}
         */
        geotoolkit3d.scene.pointset.PointSet.Symbol.cube = {};
        /**
         * A pyramid symbol
         * @type {function}
         */
        geotoolkit3d.scene.pointset.PointSet.Symbol.pyramid = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {number} [options.symbolminsize] The size of the symbol in pixels/model for the smallest value
     * @param {number} [options.symbolmaxsize] The size of the symbol in pixels/model for the biggest value
     * @param {geotoolkit.util.ColorProvider|string} [options.colorprovider] A color provider or a single color in css format
     * @param {number} [options.opacity] The symbols opacity
     * @returns {geotoolkit3d.scene.pointset.PointSet} this
     */
    geotoolkit3d.scene.pointset.PointSet.prototype.setOptions = function(options){};
    /**
     * Changes the visibility of a point
     * @param {number} index The point index
     * @param {boolean} visibility The new visibility state
     * @returns {geotoolkit3d.scene.pointset.PointSet} this
     */
    geotoolkit3d.scene.pointset.PointSet.prototype.setPointVisible = function(index, visibility){};

/**
 * PointCloud is a set of 3D coordinates rendered as symbols.<br>
 * <br>
 * It's similar to a PointSet and share most of the same API with it (even if they don't share a common parent interface).<br>
 * The main difference between PointSet and PointCloud is that a PointCloud can handle larger sets of data.<br>
 * However it uses BumpMapping to emulate the symbols which lowers the quality of the rendering of each symbol.<br>
 * <br>
 * For large datasets, it's recommended to use PointCloud.<br>
 *
 * @class geotoolkit3d.scene.pointset.PointCloud
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {number[]} options.data.x The x values
 * @param {number[]} options.data.y The y values
 * @param {number[]} options.data.z The elevation values
 * @param {Float32Array} [options.data.xyz] The x, y and z values already converted to a single xyz Float32Array.
 * @param {boolean[]} [options.data.visible=[true]] The visibility of each point
 * @param {number[]|number} [options.data.sizes=1] An attribute used to compute the size of the symbols on screen, can be an array or a single value
 * @param {number} [options.data.sizemin=min(sizes)] An optional minimum to use for 'sizes' normalization
 * @param {number} [options.data.sizemax=max(sizes)] An optional maximum to use for 'sizes' normalization
 * @param {number[]|number} [options.data.values=null] A value attribute used for coloring the symbols
 * @param {geotoolkit3d.scene.pointset.PointCloud.Symbol|THREE.Texture} [options.symbol=PointCloud.Symbol.sphere] The symbol from the enum or a THREE.Texture
 * @param {number} [options.symbolminsize=2] The size of the symbol in pixels for the smallest value
 * @param {number} [options.symbolmaxsize=7] The size of the symbol in pixels for the biggest value
 * @param {number} [options.alphatest=0.8] The alpha value to use for sharpness correction, the bigger the 'sharper' [0,1].
 * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider='red'] A color provider or a single color in css format
 */
geotoolkit3d.scene.pointset.PointCloud = {};
    /**
     * Enum of builtin symbols.<br>
     * <br>
     * The functions provided by this enum are responsible of loading/creating a bump mapping Texture that will be used to display a symbol in 3D.
     * @enum
     * @readonly
     */
    geotoolkit3d.scene.pointset.PointCloud.Symbol = {};
        /**
         * A sphere symbol
         * @type {function}
         */
        geotoolkit3d.scene.pointset.PointCloud.Symbol.sphere = {};
        /**
         * A cube symbol
         * @type {function}
         */
        geotoolkit3d.scene.pointset.PointCloud.Symbol.cube = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {number[]|number} [options.data.values] A value attribute used for coloring the symbols
     * @param {number[]|number} [options.data.sizes] An attribute used to compute the size of the symbols on screen, can be an array or a single value
     * @param {number} [options.data.sizemin=min(sizes)] An optional minimum to use for 'sizes' normalization (used only if new sizes are provided)
     * @param {number} [options.data.sizemax=max(sizes)] An optional maximum to use for 'sizes' normalization (used only if new sizes are provided)
     * @param {boolean[]|boolean} [options.data.visible] An attribute used to turn on/off visibility of points
     * @param {number} [options.symbolminsize] The symbols minimum size, used to compute the final symbol size on screen (based on the 'sizes' attributes)
     * @param {number} [options.symbolmaxsize] The symbols maximum size, used to compute the final symbol size on screen (based on the 'sizes' attributes)
     * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider] A color provider or a single color in css format
     * @param {number} [options.alphatest] The alpha value to use for sharpness correction, the bigger the 'sharper' [0,1].
     * @returns {geotoolkit3d.scene.pointset.PointCloud} this
     */
    geotoolkit3d.scene.pointset.PointCloud.prototype.setOptions = function(options){};
    /**
     * Changes the visibility of a point
     * @param {number} index The point index
     * @param {boolean} visibility The new visibility of the point
     * @deprecated Please use setPointOptions instead
     */
    geotoolkit3d.scene.pointset.PointCloud.prototype.setPointVisible = function(index, visibility){};
    /**
     * Set per point options, note that it's more efficient to use setOptions() to modify large ensemble of points.
     * @param {number} index The index of the point to edit
     * @param {object} options The options
     * @param {boolean} [options.visible] The visibility of the point
     * @param {number} [options.size] The size of the point
     * @param {number} [options.value] The value of the point (used for color)
     * @returns {geotoolkit3d.scene.pointset.PointCloud} this
     */
    geotoolkit3d.scene.pointset.PointCloud.prototype.setPointOptions = function(index, options){};
    /**
     * Get the attributes of a point at the given index.<br>
     * <pre>
     * {
     * 'visible': {boolean},
     * 'size': {number},
     * 'value': {number}
     * </pre>
     * @returns {object} The point status & attributes
     */
    geotoolkit3d.scene.pointset.PointCloud.prototype.getPointOptions = function(){};

/**
 * A filled ellipse geometry.<br>
 * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
 *
 * @class geotoolkit3d.scene.ellipse.FilledEllipseGeometry
 * @augments THREE.Geometry
 */
geotoolkit3d.scene.ellipse.FilledEllipseGeometry = {};

/**
 * A ellipse geometry to be used with THREE.Line.<br>
 * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
 *
 * @class geotoolkit3d.scene.ellipse.EllipseGeometry
 * @augments THREE.Geometry
 */
geotoolkit3d.scene.ellipse.EllipseGeometry = {};

/**
 * A 3D grid object.<br>
 * <br>
 * This object provides a shape that can be used to display axis/grids in a 3D scene.<br>
 * The grid is composed of 6 planes that can be made visible independently, see {@link geotoolkit3d.scene.grid.Grid.Mode}.<br>
 * <br>
 * The grid location and size can be configured independently of its labels.<br>
 * The actual values displayed and the location/size of the grid is left to the calling code.<br>
 * <br>
 * To do so, the grid actual location and size can be configured through 'start/end'.<br>
 * And its labels can be configured through 'modelstart/model/end'.<br>
 * <br>
 * grid planes are made of grid axis (borders) and grid lines (intermediate ticks).<br>
 *
 * @class geotoolkit3d.scene.grid.Grid
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {THREE.Vector3} [options.start] The start location of the grid in world coordinates
 * @param {THREE.Vector3} [options.end] The end location of the grid in world coordinates
 * @param {THREE.Vector3} [options.modelstart=options.start] The displayed value's start
 * @param {THREE.Vector3} [options.modelend=options.end] The displayed value's end
 * @param {THREE.Vector3} [options.counts=new THREE.Vector3(5,5,5)] The grid tick counts (at least 2,2,2)
 * @param {object} [options.axis.linestyles] Defines the axis linestyles. Note that linestyle.width is not supported by windows-webgl.
 * @param {geotoolkit.attributes.LineStyle} [options.axis.linestyles.x=geotoolkit.attributes.LineStyle('white')] The X axis line style
 * @param {geotoolkit.attributes.LineStyle} [options.axis.linestyles.y=geotoolkit.attributes.LineStyle('white')] The Y axis line style
 * @param {geotoolkit.attributes.LineStyle} [options.axis.linestyles.z=geotoolkit.attributes.LineStyle('white')] The Z axis line style
 * @param {object} [options.axis.textstyles] Defines the axis labels style
 * @param {geotoolkit.attributes.TextStyle} [options.axis.textstyles.x=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '11px Arial'})] The X axis label style
 * @param {geotoolkit.attributes.TextStyle} [options.axis.textstyles.y=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '11px Arial'})] The Y axis label style
 * @param {geotoolkit.attributes.TextStyle} [options.axis.textstyles.z=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '11px Arial'})] The Z axis label style
 * @param {object} [options.axis.formatters] The functions responsible of formatting the axis values to text
 * @param {function} [options.axis.formatters.x=toFixed(0)] The X axis label formatter
 * @param {function} [options.axis.formatters.y=toFixed(0)] The Y axis label formatter
 * @param {function} [options.axis.formatters.z=toFixed(0)] The Z axis label formatter
 * @param {object} [options.title] The axis titles
 * @param {number} [options.title.distance=1] Factor (between 0 and 1) used to determine title position compared to the axis. (0 being closer to the axis)
 * @param {string} [options.title.texts.x='X'] The X axis title
 * @param {string} [options.title.texts.y='Y'] The Y axis title
 * @param {string} [options.title.texts.z='Z'] The Z axis title
 * @param {object} [options.title.textstyles] The axis title styles
 * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.x=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '13px Arial'})] The X axis title text style
 * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.y=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '13px Arial'})] The Y axis title text style
 * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.z=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '13px Arial'})] The Z axis title text style
 * @param {object} [options.grid.linestyles] The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
 * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.x=geotoolkit.attributes.LineStyle('grey')] The X grid line style
 * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.y=geotoolkit.attributes.LineStyle('grey')] The Y grid line style
 * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.z=geotoolkit.attributes.LineStyle('grey')] The Z grid line style
 * @param {geotoolkit3d.scene.grid.Grid.Mode} [options.mode=geotoolkit3d.scene.grid.Grid.Mode.back] The display strategy to show/hide grid planes depending on camera position
 */
geotoolkit3d.scene.grid.Grid = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {THREE.Vector3} [options.start] The start location of the grid in world coordinates
     * @param {THREE.Vector3} [options.end] The end location of the grid in world coordinates
     * @param {THREE.Vector3} [options.modelstart] The displayed value's start
     * @param {THREE.Vector3} [options.modelend] The displayed value's end
     * @param {THREE.Vector3} [options.counts] The grid tick counts (at least 2,2,2)
     * @param {object} [options.axis.linestyles] Defines the axis linestyles. Note that linestyle.width is not supported by windows-webgl.
     * @param {geotoolkit.attributes.LineStyle} [options.axis.linestyles.x] The X axis line style
     * @param {geotoolkit.attributes.LineStyle} [options.axis.linestyles.y] The Y axis line style
     * @param {geotoolkit.attributes.LineStyle} [options.axis.linestyles.z] The Z axis line style
     * @param {object} [options.axis.textstyles] Defines the axis labels style
     * @param {geotoolkit.attributes.TextStyle} [options.axis.textstyles.x] The X axis label style
     * @param {geotoolkit.attributes.TextStyle} [options.axis.textstyles.y] The Y axis label style
     * @param {geotoolkit.attributes.TextStyle} [options.axis.textstyles.z] The Z axis label style
     * @param {object} [options.axis.formatters] The functions responsible of formatting the axis values to text
     * @param {function} [options.axis.formatters.x] The X axis label formatter
     * @param {function} [options.axis.formatters.y] The Y axis label formatter
     * @param {function} [options.axis.formatters.z] The Z axis label formatter
     * @param {object} [options.title] The axis titles
     * @param {string} [options.title.texts.x] The X axis title
     * @param {string} [options.title.texts.y] The Y axis title
     * @param {string} [options.title.texts.z] The Z axis title
     * @param {object} [options.title.textstyles] The axis title styles
     * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.x] The X axis title text style
     * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.y] The Y axis title text style
     * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.z] The Z axis title text style
     * @param {object} [options.grid.linestyles] The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
     * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.x] The X grid line style
     * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.y] The Y grid line style
     * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.z] The Z grid line style
     * @param {geotoolkit3d.scene.grid.Grid.Mode} [options.mode] The display strategy to show/hide grid planes depending on camera position
     */
    geotoolkit3d.scene.grid.Grid.prototype.setOptions = function(options){};
    /**
     * Return the grid's location 'start'
     * @returns {THREE.Vector3}
     */
    geotoolkit3d.scene.grid.Grid.prototype.getStart = function(){};
    /**
     * Return the grid's location 'end'
     * @returns {THREE.Vector3}
     */
    geotoolkit3d.scene.grid.Grid.prototype.getEnd = function(){};
    /**
     * Return the grid's mode
     * @returns {geotoolkit3d.scene.grid.Grid.Mode} The grid mode
     */
    geotoolkit3d.scene.grid.Grid.prototype.getMode = function(){};
    /**
     * Return the grid's tick counts
     * @returns {THREE.Vector3|null} The ticks count
     */
    geotoolkit3d.scene.grid.Grid.prototype.getCounts = function(){};
    /**
     * Return the grid's 'modelstart'
     * @returns {THREE.Vector3|null} The grid's modelstart
     */
    geotoolkit3d.scene.grid.Grid.prototype.getModelStart = function(){};
    /**
     * Return the grid's 'modelend'
     * @returns {THREE.Vector3|null} The grid's modelend
     */
    geotoolkit3d.scene.grid.Grid.prototype.getModelEnd = function(){};
    /**
     * Enum of Plane display strategy.<br>
     * <br>
     * The functions provided by this enum are used to define which plane of the grid should be visible.<br>
     * The grid always has 6 planes (one for each face), those strategies determine if some plane should be hidden to let the user see
     * through it.<br>
     *
     * @enum
     * @readonly
     */
    geotoolkit3d.scene.grid.Grid.Mode = {};
        /**
         * Always show all grid planes
         * @type {function}
         */
        geotoolkit3d.scene.grid.Grid.Mode.box = {};
        /**
         * Show grid planes that do not overlap any other grid planes.
         * @type {function}
         */
        geotoolkit3d.scene.grid.Grid.Mode.openbox = {};
        /**
         * Show only the grid planes that are facing the camera (IE: only and at most 3 planes visible at all times)
         * @type {function}
         */
        geotoolkit3d.scene.grid.Grid.Mode.back = {};
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     *<br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call beforeRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
     *<br>
     * This will be executed after the transformations simplification.<br>
     *<br>
     * @see geotoolkit3d.Plot for more details on the render steps
     * @override
     * @param {THREE.Scene} scene The scene
     * @param {THREE.Camera} camera The camera used for this render phase.
     * @param {geotoolkit3d.Plot} plot The 3D plot
     * @param {THREE.Renderer} renderer The renderer
     */
    geotoolkit3d.scene.grid.Grid.prototype.beforeRender = function(scene, camera, plot, renderer){};

/**
 * A polar grid for 3D.<br>
 * <br>
 * The grid can be positioned in space using its position attribute.<br>
 * The labels/ticks displayed are controlled trough 'modelCenter' and 'modelSize'
 * <br>
 *
 * @class geotoolkit3d.scene.grid.PolarGrid
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {number} [options.modelcenter=0] The center of the polar grid's model
 * @param {number} [options.modelsize=10] The size of the polar grid's model
 * @param {number} [options.count=3] The grid tick count
 * @param {object} [options.axis] The axis options
 * @param {geotoolkit.attributes.LineStyle} [options.axis.linestyle=geotoolkit.attributes.LineStyle('white')] Defines the axis linestyle. Note that linestyle.width is not supported by windows-webgl.
 * @param {geotoolkit.attributes.TextStyle} [options.axis.textstyle=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '11px Arial'})] The axis textstyle
 * @param {function} [options.axis.formatter=toFixed(0)] Function responsible of formatting the axis text values
 * @param {object} [options.grid] The grid options
 * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyle=geotoolkit.attributes.LineStyle('grey')] Defines the grid linestyle. Note that linestyle.width is not supported by windows-webgl.
 */
geotoolkit3d.scene.grid.PolarGrid = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {number} [options.modelcenter] The center of the polar grid's model
     * @param {number} [options.modelsize] The size of the polar grid's model
     * @param {number} [options.count] The grid tick count
     * @param {object} [options.axis] The axis options
     * @param {geotoolkit.attributes.LineStyle} [options.axis.linestyle] Defines the axis linestyle. Note that linestyle.width is not supported by windows-webgl.
     * @param {geotoolkit.attributes.TextStyle} [options.axis.textstyle] The axis textstyle
     * @param {function} [options.axis.formatter] Function responsible of formatting the axis text values
     * @param {object} [options.grid] The grid options
     * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyle] Defines the grid linestyle. Note that linestyle.width is not supported by windows-webgl.
     */
    geotoolkit3d.scene.grid.PolarGrid.prototype.setOptions = function(options){};
    /**
     * Return the grid's tick counts
     * @returns {number} The tick count
     */
    geotoolkit3d.scene.grid.PolarGrid.prototype.getCount = function(){};
    /**
     * Return the grid's 'modelCenter'
     * @returns {THREE.Vector3} The center
     */
    geotoolkit3d.scene.grid.PolarGrid.prototype.getModelCenter = function(){};
    /**
     * Return the grid's 'modelSize'
     * @returns {THREE.Vector3} The size
     */
    geotoolkit3d.scene.grid.PolarGrid.prototype.getModelSize = function(){};

/**
 * Parent class for surfaces data.<br>
 * <br>
 * Surface data is responsible of consuming the raw data and converting it to triangles.<br>
 * Those triangles will be stored in {@link THREE.BufferAttribute} as vertices and indices.<br>
 * <br>
 * Inheriting classes should provide data for surface objects through the implementation of getAttributes.<br>
 *
 * @class geotoolkit3d.data.surface.AbstractSurfaceData
 * @param {object} [options] The options to use to create the surface
 * @param {object} [options.trianglestrip=true] resulting data should be a trianglestrip
 * @param {object} [options.interleaved=false] resulting data should be a interleaved
 * @param {object} [options.bufferpadding=0] resulting interleaved data should leave bufferpadding
 */
geotoolkit3d.data.surface.AbstractSurfaceData = {};
    /**
     * Returns the vertex/index attributes
     * @function
     * @abstract
     * @returns {object} attributes The attributes
     * @returns {THREE.BufferAttribute} attributes.position The vertices
     * @returns {THREE.BufferAttribute} attributes.index The indices
     * @returns {boolean} attributes.trianglestrip If triangles are trianglestrips
     */
    geotoolkit3d.data.surface.AbstractSurfaceData.prototype.getAttributes = function(){};

/**
 * Surface data made of pillars that can be triangulated.<br>
 * <br>
 * The default triangulation algorithm requires that the given pillars are sorted.<br>
 * It also assumes that there is no overlapping/crossing between pillars.<br>
 * Pillars can have different point count.<br>
 * <br>
 * @class geotoolkit3d.data.surface.PillarSurfaceData
 * @augments geotoolkit3d.data.surface.AbstractSurfaceData
 * @param {object} options The options
 * @param {object} [options.data] The data options
 * @param {object[]} [options.data.pillars] An array of fault pillars
 * @param {number[]} [options.data.pillars.x] The x coordinates of a pillar
 * @param {number[]} [options.data.pillars.y] The y coordinates of a pillar
 * @param {number[]} [options.data.pillars.z] The z coordinates of a pillar
 */
geotoolkit3d.data.surface.PillarSurfaceData = {};
    /**
     * Returns the vertex/index attributes
     * @function
     * @returns {object} attributes The attributes
     * @returns {THREE.BufferAttribute} attributes.position The vertices
     * @returns {THREE.BufferAttribute} attributes.index The indices
     * @returns {boolean} attributes.trianglestrip If triangles are trianglestrips
     */
    geotoolkit3d.data.surface.PillarSurfaceData.prototype.getAttributes = function(){};

/**
 * Surface data made of an elevation grid that can be triangulated.<br>
 * <br>
 * The grid is expected to have column first:<br>
 * <pre>
 * [(0,0), (1,0), (2,0), (3,0), (0,1), (1,1), (2,1), (3,1), [...], (0,3), (1,3), (2,3), (3,3)]
 * </pre>
 * @class geotoolkit3d.data.surface.GridSurfaceData
 * @augments geotoolkit3d.data.surface.AbstractSurfaceData
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {number} options.data.width The grid width
 * @param {number} options.data.height The grid height
 * @param {number[]} [options.data.elevation] The elevation values to triangulate
 * @param {number} [options.data.nullvalue] The value representing a non-value elevation
 * @param {number[]} [options.data.value] optional Value array to instantiate
 * @param {number} [options.data.xmin=0] The grid x start
 * @param {number} [options.data.xstep=1] The grid x step
 * @param {number} [options.data.ymin=0] The grid y start
 * @param {number} [options.data.ystep=1] The grid y step
 */
geotoolkit3d.data.surface.GridSurfaceData = {};
    /**
     * Returns the vertex/index attributes
     * @function
     * @returns {object} attributes The attributes
     * @returns {THREE.BufferAttribute} attributes.position The vertices
     * @returns {THREE.BufferAttribute} attributes.index The indices
     * @returns {THREE.BufferAttribute} [attributes.normal] The normals if available
     * @returns {boolean} attributes.trianglestrip If triangles are trianglestrips
     * @returns {number} attributes.zmin The z minimum
     * @returns {number} attributes.zmax The z maximum
     */
    geotoolkit3d.data.surface.GridSurfaceData.prototype.getAttributes = function(){};

/**
 * Surface data that can be triangulated.<br>
 * @class geotoolkit3d.data.surface.SurfaceData
 * @augments geotoolkit3d.data.surface.AbstractSurfaceData
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {number[]} options.data.x The X values to triangulate
 * @param {number[]} options.data.y The Y values to triangulate
 * @param {number[]} options.data.z The Z values to triangulate
 * @param {number} [options.data.nullvalue] The value representing a non-value elevation
 * @param {number[]} [options.data.value] optional Value array to instantiate
 */
geotoolkit3d.data.surface.SurfaceData = {};
    /**
     * Returns the vertex/index attributes
     * @function
     * @returns {object} attributes The attributes
     * @returns {THREE.BufferAttribute} attributes.position The vertices
     * @returns {THREE.BufferAttribute} attributes.index The indices
     * @returns {THREE.BufferAttribute} [attributes.normal] The normals if available
     * @returns {boolean} attributes.trianglestrip If triangles are trianglestrips
     * @returns {number} attributes.zmin The z minimum
     * @returns {number} attributes.zmax The z maximum
     */
    geotoolkit3d.data.surface.SurfaceData.prototype.getAttributes = function(){};

/**
 * Surface data made of triangles (vertices and indices).<br>
 *
 * @class geotoolkit3d.data.surface.TrimeshSurfaceData
 * @augments geotoolkit3d.data.surface.AbstractSurfaceData
 * @param {object} options
 * @param {object} options.data
 * @param {number[] | THREE.BufferAttribute} options.data.xyz The vertices values as x, y and elevation
 * @param {number[] | THREE.BufferAttribute} options.data.indices The triangles indices
 * @param {boolean} options.usetrianglestrips Defines if the given indices should be used as trianglestrips or regular triangles
 */
geotoolkit3d.data.surface.TrimeshSurfaceData = {};
    /**
     * Returns the vertex/index attributes
     * @function
     * @returns {object} attributes The attributes
     * @returns {THREE.BufferAttribute} attributes.position The vertices
     * @returns {THREE.BufferAttribute} attributes.index The indices
     * @returns {boolean} attributes.trianglestrip If triangles are trianglestrips
     */
    geotoolkit3d.data.surface.TrimeshSurfaceData.prototype.getAttributes = function(){};

/**
 * Surface data using a heightmap.<br>
 * <br>
 * This surface data object implements a {@link https://en.wikipedia.org/wiki/Heightmap heighmap}.<br>
 * Elevations are stored as normalized values into the given 2D texture.<br>
 *
 * @class geotoolkit3d.data.surface.HeightMapSurfaceData
 * @augments geotoolkit3d.data.surface.AbstractSurfaceData
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {THREE.Texture} options.data.heightmap The elevation map as a texture. Note that it's assumed to be greyscale
 * @param {number} [options.data.xmin=0] The grid x start
 * @param {number} [options.data.xstep=1] The grid x step
 * @param {number} [options.data.ymin=0] The grid y start
 * @param {number} [options.data.ystep=1] The grid y step
 */
geotoolkit3d.data.surface.HeightMapSurfaceData = {};
    /**
     * Returns the vertex/index attributes
     * @function
     * @returns {object} attributes The attributes
     * @returns {THREE.BufferAttribute} attributes.position The vertices
     * @returns {THREE.BufferAttribute} attributes.index The indices
     * @returns {boolean} attributes.trianglestrip If triangles are trianglestrips
     */
    geotoolkit3d.data.surface.HeightMapSurfaceData.prototype.getAttributes = function(){};

/**
 * A Surface 3D object.<br>
 * <br>
 * This object represents a 3D surface with an optional attribute used for coloring.<br>
 * The surface's geometry is defined by the given SurfaceData.<br>
 * <br>
 * The surface will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
 * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
 * <br>
 * @class geotoolkit3d.scene.surface.Surface
 * @augments geotoolkit3d.scene.Object3D
 *
 * @param {object} options The options to use to create the surface
 * @param {object} options.data The data to use to create the surface
 * @param {geotoolkit3d.data.surface.AbstractSurfaceData} options.data.surface The surface geometry data object
 * @param {number[]} [options.data.values] The attribute values used to colorize the surface
 * @param {number} [options.data.nullvalue] The attribute nullvalue to introduce holes in the surface
 * @param {geotoolkit.util.ColorProvider|string|THREE.Color} [options.colorprovider='red'] A color provider or a single color in css format
 */
geotoolkit3d.scene.surface.Surface = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options to change
     * @param {number[]} [options.data.values] attribute values used to colorize the surface
     * @param {number} [options.data.nullvalue] attribute nullvalue to introduce holes in the surface
     * @param {geotoolkit.util.ColorProvider|string} [options.colorprovider] A color provider or a single color in css format
     * @returns {geotoolkit3d.scene.surface.Surface} this
     */
    geotoolkit3d.scene.surface.Surface.prototype.setOptions = function(options){};

/**
 * Surface data made of contour lines that can be triangulated.<br>
 * @class geotoolkit3d.data.surface.ContourLineData
 * @augments geotoolkit3d.data.surface.AbstractSurfaceData
 * @param {object} options The options
 * @param {object} options.data The data options
 * @param {object[]} options.data.lines An array of contour lines
 * @param {number[]} options.data.lines.x The x coordinates of the line
 * @param {number[]} options.data.lines.y The y coordinates of the line
 * @param {number} options.data.lines.z The z coordinate of the line
 */
geotoolkit3d.data.surface.ContourLineData = {};
    /**
     * Returns the vertex/index attributes
     * @function
     * @returns {object} attributes The attributes
     * @returns {THREE.BufferAttribute} attributes.position The vertices
     * @returns {THREE.BufferAttribute} attributes.index The indices
     * @returns {number} attributes.xmin bounding box x coord min value
     * @returns {number} attributes.xmax bounding box x coord max value
     * @returns {number} attributes.ymin bounding box y coord min value
     * @returns {number} attributes.ymax bounding box y coord max value
     * @returns {number} attributes.zmin bounding box z coord min value
     * @returns {number} attributes.zmax bounding box z coord max value
     * @returns {number} attributes.valuemin min value for values
     * @returns {number} attributes.valuemax max value for values
     * @returns {number[]} attributes.values color value array
     */
    geotoolkit3d.data.surface.ContourLineData.prototype.getAttributes = function(){};

/**
 * Utility class offering various functions to manipulate attributes and threejs materials.<br>
 * @class geotoolkit3d.AttributesUtil
 * @deprecated Use geotoolkit3d.util.Attributes instead
 */
geotoolkit3d.AttributesUtil = {};

/**
 * Utility class providing glsl code snippets that can be included in shaders.<br>
 * @class geotoolkit3d.ShaderUtil
 * @deprecated Use geotoolkit3d.util.Shaders instead
 */
geotoolkit3d.ShaderUtil = {};

/**
 * Utility class to manage colorprovider in 3D.<br>
 * @class geotoolkit3d.ColorMapUtil
 * @deprecated Use geotoolkit3d.util.ColorMap instead
 */
geotoolkit3d.ColorMapUtil = {};

/**
 * This utility class provides functions to deal with common 3D related math problems.
 * @class geotoolkit3d.Math
 * @deprecated Use geotoolkit3d.util.Math instead
 */
geotoolkit3d.Math = {};

/**
 * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
 * @class geotoolkit3d.scene.Event
 * @deprecated Use geotoolkit3d.Event instead
 */
geotoolkit3d.scene.Event = {};

/**
 * Surface data using a heightmap.<br>
 * @class geotoolkit3d.scene.surface.HeightMapSurfaceData
 * @deprecated Use geotoolkit3d.data.surface.HeightMapSurfaceData instead
 */
geotoolkit3d.scene.surface.HeightMapSurfaceData = {};

/**
 * Surface data made of an elevation grid that can be triangulated.<br>
 * @class geotoolkit3d.scene.surface.GridSurfaceData
 * @deprecated Use geotoolkit3d.data.surface.GridSurfaceData instead
 */
geotoolkit3d.scene.surface.GridSurfaceData = {};

/**
 * Surface data made of triangles (vertices and indices).<br>
 * @class geotoolkit3d.scene.surface.TrimeshSurfaceData
 * @deprecated Use geotoolkit3d.data.surface.TrimeshSurfaceData instead
 */
geotoolkit3d.scene.surface.TrimeshSurfaceData = {};

/**
 * Parent class for surfaces data.<br>
 * @class geotoolkit3d.scene.surface.AbstractSurfaceData
 * @deprecated Use geotoolkit3d.data.surface.AbstractSurfaceData instead
 */
geotoolkit3d.scene.surface.AbstractSurfaceData = {};

/**
 * Surface data made of pillars that can be triangulated.<br>
 * @class geotoolkit3d.scene.surface.PillarSurfaceData
 * @deprecated Use geotoolkit3d.data.surface.PillarSurfaceData instead
 */
geotoolkit3d.scene.surface.PillarSurfaceData = {};

/**
 * Surface data that can be triangulated.<br>
 * @class geotoolkit3d.scene.surface.SurfaceData
 * @deprecated Use geotoolkit3d.data.surface.SurfaceData instead
 */
geotoolkit3d.scene.surface.SurfaceData = {};

/**
 * Surface data made of contour lines that can be triangulated.<br>
 * @class geotoolkit3d.scene.surface.ContourLineData
 * @deprecated Use geotoolkit3d.data.surface.ContourLineData instead
 */
geotoolkit3d.scene.surface.ContourLineData = {};

