/** @namespace */
geotoolkit3d.scene.reservoir = {};
    /**
     * Enum of Reservoir Skeleton Modes.<br>
     * <br>
     * The values of this enums can be used to determine the rendering mode of a reservoir.
     * @enum
     * @readonly
     */
    geotoolkit3d.scene.reservoir.DisplayMode = {};
        /**
         * Show everything: the property, the grid mesh and the horizons
         * @type {boolean[]}
         */
        geotoolkit3d.scene.reservoir.DisplayMode.Full = {};
        /**
         * Show everything but the horizons
         * @type {boolean[]}
         */
        geotoolkit3d.scene.reservoir.DisplayMode.IgnoreHorizons = {};
        /**
         * Show everything but the grid mesh
         * @type {boolean[]}
         */
        geotoolkit3d.scene.reservoir.DisplayMode.IgnoreMesh = {};
        /**
         * Show everything but the grid property
         * @type {boolean[]}
         */
        geotoolkit3d.scene.reservoir.DisplayMode.IgnoreProperty = {};
        /**
         * Show only the property
         * @type {boolean[]}
         */
        geotoolkit3d.scene.reservoir.DisplayMode.Property = {};
        /**
         * Show only the grid mesh
         * @type {boolean[]}
         */
        geotoolkit3d.scene.reservoir.DisplayMode.Mesh = {};
        /**
         * Show only the horizons
         * @type {boolean[]}
         */
        geotoolkit3d.scene.reservoir.DisplayMode.Horizons = {};
        /**
         * Hide all
         * @type {boolean[]}
         */
        geotoolkit3d.scene.reservoir.DisplayMode.Nothing = {};

/** @namespace */
geotoolkit3d.data.reservoir = {};

/** @namespace */
geotoolkit3d.data.reservoir.hexahedral = {};

/** @namespace */
geotoolkit3d.scene.reservoir.hexahedral = {};

/** @namespace */
geotoolkit3d.scene.reservoir.cartesian = {};

/** @namespace */
geotoolkit3d.data.reservoir.cartesian = {};

/**
 * Parent class for reservoir data
 *
 * @class geotoolkit3d.data.reservoir.AbstractReservoirData
 * @param {object} options
 */
geotoolkit3d.data.reservoir.AbstractReservoirData = {};
    /**
     * Returns the vertex/index attributes
     * @function
     * @abstract
     * @returns {object} {'position': THREE.BufferAttribute, 'color': THREE.BufferAttribute}
     */
    geotoolkit3d.data.reservoir.AbstractReservoirData.prototype.getAttributes = function(){};

/**
 * A Reservoir IJK index
 *
 * This object represents a cell index
 *
 * @class geotoolkit3d.scene.reservoir.IJKIndex
 *
 * @param {number | object | Array<number>} options The input for IJK coordinates as an object or an array
 * @param {number} [options.i] I coordinate
 * @param {number} [options.j] J coordinate
 * @param {number} [options.k] K coordinate
 */
geotoolkit3d.scene.reservoir.IJKIndex = {};
    /**
     * Set the ijk coordinate from the given array ([i, j, k])
     * @param {number[]} array The array containing the ijk values
     */
    geotoolkit3d.scene.reservoir.IJKIndex.prototype.fromArray = function(array){};
    /**
     * Set the value of the object<br>
     * @param {object} options The input for IJK coordinates as an object
     * @param {number} [options.i] I coordinate
     * @param {number} [options.j] J coordinate
     * @param {number} [options.k] K coordinate
     */
    geotoolkit3d.scene.reservoir.IJKIndex.prototype.fromJson = function(options){};
    /**
     * Get a json representation of the object<br>
     * @returns {object} options
     * @returns {number} [options.i] I coordinate
     * @returns {number} [options.j] J coordinate
     * @returns {number} [options.k] K coordinate
     */
    geotoolkit3d.scene.reservoir.IJKIndex.prototype.toJSON = function(){};
    /**
     * Set the the ijk values
     * @param {number} i The I coordinate
     * @param {number} j The J coordinate
     * @param {number} k The K coordinate
     * @returns {geotoolkit3d.scene.reservoir.IJKIndex} this
     */
    geotoolkit3d.scene.reservoir.IJKIndex.prototype.set = function(i, j, k){};
    /**
     * Set the ijk coordinates.
     * @param {number | object | Array<number>} options The input for IJK coordinates as an object or an array or the I coordinate
     * @param {number} [options.i] I coordinate
     * @param {number} [options.j] J coordinate
     * @param {number} [options.k] K coordinate
     * @param {number} [j] J coordinate
     * @param {number} [k] K coordinate
     * @returns {geotoolkit3d.scene.reservoir.IJKIndex} this
     */
    geotoolkit3d.scene.reservoir.IJKIndex.prototype.setOptions = function(options, j, k){};

