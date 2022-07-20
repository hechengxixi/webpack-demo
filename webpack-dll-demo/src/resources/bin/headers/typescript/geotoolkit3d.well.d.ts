declare module geotoolkit3d {
    module util {
        module well {
            /**
             * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
             */
            class Deviation {
                /**
                 * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
                 */
                constructor();
                /**
                 * Computes trajectory deviation using specified method.<br>
                 * <br>
                 * This function can use one of the built-in algorithms to compute x, y, tvd values from inclination, azimuth and measure depth.<br>
                 * The returned object contains the trajectory's deviation.<br>
                 * 'x' stands for East, 'y' for North and 'tvd' the depth.<br>
                 * @param options  (Required) The method options used for computing the deviation
                 * @param options.mode  (Optional) The method to use to compute the deviation values
                 * @param options.tolerance  (Optional) Epsilon used ot determine if a segment is a straight line
                 * @param input  (Required) The input values
                 * @param input.md  (Required) The measured depth values
                 * @param input.inclination  (Required) The inclination values in degrees
                 * @param input.azimuth  (Required) The azimuth values in degrees
                 * @param start  (Optional) Initial deviation point, will not be used as an input for the method but as the starting point.
                 * @param start.x  (Optional) Initial deviation x value
                 * @param start.y  (Optional) Initial deviation y value
                 * @param start.tvd  (Optional) Initial deviation tvd value
                 */
                static computeDeviation(options: any | { mode?: geotoolkit3d.util.well.Deviation.Method; tolerance?: number; } , input: any | { md: number[]; inclination: number[]; azimuth: number[]; } , start?: any | { x?: number; y?: number; tvd?: number; } ): any;
                /**
                 * Built-in algorithms to compute cartesian coordinates from direction values.<br>
                 * These methods compute north, east and tvd values using the inclination-azimuth-md values.<br>
                 * The methods implemented use different approach to create a trajectory using the given parameters.
                 */
                static Method: any;
            }
            /**
             * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
             */
            class Direction {
                /**
                 * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
                 */
                constructor();
                /**
                 * Computes the direction values using specified method.<br>
                 * <br>
                 * This function can use one of the built-in algorithms to compute inclination (degrees), azimuth (degrees), md values from x, y and tvd.<br>
                 * The returned object contains the trajectory's directions.<br>
                 * 'x' stands for East, 'y' for North and 'tvd' the depth.<br>
                 * @param options  (Required) The method options used for computing the deviation
                 * @param options.mode  (Optional) The method to use to compute the direction values
                 * @param options.tolerance  (Optional) Epsilon used ot determine if a segment is a straight line
                 * @param input  (Required) The input values
                 * @param input.tvd  (Required) The true vertical depth values
                 * @param input.x  (Optional) The x values
                 * @param input.y  (Optional) The y values
                 * @param start  (Optional) Initial direction point, will not be used as an input for the method but as the reference direction.
                 * @param start.inclination  (Optional) Initial inclination in radians
                 * @param start.azimuth  (Optional) Initial azimuth in radians
                 * @param start.md  (Optional) Initial measured depth value
                 */
                static computeDirection(options: any | { mode?: geotoolkit3d.util.well.Direction.Method; tolerance?: number; } , input: any | { tvd: number[]; x?: number[]; y?: number[]; } , start?: any | { inclination?: number; azimuth?: number; md?: number; } ): any;
                /**
                 * Built-in algorithms to compute direction values from cartesian coordinates.<br>
                 * These methods compute the inclination-azimuth-md values from the north, east and tvd values.<br>
                 * Based on the inverse transformation of the corresponding DeviationUtil.Method algorithm.
                 */
                static Method: any;
            }
            /**
             * Utility class providing functions and constant for 3D well operations.<br>
             */
            class Well {
                /**
                 * Utility class providing functions and constant for 3D well operations.<br>
                 */
                constructor();
                /**
                 * Offset mode enum.<br>
                 * <br>
                 * This mode define how the curve will be rendered when the offset is negative.<br>
                 * It will either mirror the curve so that the minimum value is closer to the trajectory than the maximum value. (Mirror)<br>
                 * Or it will keep the minimum value on the left, which means that the maximum value will be closer to the trajectory than the minimum value. (Regular)<br>
                 */
                static OffsetMode: any;
            }
            /**
             * Utility class related to geotoolkit3d.scene.well.CylinderLog
             */
            class CylinderLog {
                /**
                 * Utility class related to geotoolkit3d.scene.well.CylinderLog
                 */
                constructor();
                /**
                 * Change the parameters that affects the cylinder precision.<br>
                 * <br>
                 * Note that this applies only to the Cylinders created after this has been changed.<br>
                 * <br>
                 * The corner counts affects how 'round' the circles will look like.<br>
                 * The diskCount defines how many circles will be created for each log value.<br>
                 * <br>
                 * @param cornerCount  (Required) The amount of points to create a cylinder like shape
                 * @param diskCount  (Required) The amount of of disks for each sample
                 */
                static setCylinderPrecision(cornerCount: number, diskCount: number): any;
            }
            module Deviation {
                /**
                 * Built-in algorithms to compute cartesian coordinates from direction values.<br>
                 * These methods compute north, east and tvd values using the inclination-azimuth-md values.<br>
                 * The methods implemented use different approach to create a trajectory using the given parameters.
                 */
                interface Method {
                    /**
                     * Minimum curvature method computes the path between input points using the DogLeg Severity to calculate displacements.
                     */
                    MinimumCurvature: Function;
                    /**
                     * Radius of curvature method generates a circular arc to connect input points.
                     */
                    CurvatureRadius: Function;
                    /**
                     * Average Angle is a simple approach that uses basic trigonometric function to compute the well path
                     */
                    AverageAngle: Function;
                    /**
                     * Tangential is a deprecated method that assumes that the path is a straight line throughout the course length
                     */
                    Tangential: Function;
                    /**
                     * Balanced tangential is an improved version of the Tangential method.
                     */
                    BalancedTangential: Function;
                }
            }
            module Direction {
                /**
                 * Built-in algorithms to compute direction values from cartesian coordinates.<br>
                 * These methods compute the inclination-azimuth-md values from the north, east and tvd values.<br>
                 * Based on the inverse transformation of the corresponding DeviationUtil.Method algorithm.
                 */
                interface Method {
                    /**
                     * Minimum curvature method computes the path between input points using the DogLeg Severity to calculate displacements.
                     */
                    MinimumCurvature: Function;
                    /**
                     * Radius of curvature method generates a circular arc to connect input points.
                     */
                    CurvatureRadius: Function;
                    /**
                     * Average Angle is a simple approach that uses basic trigonometric function to compute the well path
                     */
                    AverageAngle: Function;
                    /**
                     * Tangential is a deprecated method that assumes that the path is a straight line throughout the course length
                     */
                    Tangential: Function;
                    /**
                     * Balanced tangential is an improved version of the Tangential method.
                     */
                    BalancedTangential: Function;
                }
            }
            module Well {
                /**
                 * Offset mode enum.<br>
                 * <br>
                 * This mode define how the curve will be rendered when the offset is negative.<br>
                 * It will either mirror the curve so that the minimum value is closer to the trajectory than the maximum value. (Mirror)<br>
                 * Or it will keep the minimum value on the left, which means that the maximum value will be closer to the trajectory than the minimum value. (Regular)<br>
                 */
                interface OffsetMode {
                    /**
                     * Minimum value is closer to the trajectory than maximum value.<br>
                     */
                    Mirror: number;
                    /**
                     * Minimum value is closer to the trajectory than maximum value ONLY if offset is positive.<br>
                     */
                    Regular: number;
                }
            }
        }
    }
    module scene {
        module well {
            /**
             * A Tube-like geometry.<br>
             * <br>
             * This geometry generates the vertices required to render an elliptic tube.<br>
             * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
             * <br>
             * This is intended to be used for advanced/complex scenarios that require those capabilities.
             */
            class TubeGeometry extends THREE.BufferGeometry {
                /**
                 * A Tube-like geometry.<br>
                 * <br>
                 * This geometry generates the vertices required to render an elliptic tube.<br>
                 * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
                 * <br>
                 * This is intended to be used for advanced/complex scenarios that require those capabilities.
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.x  (Required) The x deviation values
                 * @param options.data.y  (Required) The y deviation values
                 * @param options.data.z  (Required) The elevation values
                 * @param options.data.widths  (Optional) Radiuses of the ellipsis for the East-West axis (For first ellipsis)
                 * @param options.data.heights  (Optional) Radiuses of the ellipsis North-South axis (For first ellipsis)
                 * @param options.data.rolls  (Optional) Rolling angles in radians
                 * @param options.data.values  (Optional) A value attribute used for coloring the trajectory (see options.colorprovider)
                 * @param options.radiusmin  (Optional) The minimum radius, this is used as a size factor applied to the ellipses
                 * @param options.radiusmax  (Optional) The maximum radius, this is used as a size factor applied to the ellipses
                 * @param options.tubeprecision  (Optional) The ellipsis shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
                 * @param options.openended  (Optional) False if the tube should have a cap at both ends
                 * @param options.usefrenet  (Optional) calculate tube using Frenet Frames
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; widths?: number[]|number; heights?: number[]|number; rolls?: number[]|number; values?: number[]|number; } ; radiusmin?: number; radiusmax?: number; tubeprecision?: number; openended?: boolean; usefrenet?: boolean; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Optional) The data options
                 * @param options.data.x  (Optional) The x deviation values
                 * @param options.data.y  (Optional) The y deviation values
                 * @param options.data.z  (Optional) The elevation values
                 * @param options.data.widths  (Optional) Radiuses of the ellipsis for the East-West axis (For first ellipsis)
                 * @param options.data.heights  (Optional) Radiuses of the ellipsis North-South axis (For first ellipsis)
                 * @param options.data.rolls  (Optional) Rolling angles in radians
                 * @param options.data.values  (Optional) A value attribute used for coloring the trajectory (see options.colorprovider)
                 * @param options.radiusmin  (Optional) The minimum radius, this is used as a size factor applied to the ellipses
                 * @param options.radiusmax  (Optional) The maximum radius, this is used as a size factor applied to the ellipses
                 * @param options.tubeprecision  (Optional) The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
                 * @param options.openended  (Optional) False if the tube should have a cap at both ends
                 */
                setOptions(options: any | { data?: any | { x?: number[]; y?: number[]; z?: number[]; widths?: number[]|number; heights?: number[]|number; rolls?: number[]|number; values?: number[]|number; } ; radiusmin?: number; radiusmax?: number; tubeprecision?: number; openended?: boolean; } ): this;
            }
            /**
             * A Tube-like geometry.<br>
             * <br>
             * This geometry generates the vertices required to render an elliptic tube.<br>
             * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
             * <br>
             * This is intended to be used for advanced/complex scenarios that require those capabilities.
             */
            class PipeGeometry extends THREE.BufferGeometry {
                /**
                 * A Tube-like geometry.<br>
                 * <br>
                 * This geometry generates the vertices required to render an elliptic tube.<br>
                 * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
                 * <br>
                 * This is intended to be used for advanced/complex scenarios that require those capabilities.
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.path  (Required) the XYZ coordinates for the path
                 * @param options.data.normals  (Required) the XYZ normals for the path
                 * @param options.data.binormals  (Required) the XYZ binormals for the path
                 * @param options.data.radii  (Optional) Radiuses of the ellipsis for the East-West axis (For first ellipsis)
                 * @param options.data.values  (Optional) A value attribute used for coloring the trajectory (see options.colorprovider)
                 * @param options.tubeprecision  (Optional) The ellipsis shape is approximated using triangles. This factor is used to define how many
    triangles will be used for the approximation.
                 * @param options.openended  (Optional) False if the tube should have a cap at both ends
                 * @param options.hardedges  (Optional) create hard edges for size changes
                 */
                constructor(options: any | { data: any | { path: THREE.Vector3[]; normals: THREE.Vector3[]; binormals: THREE.Vector3[]; radii?: number[]|number; values?: number[]|number; } ; tubeprecision?: number; openended?: boolean; hardedges?: boolean; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Optional) The data options
                 * @param options.data.positions  (Optional) the XYZ coordinates for the path
                 * @param options.data.normals  (Optional) the XYZ normals for the path
                 * @param options.data.binormals  (Optional) the XYZ binormals for the path
                 * @param options.data.tangents  (Optional) the XYZ tangents for the path
                 * @param options.data.radii  (Optional) radius of the tube for each deviation value
                 * @param options.data.values  (Optional) A value attribute used for coloring the trajectory (see options.colorprovider)
                 * @param options.tubeprecision  (Optional) The ellipsis shape is approximated using triangles. This defines how many segments will be
    used for the approximation.
                 * @param options.openended  (Optional) False if the tube should have a cap at both ends
                 */
                setOptions(options: any | { data?: any | { positions?: THREE.Vector3[]; normals?: THREE.Vector3[]; binormals?: THREE.Vector3[]; tangents?: THREE.Vector3[]; radii?: number[]|number; values?: number[]|number; } ; tubeprecision?: number; openended?: boolean; } ): this;
            }
            /**
             * A Tube-like geometry.<br>
             * <br>
             * This geometry generates the vertices required to render an elliptic tube.<br>
             * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
             * <br>
             * This is intended to be used for advanced/complex scenarios that require those capabilities.
             */
            class DynamicTubeGeometry extends THREE.BufferGeometry {
                /**
                 * A Tube-like geometry.<br>
                 * <br>
                 * This geometry generates the vertices required to render an elliptic tube.<br>
                 * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
                 * <br>
                 * This is intended to be used for advanced/complex scenarios that require those capabilities.
                 * @param options  (Required) The options
                 * @param options.axismin  (Optional) The minimum radius value this corresponds to the value that will be mapped to radiusmin
                 * @param options.axismax  (Optional) The maximum radius value this corresponds to the value that will be mapped to radiusmax
                 * @param options.radiusmin  (Optional) The minimum radius, this is used as a size factor applied to the ellipses
                 * @param options.radiusmax  (Optional) The maximum radius, this is used as a size factor applied to the ellipses
                 * @param options.tubeprecision  (Optional) The ellipsis shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
                 * @param options.openended  (Optional) False if the tube should have a cap at both ends
                 * @param options.startbuffersize  (Optional) the number of points this will create as a starting buffer for vertexs
                 * @param options.bufferresizefactor  (Optional) the amount to grow GPU buffers when points overflow
                 */
                constructor(options: any | { axismin?: number; axismax?: number; radiusmin?: number; radiusmax?: number; tubeprecision?: number; openended?: boolean; startbuffersize?: boolean; bufferresizefactor?: number; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.radiusmin  (Optional) The minimum radius, this is used as a size factor applied to the ellipses
                 * @param options.radiusmax  (Optional) The maximum radius, this is used as a size factor applied to the ellipses
                 * @param options.axismin  (Optional) The minimum radius value this corresponds to the value that will be mapped to radiusmin
                 * @param options.axismax  (Optional) The maximum radius value this corresponds to the value that will be mapped to radiusmax
                 * @param options.tubeprecision  (Optional) The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
                 * @param options.openended  (Optional) False if the tube should have a cap at both ends
                 * @param options.bufferresizefactor  (Optional) the amount to grow GPU buffers when points overflow
                 */
                setOptions(options: any | { radiusmin?: number; radiusmax?: number; axismin?: number; axismax?: number; tubeprecision?: number; openended?: boolean; bufferresizefactor?: number; } ): this;
                /**
                 * Clears the geometry of all points and data
                 */
                resetData(): this;
                /**
                 * Gets the current data
                 */
                getData(): {object:{xs:number[];ys:number[];zs:number[];values:number[];widths:number[];heights:number[];rolls:number[]}}|any;
                /**
                 * Adds the geometry to the Tube, if the options are changed the geometry will be recalculated.
                 * @param xs  (Required) The x deviation values
                 * @param ys  (Required) The y deviation values
                 * @param zs  (Required) The elevation values
                 * @param values  (Optional) A value attribute used for coloring the trajectory (see options.colorprovider)
                 * @param widths  (Optional) Radiuses of the ellipsis for the East-West axis (For first ellipsis)
                 * @param heights  (Optional) Radiuses of the ellipsis for the North-South axis (For first ellipsis)
                 * @param rolls  (Optional) Rolling angles in radians
                 */
                addGeometry(xs: number[], ys: number[], zs: number[], values?: number[], widths?: number[], heights?: number[], rolls?: number[]): this;
            }
            /**
             * A well trajectory as a 3D tube.<br>
             * <br>
             * This shape displays a well trajectory as a tube that can be colored with an optional attribute.<br>
             * Note that the shape of the tube will be preserved even when changing the global scale of the plot.<br>
             */
            class TrajectoryTube extends geotoolkit3d.scene.Object3D {
                /**
                 * A well trajectory as a 3D tube.<br>
                 * <br>
                 * This shape displays a well trajectory as a tube that can be colored with an optional attribute.<br>
                 * Note that the shape of the tube will be preserved even when changing the global scale of the plot.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.x  (Required) The x deviation values
                 * @param options.data.y  (Required) The y deviation values
                 * @param options.data.z  (Required) The elevation values
                 * @param options.data.values  (Optional) A value attribute used for coloring the trajectory
                 * @param options.size  (Optional) The tube size in model space
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 * @param options.tubeprecision  (Optional) The tube shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
                 * @param options.closed  (Optional) True if the tube should have a cap at both ends
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; values?: number[]|number; } ; size?: number; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; tubeprecision?: number; closed?: boolean; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.size  (Optional) The tube size in model space
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 * @param options.tubeprecision  (Optional) The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
                 */
                setOptions(options: any | { size?: number; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; tubeprecision?: number; } ): this;
            }
            /**
             * A well log as a cylinder like 3D shape.<br>
             * <br>
             * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
             * The diameter and color of the tube will vary for each log curve sample.<br>
             * <br>
             * Note that this object assumes that the given path and curve values have the same sampling.<br>
             */
            class CylinderLog extends geotoolkit3d.scene.Object3D {
                /**
                 * A well log as a cylinder like 3D shape.<br>
                 * <br>
                 * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
                 * The diameter and color of the tube will vary for each log curve sample.<br>
                 * <br>
                 * Note that this object assumes that the given path and curve values have the same sampling.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.x  (Required) The x deviation values
                 * @param options.data.y  (Required) The y deviation values
                 * @param options.data.elevation  (Required) The elevation values
                 * @param options.data.radius  (Required) A curve attribute used for the size of the cylinder
                 * @param options.data.radiusnullvalue  (Optional) The nullvalue for the radius
                 * @param options.data.values  (Optional) A value attribute used for coloring the cylinder (see options.colorprovider)
                 * @param options.data.valuesnullvalue  (Optional) A value attribute used for coloring the cylinder (see options.colorprovider)
                 * @param options.radiusmin  (Optional) The cylinder minimum radius
                 * @param options.radiusmax  (Optional) The cylinder maximum radius
                 * @param options.radiuslogmin  (Optional) The radius log minimum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder
                 * @param options.radiuslogmax  (Optional) The radius log maximum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; elevation: number[]; radius: number[]; radiusnullvalue?: number; values?: number[]; valuesnullvalue?: number; } ; radiusmin?: number; radiusmax?: number; radiuslogmin?: number; radiuslogmax?: number; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Optional) Note that specifying the data option object will trigger a geometry update.
                 * @param options.data.radius  (Optional) A curve attribute used for the size of the cylinder
                 * @param options.data.radiusnullvalue  (Optional) The nullvalue for the radius
                 * @param options.data.values  (Optional) A value attribute used for coloring the cylinder (see options.colorprovider)
                 * @param options.data.valuesnullvalue  (Optional) A value attribute used for coloring the cylinder (see options.colorprovider)
                 * @param options.radiusmin  (Optional) The cylinder minimum radius
                 * @param options.radiusmax  (Optional) The cylinder maximum radius
                 * @param options.radiuslogmin  (Optional) The radius log minimum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder.<br> Pass null to reset it to data min
                 * @param options.radiuslogmax  (Optional) The radius log maximum value used for clamping the radius value, invert radiuslogmin and radiuslogmax for inverted cylinder.<br> Pass null to reset it to data max
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 */
                setOptions(options: any | { data?: any | { radius?: number[]; radiusnullvalue?: number; values?: number[]; valuesnullvalue?: number; } ; radiusmin?: number; radiusmax?: number; radiuslogmin?: number; radiuslogmax?: number; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; } ): this;
            }
            /**
             * A cylinder log geometry.<br>
             * <br>
             * This geometry class will generate all the vertices and indices necessary to render a cylinderlog 3d shape.<br>
             * Note that the quality of the cylinder logs can be globally modified through static functions in {@link geotoolkit3d.util.well.CylinderLog}.<br>
             * If a radius value is equals to the given radiusnullvalue, a gap will be generated in the cylinder.<br>
             * A gap will also be generated if a value is equals to valuesnullvalue.<br>
             * Note that the current implementation will still generate the vertices for those gaps but will abstain from rendering them.
             */
            class CylinderLogGeometry extends THREE.BufferGeometry {
                /**
                 * A cylinder log geometry.<br>
                 * <br>
                 * This geometry class will generate all the vertices and indices necessary to render a cylinderlog 3d shape.<br>
                 * Note that the quality of the cylinder logs can be globally modified through static functions in {@link geotoolkit3d.util.well.CylinderLog}.<br>
                 * If a radius value is equals to the given radiusnullvalue, a gap will be generated in the cylinder.<br>
                 * A gap will also be generated if a value is equals to valuesnullvalue.<br>
                 * Note that the current implementation will still generate the vertices for those gaps but will abstain from rendering them.
                 * @param options  (Required) The options
                 * @param options.data  (Required) input cylinder data
                 * @param options.data.x  (Required) The x deviation values
                 * @param options.data.y  (Required) The y deviation values
                 * @param options.data.z  (Required) The elevation values
                 * @param options.data.radius  (Required) A curve attribute used for the size of the cylinder
                 * @param options.data.radiusnullvalue  (Optional) The nullvalue for the radius
                 * @param options.data.values  (Optional) A value attribute used for coloring the cylinder (see options.colorprovider)
                 * @param options.data.valuesnullvalue  (Optional) The nullvalue for color attribute
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; radius: number[]; radiusnullvalue?: number; values?: number[]; valuesnullvalue?: number; } ; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Optional) Note that specifying the data option object will trigger a geometry update.
                 * @param options.data.radius  (Optional) A curve attribute used for the size of the cylinder
                 * @param options.data.radiusnullvalue  (Optional) The nullvalue for the radius
                 * @param options.data.values  (Optional) A value attribute used for coloring the cylinder
                 * @param options.data.valuesnullvalue  (Optional) The nullvalue for color attribute
                 */
                setOptions(options: any | { data?: any | { radius?: number[]; radiusnullvalue?: number; values?: number[]; valuesnullvalue?: number; } ; } ): this;
            }
            /**
             * A line geometry intended to be use for well trajectory representation.<br>
             * <br>
             * This geometry class builds a line's geometry using given xyz values.<br>
             * Each vertex can be colored using the values parameter and a colorprovider.<br>
             */
            class LineGeometry extends THREE.Geometry {
                /**
                 * A line geometry intended to be use for well trajectory representation.<br>
                 * <br>
                 * This geometry class builds a line's geometry using given xyz values.<br>
                 * Each vertex can be colored using the values parameter and a colorprovider.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.x  (Required) The x deviation values
                 * @param options.data.y  (Required) The y deviation values
                 * @param options.data.z  (Required) The elevation values
                 * @param options.data.values  (Optional) A value attribute used for coloring the trajectory (see options.colorprovider for colormapping)
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; values?: number[]|number; } ; colorprovider?: geotoolkit.util.ColorProvider|string; } );
            }
            /**
             * A log fill displayed as a 2D shape along a wellpath.<br>
             * <br>
             * This class will create the required geometry and material to represent a fill going from the given curve to the other curve.<br>
             * Like a regular LogFill, this also supports reference values instead of curves.<br>
             * Note that the resulting geometry may contains extra vertex to deal with curves intersection.<br>
             * 
             * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
             * In order for the user to see the 2D curve it's always projected toward the camera.<br>
             * Which means that when the user moves the camera the log will try to adapt its representation to be as much visible as possible.<br>
             * However that also means that some camera angles will not be ideal to look at the log.<br>
             * Typically when the camera and the trajectory path are aligned.<br>
             * This algorithm is implemented at the shader level to ensure best performances.<br>
             * <br>
             * Note that curvemin&curvemax options are not supported for dual curve fill (if both values1 and values2 are curves).
             */
            class LogFill2D extends geotoolkit3d.scene.Object3D {
                /**
                 * A log fill displayed as a 2D shape along a wellpath.<br>
                 * <br>
                 * This class will create the required geometry and material to represent a fill going from the given curve to the other curve.<br>
                 * Like a regular LogFill, this also supports reference values instead of curves.<br>
                 * Note that the resulting geometry may contains extra vertex to deal with curves intersection.<br>
                 * 
                 * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
                 * In order for the user to see the 2D curve it's always projected toward the camera.<br>
                 * Which means that when the user moves the camera the log will try to adapt its representation to be as much visible as possible.<br>
                 * However that also means that some camera angles will not be ideal to look at the log.<br>
                 * Typically when the camera and the trajectory path are aligned.<br>
                 * This algorithm is implemented at the shader level to ensure best performances.<br>
                 * <br>
                 * Note that curvemin&curvemax options are not supported for dual curve fill (if both values1 and values2 are curves).
                 * @param options  (Required) The options
                 * @param options.data  (Required) The trajectory data
                 * @param options.data.x  (Required) The x deviation values
                 * @param options.data.y  (Required) The y deviation values
                 * @param options.data.z  (Required) The elevation values
                 * @param options.data.values1  (Optional) The curve1 values or a reference value in range [0,1]
                 * @param options.data.nullvalue1  (Optional) The values1's nullvalue
                 * @param options.data.values2  (Optional) The curve2 values or a reference value in range [0,1]
                 * @param options.data.nullvalue2  (Optional) The values2's nullvalue
                 * @param options.data.values  (Optional) Optional attribute used for coloring the trajectory (see options.colorprovider for colormapping)
                 * @param options.data.nullvalue  (Optional) The values's nullvalue
                 * @param options.curvemin  (Optional) The lower normalisation limit, any value lesser than this will be clamped
                 * @param options.curvemax  (Optional) The upper normalisation limit, any value greater than this will be clamped
                 * @param options.radius  (Optional) The radius factor to apply, this will increase the fill amplitude on screen.
                 * @param options.offset  (Optional) An offset value to shift the fill location by 'n' times the radius. Use negative value to display the fill on the left of the path
                 * @param options.offsetmode  (Optional) Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
                 * @param options.positivecolor  (Optional) The color or the flag 'THREE.FaceColors' to enable per face color
                 * @param options.negativecolor  (Optional) The color or the flag 'THREE.FaceColors' to enable per face color
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format (Used if no positive/negative color is set)
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; values1?: number[]|number; nullvalue1?: number[]|number; values2?: number[]|number; nullvalue2?: number[]|number; values?: number[]|number; nullvalue?: number[]|number; } ; curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: geotoolkit3d.util.well.Well.OffsetMode; positivecolor?: THREE.Color|THREE.Colors; negativecolor?: THREE.Color|THREE.Colors; colorprovider?: geotoolkit.util.ColorProvider|string; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.curvemin  (Optional) The lower normalisation limit, any value lesser than this will be clamped
                 * @param options.curvemax  (Optional) The upper normalisation limit, any value greater than this will be clamped
                 * @param options.radius  (Optional) The radius factor to apply, this will increase the fill amplitude on screen.
                 * @param options.offset  (Optional) An offset value to shift the fill location by 'n' times the radius. Use negative value to display the fill on the left of the path
                 * @param options.offsetmode  (Optional) Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
                 * @param options.positivecolor  (Optional) The color or the flag 'THREE.FaceColors' to enable per face color
                 * @param options.negativecolor  (Optional) The color or the flag 'THREE.FaceColors' to enable per face color
                 * @param options.colorprovider  (Optional) A single color in css format (Used if no positive/negative color is set)
                 */
                setOptions(options: any | { curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: geotoolkit3d.util.well.Well.OffsetMode; positivecolor?: THREE.Color|THREE.Colors; negativecolor?: THREE.Color|THREE.Colors; colorprovider?: string; } ): any;
            }
            /**
             * A LogCurve material to render a log curve as a 2D line along a well trajectory.<br>
             * <br>
             * This class implements the material for {@link geotoolkit3d.scene.well.LogCurve2D}.<br>
             * It contains the logic to render the actual welllog along the trajectory.<br>
             */
            class LogCurve2DMaterial extends THREE.ShaderMaterial {
                /**
                 * A LogCurve material to render a log curve as a 2D line along a well trajectory.<br>
                 * <br>
                 * This class implements the material for {@link geotoolkit3d.scene.well.LogCurve2D}.<br>
                 * It contains the logic to render the actual welllog along the trajectory.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data
                 * @param options.data.x  (Required) The x deviation of the well path
                 * @param options.data.y  (Required) The y deviation of the well path
                 * @param options.data.z  (Required) The elevation coordinate of the well path
                 * @param options.data.values  (Required) The log curve values
                 * @param options.data.nullvalue  (Optional) The log curve nullvalue, note that NaN will always be considered as nullvalue
                 * @param options.curvemin  (Optional) The lower normalisation limit, any value lesser than this will be clamped
                 * @param options.curvemax  (Optional) The upper normalisation limit, any value greater than this will be clamped
                 * @param options.radius  (Optional) The radius factor to apply, this will increase the curve amplitude on screen.
                 * @param options.offset  (Optional) An offset value to shift the curve location by 'n' times the radius. Use negative value to display the log on the left of the path
                 * @param options.color  (Optional) The color or the flag 'THREE.VertexColors' to enable per vertex color
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; values: number[]; nullvalue?: number; } ; curvemin?: number; curvemax?: number; radius?: number; offset?: number; color?: THREE.Color|THREE.Colors; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.curvemin  (Optional) The lower normalisation limit, any value lesser than this will be clamped
                 * @param options.curvemax  (Optional) The upper normalisation limit, any value greater than this will be clamped
                 * @param options.radius  (Optional) The radius factor to apply
                 * @param options.offset  (Optional) An offset factor for the curve location relative to the path. Use negative value to display the log on the left of the path
                 * @param options.offsetmode  (Optional) Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
                 * @param options.color  (Optional) The color or the flag 'THREE.VertexColors' to enable per vertex color
                 */
                setOptions(options: any | { curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: geotoolkit3d.util.well.Well.OffsetMode; color?: THREE.Color|THREE.Colors; } ): this;
            }
            /**
             * A LogCurve object representing a well curve along a path as a 2D shape.<br>
             * <br>
             * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
             * In order for the user to see the 2D curve it's always projected toward the camera.<br>
             * Which means that when the user moves the camera the log will try to adapt its representation to be as mush visible as possible.<br>
             * However that also means that some camera angles will not be ideal to look at the log.<br>
             * Typically when the camera and the trajectory path are aligned.<br>
             * This algorithm is implemented at the shader level to ensure best performances.<br>
             * <br>
             */
            class LogCurve2D extends geotoolkit3d.scene.Object3D {
                /**
                 * A LogCurve object representing a well curve along a path as a 2D shape.<br>
                 * <br>
                 * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
                 * In order for the user to see the 2D curve it's always projected toward the camera.<br>
                 * Which means that when the user moves the camera the log will try to adapt its representation to be as mush visible as possible.<br>
                 * However that also means that some camera angles will not be ideal to look at the log.<br>
                 * Typically when the camera and the trajectory path are aligned.<br>
                 * This algorithm is implemented at the shader level to ensure best performances.<br>
                 * <br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The trajectory data
                 * @param options.data.x  (Required) The x deviation values
                 * @param options.data.y  (Required) The y deviation values
                 * @param options.data.z  (Required) The elevation values
                 * @param options.data.values  (Optional) The values of the welllog curve
                 * @param options.data.nullvalue  (Optional) The log curve nullvalue, note that NaN will always be considered as nullvalue
                 * @param options.curvemin  (Optional) The lower normalisation limit, any value lesser than this will be clamped
                 * @param options.curvemax  (Optional) The upper normalisation limit, any value greater than this will be clamped
                 * @param options.radius  (Optional) The radius factor to apply, this will increase the curve amplitude on screen.
                 * @param options.offset  (Optional) An offset value to shift the curve location by 'n' times the radius. Use negative value to display the log on the left of the path
                 * @param options.offsetmode  (Optional) Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
                 * @param options.color  (Optional) The color or the flag 'THREE.VertexColors' to enable per vertex color
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; values?: number[]; nullvalue?: number; } ; curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: geotoolkit3d.util.well.Well.OffsetMode; color?: THREE.Color|THREE.Colors; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) 
                 * @param options.curvemin  (Optional) The lower normalisation limit, any value lesser than this will be clamped
                 * @param options.curvemax  (Optional) The upper normalisation limit, any value greater than this will be clamped
                 * @param options.radius  (Optional) The radius factor to apply
                 * @param options.offset  (Optional) An offset factor for the curve location relative to the path. Use negative value to display the log on the left of the path
                 * @param options.offsetmode  (Optional) Defines the curve behavior when offset is negative. See geotoolkit3d.util.well.Well.OffsetMode
                 * @param options.color  (Optional) A single color in css format
                 */
                setOptions(options: any | { curvemin?: number; curvemax?: number; radius?: number; offset?: number; offsetmode?: geotoolkit3d.util.well.Well.OffsetMode; color?: THREE.Color|string; } ): this;
            }
            /**
             * A well log as a cylinder like 3D shape.<br>
             * <br>
             * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
             * The diameter and color of the tube will vary for each log curve sample.<br>
             * <br>
             * Note that this object assumes that the given path and curve values have the same sampling.<br>
             */
            class Vector extends geotoolkit3d.scene.Object3D {
                /**
                 * A well log as a cylinder like 3D shape.<br>
                 * <br>
                 * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
                 * The diameter and color of the tube will vary for each log curve sample.<br>
                 * <br>
                 * Note that this object assumes that the given path and curve values have the same sampling.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.start  (Required) start point
                 * @param options.data.end  (Required) end point
                 * @param options.radius  (Optional) the radius of the vector
                 * @param options.color  (Optional) color for the vector
                 */
                constructor(options: any | { data: any | { start: THREE.Vector3; end: THREE.Vector3; } ; radius?: number; color?: THREE.Color|string; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.color  (Optional) A color provider or a single color in css format
                 */
                setOptions(options: any | { color?: geotoolkit.util.ColorProvider|string|THREE.Color; } ): this;
            }
            /**
             * Utility class related to geotoolkit3d.scene.well.CylinderLog
             */
            class CylinderLogUtil {
                /**
                 * Utility class related to geotoolkit3d.scene.well.CylinderLog
                 */
                constructor();
            }
            module logarray {
                /**
                 * A LogArray as a tubular shape.<br>
                 * <br>
                 * A logarray is the 3D equivalent of {@link geotoolkit.welllog.Log2DVisual}, it displays a two dimension welllog.<br>
                 * Its representation is a tubular shape where each 'edge' of the tube is a sector that has its own radius and color.<br>
                 * <br>
                 * The orientation of the sector 0 is configurable using {@link geotoolkit3d.scene.well.logarray.ReferenceMode ReferenceMode} enum.<br>
                 * <br>
                 * Note that the logarray allows changing on the fly of the values but also path.<br>
                 * However, the amount of data/mds should remain constant.<br>
                 * This is intended to implement a sliding window in order to display a subpart of a logarray that would be too big to fit in memory/gpu.<br>
                 * <br>
                 */
                class LogArray extends geotoolkit3d.scene.Object3D {
                    /**
                     * A LogArray as a tubular shape.<br>
                     * <br>
                     * A logarray is the 3D equivalent of {@link geotoolkit.welllog.Log2DVisual}, it displays a two dimension welllog.<br>
                     * Its representation is a tubular shape where each 'edge' of the tube is a sector that has its own radius and color.<br>
                     * <br>
                     * The orientation of the sector 0 is configurable using {@link geotoolkit3d.scene.well.logarray.ReferenceMode ReferenceMode} enum.<br>
                     * <br>
                     * Note that the logarray allows changing on the fly of the values but also path.<br>
                     * However, the amount of data/mds should remain constant.<br>
                     * This is intended to implement a sliding window in order to display a subpart of a logarray that would be too big to fit in memory/gpu.<br>
                     * <br>
                     * @param options  (Required) The options
                     * @param options.data  (Optional) The data options
                     * @param options.data.path  (Optional) The path data
                     * @param options.data.path.x  (Optional) The x deviation values
                     * @param options.data.path.y  (Optional) The y deviation values
                     * @param options.data.path.elevation  (Optional) The elevation values
                     * @param options.data.logarray  (Optional) The logarray values as a two dimensional array, one row per md.
                     * @param options.data.values  (Optional) The attribute values for coloring as a two dimensional array, one row per md.
                     * @param options.logarraymin  (Optional) The minimum value of logarray values (for normalization)
                     * @param options.logarraymax  (Optional) The maximum value of logarray values (for normalization)
                     * @param options.logarraynullvalue  (Optional) The null value for logarray values
                     * @param options.valuesnullvalue  (Optional) The null value for color values
                     * @param options.radiusmin  (Optional) The minimum radius of the tube (when logarray value is equal to logarraymin)
                     * @param options.radiusdelta  (Optional) The delta radius (when logarray value is equal to logarraymax, the radius is equal to "radiusmin + radiusdelta")
                     * @param options.colorprovider  (Optional) A color provider or a single color in css format
                     * @param options.referencemode  (Optional) The reference mode to determine the sector 0 orientation
                     */
                    constructor(options: any | { data?: any | { path?: any | { x?: number[]; y?: number[]; elevation?: number[]; } ; logarray?: number[][]; values?: number[][]; } ; logarraymin?: number; logarraymax?: number; logarraynullvalue?: number; valuesnullvalue?: number; radiusmin?: number; radiusdelta?: number; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; referencemode?: geotoolkit3d.scene.well.logarray.LogArray.ReferenceMode|string; } );
                    /**
                     * Enum to configure the LogArray sector 0 location.<br>
                     * <br>
                     * This enum provides several reference mechanism to determine where the sector 0 should be.<br>
                     * For example it could be the sector pointing upward, or the sector pointing toward the North.<br>
                     */
                    static ReferenceMode: any;
                    /**
                     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                     * @param options  (Required) The options
                     * @param options.data  (Optional) The data options
                     * @param options.data.path  (Optional) The path data
                     * @param options.data.path.x  (Optional) The x deviation values
                     * @param options.data.path.y  (Optional) The y deviation values
                     * @param options.data.path.elevation  (Optional) The elevation values
                     * @param options.data.logarray  (Optional) The logarray values as a two dimensional array, one row per md.
                     * @param options.data.values  (Optional) The color values as a two dimensional array, one row per md.
                     * @param options.logarraymin  (Optional) The minimum value of logarray values (for normalization)
                     * @param options.logarraymax  (Optional) The maximum value of logarray values (for normalization)
                     * @param options.logarraynullvalue  (Optional) The null value for logarray values
                     * @param options.valuesnullvalue  (Optional) The null value for color values
                     * @param options.radiusmin  (Optional) The minimum radius of the tube (when logarray value is equal to logarraymins)
                     * @param options.radiusdelta  (Optional) The delta radius (when logarray value is equal to logarraymax, the radius is equal to "radiusmin + radiusdelta")
                     * @param options.colorprovider  (Optional) A color provider or a single color in css format
                     */
                    setOptions(options: any | { data?: any | { path?: any | { x?: number[]; y?: number[]; elevation?: number[]; } ; logarray?: number[][]; values?: number[][]; } ; logarraymin?: number; logarraymax?: number; logarraynullvalue?: number; valuesnullvalue?: number; radiusmin?: number; radiusdelta?: number; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; } ): this;
                }
                module LogArray {
                    /**
                     * Enum to configure the LogArray sector 0 location.<br>
                     * <br>
                     * This enum provides several reference mechanism to determine where the sector 0 should be.<br>
                     * For example it could be the sector pointing upward, or the sector pointing toward the North.<br>
                     */
                    interface ReferenceMode {
                        /**
                         * This reference mode switches between Up or North depending on the inclination of the path.<br>
                         * If the current section of the path has an inclination greater than the given angle, then Up will be used.<br>
                         * <br>
                         * As this check is done per 'section' of the LogArray, a 'twist' may appear on the resulting cylinder when the switch between Up/North reference occurs.<br>
                         * <br>
                         * This mode accepts a parameter to define the inclination angle threshold (in radians), the default value is 0.1745 (10 degrees).<br>
                         * The angle is 0 for a vertical section and PI/2 for an horizontal section.<br>
                         * <br>
                         * To use a custom angle of 60 degrees for example, do geotoolkit3d.scene.well.logarray.LogArray.ReferenceMode.UpNorth(1.0472)
                         */
                        UpNorth: Function;
                        /**
                         * Use North as reference for sector 0.<br>
                         * This is not suitable for horizontal trajectories pointing north.
                         */
                        North: string;
                        /**
                         * Use Up as reference for sector 0.<br>
                         * This is not suitable for vertical trajectories.
                         */
                        Up: string;
                    }
                }
            }
            module schematic {
                /**
                 * Parent class of schematic objects
                 */
                class SchematicBase extends geotoolkit3d.scene.Object3D {
                    /**
                     * Parent class of schematic objects
                     */
                    constructor();
                    /**
                     * Get the current annotation holding title, icon, text...
                     */
                    getAnnotation(): geotoolkit3d.scene.AnnotationBase;
                    /**
                     * Set the current annotation holding title, icon, text...
                     * @param annotation  (Required) 
                     */
                    setAnnotation(annotation: geotoolkit3d.scene.AnnotationBase): this;
                    /**
                     * Get options, font, color, etc...
                     */
                    getOptions(): any;
                    /**
                     * Set options, font, color, etc...
                     * @param newOptions  (Required) geotoolkit.attributes.FillStyle
                     */
                    setOptions(newOptions: any): this;
                    /**
                     * Return the material of the schematic being a material provided by the user ar creation or a created material
                     * depending on the "fillstyle" option parameter at creation.
                     */
                    getMaterial(): THREE.Material;
                }
                /**
                 * Creates a cone three.js.
                 */
                class Cone extends geotoolkit3d.scene.Object3D {
                    /**
                     * Creates a cone three.js.
                     * @param options  (Required) The options
                     * @param options.data  (Required) 2 points required; the first one is the localisation and the second provide the direction to tend to.
                     * @param options.data.x  (Required) The x deviation values
                     * @param options.data.y  (Required) The y deviation values
                     * @param options.data.z  (Required) The elevation values
                     * @param options.fillstyle  (Optional) 
                     * @param options.radiustop  (Optional) Radius of the cylinder at the top
                     * @param options.radiusbottom  (Optional) Radius of the cylinder at the bottom
                     * @param options.height  (Optional) Height of the cylinder
                     * @param options.radiussegments  (Optional) Number of segmented faces around the circumference of the cylinder
                     * @param options.heightsegments  (Optional) Number of rows of faces along the height of the cylinder
                     * @param options.openended  (Optional) A Boolean indicating whether the ends of the cylinder are open or capped
                     */
                    constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; } ; fillstyle?: geotoolkit.attributes.FillStyle; radiustop?: number; radiusbottom?: number; height?: number; radiussegments?: number; heightsegments?: number; openended?: number; } );
                    /**
                     * Returns the bounding box of the schematic.
                     */
                    getBoundingBox(): THREE.Box3;
                    /**
                     * Returns the geometry of the schematic.
                     */
                    getGeometry(): THREE.CylinderGeometry;
                }
                /**
                 * Creates a cube three.js.
                 */
                class Cube extends geotoolkit3d.scene.Object3D {
                    /**
                     * Creates a cube three.js.
                     * @param options  (Required) The options
                     * @param options.data  (Required) 2 points required, the first one is the localisation and the second provide the direction to tend to.
                     * @param options.data.x  (Required) The x deviation values
                     * @param options.data.y  (Required) The y deviation values
                     * @param options.data.z  (Required) The elevation values
                     * @param options.fillstyle  (Optional) Fillstyle used to create the cube's material
                     * @param options.width  (Optional) Size of the cube in model space
                     * @param options.widthsegments  (Optional) Number of segmented faces along the width of the sides
                     */
                    constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; } ; fillstyle?: geotoolkit.attributes.FillStyle; width?: number; widthsegments?: number; } );
                    /**
                     * Returns the bounding box of the schematic.
                     */
                    getBoundingBox(): THREE.Box3;
                    /**
                     * Returns the geometry of the schematic.
                     */
                    getGeometry(): THREE.BoxGeometry;
                }
                /**
                 * A 3D cylinder schematic object.
                 */
                class Cylinder extends geotoolkit3d.scene.Object3D {
                    /**
                     * A 3D cylinder schematic object.
                     * @param options  (Required) The options
                     * @param options.radius  (Optional) The radius of the cylinder in modelspace
                     * @param options.depth  (Optional) The length of the cylinder in modelspace (used if there is only 2 points in the given path)
                     * @param options.tubeprecision  (Optional) The tube approximation precision
                     * @param options.fillstyle  (Optional) 
                     * @param options.data  (Required) 2 points minimum required; if 2 points are provided the first one is the localisation
and the second provide the direction to tend to. If more than 2 points are provided then the points are actual
trajectory points around which a tube will be created.
                     * @param options.data.x  (Required) The x deviation values
                     * @param options.data.y  (Required) The y deviation values
                     * @param options.data.z  (Required) The elevation values
                     */
                    constructor(options: any | { radius?: number; depth?: number; tubeprecision?: number; fillstyle?: geotoolkit.attributes.FillStyle; data: any | { x: number[]; y: number[]; z: number[]; } ; } );
                    /**
                     * Returns the bounding box of the schematic in local coordinates.
                     */
                    getBoundingBox(): THREE.Box3;
                    /**
                     * Returns the geometry of the schematic.
                     */
                    getGeometry(): THREE.Geometry|THREE.BufferGeometry;
                }
                /**
                 * A 3D parallelepiped schematic object.
                 */
                class Parallelepiped extends geotoolkit3d.scene.Object3D {
                    /**
                     * A 3D parallelepiped schematic object.
                     * @param options  (Required) The options
                     * @param options.data  (Required) 2 points minimum required; if 2 points are provided the first one is the localisation
and the second provide the direction to tend to. If more than 2 points are provided then the points are actual
trajectory points around which a 4 side tube will be created.
                     * @param options.data.x  (Required) The x deviation values
                     * @param options.data.y  (Required) The y deviation values
                     * @param options.data.z  (Required) The elevation values
                     * @param options.fillstyle  (Required) 
                     * @param options.width  (Optional) The width of the parallelepiped in modelspace (x axis)
                     * @param options.height  (Optional) The height of the parallelepiped in modelspace (y axis)
                     * @param options.depth  (Optional) The length of the parallelepiped in modelspace (used if there is only 2 points in the given path) (z axis)
                     * @param options.widthsegments  (Optional) Number of segmented faces along the width of the sides
                     * @param options.heightsegments  (Optional) Number of segmented faces along the height of the sides
                     * @param options.depthsegments  (Optional) Number of segmented faces along the depth of the sides
                     */
                    constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; } ; fillstyle: geotoolkit.attributes.FillStyle; width?: number; height?: number; depth?: number; widthsegments?: number; heightsegments?: number; depthsegments?: number; } );
                    /**
                     * Returns the bounding box of the schematic in local coordinates.
                     */
                    getBoundingBox(): THREE.Box3;
                    /**
                     * Returns the geometry of the schematic.
                     */
                    getGeometry(): THREE.Geometry|THREE.BufferGeometry;
                }
                /**
                 * Creates a Sphere three.js.
                 */
                class Sphere extends geotoolkit3d.scene.well.schematic.SchematicBase {
                    /**
                     * Creates a Sphere three.js.
                     * @param options  (Required) The options
                     * @param options.data  (Required) 2 points required; the first one is the localisation and the second provide the direction to tend to.
                     * @param options.data.x  (Required) The x deviation values
                     * @param options.data.y  (Required) The y deviation values
                     * @param options.data.z  (Required) The elevation values
                     * @param options.fillstyle  (Optional) 
                     * @param options.radius  (Optional) The sphere radius
                     * @param options.widthsegments  (Optional) The number of horizontal segments. Minimum value is 3
                     * @param options.heightsegments  (Optional) The number of vertical segments. Minimum value is 2
                     * @param options.phistart  (Optional) The specify horizontal starting angle
                     * @param options.philength  (Optional) The specify horizontal sweep angle size
                     * @param options.thetastart  (Optional) The specify vertical starting angle
                     * @param options.thetalength  (Optional) The specify vertical sweep angle size
                     */
                    constructor(options: any | { data: any | { x: number[]|number; y: number[]|number; z: number[]|number; } ; fillstyle?: geotoolkit.attributes.FillStyle; radius?: number; widthsegments?: number; heightsegments?: number; phistart?: number; philength?: number; thetastart?: number; thetalength?: number; } );
                    /**
                     * Returns the bounding box of the schematic.
                     */
                    getBoundingBox(): THREE.Box3;
                    /**
                     * Returns the geometry of the schematic.
                     */
                    getGeometry(): THREE.SphereGeometry;
                }
            }
        }
    }
    module data {
        module well {
            /**
             * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
             */
            class DirectionUtil {
                /**
                 * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
                 */
                constructor();
            }
            /**
             * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
             */
            class DeviationUtil {
                /**
                 * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
                 */
                constructor();
            }
        }
    }
}
