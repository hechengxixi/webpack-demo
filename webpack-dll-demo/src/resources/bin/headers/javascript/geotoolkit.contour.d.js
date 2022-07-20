/**
 * API to display a gridded or triangulated surface as a set of contours
 * @namespace */
geotoolkit.contour = {};

/** @namespace */
geotoolkit.contour.util = {};

/** @namespace */
geotoolkit.contour.events = {};

/** @namespace */
geotoolkit.contour.projections = {};

/** @namespace */
geotoolkit.contour.faults = {};

/** @namespace */
geotoolkit.contour.strategy = {};

/** @namespace */
geotoolkit.contour.processor = {};

/** @namespace */
geotoolkit.contour.scale = {};

/** @namespace */
geotoolkit.contour.shapes = {};

/** @namespace */
geotoolkit.contour.grid = {};

/** @namespace */
geotoolkit.contour.datasource = {};

/** @namespace */
geotoolkit.contour.visuals = {};

/**
 * This utility class performs memory allocation operations
 * @class geotoolkit.contour.util.MemoryManager
 */
geotoolkit.contour.util.MemoryManager = {};
    /**
     * Gets the instance of the memory manager.
     * @returns {geotoolkit.contour.util.MemoryManager}memoryManager The memory manager.
     */
    geotoolkit.contour.util.MemoryManager.getInstance = function(){};
    /**
     * Gets the memory management id associated with this object
     * @returns {number}id The memory id.
     */
    geotoolkit.contour.util.MemoryManager.prototype.generateMemoryId = function(){};
    /**
     * Increases the size of a typed array
     * Allocates a typed array
     * @param {number}id The memory id.
     * @param {string}type The type of array.
     * @param {number}size The desired size of array.
     * @param {Float64Array|Int32Array|Int8Array}oldArray The reference to current array.
     * @returns {Float64Array|Int32Array|Int8Array}typedArray A typed array.
     */
    geotoolkit.contour.util.MemoryManager.prototype.resizeArray = function(id, type, size, oldArray){};
    /**
     * Allocates a typed array
     * @param {number}id The memory id.
     * @param {string}type The type of array.
     * @param {number}size The size of array.
     * @param {boolean}clear Optionally clear all values of the newly-allocated array.
     * @returns {Float64Array|Int32Array|Int8Array}typedArray A typed array.
     */
    geotoolkit.contour.util.MemoryManager.prototype.allocateMemory = function(id, type, size, clear){};
    /**
     * Frees the memory that is associated with a given memory id.
     * @param {string}id Memory id
     * @param {boolean}keepAlive Do not dispose of this object
     */
    geotoolkit.contour.util.MemoryManager.prototype.freeAllMemory = function(id, keepAlive){};

/**
 * Define a colormap
 * @class geotoolkit.contour.util.ColorMap
 * @augments geotoolkit.util.DiscreteGradientColorProvider
 * @param {number}bins The number of bins.
 * @param {string}name The scale name.
 * @param {number}minValue The min value to use.
 * @param {number}maxValue The max value to use.
 */
geotoolkit.contour.util.ColorMap = {};
    /**
     * returns surface that represents color map
     * @param {number} width The image width
     * @param {number} height The image height
     * @param {boolean} isVertical True if image is oriented vertically
     * @returns {geotoolkit.renderer.Surface} surface The canvas surface
     */
    geotoolkit.contour.util.ColorMap.prototype.exportToImage = function(width, height, isVertical){};

/**
 * This utility class performs a binary search on Float64Array
 * @class geotoolkit.contour.util.BinarySearch
 */
geotoolkit.contour.util.BinarySearch = {};
    /**
     * Performs a binary search on an array. (Same as .Net binary search method)
     * @param {Float64Array}array The list in which to find the matching value
     * @param {number}value The value to find the index for.
     * @returns {number}index The index of the matching value or -index if not found.
     */
    geotoolkit.contour.util.BinarySearch.search = function(array, value){};

/**
 * Vector of net points.
 * @class geotoolkit.contour.processor.PointVector
 */
geotoolkit.contour.processor.PointVector = {};
    /**
     * The number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.processor.PointVector.prototype.getSize = function(){};
    /**
     * Gets the x-coordinates.
     * @returns {Float64Array}x x-coordinates.
     */
    geotoolkit.contour.processor.PointVector.prototype.getX = function(){};
    /**
     * Gets the y-coordinates.
     * @returns {Float64Array}y y-coordinates.
     */
    geotoolkit.contour.processor.PointVector.prototype.getY = function(){};
    /**
     * Gets the z-coordinates.
     * @returns {Float64Array}z z-coordinates.
     */
    geotoolkit.contour.processor.PointVector.prototype.getZ = function(){};
    /**
     * Gets the first link to adjacent edges.
     * @returns {Int32Array}firstEdge The first edge link.
     */
    geotoolkit.contour.processor.PointVector.prototype.getFirstEdgeLink = function(){};
    /**
     * Gets the last link to adjacent edges.
     * @returns {Int32Array}lastEdge The last edge link.
     */
    geotoolkit.contour.processor.PointVector.prototype.getLastEdgeLink = function(){};
    /**
     * Gets the scale range index
     * @returns {Int32Array}level The scale range level
     */
    geotoolkit.contour.processor.PointVector.prototype.getLevel = function(){};
    /**
     * Get this point index (negative for deleted point).
     * @returns {Int32Array}index The point index.
     */
    geotoolkit.contour.processor.PointVector.prototype.getIndex = function(){};
    /**
     * Gets the last associated fault split.
     * @returns {Int32Array}fsplit The last associated fault split.
     */
    geotoolkit.contour.processor.PointVector.prototype.getFaultSplit = function(){};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.processor.PointVector.prototype.clear = function(){};
    /**
     * Resizes the internal array to be of a certain size
     * @param {number}n The new size.
     */
    geotoolkit.contour.processor.PointVector.prototype.reserve = function(n){};
    /**
     * Tries to resize arrays so that the next item can be added
     * @returns {number}size The next size of this triangle vector.
     */
    geotoolkit.contour.processor.PointVector.prototype.addItems = function(){};

/**
 * A wrapper for an Int32Array.
 * @class geotoolkit.contour.util.IntVector
 */
geotoolkit.contour.util.IntVector = {};
    /**
     * Gets the values that are inside this wrapper
     * @returns {Int32Array}values The internal stored value array
     */
    geotoolkit.contour.util.IntVector.prototype.getValues = function(){};
    /**
     * The number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.util.IntVector.prototype.getSize = function(){};
    /**
     * Removes all data and frees reserved data buffer.
     */
    geotoolkit.contour.util.IntVector.prototype.freeBuff = function(){};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.util.IntVector.prototype.clear = function(){};
    /**
     * Adds value to end of data, extends buffer if needed.
     * @param {number}value The value that will be added
     */
    geotoolkit.contour.util.IntVector.prototype.add = function(value){};
    /**
     * Removes data after specified position retaining data buffer.
     * @param {number}size new data size
     */
    geotoolkit.contour.util.IntVector.prototype.cutSize = function(size){};

/**
 * A wrapper for an Float64Array.
 * @class geotoolkit.contour.util.DoubleVector
 */
geotoolkit.contour.util.DoubleVector = {};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.util.DoubleVector.prototype.clear = function(){};
    /**
     * Fills the array with a given value a specified number of times.
     * @param {number}value The value that will be set
     * @param {number}size The number of times this value will be set.
     */
    geotoolkit.contour.util.DoubleVector.prototype.fill = function(value, size){};
    /**
     * Sets a value at a specific index.
     * @param {number}value The value that will be set
     * @param {number}index The index position of the value.
     * @returns {geotoolkit.contour.util.DoubleVector} this
     */
    geotoolkit.contour.util.DoubleVector.prototype.setValueByIndex = function(value, index){};
    /**
     * Adds value to end of data, extends buffer if needed.
     * @param {number}value The value that will be added
     */
    geotoolkit.contour.util.DoubleVector.prototype.add = function(value){};
    /**
     * Gets the values that are inside this wrapper
     * @returns {Float64Array}values The internal stored value array
     */
    geotoolkit.contour.util.DoubleVector.prototype.getValues = function(){};
    /**
     * The number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.util.DoubleVector.prototype.getSize = function(){};
    /**
     * Removes data after specified position retaining data buffer.
     * @param {number}size new data size
     */
    geotoolkit.contour.util.DoubleVector.prototype.cutSize = function(size){};

/**
 * A utility class for calculating intersection of a point with a border of a rectangular region.
 * @class geotoolkit.contour.util.ListRegion
 */
geotoolkit.contour.util.ListRegion = {};
    /**
     * Determines if a point exists between the inner region and the outer region.
     * @param {geotoolkit.util.Point|number}point The point that is checked for containment or the X-coordinate of the point
     * @param {number}y The y-coordinate of the point
     * @returns {boolean}contains <c>true</c> if list region contains the point.
     */
    geotoolkit.contour.util.ListRegion.prototype.contains = function(point, y){};
    /**
     * Sets the region.
     * @param {geotoolkit.util.Rect}regionRect The region bounds.
     * @returns {geotoolkit.contour.util.ListRegion} this
     */
    geotoolkit.contour.util.ListRegion.prototype.setRegion = function(regionRect){};
    /**
     * Clears the region.
     */
    geotoolkit.contour.util.ListRegion.prototype.clearRegion = function(){};

/**
 * Vector of net triangles.
 * @class geotoolkit.contour.processor.TriangleVector
 */
geotoolkit.contour.processor.TriangleVector = {};
    /**
     * The number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getSize = function(){};
    /**
     * Gets the A-values for fault points.
     * @returns {Float64Array}valueA A-values for fault points.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getValueA = function(){};
    /**
     * Gets the B-values for fault points.
     * @returns {Float64Array}valueB B-values for fault points.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getValueB = function(){};
    /**
     * Gets the C-values for fault points.
     * @returns {Float64Array}valueC C-values for fault points.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getValueC = function(){};
    /**
     * Gets the LevelA points.
     * @returns {Int32Array}levelA LevelA points.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getLevelA = function(){};
    /**
     * Gets the LevelB points.
     * @returns {Int32Array}levelB LevelB points.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getLevelB = function(){};
    /**
     * Gets the LevelC points.
     * @returns {Int32Array}levelC LevelC points.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getLevelC = function(){};
    /**
     * Gets the current Isoline
     * @returns {Int32Array}isoline The current isoline.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getIsoLine = function(){};
    /**
     * Gets the properties bits (see enum TrianglePropertiesBits).
     * @returns {Int32Array}bit The triangle properties bits.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getBit = function(){};
    /**
     * Gets the Index of first split.
     * @returns {Int32Array}startSplit Index of first split..
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getStartSplit = function(){};
    /**
     * Gets the Index of last split.
     * @returns {Int32Array}endSplit Index of last split.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getEndSplit = function(){};
    /**
     * Gets the AB Edge indexes in edges list.
     * @returns {Int32Array}ab The AB Edge indexes in edges list.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getAB = function(){};
    /**
     * Gets the BC Edge indexes in edges list.
     * @returns {Int32Array}bc The BC Edge indexes in edges list.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getBC = function(){};
    /**
     * Gets the CA Edge indexes in edges list.
     * @returns {Int32Array}ca The CA Edge indexes in edges list.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getCA = function(){};
    /**
     * Gets the A Point indexes in points list.
     * @returns {Int32Array}a The Point A indexes in points list.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getA = function(){};
    /**
     * Gets the B Point indexes in points list.
     * @returns {Int32Array}b The Point B indexes in points list.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getB = function(){};
    /**
     * Gets the C Point indexes in points list.
     * @returns {Int32Array}c The C Point indexes in points list.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getC = function(){};
    /**
     * Gets the triangle index. (-2 for splitted, other negative for deleted triangle).
     * @returns {Int32Array}triangles The triangle indexes.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.getIndex = function(){};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.processor.TriangleVector.prototype.clear = function(){};
    /**
     * Resizes the internal array to be of a certain size
     * @param {number}n The new size.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.reserve = function(n){};
    /**
     * Tries to resize arrays so that the next item can be added
     * @returns {number}size The next size of this triangle vector.
     */
    geotoolkit.contour.processor.TriangleVector.prototype.addItems = function(){};

/**
 * Vector of net points on fault.
 * @class geotoolkit.contour.processor.FaultSplitVector
 */
geotoolkit.contour.processor.FaultSplitVector = {};
    /**
     * The number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getSize = function(){};
    /**
     * Gets the Right values.
     * @returns {Float64Array}left The left values.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getLeft = function(){};
    /**
     * Gets the Left values.
     * @returns {Float64Array}right The right values.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getRight = function(){};
    /**
     * Gets the X-coordinates
     * @returns {Float64Array}x The X-coordinates.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getX = function(){};
    /**
     * Gets the Y-coordinates
     * @returns {Float64Array}y The Y-coordinates.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getY = function(){};
    /**
     * Gets the properties bits.
     * @returns {Int32Array}bit The properties bit array
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getBit = function(){};
    /**
     * Gets the fault segments
     * @returns {Int32Array}faultSeg The fault seg;
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getFaultSeg = function(){};
    /**
     * Gets the faults
     * @returns {Int32Array}faults The faults.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getFault = function(){};
    /**
     * Gets the next split array
     * @returns {Int32Array}nextSplit The next split array.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getNextSplit = function(){};
    /**
     * Gets the previous splits
     * @returns {Int32Array}prevSplit The previous split.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getPrevSplit = function(){};
    /**
     * Gets the point indexes
     * @returns {Int32Array}point The point index array.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getPoint = function(){};
    /**
     * Gets the edge indexes (-1 if last point of fault).
     * @returns {Int32Array}rightEdge The right edge indexes.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getRightEdge = function(){};
    /**
     * Gets the left edge indexes (-1 if last point of fault).
     * @returns {Int32Array}leftEdge The left edge indexes.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getLeftEdge = function(){};
    /**
     * Gets the index of previous split at same point (-1 if none)
     * @returns {Int32Array}belowSplit The below split indexes.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.getBelowSplit = function(){};
    /**
     * Sets the size and the buf_size to 0 and removes all of the elements from this vector.
     * (All data arrays will be null after this call returns)
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.freeBuf = function(){};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.clear = function(){};
    /**
     * Adds value to end of data, extends buffer if needed.
     * @param {number}n The value that will be added
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.reserve = function(n){};
    /**
     * Tries to resize arrays so that the next item can be added
     * @returns {number}size The next size of this triangle vector.
     */
    geotoolkit.contour.processor.FaultSplitVector.prototype.addItems = function(){};

/**
 * Class that incapsulates XY vector.
 * @class geotoolkit.contour.processor.XYVector
 */
geotoolkit.contour.processor.XYVector = {};
    /**
     * The number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.processor.XYVector.prototype.getSize = function(){};
    /**
     * Gets the x-values.
     * @returns {Float64Array}x The x-values
     */
    geotoolkit.contour.processor.XYVector.prototype.getX = function(){};
    /**
     * Gets the y-values.
     * @returns {Float64Array}y The y-values
     */
    geotoolkit.contour.processor.XYVector.prototype.getY = function(){};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.processor.XYVector.prototype.clear = function(){};
    /**
     * Adds value to end of data, extends buffer if needed.
     * @param {number}n The value that will be added
     */
    geotoolkit.contour.processor.XYVector.prototype.reserve = function(n){};
    /**
     * Increase number of elements in vector.
     * @returns {number}size The new size of the vector
     */
    geotoolkit.contour.processor.XYVector.prototype.addElements = function(){};

/**
 * Vector that stores edgesections (edge/isoline intersection points).
 * @class geotoolkit.contour.processor.EdgeSectionVector
 */
geotoolkit.contour.processor.EdgeSectionVector = {};
    /**
     * The number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.getSize = function(){};
    /**
     * Gets the Properties bits (see enum EdgeSectionPropertiesBits).
     * @returns {Int8Array}bit The properties bits.
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.getBit = function(){};
    /**
     * Gets the Edge indexes.
     * @returns {Int32Array}edge The edge indexes.
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.getEdge = function(){};
    /**
     * Gets the level indexes
     * @returns {Int32Array}level The level indexes.
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.getLevel = function(){};
    /**
     * Gets the Index of isoline source chunk (-1=init_val, -2=bad).
     * @returns {Int32Array}chunk The isoline source chunk index
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.getChunk = function(){};
    /**
     * Gets the X intersection coordinates.
     * @returns {Float64Array}x The X intersection coordinates.
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.getX = function(){};
    /**
     * Gets the Y intersection coordinates.
     * @returns {Float64Array}y The Y intersection coordinates.
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.getY = function(){};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.clear = function(){};
    /**
     * Adds value to end of data, extends buffer if needed.
     * @param {number}n The value that will be added
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.reserve = function(n){};
    /**
     * Tries to resize arrays so that the next item can be added
     * @returns {number}size The next size of this triangle vector.
     */
    geotoolkit.contour.processor.EdgeSectionVector.prototype.addItems = function(){};

/**
 * Vector of net edges (sides of net triangles).
 * @class geotoolkit.contour.processor.EdgeVector
 */
geotoolkit.contour.processor.EdgeVector = {};
    /**
     * Gets the number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getSize = function(){};
    /**
     * Sets the number of data values in this array.
     * @param {number}size The new size of the edgeVector.
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setSize = function(size){};
    /**
     * Sets the new size of the data buffer
     * @param {number}size The new size of the data buffer
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setBufSize = function(size){};
    /**
     * Gets the border indexes.
     * @returns {Int32Array}border The border indexes
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getBorder = function(){};
    /**
     * Sets the border indexes.
     * @param {Int32Array}border The border indexes
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setBorder = function(border){};
    /**
     * Gets the Min level of points.
     * @returns {Int32Array}minLevel the Min level of points.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getMinLevel = function(){};
    /**
     * Sets the Min level of points.
     * @param {Int32Array}minLevel the Min level of points.
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setMinLevel = function(minLevel){};
    /**
     * Gets the Max level of points.
     * @returns {Int32Array}maxLevel the Max level of points.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getMaxLevel = function(){};
    /**
     * Sets the Max level of points.
     * @param {Int32Array}maxLevel the Max level of points.
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setMaxLevel = function(maxLevel){};
    /**
     * Gets the Number of edgesections array
     * @returns {Int32Array}numberSections The Number of edgesections array.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getNumberSections = function(){};
    /**
     * Sets the Number of numberSections array
     * @param {Int32Array}numberSections The Number of edgesections array.
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setNumberSections = function(numberSections){};
    /**
     * Gets the Index of first edgesection in edgesections array.
     * @returns {Int32Array}firstSection The first edgesection array.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getFirstSection = function(){};
    /**
     * Sets the Index of first edgesection in edgesections array.
     * @param {Int32Array}firstSection The first edgesection array
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setFirstSection = function(firstSection){};
    /**
     * Gets the Properties bits (see enum EdgeSectionPropertiesBits).
     * @returns {Int32Array}bit The properties bits.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getBit = function(){};
    /**
     * Sets the Properties bits (see enum EdgeSectionPropertiesBits).
     * @param {Int32Array}bit The properties bits.
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setBit = function(bit){};
    /**
     * Gets the first associated fault split for points.
     * @returns {Int32Array}faultSplit The first associated fault split for points
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getFaultSplit1 = function(){};
    /**
     * Sets the first associated fault split for points.
     * @param {Int32Array}faultSplit1 The first associated fault split for points
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setFaultSplit1 = function(faultSplit1){};
    /**
     * Gets the second associated fault split for points.
     * @returns {Int32Array}faultSplit The second associated fault split for points
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getFaultSplit2 = function(){};
    /**
     * Sets the second associated fault split for points.
     * @param {Int32Array}faultSplit2 The second associated fault split for points
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setFaultSplit2 = function(faultSplit2){};
    /**
     * Gets the Right triangle indexes in triangles list.
     * @returns {Int32Array}trRight The Right triangle indexes in triangles list
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getTrRight = function(){};
    /**
     * Sets the Right triangle indexes in triangles list.
     * @param {Int32Array}trRight The Right triangle indexes in triangles list
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setTrRight = function(trRight){};
    /**
     * Gets the Left triangle indexes in triangles list.
     * @returns {Int32Array}trLeft The Left triangle indexes in triangles list.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getTrLeft = function(){};
    /**
     * Sets the Left triangle indexes in triangles list.
     * @param {Int32Array}trLeft The Left triangle indexes in triangles list.
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setTrLeft = function(trLeft){};
    /**
     * Gets the edge indexes (negative for deleted edge)
     * @returns {Int32Array}index The edge indexes
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getIndex = function(){};
    /**
     * Sets the edge indexes (negative for deleted edge)
     * @param {Int32Array}index The edge indexes
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setIndex = function(index){};
    /**
     * The indexes of first point.
     * @returns {Int32Array}p1 The first point index.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getP1 = function(){};
    /**
     * The indexes of second point.
     * @param {Int32Array}p1 The first point index.
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setP1 = function(p1){};
    /**
     * The indexes of second point.
     * @returns {Int32Array}p2 The second point index.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.getP2 = function(){};
    /**
     * The indexes of second point.
     * @param {Int32Array}p2 The second point index.
     * @returns {geotoolkit.contour.processor.EdgeVector} this
     */
    geotoolkit.contour.processor.EdgeVector.prototype.setP2 = function(p2){};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.processor.EdgeVector.prototype.clear = function(){};
    /**
     * Adds value to end of data, extends buffer if needed.
     * @param {number}n The value that will be added
     */
    geotoolkit.contour.processor.EdgeVector.prototype.reserve = function(n){};
    /**
     * Tries to resize arrays so that the next item can be added
     * @returns {number}size The next size of this triangle vector.
     */
    geotoolkit.contour.processor.EdgeVector.prototype.addItems = function(){};

/**
 * List of net edges neighbouring to net points.
 * @class geotoolkit.contour.processor.PointEdgeLinkVector
 */
geotoolkit.contour.processor.PointEdgeLinkVector = {};
    /**
     * Gets the number of data values in this array.
     * @returns {number}size The data value count
     */
    geotoolkit.contour.processor.PointEdgeLinkVector.prototype.getSize = function(){};
    /**
     * Gets the next link index.
     * @returns {Int32Array}nextElement The next link index
     */
    geotoolkit.contour.processor.PointEdgeLinkVector.prototype.getNextElement = function(){};
    /**
     * Gets the edge index for the link.
     * @returns {Int32Array}edge The edge index for the link.
     */
    geotoolkit.contour.processor.PointEdgeLinkVector.prototype.getEdge = function(){};
    /**
     * Removes all data and reserved space from the data buffer
     */
    geotoolkit.contour.processor.PointEdgeLinkVector.prototype.clear = function(){};
    /**
     * Adds value to end of data, extends buffer if needed.
     * @param {number}n The value that will be added
     */
    geotoolkit.contour.processor.PointEdgeLinkVector.prototype.reserve = function(n){};
    /**
     * Tries to resize arrays so that the next item can be added
     * @returns {number}size The next size of this triangle vector.
     */
    geotoolkit.contour.processor.PointEdgeLinkVector.prototype.addItems = function(){};

