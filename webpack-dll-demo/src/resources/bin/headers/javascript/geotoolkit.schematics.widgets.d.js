/**
 * API to create high level reusable graphics components to build schematics widgets
 * @namespace */
geotoolkit.schematics.widgets = {};

/**
 * API to create high level reusable graphics components to build schematics widgets
 * @namespace */
geotoolkit.schematics.widgets.painters = {};

/**
 * API for sync operation in schematics widgets
 * @namespace */
geotoolkit.schematics.widgets.sync = {};

/**
 * Default sea level drawing
 *
 * @class geotoolkit.schematics.widgets.painters.SeaLevelSymbolPainter
 * @param {geotoolkit.scene.shapes.Symbol} symbol
 * @param {geotoolkit.util.Rect} bbox
 * @param {geotoolkit.renderer.RenderingContext} context
 * */
geotoolkit.schematics.widgets.painters.SeaLevelSymbolPainter = {};

/**
 * <p>
 * A schematics widget overrides {@link geotoolkit.widgets.AnnotatedWidget} class
 * to work with {@link geotoolkit.schematics.scene.WellBoreNode} as a data model with labeling capabilities
 * </p>
 * <p>
 * SchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link geotoolkit.schematics.scene.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 *
 * @class geotoolkit.schematics.widgets.SchematicsWidget
 * @augments geotoolkit.widgets.AnnotatedWidget
 *
 * @param {object} [arg] argument object
 *
 * @param {object} [arg.options] options (see "setOptions" API for detailed description)
 * @param {geotoolkit.schematics.labeling.LabelingStrategy|object} [arg.options.labelingStrategy = new geotoolkit.schematics.labeling.VersatileLabelingStrategy()] labeling strategy
 * @param {geotoolkit.schematics.labeling.AlignmentType} [arg.options.labelingStrategy.defaultAlignment=geotoolkit.schematics.labeling.AlignmentType.Inner] labels alignment type
 * @param {geotoolkit.schematics.labeling.LocationType} [arg.options.labelingStrategy.defaultLocation=geotoolkit.schematics.labeling.LocationType.Right] labels default location area type
 * @param {geotoolkit.layout.BoxLayout.Alignment} [arg.options.alignment=geotoolkit.layout.BoxLayout.Left] wellbore horizontal alignment
 * @param {number} [arg.options.gap=60] gap size between vertical (MD) axis and wellbore as well as between wellbore and labeling area
 * @param {object} [arg.options.annotationssizes] annotations sizes section
 * @param {number} [arg.options.annotationssizes.west=65] west annotation (axis area) size
 * @param {number} [arg.options.annotationssizes.north=60] north annotation (widget title) size
 * @param {object} [arg.options.west] west annotation configuration
 * @param {object} [arg.options.west.axis] west axis configuration
 * @param {geotoolkit.axis.TickInfo.TickPosition} [arg.options.west.axis.tickposition=geotoolkit.axis.TickInfo.TickPosition.LeftAndRight] west axis tick position
 * @param {geotoolkit.axis.TickInfo.LabelPosition} [arg.options.west.axis.labelposition=geotoolkit.axis.TickInfo.LabelPosition.Center] west axis label position
 * @param {object} [arg.options.sealevel] sea level options
 * @param {object} [arg.options.sealevel.depth=0] sea level display depth
 * @param {boolean} [arg.options.sealevel.visible=false] sea level visibility flag
 * @param {object} [arg.options.wellborenode] wellbore node options (see WellBoreNode's "setOptions" API for detailed description)
 * @param {boolean} [arg.options.wellborenode.automodellimitsmode=true] wellbore node auto model limits mode flag
 * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [arg.options.wellborenode.viewMode= geotoolkit.schematics.scene.WellBoreNode.ViewMode.Compressed] view mode
 * @param {geotoolkit.scene.ScaleScrollStrategy} [arg.options.scalescrollstrategy=geotoolkit.scene.ScaleScrollStrategy.restrictVisibleModelLimits]
 * @param {object|Array|geotoolkit.schematics.data.WellBoreData} [arg.data] wellbore data
 *
 * @param {object} [arg.options.tooltip] tooltip settings
 * @param {!function} [arg.options.tooltip.gettext] get tooltip text function
 * @param {HTMLElement} [arg.options.tooltip.divelement] HTML div container element or it will be created with className cg-tooltip-container
 *
 * @example
 * <caption> 1). Initialise Widget </caption>
 * // Initialize the data
 * var wellBoreData = window.createWellBoreData(); // use addComponent() to add data and geometry to the geotoolkit.schematics.data.WellBoreData();
 * // Create the widget using the data
 * var widget = new geotoolkit.schematics.widgets.SchematicsWidget({'options': options, 'data': wellBoreData});
 */
