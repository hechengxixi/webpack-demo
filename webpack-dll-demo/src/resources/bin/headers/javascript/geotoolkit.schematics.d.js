/**
 * API for schematic elements and classes which can be modified or extended.
 * @namespace */
geotoolkit.schematics = {};

/**
 * API defining wellbore data
 * @namespace */
geotoolkit.schematics.data = {};
    /**
     * Default componentName-to-aliases mapping
     */
    geotoolkit.schematics.data.DefaultAliases = {};

/**
 * API defining schematics component node factory
 * @namespace */
geotoolkit.schematics.factory = {};

/**
 * API for astract base classes for schematic node implementations
 * @namespace */
geotoolkit.schematics.scene = {};

/**
 * API for Abstract label and connector shape representations
 * @namespace */
geotoolkit.schematics.labeling = {};
    /**
     * Enum of label location types
     * @enum
     * @readonly
     */
    geotoolkit.schematics.labeling.LocationType = {};
        /**
         * No labels
         * @type {number}
         */
        geotoolkit.schematics.labeling.LocationType.NoLabels = NaN;
        /**
         * Labels on the left side
         * @type {number}
         */
        geotoolkit.schematics.labeling.LocationType.Left = NaN;
        /**
         * Labels on the right side
         * @type {number}
         */
        geotoolkit.schematics.labeling.LocationType.Right = NaN;
        /**
         * Labels on the labeled elements
         * @type {number}
         */
        geotoolkit.schematics.labeling.LocationType.Center = NaN;
        /**
         * Labels along the trajectory (applicable only for deviated)
         * @type {number}
         */
        geotoolkit.schematics.labeling.LocationType.AlongTrajectory = NaN;
    /**
     * Enum of label alignment types
     * @enum
     * @readonly
     */
    geotoolkit.schematics.labeling.AlignmentType = {};
        /**
         * Inner part of the labeling area
         * @type {number}
         */
        geotoolkit.schematics.labeling.AlignmentType.Inner = NaN;
        /**
         * Middle part of the labeling area
         * @type {number}
         */
        geotoolkit.schematics.labeling.AlignmentType.Middle = NaN;
        /**
         * Outer part of the labeling area
         * @type {number}
         */
        geotoolkit.schematics.labeling.AlignmentType.Outer = NaN;

/**
 * Node selector implementation for schematics needs
 * @namespace */
geotoolkit.schematics.utils = {};

/**
 *View modes builders
 * @namespace */
geotoolkit.schematics.builder = {};

/**
 * WellBore data container. Schematics data are stored in “geotoolkit.schematics.data.WellBoreData” object.
 * “addComponent” is the method to accumulate components in the object.
 *
 * @class geotoolkit.schematics.data.WellBoreData
 * @augments geotoolkit.util.EventDispatcher
 * @param {Array} [elements] array of elements to add
 */
geotoolkit.schematics.data.WellBoreData = {};
    /**
     * Updates contents with the elements data
     *
     * @param {!Array|object} modified element(s) to update
     * @returns {geotoolkit.schematics.data.WellBoreData} this
     */
    geotoolkit.schematics.data.WellBoreData.prototype.updateComponents = function(modified){};
    /**
     * Gets a component by its ID. Returns {name:string; data:object} instance if the component
     * exists or null if id is null or no such component has been registered
     * @param {string} id component id
     * @returns {*} a meta information for component with the given id or null if not found.
     */
    geotoolkit.schematics.data.WellBoreData.prototype.getComponentById = function(id){};
    /**
     * Generates unique component id
     * @returns {!string} id
     */
    geotoolkit.schematics.data.WellBoreData.prototype.generateId = function(){};
    /**
     * Adds the component's data to the well bore
     * @fires geotoolkit.util.Collection.Events#Change deprecated (since 2.6)
     * @fires geotoolkit.util.Collection.Events#Add
     * @param {!string} componentName element name
     * @param {!object} data data to build component node
     * @param {!string} [data.subset] component subset name
     * @param {!number} [index] index to add the component at
     * (@see {@link geotoolkit.schematics.scene.WellBoreNode}'s 'setRenderingHints' method API for subset usage example)
     *
     * @example
     * // Adding standard component - i.e. component inherited
     * // from {geotoolkit.schematics.scene.ReusableComponentNode}:
     * wellBoreData.addComponent("tubing", { geometry: { depth: { from: 350, to: 400}} });
     * // Adding custom component - i.e. component inherited
     * // from {geotoolkit.schematics.scene.ComponentNode}:
     * wellBoreData.addComponent("MyCustomComponentName", { parA: valueA, parB: valueB, setOfParametersC: { C1: valueC1, C2: valueC2 } });
     * var wellBoreData = new geotoolkit.schematics.data.WellBoreData();
     *
     * // **************************************************************
     * // (adding) - casings & cements:
     * wellBoreData.addComponent('casing', {
     * description: 'Drive Pipe',
     * geometry: {
     * depth: {from: 0, to: 341},
     * diameter: {outer: 26, inner: 25}
     * }
     * });
     * @returns {geotoolkit.schematics.data.WellBoreData} this
     */
    geotoolkit.schematics.data.WellBoreData.prototype.addComponent = function(componentName, data, index){};
    /**
     * Adds the component's data to the well bore
     * @fires geotoolkit.util.Collection.Events#Change deprecated (since 2.6)
     * @fires geotoolkit.util.Collection.Events#Add
     *
     * @param {object|Array} elements schematics element(s) to add in format
     * {name: string,
     * data: {
     * id: string,
     * description: string,
     * geometry:[
     * {
     * depth: {from: number, to: number}
     * diameter: {inner: number, outer: number}
     * }
     * ]
     *
     * @returns {geotoolkit.schematics.data.WellBoreData} this
     */
    geotoolkit.schematics.data.WellBoreData.prototype.addComponents = function(elements){};
    /**
     * Gets all components
     *
     * @returns {Array} components array
     */
    geotoolkit.schematics.data.WellBoreData.prototype.getComponents = function(){};
    /**
     * Gets all the component's data if available; "undefined" otherwise
     *
     * @param {!string} componentName component name
     * @returns {Array|undefined} the component's data array
     */
    geotoolkit.schematics.data.WellBoreData.prototype.getComponent = function(componentName){};
    /**
     * Gets all the "componentName" components' indices if available
     * @param {!string} componentName component name
     * @returns {Array} the components' indices
     */
    geotoolkit.schematics.data.WellBoreData.prototype.getIndices = function(componentName){};
    /**
     * Removes all data elements with the name specified
     * @fires geotoolkit.util.Collection.Events#Change deprecated (since 2.6)
     * @fires geotoolkit.util.Collection.Events#Remove
     * @param {string} componentName element name
     * @returns {geotoolkit.schematics.data.WellBoreData} this
     */
    geotoolkit.schematics.data.WellBoreData.prototype.removeComponent = function(componentName){};
    /**
     * Removes an element with the specified ID
     * @fires geotoolkit.util.Collection.Events#Change deprecated (since 2.6)
     * @fires geotoolkit.util.Collection.Events#Remove
     * @param {string} componentId element ID
     * @returns {geotoolkit.schematics.data.WellBoreData} this
     */
    geotoolkit.schematics.data.WellBoreData.prototype.removeComponentById = function(componentId){};
    /**
     * Removes all data elements from the well bore
     *
     * @fires geotoolkit.util.Collection.Events#Change deprecated (since 2.6)
     * @fires geotoolkit.util.Collection.Events#Remove
     * @returns {geotoolkit.schematics.data.WellBoreData} this
     */
    geotoolkit.schematics.data.WellBoreData.prototype.removeAll = function(){};
    /**
     * Gets geometry bounds
     * @returns {?geotoolkit.util.Rect}
     */
    geotoolkit.schematics.data.WellBoreData.prototype.getGeometryBounds = function(){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} JSON containing properties
     */
    geotoolkit.schematics.data.WellBoreData.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @returns {geotoolkit.schematics.data.WellBoreData} this
     */
    geotoolkit.schematics.data.WellBoreData.prototype.setProperties = function(properties){};

/**
 * Base schematics component node factory.
 *
 * @class geotoolkit.schematics.factory.AbstractComponentNodeFactory
 */
geotoolkit.schematics.factory.AbstractComponentNodeFactory = {};
    /**
     * Creates component node and return it.
     * @function
     * @abstract
     * @param {object} data to build the node of
     * @returns {geotoolkit.schematics.scene.ComponentNode}
     */
    geotoolkit.schematics.factory.AbstractComponentNodeFactory.prototype.createComponentNode = function(data){};
    /**
     * Validates geometry data. The implementation returns "true" always
     * @param {object} geometryData geometry data to validate
     * @returns {boolean}
     */
    geotoolkit.schematics.factory.AbstractComponentNodeFactory.prototype.validGeometryData = function(geometryData){};

/**
* ComponentNodeProxyFactory
*
* @class geotoolkit.schematics.factory.ComponentNodeProxyFactory
* @augments geotoolkit.schematics.factory.AbstractComponentNodeFactory
* @param {function|geotoolkit.schematics.factory.AbstractComponentNodeFactory} parameter
* callback method to create an instance of a component node OR
* an instance of a component node factory to create the component node
*/
geotoolkit.schematics.factory.ComponentNodeProxyFactory = {};
    /**
     * Creates component node and return it.
     *
     * @param {?object} [data] data to build the node of
     * @param {boolean} [forceCreateNewNode==false] if "true" brand new component node instance is placed in the proxy
     * @param {boolean} [deepCopyData==false] if "true" the data will be fully copied before set
     * @returns {geotoolkit.schematics.scene.ComponentNodeProxy} new proxy instance that incapsulates reusable component node instance
     */
    geotoolkit.schematics.factory.ComponentNodeProxyFactory.prototype.createComponentNode = function(data, forceCreateNewNode, deepCopyData){};
    /**
     * Validates geometry data.
     * @param {object} geometryData geometry data to validate
     * @returns {boolean}
     */
    geotoolkit.schematics.factory.ComponentNodeProxyFactory.prototype.validGeometryData = function(geometryData){};

/**
 * Basic schematics component node. The constructor creates a full data copy by default.
 *
 * @class geotoolkit.schematics.scene.ComponentNode
 * @augments geotoolkit.scene.Group
 * @param {object} [data] Data to set. This instance will be fully copied. To avoid this, create a new instance
 * with null as data and then explicitly call {@see setData} with second argument set to "false".
 * @param {string} [data.description] element description
 * @param {object} [data.geometry] element geometry
 */
