/** @namespace */
geotoolkit3d.scene.seismic = {};

/** @namespace */
geotoolkit3d.tool.seismic = {};

/**
 * A seismic volume object.<br>
 * <br>
 * This object is a container of seismic objects having coordinates defined in index domain (inline, xline, ...).<br>
 * It holds the transformation Index-to-XY and applies it to those seismic object if the display mode is XY.<br>
 * <br>
 * Objects added will be transformed on the fly to be displayed at the correct location with the appropriate size.<br>
 * @class geotoolkit3d.scene.seismic.Volume
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {geotoolkit3d.transformation.IndexCoordinates} options.index The index coordinates, usually inline/crossline or IJ
 * @param {geotoolkit3d.transformation.XYCoordinates} options.xy The world coordinates, usually xy.
 * @param {geotoolkit3d.Util.SeismicModes} [options.displaymode=geotoolkit3d.Util.SeismicModes.xy] The display mode, either index or xy
 */
geotoolkit3d.scene.seismic.Volume = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param {object} options The options
     * @param {geotoolkit3d.Util.SeismicModes} [options.mode] The display mode, either index or xy
     * @returns {geotoolkit3d.scene.seismic.Volume} this
     */
    geotoolkit3d.scene.seismic.Volume.prototype.setOptions = function(options){};
    /**
     * Get the index coordinates
     * @returns {geotoolkit3d.transformation.IndexCoordinates} The index coordinates
     */
    geotoolkit3d.scene.seismic.Volume.prototype.getIndexCoordinates = function(){};
    /**
     * Get the XY coordinates
     * @returns {geotoolkit3d.transformation.XYCoordinates} The XY coordinates
     */
    geotoolkit3d.scene.seismic.Volume.prototype.getXYCoordinates = function(){};
    /**
     * returns if the point is inside the xy volume
     * @param {THREE.Vector3} point point in xy coordinates
     * @returns {boolean} The XY coordinates
     */
    geotoolkit3d.scene.seismic.Volume.prototype.isPointInside = function(point){};

/**
 * A tool specialized in moving a seismicslice.<br>
 * <br>
 * This tool uses the given Volume object to limit the slice displacement.<br>
 * Note that this tool simply moves the slice, calling code is responsible of updating the seismic data displayed.<br>
 *
 * @class geotoolkit3d.tool.seismic.SeismicSliderTool
 * @augments geotoolkit3d.tool.SliderMoveTool
 *
 * @param {object} options See geotoolkit3d.tool.SliderMoveTool for inherited options
 * @param {geotoolkit3d.scene.seismic.Volume} options.volume The seismic volume that this slider should operate on
 * @param {function} [options.callback=function(slice, previous, location){slice.setOptions({'slicelocation': location})}] The callback function triggered when a slice is being moved
 * @param {function} [options.snap=function (location, slice){// Adjust only z to samplerate}] The function used to adjust the computed ijz value to an existing seismic inline/xline/slice.
 * @param {string} [options.name=SeismicSliderTool] tool name
 */
geotoolkit3d.tool.seismic.SeismicSliderTool = {};
    /**
     * Sets volume
     * @param {geotoolkit3d.scene.seismic.Volume} volume volume
     */
    geotoolkit3d.tool.seismic.SeismicSliderTool.prototype.setVolume = function(volume){};

/**
 * Material used to do renderer picking on a Seismic slice.<br>
 *
 * @class geotoolkit3d.picking.pickingrenderer.DefaultSeismicSlicePickingMaterial
 * @augments geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial
 * @see {@link geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial} For details about picking-material.
 * @see {@link geotoolkit3d.picking.RendererPicking} For details about picking-renderer.
 */
geotoolkit3d.picking.pickingrenderer.DefaultSeismicSlicePickingMaterial = {};

/**
 * A seismic slice object.<br>
 * <br>
 * A seismic slice is a 2D seismic cross-section following one dimension of a seismic volume (inline, xline or time/depth slice).<br>
 * The actual seismic to be displayed is provided by the given {@link geotoolkit3d.scene.seismic.SliceMaterial}.<br>
 * <br>
 * The resulting shape is a 2D plane displaying seismic.<br>
 * It is generally added to a {@link geotoolkit3d.scene.seismic.Volume} that will handle the IJ-to-XY conversion.<br>
 *
 * @class geotoolkit3d.scene.seismic.Slice
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {geotoolkit3d.scene.seismic.SliceMaterial} options.material The slice's material containing the seismic textures
 * @param {geotoolkit3d.transformation.IndexCoordinates} options.index The index coordinates
 * @param {object} options.slicelocation The slice location in I, J or Z
 * @param {number} [options.slicelocation.i] The inline number of the section
 * @param {number} [options.slicelocation.j] The xline number of the section
 * @param {number} [options.slicelocation.z] The sample <b>index</b> of the horizontal slice
 * @param {number} [options.xstart=options.index.min.x|options.index.min.y] The slice first trace number
 * @param {number} [options.ystart=options.index.min.z|options.index.min.y] The slice first sample number
 * @param {number} [options.width=iSize|jSize] The slice width (in traces), by default computes the size of the section
 * @param {number} [options.height=zSize|jSize] The slice height (in samples), by default computes the size of the section
 */