geotoolkit.schematics.widgets.SchematicsWidget = {};
    /**
     * Gets well bore view mode
     * @returns {geotoolkit.schematics.scene.WellBoreNode.ViewMode} viewMode
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.getViewMode = function(){};
    /**
     * Sets well bore view mode
     * @param {!geotoolkit.schematics.scene.WellBoreNode.ViewMode} viewMode well bore view mode
     * @param {object} [options] the mode options
     * @returns {?object} mapping "model limits to bounds" depths mapping
     * @returns {!Array} mapping.modelLimitsDepths model limits depths
     * @returns {!Array} mapping.boundsDepths bounds depths
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.setViewMode = function(viewMode, options){};
    /**
     * Gets model coordinates at given device ones
     * @param {!geotoolkit.util.Point} ptDevice device point
     * @param {!geotoolkit.util.Point} [ptModel] model point
     * @returns {!geotoolkit.util.Point}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.getModelPoint = function(ptDevice, ptModel){};
    /**
     * Gets device coordinates at given model ones
     * @param {!geotoolkit.util.Point} ptModel model point
     * @param {!geotoolkit.util.Point} [ptDevice] device point
     * @returns {!geotoolkit.util.Point}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.getDevicePoint = function(ptModel, ptDevice){};
    /**
     * Gets labeling strategy
     * @returns {geotoolkit.schematics.labeling.LabelingStrategy}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.getLabelingStrategy = function(){};
    /**
     * Gets WellBoreNode's model limits
     * @returns {?geotoolkit.util.Rect}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.getCenterModelLimits = function(){};
    /**
     * function call in the constructor to initialize tools in the widget
     * @returns {geotoolkit.schematics.widgets.SchematicsWidget}
     * @protected
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.initializeTools = function(){};
    /**
     * Gets {@link geotoolkit.schematics.data.WellBoreData} data instance
     * @returns {!geotoolkit.schematics.data.WellBoreData}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.getData = function(){};
    /**
     * Sets data
     * @param {geotoolkit.schematics.data.WellBoreData|Array|null} data wellbore data to set
     * @returns {geotoolkit.schematics.widgets.SchematicsWidget}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.setData = function(data){};
    /**
     * Gets widget options
     *
     * @returns {object} widget options
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.getOptions = function(){};
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param {object} options widget options
     * @param {geotoolkit.schematics.labeling.LabelingStrategy} [options.labelingStrategy] labeling strategy
     * @param {number} [options.gap] gap size between vertical (MD) axis and wellbore as well as between wellbore and labeling area
     * @param {object} [options.annotationssizes] annotations sizes section
     * @param {object} [options.west] west annotation configuration
     * @param {object} [options.north] north annotation configuration
     * @param {object} [options.east] east annotation configuration
     * @param {object} [options.south] south annotation configuration
     *
     * @param {object} [options.wellborenode] wellborenode options
     * @param {geotoolkit.schematics.factory.ComponentNodeFactoryRegistry} [options.wellborenode.registry] factory registry
     * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} [options.wellborenode.viewMode] view mode
     * @param {boolean} [options.wellborenode.automodellimitsmode] auto model limits mode
     * @param {geotoolkit.util.Rect} [options.wellborenode.modellimits] model limits. The parameter is ignored if "automodellimitsmode==true"
     * @param {object} [options.wellborenode.renderinghints] rendering hints
     *
     * @returns {geotoolkit.schematics.widgets.SchematicsWidget}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.setOptions = function(options){};
    /**
     * Updates layout(s)
     * @param {Array<geotoolkit.scene.Node>} [targets] not used (entire content gets layouted)
     * @returns {geotoolkit.schematics.widgets.SchematicsWidget}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.updateLayout = function(targets){};
    /**
     * Gets all the properties pertaining to this object
     * @returns {object} props JSON containing properties
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.getProperties = function(){};
    /**
     * Sets all the properties pertaining to this object
     *
     * @param {!object} options JSON containing properties
     * @param {geotoolkit.schematics.labeling.LabelingStrategy} [options.labelingStrategy] labeling strategy
     * @param {number} [options.gap] gap size between vertical (MD) axis and wellbore as well as between wellbore and labeling area
     * @param {object} [options.annotationssizes] annotations sizes section
     * @param {object} [options.west] west annotation configuration
     * @param {object} [options.north] north annotation configuration
     * @param {object} [options.east] east annotation configuration
     * @param {object} [options.south] south annotation configuration
     *
     * @returns {geotoolkit.schematics.widgets.SchematicsWidget} this
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.setProperties = function(options){};
    /**
     * Export a part of the container to PDF
     * <p>This method sets automatically export scale and limits based on input parameters and current model scale and limits</p>
     * @param {object} [options=null] option to specify paper parameters and header and footer
     * @param {geotoolkit.scene.exports.HeaderComponent} [options.header = null] define optional header
     * @param {geotoolkit.scene.exports.FooterComponent} [options.footer = null] define optional header
     * @param {string} [options.output = 'PDF Output'] define optional output filename
     * @param {object} [options.printsettings] define optional paper and export parameters
     * @param {geotoolkit.scene.exports.AbstractPaperFormat|string} [options.printsettings.paperformat] define optional paper paper format
     * @param {number} [options.printsettings.top=0.85] define optional top margin
     * @param {number} [options.printsettings.bottom=0.85] define optional bottom margin
     * @param {number} [options.printsettings.left=1.1] define optional left margin
     * @param {number} [options.printsettings.right=1.1] define optional top margin
     * @param {string} [options.printsettings.orientation='Portrait'] define optional paper orientation
     * @param {string} [options.printsettings.scaling='AsIs'] define optional scaling mode
     * @param {boolean} [options.printsettings.keepaspectratio=true] keep aspect ratio
     * @param {boolean} [options.printsettings.continuous=false] continuous printing
     * @param {boolean} [options.printsettings.drawwesttoeast=true] draw pages from West to East
     * @param {geotoolkit.util.Rect} [options.modellimits] model limits that should be exported. By default the virtual limits
     * @param {object} [options.scale] export scale by default as is
     * @param {number} [options.scale.x] export scale by x
     * @param {number} [options.scale.y] export scale by y
     * @param {object} [options.imagecompression] options to specify the image compression
     * @param {geotoolkit.pdf.ImageCompression} [options.imagecompression.mode=geotoolkit.pdf.ImageCompression.AUTO] image compression method used to exporting pdf.
     * @param {number} [options.imagecompression.quality=1] quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
     * @param {geotoolkit.pdf.SpeedCompression} [options.imagecompression.speed=geotoolkit.pdf.SpeedCompression.MEDIUM] speed referring to the png compression speed, available for png mode only.
     * @param {boolean} [options.streamcompression=true] enable or disable pdf output compression
     * @param {string} [options.output=null] the name of the file to be created
     * @param {boolean} [options.save=true] flag to save the stream directly to file or open dialog
     * @returns {geotoolkit.util.Promise}
     */
    geotoolkit.schematics.widgets.SchematicsWidget.prototype.exportToPdf = function(options){};