geotoolkit.schematics.scene.ComponentNode = {};
    /**
     * Gets "resource-based" indicator. Inherited class should override the
     * method to ensure WellBoreNode invalidation on the node's resource load.
     *
     * @returns {boolean} false
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.isResourceBased = function(){};
    /**
     * Gets graphical styles associated with it.
     * The implementation returns an empty array.
     *
     * @returns {Array} an empty array
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.getStyles = function(){};
    /**
     * Gets model bounds
     * @function
     * @abstract
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.getGeometryBounds = function(){};
    /**
     * Get the node bounds.
     *
     * @returns {geotoolkit.util.Rect} component node bounds
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.getBounds = function(){};
    /**
     * Gets description (Convenience method)
     * @param {boolean} [deepCopy=true] a flag indicating if the data should be fully copied before returning or not
     * @returns {?string} description
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.getDescription = function(deepCopy){};
    /**
     * Sets description (Convenience method)
     * @param {?string} description element description
     * @param {boolean} [deepCopy=true] a flag indicating if the data should be fully copied before setting or not
     * @returns {geotoolkit.schematics.scene.ComponentNode} this
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.setDescription = function(description, deepCopy){};
    /**
     * Validates geometry data. The implementation returns "true" always.
     * Custom implementation shall override the method.
     * @param {object} geometryData geometry data to validate
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.validGeometryData = function(geometryData){};
    /**
     * Gets component data (see "setData" API for return object elements)
     * @param {boolean} [deepCopy=true] a flag indicating if the data should be fully copied before returning or not
     * @returns {object} data
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.getData = function(deepCopy){};
    /**
     * Sets component data
     * @param {!object} data data to set
     * @param {!object} [data.geometry] component geometry
     * @param {!string} [data.description] component description
     * @param {?object} [data.renderinghints] component rendering hints
     * @param {string} [data.id] component unique ID
     * @param {boolean} [deepCopy=true] deep copy flag
     * @returns {geotoolkit.schematics.scene.ComponentNode} this
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.setData = function(data, deepCopy){};
    /**
     * Gets geometric data to build the node on (Convenience method)
     * @param {boolean} [deepCopy=true] a flag indicating if the data should be fully copied before returning or not
     * @returns {object} geometric data
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.getGeometryData = function(deepCopy){};
    /**
     * Sets geometric data (Convenience method). Overridable must call the base implementation
     * for "getGeometryData" to retreive proper information.
     * Overridable is expected to build the node geometry based on
     * the geometryData provided.
     * Optional parameters "compressedScale" and "horizontalCompressedScale" are
     * for geotoolkit.schematics.scene.WellBoreNode.ViewMode.Compressed only,
     * and, "horizontalCompressedScale" works for L-shaped schematics case only.
     *
     * @param {object} geometryData geometry data
     * @param {number} [geometryData.compressedScale] compressed scale
     * @param {number} [geometryData.horizontalCompressedScale] horizontal compressed scale
     * @param {boolean} [deepCopy=true] a flag indicating if the data should be fully copied before returning or not
     * @returns {geotoolkit.schematics.scene.ComponentNode} this
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.setGeometryData = function(geometryData, deepCopy){};
    /**
     * Sets rendering hints
     * @param {?object} hints rendering hints
     * @param {boolean} [deepCopy=true] a flag indicating if the data should be fully copied before returning or not
     * @returns {geotoolkit.schematics.scene.ComponentNode} this
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.setRenderingHints = function(hints, deepCopy){};
    /**
     * Gets rendering hints
     * @param {boolean} [deepCopy=true] a flag indicating if the data should be fully copied before returning or not
     * @returns {?object} rendering hints
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.getRenderingHints = function(deepCopy){};
    /**
     * Updates (if needed) shape geometry depending on rendering context state.
     * The implementation does nothing
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.updateShapeGeometry = function(context){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} props JSON containing properties
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @param {object} [properties.geometrydata] see {@link geotoolkit.schematics.scene.ComponentNode#setGeometryData}
     * @returns {geotoolkit.schematics.scene.ComponentNode} this
     */
    geotoolkit.schematics.scene.ComponentNode.prototype.setProperties = function(properties){};

/**
 * Abstract extension of basic schematics component node.
 * It is base class for {geotoolkit.schematics.scene.RegularComponentNode}
 * and {geotoolkit.schematics.scene.FlippedComponentNode} implementations.
 *
 * @class geotoolkit.schematics.scene.ReusableComponentNode
 * @augments geotoolkit.schematics.scene.ComponentNode
 */
geotoolkit.schematics.scene.ReusableComponentNode = {};
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory leaks
     */
    geotoolkit.schematics.scene.ReusableComponentNode.prototype.dispose = function(){};
    /**
     * Gets graphical styles associated with it.
     *
     * @returns {Array} array of JSON-objects in the form { 'classname', 'linestyle', 'fillstyle' }
     */
    geotoolkit.schematics.scene.ReusableComponentNode.prototype.getStyles = function(){};
    /**
     * Gets template node
     * @function
     * @abstract
     * @returns {geotoolkit.scene.Node}
     */
    geotoolkit.schematics.scene.ReusableComponentNode.prototype.getTemplateNode = function(){};
    /**
     * Gets template bounds
     * @function
     * @abstract
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.ReusableComponentNode.prototype.getTemplateBounds = function(){};
    /**
     * Gets model bounds
     *
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.ReusableComponentNode.prototype.getGeometryBounds = function(){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} props JSON containing properties
     */
    geotoolkit.schematics.scene.ReusableComponentNode.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @param {geotoolkit.util.Rect} [properties.rectbounds] bounds
     * @returns {geotoolkit.schematics.scene.ReusableComponentNode} this
     */
    geotoolkit.schematics.scene.ReusableComponentNode.prototype.setProperties = function(properties){};

/**
 * Most-common schematics components are derived from this class. Derived components: "tubing", "valve", "nipple" etc. <br>
 * To specify an offset from center on a component, use the 'offset' property in "setGeometryData" method below.
 *
 * @class geotoolkit.schematics.scene.RegularComponentNode
 * @augments geotoolkit.schematics.scene.ReusableComponentNode
 */
geotoolkit.schematics.scene.RegularComponentNode = {};
    /**
     * Validates geometry data.
     *
     * @param {object} geometryData an object with geometry data
     * @param {object} [geometryData.depth] an object with depths descriptors (from and to)
     * @param {number} [geometryData.depth.from] depth from
     * @param {number} [geometryData.depth.to] depth to
     * @param {object} [geometryData.diameter] an object with diameter descriptor
     * @param {number} [geometryData.diameter.outer] outer diameter
     *
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.RegularComponentNode.prototype.validGeometryData = function(geometryData){};
    /**
     * Sets geometry
     *
     * @param {!object} geometryData an object with geometry data
     * @param {!object} [geometryData.depth] an object with depths descriptors (from and to)
     * @param {!number} [geometryData.depth.from] depth from
     * @param {!number} [geometryData.depth.to] depth to
     * @param {!object} [geometryData.diameter] an object with diameter descriptor
     * @param {!number} [geometryData.diameter.outer] outer diameter
     * @param {number} [geometryData.offset==0] component offset
     */
    geotoolkit.schematics.scene.RegularComponentNode.prototype.setGeometryData = function(geometryData){};
    /**
     * Render node
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.scene.RegularComponentNode.prototype.render = function(context){};
    /**
     * Gets template node
     * @function
     * @abstract
     * @returns {geotoolkit.scene.Node}
     */
    geotoolkit.schematics.scene.RegularComponentNode.prototype.getTemplateNode = function(){};
    /**
     * Gets template bounds
     * @function
     * @abstract
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.RegularComponentNode.prototype.getTemplateBounds = function(){};
    /**
     * Checks collision.
     * Returns true if object is inside of renderable area
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.RegularComponentNode.prototype.checkCollision = function(context){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} props JSON containing properties
     */
    geotoolkit.schematics.scene.RegularComponentNode.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @param {geotoolkit.util.Transformation} [properties.trpos] trpos
     * @param {number} [properties.depthfrom] depth from
     * @param {number} [properties.depthto] depth to
     * @param {number} [properties.outerradius] outer radius
     * @param {number} [properties.offset] component offset
     * @param {geotoolkit.util.Rect} [properties.rectbounds] bounds
     * @returns {geotoolkit.schematics.scene.RegularComponentNode} this
     */
    geotoolkit.schematics.scene.RegularComponentNode.prototype.setProperties = function(properties){};

/**
 * @class FlowComponentNode - astract base class for a component node implementation with "flow" support.
 * @augments geotoolkit.schematics.scene.RegularComponentNode
 * @constructor
 */
geotoolkit.schematics.scene.FlowComponentNode = {};
    /**
     * Show flow
     * @function
     * @abstract
     */
    geotoolkit.schematics.scene.FlowComponentNode.prototype.showFlow = function(){};
    /**
     * Delete all flow children
     */
    geotoolkit.schematics.scene.FlowComponentNode.prototype.hideFlow = function(){};

/**
* Most-common schematics component node extension. Derived component(s): "cement"
*
* @class geotoolkit.schematics.scene.FlippedComponentNode
* @augments geotoolkit.schematics.scene.ReusableComponentNode
* @param {boolean} [isLeft=false] isLeft flag
*/
geotoolkit.schematics.scene.FlippedComponentNode = {};
    /**
     * Gets if the template is "left" one.
     *
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.isLeft = function(){};
    /**
     * Sets the template's "left" flag
     * @param {boolean} left left flag
     * @returns {geotoolkit.schematics.scene.FlippedComponentNode}
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.setLeft = function(left){};
    /**
     * Validates geometry data.
     *
     * @param {object} geometryData Geometry data
     * @param {object} [geometryData.depth] depth description object
     * @param {number} [geometryData.depth.from] depth from
     * @param {number} [geometryData.depth.to] depth to
     * @param {object} [geometryData.diameter] diameter description object
     * @param {number} [geometryData.diameter.outer] outer diameter
     * @param {number} [geometryData.diameter.inner] inner diameter
     *
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.validGeometryData = function(geometryData){};
    /**
     * Sets geometry
     *
     * @param {!object} geometryData Geometry data for the node
     * @param {!object} [geometryData.depth] geometry depth object
     * @param {!number} [geometryData.depth.from] depth from
     * @param {!number} [geometryData.depth.to] depth to
     * @param {!object} [geometryData.diameter] diameter description object
     * @param {!number} [geometryData.diameter.outer] outer diameter
     * @param {!number} [geometryData.diameter.inner] inner diameter
     * @param {!number} [geometryData.offset==0] component offset
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.setGeometryData = function(geometryData){};
    /**
     * Checks collision
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     * @returns {boolean} true if object is inside of renderable area
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.checkCollision = function(context){};
    /**
     * Gets template node
     * @function
     * @abstract
     * @returns {geotoolkit.scene.Node}
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.getTemplateNode = function(){};
    /**
     * Gets template bounds
     * @function
     * @abstract
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.getTemplateBounds = function(){};
    /**
     * Render node
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.render = function(context){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} props JSON containing properties
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @param {geotoolkit.util.Transformation} [properties.trpos] trpos
     * @param {geotoolkit.util.Transformation} [properties.trneg] trneg
     * @returns {geotoolkit.schematics.scene.FlippedComponentNode} this
     */
    geotoolkit.schematics.scene.FlippedComponentNode.prototype.setProperties = function(properties){};

/**
* Image-based reusable component node extension.
*
* @class geotoolkit.schematics.scene.ReusableImageComponentNode
* @augments geotoolkit.schematics.scene.RegularComponentNode
* @param {!string} url image URL
* @example
* // This example shows how to use an image(INT logo) as a custom component.
* // Register the FACTORY to be customized
* var factoryRegistry = new geotoolkit.schematics.factory.ComponentNodeFactoryRegistry();
* factoryRegistry.setFactory("MyImageComponent", function () { return new geotoolkit.schematics.scene.ReusableImageComponentNode('int-logo.png'); });
*
* // DATA:
* var wellBoreData = new geotoolkit.schematics.data.WellBoreData();
* wellBoreData.addComponent("MyImageComponent", {
* 'geometry': {
* 'depth': { 'from': 50, 'to': 100 },
* 'diameter': { 'outer': 50 }
* }
* });
* // SHAPE:
* var wellBoreShape = new geotoolkit.schematics.scene.WellBoreNode({
* 'data': wellBoreData,
* 'registry': factoryRegistry
* });
*
*/
geotoolkit.schematics.scene.ReusableImageComponentNode = {};
    /**
     * Gets template node
     *
     * @returns {geotoolkit.scene.Node}
     */
    geotoolkit.schematics.scene.ReusableImageComponentNode.prototype.getTemplateNode = function(){};
    /**
     * Gets template bounds
     *
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.ReusableImageComponentNode.prototype.getTemplateBounds = function(){};

/**
* External geometry-based reusable component node extension.
*
* @class geotoolkit.schematics.scene.ExternalGeometryComponentNode
* @augments geotoolkit.schematics.scene.RegularComponentNode
* @param {!geotoolkit.scene.Group} externalGeometry geometry to define the component
* @param {object} [data] JSON-data to define component
* @param {string} [data.description] component textual description
* @param {object} [data.geometry] component geometry (see {@link geotoolkit.schematics.scene.RegularComponentNode}'s "setGeometryData" for details)
* @param {object} [asymmetry=null] asymmetry options
* @param {string} [asymmetry.left='0%'] asymmetry on left side
* @param {string} [asymmetry.top='0%'] asymmetry on top
* @param {string} [asymmetry.right='0%'] asymmetry on right side
* @param {string} [asymmetry.bottom='0%'] asymmetry on bottom
* @throws {Error} if "externalGeometry" does not have valid model limits
*/
geotoolkit.schematics.scene.ExternalGeometryComponentNode = {};
    /**
     * Sets component data
     * @param {!object} data data to set
     * @param {!object} [data.geometry] component geometry
     * @param {!string} [data.description] component description
     * @param {?object} [data.renderinghints] component rendering hints
     * @param {string} [data.id] component unique ID
     * @param {boolean} [deepCopy=true] deep copy flag
     * @returns {geotoolkit.schematics.scene.ExternalGeometryComponentNode} this
     */
    geotoolkit.schematics.scene.ExternalGeometryComponentNode.prototype.setData = function(data, deepCopy){};
    /**
     * Gets geometry bounds
     * @function
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.ExternalGeometryComponentNode.prototype.getGeometryBounds = function(){};
    /**
     * Gets template node (there: external geometry)
     *
     * @returns {geotoolkit.scene.Node}
     */
    geotoolkit.schematics.scene.ExternalGeometryComponentNode.prototype.getTemplateNode = function(){};
    /**
     * Gets template bounds (there: external geometry's model limits)
     *
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.ExternalGeometryComponentNode.prototype.getTemplateBounds = function(){};
    /**
     * Render node
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.scene.ExternalGeometryComponentNode.prototype.render = function(context){};
    /**
     * Gets "resource-based" status
     *
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.ExternalGeometryComponentNode.prototype.isResourceBased = function(){};
    /**
     * Sets "resource-based" status
     *
     * @param {boolean} resourceBased "resource-based" status
     * @returns {geotoolkit.schematics.scene.ExternalGeometryComponentNode} this
     */
    geotoolkit.schematics.scene.ExternalGeometryComponentNode.prototype.setResourceBased = function(resourceBased){};