/**
 * The base class for all contour events.
 * Constructs new event object, based on specified values
 * @param {Object}source Source of event.
 * @param {Object}param Parameter of event (reference to shape, for example).
 * @param {number}id Integer value - ID of event
 * @class geotoolkit.contour.events.Event
 */
geotoolkit.contour.events.Event = {};
    /**
     * Obtains the source object of this event.
     * @returns {Object}source The event source.
     */
    geotoolkit.contour.events.Event.prototype.getSource = function(){};
    /**
     * Gets the parameter object associated with this event.
     * @returns {Object}parameter The parameter.
     */
    geotoolkit.contour.events.Event.prototype.getParameter = function(){};
    /**
     * Retrieves the ID of this event.
     * @returns {number}id The integer value - ID of event
     */
    geotoolkit.contour.events.Event.prototype.getID = function(){};

/**
 * Event is fired by an object to notify other objects about changes that might affect them
 * Eg. changing a parameter or data, changes the final display
 * Constructs new event object, based on specified values
 * @param {Object}source Source of event.
 * @param {Object}param Parameter of event (reference to shape, for example).
 * @param {number}id Integer value - ID of event
 * @class geotoolkit.contour.events.ContourEvent
 * @augments geotoolkit.contour.events.Event
 */
geotoolkit.contour.events.ContourEvent = {};
    /**
     * The EventType enumeration is used to describe the type of event being represented
     * by the ContourEvent. Typically something has changed, but what exactly?
     * @enum
     * @readonly
     */
    geotoolkit.contour.events.ContourEvent.EventType = {};
        /** The Contour Scale has changed
         * @type {number}
         */
        geotoolkit.contour.events.ContourEvent.EventType.SCALE_CHANGED = NaN;
        /** The Contour Grid has changed
         * @type {number}
         */
        geotoolkit.contour.events.ContourEvent.EventType.GRID_CHANGED = NaN;
        /** The Contour Processor has changed
         * @type {number}
         */
        geotoolkit.contour.events.ContourEvent.EventType.PROCESSOR_CHANGED = NaN;
        /** The Bounding Box of the Contour Shape has changed
         * @type {number}
         */
        geotoolkit.contour.events.ContourEvent.EventType.BBOX_CHANGED = NaN;
        /** A visual has been added to the contour shape
         * @type {number}
         */
        geotoolkit.contour.events.ContourEvent.EventType.VISUAL_ADDED = NaN;
        /** A visual has been removed from the contour shape
         * @type {number}
         */
        geotoolkit.contour.events.ContourEvent.EventType.VISUAL_REMOVED = NaN;
        /** The projection has changed
         * @type {number}
         */
        geotoolkit.contour.events.ContourEvent.EventType.PROJECTION_CHANGED = NaN;
        /** The faults have changed
         * @type {number}
         */
        geotoolkit.contour.events.ContourEvent.EventType.FAULTS_CHANGED = NaN;

/**
 * Constructs new visual event object, based on specified values
 * @param {Object}source Source of event.
 * @param {Object}param Parameter of event (reference to shape, for example).
 * @param {number}id Integer value - ID of event
 * @class geotoolkit.contour.events.VisualEvent
 * @augments geotoolkit.contour.events.Event
 */
geotoolkit.contour.events.VisualEvent = {};
    /**
     * The EventType enumeration describes what this VisualEvent actually is.
     * @enum
     * @readonly
     */
    geotoolkit.contour.events.VisualEvent.EventType = {};
        /** The visual has been invalidated
         * @type {number}
         */
        geotoolkit.contour.events.VisualEvent.EventType.VISUAL_INVALIDATED = NaN;
        /** The visibility of the visual has changed
         * @type {number}
         */
        geotoolkit.contour.events.VisualEvent.EventType.VISIBILITY_CHANGED = NaN;
        /** The colormap for the visual has changed
         * @type {number}
         */
        geotoolkit.contour.events.VisualEvent.EventType.COLORMAP_CHANGED = NaN;

/**
 * The fill visual event. This class encapsulates more event types that its superclass.
 * @param {Object}source Source of event.
 * @param {Object}param Parameter of event (reference to shape, for example).
 * @param {number}id Integer value - ID of event
 * @class geotoolkit.contour.events.FillVisualEvent
 * @augments geotoolkit.contour.events.VisualEvent
 */
geotoolkit.contour.events.FillVisualEvent = {};
    /**
     * The EventType enumeration describes what this FillVisualEvent actually is.
     * @enum
     * @readonly
     */
    geotoolkit.contour.events.FillVisualEvent.EventType = {};
        /** The visual has been invalidated
         * @type {number}
         */
        geotoolkit.contour.events.FillVisualEvent.EventType.VISUAL_INVALIDATED = NaN;
        /** The visibility of the visual has changed
         * @type {number}
         */
        geotoolkit.contour.events.FillVisualEvent.EventType.VISIBILITY_CHANGED = NaN;
        /** The colormap for the visual has changed
         * @type {number}
         */
        geotoolkit.contour.events.FillVisualEvent.EventType.COLORMAP_CHANGED = NaN;
        /** The style of holes has changed
         * @type {number}
         */
        geotoolkit.contour.events.FillVisualEvent.EventType.HOLES_CHANGED = NaN;

/**
 * Constructs new visual event object, based on specified values
 * @param {Object}source Source of event.
 * @param {Object}param Parameter of event (reference to shape, for example).
 * @param {number}id Integer value - ID of event
 * @class geotoolkit.contour.events.LineVisualEvent
 * @augments geotoolkit.contour.events.VisualEvent
 */
geotoolkit.contour.events.LineVisualEvent = {};
    /**
     * The EventType enumeration describes what this LineVisualEvent actually represents
     * @enum
     * @readonly
     */
    geotoolkit.contour.events.LineVisualEvent.EventType = {};
        /** The visual has been invalidated
         * @type {number}
         */
        geotoolkit.contour.events.LineVisualEvent.EventType.VISUAL_INVALIDATED = NaN;
        /** The visibility of the visual has changed
         * @type {number}
         */
        geotoolkit.contour.events.LineVisualEvent.EventType.VISIBILITY_CHANGED = NaN;
        /** The colormap for the visual has changed
         * @type {number}
         */
        geotoolkit.contour.events.LineVisualEvent.EventType.COLORMAP_CHANGED = NaN;
        /** The line or label style has changed
         * @type {number}
         */
        geotoolkit.contour.events.LineVisualEvent.EventType.STYLE_CHANGED = NaN;
        /** The index stepping for the isolines has changed
         * @type {number}
         */
        geotoolkit.contour.events.LineVisualEvent.EventType.STEP_CHANGED = NaN;
        /** The format for the label text has changed
         * @type {number}
         */
        geotoolkit.contour.events.LineVisualEvent.EventType.FORMAT_CHANGED = NaN;
        /** The size of the margins around the labels, has changed
         * @type {number}
         */
        geotoolkit.contour.events.LineVisualEvent.EventType.MARGIN_CHANGED = NaN;
        /** The spacing of labels along the isolines, has changed
         * @type {number}
         */
        geotoolkit.contour.events.LineVisualEvent.EventType.SPACING_CHANGED = NaN;

/**
 * Every object which is interested in receiving events from the visual,
 * must be derived from this class
 * @class geotoolkit.contour.events.VisualListener
 */
geotoolkit.contour.events.VisualListener = {};
    /**
     * Notifies us (the listener) that the visual was invalidated
     * @function
     * @returns {geotoolkit.contour.events.VisualEvent}args Event type, represented by a VisualEvent
     */
    geotoolkit.contour.events.VisualListener.prototype.onVisualInvalidated = function(){};

/**
 * Every class which is interested in receiving events from the
 * contour shape must be derived from this class
 * @class geotoolkit.contour.events.ContourListener
 */
geotoolkit.contour.events.ContourListener = {};
    /**
     * Called to notify the listener that the visual was invalidated.
     * @function
     * @returns {geotoolkit.contour.events.ContourEvent}args The event which is causing the invalidation
     */
    geotoolkit.contour.events.ContourListener.prototype.ContourInvalidated = function(){};

/**
 * Abstract class for Projections (eg. LatLongProjection)
 * @class geotoolkit.contour.projections.AbstractProjection
 */
geotoolkit.contour.projections.AbstractProjection = {};
    /**
     * Gets the inverse projection for this projection.
     * @function
     * @abstract
     * @returns {geotoolkit.contour.projections.AbstractProjection}projection Projection representing the inverse of this projection.
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.getReverse = function(){};
    /**
     * Gets the string identifier for this projection
     * @function
     * @abstract
     * @returns {string}id String identifier for this projection.
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.getId = function(){};
    /**
     * Determine whether the point has a valid projection (or reverse projection)
     * @function
     * @param {number}x long or easting depending on forward or reverse usage
     * @param {number}y lat or northing depending on forward or reverse usage
     * @returns {boolean}isProjectable true if projectable; false if not (Nan's or +|-infinity would result)
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.isPointProjectable = function(x, y){};
    /**
     * If you want the projection to bound points, then call this will bound==true
     * and it will bound them to lie within valid projection or inverse projection bounds.
     * Otherwise, the default should be not to bound points.
     * @function
     * @param {boolean}boundingEnabled Boolean flag: true if the points are bound.
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.boundPoints = function(boundingEnabled){};
    /**
     * Gets the smallest rectangular region (viewport)
     * that just bounds this projection's coordinate system.
     * This can be used to set up views and clip data.<br>
     * Note that there are generally valid and invalid regions
     * in this rectangular region and that you should call
     * <code>isPointProjectable(double,double)</code> to
     * see if any given point in this region is, in fact,
     * a valid point in the projection's coordinate system.
     *<br>
     * We need to shift this design to a CoordinateSystem
     * change approach. For example, projections would be accomplished
     * with an interface like this:<br>
     * <pre>
     * <code>
     * class CoordinateSystem
     * {
     * Units getUnits();
     * CoordinateSystem changeTo( CoordinateSystem c ); // implies projection
     * void changeUnits(Units);
     * }
     * </code>
     * </pre> <br>
     * This approach will retain cohesiveness of GIS data with their units,
     * datums, scale changes, etc. This will allow data to be left out
     * entirely whereas a Projection interface such as it is now cannot do this.<br>
     * GisModel -hasA-> CoordinateSystem<br>
     * GisLayer -hasA-> CoordinateSystem<br>
     * @function
     * @abstract
     * @param {geotoolkit.util.Rect}boundingRegion Rect region representing the minimal bounding region.
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.getMinimalBoundingRegion = function(boundingRegion){};
    /**
     * Gets the units in projection space. For example, meters, feet, kilometers, etc.
     * @function
     * @abstract
     * @returns {string}unit String that holds the units for this projection space.
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.getUnitsInProjectionSpace = function(){};
    /**
     * Sets the units in projection space. For example, meters, feet, kilometers, etc.
     * @function
     * @abstract
     * @param {string}unit String that holds the units for this projection space.
     * @returns {geotoolkit.contour.projections.AbstractProjection} this
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.setUnitsInProjectionSpace = function(unit){};
    /**
     * Projects a single 3D point. This method allocates and
     * returns the array of projected coordinates in x, y order.
     * @function
     * @param {number}x The x-coordinate
     * @param {number}y The y-coordinate
     * @returns {Float64Array}array The array with the x as the first element and y as the second element.
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.projectPoint = function(x, y){};
    /**
     * Projects a set of points in 3D space. This method replaces
     * the data in the source arrays with projected data and doesn't
     * allocate any memory.
     * @function
     * @param {Float64Array}x The array of x-coordinates
     * @param {Float64Array}y The array of y-coordinates
     * @param {number}number The number of coordinates in the x and y arrays.
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.projectPoints = function(x, y, number){};
    /**
     * Projects a set of points in 3D space. This method allocates and returns the
     * 2d array with projected data. The first index corresponds to x ordinate.
     * The second index corresponds to the index of the point.
     * @function
     * @param {Float64Array}x The array of x-coordinates
     * @param {Float64Array}y The array of y-coordinates
     * @param {number}number The number of coordinates in the x and y arrays.
     * @returns {Array<Float64Array>}projectedPath 2d array with the projected path.
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.projectPath = function(x, y, number){};
    /**
     * Is this a projection that does not modify any data points?
     * @function
     * @returns {boolean}isNullProjection true if this projection does not modify any data points, false if it does
     */
    geotoolkit.contour.projections.AbstractProjection.prototype.isNullProjection = function(){};

/**
 * The projection class that projects latitude and longitude to mercator coordinates.
 * @class geotoolkit.contour.projections.MercatorProjection
 * @param {number}minLatitude The minimum latitude.
 * @param {number}maxLatitude The maximum latitude.
 * @augments geotoolkit.contour.projections.AbstractProjection
 */
geotoolkit.contour.projections.MercatorProjection = {};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.MercatorProjection.prototype.getReverse = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.MercatorProjection.prototype.getId = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.MercatorProjection.prototype.projectPoint = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.MercatorProjection.prototype.projectPoints = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.MercatorProjection.prototype.projectPath = function(){};

/**
 * The projection class that projects mercator coordinates to latitude and longitude.
 * @class geotoolkit.contour.projections.InverseMercatorProjection
 * @param {number}minMercatorY The minimum mercator Y.
 * @param {number}maxMercatorY The maximum mercator Y.
 * @augments geotoolkit.contour.projections.AbstractProjection
 */
geotoolkit.contour.projections.InverseMercatorProjection = {};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.InverseMercatorProjection.prototype.getReverse = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.InverseMercatorProjection.prototype.getId = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.InverseMercatorProjection.prototype.projectPoint = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.InverseMercatorProjection.prototype.projectPoints = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.projections.InverseMercatorProjection.prototype.projectPath = function(){};

/**
* This is an abstract strategy class which defines how contour labels should be rendered.
* @class geotoolkit.contour.strategy.AbstractContourLabelingStrategy
*/
geotoolkit.contour.strategy.AbstractContourLabelingStrategy = {};
    /**
     * Returns if labels of specified level should be drawn
     * @function
     * @param {number} level level
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.AbstractContourLabelingStrategy.prototype.getLabelsVisible = function(level){};
    /**
     * Gets the labeling scale factor
     * @function
     * @param {geotoolkit.util.Transformation}modelToDevice Model to device transformation.
     * @param {geotoolkit.util.Rect}modelLimits Model limits of the contour.
     * @param {number}height Height of non-scaled label in device coordinate space.
     * @returns {number}scale The label scale.
     */
    geotoolkit.contour.strategy.AbstractContourLabelingStrategy.prototype.getLabelScale = function(modelToDevice, modelLimits, height){};
    /**
     * Desired number of labels on the isoline
     * @function
     * @param {geotoolkit.util.Transformation}modelToDevice Model to device transformation.
     * @param {geotoolkit.util.Rect}modelLimits Model limits of the contour.
     * @param {number}isolineLength Length of isoline in device coordinate space.
     * @param {number}labelGap Length of gap for a label on isoline in device coordinate space.
     * @returns {number}count The label count.
     */
    geotoolkit.contour.strategy.AbstractContourLabelingStrategy.prototype.getDesiredLabelCount = function(modelToDevice, modelLimits, isolineLength, labelGap){};
    /**
     * Gets text style for specified level
     * @param {number} level level index
     * @returns {geotoolkit.attributes.TextStyle}
     */
    geotoolkit.contour.strategy.AbstractContourLabelingStrategy.prototype.getTextStyle = function(level){};
    /**
     * Gets label spacing for specified level
     * @param {number} level level index
     * @returns {number}
     */
    geotoolkit.contour.strategy.AbstractContourLabelingStrategy.prototype.getLabelSpacing = function(level){};
    /**
     * Gets label margin for specified level
     * @param {number} level level index
     * @returns {number}
     */
    geotoolkit.contour.strategy.AbstractContourLabelingStrategy.prototype.getLabelMargin = function(level){};
    /**
     * Gets the flag which indicates if font color is used for label text color.
     * @param {number} level level index
     * @returns {boolean}useFontColor Flag which indicates if font color is used for label text color.
     */
    geotoolkit.contour.strategy.AbstractContourLabelingStrategy.prototype.getUseFontColorForLabels = function(level){};
    /**
     * Label Format. Use a standard C# format specifier. Default is "G" (general)
     * @param {number} level level index
     * @returns {geotoolkit.util.NumberFormat}format Object holding the C# format specifier for the isoLine labels.
     */
    geotoolkit.contour.strategy.AbstractContourLabelingStrategy.prototype.getLabelFormat = function(level){};

/**
 * This is an abstract strategy class which defines how contour labels should be rendered.
 * @class geotoolkit.contour.strategy.MajorMinorLabelingStrategy
 * @augments geotoolkit.contour.strategy.AbstractContourLabelingStrategy
 */
geotoolkit.contour.strategy.MajorMinorLabelingStrategy = {};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getTextStyle = function(){};
    /**
     * Sets show major labels
     * @param {boolean} visible visible
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMajorLabelsVisible = function(visible){};
    /**
     * Sets show major labels
     * @param {boolean} visible visible
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMinorLabelsVisible = function(visible){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getLabelsVisible = function(){};
    /**
     * Gets show major labels
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMajorLabelsVisible = function(){};
    /**
     * Gets show minor labels
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMinorLabelsVisible = function(){};
    /**
     * Sets text style for major isolines
     * @param {geotoolkit.attributes.TextStyle} style style
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMajorTextStyle = function(style){};
    /**
     * Sets text style for minor isolines
     * @param {geotoolkit.attributes.TextStyle} style style
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMinorTextStyle = function(style){};
    /**
     * Gets text style for major isolines
     * @returns {geotoolkit.attributes.TextStyle}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMajorTextStyle = function(){};
    /**
     * Gets text style for minor isolines
     * @returns {geotoolkit.attributes.TextStyle}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMinorTextStyle = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getLabelFormat = function(){};
    /**
     * Gets major label format
     * @returns {geotoolkit.util.NumberFormat} Object holding the C# format specifier for the isoLine labels
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMajorLabelFormat = function(){};
    /**
     * Gets minor label format
     * @returns {geotoolkit.util.NumberFormat} Object holding the C# format specifier for the isoLine labels
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMinorLabelFormat = function(){};
    /**
     * Sets major label format
     * @param {geotoolkit.util.NumberFormat} format Object holding the C# format specifier for the isoLine labels
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMajorLabelFormat = function(format){};
    /**
     * Sets minor label format
     * @param {geotoolkit.util.NumberFormat} format Object holding the C# format specifier for the isoLine labels
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMinorLabelFormat = function(format){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getLabelMargin = function(){};
    /**
     * Gets label margin for major isolines
     * @returns {number}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMajorLabelMargin = function(){};
    /**
     * Sets label margin for major isolines
     * @param {number} margin label margin
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMajorLabelMargin = function(margin){};
    /**
     * Gets label margin for minor isolines
     * @returns {number}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMinorLabelMargin = function(){};
    /**
     * Sets label margin for minor isolines
     * @param {number} margin label margin
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMinorLabelMargin = function(margin){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getLabelSpacing = function(){};
    /**
     * Gets label spacing for major isolines
     * @returns {number}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMajorLabelSpacing = function(){};
    /**
     * Gets label spacing for minor isolines
     * @returns {number}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMinorLabelSpacing = function(){};
    /**
     * Sets label spacing for major isolines
     * @param {number} spacing label spacing
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMajorLabelSpacing = function(spacing){};
    /**
     * Sets label spacing for minor isolines
     * @param {number} spacing label spacing
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMinorLabelSpacing = function(spacing){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getUseFontColorForLabels = function(){};
    /**
     * Gets if use font color for major labels
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMajorUseFontColorForLabels = function(){};
    /**
     * Sets if use font color for major labels
     * @param {boolean} use use
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMajorUseFontColorForLabels = function(use){};
    /**
     * Gets if use font color for minor labels
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMinorUseFontColorForLabels = function(){};
    /**
     * Sets if use font color for minor labels
     * @param {boolean} use use
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMinorUseFontColorForLabels = function(use){};
    /**
     * Gets if level is major
     * @param {number} i level index
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.isMajorLevel = function(i){};
    /**
     * Gets if level is minor
     * @param {number} i level index
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.isMinorLevel = function(i){};
    /**
     * Gets step for major labels
     * @returns {number}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMajorStep = function(){};
    /**
     * Gets step for major labels
     * @returns {number}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.getMinorStep = function(){};
    /**
     * Sets step for major labels
     * @param {number} step step
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMajorStep = function(step){};
    /**
     * Sets step for minor labels
     * @param {number} step step
     * @returns {geotoolkit.contour.strategy.MajorMinorLabelingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorLabelingStrategy.prototype.setMinorStep = function(step){};

/** Define an interface interface for styling isolines
 * @interface
 */
geotoolkit.contour.strategy.IsolineStylingStrategy = {};
    /**
     * Returns if isoline of specified level should be drawn
     * @function
     * @abstract
     * @param {number} level level
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.IsolineStylingStrategy.prototype.getIsolineVisible = function(level){};
    /**
     * Gets style for isoline
     * @function
     * @abstract
     * @param {number} level level
     * @returns {geotoolkit.attributes.LineStyle}
     */
    geotoolkit.contour.strategy.IsolineStylingStrategy.prototype.getIsolineStyle = function(level){};

/**
 * @param {object} props properties
 * @param {geotoolkit.attributes.LineStyle} [props.majorstyle] linestyle for major lines
 * @param {geotoolkit.attributes.LineStyle} [props.minorstyle] linestyle for minor lines
 * @param {number} [props.majorstep=3] step for major lines
 * @param {number} [props.minorstep=1] step for minor lines
 * @class geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy
 * @implements geotoolkit.contour.strategy.IsolineStylingStrategy
 */
geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy = {};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.getIsolineStyle = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.getIsolineVisible = function(){};
    /**
     * Sets linestyle for major isoline
     * @param {geotoolkit.attributes.LineStyle} style major style
     * @returns {geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.setMajorLineStyle = function(style){};
    /**
     * Sets linestyle for minor isoline
     * @param {geotoolkit.attributes.LineStyle} style minor style
     * @returns {geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.setMinorLineStyle = function(style){};
    /**
     * Gets linestyle for major isoline
     * @returns {geotoolkit.attributes.LineStyle}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.getMajorLineStyle = function(){};
    /**
     * Gets linestyle for major isoline
     * @returns {geotoolkit.attributes.LineStyle}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.getMinorLineStyle = function(){};
    /**
     * Sets show major isolines
     * @param {boolean} visible visible
     * @returns {geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.setMajorIsolinesVisible = function(visible){};
    /**
     * Sets show minor isolines
     * @param {boolean} visible visible
     * @returns {geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.setMinorIsolinesVisible = function(visible){};
    /**
     * Gets show major isolines
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.getMajorIsolinesVisible = function(){};
    /**
     * Gets show minor isolines
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.getMinorIsolinesVisible = function(){};
    /**
     * Gets if level is major
     * @param {number} i level index
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.isMajorLevel = function(i){};
    /**
     * Gets if level is minor
     * @param {number} i level index
     * @returns {boolean}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.isMinorLevel = function(i){};
    /**
     * Gets major step
     * @returns {number}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.getMajorStep = function(){};
    /**
     * Gets minor step
     * @returns {number}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.getMinorStep = function(){};
    /**
     * Sets major step
     * @param {number} step step
     * @returns {geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.setMajorStep = function(step){};
    /**
     * Sets minor step
     * @param {number} step step
     * @returns {geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy}
     */
    geotoolkit.contour.strategy.MajorMinorIsolineStylingStrategy.prototype.setMinorStep = function(step){};