/**
 * Reservoir data using hexahedral geometry.
 *
 * @see geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.setCellOptions
 * @class geotoolkit3d.data.reservoir.hexahedral.ReservoirData
 * @augments geotoolkit3d.data.reservoir.AbstractReservoirData
 * @param {object} [options]
 * @param {object[]} [options.cells] The cells values.
 * @param {geotoolkit3d.scene.reservoir.IJKIndex | object |Array<number>} [options.ijkcount] The I,J,K dimensions of the grid
 */
geotoolkit3d.data.reservoir.hexahedral.ReservoirData = {};
    /**
     * Returns the reservoir data's attributes
     * @returns {object} attributes
     * @returns {THREE.BufferAttribute} [attributes.position]
     * @returns {THREE.BufferAttribute} [attributes.values]
     * @returns {THREE.BufferAttribute} [attributes.ijk]
     * @returns {number} [attributes.minvalue]
     * @returns {number} [attributes.maxvalue]
     * @returns {number} [attributes.mini]
     * @returns {number} [attributes.maxi]
     * @returns {number} [attributes.minj]
     * @returns {number} [attributes.maxj]
     * @returns {number} [attributes.mink]
     * @returns {number} [attributes.maxk]
     */
    geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.getAttributes = function(){};
    /**
     * Returns the index for the reservoir cell
     * @param {number} i i value for this cell
     * @param {number} j j value for this cell
     * @param {number} k k value for this cell
     * @returns {number | null} index for this i j k cell (null if the cell doesn't exist)
     */
    geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.getIndexForCell = function(i, j, k){};
    /**
     * This function clears all buffers and geometry.
     * @returns {geotoolkit3d.data.reservoir.hexahedral.ReservoirData}
     */
    geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.reset = function(){};
    /**
     * Set several cells options, see #setCellOptions() for detailed documentation.
     * @param {object[]} cells cells to set options on
     * @returns {geotoolkit3d.data.reservoir.hexahedral.ReservoirData} this
     */
    geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.setCellsOptions = function(cells){};
    /**
     * @function
     * @desc
     * Set Parameters of a given cell<br>
     *<br>
     * The geometrical data are expected in a regular order, see example<br>
     * <br>
     * x values are [xA, xB, xC, xD, xE, xF, xG, xH],<br>
     * y values are [yA, ..., yH] and z values are [zA, ..., zH]<br>
     *<br>
     * The cell geometry does not need to be orthogonal.<br>
     * It is strongly recommended that each face (ABDC, CDHG, GEAC...) is entirely included in a 3D plane.<br>
     *
     *
     * @param {object} celldata The cell data
     * @param {geotoolkit3d.scene.reservoir.IJKIndex | object | Array<number>} [celldata.ijk] The ijk index of the cell
     * @param {Array<number>} [celldata.x] The x values for the 8 vertices
     * @param {Array<number>} [celldata.y] The y values for the 8 vertices
     * @param {Array<number>} [celldata.z] The z values for the 8 vertices
     * @param {number} [celldata.value] The cell value
     *
     * @example
     *
     * x |------>
     *
     * A ------- B __
     * |\ |\ \
     * | \ | \ \ y
     * | C ------- D _ v
     * E -|----- F | |
     * \ | \ | | z
     * \| \| |
     * G ------- H v
     */
    geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.setCellOptions = function(celldata){};
    /**
     * Returns the number of cells in the data object
     * @returns {number} number of cells
     */
    geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.getNumberOfCells = function(){};
    /**
     * Returns the Cell Data
     * @param {geotoolkit3d.scene.reservoir.IJKIndex} ijk The index
     * @returns {object | null} The cell data {x[],y[],z[],value}
     */
    geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.getCellData = function(ijk){};
    /**
     * Returns the ijk count for this data.
     * @returns {geotoolkit3d.scene.reservoir.IJKIndex}
     */
    geotoolkit3d.data.reservoir.hexahedral.ReservoirData.prototype.getIJKCount = function(){};

/**
 * A Reservoir object.<br>
 *
 * This object represents a 3D reservoir with an optional attribute used for coloring.<br>
 * The reservoir's geometry is defined by the given ReservoirData.<br>
 *
 * @class geotoolkit3d.scene.reservoir.hexahedral.ReservoirGrid
 * @augments geotoolkit3d.scene.Object3D
 *
 * @param {object} options The options
 * @param {geotoolkit3d.data.reservoir.hexahedral.ReservoirData} options.data The reservoir data
 * @param {THREE.Color} [options.color=new THREE.Color(0xffffff)] Optional single color for cell painting
 * @param {geotoolkit.util.ColorProvider} [options.colorprovider=null] A color provider to generate the colormap for cell painting
 * @param {number} [options.nullvalue=-999.25] The attribute nullvalue.<br>If some values are provided for coloring and if one of those values is equal to this nullvalue. <br>Then the cell won't be rendered.
 * @param {number} [options.minvalue] cells with greater than or equal to this value will be rendered.
 * @param {number} [options.maxvalue] cells with less than or equal to this value will be rendered.
 * @param {number} [options.mini] cells with greater than or equal to this value will be rendered.
 * @param {number} [options.maxi] cells with less than or equal to this value will be rendered.
 * @param {number} [options.minj] cells with greater than or equal to this value will be rendered.
 * @param {number} [options.maxj] cells with less than or equal to this value will be rendered.
 * @param {number} [options.mink] cells with greater than or equal to this value will be rendered.
 * @param {number} [options.maxk] cells with less than or equal to this value will be rendered.
 * @param {object} [options.skeleton] The skeleton options
 * @param {string} [options.skeleton.color] The skeleton color
 * @param {object[]} [options.skeleton.horizons] The significant horizons
 * @param {geotoolkit3d.scene.reservoir.DisplayMode} [options.mode] The reservoir display mode
 */