/**
* External geometry-based reusable component node extension.
*
* @class geotoolkit.schematics.scene.ExternalGeometryFlippedComponentNode
* @augments geotoolkit.schematics.scene.FlippedComponentNode
* @param {!geotoolkit.scene.Group} externalGeometry geometry to define the component
* @param {object} [data] JSON-data to define component
* @param {string} [data.description] component textual description
* @param {object} [data.geometry] component geometry (see {@link geotoolkit.schematics.scene.RegularComponentNode}'s "setGeometryData" for details)
* @throws {Error} if "externalGeometry" does not have valid model limits
*/
geotoolkit.schematics.scene.ExternalGeometryFlippedComponentNode = {};
    /**
     * Gets template node.
     *
     * @returns {geotoolkit.scene.Node}
     */
    geotoolkit.schematics.scene.ExternalGeometryFlippedComponentNode.prototype.getTemplateNode = function(){};
    /**
     * Gets template bounds
     *
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.ExternalGeometryFlippedComponentNode.prototype.getTemplateBounds = function(){};
    /**
     * Gets "resource-based" status.
     *
     * @returns {boolean} true
     */
    geotoolkit.schematics.scene.ExternalGeometryFlippedComponentNode.prototype.isResourceBased = function(){};
    /**
     * Sets "resource-based" status
     *
     * @param {boolean} resourceBased "resource-based" status
     * @returns {geotoolkit.schematics.scene.ExternalGeometryFlippedComponentNode} this
     */
    geotoolkit.schematics.scene.ExternalGeometryFlippedComponentNode.prototype.setResourceBased = function(resourceBased){};

/**
 * Encapsulates geotoolkit.schematics.scene.ReusableComponentNode instance
 * The given data will be deeply copied
 * @class geotoolkit.schematics.scene.ComponentNodeProxy
 * @augments geotoolkit.schematics.scene.ComponentNode
 *
 * @param {!geotoolkit.schematics.scene.ReusableComponentNode} reusableComponentNode component node to re-use
 * @param {?object} [data] data to initialize "reusableComponentNode" with
 */
geotoolkit.schematics.scene.ComponentNodeProxy = {};
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory leaks
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.dispose = function(){};
    /**
     * Sets component data
     * @param {!object} data data to set
     * @param {!object} [data.geometry] component geometry
     * @param {!string} [data.description] component description
     * @param {?object} [data.renderinghints] component rendering hints
     * @param {boolean} [deepCopy=true] deep copy flag
     * @returns {geotoolkit.schematics.scene.ComponentNodeProxy} this
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.setData = function(data, deepCopy){};
    /**
     * Gets "resource-based" indicator.
     * @returns {boolean} underlying reusable component node's "resource-based" indicator
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.isResourceBased = function(){};
    /**
     * Gets graphical styles associated with its underlying reusable component node.
     *
     * @returns {Array} array of objects
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.getStyles = function(){};
    /**
     * Gets component bounds
     *
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.getGeometryBounds = function(){};
    /**
     * Renders underlying reusable component node
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.render = function(context){};
    /**
     * Check if compnent is within giving context
     *
     * @param {geotoolkit.renderer.RenderingContext} context RenderingContext
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.checkCollision = function(context){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} props JSON containing properties
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @returns {geotoolkit.schematics.scene.ComponentNodeProxy} this
     */
    geotoolkit.schematics.scene.ComponentNodeProxy.prototype.setProperties = function(properties){};

/**
* Top-most WellBorenode implementation used to visualize schematics data.<br>
* If user does not need any custom elements (i.e. “geotoolkit.schematics.scene.ComponentNode” implementations), reference to the data is the only argument to pass to WellBoreNode constructor. If user DOES need any custom elements, then a “geotoolkit.schematics.factory.ComponentNodeFactoryRegistry” instance used in the WellBoreNode object must contain an entry to make the custom data displayed within WellBoreNode.
* If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into “geotoolkit.plot.Plot” as a root.
* If labeling IS needed then “geotoolkit.schematics.scene.WellBoreWithLabels” object must be created based on user’s WellBoreNode object.
*
* @class geotoolkit.schematics.scene.WellBoreNode
* @augments geotoolkit.scene.Group
* @param {object} parameters
* @param {geotoolkit.schematics.data.WellBoreData} [parameters.data= null] wellbore data
* @param {object} [parameters.renderinghints] rendering hints for components
* @param {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} [parameters.registry= new geotoolkit.schematics.factory.ComponentNodeFactoryRegistry()] factory registry
* @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [parameters.viewMode= geotoolkit.schematics.scene.WellBoreNode.ViewMode.Regular] view mode
* @example
* 1. //To 'set data', call the setWellBoreData method.
* WellBoreNode.prototype.setWellBoreData = function (wellBoreData)
* 2. WellBoreNode inhertis "geotoolkit.scene.Group" class so "clearChildren = function (disposeChildren)" is used to clear its elements
* and "invalidate = function (bounds, force)" to refresh.
* 3. // Searching a schematic element "id" can be done as follows:
* var searchById =function (wellBoreNode, id) {
* var nodes = geotoolkit.selection.from(wellBoreNode).where(function (node) {
* return (node instanceof geotoolkit.schematics.scene.ComponentNode && node.getId() === id);
* }).selectToArray();
* return nodes;
* };
*/
geotoolkit.schematics.scene.WellBoreNode = {};
    /**
     * ViewMode
     * @enum
     * @readonly
     */
    geotoolkit.schematics.scene.WellBoreNode.ViewMode = {};
        /**
         * Regular
         * @type {number}
         */
        geotoolkit.schematics.scene.WellBoreNode.ViewMode.Regular = NaN;
        /**
         * Compressed
         * @type {number}
         */
        geotoolkit.schematics.scene.WellBoreNode.ViewMode.Compressed = NaN;
        /**
         * KeepAspectRatio
         * @type {number}
         */
        geotoolkit.schematics.scene.WellBoreNode.ViewMode.KeepAspectRatio = NaN;
    /**
     * Check if this node is within the area being rendered by the context
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     * @returns {boolean} true if object is inside of renderable area
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.checkCollision = function(context){};
    /**
     * Gets well bore view mode.
     * @returns {geotoolkit.schematics.scene.WellBoreNode.ViewMode} viewMode
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.getViewMode = function(){};
    /**
     * Gets the view mode's builder
     * @param {!geotoolkit.schematics.scene.WellBoreNode.ViewMode} viewMode view mode
     * @returns {?geotoolkit.schematics.builder.IViewModeBuilder} the mode builder if found
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.getBuilder = function(viewMode){};
    /**
     * Sets well bore view mode.
     * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [viewMode] well bore view mode
     * @returns {?object} mapping "model limits to bounds" depths mapping
     * @returns {!Array} mapping.modelLimitsDepths model limits depths
     * @returns {!Array} mapping.boundsDepths bounds depths
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.setViewMode = function(viewMode){};
    /**
     * Rebuilds all components with a given "componentName"
     * @param {!String} componentName component name
     * @returns {geotoolkit.schematics.scene.WellBoreNode} this
     * @throws {Error} when the node is not in sync with its WellBoreData.
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.replaceComponent = function(componentName){};
    /**
     * Gets rendering hints for various component types (if any)
     *
     * @returns {!object} rendering hints
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.getRenderingHints = function(){};
    /**
     * Sets rendering hints for various component types (if any)
     *
     * @param {?object} hints rendering hints
     * @returns {geotoolkit.schematics.scene.WellBoreNode} this
     *
     * @example
     * // Example#1: Customizing 'fluid' component's subsets:
     * var renderingHints = {
     * 'fluid': {
     * 'Mud': { 'fillstyle': { 'color': 'rgb(191,127,127)' } },
     * 'Spacer Fluid': { 'fillstyle': { 'color': 'rgb(113,244,151)' } },
     * 'Head Slurry': { 'fillstyle': { 'color': 'rgb(127,127,127)' } },
     * 'Tail Slurry': { 'fillstyle': { 'color': 'rgb(80,80,80)' } }
     * }
     * };
     * // The call tells wellbore node to render fluid's subsets: 'Mud', 'Spacer Fluid', 'Head Slurry' and 'Tail Slurry'
     * // with their corresponding fill colors:
     * wellBoreNode.setRenderingHints(renderingHints);
     *
     * @example
     * // Example#2: Customizing casing shoe painter, proportions and styles:
     * var renderingHints = {
     * 'casing': {
     * 'shoe': {
     * "painter": function (symbol, bbox, context) { // Replace default shoe painter
     * var x = [bbox.x, bbox.x + bbox.width, bbox.x + symbol['totalwidth'] / 100, bbox.x + bbox.width, bbox.x];
     * var y = [bbox.y, bbox.y, bbox.y + bbox.height / 2, bbox.y + bbox.height, bbox.y + bbox.height];
     *
     * context.drawPolygon(x, y);
     * },
     * 'height': 10, // %
     * 'totalwidth': 120, // %
     * 'linestyle': new geotoolkit.attributes.LineStyle(...),
     * 'fillstyle': new geotoolkit.attributes.FillStyle(...)
     * }
     * }
     * };
     * wellBoreNode.setRenderingHints(renderingHints);
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.setRenderingHints = function(hints){};
    /**
     * Gets factory registry associated with the node.
     * @returns {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} registry
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.getFactoryRegistry = function(){};
    /**
     * Associates the factory registry with the node.
     * @param {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} factoryRegistry factory registry to be assiciated with the node
     * @returns {geotoolkit.schematics.scene.WellBoreNode} this
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.setFactoryRegistry = function(factoryRegistry){};
    /**
     * Gets well bore data the node is built on.
     * @returns {geotoolkit.schematics.data.WellBoreData} data
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.getWellBoreData = function(){};
    /**
     * Sets well bore data to build the node on.
     * @param {geotoolkit.schematics.data.WellBoreData} wellBoreData well bore data the node is built on
     * @returns {geotoolkit.schematics.scene.WellBoreNode} this
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.setWellBoreData = function(wellBoreData){};
    /**
     * Sets visibility (convenience method)
     * @param {boolean} visible visibility state
     * @param {string} [componentName] if the parameter is omitted - then all component nodes are set
     * to "visible" state
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.setVisible = function(visible, componentName){};
    /**
     * Gets visibility (convenience method)
     *
     * @param {string} [componentName] component name
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.getVisible = function(componentName){};
    /**
     * Gets visible components' names (convenience method)
     * @returns {object} { visible: {Array}, invisible: {Array} }
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.getComponentsVisibility = function(){};
    /**
     * Sets component visibility according to the names passed (convenience method).
     * Note, that if a name(s) are not neither in "visible" nor in "invisible"
     * list, those nodes' visibility state stays unchanged.
     * @param {object} parameter visibility state
     * @param {Array} [parameter.visible] visible nodes list
     * @param {Array} [parameter.invisible] invisible nodes list
     * @returns {geotoolkit.schematics.scene.WellBoreNode} this
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.setComponentsVisibility = function(parameter){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} JSON containing properties
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @param {geotoolkit.schematics.data.WellBoreData} [properties.wellboredata] well bore data the node is built on
     * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [properties.viewMode] well bore view mode
     * @returns {geotoolkit.schematics.scene.WellBoreNode} this
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.setProperties = function(properties){};
    /**
     * Renders itself to specified context
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.scene.WellBoreNode.prototype.renderContent = function(context){};

/**
* WellBoreNode extension to provide sinusoidal curve on the external side of casing elements and open-hole.
*
* @class geotoolkit.schematics.scene.SinusoidNode
* @augments geotoolkit.schematics.scene.WellBoreNode
* @param {object} parameters (@see {@link eotoolkit.schematics.scene.WellBoreNode} for the base class parameters info)
*
* @param {object} [parameters.sinusoid] wellbore node sinusoid options
* @param {number} [parameters.sinusoid.depthfrom=0] depth value to start drawing sinusoid from
* @param {number} [parameters.sinusoid.amplitude=1] sinusoid sine amplitude in pixels
* @param {number} [parameters.sinusoid.period=20] sinusoid sine period in pixels
* @param {number} [parameters.sinusoid.accuracy=9] sinusoid sine representation accuracy
* (bigger number means better accuracy and worse performance)
* @param {geotoolkit.attributes.LineStyle} [parameters.sinusoid.linestyle=new geotoolkit.attributes.LineStyle()] sinusoid line style
*/
geotoolkit.schematics.scene.SinusoidNode = {};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} JSON containing properties
     */
    geotoolkit.schematics.scene.SinusoidNode.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @param {object} [properties.sinusoid] wellbore node sinusoid options
     * @param {number} [properties.sinusoid.depthfrom] depth value to start drawing sinusoid from
     * @param {number} [properties.sinusoid.amplitude] sinusoid sine amplitude in pixels
     * @param {number} [properties.sinusoid.period] sinusoid sine period in pixels
     * @param {number} [properties.sinusoid.accuracy] sinusoid sine representation accuracy
     * @returns {geotoolkit.schematics.scene.SinusoidNode}
     */
    geotoolkit.schematics.scene.SinusoidNode.prototype.setProperties = function(properties){};
    /**
     * Sets wellbore view mode.
     * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [viewMode] well bore view mode
     * @returns {?object} mapping "model limits to bounds" depths mapping
     * @returns {!Array} mapping.modelLimitsDepths model limits depths
     * @returns {!Array} mapping.boundsDepths bounds depths
     */
    geotoolkit.schematics.scene.SinusoidNode.prototype.setViewMode = function(viewMode){};
    /**
     * Renders itself to specified context
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.scene.SinusoidNode.prototype.renderContent = function(context){};

/**
 * L-shaped WellBoreNode extension.
 *
 * @class geotoolkit.schematics.scene.LShapedWellBoreNode
 * @augments geotoolkit.schematics.scene.WellBoreNode
 * @param {object} parameters
 * @param {geotoolkit.schematics.data.WellBoreData} [parameters.data=null] wellbore data
 * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [parameters.viewMode=geotoolkit.schematics.scene.WellBoreNode.ViewMode.Compressed] view mode
 * @param {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} [parameters.registry=new geotoolkit.schematics.factory.ComponentNodeFactoryRegistry] factory registry
 * @param {!number} [parameters.trackWidth=100] track width
 * @param {?number} [parameters.deviationDepth=null] deviation depth (if "null" then it's calculated based on the data)
 * @param {!number} [parameters.LShapeAccuracy= 8] accuracy (bigger number means smoother L-shape)
 * @example
 * // how to create and add data to L-Shaped Schematic
 * var wellBoreNode = new geotoolkit.schematics.scene.LShapedWellBoreNode({
 * data: wellBoreData,
 * trackWidth: 250,
 * // Setup the deviation point (compare to the "tubing" depth range above)
 * deviationDepth: 8000
 * })
 */
