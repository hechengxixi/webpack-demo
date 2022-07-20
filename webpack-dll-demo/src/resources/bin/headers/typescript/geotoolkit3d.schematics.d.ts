declare module geotoolkit3d {
    module scene {
        module schematics {
            class SchematicsNode extends geotoolkit3d.scene.Object3D {
                /**
                 * @param parameters  (Required) 
                 * @param parameters.data  (Optional) trajectory data
                 * @param parameters.components  (Optional) requested components to render
                 */
                constructor(parameters: any | { data?: geotoolkit3d.geodata.Trajectory3d; components?: geotoolkit.schematics.data.WellBoreData; } );
            }
        }
    }
    module schematics {
        module factory {
            /**
             * Trajectory componentName-to-componentFactory mapping
             */
            class Trajectory {
                /**
                 * Trajectory componentName-to-componentFactory mapping
                 */
                constructor();
                /**
                 * Set componentName-to-nodeFactory link.
                 * @param componentName  (Required) component name associated with node factory
                 * @param creationFunc  (Required) method returning a ComponentNode implementation instance.
                 */
                static setFactory(componentName: string, creationFunc: Function): any;
                /**
                 * Set componentName-to-nodeFactory link.
                 * @param componentName  (Required) component name associated with node factory
                 * @param updateFunc  (Required) method returning a ComponentNode implementation instance.
                 */
                static setUpdateFactory(componentName: string, updateFunc: Function): any;
            }
        }
    }
}
