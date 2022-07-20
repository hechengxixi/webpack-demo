declare module geotoolkit {
    module schematics {
        module widgets {
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
             */
            class SchematicsWidget extends geotoolkit.widgets.AnnotatedWidget {
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
                 * @param arg  (Optional) argument object
                 * @param arg.options  (Optional) options (see "setOptions" API for detailed description)
                 * @param arg.options.labelingStrategy  (Optional) labeling strategy
                 * @param arg.options.labelingStrategy.defaultAlignment  (Optional) labels alignment type
                 * @param arg.options.labelingStrategy.defaultLocation  (Optional) labels default location area type
                 * @param arg.options.alignment  (Optional) wellbore horizontal alignment
                 * @param arg.options.gap  (Optional) gap size between vertical (MD) axis and wellbore as well as between wellbore and labeling area
                 * @param arg.options.annotationssizes  (Optional) annotations sizes section
                 * @param arg.options.annotationssizes.west  (Optional) west annotation (axis area) size
                 * @param arg.options.annotationssizes.north  (Optional) north annotation (widget title) size
                 * @param arg.options.west  (Optional) west annotation configuration
                 * @param arg.options.west.axis  (Optional) west axis configuration
                 * @param arg.options.west.axis.tickposition  (Optional) west axis tick position
                 * @param arg.options.west.axis.labelposition  (Optional) west axis label position
                 * @param arg.options.sealevel  (Optional) sea level options
                 * @param arg.options.sealevel.depth  (Optional) sea level display depth
                 * @param arg.options.sealevel.visible  (Optional) sea level visibility flag
                 * @param arg.options.wellborenode  (Optional) wellbore node options (see WellBoreNode's "setOptions" API for detailed description)
                 * @param arg.options.wellborenode.automodellimitsmode  (Optional) wellbore node auto model limits mode flag
                 * @param arg.options.wellborenode.viewMode  (Optional) view mode
                 * @param arg.options.scalescrollstrategy  (Optional) 
                 * @param arg.options.tooltip  (Optional) tooltip settings
                 * @param arg.options.tooltip.gettext  (Optional) get tooltip text function
                 * @param arg.options.tooltip.divelement  (Optional) HTML div container element or it will be created with className cg-tooltip-container
                 * @param arg.data  (Optional) wellbore data
                 */
                constructor(arg?: any | { options?: any | { labelingStrategy?: geotoolkit.schematics.labeling.LabelingStrategy|any | { defaultAlignment?: geotoolkit.schematics.labeling.AlignmentType; defaultLocation?: geotoolkit.schematics.labeling.LocationType; } ; alignment?: geotoolkit.layout.BoxLayout.Alignment; gap?: number; annotationssizes?: any | { west?: number; north?: number; } ; west?: any | { axis?: any | { tickposition?: geotoolkit.axis.TickInfo.TickPosition; labelposition?: geotoolkit.axis.TickInfo.LabelPosition; } ; } ; sealevel?: any | { depth?: any; visible?: boolean; } ; wellborenode?: any | { automodellimitsmode?: boolean; viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode; } ; scalescrollstrategy?: geotoolkit.scene.ScaleScrollStrategy; tooltip?: any | { gettext?: Function; divelement?: HTMLElement; } ; } ; data?: any|any[]|geotoolkit.schematics.data.WellBoreData; } );
                /**
                 * Gets well bore view mode
                 */
                getViewMode(): geotoolkit.schematics.scene.WellBoreNode.ViewMode;
                /**
                 * Sets well bore view mode
                 * @param viewMode  (Required) well bore view mode
                 * @param options  (Optional) the mode options
                 */
                setViewMode(viewMode: geotoolkit.schematics.scene.WellBoreNode.ViewMode, options?: any): {mapping:{modelLimitsDepths:any[];boundsDepths:any[]}}|any;
                /**
                 * Gets model coordinates at given device ones
                 * @param ptDevice  (Required) device point
                 * @param ptModel  (Optional) model point
                 */
                getModelPoint(ptDevice: geotoolkit.util.Point, ptModel?: geotoolkit.util.Point): geotoolkit.util.Point;
                /**
                 * Gets device coordinates at given model ones
                 * @param ptModel  (Required) model point
                 * @param ptDevice  (Optional) device point
                 */
                getDevicePoint(ptModel: geotoolkit.util.Point, ptDevice?: geotoolkit.util.Point): geotoolkit.util.Point;
                /**
                 * Gets labeling strategy
                 */
                getLabelingStrategy(): geotoolkit.schematics.labeling.LabelingStrategy;
                /**
                 * Gets WellBoreNode's model limits
                 */
                getCenterModelLimits(): geotoolkit.util.Rect;
                /**
                 * function call in the constructor to initialize tools in the widget
                 */
                protected initializeTools(): this;
                /**
                 * Gets {@link geotoolkit.schematics.data.WellBoreData} data instance
                 */
                getData(): geotoolkit.schematics.data.WellBoreData;
                /**
                 * Sets data
                 * @param data  (Required) wellbore data to set
                 */
                setData(data: geotoolkit.schematics.data.WellBoreData|any[]|any): this;
                /**
                 * Gets widget options
                 */
                getOptions(): any;
                /**
                 * Sets bounds of the node in the parent coordinates
                 * @param options  (Required) widget options
                 * @param options.labelingStrategy  (Optional) labeling strategy
                 * @param options.gap  (Optional) gap size between vertical (MD) axis and wellbore as well as between wellbore and labeling area
                 * @param options.annotationssizes  (Optional) annotations sizes section
                 * @param options.west  (Optional) west annotation configuration
                 * @param options.north  (Optional) north annotation configuration
                 * @param options.east  (Optional) east annotation configuration
                 * @param options.south  (Optional) south annotation configuration
                 * @param options.wellborenode  (Optional) wellborenode options
                 * @param options.wellborenode.registry  (Optional) factory registry
                 * @param options.wellborenode.viewMode  (Optional) view mode
                 * @param options.wellborenode.automodellimitsmode  (Optional) auto model limits mode
                 * @param options.wellborenode.modellimits  (Optional) model limits. The parameter is ignored if "automodellimitsmode==true"
                 * @param options.wellborenode.renderinghints  (Optional) rendering hints
                 */
                setOptions(options: any | { labelingStrategy?: geotoolkit.schematics.labeling.LabelingStrategy; gap?: number; annotationssizes?: any; west?: any; north?: any; east?: any; south?: any; wellborenode?: any | { registry?: geotoolkit.schematics.factory.ComponentNodeFactoryRegistry; viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode; automodellimitsmode?: boolean; modellimits?: geotoolkit.util.Rect; renderinghints?: any; } ; } ): this;
                /**
                 * Updates layout(s)
                 * @param targets  (Optional) not used (entire content gets layouted)
                 */
                updateLayout(targets?: geotoolkit.scene.Node[]): this;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param options  (Required) JSON containing properties
                 * @param options.labelingStrategy  (Optional) labeling strategy
                 * @param options.gap  (Optional) gap size between vertical (MD) axis and wellbore as well as between wellbore and labeling area
                 * @param options.annotationssizes  (Optional) annotations sizes section
                 * @param options.west  (Optional) west annotation configuration
                 * @param options.north  (Optional) north annotation configuration
                 * @param options.east  (Optional) east annotation configuration
                 * @param options.south  (Optional) south annotation configuration
                 */
                setProperties(options: any | { labelingStrategy?: geotoolkit.schematics.labeling.LabelingStrategy; gap?: number; annotationssizes?: any; west?: any; north?: any; east?: any; south?: any; } ): this;
                /**
                 * Export a part of the container to PDF
                 * <p>This method sets automatically export scale and limits based on input parameters and current model scale and limits</p>
                 * @param options  (Optional) option to specify paper parameters and header and footer
                 * @param options.header  (Optional) define optional header
                 * @param options.footer  (Optional) define optional header
                 * @param options.output  (Optional) the name of the file to be created
                 * @param options.printsettings  (Optional) define optional paper and export parameters
                 * @param options.printsettings.paperformat  (Optional) define optional paper paper format
                 * @param options.printsettings.top  (Optional) define optional top margin
                 * @param options.printsettings.bottom  (Optional) define optional bottom margin
                 * @param options.printsettings.left  (Optional) define optional left margin
                 * @param options.printsettings.right  (Optional) define optional top margin
                 * @param options.printsettings.orientation  (Optional) define optional paper orientation
                 * @param options.printsettings.scaling  (Optional) define optional scaling mode
                 * @param options.printsettings.keepaspectratio  (Optional) keep aspect ratio
                 * @param options.printsettings.continuous  (Optional) continuous printing
                 * @param options.printsettings.drawwesttoeast  (Optional) draw pages from West to East
                 * @param options.modellimits  (Optional) model limits that should be exported. By default the virtual limits
                 * @param options.scale  (Optional) export scale  by default as is
                 * @param options.scale.x  (Optional) export scale by x
                 * @param options.scale.y  (Optional) export scale by y
                 * @param options.imagecompression  (Optional) options to specify the image compression
                 * @param options.imagecompression.mode  (Optional) image compression method used to exporting pdf.
                 * @param options.imagecompression.quality  (Optional) quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
                 * @param options.imagecompression.speed  (Optional) speed referring to the png compression speed, available  for png mode only.
                 * @param options.streamcompression  (Optional) enable or disable pdf output compression
                 * @param options.save  (Optional) flag to save the stream directly to file or open dialog
                 */
                exportToPdf(options?: any | { header?: geotoolkit.scene.exports.HeaderComponent; footer?: geotoolkit.scene.exports.FooterComponent; output?: string; printsettings?: any | { paperformat?: geotoolkit.scene.exports.AbstractPaperFormat|string; top?: number; bottom?: number; left?: number; right?: number; orientation?: string; scaling?: string; keepaspectratio?: boolean; continuous?: boolean; drawwesttoeast?: boolean; } ; modellimits?: geotoolkit.util.Rect; scale?: any | { x?: number; y?: number; } ; imagecompression?: any | { mode?: geotoolkit.pdf.ImageCompression; quality?: number; speed?: geotoolkit.pdf.SpeedCompression; } ; streamcompression?: boolean; save?: boolean; } ): geotoolkit.util.Promise;
            }
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
             */
            class LShapedSchematicsWidget extends geotoolkit.widgets.AnnotatedWidget {
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
                 * @param arg  (Optional) argument object
                 * @param arg.options  (Optional) options
                 * @param arg.options.annotationssizes  (Optional) annotations sizes section
                 * @param arg.options.annotationssizes.west  (Optional) west annotation size
                 * @param arg.options.annotationssizes.north  (Optional) north annotation size
                 * @param arg.options.annotationssizes.east  (Optional) east annotation size
                 * @param arg.options.annotationssizes.south  (Optional) south annotation size
                 * @param arg.options.labelingStrategy  (Optional) labeling strategy
                 * @param arg.options.wellborenode  (Optional) wellbore node options
                 * @param arg.options.wellborenode.viewMode  (Optional) view mode
                 * @param arg.options.wellborenode.trackWidth  (Optional) track width
                 * @param arg.options.wellborenode.deviationDepth  (Optional) deviation depth (if "null" then it's calculated based on the data)
                 * @param arg.options.wellborenode.LShapeAccuracy  (Optional) accuracy (bigger number means smoother L-shape)
                 * @param arg.options.scalescrollstrategy  (Optional) scale scroll strategy
                 * @param arg.options.tooltip  (Optional) tooltip settings
                 * @param arg.options.tooltip.gettext  (Optional) get tooltip text function
                 * @param arg.options.tooltip.divelement  (Optional) HTML div container element or it will be created with className cg-tooltip-container
                 * @param arg.data  (Optional) wellbore data
                 */
                constructor(arg?: any | { options?: any | { annotationssizes?: any | { west?: number; north?: number; east?: number; south?: number; } ; labelingStrategy?: geotoolkit.schematics.labeling.LabelingStrategy; wellborenode?: any | { viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode; trackWidth?: number; deviationDepth?: number; LShapeAccuracy?: number; } ; scalescrollstrategy?: geotoolkit.scene.ScaleScrollStrategy; tooltip?: any | { gettext?: Function; divelement?: HTMLElement; } ; } ; data?: any|any[]|geotoolkit.schematics.data.WellBoreData; } );
                /**
                 * Gets widget options
                 */
                getOptions(): any;
                /**
                 * Sets well bore view mode
                 * @param viewMode  (Required) well bore view mode
                 */
                setViewMode(viewMode: geotoolkit.schematics.scene.WellBoreNode.ViewMode): {props:{modelLimitsDepths:any[];boundsDepths:any[]}}|any;
                /**
                 * Gets {@link geotoolkit.schematics.data.WellBoreData} data instance
                 */
                getData(): geotoolkit.schematics.data.WellBoreData;
                /**
                 * Sets data
                 * @param data  (Required) wellbore data to set
                 */
                setData(data: geotoolkit.schematics.data.WellBoreData|any[]|any): this;
                /**
                 * Gets WellBoreWithLabels's model limits
                 */
                getCenterModelLimits(): geotoolkit.util.Rect;
                /**
                 * Gets labeling strategy
                 */
                getLabelingStrategy(): geotoolkit.schematics.labeling.VersatileLabelingStrategy;
                /**
                 * Updates layout(s)
                 * @param targets  (Optional) not used (entire content gets layouted)
                 */
                updateLayout(targets?: geotoolkit.scene.Node[]): this;
                /**
                 * Sets bounds of the node in the parent coordinates
                 * @param bounds  (Required) bound of the node in the parent coordinates
                 */
                setBounds(bounds: geotoolkit.util.Rect|any): this;
                /**
                 * Initializes tools in the widget
                 */
                protected initializeTools(): any;
                /**
                 * Resets well bore to its original state
                 */
                fitToBounds(): this;
                /**
                 * Translates model
                 * @param dx  (Required) dx
                 * @param dy  (Required) dy
                 */
                translateModel(dx: number, dy: number): this;
                /**
                 * Scales active ('horizontal' or 'vertical') group
                 * @param scaleX  (Required) scaleX
                 * @param scaleY  (Required) scaleY
                 * @param posX  (Optional) posX
                 * @param posY  (Optional) posY
                 */
                scaleModel(scaleX: number, scaleY: number, posX?: number, posY?: number): this;
                /**
                 * Gets widget's tool by its name
                 * @param name  (Required) tool name
                 */
                getToolByName(name: string): geotoolkit.controls.tools.AbstractTool;
            }
            module painters {
                /**
                 * Default sea level drawing
                 */
                class SeaLevelSymbolPainter {
                    /**
                     * Default sea level drawing
                     * @param symbol  (Required) 
                     * @param bbox  (Required) 
                     * @param context  (Required) 
                     */
                    constructor(symbol: geotoolkit.scene.shapes.Symbol, bbox: geotoolkit.util.Rect, context: geotoolkit.renderer.RenderingContext);
                }
            }
        }
    }
}