/**
 * @param {number} singleIsolineLevel level index for single isoline
 * @param {geotoolkit.attributes.LineStyle} [singleIsolineStyle] linestyle for single line
 * @param {geotoolkit.attributes.LineStyle} [commonIsolineStyle] linestyle for common lines
 * @class geotoolkit.contour.strategy.SingleIsolineStylingStrategy
 * @implements geotoolkit.contour.strategy.IsolineStylingStrategy
 */
geotoolkit.contour.strategy.SingleIsolineStylingStrategy = {};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.SingleIsolineStylingStrategy.prototype.getIsolineStyle = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.strategy.SingleIsolineStylingStrategy.prototype.getIsolineVisible = function(){};
    /**
     * Gets linestyle for single line
     * @returns {geotoolkit.attributes.LineStyle}
     */
    geotoolkit.contour.strategy.SingleIsolineStylingStrategy.prototype.getSingleIsolineStyle = function(){};
    /**
     * Gets linestyle for common line
     * @returns {geotoolkit.attributes.LineStyle}
     */
    geotoolkit.contour.strategy.SingleIsolineStylingStrategy.prototype.getCommonIsolineStyle = function(){};

/**
 * The ScaleRange class is used to store the range of values represented by a particular contour index.
 * This is used by ContourScale to return these intervals.
 * @param {number}low The minimum of the scale range.
 * @param {number}high The maximum of the scale range.
 * @class geotoolkit.contour.scale.ScaleRange
 */
geotoolkit.contour.scale.ScaleRange = {};
    /**
     * A ScaleRange instance that represents infinite range
     */
    geotoolkit.contour.scale.ScaleRange.InfiniteRange = {};
    /**
     * The low value of this range
     * @returns {number}low Double value representing the lower end of this range
     */
    geotoolkit.contour.scale.ScaleRange.prototype.getLow = function(){};
    /**
     * The high value of this range
     * @returns {number}high Double value representing the higher end of this range
     */
    geotoolkit.contour.scale.ScaleRange.prototype.getHigh = function(){};

/**
 * An abstract base class for the contour scale.
 * The contour scale provides the information about sections of an altitude axis.
 * @class geotoolkit.contour.scale.ContourScale
 */
geotoolkit.contour.scale.ContourScale = {};
    /**
     * Gets the total number of intervals within the scale.
     * @function
     * @abstract
     * @returns {number}count The number of the scale intervals
     */
    geotoolkit.contour.scale.ContourScale.prototype.getCount = function(){};
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @function
     * @param {number}index Optional Parameter. The contour index for which to find the z-value range.
     * @returns {geotoolkit.contour.scale.ScaleRange}range The full range of this scale.
     */
    geotoolkit.contour.scale.ContourScale.prototype.getRange = function(index){};
    /**
     * Finds the contour index representing the supplied z-value.
     * @function
     * @param {number}zValue z-value for which contour index has to be found
     * @returns {number}index The contour index to which the z value belongs
     */
    geotoolkit.contour.scale.ContourScale.prototype.getIndex = function(zValue){};

/**
 * Implements the ContourScale interface for a regular contour scale. Ie. all contour values are evenly spaced.
 * Note: The step and count parameters must be positive or an exception will be thrown.
 * @param {number|geotoolkit.contour.scale.ScaleRange} zero The first (lowest) contour value or alternatively the scaleRange
 * @param {number} step The interval between successive contours or alternatively the number of levels
 * @param {?number} [count] The total number of contour isolines (intervals = count+1)
 * @class geotoolkit.contour.scale.RegularContourScale
 * @augments geotoolkit.contour.scale.ContourScale
 */
geotoolkit.contour.scale.RegularContourScale = {};
    /**
     * Initialise the table of ranges for each index.
     * Creates the table of ranges. This table will be
     * intensively used by getRange(idx) method.
     * @deprecated since 2.6
     */
    geotoolkit.contour.scale.RegularContourScale.prototype.setRangeTable = function(){};
    /**
     * The number of intervals in this scale
     * (=#values + 1: intervals to +/- infinity are included
     * @override
     * @returns {number}size The number of intervals in this scale
     */
    geotoolkit.contour.scale.RegularContourScale.prototype.getCount = function(){};
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @override
     * @param {number} [index] The contour index for which to find the z-value range.
     * @returns {geotoolkit.contour.scale.ScaleRange}range The full range of this scale.
     */
    geotoolkit.contour.scale.RegularContourScale.prototype.getRange = function(index){};
    /**
     * Finds the contour index representing the supplied z-value.
     * @override
     * @param {number}zValue z-value for which contour index has to be found
     * @returns {number}index The contour index to which the z value belongs
     */
    geotoolkit.contour.scale.RegularContourScale.prototype.getIndex = function(zValue){};

/**
 * IrregularContourScale implements the ContourScale interface, and stores scale values at arbitrary levels.
 * Compare this to ContourRegularScale where the scale values are spaced at regular intervals.
 * Creates a customised contour scale, using the supplied values.
 * @param {Array|Float32Array|Float64Array} array Array of contour values. These can be out of order, but will be sorted into order.
 * @class geotoolkit.contour.scale.IrregularContourScale
 * @augments geotoolkit.contour.scale.ContourScale
 */
geotoolkit.contour.scale.IrregularContourScale = {};
    /**
     * Gets the scale array.
     * @returns {Array<number>}scaleArray The scale array
     */
    geotoolkit.contour.scale.IrregularContourScale.prototype.getArray = function(){};
    /**
     * Creates the table of ranges from the altitude info.
     * @deprecated since 2.6
     */
    geotoolkit.contour.scale.IrregularContourScale.prototype.setRangeTable = function(){};
    /**
     * The number of intervals in this scale
     * (=#values + 1: intervals to +/- infinity are included
     * @override
     * @returns {number}size The number of intervals in this scale
     */
    geotoolkit.contour.scale.IrregularContourScale.prototype.getCount = function(){};
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @override
     * @param {number} index Optional Parameter. The contour index for which to find the z-value range.
     * @returns {geotoolkit.contour.scale.ScaleRange} range The full range of this scale.
     */
    geotoolkit.contour.scale.IrregularContourScale.prototype.getRange = function(index){};
    /**
     * Finds the contour index representing the supplied z-value.
     * @override
     * @param {number}zValue z-value for which contour index has to be found
     * @returns {number}index The contour index to which the z value belongs
     */
    geotoolkit.contour.scale.IrregularContourScale.prototype.getIndex = function(zValue){};

/**
 * Extends RegularContourScale, adds the ability to show a single additional user specified level
 * @param {geotoolkit.util.Range|geotoolkit.contour.scale.ContourRangeScale} range The data range or another scale.
 * @param {number} [step=0] The data range step.
 * @param {boolean} [showSingleLevel=false] Whether the single level should be shown.
 * @param {number} [singleLevelValue=0] The value of the single level.
 * @class geotoolkit.contour.scale.ContourRangeScale
 * @augments geotoolkit.contour.scale.RegularContourScale
 */
geotoolkit.contour.scale.ContourRangeScale = {};
    /**
     * Gets the step value.
     * @returns {number}step The step value.
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getStep = function(){};
    /**
     * Gets the single level value.
     * @returns {number}singleLevelValue The value of the single index.
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getSingleLevelValue = function(){};
    /**
     * Gets the single level index.
     * @returns {number}singleLevelIndex The index position of the single index.
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getSingleLevelIndex = function(){};
    /**
     * Gets the flag for the single label visibility
     * @returns {boolean}showSingleLevel The flag indicating single level visibility.
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getShowSingleLevel = function(){};
    /**
     * Gets the flag indicating whether to separate the single level.
     * @returns {boolean}separateSingleLevel The flag indicating single level separation.
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getSeparateSingleLevel = function(){};
    /**
     * Gets the factor which is used to calculate if single level will be separate
     * @returns {number}
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getSeparateSingleLevelFactor = function(){};
    /**
     * Sets the factor which is used to calculate if single level will be separate
     * @param {number} factor factor
     * @returns {geotoolkit.contour.scale.ContourRangeScale}
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.setSeparateSingleLevelFactor = function(factor){};
    /**
     * Gets the scale array.
     * @returns {Array<number>}scaleArray The scale array
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getArray = function(){};
    /**
     * Gets the total number of intervals within the scale.
     * @override
     * @returns {number}size Size of the scale (#intervals)
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getCount = function(){};
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @override
     * @param {number}index Optional Parameter. The contour index for which to find the z-value range.
     * @returns {geotoolkit.util.Range} range The full range of this scale.
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getRange = function(index){};
    /**
     * Finds the contour index representing the supplied z-value.
     * @override
     * @param {number}zValue z-value for which contour index has to be found
     * @returns {number}index The contour index to which the z value belongs
     */
    geotoolkit.contour.scale.ContourRangeScale.prototype.getIndex = function(zValue){};

/**
 * This container class manages a vector of points and its net data.
 * It is used to store intermediate data for building isolines and isofills.
 * @class geotoolkit.contour.processor.NIsosourcePoints
 */
geotoolkit.contour.processor.NIsosourcePoints = {};
    /**
     * Gets the number of elements in the collection.
     * @returns {number}size The number of elements in the collection.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.getSize = function(){};
    /**
     * Gets the isoLine source points X-position.
     * @returns {Float64Array}x The isoLine source points X-position.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.getX = function(){};
    /**
     * Gets the isoLine source points Y-position.
     * @returns {Float64Array}y The isoLine source points Y-position.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.getY = function(){};
    /**
     * Gets the edge section index.
     * @returns {Int32Array}edgeSec The edge section index.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.getEdgeSec = function(){};
    /**
     * Gets the triangle index
     * @returns {Int32Array}tr The triangle index.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.getTr = function(){};
    /**
     * Gets the isosource bezier tag (see Isosource bezier tag bits in ContourConstants).
     * @returns {Int32Array}tag The isosource bezier tag
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.getTag = function(){};
    /**
     * Reduces containerSize to specified size
     * @param {number}size The new size of the container
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.cutSize = function(size){};
    /**
     * Reduces container size by one.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.popBack = function(){};
    /**
     * Clears out all data
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.clear = function(){};
    /**
     * Adds value to end of data, extends buffer if needed.
     * @param {number}n The value that will be added
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.reserve = function(n){};
    /**
     * Increase size by 1. If buf_size less than size, increases buf_size twice.
     * @returns {number}size The new size of the vector.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.add = function(){};
    /**
     * Appends an elements from the specified collection.
     * @param {geotoolkit.contour.processor.NIsosourcePoints}newPoints The points to be appended to this collection.
     * @param {number}indexStart The starting position in the source collection.
     * @param {number}indexEnd The ending position in the source collection.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.append = function(newPoints, indexStart, indexEnd){};
    /**
     * Appends an elements(in reverse mode) from the specified collection to the end of this collection.
     * @param {geotoolkit.contour.processor.NIsosourcePoints}newPoints The points to be appended to this collection.
     * @param {number}indexStart The starting position in the source collection.
     * @param {number}indexEnd The ending position in the source collection.
     */
    geotoolkit.contour.processor.NIsosourcePoints.prototype.appendReverse = function(newPoints, indexStart, indexEnd){};

/**
 * A Chunk (sequence of points) of isoline between borders or closed chunk.
 * @class geotoolkit.contour.processor.NIsosourceChunk
 * @augments geotoolkit.contour.processor.NIsosourcePoints
 */
geotoolkit.contour.processor.NIsosourceChunk = {};
    /**
     * Gets the scale level index
     * @returns {number}level The scale level index.
     */
    geotoolkit.contour.processor.NIsosourceChunk.prototype.getLevel = function(){};
    /**
     * Sets the scale level index
     * @param {number}level The scale level index.
     * @returns {geotoolkit.contour.processor.NIsosourceChunk} this
     */
    geotoolkit.contour.processor.NIsosourceChunk.prototype.setLevel = function(level){};
    /**
     * Gets the sides Elem0 used for lower isosource, elem1 - for upper one
     * @returns {Int32Array}sides The sides indexes
     */
    geotoolkit.contour.processor.NIsosourceChunk.prototype.getSides = function(){};
    /**
     * Gets the start index
     * @returns {number}startPointIndex The start index.
     */
    geotoolkit.contour.processor.NIsosourceChunk.prototype.getStartPointIndex = function(){};
    /**
     * Sets the start index
     * @param {number}startPointIndex The end index.
     * @returns {geotoolkit.contour.processor.NIsosourceChunk} this
     */
    geotoolkit.contour.processor.NIsosourceChunk.prototype.setStartPointIndex = function(startPointIndex){};
    /**
     * Gets the end index
     * @returns {number}endPointIndex The end index.
     */
    geotoolkit.contour.processor.NIsosourceChunk.prototype.getEndPointIndex = function(){};
    /**
     * Sets the end index
     * @param {number}endPointIndex The end index.
     * @returns {geotoolkit.contour.processor.NIsosourceChunk} this
     */
    geotoolkit.contour.processor.NIsosourceChunk.prototype.setEndPointIndex = function(endPointIndex){};
    /**
     * Clears all data
     * @override
     */
    geotoolkit.contour.processor.NIsosourceChunk.prototype.clear = function(){};

/**
 * This container class acts as a vector of isosource parts. It stores info about
 * parts of isosource and is needed for complicated isofills that consist of several polygons.
 * @class geotoolkit.contour.processor.NIsosourcePartVector
 */
geotoolkit.contour.processor.NIsosourcePartVector = {};
    /**
     * Gets the number of elements in the collection.
     * @returns {number}size The number of elements in the collection.
     */
    geotoolkit.contour.processor.NIsosourcePartVector.prototype.getSize = function(){};
    /**
     * Gets the next base part index.
     * @returns {Int32Array}nextBasePart The next base part index.
     */
    geotoolkit.contour.processor.NIsosourcePartVector.prototype.getNextBasePart = function(){};
    /**
     * Gets the base part complement end index.
     * @returns {Int32Array}complimentEnd The base part complement end index.
     */
    geotoolkit.contour.processor.NIsosourcePartVector.prototype.getComplimentEnd = function(){};
    /**
     * Gets the base part start index.
     * @returns {Int32Array}start The base part start index.
     */
    geotoolkit.contour.processor.NIsosourcePartVector.prototype.getStart = function(){};
    /**
     * Gets the base part end index.
     * @returns {Int32Array}end The base part end index.
     */
    geotoolkit.contour.processor.NIsosourcePartVector.prototype.getEnd = function(){};
    /**
     * Clears out all data
     */
    geotoolkit.contour.processor.NIsosourcePartVector.prototype.clear = function(){};
    /**
     * Increase collection capacity up to the n elements.
     * @param {number}n The new collection capacity
     */
    geotoolkit.contour.processor.NIsosourcePartVector.prototype.reserve = function(n){};
    /**
     * Increase size by 1. If buf_size less than size, increases buf_size twice.
     * @returns {number}size The new size of the vector.
     */
    geotoolkit.contour.processor.NIsosourcePartVector.prototype.add = function(){};

/**
 * This class stores points and consists of several parts.
 * Used to create isolines and isofills.
 * @class geotoolkit.contour.processor.NIsosource
 * @augments geotoolkit.contour.processor.NIsosourcePoints
 */
geotoolkit.contour.processor.NIsosource = {};
    /**
     * Gets the The isoline source level.
     * @returns {number}level The isoline source level.
     */
    geotoolkit.contour.processor.NIsosource.prototype.getLevel = function(){};
    /**
     * Sets the The isoline source level.
     * @param {number}level The isoline source level.
     * @returns {geotoolkit.contour.processor.NIsosource} this
     */
    geotoolkit.contour.processor.NIsosource.prototype.setLevel = function(level){};
    /**
     * Gets the Isource parts vector
     * @returns {geotoolkit.contour.processor.NIsosourcePartVector}parts The Isosource parts vector
     */
    geotoolkit.contour.processor.NIsosource.prototype.getParts = function(){};
    /**
     * Clears the collection
     */
    geotoolkit.contour.processor.NIsosource.prototype.clear = function(){};
    /**
     * Begins building part
     */
    geotoolkit.contour.processor.NIsosource.prototype.startPart = function(){};
    /**
     * End building part
     */
    geotoolkit.contour.processor.NIsosource.prototype.endPart = function(){};
    /**
     * Adds an elements from the specified collection to the end of this collection.
     * The number of elements copied is equal to the istart - iend.
     * If the reverse are set to true, it will appends elements in reverse
     * mode( <see cref="NIsosourcePoints.AppendReverse"/>).
     * @param {geotoolkit.contour.processor.NIsosourcePoints}newPoints Points to be appended to this collection.
     * @param {number}indexStart Starting position in the source collection.
     * @param {number}indexEnd Ending position in the source collection.
     * @param {boolean}reverse Boolean value for the appending mode.
     */
    geotoolkit.contour.processor.NIsosource.prototype.addPoints = function(newPoints, indexStart, indexEnd, reverse){};

/**
 * Stores the constants that are needed for contourJS
 * @class geotoolkit.contour.processor.ContourConstants
 */
geotoolkit.contour.processor.ContourConstants = {};

/**
 * Common functions used by Contour.
 * @class geotoolkit.contour.processor.Global
 */
geotoolkit.contour.processor.Global = {};
    /**
     * Gets the adjusted level
     * @returns {number}adjustedLevel The adjusted level.
     */
    geotoolkit.contour.processor.Global.prototype.getAdjustedLevel = function(){};
    /**
     * Sets the adjusted level
     * @param {number}level The adjusted level.
     * @returns {geotoolkit.contour.processor.Global} this
     */
    geotoolkit.contour.processor.Global.prototype.setAdjustedLevel = function(level){};
    /**
     * Calculates square of distance between points (x0,y0) and (x1,y1)
     * @param {number}x0 The first x.
     * @param {number}y0 The first y.
     * @param {number}x1 The second x.
     * @param {number}y1 The second y.
     * @returns {number}distanceSquared Square of the distance.
     */
    geotoolkit.contour.processor.Global.prototype.getDistanceSquared = function(x0, y0, x1, y1){};
    /**
     * Determines intersection coordinates of lines
     * (x0,y0)-(x1,y1) and (x2,y2)-(x3,y3) into (xout,yout).
     * Segment 1 : (x0,y0) ~ (x1,y1)
     * Segment 2 : (x2,y2) ~ (x3,y3)
     * @param {number}x0 First line start X.
     * @param {number}y0 First line start Y.
     * @param {number}x1 First line end X.
     * @param {number}y1 First line end Y.
     * @param {number}x2 Second line start X.
     * @param {number}y2 Second line start Y.
     * @param {number}x3 Second line end X.
     * @param {number}y3 Second line end Y.
     * @param {Float64Array}xOut The intersection point x-Coordinate
     * @param {Float64Array}yOut The intersection point y-Coordinate
     * @param {number}precision Resolution precision.
     * @param {number}precision2 The quadratic precision.
     * @returns {number}intersectionStatus The intersection status:
     * -3 : collinear, different lines;
     * -2 : on one line, segments don't intersect;
     * -1 : on one line, segments intersect;
     * 0 : lines intersect, segments don't intersect;
     * 1 : segments intersect
     */
    geotoolkit.contour.processor.Global.prototype.getIntersection = function(x0, y0, x1, y1, x2, y2, x3, y3, xOut, yOut, precision, precision2){};
    /**
     * Calculates bounding box for given points
     * @param {geotoolkit.util.Rect}limits bounding box to calculate
     * @param {number}size The size of arrays.
     * @param {Float64Array}arrayX array of x-coordinates
     * @param {Float64Array}arrayY array of y-coordinates
     */
    geotoolkit.contour.processor.Global.prototype.calcLimits = function(limits, size, arrayX, arrayY){};
    /**
     * Extends bounding box if it doesn't contain given points
     * @param {geotoolkit.util.Rect}limits bounding box
     * @param {number}size The size of arrays.
     * @param {Float64Array}arrayX array of x-coordinates
     * @param {Float64Array}arrayY array of y-coordinates
     */
    geotoolkit.contour.processor.Global.prototype.extendLimits = function(limits, size, arrayX, arrayY){};
    /**
     * Calculates rectangle that contains given rectangle after projection.
     * @param {geotoolkit.contour.projections.AbstractProjection}projection The projection
     * @param {geotoolkit.util.Rect}sourceRect The source rectangle
     * @param {geotoolkit.util.Rect}destinationRect The destination rectangle
     */
    geotoolkit.contour.processor.Global.projectBbox = function(projection, sourceRect, destinationRect){};
    /**
     * Transforms arrays of coordinates
     * @param {Float64Array}xCoordinates Array of x-coordinates
     * @param {Float64Array}yCoordinates array of y-coordinates
     * @param {number}count Coordinate values count
     * @param {geotoolkit.util.Transformation}tran The transformation
     */
    geotoolkit.contour.processor.Global.prototype.project = function(xCoordinates, yCoordinates, count, tran){};
    /**
     * If z is exact at range extremum, this will slightly change z
     * @param {geotoolkit.contour.scale.ContourScale}scale The contour scale
     * @param {number}z The value to adjust
     * @returns {number}range The range index for z-value
     */
    geotoolkit.contour.processor.Global.prototype.adjustLevel = function(scale, z){};

/**
 * The contour fault line. This is extension of Polyline.
 * Added attributes for lines:
 * 1. index - fault index.
 * 2. is_closed - boolean attribute, which specifies closed fault or not.
 * @param {number}nPoints The number of points
 * @param {Float64Array}x The x data array.
 * @param {Float64Array}y The y data array.
 * @param {boolean}closed Whether the fault is closed.
 * @class geotoolkit.contour.processor.ContourFaultLine
 * @augments geotoolkit.scene.shapes.Polyline
 */
geotoolkit.contour.processor.ContourFaultLine = {};
    /**
     * Gets the state of fault line(closed or not).
     * @returns {boolean}isClosed True if fault line is closed, false otherwise.
     */
    geotoolkit.contour.processor.ContourFaultLine.prototype.getClosed = function(){};
    /**
     * Gets the fault line model limits.
     * @returns {geotoolkit.util.Rect}limits The model limits.
     */
    geotoolkit.contour.processor.ContourFaultLine.prototype.getLimits = function(){};

