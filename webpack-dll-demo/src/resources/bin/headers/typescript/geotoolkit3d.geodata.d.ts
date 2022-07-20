declare module geotoolkit3d {
    module geodata {
        /**
         * Class Trajectory3d is used to define trajectory and it provides coordinates of each point along the planned well path.
         * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
         * If measured depth is not provided it is calculated from 0 along the path.
         */
        class Trajectory3d extends geotoolkit.util.EventDispatcher {
            /**
             * Class Trajectory3d is used to define trajectory and it provides coordinates of each point along the planned well path.
             * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
             * If measured depth is not provided it is calculated from 0 along the path.
             * @param x  (Required) x-coordinate of the transformed stations
             * @param y  (Required) y-coordinate of the transformed stations
             * @param z  (Required) z-coordinate of the transformed stations
             * @param origin  (Optional) if xyz coordinates are in deviation from origin
             * @param d  (Optional) d-measured depths array for each station will linear calculate estimated depths if not supplied
             * @param values  (Optional) values that are associated with this trajectory
             */
            constructor(x: number[], y: number[], z: number[], origin?: THREE.Vector3, d?: number[], values?: geotoolkit3d.geodata.TrajectoryValue[]);
            /**
             * Gets x-value at specified position
             * @param index  (Required) index of the station
             */
            getX(index: number): number;
            /**
             * Gets y-value at specified position
             * @param index  (Required) index of the station
             */
            getY(index: number): number;
            /**
             * Gets z-value at specified position
             * @param index  (Required) index of the station
             */
            getZ(index: number): number;
            /**
             * Gets MD-value at specified position
             * @param index  (Required) index of the station
             */
            getDepth(index: number): number;
            /**
             * Gets number of stations in the trajectory
             */
            count(): number;
            /**
             * Gets calculated minimal MD
             */
            minDepth(): number;
            /**
             * Gets calculated maximal MD
             */
            maxDepth(): number;
            /**
             * Gets calculated minimal x-value (convenience method)
             */
            getMinX(): number;
            /**
             * Gets calculated minimal y-value (convenience method)
             */
            getMinY(): number;
            /**
             * Gets calculated maximal x-value (convenience method)
             */
            getMaxX(): number;
            /**
             * Gets calculated maximal y-value (convenience method)
             */
            getMaxY(): number;
            /**
             * Gets calculated minimal Z-value (convenience method)
             */
            getMinZ(): number;
            /**
             * Gets calculated maximal Z-value (convenience method)
             */
            getMaxZ(): number;
            /**
             * Gets calculated minimal Depth (convenience method)
             */
            getMinDepth(): number;
            /**
             * Gets calculated maximal Depth (convenience method)
             */
            getMaxDepth(): number;
            /**
             * Gets the points from start to end depths - will return all depths if no parameters passed
             * @param start  (Optional) depth to start if returns everything before end
             * @param end  (Optional) depth to end
             */
            getCoordinatesForDepths(start?: number, end?: number): {obj:{x:number[];y:number[];z:number[]}}|any;
            /**
             * gets the direction of the trajectory at the requested depth
             * @param location  (Optional) depth to start if returns everything before end
             * @param preferForward  (Optional) in the case where a depth is on a real position, prefers the forward direction
             */
            getDirectionAtDepth(location?: number, preferForward?: boolean): THREE.Vector3;
            /**
             * Gets the interpolated position at the requested depth
             * @param location  (Optional) depth for position
             */
            getCoordinateForDepth(location?: number): THREE.Vector3;
            /**
             * Gets the points from start to end depths - will return all depths if no parameters passed
             * @param valueName  (Optional) name of the value to get
             * @param start  (Optional) depth to start if returns everything before end
             * @param end  (Optional) depth to end
             */
            getValuesForDepths(valueName?: number, start?: number, end?: number): number[];
        }
        /**
         * Class TrajectoryValue
         */
        class TrajectoryValue {
            /**
             * Class TrajectoryValue
             * @param name  (Required) descriptor for what this value represents
             * @param values  (Required) values that correspond to the xyz locations of the trajectory
             */
            constructor(name: string, values: number[]);
            /**
             * gets the name for this value array
             */
            getName(): string;
            /**
             * gets the name for this value array
             */
            getValues(): number[];
        }
    }
}