geotoolkit3d.scene.seismic.Slice = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {object} [options.data] The data options
     * @param {geotoolkit.seismic.data.SeismicReader|null} [options.data.reader] The seismic reader that will be used to retrieve the traces, null to empty the slice
     * @param {object} [options.pipeline] The options for the pipeline
     * @param {object} [options.pipeline.options] The options forwarded to the pipeline API. See {@link geotoolkit.seismic.pipeline.SeismicPipeline} for complete documentation
     * @param {object} [options.pipeline.interpolation] The interpolation options
     * @param {geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType} [options.pipeline.interpolation.type] The interpolation mode
     * @param {geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge} [options.pipeline.interpolation.edge] The interpolation mode for the edges of the seismic
     * @param {object} [options.pipeline.plot] The seismic plotting options
     * @param {object} [options.pipeline.plot.type] The plotting types enabled/disabled
     * @param {boolean} [options.pipeline.plot.type.Wiggle] The wiggles rendering flag
     * @param {boolean} [options.pipeline.plot.type.InterpolatedDensity] The interpolated density rendering flag
     * @param {string} [options.pipeline.plot.clippingFactor] The clipping factor for wiggles
     * @param {string} [options.pipeline.plot.decimationSpacing] The decimation for wiggles
     * @param {object} [options.pipeline.colors] The coloring options
     * @param {string|geotoolkit.seismic.util.SeismicColors} [options.pipeline.colors.colorMap] The color map
     * @param {string} [options.loadingcolor] Material color while loading seismic (css format)
     * @param {object} [options.slicelocation] The slice location in I or J or Z
     * @param {number} [options.slicelocation.i] The inline number of the section
     * @param {number} [options.slicelocation.j] The xline number of the section
     * @param {number} [options.slicelocation.z] The sample <b>index</b> of the horizontal slice
     * @param {number} [options.xstart=options.index.min.x|options.index.min.y] The slice first trace number
     * @param {number} [options.ystart=options.index.min.z|options.index.min.y] The slice first sample number
     * @param {number} [options.width=iSize|jSize] The slice width (in traces), by default computes the size of the selected section
     * @param {number} [options.height=zSize|jSize] The slice height (in samples), by default computes the size of the selected section
     * @returns {geotoolkit3d.scene.seismic.Slice} this
     */
    geotoolkit3d.scene.seismic.Slice.prototype.setOptions = function(options){};
    /**
     * Get the slice's material
     * @returns {geotoolkit3d.scene.seismic.SliceMaterial} This slice's material
     */
    geotoolkit3d.scene.seismic.Slice.prototype.getSliceMaterial = function(){};
    /**
     * Get the slice location in I, J or Z
     * @returns {object} The location json
     */
    geotoolkit3d.scene.seismic.Slice.prototype.getSliceLocation = function(){};
    /**
     * Get the index coordinates
     * @returns {geotoolkit3d.transformation.IndexCoordinates} The index coordinates
     */
    geotoolkit3d.scene.seismic.Slice.prototype.getIndexCoordinates = function(){};