geotoolkit3d.scene.reservoir.hexahedral.ReservoirGrid = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options
     * @param {geotoolkit3d.data.reservoir.AbstractReservoirData} [options.data]
     * @param {geotoolkit.util.ColorProvider|string} [options.colorprovider='red'] A color provider or a single color in css format
     * @param {number} [options.nullvalue] The attribute nullvalue.<br>If some values are provided for coloring and if one of those values is equal to this nullvalue. <br>Then the cell won't be rendered.
     * @param {number} [options.minvalue] cells with greater than or equal to this value will be rendered.
     * @param {number} [options.maxvalue] cells with less than or equal to this value will be rendered.
     * @param {number} [options.mini] cells with greater than or equal to this value will be rendered.
     * @param {number} [options.maxi] cells with less than or equal to this value will be rendered.
     * @param {number} [options.minj] cells with greater than or equal to this value will be rendered.
     * @param {number} [options.maxj] cells with less than or equal to this value will be rendered.
     * @param {number} [options.mink] cells with greater than or equal to this value will be rendered.
     * @param {number} [options.maxk] cells with less than or equal to this value will be rendered.
     * @returns {geotoolkit3d.scene.reservoir.hexahedral.ReservoirGrid} this
     */
    geotoolkit3d.scene.reservoir.hexahedral.ReservoirGrid.prototype.setOptions = function(options){};

/**
 * Material used to do renderer picking on a Reservoir mesh.<br>
 *
 *
 * @class geotoolkit3d.picking.pickingrenderer.DefaultReservoirPickingMaterial
 * @augments geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial
 * @see {@link geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial} For details about picking-material.
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.DefaultReservoirPickingMaterial = {};

/**
 * A material implementing Lambertertian reflectance and colormap logic through a texture.<br>
 * <br>
 * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
 * This float value (per vertex) will be used ot retrieve a color in the given colorprovider (converted to a colormap texture).<br>
 * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
 * Lighting will be applied to this color using the same algorithm that THREE.LambertMeshMaterial.<br>
 * <br>
 * If the given colorprovider is null then only the single color will be used (lighting still applies).<br>
 * <br>
 * @see geotoolkit3d.util.Shaders
 *
 * @class geotoolkit3d.scene.reservoir.hexahedral.SkeletonMaterial
 * @augments THREE.LineBasicMaterial
 * @param {object} options The options
 * @param {THREE.Color} [options.color=new THREE.Color(0xffffff)] Optional single color
 * @param {geotoolkit.util.ColorProvider} [options.colorprovider=null] A color provider to generate the colormap
 */
geotoolkit3d.scene.reservoir.hexahedral.SkeletonMaterial = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {THREE.Color} [options.color] Optional single color (reset to white if a colorprovider is given)
     * @param {geotoolkit.util.ColorProvider} [options.colorprovider] A color provider to generate the colormap
     * @returns {geotoolkit3d.scene.reservoir.hexahedral.SkeletonMaterial} this
     */
    geotoolkit3d.scene.reservoir.hexahedral.SkeletonMaterial.prototype.setOptions = function(options){};

/**
 * Parent class for reservoir data
 * @class geotoolkit3d.scene.reservoir.AbstractReservoirData
 * @deprecated Use geotoolkit3d.data.reservoir.AbstractReservoirData instead
 */
geotoolkit3d.scene.reservoir.AbstractReservoirData = {};

/**
 * Reservoir data using hexahedral geometry.
 * @class geotoolkit3d.scene.reservoir.hexahedral.ReservoirData
 * @augments geotoolkit3d.data.reservoir.hexahedral.ReservoirData
 * @deprecated Since 2.5 Use geotoolkit3d.data.reservoir.hexahedral.ReservoirData instead
 * @param {object} [options]
 * @param {object[]} [options.cells] The cells values.
 * @param {geotoolkit3d.scene.reservoir.IJKIndex | object |Array<number>} [options.ijkcount] The I,J,K dimensions of the grid
 */
geotoolkit3d.scene.reservoir.hexahedral.ReservoirData = {};