/**
 * <p>
 * A L-shaped schematics widget overrides {@link geotoolkit.widgets.AnnotatedWidget} class
 * to work with {@link geotoolkit.schematics.scene.LShapedWellBoreNode} as a data model with labeling capabilities
 * </p>
 * <p>
 * LShapedSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link geotoolkit.schematics.scene.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 *
 * @class geotoolkit.schematics.widgets.LShapedSchematicsWidget
 * @augments geotoolkit.widgets.AnnotatedWidget
 *
 * @param {object} [arg] argument object
 *
 * @param {object} [arg.options] options
 *
 * @param {object} [arg.options.annotationssizes] annotations sizes section
 * @param {number} [arg.options.annotationssizes.west=0] west annotation size
 * @param {number} [arg.options.annotationssizes.north=0] north annotation size
 * @param {number} [arg.options.annotationssizes.east=0] east annotation size
 * @param {number} [arg.options.annotationssizes.south=0] south annotation size
 *
 * @param {?geotoolkit.schematics.labeling.LabelingStrategy} [arg.options.labelingStrategy=new geotoolkit.schematics.labeling.VersatileLabelingStrategy({'defaultLocation': geotoolkit.schematics.labeling.LocationType.Right})] labeling strategy
 * @param {object} [arg.options.wellborenode] wellbore node options
 * @param {!geotoolkit.schematics.scene.WellBoreNode.ViewMode} [arg.options.wellborenode.viewMode=geotoolkit.schematics.scene.WellBoreNode.ViewMode.Regular] view mode
 * @param {number} [arg.options.wellborenode.trackWidth=150] track width
 * @param {?number} [arg.options.wellborenode.deviationDepth=null] deviation depth (if "null" then it's calculated based on the data)
 * @param {!number} [arg.options.wellborenode.LShapeAccuracy=16] accuracy (bigger number means smoother L-shape)
 *
 * @param {geotoolkit.scene.ScaleScrollStrategy} [arg.options.scalescrollstrategy=geotoolkit.scene.ScaleScrollStrategy.restrictVisibleModelLimits] scale scroll strategy
 *
 * @param {object} [arg.options.tooltip] tooltip settings
 * @param {!function} [arg.options.tooltip.gettext] get tooltip text function
 * @param {HTMLElement} [arg.options.tooltip.divelement] HTML div container element or it will be created with className cg-tooltip-container
 *
 * @param {object|Array|geotoolkit.schematics.data.WellBoreData} [arg.data] wellbore data
 */