/**
 * A seismic slice material.<br>
 * <br>
 * The seismic slice material is supposed ot be used in conjunction with {@link geotoolkit3d.scene.seismic.Slice}.<br>
 * It is responsible for creating and managing the textures required to render a seismic crossection.<br>
 * <br>
 * To do so, it will create a {@link geotoolkit.seismic.pipeline.SeismicPipeline} using the given
 * {@link geotoolkit.seismic.data.SeismicReader}.<br>
 * <br>
 * As rasterization process is delegated to the SeismicPipeline, it supports any pipeline configuration (Colormap, interpolation, etc).<br>
 * At initialization time using 'options.pipeline.options'.<br>
 * And at runtime using getPipeline().setOptions().<br>
 * <br>
 * Default pipeline configuration is:<br>
 * <pre>
 * {
 * 'normalization': {
 * 'type': geotoolkit.seismic.pipeline.SeismicPipeline.NormalizationType.RMS,
 * 'scale': 1
 * },
 * 'plot': {
 * 'type': {
 * 'Wiggle': false,
 * 'InterpolatedDensity': true
 * },
 * 'decimationSpacing': 5
 * },
 * 'colors': {
 * 'colorMap': geotoolkit.seismic.util.SeismicColors.getDefault().createNamedColorMap("WhiteBlack", 32)
 * }
 * }
 * </pre>
 * <br>
 * This material also supports an 'overlay' feature that lets you provide a {@link geotoolkit.scene.Group group} containing 2D shapes.<br>
 * The content of this group will be rendered on top of the seismic.<br>
 * This group modellimits and bounds will be automatically set to the correct values.<br>
 * The group's content should use coordinates in trace/sample domain.<br>
 * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
 * <br>
 *
 * @class geotoolkit3d.scene.seismic.SliceMaterial
 * @augments THREE.MeshFaceMaterial
 * @param {object} options The options
 * @param {object} options.data The options related to the data
 * @param {geotoolkit.seismic.data.SeismicReader} options.data.reader The seismic reader that will be used to retrieve the traces
 * @param {geotoolkit.util.Rect} [options.data.limits=readerlimits] The subpart of the seismic to read
 * @param {object} [options.pipeline] The options for the pipeline
 * @param {object} [options.pipeline.options] The options forwarded to the pipeline API. See
 * {@link geotoolkit.seismic.pipeline.SeismicPipeline} for complete documentation
 * @param {object} [options.pipeline.normalization] The normalization options
 * @param {object} [options.pipeline.normalization.type=geotoolkit.seismic.pipeline.SeismicPipeline.NormalizationType.RMS] The
 * normalization mode
 * @param {object} [options.pipeline.normalization.scale=1] A scale factor applied to the normalization limits
 * @param {object} [options.pipeline.interpolation] The interpolation options
 * @param {geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType} [options.pipeline.interpolation.type=geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType.Quadratic] The
 * interpolation mode
 * @param {geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge} [options.pipeline.interpolation.edge=geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge.Zero] The
 * interpolation mode for the edges of the seismic
 * @param {object} [options.pipeline.plot] The seismic plotting options See {@link geotoolkit.seismic.pipeline.SeismicPipeline} for
 * complete documentation
 * @param {object} [options.pipeline.plot.type] The plotting types enabled/disabled
 * @param {boolean} [options.pipeline.plot.type.Wiggle=false] The wiggles rendering flag
 * @param {boolean} [options.pipeline.plot.type.InterpolatedDensity=true] The interpolated density rendering flag
 * @param {string} [options.pipeline.plot.clippingFactor] The clipping factor for wiggles
 * @param {string} [options.pipeline.plot.decimationSpacing] The decimation for wiggles
 * @param {object} [options.pipeline.colors] The coloring options
 * @param {string|geotoolkit.seismic.util.SeismicColors} [options.pipeline.colors.colorMap="WhiteBlack"] The color map
 * @param {number} [options.tilesize=512] Tile size in pixels. this material will be using several textures, this defines the size of a
 * tile-texture. Must be a power of 2
 * @param {number} [options.maxpixelsx=4096] Max number of pixels to create in the X Direction. Number of tiles (X direction) *
 * tilesize (X direction) will be reduced to fit this maximum value
 * @param {number} [options.maxpixelsy=4096] Max number of pixels to create in the Y Direction. Number of tiles (Y direction) *
 * tilesize (Y direction) will be reduced to fit this maximum value
 * @param {number} [options.horizontalresolution=1] The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
 * @param {number} [options.verticalresolution=1] The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
 * @param {function} [options.oninvalidate=function(){}] The function to call whenever this material has been invalidated
 * @param {string} [options.loadingcolor='rgba(255,255,255,0.5)'] Material color while loading seismic (css format)
 * @param {geotoolkit.scene.Group} [options.overlay] A group that will be used to render 2D shapes on top of the slice as 'overlay'. The
 * coordinates of those shapes should be in traces/samples
 * @param {boolean} [options.autodecimate=true] automatically decimate the pipeline to the amount of pixels of the texture
 * @param {number} [options.pixelrenderthreshold=null] the amount of pixels that will stop the rendering of seismic onto the texture
 * @param {boolean} [options.globalqueue=false] queue renders into a global(true) or local(false) queue
 * @param {boolean} [options.clearpipeline=true] will clear the pipeline after the slice is rendered
 * @param {boolean} [options.disposesurface=false] will remove the surface from heap after its been moved to the GPU
 */