/**
 * Stores isoFill data for rendering.
 * @class geotoolkit.contour.processor.ContourIsoFill
 */
geotoolkit.contour.processor.ContourIsoFill = {};
    /**
     * Gets the level number.
     * @returns {number}level The level number.
     */
    geotoolkit.contour.processor.ContourIsoFill.prototype.getLevel = function(){};
    /**
     * Sets the level number.
     * @param {number}level The level number.
     * @returns {geotoolkit.contour.processor.ContourIsoFill} this
     */
    geotoolkit.contour.processor.ContourIsoFill.prototype.setLevel = function(level){};
    /**
     * Gets the model limits
     * @returns {geotoolkit.util.Rect}limits The model limits.
     */
    geotoolkit.contour.processor.ContourIsoFill.prototype.getLimits = function(){};
    /**
     * Sets the model limits
     * @param {geotoolkit.util.Rect}limits The model limits.
     * @returns {geotoolkit.contour.processor.ContourIsoFill} this
     */
    geotoolkit.contour.processor.ContourIsoFill.prototype.setLimits = function(limits){};
    /**
     * Gets the smoothed limits.
     * @returns {geotoolkit.util.Rect}smoothedLimits The smoothed limits.
     */
    geotoolkit.contour.processor.ContourIsoFill.prototype.getSmoothedLimits = function(){};
    /**
     * Sets the smoothed limits.
     * @param {geotoolkit.util.Rect}smoothedLimits The smoothed limits.
     * @returns {geotoolkit.contour.processor.ContourIsoFill} this
     */
    geotoolkit.contour.processor.ContourIsoFill.prototype.setSmoothedLimits = function(smoothedLimits){};
    /**
     * Clears the contents of this shape
     */
    geotoolkit.contour.processor.ContourIsoFill.prototype.clear = function(){};

/**
 * Builds internal data structures needed to render contour
 * This structure is used to prevent label overlap.
 * @class geotoolkit.contour.processor.ContourLabelingArea
 */
geotoolkit.contour.processor.ContourLabelingArea = {};
    /**
     * Checks if the specified rectangular region is free (if there are no labels there).
     * @param {geotoolkit.util.Rect}rect The rectangular region to be checked.
     * @returns {boolean}isFree True if the region is free, false otherwise.
     */
    geotoolkit.contour.processor.ContourLabelingArea.prototype.check = function(rect){};
    /**
     * Marks the specified rectangular region as occupied.
     * @param {geotoolkit.util.Rect}rect The rectangular region to be marked
     */
    geotoolkit.contour.processor.ContourLabelingArea.prototype.put = function(rect){};
    /**
     * Determines whether there are any rectangles contained in this labeling area.
     * @returns {boolean}isEmpty True if there are no rectangles contained in this area.
     */
    geotoolkit.contour.processor.ContourLabelingArea.prototype.isEmpty = function(){};
    /**
     * Clears the labeling area.
     */
    geotoolkit.contour.processor.ContourLabelingArea.prototype.clear = function(){};

/**
 * The enum for the possible contour label orientations.
 * @class geotoolkit.contour.processor.ContourLabelsDirection
 */
geotoolkit.contour.processor.ContourLabelsDirection = {};
    /**
     * Direction rendering Labels.
     * @enum
     * @readonly
     */
    geotoolkit.contour.processor.ContourLabelsDirection.Direction = {};
        /**
         * By default labels are rendered along isoline upside up.
         * @type {number}
         */
        geotoolkit.contour.processor.ContourLabelsDirection.Direction.Default = NaN;
        /**
         * Labels are rendered towards positive gradient of the isoline
         * @type {number}
         */
        geotoolkit.contour.processor.ContourLabelsDirection.Direction.TowardsIsolineGradient = NaN;
        /**
         * Labels are rendered towards negative gradient of the isoline
         * @type {number}
         */
        geotoolkit.contour.processor.ContourLabelsDirection.Direction.AwayFromIsolineGradient = NaN;

/**
 * This is an class that builds an array of 2D triangles
 * using an array of 2D grid cells
 * @class geotoolkit.contour.processor.TriangularNet
 * @augments geotoolkit.contour.processor.ContourConstants
 */
geotoolkit.contour.processor.TriangularNet = {};
    /** Addition of triangle: incorrect edges or points. */
    geotoolkit.contour.processor.TriangularNet.ExcAddTriangle = {};
    /** Error in method isIntoEdge. */
    geotoolkit.contour.processor.TriangularNet.ExcIntoEdge = {};
    /** Method getIntersection: edge is not in triangle. */
    geotoolkit.contour.processor.TriangularNet.ExcIntersectEdge = {};
    /** Method EndSplit: tr already splitted */
    geotoolkit.contour.processor.TriangularNet.ExcTrAlreadySplit = {};
    /**
     * Gets grid boundary index x0
     * @returns {number}gridX0 Grid boundary index
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getGridX0 = function(){};
    /**
     * Gets grid boundary index x1
     * @returns {number}gridX1 grid boundary index
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getGridX1 = function(){};
    /**
     * Gets grid boundary index y0
     * @returns {number}gridY0 grid boundary index
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getGridY0 = function(){};
    /**
     * Gets grid boundary index y1
     * @returns {number}gridY1 grid boundary index
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getGridY1 = function(){};
    /**
     * Sets grid boundary index x0
     * @param {number}value grid boundary index
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setGridX0 = function(value){};
    /**
     * Sets grid boundary index x1
     * @param {number}value grid boundary index
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setGridX1 = function(value){};
    /**
     * Sets grid boundary index y0
     * @param {number}value grid boundary index
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setGridY0 = function(value){};
    /**
     * Sets grid boundary index y1
     * @param {number}value grid boundary index
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setGridY1 = function(value){};
    /**
     * Gets grid range left
     * @returns {number}gridY0 The grid range left
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getIx0 = function(){};
    /**
     * Gets grid range bottom
     * @returns {number}gridY1 The grid range bottom
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getIy0 = function(){};
    /**
     * Sets grid range left
     * @param {number}value The grid range left
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setIx0 = function(value){};
    /**
     * Sets grid range bottom
     * @param {number}value The grid range left
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setIy0 = function(value){};
    /**
     * Gets the half of precision that is to be used in cells
     * @returns {number}halfPrecis Half the precision
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getHalfPrecisCells = function(){};
    /**
     * Gets an array of possible triangles
     * @returns {Int32Array}possibleTriangles The possible triangles
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getPossibleTr = function(){};
    /**
     * Gets the outer edge
     * @returns {number}The integer value of the outer edge
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getIedgeOuter = function(){};
    /**
     * Gets the array with the indexes of triangles that will be split
     * @returns {geotoolkit.contour.util.IntVector}trianglesToBeSplit The array of triangle indexes
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getTrianglesToBeSplit = function(){};
    /**
     * Gets the array with the indexes of edges that will be split
     * @returns {geotoolkit.contour.util.IntVector}edgesToBeSplit The array of edge indexes
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getEdgesToBeSplit = function(){};
    /**
     * Gets the global thread object
     * @returns {geotoolkit.contour.processor.Global} The global object
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getGlobal = function(){};
    /**
     * Get the adjacent triangles containing point (x,y).
     * @function
     * @abstract
     * @param {number}x point x value.
     * @param {number}y point y value.
     * @param {Int32Array}possibleTr Array of index for the triangles that contains the point.
     * @returns {number} The number of triangles that contains the point.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getAdjacentTriangles = function(x, y, possibleTr){};
    /**
     * Number of cells in horizontal.
     * @returns {number}sizeX The horizontal size of cells.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getSizeX = function(){};
    /**
     * Number of cells in vertical.
     * @returns {number}sizeY The vertical size of cells.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getSizeY = function(){};
    /**
     * The point edge link collection.
     * @returns {geotoolkit.contour.processor.PointEdgeLinkVector}pointEdgeLinks The point edge link collection.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getPointEdgeLinks = function(){};
    /**
     * The edge/isoline intersection collection.
     * @returns {geotoolkit.contour.processor.EdgeSectionVector}edgeSections The edge/isoline intersection collection.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getEdgeSections = function(){};
    /**
     * The triangle collection.
     * @returns {geotoolkit.contour.processor.TriangleVector}triangles The triangle collection.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getTriangles = function(){};
    /**
     * The edge collection.
     * @returns {geotoolkit.contour.processor.EdgeVector}edges The edge collection..
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getEdges = function(){};
    /**
     * The point collection.
     * @returns {geotoolkit.contour.processor.PointVector}points The point collection..
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getPoints = function(){};
    /**
     * Throws a triangular net exception
     * @param {number}code The error code
     */
    geotoolkit.contour.processor.TriangularNet.netException = function(code){};
    /**
     * Gets the real precision
     * @returns {number}precis1 The real precision.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getPrecisionReal = function(){};
    /**
     * Gets the precision for point difference in cell units
     * (points within the distance of precisCells are considered overlayed)
     * @returns {number}precisCells The precision in cells.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getPrecisionInCells = function(){};
    /**
     * Sets the precision for point difference in cell units
     * (points within the distance of precisCells are considered overlayed)
     * @param {number}precision The precision in cells.
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setPrecisionInCells = function(precision){};
    /**
     * Clear data
     */
    geotoolkit.contour.processor.TriangularNet.prototype.clear = function(){};
    /**
     * Sets the model rectangle.
     * @param {geotoolkit.util.Rect}modelRect The model rectangle
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setModelRect = function(modelRect){};
    /**
     * Sets parameters for grid range left, bottom, width, height as well as
     * grid boundary and model rectangular
     * @param {geotoolkit.contour.grid.GridRange}range The grid range.
     * @param {geotoolkit.util.Rect}rect The model bounds rectangle.
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setSize = function(range, rect){};
    /**
     * Gets the grid to model transformation
     * @returns {geotoolkit.util.Transformation}gridToModel The grid to model transformation
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getGridToModel = function(){};
    /**
     * Sets the grid to model transformation
     * @param {geotoolkit.util.Transformation}gridToModel Sets the grid to model transformation
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setGridToModel = function(gridToModel){};
    /**
     * Gets the model to grid transformation
     * @returns {geotoolkit.util.Transformation}modelToGrid The model to grid transformation.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getModelToGrid = function(){};
    /**
     * Gets the projection
     * @returns {geotoolkit.contour.projections.AbstractProjection}projection The projection.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getProjection = function(){};
    /**
     * Sets the projection
     * @param {geotoolkit.contour.projections.AbstractProjection}projection The projection.
     * @returns {geotoolkit.contour.processor.TriangularNet} this
     */
    geotoolkit.contour.processor.TriangularNet.prototype.setProjection = function(projection){};
    /**
     * Add a point to the point vector.
     * @param {number}x The x-coordinate
     * @param {number}y The y-coordinate
     * @param {number}z The z-coordinate
     * @param {number}level The contour level
     * @returns {number}index The point index
     */
    geotoolkit.contour.processor.TriangularNet.prototype.addPoint = function(x, y, z, level){};
    /**
     * Add edge to the edge vector.
     * @param {number}iPoint1 Start point index.
     * @param {number}iPoint2 End point index.
     * @returns {number}index The number of edges in the vector.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.addEdge = function(iPoint1, iPoint2){};
    /**
     * Saves triangle as current splitted to add new triangles as child.
     * After last triangle is added, user calls endSplit
     * @param {number}itr The triangle index.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.startSplit = function(itr){};
    /**
     * Ends triangle split.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.endSplit = function(){};
    /**
     * Adds triangle, sets link to triangle in existing edges.
     * @param {number}iptA Point A index.
     * @param {number}iptB Point B index.
     * @param {number}iptC Point C index.
     * @param {number}iedgeAB EdgeAB index.
     * @param {number}iedgeBC EdgeBC index.
     * @param {number}iedgeCA EdgeCA index.
     * @returns {number}itr Number of triangles.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.addTriangle = function(iptA, iptB, iptC, iedgeAB, iedgeBC, iedgeCA){};
    /**
     * Remove triangle with index itr by setting the value corresponding index to a negative number
     * @param {number}itr The index of the triangle to remove
     */
    geotoolkit.contour.processor.TriangularNet.prototype.removeTriangle = function(itr){};
    /**
     * Adds edge/isoline intersection to the EdgeSectionVector
     * @param {number}iedge The edge index.
     * @param {number}level The level index.
     * @param {number}x The intersection position X.
     * @param {number}y The intersection position Y.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.addEdgeSection = function(iedge, level, x, y){};
    /**
     * Places adjacent and outer edge indexes to adj_edge and out_edge
     * Finds the edge in the triangle adjacent to the edge and apex point. Also places
     * the outer edge index to iedge_outer.
     * @param {number}itr The triangle index for the triangle to be searched.
     * @param {number}iedge The edge index.
     * @param {number}ipt The point index for the apex.
     * @returns {number}adjIndex The adjacent edge index.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getAdjacentEdgeOuter = function(itr, iedge, ipt){};
    /**
     * Create point edge links for all edges.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.createPointEdgeLinks = function(){};
    /**
     * Gets clipped to triangle second point. Returns point position.
     * @param {number}itr The triangle index.
     * @param {number}x The segment start point x value.
     * @param {number}y The segment start point y value.
     * @param {number}x2 The segment end point x value.
     * @param {number}y2 The segment end point x value.
     * @param {Float64Array}xOut The clipped point x-Coordinate.
     * @param {Float64Array}yOut The clipped point y-Coordinate.
     * @returns {number}BitPosOutside : the first point (x,y) is outside of the triangle,
     * Else, return the clipped point in triangle position bits ( see ContourConstants ).
     */
    geotoolkit.contour.processor.TriangularNet.prototype.clipSecondPoint = function(itr, x, y, x2, y2, xOut, yOut){};
    /**
     * Finds common or removed triangle containing point (x,y).
     * If possible some part of segment (x,y)-(x2,y2)
     * Returns triangle index (or -1 if not found).
     * @param {number}x The first point X.
     * @param {number}y The first point Y.
     * @param {number}x2 The second point X.
     * @param {number}y2 The second point Y.
     * @param {Float64Array}xOut The intersection point x-coordinate.
     * @param {Float64Array}yOut The intersection point y-coordinate.
     * @param {Int32Array}pos The output position.
     * @returns {number}itr Triangle index (or -1 if not found).
     */
    geotoolkit.contour.processor.TriangularNet.prototype.findTriangle = function(x, y, x2, y2, xOut, yOut, pos){};
    /**
     * Add edges to the edge vector
     * @param {Int32Array}iPoint1 The start point index array
     * @param {Int32Array}iPoint2 The end point index array
     */
    geotoolkit.contour.processor.TriangularNet.prototype.addEdgeArray = function(iPoint1, iPoint2){};
    /**
     * Add a link to the PointEdgeLinkVector for the point and edge.
     * @param {number}iPoint The point index
     * @param {number}iEdge The edge index
     */
    geotoolkit.contour.processor.TriangularNet.prototype.addPointEdgeLink = function(iPoint, iEdge){};
    /**
     * If (x1,y1)-(x2,y2) has segment on edge, returns 1;
     * if one point on edge, returns 0;
     * if no common points, returns -1;
     * Places coords of intersection to (xout,yout) .
     * @param {number}itr The triangle index.
     * @param {number}iedge The edge index for the edge segment to be checked.
     * @param {number}x1 The point1 x value.
     * @param {number}y1 The point1 y value.
     * @param {number}x2 The point2 x value.
     * @param {number}y2 The point2 y value.
     * @param {Float64Array}xOut The intersection point x-Coordinate.
     * @param {Float64Array}yOut The intersection point y-Coordinate.
     * @param {number}firstPointPos The First point position bit (see ContourConstants).
     * @returns {number}intersectionPosition If (x1,y1)-(x2,y2) is intersect with the edge,
     * returns the triangle position bits, if no intersection, returns 0.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.isIntoEdge = function(itr, iedge, x1, y1, x2, y2, xOut, yOut, firstPointPos){};
    /**
     * Gets the intersection of line segment (x1,y1), (x2,y2) with the edge in the triangle.
     * @param {number}itr The triangle index.
     * @param {number}iedge The edge index for the edge segment to be checked.
     * @param {number}x1 The point1 x value.
     * @param {number}y1 The point1 y value.
     * @param {number}x2 The point2 x value.
     * @param {number}y2 The point2 y value.
     * @param {Float64Array}xOut The intersection point x-Coordinate.
     * @param {Float64Array}yOut The intersection point y-Coordinate.
     * @param {number}firstPointPos The First point position bit (see ContourConstants).
     * @returns {number}intersectionPosition If (x1,y1)-(x2,y2) is intersect with the edge,
     * returns the triangle position bits, if no intersection, returns 0.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getIntersection = function(itr, iedge, x1, y1, x2, y2, xOut, yOut, firstPointPos){};
    /**
     * Finds point position in triangle.
     * Returns combination of bits from enum PointInTrianglePositionBits.
     * @param {number}itr The triangle index.
     * @param {number}x The point position x.
     * @param {number}y The point position y.
     * @returns {number}position The Point in triangle position bits (see ContourConstants).
     */
    geotoolkit.contour.processor.TriangularNet.prototype.getTrianglePointPosition = function(itr, x, y){};
    /**
     * Clips line segment to grid range.
     * @param {geotoolkit.util.Point}modelP1 The first model point
     * @param {geotoolkit.util.Point}modelP2 The second model point
     * @returns {boolean}intersects True if segment intersects grid range, False otherwise.
     */
    geotoolkit.contour.processor.TriangularNet.prototype.clipToGrid = function(modelP1, modelP2){};

/**
 * This class builds an array of triangles from the array of rectangular grid cells
 * by partitioning each grid cell into 2 triangles.
 * @class geotoolkit.contour.processor.RectTriangularNet
 * @augments geotoolkit.contour.processor.TriangularNet
 */
geotoolkit.contour.processor.RectTriangularNet = {};
    /** Faults processing is not compatible with usage of projection */
    geotoolkit.contour.processor.RectTriangularNet.ExcAddTriangle = {};
    /** FindTriangle: incorrect fract calculation */
    geotoolkit.contour.processor.RectTriangularNet.ExcFindTriangle = {};
    /**
     * Get the adjacent triangles containing point (x,y)
     * @override
     * @param {number}x The point x value.
     * @param {number}y The point y value.
     * @param {Int32Array}possibleTr The array of index for the triangles that contains the point The array is to be filled and return.
     * @returns {number}numTriangles The number of triangles that contains the point.
     */
    geotoolkit.contour.processor.RectTriangularNet.prototype.getAdjacentTriangles = function(x, y, possibleTr){};

/**
 * This iterator finds triangles that are around a given point.
 * @class geotoolkit.contour.processor.AroundPointIterator
 */
geotoolkit.contour.processor.AroundPointIterator = {};
    /** Start point is not in triangle. */
    geotoolkit.contour.processor.AroundPointIterator.ExcPoint = {};
    /** Edge is not at required point. */
    geotoolkit.contour.processor.AroundPointIterator.ExcEdge = {};
    /** Infinite loop around point */
    geotoolkit.contour.processor.AroundPointIterator.ExcLoop = {};
    /**
     * Gets the triangle index.
     * @returns {number}itr The triangle index.
     */
    geotoolkit.contour.processor.AroundPointIterator.prototype.getItr = function(){};
    /**
     * Gets the edge index.
     * @returns {number}iedge The edge index.
     */
    geotoolkit.contour.processor.AroundPointIterator.prototype.getIedge = function(){};
    /**
     * Gets the outer edge index.
     * @returns {number}iedgeOuter The outer edge index.
     */
    geotoolkit.contour.processor.AroundPointIterator.prototype.getIedgeOuter = function(){};
    /**
     * Initializes the iterator
     * @param {geotoolkit.contour.processor.TriangularNet}pNet The triangular net.
     * @param {number}pItr The starting triangle index.
     * @param {number}pIpt the starting point index.
     * @param {boolean}clockwise The movement direction around current point.
     */
    geotoolkit.contour.processor.AroundPointIterator.prototype.start = function(pNet, pItr, pIpt, clockwise){};
    /**
     * Goes to next edge/triangle.
     * @returns {number}result (-1 = end (border), 0 = end (returned to begin), 1 = element exists).
     */
    geotoolkit.contour.processor.AroundPointIterator.prototype.next = function(){};
    /**
     * Throws a triangular net exception
     * @param {number}code The error code
     */
    geotoolkit.contour.processor.AroundPointIterator.netException = function(code){};

/**
 * Stores the x,y grid extents for a <code>ContourGrid</code> object.
 * @param {number|geotoolkit.contour.grid.GridRange} [left=0] start index for coordinates arrays.
 * @param {number}[bottom=0] start index for coordinates arrays.
 * @param {number}[right=0] start index for coordinates arrays.
 * @param {number}[top=0] start index for coordinates arrays.
 * @class geotoolkit.contour.grid.GridRange
 */
geotoolkit.contour.grid.GridRange = {};
    /**
     * The left extent of this grid range
     * @returns {number}left
     */
    geotoolkit.contour.grid.GridRange.prototype.getLeft = function(){};
    /**
     * The right extent of this grid range
     * @returns {number}right
     */
    geotoolkit.contour.grid.GridRange.prototype.getRight = function(){};
    /**
     * The bottom extent of this grid range
     * @returns {number}bottom
     */
    geotoolkit.contour.grid.GridRange.prototype.getBottom = function(){};
    /**
     * The top extent of this grid range
     * @returns {number}top
     */
    geotoolkit.contour.grid.GridRange.prototype.getTop = function(){};
    /**
     * The width of this grid range
     * @returns {number}width
     */
    geotoolkit.contour.grid.GridRange.prototype.getWidth = function(){};
    /**
     * The height of this grid range
     * @returns {number}height
     */
    geotoolkit.contour.grid.GridRange.prototype.getHeight = function(){};
    /**
     * Sets the range for this grid
     * @param {number|geotoolkit.contour.grid.GridRange}left Left range extent or GridRange
     * @param {number}bottom Bottom range extent
     * @param {number}right Right range extent
     * @param {number}top Top range extent
     * @returns {geotoolkit.contour.grid.GridRange} this
     */
    geotoolkit.contour.grid.GridRange.prototype.setGridRange = function(left, bottom, right, top){};
    /**
     * Checks if the supplied point or range is contained within this one.
     * @param {number|geotoolkit.contour.grid.GridRange}x X-coordinate or gridRange
     * @param {number}y Y-coordinate
     * @returns {boolean}
     */
    geotoolkit.contour.grid.GridRange.prototype.contains = function(x, y){};
    /**
     * Determines whether this grid range intersects with the supplied grid range.
     * @param {geotoolkit.contour.grid.GridRange}range The grid range to check against
     * @returns {boolean}intesects True if the two grid ranges intersect
     */
    geotoolkit.contour.grid.GridRange.prototype.intersects = function(range){};
    /**
     * Computes the intersection between this grid range and the specified grid range.
     * @param {geotoolkit.contour.grid.GridRange}range The grid range
     * @returns {geotoolkit.contour.grid.GridRange}intersection The intersected grid range.
     */
    geotoolkit.contour.grid.GridRange.prototype.intersection = function(range){};
    /**
     * Determines if this range is empty
     * @returns {boolean}empty True if the grid range is empty
     */
    geotoolkit.contour.grid.GridRange.prototype.isEmpty = function(){};
    /**
     * Resets this grid range to be empty: Sets the size to zero, and the position to (0,0)
     */
    geotoolkit.contour.grid.GridRange.prototype.reset = function(){};
    /**
     * Grid Range as a cgRect object
     * @returns {geotoolkit.util.Rect}rect The range as a Rect.
     */
    geotoolkit.contour.grid.GridRange.prototype.getRect = function(){};

