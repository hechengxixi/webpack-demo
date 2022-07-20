/** @namespace */
geotoolkit3d.schematics = {};

/**
 * @class geotoolkit3d.scene.schematics.SchematicsNode
 * @augments geotoolkit3d.scene.Object3D
 * @param {object} parameters
 * @param {geotoolkit3d.geodata.Trajectory3d} [parameters.data = null] trajectory data
 * @param {geotoolkit.schematics.data.WellBoreData} [parameters.components] requested components to render
 *
 */
geotoolkit3d.scene.schematics.SchematicsNode = {};

/**
 * Trajectory componentName-to-componentFactory mapping
 * @class geotoolkit3d.schematics.factory.Trajectory
 */
geotoolkit3d.schematics.factory.Trajectory = {};
    /**
     * Set componentName-to-nodeFactory link.
     * @param {!string} componentName component name associated with node factory
     * @param {function} creationFunc method returning a ComponentNode implementation instance.
     */
    geotoolkit3d.schematics.factory.Trajectory.setFactory = function(componentName, creationFunc){};
    /**
     * Set componentName-to-nodeFactory link.
     * @param {!string} componentName component name associated with node factory
     * @param {function} updateFunc method returning a ComponentNode implementation instance.
     */
    geotoolkit3d.schematics.factory.Trajectory.setUpdateFactory = function(componentName, updateFunc){};