geotoolkit3d.scene.seismic.SliceMaterial = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {object} [options.data] The data options
     * @param {geotoolkit.seismic.data.SeismicReader|null} [options.data.reader] The seismic reader that will be used to retrieve the
     * traces, null to empty the slice
     * @param {object} [options.pipeline] The options for the pipeline
     * @param {object} [options.pipeline.options] The options forwarded to the pipeline API. See
     * {@link geotoolkit.seismic.pipeline.SeismicPipeline} for complete documentation
     * @param {object} [options.pipeline.interpolation] The interpolation options
     * @param {geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType} [options.pipeline.interpolation.type] The interpolation mode
     * @param {geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge} [options.pipeline.interpolation.edge] The interpolation mode
     * for the edges of the seismic
     * @param {object} [options.pipeline.plot] The seismic plotting options
     * @param {string} [options.pipeline.plot.type] The plot type
     * @param {string} [options.pipeline.plot.clippingFactor] The clipping factor for wiggles
     * @param {string} [options.pipeline.plot.decimationSpacing] The decimation for wiggles
     * @param {object} [options.pipeline.colors] The coloring options
     * @param {string|geotoolkit.seismic.util.SeismicColors} [options.pipeline.colors.colorMap] The color map
     * @param {string} [options.loadingcolor] Material color while loading seismic (css format)
     * @param {number} [options.pixelrenderthreshold] the amount of pixels that will stop the rendering of seismic onto the texture
     * @param {boolean} [options.globalqueue] queue renders into a global(true) or local(false) queue
     * @param {boolean} [options.autodecimate] automatically decimate the pipeline to the amount of pixels of the texture
     * @param {boolean} [options.clearpipeline] will clear the pipeline after the slice is rendered
     * @param {boolean} [options.disposesurface] will remove the surface from heap after its been moved to the GPU
     * @param {number} [options.horizontalresolution=1] The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
     * @param {number} [options.verticalresolution=1] The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
     */
    geotoolkit3d.scene.seismic.SliceMaterial.prototype.setOptions = function(options){};
    /**
     * Returns a group that can be used to render 2D shapes on top of the seismic slice.<br>
     * The coordinate system of the group is in trace/samples.
     * @returns {geotoolkit.scene.Group} The overlay group
     */
    geotoolkit3d.scene.seismic.SliceMaterial.prototype.getOverlay = function(){};
    /**
     * Get the internal pipeline
     * @returns {geotoolkit.seismic.pipeline.SeismicPipeline} The internal pipeline
     */
    geotoolkit3d.scene.seismic.SliceMaterial.prototype.getPipeline = function(){};

/**
 * A seismic fence object that represent the cross section of a seismic volume with an arbitrary line.<br>
 * <br>
 * A seismic fence can be used to display seismic along a user crafted path or a well trajectory for example.<br>
 * The resulting shape will be composed of contiguous seismic panels that form a fence.<br>
 * <br>
 * The given coordinates describes the inflexion points of the path.<br>
 * It's expected to be in IJ coordinates and to match actual existing IJ indices.<br>
 * <br>
 * This shape uses a {@link geotoolkit.seismic.data.SeismicReader} to fetch the traces and metadata.<br>
 * The reader's metadata should contain the proper 'sections' in order for the fence to display correctly.<br>
 * This Shape is compatible with {@link geotoolkit.seismic.data.RemoteSeismicReader RemoteSeismicReader} using INTGeoServer. (version >= 2.18)<br>
 * <br>
 * As the rasterization process is delegated to the SeismicPipeline, all the capabilities of the pipeline are available (colormap, interpolation, etc).<br>
 * It can be configured at initialization time using 'options.pipeline.options'.<br>
 * And/Or at runtime using <br>
 * <pre>
 * setOptions({
 * pipeline:{
 * options:{...}
 * }
 * })
 * </pre>
 * <br>
 * This fence also supports an 'overlay' feature that lets you provide a {@link geotoolkit.scene.Group group} containing 2D shapes.<br>
 * The content of this group will be rendered on top of the seismic.<br>
 * This group modellimits and bounds will be automatically set to the correct values.<br>
 * The group's content should use coordinates in trace/sample domain.<br>
 * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
 * <br>
 *
 * @class geotoolkit3d.scene.seismic.Fence
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {object} options.data The options related to the data
 * @param {geotoolkit3d.transformation.IndexCoordinates} options.data.index index coordinates
 * @param {object} options.data.path The fence coordinates
 * @param {number[]} options.data.path.i The inline indices of the fence
 * @param {number[]} options.data.path.j The xline indices of the fence
 * @param {geotoolkit.seismic.data.SeismicReader} [options.data.reader] The seismic reader that will be used to retrieve the traces
 * @param {object} [options.pipeline.options=geotoolkit3d.scene.seismic.SliceMaterial.DEFAULT_PIPELINE_OPTIONS] See {@link geotoolkit.seismic.pipeline.SeismicPipeline}
 * @param {number} [options.tilesize=512] Tile size in pixels. this material will be using several textures, this defines the size of a tile-texture. Must be a power of 2
 * @param {number} [options.horizontalresolution=1] The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
 * @param {number} [options.verticalresolution=1] The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
 * @param {function} [options.oninvalidate=function(){}] The function to call whenever this material has been invalidated
 * @param {string} [options.loadingcolor='rgba(255,255,255,0.5)'] The material color while seismic is loading (in css format)
 * @param {geotoolkit.scene.Group} [options.overlay] A group that will be used to render 2D shapes on top of the slice as 'overlay'. The coordinates of those shapes should be in traces/samples
 */