/**
 * Base class for a contour grid that has hole values and a grid-to-model transformation.
 * @class geotoolkit.contour.grid.ContourAbstractGrid
 * @augments geotoolkit.contour.processor.ContourConstants
 */
geotoolkit.contour.grid.ContourAbstractGrid = {};
    /** The space reserve ratio */
    geotoolkit.contour.grid.ContourAbstractGrid.SpaceReserveRatio = {};
    /**
     * Gets the Grid Range
     * @function
     * @abstract
     * @returns {geotoolkit.contour.grid.GridRange}gridRange
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.getRange = function(){};
    /**
     * Sets the Grid Range
     * @function
     * @param {geotoolkit.contour.grid.GridRange}gridRange The grid z-value range.
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.setRange = function(gridRange){};
    /**
     * Gets the grid-to-model transformation
     * @returns {geotoolkit.util.Transformation}transformation Grid-To-Model transformation
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.getGridToModel = function(){};
    /**
     * Sets the grid-to-model transformation
     * @param {geotoolkit.util.Transformation}transformation Grid-To-Model transformation
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.setGridToModel = function(transformation){};
    /**
     * Gets the model limits of the data
     * @function
     * @abstract
     * @returns {geotoolkit.util.Rect}modelLimits
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.getModelLimits = function(){};
    /**
     * Empties the Grid
     * @function
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.clearGrid = function(){};
    /**
     * Gets the altitude at the give model point location.
     * @param {geotoolkit.util.Point}modelPoint The model point
     * @returns {number}value The model point's value
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.getValueAtModelPoint = function(modelPoint){};
    /**
     * Begins building grid
     * @param {geotoolkit.contour.processor.TriangularNet}tnet Triangular net
     * @param {number}nPoints The number of points.
     * @param {number}nTriangles The number of triangles.
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.startBuild = function(tnet, nPoints, nTriangles){};
    /**
     * Returns grid rebuild state.
     * @returns {boolean}needRebuild True if grid is to be rebuilt (data changed)
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.needRebuild = function(){};
    /**
     * Gets the build range
     * @param {geotoolkit.contour.grid.GridRange}netRange The range for the net
     * @param {geotoolkit.contour.grid.GridRange}realRange The range for the data
     * @function
     * @abstract
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.getBuildRange = function(netRange, realRange){};
    /**
     * Builds triangular net (creates points, edges and triangles).
     * @param {geotoolkit.contour.processor.TriangularNet}tnet The triangular net.
     * @param {geotoolkit.contour.scale.ContourScale}scale ContourScale scale for data values.
     * @param {geotoolkit.util.Rect}modelLimits Needed model limits.
     * @param {geotoolkit.util.Transformation}modelToDevice Model to device transformation
     * @param {geotoolkit.contour.projections.AbstractProjection}projection The coordinate projection.
     * @function
     * @abstract
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.buildTriangularNet = function(tnet, scale, modelLimits, modelToDevice, projection){};
    /**
     * Converts the value that is not altered when setting to a Float64Array value.
     * @param {number}value The value that will be converted to a safe double.
     * @returns {number}safeValue The converted value.
     */
    geotoolkit.contour.grid.ContourAbstractGrid.prototype.convertToSafeFloat64 = function(value){};

/**
 * A contour grid is rectangular grid of nodes.
 * Each node contains an altitude value. The dimensional characteristics of contour grid
 * are described with the help of <CODE>{@link geotoolkit.contour.grid.GridRange}</CODE> class.
 *
 * The grid coordinate system is orthogonal. The node indices may be only non-negative
 * (starting from 0). You may think about grid data as of two-dimensional array.
 * @param {?geotoolkit.contour.grid.GridRange} gridRange The range of the specified grid range
 * @param {?Float64Array} data The data array
 * @class geotoolkit.contour.grid.ContourRectangularGrid
 * @augments geotoolkit.contour.grid.ContourAbstractGrid
 */
geotoolkit.contour.grid.ContourRectangularGrid = {};
    /**
     * Gets the model limits of the data
     * @override
     * @function
     * @returns {geotoolkit.util.Rect}modelLimits
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getModelLimits = function(){};
    /**
     * Sets the data using algorithms that depend on the number of parameters
     * @param {number|Float64Array|geotoolkit.contour.grid.GridRange}x x-index, data array, or grid range
     * @param {number|Float64Array}y y-index, or data array
     * @param {number}value The value
     * @returns {geotoolkit.contour.grid.ContourRectangularGrid} this
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setData = function(x, y, value){};
    /**
     * Sets the grid data using specified data array. It is assumed that
     * the size of data array matches to dimensions of the current grid range.
     * @param {Float64Array}data The data array
     * @returns {geotoolkit.contour.grid.ContourRectangularGrid} this
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setDataWithArray = function(data){};
    /**
     * Sets the grid range and grid data using specified parameters.
     * It is assumed that the dimensions of new grid range match to
     * the size of data array.
     * @param {geotoolkit.contour.grid.GridRange}range The new grid range
     * @param {Float64Array}data The data array
     * @returns {geotoolkit.contour.grid.ContourRectangularGrid} this
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setDataWithRangeAndArray = function(range, data){};
    /**
     * Returns the grid data value by its coordinates in grid
     * coordinate system.
     * @param {number}x The x-coordinate
     * @param {number}y The x-coordinate
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getValue = function(x, y){};
    /**
     * Sets the grid data value by its coordinates in grid coordinate system.
     * @param {number}x The x-coordinate
     * @param {number}y The y-coordinate
     * @param {number}value The new value
     * @returns {geotoolkit.contour.grid.ContourRectangularGrid} this
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setValue = function(x, y, value){};
    /**
     * Determines whether the grid node with specified coordinates
     * doesn't have an altitude value (is a hole)
     * @param {number}x The x-coordinate
     * @param {number}y The y-coordinate
     * @returns {boolean}isHole True if the grid node with specified coordinates is a hole
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.isHole = function(x, y){};
    /**
     * Tests if argument is hole value
     * @param {number}value The value to be tested
     * @returns {boolean}isHole True if the value is a hole.
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.isHoleValue = function(value){};
    /**
     * Adds a value that will serve as an indicator for a hole in data grid.
     * It is assumed that grid data may have more then one hole value.
     * @param {number}holeValue The hole value
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.addHoleValue = function(holeValue){};
    /**
     * Empties the Grid
     * @override
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.clearGrid = function(){};
    /**
     * Gets the altitude at the give model point location.
     * @override
     * @param {geotoolkit.util.Point}modelPoint The model point
     * @returns {number}value The model point's value
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getValueAtModelPoint = function(modelPoint){};
    /**
     * Gets the maximum value in the contour grid.
     * If the max value has not been set this method
     * will scan whole grid to find maximum altitude
     * value (but only once, then it will remember it).
     * @returns {number}max The maximum value
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getMaxValue = function(){};
    /**
     * Sets the maximum value in the contour grid
     * @param {number}value The new maximum value
     * @returns {geotoolkit.contour.grid.ContourRectangularGrid} this
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setMaxValue = function(value){};
    /**
     * Gets the minimum value in the contour grid.
     * If the min value has not been set this method
     * will scan whole grid to find minimal altitude
     * value (but only once, then it will remember it).
     * @returns {number}min The minimum value
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getMinValue = function(){};
    /**
     * Sets the minimum value in the contour grid
     * @param {number}value The new minimum value
     * @returns {geotoolkit.contour.grid.ContourRectangularGrid} this
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setMinValue = function(value){};
    /**
     * Gets the border bits
     * @returns {number} The border bits
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getBorders = function(){};
    /**
     * Sets the border bits
     * @param {number}value The border bits
     * @returns {geotoolkit.contour.grid.ContourRectangularGrid} this
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setBorders = function(value){};
    /**
     * Gets the Grid Range for contour grid.
     * @override
     * @function
     * @returns {geotoolkit.contour.grid.GridRange|null}gridRange
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getRange = function(){};
    /**
     * Sets the Grid Range for contour grid.
     * @override
     * @function
     * @param {geotoolkit.contour.grid.GridRange}gridRange The grid z-value range.
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setRange = function(gridRange){};
    /**
     * Returns grid rebuild state.
     * @returns {boolean}needRebuild True if grid is to be rebuilt (data changed)
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.needRebuild = function(){};
    /**
     * Builds triangular net (creates points, edges and triangles).
     * @override
     * @param {geotoolkit.contour.processor.TriangularNet}tnet The triangular net
     * @param {geotoolkit.contour.scale.ContourScale}scale The scale
     * @param {geotoolkit.util.Rect}modelLimits The model limits
     * @param {geotoolkit.util.Transformation}modelToDevice The model to device transformation
     * @param {geotoolkit.contour.projections.AbstractProjection}projection The coordinate projection
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.buildTriangularNet = function(tnet, scale, modelLimits, modelToDevice, projection){};
    /**
     * Gets the build range
     * @override
     * @param {geotoolkit.contour.grid.GridRange}netRange The range for the net
     * @param {geotoolkit.contour.grid.GridRange}realRange The range for the data
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getBuildRange = function(netRange, realRange){};
    /**
     * Converts the model point to grid coordinates
     * @param {geotoolkit.util.Point}modelPoint The model point
     * @returns {geotoolkit.util.Point}gridPoint The grid point
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getGridPointFromModelPoint = function(modelPoint){};
    /**
     * Gets the grid-to-model transformation
     * @returns {geotoolkit.util.Transformation}transformation Grid-To-Model transformation
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.getGridToModel = function(){};
    /**
     * Sets the grid-to-model transformation
     * @param {geotoolkit.util.Transformation}transformation Grid-To-Model transformation
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.setGridToModel = function(transformation){};
    /**
     * Updates the data array with new data
     * @param {Float64Array}data The new data
     */
    geotoolkit.contour.grid.ContourRectangularGrid.prototype.updateDataArray = function(data){};

/**
 * Contour grid built on a set of triangles.
 * @class geotoolkit.contour.grid.ContourTriangularGrid
 * @augments geotoolkit.contour.grid.ContourAbstractGrid
 */
geotoolkit.contour.grid.ContourTriangularGrid = {};
    /**
     * Adds a value that will serve as an indicator for a hole in data grid.
     * It is assumed that grid data may have more then one hole value.
     * @param {number}holeValue The hole value
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.addHoleValue = function(holeValue){};
    /**
     * Removes all grid data
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.clear = function(){};
    /**
     * Clears grid data
     * @override
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.clearGrid = function(){};
    /**
     * Sets data for grid. This is the more complicated method of two setTriangles
     * but is faster and has more advanced border visualization handling.
     * @param {Float64Array}pointsX array of x-coordinates for points.
     * @param {Float64Array}pointsY array of y-coordinates for points.
     * @param {Float64Array}pointsZ array of altitude values for points.
     * @param {number}nPoints The number of points.
     * @param {Int32Array}edgesPoint1 Array of first point index for edges.
     * @param {Int32Array}edgesPoint2 Array of second point index for edges.
     * @param {number}nEdges The number of edges.
     * @param {Int32Array}trianglesEdgeAB Array of first edge index for triangles.
     * @param {Int32Array}trianglesEdgeBC Array of second edge index for triangles.
     * @param {Int32Array}trianglesEdgeCA Array of third edge index for triangles.
     * @param {number}nTriangles The number of triangles.
     * @param {boolean}defaultBorder The default border.
     * @param {Int32Array}borderEdges The border edges (can be null).
     * @param {number}nBorderEdges The number of border edges.
     * @returns {geotoolkit.contour.grid.ContourTriangularGrid} this
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.setTrianglesAdvanced = function(pointsX, pointsY, pointsZ, nPoints, edgesPoint1, edgesPoint2, nEdges, trianglesEdgeAB, trianglesEdgeBC, trianglesEdgeCA, nTriangles, defaultBorder, borderEdges, nBorderEdges){};
    /**
     * Sets data for grid.
     * @param {Float64Array}pointsX array of x-coordinates for points.
     * @param {Float64Array}pointsY array of y-coordinates for points.
     * @param {Float64Array}pointsZ array of altitude values for points.
     * @param {number}nPoints The number of points.
     * @param {Int32Array}trianglesPointsA Array of first point index for triangles.
     * @param {Int32Array}trianglesPointsB Array of second point index for triangles.
     * @param {Int32Array}trianglesPointsC Array of third point index for triangles.
     * @param {number}nTriangles The number of triangles.
     * @param {boolean}defaultBorder if <CODE>true</CODE>, all edges that belong to
     * only one triangle are included into contour border for visualization
     * @returns {geotoolkit.contour.grid.ContourTriangularGrid} this
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.setTrianglesSimple = function(pointsX, pointsY, pointsZ, nPoints, trianglesPointsA, trianglesPointsB, trianglesPointsC, nTriangles, defaultBorder){};
    /**
     * Gets the number of points
     * @returns {number}number The number of points
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getNumberPoints = function(){};
    /**
     * Value current altitude values for point
     * @param {number}indexPoint The number value point
     * @returns {number}altitudeValue The altitude value for the point
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getPointValue = function(indexPoint){};
    /**
     * Sets the maximum value in the contour grid
     * @param {number}value The new maximum value
     * @returns {geotoolkit.contour.grid.ContourTriangularGrid} this
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.setMaxValue = function(value){};
    /**
     * Gets the maximum value in the contour grid.
     * If the max value has not been set this method
     * will scan whole grid to find maximum altitude
     * value (but only once, then it will remember it).
     * @returns {number}max The maximum value
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getMaxValue = function(){};
    /**
     * Sets the minimum value in the contour grid
     * @param {number}value The new maximum value
     * @returns {geotoolkit.contour.grid.ContourTriangularGrid} this
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.setMinValue = function(value){};
    /**
     * Gets the minimum value in the contour grid.
     * If the max value has not been set this method
     * will scan whole grid to find maximum altitude
     * value (but only once, then it will remember it).
     * @returns {number}max The maximum value
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getMinValue = function(){};
    /**
     * Get grid to model mapping transformation for triangle grid data.
     * @returns {geotoolkit.util.Transformation}transformation The grid to model transformation
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getTriangleGrid2ModelTransformation = function(){};
    /**
     * Gets the model limits of the data
     * @override
     * @returns {geotoolkit.util.Rect}modelLimits The model limits
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getModelLimits = function(){};
    /**
     * Gets the altitude at the give model point location.
     * @override
     * @param {geotoolkit.util.Point}modelPoint The model point
     * @returns {number}modelPoint The model point's value
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getValueAtModelPoint = function(modelPoint){};
    /**
     * Gets the Grid Range (Reserved. Always returns SetGridRange(0,0,0,0))
     * @override
     * @returns {geotoolkit.contour.grid.GridRange}gridRange
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getRange = function(){};
    /**
     * Sets the Grid Range (Reserved. Always sets SetGridRange(0,0,0,0))
     * @override
     * @param {geotoolkit.contour.grid.GridRange}gridRange The grid z-value range.
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.setRange = function(gridRange){};
    /**
     * This property gets the duplicates removal mode for the triangular grid.
     * If set to TRUE, then the system will attempt to fix errors in input data.
     * This feature is enabled by default.
     * @returns {boolean}removeDuplicatePoints If True duplicates will be removed.
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getRemoveDuplicatePoints = function(){};
    /**
     * This property enables/disables duplicates removal from triangular grid.
     * If set to TRUE, then the system will attempt to fix errors in input data.
     * This feature is enabled by default.
     * @param {boolean}removeDuplicatePoints If True duplicates will be removed.
     * @returns {geotoolkit.contour.grid.ContourTriangularGrid} this
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.setRemoveDuplicatePoints = function(removeDuplicatePoints){};
    /**
     * Builds triangular net (creates points, edges and triangles).
     * @override
     * @param {geotoolkit.contour.processor.TriangularNet}tnet The triangular net
     * @param {geotoolkit.contour.scale.ContourScale}scale The scale
     * @param {geotoolkit.util.Rect}modelLimits The model limits
     * @param {geotoolkit.util.Transformation}modelToDevice The model to device transformation
     * @param {geotoolkit.contour.projections.AbstractProjection}projection The coordinate projection
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.buildTriangularNet = function(tnet, scale, modelLimits, modelToDevice, projection){};
    /**
     * Returns grid rebuild state.
     * @override
     * @returns {boolean}needRebuild True if grid is to be rebuilt (data changed)
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.needRebuild = function(){};
    /**
     * Gets the build range
     * @override
     * @param {geotoolkit.contour.grid.GridRange}netRange The range for the net
     * @param {geotoolkit.contour.grid.GridRange}realRange The range for the data
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getBuildRange = function(netRange, realRange){};
    /**
     * Gets the X points.
     * @returns {Float64Array}xPoints The array of X points.
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getPointsX = function(){};
    /**
     * Gets the Y points.
     * @returns {Float64Array}yPoints The array of Y points.
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getPointsY = function(){};
    /**
     * Gets the Z points.
     * @returns {Float64Array}zPoints The array of Z points.
     */
    geotoolkit.contour.grid.ContourTriangularGrid.prototype.getPointsZ = function(){};

/**
 * This class stores the colorMap table for the Visuals (AbstractVisual and its derivatives).
 * @param {geotoolkit.contour.visuals.VisualColorMap|geotoolkit.contour.visuals.AbstractVisual|Array<String>}colors The colorMap
 * @param {geotoolkit.contour.visuals.AbstractVisual}visual The associated visual.
 * @class geotoolkit.contour.visuals.VisualColorMap
 */
geotoolkit.contour.visuals.VisualColorMap = {};
    /**
     * Gets the colorMap as an array of color strings.
     * @returns {Array<String>}colors The colorMap colors in string format.
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.getColors = function(){};
    /**
     * Sets the colorMap colors.
     * @param {Array<String>}colors The colorMap colors in string format.
     * @returns {geotoolkit.contour.visuals.VisualColorMap} this
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.setColors = function(colors){};
    /**
     * Gets the size of the colorMap.
     * @returns {number}size The size of the colorMap.
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.getSize = function(){};
    /**
     * Returns the Color for the supplied index.
     * @param {number}index Index for the requested color.
     * @returns {string}color The requested color for this index.
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.getColorFor = function(index){};
    /**
     * Sets the Color object for the supplied colorMap index.
     * This is required for the Editor dialog boxes, and is not used by any of the visuals
     * to modify a supplied colorMap.
     * @param {number}index Index into the colorMap.
     * @param {string}color The new color for this index.
     * @returns {geotoolkit.contour.visuals.VisualColorMap} this
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.setColorFor = function(index, color){};
    /**
     * Make and return a deep copy of this colorMap
     * @returns {geotoolkit.contour.visuals.VisualColorMap}clone The cloned colorMap.
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.clone = function(){};
    /**
     * Rotates colors in the colorMap, in a positive direction.
     * Ie. index 0 -> index (delta). Can also handle negative delta values
     * @param {number}nStart Start of range to rotate.
     * @param {number}nEnd End (inclusive) of range to rotate.
     * @param {number}delta The rotation value.
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.rotate = function(nStart, nEnd, delta){};
    /**
     * Delete the colors in the range nStart->nEnd inclusive.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * @param {number}start Start of range to delete
     * @param {number}end End of range to delete
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.deleteColors = function(start, end){};
    /**
     * Insert a new colour into the colorMap.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * Set nStart to Size to insert at the end of the colorMap
     * @param {number}nStart Index to insert new colour at. The colour at this index will be copied.
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.insertColor = function(nStart){};
    /**
     * Interpolate colors in the colorMap.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * @param {number}nStart Start of range to interpolate (this color stays the same)
     * @param {number}nEnd End of range to delete (this color stays the same)
     */
    geotoolkit.contour.visuals.VisualColorMap.prototype.interpolate = function(nStart, nEnd){};

/**
 * An abstract contour visual. All visuals are then derived from this abstract class.
 * By default visible property to true and notify property is false.
 * @class geotoolkit.contour.visuals.AbstractVisual
 * @augments geotoolkit.scene.shapes.Shape
 */
