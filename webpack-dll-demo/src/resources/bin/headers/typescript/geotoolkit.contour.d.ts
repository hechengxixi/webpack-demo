declare module geotoolkit {
    module contour {
        module shapes {
            /**
             * The contour shape acts as a container for all of the contour visuals.
             * It may receive events from the visuals and may send its own events to the listeners.
             */
            class ContourShape extends geotoolkit.scene.shapes.Shape {
                /**
                 * The contour shape acts as a container for all of the contour visuals.
                 * It may receive events from the visuals and may send its own events to the listeners.
                 */
                constructor();
                /**
                 * The VisualOrder enumeration is used to define the order a new
                 * visual should be inserted into this cgContourShape
                 */
                static VisualOrder: any;
                /**
                 * Gets the visuals. Default visuals are as follows:<br>
                 * 1) A {@link geotoolkit.contour.visuals.ContourFillVisual} instance with id=='isofill'<br>
                 * 2) A {@link geotoolkit.contour.visuals.ContourBorderVisual} instance with id=='border'<br>
                 * 3) A {@link geotoolkit.contour.visuals.ContourLineVisual} instance with id=='isoline'<br>
                 * 4) A {@link geotoolkit.contour.visuals.ContourFaultVisual} instance with id=='fault'<br>
                 */
                getVisuals(): geotoolkit.contour.visuals.AbstractVisual[];
                /**
                 * Sets the visuals.
                 * @param visuals  (Required) The visuals.
                 */
                setVisuals(visuals: geotoolkit.contour.visuals.AbstractVisual[]): this;
                /**
                 * Gets all the contour listeners.
                 */
                getListeners(): geotoolkit.contour.visuals.AbstractVisual[];
                /**
                 * Sets all the contour listeners.
                 * @param listeners  (Required) The contour listeners.     *
                 */
                setListeners(listeners: geotoolkit.contour.visuals.AbstractVisual[]): this;
                /**
                 * Gets the max label width.
                 */
                getMaxLabelWidth(): number;
                /**
                 * Sets the max label width.
                 * @param maxLabelWidth  (Required) The max label width.
                 */
                setMaxLabelWidth(maxLabelWidth: number): this;
                /**
                 * Gets the current rendering area.
                 */
                getCurrentRenderingArea(): number;
                /**
                 * Sets the current rendering area.
                 * @param currentArea  (Required) The current rendering area.
                 */
                setCurrentRenderingArea(currentArea: number): this;
                /**
                 * Gets the number of rendering areas.
                 */
                getCountRenderingAreas(): number;
                /**
                 * Sets the number of rendering areas.
                 * @param count  (Required) The number of rendering areas.
                 */
                setCountRenderingAreas(count: number): this;
                /**
                 * Registers the specified contour listener to receive events from this contour shape.
                 * @param contourListener  (Required) The contour listener
                 */
                addContourListener(contourListener: geotoolkit.contour.shapes.ContourShape|geotoolkit.contour.visuals.AbstractVisual): any;
                /**
                 * Removes the specified contour listener from receiving events from this contour shape.
                 * @param contourListener  (Required) The contour listener
                 */
                removeContourListener(contourListener: geotoolkit.contour.shapes.ContourShape|geotoolkit.contour.visuals.AbstractVisual): any;
                /**
                 * Notifies the registered listeners of an event.
                 * @param args  (Required) The event to pass to the listeners.
                 */
                notifyListeners(args: geotoolkit.contour.events.ContourEvent): any;
                /**
                 * Gets the listeners notification flag
                 */
                getNotify(): boolean;
                /**
                 * Sets the listeners notification flag
                 * @param notify  (Required) The boolean notification flag.
                 */
                setNotify(notify: boolean): this;
                /**
                 * Gets the shape projection that is to be used when drawing this shape.
                 */
                getShapeProjection(): geotoolkit.contour.projections.AbstractProjection;
                /**
                 * Sets the shape projection that is to be used when drawing this shape.
                 * Set to null (the default) if you do not wish to use a projection
                 * @param projection  (Required) The shape projection.
                 */
                setShapeProjection(projection: geotoolkit.contour.projections.AbstractProjection|any): this;
                /**
                 * Gets the contour grid. (Object that stores grid data for this contour shape)
                 */
                getGrid(): geotoolkit.contour.grid.ContourAbstractGrid;
                /**
                 * Sets the contour grid.(Object that stores grid data for this contour shape).
                 * This will throw an exception if grid is set to null.
                 * @param grid  (Required) The contour grid.
                 */
                setGrid(grid: geotoolkit.contour.grid.ContourAbstractGrid): this;
                /**
                 * Gets the data source which provides grids to the contour.
                 */
                getDataSource(): geotoolkit.contour.datasource.AbstractContourDataSource|any;
                /**
                 * Sets the data source which provides grids to the contour.
                 * @param dataSource  (Required) The contour data source.
                 */
                setDataSource(dataSource: geotoolkit.contour.datasource.AbstractContourDataSource): this;
                /**
                 * Gets the grid to model transform
                 */
                getGridToModel(): geotoolkit.util.Transformation;
                /**
                 * Sets the grid to model transform
                 * Throws exception when it is set to null.
                 * @param gridToModel  (Required) The grid to model Transformation.
                 */
                setGridToModel(gridToModel: geotoolkit.util.Transformation): this;
                /**
                 * Gets the contour scale.
                 * This is used to determine the data values for the isolines in this Contour Shape
                 */
                getScale(): geotoolkit.contour.scale.ContourScale;
                /**
                 * Sets the contour scale
                 * This is used to determine the data values for the isolines in this Contour Shape
                 * @param scale  (Required) The contour scale.
                 */
                setScale(scale: geotoolkit.contour.scale.ContourScale): this;
                /**
                 * Gets the faults.
                 */
                getFaultsList(): geotoolkit.contour.faults.ContourFaultList;
                /**
                 * Sets the faults by assigning the Faults property to a new ContourFaultList object storing the faults.
                 * If you attempt to assign the Faults property a null value, this will be translated into an empty ContourFaultList.
                 * @param faults  (Required) Object that stores the faults for this Contour Shape.
                 */
                setFaultsList(faults: geotoolkit.contour.faults.ContourFaultList): this;
                /**
                 * Gets the data processor
                 */
                getDataProcessor(): geotoolkit.contour.processor.ContourDataProcessor;
                /**
                 * Allows the calling application to override the data processor.
                 * At the moment, there is only one kind of data processor, so this has little value.
                 * However in the future, we may have other algorithms implemented.
                 * Sets the data processor
                 * @param dataProcessor  (Required) The data processor.
                 */
                setDataProcessor(dataProcessor: geotoolkit.contour.processor.ContourDataProcessor): this;
                /**
                 * Gets the bounding boxes of already rendered labels in the current area.
                 */
                getLabelingArea(): geotoolkit.contour.processor.ContourLabelingArea;
                /**
                 * Gets the intersecting labels suppression status. Default is false.
                 * This status indicates if contour will render labels without intersecting each other. Default is FALSE.
                 * The status is true if labels don't intersect each other.
                 */
                getSuppressIntersectingLabels(): boolean;
                /**
                 * Sets the intersecting labels suppression status.
                 * This status indicates if contour will render labels without intersecting each other. Default is FALSE.
                 * The status is true if labels don't intersect each other.
                 * @param suppress  (Required) The flag indicating whether intersecting labels are suppressed.
                 */
                setSuppressIntersectingLabels(suppress: boolean): this;
                /**
                 * Gets the labels direction.
                 */
                getLabelsDirection(): number|geotoolkit.contour.processor.ContourLabelsDirection.Direction;
                /**
                 * Sets the labels direction.
                 * @param direction  (Required) The labels direction.
                 */
                setLabelsDirection(direction: number|geotoolkit.contour.processor.ContourLabelsDirection.Direction): this;
                /**
                 * Gets the flag for grid data checking.
                 * DEFAULT: IgnoreErroneousData=false
                 */
                getIgnoreErroneousData(): boolean;
                /**
                 * Sets the flag for grid data checking.
                 * It is recommended to set value to FALSE always.
                 * DEFAULT: IgnoreErroneousData=false
                 * @param ignore  (Optional) Flag indicating whether grid data changing should be enabled.
                 */
                setIgnoreErroneousData(ignore?: boolean): this;
                /**
                 * Gets a flag indicating if isolines are smoothed.
                 */
                getSmoothingIsolines(): boolean;
                /**
                 * Sets a flag for indicating if isolines are smoothed.
                 * @param smoothing  (Required) Flag indicating whether isolines are smoothed.
                 */
                setSmoothingIsolines(smoothing: boolean): this;
                /**
                 * Gets the smoothLabels flag.
                 */
                getSmoothingLabels(): boolean;
                /**
                 * Sets the smoothLabels flag.
                 * @param smoothLabels  (Required) The smoothLabels flag.
                 */
                setSmoothingLabels(smoothLabels: boolean): this;
                /**
                 * Gets the fault point comparison precision (measured in grid cells)
                 */
                getFaultPointPrecision(): number;
                /**
                 * Sets the fault point comparison precision (measured in grid cells)
                 * @param precision  (Required) The fault point precision.
                 */
                setFaultPointPrecision(precision: number): this;
                /**
                 * Gets the first visible scale level.
                 */
                getMinVisibleLevel(): number;
                /**
                 * Sets the first visible scale level.
                 * @param minLevel  (Required) The first visible scale level.
                 */
                setMinVisibleLevel(minLevel: number): this;
                /**
                 * Gets the last visible scale level.
                 */
                getMaxVisibleLevel(): number;
                /**
                 * Sets the last visible scale level.
                 * @param maxLevel  (Required) The last visible scale level.
                 */
                setMaxVisibleLevel(maxLevel: number): this;
                /**
                 * Sets the bounding box for the contour shape, in non-projected model space.
                 * @param bbox  (Required) Specifies the new bounding box.
                 */
                setBoundingBox(bbox: geotoolkit.util.Rect): this;
                /**
                 * Gets the non-projected bounding box.
                 * @param tr  (Required) The transformation from model to device space.
                 */
                getNonProjectedBoundingBox(tr: geotoolkit.util.Transformation): geotoolkit.util.Rect;
                /**
                 * Add a visual to this contour shape. It may be inserted at the front or the back.
                 * If there is no reference visual then valid order parameters include CG_O_FRONT and CG_O_BACK.
                 * If there is a reference visual then value order parameters include CG_O_ABOVE and CG_O_BELOW.
                 * Throws an exception for invalid order parameters and for null visual/refVisual.
                 * @param visual  (Required) The visual to add to this shape.
                 * @param order  (Required) The order in which to add the visual.
                 * @param refVisual  (Required) The reference visual.
                 */
                addVisual(visual: geotoolkit.contour.visuals.AbstractVisual, order: geotoolkit.contour.shapes.ContourShape.VisualOrder, refVisual: geotoolkit.contour.visuals.AbstractVisual): any;
                /**
                 * Remove the specified visual from this contour shape.
                 * Throws exception if visual argument is null.
                 * @param visual  (Required) The visual that is to be removed.
                 */
                removeVisual(visual: geotoolkit.contour.visuals.AbstractVisual): any;
                /**
                 * Updates the line reservations.
                 * This is called when something happens which may affect them.
                 * Eg. the contour scale changes, a visual's index step changes
                 */
                updateLineReservation(): any;
                /**
                 * This method is called when any of the visuals containing this contour shape are invalidated.
                 * In response, this calls the cgAbstractShape's 'invalidateShape' method, initiating repainting.
                 * @param args  (Required) The event from the visual
                 */
                visualInvalidated(args: geotoolkit.contour.events.VisualEvent): any;
                /**
                 * Gets the bounding box of this contour shape.
                 * If projection has been set, then the projected bounding box is returned.
                 * @param transformation  (Required) The transformation from model to device space.
                 */
                getBoundingBox(transformation: geotoolkit.util.Transformation): geotoolkit.util.Rect;
                /**
                 * Return bounds
                 */
                getBounds(): geotoolkit.util.Rect;
                /**
                 * Render the shape
                 * @param renderingContext  (Required) The rendering context.
                 */
                render(renderingContext: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Converts the model box to the projection box and returns it.
                 * @param modelBox  (Required) The model box.
                 * @param reverse  (Required) True if reverse projection is requested.
                 */
                getProjectionBox(modelBox: geotoolkit.util.Rect, reverse: boolean): geotoolkit.util.Rect;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): {properties:{visuals:any}}|any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Optional) An object containing the properties to set
                 */
                setProperties(properties?: any): this;
            }
            module GeneralPath {
                module PolygonDataType {
                    /**
                     * The polygon x-coordinates.
                     */
                    var xCoordinates: number;
                    /**
                     * The polygon y-coordinates
                     */
                    var yCoordinates: number;
                    /**
                     * The polygon data limits
                     */
                    var dataLimits: number;
                    /**
                     * Whether polygon intersects with visible limits
                     */
                    var isVisible: number;
                    /**
                     * The error in model coordinates that results from removing a given point.
                     */
                    var polygonTolerances: number;
                }
            }
            module ContourShape {
                /**
                 * The VisualOrder enumeration is used to define the order a new
                 * visual should be inserted into this cgContourShape
                 */
                interface VisualOrder {
                    /**
                     * This visual should be inserted default another visual
                     */
                    DEFAULT: number;
                    /**
                     * This visual should be inserted above another visual
                     */
                    ABOVE: number;
                    /**
                     * This visual should be inserted below another visual
                     */
                    BELOW: number;
                    /**
                     * This visual should be inserted at the front (ie. on top of all the other visuals)
                     */
                    FRONT: number;
                    /**
                     * This visual should be inserted at the back (ie. underneath all the other visuals)
                     */
                    BACK: number;
                }
            }
        }
        module util {
            /**
             * This utility class performs memory allocation operations
             */
            class MemoryManager {
                /**
                 * This utility class performs memory allocation operations
                 */
                constructor();
                /**
                 * Gets the instance of the memory manager.
                 */
                static getInstance(): geotoolkit.contour.util.MemoryManager;
                /**
                 * Gets the memory management id associated with this object
                 */
                generateMemoryId(): number;
                /**
                 * Increases the size of a typed array
                 * Allocates a typed array
                 * @param id  (Required) The memory id.
                 * @param type  (Required) The type of array.
                 * @param size  (Required) The desired size of array.
                 * @param oldArray  (Required) The reference to current array.
                 */
                resizeArray(id: number, type: string, size: number, oldArray: Float64Array|Int32Array|Int8Array): Float64Array|Int32Array|Int8Array;
                /**
                 * Allocates a typed array
                 * @param id  (Required) The memory id.
                 * @param type  (Required) The type of array.
                 * @param size  (Required) The size of array.
                 * @param clear  (Required) Optionally clear all values of the newly-allocated array.
                 */
                allocateMemory(id: number, type: string, size: number, clear: boolean): Float64Array|Int32Array|Int8Array;
                /**
                 * Frees the memory that is associated with a given memory id.
                 * @param id  (Required) Memory id
                 * @param keepAlive  (Required) Do not dispose of this object
                 */
                freeAllMemory(id: string, keepAlive: boolean): any;
            }
            /**
             * Define a colormap
             */
            class ColorMap extends geotoolkit.util.DiscreteGradientColorProvider {
                /**
                 * Define a colormap
                 * @param bins  (Required) The number of bins.
                 * @param name  (Required) The scale name.
                 * @param minValue  (Required) The min value to use.
                 * @param maxValue  (Required) The max value to use.
                 */
                constructor(bins: number, name: string, minValue: number, maxValue: number);
                /**
                 * returns surface that represents color map
                 * @param width  (Required) The image width
                 * @param height  (Required) The image height
                 * @param isVertical  (Required) True if image is oriented vertically
                 */
                exportToImage(width: number, height: number, isVertical: boolean): geotoolkit.renderer.Surface;
            }
            /**
             * This utility class performs a binary search on Float64Array
             */
            class BinarySearch {
                /**
                 * This utility class performs a binary search on Float64Array
                 */
                constructor();
                /**
                 * Performs a binary search on an array. (Same as .Net binary search method)
                 * @param array  (Required) The list in which to find the matching value
                 * @param value  (Required) The value to find the index for.
                 */
                static search(array: Float64Array, value: number): number;
            }
            /**
             * A wrapper for an Int32Array.
             */
            class IntVector {
                /**
                 * A wrapper for an Int32Array.
                 */
                constructor();
                /**
                 * Gets the values that are inside this wrapper
                 */
                getValues(): Int32Array;
                /**
                 * The number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Removes all data and frees reserved data buffer.
                 */
                freeBuff(): any;
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Adds value to end of data, extends buffer if needed.
                 * @param value  (Required) The value that will be added
                 */
                add(value: number): any;
                /**
                 * Removes data after specified position retaining data buffer.
                 * @param size  (Required) new data size
                 */
                cutSize(size: number): any;
            }
            /**
             * A wrapper for an Float64Array.
             */
            class DoubleVector {
                /**
                 * A wrapper for an Float64Array.
                 */
                constructor();
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Fills the array with a given value a specified number of times.
                 * @param value  (Required) The value that will be set
                 * @param size  (Required) The number of times this value will be set.
                 */
                fill(value: number, size: number): any;
                /**
                 * Sets a value at a specific index.
                 * @param value  (Required) The value that will be set
                 * @param index  (Required) The index position of the value.
                 */
                setValueByIndex(value: number, index: number): this;
                /**
                 * Adds value to end of data, extends buffer if needed.
                 * @param value  (Required) The value that will be added
                 */
                add(value: number): any;
                /**
                 * Gets the values that are inside this wrapper
                 */
                getValues(): Float64Array;
                /**
                 * The number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Removes data after specified position retaining data buffer.
                 * @param size  (Required) new data size
                 */
                cutSize(size: number): any;
            }
            /**
             * A utility class for calculating intersection of a point with a border of a rectangular region.
             */
            class ListRegion {
                /**
                 * A utility class for calculating intersection of a point with a border of a rectangular region.
                 */
                constructor();
                /**
                 * Determines if a point exists between the inner region and the outer region.
                 * @param point  (Required) The point that is checked for containment or the X-coordinate of the point
                 * @param y  (Required) The y-coordinate of the point
                 */
                contains(point: geotoolkit.util.Point|number, y: number): boolean;
                /**
                 * Sets the region.
                 * @param regionRect  (Required) The region bounds.
                 */
                setRegion(regionRect: geotoolkit.util.Rect): this;
                /**
                 * Clears the region.
                 */
                clearRegion(): any;
            }
        }
        module processor {
            /**
             * Vector of net points.
             */
            class PointVector {
                /**
                 * Vector of net points.
                 */
                constructor();
                /**
                 * The number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Gets the x-coordinates.
                 */
                getX(): Float64Array;
                /**
                 * Gets the y-coordinates.
                 */
                getY(): Float64Array;
                /**
                 * Gets the z-coordinates.
                 */
                getZ(): Float64Array;
                /**
                 * Gets the first link to adjacent edges.
                 */
                getFirstEdgeLink(): Int32Array;
                /**
                 * Gets the last link to adjacent edges.
                 */
                getLastEdgeLink(): Int32Array;
                /**
                 * Gets the scale range index
                 */
                getLevel(): Int32Array;
                /**
                 * Get this point index (negative for deleted point).
                 */
                getIndex(): Int32Array;
                /**
                 * Gets the last associated fault split.
                 */
                getFaultSplit(): Int32Array;
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Resizes the internal array to be of a certain size
                 * @param n  (Required) The new size.
                 */
                reserve(n: number): any;
                /**
                 * Tries to resize arrays so that the next item can be added
                 */
                addItems(): number;
            }
            /**
             * Vector of net triangles.
             */
            class TriangleVector {
                /**
                 * Vector of net triangles.
                 */
                constructor();
                /**
                 * The number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Gets the A-values for fault points.
                 */
                getValueA(): Float64Array;
                /**
                 * Gets the B-values for fault points.
                 */
                getValueB(): Float64Array;
                /**
                 * Gets the C-values for fault points.
                 */
                getValueC(): Float64Array;
                /**
                 * Gets the LevelA points.
                 */
                getLevelA(): Int32Array;
                /**
                 * Gets the LevelB points.
                 */
                getLevelB(): Int32Array;
                /**
                 * Gets the LevelC points.
                 */
                getLevelC(): Int32Array;
                /**
                 * Gets the current Isoline
                 */
                getIsoLine(): Int32Array;
                /**
                 * Gets the properties bits (see enum TrianglePropertiesBits).
                 */
                getBit(): Int32Array;
                /**
                 * Gets the Index of first split.
                 */
                getStartSplit(): Int32Array;
                /**
                 * Gets the Index of last split.
                 */
                getEndSplit(): Int32Array;
                /**
                 * Gets the AB Edge indexes in edges list.
                 */
                getAB(): Int32Array;
                /**
                 * Gets the BC Edge indexes in edges list.
                 */
                getBC(): Int32Array;
                /**
                 * Gets the CA Edge indexes in edges list.
                 */
                getCA(): Int32Array;
                /**
                 * Gets the A Point indexes in points list.
                 */
                getA(): Int32Array;
                /**
                 * Gets the B Point indexes in points list.
                 */
                getB(): Int32Array;
                /**
                 * Gets the C Point indexes in points list.
                 */
                getC(): Int32Array;
                /**
                 * Gets the triangle index. (-2 for splitted, other negative for deleted triangle).
                 */
                getIndex(): Int32Array;
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Resizes the internal array to be of a certain size
                 * @param n  (Required) The new size.
                 */
                reserve(n: number): any;
                /**
                 * Tries to resize arrays so that the next item can be added
                 */
                addItems(): number;
            }
            /**
             * Vector of net points on fault.
             */
            class FaultSplitVector {
                /**
                 * Vector of net points on fault.
                 */
                constructor();
                /**
                 * The number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Gets the Right values.
                 */
                getLeft(): Float64Array;
                /**
                 * Gets the Left values.
                 */
                getRight(): Float64Array;
                /**
                 * Gets the X-coordinates
                 */
                getX(): Float64Array;
                /**
                 * Gets the Y-coordinates
                 */
                getY(): Float64Array;
                /**
                 * Gets the properties bits.
                 */
                getBit(): Int32Array;
                /**
                 * Gets the fault segments
                 */
                getFaultSeg(): Int32Array;
                /**
                 * Gets the faults
                 */
                getFault(): Int32Array;
                /**
                 * Gets the next split array
                 */
                getNextSplit(): Int32Array;
                /**
                 * Gets the previous splits
                 */
                getPrevSplit(): Int32Array;
                /**
                 * Gets the point indexes
                 */
                getPoint(): Int32Array;
                /**
                 * Gets the edge indexes (-1 if last point of fault).
                 */
                getRightEdge(): Int32Array;
                /**
                 * Gets the left edge indexes (-1 if last point of fault).
                 */
                getLeftEdge(): Int32Array;
                /**
                 * Gets the index of previous split at same point (-1 if none)
                 */
                getBelowSplit(): Int32Array;
                /**
                 * Sets the size and the buf_size to 0 and removes all of the elements from this vector.
                 *  (All data arrays will be null after this call returns)
                 */
                freeBuf(): any;
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Adds value to end of data, extends buffer if needed.
                 * @param n  (Required) The value that will be added
                 */
                reserve(n: number): any;
                /**
                 * Tries to resize arrays so that the next item can be added
                 */
                addItems(): number;
            }
            /**
             * Class that incapsulates XY vector.
             */
            class XYVector {
                /**
                 * Class that incapsulates XY vector.
                 */
                constructor();
                /**
                 * The number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Gets the x-values.
                 */
                getX(): Float64Array;
                /**
                 * Gets the y-values.
                 */
                getY(): Float64Array;
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Adds value to end of data, extends buffer if needed.
                 * @param n  (Required) The value that will be added
                 */
                reserve(n: number): any;
                /**
                 * Increase number of elements in vector.
                 */
                addElements(): number;
            }
            /**
             * Vector that stores edgesections (edge/isoline intersection points).
             */
            class EdgeSectionVector {
                /**
                 * Vector that stores edgesections (edge/isoline intersection points).
                 */
                constructor();
                /**
                 * The number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Gets the Properties bits (see enum EdgeSectionPropertiesBits).
                 */
                getBit(): Int8Array;
                /**
                 * Gets the Edge indexes.
                 */
                getEdge(): Int32Array;
                /**
                 * Gets the level indexes
                 */
                getLevel(): Int32Array;
                /**
                 * Gets the Index of isoline source chunk (-1=init_val, -2=bad).
                 */
                getChunk(): Int32Array;
                /**
                 * Gets the X intersection coordinates.
                 */
                getX(): Float64Array;
                /**
                 * Gets the Y intersection coordinates.
                 */
                getY(): Float64Array;
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Adds value to end of data, extends buffer if needed.
                 * @param n  (Required) The value that will be added
                 */
                reserve(n: number): any;
                /**
                 * Tries to resize arrays so that the next item can be added
                 */
                addItems(): number;
            }
            /**
             * Vector of net edges (sides of net triangles).
             */
            class EdgeVector {
                /**
                 * Vector of net edges (sides of net triangles).
                 */
                constructor();
                /**
                 * Gets the number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Sets the number of data values in this array.
                 * @param size  (Required) The new size of the edgeVector.
                 */
                setSize(size: number): this;
                /**
                 * Sets the new size of the data buffer
                 * @param size  (Required) The new size of the data buffer
                 */
                setBufSize(size: number): this;
                /**
                 * Gets the border indexes.
                 */
                getBorder(): Int32Array;
                /**
                 * Sets the border indexes.
                 * @param border  (Required) The border indexes
                 */
                setBorder(border: Int32Array): this;
                /**
                 * Gets the Min level of points.
                 */
                getMinLevel(): Int32Array;
                /**
                 * Sets the Min level of points.
                 * @param minLevel  (Required) the Min level of points.
                 */
                setMinLevel(minLevel: Int32Array): this;
                /**
                 * Gets the Max level of points.
                 */
                getMaxLevel(): Int32Array;
                /**
                 * Sets the Max level of points.
                 * @param maxLevel  (Required) the Max level of points.
                 */
                setMaxLevel(maxLevel: Int32Array): this;
                /**
                 * Gets the Number of edgesections array
                 */
                getNumberSections(): Int32Array;
                /**
                 * Sets the Number of numberSections array
                 * @param numberSections  (Required) The Number of edgesections array.
                 */
                setNumberSections(numberSections: Int32Array): this;
                /**
                 * Gets the Index of first edgesection in edgesections array.
                 */
                getFirstSection(): Int32Array;
                /**
                 * Sets the Index of first edgesection in edgesections array.
                 * @param firstSection  (Required) The first edgesection array
                 */
                setFirstSection(firstSection: Int32Array): this;
                /**
                 * Gets the Properties bits (see enum EdgeSectionPropertiesBits).
                 */
                getBit(): Int32Array;
                /**
                 * Sets the Properties bits (see enum EdgeSectionPropertiesBits).
                 * @param bit  (Required) The properties bits.
                 */
                setBit(bit: Int32Array): this;
                /**
                 * Gets the first associated fault split for points.
                 */
                getFaultSplit1(): Int32Array;
                /**
                 * Sets the first associated fault split for points.
                 * @param faultSplit1  (Required) The first associated fault split for points
                 */
                setFaultSplit1(faultSplit1: Int32Array): this;
                /**
                 * Gets the second associated fault split for points.
                 */
                getFaultSplit2(): Int32Array;
                /**
                 * Sets the second associated fault split for points.
                 * @param faultSplit2  (Required) The second associated fault split for points
                 */
                setFaultSplit2(faultSplit2: Int32Array): this;
                /**
                 * Gets the Right triangle indexes in triangles list.
                 */
                getTrRight(): Int32Array;
                /**
                 * Sets the Right triangle indexes in triangles list.
                 * @param trRight  (Required) The Right triangle indexes in triangles list
                 */
                setTrRight(trRight: Int32Array): this;
                /**
                 * Gets the Left triangle indexes in triangles list.
                 */
                getTrLeft(): Int32Array;
                /**
                 * Sets the Left triangle indexes in triangles list.
                 * @param trLeft  (Required) The Left triangle indexes in triangles list.
                 */
                setTrLeft(trLeft: Int32Array): this;
                /**
                 * Gets the edge indexes (negative for deleted edge)
                 */
                getIndex(): Int32Array;
                /**
                 * Sets the edge indexes (negative for deleted edge)
                 * @param index  (Required) The edge indexes
                 */
                setIndex(index: Int32Array): this;
                /**
                 * The indexes of first point.
                 */
                getP1(): Int32Array;
                /**
                 * The indexes of second point.
                 * @param p1  (Required) The first point index.
                 */
                setP1(p1: Int32Array): this;
                /**
                 * The indexes of second point.
                 */
                getP2(): Int32Array;
                /**
                 * The indexes of second point.
                 * @param p2  (Required) The second point index.
                 */
                setP2(p2: Int32Array): this;
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Adds value to end of data, extends buffer if needed.
                 * @param n  (Required) The value that will be added
                 */
                reserve(n: number): any;
                /**
                 * Tries to resize arrays so that the next item can be added
                 */
                addItems(): number;
            }
            /**
             * List of net edges neighbouring to net points.
             */
            class PointEdgeLinkVector {
                /**
                 * List of net edges neighbouring to net points.
                 */
                constructor();
                /**
                 * Gets the number of data values in this array.
                 */
                getSize(): number;
                /**
                 * Gets the next link index.
                 */
                getNextElement(): Int32Array;
                /**
                 * Gets the edge index for the link.
                 */
                getEdge(): Int32Array;
                /**
                 * Removes all data and reserved space from the data buffer
                 */
                clear(): any;
                /**
                 * Adds value to end of data, extends buffer if needed.
                 * @param n  (Required) The value that will be added
                 */
                reserve(n: number): any;
                /**
                 * Tries to resize arrays so that the next item can be added
                 */
                addItems(): number;
            }
            /**
             * This container class manages a vector of points and its net data.
             *  It is used to store intermediate data for building isolines and isofills.
             */
            class NIsosourcePoints {
                /**
                 * This container class manages a vector of points and its net data.
                 *  It is used to store intermediate data for building isolines and isofills.
                 */
                constructor();
                /**
                 * Gets the number of elements in the collection.
                 */
                getSize(): number;
                /**
                 * Gets the isoLine source points X-position.
                 */
                getX(): Float64Array;
                /**
                 * Gets the isoLine source points Y-position.
                 */
                getY(): Float64Array;
                /**
                 * Gets the edge section index.
                 */
                getEdgeSec(): Int32Array;
                /**
                 * Gets the triangle index
                 */
                getTr(): Int32Array;
                /**
                 * Gets the isosource bezier tag (see Isosource bezier tag bits in ContourConstants).
                 */
                getTag(): Int32Array;
                /**
                 * Reduces containerSize to specified size
                 * @param size  (Required) The new size of the container
                 */
                cutSize(size: number): any;
                /**
                 * Reduces container size by one.
                 */
                popBack(): any;
                /**
                 * Clears out all data
                 */
                clear(): any;
                /**
                 * Adds value to end of data, extends buffer if needed.
                 * @param n  (Required) The value that will be added
                 */
                reserve(n: number): any;
                /**
                 * Increase size by 1. If buf_size less than size, increases buf_size twice.
                 */
                add(): number;
                /**
                 * Appends an elements from the specified collection.
                 * @param newPoints  (Required) The points to be appended to this collection.
                 * @param indexStart  (Required) The starting position in the source collection.
                 * @param indexEnd  (Required) The ending position in the source collection.
                 */
                append(newPoints: geotoolkit.contour.processor.NIsosourcePoints, indexStart: number, indexEnd: number): any;
                /**
                 * Appends an elements(in reverse mode) from the specified collection to the end of this collection.
                 * @param newPoints  (Required) The points to be appended to this collection.
                 * @param indexStart  (Required) The starting position in the source collection.
                 * @param indexEnd  (Required) The ending position in the source collection.
                 */
                appendReverse(newPoints: geotoolkit.contour.processor.NIsosourcePoints, indexStart: number, indexEnd: number): any;
            }
            /**
             * A Chunk (sequence of points) of isoline between borders or closed chunk.
             */
            class NIsosourceChunk extends geotoolkit.contour.processor.NIsosourcePoints {
                /**
                 * A Chunk (sequence of points) of isoline between borders or closed chunk.
                 */
                constructor();
                /**
                 * Gets the scale level index
                 */
                getLevel(): number;
                /**
                 * Sets the scale level index
                 * @param level  (Required) The scale level index.
                 */
                setLevel(level: number): this;
                /**
                 * Gets the sides Elem0 used for lower isosource, elem1 - for upper one
                 */
                getSides(): Int32Array;
                /**
                 * Gets the start index
                 */
                getStartPointIndex(): number;
                /**
                 * Sets the start index
                 * @param startPointIndex  (Required) The end index.
                 */
                setStartPointIndex(startPointIndex: number): this;
                /**
                 * Gets the end index
                 */
                getEndPointIndex(): number;
                /**
                 * Sets the end index
                 * @param endPointIndex  (Required) The end index.
                 */
                setEndPointIndex(endPointIndex: number): this;
                /**
                 * Clears all data
                 */
                clear(): any;
            }
            /**
             * This container class acts as a vector of isosource parts. It stores info about
             * parts of isosource and is needed for complicated isofills that consist of several polygons.
             */
            class NIsosourcePartVector {
                /**
                 * This container class acts as a vector of isosource parts. It stores info about
                 * parts of isosource and is needed for complicated isofills that consist of several polygons.
                 */
                constructor();
                /**
                 * Gets the number of elements in the collection.
                 */
                getSize(): number;
                /**
                 * Gets the next base part index.
                 */
                getNextBasePart(): Int32Array;
                /**
                 * Gets the base part complement end index.
                 */
                getComplimentEnd(): Int32Array;
                /**
                 * Gets the base part start index.
                 */
                getStart(): Int32Array;
                /**
                 * Gets the base part end index.
                 */
                getEnd(): Int32Array;
                /**
                 * Clears out all data
                 */
                clear(): any;
                /**
                 * Increase collection capacity up to the n elements.
                 * @param n  (Required) The new collection capacity
                 */
                reserve(n: number): any;
                /**
                 * Increase size by 1. If buf_size less than size, increases buf_size twice.
                 */
                add(): number;
            }
            /**
             * This class stores points and consists of several parts.
             *  Used to create isolines and isofills.
             */
            class NIsosource extends geotoolkit.contour.processor.NIsosourcePoints {
                /**
                 * This class stores points and consists of several parts.
                 *  Used to create isolines and isofills.
                 */
                constructor();
                /**
                 * Gets the The isoline source level.
                 */
                getLevel(): number;
                /**
                 * Sets the The isoline source level.
                 * @param level  (Required) The isoline source level.
                 */
                setLevel(level: number): this;
                /**
                 * Gets the Isource parts vector
                 */
                getParts(): geotoolkit.contour.processor.NIsosourcePartVector;
                /**
                 * Clears the collection
                 */
                clear(): any;
                /**
                 * Begins building part
                 */
                startPart(): any;
                /**
                 * End building part
                 */
                endPart(): any;
                /**
                 * Adds an elements from the specified collection to the end of this collection.
                 * The number of elements copied is equal to the istart - iend.
                 * If the reverse are set to true, it will appends elements in reverse
                 * mode( <see cref="NIsosourcePoints.AppendReverse"/>).
                 * @param newPoints  (Required) Points to be appended to this collection.
                 * @param indexStart  (Required) Starting position in the source collection.
                 * @param indexEnd  (Required) Ending position in the source collection.
                 * @param reverse  (Required) Boolean value for the appending mode.
                 */
                addPoints(newPoints: geotoolkit.contour.processor.NIsosourcePoints, indexStart: number, indexEnd: number, reverse: boolean): any;
            }
            /**
             * Stores the constants that are needed for contourJS
             */
            class ContourConstants {
                /**
                 * Stores the constants that are needed for contourJS
                 */
                constructor();
            }
            /**
             * Common functions used by Contour.
             */
            class Global {
                /**
                 * Common functions used by Contour.
                 */
                constructor();
                /**
                 * Gets the adjusted level
                 */
                getAdjustedLevel(): number;
                /**
                 * Sets the adjusted level
                 * @param level  (Required) The adjusted level.
                 */
                setAdjustedLevel(level: number): this;
                /**
                 * Calculates square of distance between points (x0,y0) and (x1,y1)
                 * @param x0  (Required) The first x.
                 * @param y0  (Required) The first y.
                 * @param x1  (Required) The second x.
                 * @param y1  (Required) The second y.
                 */
                getDistanceSquared(x0: number, y0: number, x1: number, y1: number): number;
                /**
                 * Determines intersection coordinates of lines
                 * (x0,y0)-(x1,y1) and (x2,y2)-(x3,y3) into (xout,yout).
                 * Segment 1 : (x0,y0) ~ (x1,y1)
                 * Segment 2 : (x2,y2) ~ (x3,y3)
                 * @param x0  (Required) First line start X.
                 * @param y0  (Required) First line start Y.
                 * @param x1  (Required) First line end X.
                 * @param y1  (Required) First line end Y.
                 * @param x2  (Required) Second line start X.
                 * @param y2  (Required) Second line start Y.
                 * @param x3  (Required) Second line end X.
                 * @param y3  (Required) Second line end Y.
                 * @param xOut  (Required) The intersection point x-Coordinate
                 * @param yOut  (Required) The intersection point y-Coordinate
                 * @param precision  (Required) Resolution precision.
                 * @param precision2  (Required) The quadratic precision.
                 */
                getIntersection(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, xOut: Float64Array, yOut: Float64Array, precision: number, precision2: number): number;
                /**
                 * Calculates bounding box for given points
                 * @param limits  (Required) bounding box to calculate
                 * @param size  (Required) The size of arrays.
                 * @param arrayX  (Required) array of x-coordinates
                 * @param arrayY  (Required) array of y-coordinates
                 */
                calcLimits(limits: geotoolkit.util.Rect, size: number, arrayX: Float64Array, arrayY: Float64Array): any;
                /**
                 * Extends bounding box if it doesn't contain given points
                 * @param limits  (Required) bounding box
                 * @param size  (Required) The size of arrays.
                 * @param arrayX  (Required) array of x-coordinates
                 * @param arrayY  (Required) array of y-coordinates
                 */
                extendLimits(limits: geotoolkit.util.Rect, size: number, arrayX: Float64Array, arrayY: Float64Array): any;
                /**
                 * Calculates rectangle that contains given rectangle after projection.
                 * @param projection  (Required) The projection
                 * @param sourceRect  (Required) The source rectangle
                 * @param destinationRect  (Required) The destination rectangle
                 */
                static projectBbox(projection: geotoolkit.contour.projections.AbstractProjection, sourceRect: geotoolkit.util.Rect, destinationRect: geotoolkit.util.Rect): any;
                /**
                 * Transforms arrays of coordinates
                 * @param xCoordinates  (Required) Array of x-coordinates
                 * @param yCoordinates  (Required) array of y-coordinates
                 * @param count  (Required) Coordinate values count
                 * @param tran  (Required) The transformation
                 */
                project(xCoordinates: Float64Array, yCoordinates: Float64Array, count: number, tran: geotoolkit.util.Transformation): any;
                /**
                 * If z is exact at range extremum, this will slightly change z
                 * @param scale  (Required) The contour scale
                 * @param z  (Required) The value to adjust
                 */
                adjustLevel(scale: geotoolkit.contour.scale.ContourScale, z: number): number;
            }
            /**
             * The contour fault line. This is extension of Polyline.
             *  Added attributes for lines:
             *  1. index - fault index.
             *  2. is_closed - boolean attribute, which specifies closed fault or not.
             */
            class ContourFaultLine extends geotoolkit.scene.shapes.Polyline {
                /**
                 * The contour fault line. This is extension of Polyline.
                 *  Added attributes for lines:
                 *  1. index - fault index.
                 *  2. is_closed - boolean attribute, which specifies closed fault or not.
                 * @param nPoints  (Required) The number of points
                 * @param x  (Required) The x data array.
                 * @param y  (Required) The y data array.
                 * @param closed  (Required) Whether the fault is closed.
                 */
                constructor(nPoints: number, x: Float64Array, y: Float64Array, closed: boolean);
                /**
                 * Gets the state of fault line(closed or not).
                 */
                getClosed(): boolean;
                /**
                 * Gets the fault line model limits.
                 */
                getLimits(): geotoolkit.util.Rect;
            }
            /**
             * Stores isoFill data for rendering.
             */
            class ContourIsoFill {
                /**
                 * Stores isoFill data for rendering.
                 */
                constructor();
                /**
                 * Gets the level number.
                 */
                getLevel(): number;
                /**
                 * Sets the level number.
                 * @param level  (Required) The level number.
                 */
                setLevel(level: number): this;
                /**
                 * Gets the model limits
                 */
                getLimits(): geotoolkit.util.Rect;
                /**
                 * Sets the model limits
                 * @param limits  (Required) The model limits.
                 */
                setLimits(limits: geotoolkit.util.Rect): this;
                /**
                 * Gets the smoothed limits.
                 */
                getSmoothedLimits(): geotoolkit.util.Rect;
                /**
                 * Sets the smoothed limits.
                 * @param smoothedLimits  (Required) The smoothed limits.
                 */
                setSmoothedLimits(smoothedLimits: geotoolkit.util.Rect): this;
                /**
                 * Clears the contents of this shape
                 */
                clear(): any;
            }
            /**
             * Builds internal data structures needed to render contour
             *  This structure is used to prevent label overlap.
             */
            class ContourLabelingArea {
                /**
                 * Builds internal data structures needed to render contour
                 *  This structure is used to prevent label overlap.
                 */
                constructor();
                /**
                 * Checks if the specified rectangular region is free (if there are no labels there).
                 * @param rect  (Required) The rectangular region to be checked.
                 */
                check(rect: geotoolkit.util.Rect): boolean;
                /**
                 * Marks the specified rectangular region as occupied.
                 * @param rect  (Required) The rectangular region to be marked
                 */
                put(rect: geotoolkit.util.Rect): any;
                /**
                 * Determines whether there are any rectangles contained in this labeling area.
                 */
                isEmpty(): boolean;
                /**
                 * Clears the labeling area.
                 */
                clear(): any;
            }
            /**
             * The enum for the possible contour label orientations.
             */
            class ContourLabelsDirection {
                /**
                 * The enum for the possible contour label orientations.
                 */
                constructor();
                /**
                 * Direction rendering Labels.
                 */
                static Direction: any;
            }
            /**
             * This is an class that builds an array of 2D triangles
             *  using an array of 2D grid cells
             */
            class TriangularNet extends geotoolkit.contour.processor.ContourConstants {
                /**
                 * This is an class that builds an array of 2D triangles
                 *  using an array of 2D grid cells
                 */
                constructor();
                /**
                 * Gets grid boundary index x0
                 */
                getGridX0(): number;
                /**
                 * Gets grid boundary index x1
                 */
                getGridX1(): number;
                /**
                 * Gets grid boundary index y0
                 */
                getGridY0(): number;
                /**
                 * Gets grid boundary index y1
                 */
                getGridY1(): number;
                /**
                 * Sets grid boundary index x0
                 * @param value  (Required) grid boundary index
                 */
                setGridX0(value: number): this;
                /**
                 * Sets grid boundary index x1
                 * @param value  (Required) grid boundary index
                 */
                setGridX1(value: number): this;
                /**
                 * Sets grid boundary index y0
                 * @param value  (Required) grid boundary index
                 */
                setGridY0(value: number): this;
                /**
                 * Sets grid boundary index y1
                 * @param value  (Required) grid boundary index
                 */
                setGridY1(value: number): this;
                /**
                 * Gets grid range left
                 */
                getIx0(): number;
                /**
                 * Gets grid range bottom
                 */
                getIy0(): number;
                /**
                 * Sets grid range left
                 * @param value  (Required) The grid range left
                 */
                setIx0(value: number): this;
                /**
                 * Sets grid range bottom
                 * @param value  (Required) The grid range left
                 */
                setIy0(value: number): this;
                /**
                 * Gets the half of precision that is to be used in cells
                 */
                getHalfPrecisCells(): number;
                /**
                 * Gets an array of possible triangles
                 */
                getPossibleTr(): Int32Array;
                /**
                 * Gets the outer edge
                 */
                getIedgeOuter(): number;
                /**
                 * Gets the array with the indexes of triangles that will be split
                 */
                getTrianglesToBeSplit(): geotoolkit.contour.util.IntVector;
                /**
                 * Gets the array with the indexes of edges that will be split
                 */
                getEdgesToBeSplit(): geotoolkit.contour.util.IntVector;
                /**
                 * Gets the global thread object
                 */
                getGlobal(): geotoolkit.contour.processor.Global;
                /**
                 * Get the adjacent triangles containing point (x,y).
                 * @param x  (Required) point x value.
                 * @param y  (Required) point y value.
                 * @param possibleTr  (Required) Array of index for the triangles that contains the point.
                 */
                getAdjacentTriangles(x: number, y: number, possibleTr: Int32Array): number;
                /**
                 * Number of cells in horizontal.
                 */
                getSizeX(): number;
                /**
                 * Number of cells in vertical.
                 */
                getSizeY(): number;
                /**
                 * The point edge link collection.
                 */
                getPointEdgeLinks(): geotoolkit.contour.processor.PointEdgeLinkVector;
                /**
                 * The edge/isoline intersection collection.
                 */
                getEdgeSections(): geotoolkit.contour.processor.EdgeSectionVector;
                /**
                 * The triangle collection.
                 */
                getTriangles(): geotoolkit.contour.processor.TriangleVector;
                /**
                 * The edge collection.
                 */
                getEdges(): geotoolkit.contour.processor.EdgeVector;
                /**
                 * The point collection.
                 */
                getPoints(): geotoolkit.contour.processor.PointVector;
                /**
                 * Throws a triangular net exception
                 * @param code  (Required) The error code
                 */
                static netException(code: number): any;
                /**
                 * Gets the real precision
                 */
                getPrecisionReal(): number;
                /**
                 * Gets the precision for point difference in cell units
                 * (points within the distance of precisCells are considered overlayed)
                 */
                getPrecisionInCells(): number;
                /**
                 * Sets the precision for point difference in cell units
                 * (points within the distance of precisCells are considered overlayed)
                 * @param precision  (Required) The precision in cells.
                 */
                setPrecisionInCells(precision: number): this;
                /**
                 * Clear data
                 */
                clear(): any;
                /**
                 * Sets the model rectangle.
                 * @param modelRect  (Required) The model rectangle
                 */
                setModelRect(modelRect: geotoolkit.util.Rect): this;
                /**
                 * Sets parameters for grid range left, bottom, width, height as well as
                 * grid boundary and model rectangular
                 * @param range  (Required) The grid range.
                 * @param rect  (Required) The model bounds rectangle.
                 */
                setSize(range: geotoolkit.contour.grid.GridRange, rect: geotoolkit.util.Rect): this;
                /**
                 * Gets the grid to model transformation
                 */
                getGridToModel(): geotoolkit.util.Transformation;
                /**
                 * Sets the grid to model transformation
                 * @param gridToModel  (Required) Sets the grid to model transformation
                 */
                setGridToModel(gridToModel: geotoolkit.util.Transformation): this;
                /**
                 * Gets the model to grid transformation
                 */
                getModelToGrid(): geotoolkit.util.Transformation;
                /**
                 * Gets the projection
                 */
                getProjection(): geotoolkit.contour.projections.AbstractProjection;
                /**
                 * Sets the projection
                 * @param projection  (Required) The projection.
                 */
                setProjection(projection: geotoolkit.contour.projections.AbstractProjection): this;
                /**
                 * Add a point to the point vector.
                 * @param x  (Required) The x-coordinate
                 * @param y  (Required) The y-coordinate
                 * @param z  (Required) The z-coordinate
                 * @param level  (Required) The contour level
                 */
                addPoint(x: number, y: number, z: number, level: number): number;
                /**
                 * Add edge to the edge vector.
                 * @param iPoint1  (Required) Start point index.
                 * @param iPoint2  (Required) End point index.
                 */
                addEdge(iPoint1: number, iPoint2: number): number;
                /**
                 * Saves triangle as current splitted to add new triangles as child.
                 * After last triangle is added, user calls endSplit
                 * @param itr  (Required) The triangle index.
                 */
                startSplit(itr: number): any;
                /**
                 * Ends triangle split.
                 */
                endSplit(): any;
                /**
                 * Adds triangle, sets link to triangle in existing edges.
                 * @param iptA  (Required) Point A index.
                 * @param iptB  (Required) Point B index.
                 * @param iptC  (Required) Point C index.
                 * @param iedgeAB  (Required) EdgeAB index.
                 * @param iedgeBC  (Required) EdgeBC index.
                 * @param iedgeCA  (Required) EdgeCA index.
                 */
                addTriangle(iptA: number, iptB: number, iptC: number, iedgeAB: number, iedgeBC: number, iedgeCA: number): number;
                /**
                 * Remove triangle with index itr by setting the value corresponding index to a negative number
                 * @param itr  (Required) The index of the triangle to remove
                 */
                removeTriangle(itr: number): any;
                /**
                 * Adds edge/isoline intersection to the EdgeSectionVector
                 * @param iedge  (Required) The edge index.
                 * @param level  (Required) The level index.
                 * @param x  (Required) The intersection position X.
                 * @param y  (Required) The intersection position Y.
                 */
                addEdgeSection(iedge: number, level: number, x: number, y: number): any;
                /**
                 * Places adjacent and outer edge indexes to adj_edge and out_edge
                 * Finds the edge in the triangle adjacent to the edge and apex point. Also places
                 * the outer edge index to iedge_outer.
                 * @param itr  (Required) The triangle index for the triangle to be searched.
                 * @param iedge  (Required) The edge index.
                 * @param ipt  (Required) The point index for the apex.
                 */
                getAdjacentEdgeOuter(itr: number, iedge: number, ipt: number): number;
                /**
                 * Create point edge links for all edges.
                 */
                createPointEdgeLinks(): any;
                /**
                 * Gets clipped to triangle second point. Returns point position.
                 * @param itr  (Required) The triangle index.
                 * @param x  (Required) The segment start point x value.
                 * @param y  (Required) The segment start point y value.
                 * @param x2  (Required) The segment end point x value.
                 * @param y2  (Required) The segment end point x value.
                 * @param xOut  (Required) The clipped point x-Coordinate.
                 * @param yOut  (Required) The clipped point y-Coordinate.
                 */
                clipSecondPoint(itr: number, x: number, y: number, x2: number, y2: number, xOut: Float64Array, yOut: Float64Array): number;
                /**
                 * Finds common or removed triangle containing point (x,y).
                 * If possible some part of segment (x,y)-(x2,y2)
                 * Returns triangle index (or -1 if not found).
                 * @param x  (Required) The first point X.
                 * @param y  (Required) The first point Y.
                 * @param x2  (Required) The second point X.
                 * @param y2  (Required) The second point Y.
                 * @param xOut  (Required) The intersection point x-coordinate.
                 * @param yOut  (Required) The intersection point y-coordinate.
                 * @param pos  (Required) The output position.
                 */
                findTriangle(x: number, y: number, x2: number, y2: number, xOut: Float64Array, yOut: Float64Array, pos: Int32Array): number;
                /**
                 * Add edges to the edge vector
                 * @param iPoint1  (Required) The start point index array
                 * @param iPoint2  (Required) The end point index array
                 */
                addEdgeArray(iPoint1: Int32Array, iPoint2: Int32Array): any;
                /**
                 * Add a link to the PointEdgeLinkVector for the point and edge.
                 * @param iPoint  (Required) The point index
                 * @param iEdge  (Required) The edge index
                 */
                addPointEdgeLink(iPoint: number, iEdge: number): any;
                /**
                 * If (x1,y1)-(x2,y2) has segment on edge, returns 1;
                 * if one point on edge, returns 0;
                 * if no common points, returns -1;
                 * Places coords of intersection to (xout,yout) .
                 * @param itr  (Required) The triangle index.
                 * @param iedge  (Required) The edge index for the edge segment to be checked.
                 * @param x1  (Required) The point1 x value.
                 * @param y1  (Required) The point1 y value.
                 * @param x2  (Required) The point2 x value.
                 * @param y2  (Required) The point2 y value.
                 * @param xOut  (Required) The intersection point x-Coordinate.
                 * @param yOut  (Required) The intersection point y-Coordinate.
                 * @param firstPointPos  (Required) The First point position bit (see ContourConstants).
                 */
                isIntoEdge(itr: number, iedge: number, x1: number, y1: number, x2: number, y2: number, xOut: Float64Array, yOut: Float64Array, firstPointPos: number): number;
                /**
                 * Gets the intersection of line segment (x1,y1), (x2,y2) with the edge in the triangle.
                 * @param itr  (Required) The triangle index.
                 * @param iedge  (Required) The edge index for the edge segment to be checked.
                 * @param x1  (Required) The point1 x value.
                 * @param y1  (Required) The point1 y value.
                 * @param x2  (Required) The point2 x value.
                 * @param y2  (Required) The point2 y value.
                 * @param xOut  (Required) The intersection point x-Coordinate.
                 * @param yOut  (Required) The intersection point y-Coordinate.
                 * @param firstPointPos  (Required) The First point position bit (see ContourConstants).
                 */
                getIntersection(itr: number, iedge: number, x1: number, y1: number, x2: number, y2: number, xOut: Float64Array, yOut: Float64Array, firstPointPos: number): number;
                /**
                 * Finds point position in triangle.
                 * Returns combination of bits from enum PointInTrianglePositionBits.
                 * @param itr  (Required) The triangle index.
                 * @param x  (Required) The point position x.
                 * @param y  (Required) The point position y.
                 */
                getTrianglePointPosition(itr: number, x: number, y: number): number;
                /**
                 * Clips line segment to grid range.
                 * @param modelP1  (Required) The first model point
                 * @param modelP2  (Required) The second model point
                 */
                clipToGrid(modelP1: geotoolkit.util.Point, modelP2: geotoolkit.util.Point): boolean;
            }
            /**
             * This class builds an array of triangles from the array of rectangular grid cells
             *  by partitioning each grid cell into 2 triangles.
             */
            class RectTriangularNet extends geotoolkit.contour.processor.TriangularNet {
                /**
                 * This class builds an array of triangles from the array of rectangular grid cells
                 *  by partitioning each grid cell into 2 triangles.
                 */
                constructor();
                /**
                 * Get the adjacent triangles containing point (x,y)
                 * @param x  (Required) The point x value.
                 * @param y  (Required) The point y value.
                 * @param possibleTr  (Required) The array of index for the triangles that contains the point The array is to be filled and return.
                 */
                getAdjacentTriangles(x: number, y: number, possibleTr: Int32Array): number;
            }
            /**
             * This iterator finds triangles that are around a given point.
             */
            class AroundPointIterator {
                /**
                 * This iterator finds triangles that are around a given point.
                 */
                constructor();
                /**
                 * Gets the triangle index.
                 */
                getItr(): number;
                /**
                 * Gets the edge index.
                 */
                getIedge(): number;
                /**
                 * Gets the outer edge index.
                 */
                getIedgeOuter(): number;
                /**
                 * Initializes the iterator
                 * @param pNet  (Required) The triangular net.
                 * @param pItr  (Required) The starting triangle index.
                 * @param pIpt  (Required) the starting point index.
                 * @param clockwise  (Required) The movement direction around current point.
                 */
                start(pNet: geotoolkit.contour.processor.TriangularNet, pItr: number, pIpt: number, clockwise: boolean): any;
                /**
                 * Goes to next edge/triangle.
                 */
                next(): number;
                /**
                 * Throws a triangular net exception
                 * @param code  (Required) The error code
                 */
                static netException(code: number): any;
            }
            /**
             * This is the base class for the contour data processor
             */
            class AbstractContourDataProcessor extends geotoolkit.contour.processor.ContourConstants {
                /**
                 * This is the base class for the contour data processor
                 */
                constructor();
                /**
                 * Gets the contour faults list.
                 */
                getFaultsList(): geotoolkit.contour.faults.ContourFaultList;
                /**
                 * Sets the contour faults list.
                 * @param faults  (Required) The contour faults list.
                 */
                setFaultsList(faults: geotoolkit.contour.faults.ContourFaultList): this;
                /**
                 * Gets the contour grid.
                 */
                getGrid(): geotoolkit.contour.grid.ContourAbstractGrid;
                /**
                 * Sets the contour grid.
                 * @param grid  (Required) The contour grid.
                 */
                setGrid(grid: geotoolkit.contour.grid.ContourAbstractGrid): this;
                /**
                 * Gets the contour scale.
                 */
                getScale(): geotoolkit.contour.scale.ContourScale;
                /**
                 * Sets the contour scale.
                 * @param scale  (Required) The contour scale.
                 */
                setScale(scale: geotoolkit.contour.scale.ContourScale): this;
                /**
                 * Gets the contour shape.
                 */
                getContourShape(): geotoolkit.contour.shapes.ContourShape;
                /**
                 * Sets the contour scale.
                 * @param shape  (Required) The contour shape.
                 */
                setContourShape(shape: geotoolkit.contour.shapes.ContourShape): this;
                /**
                 * Gets the fault point comparison precision (measured in grid cells).
                 */
                getFaultPointPrecision(): number;
                /**
                 * Sets the fault point comparison precision (measured in grid cells).
                 * @param precision  (Required) The fault point comparison precision.
                 */
                setFaultPointPrecision(precision: number): this;
                /**
                 * Forces rebuild of internal structures while next rendering.
                 * @param bits  (Required) The structure bits.
                 */
                setNeedRebuild(bits: number): this;
                /**
                 * Builds internal structures needed for rendering
                 * @param range  (Required) The grid range that needs to be rendered.
                 * @param rebuildAll  (Required) if true, rebuild all else - only structures affected by data change since last build
                 * @param modelToDevice  (Required) The model to device transform.
                 */
                build(range: geotoolkit.contour.grid.GridRange, rebuildAll: boolean, modelToDevice: geotoolkit.util.Transformation): any;
            }
            /**
             * Builds internal data structures needed to render contour
             */
            class ContourDataProcessor extends geotoolkit.contour.processor.AbstractContourDataProcessor {
                /**
                 * Builds internal data structures needed to render contour
                 */
                constructor();
                /**
                 * Returns number of areas.
                 */
                getAreasCount(): number;
                /**
                 * Gets the data source which provides grids to contour.
                 */
                getDataSource(): geotoolkit.contour.datasource.AbstractContourDataSource;
                /**
                 * Sets the data source which provides grids to contour.
                 * @param dataSource  (Required) The dataSource.
                 */
                setDataSource(dataSource: geotoolkit.contour.datasource.AbstractContourDataSource): this;
                /**
                 * Gets the collection of isolines.
                 */
                getIsoLines(): any[];
                /**
                 * Gets the areas that are in this processor.
                 */
                getAreas(): any[];
                /**
                 * Sets the areas that are in this processor
                 * @param areas  (Required) The array of contourNetAreas.
                 */
                setAreas(areas: any[]): this;
                /**
                 * Gets contour net area.
                 * @param index  (Optional) deprecated (since 2.6) The area index.
                 */
                getArea(index?: number): any;
                /**
                 * Gets the number of levels.
                 */
                getCountLevels(): number;
                /**
                 * Sets the number of levels.
                 * @param countLevels  (Required) The number of levels.
                 */
                setCountLevels(countLevels: number): this;
                /**
                 * This method is called after the build.
                 * @param area  (Optional) deprecated (since 2.6) The contour net area.
                 */
                postBuild(area?: any): any;
                /**
                 * Gets count isolines of area.
                 * @param areaIndex  (Optional) deprecated (since 2.6) The index of the area.
                 */
                getIsolinesCountArea(areaIndex?: number): number;
                /**
                 * Gets contour net area.
                 * @param index  (Optional) deprecated (since 2.6) The area index.
                 */
                getArea(index?: number): any;
                /**
                 * Gets X array points isoline.
                 * @param areaIndex  (Required) deprecated (since 2.6) The area index.
                 * @param isolineIndex  (Required) The isoline index.
                 * @param refArrayX  (Required) The array of x-coordinates.
                 * @param refArrayY  (Required) The array of y-coordinates.
                 */
                getIsolinePoints(areaIndex: number, isolineIndex: number, refArrayX: geotoolkit.contour.util.DoubleVector, refArrayY: geotoolkit.contour.util.DoubleVector): boolean;
                /**
                 * Builds all structures needed for rendering of an area.
                 * @param indexArea  (Optional) deprecated (since 2.6) The index area.
                 */
                buildArea(indexArea?: number): any;
                /**
                 * Initialize internal data before building.
                 * @param modelToDevice  (Required) Model to device transformation.
                 * @param rebuildAll  (Required) If true rebuild all internal structures.
                 */
                preBuild(modelToDevice: geotoolkit.util.Transformation, rebuildAll: boolean): any;
                /**
                 * Deletes all visual shapes in areas.
                 */
                deleteVisualShapes(): any;
                /**
                 * Deletes areas.
                 */
                deleteAreas(): any;
                /**
                 * Aborts the building process
                 */
                abortBuild(): any;
                /**
                 * Gets the contour faults list.
                 */
                getFaultsList(): geotoolkit.contour.faults.ContourFaultList;
                /**
                 * Sets the contour faults list.
                 * @param faults  (Required) The contour faults list.
                 */
                setFaultsList(faults: geotoolkit.contour.faults.ContourFaultList): this;
                /**
                 * Gets the contour grid.
                 */
                getGrid(): geotoolkit.contour.grid.ContourAbstractGrid;
                /**
                 * Sets the contour grid.
                 * @param grid  (Required) The contour grid.
                 */
                setGrid(grid: geotoolkit.contour.grid.ContourAbstractGrid): this;
                /**
                 * Gets the contour scale.
                 */
                getScale(): geotoolkit.contour.scale.ContourScale;
                /**
                 * Sets the contour scale.
                 * @param scale  (Required) The contour scale.
                 */
                setScale(scale: geotoolkit.contour.scale.ContourScale): this;
                /**
                 * Gets the contour shape.
                 */
                getContourShape(): geotoolkit.contour.shapes.ContourShape;
                /**
                 * Sets the contour scale.
                 * @param shape  (Required) The contour shape.
                 */
                setContourShape(shape: geotoolkit.contour.shapes.ContourShape): this;
                /**
                 * Gets the fault point comparison precision (measured in grid cells).
                 */
                getFaultPointPrecision(): number;
                /**
                 * Sets the fault point comparison precision (measured in grid cells).
                 * @param precision  (Required) The fault point comparison precision.
                 */
                setFaultPointPrecision(precision: number): this;
                /**
                 * Forces rebuild of internal structures while next rendering.
                 * @param bits  (Required) The structure bits.
                 */
                setNeedRebuild(bits: number): this;
                /**
                 * Sets skipping of near points when rendering isolines and isofills (to speed up process).
                 * @param skipNearPoints  (Required) If true then point skipping will be enabled.
                 */
                setSkipNearPoint(skipNearPoints: boolean): this;
                /**
                 * Builds internal structures needed for rendering
                 * @param range  (Required) The grid range that needs to be rendered.
                 * @param rebuildAll  (Required) if true, rebuild all else - only structures affected by data change since last build
                 * @param modelToDevice  (Required) The model to device transform.
                 */
                build(range: geotoolkit.contour.grid.GridRange, rebuildAll: boolean, modelToDevice: geotoolkit.util.Transformation): any;
            }
            module ContourLabelsDirection {
                /**
                 * Direction rendering Labels.
                 */
                interface Direction {
                    /**
                     * By default labels are rendered along isoline upside up.
                     */
                    Default: number;
                    /**
                     * Labels are rendered towards positive gradient of the isoline
                     */
                    TowardsIsolineGradient: number;
                    /**
                     * Labels are rendered towards negative gradient of the isoline
                     */
                    AwayFromIsolineGradient: number;
                }
            }
        }
        module events {
            /**
             * The base class for all contour events.
             *  Constructs new event object, based on specified values
             */
            class Event {
                /**
                 * The base class for all contour events.
                 *  Constructs new event object, based on specified values
                 * @param source  (Required) Source of event.
                 * @param param  (Required) Parameter of event (reference to shape, for example).
                 * @param id  (Required) Integer value - ID of event
                 */
                constructor(source: any, param: any, id: number);
                /**
                 * Obtains the source object of this event.
                 */
                getSource(): any;
                /**
                 * Gets the parameter object associated with this event.
                 */
                getParameter(): any;
                /**
                 * Retrieves the ID of this event.
                 */
                getID(): number;
            }
            /**
             * Event is fired by an object to notify other objects about changes that might affect them
             *  Eg. changing a parameter or data, changes the final display
             *  Constructs new event object, based on specified values
             */
            class ContourEvent extends geotoolkit.contour.events.Event {
                /**
                 * Event is fired by an object to notify other objects about changes that might affect them
                 *  Eg. changing a parameter or data, changes the final display
                 *  Constructs new event object, based on specified values
                 * @param source  (Required) Source of event.
                 * @param param  (Required) Parameter of event (reference to shape, for example).
                 * @param id  (Required) Integer value - ID of event
                 */
                constructor(source: any, param: any, id: number);
                /**
                 * The EventType enumeration is used to describe the type of event being represented
                 *  by the ContourEvent. Typically something has changed, but what exactly?
                 */
                static EventType: any;
            }
            /**
             * Constructs new visual event object, based on specified values
             */
            class VisualEvent extends geotoolkit.contour.events.Event {
                /**
                 * Constructs new visual event object, based on specified values
                 * @param source  (Required) Source of event.
                 * @param param  (Required) Parameter of event (reference to shape, for example).
                 * @param id  (Required) Integer value - ID of event
                 */
                constructor(source: any, param: any, id: number);
                /**
                 * The EventType enumeration describes what this VisualEvent actually is.
                 */
                static EventType: any;
            }
            /**
             * The fill visual event. This class encapsulates more event types that its superclass.
             */
            class FillVisualEvent extends geotoolkit.contour.events.VisualEvent {
                /**
                 * The fill visual event. This class encapsulates more event types that its superclass.
                 * @param source  (Required) Source of event.
                 * @param param  (Required) Parameter of event (reference to shape, for example).
                 * @param id  (Required) Integer value - ID of event
                 */
                constructor(source: any, param: any, id: number);
                /**
                 * The EventType enumeration describes what this FillVisualEvent actually is.
                 */
                static EventType: any;
            }
            /**
             * Constructs new visual event object, based on specified values
             */
            class LineVisualEvent extends geotoolkit.contour.events.VisualEvent {
                /**
                 * Constructs new visual event object, based on specified values
                 * @param source  (Required) Source of event.
                 * @param param  (Required) Parameter of event (reference to shape, for example).
                 * @param id  (Required) Integer value - ID of event
                 */
                constructor(source: any, param: any, id: number);
                /**
                 * The EventType enumeration describes what this LineVisualEvent actually represents
                 */
                static EventType: any;
            }
            /**
             * Every object which is interested in receiving events from the visual,
             *  must be derived from this class
             */
            class VisualListener {
                /**
                 * Every object which is interested in receiving events from the visual,
                 *  must be derived from this class
                 */
                constructor();
                /**
                 * Notifies us (the listener) that the visual was invalidated
                 */
                onVisualInvalidated(): geotoolkit.contour.events.VisualEvent;
            }
            /**
             * Every class which is interested in receiving events from the
             *  contour shape must be derived from this class
             */
            class ContourListener {
                /**
                 * Every class which is interested in receiving events from the
                 *  contour shape must be derived from this class
                 */
                constructor();
                /**
                 * Called to notify the listener that the visual was invalidated.
                 */
                ContourInvalidated(): geotoolkit.contour.events.ContourEvent;
            }
            module ContourEvent {
                /**
                 * The EventType enumeration is used to describe the type of event being represented
                 *  by the ContourEvent. Typically something has changed, but what exactly?
                 */
                interface EventType {
                    /**
                     * The Contour Scale has changed
                     */
                    SCALE_CHANGED: number;
                    /**
                     * The Contour Grid has changed
                     */
                    GRID_CHANGED: number;
                    /**
                     * The Contour Processor has changed
                     */
                    PROCESSOR_CHANGED: number;
                    /**
                     * The Bounding Box of the Contour Shape has changed
                     */
                    BBOX_CHANGED: number;
                    /**
                     * A visual has been added to the contour shape
                     */
                    VISUAL_ADDED: number;
                    /**
                     * A visual has been removed from the contour shape
                     */
                    VISUAL_REMOVED: number;
                    /**
                     * The projection has changed
                     */
                    PROJECTION_CHANGED: number;
                    /**
                     * The faults have changed
                     */
                    FAULTS_CHANGED: number;
                }
            }
            module VisualEvent {
                /**
                 * The EventType enumeration describes what this VisualEvent actually is.
                 */
                interface EventType {
                    /**
                     * The visual has been invalidated
                     */
                    VISUAL_INVALIDATED: number;
                    /**
                     * The visibility of the visual has changed
                     */
                    VISIBILITY_CHANGED: number;
                    /**
                     * The colormap for the visual has changed
                     */
                    COLORMAP_CHANGED: number;
                }
            }
            module FillVisualEvent {
                /**
                 * The EventType enumeration describes what this FillVisualEvent actually is.
                 */
                interface EventType {
                    /**
                     * The visual has been invalidated
                     */
                    VISUAL_INVALIDATED: number;
                    /**
                     * The visibility of the visual has changed
                     */
                    VISIBILITY_CHANGED: number;
                    /**
                     * The colormap for the visual has changed
                     */
                    COLORMAP_CHANGED: number;
                    /**
                     * The style of holes has changed
                     */
                    HOLES_CHANGED: number;
                }
            }
            module LineVisualEvent {
                /**
                 * The EventType enumeration describes what this LineVisualEvent actually represents
                 */
                interface EventType {
                    /**
                     * The visual has been invalidated
                     */
                    VISUAL_INVALIDATED: number;
                    /**
                     * The visibility of the visual has changed
                     */
                    VISIBILITY_CHANGED: number;
                    /**
                     * The colormap for the visual has changed
                     */
                    COLORMAP_CHANGED: number;
                    /**
                     * The line or label style has changed
                     */
                    STYLE_CHANGED: number;
                    /**
                     * The index stepping for the isolines has changed
                     */
                    STEP_CHANGED: number;
                    /**
                     * The format for the label text has changed
                     */
                    FORMAT_CHANGED: number;
                    /**
                     * The size of the margins around the labels, has changed
                     */
                    MARGIN_CHANGED: number;
                    /**
                     * The spacing of labels along the isolines, has changed
                     */
                    SPACING_CHANGED: number;
                }
            }
        }
        module projections {
            /**
             * Abstract class for Projections (eg. LatLongProjection)
             */
            class AbstractProjection {
                /**
                 * Abstract class for Projections (eg. LatLongProjection)
                 */
                constructor();
                /**
                 * Gets the inverse projection for this projection.
                 */
                getReverse(): geotoolkit.contour.projections.AbstractProjection;
                /**
                 * Gets the string identifier for this projection
                 */
                getId(): string;
                /**
                 * Determine whether the point has a valid projection (or reverse projection)
                 * @param x  (Required) long or easting depending on forward or reverse usage
                 * @param y  (Required) lat or northing depending on forward or reverse usage
                 */
                isPointProjectable(x: number, y: number): boolean;
                /**
                 * If you want the projection to bound points, then call this will bound==true
                 * and it will bound them to lie within valid projection or inverse projection bounds.
                 * Otherwise, the default should be not to bound points.
                 * @param boundingEnabled  (Required) Boolean flag: true if the points are bound.
                 */
                boundPoints(boundingEnabled: boolean): any;
                /**
                 * Gets the smallest rectangular region (viewport)
                 * that just bounds this projection's coordinate system.
                 * This can be used to set up views and clip data.<br>
                 * Note that there are generally valid and invalid regions
                 * in this rectangular region and that you should call
                 * <code>isPointProjectable(double,double)</code> to
                 * see if any given point in this region is, in fact,
                 * a valid point in the projection's coordinate system.
                 * <br>
                 * We need to shift this design to a CoordinateSystem
                 * change approach.  For example, projections would be accomplished
                 * with an interface like this:<br>
                 * <pre>
                 * <code>
                 * class CoordinateSystem
                 *  {
                 *       Units getUnits();
                 *       CoordinateSystem changeTo( CoordinateSystem c ); // implies projection
                 *       void changeUnits(Units);
                 *   }
                 * </code>
                 * </pre> <br>
                 * This approach will retain cohesiveness of GIS data with their units,
                 * datums, scale changes, etc.  This will allow data to be left out
                 * entirely whereas a Projection interface such as it is now cannot do this.<br>
                 * GisModel -hasA-> CoordinateSystem<br>
                 * GisLayer -hasA-> CoordinateSystem<br>
                 * @param boundingRegion  (Required) Rect region representing the minimal bounding region.
                 */
                getMinimalBoundingRegion(boundingRegion: geotoolkit.util.Rect): any;
                /**
                 * Gets the units in projection space. For example, meters, feet, kilometers, etc.
                 */
                getUnitsInProjectionSpace(): string;
                /**
                 * Sets the units in projection space. For example, meters, feet, kilometers, etc.
                 * @param unit  (Required) String that holds the units for this projection space.
                 */
                setUnitsInProjectionSpace(unit: string): this;
                /**
                 * Projects a single 3D point. This method allocates and
                 * returns the array of projected coordinates in x, y order.
                 * @param x  (Required) The x-coordinate
                 * @param y  (Required) The y-coordinate
                 */
                projectPoint(x: number, y: number): Float64Array;
                /**
                 * Projects a set of points in 3D space. This method replaces
                 * the data in the source arrays with projected data and doesn't
                 * allocate any memory.
                 * @param x  (Required) The array of x-coordinates
                 * @param y  (Required) The array of y-coordinates
                 * @param number  (Required) The number of coordinates in the x and y arrays.
                 */
                projectPoints(x: Float64Array, y: Float64Array, number: number): any;
                /**
                 * Projects a set of points in 3D space. This method allocates and returns the
                 * 2d array with projected data. The first index corresponds to x ordinate.
                 * The second index corresponds to the index of the point.
                 * @param x  (Required) The array of x-coordinates
                 * @param y  (Required) The array of y-coordinates
                 * @param number  (Required) The number of coordinates in the x and y arrays.
                 */
                projectPath(x: Float64Array, y: Float64Array, number: number): Float64Array[];
                /**
                 * Is this a projection that does not modify any data points?
                 */
                isNullProjection(): boolean;
            }
            /**
             * The projection class that projects latitude and longitude to mercator coordinates.
             */
            class MercatorProjection extends geotoolkit.contour.projections.AbstractProjection {
                /**
                 * The projection class that projects latitude and longitude to mercator coordinates.
                 * @param minLatitude  (Required) The minimum latitude.
                 * @param maxLatitude  (Required) The maximum latitude.
                 */
                constructor(minLatitude: number, maxLatitude: number);
            }
            /**
             * The projection class that projects mercator coordinates to latitude and longitude.
             */
            class InverseMercatorProjection extends geotoolkit.contour.projections.AbstractProjection {
                /**
                 * The projection class that projects mercator coordinates to latitude and longitude.
                 * @param minMercatorY  (Required) The minimum mercator Y.
                 * @param maxMercatorY  (Required) The maximum mercator Y.
                 */
                constructor(minMercatorY: number, maxMercatorY: number);
            }
        }
        module strategy {
            /**
             * This is an abstract strategy class which defines how contour labels should be rendered.
             */
            class AbstractContourLabelingStrategy {
                /**
                 * This is an abstract strategy class which defines how contour labels should be rendered.
                 */
                constructor();
                /**
                 * Returns if labels of specified level should be drawn
                 * @param level  (Required) level
                 */
                getLabelsVisible(level: number): boolean;
                /**
                 * Gets the labeling scale factor
                 * @param modelToDevice  (Required) Model to device transformation.
                 * @param modelLimits  (Required) Model limits of the contour.
                 * @param height  (Required) Height of non-scaled label in device coordinate space.
                 */
                getLabelScale(modelToDevice: geotoolkit.util.Transformation, modelLimits: geotoolkit.util.Rect, height: number): number;
                /**
                 * Desired number of labels on the isoline
                 * @param modelToDevice  (Required) Model to device transformation.
                 * @param modelLimits  (Required) Model limits of the contour.
                 * @param isolineLength  (Required) Length of isoline in device coordinate space.
                 * @param labelGap  (Required) Length of gap for a label on isoline in device coordinate space.
                 */
                getDesiredLabelCount(modelToDevice: geotoolkit.util.Transformation, modelLimits: geotoolkit.util.Rect, isolineLength: number, labelGap: number): number;
                /**
                 * Gets text style for specified level
                 * @param level  (Required) level index
                 */
                getTextStyle(level: number): geotoolkit.attributes.TextStyle;
                /**
                 * Gets label spacing for specified level
                 * @param level  (Required) level index
                 */
                getLabelSpacing(level: number): number;
                /**
                 * Gets label margin for specified level
                 * @param level  (Required) level index
                 */
                getLabelMargin(level: number): number;
                /**
                 * Gets the flag which indicates if font color is used for label text color.
                 * @param level  (Required) level index
                 */
                getUseFontColorForLabels(level: number): boolean;
                /**
                 * Label Format. Use a standard C# format specifier. Default is "G" (general)
                 * @param level  (Required) level index
                 */
                getLabelFormat(level: number): geotoolkit.util.NumberFormat;
            }
            /**
             * This is an abstract strategy class which defines how contour labels should be rendered.
             */
            class MajorMinorLabelingStrategy extends geotoolkit.contour.strategy.AbstractContourLabelingStrategy {
                /**
                 * This is an abstract strategy class which defines how contour labels should be rendered.
                 */
                constructor();
                /**
                 * Sets show major labels
                 * @param visible  (Required) visible
                 */
                setMajorLabelsVisible(visible: boolean): this;
                /**
                 * Sets show major labels
                 * @param visible  (Required) visible
                 */
                setMinorLabelsVisible(visible: boolean): this;
                /**
                 * Gets show major labels
                 */
                getMajorLabelsVisible(): boolean;
                /**
                 * Gets show minor labels
                 */
                getMinorLabelsVisible(): boolean;
                /**
                 * Sets text style for major isolines
                 * @param style  (Required) style
                 */
                setMajorTextStyle(style: geotoolkit.attributes.TextStyle): this;
                /**
                 * Sets text style for minor isolines
                 * @param style  (Required) style
                 */
                setMinorTextStyle(style: geotoolkit.attributes.TextStyle): this;
                /**
                 * Gets text style for major isolines
                 */
                getMajorTextStyle(): geotoolkit.attributes.TextStyle;
                /**
                 * Gets text style for minor isolines
                 */
                getMinorTextStyle(): geotoolkit.attributes.TextStyle;
                /**
                 * Gets major label format
                 */
                getMajorLabelFormat(): geotoolkit.util.NumberFormat;
                /**
                 * Gets minor label format
                 */
                getMinorLabelFormat(): geotoolkit.util.NumberFormat;
                /**
                 * Sets major label format
                 * @param format  (Required) Object holding the C# format specifier for the isoLine labels
                 */
                setMajorLabelFormat(format: geotoolkit.util.NumberFormat): this;
                /**
                 * Sets minor label format
                 * @param format  (Required) Object holding the C# format specifier for the isoLine labels
                 */
                setMinorLabelFormat(format: geotoolkit.util.NumberFormat): this;
                /**
                 * Gets label margin for major isolines
                 */
                getMajorLabelMargin(): number;
                /**
                 * Sets label margin for major isolines
                 * @param margin  (Required) label margin
                 */
                setMajorLabelMargin(margin: number): this;
                /**
                 * Gets label margin for minor isolines
                 */
                getMinorLabelMargin(): number;
                /**
                 * Sets label margin for minor isolines
                 * @param margin  (Required) label margin
                 */
                setMinorLabelMargin(margin: number): this;
                /**
                 * Gets label spacing for major isolines
                 */
                getMajorLabelSpacing(): number;
                /**
                 * Gets label spacing for minor isolines
                 */
                getMinorLabelSpacing(): number;
                /**
                 * Sets label spacing for major isolines
                 * @param spacing  (Required) label spacing
                 */
                setMajorLabelSpacing(spacing: number): this;
                /**
                 * Sets label spacing for minor isolines
                 * @param spacing  (Required) label spacing
                 */
                setMinorLabelSpacing(spacing: number): this;
                /**
                 * Gets if use font color for major labels
                 */
                getMajorUseFontColorForLabels(): boolean;
                /**
                 * Sets if use font color for major labels
                 * @param use  (Required) use
                 */
                setMajorUseFontColorForLabels(use: boolean): this;
                /**
                 * Gets if use font color for minor labels
                 */
                getMinorUseFontColorForLabels(): boolean;
                /**
                 * Sets if use font color for minor labels
                 * @param use  (Required) use
                 */
                setMinorUseFontColorForLabels(use: boolean): this;
                /**
                 * Gets if level is major
                 * @param i  (Required) level index
                 */
                isMajorLevel(i: number): boolean;
                /**
                 * Gets if level is minor
                 * @param i  (Required) level index
                 */
                isMinorLevel(i: number): boolean;
                /**
                 * Gets step for major labels
                 */
                getMajorStep(): number;
                /**
                 * Gets step for major labels
                 */
                getMinorStep(): number;
                /**
                 * Sets step for major labels
                 * @param step  (Required) step
                 */
                setMajorStep(step: number): this;
                /**
                 * Sets step for minor labels
                 * @param step  (Required) step
                 */
                setMinorStep(step: number): this;
            }
            class MajorMinorIsolineStylingStrategy implements geotoolkit.contour.strategy.IsolineStylingStrategy {
                /**
                 * @param props  (Required) properties
                 * @param props.majorstyle  (Optional) linestyle for major lines
                 * @param props.minorstyle  (Optional) linestyle for minor lines
                 * @param props.majorstep  (Optional) step for major lines
                 * @param props.minorstep  (Optional) step for minor lines
                 */
                constructor(props: any | { majorstyle?: geotoolkit.attributes.LineStyle; minorstyle?: geotoolkit.attributes.LineStyle; majorstep?: number; minorstep?: number; } );
                /**
                 * Gets style for isoline
                 * @param level  (Required) level
                 */
                getIsolineStyle(level: number): geotoolkit.attributes.LineStyle;
                /**
                 * Returns if isoline of specified level should be drawn
                 * @param level  (Required) level
                 */
                getIsolineVisible(level: number): boolean;
                /**
                 * Sets linestyle for major isoline
                 * @param style  (Required) major style
                 */
                setMajorLineStyle(style: geotoolkit.attributes.LineStyle): this;
                /**
                 * Sets linestyle for minor isoline
                 * @param style  (Required) minor style
                 */
                setMinorLineStyle(style: geotoolkit.attributes.LineStyle): this;
                /**
                 * Gets linestyle for major isoline
                 */
                getMajorLineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Gets linestyle for major isoline
                 */
                getMinorLineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Sets show major isolines
                 * @param visible  (Required) visible
                 */
                setMajorIsolinesVisible(visible: boolean): this;
                /**
                 * Sets show minor isolines
                 * @param visible  (Required) visible
                 */
                setMinorIsolinesVisible(visible: boolean): this;
                /**
                 * Gets show major isolines
                 */
                getMajorIsolinesVisible(): boolean;
                /**
                 * Gets show minor isolines
                 */
                getMinorIsolinesVisible(): boolean;
                /**
                 * Gets if level is major
                 * @param i  (Required) level index
                 */
                isMajorLevel(i: number): boolean;
                /**
                 * Gets if level is minor
                 * @param i  (Required) level index
                 */
                isMinorLevel(i: number): boolean;
                /**
                 * Gets major step
                 */
                getMajorStep(): number;
                /**
                 * Gets minor step
                 */
                getMinorStep(): number;
                /**
                 * Sets major step
                 * @param step  (Required) step
                 */
                setMajorStep(step: number): this;
                /**
                 * Sets minor step
                 * @param step  (Required) step
                 */
                setMinorStep(step: number): this;
                /**
                 * Returns if isoline of specified level should be drawn
                 * @param level  (Required) level
                 */
                getIsolineVisible(level: number): boolean;
                /**
                 * Gets style for isoline
                 * @param level  (Required) level
                 */
                getIsolineStyle(level: number): geotoolkit.attributes.LineStyle;
                /**
                 * Returns if isoline of specified level should be drawn
                 * @param level  (Required) level
                 */
                getIsolineVisible(level: number): boolean;
                /**
                 * Gets style for isoline
                 * @param level  (Required) level
                 */
                getIsolineStyle(level: number): geotoolkit.attributes.LineStyle;
            }
            class SingleIsolineStylingStrategy implements geotoolkit.contour.strategy.IsolineStylingStrategy {
                /**
                 * @param singleIsolineLevel  (Required) level index for single isoline
                 * @param singleIsolineStyle  (Optional) linestyle for single line
                 * @param commonIsolineStyle  (Optional) linestyle for common lines
                 */
                constructor(singleIsolineLevel: number, singleIsolineStyle?: geotoolkit.attributes.LineStyle, commonIsolineStyle?: geotoolkit.attributes.LineStyle);
                /**
                 * Gets style for isoline
                 * @param level  (Required) level
                 */
                getIsolineStyle(level: number): geotoolkit.attributes.LineStyle;
                /**
                 * Returns if isoline of specified level should be drawn
                 * @param level  (Required) level
                 */
                getIsolineVisible(level: number): boolean;
                /**
                 * Gets linestyle for single line
                 */
                getSingleIsolineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Gets linestyle for common line
                 */
                getCommonIsolineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Returns if isoline of specified level should be drawn
                 * @param level  (Required) level
                 */
                getIsolineVisible(level: number): boolean;
                /**
                 * Gets style for isoline
                 * @param level  (Required) level
                 */
                getIsolineStyle(level: number): geotoolkit.attributes.LineStyle;
                /**
                 * Returns if isoline of specified level should be drawn
                 * @param level  (Required) level
                 */
                getIsolineVisible(level: number): boolean;
                /**
                 * Gets style for isoline
                 * @param level  (Required) level
                 */
                getIsolineStyle(level: number): geotoolkit.attributes.LineStyle;
            }
            /**
             * Define an interface interface for styling isolines
             */
            interface IsolineStylingStrategy {
                /**
                 * Returns if isoline of specified level should be drawn
                 * @param level  (Required) level
                 */
                getIsolineVisible(level: number): boolean;
                /**
                 * Gets style for isoline
                 * @param level  (Required) level
                 */
                getIsolineStyle(level: number): geotoolkit.attributes.LineStyle;
            }
        }
        module scale {
            /**
             * The ScaleRange class is used to store the range of values represented by a particular contour index.
             *  This is used by ContourScale to return these intervals.
             */
            class ScaleRange {
                /**
                 * The ScaleRange class is used to store the range of values represented by a particular contour index.
                 *  This is used by ContourScale to return these intervals.
                 * @param low  (Required) The minimum of the scale range.
                 * @param high  (Required) The maximum of the scale range.
                 */
                constructor(low: number, high: number);
                /**
                 * The low value of this range
                 */
                getLow(): number;
                /**
                 * The high value of this range
                 */
                getHigh(): number;
            }
            /**
             * An abstract base class for the contour scale.
             *  The contour scale provides the information about sections of an altitude axis.
             */
            class ContourScale {
                /**
                 * An abstract base class for the contour scale.
                 *  The contour scale provides the information about sections of an altitude axis.
                 */
                constructor();
                /**
                 * Gets the total number of intervals within the scale.
                 */
                getCount(): number;
                /**
                 * Returns the full range of values in the contour scale if called with no argument or
                 * returns the range of values represented by the supplied contour index.
                 * @param index  (Required) Optional Parameter. The contour index for which to find the z-value range.
                 */
                getRange(index: number): geotoolkit.contour.scale.ScaleRange;
                /**
                 * Finds the contour index representing the supplied z-value.
                 * @param zValue  (Required) z-value for which contour index has to be found
                 */
                getIndex(zValue: number): number;
            }
            /**
             * Implements the ContourScale interface for a regular contour scale. Ie. all contour values are evenly spaced.
             *  Note: The step and count parameters must be positive or an exception will be thrown.
             */
            class RegularContourScale extends geotoolkit.contour.scale.ContourScale {
                /**
                 * Implements the ContourScale interface for a regular contour scale. Ie. all contour values are evenly spaced.
                 *  Note: The step and count parameters must be positive or an exception will be thrown.
                 * @param zero  (Required) The first (lowest) contour value or alternatively the scaleRange
                 * @param step  (Required) The interval between successive contours or alternatively the number of levels
                 * @param count  (Optional) The total number of contour isolines (intervals = count+1)
                 */
                constructor(zero: number|geotoolkit.contour.scale.ScaleRange, step: number, count?: number);
                /**
                 * Initialise the table of ranges for each index.
                 *  Creates the table of ranges. This table will be
                 *  intensively used by getRange(idx) method.
                 */
                setRangeTable(): any;
                /**
                 * The number of intervals in this scale
                 * (=#values + 1:  intervals to +/- infinity are included
                 */
                getCount(): number;
                /**
                 * Returns the full range of values in the contour scale if called with no argument or
                 * returns the range of values represented by the supplied contour index.
                 * @param index  (Optional) The contour index for which to find the z-value range.
                 */
                getRange(index?: number): geotoolkit.contour.scale.ScaleRange;
                /**
                 * Finds the contour index representing the supplied z-value.
                 * @param zValue  (Required) z-value for which contour index has to be found
                 */
                getIndex(zValue: number): number;
            }
            /**
             * IrregularContourScale implements the ContourScale interface, and stores scale values at arbitrary levels.
             * Compare this to ContourRegularScale where the scale values are spaced at regular intervals.
             * Creates a customised contour scale, using the supplied values.
             */
            class IrregularContourScale extends geotoolkit.contour.scale.ContourScale {
                /**
                 * IrregularContourScale implements the ContourScale interface, and stores scale values at arbitrary levels.
                 * Compare this to ContourRegularScale where the scale values are spaced at regular intervals.
                 * Creates a customised contour scale, using the supplied values.
                 * @param array  (Required) Array of contour values. These can be out of order, but will be sorted into order.
                 */
                constructor(array: any[]|Float32Array|Float64Array);
                /**
                 * Gets the scale array.
                 */
                getArray(): number[];
                /**
                 * Creates the table of ranges from the altitude info.
                 */
                setRangeTable(): any;
                /**
                 * The number of intervals in this scale
                 * (=#values + 1:  intervals to +/- infinity are included
                 */
                getCount(): number;
                /**
                 * Returns the full range of values in the contour scale if called with no argument or
                 * returns the range of values represented by the supplied contour index.
                 * @param index  (Required) Optional Parameter. The contour index for which to find the z-value range.
                 */
                getRange(index: number): geotoolkit.contour.scale.ScaleRange;
                /**
                 * Finds the contour index representing the supplied z-value.
                 * @param zValue  (Required) z-value for which contour index has to be found
                 */
                getIndex(zValue: number): number;
            }
            /**
             * Extends RegularContourScale, adds the ability to show a single additional user specified level
             */
            class ContourRangeScale extends geotoolkit.contour.scale.RegularContourScale {
                /**
                 * Extends RegularContourScale, adds the ability to show a single additional user specified level
                 * @param range  (Required) The data range or another scale.
                 * @param step  (Optional) The data range step.
                 * @param showSingleLevel  (Optional) Whether the single level should be shown.
                 * @param singleLevelValue  (Optional) The value of the single level.
                 */
                constructor(range: geotoolkit.util.Range|geotoolkit.contour.scale.ContourRangeScale, step?: number, showSingleLevel?: boolean, singleLevelValue?: number);
                /**
                 * Gets the step value.
                 */
                getStep(): number;
                /**
                 * Gets the single level value.
                 */
                getSingleLevelValue(): number;
                /**
                 * Gets the single level index.
                 */
                getSingleLevelIndex(): number;
                /**
                 * Gets the flag for the single label visibility
                 */
                getShowSingleLevel(): boolean;
                /**
                 * Gets the flag indicating whether to separate the single level.
                 */
                getSeparateSingleLevel(): boolean;
                /**
                 * Gets the factor which is used to calculate if single level will be separate
                 */
                getSeparateSingleLevelFactor(): number;
                /**
                 * Sets the factor which is used to calculate if single level will be separate
                 * @param factor  (Required) factor
                 */
                setSeparateSingleLevelFactor(factor: number): this;
                /**
                 * Gets the scale array.
                 */
                getArray(): number[];
                /**
                 * Gets the total number of intervals within the scale.
                 */
                getCount(): number;
                /**
                 * Returns the full range of values in the contour scale if called with no argument or
                 * returns the range of values represented by the supplied contour index.
                 * @param index  (Required) Optional Parameter. The contour index for which to find the z-value range.
                 */
                getRange(index: number): geotoolkit.util.Range;
                /**
                 * Finds the contour index representing the supplied z-value.
                 * @param zValue  (Required) z-value for which contour index has to be found
                 */
                getIndex(zValue: number): number;
            }
        }
        module grid {
            /**
             * Stores the x,y grid extents for a <code>ContourGrid</code> object.
             */
            class GridRange {
                /**
                 * Stores the x,y grid extents for a <code>ContourGrid</code> object.
                 * @param left  (Optional) start index for coordinates arrays.
                 * @param bottom  (Optional) start index for coordinates arrays.
                 * @param right  (Optional) start index for coordinates arrays.
                 * @param top  (Optional) start index for coordinates arrays.
                 */
                constructor(left?: number|geotoolkit.contour.grid.GridRange, bottom?: number, right?: number, top?: number);
                /**
                 * The left extent of this grid range
                 */
                getLeft(): number;
                /**
                 * The right extent of this grid range
                 */
                getRight(): number;
                /**
                 * The bottom extent of this grid range
                 */
                getBottom(): number;
                /**
                 * The top extent of this grid range
                 */
                getTop(): number;
                /**
                 * The width of this grid range
                 */
                getWidth(): number;
                /**
                 * The height of this grid range
                 */
                getHeight(): number;
                /**
                 * Sets the range for this grid
                 * @param left  (Required) Left range extent or GridRange
                 * @param bottom  (Required) Bottom range extent
                 * @param right  (Required) Right range extent
                 * @param top  (Required) Top range extent
                 */
                setGridRange(left: number|geotoolkit.contour.grid.GridRange, bottom: number, right: number, top: number): this;
                /**
                 * Checks if the supplied point or range is contained within this one.
                 * @param x  (Required) X-coordinate or gridRange
                 * @param y  (Required) Y-coordinate
                 */
                contains(x: number|geotoolkit.contour.grid.GridRange, y: number): boolean;
                /**
                 * Determines whether this grid range intersects with the supplied grid range.
                 * @param range  (Required) The grid range to check against
                 */
                intersects(range: geotoolkit.contour.grid.GridRange): boolean;
                /**
                 * Computes the intersection between this grid range and the specified grid range.
                 * @param range  (Required) The grid range
                 */
                intersection(range: geotoolkit.contour.grid.GridRange): geotoolkit.contour.grid.GridRange;
                /**
                 * Determines if this range is empty
                 */
                isEmpty(): boolean;
                /**
                 * Resets this grid range to be empty: Sets the size to zero, and the position to (0,0)
                 */
                reset(): any;
                /**
                 * Grid Range as a cgRect object
                 */
                getRect(): geotoolkit.util.Rect;
            }
            /**
             * Base class for a contour grid that has hole values and a grid-to-model transformation.
             */
            class ContourAbstractGrid extends geotoolkit.contour.processor.ContourConstants {
                /**
                 * Base class for a contour grid that has hole values and a grid-to-model transformation.
                 */
                constructor();
                /**
                 * Gets the Grid Range
                 */
                getRange(): geotoolkit.contour.grid.GridRange;
                /**
                 * Sets the Grid Range
                 * @param gridRange  (Required) The grid z-value range.
                 */
                setRange(gridRange: geotoolkit.contour.grid.GridRange): any;
                /**
                 * Gets the grid-to-model transformation
                 */
                getGridToModel(): geotoolkit.util.Transformation;
                /**
                 * Sets the grid-to-model transformation
                 * @param transformation  (Required) Grid-To-Model transformation
                 */
                setGridToModel(transformation: geotoolkit.util.Transformation): any;
                /**
                 * Gets the model limits of the data
                 */
                getModelLimits(): geotoolkit.util.Rect;
                /**
                 * Empties the Grid
                 */
                clearGrid(): any;
                /**
                 * Gets the altitude at the give model point location.
                 * @param modelPoint  (Required) The model point
                 */
                getValueAtModelPoint(modelPoint: geotoolkit.util.Point): number;
                /**
                 * Begins building grid
                 * @param tnet  (Required) Triangular net
                 * @param nPoints  (Required) The number of points.
                 * @param nTriangles  (Required) The number of triangles.
                 */
                startBuild(tnet: geotoolkit.contour.processor.TriangularNet, nPoints: number, nTriangles: number): any;
                /**
                 * Returns grid rebuild state.
                 */
                needRebuild(): boolean;
                /**
                 * Gets the build range
                 * @param netRange  (Required) The range for the net
                 * @param realRange  (Required) The range for the data
                 */
                getBuildRange(netRange: geotoolkit.contour.grid.GridRange, realRange: geotoolkit.contour.grid.GridRange): any;
                /**
                 * Builds triangular net (creates points, edges and triangles).
                 * @param tnet  (Required) The triangular net.
                 * @param scale  (Required) ContourScale scale for data values.
                 * @param modelLimits  (Required) Needed model limits.
                 * @param modelToDevice  (Required) Model to device transformation
                 * @param projection  (Required) The coordinate projection.
                 */
                buildTriangularNet(tnet: geotoolkit.contour.processor.TriangularNet, scale: geotoolkit.contour.scale.ContourScale, modelLimits: geotoolkit.util.Rect, modelToDevice: geotoolkit.util.Transformation, projection: geotoolkit.contour.projections.AbstractProjection): any;
                /**
                 * Converts the value that is not altered when setting to a Float64Array value.
                 * @param value  (Required) The value that will be converted to a safe double.
                 */
                convertToSafeFloat64(value: number): number;
            }
            /**
             * A contour grid is rectangular grid of nodes.
             * Each node contains an altitude value. The dimensional characteristics of contour grid
             * are described with the help of <CODE>{@link geotoolkit.contour.grid.GridRange}</CODE> class.
             * 
             * The grid coordinate system is orthogonal. The node indices may be only non-negative
             * (starting from 0). You may think about grid data as of two-dimensional array.
             */
            class ContourRectangularGrid extends geotoolkit.contour.grid.ContourAbstractGrid {
                /**
                 * A contour grid is rectangular grid of nodes.
                 * Each node contains an altitude value. The dimensional characteristics of contour grid
                 * are described with the help of <CODE>{@link geotoolkit.contour.grid.GridRange}</CODE> class.
                 * 
                 * The grid coordinate system is orthogonal. The node indices may be only non-negative
                 * (starting from 0). You may think about grid data as of two-dimensional array.
                 * @param gridRange  (Optional) The range of the specified grid range
                 * @param data  (Optional) The data array
                 */
                constructor(gridRange?: geotoolkit.contour.grid.GridRange, data?: Float64Array);
                /**
                 * Gets the model limits of the data
                 */
                getModelLimits(): geotoolkit.util.Rect;
                /**
                 * Sets the data using algorithms that depend on the number of parameters
                 * @param x  (Required) x-index, data array, or grid range
                 * @param y  (Required) y-index, or data array
                 * @param value  (Required) The value
                 */
                setData(x: number|Float64Array|geotoolkit.contour.grid.GridRange, y: number|Float64Array, value: number): this;
                /**
                 * Sets the grid data using specified data array. It is assumed that
                 * the size of data array matches to dimensions of the current grid range.
                 * @param data  (Required) The data array
                 */
                setDataWithArray(data: Float64Array): this;
                /**
                 * Sets the grid range and grid data using specified parameters.
                 * It is assumed that the dimensions of new grid range match to
                 * the size of data array.
                 * @param range  (Required) The new grid range
                 * @param data  (Required) The data array
                 */
                setDataWithRangeAndArray(range: geotoolkit.contour.grid.GridRange, data: Float64Array): this;
                /**
                 * Returns the grid data value by its coordinates in grid
                 * coordinate system.
                 * @param x  (Required) The x-coordinate
                 * @param y  (Required) The x-coordinate
                 */
                getValue(x: number, y: number): any;
                /**
                 * Sets the grid data value by its coordinates in grid coordinate system.
                 * @param x  (Required) The x-coordinate
                 * @param y  (Required) The y-coordinate
                 * @param value  (Required) The new value
                 */
                setValue(x: number, y: number, value: number): this;
                /**
                 * Determines whether the grid node with specified coordinates
                 * doesn't have an altitude value (is a hole)
                 * @param x  (Required) The x-coordinate
                 * @param y  (Required) The y-coordinate
                 */
                isHole(x: number, y: number): boolean;
                /**
                 * Tests if argument is hole value
                 * @param value  (Required) The value to be tested
                 */
                isHoleValue(value: number): boolean;
                /**
                 * Adds a value that will serve as an indicator for a hole in data grid.
                 * It is assumed that grid data may have more then one hole value.
                 * @param holeValue  (Required) The hole value
                 */
                addHoleValue(holeValue: number): any;
                /**
                 * Empties the Grid
                 */
                clearGrid(): any;
                /**
                 * Gets the altitude at the give model point location.
                 * @param modelPoint  (Required) The model point
                 */
                getValueAtModelPoint(modelPoint: geotoolkit.util.Point): number;
                /**
                 * Gets the maximum value in the contour grid.
                 * If the max value has not been set this method
                 * will scan whole grid to find maximum altitude
                 * value (but only once, then it will remember it).
                 */
                getMaxValue(): number;
                /**
                 * Sets the maximum value in the contour grid
                 * @param value  (Required) The new maximum value
                 */
                setMaxValue(value: number): this;
                /**
                 * Gets the minimum value in the contour grid.
                 * If the min value has not been set this method
                 * will scan whole grid to find minimal altitude
                 * value (but only once, then it will remember it).
                 */
                getMinValue(): number;
                /**
                 * Sets the minimum value in the contour grid
                 * @param value  (Required) The new minimum value
                 */
                setMinValue(value: number): this;
                /**
                 * Gets the border bits
                 */
                getBorders(): number;
                /**
                 * Sets the border bits
                 * @param value  (Required) The border bits
                 */
                setBorders(value: number): this;
                /**
                 * Gets the Grid Range for contour grid.
                 */
                getRange(): geotoolkit.contour.grid.GridRange|any;
                /**
                 * Sets the Grid Range for contour grid.
                 * @param gridRange  (Required) The grid z-value range.
                 */
                setRange(gridRange: geotoolkit.contour.grid.GridRange): any;
                /**
                 * Returns grid rebuild state.
                 */
                needRebuild(): boolean;
                /**
                 * Builds triangular net (creates points, edges and triangles).
                 * @param tnet  (Required) The triangular net
                 * @param scale  (Required) The scale
                 * @param modelLimits  (Required) The model limits
                 * @param modelToDevice  (Required) The model to device transformation
                 * @param projection  (Required) The coordinate projection
                 */
                buildTriangularNet(tnet: geotoolkit.contour.processor.TriangularNet, scale: geotoolkit.contour.scale.ContourScale, modelLimits: geotoolkit.util.Rect, modelToDevice: geotoolkit.util.Transformation, projection: geotoolkit.contour.projections.AbstractProjection): any;
                /**
                 * Gets the build range
                 * @param netRange  (Required) The range for the net
                 * @param realRange  (Required) The range for the data
                 */
                getBuildRange(netRange: geotoolkit.contour.grid.GridRange, realRange: geotoolkit.contour.grid.GridRange): any;
                /**
                 * Converts the model point to grid coordinates
                 * @param modelPoint  (Required) The model point
                 */
                getGridPointFromModelPoint(modelPoint: geotoolkit.util.Point): geotoolkit.util.Point;
                /**
                 * Gets the grid-to-model transformation
                 */
                getGridToModel(): geotoolkit.util.Transformation;
                /**
                 * Sets the grid-to-model transformation
                 * @param transformation  (Required) Grid-To-Model transformation
                 */
                setGridToModel(transformation: geotoolkit.util.Transformation): any;
                /**
                 * Updates the data array with new data
                 * @param data  (Required) The new data
                 */
                updateDataArray(data: Float64Array): any;
            }
            /**
             * Contour grid built on a set of triangles.
             */
            class ContourTriangularGrid extends geotoolkit.contour.grid.ContourAbstractGrid {
                /**
                 * Contour grid built on a set of triangles.
                 */
                constructor();
                /**
                 * Adds a value that will serve as an indicator for a hole in data grid.
                 * It is assumed that grid data may have more then one hole value.
                 * @param holeValue  (Required) The hole value
                 */
                addHoleValue(holeValue: number): any;
                /**
                 * Removes all grid data
                 */
                clear(): any;
                /**
                 * Clears grid data
                 */
                clearGrid(): any;
                /**
                 * Sets data for grid. This is the more complicated method of two setTriangles
                 * but is faster and has more advanced border visualization handling.
                 * @param pointsX  (Required) array of x-coordinates for points.
                 * @param pointsY  (Required) array of y-coordinates for points.
                 * @param pointsZ  (Required) array of altitude values for points.
                 * @param nPoints  (Required) The number of points.
                 * @param edgesPoint1  (Required) Array of first point index for edges.
                 * @param edgesPoint2  (Required) Array of second point index for edges.
                 * @param nEdges  (Required) The number of edges.
                 * @param trianglesEdgeAB  (Required) Array of first edge index for triangles.
                 * @param trianglesEdgeBC  (Required) Array of second edge index for triangles.
                 * @param trianglesEdgeCA  (Required) Array of third edge index for triangles.
                 * @param nTriangles  (Required) The number of triangles.
                 * @param defaultBorder  (Required) The default border.
                 * @param borderEdges  (Required) The border edges (can be null).
                 * @param nBorderEdges  (Required) The number of border edges.
                 */
                setTrianglesAdvanced(pointsX: Float64Array, pointsY: Float64Array, pointsZ: Float64Array, nPoints: number, edgesPoint1: Int32Array, edgesPoint2: Int32Array, nEdges: number, trianglesEdgeAB: Int32Array, trianglesEdgeBC: Int32Array, trianglesEdgeCA: Int32Array, nTriangles: number, defaultBorder: boolean, borderEdges: Int32Array, nBorderEdges: number): this;
                /**
                 * Sets data for grid.
                 * @param pointsX  (Required) array of x-coordinates for points.
                 * @param pointsY  (Required) array of y-coordinates for points.
                 * @param pointsZ  (Required) array of altitude values for points.
                 * @param nPoints  (Required) The number of points.
                 * @param trianglesPointsA  (Required) Array of first point index for triangles.
                 * @param trianglesPointsB  (Required) Array of second point index for triangles.
                 * @param trianglesPointsC  (Required) Array of third point index for triangles.
                 * @param nTriangles  (Required) The number of triangles.
                 * @param defaultBorder  (Required) if <CODE>true</CODE>, all edges that belong to
only one triangle are included into contour border for visualization
                 */
                setTrianglesSimple(pointsX: Float64Array, pointsY: Float64Array, pointsZ: Float64Array, nPoints: number, trianglesPointsA: Int32Array, trianglesPointsB: Int32Array, trianglesPointsC: Int32Array, nTriangles: number, defaultBorder: boolean): this;
                /**
                 * Gets the number of points
                 */
                getNumberPoints(): number;
                /**
                 * Value current altitude values for point
                 * @param indexPoint  (Required) The number value point
                 */
                getPointValue(indexPoint: number): number;
                /**
                 * Sets the maximum value in the contour grid
                 * @param value  (Required) The new maximum value
                 */
                setMaxValue(value: number): this;
                /**
                 * Gets the maximum value in the contour grid.
                 * If the max value has not been set this method
                 * will scan whole grid to find maximum altitude
                 * value (but only once, then it will remember it).
                 */
                getMaxValue(): number;
                /**
                 * Sets the minimum value in the contour grid
                 * @param value  (Required) The new maximum value
                 */
                setMinValue(value: number): this;
                /**
                 * Gets the minimum value in the contour grid.
                 * If the max value has not been set this method
                 * will scan whole grid to find maximum altitude
                 * value (but only once, then it will remember it).
                 */
                getMinValue(): number;
                /**
                 * Get grid to model mapping transformation for triangle grid data.
                 */
                getTriangleGrid2ModelTransformation(): geotoolkit.util.Transformation;
                /**
                 * Gets the model limits of the data
                 */
                getModelLimits(): geotoolkit.util.Rect;
                /**
                 * Gets the altitude at the give model point location.
                 * @param modelPoint  (Required) The model point
                 */
                getValueAtModelPoint(modelPoint: geotoolkit.util.Point): number;
                /**
                 * Gets the Grid Range (Reserved. Always returns SetGridRange(0,0,0,0))
                 */
                getRange(): geotoolkit.contour.grid.GridRange;
                /**
                 * Sets the Grid Range (Reserved. Always sets SetGridRange(0,0,0,0))
                 * @param gridRange  (Required) The grid z-value range.
                 */
                setRange(gridRange: geotoolkit.contour.grid.GridRange): any;
                /**
                 * This property gets the duplicates removal mode for the triangular grid.
                 * If set to TRUE, then the system will attempt to fix errors in input data.
                 * This feature is enabled by default.
                 */
                getRemoveDuplicatePoints(): boolean;
                /**
                 * This property enables/disables duplicates removal from triangular grid.
                 * If set to TRUE, then the system will attempt to fix errors in input data.
                 * This feature is enabled by default.
                 * @param removeDuplicatePoints  (Required) If True duplicates will be removed.
                 */
                setRemoveDuplicatePoints(removeDuplicatePoints: boolean): this;
                /**
                 * Builds triangular net (creates points, edges and triangles).
                 * @param tnet  (Required) The triangular net
                 * @param scale  (Required) The scale
                 * @param modelLimits  (Required) The model limits
                 * @param modelToDevice  (Required) The model to device transformation
                 * @param projection  (Required) The coordinate projection
                 */
                buildTriangularNet(tnet: geotoolkit.contour.processor.TriangularNet, scale: geotoolkit.contour.scale.ContourScale, modelLimits: geotoolkit.util.Rect, modelToDevice: geotoolkit.util.Transformation, projection: geotoolkit.contour.projections.AbstractProjection): any;
                /**
                 * Returns grid rebuild state.
                 */
                needRebuild(): boolean;
                /**
                 * Gets the build range
                 * @param netRange  (Required) The range for the net
                 * @param realRange  (Required) The range for the data
                 */
                getBuildRange(netRange: geotoolkit.contour.grid.GridRange, realRange: geotoolkit.contour.grid.GridRange): any;
                /**
                 * Gets the X points.
                 */
                getPointsX(): Float64Array;
                /**
                 * Gets the Y points.
                 */
                getPointsY(): Float64Array;
                /**
                 * Gets the Z points.
                 */
                getPointsZ(): Float64Array;
            }
        }
        module visuals {
            /**
             * This class stores the colorMap table for the Visuals (AbstractVisual and its derivatives).
             */
            class VisualColorMap {
                /**
                 * This class stores the colorMap table for the Visuals (AbstractVisual and its derivatives).
                 * @param colors  (Required) The colorMap
                 * @param visual  (Required) The associated visual.
                 */
                constructor(colors: geotoolkit.contour.visuals.VisualColorMap|geotoolkit.contour.visuals.AbstractVisual|string[], visual: geotoolkit.contour.visuals.AbstractVisual);
                /**
                 * Gets the colorMap as an array of color strings.
                 */
                getColors(): string[];
                /**
                 * Sets the colorMap colors.
                 * @param colors  (Required) The colorMap colors in string format.
                 */
                setColors(colors: string[]): this;
                /**
                 * Gets the size of the colorMap.
                 */
                getSize(): number;
                /**
                 * Returns the Color for the supplied index.
                 * @param index  (Required) Index for the requested color.
                 */
                getColorFor(index: number): string;
                /**
                 * Sets the Color object for the supplied colorMap index.
                 * This is required for the Editor dialog boxes, and is not used by any of the visuals
                 * to modify a supplied colorMap.
                 * @param index  (Required) Index into the colorMap.
                 * @param color  (Required) The new color for this index.
                 */
                setColorFor(index: number, color: string): this;
                /**
                 * Make and return a deep copy of this colorMap
                 */
                clone(): geotoolkit.contour.visuals.VisualColorMap;
                /**
                 * Rotates colors in the colorMap, in a positive direction.
                 * Ie. index 0 -> index (delta). Can also handle negative delta values
                 * @param nStart  (Required) Start of range to rotate.
                 * @param nEnd  (Required) End (inclusive) of range to rotate.
                 * @param delta  (Required) The rotation value.
                 */
                rotate(nStart: number, nEnd: number, delta: number): any;
                /**
                 * Delete the colors in the range nStart->nEnd inclusive.
                 * Not used by any of the Visuals classes - only used by the Editor classes.
                 * @param start  (Required) Start of range to delete
                 * @param end  (Required) End of range to delete
                 */
                deleteColors(start: number, end: number): any;
                /**
                 * Insert a new colour into the colorMap.
                 * Not used by any of the Visuals classes - only used by the Editor classes.
                 * Set nStart to Size to insert at the end of the colorMap
                 * @param nStart  (Required) Index to insert new colour at. The colour at this index will be copied.
                 */
                insertColor(nStart: number): any;
                /**
                 * Interpolate colors in the colorMap.
                 * Not used by any of the Visuals classes - only used by the Editor classes.
                 * @param nStart  (Required) Start of range to interpolate (this color stays the same)
                 * @param nEnd  (Required) End of range to delete (this color stays the same)
                 */
                interpolate(nStart: number, nEnd: number): any;
            }
            /**
             * An abstract contour visual. All visuals are then derived from this abstract class.
             *  By default visible property to true and notify property is false.
             */
            class AbstractVisual extends geotoolkit.scene.shapes.Shape {
                /**
                 * An abstract contour visual. All visuals are then derived from this abstract class.
                 *  By default visible property to true and notify property is false.
                 */
                constructor();
                /**
                 * The BehaviorType enumeration is used to describe how contour values are mapped to the colorMap,
                 * via the ColorBehavior property. (Default is SIMPLE.)
                 */
                static BehaviorType: any;
                /**
                 * Gets the notification state of this visual
                 */
                getNotify(): boolean;
                /**
                 * Sets the notification state of this visual
                 * @param notify  (Required) If this is true, updates will be broadcast to the listeners.
                 */
                setNotify(notify: boolean): any;
                /**
                 * Gets the visual colorMap.
                 */
                getColorMap(): geotoolkit.contour.visuals.VisualColorMap;
                /**
                 * Sets the visual colorMap
                 * @param colorMap  (Required) The colorMap used by this visual
                 */
                setColorMap(colorMap: geotoolkit.contour.visuals.VisualColorMap): this;
                /**
                 * Gets the color behavior for this visual.
                 */
                getColorBehavior(): geotoolkit.contour.visuals.AbstractVisual.BehaviorType;
                /**
                 * Sets the color behavior for this visual.
                 * @param colorBehavior  (Required) The color behavior type.
                 */
                setColorBehavior(colorBehavior: geotoolkit.contour.visuals.AbstractVisual.BehaviorType): this;
                /**
                 * Registers the specified visual listener to receiving events from this visual.
                 * @param visualListener  (Required) The visual listener
                 */
                addVisualListener(visualListener: geotoolkit.contour.shapes.ContourShape): any;
                /**
                 * Unregisters the specified visual listener from receiving event from this visual.
                 * @param visualListener  (Required) The visual listener
                 */
                removeVisualListener(visualListener: geotoolkit.contour.shapes.ContourShape): any;
                /**
                 * Notifies the registered listeners of an event.
                 * @param args  (Required) The event to pass to the listeners.
                 */
                notifyListeners(args: geotoolkit.contour.events.VisualEvent): any;
                /**
                 * Invalidates the visual, sending events (if notify flag is set)
                 */
                invalidateVisual(): any;
                /**
                 * Render the visual. This must be defined in all sub-classes.
                 * @param renderingContext  (Required) The rendering context.
                 */
                render(renderingContext: geotoolkit.renderer.RenderingContext): any;
                /**
                 * This method is invoked when the contour shape has been invalidated.
                 * Nothing is performed for this class, but it must be overridden
                 * in subclasses for correct event processing.
                 * This is actually defined abstract in cgVisualListener, and is passed on for definition in the subclass.
                 * @param args  (Required) The contour event
                 */
                contourInvalidated(args: geotoolkit.contour.events.ContourEvent): any;
                /**
                 * Choose a color for the supplied contour value, using the current _color_behavior.
                 * @param index  (Required) The contour index.
                 * @param len  (Required) Size of the contour indexes. Ie. how many are there?
Indexes are zero-referenced, so the highest possible index = len-1.
                 */
                chooseColor(index: number, len: number): string;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 */
                setProperties(properties: any): this;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): {properties:{colorbehavior:geotoolkit.contour.visuals.AbstractVisual.BehaviorType;colormap:geotoolkit.contour.visuals.VisualColorMap}}|any;
            }
            /**
             * The Border Visual. Draws the borders of contour
             * (parts of contour that are bounded by area border, holes and faults).
             */
            class ContourBorderVisual extends geotoolkit.contour.visuals.AbstractVisual {
                /**
                 * The Border Visual. Draws the borders of contour
                 * (parts of contour that are bounded by area border, holes and faults).
                 */
                constructor();
                /**
                 * Gets line attribute
                 */
                getLineAttribute(): geotoolkit.attributes.LineStyle;
                /**
                 * Sets line attribute
                 * @param lineStyle  (Required) attribute
                 */
                setLineAttribute(lineStyle: geotoolkit.attributes.LineStyle): this;
                /**
                 * Render the border visual.
                 * @param renderingContext  (Required) The rendering context.
                 */
                render(renderingContext: geotoolkit.renderer.RenderingContext): any;
                /**
                 * This method is invoked when the contour shape has been invalidated
                 * (eg. the contour scale or data processor have changed)
                 * @param args  (Required) The event causing the invalidation.
                 */
                contourInvalidated(args: geotoolkit.contour.events.ContourEvent): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 */
                setProperties(properties: any): this;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
            }
            /**
             * The Contour Fault Visual. This renders the polylines that represent faults.
             */
            class ContourFaultVisual extends geotoolkit.contour.visuals.AbstractVisual {
                /**
                 * The Contour Fault Visual. This renders the polylines that represent faults.
                 */
                constructor();
                /**
                 * Open fault lines.
                 */
                static OPEN_FAULTS: number;
                /**
                 * Closed fault lines.
                 */
                static CLOSED_FAULTS: number;
                /**
                 * Gets the fault visual style.
                 * By default it is combination of OPEN_FAULTS and CLOSED_FAULTS.
                 */
                getStyle(): number;
                /**
                 * Sets the fault visual style.
                 * @param style  (Required) The fault visual style
                 */
                setStyle(style: number): this;
                /**
                 * Gets the current LineStyle used to draw the open fault lines of this fault visual.
                 */
                getOpenLineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Sets the current LineStyle used to draw the open fault lines of this fault visual.
                 * @param attribute  (Required) The open fault line style.
                 */
                setOpenLineStyle(attribute: geotoolkit.attributes.LineStyle): this;
                /**
                 * Gets the current LineStyle used to draw the closed fault lines of this fault visual.
                 */
                getClosedLineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Sets the current LineStyle used to draw the closed fault lines of this fault visual.
                 * @param attribute  (Required) The closed fault line style.
                 */
                setClosedLineStyle(attribute: geotoolkit.attributes.LineStyle): this;
                /**
                 * Renders the fault visual.
                 * @param renderingContext  (Required) The rendering context.
                 */
                render(renderingContext: geotoolkit.renderer.RenderingContext): any;
                /**
                 * This method is invoked when the contour shape has been invalidated
                 * (eg. the contour scale or data processor have changed)
                 * @param args  (Required) The contour event
                 */
                contourInvalidated(args: geotoolkit.contour.events.ContourEvent): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 */
                setProperties(properties: any): this;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
            }
            /**
             * The Line Visual. This renders the isolines and their labels.
             * Constructor. Initialises to: VISIBLE_LINES | VISIBLE_LABELS, index step = 1, and
             * label format: no fractional digits, and no grouping.
             */
            class ContourLineVisual extends geotoolkit.contour.visuals.AbstractVisual {
                /**
                 * The Line Visual. This renders the isolines and their labels.
                 * Constructor. Initialises to: VISIBLE_LINES | VISIBLE_LABELS, index step = 1, and
                 * label format: no fractional digits, and no grouping.
                 */
                constructor();
                /**
                 * Sets the visibility for all isolines
                 * @param visible  (Required) Flag for determining if isolines should be visible.
                 */
                setLinesVisible(visible: boolean): this;
                /**
                 * Gets the visibility of all isolines
                 */
                getLinesVisible(): boolean;
                /**
                 * Sets the visibility for all isolines
                 * @param visible  (Required) Flag for determining if labels should be visible.
                 */
                setLabelsVisible(visible: boolean): this;
                /**
                 * Gets the visibility of all isolines
                 */
                getLabelsVisible(): boolean;
                /**
                 * Gets the index step for the line visual. Only contour lines with (index = step * i) will be displayed.
                 * Where 'i' iterates through all available line indices.
                 */
                getIndexStep(): number;
                /**
                 * Sets the index step for the line visual. Only contour lines with (index = step * i) will be displayed.
                 * Where 'i' iterates through all available line indices.
                 * @param step  (Required) Integer step interval
                 */
                setIndexStep(step: number): this;
                /**
                 * Gets the label spacing. This is the space between nearby labels on an isoLine.
                 * Distance is specified in device space. Default is 200.
                 */
                getLabelSpacing(): number;
                /**
                 * Sets the label spacing. This is the space between nearby labels on an isoLine.
                 * Distance is specified in device space. Default is 200.
                 * @param spacing  (Required) The label spacing.
                 */
                setLabelSpacing(spacing: number): this;
                /**
                 * Gets the label margin. The margin is specified in device coordinates. Default is 5.
                 */
                getLabelMargin(): number;
                /**
                 * Sets the label margin. The margin is specified in device coordinates. Default is 5.
                 * @param margin  (Required) The margin around labels in device coordinates.
                 */
                setLabelMargin(margin: number): this;
                /**
                 * Label Format. Use a standard C# format specifier. Default is "G" (general)
                 */
                getLabelFormat(): geotoolkit.util.NumberFormat;
                /**
                 * Label Format. Use a standard C# format specifier. Default is "G" (general)
                 * @param format  (Required) Object holding the C# format specifier for the isoLine labels.
                 */
                setLabelFormat(format: geotoolkit.util.NumberFormat): any;
                /**
                 * Gets the current LineStyle that is used to draw the isolines of this
                 * line visual. The "line color" property of the attribute is ignored because it
                 * is set directly from the colorMap. Ie. set such properties as "line style",
                 * and they will be applied globally to all isolines in this visual, regardless of color.
                 */
                getLineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Sets the current LineStyle that is used to draw the isolines of this
                 * line visual. The "line color" property of the attribute is ignored because it
                 * is set directly from the colorMap. Ie. set such properties as "line style",
                 * and they will be applied globally to all isolines in this visual, regardless of color.
                 * @param lineStyle  (Required) The line style.
                 */
                setLineStyle(lineStyle: geotoolkit.attributes.LineStyle): this;
                /**
                 * Reset label grid mapping. The grid mapping is used for mapping triangle grid to model space.
                 */
                resetLabelGridMapping(): any;
                /**
                 * Gets the current text style attribute that is used to draw the labels for this
                 * line visual. The "line color" property of the attribute is ignored because it
                 * is set directly from the colormap. Ie. set such properties as "font style",
                 * and they will be applied globally to all isolines in this visual, regardless of color.
                 */
                getTextStyle(): geotoolkit.attributes.TextStyle;
                /**
                 * Sets the current text style attributes that is used to draw the labels for this line visual.
                 * @param textStyle  (Required) The text style.
                 */
                setTextStyle(textStyle: geotoolkit.attributes.TextStyle): this;
                /**
                 * Sets the flag which indicates if font color should be used for label text color.
                 * @param useFontColor  (Required) Flag which indicates if font color should be used for label text color.
                 */
                setUseFontColorForLabels(useFontColor: boolean): this;
                /**
                 * Gets the flag which indicates if font color is used for label text color.
                 */
                getUseFontColorForLabels(): boolean;
                /**
                 * Gets the labeling strategy.
                 */
                getLabelingStrategy(): geotoolkit.contour.strategy.AbstractContourLabelingStrategy;
                /**
                 * Sets the labeling strategy.
                 * @param strategy  (Required) The labeling strategy.
                 */
                setLabelingStrategy(strategy: geotoolkit.contour.strategy.AbstractContourLabelingStrategy): this;
                /**
                 * Sets the isolines styling strategy. If set, style set in setLineStyle will be ignored. The "line color" property of the styles will overrides colorMap.
                 * @param strategy  (Required) strategy
                 */
                setIsolinesStylingStrategy(strategy: geotoolkit.contour.strategy.IsolineStylingStrategy): this;
                /**
                 * Gets the isolines styling strategy
                 */
                getIsolinesStylingStrategy(): geotoolkit.contour.strategy.IsolineStylingStrategy;
                /**
                 * Adds extra points to the specified isoLine or isoFill to smooth it using splines.
                 * @param modelToDevice  (Required) Model to device transformation.
                 * @param modelLimits  (Required) Area in model coordinates to be rendered.
                 * @param startIndex  (Required) Index of the point in the input points array where smoothing should start.
                 * @param endIndex  (Required) Index of the point in the input points array where smoothing should stop.
                 * @param size  (Required) Number of points in the input points array.
                 * @param x  (Required) Array coordinates X of points to be smoothed.
                 * @param y  (Required) Array coordinates Y of points to be smoothed.
                 * @param tags  (Required) Tags of points in the input points array if the array is a bezier shape
                         or NULL if the array is not a bezier shape.
                 * @param tolerancesArray  (Required) point tolerance data (used to decide if smoothing should be done
                 * @param savedIndex  (Required) Index of some arbitrary point from the input points array.
                          When the function returns this parameter will contain index of that point in the smoothed array.
                 * @param smoothedX  (Required) Array coordinates X of points where smoothed points will be added.
                 * @param smoothedY  (Required) Array coordinates Y of points where smoothed points will be added.
                 */
                static smoothPoly(modelToDevice: geotoolkit.util.Transformation, modelLimits: geotoolkit.util.Rect, startIndex: number, endIndex: number, size: number, x: Float64Array, y: Float64Array, tags: Int32Array, tolerancesArray: Float64Array, savedIndex: number, smoothedX: geotoolkit.contour.util.DoubleVector, smoothedY: geotoolkit.contour.util.DoubleVector): number;
                /**
                 * Returns angle in degrees formed by p1-p0 when converted to device space.
                 * @param p0  (Required) First point in model space.
                 * @param p1  (Required) Second point in model space.
                 * @param modelToDevice  (Required) Model to device transformation.
                 * @param sign  (Required) The sign of the angle.
                 */
                static getAngle(p0: geotoolkit.util.Point, p1: geotoolkit.util.Point, modelToDevice: geotoolkit.util.Transformation, sign: number): number;
                /**
                 * Use this property to set the local reference to the line reservation array.
                 * This array is actually stored in the contour shape, and is passed to each line visual.
                 * All the elements of the array
                 * 'reservation[lineIndex] = Math.Max( reservation[lineIndex], GetIndexStep() )'
                 * Later, the implementation of the line visual may decide if
                 * the isoline with some particular index should be drawn using
                 * 'GetLineReservationFor' and 'GetIndexStep'
                 * methods. Hence, major and minor isolines can be supported.
                 * @param lineReservation  (Required) The line reservation
                 */
                setLineReservation(lineReservation: Int32Array): this;
                /**
                 * Find the line reservation value for the isoline with the specified index.
                 * This is used to determine if a a particular isoline should be drawn.
                 * @param index  (Required) Index for which line reservation should be computed.
                 */
                getLineReservationFor(index: number): number;
                /**
                 * Renders the line visual.
                 * @param renderingContext  (Required) The rendering context.
                 */
                render(renderingContext: geotoolkit.renderer.RenderingContext): any;
                /**
                 * This method is invoked when the contour shape has been invalidated
                 * (eg. the contour scale or data processor have changed)
                 * @param args  (Required) The event which has caused the shape to be invalidated.
                 */
                contourInvalidated(args: geotoolkit.contour.events.ContourEvent): any;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 */
                setProperties(properties: any): this;
            }
            /**
             * Contour visual class which renders the contour fills. Ie. the fill regions between the contour isolines.
             */
            class ContourFillVisual extends geotoolkit.contour.visuals.AbstractVisual {
                /**
                 * Contour visual class which renders the contour fills. Ie. the fill regions between the contour isolines.
                 */
                constructor();
                /**
                 * Should the holes be transparent? If not, they will be drawn as opaque squares. Default is Transparent = ON.
                 */
                getTransparentHoles(): boolean;
                /**
                 * Should the holes be transparent? If not, they will be drawn as opaque squares. Default is Transparent = ON.
                 * @param transparentHoles  (Required) The flag indicating whether hole transparency is true.
                 */
                setTransparentHoles(transparentHoles: boolean): this;
                /**
                 * Which color should be used to draw the opaque holes? This is not used if holes are transparent. The default is 'white'.
                 */
                getHoleColor(): string;
                /**
                 * Which color should be used to draw the opaque holes? This is not used if holes are transparent. The default is 'white'.
                 * @param holeColor  (Required) The color that will be used when rendering opaque holes.
                 */
                setHoleColor(holeColor: string): this;
                /**
                 * Renders the fill visual.
                 * @param renderingContext  (Required) The rendering context.
                 */
                render(renderingContext: geotoolkit.renderer.RenderingContext): any;
                /**
                 * This method is invoked when the contour shape has been invalidated
                 * @param args  (Required) The event which has caused the shape to be invalidated.
                 */
                contourInvalidated(args: geotoolkit.contour.events.ContourEvent): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 */
                setProperties(properties: any): this;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
            }
            /**
             * A factory to create instances of contour visuals.
             * This class utilises the singleton pattern to build the factory itself.
             */
            class VisualsFactory {
                /**
                 * A factory to create instances of contour visuals.
                 * This class utilises the singleton pattern to build the factory itself.
                 */
                constructor();
                /**
                 * Returns the singleton factory instance.
                 */
                static getInstance(): geotoolkit.contour.visuals.VisualsFactory;
                /**
                 * Creates a new fill visual
                 */
                createFillVisual(): geotoolkit.contour.visuals.ContourFillVisual;
                /**
                 * Creates a new line visual
                 */
                createLineVisual(): geotoolkit.contour.visuals.ContourLineVisual;
                /**
                 * Creates a new fault visual
                 */
                createFaultVisual(): geotoolkit.contour.visuals.ContourFaultVisual;
                /**
                 * Creates a new border visual.
                 */
                createBorderVisual(): geotoolkit.contour.visuals.ContourBorderVisual;
                /**
                 * Creates a new net visual.
                 */
                createNetVisual(): geotoolkit.contour.visuals.AbstractVisual;
            }
            module AbstractVisual {
                /**
                 * The BehaviorType enumeration is used to describe how contour values are mapped to the colorMap,
                 * via the ColorBehavior property. (Default is SIMPLE.)
                 */
                interface BehaviorType {
                    /**
                     * This maps contours to colors on a one-to-one basis with Contour #0 colored with the
                     * first color in the colorMap. Any contours above the highest colorMap entry are colored
                     * with this highest colorMap entry.
                     */
                    SIMPLE: number;
                    /**
                     * Colors wrap around for higher contour values. Ie. color = contour MODULO #Colors
                     */
                    WRAP: number;
                    /**
                     * Colors are stretched to cover the full range of contour values. Ie. Contour 0 maps to color 0;
                     * and Contour (#Contours-1) maps to Color (#Colors-1).
                     */
                    STRETCH: number;
                }
            }
        }
        module datasource {
            /**
             * The base class for all the iterators that are used by contour
             */
            class AbstractIterator {
                /**
                 * The base class for all the iterators that are used by contour
                 */
                constructor();
                /**
                 * Gets the current enumerated item
                 */
                getCurrent(): any;
                /**
                 * Moves the iterator to the next item
                 */
                moveNext(): boolean;
                /**
                 * Resets the iterator to the first item.
                 */
                reset(): any;
            }
            /**
             * Abstract datasource that supplies data for contour.
             * Data are supplied as a set of grids. Contour building
             * algorithm calls 'Query' method to get the enumerator
             * that enumerates set of grids appropriate for given model
             * rectangle and model-to-device transformation.
             * Contour building algorithm calls 'LoadGrid' on enumerator
             * to load grid into memory and get access to its data.
             */
            class AbstractContourDataSource {
                /**
                 * Abstract datasource that supplies data for contour.
                 * Data are supplied as a set of grids. Contour building
                 * algorithm calls 'Query' method to get the enumerator
                 * that enumerates set of grids appropriate for given model
                 * rectangle and model-to-device transformation.
                 * Contour building algorithm calls 'LoadGrid' on enumerator
                 * to load grid into memory and get access to its data.
                 */
                constructor();
                /**
                 * Gets the model limits of contour data.
                 */
                getModelLimits(): geotoolkit.util.Rect;
                /**
                 * Gets the enumerator that enumerates set of appropriate grids.
                 * @param modelRect  (Required) The model rectangle.
                 * @param modelToDevice  (Required) model-to-device transformation.
                 */
                query(modelRect: geotoolkit.util.Rect, modelToDevice: geotoolkit.util.Transformation): geotoolkit.contour.datasource.AbstractIterator;
                /**
                 * Loads grid into memory.
                 * @param Enumerator  (Required) iterator state identifies grid within grid set.
                 */
                loadGrid(Enumerator: geotoolkit.contour.datasource.AbstractIterator): geotoolkit.contour.grid.ContourAbstractGrid;
                /**
                 * Release memory occupied by the grid.
                 * @param grid  (Required) The grid that contains points.
                 */
                freeGrid(grid: geotoolkit.contour.grid.ContourAbstractGrid): any;
            }
            /**
             * The iterator for the one grid datasource
             */
            class OneGridIterator extends geotoolkit.contour.datasource.AbstractIterator {
                /**
                 * The iterator for the one grid datasource
                 */
                constructor();
                /**
                 * Gets the current enumerated item
                 */
                getCurrent(): any;
                /**
                 * Checks if the iterator can move to next item
                 */
                hasNext(): boolean;
                /**
                 * Moves the iterator to the next item
                 */
                moveNext(): boolean;
                /**
                 * Resets the iterator to the first item.
                 */
                reset(): any;
            }
            /**
             * The data source implementation for a single grid
             */
            class OneGridDataSource extends geotoolkit.contour.datasource.AbstractContourDataSource {
                /**
                 * The data source implementation for a single grid
                 * @param grid  (Required) The grid associated with this data.
                 */
                constructor(grid: number);
                /**
                 * Gets the model limits of contour data.
                 */
                getModelLimits(): geotoolkit.util.Rect|any;
                /**
                 * Gets the enumerator that enumerates set of appropriate grids.
                 * @param modelRect  (Required) The model rectangle.
                 * @param modelToDevice  (Required) model-to-device transformation.
                 */
                query(modelRect: geotoolkit.util.Rect, modelToDevice: geotoolkit.util.Transformation): geotoolkit.contour.datasource.OneGridIterator;
                /**
                 * Loads grid into memory.
                 * @param enumerator  (Required) iterator state identifies grid within grid set.
                 */
                loadGrid(enumerator: geotoolkit.contour.datasource.AbstractIterator): geotoolkit.contour.grid.ContourAbstractGrid;
                /**
                 * Release memory occupied by the grid.
                 * @param grid  (Required) The grid that contains points.
                 */
                freeGrid(grid: geotoolkit.contour.grid.ContourAbstractGrid): any;
            }
            /**
             * The iterator for the ContourTSDatasource.
             */
            class AreaIterator extends geotoolkit.contour.datasource.AbstractIterator {
                /**
                 * The iterator for the ContourTSDatasource.
                 */
                constructor();
                /**
                 * Gets the current enumerated item
                 */
                getCurrent(): any;
                /**
                 * Checks if the iterator can move to next item
                 */
                hasNext(): boolean;
                /**
                 * Moves the iterator to the next item
                 */
                moveNext(): boolean;
                /**
                 * Resets the iterator to the first item.
                 */
                reset(): any;
            }
            /**
             * This 'interface' class extends abstract definition of contour data, which
             * includes information about model limits and contour grid.
             * This interface can be implemented for ZMAP and TSURF data
             */
            class ContourDataSource extends geotoolkit.contour.datasource.AbstractContourDataSource {
                /**
                 * This 'interface' class extends abstract definition of contour data, which
                 * includes information about model limits and contour grid.
                 * This interface can be implemented for ZMAP and TSURF data
                 */
                constructor();
                /**
                 * The type of contour grid.
                 */
                static ContourGridType: any;
                /**
                 * Sets the object name
                 * @param name  (Required) The name of the object
                 */
                setObjectName(name: string): this;
                /**
                 * Gets the object name
                 */
                getObjectName(): string;
                /**
                 * Gets the minimum z-value.
                 */
                getMin(): number;
                /**
                 * Sets the minimum z-value.
                 * @param min  (Required) The minimum of the data.
                 */
                setMin(min: number): this;
                /**
                 * Gets the maximum z-value.
                 */
                getMax(): number;
                /**
                 * Sets the maximum z-value.
                 * @param max  (Required) The maximum of the data
                 */
                setMax(max: number): this;
                /**
                 * True if this datasource supports multiple areas.
                 */
                getMultipleAreas(): boolean;
                /**
                 * Enable or disable support of multiple contour areas.
                 * @param flag  (Required) True if multiple areas are supported.
                 */
                setMultipleAreas(flag: boolean): this;
                /**
                 * Updates all of the areas.
                 */
                updateAreas(): any;
                /**
                 * Updates area.
                 */
                updateArea(): any;
                /**
                 * Gets the type of grid.
                 */
                getGridType(): number;
                /**
                 * Gets the current Z-Values range.
                 */
                getGridRange(): geotoolkit.util.Range;
            }
            /**
             * The data source implementation for reading from a ts file.
             */
            class ContourTSDataSource extends geotoolkit.contour.datasource.ContourDataSource {
                /**
                 * The data source implementation for reading from a ts file.
                 */
                constructor();
                /**
                 * The average number of vertices per area if multiple areas are enabled.
                 */
                static MULTIPLE_AREA_CAPACITY: number;
                /**
                 * Maximum number of areas.
                 */
                static MAX_N_AREAS: number;
                /**
                 * The default value for non-value.
                 */
                static DEFAULT_NON_VALUE: number;
                /**
                 * The string value for a vertex.
                 */
                static VERTEX_ID: string;
                /**
                 * The string value for a triangle
                 */
                static TRIANGLE_ID: string;
                /**
                 * The string value for the separator.
                 */
                static SEPARATOR_CHAR: string;
                /**
                 * Gets the model limits of contour data.
                 */
                getModelLimits(): geotoolkit.util.Rect;
                /**
                 * Gets the enumerator that enumerates set of appropriate grids.
                 * @param modelRect  (Required) The model rectangle.
                 * @param modelToDevice  (Required) model-to-device transformation.
                 */
                query(modelRect: geotoolkit.util.Rect, modelToDevice: geotoolkit.util.Transformation): geotoolkit.contour.datasource.AreaIterator;
                /**
                 * Loads grid into memory.
                 * @param iterator  (Optional) deprecated (since 2.6) iterator state identifies grid within grid set.
                 */
                loadGrid(iterator?: geotoolkit.contour.datasource.AbstractIterator): geotoolkit.contour.grid.ContourAbstractGrid;
                /**
                 * Release memory occupied by the grid.
                 * @param grid  (Required) The grid that contains points.
                 */
                freeGrid(grid: geotoolkit.contour.grid.ContourAbstractGrid): any;
                /**
                 * Gets the type of grid
                 */
                getGridType(): number;
                /**
                 * Updates the areas
                 */
                updateAreas(): any;
                /**
                 * Clears the dataSource
                 */
                clear(): any;
                /**
                 * Adds a vertex to the dataSource
                 * @param n  (Required) The index of the coordinate
                 * @param x  (Required) The x-coordinate
                 * @param y  (Required) The y-coordinate
                 * @param z  (Required) The z-coordinate
                 */
                addVertex(n: number, x: number, y: number, z: number): any;
                /**
                 * Adds a triangle to the dataSource
                 * @param a  (Required) The a-triangle vertex.
                 * @param b  (Required) The b-triangle vertex.
                 * @param c  (Required) The c-triangle vertex.
                 */
                addTriangle(a: number, b: number, c: number): any;
            }
            /**
             * A utility class that creates a ContourTSDataSource from a passed in file or form url.
             */
            class ContourTSDataLoader {
                /**
                 * A utility class that creates a ContourTSDataSource from a passed in file or form url.
                 */
                constructor();
                /**
                 * Returns the ContourTSDataLoader that is loaded from the passed in file.
                 * @param file  (Required) the local file to read T-SURF format
                 */
                load(file: File|string): geotoolkit.util.Promise;
                /**
                 * Returns the ContourTSDataLoader that is loaded from the passed in file.
                 * @param url  (Required) url of the resource
                 */
                loadFromURL(url: string): geotoolkit.util.Promise;
                /**
                 * Returns the ContourTSDataLoader that is loaded from the passed in file.
                 * @param file  (Required) the local file to read T-SURF format
                 */
                loadFromFile(file: File): geotoolkit.util.Promise;
            }
            /**
             * This class holds various contour z-map header values.
             */
            class ContourZMapHeader {
                /**
                 * This class holds various contour z-map header values.
                 */
                constructor();
                /**
                 * Gets the size of the x-data.
                 */
                getSizeX(): number;
                /**
                 * Sets the size of the x-data.
                 * @param sizeX  (Required) The size of the x-data.
                 */
                setSizeX(sizeX: number): any;
                /**
                 * Gets the size of the y-data.
                 */
                getSizeY(): number;
                /**
                 * Sets the size of the y-data.
                 * @param sizeY  (Required) The size of the y-data.
                 */
                setSizeY(sizeY: number): any;
                /**
                 * Gets the start column.
                 */
                getStartColumn(): number;
                /**
                 * Sets the start column.
                 * @param startColumn  (Required) The start column
                 */
                setStartColumn(startColumn: number): this;
                /**
                 * Gets the minimum x-value.
                 */
                getMinX(): number;
                /**
                 * Sets the minimum x-value.
                 * @param minX  (Required) The minimum x-value.
                 */
                setMinX(minX: number): any;
                /**
                 * Gets the maximum x-value.
                 */
                getMaxX(): number;
                /**
                 * Sets the maximum x-value.
                 * @param maxX  (Required) The maximum x-value.
                 */
                setMaxX(maxX: number): any;
                /**
                 * Gets the minimum y-value.
                 */
                getMinY(): number;
                /**
                 * Sets the minimum y-value.
                 * @param minY  (Required) The minimum y-value.
                 */
                setMinY(minY: number): any;
                /**
                 * Gets the maximum y-value.
                 */
                getMaxY(): number;
                /**
                 * Sets the maximum y-value.
                 * @param maxY  (Required) The maximum y-value.
                 */
                setMaxY(maxY: number): any;
                /**
                 * Gets the non-value
                 */
                getNonValue(): number;
                /**
                 * Sets the non-value
                 * @param nonValue  (Required) The non-value
                 */
                setNonValue(nonValue: number): any;
            }
            /**
             * The data source implementation for reading from a zmap file.
             */
            class ContourZMapDataSource extends geotoolkit.contour.datasource.ContourDataSource {
                /**
                 * The data source implementation for reading from a zmap file.
                 */
                constructor();
                /**
                 * The average number of vertices per area if multiple areas are enabled.
                 */
                static MULTIPLE_AREA_CAPACITY: number;
                /**
                 * Maximum number of areas.
                 */
                static MAX_N_AREAS: number;
                /**
                 * The default value for non-value.
                 */
                static DEFAULT_NON_VALUE: number;
                /**
                 * The string value for the grid format
                 */
                static ZMAP_GRID_FORMAT: string;
                /**
                 * The string value for a indicating the header
                 */
                static HEADER_INDICATOR_CHAR: string;
                /**
                 * The string value for the header separator.
                 */
                static HEADER_SEPARATOR_CHAR: string;
                /**
                 * The string value for the data separator.
                 */
                static DATA_SEPARATOR_CHAR: string;
                /**
                 * The string value for the plus character.
                 */
                static PLUS_CHAR: string;
                /**
                 * Gets the model limits of contour data.
                 */
                getModelLimits(): geotoolkit.util.Rect;
                /**
                 * Gets the enumerator that enumerates set of appropriate grids.
                 * @param modelRect  (Required) The model rectangle.
                 * @param modelToDevice  (Required) model-to-device transformation.
                 */
                query(modelRect: geotoolkit.util.Rect, modelToDevice: geotoolkit.util.Transformation): geotoolkit.contour.datasource.AreaIterator;
                /**
                 * Loads grid into memory.
                 * @param iterator  (Optional) deprecated (since 2.6) iterator state identifies grid within grid set.
                 */
                loadGrid(iterator?: geotoolkit.contour.datasource.AbstractIterator): geotoolkit.contour.grid.ContourAbstractGrid;
                /**
                 * Release memory occupied by the grid.
                 * @param grid  (Required) The grid that contains points.
                 */
                freeGrid(grid: geotoolkit.contour.grid.ContourAbstractGrid): any;
                /**
                 * Gets the type of grid
                 */
                getGridType(): number;
                /**
                 * Updates the areas
                 */
                updateAreas(): any;
                /**
                 * Clears the dataSource
                 */
                clear(): any;
                /**
                 * Initializes the data based on the header.
                 * @param header  (Required) The header.
                 */
                initialize(header: geotoolkit.contour.datasource.ContourZMapHeader): any;
            }
            /**
             * A utility class that creates a ContourZMapDataLoader from a passed in file.
             */
            class ContourZMapDataLoader {
                /**
                 * A utility class that creates a ContourZMapDataLoader from a passed in file.
                 */
                constructor();
                /**
                 * Parses a zMap header from a file.
                 * @param lines  (Required) The file lines.
                 * @param header  (Required) The zMap header.
                 * @param errorContainer  (Required) The error message.
                 */
                readZMapHeader(lines: string[], header: geotoolkit.contour.datasource.ContourZMapHeader, errorContainer: string[]): boolean;
                /**
                 * Parses a zMap grid from a file.
                 * @param lines  (Required) The file lines.
                 * @param header  (Required) The zMap header.
                 * @param dataSource  (Required) The z-map data source.
                 * @param errorContainer  (Required) The error message.
                 */
                readZMapGrid(lines: string[], header: geotoolkit.contour.datasource.ContourZMapHeader, dataSource: geotoolkit.contour.datasource.ContourZMapDataSource, errorContainer: string[]): boolean;
                /**
                 * Returns the ContourZMapDataLoader that is loaded from the passed in file.
                 * @param file  (Required) the local file to read Z-Map format format
                 */
                load(file: File|string): geotoolkit.util.Promise;
                /**
                 * Returns the ContourTSDataLoader that is loaded from the passed in file.
                 * @param url  (Required) url of the resource
                 */
                loadFromURL(url: string): geotoolkit.util.Promise;
                /**
                 * Loads ZMap contour data from a file.
                 * @param file  (Required) the local file to read Z-Map format format
                 */
                loadFromFile(file: File|string): geotoolkit.util.Promise;
            }
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
             */
            class ContourFaultsLoader {
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
                 */
                constructor();
                /**
                 * Reads faults from a file into a ContourFaultList object and returns it.
                 * @param faultData  (Required) The fault data
                 */
                readFaults(faultData: string): geotoolkit.contour.faults.ContourFaultList;
            }
            module ContourDataSource {
                /**
                 * The type of contour grid.
                 */
                interface ContourGridType {
                    /**
                     * The triangular grid type
                     */
                    TriangularGrid: number;
                    /**
                     * The rectangular grid type
                     */
                    RectangularGrid: number;
                    /**
                     * The unknown grid type
                     */
                    Unknown: number;
                }
            }
        }
        module faults {
            /**
             * Stores points (in model coordinates) and other data for fault.
             */
            class ContourFault {
                /**
                 * Stores points (in model coordinates) and other data for fault.
                 * @param px  (Required) array of x-coordinates.
                 * @param py  (Required) array of y-coordinates.
                 * @param pl  (Required) array of left values.
                 * @param pr  (Optional) array of right values.
                 * @param closed  (Optional) 
                 */
                constructor(px: Float64Array, py: Float64Array, pl: Float64Array|boolean, pr?: Float64Array, closed?: boolean);
                /**
                 * Gets the fault size
                 */
                getSize(): number;
                /**
                 * Gets the fault implicit status
                 */
                getIsImplicit(): boolean;
                /**
                 * Returns true if fault is closed or false if fault is open.
                 */
                getClosed(): boolean;
                /**
                 * Gets a copy left values.
                 */
                getLeft(): Float64Array;
                /**
                 * Gets a copy left values.
                 */
                getRight(): Float64Array;
                /**
                 * Gets a copy of the X values.
                 */
                getX(): Float64Array;
                /**
                 * Gets a copy of the Y values.
                 */
                getY(): Float64Array;
            }
            /**
             * The ContourFaultList object is used to pass the fault data to the contour shape ready for rendering.
             *  It also performs some basic pre-processing calculations on the faults (validation/etc)
             */
            class ContourFaultList {
                /**
                 * The ContourFaultList object is used to pass the fault data to the contour shape ready for rendering.
                 *  It also performs some basic pre-processing calculations on the faults (validation/etc)
                 */
                constructor();
                /**
                 * Removes all of the fault data from this fault list
                 */
                removeAll(): any;
                /**
                 * Adds a fault with explicit data to this fault list
                 * @param xCoordinates  (Required) array of x coordinates
                 * @param yCoordinates  (Required) array of y coordinates
                 * @param left  (Required) array of left values or boolean indicating if closed
                 * @param right  (Required) array of right values
                 * @param closed  (Required) is fault closed or not
                 */
                addFault(xCoordinates: Float64Array, yCoordinates: Float64Array, left: Float64Array|boolean, right: Float64Array, closed: boolean): any;
                /**
                 * Number of faults in list
                 */
                getSize(): number;
                /**
                 * Gets a Fault from the fault list
                 * @param index  (Required) The index of the fault in the fault list
                 */
                getFault(index: number): geotoolkit.contour.faults.ContourFault|any;
            }
        }
    }
}
