declare module geotoolkit3d {
    module scene {
        module map {
            /**
             * A 3D map object.<br>
             * <br>
             * This object provides a shape that can be used to display a tiledMap in a 3D scene.<br>
             * The Map is composed of planes that are dynamically altered to increase level of detail.<br>
             * <br>
             * The map's location and size can be configured independently of the map's extent<br>
             * The map's location can be configured through setting the maplimits property in setOptions<br>
             * The map's extent can be configured through setting the extent property in setOptions<br>
             * <br>
             */
            class TiledMap extends geotoolkit3d.scene.Object3D {
                /**
                 * A 3D map object.<br>
                 * <br>
                 * This object provides a shape that can be used to display a tiledMap in a 3D scene.<br>
                 * The Map is composed of planes that are dynamically altered to increase level of detail.<br>
                 * <br>
                 * The map's location and size can be configured independently of the map's extent<br>
                 * The map's location can be configured through setting the maplimits property in setOptions<br>
                 * The map's extent can be configured through setting the extent property in setOptions<br>
                 * <br>
                 * @param options  (Required) The options
                 * @param options.maxlod  (Optional) This defines the max Resolution of the map, this is either the max lod from the server, or as refined as you want to see the map for performance reasons
                 * @param options.minlod  (Optional) This defines the min Resolution of the map this is for maps that do not support tiles lower than
this resolution
                 * @param options.extent  (Optional) This defines the area of the map we want to show.
                 * @param options.maplimits  (Optional) This defines the area that the TiledMap should occupy
                 * @param options.server  (Optional) JSON object container - Generated
                 * @param options.server.url  (Optional) Server that this object will pull tiles from
                 * @param options.server.formatterfunction  (Optional) function that takes x y z values and turns them into a path on the connected server
                 * @param options.opacity  (Optional) 0-1.0 opacity of the map
                 */
                constructor(options: any | { maxlod?: number; minlod?: number; extent?: THREE.Box2; maplimits?: THREE.Box2; server?: any | { url?: string|string[]; formatterfunction?: Function; } ; opacity?: number; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) to set on this object
                 * @param options.maplimits  (Optional) This defines the area that the TiledMap should occupy
                 * @param options.maxlod  (Optional) This defines the max Resolution of the map
                 * @param options.minlod  (Optional) This defines the min Resolution of the map this is for maps that do not support tiles lower than
this resolution
                 * @param options.extent  (Optional) This defines the area of the map we want to show.
                 * @param options.server  (Optional) Server that this object will pull tiles from
                 * @param options.opacity  (Optional) 0-1.0 opacity of the map
                 * @param options.formatterfunction  (Optional) function that takes x y z values and turns them into a path on the connected server
                 */
                setOptions(options: any | { maplimits?: THREE.Box2; maxlod?: number; minlod?: number; extent?: THREE.Box2; server?: string; opacity?: number; formatterfunction?: Function; } ): this;
            }
        }
    }
}