geotoolkit.schematics.scene.LShapedWellBoreNode = {};
    /**
     * Gets deviation depth value
     * @returns {number} deviationDepth
     */
    geotoolkit.schematics.scene.LShapedWellBoreNode.prototype.getDeviationDepth = function(){};
    /**
     * Sets deviation depth value
     * @param {number} deviationDepth deviation depth value
     * @returns {geotoolkit.schematics.scene.LShapedWellBoreNode} this
     */
    geotoolkit.schematics.scene.LShapedWellBoreNode.prototype.setDeviationDepth = function(deviationDepth){};
    /**
     * Gets model limits
     *
     * @returns {geotoolkit.util.Rect} model limits
     */
    geotoolkit.schematics.scene.LShapedWellBoreNode.prototype.getModelLimits = function(){};
    /**
     * Gets well bore view mode.
     * @returns {geotoolkit.schematics.scene.WellBoreNode.ViewMode}
     */
    geotoolkit.schematics.scene.LShapedWellBoreNode.prototype.getViewMode = function(){};
    /**
     * Sets well bore view mode.
     * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [viewMode] well bore view mode
     * @returns {?object} mapping "model limits to bounds" depths mapping
     * @returns {!Array} mapping.modelLimitsDepths model limits depths
     * @returns {!Array} mapping.boundsDepths bounds depths
     */
    geotoolkit.schematics.scene.LShapedWellBoreNode.prototype.setViewMode = function(viewMode){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} JSON containing properties
     */
    geotoolkit.schematics.scene.LShapedWellBoreNode.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     * @param {object} properties An object containing the properties to set
     * @param {number} [properties.deviationDepth] deviation depth value
     * @returns {geotoolkit.schematics.scene.LShapedWellBoreNode} this
     */
    geotoolkit.schematics.scene.LShapedWellBoreNode.prototype.setProperties = function(properties){};

/**
* Basic multi-diameter component node.
*
* @class geotoolkit.schematics.scene.MultiDiameterComponentNode
* @augments geotoolkit.schematics.scene.ComponentNode
* @param {object} [data]
* @param {string} [data.description] element description
* @param {Array} [data.geometry] geometry data (see {@link geotoolkit.schematics.scene.MultiDiameterComponentNode.prototype.setGeometryData} for more info)
*/
geotoolkit.schematics.scene.MultiDiameterComponentNode = {};
    /**
     * Gets geometry (model) bounds
     * @returns {geotoolkit.util.Rect} geometry (model) bounds
     */
    geotoolkit.schematics.scene.MultiDiameterComponentNode.prototype.getGeometryBounds = function(){};
    /**
     * Validates geometry data.
     *
     * @param {object|Array} geometryData geometry object or an array of such objects
     * @returns {boolean}
     */
    geotoolkit.schematics.scene.MultiDiameterComponentNode.prototype.validGeometryData = function(geometryData){};
    /**
     * Sets geometric data. A derived class's "setGeometryData" overridable must call the implementation in its body.
     *
     * @param {object} geometryData
     * @param {object} [geometryData.depth]
     * @param {number} [geometryData.depth.from]
     * @param {number} [geometryData.depth.to]
     * @param {object} [geometryData.diameter]
     * @param {number} [geometryData.diameter.outer]
     * @param {number} [geometryData.diameter.inner]
     * @param {boolean} [isCompressed=false] compressed view mode flag
     */
    geotoolkit.schematics.scene.MultiDiameterComponentNode.prototype.setGeometryData = function(geometryData, isCompressed){};
    /**
     * Gets geometric data to build the node on
     *
     * @param {boolean} [isCompressed=false] compressed view mode flag
     * @returns {object} geometric data
     */
    geotoolkit.schematics.scene.MultiDiameterComponentNode.prototype.getGeometryData = function(isCompressed){};
    /**
     * Renders itself onto a context.
     * The implementation just call for {@link geotoolkit.schematics.scene.ComponentNode.prototype.render} method.
     * @param {geotoolkit.renderer.RenderingContext} context
     */
    geotoolkit.schematics.scene.MultiDiameterComponentNode.prototype.render = function(context){};

/**
* Default componentName-to-componentFactory mapping
*
* @class geotoolkit.schematics.factory.DefaultMap
*/
geotoolkit.schematics.factory.DefaultMap = {};
    /**
    * Gets array of componentName-to-componentFactory pairs
    * @returns {Array}
    * @example
    * // To retrieve a list of all components supported in SchematicsJS use the following call
    * geotoolkit.schematics.factory.DefaultMap.getElements()
    */
    geotoolkit.schematics.factory.DefaultMap.getElements = function(){};

/**
* Schematics components factory registry
*
* @class geotoolkit.schematics.factory.ComponentNodeFactoryRegistry
* @param {boolean} [setupDefaults] when "false" the registry is created empty
* @param {!object} [aliases=geotoolkit.schematics.data.DefaultAliases] components names aliases
*/
geotoolkit.schematics.factory.ComponentNodeFactoryRegistry = {};
    /**
     * Gets aliases map<br>
     * Note that a copy of aliases map is returned.
     * @returns {object} aliases
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.getAliases = function(){};
    /**
     * Sets component name(s) aliases map
     * @param {!object} jsonNamesToAliases aliases
     * @param {boolean} [extendExisting=false] extend existing overlapping mapping nodes flag;
     * "false" stands for replacing existing mapping nodes if overlapped
     * @returns {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} this
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.setAliases = function(jsonNamesToAliases, extendExisting){};
    /**
     * Clears the content.
     * @returns {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} this
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.clear = function(){};
    /**
     * Populates the factory registry with default mapping for component factories
     * @returns {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} this
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.setupDefaults = function(){};
    /**
     * Set componentName-to-nodeFactory link.
     * @param {!string} componentName component name associated with node factory
     * @param {geotoolkit.schematics.factory.AbstractComponentNodeFactory|function} parameter2
     * node factory OR method returning a ComponentNode implementation instance.
     * @param {function} [parameter3] method to validate component geometry data
     * @returns {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} this
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.setFactory = function(componentName, parameter2, parameter3){};
    /**
     * Checks if componentName is associatedwith a node factory
     * @param {string} componentName component name associated with node factory
     * @returns {boolean} true if a factory is found; false otherwise
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.containsFactory = function(componentName){};
    /**
     * Gets node factory associated with the componentName passed.
     * Return null if node factory not found.
     * @param {!string} componentName component name associated with node factory
     * @returns {geotoolkit.schematics.factory.AbstractComponentNodeFactory}
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.getFactory = function(componentName){};
    /**
     * Gets array of registered component names
     * @returns {Array}
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.getRegisteredComponents = function(){};
    /**
     * Sets componentName-to-componentFactory mapping.
     * @param {Array} mapping array of pairs as follows:
     * { name: {string} componentName, factory: {geotoolkit.schematics.factory.AbstractComponentNodeFactory} componentFactory }
     * @returns {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} this
     * @example
     * factoryRegistry.setMapping([
     * { name: "MyComponent1", factory: new MyComponent1Factory()},
     * { name: "MyComponent2", factory: new MyComponent2Factory()},
     * //...
     * ]);
     */
    geotoolkit.schematics.factory.ComponentNodeFactoryRegistry.prototype.setMapping = function(mapping){};

/**
* Schematics components factory registry with extra {@link geotoolkit.schematics.scene.MultiDiameterComponentNode} elements
*
* @class geotoolkit.schematics.factory.MultiDiameterComponentFactoryRegistry
* @augments geotoolkit.schematics.factory.ComponentNodeFactoryRegistry
* @param {boolean} [setupDefaults=true] if "false" then the registry is created empty
* @param {!object} [aliases=geotoolkit.schematics.data.DefaultAliases] components names aliases
*/
geotoolkit.schematics.factory.MultiDiameterComponentFactoryRegistry = {};
    /**
     * Populates the factory registry with default mapping for component factories
     * @returns {geotoolkit.schematics.factory.MultiDiameterComponentFactoryRegistry} this
     */
    geotoolkit.schematics.factory.MultiDiameterComponentFactoryRegistry.prototype.setupDefaults = function(){};