geotoolkit3d.scene.seismic.Fence = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options The options
     * @param {object} [options.pipeline] The options for the pipeline
     * @param {object} [options.pipeline.options] The options forwarded to the pipeline API. See {@link geotoolkit.seismic.pipeline.SeismicPipeline} for complete documentation
     * @param {object} [options.pipeline.interpolation] The interpolation options
     * @param {geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType} [options.pipeline.interpolation.type] The interpolation mode
     * @param {geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge} [options.pipeline.interpolation.edge] The interpolation mode for the edges of the seismic
     * @param {object} [options.pipeline.plot] The seismic plotting options
     * @param {object} [options.pipeline.plot.type] The plotting types enabled/disabled
     * @param {boolean} [options.pipeline.plot.type.Wiggle] The wiggles rendering flag
     * @param {boolean} [options.pipeline.plot.type.InterpolatedDensity] The interpolated density rendering flag
     * @param {string} [options.pipeline.plot.clippingFactor] The clipping factor for wiggles
     * @param {string} [options.pipeline.plot.decimationSpacing] The decimation for wiggles
     * @param {object} [options.pipeline.colors] The coloring options
     * @param {string|geotoolkit.seismic.util.SeismicColors} [options.pipeline.colors.colorMap] The color map
     * @param {string} [options.loadingcolor] Material color while loading seismic (css format)
     * @returns {geotoolkit3d.scene.seismic.Fence} this
     */
    geotoolkit3d.scene.seismic.Fence.prototype.setOptions = function(options){};
    /**
     * Returns a group that can be used to render 2D shapes on top of the seismic slice.<br>
     * The coordinate system of the group is in trace/samples.
     * @returns {geotoolkit.scene.Group} The overlay group
     */
    geotoolkit3d.scene.seismic.Fence.prototype.getOverlay = function(){};

/**
 * A grid specialized for IJ objects like seismic.<br>
 * <br>
 * For convenience, a specialized version of {@link geotoolkit3d.scene.grid.Grid} using a {@link geotoolkit3d.transformation.IndexCoordinates}.<br>
 *<br>
 * The grid will set its location and size in IJ automatically.<br>
 * In order to be displayed correctly, this grid should be added to the SeismicVolume.<br>
 * <br>
 * @class geotoolkit3d.scene.seismic.IndexGrid
 * @augments geotoolkit3d.scene.grid.Grid
 * @param {object} options The options
 * @param {geotoolkit3d.transformation.IndexCoordinates} options.index The index coordinates
 * @param {THREE.Vector3} [options.count] The grid tick counts
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
 * @param {string} [options.title.texts.x='I'] The X axis title
 * @param {string} [options.title.texts.y='J'] The Y axis title
 * @param {string} [options.title.texts.z=''] The Z axis title
 * @param {object} [options.title.textstyles] The axis title styles
 * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.x=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '13px Arial'})] The X axis title text style
 * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.y=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '13px Arial'})] The Y axis title text style
 * @param {geotoolkit.attributes.TextStyle} [options.title.textstyles.z=geotoolkit.attributes.TextStyle({'color': 'white', 'font': '13px Arial'})] The Z axis title text style
 * @param {object} [options.grid.linestyles] The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
 * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.x=geotoolkit.attributes.LineStyle('transparent')] The X grid line style
 * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.y=geotoolkit.attributes.LineStyle('transparent')] The Y grid line style
 * @param {geotoolkit.attributes.LineStyle} [options.grid.linestyles.z=geotoolkit.attributes.LineStyle('transparent')] The Z grid line style
 * @param {geotoolkit3d.scene.grid.Grid.Mode} [options.mode=geotoolkit3d.scene.grid.Grid.Mode.box] The display strategy to show/hide grid planes depending on camera position
 */
geotoolkit3d.scene.seismic.IndexGrid = {};

