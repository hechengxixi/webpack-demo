/** @namespace */
geotoolkit3d.scene.map = {};

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
 *
 * @class geotoolkit3d.scene.map.TiledMap
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} options The options
 * @param {number} [options.maxlod=10] This defines the max Resolution of the map, this is either the max lod from the server, or as refined as you want to see the map for performance reasons
 * @param {number} [options.minlod=0] This defines the min Resolution of the map this is for maps that do not support tiles lower than
 * this resolution
 * @param {THREE.Box2} [options.extent=new THREE.Box2(new THREE.Vector2(-20037508.3428, -20037508.3428), new THREE.Vector2(20037508.3428, 20037508.3428)] This defines the area of the map we want to show.
 * @param {THREE.Box2} [options.maplimits=options.extent] This defines the area that the TiledMap should occupy
 * @param {string | Array<string>} [options.server.url] Server that this object will pull tiles from
 * @param {number} [options.opacity=1] 0-1.0 opacity of the map
 * @param {function} [options.server.formatterfunction] function that takes x y z values and turns them into a path on the connected server
 */
geotoolkit3d.scene.map.TiledMap = {};
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param {object} options to set on this object
     * @param {THREE.Box2} [options.maplimits] This defines the area that the TiledMap should occupy
     * @param {number} [options.maxlod] This defines the max Resolution of the map
     * @param {number} [options.minlod=0] This defines the min Resolution of the map this is for maps that do not support tiles lower than
     * this resolution
     * @param {THREE.Box2} [options.extent] This defines the area of the map we want to show.
     * @param {string} [options.server] Server that this object will pull tiles from
     * @param {number} [options.opacity] 0-1.0 opacity of the map
     * @param {function} [options.formatterfunction] function that takes x y z values and turns them into a path on the connected server
     * @returns {geotoolkit3d.scene.map.TiledMap} this
     */
    geotoolkit3d.scene.map.TiledMap.prototype.setOptions = function(options){};