/**
 * Implements a Node Factory for nodes defined by svg files
 * @class geotoolkit.schematics.factory.SvgNodeFactory
 * @augments geotoolkit.schematics.factory.AbstractComponentNodeFactory
 * @param {geotoolkit.svg.SVGParser} parser Instance of SVG Parser
 * @param {string} filePath Relative path to the SVG file
 * @param {geotoolkit.svg.SvgDataProvider} [dataProvider=new geotoolkit.svg.SvgDataProvider()] Instance of SvgDataProvider
 * @param {object} [asymmetry=null] asymmetry options
 * @param {number} [asymmetry.left] asymmetry on left side
 * @param {number} [asymmetry.top] asymmetry on top
 * @param {number} [asymmetry.right] asymmetry on right side
 * @param {number} [asymmetry.bottom] asymmetry on bottom
 */
geotoolkit.schematics.factory.SvgNodeFactory = {};
    /**
     * Creates a an svg component node and sends a request for the svg file.
     * Once file loaded, parses it with SVG parser and invalidates the node
     * @param {?Object} data Data to create the component node
     * @returns {geotoolkit.schematics.scene.ExternalGeometryComponentNode}
     */
    geotoolkit.schematics.factory.SvgNodeFactory.prototype.createComponentNode = function(data){};
    /**
     * If the component node is created bySvgNodeFactory then the method returns
     * its inner_child_group's model limits. Those limits are essentially SVG's view box.
     * @param {geotoolkit.schematics.scene.ComponentNode} node component node to evaluate
     * @returns {?geotoolkit.util.Rect}
     */
    geotoolkit.schematics.factory.SvgNodeFactory.getSVGNodeViewBox = function(node){};
    /**
     * Sets the data provider
     * @param {geotoolkit.svg.SvgDataProvider} dp Data Provider instance
     * @returns {geotoolkit.schematics.factory.SvgNodeFactory}
     * @throws {Error} If passed Data Provider is not inherited from geotoolkit.svg.SvgDataProvider
     */
    geotoolkit.schematics.factory.SvgNodeFactory.prototype.setDataProvider = function(dp){};
    /**
     * Sets SVG Parser
     * @param {geotoolkit.svg.SVGParser} p SVG Parser instance
     * @returns {geotoolkit.schematics.factory.SvgNodeFactory}
     * @throws {Error} If passed Parser is not inherited from geotoolkit.svg.SVGParser
     */
    geotoolkit.schematics.factory.SvgNodeFactory.prototype.setParser = function(p){};

/**
 * Implements a Flipped Node Factory for nodes defined by svg files
 * @class geotoolkit.schematics.factory.FlippedSvgNodeFactory
 * @augments geotoolkit.schematics.factory.SvgNodeFactory
 * @param {geotoolkit.svg.SVGParser} parser Instance of SVG Parser
 * @param {string} filePath Relative path to the SVG file
 * @param {geotoolkit.svg.SvgDataProvider} [dataProvider=new geotoolkit.svg.SvgDataProvider()] Instance of SvgDataProvider
 * @param {boolean} [isLeft=false] isLeft flag
 */
geotoolkit.schematics.factory.FlippedSvgNodeFactory = {};
    /**
     * @inheritdoc
     */
    geotoolkit.schematics.factory.FlippedSvgNodeFactory.prototype.createComponentNode = function(){};

/**
 * SVG-components loader
 *
 * @class geotoolkit.schematics.factory.SVGComponentsLoader
 * @param {object} options loader parameters
 * @param {!string} options.path relative path to JSON-file containing SVG-components to register
 * @param {!geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} options.registry registry to add SVG-components to
 * @param {!geotoolkit.svg.SVGParser} [options.parser=new geotoolkit.svg.SVGParser()] SVG parser
 * @param {!geotoolkit.svg.SvgDataProvider} [options.dataprovider=new geotoolkit.svg.SvgDataProvider()] data provider
 */
geotoolkit.schematics.factory.SVGComponentsLoader = {};
    /**
     * Loads SVG-components to registry
     * @returns {geotoolkit.util.Promise}
     */
    geotoolkit.schematics.factory.SVGComponentsLoader.prototype.load = function(){};

/**
* Label data structure to use by a LabelingStrategy.
*
* @class geotoolkit.schematics.labeling.LabelData
* @param {object} [parameters] options to initialize the strategy
* @param {geotoolkit.schematics.scene.ComponentNode} parameters.node component node to label
* @param {object} [parameters.nodeInfo= ""] the node information
* @param {geotoolkit.util.AnchorType} [parameters.anchorType= geotoolkit.util.AnchorType.Center] anchor type
* @param {number} [parameters.xLabel=0] label x-position
* @param {number} [parameters.yLabel=0] label y-position
* @param {Array} [parameters.xConnector] connector x-position
* @param {Array} [parameters.yConnector] connector y-position
*/
geotoolkit.schematics.labeling.LabelData = {};

/**
* Abstract label shape representation
*
* @class geotoolkit.schematics.labeling.LabelShape
*/
geotoolkit.schematics.labeling.LabelShape = {};
    /**
     * Gets label data
     * @function
     * @abstract
     * @returns {geotoolkit.schematics.labeling.LabelData}
     */
    geotoolkit.schematics.labeling.LabelShape.prototype.getLabelData = function(){};
    /**
     * Sets label data
     * @function
     * @abstract
     * @param {geotoolkit.schematics.labeling.LabelData} labelData label data
     * @returns {geotoolkit.schematics.labeling.LabelShape} this
     */
    geotoolkit.schematics.labeling.LabelShape.prototype.setLabelData = function(labelData){};
    /**
     * Renders itself
     * @function
     * @abstract
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.labeling.LabelShape.prototype.render = function(context){};
    /**
     * Gets bounding box in model space
     * @function
     * @abstract
     * @param {geotoolkit.util.Transformation} transformation scene transformation
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.labeling.LabelShape.prototype.getBoundingBox = function(transformation){};
    /**
     * Clone itself
     * @function
     * @abstract
     * @returns {geotoolkit.schematics.labeling.LabelShape} clone
     */
    geotoolkit.schematics.labeling.LabelShape.prototype.clone = function(){};

/**
* Default label shape implementation
*
* @class geotoolkit.schematics.labeling.DefaultLabelShape
* @augments geotoolkit.schematics.labeling.LabelShape
* @param {object} [options] options
* @param {object|geotoolkit.attributes.SpaceStyle} [options.padding] It has properties for specifying the padding for each side
* @param {number|string} [options.padding.top='2px'] top padding
* @param {number|string} [options.padding.bottom='2px'] top padding
* @param {number|string} [options.padding.right='2px'] right padding
* @param {number|string} [options.padding.left='2px'] left padding
*/
geotoolkit.schematics.labeling.DefaultLabelShape = {};
    /**
     * Gets label rectangle shape
     *
     * @returns {geotoolkit.scene.shapes.Rectangle}
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.getLabelRectangle = function(){};
    /**
     * Gets label text shape
     *
     * @returns {geotoolkit.scene.shapes.Text}
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.getLabelText = function(){};
    /**
     * Gets label data
     *
     * @returns {geotoolkit.schematics.labeling.LabelData}
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.getLabelData = function(){};
    /**
     * Sets label data
     *
     * @param {geotoolkit.schematics.labeling.LabelData} labelData label data
     * @returns {geotoolkit.schematics.labeling.DefaultLabelShape} this
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.setLabelData = function(labelData){};
    /**
     * Renders itself
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.render = function(context){};
    /**
     * Gets bounding box in model space
     *
     * @param {geotoolkit.util.Transformation} [transformation] scene transformation
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.getBoundingBox = function(transformation){};
    /**
     * Return padding style
     * @returns {?geotoolkit.attributes.SpaceStyle} padding
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.getPaddingStyle = function(){};
    /**
     * Sets padding style
     * @param {geotoolkit.attributes.SpaceStyle|object} paddingStyle padding style
     * @returns {geotoolkit.schematics.labeling.DefaultLabelShape}
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.setPaddingStyle = function(paddingStyle){};
    /**
     * Clones itself
     *
     * @returns {geotoolkit.schematics.labeling.DefaultLabelShape} clone
     */
    geotoolkit.schematics.labeling.DefaultLabelShape.prototype.clone = function(){};

/**
* Abstraction for schematics well bore elements labeling.
*
* @class geotoolkit.schematics.labeling.LabelingStrategy
*
* @param {object} parameters strategy parameters
* @param {geotoolkit.schematics.labeling.LabelShape} [parameters.labelShape= new geotoolkit.schematics.labeling.DefaultLabelShape()] label shape
* @param {function} [parameters.labelInfoProvider=geotoolkit.schematics.labeling.DefaultLabelInfoProvider] label info provider
* @param {!function} [parameters.beforeLabelingProc] "before labeling" procedure
* @param {!function} [parameters.afterLabelingProc] "after labeling" procedure
* @param {?geotoolkit.schematics.labeling.ConnectorShape} [parameters.connectorShape=null] connector shape
* @example
* // This example shows how to change the font and size for the strategy
* strategy.getLabelShape().getLabelText()
* .getTextStyle()
* .setFont('14px sans-serif')
* .setColor('red');
*/
geotoolkit.schematics.labeling.LabelingStrategy = {};
    /**
     * Sets function to execute before labeling.
     * Default function is an empty one.
     * @param {!function} op function to execute before labeling
     * @throws {Error} if parameter is undefined or null
     * @returns {geotoolkit.schematics.labeling.LabelingStrategy} this
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.setBeforeLabelingProc = function(op){};
    /**
     * Gets function to execute before labeling.
     *
     * @returns {function}
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.getBeforeLabelingProc = function(){};
    /**
     * Sets function to execute after labeling.
     * Default function is an empty one.
     * @param {!function} op function to execute after labeling
     * @throws {Error} if parameter is undefined or null
     * @returns {geotoolkit.schematics.labeling.LabelingStrategy} this
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.setAfterLabelingProc = function(op){};
    /**
     * Gets function to execute after labeling.
     * @returns {function()}
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.getAfterLabelingProc = function(){};
    /**
     * Sets label shape
     * @param {geotoolkit.schematics.labeling.LabelShape} labelShape label shape
     * @throws {Error} if parameter is not an instance of {geotoolkit.schematics.labeling.LabelShape} class
     * @returns {geotoolkit.schematics.labeling.LabelingStrategy} this
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.setLabelShape = function(labelShape){};
    /**
     * Gets label shape. Default: {geotoolkit.schematics.labeling.DefaultLabelShape} instance
     * @returns {geotoolkit.schematics.labeling.LabelShape}
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.getLabelShape = function(){};
    /**
     * Sets connector shape
     * @param {?geotoolkit.schematics.labeling.ConnectorShape} connectorShape connector shape
     * @returns {geotoolkit.schematics.labeling.LabelingStrategy} this
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.setConnectorShape = function(connectorShape){};
    /**
     * Gets connector shape. Default: null
     * @returns {geotoolkit.schematics.labeling.ConnectorShape}
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.getConnectorShape = function(){};
    /**
     * Sets label info provider - a function to retrieve an info from
     * a component node to use in label shape
     * @param {!function} provider label info provider, a function to retrieve info from
     * a component node to use in label shape
     * @throws {Error} if function provided is invalid
     * @returns {geotoolkit.schematics.labeling.LabelingStrategy} this
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.setLabelInfoProvider = function(provider){};
    /**
     * Gets label info provider
     * @returns {function()} label info provider
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.getLabelInfoProvider = function(){};
    /**
     * Performs labels and connecting lines layout.
     * @function
     * @abstract
     * @param {geotoolkit.renderer.RenderingContext} localContext rendering context
     * @param {geotoolkit.schematics.scene.WellBoreNode} wellBoreNode well bore node to build the labeling of
     * @returns {Array<geotoolkit.schematics.labeling.LabelData>} an array of label data to render
     */
    geotoolkit.schematics.labeling.LabelingStrategy.prototype.doLabeling = function(localContext, wellBoreNode){};