geotoolkit.contour.visuals.AbstractVisual = {};
    /**
     * The BehaviorType enumeration is used to describe how contour values are mapped to the colorMap,
     * via the ColorBehavior property. (Default is SIMPLE.)
     * @enum
     * @readonly
     */
    geotoolkit.contour.visuals.AbstractVisual.BehaviorType = {};
        /**
         * This maps contours to colors on a one-to-one basis with Contour #0 colored with the
         * first color in the colorMap. Any contours above the highest colorMap entry are colored
         * with this highest colorMap entry.
         * @type {number}
         */
        geotoolkit.contour.visuals.AbstractVisual.BehaviorType.SIMPLE = NaN;
        /**
         * Colors wrap around for higher contour values. Ie. color = contour MODULO #Colors
         * @type {number}
         */
        geotoolkit.contour.visuals.AbstractVisual.BehaviorType.WRAP = NaN;
        /**
         * Colors are stretched to cover the full range of contour values. Ie. Contour 0 maps to color 0;
         * and Contour (#Contours-1) maps to Color (#Colors-1).
         * @type {number}
         */
        geotoolkit.contour.visuals.AbstractVisual.BehaviorType.STRETCH = NaN;
    /**
     * Gets the notification state of this visual
     * @returns {boolean}notify If this is true, updates will be broadcast to the listeners.
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.getNotify = function(){};
    /**
     * Sets the notification state of this visual
     * @param {boolean}notify If this is true, updates will be broadcast to the listeners.
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.setNotify = function(notify){};
    /**
     * Gets the visual colorMap.
     * @returns {geotoolkit.contour.visuals.VisualColorMap}colorMap The colorMap used by this visual
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.getColorMap = function(){};
    /**
     * Sets the visual colorMap
     * @param {geotoolkit.contour.visuals.VisualColorMap}colorMap The colorMap used by this visual
     * @returns {geotoolkit.contour.visuals.AbstractVisual} this
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.setColorMap = function(colorMap){};
    /**
     * Gets the color behavior for this visual.
     * @returns {geotoolkit.contour.visuals.AbstractVisual.BehaviorType}colorBehavior The color behavior type.
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.getColorBehavior = function(){};
    /**
     * Sets the color behavior for this visual.
     * @param {geotoolkit.contour.visuals.AbstractVisual.BehaviorType}colorBehavior The color behavior type.
     * @returns {geotoolkit.contour.visuals.AbstractVisual} this
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.setColorBehavior = function(colorBehavior){};
    /**
     * Registers the specified visual listener to receiving events from this visual.
     * @param {geotoolkit.contour.shapes.ContourShape}visualListener The visual listener
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.addVisualListener = function(visualListener){};
    /**
     * Unregisters the specified visual listener from receiving event from this visual.
     * @param {geotoolkit.contour.shapes.ContourShape}visualListener The visual listener
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.removeVisualListener = function(visualListener){};
    /**
     * Notifies the registered listeners of an event.
     * @param {geotoolkit.contour.events.VisualEvent}args The event to pass to the listeners.
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.notifyListeners = function(args){};
    /**
     * Invalidates the visual, sending events (if notify flag is set)
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.invalidateVisual = function(){};
    /**
     * Render the visual. This must be defined in all sub-classes.
     * @param {geotoolkit.renderer.RenderingContext}renderingContext The rendering context.
     * @function
     * @abstract
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.render = function(renderingContext){};
    /**
     * This method is invoked when the contour shape has been invalidated.
     * Nothing is performed for this class, but it must be overridden
     * in subclasses for correct event processing.
     * This is actually defined abstract in cgVisualListener, and is passed on for definition in the subclass.
     * @param {geotoolkit.contour.events.ContourEvent}args The contour event
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.contourInvalidated = function(args){};
    /**
     * Choose a color for the supplied contour value, using the current _color_behavior.
     * @param {number}index The contour index.
     * @param {number}len Size of the contour indexes. Ie. how many are there?
     * Indexes are zero-referenced, so the highest possible index = len-1.
     * @returns {string}color Color with the required color for this index
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.chooseColor = function(index, len){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     *
     * @returns {geotoolkit.contour.visuals.AbstractVisual}
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.setProperties = function(properties){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} properties visual properties
     * @returns {geotoolkit.contour.visuals.AbstractVisual.BehaviorType} properties.colorbehavior color behavior type
     * @returns {geotoolkit.contour.visuals.VisualColorMap} [properties.colormap] colormap properties
     */
    geotoolkit.contour.visuals.AbstractVisual.prototype.getProperties = function(){};

/**
 * The Border Visual. Draws the borders of contour
 * (parts of contour that are bounded by area border, holes and faults).
 * @class geotoolkit.contour.visuals.ContourBorderVisual
 * @augments geotoolkit.contour.visuals.AbstractVisual
 */
