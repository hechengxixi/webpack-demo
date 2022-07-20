declare module geotoolkit3d {
    module scene {
        module seismic {
            /**
             * A seismic volume object.<br>
             * <br>
             * This object is a container of seismic objects having coordinates defined in index domain (inline, xline, ...).<br>
             * It holds the transformation Index-to-XY and applies it to those seismic object if the display mode is XY.<br>
             * <br>
             * Objects added will be transformed on the fly to be displayed at the correct location with the appropriate size.<br>
             */
            class Volume extends geotoolkit3d.scene.Object3D {
                /**
                 * A seismic volume object.<br>
                 * <br>
                 * This object is a container of seismic objects having coordinates defined in index domain (inline, xline, ...).<br>
                 * It holds the transformation Index-to-XY and applies it to those seismic object if the display mode is XY.<br>
                 * <br>
                 * Objects added will be transformed on the fly to be displayed at the correct location with the appropriate size.<br>
                 * @param options  (Required) The options
                 * @param options.index  (Required) The index coordinates, usually inline/crossline or IJ
                 * @param options.xy  (Required) The world coordinates, usually xy.
                 * @param options.displaymode  (Optional) The display mode, either index or xy
                 */
                constructor(options: any | { index: geotoolkit3d.transformation.IndexCoordinates; xy: geotoolkit3d.transformation.XYCoordinates; displaymode?: geotoolkit3d.Util.SeismicModes; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.mode  (Optional) The display mode, either index or xy
                 */
                setOptions(options: any | { mode?: geotoolkit3d.Util.SeismicModes; } ): this;
                /**
                 * Get the index coordinates
                 */
                getIndexCoordinates(): geotoolkit3d.transformation.IndexCoordinates;
                /**
                 * Get the XY coordinates
                 */
                getXYCoordinates(): geotoolkit3d.transformation.XYCoordinates;
                /**
                 * returns if the point is inside the xy volume
                 * @param point  (Required) point in xy coordinates
                 */
                isPointInside(point: THREE.Vector3): boolean;
            }
            /**
             * A seismic slice object.<br>
             * <br>
             * A seismic slice is a 2D seismic cross-section following one dimension of a seismic volume (inline, xline or time/depth slice).<br>
             * The actual seismic to be displayed is provided by the given {@link geotoolkit3d.scene.seismic.SliceMaterial}.<br>
             * <br>
             * The resulting shape is a 2D plane displaying seismic.<br>
             * It is generally added to a {@link geotoolkit3d.scene.seismic.Volume} that will handle the IJ-to-XY conversion.<br>
             */
            class Slice extends geotoolkit3d.scene.Object3D {
                /**
                 * A seismic slice object.<br>
                 * <br>
                 * A seismic slice is a 2D seismic cross-section following one dimension of a seismic volume (inline, xline or time/depth slice).<br>
                 * The actual seismic to be displayed is provided by the given {@link geotoolkit3d.scene.seismic.SliceMaterial}.<br>
                 * <br>
                 * The resulting shape is a 2D plane displaying seismic.<br>
                 * It is generally added to a {@link geotoolkit3d.scene.seismic.Volume} that will handle the IJ-to-XY conversion.<br>
                 * @param options  (Required) The options
                 * @param options.material  (Required) The slice's material containing the seismic textures
                 * @param options.index  (Required) The index coordinates
                 * @param options.slicelocation  (Required) The slice location in I, J or Z
                 * @param options.slicelocation.i  (Optional) The inline number of the section
                 * @param options.slicelocation.j  (Optional) The xline number of the section
                 * @param options.slicelocation.z  (Optional) The sample <b>index</b> of the horizontal slice
                 * @param options.xstart  (Optional) The slice first trace number
                 * @param options.ystart  (Optional) The slice first sample number
                 * @param options.width  (Optional) The slice width (in traces), by default computes the size of the section
                 * @param options.height  (Optional) The slice height (in samples), by default computes the size of the section
                 */
                constructor(options: any | { material: geotoolkit3d.scene.seismic.SliceMaterial; index: geotoolkit3d.transformation.IndexCoordinates; slicelocation: any | { i?: number; j?: number; z?: number; } ; xstart?: number; ystart?: number; width?: number; height?: number; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Optional) The data options
                 * @param options.data.reader  (Optional) The seismic reader that will be used to retrieve the traces, null to empty the slice
                 * @param options.pipeline  (Optional) The options for the pipeline
                 * @param options.pipeline.options  (Optional) The options forwarded to the pipeline API. See {@link geotoolkit.seismic.pipeline.SeismicPipeline} for complete documentation
                 * @param options.pipeline.interpolation  (Optional) The interpolation options
                 * @param options.pipeline.interpolation.type  (Optional) The interpolation mode
                 * @param options.pipeline.interpolation.edge  (Optional) The interpolation mode for the edges of the seismic
                 * @param options.pipeline.plot  (Optional) The seismic plotting options
                 * @param options.pipeline.plot.type  (Optional) The plotting types enabled/disabled
                 * @param options.pipeline.plot.type.Wiggle  (Optional) The wiggles rendering flag
                 * @param options.pipeline.plot.type.InterpolatedDensity  (Optional) The interpolated density rendering flag
                 * @param options.pipeline.plot.clippingFactor  (Optional) The clipping factor for wiggles
                 * @param options.pipeline.plot.decimationSpacing  (Optional) The decimation for wiggles
                 * @param options.pipeline.colors  (Optional) The coloring options
                 * @param options.pipeline.colors.colorMap  (Optional) The color map
                 * @param options.loadingcolor  (Optional) Material color while loading seismic (css format)
                 * @param options.slicelocation  (Optional) The slice location in I or J or Z
                 * @param options.slicelocation.i  (Optional) The inline number of the section
                 * @param options.slicelocation.j  (Optional) The xline number of the section
                 * @param options.slicelocation.z  (Optional) The sample <b>index</b> of the horizontal slice
                 * @param options.xstart  (Optional) The slice first trace number
                 * @param options.ystart  (Optional) The slice first sample number
                 * @param options.width  (Optional) The slice width (in traces), by default computes the size of the selected section
                 * @param options.height  (Optional) The slice height (in samples), by default computes the size of the selected section
                 */
                setOptions(options: any | { data?: any | { reader?: geotoolkit.seismic.data.SeismicReader|any; } ; pipeline?: any | { options?: any; interpolation?: any | { type?: geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType; edge?: geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge; } ; plot?: any | { type?: any | { Wiggle?: boolean; InterpolatedDensity?: boolean; } ; clippingFactor?: string; decimationSpacing?: string; } ; colors?: any | { colorMap?: string|geotoolkit.seismic.util.SeismicColors; } ; } ; loadingcolor?: string; slicelocation?: any | { i?: number; j?: number; z?: number; } ; xstart?: number; ystart?: number; width?: number; height?: number; } ): this;
                /**
                 * Get the slice's material
                 */
                getSliceMaterial(): geotoolkit3d.scene.seismic.SliceMaterial;
                /**
                 * Get the slice location in I, J or Z
                 */
                getSliceLocation(): any;
                /**
                 * Get the index coordinates
                 */
                getIndexCoordinates(): geotoolkit3d.transformation.IndexCoordinates;
            }
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
             *  'normalization': {
             *      'type': geotoolkit.seismic.pipeline.SeismicPipeline.NormalizationType.RMS,
             *      'scale': 1
             *  },
             *  'plot': {
             *      'type': {
             *          'Wiggle': false,
             *          'InterpolatedDensity': true
             *      },
             *      'decimationSpacing': 5
             *  },
             *  'colors': {
             *      'colorMap': geotoolkit.seismic.util.SeismicColors.getDefault().createNamedColorMap("WhiteBlack", 32)
             *  }
             * }
             * </pre>
             * <br>
             * This material also supports an 'overlay' feature that lets you provide a {@link geotoolkit.scene.Group group} containing 2D shapes.<br>
             * The content of this group will be rendered on top of the seismic.<br>
             * This group modellimits and bounds will be automatically set to the correct values.<br>
             * The group's content should use coordinates in trace/sample domain.<br>
             * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
             * <br>
             */
            class SliceMaterial extends THREE.MeshFaceMaterial {
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
                 *  'normalization': {
                 *      'type': geotoolkit.seismic.pipeline.SeismicPipeline.NormalizationType.RMS,
                 *      'scale': 1
                 *  },
                 *  'plot': {
                 *      'type': {
                 *          'Wiggle': false,
                 *          'InterpolatedDensity': true
                 *      },
                 *      'decimationSpacing': 5
                 *  },
                 *  'colors': {
                 *      'colorMap': geotoolkit.seismic.util.SeismicColors.getDefault().createNamedColorMap("WhiteBlack", 32)
                 *  }
                 * }
                 * </pre>
                 * <br>
                 * This material also supports an 'overlay' feature that lets you provide a {@link geotoolkit.scene.Group group} containing 2D shapes.<br>
                 * The content of this group will be rendered on top of the seismic.<br>
                 * This group modellimits and bounds will be automatically set to the correct values.<br>
                 * The group's content should use coordinates in trace/sample domain.<br>
                 * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
                 * <br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The options related to the data
                 * @param options.data.reader  (Required) The seismic reader that will be used to retrieve the traces
                 * @param options.data.limits  (Optional) The subpart of the seismic to read
                 * @param options.pipeline  (Optional) The options for the pipeline
                 * @param options.pipeline.options  (Optional) The options forwarded to the pipeline API. See
    {@link geotoolkit.seismic.pipeline.SeismicPipeline} for complete documentation
                 * @param options.pipeline.normalization  (Optional) The normalization options
                 * @param options.pipeline.normalization.type  (Optional) The
    normalization mode
                 * @param options.pipeline.normalization.scale  (Optional) A scale factor applied to the normalization limits
                 * @param options.pipeline.interpolation  (Optional) The interpolation options
                 * @param options.pipeline.interpolation.type  (Optional) The
    interpolation mode
                 * @param options.pipeline.interpolation.edge  (Optional) The
    interpolation mode for the edges of the seismic
                 * @param options.pipeline.plot  (Optional) The seismic plotting options See {@link geotoolkit.seismic.pipeline.SeismicPipeline} for
    complete documentation
                 * @param options.pipeline.plot.type  (Optional) The plotting types enabled/disabled
                 * @param options.pipeline.plot.type.Wiggle  (Optional) The wiggles rendering flag
                 * @param options.pipeline.plot.type.InterpolatedDensity  (Optional) The interpolated density rendering flag
                 * @param options.pipeline.plot.clippingFactor  (Optional) The clipping factor for wiggles
                 * @param options.pipeline.plot.decimationSpacing  (Optional) The decimation for wiggles
                 * @param options.pipeline.colors  (Optional) The coloring options
                 * @param options.pipeline.colors.colorMap  (Optional) The color map
                 * @param options.tilesize  (Optional) Tile size in pixels. this material will be using several textures, this defines the size of a
    tile-texture. Must be a power of 2
                 * @param options.maxpixelsx  (Optional) Max number of pixels to create in the X Direction. Number of tiles (X direction) *
tilesize (X direction) will be reduced to fit this maximum value
                 * @param options.maxpixelsy  (Optional) Max number of pixels to create in the Y Direction. Number of tiles (Y direction) *
tilesize (Y direction) will be reduced to fit this maximum value
                 * @param options.horizontalresolution  (Optional) The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
                 * @param options.verticalresolution  (Optional) The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
                 * @param options.oninvalidate  (Optional) The function to call whenever this material has been invalidated
                 * @param options.loadingcolor  (Optional) Material color while loading seismic (css format)
                 * @param options.overlay  (Optional) A group that will be used to render 2D shapes on top of the slice as 'overlay'. The
    coordinates of those shapes should be in traces/samples
                 * @param options.autodecimate  (Optional) automatically decimate the pipeline to the amount of pixels of the texture
                 * @param options.pixelrenderthreshold  (Optional) the amount of pixels that will stop the rendering of seismic onto the texture
                 * @param options.globalqueue  (Optional) queue renders into a global(true) or local(false) queue
                 * @param options.clearpipeline  (Optional) will clear the pipeline after the slice is rendered
                 * @param options.disposesurface  (Optional) will remove the surface from heap after its been moved to the GPU
                 */
                constructor(options: any | { data: any | { reader: geotoolkit.seismic.data.SeismicReader; limits?: geotoolkit.util.Rect; } ; pipeline?: any | { options?: any; normalization?: any | { type?: any; scale?: any; } ; interpolation?: any | { type?: geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType; edge?: geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge; } ; plot?: any | { type?: any | { Wiggle?: boolean; InterpolatedDensity?: boolean; } ; clippingFactor?: string; decimationSpacing?: string; } ; colors?: any | { colorMap?: string|geotoolkit.seismic.util.SeismicColors; } ; } ; tilesize?: number; maxpixelsx?: number; maxpixelsy?: number; horizontalresolution?: number; verticalresolution?: number; oninvalidate?: Function; loadingcolor?: string; overlay?: geotoolkit.scene.Group; autodecimate?: boolean; pixelrenderthreshold?: number; globalqueue?: boolean; clearpipeline?: boolean; disposesurface?: boolean; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Optional) The data options
                 * @param options.data.reader  (Optional) The seismic reader that will be used to retrieve the
    traces, null to empty the slice
                 * @param options.pipeline  (Optional) The options for the pipeline
                 * @param options.pipeline.options  (Optional) The options forwarded to the pipeline API. See
    {@link geotoolkit.seismic.pipeline.SeismicPipeline} for complete documentation
                 * @param options.pipeline.interpolation  (Optional) The interpolation options
                 * @param options.pipeline.interpolation.type  (Optional) The interpolation mode
                 * @param options.pipeline.interpolation.edge  (Optional) The interpolation mode
    for the edges of the seismic
                 * @param options.pipeline.plot  (Optional) The seismic plotting options
                 * @param options.pipeline.plot.type  (Optional) The plot type
                 * @param options.pipeline.plot.clippingFactor  (Optional) The clipping factor for wiggles
                 * @param options.pipeline.plot.decimationSpacing  (Optional) The decimation for wiggles
                 * @param options.pipeline.colors  (Optional) The coloring options
                 * @param options.pipeline.colors.colorMap  (Optional) The color map
                 * @param options.loadingcolor  (Optional) Material color while loading seismic (css format)
                 * @param options.pixelrenderthreshold  (Optional) the amount of pixels that will stop the rendering of seismic onto the texture
                 * @param options.globalqueue  (Optional) queue renders into a global(true) or local(false) queue
                 * @param options.autodecimate  (Optional) automatically decimate the pipeline to the amount of pixels of the texture
                 * @param options.clearpipeline  (Optional) will clear the pipeline after the slice is rendered
                 * @param options.disposesurface  (Optional) will remove the surface from heap after its been moved to the GPU
                 * @param options.horizontalresolution  (Optional) The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
                 * @param options.verticalresolution  (Optional) The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
                 */
                setOptions(options: any | { data?: any | { reader?: geotoolkit.seismic.data.SeismicReader|any; } ; pipeline?: any | { options?: any; interpolation?: any | { type?: geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType; edge?: geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge; } ; plot?: any | { type?: string; clippingFactor?: string; decimationSpacing?: string; } ; colors?: any | { colorMap?: string|geotoolkit.seismic.util.SeismicColors; } ; } ; loadingcolor?: string; pixelrenderthreshold?: number; globalqueue?: boolean; autodecimate?: boolean; clearpipeline?: boolean; disposesurface?: boolean; horizontalresolution?: number; verticalresolution?: number; } ): any;
                /**
                 * Returns a group that can be used to render 2D shapes on top of the seismic slice.<br>
                 * The coordinate system of the group is in trace/samples.
                 */
                getOverlay(): geotoolkit.scene.Group;
                /**
                 * Get the internal pipeline
                 */
                getPipeline(): geotoolkit.seismic.pipeline.SeismicPipeline;
            }
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
             *      pipeline:{
             *          options:{...}
             *      }
             *  })
             *  </pre>
             * <br>
             * This fence also supports an 'overlay' feature that lets you provide a {@link geotoolkit.scene.Group group} containing 2D shapes.<br>
             * The content of this group will be rendered on top of the seismic.<br>
             * This group modellimits and bounds will be automatically set to the correct values.<br>
             * The group's content should use coordinates in trace/sample domain.<br>
             * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
             * <br>
             */
            class Fence extends geotoolkit3d.scene.Object3D {
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
                 *      pipeline:{
                 *          options:{...}
                 *      }
                 *  })
                 *  </pre>
                 * <br>
                 * This fence also supports an 'overlay' feature that lets you provide a {@link geotoolkit.scene.Group group} containing 2D shapes.<br>
                 * The content of this group will be rendered on top of the seismic.<br>
                 * This group modellimits and bounds will be automatically set to the correct values.<br>
                 * The group's content should use coordinates in trace/sample domain.<br>
                 * Note that this group will be rasterized in a way similar to how the seismic is rasterized itself.<br>
                 * <br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The options related to the data
                 * @param options.data.index  (Required) index coordinates
                 * @param options.data.path  (Required) The fence coordinates
                 * @param options.data.path.i  (Required) The inline indices of the fence
                 * @param options.data.path.j  (Required) The xline indices of the fence
                 * @param options.data.reader  (Optional) The seismic reader that will be used to retrieve the traces
                 * @param   (Optional) JSON object container - Generated
                 * @param options.pipeline.options  (Optional) See {@link geotoolkit.seismic.pipeline.SeismicPipeline}
                 * @param options.tilesize  (Optional) Tile size in pixels. this material will be using several textures, this defines the size of a tile-texture. Must be a power of 2
                 * @param options.horizontalresolution  (Optional) The amount of texture pixels for an horizontal unit (ie a trace's width in pixels)
                 * @param options.verticalresolution  (Optional) The amount of texture pixels for an vertical unit (ie a sample's height in pixels)
                 * @param options.oninvalidate  (Optional) The function to call whenever this material has been invalidated
                 * @param options.loadingcolor  (Optional) The material color while seismic is loading (in css format)
                 * @param options.overlay  (Optional) A group that will be used to render 2D shapes on top of the slice as 'overlay'. The coordinates of those shapes should be in traces/samples
                 */
                constructor(options: any | { data: any | { index: geotoolkit3d.transformation.IndexCoordinates; path: any | { i: number[]; j: number[]; } ; reader?: geotoolkit.seismic.data.SeismicReader; } ; pipeline?: any | { options?: any; } ; tilesize?: number; horizontalresolution?: number; verticalresolution?: number; oninvalidate?: Function; loadingcolor?: string; overlay?: geotoolkit.scene.Group; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.pipeline  (Optional) The options for the pipeline
                 * @param options.pipeline.options  (Optional) The options forwarded to the pipeline API. See {@link geotoolkit.seismic.pipeline.SeismicPipeline} for complete documentation
                 * @param options.pipeline.interpolation  (Optional) The interpolation options
                 * @param options.pipeline.interpolation.type  (Optional) The interpolation mode
                 * @param options.pipeline.interpolation.edge  (Optional) The interpolation mode for the edges of the seismic
                 * @param options.pipeline.plot  (Optional) The seismic plotting options
                 * @param options.pipeline.plot.type  (Optional) The plotting types enabled/disabled
                 * @param options.pipeline.plot.type.Wiggle  (Optional) The wiggles rendering flag
                 * @param options.pipeline.plot.type.InterpolatedDensity  (Optional) The interpolated density rendering flag
                 * @param options.pipeline.plot.clippingFactor  (Optional) The clipping factor for wiggles
                 * @param options.pipeline.plot.decimationSpacing  (Optional) The decimation for wiggles
                 * @param options.pipeline.colors  (Optional) The coloring options
                 * @param options.pipeline.colors.colorMap  (Optional) The color map
                 * @param options.loadingcolor  (Optional) Material color while loading seismic (css format)
                 */
                setOptions(options: any | { pipeline?: any | { options?: any; interpolation?: any | { type?: geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationType; edge?: geotoolkit.seismic.pipeline.SeismicPipeline.InterpolationEdge; } ; plot?: any | { type?: any | { Wiggle?: boolean; InterpolatedDensity?: boolean; } ; clippingFactor?: string; decimationSpacing?: string; } ; colors?: any | { colorMap?: string|geotoolkit.seismic.util.SeismicColors; } ; } ; loadingcolor?: string; } ): this;
                /**
                 * Returns a group that can be used to render 2D shapes on top of the seismic slice.<br>
                 * The coordinate system of the group is in trace/samples.
                 */
                getOverlay(): geotoolkit.scene.Group;
            }
            /**
             * A grid specialized for IJ objects like seismic.<br>
             * <br>
             * For convenience, a specialized version of {@link geotoolkit3d.scene.grid.Grid} using a {@link geotoolkit3d.transformation.IndexCoordinates}.<br>
             * <br>
             * The grid will set its location and size in IJ automatically.<br>
             * In order to be displayed correctly, this grid should be added to the SeismicVolume.<br>
             * <br>
             */
            class IndexGrid extends geotoolkit3d.scene.grid.Grid {
                /**
                 * A grid specialized for IJ objects like seismic.<br>
                 * <br>
                 * For convenience, a specialized version of {@link geotoolkit3d.scene.grid.Grid} using a {@link geotoolkit3d.transformation.IndexCoordinates}.<br>
                 * <br>
                 * The grid will set its location and size in IJ automatically.<br>
                 * In order to be displayed correctly, this grid should be added to the SeismicVolume.<br>
                 * <br>
                 * @param options  (Required) The options
                 * @param options.index  (Required) The index coordinates
                 * @param options.count  (Optional) The grid tick counts
                 * @param options.axis  (Optional) JSON object container - Generated
                 * @param options.axis.linestyles  (Optional) Defines the axis linestyles. Note that linestyle.width is not supported by windows-webgl.
                 * @param options.axis.linestyles.x  (Optional) The X axis line style
                 * @param options.axis.linestyles.y  (Optional) The Y axis line style
                 * @param options.axis.linestyles.z  (Optional) The Z axis line style
                 * @param options.axis.textstyles  (Optional) Defines the axis labels style
                 * @param options.axis.textstyles.x  (Optional) The X axis label style
                 * @param options.axis.textstyles.y  (Optional) The Y axis label style
                 * @param options.axis.textstyles.z  (Optional) The Z axis label style
                 * @param options.axis.formatters  (Optional) The functions responsible of formatting the axis values to text
                 * @param options.axis.formatters.x  (Optional) The X axis label formatter
                 * @param options.axis.formatters.y  (Optional) The Y axis label formatter
                 * @param options.axis.formatters.z  (Optional) The Z axis label formatter
                 * @param options.title  (Optional) The axis titles
                 * @param options.title.texts  (Optional) JSON object container - Generated
                 * @param options.title.texts.x  (Optional) The X axis title
                 * @param options.title.texts.y  (Optional) The Y axis title
                 * @param options.title.texts.z  (Optional) The Z axis title
                 * @param options.title.textstyles  (Optional) The axis title styles
                 * @param options.title.textstyles.x  (Optional) The X axis title text style
                 * @param options.title.textstyles.y  (Optional) The Y axis title text style
                 * @param options.title.textstyles.z  (Optional) The Z axis title text style
                 * @param options.grid  (Optional) JSON object container - Generated
                 * @param options.grid.linestyles  (Optional) The grid linestyles. Note that linestyle.width is not supported by windows-webgl.
                 * @param options.grid.linestyles.x  (Optional) The X grid line style
                 * @param options.grid.linestyles.y  (Optional) The Y grid line style
                 * @param options.grid.linestyles.z  (Optional) The Z grid line style
                 * @param options.mode  (Optional) The display strategy to show/hide grid planes depending on camera position
                 */
                constructor(options: any | { index: geotoolkit3d.transformation.IndexCoordinates; count?: THREE.Vector3; axis?: any | { linestyles?: any | { x?: geotoolkit.attributes.LineStyle; y?: geotoolkit.attributes.LineStyle; z?: geotoolkit.attributes.LineStyle; } ; textstyles?: any | { x?: geotoolkit.attributes.TextStyle; y?: geotoolkit.attributes.TextStyle; z?: geotoolkit.attributes.TextStyle; } ; formatters?: any | { x?: Function; y?: Function; z?: Function; } ; } ; title?: any | { texts?: any | { x?: string; y?: string; z?: string; } ; textstyles?: any | { x?: geotoolkit.attributes.TextStyle; y?: geotoolkit.attributes.TextStyle; z?: geotoolkit.attributes.TextStyle; } ; } ; grid?: any | { linestyles?: any | { x?: geotoolkit.attributes.LineStyle; y?: geotoolkit.attributes.LineStyle; z?: geotoolkit.attributes.LineStyle; } ; } ; mode?: geotoolkit3d.scene.grid.Grid.Mode; } );
            }
        }
    }
    module tool {
        module seismic {
            /**
             * A tool specialized in moving a seismicslice.<br>
             * <br>
             * This tool uses the given Volume object to limit the slice displacement.<br>
             * Note that this tool simply moves the slice, calling code is responsible of updating the seismic data displayed.<br>
             */
            class SeismicSliderTool extends geotoolkit3d.tool.SliderMoveTool {
                /**
                 * A tool specialized in moving a seismicslice.<br>
                 * <br>
                 * This tool uses the given Volume object to limit the slice displacement.<br>
                 * Note that this tool simply moves the slice, calling code is responsible of updating the seismic data displayed.<br>
                 * @param options  (Required) See geotoolkit3d.tool.SliderMoveTool for inherited options
                 * @param options.volume  (Required) The seismic volume that this slider should operate on
                 * @param options.callback  (Optional) The callback function triggered when a slice is being moved
                 * @param options.snap  (Optional) The function used to adjust the computed ijz value to an existing seismic inline/xline/slice.
                 * @param options.name  (Optional) tool name
                 */
                constructor(options: any | { volume: geotoolkit3d.scene.seismic.Volume; callback?: Function; snap?: Function; name?: string; } );
                /**
                 * Sets volume
                 * @param volume  (Required) volume
                 */
                setVolume(volume: geotoolkit3d.scene.seismic.Volume): any;
            }
        }
    }
    module picking {
        module pickingrenderer {
            /**
             * Material used to do renderer picking on a Seismic slice.<br>
             */
            class DefaultSeismicSlicePickingMaterial extends geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial {
                /**
                 * Material used to do renderer picking on a Seismic slice.<br>
                 */
                constructor();
            }
        }
    }
}