/**
* Abstraction for schematics well bore elements labeling.
*
* @class geotoolkit.schematics.labeling.LabelingStrategyBase
* @augments geotoolkit.schematics.labeling.LabelingStrategy
*
* @param {object} parameters strategy parameters (see base class for inherited options)
* @param {?geotoolkit.schematics.labeling.ConnectorShape} [parameters.connectorShape=new geotoolkit.schematics.labeling.DefaultConnectorShape()] connector shape
* @param {geotoolkit.schematics.labeling.LocationType} [parameters.defaultLocation=geotoolkit.schematics.labeling.LocationType.Left] label location type
* @param {geotoolkit.schematics.labeling.AlignmentType} [parameters.defaultAlignment=geotoolkit.schematics.labeling.AlignmentType.Inner] alignment type
* @param {Array} [parameters.locationMap=null] extra map for label locations
* @param {!geotoolkit.schematics.labeling.IComponentsFilter} [parameters.componentsfilter=new geotoolkit.schematics.labeling.DefaultComponentsFilter()] components filter
*/
geotoolkit.schematics.labeling.LabelingStrategyBase = {};
    /**
     * Gets components filter
     *
     * @returns {geotoolkit.schematics.labeling.IComponentsFilter}
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.getComponentsFilter = function(){};
    /**
     * Sets components filter
     *
     * @param {geotoolkit.schematics.labeling.IComponentsFilter} componentsFilter components filter
     * @returns {geotoolkit.schematics.labeling.LabelingStrategyBase} this
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.setComponentsFilter = function(componentsFilter){};
    /**
     * Gets default label location type
     *
     * @returns {geotoolkit.schematics.labeling.LocationType}
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.getDefaultLocation = function(){};
    /**
     * Sets default label location type
     *
     * @param {geotoolkit.schematics.labeling.LocationType} locationType location type
     * @returns {geotoolkit.schematics.labeling.LabelingStrategyBase} this
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.setDefaultLocation = function(locationType){};
    /**
     * Gets labeling location types map for specific component names
     *
     * @returns {?Array} array of { component: {string}, defaultLocation: {geotoolkit.schematics.labeling.LocationType} }
     * pairs if available
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.getLocationMap = function(){};
    /**
     * Sets labeling location types map for specific component names
     *
     * @param {?Array} locationMap array of { component: {string}, location: {geotoolkit.schematics.labeling.LocationType} } pairs
     * @returns {geotoolkit.schematics.labeling.LabelingStrategyBase} this
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.setLocationMap = function(locationMap){};
    /**
     * Gets label alignment type
     *
     * @returns {geotoolkit.schematics.labeling.AlignmentType} label
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.getLabelAlignment = function(){};
    /**
     * Sets label alignment type
     *
     * @param {geotoolkit.schematics.labeling.AlignmentType} alignmentType Enum of label alignment types(Inner, Middle,Outer)
     * @returns {geotoolkit.schematics.labeling.LabelingStrategyBase} this
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.setLabelAlignment = function(alignmentType){};
    /**
     * Performs labels and connecting lines layout.
     *
     * @param {geotoolkit.renderer.RenderingContext} context rendering context
     * @param {geotoolkit.schematics.scene.WellBoreNode} wellBoreNode well bore node to build the labeling of
     * @returns {Array<geotoolkit.schematics.labeling.LabelData>} an array of {geotoolkit.schematics.labeling.LabelData} label data to render
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.doLabeling = function(context, wellBoreNode){};
    /**
     * Derived class must override the empty method
     *
     * @protected
     * @param {geotoolkit.renderer.RenderingContext} context rendering context
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} nodesLabeled array of {geotoolkit.schematics.scene.ComponentNode}
     * @param {geotoolkit.schematics.labeling.LocationType} locationType location type
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} labelsDataArray array of {geotoolkit.schematics.labeling.LabelData}
     * @param {?geotoolkit.scene.Group} group group to label
     * @param {boolean} isHorizontal horizontal flag
     */
    geotoolkit.schematics.labeling.LabelingStrategyBase.prototype.doLabelingOnOneSide = function(context, nodesLabeled, locationType, labelsDataArray, group, isHorizontal){};

/**
* Default labeling strategy implementation.
*
* @class geotoolkit.schematics.labeling.DefaultLabelingStrategy
* @augments geotoolkit.schematics.labeling.LabelingStrategyBase
*
* @param {object} parameters strategy parameters (see base class for other inherited options)
* @param {boolean} [parameters.equallySpaced=true] "equally spaced" flag
* @param {boolean} [parameters.anchorValueFixed=true] anchor fixed position flag
*/
geotoolkit.schematics.labeling.DefaultLabelingStrategy = {};
    /**
     * Sets labeling area(s) bounds
     *
     * @param {object} bounds labeling area bounds
     * @returns {geotoolkit.schematics.labeling.DefaultLabelingStrategy} this
     */
    geotoolkit.schematics.labeling.DefaultLabelingStrategy.prototype.setLabelsBounds = function(bounds){};
    /**
     * Gets labeling area(s) bounds
     * @param {string} [location] permitted values: "Left", "Right", "Top" or "Bottom"
     * @returns {object|geotoolkit.util.Rect|undefined}
     */
    geotoolkit.schematics.labeling.DefaultLabelingStrategy.prototype.getLabelsBounds = function(location){};
    /**
     * Gets equallySpaced labeling flag
     *
     * @returns {boolean} equallySpaced labeling flag
     */
    geotoolkit.schematics.labeling.DefaultLabelingStrategy.prototype.getEquallySpaced = function(){};
    /**
     * Sets equallySpaced labeling flag
     *
     * @param {boolean} equallySpaced labeling flag is equally Spaced or not
     * @returns {geotoolkit.schematics.labeling.DefaultLabelingStrategy} this
     */
    geotoolkit.schematics.labeling.DefaultLabelingStrategy.prototype.setEquallySpaced = function(equallySpaced){};
    /**
     * Performs labels and connecting lines layout.
     * The implementation layouts all the labels withing one column (along well bore depth axis)
     * and aligns them according to "getLabelAlignment()" value.
     * Returns label data to render
     * @protected
     * @param {geotoolkit.renderer.RenderingContext} context rendering context
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} nodesLabeled array of {geotoolkit.schematics.scene.ComponentNode}
     * @param {geotoolkit.schematics.labeling.LocationType} locationType location type
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} labelsDataArray array of {geotoolkit.schematics.labeling.LabelData}
     * @param {?geotoolkit.scene.Group} group group to label
     * @param {boolean} isHorizontal horizontal flag
     */
    geotoolkit.schematics.labeling.DefaultLabelingStrategy.prototype.doLabelingOnOneSide = function(context, nodesLabeled, locationType, labelsDataArray, group, isHorizontal){};

/**
* Default labeling strategy implementation.
*
* @class geotoolkit.schematics.labeling.DefaultDeviatedStrategy
* @augments geotoolkit.schematics.labeling.LabelingStrategyBase
*
* @param {object} parameters strategy parameters (see base class for other inherited options)
* @param {boolean} [parameters.equallySpaced=true] "equally spaced" flag
* @param {boolean} [parameters.anchorValueFixed=true] anchor fixed position flag
*/
geotoolkit.schematics.labeling.DefaultDeviatedStrategy = {};
    /**
     * Sets labeling area(s) bounds
     *
     * @param {object} bounds labeling area bounds
     * @returns {geotoolkit.schematics.labeling.DefaultDeviatedStrategy} this
     */
    geotoolkit.schematics.labeling.DefaultDeviatedStrategy.prototype.setLabelsBounds = function(bounds){};
    /**
     * Gets labeling area(s) bounds
     * @param {string} [location] permitted values: "Left", "Right", "Top" or "Bottom"
     * @returns {object|geotoolkit.util.Rect|undefined}
     */
    geotoolkit.schematics.labeling.DefaultDeviatedStrategy.prototype.getLabelsBounds = function(location){};
    /**
     * Gets equallySpaced labeling flag
     *
     * @returns {boolean} equallySpaced labeling flag
     */
    geotoolkit.schematics.labeling.DefaultDeviatedStrategy.prototype.getEquallySpaced = function(){};
    /**
     * Sets equallySpaced labeling flag
     *
     * @param {boolean} equallySpaced labeling flag is equally Spaced or not
     * @returns {geotoolkit.schematics.labeling.DefaultDeviatedStrategy} this
     */
    geotoolkit.schematics.labeling.DefaultDeviatedStrategy.prototype.setEquallySpaced = function(equallySpaced){};
    /**
     * Performs labels and connecting lines layout.
     * The implementation layouts all the labels withing one column (along well bore depth axis)
     * and aligns them according to "getLabelAlignment()" value.
     * Returns label data to render
     * @protected
     * @param {geotoolkit.renderer.RenderingContext} context rendering context
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} nodesLabeled array of {geotoolkit.schematics.scene.ComponentNode}
     * @param {geotoolkit.schematics.labeling.LocationType} locationType location type
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} labelsDataArray array of {geotoolkit.schematics.labeling.LabelData}
     * @param {?geotoolkit.scene.Group} group group to label
     * @param {boolean} isHorizontal horizontal flag
     */
    geotoolkit.schematics.labeling.DefaultDeviatedStrategy.prototype.doLabelingOnOneSide = function(context, nodesLabeled, locationType, labelsDataArray, group, isHorizontal){};

/**
 * Labeling strategy implementation based on XY layout and LocationType enum.
 *
 * @class geotoolkit.schematics.labeling.XYLabelingStrategy
 * @augments geotoolkit.schematics.labeling.DefaultLabelingStrategy
 *
 * @param {object} parameters strategy parameters (see base class for other inherited options)
 * @param {geotoolkit.schematics.labeling.LabelShape} [parameters.labelShape= new geotoolkit.schematics.labeling.SymbolLabelShape] symbol label shape
 * @param {function} [parameters.labelInfoProvider=geotoolkit.schematics.labeling.SymbolLabelInfoProvider] symbol label info provider
 * @param {function} [parameters.beforeLabelingProc=geotoolkit.schematics.labeling.SymbolBeforeLabelingProc] "before labeling" procedure
 * @param {function} [parameters.afterLabelingProc=geotoolkit.schematics.labeling.SymbolAfterLabelingProc] "after labeling" procedure
 * @param {geotoolkit.schematics.labeling.LocationType} [parameters.defaultLocation= geotoolkit.schematics.labeling.LocationType.Right] label location type
 * @param {geotoolkit.schematics.labeling.AlignmentType} [parameters.defaultAlignment=geotoolkit.schematics.labeling.AlignmentType.Inner] alignment type
 * @param {geotoolkit.schematics.labeling.ConnectorShape} [parameters.connectorShape=null] connector shape
 *
 * @param {boolean} [parameters.equallySpaced=false] "equally spaced" flag
 * @param {boolean} [parameters.anchorValueFixed= false] anchor fixed position flag
 *
 * @param {number} [parameters.anchorValueShiftMult= 1] anchor value shift multiplier
 * @param {number} [parameters.columns= 3] number of columns
 */
geotoolkit.schematics.labeling.XYLabelingStrategy = {};
    /**
     * Default column number is 3
     */
    geotoolkit.schematics.labeling.XYLabelingStrategy.DefaultColumnNumber = {};
    /**
     * Gets layout column number
     *
     * @returns {number} layout column number
     */
    geotoolkit.schematics.labeling.XYLabelingStrategy.prototype.getLayoutColumnNumber = function(){};
    /**
     * Sets layout column number.
     * Valid values: 1 (no horizontal layout), 2 or 3.
     *
     * @param {!number} layoutColumnNumber layout column number.
     * Valid values: 1 (no horizontal layout), 2 or 3.
     * Default value: 3.
     * @throws {Error} if layoutColumnNumber is invalid
     * @returns {geotoolkit.schematics.labeling.XYLabelingStrategy} this
     */
    geotoolkit.schematics.labeling.XYLabelingStrategy.prototype.setLayoutColumnNumber = function(layoutColumnNumber){};
    /**
     * Performs labels and connecting lines layout.
     * Returns label data to render
     *
     * @param {geotoolkit.renderer.RenderingContext} localContext Rendering Context
     * @param {geotoolkit.schematics.scene.WellBoreNode} wellBoreNode well bore node to build the labeling of
     * @returns {Array<geotoolkit.schematics.labeling.LabelData>}
     */
    geotoolkit.schematics.labeling.XYLabelingStrategy.prototype.doLabeling = function(localContext, wellBoreNode){};
    /**
     * Performs labels and connecting lines layout
     *
     * @protected
     * @param {geotoolkit.renderer.RenderingContext} context rendering context
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} nodesLabeled array of {geotoolkit.schematics.scene.ComponentNode}
     * @param {geotoolkit.schematics.labeling.LocationType} locationType location type
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} labelsDataArray array of {geotoolkit.schematics.labeling.LabelData}
     * @param {?geotoolkit.scene.Group} group group to label
     * @param {boolean} isHorizontal horizontal flag
     */
    geotoolkit.schematics.labeling.XYLabelingStrategy.prototype.doLabelingOnOneSide = function(context, nodesLabeled, locationType, labelsDataArray, group, isHorizontal){};