geotoolkit.schematics.widgets.LShapedSchematicsWidget = {};
    /**
     * Gets widget options
     *
     * @returns {object} widget options
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.getOptions = function(){};
    /**
     * Sets well bore view mode
     * @param {geotoolkit.schematics.scene.WellBoreNode.ViewMode} viewMode well bore view mode
     * @returns {?Object} props JSON-object
     * @returns {Array} props.modelLimitsDepths model limits depths
     * @returns {Array} props.boundsDepths bounds depths
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.setViewMode = function(viewMode){};
    /**
     * Gets {@link geotoolkit.schematics.data.WellBoreData} data instance
     * @returns {!geotoolkit.schematics.data.WellBoreData}
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.getData = function(){};
    /**
     * Sets data
     * @param {geotoolkit.schematics.data.WellBoreData|Array|null} data wellbore data to set
     * @returns {geotoolkit.schematics.widgets.LShapedSchematicsWidget} this
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.setData = function(data){};
    /**
     * Gets WellBoreWithLabels's model limits
     * @returns {?geotoolkit.util.Rect}
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.getCenterModelLimits = function(){};
    /**
     * Gets labeling strategy
     * @returns {geotoolkit.schematics.labeling.VersatileLabelingStrategy}
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.getLabelingStrategy = function(){};
    /**
     * Updates layout(s)
     * @param {Array<geotoolkit.scene.Node>} [targets] not used (entire content gets layouted)
     * @returns {geotoolkit.schematics.widgets.LShapedSchematicsWidget}
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.updateLayout = function(targets){};
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param {geotoolkit.util.Rect | object} bounds bound of the node in the parent coordinates
     * @returns {geotoolkit.schematics.widgets.LShapedSchematicsWidget} this
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.setBounds = function(bounds){};
    /**
     * Initializes tools in the widget
     * @protected
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.initializeTools = function(){};
    /**
     * Resets well bore to its original state
     * @returns {geotoolkit.schematics.widgets.LShapedSchematicsWidget}
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.fitToBounds = function(){};
    /**
     * Translates model
     * @param {number} dx dx
     * @param {number} dy dy
     * @returns {geotoolkit.schematics.widgets.LShapedSchematicsWidget}
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.translateModel = function(dx, dy){};
    /**
     * Scales active ('horizontal' or 'vertical') group
     * @param {!number} scaleX scaleX
     * @param {!number} scaleY scaleY
     * @param {!number} [posX] posX
     * @param {!number} [posY] posY
     * @returns {geotoolkit.schematics.widgets.LShapedSchematicsWidget}
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.scaleModel = function(scaleX, scaleY, posX, posY){};
    /**
     * Gets widget's tool by its name
     * @param {string} name tool name
     * @returns {?geotoolkit.controls.tools.AbstractTool} tool
     */
    geotoolkit.schematics.widgets.LShapedSchematicsWidget.prototype.getToolByName = function(name){};

