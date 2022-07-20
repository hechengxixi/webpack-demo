declare module geotoolkit {
    module schematics {
        module data {
            /**
             * Default componentName-to-aliases mapping
             */
            var DefaultAliases: any;
            /**
             * WellBore data container. Schematics data are stored in “geotoolkit.schematics.data.WellBoreData” object.
             * “addComponent” is the method to accumulate components in the object.
             */
            class WellBoreData extends geotoolkit.util.EventDispatcher {
                /**
                 * WellBore data container. Schematics data are stored in “geotoolkit.schematics.data.WellBoreData” object.
                 * “addComponent” is the method to accumulate components in the object.
                 * @param elements  (Optional) array of elements to add
                 */
                constructor(elements?: any[]);
                /**
                 * Updates contents with the elements data
                 * @param modified  (Required) element(s) to update
                 */
                updateComponents(modified: any[]|any): this;
                /**
                 * Gets a component by its ID. Returns {name:string; data:object} instance if the component
                 * exists or null if id is null or no such component has been registered
                 * @param id  (Required) component id
                 */
                getComponentById(id: string): any;
                /**
                 * Generates unique component id
                 */
                generateId(): string;
                /**
                 * Adds the component's data to the well bore
                 * @param componentName  (Required) element name
                 * @param data  (Required) data to build component node
                 * @param data.subset  (Optional) component subset name
                 * @param index  (Optional) index to add the component at
(@see {@link geotoolkit.schematics.scene.WellBoreNode}'s 'setRenderingHints' method API for subset usage example)
                 */
                addComponent(componentName: string, data: any | { subset?: string; } , index?: number): this;
                /**
                 * Adds the component's data to the well bore
                 * @param elements  (Required) schematics element(s) to add in format
{name: string,
data: {
      id: string,
      description: string,
      geometry:[
        {
          depth: {from: number, to: number}
          diameter: {inner: number, outer: number}
        }
      ]
                 */
                addComponents(elements: any|any[]): this;
                /**
                 * Gets all components
                 */
                getComponents(): any[];
                /**
                 * Gets all the component's data if available; "undefined" otherwise
                 * @param componentName  (Required) component name
                 */
                getComponent(componentName: string): any[];
                /**
                 * Gets all the "componentName" components' indices if available
                 * @param componentName  (Required) component name
                 */
                getIndices(componentName: string): any[];
                /**
                 * Removes all data elements with the name specified
                 * @param componentName  (Required) element name
                 */
                removeComponent(componentName: string): this;
                /**
                 * Removes an element with the specified ID
                 * @param componentId  (Required) element ID
                 */
                removeComponentById(componentId: string): this;
                /**
                 * Removes all data elements from the well bore
                 */
                removeAll(): this;
                /**
                 * Gets geometry bounds
                 */
                getGeometryBounds(): geotoolkit.util.Rect;
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
        }
        module labeling {
            /**
             * Enum of label location types
             */
            var LocationType: any;
            /**
             * Enum of label alignment types
             */
            var AlignmentType: any;
            /**
             * Label data structure to use by a LabelingStrategy.
             */
            class LabelData {
                /**
                 * Label data structure to use by a LabelingStrategy.
                 * @param parameters  (Optional) options to initialize the strategy
                 * @param parameters.node  (Optional) component node to label
                 * @param parameters.nodeInfo  (Optional) the node information
                 * @param parameters.anchorType  (Optional) anchor type
                 * @param parameters.xLabel  (Optional) label x-position
                 * @param parameters.yLabel  (Optional) label y-position
                 * @param parameters.xConnector  (Optional) connector x-position
                 * @param parameters.yConnector  (Optional) connector y-position
                 */
                constructor(parameters?: any | { node?: geotoolkit.schematics.scene.ComponentNode; nodeInfo?: any; anchorType?: geotoolkit.util.AnchorType; xLabel?: number; yLabel?: number; xConnector?: any[]; yConnector?: any[]; } );
            }
            /**
             * Abstract label shape representation
             */
            class LabelShape {
                /**
                 * Abstract label shape representation
                 */
                constructor();
                /**
                 * Gets label data
                 */
                getLabelData(): geotoolkit.schematics.labeling.LabelData;
                /**
                 * Sets label data
                 * @param labelData  (Required) label data
                 */
                setLabelData(labelData: geotoolkit.schematics.labeling.LabelData): this;
                /**
                 * Renders itself
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Gets bounding box in model space
                 * @param transformation  (Required) scene transformation
                 */
                getBoundingBox(transformation: geotoolkit.util.Transformation): geotoolkit.util.Rect;
                /**
                 * Clone itself
                 */
                clone(): geotoolkit.schematics.labeling.LabelShape;
            }
            /**
             * Default label shape implementation
             */
            class DefaultLabelShape extends geotoolkit.schematics.labeling.LabelShape {
                /**
                 * Default label shape implementation
                 * @param options  (Optional) options
                 * @param options.padding  (Optional) It has properties for specifying the padding for each side
                 * @param options.padding.top  (Optional) top padding
                 * @param options.padding.bottom  (Optional) top padding
                 * @param options.padding.right  (Optional) right padding
                 * @param options.padding.left  (Optional) left padding
                 */
                constructor(options?: any | { padding?: any | { top?: number|string; bottom?: number|string; right?: number|string; left?: number|string; } |geotoolkit.attributes.SpaceStyle; } );
                /**
                 * Gets label rectangle shape
                 */
                getLabelRectangle(): geotoolkit.scene.shapes.Rectangle;
                /**
                 * Gets label text shape
                 */
                getLabelText(): geotoolkit.scene.shapes.Text;
                /**
                 * Gets label data
                 */
                getLabelData(): geotoolkit.schematics.labeling.LabelData;
                /**
                 * Sets label data
                 * @param labelData  (Required) label data
                 */
                setLabelData(labelData: geotoolkit.schematics.labeling.LabelData): this;
                /**
                 * Renders itself
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Gets bounding box in model space
                 * @param transformation  (Optional) scene transformation
                 */
                getBoundingBox(transformation?: geotoolkit.util.Transformation): geotoolkit.util.Rect;
                /**
                 * Return padding style
                 */
                getPaddingStyle(): geotoolkit.attributes.SpaceStyle;
                /**
                 * Sets padding style
                 * @param paddingStyle  (Required) padding style
                 */
                setPaddingStyle(paddingStyle: geotoolkit.attributes.SpaceStyle|any): this;
                /**
                 * Clones itself
                 */
                clone(): geotoolkit.schematics.labeling.DefaultLabelShape;
            }
            /**
             * Abstraction for schematics well bore elements labeling.
             */
            class LabelingStrategy {
                /**
                 * Abstraction for schematics well bore elements labeling.
                 * @param parameters  (Required) strategy parameters
                 * @param parameters.labelShape  (Optional) label shape
                 * @param parameters.labelInfoProvider  (Optional) label info provider
                 * @param parameters.beforeLabelingProc  (Optional) "before labeling" procedure
                 * @param parameters.afterLabelingProc  (Optional) "after labeling" procedure
                 * @param parameters.connectorShape  (Optional) connector shape
                 */
                constructor(parameters: any | { labelShape?: geotoolkit.schematics.labeling.LabelShape; labelInfoProvider?: Function; beforeLabelingProc?: Function; afterLabelingProc?: Function; connectorShape?: geotoolkit.schematics.labeling.ConnectorShape; } );
                /**
                 * Sets function to execute before labeling.
                 * Default function is an empty one.
                 * @param op  (Required) function to execute before labeling
                 */
                setBeforeLabelingProc(op: Function): this;
                /**
                 * Gets function to execute before labeling.
                 */
                getBeforeLabelingProc(): Function;
                /**
                 * Sets function to execute after labeling.
                 * Default function is an empty one.
                 * @param op  (Required) function to execute after labeling
                 */
                setAfterLabelingProc(op: Function): this;
                /**
                 * Gets function to execute after labeling.
                 */
                getAfterLabelingProc(): Function;
                /**
                 * Sets label shape
                 * @param labelShape  (Required) label shape
                 */
                setLabelShape(labelShape: geotoolkit.schematics.labeling.LabelShape): this;
                /**
                 * Gets label shape. Default: {geotoolkit.schematics.labeling.DefaultLabelShape} instance
                 */
                getLabelShape(): geotoolkit.schematics.labeling.LabelShape;
                /**
                 * Sets connector shape
                 * @param connectorShape  (Optional) connector shape
                 */
                setConnectorShape(connectorShape?: geotoolkit.schematics.labeling.ConnectorShape): this;
                /**
                 * Gets connector shape. Default: null
                 */
                getConnectorShape(): geotoolkit.schematics.labeling.ConnectorShape;
                /**
                 * Sets label info provider - a function to retrieve an info from
                 * a component node to use in label shape
                 * @param provider  (Required) label info provider, a function to retrieve info from
a component node to use in label shape
                 */
                setLabelInfoProvider(provider: Function): this;
                /**
                 * Gets label info provider
                 */
                getLabelInfoProvider(): Function;
                /**
                 * Performs labels and connecting lines layout.
                 * @param localContext  (Required) rendering context
                 * @param wellBoreNode  (Required) well bore node to build the labeling of
                 */
                doLabeling(localContext: geotoolkit.renderer.RenderingContext, wellBoreNode: geotoolkit.schematics.scene.WellBoreNode): geotoolkit.schematics.labeling.LabelData[];
            }
            /**
             * Abstraction for schematics well bore elements labeling.
             */
            class LabelingStrategyBase extends geotoolkit.schematics.labeling.LabelingStrategy {
                /**
                 * Abstraction for schematics well bore elements labeling.
                 * @param parameters  (Required) strategy parameters (see base class for inherited options)
                 * @param parameters.connectorShape  (Optional) connector shape
                 * @param parameters.defaultLocation  (Optional) label location type
                 * @param parameters.defaultAlignment  (Optional) alignment type
                 * @param parameters.locationMap  (Optional) extra map for label locations
                 * @param parameters.componentsfilter  (Optional) components filter
                 */
                constructor(parameters: any | { connectorShape?: geotoolkit.schematics.labeling.ConnectorShape; defaultLocation?: geotoolkit.schematics.labeling.LocationType; defaultAlignment?: geotoolkit.schematics.labeling.AlignmentType; locationMap?: any[]; componentsfilter?: geotoolkit.schematics.labeling.IComponentsFilter; } );
                /**
                 * Gets components filter
                 */
                getComponentsFilter(): geotoolkit.schematics.labeling.IComponentsFilter;
                /**
                 * Sets components filter
                 * @param componentsFilter  (Required) components filter
                 */
                setComponentsFilter(componentsFilter: geotoolkit.schematics.labeling.IComponentsFilter): this;
                /**
                 * Gets default label location type
                 */
                getDefaultLocation(): geotoolkit.schematics.labeling.LocationType;
                /**
                 * Sets default label location type
                 * @param locationType  (Required) location type
                 */
                setDefaultLocation(locationType: geotoolkit.schematics.labeling.LocationType): this;
                /**
                 * Gets labeling location types map for specific component names
                 */
                getLocationMap(): any[];
                /**
                 * Sets labeling location types map for specific component names
                 * @param locationMap  (Optional) array of { component: {string}, location: {geotoolkit.schematics.labeling.LocationType} } pairs
                 */
                setLocationMap(locationMap?: any[]): this;
                /**
                 * Gets label alignment type
                 */
                getLabelAlignment(): geotoolkit.schematics.labeling.AlignmentType;
                /**
                 * Sets label alignment type
                 * @param alignmentType  (Required) Enum of label alignment types(Inner, Middle,Outer)
                 */
                setLabelAlignment(alignmentType: geotoolkit.schematics.labeling.AlignmentType): this;
                /**
                 * Performs labels and connecting lines layout.
                 * @param context  (Required) rendering context
                 * @param wellBoreNode  (Required) well bore node to build the labeling of
                 */
                doLabeling(context: geotoolkit.renderer.RenderingContext, wellBoreNode: geotoolkit.schematics.scene.WellBoreNode): geotoolkit.schematics.labeling.LabelData[];
                /**
                 * Derived class must override the empty method
                 * @param context  (Required) rendering context
                 * @param nodesLabeled  (Required) array of {geotoolkit.schematics.scene.ComponentNode}
                 * @param locationType  (Required) location type
                 * @param labelsDataArray  (Required) array of {geotoolkit.schematics.labeling.LabelData}
                 * @param group  (Optional) group to label
                 * @param isHorizontal  (Optional) horizontal flag
                 */
                protected doLabelingOnOneSide(context: geotoolkit.renderer.RenderingContext, nodesLabeled: geotoolkit.schematics.labeling.LabelData[], locationType: geotoolkit.schematics.labeling.LocationType, labelsDataArray: geotoolkit.schematics.labeling.LabelData[], group?: geotoolkit.scene.Group, isHorizontal?: boolean): any;
            }
            /**
             * Default labeling strategy implementation.
             */
            class DefaultLabelingStrategy extends geotoolkit.schematics.labeling.LabelingStrategyBase {
                /**
                 * Default labeling strategy implementation.
                 * @param parameters  (Required) strategy parameters (see base class for other inherited options)
                 * @param parameters.equallySpaced  (Optional) "equally spaced" flag
                 * @param parameters.anchorValueFixed  (Optional) anchor fixed position flag
                 */
                constructor(parameters: any | { equallySpaced?: boolean; anchorValueFixed?: boolean; } );
                /**
                 * Sets labeling area(s) bounds
                 * @param bounds  (Required) labeling area bounds
                 */
                setLabelsBounds(bounds: any): this;
                /**
                 * Gets labeling area(s) bounds
                 * @param location  (Optional) permitted values: "Left", "Right", "Top" or "Bottom"
                 */
                getLabelsBounds(location?: string): any|geotoolkit.util.Rect;
                /**
                 * Gets equallySpaced labeling flag
                 */
                getEquallySpaced(): boolean;
                /**
                 * Sets equallySpaced labeling flag
                 * @param equallySpaced  (Required) labeling flag is equally Spaced or not
                 */
                setEquallySpaced(equallySpaced: boolean): this;
                /**
                 * Performs labels and connecting lines layout.
                 * The implementation layouts all the labels withing one column (along well bore depth axis)
                 * and aligns them according to "getLabelAlignment()" value.
                 * Returns label data to render
                 * @param context  (Required) rendering context
                 * @param nodesLabeled  (Required) array of {geotoolkit.schematics.scene.ComponentNode}
                 * @param locationType  (Required) location type
                 * @param labelsDataArray  (Required) array of {geotoolkit.schematics.labeling.LabelData}
                 * @param group  (Optional) group to label
                 * @param isHorizontal  (Optional) horizontal flag
                 */
                protected doLabelingOnOneSide(context: geotoolkit.renderer.RenderingContext, nodesLabeled: geotoolkit.schematics.labeling.LabelData[], locationType: geotoolkit.schematics.labeling.LocationType, labelsDataArray: geotoolkit.schematics.labeling.LabelData[], group?: geotoolkit.scene.Group, isHorizontal?: boolean): any;
            }
            /**
             * Default labeling strategy implementation.
             */
            class DefaultDeviatedStrategy extends geotoolkit.schematics.labeling.LabelingStrategyBase {
                /**
                 * Default labeling strategy implementation.
                 * @param parameters  (Required) strategy parameters (see base class for other inherited options)
                 * @param parameters.equallySpaced  (Optional) "equally spaced" flag
                 * @param parameters.anchorValueFixed  (Optional) anchor fixed position flag
                 */
                constructor(parameters: any | { equallySpaced?: boolean; anchorValueFixed?: boolean; } );
                /**
                 * Sets labeling area(s) bounds
                 * @param bounds  (Required) labeling area bounds
                 */
                setLabelsBounds(bounds: any): this;
                /**
                 * Gets labeling area(s) bounds
                 * @param location  (Optional) permitted values: "Left", "Right", "Top" or "Bottom"
                 */
                getLabelsBounds(location?: string): any|geotoolkit.util.Rect;
                /**
                 * Gets equallySpaced labeling flag
                 */
                getEquallySpaced(): boolean;
                /**
                 * Sets equallySpaced labeling flag
                 * @param equallySpaced  (Required) labeling flag is equally Spaced or not
                 */
                setEquallySpaced(equallySpaced: boolean): this;
                /**
                 * Performs labels and connecting lines layout.
                 * The implementation layouts all the labels withing one column (along well bore depth axis)
                 * and aligns them according to "getLabelAlignment()" value.
                 * Returns label data to render
                 * @param context  (Required) rendering context
                 * @param nodesLabeled  (Required) array of {geotoolkit.schematics.scene.ComponentNode}
                 * @param locationType  (Required) location type
                 * @param labelsDataArray  (Required) array of {geotoolkit.schematics.labeling.LabelData}
                 * @param group  (Optional) group to label
                 * @param isHorizontal  (Optional) horizontal flag
                 */
                protected doLabelingOnOneSide(context: geotoolkit.renderer.RenderingContext, nodesLabeled: geotoolkit.schematics.labeling.LabelData[], locationType: geotoolkit.schematics.labeling.LocationType, labelsDataArray: geotoolkit.schematics.labeling.LabelData[], group?: geotoolkit.scene.Group, isHorizontal?: boolean): any;
            }
            /**
             * Labeling strategy implementation based on XY layout and LocationType enum.
             */
            class XYLabelingStrategy extends geotoolkit.schematics.labeling.DefaultLabelingStrategy {
                /**
                 * Labeling strategy implementation based on XY layout and LocationType enum.
                 * @param parameters  (Required) strategy parameters (see base class for other inherited options)
                 * @param parameters.labelShape  (Optional) symbol label shape
                 * @param parameters.labelInfoProvider  (Optional) symbol label info provider
                 * @param parameters.beforeLabelingProc  (Optional) "before labeling" procedure
                 * @param parameters.afterLabelingProc  (Optional) "after labeling" procedure
                 * @param parameters.defaultLocation  (Optional) label location type
                 * @param parameters.defaultAlignment  (Optional) alignment type
                 * @param parameters.connectorShape  (Optional) connector shape
                 * @param parameters.equallySpaced  (Optional) "equally spaced" flag
                 * @param parameters.anchorValueFixed  (Optional) anchor fixed position flag
                 * @param parameters.anchorValueShiftMult  (Optional) anchor value shift multiplier
                 * @param parameters.columns  (Optional) number of columns
                 */
                constructor(parameters: any | { labelShape?: geotoolkit.schematics.labeling.LabelShape; labelInfoProvider?: Function; beforeLabelingProc?: Function; afterLabelingProc?: Function; defaultLocation?: geotoolkit.schematics.labeling.LocationType; defaultAlignment?: geotoolkit.schematics.labeling.AlignmentType; connectorShape?: geotoolkit.schematics.labeling.ConnectorShape; equallySpaced?: boolean; anchorValueFixed?: boolean; anchorValueShiftMult?: number; columns?: number; } );
                /**
                 * Gets layout column number
                 */
                getLayoutColumnNumber(): number;
                /**
                 * Sets layout column number.
                 * Valid values: 1 (no horizontal layout), 2 or 3.
                 * @param layoutColumnNumber  (Required) layout column number.
Valid values: 1 (no horizontal layout), 2 or 3.
Default value: 3.
                 */
                setLayoutColumnNumber(layoutColumnNumber: number): this;
                /**
                 * Performs labels and connecting lines layout.
                 * Returns label data to render
                 * @param localContext  (Required) Rendering Context
                 * @param wellBoreNode  (Required) well bore node to build the labeling of
                 */
                doLabeling(localContext: geotoolkit.renderer.RenderingContext, wellBoreNode: geotoolkit.schematics.scene.WellBoreNode): geotoolkit.schematics.labeling.LabelData[];
                /**
                 * Performs labels and connecting lines layout
                 * @param context  (Required) rendering context
                 * @param nodesLabeled  (Required) array of {geotoolkit.schematics.scene.ComponentNode}
                 * @param locationType  (Required) location type
                 * @param labelsDataArray  (Required) array of {geotoolkit.schematics.labeling.LabelData}
                 * @param group  (Optional) group to label
                 * @param isHorizontal  (Optional) horizontal flag
                 */
                protected doLabelingOnOneSide(context: geotoolkit.renderer.RenderingContext, nodesLabeled: geotoolkit.schematics.labeling.LabelData[], locationType: geotoolkit.schematics.labeling.LocationType, labelsDataArray: geotoolkit.schematics.labeling.LabelData[], group?: geotoolkit.scene.Group, isHorizontal?: boolean): any;
            }
            /**
             * Symbol label shape implementation
             */
            class SymbolLabelShape extends geotoolkit.schematics.labeling.LabelShape {
                /**
                 * Symbol label shape implementation
                 */
                constructor();
                /**
                 * Gets label symbol shape
                 */
                getLabelSymbol(): geotoolkit.scene.shapes.Symbol;
                /**
                 * Gets label text shape
                 */
                getLabelText(): geotoolkit.scene.shapes.Text;
                /**
                 * Gets label data
                 */
                getLabelData(): geotoolkit.schematics.labeling.LabelData;
                /**
                 * Sets label data
                 * @param labelData  (Required) label data
                 */
                setLabelData(labelData: geotoolkit.schematics.labeling.LabelData): this;
                /**
                 * Renders itself
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Gets bounding box in model space
                 * @param transformation  (Optional) scene transformation
                 * @param isHorizontal  (Optional) [isHorizontal] flag
                 */
                getBoundingBox(transformation?: geotoolkit.util.Transformation, isHorizontal?: boolean): geotoolkit.util.Rect;
                /**
                 * Clones itself
                 */
                clone(): geotoolkit.schematics.labeling.SymbolLabelShape;
            }
            /**
             * Abstract label connector shape representation
             */
            class ConnectorShape {
                /**
                 * Abstract label connector shape representation
                 */
                constructor();
                /**
                 * Gets label data
                 */
                getLabelData(): geotoolkit.schematics.labeling.LabelData;
                /**
                 * Sets label data
                 * @param labelData  (Required) label Data
                 */
                setLabelData(labelData: geotoolkit.schematics.labeling.LabelData): this;
                /**
                 * Renders itself
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
            }
            /**
             * Polyline label connector shape representation
             */
            class DefaultConnectorShape extends geotoolkit.schematics.labeling.ConnectorShape {
                /**
                 * Polyline label connector shape representation
                 */
                constructor();
                /**
                 * Gets line style
                 */
                getLineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Sets line style
                 * @param lineStyle  (Required) line style or options
                 * @param lineStyle.color  (Optional) line color
                 * @param lineStyle.width  (Optional) line width
                 * @param lineStyle.pattern  (Optional) line pattern
                 * @param merge  (Optional) true if you want to merge lineStyle with existing attribute, false by default
                 */
                setLineStyle(lineStyle: geotoolkit.attributes.LineStyle|any | { color?: string|geotoolkit.util.RgbaColor; width?: number; pattern?: number[]; } |string, merge?: boolean): this;
                /**
                 * Renders itself
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
            }
            /**
             * LineConnector Shape
             */
            class LineConnector extends geotoolkit.schematics.labeling.ConnectorShape {
                /**
                 * LineConnector Shape
                 */
                constructor();
                /**
                 * Renders itself
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Gets line style
                 */
                getLineStyle(): geotoolkit.attributes.LineStyle;
                /**
                 * Sets line style
                 * @param linestyle  (Required) line style or options
                 * @param linestyle.color  (Optional) color
                 * @param linestyle.width  (Optional) line width
                 * @param linestyle.pattern  (Optional) pattern
                 */
                setLineStyle(linestyle: geotoolkit.attributes.LineStyle|any | { color?: string|geotoolkit.util.RgbaColor; width?: number; pattern?: number[]; } ): this;
            }
            /**
             * Default components filter implementation
             */
            class DefaultComponentsFilter implements geotoolkit.schematics.labeling.IComponentsFilter {
                /**
                 * Default components filter implementation
                 * @param options  (Required) options
                 * @param options.labelinfoprovider  (Required) label info provider
                 * @param options.componentnames  (Optional) whitelist of component names to label
                 * @param options.orientation  (Optional) orientation
                 * @param options.viewmode  (Optional) view mode
                 * @param options.mdsizedevice  (Optional) smallest component MD-size to have label (in device space)
                 */
                constructor(options: any | { labelinfoprovider: Function; componentnames?: any[]; orientation?: string; viewmode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode; mdsizedevice?: number; } );
                /**
                 * Gets iterator over filtered components
                 * @param iterator  (Required) input components iterator
                 * @param context  (Required) rendering context
                 */
                filterComponents(iterator: geotoolkit.util.Iterator, context: geotoolkit.renderer.RenderingContext): geotoolkit.util.Iterator;
                /**
                 * Resets itself using given options
                 * @param options  (Optional) options
                 * @param options.labelinfoprovider  (Optional) label info provider
                 * @param options.componentnames  (Optional) whitelist of component names to label
                 * @param options.orientation  (Optional) orientation
                 * @param options.viewmode  (Optional) view mode
                 * @param options.mdsizedevice  (Optional) smallest component size to have label (in device space)
                 * @param options.labelsarea  (Optional) labels area in device space
                 */
                reset(options?: any | { labelinfoprovider?: Function; componentnames?: any[]; orientation?: string; viewmode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode; mdsizedevice?: number; labelsarea?: geotoolkit.util.Rect; } ): this;
            }
            /**
             * Versatile labeling strategy implementation.
             */
            class VersatileLabelingStrategy extends geotoolkit.schematics.labeling.LabelingStrategyBase {
                /**
                 * Versatile labeling strategy implementation.
                 * @param parameters  (Required) strategy parameters (see base class for inherited options)
                 * @param parameters.layout1d  (Optional) layout to apply to labels
                 * @param parameters.gap  (Optional) gap between labels along MD-axis
                 */
                constructor(parameters: any | { layout1d?: geotoolkit.layout.ILayout1D; gap?: number; } );
                /**
                 * Gets 1D-layout
                 */
                getLayout1D(): geotoolkit.layout.ILayout1D;
                /**
                 * Sets 1D-layout
                 * @param layout1D  (Required) layout to set
                 */
                setLayout1D(layout1D: geotoolkit.layout.ILayout1D): this;
                /**
                 * Sets labeling area(s) bounds
                 * @param bounds  (Required) labeling area bounds
                 */
                setLabelsBounds(bounds: any): this;
                /**
                 * Gets labeling area(s) bounds
                 * @param location  (Optional) permitted values: "Left", "Right", "Top" or "Bottom"
                 */
                getLabelsBounds(location?: string): any|geotoolkit.util.Rect;
                /**
                 * Performs labels and connecting lines layout.
                 * The implementation layouts all the labels withing one column (along well bore depth axis)
                 * and aligns them according to "getLabelAlignment()" value.
                 * Returns label data to render
                 * @param context  (Required) rendering context
                 * @param nodes  (Required) array of {geotoolkit.schematics.scene.ComponentNode}
                 * @param locationType  (Required) location type
                 * @param dst  (Required) array of {geotoolkit.schematics.labeling.LabelData}
                 * @param group  (Optional) group
                 * @param isHorizontal  (Optional) horizontal flag
                 */
                protected doLabelingOnOneSide(context: geotoolkit.renderer.RenderingContext, nodes: geotoolkit.schematics.scene.ComponentNode[], locationType: geotoolkit.schematics.labeling.LocationType, dst: geotoolkit.schematics.labeling.LabelData[], group?: geotoolkit.scene.Group, isHorizontal?: boolean): any;
            }
            /**
             * Enum of label location types
             */
            interface LocationType {
                /**
                 * No labels
                 */
                NoLabels: number;
                /**
                 * Labels on the left side
                 */
                Left: number;
                /**
                 * Labels on the right side
                 */
                Right: number;
                /**
                 * Labels on the labeled elements
                 */
                Center: number;
                /**
                 * Labels along the trajectory (applicable only for deviated)
                 */
                AlongTrajectory: number;
            }
            /**
             * Enum of label alignment types
             */
            interface AlignmentType {
                /**
                 * Inner part of the labeling area
                 */
                Inner: number;
                /**
                 * Middle part of the labeling area
                 */
                Middle: number;
                /**
                 * Outer part of the labeling area
                 */
                Outer: number;
            }
            /**
             * Components filter interface
             */
            interface IComponentsFilter {
                /**
                 * Gets iterator over filtered components
                 * @param iterator  (Required) input components iterator
                 * @param context  (Required) rendering context
                 */
                filterComponents(iterator: geotoolkit.util.Iterator, context: geotoolkit.renderer.RenderingContext): geotoolkit.util.Iterator;
                /**
                 * Resets itself
                 * @param options  (Required) options
                 */
                reset(options: any): this;
            }
        }
        module factory {
            /**
             * Base schematics component node factory.
             */
            class AbstractComponentNodeFactory {
                /**
                 * Base schematics component node factory.
                 */
                constructor();
                /**
                 * Creates component node and return it.
                 * @param data  (Required) to build the node of
                 */
                createComponentNode(data: any): geotoolkit.schematics.scene.ComponentNode;
                /**
                 * Validates geometry data. The implementation returns "true" always
                 * @param geometryData  (Required) geometry data to validate
                 */
                validGeometryData(geometryData: any): boolean;
            }
            /**
             * ComponentNodeProxyFactory
             */
            class ComponentNodeProxyFactory extends geotoolkit.schematics.factory.AbstractComponentNodeFactory {
                /**
                 * ComponentNodeProxyFactory
                 * @param parameter  (Required) callback method to create an instance of a component node OR
an instance of a component node factory to create the component node
                 */
                constructor(parameter: Function|geotoolkit.schematics.factory.AbstractComponentNodeFactory);
                /**
                 * Creates component node and return it.
                 * @param data  (Optional) data to build the node of
                 * @param forceCreateNewNode  (Optional) if "true" brand new component node instance is placed in the proxy
                 * @param deepCopyData  (Optional) if "true" the data will be fully copied before set
                 */
                createComponentNode(data?: any, forceCreateNewNode?: boolean, deepCopyData?: boolean): geotoolkit.schematics.scene.ComponentNodeProxy;
                /**
                 * Validates geometry data.
                 * @param geometryData  (Required) geometry data to validate
                 */
                validGeometryData(geometryData: any): boolean;
            }
            /**
             * Default componentName-to-componentFactory mapping
             */
            class DefaultMap {
                /**
                 * Default componentName-to-componentFactory mapping
                 */
                constructor();
                /**
                 * Gets array of componentName-to-componentFactory pairs
                 */
                static getElements(): any[];
            }
            /**
             * Schematics components factory registry
             */
            class ComponentNodeFactoryRegistry {
                /**
                 * Schematics components factory registry
                 * @param setupDefaults  (Optional) when "false" the registry is created empty
                 * @param aliases  (Optional) components names aliases
                 */
                constructor(setupDefaults?: boolean, aliases?: any);
                /**
                 * Gets aliases map<br>
                 * Note that a copy of aliases map is returned.
                 */
                getAliases(): any;
                /**
                 * Sets component name(s) aliases map
                 * @param jsonNamesToAliases  (Required) aliases
                 * @param extendExisting  (Optional) extend existing overlapping mapping nodes flag;
"false" stands for replacing existing mapping nodes if overlapped
                 */
                setAliases(jsonNamesToAliases: any, extendExisting?: boolean): this;
                /**
                 * Clears the content.
                 */
                clear(): this;
                /**
                 * Populates the factory registry with default mapping for component factories
                 */
                setupDefaults(): this;
                /**
                 * Set componentName-to-nodeFactory link.
                 * @param componentName  (Required) component name associated with node factory
                 * @param parameter2  (Required) node factory OR method returning a ComponentNode implementation instance.
                 * @param parameter3  (Optional) method to validate component geometry data
                 */
                setFactory(componentName: string, parameter2: geotoolkit.schematics.factory.AbstractComponentNodeFactory|Function, parameter3?: Function): this;
                /**
                 * Checks if componentName is associatedwith a node factory
                 * @param componentName  (Required) component name associated with node factory
                 */
                containsFactory(componentName: string): boolean;
                /**
                 * Gets node factory associated with the componentName passed.
                 * Return null if  node factory not found.
                 * @param componentName  (Required) component name associated with node factory
                 */
                getFactory(componentName: string): geotoolkit.schematics.factory.AbstractComponentNodeFactory;
                /**
                 * Gets array of registered component names
                 */
                getRegisteredComponents(): any[];
                /**
                 * Sets componentName-to-componentFactory mapping.
                 * @param mapping  (Required) array of pairs as follows:
{ name: {string} componentName, factory: {geotoolkit.schematics.factory.AbstractComponentNodeFactory} componentFactory }
                 */
                setMapping(mapping: any[]): this;
            }
            /**
             * Schematics components factory registry with extra {@link geotoolkit.schematics.scene.MultiDiameterComponentNode} elements
             */
            class MultiDiameterComponentFactoryRegistry extends geotoolkit.schematics.factory.ComponentNodeFactoryRegistry {
                /**
                 * Schematics components factory registry with extra {@link geotoolkit.schematics.scene.MultiDiameterComponentNode} elements
                 * @param setupDefaults  (Optional) if "false" then the registry is created empty
                 * @param aliases  (Optional) components names aliases
                 */
                constructor(setupDefaults?: boolean, aliases?: any);
                /**
                 * Populates the factory registry with default mapping for component factories
                 */
                setupDefaults(): this;
            }
            /**
             * Implements a Node Factory for nodes defined by svg files
             */
            class SvgNodeFactory extends geotoolkit.schematics.factory.AbstractComponentNodeFactory {
                /**
                 * Implements a Node Factory for nodes defined by svg files
                 * @param parser  (Required) Instance of SVG Parser
                 * @param filePath  (Required) Relative path to the SVG file
                 * @param dataProvider  (Optional) Instance of SvgDataProvider
                 * @param asymmetry  (Optional) asymmetry options
                 * @param asymmetry.left  (Optional) asymmetry on left side
                 * @param asymmetry.top  (Optional) asymmetry on top
                 * @param asymmetry.right  (Optional) asymmetry on right side
                 * @param asymmetry.bottom  (Optional) asymmetry on bottom
                 */
                constructor(parser: geotoolkit.svg.SVGParser, filePath: string, dataProvider?: geotoolkit.svg.SvgDataProvider, asymmetry?: any | { left?: number; top?: number; right?: number; bottom?: number; } );
                /**
                 * Creates a an svg component node and sends a request for the svg file.
                 * Once file loaded, parses it with SVG parser and invalidates the node
                 * @param data  (Optional) Data to create the component node
                 */
                createComponentNode(data?: any): geotoolkit.schematics.scene.ExternalGeometryComponentNode;
                /**
                 * If the component node is created bySvgNodeFactory then the method returns
                 * its inner_child_group's model limits. Those limits are essentially SVG's view box.
                 * @param node  (Required) component node to evaluate
                 */
                static getSVGNodeViewBox(node: geotoolkit.schematics.scene.ComponentNode): geotoolkit.util.Rect;
                /**
                 * Sets the data provider
                 * @param dp  (Required) Data Provider instance
                 */
                setDataProvider(dp: geotoolkit.svg.SvgDataProvider): this;
                /**
                 * Sets SVG Parser
                 * @param p  (Required) SVG Parser instance
                 */
                setParser(p: geotoolkit.svg.SVGParser): this;
            }
            /**
             * Implements a Flipped Node Factory for nodes defined by svg files
             */
            class FlippedSvgNodeFactory extends geotoolkit.schematics.factory.SvgNodeFactory {
                /**
                 * Implements a Flipped Node Factory for nodes defined by svg files
                 * @param parser  (Required) Instance of SVG Parser
                 * @param filePath  (Required) Relative path to the SVG file
                 * @param dataProvider  (Optional) Instance of SvgDataProvider
                 * @param isLeft  (Optional) isLeft flag
                 */
                constructor(parser: geotoolkit.svg.SVGParser, filePath: string, dataProvider?: geotoolkit.svg.SvgDataProvider, isLeft?: boolean);
            }
            /**
             * SVG-components loader
             */
            class SVGComponentsLoader {
                /**
                 * SVG-components loader
                 * @param options  (Required) loader parameters
                 * @param options.path  (Required) relative path to JSON-file containing SVG-components to register
                 * @param options.registry  (Required) registry to add SVG-components to
                 * @param options.parser  (Optional) SVG parser
                 * @param options.dataprovider  (Optional) data provider
                 */
                constructor(options: any | { path: string; registry: geotoolkit.schematics.factory.ComponentNodeFactoryRegistry; parser?: geotoolkit.svg.SVGParser; dataprovider?: geotoolkit.svg.SvgDataProvider; } );
                /**
                 * Loads SVG-components to registry
                 */
                load(): geotoolkit.util.Promise;
            }
        }
        module scene {
            /**
             * Basic schematics component node. The constructor creates a full data copy by default.
             */
            class ComponentNode extends geotoolkit.scene.Group {
                /**
                 * Basic schematics component node. The constructor creates a full data copy by default.
                 * @param data  (Optional) Data to set. This instance will be fully copied. To avoid this, create a new instance
with null as data and then explicitly call {@see setData} with second argument set to "false".
                 * @param data.description  (Optional) element description
                 * @param data.geometry  (Optional) element geometry
                 */
                constructor(data?: any | { description?: string; geometry?: any; } );
                /**
                 * Gets "resource-based" indicator. Inherited class should override the
                 * method to ensure WellBoreNode invalidation on the node's resource load.
                 */
                isResourceBased(): boolean;
                /**
                 * Gets graphical styles associated with it.
                 * The implementation returns an empty array.
                 */
                getStyles(): any[];
                /**
                 * Gets model bounds
                 */
                getGeometryBounds(): geotoolkit.util.Rect;
                /**
                 * Get the node bounds.
                 */
                getBounds(): geotoolkit.util.Rect;
                /**
                 * Gets description (Convenience method)
                 * @param deepCopy  (Optional) a flag indicating if the data should be fully copied before returning or not
                 */
                getDescription(deepCopy?: boolean): string;
                /**
                 * Sets description (Convenience method)
                 * @param description  (Optional) element description
                 * @param deepCopy  (Optional) a flag indicating if the data should be fully copied before setting or not
                 */
                setDescription(description?: string, deepCopy?: boolean): this;
                /**
                 * Validates geometry data. The implementation returns "true" always.
                 * Custom implementation shall override the method.
                 * @param geometryData  (Required) geometry data to validate
                 */
                validGeometryData(geometryData: any): boolean;
                /**
                 * Gets component data (see "setData" API for return object elements)
                 * @param deepCopy  (Optional) a flag indicating if the data should be fully copied before returning or not
                 */
                getData(deepCopy?: boolean): any;
                /**
                 * Sets component data
                 * @param data  (Required) data to set
                 * @param data.geometry  (Optional) component geometry
                 * @param data.description  (Optional) component description
                 * @param data.renderinghints  (Optional) component rendering hints
                 * @param data.id  (Optional) component unique ID
                 * @param deepCopy  (Optional) deep copy flag
                 */
                setData(data: any | { geometry?: any; description?: string; renderinghints?: any; id?: string; } , deepCopy?: boolean): this;
                /**
                 * Gets geometric data to build the node on (Convenience method)
                 * @param deepCopy  (Optional) a flag indicating if the data should be fully copied before returning or not
                 */
                getGeometryData(deepCopy?: boolean): any;
                /**
                 * Sets geometric data (Convenience method). Overridable must call the base implementation
                 * for "getGeometryData" to retreive proper information.
                 * Overridable is expected to build the node geometry based on
                 * the geometryData provided.
                 * Optional parameters "compressedScale" and "horizontalCompressedScale" are
                 * for geotoolkit.schematics.scene.WellBoreNode.ViewMode.Compressed only,
                 * and, "horizontalCompressedScale" works for L-shaped schematics case only.
                 * @param geometryData  (Required) geometry data
                 * @param geometryData.compressedScale  (Optional) compressed scale
                 * @param geometryData.horizontalCompressedScale  (Optional) horizontal compressed scale
                 * @param deepCopy  (Optional) a flag indicating if the data should be fully copied before returning or not
                 */
                setGeometryData(geometryData: any | { compressedScale?: number; horizontalCompressedScale?: number; } , deepCopy?: boolean): this;
                /**
                 * Sets rendering hints
                 * @param hints  (Optional) rendering hints
                 * @param deepCopy  (Optional) a flag indicating if the data should be fully copied before returning or not
                 */
                setRenderingHints(hints?: any, deepCopy?: boolean): this;
                /**
                 * Gets rendering hints
                 * @param deepCopy  (Optional) a flag indicating if the data should be fully copied before returning or not
                 */
                getRenderingHints(deepCopy?: boolean): any;
                /**
                 * Updates (if needed) shape geometry depending on rendering context state.
                 * The implementation does nothing
                 * @param context  (Required) Rendering Context
                 */
                updateShapeGeometry(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 * @param properties.geometrydata  (Optional) see {@link geotoolkit.schematics.scene.ComponentNode#setGeometryData}
                 */
                setProperties(properties: any | { geometrydata?: any; } ): this;
            }
            /**
             * Abstract extension of basic schematics component node.
             * It is base class for {geotoolkit.schematics.scene.RegularComponentNode}
             * and {geotoolkit.schematics.scene.FlippedComponentNode} implementations.
             */
            class ReusableComponentNode extends geotoolkit.schematics.scene.ComponentNode {
                /**
                 * Abstract extension of basic schematics component node.
                 * It is base class for {geotoolkit.schematics.scene.RegularComponentNode}
                 * and {geotoolkit.schematics.scene.FlippedComponentNode} implementations.
                 */
                constructor();
                /**
                 * Dispose node. Clear all listeners
                 * and disconnect style to avoid memory leaks
                 */
                dispose(): any;
                /**
                 * Gets graphical styles associated with it.
                 */
                getStyles(): any[];
                /**
                 * Gets template node
                 */
                getTemplateNode(): geotoolkit.scene.Node;
                /**
                 * Gets template bounds
                 */
                getTemplateBounds(): geotoolkit.util.Rect;
                /**
                 * Gets model bounds
                 */
                getGeometryBounds(): geotoolkit.util.Rect;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 * @param properties.rectbounds  (Optional) bounds
                 */
                setProperties(properties: any | { rectbounds?: geotoolkit.util.Rect; } ): this;
            }
            /**
             * Most-common schematics components are derived from this class. Derived components: "tubing", "valve", "nipple" etc. <br>
             * To specify an offset from center on a component, use the 'offset' property in  "setGeometryData" method below.
             */
            class RegularComponentNode extends geotoolkit.schematics.scene.ReusableComponentNode {
                /**
                 * Most-common schematics components are derived from this class. Derived components: "tubing", "valve", "nipple" etc. <br>
                 * To specify an offset from center on a component, use the 'offset' property in  "setGeometryData" method below.
                 */
                constructor();
                /**
                 * Validates geometry data.
                 * @param geometryData  (Required) an object with geometry data
                 * @param geometryData.depth  (Optional) an object with depths descriptors (from and to)
                 * @param geometryData.depth.from  (Optional) depth from
                 * @param geometryData.depth.to  (Optional) depth to
                 * @param geometryData.diameter  (Optional) an object with diameter descriptor
                 * @param geometryData.diameter.outer  (Optional) outer diameter
                 */
                validGeometryData(geometryData: any | { depth?: any | { from?: number; to?: number; } ; diameter?: any | { outer?: number; } ; } ): boolean;
                /**
                 * Sets geometry
                 * @param geometryData  (Required) an object with geometry data
                 * @param geometryData.depth  (Optional) an object with depths descriptors (from and to)
                 * @param geometryData.depth.from  (Optional) depth from
                 * @param geometryData.depth.to  (Optional) depth to
                 * @param geometryData.diameter  (Optional) an object with diameter descriptor
                 * @param geometryData.diameter.outer  (Optional) outer diameter
                 * @param geometryData.offset  (Optional) component offset
                 */
                setGeometryData(geometryData: any | { depth?: any | { from?: number; to?: number; } ; diameter?: any | { outer?: number; } ; offset?: number; } ): any;
                /**
                 * Render node
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Gets template node
                 */
                getTemplateNode(): geotoolkit.scene.Node;
                /**
                 * Gets template bounds
                 */
                getTemplateBounds(): geotoolkit.util.Rect;
                /**
                 * Checks collision.
                 * Returns true if object is inside of renderable area
                 * @param context  (Required) Rendering Context
                 */
                checkCollision(context: geotoolkit.renderer.RenderingContext): boolean;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 * @param properties.trpos  (Optional) trpos
                 * @param properties.depthfrom  (Optional) depth from
                 * @param properties.depthto  (Optional) depth to
                 * @param properties.outerradius  (Optional) outer radius
                 * @param properties.offset  (Optional) component offset
                 * @param properties.rectbounds  (Optional) bounds
                 */
                setProperties(properties: any | { trpos?: geotoolkit.util.Transformation; depthfrom?: number; depthto?: number; outerradius?: number; offset?: number; rectbounds?: geotoolkit.util.Rect; } ): this;
            }
            /**
             * FlowComponentNode - astract base class for a component node implementation with "flow" support.
             */
            class FlowComponentNode extends geotoolkit.schematics.scene.RegularComponentNode {
                /**
                 */
                constructor();
                /**
                 * Show flow
                 */
                showFlow(): any;
                /**
                 * Delete all flow children
                 */
                hideFlow(): any;
            }
            /**
             * Most-common schematics component node extension. Derived component(s): "cement"
             */
            class FlippedComponentNode extends geotoolkit.schematics.scene.ReusableComponentNode {
                /**
                 * Most-common schematics component node extension. Derived component(s): "cement"
                 * @param isLeft  (Optional) isLeft flag
                 */
                constructor(isLeft?: boolean);
                /**
                 * Gets if the template is "left" one.
                 */
                isLeft(): boolean;
                /**
                 * Sets the template's "left" flag
                 * @param left  (Required) left flag
                 */
                setLeft(left: boolean): this;
                /**
                 * Validates geometry data.
                 * @param geometryData  (Required) Geometry data
                 * @param geometryData.depth  (Optional) depth description object
                 * @param geometryData.depth.from  (Optional) depth from
                 * @param geometryData.depth.to  (Optional) depth to
                 * @param geometryData.diameter  (Optional) diameter description object
                 * @param geometryData.diameter.outer  (Optional) outer diameter
                 * @param geometryData.diameter.inner  (Optional) inner diameter
                 */
                validGeometryData(geometryData: any | { depth?: any | { from?: number; to?: number; } ; diameter?: any | { outer?: number; inner?: number; } ; } ): boolean;
                /**
                 * Sets geometry
                 * @param geometryData  (Required) Geometry data for the node
                 * @param geometryData.depth  (Optional) geometry depth object
                 * @param geometryData.depth.from  (Optional) depth from
                 * @param geometryData.depth.to  (Optional) depth to
                 * @param geometryData.diameter  (Optional) diameter description object
                 * @param geometryData.diameter.outer  (Optional) outer diameter
                 * @param geometryData.diameter.inner  (Optional) inner diameter
                 * @param geometryData.offset  (Optional) component offset
                 */
                setGeometryData(geometryData: any | { depth?: any | { from?: number; to?: number; } ; diameter?: any | { outer?: number; inner?: number; } ; offset?: number; } ): any;
                /**
                 * Checks collision
                 * @param context  (Required) Rendering Context
                 */
                checkCollision(context: geotoolkit.renderer.RenderingContext): boolean;
                /**
                 * Gets template node
                 */
                getTemplateNode(): geotoolkit.scene.Node;
                /**
                 * Gets template bounds
                 */
                getTemplateBounds(): geotoolkit.util.Rect;
                /**
                 * Render node
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 * @param properties.trpos  (Optional) trpos
                 * @param properties.trneg  (Optional) trneg
                 */
                setProperties(properties: any | { trpos?: geotoolkit.util.Transformation; trneg?: geotoolkit.util.Transformation; } ): this;
            }
            /**
             * Image-based reusable component node extension.
             */
            class ReusableImageComponentNode extends geotoolkit.schematics.scene.RegularComponentNode {
                /**
                 * Image-based reusable component node extension.
                 * @param url  (Required) image URL
                 */
                constructor(url: string);
                /**
                 * Gets template node
                 */
                getTemplateNode(): geotoolkit.scene.Node;
                /**
                 * Gets template bounds
                 */
                getTemplateBounds(): geotoolkit.util.Rect;
            }
            /**
             * External geometry-based reusable component node extension.
             */
            class ExternalGeometryComponentNode extends geotoolkit.schematics.scene.RegularComponentNode {
                /**
                 * External geometry-based reusable component node extension.
                 * @param externalGeometry  (Required) geometry to define the component
                 * @param data  (Optional) JSON-data to define component
                 * @param data.description  (Optional) component textual description
                 * @param data.geometry  (Optional) component geometry (see {@link geotoolkit.schematics.scene.RegularComponentNode}'s "setGeometryData" for details)
                 * @param asymmetry  (Optional) asymmetry options
                 * @param asymmetry.left  (Optional) asymmetry on left side
                 * @param asymmetry.top  (Optional) asymmetry on top
                 * @param asymmetry.right  (Optional) asymmetry on right side
                 * @param asymmetry.bottom  (Optional) asymmetry on bottom
                 */
                constructor(externalGeometry: geotoolkit.scene.Group, data?: any | { description?: string; geometry?: any; } , asymmetry?: any | { left?: string; top?: string; right?: string; bottom?: string; } );
                /**
                 * Sets component data
                 * @param data  (Required) data to set
                 * @param data.geometry  (Optional) component geometry
                 * @param data.description  (Optional) component description
                 * @param data.renderinghints  (Optional) component rendering hints
                 * @param data.id  (Optional) component unique ID
                 * @param deepCopy  (Optional) deep copy flag
                 */
                setData(data: any | { geometry?: any; description?: string; renderinghints?: any; id?: string; } , deepCopy?: boolean): this;
                /**
                 * Gets geometry bounds
                 */
                getGeometryBounds(): geotoolkit.util.Rect;
                /**
                 * Gets template node (there: external geometry)
                 */
                getTemplateNode(): geotoolkit.scene.Node;
                /**
                 * Gets template bounds (there: external geometry's model limits)
                 */
                getTemplateBounds(): geotoolkit.util.Rect;
                /**
                 * Render node
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Gets "resource-based" status
                 */
                isResourceBased(): boolean;
                /**
                 * Sets "resource-based" status
                 * @param resourceBased  (Required) "resource-based" status
                 */
                setResourceBased(resourceBased: boolean): this;
            }
            /**
             * External geometry-based reusable component node extension.
             */
            class ExternalGeometryFlippedComponentNode extends geotoolkit.schematics.scene.FlippedComponentNode {
                /**
                 * External geometry-based reusable component node extension.
                 * @param externalGeometry  (Required) geometry to define the component
                 * @param data  (Optional) JSON-data to define component
                 * @param data.description  (Optional) component textual description
                 * @param data.geometry  (Optional) component geometry (see {@link geotoolkit.schematics.scene.RegularComponentNode}'s "setGeometryData" for details)
                 */
                constructor(externalGeometry: geotoolkit.scene.Group, data?: any | { description?: string; geometry?: any; } );
                /**
                 * Gets template node.
                 */
                getTemplateNode(): geotoolkit.scene.Node;
                /**
                 * Gets template bounds
                 */
                getTemplateBounds(): geotoolkit.util.Rect;
                /**
                 * Gets "resource-based" status.
                 */
                isResourceBased(): boolean;
                /**
                 * Sets "resource-based" status
                 * @param resourceBased  (Required) "resource-based" status
                 */
                setResourceBased(resourceBased: boolean): this;
            }
            /**
             * Encapsulates geotoolkit.schematics.scene.ReusableComponentNode  instance
             * The given data will be deeply copied
             */
            class ComponentNodeProxy extends geotoolkit.schematics.scene.ComponentNode {
                /**
                 * Encapsulates geotoolkit.schematics.scene.ReusableComponentNode  instance
                 * The given data will be deeply copied
                 * @param reusableComponentNode  (Required) component node to re-use
                 * @param data  (Optional) data to initialize "reusableComponentNode" with
                 */
                constructor(reusableComponentNode: geotoolkit.schematics.scene.ReusableComponentNode, data?: any);
                /**
                 * Dispose node. Clear all listeners
                 * and disconnect style to avoid memory leaks
                 */
                dispose(): any;
                /**
                 * Sets component data
                 * @param data  (Required) data to set
                 * @param data.geometry  (Optional) component geometry
                 * @param data.description  (Optional) component description
                 * @param data.renderinghints  (Optional) component rendering hints
                 * @param deepCopy  (Optional) deep copy flag
                 */
                setData(data: any | { geometry?: any; description?: string; renderinghints?: any; } , deepCopy?: boolean): this;
                /**
                 * Gets "resource-based" indicator.
                 */
                isResourceBased(): boolean;
                /**
                 * Gets graphical styles associated with its underlying reusable component node.
                 */
                getStyles(): any[];
                /**
                 * Gets component bounds
                 */
                getGeometryBounds(): geotoolkit.util.Rect;
                /**
                 * Renders underlying reusable component node
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
                /**
                 * Check if compnent is within giving context
                 * @param context  (Required) RenderingContext
                 */
                checkCollision(context: geotoolkit.renderer.RenderingContext): boolean;
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
             * Top-most WellBorenode implementation used to visualize schematics data.<br>
             * If user does not need any custom elements (i.e. “geotoolkit.schematics.scene.ComponentNode” implementations), reference to the data is the only argument to pass to WellBoreNode constructor. If user DOES need any custom elements, then a “geotoolkit.schematics.factory.ComponentNodeFactoryRegistry” instance used in the WellBoreNode object must contain an entry to make the custom data displayed within WellBoreNode.
             * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into “geotoolkit.plot.Plot” as a root.
             * If labeling IS needed then “geotoolkit.schematics.scene.WellBoreWithLabels” object must be created based on user’s WellBoreNode object.
             */
            class WellBoreNode extends geotoolkit.scene.Group {
                /**
                 * Top-most WellBorenode implementation used to visualize schematics data.<br>
                 * If user does not need any custom elements (i.e. “geotoolkit.schematics.scene.ComponentNode” implementations), reference to the data is the only argument to pass to WellBoreNode constructor. If user DOES need any custom elements, then a “geotoolkit.schematics.factory.ComponentNodeFactoryRegistry” instance used in the WellBoreNode object must contain an entry to make the custom data displayed within WellBoreNode.
                 * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into “geotoolkit.plot.Plot” as a root.
                 * If labeling IS needed then “geotoolkit.schematics.scene.WellBoreWithLabels” object must be created based on user’s WellBoreNode object.
                 * @param parameters  (Required) 
                 * @param parameters.data  (Optional) wellbore data
                 * @param parameters.renderinghints  (Optional) rendering hints for components
                 * @param parameters.registry  (Optional) factory registry
                 * @param parameters.viewMode  (Optional) view mode
                 */
                constructor(parameters: any | { data?: geotoolkit.schematics.data.WellBoreData; renderinghints?: any; registry?: geotoolkit.schematics.factory.ComponentNodeFactoryRegistry; viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode; } );
                /**
                 * ViewMode
                 */
                static ViewMode: any;
                /**
                 * Check if this node is within the area being rendered by the context
                 * @param context  (Required) Rendering Context
                 */
                checkCollision(context: geotoolkit.renderer.RenderingContext): boolean;
                /**
                 * Gets well bore view mode.
                 */
                getViewMode(): geotoolkit.schematics.scene.WellBoreNode.ViewMode;
                /**
                 * Gets the view mode's builder
                 * @param viewMode  (Required) view mode
                 */
                getBuilder(viewMode: geotoolkit.schematics.scene.WellBoreNode.ViewMode): geotoolkit.schematics.builder.IViewModeBuilder;
                /**
                 * Sets well bore view mode.
                 * @param viewMode  (Optional) well bore view mode
                 */
                setViewMode(viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode): {mapping:{modelLimitsDepths:any[];boundsDepths:any[]}}|any;
                /**
                 * Rebuilds all components with a given "componentName"
                 * @param componentName  (Required) component name
                 */
                replaceComponent(componentName: string): this;
                /**
                 * Gets rendering hints for various component types (if any)
                 */
                getRenderingHints(): any;
                /**
                 * Sets rendering hints for various component types (if any)
                 * @param hints  (Optional) rendering hints
                 */
                setRenderingHints(hints?: any): this;
                /**
                 * Gets factory registry associated with the node.
                 */
                getFactoryRegistry(): geotoolkit.schematics.factory.ComponentNodeFactoryRegistry;
                /**
                 * Associates the factory registry with the node.
                 * @param factoryRegistry  (Required) factory registry to be assiciated with the node
                 */
                setFactoryRegistry(factoryRegistry: geotoolkit.schematics.factory.ComponentNodeFactoryRegistry): this;
                /**
                 * Gets well bore data the node is built on.
                 */
                getWellBoreData(): geotoolkit.schematics.data.WellBoreData;
                /**
                 * Sets well bore data to build the node on.
                 * @param wellBoreData  (Required) well bore data the node is built on
                 */
                setWellBoreData(wellBoreData: geotoolkit.schematics.data.WellBoreData): this;
                /**
                 * Sets visibility (convenience method)
                 * @param visible  (Required) visibility state
                 * @param componentName  (Optional) if the parameter is omitted - then all component nodes are set
to "visible" state
                 */
                setVisible(visible: boolean, componentName?: string): any;
                /**
                 * Gets visibility (convenience method)
                 * @param componentName  (Optional) component name
                 */
                getVisible(componentName?: string): boolean;
                /**
                 * Gets visible components' names (convenience method)
                 */
                getComponentsVisibility(): any;
                /**
                 * Sets component visibility according to the names passed (convenience method).
                 * Note, that if a name(s) are not neither in "visible" nor in "invisible"
                 * list, those nodes' visibility  state stays unchanged.
                 * @param parameter  (Required) visibility state
                 * @param parameter.visible  (Optional) visible nodes list
                 * @param parameter.invisible  (Optional) invisible nodes list
                 */
                setComponentsVisibility(parameter: any | { visible?: any[]; invisible?: any[]; } ): this;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 * @param properties.wellboredata  (Optional) well bore data the node is built on
                 * @param properties.viewMode  (Optional) well bore view mode
                 */
                setProperties(properties: any | { wellboredata?: geotoolkit.schematics.data.WellBoreData; viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode; } ): this;
                /**
                 * Renders itself to specified context
                 * @param context  (Required) Rendering Context
                 */
                renderContent(context: geotoolkit.renderer.RenderingContext): any;
            }
            /**
             * WellBoreNode extension to provide sinusoidal curve on the external side of casing elements and open-hole.
             */
            class SinusoidNode extends geotoolkit.schematics.scene.WellBoreNode {
                /**
                 * WellBoreNode extension to provide sinusoidal curve on the external side of casing elements and open-hole.
                 * @param parameters  (Required) (@see {@link eotoolkit.schematics.scene.WellBoreNode} for the base class parameters info)
                 * @param parameters.sinusoid  (Optional) wellbore node sinusoid options
                 * @param parameters.sinusoid.depthfrom  (Optional) depth value to start drawing sinusoid from
                 * @param parameters.sinusoid.amplitude  (Optional) sinusoid sine amplitude in pixels
                 * @param parameters.sinusoid.period  (Optional) sinusoid sine period in pixels
                 * @param parameters.sinusoid.accuracy  (Optional) sinusoid sine representation accuracy
(bigger number means better accuracy and worse performance)
                 * @param parameters.sinusoid.linestyle  (Optional) sinusoid  line style
                 */
                constructor(parameters: any | { sinusoid?: any | { depthfrom?: number; amplitude?: number; period?: number; accuracy?: number; linestyle?: geotoolkit.attributes.LineStyle; } ; } );
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 * @param properties.sinusoid  (Optional) wellbore node sinusoid options
                 * @param properties.sinusoid.depthfrom  (Optional) depth value to start drawing sinusoid from
                 * @param properties.sinusoid.amplitude  (Optional) sinusoid sine amplitude in pixels
                 * @param properties.sinusoid.period  (Optional) sinusoid sine period in pixels
                 * @param properties.sinusoid.accuracy  (Optional) sinusoid sine representation accuracy
                 */
                setProperties(properties: any | { sinusoid?: any | { depthfrom?: number; amplitude?: number; period?: number; accuracy?: number; } ; } ): this;
                /**
                 * Sets wellbore view mode.
                 * @param viewMode  (Optional) well bore view mode
                 */
                setViewMode(viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode): {mapping:{modelLimitsDepths:any[];boundsDepths:any[]}}|any;
                /**
                 * Renders itself to specified context
                 * @param context  (Required) Rendering Context
                 */
                renderContent(context: geotoolkit.renderer.RenderingContext): any;
            }
            /**
             * L-shaped WellBoreNode extension.
             */
            class LShapedWellBoreNode extends geotoolkit.schematics.scene.WellBoreNode {
                /**
                 * L-shaped WellBoreNode extension.
                 * @param parameters  (Required) 
                 * @param parameters.data  (Optional) wellbore data
                 * @param parameters.viewMode  (Optional) view mode
                 * @param parameters.registry  (Optional) factory registry
                 * @param parameters.trackWidth  (Optional) track width
                 * @param parameters.deviationDepth  (Optional) deviation depth (if "null" then it's calculated based on the data)
                 * @param parameters.LShapeAccuracy  (Optional) accuracy (bigger number means smoother L-shape)
                 */
                constructor(parameters: any | { data?: geotoolkit.schematics.data.WellBoreData; viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode; registry?: geotoolkit.schematics.factory.ComponentNodeFactoryRegistry; trackWidth?: number; deviationDepth?: number; LShapeAccuracy?: number; } );
                /**
                 * Gets deviation depth value
                 */
                getDeviationDepth(): number;
                /**
                 * Sets deviation depth value
                 * @param deviationDepth  (Required) deviation depth value
                 */
                setDeviationDepth(deviationDepth: number): this;
                /**
                 * Gets model limits
                 */
                getModelLimits(): geotoolkit.util.Rect;
                /**
                 * Gets well bore view mode.
                 */
                getViewMode(): geotoolkit.schematics.scene.WellBoreNode.ViewMode;
                /**
                 * Sets well bore view mode.
                 * @param viewMode  (Optional) well bore view mode
                 */
                setViewMode(viewMode?: geotoolkit.schematics.scene.WellBoreNode.ViewMode): {mapping:{modelLimitsDepths:any[];boundsDepths:any[]}}|any;
                /**
                 * Gets all the properties pertaining to this object
                 */
                getProperties(): any;
                /**
                 * Sets all the properties pertaining to this object
                 * @param properties  (Required) An object containing the properties to set
                 * @param properties.deviationDepth  (Optional) deviation depth value
                 */
                setProperties(properties: any | { deviationDepth?: number; } ): this;
            }
            /**
             * Basic multi-diameter component node.
             */
            class MultiDiameterComponentNode extends geotoolkit.schematics.scene.ComponentNode {
                /**
                 * Basic multi-diameter component node.
                 * @param data  (Optional) 
                 * @param data.description  (Optional) element description
                 * @param data.geometry  (Optional) geometry data (see {@link geotoolkit.schematics.scene.MultiDiameterComponentNode.prototype.setGeometryData} for more info)
                 */
                constructor(data?: any | { description?: string; geometry?: any[]; } );
                /**
                 * Gets geometry (model) bounds
                 */
                getGeometryBounds(): geotoolkit.util.Rect;
                /**
                 * Validates geometry data.
                 * @param geometryData  (Required) geometry object or an array of such objects
                 */
                validGeometryData(geometryData: any|any[]): boolean;
                /**
                 * Sets geometric data. A derived class's "setGeometryData" overridable must call the implementation in its body.
                 * @param geometryData  (Required) 
                 * @param geometryData.depth  (Optional) 
                 * @param geometryData.depth.from  (Optional) 
                 * @param geometryData.depth.to  (Optional) 
                 * @param geometryData.diameter  (Optional) 
                 * @param geometryData.diameter.outer  (Optional) 
                 * @param geometryData.diameter.inner  (Optional) 
                 * @param isCompressed  (Optional) compressed view mode flag
                 */
                setGeometryData(geometryData: any | { depth?: any | { from?: number; to?: number; } ; diameter?: any | { outer?: number; inner?: number; } ; } , isCompressed?: boolean): any;
                /**
                 * Gets geometric data to build the node on
                 * @param isCompressed  (Optional) compressed view mode flag
                 */
                getGeometryData(isCompressed?: boolean): any;
                /**
                 * Renders itself onto a context.
                 * The implementation just call for {@link geotoolkit.schematics.scene.ComponentNode.prototype.render} method.
                 * @param context  (Required) 
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
            }
            /**
             * Default implementation for wellbore with labels.
             * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into “geotoolkit.plot.Plot” as a root.
             * If labeling IS needed then “geotoolkit.schematics.scene.WellBoreWithLabels” object must be created based on user’s WellBoreNode object.
             */
            class WellBoreWithLabels extends geotoolkit.scene.Group {
                /**
                 * Default implementation for wellbore with labels.
                 * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into “geotoolkit.plot.Plot” as a root.
                 * If labeling IS needed then “geotoolkit.schematics.scene.WellBoreWithLabels” object must be created based on user’s WellBoreNode object.
                 * @param parameters  (Optional) options to initialize the labeled well bore node
                 * @param parameters.wellBoreNode  (Optional) labeled well bore node
                 * @param parameters.labelingStrategy  (Optional) labeling strategy
                 */
                constructor(parameters?: any | { wellBoreNode?: geotoolkit.schematics.scene.WellBoreNode; labelingStrategy?: geotoolkit.schematics.labeling.LabelingStrategy; } );
                /**
                 * Enum of labeling mode
                 */
                static LabelingMode: any;
                /**
                 * Sets layout handler
                 * @param handler  (Required) layout handler
                 */
                setOnDoLayoutHandler(handler: Function): this;
                /**
                 * Gets layout handler
                 */
                getOnDoLayoutHandler(): Function;
                /**
                 * Gets well bore node
                 */
                getWellBoreNode(): geotoolkit.schematics.scene.WellBoreNode;
                /**
                 * Sets well bore node
                 * @param wellBoreNode  (Required) well bore node
                 */
                setWellBoreNode(wellBoreNode: geotoolkit.schematics.scene.WellBoreNode): this;
                /**
                 * Sets labeling strategy
                 * @param strategy  (Required) labeling stratery
                 */
                setLabelingStrategy(strategy: geotoolkit.schematics.labeling.LabelingStrategy): this;
                /**
                 * Gets labeling strategy. Default: {geotoolkit.schematics.labeling.DefaultLabelingStrategy} instance
                 */
                getLabelingStrategy(): geotoolkit.schematics.labeling.LabelingStrategy;
                /**
                 * Gets current labeling mode. Default: {string} WellBoreWithLabels.LabelingMode.LabelingModeDocked
                 */
                getLabelingMode(): geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode;
                /**
                 * Sets labeling mode. NOTE: to setup custom labeling mode use
                 * "setLabelingStrategy" method directly.
                 * @param labelingMode  (Required) labeling mode
                 */
                setLabelingMode(labelingMode: geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode): this;
                /**
                 * Renders contained well bore node as well as labels
                 * according to active labeling strategy
                 * @param context  (Required) Rendering Context
                 */
                render(context: geotoolkit.renderer.RenderingContext): any;
            }
            /**
             * Represents deviated wellbore node with labels. It wraps wellBoreNode with automatically created geotoolkit.scene.DeviatedCompositeNode.
             */
            class DeviatedWellBoreWithLabels extends geotoolkit.scene.Group {
                /**
                 * Represents deviated wellbore node with labels. It wraps wellBoreNode with automatically created geotoolkit.scene.DeviatedCompositeNode.
                 * @param options  (Required) options @see {@link geotoolkit.scene.Group} for more options description
                 * @param options.wellBoreNode  (Required) wellbore node
                 */
                constructor(options: any | { wellBoreNode: geotoolkit.schematics.scene.WellBoreNode; } );
                /**
                 * Sets deviation options.
                 * @param options  (Optional) deviation options
                 * @param options.trajectory  (Optional) trajectory along the path
                 * @param options.transformer  (Optional) transformer to be used
                 * @param options.trackWidth  (Optional) track width
                 * @param options.offset  (Optional) offset in pixels to the trajectory segment
                 * @param options.clip  (Optional) flag to enable clipping
                 */
                setDeviation(options?: any | { trajectory?: geotoolkit.deviation.Trajectory2d; transformer?: geotoolkit.deviation.Transformer2d; trackWidth?: number; offset?: number; clip?: number; } ): this;
                /**
                 * Sets layout handler
                 * @param handler  (Required) layout handler
                 */
                setOnDoLayoutHandler(handler: Function): this;
                /**
                 * Gets layout handler
                 */
                getOnDoLayoutHandler(): Function;
                /**
                 * Gets well bore node
                 */
                getWellBoreNode(): geotoolkit.schematics.scene.WellBoreNode;
                /**
                 * Sets well bore node
                 * @param wellBoreNode  (Required) well bore node
                 */
                setWellBoreNode(wellBoreNode: geotoolkit.schematics.scene.WellBoreNode): this;
                /**
                 * Sets labeling strategy
                 * @param strategy  (Required) labeling strategy
                 */
                setLabelingStrategy(strategy: geotoolkit.schematics.labeling.LabelingStrategy): this;
                /**
                 * Gets labeling strategy. Default: {geotoolkit.schematics.labeling.DefaultDeviatedStrategy} instance
                 */
                getLabelingStrategy(): geotoolkit.schematics.labeling.LabelingStrategy;
                /**
                 * Gets current labeling mode. Default: {string} WellBoreWithLabels.LabelingMode.LabelingModeDocked
                 */
                getLabelingMode(): geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode;
                /**
                 * Sets labeling mode. NOTE: to setup custom labeling mode use
                 * "setLabelingStrategy" method directly.
                 * @param labelingMode  (Required) labeling mode
                 */
                setLabelingMode(labelingMode: geotoolkit.schematics.scene.WellBoreWithLabels.LabelingMode): this;
            }
            module WellBoreNode {
                /**
                 * ViewMode
                 */
                interface ViewMode {
                    /**
                     * Regular
                     */
                    Regular: number;
                    /**
                     * Compressed
                     */
                    Compressed: number;
                    /**
                     * KeepAspectRatio
                     */
                    KeepAspectRatio: number;
                }
            }
            module WellBoreWithLabels {
                /**
                 * Enum of labeling mode
                 */
                interface LabelingMode {
                    /**
                     * Docked
                     */
                    LabelingModeDocked: string;
                    /**
                     * Adjacent
                     */
                    LabelingModeAdjacent: string;
                    /**
                     * Custom
                     */
                    LabelingModeCustom: string;
                }
            }
        }
        module utils {
            /**
             * Node selector implementation for schematics needs.
             */
            class ComponentNodeSelector extends geotoolkit.selection.Selector {
                /**
                 * Node selector implementation for schematics needs.
                 * @param transformation  (Optional) scene transformation
                 */
                constructor(transformation?: geotoolkit.util.Transformation);
                /**
                 * The implementation returns {geotoolkit.schematics.scene.ComponentNode} objects at the location provided.
                 * @param root  (Required) node to be used for selection.
                 * @param x  (Required) x-coordinate
                 * @param y  (Required) y-coordinate
                 * @param radius  (Required) selection radius
                 */
                select(root: geotoolkit.schematics.scene.ComponentNode, x: number, y: number, radius: number): any[];
            }
        }
        module builder {
            /**
             * ByType filters out all features that are not featureType(s) instances.
             */
            class GetAverageEffectiveHeight implements geotoolkit.schematics.builder.IGetRangeHeight {
                /**
                 * ByType filters out all features that are not featureType(s) instances.
                 */
                constructor();
                /**
                 * Calculates range effective height
                 * @param kars  (Required) array of KeepAspectRatio-elements infos
                 */
                getHeight(kars: any[]): number;
            }
            /**
             * Builder for schematics "Regular" view mode
             */
            class RegularViewModeBuilder implements geotoolkit.schematics.builder.IViewModeBuilder {
                /**
                 * Builder for schematics "Regular" view mode
                 */
                constructor();
                /**
                 * Builds view mode
                 * @param it  (Required) component nodes iterator
                 */
                build(it: geotoolkit.util.Iterator): {mapping:{modelLimitsDepths:any[];boundsDepths:any[]}}|any;
            }
            /**
             * Builder for schematics "Compressed" view mode
             */
            class CompressedViewModeBuilder implements geotoolkit.schematics.builder.IViewModeBuilder {
                /**
                 * Builder for schematics "Compressed" view mode
                 * @param options  (Optional) view mode options
                 * @param options.horizontal  (Optional) elements orientation
                 */
                constructor(options?: any | { horizontal?: boolean; } );
                /**
                 * Builds view mode
                 * @param it  (Required) component nodes iterator
                 */
                build(it: geotoolkit.util.Iterator): {mapping:{modelLimitsDepths:any[];boundsDepths:any[]}}|any;
                /**
                 * Gets builder options
                 */
                getOptions(): any;
                /**
                 * Sets builder options
                 * @param options  (Required) builder options
                 */
                setOptions(options: any): this;
            }
            /**
             * Builder for schematics "KeepAspectRatio" view mode
             */
            class KeepAspectRatioViewModeBuilder implements geotoolkit.schematics.builder.IViewModeBuilder {
                /**
                 * Builder for schematics "KeepAspectRatio" view mode
                 * @param options  (Optional) view mode options
                 * @param options.defaultaspectratio  (Optional) default aspect ratio value
                 * @param options.rangeheight  (Optional) regular ranges settings
                 * @param options.rangeheight.top  (Optional) top range height calculator
                 * @param options.rangeheight.between  (Optional) "between" range(s) height calculator
                 * @param options.rangeheight.bottom  (Optional) bottom range height calculator
                 */
                constructor(options?: any | { defaultaspectratio?: number; rangeheight?: any | { top?: geotoolkit.schematics.builder.IGetRangeHeight; between?: geotoolkit.schematics.builder.IGetRangeHeight; bottom?: geotoolkit.schematics.builder.IGetRangeHeight; } ; } );
                /**
                 * Gets AspectRatio for the component; or "NoAspectRatio"-value
                 * @param name  (Required) component name
                 * @param options  (Required) KAR-info map
                 */
                getAssignedAspectRatio(name: string, options: any): number;
                /**
                 * Builds view mode
                 * @param it  (Required) component nodes iterator
                 */
                build(it: geotoolkit.util.Iterator): {mapping:{modelLimitsDepths:any[];boundsDepths:any[]}}|any;
                /**
                 * Gets builder options
                 */
                getOptions(): any;
                /**
                 * Sets builder options
                 * @param options  (Required) builder options
                 */
                setOptions(options: any): this;
            }
            /**
             * States ViewMode.KeepAspectRatio "regular" effective range height calculator interface
             */
            interface IGetRangeHeight {
                /**
                 * Calculates range effective height
                 * @param kars  (Required) array of KeepAspectRatio-elements infos
                 */
                getHeight(kars: any[]): number;
            }
            /**
             * Schematics view mode builder interface
             */
            interface IViewModeBuilder {
                /**
                 * Builds view mode
                 * @param it  (Required) component nodes iterator
                 */
                build(it: geotoolkit.util.Iterator): any;
            }
        }
    }
}
declare module Defaults {
    /**
     * Default outer diameter.
     */
    var OUTER_DIAMETER: number;
    /**
     * Default component height.
     */
    var HEIGHT: number;
}