/**
* Symbol label shape implementation
*
* @class geotoolkit.schematics.labeling.SymbolLabelShape
* @augments geotoolkit.schematics.labeling.LabelShape
*/
geotoolkit.schematics.labeling.SymbolLabelShape = {};
    /**
     * Gets label symbol shape
     *
     * @returns {geotoolkit.scene.shapes.Symbol}
     */
    geotoolkit.schematics.labeling.SymbolLabelShape.prototype.getLabelSymbol = function(){};
    /**
     * Gets label text shape
     *
     * @returns {geotoolkit.scene.shapes.Text}
     */
    geotoolkit.schematics.labeling.SymbolLabelShape.prototype.getLabelText = function(){};
    /**
     * Gets label data
     *
     * @returns {geotoolkit.schematics.labeling.LabelData}
     */
    geotoolkit.schematics.labeling.SymbolLabelShape.prototype.getLabelData = function(){};
    /**
     * Sets label data
     *
     * @param {geotoolkit.schematics.labeling.LabelData} labelData label data
     * @returns {geotoolkit.schematics.labeling.SymbolLabelShape} this
     */
    geotoolkit.schematics.labeling.SymbolLabelShape.prototype.setLabelData = function(labelData){};
    /**
     * Renders itself
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.labeling.SymbolLabelShape.prototype.render = function(context){};
    /**
     * Gets bounding box in model space
     *
     * @param {geotoolkit.util.Transformation} [transformation] scene transformation
     * @param {boolean} isHorizontal [isHorizontal] flag
     * @returns {geotoolkit.util.Rect}
     */
    geotoolkit.schematics.labeling.SymbolLabelShape.prototype.getBoundingBox = function(transformation, isHorizontal){};
    /**
     * Clones itself
     *
     * @returns {geotoolkit.schematics.labeling.SymbolLabelShape} clone
     */
    geotoolkit.schematics.labeling.SymbolLabelShape.prototype.clone = function(){};

/**
* Abstract label connector shape representation
*
* @class geotoolkit.schematics.labeling.ConnectorShape
*/
geotoolkit.schematics.labeling.ConnectorShape = {};
    /**
     * Gets label data
     *
     * @returns {geotoolkit.schematics.labeling.LabelData}
     */
    geotoolkit.schematics.labeling.ConnectorShape.prototype.getLabelData = function(){};
    /**
     * Sets label data
     *
     * @param {geotoolkit.schematics.labeling.LabelData} labelData label Data
     * @returns {geotoolkit.schematics.labeling.ConnectorShape} this
     */
    geotoolkit.schematics.labeling.ConnectorShape.prototype.setLabelData = function(labelData){};
    /**
     * Renders itself
     * @function
     * @abstract
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.labeling.ConnectorShape.prototype.render = function(context){};

/**
* Polyline label connector shape representation
*
* @class geotoolkit.schematics.labeling.DefaultConnectorShape
* @augments geotoolkit.schematics.labeling.ConnectorShape
*/
geotoolkit.schematics.labeling.DefaultConnectorShape = {};
    /**
     * Gets line style
     *
     * @returns {geotoolkit.attributes.LineStyle} current line style
     */
    geotoolkit.schematics.labeling.DefaultConnectorShape.prototype.getLineStyle = function(){};
    /**
     * Sets line style
     *
     * @param {geotoolkit.attributes.LineStyle | object | string} lineStyle line style or options
     * @param {string|geotoolkit.util.RgbaColor} [lineStyle.color] line color
     * @param {number} [lineStyle.width] line width
     * @param {Array.<number>} [lineStyle.pattern] line pattern
     * @param {boolean} [merge=false] true if you want to merge lineStyle with existing attribute, false by default
     * @returns {geotoolkit.schematics.labeling.DefaultConnectorShape} this
     */
    geotoolkit.schematics.labeling.DefaultConnectorShape.prototype.setLineStyle = function(lineStyle, merge){};
    /**
     * Renders itself
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.labeling.DefaultConnectorShape.prototype.render = function(context){};

/**
 * LineConnector Shape
 *
 * @class geotoolkit.schematics.labeling.LineConnector
 * @augments geotoolkit.schematics.labeling.ConnectorShape
 */
geotoolkit.schematics.labeling.LineConnector = {};
    /**
     * Renders itself
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.labeling.LineConnector.prototype.render = function(context){};
    /**
     * Gets line style
     *
     * @returns {geotoolkit.attributes.LineStyle} current line style
     */
    geotoolkit.schematics.labeling.LineConnector.prototype.getLineStyle = function(){};
    /**
     * Sets line style
     *
     * @param {geotoolkit.attributes.LineStyle | object} linestyle line style or options
     * @param {string|geotoolkit.util.RgbaColor} [linestyle.color] color
     * @param {number} [linestyle.width] line width
     * @param {number[]} [linestyle.pattern] pattern
     * @returns {geotoolkit.schematics.labeling.LineConnector} this
     */
    geotoolkit.schematics.labeling.LineConnector.prototype.setLineStyle = function(linestyle){};

/**
 * Components filter interface
 * @interface
 */
geotoolkit.schematics.labeling.IComponentsFilter = {};
    /**
     * Gets iterator over filtered components
     * @function
     * @abstract
     * @param {geotoolkit.util.Iterator} iterator input components iterator
     * @param {geotoolkit.renderer.RenderingContext} context rendering context
     *
     * @returns {geotoolkit.util.Iterator} iterator iterator over components to label
     */
    geotoolkit.schematics.labeling.IComponentsFilter.prototype.filterComponents = function(iterator, context){};
    /**
     * Resets itself
     * @function
     * @abstract
     * @param {object} options options
     * @returns {geotoolkit.schematics.labeling.IComponentsFilter} this
     */
    geotoolkit.schematics.labeling.IComponentsFilter.prototype.reset = function(options){};

/**
 * Default components filter implementation
 *
 * @class geotoolkit.schematics.labeling.DefaultComponentsFilter
 * @implements geotoolkit.schematics.labeling.IComponentsFilter
 *
 * @param {object} options options
 * @param {!function} options.labelinfoprovider label info provider
 * @param {!array} [options.componentnames=[]] whitelist of component names to label
 * @param {string} [options.orientation='vertical'] orientation
 * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [options.viewmode=geotoolkit.schematics.scene.WellBoreNode.ViewMode.Compressed] view mode
 * @param {number} [options.mdsizedevice=3] smallest component MD-size to have label (in device space)
 */
geotoolkit.schematics.labeling.DefaultComponentsFilter = {};
    /**
     * Gets iterator over filtered components
     *
     * @param {geotoolkit.util.Iterator} iterator input components iterator
     * @param {geotoolkit.renderer.RenderingContext} context rendering context
     *
     * @returns {geotoolkit.util.Iterator} iterator over components to label
     */
    geotoolkit.schematics.labeling.DefaultComponentsFilter.prototype.filterComponents = function(iterator, context){};
    /**
     * Resets itself using given options
     *
     * @param {object} [options] options
     * @param {!function} options.labelinfoprovider label info provider
     * @param {!array} [options.componentnames] whitelist of component names to label
     * @param {string} [options.orientation] orientation
     * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [options.viewmode] view mode
     * @param {number} [options.mdsizedevice] smallest component size to have label (in device space)
     * @param {geotoolkit.util.Rect} [options.labelsarea] labels area in device space
     *
     * @returns {geotoolkit.schematics.labeling.DefaultComponentsFilter}
     */
    geotoolkit.schematics.labeling.DefaultComponentsFilter.prototype.reset = function(options){};

/**
 * Versatile labeling strategy implementation.
 *
 * @class geotoolkit.schematics.labeling.VersatileLabelingStrategy
 * @augments geotoolkit.schematics.labeling.LabelingStrategyBase
 *
 * @param {object} parameters strategy parameters (see base class for inherited options)
 * @param {!geotoolkit.layout.ILayout1D} [parameters.layout1d=new geotoolkit.layout.ValueCorrelatedRangeLayout1D()] layout to apply to labels
 * @param {!number} [parameters.gap=4] gap between labels along MD-axis
 */
geotoolkit.schematics.labeling.VersatileLabelingStrategy = {};
    /**
     * Gets 1D-layout
     *
     * @returns {geotoolkit.layout.ILayout1D}
     */
    geotoolkit.schematics.labeling.VersatileLabelingStrategy.prototype.getLayout1D = function(){};
    /**
     * Sets 1D-layout
     *
     * @param {!geotoolkit.layout.ILayout1D} layout1D layout to set
     * @returns {geotoolkit.schematics.labeling.VersatileLabelingStrategy}
     */
    geotoolkit.schematics.labeling.VersatileLabelingStrategy.prototype.setLayout1D = function(layout1D){};
    /**
     * Sets labeling area(s) bounds
     *
     * @param {object} bounds labeling area bounds
     * @returns {geotoolkit.schematics.labeling.VersatileLabelingStrategy} this
     */
    geotoolkit.schematics.labeling.VersatileLabelingStrategy.prototype.setLabelsBounds = function(bounds){};
    /**
     * Gets labeling area(s) bounds
     * @param {string} [location] permitted values: "Left", "Right", "Top" or "Bottom"
     * @returns {object|geotoolkit.util.Rect|undefined}
     */
    geotoolkit.schematics.labeling.VersatileLabelingStrategy.prototype.getLabelsBounds = function(location){};
    /**
     * Performs labels and connecting lines layout.
     * The implementation layouts all the labels withing one column (along well bore depth axis)
     * and aligns them according to "getLabelAlignment()" value.
     * Returns label data to render
     * @protected
     * @param {geotoolkit.renderer.RenderingContext} context rendering context
     * @param {Array<geotoolkit.schematics.scene.ComponentNode>} nodes array of {geotoolkit.schematics.scene.ComponentNode}
     * @param {geotoolkit.schematics.labeling.LocationType} locationType location type
     * @param {Array<geotoolkit.schematics.labeling.LabelData>} dst array of {geotoolkit.schematics.labeling.LabelData}
     * @param {?geotoolkit.scene.Group} group group
     * @param {boolean} isHorizontal horizontal flag
     */
    geotoolkit.schematics.labeling.VersatileLabelingStrategy.prototype.doLabelingOnOneSide = function(context, nodes, locationType, dst, group, isHorizontal){};