geotoolkit.contour.visuals.ContourBorderVisual = {};
    /**
     * Gets line attribute
     * @returns {geotoolkit.attributes.LineStyle} line attribute
     */
    geotoolkit.contour.visuals.ContourBorderVisual.prototype.getLineAttribute = function(){};
    /**
     * Sets line attribute
     * @param {geotoolkit.attributes.LineStyle} lineStyle attribute
     * @returns {geotoolkit.contour.visuals.ContourBorderVisual}
     */
    geotoolkit.contour.visuals.ContourBorderVisual.prototype.setLineAttribute = function(lineStyle){};
    /**
     * Render the border visual.
     * @override
     * @param {geotoolkit.renderer.RenderingContext}renderingContext The rendering context.
     */
    geotoolkit.contour.visuals.ContourBorderVisual.prototype.render = function(renderingContext){};
    /**
     * This method is invoked when the contour shape has been invalidated
     * (eg. the contour scale or data processor have changed)
     * @override
     * @param {geotoolkit.contour.events.ContourEvent}args The event causing the invalidation.
     */
    geotoolkit.contour.visuals.ContourBorderVisual.prototype.contourInvalidated = function(args){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     *
     * @returns {geotoolkit.contour.visuals.ContourBorderVisual}
     */
    geotoolkit.contour.visuals.ContourBorderVisual.prototype.setProperties = function(properties){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} properties visual properties
     */
    geotoolkit.contour.visuals.ContourBorderVisual.prototype.getProperties = function(){};

/**
 * The Contour Fault Visual. This renders the polylines that represent faults.
 * @class geotoolkit.contour.visuals.ContourFaultVisual
 * @augments geotoolkit.contour.visuals.AbstractVisual
 */
geotoolkit.contour.visuals.ContourFaultVisual = {};
    /**
     * Open fault lines.
     * @type {number}
     */
    geotoolkit.contour.visuals.ContourFaultVisual.OPEN_FAULTS = NaN;
    /**
     * Closed fault lines.
     * @type {number}
     */
    geotoolkit.contour.visuals.ContourFaultVisual.CLOSED_FAULTS = NaN;
    /**
     * Gets the fault visual style.
     * By default it is combination of OPEN_FAULTS and CLOSED_FAULTS.
     * @returns {number}style The fault visual style
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.getStyle = function(){};
    /**
     * Sets the fault visual style.
     * @param {number}style The fault visual style
     * @returns {geotoolkit.contour.visuals.ContourFaultVisual} this
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.setStyle = function(style){};
    /**
     * Gets the current LineStyle used to draw the open fault lines of this fault visual.
     * @returns {geotoolkit.attributes.LineStyle}attribute The open fault line style.
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.getOpenLineStyle = function(){};
    /**
     * Sets the current LineStyle used to draw the open fault lines of this fault visual.
     * @param {geotoolkit.attributes.LineStyle}attribute The open fault line style.
     * @returns {geotoolkit.contour.visuals.ContourFaultVisual} this
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.setOpenLineStyle = function(attribute){};
    /**
     * Gets the current LineStyle used to draw the closed fault lines of this fault visual.
     * @returns {geotoolkit.attributes.LineStyle}attribute The closed fault line style.
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.getClosedLineStyle = function(){};
    /**
     * Sets the current LineStyle used to draw the closed fault lines of this fault visual.
     * @param {geotoolkit.attributes.LineStyle}attribute The closed fault line style.
     * @returns {geotoolkit.contour.visuals.ContourFaultVisual} this
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.setClosedLineStyle = function(attribute){};
    /**
     * Renders the fault visual.
     * @override
     * @param {geotoolkit.renderer.RenderingContext}renderingContext The rendering context.
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.render = function(renderingContext){};
    /**
     * This method is invoked when the contour shape has been invalidated
     * (eg. the contour scale or data processor have changed)
     * @override
     * @param {geotoolkit.contour.events.ContourEvent}args The contour event
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.contourInvalidated = function(args){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     *
     * @returns {geotoolkit.contour.visuals.ContourFaultVisual}
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.setProperties = function(properties){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} properties visual properties
     */
    geotoolkit.contour.visuals.ContourFaultVisual.prototype.getProperties = function(){};

/**
 * The Line Visual. This renders the isolines and their labels.
 * Constructor. Initialises to: VISIBLE_LINES | VISIBLE_LABELS, index step = 1, and
 * label format: no fractional digits, and no grouping.
 * @class geotoolkit.contour.visuals.ContourLineVisual
 * @augments geotoolkit.contour.visuals.AbstractVisual
 */
geotoolkit.contour.visuals.ContourLineVisual = {};
    /**
     * Sets the visibility for all isolines
     * @param {boolean}visible Flag for determining if isolines should be visible.
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setLinesVisible = function(visible){};
    /**
     * Gets the visibility of all isolines
     * @returns {boolean}isolinesVisible True of all isolines should be visible.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getLinesVisible = function(){};
    /**
     * Sets the visibility for all isolines
     * @param {boolean}visible Flag for determining if labels should be visible.
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setLabelsVisible = function(visible){};
    /**
     * Gets the visibility of all isolines
     * @returns {boolean}isolinesVisible True of all labels should be visible.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getLabelsVisible = function(){};
    /**
     * Gets the index step for the line visual. Only contour lines with (index = step * i) will be displayed.
     * Where 'i' iterates through all available line indices.
     * @returns {number}step Integer step interval
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getIndexStep = function(){};
    /**
     * Sets the index step for the line visual. Only contour lines with (index = step * i) will be displayed.
     * Where 'i' iterates through all available line indices.
     * @param {number}step Integer step interval
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setIndexStep = function(step){};
    /**
     * Gets the label spacing. This is the space between nearby labels on an isoLine.
     * Distance is specified in device space. Default is 200.
     * @returns {number}spacing The label spacing.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getLabelSpacing = function(){};
    /**
     * Sets the label spacing. This is the space between nearby labels on an isoLine.
     * Distance is specified in device space. Default is 200.
     * @param {number}spacing The label spacing.
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setLabelSpacing = function(spacing){};
    /**
     * Gets the label margin. The margin is specified in device coordinates. Default is 5.
     * @returns {number}margin The margin around labels in device coordinates.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getLabelMargin = function(){};
    /**
     * Sets the label margin. The margin is specified in device coordinates. Default is 5.
     * @param {number}margin The margin around labels in device coordinates.
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setLabelMargin = function(margin){};
    /**
     * Label Format. Use a standard C# format specifier. Default is "G" (general)
     * @returns {geotoolkit.util.NumberFormat}format Object holding the C# format specifier for the isoLine labels.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getLabelFormat = function(){};
    /**
     * Label Format. Use a standard C# format specifier. Default is "G" (general)
     * @param {geotoolkit.util.NumberFormat}format Object holding the C# format specifier for the isoLine labels.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setLabelFormat = function(format){};
    /**
     * Gets the current LineStyle that is used to draw the isolines of this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colorMap. Ie. set such properties as "line style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     * @returns {geotoolkit.attributes.LineStyle}lineStyle The line style.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getLineStyle = function(){};
    /**
     * Sets the current LineStyle that is used to draw the isolines of this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colorMap. Ie. set such properties as "line style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     * @param {geotoolkit.attributes.LineStyle}lineStyle The line style.
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setLineStyle = function(lineStyle){};
    /**
     * Reset label grid mapping. The grid mapping is used for mapping triangle grid to model space.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.resetLabelGridMapping = function(){};
    /**
     * Gets the current text style attribute that is used to draw the labels for this
     * line visual. The "line color" property of the attribute is ignored because it
     * is set directly from the colormap. Ie. set such properties as "font style",
     * and they will be applied globally to all isolines in this visual, regardless of color.
     * @returns {geotoolkit.attributes.TextStyle}textStyle The text style.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getTextStyle = function(){};
    /**
     * Sets the current text style attributes that is used to draw the labels for this line visual.
     * @param {geotoolkit.attributes.TextStyle}textStyle The text style.
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setTextStyle = function(textStyle){};
    /**
     * Sets the flag which indicates if font color should be used for label text color.
     * @param {boolean}useFontColor Flag which indicates if font color should be used for label text color.
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setUseFontColorForLabels = function(useFontColor){};
    /**
     * Gets the flag which indicates if font color is used for label text color.
     * @returns {boolean}useFontColor Flag which indicates if font color is used for label text color.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getUseFontColorForLabels = function(){};
    /**
     * Gets the labeling strategy.
     * @returns {geotoolkit.contour.strategy.AbstractContourLabelingStrategy}strategy The labeling strategy.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getLabelingStrategy = function(){};
    /**
     * Sets the labeling strategy.
     * @param {geotoolkit.contour.strategy.AbstractContourLabelingStrategy}strategy The labeling strategy.
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setLabelingStrategy = function(strategy){};
    /**
     * Sets the isolines styling strategy. If set, style set in setLineStyle will be ignored. The "line color" property of the styles will overrides colorMap.
     * @param {geotoolkit.contour.strategy.IsolineStylingStrategy} strategy strategy
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setIsolinesStylingStrategy = function(strategy){};
    /**
     * Gets the isolines styling strategy
     * @returns {geotoolkit.contour.strategy.IsolineStylingStrategy}
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getIsolinesStylingStrategy = function(){};
    /**
     * Adds extra points to the specified isoLine or isoFill to smooth it using splines.
     * @param {geotoolkit.util.Transformation}modelToDevice Model to device transformation.
     * @param {geotoolkit.util.Rect}modelLimits Area in model coordinates to be rendered.
     * @param {number}startIndex Index of the point in the input points array where smoothing should start.
     * @param {number}endIndex Index of the point in the input points array where smoothing should stop.
     * @param {number}size Number of points in the input points array.
     * @param {Float64Array}x Array coordinates X of points to be smoothed.
     * @param {Float64Array}y Array coordinates Y of points to be smoothed.
     * @param {Int32Array}tags Tags of points in the input points array if the array is a bezier shape
     * or NULL if the array is not a bezier shape.
     * @param {Float64Array}tolerancesArray point tolerance data (used to decide if smoothing should be done
     * @param {number}savedIndex Index of some arbitrary point from the input points array.
     * When the function returns this parameter will contain index of that point in the smoothed array.
     * @param {geotoolkit.contour.util.DoubleVector}smoothedX Array coordinates X of points where smoothed points will be added.
     * @param {geotoolkit.contour.util.DoubleVector}smoothedY Array coordinates Y of points where smoothed points will be added.
     * @returns {number}savedIndex The saved index.
     */
    geotoolkit.contour.visuals.ContourLineVisual.smoothPoly = function(modelToDevice, modelLimits, startIndex, endIndex, size, x, y, tags, tolerancesArray, savedIndex, smoothedX, smoothedY){};
    /**
     * Returns angle in degrees formed by p1-p0 when converted to device space.
     * @param {geotoolkit.util.Point} p0 First point in model space.
     * @param {geotoolkit.util.Point} p1 Second point in model space.
     * @param {geotoolkit.util.Transformation} modelToDevice Model to device transformation.
     * @param {number} sign The sign of the angle.
     * @returns {number} angle The angle between points.
     */
    geotoolkit.contour.visuals.ContourLineVisual.getAngle = function(p0, p1, modelToDevice, sign){};
    /**
     * Use this property to set the local reference to the line reservation array.
     * This array is actually stored in the contour shape, and is passed to each line visual.
     * All the elements of the array
     * 'reservation[lineIndex] = Math.Max( reservation[lineIndex], GetIndexStep() )'
     * Later, the implementation of the line visual may decide if
     * the isoline with some particular index should be drawn using
     * 'GetLineReservationFor' and 'GetIndexStep'
     * methods. Hence, major and minor isolines can be supported.
     * @param {Int32Array}lineReservation The line reservation
     * @returns {geotoolkit.contour.visuals.ContourLineVisual} this
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setLineReservation = function(lineReservation){};
    /**
     * Find the line reservation value for the isoline with the specified index.
     * This is used to determine if a a particular isoline should be drawn.
     * @param {number}index Index for which line reservation should be computed.
     * @returns {number}lineReservation The computed line reservation value.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getLineReservationFor = function(index){};
    /**
     * Temporary interpolated x array.
     */
    geotoolkit.contour.visuals.ContourLineVisual.TempInterpolatedXArray = {};
    /**
     * Temporary interpolated y array.
     */
    geotoolkit.contour.visuals.ContourLineVisual.TempInterpolatedYArray = {};
    /**
     * Temporary interpolated tol array.
     */
    geotoolkit.contour.visuals.ContourLineVisual.TempInterpolatedTolArray = {};
    /**
     * Renders the line visual.
     * @override
     * @param {geotoolkit.renderer.RenderingContext}renderingContext The rendering context.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.render = function(renderingContext){};
    /**
     * This method is invoked when the contour shape has been invalidated
     * (eg. the contour scale or data processor have changed)
     * @override
     * @param {geotoolkit.contour.events.ContourEvent}args The event which has caused the shape to be invalidated.
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.contourInvalidated = function(args){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} properties visual properties
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     *
     * @returns {geotoolkit.contour.visuals.ContourLineVisual}
     */
    geotoolkit.contour.visuals.ContourLineVisual.prototype.setProperties = function(properties){};

/**
 * Contour visual class which renders the contour fills. Ie. the fill regions between the contour isolines.
 * @class geotoolkit.contour.visuals.ContourFillVisual
 * @augments geotoolkit.contour.visuals.AbstractVisual
 */
geotoolkit.contour.visuals.ContourFillVisual = {};
    /**
     * Should the holes be transparent? If not, they will be drawn as opaque squares. Default is Transparent = ON.
     * @returns {boolean}transparentHoles The flag indicating whether hole transparency is true.
     */
    geotoolkit.contour.visuals.ContourFillVisual.prototype.getTransparentHoles = function(){};
    /**
     * Should the holes be transparent? If not, they will be drawn as opaque squares. Default is Transparent = ON.
     * @param {boolean}transparentHoles The flag indicating whether hole transparency is true.
     * @returns {geotoolkit.contour.visuals.ContourFillVisual} this
     */
    geotoolkit.contour.visuals.ContourFillVisual.prototype.setTransparentHoles = function(transparentHoles){};
    /**
     * Which color should be used to draw the opaque holes? This is not used if holes are transparent. The default is 'white'.
     * @returns {string}holeColor The color that will be used when rendering opaque holes.
     */
    geotoolkit.contour.visuals.ContourFillVisual.prototype.getHoleColor = function(){};
    /**
     * Which color should be used to draw the opaque holes? This is not used if holes are transparent. The default is 'white'.
     * @param {string}holeColor The color that will be used when rendering opaque holes.
     * @returns {geotoolkit.contour.visuals.ContourFillVisual} this
     */
    geotoolkit.contour.visuals.ContourFillVisual.prototype.setHoleColor = function(holeColor){};
    /**
     * Renders the fill visual.
     * @override
     * @param {geotoolkit.renderer.RenderingContext}renderingContext The rendering context.
     */
    geotoolkit.contour.visuals.ContourFillVisual.prototype.render = function(renderingContext){};
    /**
     * This method is invoked when the contour shape has been invalidated
     * @override
     * @param {geotoolkit.contour.events.ContourEvent}args The event which has caused the shape to be invalidated.
     */
    geotoolkit.contour.visuals.ContourFillVisual.prototype.contourInvalidated = function(args){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     *
     * @returns {geotoolkit.contour.visuals.ContourFillVisual}
     */
    geotoolkit.contour.visuals.ContourFillVisual.prototype.setProperties = function(properties){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} properties visual properties
     */
    geotoolkit.contour.visuals.ContourFillVisual.prototype.getProperties = function(){};

/**
 * A factory to create instances of contour visuals.
 * This class utilises the singleton pattern to build the factory itself.
 * @class geotoolkit.contour.visuals.VisualsFactory
 */
geotoolkit.contour.visuals.VisualsFactory = {};
    /**
     * Returns the singleton factory instance.
     * @returns {geotoolkit.contour.visuals.VisualsFactory}instance The factory instance
     */
    geotoolkit.contour.visuals.VisualsFactory.getInstance = function(){};
    /**
     * Creates a new fill visual
     * @returns {geotoolkit.contour.visuals.ContourFillVisual}fillVisual The fill visual.
     */
    geotoolkit.contour.visuals.VisualsFactory.prototype.createFillVisual = function(){};
    /**
     * Creates a new line visual
     * @returns {geotoolkit.contour.visuals.ContourLineVisual}lineVisual The line visual.
     */
    geotoolkit.contour.visuals.VisualsFactory.prototype.createLineVisual = function(){};
    /**
     * Creates a new fault visual
     * @returns {geotoolkit.contour.visuals.ContourFaultVisual} faultVisual The fault visual.
     */
    geotoolkit.contour.visuals.VisualsFactory.prototype.createFaultVisual = function(){};
    /**
     * Creates a new border visual.
     * @returns {geotoolkit.contour.visuals.ContourBorderVisual} borderVisual The borer visual.
     */
    geotoolkit.contour.visuals.VisualsFactory.prototype.createBorderVisual = function(){};
    /**
     * Creates a new net visual.
     * @returns {geotoolkit.contour.visuals.AbstractVisual} netVisual The net visual.
     */
    geotoolkit.contour.visuals.VisualsFactory.prototype.createNetVisual = function(){};

/**
 * The base class for all the iterators that are used by contour
 * @class geotoolkit.contour.datasource.AbstractIterator
 */
geotoolkit.contour.datasource.AbstractIterator = {};
    /**
     * Gets the current enumerated item
     * @function
     * @abstract
     * @returns {*}current The current item
     */
    geotoolkit.contour.datasource.AbstractIterator.prototype.getCurrent = function(){};
    /**
     * Moves the iterator to the next item
     * @function
     * @abstract
     * @returns {boolean}hasNext True if iterator can move to the next item
     */
    geotoolkit.contour.datasource.AbstractIterator.prototype.moveNext = function(){};
    /**
     * Resets the iterator to the first item.
     * @function
     * @abstract
     */
    geotoolkit.contour.datasource.AbstractIterator.prototype.reset = function(){};

/**
 * Abstract datasource that supplies data for contour.
 * Data are supplied as a set of grids. Contour building
 * algorithm calls 'Query' method to get the enumerator
 * that enumerates set of grids appropriate for given model
 * rectangle and model-to-device transformation.
 * Contour building algorithm calls 'LoadGrid' on enumerator
 * to load grid into memory and get access to its data.
 * @class geotoolkit.contour.datasource.AbstractContourDataSource
 */
geotoolkit.contour.datasource.AbstractContourDataSource = {};
    /**
     * Gets the model limits of contour data.
     * @function
     * @returns {geotoolkit.util.Rect}modelLimits The rectangle that contains all data grids,
     */
    geotoolkit.contour.datasource.AbstractContourDataSource.prototype.getModelLimits = function(){};
    /**
     * Gets the enumerator that enumerates set of appropriate grids.
     * @function
     * @param {geotoolkit.util.Rect}modelRect The model rectangle.
     * @param {geotoolkit.util.Transformation}modelToDevice model-to-device transformation.
     * @returns {geotoolkit.contour.datasource.AbstractIterator}iterator The contour data iterator
     */
    geotoolkit.contour.datasource.AbstractContourDataSource.prototype.query = function(modelRect, modelToDevice){};
    /**
     * Loads grid into memory.
     * @function
     * @abstract
     * @param {geotoolkit.contour.datasource.AbstractIterator}Enumerator iterator state identifies grid within grid set.
     * @returns {geotoolkit.contour.grid.ContourAbstractGrid}grid The loaded grid.
     */
    geotoolkit.contour.datasource.AbstractContourDataSource.prototype.loadGrid = function(Enumerator){};
    /**
     * Release memory occupied by the grid.
     * @function
     * @abstract
     * @param {geotoolkit.contour.grid.ContourAbstractGrid}grid The grid that contains points.
     */
    geotoolkit.contour.datasource.AbstractContourDataSource.prototype.freeGrid = function(grid){};

/**
 * The iterator for the one grid datasource
 * @class geotoolkit.contour.datasource.OneGridIterator
 * @augments geotoolkit.contour.datasource.AbstractIterator
 */
geotoolkit.contour.datasource.OneGridIterator = {};
    /**
     * Gets the current enumerated item
     * @override
     * @returns {*}current The current item
     */
    geotoolkit.contour.datasource.OneGridIterator.prototype.getCurrent = function(){};
    /**
     * Checks if the iterator can move to next item
     * @override
     * @returns {boolean}hasNext True if iterator can move to the next item
     */
    geotoolkit.contour.datasource.OneGridIterator.prototype.hasNext = function(){};
    /**
     * Moves the iterator to the next item
     * @override
     * @returns {boolean}hasNext True if iterator can move to the next item
     */
    geotoolkit.contour.datasource.OneGridIterator.prototype.moveNext = function(){};
    /**
     * Resets the iterator to the first item.
     * @override
     */
    geotoolkit.contour.datasource.OneGridIterator.prototype.reset = function(){};

/**
 * The data source implementation for a single grid
 * @param {number}grid The grid associated with this data.
 * @class geotoolkit.contour.datasource.OneGridDataSource
 * @augments geotoolkit.contour.datasource.AbstractContourDataSource
 */
geotoolkit.contour.datasource.OneGridDataSource = {};
    /**
     * Gets the model limits of contour data.
     * @override
     * @returns {geotoolkit.util.Rect|null}modelLimits The rectangle that contains all data grids,
     */
    geotoolkit.contour.datasource.OneGridDataSource.prototype.getModelLimits = function(){};
    /**
     * Gets the enumerator that enumerates set of appropriate grids.
     * @override
     * @param {geotoolkit.util.Rect}modelRect The model rectangle.
     * @param {geotoolkit.util.Transformation}modelToDevice model-to-device transformation.
     * @returns {geotoolkit.contour.datasource.OneGridIterator}iterator The contour data iterator
     */
    geotoolkit.contour.datasource.OneGridDataSource.prototype.query = function(modelRect, modelToDevice){};
    /**
     * Loads grid into memory.
     * @override
     * @param {geotoolkit.contour.datasource.AbstractIterator}enumerator iterator state identifies grid within grid set.
     * @returns {geotoolkit.contour.grid.ContourAbstractGrid}grid The loaded grid.
     */
    geotoolkit.contour.datasource.OneGridDataSource.prototype.loadGrid = function(enumerator){};
    /**
     * Release memory occupied by the grid.
     * @override
     * @param {geotoolkit.contour.grid.ContourAbstractGrid}grid The grid that contains points.
     */
    geotoolkit.contour.datasource.OneGridDataSource.prototype.freeGrid = function(grid){};

/**
 * The iterator for the ContourTSDatasource.
 * @class geotoolkit.contour.datasource.AreaIterator
 * @deprecated
 * @augments geotoolkit.contour.datasource.AbstractIterator
 */
geotoolkit.contour.datasource.AreaIterator = {};
    /**
     * Gets the current enumerated item
     * @override
     * @returns {*}current The current item
     */
    geotoolkit.contour.datasource.AreaIterator.prototype.getCurrent = function(){};
    /**
     * Checks if the iterator can move to next item
     * @override
     * @returns {boolean}hasNext True if iterator can move to the next item
     */
    geotoolkit.contour.datasource.AreaIterator.prototype.hasNext = function(){};
    /**
     * Moves the iterator to the next item
     * @override
     * @returns {boolean}hasNext True if iterator can move to the next item
     */
    geotoolkit.contour.datasource.AreaIterator.prototype.moveNext = function(){};
    /**
     * Resets the iterator to the first item.
     * @override
     */
    geotoolkit.contour.datasource.AreaIterator.prototype.reset = function(){};

/**
 * This 'interface' class extends abstract definition of contour data, which
 * includes information about model limits and contour grid.
 * This interface can be implemented for ZMAP and TSURF data
 * @class geotoolkit.contour.datasource.ContourDataSource
 * @augments geotoolkit.contour.datasource.AbstractContourDataSource
 */
geotoolkit.contour.datasource.ContourDataSource = {};
    /**
     * The type of contour grid.
     * @enum
     * @readonly
     */
    geotoolkit.contour.datasource.ContourDataSource.ContourGridType = {};
        /**
         * The triangular grid type
         * @type {number}
         */
        geotoolkit.contour.datasource.ContourDataSource.ContourGridType.TriangularGrid = NaN;
        /**
         * The rectangular grid type
         * @type {number}
         */
        geotoolkit.contour.datasource.ContourDataSource.ContourGridType.RectangularGrid = NaN;
        /**
         * The unknown grid type
         * @type {number}
         */
        geotoolkit.contour.datasource.ContourDataSource.ContourGridType.Unknown = NaN;
    /**
     * Sets the object name
     * @param {string}name The name of the object
     * @returns {geotoolkit.contour.datasource.ContourDataSource} this
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.setObjectName = function(name){};
    /**
     * Gets the object name
     * @returns {string} name The name of the object
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.getObjectName = function(){};
    /**
     * Gets the minimum z-value.
     * @returns {number}min The minimum of the data.
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.getMin = function(){};
    /**
     * Sets the minimum z-value.
     * @param {number}min The minimum of the data.
     * @returns {geotoolkit.contour.datasource.ContourDataSource} this
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.setMin = function(min){};
    /**
     * Gets the maximum z-value.
     * @returns {number}max The maximum of the data.
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.getMax = function(){};
    /**
     * Sets the maximum z-value.
     * @param {number}max The maximum of the data
     * @returns {geotoolkit.contour.datasource.ContourDataSource} this
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.setMax = function(max){};
    /**
     * True if this datasource supports multiple areas.
     * @deprecated returns false
     * @returns {boolean} false
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.getMultipleAreas = function(){};
    /**
     * Enable or disable support of multiple contour areas.
     * @deprecated
     * @param {boolean}flag True if multiple areas are supported.
     * @returns {geotoolkit.contour.datasource.ContourDataSource} this
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.setMultipleAreas = function(flag){};
    /**
     * Updates all of the areas.
     * @deprecated use updateArea() instead
     * @function
     * @abstract
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.updateAreas = function(){};
    /**
     * Updates area.
     * @function
     * @abstract
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.updateArea = function(){};
    /**
     * Gets the type of grid.
     * @function
     * @abstract
     * @returns {number} gridType geotoolkit.contour.datasource.ContourDataSource.ContourGridType.
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.getGridType = function(){};
    /**
     * Gets the current Z-Values range.
     * @function
     * @returns {geotoolkit.util.Range}range The Z-Value range.
     */
    geotoolkit.contour.datasource.ContourDataSource.prototype.getGridRange = function(){};

/**
 * The data source implementation for reading from a ts file.
 * @class geotoolkit.contour.datasource.ContourTSDataSource
 * @augments geotoolkit.contour.datasource.ContourDataSource
 */
geotoolkit.contour.datasource.ContourTSDataSource = {};
    /**
     * The average number of vertices per area if multiple areas are enabled.
     * @deprecated
     * @type {number}
     */
    geotoolkit.contour.datasource.ContourTSDataSource.MULTIPLE_AREA_CAPACITY = NaN;
    /**
     * Maximum number of areas.
     * @deprecated
     * @type {number}
     */
    geotoolkit.contour.datasource.ContourTSDataSource.MAX_N_AREAS = NaN;
    /**
     * The default value for non-value.
     * @type {number}
     */
    geotoolkit.contour.datasource.ContourTSDataSource.DEFAULT_NON_VALUE = NaN;
    /**
     * The string value for a vertex.
     * @type {string}
     */
    geotoolkit.contour.datasource.ContourTSDataSource.VERTEX_ID = "";
    /**
     * The string value for a triangle
     * @type {string}
     */
    geotoolkit.contour.datasource.ContourTSDataSource.TRIANGLE_ID = "";
    /**
     * The string value for the separator.
     * @type {string}
     */
    geotoolkit.contour.datasource.ContourTSDataSource.SEPARATOR_CHAR = "";
    /**
     * Gets the model limits of contour data.
     * @override
     * @returns {geotoolkit.util.Rect}modelLimits The rectangle that contains all data grids,
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.getModelLimits = function(){};
    /**
     * Gets the enumerator that enumerates set of appropriate grids.
     * @override
     * @param {geotoolkit.util.Rect}modelRect The model rectangle.
     * @param {geotoolkit.util.Transformation}modelToDevice model-to-device transformation.
     * @returns {geotoolkit.contour.datasource.AreaIterator}iterator The contour data iterator
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.query = function(modelRect, modelToDevice){};
    /**
     * Loads grid into memory.
     * @override
     * @param {geotoolkit.contour.datasource.AbstractIterator} [iterator] deprecated (since 2.6) iterator state identifies grid within grid set.
     * @returns {geotoolkit.contour.grid.ContourAbstractGrid}grid The loaded grid.
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.loadGrid = function(iterator){};
    /**
     * Release memory occupied by the grid.
     * @override
     * @param {geotoolkit.contour.grid.ContourAbstractGrid}grid The grid that contains points.
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.freeGrid = function(grid){};
    /**
     * Gets the type of grid
     * @returns {number} gridType The type of grid (Should always return TriangularGrid)
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.getGridType = function(){};
    /**
     * Updates the areas
     * @deprecated use updateArea()
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.updateAreas = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.updateArea = function(){};
    /**
     * Clears the dataSource
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.clear = function(){};
    /**
     * Adds a vertex to the dataSource
     * @param {number}n The index of the coordinate
     * @param {number}x The x-coordinate
     * @param {number}y The y-coordinate
     * @param {number}z The z-coordinate
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.addVertex = function(n, x, y, z){};
    /**
     * Adds a triangle to the dataSource
     * @param {number}a The a-triangle vertex.
     * @param {number}b The b-triangle vertex.
     * @param {number}c The c-triangle vertex.
     */
    geotoolkit.contour.datasource.ContourTSDataSource.prototype.addTriangle = function(a, b, c){};

/**
 * A utility class that creates a ContourTSDataSource from a passed in file or form url.
 * @class geotoolkit.contour.datasource.ContourTSDataLoader
 */
geotoolkit.contour.datasource.ContourTSDataLoader = {};
    /**
     * Returns the ContourTSDataLoader that is loaded from the passed in file.
     * @param {File|string} file the local file to read T-SURF format
     * @returns {geotoolkit.util.Promise} dataSource The loaded data source.
     */
    geotoolkit.contour.datasource.ContourTSDataLoader.prototype.load = function(file){};
    /**
     * Returns the ContourTSDataLoader that is loaded from the passed in file.
     * @param {string} url url of the resource
     * @returns {geotoolkit.util.Promise} dataSource The loaded data source.
     */
    geotoolkit.contour.datasource.ContourTSDataLoader.prototype.loadFromURL = function(url){};
    /**
     * Returns the ContourTSDataLoader that is loaded from the passed in file.
     * @param {File} file the local file to read T-SURF format
     * @returns {geotoolkit.util.Promise} dataSource The loaded data source.
     */
    geotoolkit.contour.datasource.ContourTSDataLoader.prototype.loadFromFile = function(file){};

/**
 * This class holds various contour z-map header values.
 * @class geotoolkit.contour.datasource.ContourZMapHeader
 */
geotoolkit.contour.datasource.ContourZMapHeader = {};
    /**
     * Gets the size of the x-data.
     * @returns {number}xSize The size of the x-data.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.getSizeX = function(){};
    /**
     * Sets the size of the x-data.
     * @param {number}sizeX The size of the x-data.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.setSizeX = function(sizeX){};
    /**
     * Gets the size of the y-data.
     * @returns {number}ySize The size of the y-data.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.getSizeY = function(){};
    /**
     * Sets the size of the y-data.
     * @param {number}sizeY The size of the y-data.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.setSizeY = function(sizeY){};
    /**
     * Gets the start column.
     * @returns {number}startColumn The start column.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.getStartColumn = function(){};
    /**
     * Sets the start column.
     * @param {number}startColumn The start column
     * @returns {geotoolkit.contour.datasource.ContourZMapHeader} this
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.setStartColumn = function(startColumn){};
    /**
     * Gets the minimum x-value.
     * @returns {number}minX The minimum x-value.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.getMinX = function(){};
    /**
     * Sets the minimum x-value.
     * @param {number}minX The minimum x-value.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.setMinX = function(minX){};
    /**
     * Gets the maximum x-value.
     * @returns {number}maxX The maximum x-value.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.getMaxX = function(){};
    /**
     * Sets the maximum x-value.
     * @param {number}maxX The maximum x-value.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.setMaxX = function(maxX){};
    /**
     * Gets the minimum y-value.
     * @returns {number}minY The minimum y-value.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.getMinY = function(){};
    /**
     * Sets the minimum y-value.
     * @param {number}minY The minimum y-value.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.setMinY = function(minY){};
    /**
     * Gets the maximum y-value.
     * @returns {number}maxY The maximum y-value.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.getMaxY = function(){};
    /**
     * Sets the maximum y-value.
     * @param {number}maxY The maximum y-value.
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.setMaxY = function(maxY){};
    /**
     * Gets the non-value
     * @returns {number}nonValue The non-value
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.getNonValue = function(){};
    /**
     * Sets the non-value
     * @param {number}nonValue The non-value
     */
    geotoolkit.contour.datasource.ContourZMapHeader.prototype.setNonValue = function(nonValue){};

/**
 * The data source implementation for reading from a zmap file.
 * @class geotoolkit.contour.datasource.ContourZMapDataSource
 * @augments geotoolkit.contour.datasource.ContourDataSource
 */
geotoolkit.contour.datasource.ContourZMapDataSource = {};
    /**
     * The average number of vertices per area if multiple areas are enabled.
     * @deprecated
     * @type {number}
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.MULTIPLE_AREA_CAPACITY = NaN;
    /**
     * Maximum number of areas.
     * @deprecated
     * @type {number}
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.MAX_N_AREAS = NaN;
    /**
     * The default value for non-value.
     * @type {number}
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.DEFAULT_NON_VALUE = NaN;
    /**
     * The string value for the grid format
     * @type {string}
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.ZMAP_GRID_FORMAT = "";
    /**
     * The string value for a indicating the header
     * @type {string}
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.HEADER_INDICATOR_CHAR = "";
    /**
     * The string value for the header separator.
     * @type {string}
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.HEADER_SEPARATOR_CHAR = "";
    /**
     * The string value for the data separator.
     * @type {string}
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.DATA_SEPARATOR_CHAR = "";
    /**
     * The string value for the plus character.
     * @type {string}
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.PLUS_CHAR = "";
    /**
     * Gets the model limits of contour data.
     * @override
     * @returns {geotoolkit.util.Rect}modelLimits The rectangle that contains all data grids,
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.getModelLimits = function(){};
    /**
     * Gets the enumerator that enumerates set of appropriate grids.
     * @override
     * @param {geotoolkit.util.Rect}modelRect The model rectangle.
     * @param {geotoolkit.util.Transformation}modelToDevice model-to-device transformation.
     * @returns {geotoolkit.contour.datasource.AreaIterator}iterator The contour data iterator
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.query = function(modelRect, modelToDevice){};
    /**
     * Loads grid into memory.
     * @override
     * @param {geotoolkit.contour.datasource.AbstractIterator} [iterator] deprecated (since 2.6) iterator state identifies grid within grid set.
     * @returns {geotoolkit.contour.grid.ContourAbstractGrid}grid The loaded grid.
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.loadGrid = function(iterator){};
    /**
     * Release memory occupied by the grid.
     * @override
     * @param {geotoolkit.contour.grid.ContourAbstractGrid}grid The grid that contains points.
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.freeGrid = function(grid){};
    /**
     * Gets the type of grid
     * @returns {number} gridType The type of grid (Should always return TriangularGrid)
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.getGridType = function(){};
    /**
     * @inheritdoc
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.updateArea = function(){};
    /**
     * Updates the areas
     * @deprecated use updateArea() instead
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.updateAreas = function(){};
    /**
     * Clears the dataSource
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.clear = function(){};
    /**
     * Initializes the data based on the header.
     * @param {geotoolkit.contour.datasource.ContourZMapHeader}header The header.
     */
    geotoolkit.contour.datasource.ContourZMapDataSource.prototype.initialize = function(header){};

/**
 * A utility class that creates a ContourZMapDataLoader from a passed in file.
 * @class geotoolkit.contour.datasource.ContourZMapDataLoader
 */
geotoolkit.contour.datasource.ContourZMapDataLoader = {};
    /**
     * Parses a zMap header from a file.
     * @param {Array<string>}lines The file lines.
     * @param {geotoolkit.contour.datasource.ContourZMapHeader}header The zMap header.
     * @param {Array<string>}errorContainer The error message.
     * @returns {boolean}result True if the header parsing was successful.
     */
    geotoolkit.contour.datasource.ContourZMapDataLoader.prototype.readZMapHeader = function(lines, header, errorContainer){};
    /**
     * Parses a zMap grid from a file.
     * @param {Array<string>}lines The file lines.
     * @param {geotoolkit.contour.datasource.ContourZMapHeader}header The zMap header.
     * @param {geotoolkit.contour.datasource.ContourZMapDataSource}dataSource The z-map data source.
     * @param {Array<string>}errorContainer The error message.
     * @returns {boolean}result True if the grid parsing was successful.
     */
    geotoolkit.contour.datasource.ContourZMapDataLoader.prototype.readZMapGrid = function(lines, header, dataSource, errorContainer){};
    /**
     * Returns the ContourZMapDataLoader that is loaded from the passed in file.
     * @param {File|string} file the local file to read Z-Map format format
     * @returns {geotoolkit.util.Promise} dataSource The loaded data source.
     */
    geotoolkit.contour.datasource.ContourZMapDataLoader.prototype.load = function(file){};
    /**
     * Returns the ContourTSDataLoader that is loaded from the passed in file.
     * @param {string} url url of the resource
     * @returns {geotoolkit.util.Promise} dataSource The loaded data source.
     */
    geotoolkit.contour.datasource.ContourZMapDataLoader.prototype.loadFromURL = function(url){};
    /**
     * Loads ZMap contour data from a file.
     * @param {File|string} file the local file to read Z-Map format format
     * @returns {geotoolkit.util.Promise}dataSource The loaded data source.
     */
    geotoolkit.contour.datasource.ContourZMapDataLoader.prototype.loadFromFile = function(file){};

/**
 * Stores points (in model coordinates) and other data for fault.
 * @param {Float64Array} px array of x-coordinates.
 * @param {Float64Array} py array of y-coordinates.
 * @param {Float64Array|boolean} pl array of left values.
 * @param {?Float64Array} pr array of right values.
 * @param {?boolean} [closed=false]
 * @class geotoolkit.contour.faults.ContourFault
 */
geotoolkit.contour.faults.ContourFault = {};
    /**
     * Gets the fault size
     * @returns {number}size The fault size
     */
    geotoolkit.contour.faults.ContourFault.prototype.getSize = function(){};
    /**
     * Gets the fault implicit status
     * @returns {boolean}isImplicit Whether the fault is implicit
     */
    geotoolkit.contour.faults.ContourFault.prototype.getIsImplicit = function(){};
    /**
     * Returns true if fault is closed or false if fault is open.
     * @returns {boolean}closed The closed or open status
     */
    geotoolkit.contour.faults.ContourFault.prototype.getClosed = function(){};
    /**
     * Gets a copy left values.
     * @returns {Float64Array}left The left values;
     */
    geotoolkit.contour.faults.ContourFault.prototype.getLeft = function(){};
    /**
     * Gets a copy left values.
     * @returns {Float64Array}right The right values;
     */
    geotoolkit.contour.faults.ContourFault.prototype.getRight = function(){};
    /**
     * Gets a copy of the X values.
     * @returns {Float64Array}x The X values;
     */
    geotoolkit.contour.faults.ContourFault.prototype.getX = function(){};
    /**
     * Gets a copy of the Y values.
     * @returns {Float64Array}y The Y values;
     */
    geotoolkit.contour.faults.ContourFault.prototype.getY = function(){};

/**
 * The ContourFaultList object is used to pass the fault data to the contour shape ready for rendering.
 * It also performs some basic pre-processing calculations on the faults (validation/etc)
 * @class geotoolkit.contour.faults.ContourFaultList
 */
geotoolkit.contour.faults.ContourFaultList = {};
    /**
     * Removes all of the fault data from this fault list
     */
    geotoolkit.contour.faults.ContourFaultList.prototype.removeAll = function(){};
    /**
     * Adds a fault with explicit data to this fault list
     * @param {Float64Array}xCoordinates array of x coordinates
     * @param {Float64Array}yCoordinates array of y coordinates
     * @param {Float64Array|boolean}left array of left values or boolean indicating if closed
     * @param {Float64Array}right array of right values
     * @param {boolean}closed is fault closed or not
     */
    geotoolkit.contour.faults.ContourFaultList.prototype.addFault = function(xCoordinates, yCoordinates, left, right, closed){};
    /**
     * Number of faults in list
     * @returns {number}
     */
    geotoolkit.contour.faults.ContourFaultList.prototype.getSize = function(){};
    /**
     * Gets a Fault from the fault list
     * @param {number} index The index of the fault in the fault list
     * @returns {geotoolkit.contour.faults.ContourFault|null} fault The fault
     */
    geotoolkit.contour.faults.ContourFaultList.prototype.getFault = function(index){};

/**
 * This is the base class for the contour data processor
 * @class geotoolkit.contour.processor.AbstractContourDataProcessor
 * @augments geotoolkit.contour.processor.ContourConstants
 */
geotoolkit.contour.processor.AbstractContourDataProcessor = {};
    /**
     * Gets the contour faults list.
     * @function
     * @abstract
     * @returns {geotoolkit.contour.faults.ContourFaultList}faults The contour faults list.
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.getFaultsList = function(){};
    /**
     * Sets the contour faults list.
     * @function
     * @abstract
     * @param {geotoolkit.contour.faults.ContourFaultList}faults The contour faults list.
     * @returns {geotoolkit.contour.processor.AbstractContourDataProcessor} this
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.setFaultsList = function(faults){};
    /**
     * Gets the contour grid.
     * @function
     * @abstract
     * @returns {geotoolkit.contour.grid.ContourAbstractGrid}grid The contour grid.
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.getGrid = function(){};
    /**
     * Sets the contour grid.
     * @function
     * @abstract
     * @param {geotoolkit.contour.grid.ContourAbstractGrid}grid The contour grid.
     * @returns {geotoolkit.contour.processor.AbstractContourDataProcessor} this
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.setGrid = function(grid){};
    /**
     * Gets the contour scale.
     * @function
     * @abstract
     * @returns {geotoolkit.contour.scale.ContourScale}scale The contour scale.
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.getScale = function(){};
    /**
     * Sets the contour scale.
     * @function
     * @abstract
     * @param {geotoolkit.contour.scale.ContourScale}scale The contour scale.
     * @returns {geotoolkit.contour.processor.AbstractContourDataProcessor} this
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.setScale = function(scale){};
    /**
     * Gets the contour shape.
     * @function
     * @abstract
     * @returns {geotoolkit.contour.shapes.ContourShape}shape The contour shape.
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.getContourShape = function(){};
    /**
     * Sets the contour scale.
     * @function
     * @abstract
     * @param {geotoolkit.contour.shapes.ContourShape}shape The contour shape.
     * @returns {geotoolkit.contour.processor.AbstractContourDataProcessor} this
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.setContourShape = function(shape){};
    /**
     * Gets the fault point comparison precision (measured in grid cells).
     * @function
     * @abstract
     * @returns {number}precision The fault point comparison precision.
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.getFaultPointPrecision = function(){};
    /**
     * Sets the fault point comparison precision (measured in grid cells).
     * @function
     * @abstract
     * @param {number}precision The fault point comparison precision.
     * @returns {geotoolkit.contour.processor.AbstractContourDataProcessor} this
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.setFaultPointPrecision = function(precision){};
    /**
     * Forces rebuild of internal structures while next rendering.
     * @function
     * @abstract
     * @param {number}bits The structure bits.
     * @returns {geotoolkit.contour.processor.AbstractContourDataProcessor} this
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.setNeedRebuild = function(bits){};
    /**
     * Builds internal structures needed for rendering
     * @function
     * @param {geotoolkit.contour.grid.GridRange}range The grid range that needs to be rendered.
     * @param {boolean}rebuildAll if true, rebuild all else - only structures affected by data change since last build
     * @param {geotoolkit.util.Transformation}modelToDevice The model to device transform.
     */
    geotoolkit.contour.processor.AbstractContourDataProcessor.prototype.build = function(range, rebuildAll, modelToDevice){};

/**
 * Builds internal data structures needed to render contour
 * @class geotoolkit.contour.processor.ContourDataProcessor
 * @augments geotoolkit.contour.processor.AbstractContourDataProcessor
 */
geotoolkit.contour.processor.ContourDataProcessor = {};
    /**
     * Returns number of areas.
     * @deprecated always returns 1 or 0 if area not exists
     * @returns {number}areasLength The number of areas.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getAreasCount = function(){};
    /**
     * Gets the data source which provides grids to contour.
     * @returns {geotoolkit.contour.datasource.AbstractContourDataSource}dataSource The dataSource.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getDataSource = function(){};
    /**
     * Sets the data source which provides grids to contour.
     * @param {geotoolkit.contour.datasource.AbstractContourDataSource}dataSource The dataSource.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setDataSource = function(dataSource){};
    /**
     * Gets the collection of isolines.
     * @returns {Array}isolinse The collection of isolines.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getIsoLines = function(){};
    /**
     * Gets the areas that are in this processor.
     * @deprecated use ContourDataProcessor.prototype.getArea instead
     * @returns {Array}areas The array of ContourNetAreas.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getAreas = function(){};
    /**
     * Sets the areas that are in this processor
     * @deprecated
     * @param {Array}areas The array of contourNetAreas.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setAreas = function(areas){};
    /**
     * Gets the areas that are in this processor.
     * @returns {Array}areas The array of ContourNetAreas.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getArea = function(){};
    /**
     * Gets the number of levels.
     * @returns {number}countLevels The number of levels.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getCountLevels = function(){};
    /**
     * Sets the number of levels.
     * @param {number}countLevels The number of levels.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setCountLevels = function(countLevels){};
    /**
     * This method is called after the build.
     * @param {object} [area] deprecated (since 2.6) The contour net area.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.postBuild = function(area){};
    /**
     * Gets count isolines of area.
     * @param {number} [areaIndex] deprecated (since 2.6) The index of the area.
     * @returns {number}count The number of isolines in the given area.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getIsolinesCountArea = function(areaIndex){};
    /**
     * Gets contour net area.
     * @param {number} [index] deprecated (since 2.6) The area index.
     * @returns {object}area The contour net area.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getArea = function(index){};
    /**
     * Gets X array points isoline.
     * @deprecated since 2.6
     * @param {number} areaIndex deprecated (since 2.6) The area index.
     * @param {number}isolineIndex The isoline index.
     * @param {geotoolkit.contour.util.DoubleVector}refArrayX The array of x-coordinates.
     * @param {geotoolkit.contour.util.DoubleVector}refArrayY The array of y-coordinates.
     * @returns {boolean}success If points exists it will return true.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getIsolinePoints = function(areaIndex, isolineIndex, refArrayX, refArrayY){};
    /**
     * Builds all structures needed for rendering of an area.
     * @param {number}[indexArea] deprecated (since 2.6) The index area.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.buildArea = function(indexArea){};
    /**
     * Initialize internal data before building.
     * @param {geotoolkit.util.Transformation}modelToDevice Model to device transformation.
     * @param {boolean}rebuildAll If true rebuild all internal structures.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.preBuild = function(modelToDevice, rebuildAll){};
    /**
     * Deletes all visual shapes in areas.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.deleteVisualShapes = function(){};
    /**
     * Deletes areas.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.deleteAreas = function(){};
    /**
     * Aborts the building process
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.abortBuild = function(){};
    /**
     * Gets the contour faults list.
     * @override
     * @returns {geotoolkit.contour.faults.ContourFaultList}faults The contour faults list.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getFaultsList = function(){};
    /**
     * Sets the contour faults list.
     * @param {geotoolkit.contour.faults.ContourFaultList}faults The contour faults list.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setFaultsList = function(faults){};
    /**
     * Gets the contour grid.
     * @returns {?geotoolkit.contour.grid.ContourAbstractGrid}grid The contour grid.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getGrid = function(){};
    /**
     * Sets the contour grid.
     * @param {geotoolkit.contour.grid.ContourAbstractGrid}grid The contour grid.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setGrid = function(grid){};
    /**
     * Gets the contour scale.
     * @returns {geotoolkit.contour.scale.ContourScale}scale The contour scale.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getScale = function(){};
    /**
     * Sets the contour scale.
     * @param {geotoolkit.contour.scale.ContourScale}scale The contour scale.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setScale = function(scale){};
    /**
     * Gets the contour shape.
     * @returns {geotoolkit.contour.shapes.ContourShape}shape The contour shape.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getContourShape = function(){};
    /**
     * Sets the contour scale.
     * @param {geotoolkit.contour.shapes.ContourShape}shape The contour shape.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setContourShape = function(shape){};
    /**
     * Gets the fault point comparison precision (measured in grid cells).
     * @returns {number}precision The fault point comparison precision.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.getFaultPointPrecision = function(){};
    /**
     * Sets the fault point comparison precision (measured in grid cells).
     * @param {number}precision The fault point comparison precision.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setFaultPointPrecision = function(precision){};
    /**
     * Forces rebuild of internal structures while next rendering.
     * @param {number}bits The structure bits.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setNeedRebuild = function(bits){};
    /**
     * Sets skipping of near points when rendering isolines and isofills (to speed up process).
     * @param {boolean}skipNearPoints If true then point skipping will be enabled.
     * @returns {geotoolkit.contour.processor.ContourDataProcessor} this
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.setSkipNearPoint = function(skipNearPoints){};
    /**
     * Builds internal structures needed for rendering
     * @param {geotoolkit.contour.grid.GridRange}range The grid range that needs to be rendered.
     * @param {boolean}rebuildAll if true, rebuild all else - only structures affected by data change since last build
     * @param {geotoolkit.util.Transformation}modelToDevice The model to device transform.
     */
    geotoolkit.contour.processor.ContourDataProcessor.prototype.build = function(range, rebuildAll, modelToDevice){};

/**
 * The contour shape acts as a container for all of the contour visuals.
 * It may receive events from the visuals and may send its own events to the listeners.
 * @class geotoolkit.contour.shapes.ContourShape
 * @augments geotoolkit.scene.shapes.Shape
 */
geotoolkit.contour.shapes.ContourShape = {};
    /**
     * The VisualOrder enumeration is used to define the order a new
     * visual should be inserted into this cgContourShape
     * @enum
     * @readonly
     */
    geotoolkit.contour.shapes.ContourShape.VisualOrder = {};
        /**
         * This visual should be inserted default another visual
         * @type {number}
         */
        geotoolkit.contour.shapes.ContourShape.VisualOrder.DEFAULT = NaN;
        /**
         * This visual should be inserted above another visual
         * @type {number}
         */
        geotoolkit.contour.shapes.ContourShape.VisualOrder.ABOVE = NaN;
        /**
         * This visual should be inserted below another visual
         * @type {number}
         */
        geotoolkit.contour.shapes.ContourShape.VisualOrder.BELOW = NaN;
        /**
         * This visual should be inserted at the front (ie. on top of all the other visuals)
         * @type {number}
         */
        geotoolkit.contour.shapes.ContourShape.VisualOrder.FRONT = NaN;
        /**
         * This visual should be inserted at the back (ie. underneath all the other visuals)
         * @type {number}
         */
        geotoolkit.contour.shapes.ContourShape.VisualOrder.BACK = NaN;
    /**
     * Gets the visuals. Default visuals are as follows:<br>
     * 1) A {@link geotoolkit.contour.visuals.ContourFillVisual} instance with id=='isofill'<br>
     * 2) A {@link geotoolkit.contour.visuals.ContourBorderVisual} instance with id=='border'<br>
     * 3) A {@link geotoolkit.contour.visuals.ContourLineVisual} instance with id=='isoline'<br>
     * 4) A {@link geotoolkit.contour.visuals.ContourFaultVisual} instance with id=='fault'<br>
     *
     * @returns {Array<geotoolkit.contour.visuals.AbstractVisual>}visuals The visuals.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getVisuals = function(){};
    /**
     * Sets the visuals.
     * @param {Array<geotoolkit.contour.visuals.AbstractVisual>}visuals The visuals.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setVisuals = function(visuals){};
    /**
     * Gets all the contour listeners.
     * @returns {Array<geotoolkit.contour.visuals.AbstractVisual>}listeners The contour listeners.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getListeners = function(){};
    /**
     * Sets all the contour listeners.
     * @param {Array<geotoolkit.contour.visuals.AbstractVisual>}listeners The contour listeners. *
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setListeners = function(listeners){};
    /**
     * Gets the max label width.
     * @returns {number}maxLabelWidth The max label width.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getMaxLabelWidth = function(){};
    /**
     * Sets the max label width.
     * @param {number}maxLabelWidth The max label width.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setMaxLabelWidth = function(maxLabelWidth){};
    /**
     * Gets the current rendering area.
     * @deprecated since 2.6
     * @returns {number}renderingArea The current rendering area.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getCurrentRenderingArea = function(){};
    /**
     * Sets the current rendering area.
     * @deprecated since 2.6
     * @param {number}currentArea The current rendering area.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setCurrentRenderingArea = function(currentArea){};
    /**
     * Gets the number of rendering areas.
     * @deprecated (since 2.6)
     * @returns {number}count The number of rendering areas.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getCountRenderingAreas = function(){};
    /**
     * Sets the number of rendering areas.
     * @deprecated since 2.6
     * @param {number}count The number of rendering areas.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setCountRenderingAreas = function(count){};
    /**
     * Registers the specified contour listener to receive events from this contour shape.
     * @param {geotoolkit.contour.shapes.ContourShape|geotoolkit.contour.visuals.AbstractVisual}contourListener The contour listener
     */
    geotoolkit.contour.shapes.ContourShape.prototype.addContourListener = function(contourListener){};
    /**
     * Removes the specified contour listener from receiving events from this contour shape.
     * @param {geotoolkit.contour.shapes.ContourShape|geotoolkit.contour.visuals.AbstractVisual}contourListener The contour listener
     */
    geotoolkit.contour.shapes.ContourShape.prototype.removeContourListener = function(contourListener){};
    /**
     * Notifies the registered listeners of an event.
     * @param {geotoolkit.contour.events.ContourEvent}args The event to pass to the listeners.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.notifyListeners = function(args){};
    /**
     * Gets the listeners notification flag
     * @returns {boolean}notify The boolean notification flag.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getNotify = function(){};
    /**
     * Sets the listeners notification flag
     * @param {boolean}notify The boolean notification flag.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setNotify = function(notify){};
    /**
     * Gets the shape projection that is to be used when drawing this shape.
     * @returns {geotoolkit.contour.projections.AbstractProjection}projection The shape projection.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getShapeProjection = function(){};
    /**
     * Sets the shape projection that is to be used when drawing this shape.
     * Set to null (the default) if you do not wish to use a projection
     * @param {geotoolkit.contour.projections.AbstractProjection|Null}projection The shape projection.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setShapeProjection = function(projection){};
    /**
     * Gets the contour grid. (Object that stores grid data for this contour shape)
     * @returns {geotoolkit.contour.grid.ContourAbstractGrid}grid The contour grid.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getGrid = function(){};
    /**
     * Sets the contour grid.(Object that stores grid data for this contour shape).
     * This will throw an exception if grid is set to null.
     * @param {geotoolkit.contour.grid.ContourAbstractGrid}grid The contour grid.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setGrid = function(grid){};
    /**
     * Gets the data source which provides grids to the contour.
     * @returns {geotoolkit.contour.datasource.AbstractContourDataSource|Null}dataSource The contour data source.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getDataSource = function(){};
    /**
     * Sets the data source which provides grids to the contour.
     * @param {geotoolkit.contour.datasource.AbstractContourDataSource}dataSource The contour data source.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setDataSource = function(dataSource){};
    /**
     * Gets the grid to model transform
     * @returns {geotoolkit.util.Transformation}gridToModel The grid to model transformation.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getGridToModel = function(){};
    /**
     * Sets the grid to model transform
     * Throws exception when it is set to null.
     * @param {geotoolkit.util.Transformation}gridToModel The grid to model Transformation.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setGridToModel = function(gridToModel){};
    /**
     * Gets the contour scale.
     * This is used to determine the data values for the isolines in this Contour Shape
     * @returns {geotoolkit.contour.scale.ContourScale}scale The contour scale.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getScale = function(){};
    /**
     * Sets the contour scale
     * This is used to determine the data values for the isolines in this Contour Shape
     * @param {geotoolkit.contour.scale.ContourScale}scale The contour scale.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setScale = function(scale){};
    /**
     * Gets the faults.
     * @returns {geotoolkit.contour.faults.ContourFaultList}faults Object that stores the faults for this Contour Shape.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getFaultsList = function(){};
    /**
     * Sets the faults by assigning the Faults property to a new ContourFaultList object storing the faults.
     * If you attempt to assign the Faults property a null value, this will be translated into an empty ContourFaultList.
     * @param {geotoolkit.contour.faults.ContourFaultList}faults Object that stores the faults for this Contour Shape.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setFaultsList = function(faults){};
    /**
     * Gets the data processor
     * @returns {geotoolkit.contour.processor.ContourDataProcessor}dataProcessor The data processor.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getDataProcessor = function(){};
    /**
     * Allows the calling application to override the data processor.
     * At the moment, there is only one kind of data processor, so this has little value.
     * However in the future, we may have other algorithms implemented.
     * Sets the data processor
     * @param {geotoolkit.contour.processor.ContourDataProcessor}dataProcessor The data processor.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setDataProcessor = function(dataProcessor){};
    /**
     * Gets the bounding boxes of already rendered labels in the current area.
     * @returns {geotoolkit.contour.processor.ContourLabelingArea}labelingArea The labelingArea.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getLabelingArea = function(){};
    /**
     * Gets the intersecting labels suppression status. Default is false.
     * This status indicates if contour will render labels without intersecting each other. Default is FALSE.
     * The status is true if labels don't intersect each other.
     * @returns {boolean}suppress The flag indicating whether intersecting labels are suppressed.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getSuppressIntersectingLabels = function(){};
    /**
     * Sets the intersecting labels suppression status.
     * This status indicates if contour will render labels without intersecting each other. Default is FALSE.
     * The status is true if labels don't intersect each other.
     * @param {boolean}suppress The flag indicating whether intersecting labels are suppressed.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setSuppressIntersectingLabels = function(suppress){};
    /**
     * Gets the labels direction.
     * @returns {number|geotoolkit.contour.processor.ContourLabelsDirection.Direction}direction The labels direction.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getLabelsDirection = function(){};
    /**
     * Sets the labels direction.
     * @param {number|geotoolkit.contour.processor.ContourLabelsDirection.Direction}direction The labels direction.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setLabelsDirection = function(direction){};
    /**
     * Gets the flag for grid data checking.
     * DEFAULT: IgnoreErroneousData=false
     * @returns {boolean}ignore Flag indicating whether grid data changing should be enabled.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getIgnoreErroneousData = function(){};
    /**
     * Sets the flag for grid data checking.
     * It is recommended to set value to FALSE always.
     * DEFAULT: IgnoreErroneousData=false
     * @param {boolean} [ignore=false] Flag indicating whether grid data changing should be enabled.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setIgnoreErroneousData = function(ignore){};
    /**
     * Gets a flag indicating if isolines are smoothed.
     * @returns {boolean}smoothed Flag indicating whether isolines are smoothed.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getSmoothingIsolines = function(){};
    /**
     * Sets a flag for indicating if isolines are smoothed.
     * @param {boolean}smoothing Flag indicating whether isolines are smoothed.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setSmoothingIsolines = function(smoothing){};
    /**
     * Gets the smoothLabels flag.
     * @returns {boolean}smoothLabels The smoothLabels flag.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getSmoothingLabels = function(){};
    /**
     * Sets the smoothLabels flag.
     * @param {boolean}smoothLabels The smoothLabels flag.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setSmoothingLabels = function(smoothLabels){};
    /**
     * Gets the fault point comparison precision (measured in grid cells)
     * @returns {number}precision The fault point precision.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getFaultPointPrecision = function(){};
    /**
     * Sets the fault point comparison precision (measured in grid cells)
     * @param {number}precision The fault point precision.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setFaultPointPrecision = function(precision){};
    /**
     * Gets the first visible scale level.
     * @returns {number} minLevel The first visible scale level.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getMinVisibleLevel = function(){};
    /**
     * Sets the first visible scale level.
     * @param {number}minLevel The first visible scale level.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setMinVisibleLevel = function(minLevel){};
    /**
     * Gets the last visible scale level.
     * @returns {number}maxLevel The last visible scale level.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getMaxVisibleLevel = function(){};
    /**
     * Sets the last visible scale level.
     * @param {number}maxLevel The last visible scale level.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setMaxVisibleLevel = function(maxLevel){};
    /**
     * Sets the bounding box for the contour shape, in non-projected model space.
     * @param {geotoolkit.util.Rect} bbox Specifies the new bounding box.
     * @returns {geotoolkit.contour.shapes.ContourShape} this
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setBoundingBox = function(bbox){};
    /**
     * Gets the non-projected bounding box.
     * @param {geotoolkit.util.Transformation}tr The transformation from model to device space.
     * @returns {geotoolkit.util.Rect}bbox The non-projected bounding box of the contour shape.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getNonProjectedBoundingBox = function(tr){};
    /**
     * Add a visual to this contour shape. It may be inserted at the front or the back.
     * If there is no reference visual then valid order parameters include CG_O_FRONT and CG_O_BACK.
     * If there is a reference visual then value order parameters include CG_O_ABOVE and CG_O_BELOW.
     * Throws an exception for invalid order parameters and for null visual/refVisual.
     * @param {geotoolkit.contour.visuals.AbstractVisual}visual The visual to add to this shape.
     * @param {geotoolkit.contour.shapes.ContourShape.VisualOrder}order The order in which to add the visual.
     * @param {geotoolkit.contour.visuals.AbstractVisual}refVisual The reference visual.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.addVisual = function(visual, order, refVisual){};
    /**
     * Remove the specified visual from this contour shape.
     * Throws exception if visual argument is null.
     * @param {geotoolkit.contour.visuals.AbstractVisual}visual The visual that is to be removed.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.removeVisual = function(visual){};
    /**
     * Updates the line reservations.
     * This is called when something happens which may affect them.
     * Eg. the contour scale changes, a visual's index step changes
     */
    geotoolkit.contour.shapes.ContourShape.prototype.updateLineReservation = function(){};
    /**
     * This method is called when any of the visuals containing this contour shape are invalidated.
     * In response, this calls the cgAbstractShape's 'invalidateShape' method, initiating repainting.
     * @param {geotoolkit.contour.events.VisualEvent}args The event from the visual
     */
    geotoolkit.contour.shapes.ContourShape.prototype.visualInvalidated = function(args){};
    /**
     * Gets the bounding box of this contour shape.
     * If projection has been set, then the projected bounding box is returned.
     * @override
     * @param {geotoolkit.util.Transformation}transformation The transformation from model to device space.
     * @returns {geotoolkit.util.Rect}bbox The bounding box of the contour shape.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getBoundingBox = function(transformation){};
    /**
     * Return bounds
     * @returns {geotoolkit.util.Rect} bounds
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getBounds = function(){};
    /**
     * Render the shape
     * @override
     * @param {geotoolkit.renderer.RenderingContext}renderingContext The rendering context.
     */
    geotoolkit.contour.shapes.ContourShape.prototype.render = function(renderingContext){};
    /**
     * Converts the model box to the projection box and returns it.
     * @param {geotoolkit.util.Rect}modelBox The model box.
     * @param {boolean}reverse True if reverse projection is requested.
     * @returns {geotoolkit.util.Rect}modelBox
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getProjectionBox = function(modelBox, reverse){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} properties contour shape properties
     * @returns {object} [properties.visuals] properties belonging to the shape's visuals
     * (see {@link geotoolkit.contour.visuals.AbstractVisual} implementations for details)
     */
    geotoolkit.contour.shapes.ContourShape.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @override
     * @param {Object} [properties] An object containing the properties to set
     * @returns {geotoolkit.contour.shapes.ContourShape}
     */
    geotoolkit.contour.shapes.ContourShape.prototype.setProperties = function(properties){};

/**
 * A contour reader for parsing faults data using the built in fault data format. <br>
 * Example valid data file that will parse into a single open fault with four points<br>
 * "O;12346,17069;11142,16975;11258,5566;15319,5579"<br>
 * <br>
 * The following data format is used:<br>
 * (TypeOfFault); // splits fault segments and identifies next fault type.<br>
 * (FaultX0),(FaultY0),(FaultLeft0),(FaultRight0); // x0, y0, optional left0, right0 <br>
 * (FaultX1),(FaultY1),(FaultLeft1),(FaultRight1); // x1, y1, optional left1, right1 <br>
 * <br>
 * FaultLeft and FaultRight are optional, TypeOfFault can be 'o', 'O' for open or <br>
 * 'c', 'C' for closed, any other text will be treated as open fault. <br>
 *
 * @class geotoolkit.contour.datasource.ContourFaultsLoader
 */
geotoolkit.contour.datasource.ContourFaultsLoader = {};
    /**
     * Reads faults from a file into a ContourFaultList object and returns it.
     * @param {string}faultData The fault data
     * @returns {geotoolkit.contour.faults.ContourFaultList} The contour fault list object.
     */
    geotoolkit.contour.datasource.ContourFaultsLoader.prototype.readFaults = function(faultData){};

