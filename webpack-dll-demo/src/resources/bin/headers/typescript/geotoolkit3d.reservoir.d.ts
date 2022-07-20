declare module geotoolkit3d {
    module scene {
        module reservoir {
            /**
             * Enum of Reservoir Skeleton Modes.<br>
             * <br>
             * The values of this enums can be used to determine the rendering mode of a reservoir.
             */
            var DisplayMode: any;
            /**
             * A Reservoir IJK index
             * 
             * This object represents a cell index
             */
            class IJKIndex {
                /**
                 * A Reservoir IJK index
                 * 
                 * This object represents a cell index
                 * @param options  (Required) The input for IJK coordinates as an object or an array
                 * @param options.i  (Optional) I coordinate
                 * @param options.j  (Optional) J coordinate
                 * @param options.k  (Optional) K coordinate
                 */
                constructor(options: number|any | { i?: number; j?: number; k?: number; } |number[]);
                /**
                 * Set the ijk coordinate from the given array ([i, j, k])
                 * @param array  (Required) The array containing the ijk values
                 */
                fromArray(array: number[]): any;
                /**
                 * Set the value of the object<br>
                 * @param options  (Required) The input for IJK coordinates as an object
                 * @param options.i  (Optional) I coordinate
                 * @param options.j  (Optional) J coordinate
                 * @param options.k  (Optional) K coordinate
                 */
                fromJson(options: any | { i?: number; j?: number; k?: number; } ): any;
                /**
                 * Get a json representation of the object<br>
                 */
                toJSON(): {options:{i:number;j:number;k:number}}|any;
                /**
                 * Set the the ijk values
                 * @param i  (Required) The I coordinate
                 * @param j  (Required) The J coordinate
                 * @param k  (Required) The K coordinate
                 */
                set(i: number, j: number, k: number): this;
                /**
                 * Set the ijk coordinates.
                 * @param options  (Required) The input for IJK coordinates as an object or an array or the I coordinate
                 * @param options.i  (Optional) I coordinate
                 * @param options.j  (Optional) J coordinate
                 * @param options.k  (Optional) K coordinate
                 * @param j  (Optional) J coordinate
                 * @param k  (Optional) K coordinate
                 */
                setOptions(options: number|any | { i?: number; j?: number; k?: number; } |number[], j?: number, k?: number): this;
            }
            /**
             * Parent class for reservoir data
             */
            class AbstractReservoirData {
                /**
                 * Parent class for reservoir data
                 */
                constructor();
            }
            /**
             * Enum of Reservoir Skeleton Modes.<br>
             * <br>
             * The values of this enums can be used to determine the rendering mode of a reservoir.
             */
            interface DisplayMode {
                /**
                 * Show everything: the property, the grid mesh and the horizons
                 */
                Full: boolean[];
                /**
                 * Show everything but the horizons
                 */
                IgnoreHorizons: boolean[];
                /**
                 * Show everything but the grid mesh
                 */
                IgnoreMesh: boolean[];
                /**
                 * Show everything but the grid property
                 */
                IgnoreProperty: boolean[];
                /**
                 * Show only the property
                 */
                Property: boolean[];
                /**
                 * Show only the grid mesh
                 */
                Mesh: boolean[];
                /**
                 * Show only the horizons
                 */
                Horizons: boolean[];
                /**
                 * Hide all
                 */
                Nothing: boolean[];
            }
            module hexahedral {
                /**
                 * A Reservoir object.<br>
                 * 
                 * This object represents a 3D reservoir with an optional attribute used for coloring.<br>
                 * The reservoir's geometry is defined by the given ReservoirData.<br>
                 */
                class ReservoirGrid extends geotoolkit3d.scene.Object3D {
                    /**
                     * A Reservoir object.<br>
                     * 
                     * This object represents a 3D reservoir with an optional attribute used for coloring.<br>
                     * The reservoir's geometry is defined by the given ReservoirData.<br>
                     * @param options  (Required) The options
                     * @param options.data  (Required) The reservoir data
                     * @param options.color  (Optional) Optional single color for cell painting
                     * @param options.colorprovider  (Optional) A color provider to generate the colormap for cell painting
                     * @param options.nullvalue  (Optional) The attribute nullvalue.<br>If some values are provided for coloring and if one of those values is equal to this nullvalue. <br>Then the cell won't be rendered.
                     * @param options.minvalue  (Optional) cells with greater than or equal to this value will be rendered.
                     * @param options.maxvalue  (Optional) cells with less than or equal to this value will be rendered.
                     * @param options.mini  (Optional) cells with greater than or equal to this value will be rendered.
                     * @param options.maxi  (Optional) cells with less than or equal to this value will be rendered.
                     * @param options.minj  (Optional) cells with greater than or equal to this value will be rendered.
                     * @param options.maxj  (Optional) cells with less than or equal to this value will be rendered.
                     * @param options.mink  (Optional) cells with greater than or equal to this value will be rendered.
                     * @param options.maxk  (Optional) cells with less than or equal to this value will be rendered.
                     * @param options.skeleton  (Optional) The skeleton options
                     * @param options.skeleton.color  (Optional) The skeleton color
                     * @param options.skeleton.horizons  (Optional) The significant horizons
                     * @param options.mode  (Optional) The reservoir display mode
                     */
                    constructor(options: any | { data: geotoolkit3d.data.reservoir.hexahedral.ReservoirData; color?: THREE.Color; colorprovider?: geotoolkit.util.ColorProvider; nullvalue?: number; minvalue?: number; maxvalue?: number; mini?: number; maxi?: number; minj?: number; maxj?: number; mink?: number; maxk?: number; skeleton?: any | { color?: string; horizons?: any[]; } ; mode?: geotoolkit3d.scene.reservoir.DisplayMode; } );
                    /**
                     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                     * @param options  (Required) 
                     * @param options.data  (Optional) 
                     * @param options.colorprovider  (Optional) A color provider or a single color in css format
                     * @param options.nullvalue  (Optional) The attribute nullvalue.<br>If some values are provided for coloring and if one of those values is equal to this nullvalue. <br>Then the cell won't be rendered.
                     * @param options.minvalue  (Optional) cells with greater than or equal to this value will be rendered.
                     * @param options.maxvalue  (Optional) cells with less than or equal to this value will be rendered.
                     * @param options.mini  (Optional) cells with greater than or equal to this value will be rendered.
                     * @param options.maxi  (Optional) cells with less than or equal to this value will be rendered.
                     * @param options.minj  (Optional) cells with greater than or equal to this value will be rendered.
                     * @param options.maxj  (Optional) cells with less than or equal to this value will be rendered.
                     * @param options.mink  (Optional) cells with greater than or equal to this value will be rendered.
                     * @param options.maxk  (Optional) cells with less than or equal to this value will be rendered.
                     */
                    setOptions(options: any | { data?: geotoolkit3d.data.reservoir.AbstractReservoirData; colorprovider?: geotoolkit.util.ColorProvider|string; nullvalue?: number; minvalue?: number; maxvalue?: number; mini?: number; maxi?: number; minj?: number; maxj?: number; mink?: number; maxk?: number; } ): this;
                }
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
                 */
                class SkeletonMaterial extends THREE.LineBasicMaterial {
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
                     * @param options  (Required) The options
                     * @param options.color  (Optional) Optional single color
                     * @param options.colorprovider  (Optional) A color provider to generate the colormap
                     */
                    constructor(options: any | { color?: THREE.Color; colorprovider?: geotoolkit.util.ColorProvider; } );
                    /**
                     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                     * @param options  (Required) The options
                     * @param options.color  (Optional) Optional single color (reset to white if a colorprovider is given)
                     * @param options.colorprovider  (Optional) A color provider to generate the colormap
                     */
                    setOptions(options: any | { color?: THREE.Color; colorprovider?: geotoolkit.util.ColorProvider; } ): this;
                }
                /**
                 * Reservoir data using hexahedral geometry.
                 */
                class ReservoirData extends geotoolkit3d.data.reservoir.hexahedral.ReservoirData {
                    /**
                     * Reservoir data using hexahedral geometry.
                     * @param options  (Optional) 
                     * @param options.cells  (Optional) The cells values.
                     * @param options.ijkcount  (Optional) The I,J,K dimensions of the grid
                     */
                    constructor(options?: any | { cells?: any[]; ijkcount?: geotoolkit3d.scene.reservoir.IJKIndex|any|number[]; } );
                }
            }
        }
    }
    module data {
        module reservoir {
            /**
             * Parent class for reservoir data
             */
            class AbstractReservoirData {
                /**
                 * Parent class for reservoir data
                 * @param options  (Required) 
                 */
                constructor(options: any);
                /**
                 * Returns the vertex/index attributes
                 */
                getAttributes(): any;
            }
            module hexahedral {
                /**
                 * Reservoir data using hexahedral geometry.
                 */
                class ReservoirData extends geotoolkit3d.data.reservoir.AbstractReservoirData {
                    /**
                     * Reservoir data using hexahedral geometry.
                     * @param options  (Optional) 
                     * @param options.cells  (Optional) The cells values.
                     * @param options.ijkcount  (Optional) The I,J,K dimensions of the grid
                     */
                    constructor(options?: any | { cells?: any[]; ijkcount?: geotoolkit3d.scene.reservoir.IJKIndex|any|number[]; } );
                    /**
                     * Returns the reservoir data's  attributes
                     */
                    getAttributes(): {attributes:{position:THREE.BufferAttribute;values:THREE.BufferAttribute;ijk:THREE.BufferAttribute;minvalue:number;maxvalue:number;mini:number;maxi:number;minj:number;maxj:number;mink:number;maxk:number}}|any;
                    /**
                     * Returns the index for the reservoir cell
                     * @param i  (Required) i value for this cell
                     * @param j  (Required) j value for this cell
                     * @param k  (Required) k value for this cell
                     */
                    getIndexForCell(i: number, j: number, k: number): number|any;
                    /**
                     * This function clears all buffers and geometry.
                     */
                    reset(): this;
                    /**
                     * Set several cells options, see #setCellOptions() for detailed documentation.
                     * @param cells  (Required) cells to set options on
                     */
                    setCellsOptions(cells: any[]): this;
                    /**
                     * Set Parameters of a given cell<br>
                     * <br>
                     * The geometrical data are expected in a regular order, see example<br>
                     * <br>
                     * x values are [xA, xB, xC, xD, xE, xF, xG, xH],<br>
                     * y values are [yA, ..., yH] and z values are [zA, ..., zH]<br>
                     * <br>
                     * The cell geometry does not need to be orthogonal.<br>
                     * It is strongly recommended that each face (ABDC, CDHG, GEAC...) is entirely included in a 3D plane.<br>
                     * @param celldata  (Required) The cell data
                     * @param celldata.ijk  (Optional) The ijk index of the cell
                     * @param celldata.x  (Optional) The x values for the 8 vertices
                     * @param celldata.y  (Optional) The y values for the 8 vertices
                     * @param celldata.z  (Optional) The z values for the 8 vertices
                     * @param celldata.value  (Optional) The cell value
                     */
                    setCellOptions(celldata: any | { ijk?: geotoolkit3d.scene.reservoir.IJKIndex|any|number[]; x?: number[]; y?: number[]; z?: number[]; value?: number; } ): any;
                    /**
                     * Returns the number of cells in the data object
                     */
                    getNumberOfCells(): number;
                    /**
                     * Returns the Cell Data
                     * @param ijk  (Required) The index
                     */
                    getCellData(ijk: geotoolkit3d.scene.reservoir.IJKIndex): any|any;
                    /**
                     * Returns the ijk count for this data.
                     */
                    getIJKCount(): geotoolkit3d.scene.reservoir.IJKIndex;
                }
            }
        }
    }
    module picking {
        module pickingrenderer {
            /**
             * Material used to do renderer picking on a Reservoir mesh.<br>
             */
            class DefaultReservoirPickingMaterial extends geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial {
                /**
                 * Material used to do renderer picking on a Reservoir mesh.<br>
                 */
                constructor();
            }
        }
    }
}