/**
* Default implementation for wellbore with labels.
* If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into “geotoolkit.plot.Plot” as a root.
* If labeling IS needed then “geotoolkit.schematics.scene.WellBoreWithLabels” object must be created based on user’s WellBoreNode object.
*
* @class geotoolkit.schematics.scene.WellBoreWithLabels
* @augments geotoolkit.scene.Group
* @param {object} [parameters] options to initialize the labeled well bore node
* @param {geotoolkit.schematics.scene.WellBoreNode} [parameters.wellBoreNode==null] labeled well bore node
* @param {geotoolkit.schematics.labeling.LabelingStrategy} [parameters.labelingStrategy==geotoolkit.schematics.labeling.DefaultLabelingStrategy] labeling strategy
*/
geotoolkit.schematics.scene.WellBoreWithLabels = {};
    /**
     * Enum of labeling mode
     * @enum
     * @readonly
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode = {};
        /**
         * Docked
         * @type {string}
         */
        geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode.LabelingModeDocked = "";
        /**
         * Adjacent
         * @type {string}
         */
        geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode.LabelingModeAdjacent = "";
        /**
         * Custom
         * @type {string}
         */
        geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode.LabelingModeCustom = "";
    /**
     * Sets layout handler
     * @param {function()} handler layout handler
     * @returns {geotoolkit.schematics.scene.WellBoreWithLabels} this
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.setOnDoLayoutHandler = function(handler){};
    /**
     * Gets layout handler
     * @returns {function()} layout handler
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.getOnDoLayoutHandler = function(){};
    /**
     * Gets well bore node
     *
     * @returns {geotoolkit.schematics.scene.WellBoreNode}
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.getWellBoreNode = function(){};
    /**
     * Sets well bore node
     * @param {geotoolkit.schematics.scene.WellBoreNode} wellBoreNode well bore node
     * @returns {geotoolkit.schematics.scene.WellBoreWithLabels}
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.setWellBoreNode = function(wellBoreNode){};
    /**
     * Sets labeling strategy
     * @param {geotoolkit.schematics.labeling.LabelingStrategy} strategy labeling stratery
     * @throws {Error} if parameter is not an instance of {geotoolkit.schematics.labeling.LabelingStrategy} class
     * @returns {geotoolkit.schematics.scene.WellBoreWithLabels}
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.setLabelingStrategy = function(strategy){};
    /**
     * Gets labeling strategy. Default: {geotoolkit.schematics.labeling.DefaultLabelingStrategy} instance
     * @returns {geotoolkit.schematics.labeling.LabelingStrategy}
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.getLabelingStrategy = function(){};
    /**
     * Gets current labeling mode. Default: {string} WellBoreWithLabels.LabelingMode.LabelingModeDocked
     * @returns {geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode} labeling mode ("Docked", "Adjacent" or "Custom")
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.getLabelingMode = function(){};
    /**
     * Sets labeling mode. NOTE: to setup custom labeling mode use
     * "setLabelingStrategy" method directly.
     * @param {geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode} labelingMode labeling mode
     * @returns {geotoolkit.schematics.scene.WellBoreWithLabels}
     * @throws {Error} if parameter is not neither "Docked" nor "Adjacent" value.
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.setLabelingMode = function(labelingMode){};
    /**
     * Renders contained well bore node as well as labels
     * according to active labeling strategy
     *
     * @param {geotoolkit.renderer.RenderingContext} context Rendering Context
     */
    geotoolkit.schematics.scene.WellBoreWithLabels.prototype.render = function(context){};

/**
 * Represents deviated wellbore node with labels. It wraps wellBoreNode with automatically created geotoolkit.scene.DeviatedCompositeNode.
 *
 * @class geotoolkit.schematics.scene.DeviatedWellBoreWithLabels
 * @augments geotoolkit.scene.Group
 * @param {object} options options @see {@link geotoolkit.scene.Group} for more options description
 * @param {geotoolkit.schematics.scene.WellBoreNode} options.wellBoreNode wellbore node
 */
geotoolkit.schematics.scene.DeviatedWellBoreWithLabels = {};
    /**
     * @inheritdoc
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.render = function(){};
    /**
     * Sets deviation options.
     *
     * @param {?object} options deviation options
     * @param {geotoolkit.deviation.Trajectory2d} options.trajectory trajectory along the path
     * @param {geotoolkit.deviation.Transformer2d} [options.transformer=new geotoolkit.deviation.PiecewiseTransformer] transformer to be used
     * @param {number} [options.trackWidth=100] track width
     * @param {number} [options.offset=0] offset in pixels to the trajectory segment
     * @param {number} [options.clip=true] flag to enable clipping
     * @returns {geotoolkit.schematics.scene.DeviatedWellBoreWithLabels} this
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.setDeviation = function(options){};
    /**
     * Sets layout handler
     * @param {function()} handler layout handler
     * @returns {geotoolkit.schematics.scene.DeviatedWellBoreWithLabels} this
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.setOnDoLayoutHandler = function(handler){};
    /**
     * Gets layout handler
     * @returns {function()} layout handler
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.getOnDoLayoutHandler = function(){};
    /**
     * Gets well bore node
     *
     * @returns {geotoolkit.schematics.scene.WellBoreNode}
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.getWellBoreNode = function(){};
    /**
     * Sets well bore node
     * @param {geotoolkit.schematics.scene.WellBoreNode} wellBoreNode well bore node
     * @returns {geotoolkit.schematics.scene.DeviatedWellBoreWithLabels}
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.setWellBoreNode = function(wellBoreNode){};
    /**
     * Sets labeling strategy
     * @param {geotoolkit.schematics.labeling.LabelingStrategy} strategy labeling strategy
     * @throws {Error} if parameter is not an instance of {geotoolkit.schematics.labeling.LabelingStrategy} class
     * @returns {geotoolkit.schematics.scene.DeviatedWellBoreWithLabels}
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.setLabelingStrategy = function(strategy){};
    /**
     * Gets labeling strategy. Default: {geotoolkit.schematics.labeling.DefaultDeviatedStrategy} instance
     * @returns {geotoolkit.schematics.labeling.LabelingStrategy}
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.getLabelingStrategy = function(){};
    /**
     * Gets current labeling mode. Default: {string} WellBoreWithLabels.LabelingMode.LabelingModeDocked
     * @returns {geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode} labeling mode ("Docked", "Adjacent" or "Custom")
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.getLabelingMode = function(){};
    /**
     * Sets labeling mode. NOTE: to setup custom labeling mode use
     * "setLabelingStrategy" method directly.
     * @param {geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode} labelingMode labeling mode
     * @returns {geotoolkit.schematics.scene.DeviatedWellBoreWithLabels}
     * @throws {Error} if parameter is not neither "Docked" nor "Adjacent" value.
     */
    geotoolkit.schematics.scene.DeviatedWellBoreWithLabels.prototype.setLabelingMode = function(labelingMode){};

/**
* Node selector implementation for schematics needs.
*
* @class geotoolkit.schematics.utils.ComponentNodeSelector
* @augments geotoolkit.selection.Selector
* @param {geotoolkit.util.Transformation} [transformation] scene transformation
*/
geotoolkit.schematics.utils.ComponentNodeSelector = {};
    /**
    * The implementation returns {geotoolkit.schematics.scene.ComponentNode} objects at the location provided.
    * @param {geotoolkit.schematics.scene.ComponentNode} root node to be used for selection.
    * @param {number} x x-coordinate
    * @param {number} y y-coordinate
    * @param {number} radius selection radius
    * @returns {Array} a collection of selected {geotoolkit.schematics.scene.ComponentNode} nodes
    */
    geotoolkit.schematics.utils.ComponentNodeSelector.prototype.select = function(root, x, y, radius){};

/**
 * States ViewMode.KeepAspectRatio "regular" effective range height calculator interface
 * @interface
 */
geotoolkit.schematics.builder.IGetRangeHeight = {};
    /**
     * Calculates range effective height
     * @function
     * @abstract
     * @param {!Array} kars array of KeepAspectRatio-elements infos
     *
     * @returns {!number} range height
     */
    geotoolkit.schematics.builder.IGetRangeHeight.prototype.getHeight = function(kars){};

/**
 * ByType filters out all features that are not featureType(s) instances.
 *
 * @class geotoolkit.schematics.builder.GetAverageEffectiveHeight
 * @implements geotoolkit.schematics.builder.IGetRangeHeight
 */
geotoolkit.schematics.builder.GetAverageEffectiveHeight = {};
    /**
     * Calculates range effective height
     * @param {!Array} kars array of KeepAspectRatio-elements infos
     * @returns {!number} range height
     */
    geotoolkit.schematics.builder.GetAverageEffectiveHeight.prototype.getHeight = function(kars){};

/**
* Schematics view mode builder interface
*
* @interface
*/
geotoolkit.schematics.builder.IViewModeBuilder = {};
    /**
     * Builds view mode
     * @function
     * @abstract
     * @param {geotoolkit.util.Iterator} it component nodes iterator
     * @returns {?object} {modelLimitsDepths: {Array}, boundsDepths: {Array} }
     */
    geotoolkit.schematics.builder.IViewModeBuilder.prototype.build = function(it){};

/**
* Builder for schematics "Regular" view mode
*
* @class geotoolkit.schematics.builder.RegularViewModeBuilder
* @implements geotoolkit.schematics.builder.IViewModeBuilder
*/
geotoolkit.schematics.builder.RegularViewModeBuilder = {};
    /**
     * Builds view mode
     * @param {geotoolkit.util.Iterator} it component nodes iterator
     *
     * @returns {?object} mapping "model limits to bounds" depths mapping
     * @returns {!Array} mapping.modelLimitsDepths model limits depths
     * @returns {!Array} mapping.boundsDepths bounds depths
     */
    geotoolkit.schematics.builder.RegularViewModeBuilder.prototype.build = function(it){};

/**
* Builder for schematics "Compressed" view mode
*
* @class geotoolkit.schematics.builder.CompressedViewModeBuilder
* @implements geotoolkit.schematics.builder.IViewModeBuilder
*
* @param {object} [options] view mode options
* @param {!boolean} [options.horizontal=false] elements orientation
*/
geotoolkit.schematics.builder.CompressedViewModeBuilder = {};
    /**
     * Builds view mode
     * @param {geotoolkit.util.Iterator} it component nodes iterator
     *
     * @returns {?object} mapping "model limits to bounds" depths mapping
     * @returns {!Array} mapping.modelLimitsDepths model limits depths
     * @returns {!Array} mapping.boundsDepths bounds depths
     */
    geotoolkit.schematics.builder.CompressedViewModeBuilder.prototype.build = function(it){};
    /**
     * Gets builder options
     *
     * @returns {object} builder options
     */
    geotoolkit.schematics.builder.CompressedViewModeBuilder.prototype.getOptions = function(){};
    /**
     * Sets builder options
     * @param {object} options builder options
     * @returns {geotoolkit.schematics.builder.CompressedViewModeBuilder} this
     */
    geotoolkit.schematics.builder.CompressedViewModeBuilder.prototype.setOptions = function(options){};

/**
* Builder for schematics "KeepAspectRatio" view mode
*
* @class geotoolkit.schematics.builder.KeepAspectRatioViewModeBuilder
* @implements geotoolkit.schematics.builder.IViewModeBuilder
*
* @param {object} [options] view mode options
* @param {!number} [options.defaultaspectratio=1] default aspect ratio value
*
* @param {object} [options.rangeheight] regular ranges settings
* @param {!geotoolkit.schematics.builder.IGetRangeHeight} [options.rangeheight.top=new geotoolkit.schematics.builder.GetAverageEffectiveHeight()] top range height calculator
* @param {!geotoolkit.schematics.builder.IGetRangeHeight} [options.rangeheight.between=new geotoolkit.schematics.builder.GetAverageEffectiveHeight()] "between" range(s) height calculator
* @param {!geotoolkit.schematics.builder.IGetRangeHeight} [options.rangeheight.bottom=new geotoolkit.schematics.builder.GetAverageEffectiveHeight()] bottom range height calculator
*/
geotoolkit.schematics.builder.KeepAspectRatioViewModeBuilder = {};
    /**
     * Gets AspectRatio for the component; or "NoAspectRatio"-value
     * @param {!string} name component name
     * @param {!object} options KAR-info map
     * @returns {?number}
     */
    geotoolkit.schematics.builder.KeepAspectRatioViewModeBuilder.prototype.getAssignedAspectRatio = function(name, options){};
    /**
     * Builds view mode
     * @param {geotoolkit.util.Iterator} it component nodes iterator
     *
     * @returns {?object} mapping "model limits to bounds" depths mapping
     * @returns {!Array} mapping.modelLimitsDepths model limits depths
     * @returns {!Array} mapping.boundsDepths bounds depths
     */
    geotoolkit.schematics.builder.KeepAspectRatioViewModeBuilder.prototype.build = function(it){};
    /**
     * Gets builder options
     *
     * @returns {object} builder options
     */
    geotoolkit.schematics.builder.KeepAspectRatioViewModeBuilder.prototype.getOptions = function(){};
    /**
     * Sets builder options
     * @param {object} options builder options
     * @returns {geotoolkit.schematics.builder.KeepAspectRatioViewModeBuilder} this
     */
    geotoolkit.schematics.builder.KeepAspectRatioViewModeBuilder.prototype.setOptions = function(options){};

