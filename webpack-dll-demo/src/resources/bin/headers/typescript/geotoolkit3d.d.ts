declare module geotoolkit3d {
    /**
     * Utility class providing functions and constant for 3D scene operations.<br>
     */
    class Util {
        /**
         * Utility class providing functions and constant for 3D scene operations.<br>
         */
        constructor();
        /**
         * Computes the world bounding box of the given object and its children.<br>
         * This function uses geometries boundingBox and matrixWold to do so.<br>
         * Note that this function uses all nodes by default (even the not visible ones)<br>
         * <br>
         * @param object  (Required) The object to compute world bounding box of
         * @param filter  (Optional) A filter function to ignore some nodes
         * @param alwaysTraverseChildren  (Optional) Forces the calculation to traverse children to get the extents of the whole view
         */
        static computeWorldBoundingBox(object: THREE.Object3D, filter?: Function, alwaysTraverseChildren?: boolean): THREE.Box3|any;
        /**
         * Dispose an object's WebGL resources and all its children recursively.<br>
         * The sequence in witch the dispose steps will occur is:
         * <ul>
         *  <li> disposeResources : If the object has any specific resources to dispose, the disposeResources() function will be called.</li>
         *  <li> dispose children: Calls Util.dispose() on the children of this object.</li>
         *  <li> dispose object: If the object has any custom implementation of the dispose function.</li>
         *  <li> remove object: Removes the object from its parent.</li>
         *  <li> dispose geometry: Disposes the geometry, releasing the memory used on the graphic card.</li>
         *  <li> dispose material: Disposes the material, releasing the memory used on the graphic card.</li>
         *  <ul>
         *   <li> dispose texture: Disposes the texture stored in the material (if any).</li>
         *  </ul>
         * </ul>
         * @param object  (Required) The object or array of objects to dispose
         */
        static dispose(object: THREE.Object3D|THREE.Object3D[]): any;
        /**
         * Compute the device coordinates for the given world coordinates.<br>
         * This function will compute the projection of the given position using the given parameters.<br>
         * @param position  (Required) The position to project
         * @param camera  (Required) The camera
         * @param rendererSize  (Required) The renderer dimension in virtual pixels
         * @param target  (Optional) An optional target to store the result
         */
        static worldToDevice(position: THREE.Vector3, camera: THREE.Camera, rendererSize: geotoolkit.util.Dimension, target?: THREE.Vector3): THREE.Vector3;
        /**
         * Compute the device coordinates for the given world coordinates.<br>
         * This function will compute the projection of the given position using the given parameters.<br>
         * @param position  (Required) The position to project
         * @param camera  (Required) The camera
         * @param rendererSize  (Required) The renderer dimension in virtual pixels
         * @param target  (Optional) An optional target to store the result
         */
        static worldToDevice2D(position: THREE.Vector3, camera: THREE.Camera, rendererSize: geotoolkit.util.Dimension, target?: THREE.Vector2): THREE.Vector2;
        /**
         * Seismic display mode enum.<br>
         * <br>
         * This enum is used to determine how to transform Index coordinates when rendering Seismic related objects.<br>
         */
        static SeismicModes: any;
    }
    /**
     * A Plot with 3D capabilities.<br>
     * Unlike a geotoolkit 2D plot, this plot requires a DIV element to be passed and not a canvas.<br>
     * <br>
     * The plot is internally structured as a SceneGraph using THREE.Scene.<br>
     * It uses a camera system to represent user's eye location in 3D space.<br>
     * This camera position can be moved anywhere in the plot and can look in any direction (although controller are encouraged to limit this freedom to ensure meaningful displays)<br>
     * The camera type and option can be configured at creation or on the fly using setOptions().<br>
     * <br>
     * To increase rendering accuracy the plot will try to compute ideal near/far planes positions and simplify transformation matrices.<br>
     * These mechanism relies on the fact that the plot can compute its own modellimits and that those limits are reasonably small.<br>
     * The rendering accuracy might suffer from modellimits too big because of GPU floating point computing accuracy.<br>
     *  <br>
     * To render its content the plot a render cycle made of the following steps:<br>
     * <ul>
     * <li>Call updateObject on <b>all</b> nodes: Offers a chance to each node to update its status before rendering occurs. This should not trigger any invalidation event though.</li>
     * <li>Call prepareRender: Simplifies transformation matrices, move near/far planes to increase accuracy.</li>
     * <li>Call beforeRender on <b>visible</b> nodes. This can be used to update nodes 'on the fly' in the render pass. However be careful when overriding this function as its impact heavily the rendering logic.</li>
     * <li>Render: The WebGLRenderer traverses the scene, rendering node using WebGL (all GL operations occur at this stage).</li>
     * <li>Call finishRender: Restores the matrices, revert near/far planes.</li>
     * </ul>
     * <br>
     * The updateObject phase differs from beforeRender as it is executed before the plot's matrices/transformation have been simplified&optimized.<br>
     * Which means that it its implementation modifies a transformation it will be taken into account during this render pass for the simplification step.<br>
     * However beforeRender is executed after the simplification, so any modification done in this function will be rendered but will not be used for simplification.<br>
     * Also, beforeRender expose a bit more of the internal plot logic and usage of those elements that are not part of the public API should be done with caution.<br>
     * Generally, updateObject is used to implement application level changes.<br>
     * And beforeRender is generally used to execute low level operations like GPU resource loading and management.<br>
     * <br>
     * The plot also exposes some rendering options like anti-aliasing, clear-color or preferred GPU precision.<br>
     * Some of them cannot be changed on the fly though like the transparency of the background.<br>
     * <br>
     * A notification system using EventDispatcher exposes the events occurring in the plot (object added, removed, invalidate, camera changes, etc).<br>
     * One could listen to events occurring on any node of the plot by listening to the Plot's events.<br>
     * Note that you can also send custom events from your nodes to implement your application's logic.<br>
     * See geotoolkit3d.Event.Type for the builtin events.<br>
     * <br>
     * When an event is fired and caught by the plot, it marks itself as dirty.<br>
     * Whenever the next renderCycle occurs (based on requestanimationframe), this flag will be checked.<br>
     * If it's true then a render cycle will occur, otherwise the plot will hibernate until the next requestanimationframe lands.<br>
     * That's why one may need to call manually invalidateObject() on a node after modifying it through direct access (like position, scale, rotation, etc).<br>
     * It will flag the plot as dirty (through the event notification system), resulting in a render.<br>
     * Note that because the rendering is asynchronous, during invalidate several time in a row will trigger only one render.<br>
     * <br>
     * The plot also offers some useful features like builtin lighting (ambient light and camera headlight) and global scale.<br>
     * Those options can be enabled/disabled and configured through the setOptions().<br>
     * <br>
     * Like a geotoolkit widget, the plot uses a Tool system to catch, process and dispatch user input. (See {@link geotoolkit3d.tool.AbstractTool}).<br>
     * One of those tools is the controller, it's a special tool that allow the user to manipulate the camera using an input device (mouse, touch screen, ...).<br>
     * <br>
     * The plot will also have a compass added to it (as an overlay).<br>
     * This compass can be configured/changed and also replaced by a custom one.<br>
     * <br>
     */
    class Plot extends geotoolkit.util.EventDispatcher {
        /**
         * A Plot with 3D capabilities.<br>
         * Unlike a geotoolkit 2D plot, this plot requires a DIV element to be passed and not a canvas.<br>
         * <br>
         * The plot is internally structured as a SceneGraph using THREE.Scene.<br>
         * It uses a camera system to represent user's eye location in 3D space.<br>
         * This camera position can be moved anywhere in the plot and can look in any direction (although controller are encouraged to limit this freedom to ensure meaningful displays)<br>
         * The camera type and option can be configured at creation or on the fly using setOptions().<br>
         * <br>
         * To increase rendering accuracy the plot will try to compute ideal near/far planes positions and simplify transformation matrices.<br>
         * These mechanism relies on the fact that the plot can compute its own modellimits and that those limits are reasonably small.<br>
         * The rendering accuracy might suffer from modellimits too big because of GPU floating point computing accuracy.<br>
         *  <br>
         * To render its content the plot a render cycle made of the following steps:<br>
         * <ul>
         * <li>Call updateObject on <b>all</b> nodes: Offers a chance to each node to update its status before rendering occurs. This should not trigger any invalidation event though.</li>
         * <li>Call prepareRender: Simplifies transformation matrices, move near/far planes to increase accuracy.</li>
         * <li>Call beforeRender on <b>visible</b> nodes. This can be used to update nodes 'on the fly' in the render pass. However be careful when overriding this function as its impact heavily the rendering logic.</li>
         * <li>Render: The WebGLRenderer traverses the scene, rendering node using WebGL (all GL operations occur at this stage).</li>
         * <li>Call finishRender: Restores the matrices, revert near/far planes.</li>
         * </ul>
         * <br>
         * The updateObject phase differs from beforeRender as it is executed before the plot's matrices/transformation have been simplified&optimized.<br>
         * Which means that it its implementation modifies a transformation it will be taken into account during this render pass for the simplification step.<br>
         * However beforeRender is executed after the simplification, so any modification done in this function will be rendered but will not be used for simplification.<br>
         * Also, beforeRender expose a bit more of the internal plot logic and usage of those elements that are not part of the public API should be done with caution.<br>
         * Generally, updateObject is used to implement application level changes.<br>
         * And beforeRender is generally used to execute low level operations like GPU resource loading and management.<br>
         * <br>
         * The plot also exposes some rendering options like anti-aliasing, clear-color or preferred GPU precision.<br>
         * Some of them cannot be changed on the fly though like the transparency of the background.<br>
         * <br>
         * A notification system using EventDispatcher exposes the events occurring in the plot (object added, removed, invalidate, camera changes, etc).<br>
         * One could listen to events occurring on any node of the plot by listening to the Plot's events.<br>
         * Note that you can also send custom events from your nodes to implement your application's logic.<br>
         * See geotoolkit3d.Event.Type for the builtin events.<br>
         * <br>
         * When an event is fired and caught by the plot, it marks itself as dirty.<br>
         * Whenever the next renderCycle occurs (based on requestanimationframe), this flag will be checked.<br>
         * If it's true then a render cycle will occur, otherwise the plot will hibernate until the next requestanimationframe lands.<br>
         * That's why one may need to call manually invalidateObject() on a node after modifying it through direct access (like position, scale, rotation, etc).<br>
         * It will flag the plot as dirty (through the event notification system), resulting in a render.<br>
         * Note that because the rendering is asynchronous, during invalidate several time in a row will trigger only one render.<br>
         * <br>
         * The plot also offers some useful features like builtin lighting (ambient light and camera headlight) and global scale.<br>
         * Those options can be enabled/disabled and configured through the setOptions().<br>
         * <br>
         * Like a geotoolkit widget, the plot uses a Tool system to catch, process and dispatch user input. (See {@link geotoolkit3d.tool.AbstractTool}).<br>
         * One of those tools is the controller, it's a special tool that allow the user to manipulate the camera using an input device (mouse, touch screen, ...).<br>
         * <br>
         * The plot will also have a compass added to it (as an overlay).<br>
         * This compass can be configured/changed and also replaced by a custom one.<br>
         * <br>
         * @param options  (Required) The plot options
         * @param options.container  (Optional) The div element in which the canvas will be created and added (this or options.canvas need to be set)
         * @param options.canvas  (Optional) Canvas for the plot to render to (this or options.container need to be set)
         * @param options.translation  (Optional) This position becomes the effective origin for the scene for
scaling purposes.
         * @param options.autoupdatemodellimits  (Optional) True to let the plot update the modellimits when an object is inserted/removed into the scene. If an object is moved outside of the current modellimits you can manually call plot.updateModelLimits()
         * @param options.modellimits  (Optional) The modellimits mandatory if autoupdatemodellimits is not enabled. Must contain the whole scene and it's center should be close to the area of interest
         * @param options.scale  (Optional) The global scale to be applied to the scene graph
         * @param options.renderer  (Optional) The renderer configuration
         * @param options.renderer.parameters  (Optional) The renderer configuration. See ThreeJS documentation
         * @param options.renderer.clearcolor  (Optional) The renderer clearcolor color
         * @param options.renderer.clearcoloralpha  (Optional) The renderer clearcolor alpha value (0,1)
         * @param options.camera  (Optional) The camera options
         * @param options.camera.type  (Optional) The camera type
         * @param options.camera.position  (Optional) The location of the camera in the scene
         * @param options.camera.lookat  (Optional) The coordinates of the point the camera will look at
         * @param options.camera.fov  (Optional) The field-of-view angle in degrees (applies only to perspective camera)
         * @param options.camera.near  (Optional) The frustum near clipping plane, the 'auto' mode let the plot compute the ideal planes that fit the current modellimits and provide the best accuracy
         * @param options.camera.far  (Optional) The frustum near clipping plane, the 'auto' mode let the plot compute the ideal planes that fit the current modellimits and provide the best accuracy
         * @param options.camera.minnear  (Optional) when set to Auto clipping planes, this is the minimum value that will be set on the near plane
         * @param options.camera.minfar  (Optional) when set to Auto clipping planes, this is the minimum value that will be set on the far plane
         * @param options.camera.nearfarscale  (Optional) this will adjust the near plane to stay within this scale of the far (0 to disable)
         * @param options.camera.controller  (Optional) The camera controller configuration
         * @param options.camera.controller.type  (Optional) The controller to be used to change the camera location.
         * @param options.camera.controller.options  (Optional) The camera controller's options
         * @param options.camera.orthoresize  (Optional) The way a plot handles resize when in Orthographic mode
         * @param options.camera.movewithscale  (Optional) moves the camera in world coordinates to maintain its location in user coordinates when a scale is applied to the plot
         * @param options.ambientlighting  (Optional) Ambient lighting options
         * @param options.ambientlighting.enabled  (Optional) Determines if the ambient light is enabled
         * @param options.ambientlighting.color  (Optional) The color of the ambient light.
         * @param options.cameralighting  (Optional) The camera lighting options
         * @param options.cameralighting.enabled  (Optional) The color of the camera light.
         * @param options.cameralighting.color  (Optional) The color of the camera light.
         * @param options.cameralighting.intensity  (Optional) The intensity of the camera light.
         * @param options.compass  (Optional) The default compass options.
         * @param options.compass.container  (Optional) An optional container for the default compass, if not specified one will be created. Note that in order to be correctly positioned, this container requires the given container to have a 'position' set.
         * @param options.compass.canvas  (Optional) An optional canvas to render the compass to
         * @param options.compass.enabled  (Optional) flag to create the compass canvas.
         */
        constructor(options: any | { container?: HTMLElement; canvas?: any; translation?: THREE.Vector3; autoupdatemodellimits?: boolean; modellimits?: THREE.Box3; scale?: THREE.Vector3; renderer?: any | { parameters?: any; clearcolor?: THREE.Color; clearcoloralpha?: number; } ; camera?: any | { type?: geotoolkit3d.Plot.CameraType; position?: THREE.Vector3; lookat?: THREE.Vector3; fov?: number; near?: number; far?: number; minnear?: number; minfar?: number; nearfarscale?: number; controller?: any | { type?: geotoolkit3d.Plot.CameraControllerType|Function; options?: any; } ; orthoresize?: geotoolkit3d.Plot.OrthographicResizeMode; movewithscale?: boolean; } ; ambientlighting?: boolean|any | { enabled?: boolean; color?: string; } ; cameralighting?: boolean|any | { enabled?: boolean; color?: string; intensity?: string; } ; compass?: any | { container?: any; canvas?: any; enabled?: any; } ; } );
        /**
         * Enum of builtin camera types.<br>
         * Each Camera has its own projection algorithm.<br>
         */
        static CameraType: any;
        /**
         * Enum of ways to have the orthographic camera resize<br>
         */
        static OrthographicResizeMode: any;
        /**
         * Enum of builtin controller types.<br>
         * To provide your own controller simply pass the constructor function/class to the setOption instead of one of the enum value.<br>
         * <br>
         * This constructor will be called with this json:<br>
         * <pre>
         * {
         *  'camera': The camera object,
         *  'plot': This plot,
         *  'position': The initial/current position,
         *  'lookat': The initial/current lookat
         * }</pre>
         */
        static CameraControllerType: any;
        /**
         * Converts user coordinates to world coordinates in place (modifies the given object).<br>
         * <br>
         * User coordinates are world coordinates without global scaling applies.<br>
         * Use #setOptions({ scale: ... } to change the global scaling.<br>
         * <br>
         * @param vector3  (Required) Source AND target vector3
         */
        rootScale(vector3: THREE.Vector3): THREE.Vector3;
        /**
         * Converts world coordinates to user coordinates in place (modifies the given object).<br>
         * <br>
         * User coordinates are world coordinates without global scaling applies.<br>
         * Use #setOptions({ scale: ... } to change the global scaling.<br>
         * <br>
         * @param vector3  (Required) Source AND target vector3
         */
        rootScaleInv(vector3: THREE.Vector3): THREE.Vector3;
        /**
         * Returns camera location in user coordinates.<br>
         * @param target  (Optional) Optional target vector
         */
        getCameraLocation(target?: THREE.Vector3): THREE.Vector3;
        /**
         * Returns the camera lookat point in user coordinates IF such information is available (depends on the controller used).<br>
         * Otherwise returns camera.location + camera.direction.<br>
         * @param target  (Optional) Optional target vector
         */
        getCameraLookAt(target?: THREE.Vector3): THREE.Vector3;
        /**
         * This function will try to reset the camera position along the y axis so most of the scene fits into the view.<br>
         * It will also change the camera anchor point to the scene center.<br>
         * If the there is no visible geometry in the scene this will silently fail.
         * @param animate  (Optional) Animate the camera change
         * @param animationDuration  (Optional) Duration of the animation in milliseconds
         */
        resetCamera(animate?: boolean, animationDuration?: number): this;
        /**
         * This function will try to adjust the camera position along the direction axis so that most of the scene fits into the view. It
         * will also change the camera anchor point to the scene center.
         * If the there is no visible geometry in the scene this function will silently fail.
         * @param direction  (Optional) Direction to move the camera in, will use scene center to camera if null. This should be a
unit vector
         * @param animate  (Optional) Animate the camera change
         * @param animationDuration  (Optional) Duration of the animation in milliseconds
         */
        fitCamera(direction?: THREE.Vector3, animate?: boolean, animationDuration?: number): this;
        /**
         * Sets camera location in user coordinates.<br>
         * It is recommended to use #moveCamera() instead as it handles both the location and the direction of the camera.<br>
         * @param position  (Required) The position to move to (in USER coordinates)
         * @param animate  (Optional) Animate the camera change
         * @param animationDuration  (Optional) Duration of the animation in milliseconds
         */
        setCameraLocation(position: THREE.Vector3, animate?: boolean, animationDuration?: number): this;
        /**
         * Sets camera target in user coordinates.<br>
         * It is recommended to use #moveCamera() instead as it handles both the location and the direction of the camera.<br>
         * @param lookat  (Required) The point to look at (in USER coordinates)
         * @param animate  (Optional) Animate the camera change
         * @param animationDuration  (Optional) Duration of the animation in milliseconds
         */
        setCameraLookAt(lookat: THREE.Vector3, animate?: boolean, animationDuration?: number): this;
        /**
         * Moves the camera to the given position and rotate it to look at the given lookat.<br>
         * Note that the given points should be in user coordinates (world coordinates without global scaling).<br>
         * @param position  (Optional) The position to move to in USER coordinates
         * @param lookAt  (Optional) The point to look at (in USER coordinates)
         * @param animate  (Optional) Animate the camera change
         * @param animationDuration  (Optional) Duration of the animation in milliseconds
         */
        moveCamera(position?: THREE.Vector3, lookAt?: THREE.Vector3, animate?: boolean, animationDuration?: number): this;
        /**
         * Returns the scene graph root.<br>
         * One should use it to append nodes to the scene using the add() function.<br>
         */
        getRoot(): THREE.Object3D;
        /**
         * Returns the scene graph animation manager.<br>
         * This manager should be used to perform smooth animations in the plot.<br>
         * See {@link geotoolkit3d.scene.animation.AnimationManager} for more details.<br>
         */
        getAnimationManager(): geotoolkit3d.scene.animation.AnimationManager;
        /**
         * Returns the compass object.<br>
         * The returned compass can be configured/modified.<br>
         * See {@link geotoolkit3d.scene.compass.Compass} for more details.<br>
         */
        getCompass(): geotoolkit3d.scene.compass.Compass;
        /**
         * Set size of the Plot.<br>
         * This increase the rendering-area size (canvas) to the given dimension.<br>
         * It also notifies the WebGl renderer.<br>
         * The given pixelDeviceRatio can be used to take into account the current Browser zoom level.<br>
         * @param width  (Required) The new width that should be set
         * @param height  (Required) The new height that should be set
         * @param pixelDeviceRatio  (Optional) The pixel device ratio, if unset, will use the value provided by the window if available.
         */
        setSize(width: number, height: number, pixelDeviceRatio?: number): this;
        /**
         * Returns the 'virtual device' size of the plot.<br>
         * <br>
         * This returns the raw size given at initialization or through the setSize function.<br>
         * Ignoring any pixelRatio that could have been set on the WebGL renderer.<br>
         * @param target  (Optional) optional object to store the dimensions
         */
        getSize(target?: geotoolkit.util.Dimension): geotoolkit.util.Dimension;
        /**
         * Returns a copy of the model origin in world coordinates.<br>
         * The model origin is the center of the modellimits.<br>
         */
        getModelOrigin(): THREE.Vector3;
        /**
         * Returns a copy of the modellimits in world coordinates.<br>
         * The returned limits are either the one provided through the setOptions() or the one automatically computed by the plot.<br>
         * @param viewModelLimits  (Optional) gets the modelLimits that includes grid sprites and children of objects with a getWorldBoundingBox
         * @param filter  (Optional) that gets applied to the compute the model limits
         */
        getModelLimits(viewModelLimits?: boolean, filter?: Function): THREE.Box3;
        /**
         * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
         * @param options  (Required) options to set on this object
         * @param options.modellimits  (Optional) The modellimits, necessary if autoupdatemodellimits is not enabled. Should be the boundingbox of the scene.
         * @param options.camera  (Optional) The camera options
         * @param options.camera.type  (Optional) The camera type, note that changing the camera type will not preserve the current display.
         * @param options.camera.controller  (Optional) The camera controller configuration
         * @param options.camera.controller.type  (Optional) The controller to be used to change the camera location.
         * @param options.camera.controller.options  (Optional) The camera controller's options, see to the Controller documentation for available options
         * @param options.camera.fov  (Optional) The field-of-view angle in degrees (applies only to perspective camera)
         * @param options.camera.near  (Optional) The frustum near clipping plane
         * @param options.camera.far  (Optional) The frustum far clipping plane
         * @param options.camera.minnear  (Optional) the minimum value for auto clipping planes
         * @param options.camera.minfar  (Optional) the minimum value for auto clipping planes
         * @param options.camera.orthoresize  (Optional) the way the plot will resize when in orthographic mode
         * @param options.camera.position  (Optional) The camera position, note that this internally use moveCamera() and is here for convenience
         * @param options.camera.lookat  (Optional) The camera lookat, note that this internally use moveCamera() and is here for convenience
         * @param options.camera.movewithscale  (Optional) moves the camera in world coordinates to maintain its location in user coordinates when a scale is applied to the plot
         * @param options.translation  (Optional) This position becomes the effective origin for the scene for scaling purposes.
         * @param options.renderer  (Optional) The renderer configuration
         * @param options.renderer.clearcolor  (Optional) The renderer clearcolor color
         * @param options.renderer.clearcoloralpha  (Optional) The renderer clearcolor alpha value (0,1).<br>Note that plot must have been created with a clearcoloralpha lesser than 1 to support alpha.
         * @param options.scale  (Optional) The global scale to be applied to the scene graph. This change the relation between user coordinates and world coordinates
         * @param options.ambientlighting  (Optional) JSON object container - Generated
         * @param options.ambientlighting.enabled  (Optional) Determines if the ambient light is enabled
         * @param options.ambientlighting.color  (Optional) The color of the ambient light.
         * @param options.cameralighting  (Optional) JSON object container - Generated
         * @param options.cameralighting.enabled  (Optional) The color of the camera light.
         * @param options.cameralighting.color  (Optional) The color of the camera light.
         * @param options.cameralighting.intensity  (Optional) The intensity of the camera light.
         */
        setOptions(options: any | { modellimits?: THREE.Box3; camera?: any | { type?: geotoolkit3d.Plot.CameraType; controller?: any | { type?: geotoolkit3d.Plot.CameraControllerType|any; options?: any; } ; fov?: number; near?: number; far?: number; minnear?: number; minfar?: number; orthoresize?: geotoolkit3d.Plot.OrthographicResizeMode; position?: THREE.Vector3; lookat?: THREE.Vector3; movewithscale?: boolean; } ; translation?: THREE.Vector3; renderer?: any | { clearcolor?: THREE.Color; clearcoloralpha?: number; } ; scale?: THREE.Vector3; ambientlighting?: any | { enabled?: boolean; color?: string; } ; cameralighting?: any | { enabled?: boolean; color?: string; intensity?: string; } ; } ): this;
        /**
         * Project the given (world) point to virtual screen space in place.<br>
         * @param point  (Required) The point to project in world coordinates.<br>
         */
        project(point: THREE.Vector3): THREE.Vector3;
        /**
         * Adds and initializes the given tool.<br>
         * The tool will be notified it has been added and it will attach its system-event listeners.<br>
         * @param tool  (Required) The tool to initialize and add.
         */
        addTool(tool: geotoolkit3d.tool.AbstractTool): this;
        /**
         * Finds the tool matching the given name.<br>
         * If several tool match this name, the 'first' is returned.<br>
         * @param name  (Required) The name of the tool to look for
         */
        getToolByName(name: string): geotoolkit3d.tool.AbstractTool;
        /**
         * Removes a tool (and disposes it).<br>
         * The given tool will be disposed only if it does belong to this plot.<br>
         * @param tool  (Required) The tool to remove and dispose
         */
        removeTool(tool: geotoolkit3d.tool.AbstractTool): this;
        /**
         * Set the plot as 'dirty' so it gets redrawn during the next render phase.<br>
         * This also propagates an event notifying the plot's listeners that an invalidation has occurred.<br>
         * <br>
         * See {@link geotoolkit3d.Event.Type} for built-in events, custom event types can also be used.<br>
         * @param event  (Optional) The event that should be propagated as the reason of the invalidate
         */
        invalidateObject(event?: geotoolkit3d.Event): this;
        /**
         * Updates the model limits of the Plot by computing it using the current scene state.<br>
         * <br>
         * If 'automodellimits' is enabled, this should be called automatically when some operations occur (adding, removing a node, etc).<br>
         * <br>
         * However it should be called manually if an object in the scene is moved outside of the current modellimits manually.<br>
         * For example by changing its position attribute.<br>
         * <br>
         * The modellimits are used internally to improves accuracy of rendering & picking.<br>
         */
        updateModelLimits(): this;
        /**
         * Gets the WebGLRenderer
         */
        getRenderer(): THREE.WebGLRenderer;
        /**
         * Returns usage statistics like WebGl calls per frame or amount of vertices rendered per frame.
         */
        getUsageStatistics(): any;
        /**
         * Disposes the plot and all its resources.<br>
         * To do so, all objects contained in the scene will be disposed.<br>
         * The tools registered on this plot will also be disposed.<br>
         */
        dispose(): any;
    }
    /**
     * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
     * <br>
     * One could listen to events occurring on any node of the plot by adding a listener/callback on the geotoolkit3d.Plot.<br>
     * Note that you can also send custom events from your nodes to implement your application's logic.<br>
     * See {@link geotoolkit3d.Event.Type} for builtin events.<br>
     */
    class Event {
        /**
         * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
         * <br>
         * One could listen to events occurring on any node of the plot by adding a listener/callback on the geotoolkit3d.Plot.<br>
         * Note that you can also send custom events from your nodes to implement your application's logic.<br>
         * See {@link geotoolkit3d.Event.Type} for builtin events.<br>
         * @param options  (Required) The options
         * @param options.source  (Required) The object that triggered this event (or at least the one passed when creating the event).
         * @param options.type  (Required) The event type, used to distinguish events from each other.
         * @param options.args  (Optional) The event arguments, can be used to provide more details and context about the event.
         */
        constructor(options: any | { source: any; type: string|geotoolkit3d.Event.Type; args?: any; } );
        /**
         * Returns event's type
         */
        getType(): string|geotoolkit3d.Event.Type;
        /**
         * Returns event's source
         */
        getSource(): any;
        /**
         * Returns event's arguments
         */
        getArgs(): any;
        /**
         * disposes this event
         */
        dispose(): any;
        /**
         * List of builtin events fired/listened by the 3D toolkit itself.<br>
         * <br>
         * Those event types will be used by the 3D toolkit when a corresponding event occurs.<br>
         * The toolkit also listen to some of those events to update its state (dirty, size, etc).<br>
         */
        static Type: any;
    }
    /**
     * Utility class offering various functions to manipulate attributes and threejs materials.<br>
     */
    class AttributesUtil {
        /**
         * Utility class offering various functions to manipulate attributes and threejs materials.<br>
         */
        constructor();
    }
    /**
     * Utility class providing glsl code snippets that can be included in shaders.<br>
     */
    class ShaderUtil {
        /**
         * Utility class providing glsl code snippets that can be included in shaders.<br>
         */
        constructor();
    }
    /**
     * Utility class to manage colorprovider in 3D.<br>
     */
    class ColorMapUtil {
        /**
         * Utility class to manage colorprovider in 3D.<br>
         */
        constructor();
    }
    /**
     * This utility class provides functions to deal with common 3D related math problems.
     */
    class Math {
        /**
         * This utility class provides functions to deal with common 3D related math problems.
         */
        constructor();
    }
    module data {
        module loader {
            module vtk {
                /**
                 * This class can parse vtk files and return a comprehensive json object.<br>
                 * <br>
                 * This JSON object can be used to generate Geometries and Object3D.<br>
                 * See {@link geotoolkit3d.data.loader.vtk.VTKLoader~loadCallback loadCallback} for the JSON specification.<br>
                 * See {@link geotoolkit3d.data.loader.vtk.VTKFactory} for a default implementation of VTK_JSON-to-Object3D implementation.<br>
                 * <br>
                 * Refer to the {@link http://www.vtk.org/wp-content/uploads/2015/04/file-formats.pdf VTK-File-specification} for details.<br>
                 * <br>
                 * Note that, for now, only ASCII format is supported.
                 */
                class VTKLoader {
                    /**
                     * This class can parse vtk files and return a comprehensive json object.<br>
                     * <br>
                     * This JSON object can be used to generate Geometries and Object3D.<br>
                     * See {@link geotoolkit3d.data.loader.vtk.VTKLoader~loadCallback loadCallback} for the JSON specification.<br>
                     * See {@link geotoolkit3d.data.loader.vtk.VTKFactory} for a default implementation of VTK_JSON-to-Object3D implementation.<br>
                     * <br>
                     * Refer to the {@link http://www.vtk.org/wp-content/uploads/2015/04/file-formats.pdf VTK-File-specification} for details.<br>
                     * <br>
                     * Note that, for now, only ASCII format is supported.
                     */
                    constructor();
                    /**
                     * Loads the vtk file at the given URL.<br>
                     * <br>
                     * This convenience function exists to mimic THREEJS loaders API.<br>
                     * Internally it uses THREE.XHRLoader and THREE.LoadingManager.<br>
                     * <br>
                     * One could also use directly the function parse() to handle loading the dataset manually/differently.
                     * <br>
                     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
                     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
                     * <br>
                     * @param url  (Required) The url of the VTK file
                     * @param onLoad  (Required) The function called upon success
                     * @param onError  (Required) The function called if an error occurs
                     */
                    load(url: string, onLoad: geotoolkit3d.data.loader.vtk.VTKLoader.loadCallback, onError: Function): any;
                    /**
                     * Parses the content of the given reader.<br>
                     * <br>
                     * This function will asynchronously parse the content of the VTK dataset and build a JSON representation of it.<br>
                     * <br>
                     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
                     * One is free to use either the Promise or the callback to be 'notified' when the parsing has been done.<br>
                     * <br>
                     * @param reader  (Required) The reader
                     * @param onLoad  (Required) callback function
                     * @param onError  (Required) The function called if an error occurs
                     */
                    parse(reader: geotoolkit.util.stream.LineReader, onLoad: geotoolkit3d.data.loader.vtk.VTKLoader.loadCallback, onError: Function): geotoolkit.util.Promise;
                }
                /**
                 * This class can parse vtk files and return a comprehensive json object.<br>
                 * <br>
                 * This object can be used to generate Geometries and Object3D.<br>
                 * <br>
                 * Note that, for now, only ASCII format is supported
                 */
                class VTKFactory {
                    /**
                     * This class can parse vtk files and return a comprehensive json object.<br>
                     * <br>
                     * This object can be used to generate Geometries and Object3D.<br>
                     * <br>
                     * Note that, for now, only ASCII format is supported
                     */
                    constructor();
                    /**
                     * Creates objects 3D from the given JSON (generated by parsing a VTK dataset).<br>
                     * <br>
                     * Note, that this factory will automatically apply a recenter and a rotation (to apply Z = UP paradigm) on the given vertices.<br>
                     * @param json  (Required) The input json object
                     * @param json.data  (Required) The actual data
                     * @param json.data.position  (Optional) The vertices (XYZ)
                     * @param json.data.fielddata  (Optional) The fielddata object if any is present
                     * @param json.data.fielddata.name  (Optional) The fielddata name
                     * @param json.data.fielddata.type  (Optional) The fielddata type
                     * @param json.data.fielddata.arrays  (Optional) The fielddata content
                     * @param json.data.fielddata.arrays0  (Optional) An example of the elements in arrays
                     * @param json.data.fielddata.arrays0.name  (Optional) The name of this fielddata
                     * @param json.data.fielddata.arrays0.stride  (Optional) The stride of this fielddata
                     * @param json.data.fielddata.arrays0.values  (Optional) The values of this fielddata
                     * @param json.data.ATTRIBUTE  (Optional) Some attributes can be present, the name of the actual attribute will be used in place of ATTRIBUTE
                     * @param json.data.ATTRIBUTE.name  (Optional) The name of the attribute
                     * @param json.data.ATTRIBUTE.type  (Optional) The type of the attribute (scalar, vector)
                     * @param json.data.ATTRIBUTE.values  (Optional) The values of the attribute
                     * @param json.data.index  (Optional) The indices for meshes (if any)
                     * @param json.data.lineindex  (Optional) The indices for lines (if any)
                     * @param json.data.pointindex  (Optional) The indices for pointset/pointcloud (if any)
                     * @param json.data.cells  (Optional) The cells information, this is an intermediate representation, might not be necessary to create 3D objects
                     * @param options  (Required) The options to use to customize resulting objects
                     * @param options.mesh  (Optional) The options to use to customize resulting mesh
                     * @param options.mesh.material  (Required) The material to customize resulting mesh
                     * @param options.mesh.position  (Optional) The mesh position
                     * @param options.mesh.scale  (Optional) The mesh scale
                     * @param options.mesh.rotation  (Optional) The mesh rotation
                     * @param options.line  (Optional) The options to use to customize resulting line
                     * @param options.line.material  (Required) The material to customize resulting line
                     * @param options.line.position  (Optional) The line position
                     * @param options.line.scale  (Optional) The line scale
                     * @param options.line.rotation  (Optional) The line rotation
                     */
                    create(json: any | { data: any | { position?: number[]; fielddata?: any | { name?: any; type?: any; arrays?: any[]; arrays0?: any | { name?: string; stride?: number; values?: number[]; } ; } ; ATTRIBUTE?: any | { name?: string; type?: string; values?: number[]; } ; index?: number[]; lineindex?: number[][]; pointindex?: number[]; cells?: number[]; } ; } , options: any | { mesh?: any | { material: THREE.Material; position?: THREE.Vector3; scale?: THREE.Vector3; rotation?: THREE.Vector3; } ; line?: any | { material: THREE.Material; position?: THREE.Vector3; scale?: THREE.Vector3; rotation?: THREE.Vector3; } ; } ): any;
                    /**
                     * Creates a mesh from the given JSON (generated by parsing a VTK dataset).
                     * @param json  (Required) The input json object
                     * @param json.data  (Required) The actual data
                     * @param json.data.position  (Required) The vertices (XYZ)
                     * @param json.data.index  (Required) The indices for meshes
                     * @param options  (Required) The options to use to customize resulting objects
                     * @param options.mesh  (Optional) The options to use to customize resulting mesh
                     * @param options.mesh.material  (Optional) The material to customize resulting mesh
                     * @param options.mesh.position  (Optional) The mesh position
                     * @param options.mesh.scale  (Optional) The mesh scale
                     * @param options.mesh.rotation  (Optional) The mesh rotation
                     */
                    createMesh(json: any | { data: any | { position: number[]; index: number[]; } ; } , options: any | { mesh?: any | { material?: THREE.Material; position?: THREE.Vector3; scale?: THREE.Vector3; rotation?: THREE.Vector3; } ; } ): THREE.Mesh;
                    /**
                     * Creates lines from the given JSON (generated by parsing a VTK dataset).
                     * @param json  (Required) The input json object
                     * @param json.data  (Required) The actual data
                     * @param json.data.position  (Required) The vertices (XYZ)
                     * @param json.data.lineindex  (Required) The indices for the lines
                     * @param options  (Required) The options to use to customize resulting objects
                     * @param options.line  (Optional) The options to use to customize resulting line
                     * @param options.line.material  (Optional) The material to customize resulting line
                     * @param options.line.position  (Optional) The line position
                     * @param options.line.scale  (Optional) The line scale
                     * @param options.line.rotation  (Optional) The line rotation
                     */
                    createLines(json: any | { data: any | { position: number[]; lineindex: number[][]; } ; } , options: any | { line?: any | { material?: THREE.Material; position?: THREE.Vector3; scale?: THREE.Vector3; rotation?: THREE.Vector3; } ; } ): THREE.Line[];
                    /**
                     * Creates a pointcloud from the given JSON (generated by parsing a VTK dataset).<br>
                     * <br>
                     * One can choose what attribute will be used for point size and point color based on their names.<br>
                     * Note that only 'scalar' attributes and FieldData with a stride of 1 can be used.<br>
                     * @param json  (Required) The input json object
                     * @param json.data  (Required) The actual data
                     * @param json.data.position  (Required) The vertices (XYZ)
                     * @param json.data.pointindex  (Optional) The indices for points, if null all vertices will be used
                     * @param options  (Required) The options to use to customize resulting objects
                     * @param options.scale  (Optional) scale for every resulting object
                     * @param options.pointcloud  (Optional) The options to use to customize resulting pointcloud
                     * @param options.pointcloud.attributes  (Optional) The names of the attribute to use.
                     * @param options.pointcloud.attributes.sizes  (Optional) The key for the size attribute
                     * @param options.pointcloud.attributes.value  (Optional) The key for the value attribute
                     * @param options.pointcloud.colorprovider  (Optional) A color provider or a single color in css format
                     * @param options.mesh  (Optional) JSON object container - Generated
                     * @param options.mesh.position  (Optional) The pointcloud position
                     * @param options.mesh.scale  (Optional) The pointcloud scale
                     * @param options.mesh.rotation  (Optional) The pointcloud rotation
                     */
                    createPointcloud(json: any | { data: any | { position: number[]; pointindex?: number[]; } ; } , options: any | { scale?: THREE.Vector3; pointcloud?: any | { attributes?: any | { sizes?: string; value?: string; } ; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; } ; mesh?: any | { position?: THREE.Vector3; scale?: THREE.Vector3; rotation?: THREE.Vector3; } ; } ): geotoolkit3d.scene.pointset.PointCloud;
                }
                module VTKLoader {
                    /**
                     * Callback for load/parse().
                     */
                    type loadCallback = (json: any | { metadata?: any | { dataset?: any | { points?: number; dimensions?: number[]; type?: string; } ; header?: string; title?: string; type?: string; } ; data?: any | { position?: number[]; fielddata?: any | { name?: any; type?: any; arrays?: any[]; arrays0?: any | { name?: string; stride?: number; values?: number[]; } ; } ; ATTRIBUTE?: any | { name?: string; type?: string; values?: number[]; } ; index?: number[]; lineindex?: number[][]; pointindex?: number[]; cells?: number[]; } ; } ) => any;
                }
            }
        }
        module surface {
            /**
             * Parent class for surfaces data.<br>
             * <br>
             * Surface data is responsible of consuming the raw data and converting it to triangles.<br>
             * Those triangles will be stored in {@link THREE.BufferAttribute} as vertices and indices.<br>
             * <br>
             * Inheriting classes should provide data for surface objects through the implementation of getAttributes.<br>
             */
            class AbstractSurfaceData {
                /**
                 * Parent class for surfaces data.<br>
                 * <br>
                 * Surface data is responsible of consuming the raw data and converting it to triangles.<br>
                 * Those triangles will be stored in {@link THREE.BufferAttribute} as vertices and indices.<br>
                 * <br>
                 * Inheriting classes should provide data for surface objects through the implementation of getAttributes.<br>
                 * @param options  (Optional) The options to use to create the surface
                 * @param options.trianglestrip  (Optional) resulting data should be a trianglestrip
                 * @param options.interleaved  (Optional) resulting data should be a interleaved
                 * @param options.bufferpadding  (Optional) resulting interleaved data should leave bufferpadding
                 */
                constructor(options?: any | { trianglestrip?: any; interleaved?: any; bufferpadding?: any; } );
                /**
                 * Returns the vertex/index attributes
                 */
                getAttributes(): {attributes:{position:THREE.BufferAttribute;index:THREE.BufferAttribute;trianglestrip:boolean}}|any;
            }
            /**
             * Surface data made of pillars that can be triangulated.<br>
             * <br>
             * The default triangulation algorithm requires that the given pillars are sorted.<br>
             * It also assumes that there is no overlapping/crossing between pillars.<br>
             * Pillars can have different point count.<br>
             * <br>
             */
            class PillarSurfaceData extends geotoolkit3d.data.surface.AbstractSurfaceData {
                /**
                 * Surface data made of pillars that can be triangulated.<br>
                 * <br>
                 * The default triangulation algorithm requires that the given pillars are sorted.<br>
                 * It also assumes that there is no overlapping/crossing between pillars.<br>
                 * Pillars can have different point count.<br>
                 * <br>
                 * @param options  (Required) The options
                 * @param options.data  (Optional) The data options
                 * @param options.data.pillars  (Optional) An array of fault pillars
                 * @param options.data.pillars.x  (Optional) The x coordinates of a pillar
                 * @param options.data.pillars.y  (Optional) The y coordinates of a pillar
                 * @param options.data.pillars.z  (Optional) The z coordinates of a pillar
                 */
                constructor(options: any | { data?: any | { pillars?: any[]|any | { x?: number[]; y?: number[]; z?: number[]; } ; } ; } );
                /**
                 * Returns the vertex/index attributes
                 */
                getAttributes(): {attributes:{position:THREE.BufferAttribute;index:THREE.BufferAttribute;trianglestrip:boolean}}|any;
            }
            /**
             * Surface data made of an elevation grid that can be triangulated.<br>
             * <br>
             * The grid is expected to have column first:<br>
             * <pre>
             * [(0,0), (1,0), (2,0), (3,0), (0,1), (1,1), (2,1), (3,1), [...], (0,3), (1,3), (2,3), (3,3)]
             * </pre>
             */
            class GridSurfaceData extends geotoolkit3d.data.surface.AbstractSurfaceData {
                /**
                 * Surface data made of an elevation grid that can be triangulated.<br>
                 * <br>
                 * The grid is expected to have column first:<br>
                 * <pre>
                 * [(0,0), (1,0), (2,0), (3,0), (0,1), (1,1), (2,1), (3,1), [...], (0,3), (1,3), (2,3), (3,3)]
                 * </pre>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.width  (Required) The grid width
                 * @param options.data.height  (Required) The grid height
                 * @param options.data.elevation  (Optional) The elevation values to triangulate
                 * @param options.data.nullvalue  (Optional) The value representing a non-value elevation
                 * @param options.data.value  (Optional) optional Value array to instantiate
                 * @param options.data.xmin  (Optional) The grid x start
                 * @param options.data.xstep  (Optional) The grid x step
                 * @param options.data.ymin  (Optional) The grid y start
                 * @param options.data.ystep  (Optional) The grid y step
                 */
                constructor(options: any | { data: any | { width: number; height: number; elevation?: number[]; nullvalue?: number; value?: number[]; xmin?: number; xstep?: number; ymin?: number; ystep?: number; } ; } );
                /**
                 * Returns the vertex/index attributes
                 */
                getAttributes(): {attributes:{position:THREE.BufferAttribute;index:THREE.BufferAttribute;normal:THREE.BufferAttribute;trianglestrip:boolean;zmin:number;zmax:number}}|any;
            }
            /**
             * Surface data that can be triangulated.<br>
             */
            class SurfaceData extends geotoolkit3d.data.surface.AbstractSurfaceData {
                /**
                 * Surface data that can be triangulated.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.x  (Required) The X values to triangulate
                 * @param options.data.y  (Required) The Y values to triangulate
                 * @param options.data.z  (Required) The Z values to triangulate
                 * @param options.data.nullvalue  (Optional) The value representing a non-value elevation
                 * @param options.data.value  (Optional) optional Value array to instantiate
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; nullvalue?: number; value?: number[]; } ; } );
                /**
                 * Returns the vertex/index attributes
                 */
                getAttributes(): {attributes:{position:THREE.BufferAttribute;index:THREE.BufferAttribute;normal:THREE.BufferAttribute;trianglestrip:boolean;zmin:number;zmax:number}}|any;
            }
            /**
             * Surface data made of triangles (vertices and indices).<br>
             */
            class TrimeshSurfaceData extends geotoolkit3d.data.surface.AbstractSurfaceData {
                /**
                 * Surface data made of triangles (vertices and indices).<br>
                 * @param options  (Required) 
                 * @param options.data  (Required) 
                 * @param options.data.xyz  (Required) The vertices values as x, y and elevation
                 * @param options.data.indices  (Required) The triangles indices
                 * @param options.usetrianglestrips  (Required) Defines if the given indices should be used as trianglestrips or regular triangles
                 */
                constructor(options: any | { data: any | { xyz: number[]|THREE.BufferAttribute; indices: number[]|THREE.BufferAttribute; } ; usetrianglestrips: boolean; } );
                /**
                 * Returns the vertex/index attributes
                 */
                getAttributes(): {attributes:{position:THREE.BufferAttribute;index:THREE.BufferAttribute;trianglestrip:boolean}}|any;
            }
            /**
             * Surface data using a heightmap.<br>
             * <br>
             * This surface data object implements a {@link https://en.wikipedia.org/wiki/Heightmap heighmap}.<br>
             * Elevations are stored as normalized values into the given 2D texture.<br>
             */
            class HeightMapSurfaceData extends geotoolkit3d.data.surface.AbstractSurfaceData {
                /**
                 * Surface data using a heightmap.<br>
                 * <br>
                 * This surface data object implements a {@link https://en.wikipedia.org/wiki/Heightmap heighmap}.<br>
                 * Elevations are stored as normalized values into the given 2D texture.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.heightmap  (Required) The elevation map as a texture. Note that it's assumed to be greyscale
                 * @param options.data.xmin  (Optional) The grid x start
                 * @param options.data.xstep  (Optional) The grid x step
                 * @param options.data.ymin  (Optional) The grid y start
                 * @param options.data.ystep  (Optional) The grid y step
                 */
                constructor(options: any | { data: any | { heightmap: THREE.Texture; xmin?: number; xstep?: number; ymin?: number; ystep?: number; } ; } );
                /**
                 * Returns the vertex/index attributes
                 */
                getAttributes(): {attributes:{position:THREE.BufferAttribute;index:THREE.BufferAttribute;trianglestrip:boolean}}|any;
            }
            /**
             * Surface data made of contour lines that can be triangulated.<br>
             */
            class ContourLineData extends geotoolkit3d.data.surface.AbstractSurfaceData {
                /**
                 * Surface data made of contour lines that can be triangulated.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.lines  (Required) An array of contour lines
                 * @param options.data.lines.x  (Required) The x coordinates of the line
                 * @param options.data.lines.y  (Required) The y coordinates of the line
                 * @param options.data.lines.z  (Required) The z coordinate of the line
                 */
                constructor(options: any | { data: any | { lines: any[]|any | { x: number[]; y: number[]; z: number; } ; } ; } );
                /**
                 * Returns the vertex/index attributes
                 */
                getAttributes(): {attributes:{position:THREE.BufferAttribute;index:THREE.BufferAttribute;xmin:number;xmax:number;ymin:number;ymax:number;zmin:number;zmax:number;valuemin:number;valuemax:number;values:number[]}}|any;
            }
        }
    }
    module selection {
        /**
         * Query all nodes from the specified node and do the specified action
         * @param node  (Required) node to start search
         */
        function from(node: geotoolkit3d.scene.Object3D): geotoolkit.selection.NodeQueryBuilder;
    }
    module scene {
        /**
         * Base class of Carnac3D objects.<br>
         * <br>
         * This class extends THREE.Object3D to expose some useful functions and add some new features.<br>
         * It is similar to a CarnacJS Group (has children and holds a transformation that applies to its children).<br>
         * <br>
         * To change the location/size/orientation of an Object3D, refer to THREEJS documentation.<br>
         * > position, scale, rotation/quaternion
         */
        class Object3D extends THREE.Object3D {
            /**
             * Base class of Carnac3D objects.<br>
             * <br>
             * This class extends THREE.Object3D to expose some useful functions and add some new features.<br>
             * It is similar to a CarnacJS Group (has children and holds a transformation that applies to its children).<br>
             * <br>
             * To change the location/size/orientation of an Object3D, refer to THREEJS documentation.<br>
             * > position, scale, rotation/quaternion
             */
            constructor();
            /**
             * Notifies this object and its parent that this object has been invalidated.<br>
             * If this object is in a Plot, it will be marked as dirty and will trigger a rendering cycle.<br>
             * @param event  (Optional) The event to fire
             */
            invalidateObject(event?: geotoolkit3d.Event): any;
            /**
             * This function is called prior to rendering and can update this object's content.<br>
             * <br>
             * It should not trigger any invalidateObject though.<br>
             * Note that it is not necessary nor recommended to explicitly call updateObject on this object's children as updateObject will be called on all nodes present in the scene.<br>
             * <br>
             * This will be executed before the transformations simplification.<br>
             * <br>
             * @param scene  (Required) The scene
             * @param camera  (Required) The camera
             */
            updateObject(scene: THREE.Scene, camera: THREE.Camera): any;
            /**
             * This function is called prior to rendering and can update this object's content.<br>
             * <br>
             * It should not trigger any invalidateObject though.<br>
             * Note that it is not necessary nor recommended to explicitly call beforeRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
             * <br>
             * This will be executed after the transformations simplification.<br>
             * <br>
             * @param scene  (Required) The scene
             * @param camera  (Required) The camera used for this render phase.
             * @param plot  (Required) The 3D plot
             * @param renderer  (Required) The renderer
             */
            beforeRender(scene: THREE.Scene, camera: THREE.Camera, plot: geotoolkit3d.Plot, renderer: THREE.Renderer): any;
            /**
             * Register an object with a dispose() function that needs to be called if this object is disposed.<br>
             * This can be used to reference extra resources used by this object that requires disposing when this object is destroyed.<br>
             * <br>
             * Note that the application code is still responsible of calling the dispose function on the object/scene/plot.<br>
             * @param resource  (Required) A disposable object
             */
            addResource(resource: any): this;
            /**
             * Removes a disposable object from the list of resources.<br>
             * The object will not be disposed if this object is destroyed.<br>
             */
            removeResource(): this;
        }
        /**
         * A material implementing colormap logic through a texture.<br>
         * <br>
         * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
         * This float value (per vertex) will be used ot retrieve a color in the given colorprovider (converted to a colormap texture).<br>
         * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
         * <br>
         * If the given colorprovider is null then only the single color will be used.<br>
         * <br>
         */
        class MeshColorMapBasicMaterial extends THREE.ShaderMaterial {
            /**
             * A material implementing colormap logic through a texture.<br>
             * <br>
             * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
             * This float value (per vertex) will be used ot retrieve a color in the given colorprovider (converted to a colormap texture).<br>
             * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
             * <br>
             * If the given colorprovider is null then only the single color will be used.<br>
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
         * A material implementing Lambertertian reflectance and colormap logic through a texture.<br>
         * <br>
         * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
         * This float value (per vertex) will be used ot retrieve a color in the given colorprovider (converted to a colormap texture).<br>
         * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
         * Lighting will be applied to this color using the same algorithm that THRRE.LambertMeshMaterial.<br>
         * <br>
         * If the given colorprovider is null then only the single color will be used (lighting still applies).<br>
         * <br>
         */
        class MeshColorMapLambertMaterial extends THREE.ShaderMaterial {
            /**
             * A material implementing Lambertertian reflectance and colormap logic through a texture.<br>
             * <br>
             * This material requires the associated THREE.BufferGeometry to have a float attribute named upon ShaderUtil.COLORMAPVALUES_ATTRIBUTE_NAME value.<br>
             * This float value (per vertex) will be used ot retrieve a color in the given colorprovider (converted to a colormap texture).<br>
             * The resulting color will be multiplied by the optional given static color (defaults to white unless explicitly set).<br>
             * Lighting will be applied to this color using the same algorithm that THRRE.LambertMeshMaterial.<br>
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
         * Parent class of schematic objects
         */
        class AnnotationBase extends geotoolkit3d.scene.Object3D {
            /**
             * Parent class of schematic objects
             * @param options  (Optional) The options
             * @param options.title  (Optional) The text to display
             * @param options.titledistancefactor  (Optional) A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
             * @param options.titlestyle  (Optional) The text attributes
             * @param options.linestyle  (Optional) The segment connector attributes
             * @param options.mode  (Optional) The display strategy for the segment origin
             * @param options.anchorpoint  (Optional) the point to anchor the annotation to
             */
            constructor(options?: any | { title?: string; titledistancefactor?: number; titlestyle?: geotoolkit.attributes.TextStyle; linestyle?: geotoolkit.attributes.LineStyle; mode?: geotoolkit3d.scene.AnnotationBase.Mode; anchorpoint?: THREE.Vector3; } );
            /**
             * Sets the text to display
             * @param title  (Required) title
             */
            setTitle(title: string): this;
            /**
             * Gets the text to display
             */
            getTitle(): string;
            /**
             * Sets a factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol
             * @param titleDistanceFactor  (Required) title distance factor
             */
            setTitleDistanceFactor(titleDistanceFactor: number): this;
            /**
             * Gets a factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol
             */
            getTitleDistanceFactor(): number;
            /**
             * Sets text attributes
             * @param titleStyle  (Required) title style
             */
            setTitleStyle(titleStyle: geotoolkit.attributes.TextStyle): this;
            /**
             * Gets text attributes
             */
            getTitleStyle(): geotoolkit.attributes.TextStyle;
            /**
             * Sets the segment connector attributes
             * @param lineStyle  (Required) line style
             */
            setLineStyle(lineStyle: geotoolkit.attributes.LineStyle): this;
            /**
             * Gets the segment connector attributes
             */
            getLineStyle(): geotoolkit.attributes.LineStyle;
            /**
             * Sets the display strategy for the segment origin
             * @param mode  (Required) mode
             */
            setMode(mode: geotoolkit3d.scene.AnnotationBase.Mode): this;
            /**
             * Gets the display strategy for the segment origin
             */
            getMode(): geotoolkit3d.scene.AnnotationBase.Mode;
            /**
             * Sets the anchor-point of the annotation, this is needed in case of a single annotation not contained by a
             * schematic for example.
             * @param anchorPoint  (Required) the point to anchor the annotation to
             */
            setAnchorPoint(anchorPoint: THREE.Vector3): this;
            /**
             * Gets the point to anchor the annotation to
             */
            getAnchorPoint(): THREE.Vector3;
            /**
             * Sets options
             * @param options  (Optional) The options
             * @param options.title  (Optional) The text to display
             * @param options.titledistancefactor  (Optional) A factor applied when computing the title position. A value greater than 1 means the title will be farther from the symbol.
             * @param options.titlestyle  (Optional) The text attributes
             * @param options.linestyle  (Optional) The segment connector attributes
             * @param options.mode  (Optional) The display strategy for the segment origin
             * @param options.anchorpoint  (Optional) the point to anchor the annotation to
             */
            setOptions(options?: any | { title?: string; titledistancefactor?: number; titlestyle?: geotoolkit.attributes.TextStyle; linestyle?: geotoolkit.attributes.LineStyle; mode?: geotoolkit3d.scene.AnnotationBase.Mode; anchorpoint?: THREE.Vector3; } ): this;
            /**
             * Gets options
             */
            getOptions(): {options:{title:string;titledistancefactor:number;titlestyle:geotoolkit.attributes.TextStyle;linestyle:geotoolkit.attributes.LineStyle;mode:geotoolkit3d.scene.AnnotationBase.Mode;anchorpoint:THREE.Vector3}}|any;
            /**
             * Enum of display strategy.<br>
             * <br>
             * The functions provided through this enum defines how the line linking the annotation text to the annotated object will be positioned.<br>
             */
            static Mode: any;
        }
        /**
         * This class implements text as a 2D sprite.<br>
         * A 2D text is a text that will always face the camera and that is horizontal.<br>
         * Internally it uses a texture created using a regular canvas.<br>
         * <br>
         * It also offers a 'fixed size' mode that force the text to be always the same size on screen.<br>
         * Note that this mode introduces some blurriness as the texture is rescaled by the graphic card on the fly.<br>
         */
        class Text2d extends THREE.Sprite {
            /**
             * This class implements text as a 2D sprite.<br>
             * A 2D text is a text that will always face the camera and that is horizontal.<br>
             * Internally it uses a texture created using a regular canvas.<br>
             * <br>
             * It also offers a 'fixed size' mode that force the text to be always the same size on screen.<br>
             * Note that this mode introduces some blurriness as the texture is rescaled by the graphic card on the fly.<br>
             * @param text  (Required) text
             * @param options  (Optional) options object
             * @param options.style  (Optional) text style
             * @param options.font  (Optional) font
             * @param options.color  (Optional) text color
             * @param options.issizeindevice  (Optional) True if the text should always be drawn with the same size, no matter of how far it is
             */
            constructor(text: string, options?: any | { style?: geotoolkit.attributes.TextStyle; font?: string; color?: string|geotoolkit.util.RgbaColor; issizeindevice?: boolean; } );
            /**
             * Gets text
             */
            getText(): string;
            /**
             * Sets text
             * @param text  (Required) text
             */
            setText(text: string): this;
            /**
             * Gets text style
             */
            getTextStyle(): geotoolkit.attributes.TextStyle;
            /**
             * Sets text style
             * @param textStyle  (Required) text style
             */
            setTextStyle(textStyle: geotoolkit.attributes.TextStyle): this;
            /**
             * The given xyz vector will be used when computing the text location after scaling.<br>
             * It will translate the text in the given direction by half the text size.<br>
             * 
             * finalPosition = position + anchorOffsetRatio * (sizeInDevice/2 + offsetInDevice)
             * @param ratio  (Required) The anchor offset factor to be applied when computing offset
             */
            setAnchorOffsetRatio(ratio: THREE.Vector3): this;
            /**
             * The given xyz vector will be used when computing the text location after scaling.<br>
             * It will be added to the offset value.<br>
             * 
             * finalPosition = position + anchorOffsetRatio * (sizeInDevice/2 + offsetInDevice)
             * @param offset  (Required) The anchor offset in device to be applied when computing offset
             */
            setAnchorOffset(offset: THREE.Vector2): this;
        }
        /**
         * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
         */
        class Event {
            /**
             * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
             */
            constructor();
        }
        module grid {
            /**
             * A 3D grid object.<br>
             * <br>
             * This object provides a shape that can be used to display axis/grids in a 3D scene.<br>
             * The grid is composed of 6 planes that can be made visible independently, see {@link geotoolkit3d.scene.grid.Grid.Mode}.<br>
             * <br>
             * The grid location and size can be configured independently of its labels.<br>
             * The actual values displayed and the location/size of the grid is left to the calling code.<br>
             * <br>
             * To do so, the grid actual location and size can be configured through 'start/end'.<br>
             * And its labels can be configured through 'modelstart/model/end'.<br>
             * <br>
             * grid planes are made of grid axis (borders) and grid lines (intermediate ticks).<br>
             */
            class Grid extends geotoolkit3d.scene.Object3D {
                /**
                 * A 3D grid object.<br>
                 * <br>
                 * This object provides a shape that can be used to display axis/grids in a 3D scene.<br>
                 * The grid is composed of 6 planes that can be made visible independently, see {@link geotoolkit3d.scene.grid.Grid.Mode}.<br>
                 * <br>
                 * The grid location and size can be configured independently of its labels.<br>
                 * The actual values displayed and the location/size of the grid is left to the calling code.<br>
                 * <br>
                 * To do so, the grid actual location and size can be configured through 'start/end'.<br>
                 * And its labels can be configured through 'modelstart/model/end'.<br>
                 * <br>
                 * grid planes are made of grid axis (borders) and grid lines (intermediate ticks).<br>
                 * @param options  (Required) The options
                 * @param options.start  (Optional) The start location of the grid in world coordinates
                 * @param options.end  (Optional) The end location of the grid in world coordinates
                 * @param options.modelstart  (Optional) The displayed value's start
                 * @param options.modelend  (Optional) The displayed value's end
                 * @param options.counts  (Optional) The grid tick counts (at least 2,2,2)
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
                 * @param options.title.distance  (Optional) Factor (between 0 and 1) used to determine title position compared to the axis. (0 being closer to the axis)
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
                constructor(options: any | { start?: THREE.Vector3; end?: THREE.Vector3; modelstart?: THREE.Vector3; modelend?: THREE.Vector3; counts?: THREE.Vector3; axis?: any | { linestyles?: any | { x?: geotoolkit.attributes.LineStyle; y?: geotoolkit.attributes.LineStyle; z?: geotoolkit.attributes.LineStyle; } ; textstyles?: any | { x?: geotoolkit.attributes.TextStyle; y?: geotoolkit.attributes.TextStyle; z?: geotoolkit.attributes.TextStyle; } ; formatters?: any | { x?: Function; y?: Function; z?: Function; } ; } ; title?: any | { distance?: number; texts?: any | { x?: string; y?: string; z?: string; } ; textstyles?: any | { x?: geotoolkit.attributes.TextStyle; y?: geotoolkit.attributes.TextStyle; z?: geotoolkit.attributes.TextStyle; } ; } ; grid?: any | { linestyles?: any | { x?: geotoolkit.attributes.LineStyle; y?: geotoolkit.attributes.LineStyle; z?: geotoolkit.attributes.LineStyle; } ; } ; mode?: geotoolkit3d.scene.grid.Grid.Mode; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.start  (Optional) The start location of the grid in world coordinates
                 * @param options.end  (Optional) The end location of the grid in world coordinates
                 * @param options.modelstart  (Optional) The displayed value's start
                 * @param options.modelend  (Optional) The displayed value's end
                 * @param options.counts  (Optional) The grid tick counts (at least 2,2,2)
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
                setOptions(options: any | { start?: THREE.Vector3; end?: THREE.Vector3; modelstart?: THREE.Vector3; modelend?: THREE.Vector3; counts?: THREE.Vector3; axis?: any | { linestyles?: any | { x?: geotoolkit.attributes.LineStyle; y?: geotoolkit.attributes.LineStyle; z?: geotoolkit.attributes.LineStyle; } ; textstyles?: any | { x?: geotoolkit.attributes.TextStyle; y?: geotoolkit.attributes.TextStyle; z?: geotoolkit.attributes.TextStyle; } ; formatters?: any | { x?: Function; y?: Function; z?: Function; } ; } ; title?: any | { texts?: any | { x?: string; y?: string; z?: string; } ; textstyles?: any | { x?: geotoolkit.attributes.TextStyle; y?: geotoolkit.attributes.TextStyle; z?: geotoolkit.attributes.TextStyle; } ; } ; grid?: any | { linestyles?: any | { x?: geotoolkit.attributes.LineStyle; y?: geotoolkit.attributes.LineStyle; z?: geotoolkit.attributes.LineStyle; } ; } ; mode?: geotoolkit3d.scene.grid.Grid.Mode; } ): any;
                /**
                 * Return the grid's location 'start'
                 */
                getStart(): THREE.Vector3;
                /**
                 * Return the grid's location 'end'
                 */
                getEnd(): THREE.Vector3;
                /**
                 * Return the grid's mode
                 */
                getMode(): geotoolkit3d.scene.grid.Grid.Mode;
                /**
                 * Return the grid's tick counts
                 */
                getCounts(): THREE.Vector3|any;
                /**
                 * Return the grid's 'modelstart'
                 */
                getModelStart(): THREE.Vector3|any;
                /**
                 * Return the grid's 'modelend'
                 */
                getModelEnd(): THREE.Vector3|any;
                /**
                 * Enum of Plane display strategy.<br>
                 * <br>
                 * The functions provided by this enum are used to define which plane of the grid should be visible.<br>
                 * The grid always has 6 planes (one for each face), those strategies determine if some plane should be hidden to let the user see
                 * through it.<br>
                 */
                static Mode: any;
                /**
                 * This function is called prior to rendering and can update this object's content.<br>
                 * <br>
                 * It should not trigger any invalidateObject though.<br>
                 * Note that it is not necessary nor recommended to explicitly call beforeRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
                 * <br>
                 * This will be executed after the transformations simplification.<br>
                 * <br>
                 * @param scene  (Required) The scene
                 * @param camera  (Required) The camera used for this render phase.
                 * @param plot  (Required) The 3D plot
                 * @param renderer  (Required) The renderer
                 */
                beforeRender(scene: THREE.Scene, camera: THREE.Camera, plot: geotoolkit3d.Plot, renderer: THREE.Renderer): any;
            }
            /**
             * A polar grid for 3D.<br>
             * <br>
             * The grid can be positioned in space using its position attribute.<br>
             * The labels/ticks displayed are controlled trough 'modelCenter' and 'modelSize'
             * <br>
             */
            class PolarGrid extends geotoolkit3d.scene.Object3D {
                /**
                 * A polar grid for 3D.<br>
                 * <br>
                 * The grid can be positioned in space using its position attribute.<br>
                 * The labels/ticks displayed are controlled trough 'modelCenter' and 'modelSize'
                 * <br>
                 * @param options  (Required) The options
                 * @param options.modelcenter  (Optional) The center of the polar grid's model
                 * @param options.modelsize  (Optional) The size of the polar grid's model
                 * @param options.count  (Optional) The grid tick count
                 * @param options.axis  (Optional) The axis options
                 * @param options.axis.linestyle  (Optional) Defines the axis linestyle. Note that linestyle.width is not supported by windows-webgl.
                 * @param options.axis.textstyle  (Optional) The axis textstyle
                 * @param options.axis.formatter  (Optional) Function responsible of formatting the axis text values
                 * @param options.grid  (Optional) The grid options
                 * @param options.grid.linestyle  (Optional) Defines the grid linestyle. Note that linestyle.width is not supported by windows-webgl.
                 */
                constructor(options: any | { modelcenter?: number; modelsize?: number; count?: number; axis?: any | { linestyle?: geotoolkit.attributes.LineStyle; textstyle?: geotoolkit.attributes.TextStyle; formatter?: Function; } ; grid?: any | { linestyle?: geotoolkit.attributes.LineStyle; } ; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.modelcenter  (Optional) The center of the polar grid's model
                 * @param options.modelsize  (Optional) The size of the polar grid's model
                 * @param options.count  (Optional) The grid tick count
                 * @param options.axis  (Optional) The axis options
                 * @param options.axis.linestyle  (Optional) Defines the axis linestyle. Note that linestyle.width is not supported by windows-webgl.
                 * @param options.axis.textstyle  (Optional) The axis textstyle
                 * @param options.axis.formatter  (Optional) Function responsible of formatting the axis text values
                 * @param options.grid  (Optional) The grid options
                 * @param options.grid.linestyle  (Optional) Defines the grid linestyle. Note that linestyle.width is not supported by windows-webgl.
                 */
                setOptions(options: any | { modelcenter?: number; modelsize?: number; count?: number; axis?: any | { linestyle?: geotoolkit.attributes.LineStyle; textstyle?: geotoolkit.attributes.TextStyle; formatter?: Function; } ; grid?: any | { linestyle?: geotoolkit.attributes.LineStyle; } ; } ): any;
                /**
                 * Return the grid's tick counts
                 */
                getCount(): number;
                /**
                 * Return the grid's 'modelCenter'
                 */
                getModelCenter(): THREE.Vector3;
                /**
                 * Return the grid's 'modelSize'
                 */
                getModelSize(): THREE.Vector3;
            }
            module GridPlane {
                module Plane {
                    /**
                     * The right plane
                     */
                    var right: string;
                    /**
                     * The right plane
                     */
                    var left: string;
                    /**
                     * The top plane
                     */
                    var top: string;
                    /**
                     * The bottom plane
                     */
                    var bottom: string;
                    /**
                     * The front plane
                     */
                    var front: string;
                    /**
                     * The back plane
                     */
                    var back: string;
                }
            }
            module Grid {
                /**
                 * Enum of Plane display strategy.<br>
                 * <br>
                 * The functions provided by this enum are used to define which plane of the grid should be visible.<br>
                 * The grid always has 6 planes (one for each face), those strategies determine if some plane should be hidden to let the user see
                 * through it.<br>
                 */
                interface Mode {
                    /**
                     * Always show all grid planes
                     */
                    box: Function;
                    /**
                     * Show grid planes that do not overlap any other grid planes.
                     */
                    openbox: Function;
                    /**
                     * Show only the grid planes that are facing the camera (IE: only and at most 3 planes visible at all times)
                     */
                    back: Function;
                }
            }
        }
        module animation {
            /**
             * This class manage animations in the scene.<br>
             * <br>
             * It provides an easy way to insert animations and can handle several animations at a time.<br>
             * Note that this AnimationMechanism is focused on providing smooth animation while keeping the resources usage as low as possible.<br>
             * Therefore the animation intermediate steps count is not guaranteed.<br>
             * <br>
             * Once added, an animation will be started and will be executed for each frame until it returns 'true'.<br>
             * Then it will be discarded.<br>
             * <br>
             * This manager will optimize the animations to run around 60 fps (if possible), it may pause animation when the plot is not visible.<br>
             * <br>
             * To use this AnimationManager, insert it into the scene like a regular node.<br>
             * Then push an animation function in it.<br>
             * <br>
             * Note that this class is not responsible for actually interpolating values between steps.<br>
             * Client code should implement the logic to compute intermediate steps.<br>
             */
            class AnimationManager extends geotoolkit3d.scene.Object3D {
                /**
                 * This class manage animations in the scene.<br>
                 * <br>
                 * It provides an easy way to insert animations and can handle several animations at a time.<br>
                 * Note that this AnimationMechanism is focused on providing smooth animation while keeping the resources usage as low as possible.<br>
                 * Therefore the animation intermediate steps count is not guaranteed.<br>
                 * <br>
                 * Once added, an animation will be started and will be executed for each frame until it returns 'true'.<br>
                 * Then it will be discarded.<br>
                 * <br>
                 * This manager will optimize the animations to run around 60 fps (if possible), it may pause animation when the plot is not visible.<br>
                 * <br>
                 * To use this AnimationManager, insert it into the scene like a regular node.<br>
                 * Then push an animation function in it.<br>
                 * <br>
                 * Note that this class is not responsible for actually interpolating values between steps.<br>
                 * Client code should implement the logic to compute intermediate steps.<br>
                 */
                constructor();
                /**
                 * Check for an animation in the manager<br>
                 * @param animation  (Required) A function that will be called by the AnimationManager
                 */
                checkAnimation(animation: Function): boolean;
                /**
                 * remove an animation from the manager<br>
                 * @param animation  (Required) function that will be removed from the manager
                 */
                removeAnimation(animation: Function): any;
                /**
                 * Add a animation function that will be called to update the animation state.<br>
                 * <br>
                 * It will be called before the rendering occurs.<br>
                 * The provided function is responsible of animating one or several objects.<br>
                 * <br>
                 * If the animation has ended, the function should return True to notify the AnimationManager to remove/discard this animation.<br>
                 * Otherwise it will be called indefinitely.<br>
                 * @param animation  (Required) A function that will be called by the AnimationManager
                 */
                addAnimation(animation: Function): this;
            }
        }
        module compass {
            /**
             * A 3D compass.<br>
             * <br>
             * This class adds a canvas in the given HTML element that will be used to render a 3D compass shape.<br>
             * <br>
             * The compass will rotate the camera to look at the compass shape in the same direction that the parent plot is looking.<br>
             * The compass shape itself can be static.<br>
             */
            class Compass {
                /**
                 * A 3D compass.<br>
                 * <br>
                 * This class adds a canvas in the given HTML element that will be used to render a 3D compass shape.<br>
                 * <br>
                 * The compass will rotate the camera to look at the compass shape in the same direction that the parent plot is looking.<br>
                 * The compass shape itself can be static.<br>
                 * @param options  (Required) The options
                 * @param options.container  (Optional) The div element in which the canvas will be created and added.
                 * @param options.canvas  (Optional) The canvas element to render to.
                 * @param options.renderer  (Optional) renderer options for the compass
                 * @param options.renderer.parameters  (Optional) renderer parameters for the compass
                 * @param options.visible  (Optional) The visibility
                 */
                constructor(options: any | { container?: HTMLElement; canvas?: HTMLElement; renderer?: any | { parameters?: any; } ; visible?: boolean; } );
                /**
                 * Return the compass shape
                 */
                getCompassObject(): THREE.Object3D;
                /**
                 * Sets the compass shape
                 * @param newObject  (Required) The new compass shape
                 */
                setCompassObject(newObject: THREE.Object3D): this;
            }
            /**
             * A compass made of a red/green arrow pointing north.<br>
             */
            class CompassArrow extends geotoolkit3d.scene.Object3D {
                /**
                 * A compass made of a red/green arrow pointing north.<br>
                 * @param options  (Optional) The options
                 * @param options.origin  (Optional) The origin of the arrow in normalized coordinates
                 * @param options.direction  (Optional) The direction of the arrow in normalized coordinates
                 * @param options.topcolor  (Optional) Optional color for top of the compass arrow
                 * @param options.bottomcolor  (Optional) Optional color for bottom of the compass arrow
                 * @param options.outlinecolor  (Optional) Optional color for compass arrow outline
                 */
                constructor(options?: any | { origin?: THREE.Vector3; direction?: THREE.Vector3; topcolor?: THREE.Color; bottomcolor?: THREE.Color; outlinecolor?: THREE.Color; } );
            }
            /**
             * A compass made of 3 colored lines.<br>
             * <br>
             * <ul>
             *     <li> X axis: Red</li>
             *     <li> Y axis: Green</li>
             *     <li> Z axis: blue</li>
             * </ul>
             */
            class CompassAxis extends geotoolkit3d.scene.Object3D {
                /**
                 * A compass made of 3 colored lines.<br>
                 * <br>
                 * <ul>
                 *     <li> X axis: Red</li>
                 *     <li> Y axis: Green</li>
                 *     <li> Z axis: blue</li>
                 * </ul>
                 * @param options  (Optional) The options
                 * @param options.zaxiscolor  (Optional) Optional color for Z axis
                 * @param options.yaxiscolor  (Optional) Optional color for Y axis
                 * @param options.xaxiscolor  (Optional) Optional color for X axis
                 */
                constructor(options?: any | { zaxiscolor?: THREE.Color; yaxiscolor?: THREE.Color; xaxiscolor?: THREE.Color; } );
            }
        }
        module pointset {
            /**
             * PointSet is a set of 3D coordinates rendered as symbols.<br>
             * <br>
             * It's similar to a PointCloud and share most of the same API (even if there is no inheritance between them).<br>
             * The main difference between PointSet and PointCloud is that a PointSet uses real 3D mesh for each symbol.<br>
             * As a consequence, the rendered symbols are cleaner and sharper.<br>
             * However, it consume more memory and and more GPU time per frame.<br>
             * <br>
             * For large datasets, it's recommended to use PointCloud.<br>
             */
            class PointSet extends geotoolkit3d.scene.Object3D {
                /**
                 * PointSet is a set of 3D coordinates rendered as symbols.<br>
                 * <br>
                 * It's similar to a PointCloud and share most of the same API (even if there is no inheritance between them).<br>
                 * The main difference between PointSet and PointCloud is that a PointSet uses real 3D mesh for each symbol.<br>
                 * As a consequence, the rendered symbols are cleaner and sharper.<br>
                 * However, it consume more memory and and more GPU time per frame.<br>
                 * <br>
                 * For large datasets, it's recommended to use PointCloud.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.x  (Required) The x values
                 * @param options.data.y  (Required) The y values
                 * @param options.data.z  (Required) The elevation values
                 * @param options.data.sizes  (Optional) Sizes of the symbols, can be an array or a single value
                 * @param options.data.values  (Optional) A value attribute used for coloring the symbols
                 * @param options.symbol  (Optional) The symbol from the enum or a function that creates a THREE.Geometry
                 * @param options.symbolminsize  (Optional) The size of the symbol in pixels/model for the smallest value
                 * @param options.symbolmaxsize  (Optional) The size of the symbol in pixels/model for the biggest value
                 * @param options.symbolsizeisindevice  (Optional) True if the symbol size should only depend of their value, ignores the projection and any scale.
                 * @param options.inverseplot  (Optional) True if the symbol should not scale based on the plot scale, should not be used with .
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 * @param options.opacity  (Optional) The symbols opacity
                 * @param options.precision  (Optional) This factor is used to determine how many triangles will be used for each symbol
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; sizes?: number[]|number; values?: number[]|number; } ; symbol?: geotoolkit3d.scene.pointset.PointSet.Symbol|Function; symbolminsize?: number; symbolmaxsize?: number; symbolsizeisindevice?: boolean; inverseplot?: boolean; colorprovider?: geotoolkit.util.ColorProvider|string; opacity?: number; precision?: number; } );
                /**
                 * Enum of symbols.<br>
                 * <br>
                 * The functions provided by this enum are responsible of loading/creating a Three.Geometry that will be used to display a symbol in 3D.
                 */
                static Symbol: any;
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.symbolminsize  (Optional) The size of the symbol in pixels/model for the smallest value
                 * @param options.symbolmaxsize  (Optional) The size of the symbol in pixels/model for the biggest value
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 * @param options.opacity  (Optional) The symbols opacity
                 */
                setOptions(options: any | { symbolminsize?: number; symbolmaxsize?: number; colorprovider?: geotoolkit.util.ColorProvider|string; opacity?: number; } ): this;
                /**
                 * Changes the visibility of a point
                 * @param index  (Required) The point index
                 * @param visibility  (Required) The new visibility state
                 */
                setPointVisible(index: number, visibility: boolean): this;
            }
            /**
             * PointCloud is a set of 3D coordinates rendered as symbols.<br>
             * <br>
             * It's similar to a PointSet and share most of the same API with it (even if they don't share a common parent interface).<br>
             * The main difference between PointSet and PointCloud is that a PointCloud can handle larger sets of data.<br>
             * However it uses BumpMapping to emulate the symbols which lowers the quality of the rendering of each symbol.<br>
             * <br>
             * For large datasets, it's recommended to use PointCloud.<br>
             */
            class PointCloud extends geotoolkit3d.scene.Object3D {
                /**
                 * PointCloud is a set of 3D coordinates rendered as symbols.<br>
                 * <br>
                 * It's similar to a PointSet and share most of the same API with it (even if they don't share a common parent interface).<br>
                 * The main difference between PointSet and PointCloud is that a PointCloud can handle larger sets of data.<br>
                 * However it uses BumpMapping to emulate the symbols which lowers the quality of the rendering of each symbol.<br>
                 * <br>
                 * For large datasets, it's recommended to use PointCloud.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Required) The data options
                 * @param options.data.x  (Required) The x values
                 * @param options.data.y  (Required) The y values
                 * @param options.data.z  (Required) The elevation values
                 * @param options.data.xyz  (Optional) The x, y and z values already converted to a single xyz Float32Array.
                 * @param options.data.visible  (Optional) The visibility of each point
                 * @param options.data.sizes  (Optional) An attribute used to compute the size of the symbols on screen, can be an array or a single value
                 * @param options.data.sizemin  (Optional) An optional minimum to use for 'sizes' normalization
                 * @param options.data.sizemax  (Optional) An optional maximum to use for 'sizes' normalization
                 * @param options.data.values  (Optional) A value attribute used for coloring the symbols
                 * @param options.symbol  (Optional) The symbol from the enum or a THREE.Texture
                 * @param options.symbolminsize  (Optional) The size of the symbol in pixels for the smallest value
                 * @param options.symbolmaxsize  (Optional) The size of the symbol in pixels for the biggest value
                 * @param options.alphatest  (Optional) The alpha value to use for sharpness correction, the bigger the 'sharper' [0,1].
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 */
                constructor(options: any | { data: any | { x: number[]; y: number[]; z: number[]; xyz?: Float32Array; visible?: boolean[]; sizes?: number[]|number; sizemin?: number; sizemax?: number; values?: number[]|number; } ; symbol?: geotoolkit3d.scene.pointset.PointCloud.Symbol|THREE.Texture; symbolminsize?: number; symbolmaxsize?: number; alphatest?: number; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; } );
                /**
                 * Enum of builtin symbols.<br>
                 * <br>
                 * The functions provided by this enum are responsible of loading/creating a bump mapping Texture that will be used to display a symbol in 3D.
                 */
                static Symbol: any;
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.data  (Optional) JSON object container - Generated
                 * @param options.data.values  (Optional) A value attribute used for coloring the symbols
                 * @param options.data.sizes  (Optional) An attribute used to compute the size of the symbols on screen, can be an array or a single value
                 * @param options.data.sizemin  (Optional) An optional minimum to use for 'sizes' normalization (used only if new sizes are provided)
                 * @param options.data.sizemax  (Optional) An optional maximum to use for 'sizes' normalization (used only if new sizes are provided)
                 * @param options.data.visible  (Optional) An attribute used to turn on/off visibility of points
                 * @param options.symbolminsize  (Optional) The symbols minimum size, used to compute the final symbol size on screen (based on the 'sizes' attributes)
                 * @param options.symbolmaxsize  (Optional) The symbols maximum size, used to compute the final symbol size on screen (based on the 'sizes' attributes)
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 * @param options.alphatest  (Optional) The alpha value to use for sharpness correction, the bigger the 'sharper' [0,1].
                 */
                setOptions(options: any | { data?: any | { values?: number[]|number; sizes?: number[]|number; sizemin?: number; sizemax?: number; visible?: boolean[]|boolean; } ; symbolminsize?: number; symbolmaxsize?: number; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; alphatest?: number; } ): this;
                /**
                 * Changes the visibility of a point
                 * @param index  (Required) The point index
                 * @param visibility  (Required) The new visibility of the point
                 */
                setPointVisible(index: number, visibility: boolean): any;
                /**
                 * Set per point options, note that it's more efficient to use setOptions() to modify large ensemble of points.
                 * @param index  (Required) The index of the point to edit
                 * @param options  (Required) The options
                 * @param options.visible  (Optional) The visibility of the point
                 * @param options.size  (Optional) The size of the point
                 * @param options.value  (Optional) The value of the point (used for color)
                 */
                setPointOptions(index: number, options: any | { visible?: boolean; size?: number; value?: number; } ): this;
                /**
                 * Get the attributes of a point at the given index.<br>
                 * <pre>
                 *     {
                 *      'visible': {boolean},
                 *      'size': {number},
                 *      'value': {number}
                 * </pre>
                 */
                getPointOptions(): any;
            }
            module PointSet {
                /**
                 * Enum of symbols.<br>
                 * <br>
                 * The functions provided by this enum are responsible of loading/creating a Three.Geometry that will be used to display a symbol in 3D.
                 */
                interface Symbol {
                    /**
                     * A sphere symbol
                     */
                    sphere: Function;
                    /**
                     * A cube symbol
                     */
                    cube: Function;
                    /**
                     * A pyramid symbol
                     */
                    pyramid: Function;
                }
            }
            module PointCloud {
                /**
                 * Enum of builtin symbols.<br>
                 * <br>
                 * The functions provided by this enum are responsible of loading/creating a bump mapping Texture that will be used to display a symbol in 3D.
                 */
                interface Symbol {
                    /**
                     * A sphere symbol
                     */
                    sphere: Function;
                    /**
                     * A cube symbol
                     */
                    cube: Function;
                }
            }
        }
        module ellipse {
            /**
             * A filled ellipse geometry.<br>
             * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
             */
            class FilledEllipseGeometry extends THREE.Geometry {
                /**
                 * A filled ellipse geometry.<br>
                 * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
                 */
                constructor();
            }
            /**
             * A ellipse geometry to be used with THREE.Line.<br>
             * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
             */
            class EllipseGeometry extends THREE.Geometry {
                /**
                 * A ellipse geometry to be used with THREE.Line.<br>
                 * Use mesh's scale&position&rotation to change the ellipse location&shape.<br>
                 */
                constructor();
            }
        }
        module surface {
            /**
             * A Surface 3D object.<br>
             * <br>
             * This object represents a 3D surface with an optional attribute used for coloring.<br>
             * The surface's geometry is defined by the given SurfaceData.<br>
             * <br>
             * The surface will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
             * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
             * <br>
             */
            class Surface extends geotoolkit3d.scene.Object3D {
                /**
                 * A Surface 3D object.<br>
                 * <br>
                 * This object represents a 3D surface with an optional attribute used for coloring.<br>
                 * The surface's geometry is defined by the given SurfaceData.<br>
                 * <br>
                 * The surface will contains holes whenever the given attribute or elevation is equals to nullvalue.<br>
                 * Note that the current implementation still generates the vertices for those points but abstain itself from rendering them.<br>
                 * <br>
                 * @param options  (Required) The options to use to create the surface
                 * @param options.data  (Required) The data to use to create the surface
                 * @param options.data.surface  (Required) The surface geometry data object
                 * @param options.data.values  (Optional) The attribute values used to colorize the surface
                 * @param options.data.nullvalue  (Optional) The attribute nullvalue to introduce holes in the surface
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 */
                constructor(options: any | { data: any | { surface: geotoolkit3d.data.surface.AbstractSurfaceData; values?: number[]; nullvalue?: number; } ; colorprovider?: geotoolkit.util.ColorProvider|string|THREE.Color; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options to change
                 * @param options.data  (Optional) JSON object container - Generated
                 * @param options.data.values  (Optional) attribute values used to colorize the surface
                 * @param options.data.nullvalue  (Optional) attribute nullvalue to introduce holes in the surface
                 * @param options.colorprovider  (Optional) A color provider or a single color in css format
                 */
                setOptions(options: any | { data?: any | { values?: number[]; nullvalue?: number; } ; colorprovider?: geotoolkit.util.ColorProvider|string; } ): this;
            }
            /**
             * Surface data using a heightmap.<br>
             */
            class HeightMapSurfaceData {
                /**
                 * Surface data using a heightmap.<br>
                 */
                constructor();
            }
            /**
             * Surface data made of an elevation grid that can be triangulated.<br>
             */
            class GridSurfaceData {
                /**
                 * Surface data made of an elevation grid that can be triangulated.<br>
                 */
                constructor();
            }
            /**
             * Surface data made of triangles (vertices and indices).<br>
             */
            class TrimeshSurfaceData {
                /**
                 * Surface data made of triangles (vertices and indices).<br>
                 */
                constructor();
            }
            /**
             * Parent class for surfaces data.<br>
             */
            class AbstractSurfaceData {
                /**
                 * Parent class for surfaces data.<br>
                 */
                constructor();
            }
            /**
             * Surface data made of pillars that can be triangulated.<br>
             */
            class PillarSurfaceData {
                /**
                 * Surface data made of pillars that can be triangulated.<br>
                 */
                constructor();
            }
            /**
             * Surface data that can be triangulated.<br>
             */
            class SurfaceData {
                /**
                 * Surface data that can be triangulated.<br>
                 */
                constructor();
            }
            /**
             * Surface data made of contour lines that can be triangulated.<br>
             */
            class ContourLineData {
                /**
                 * Surface data made of contour lines that can be triangulated.<br>
                 */
                constructor();
            }
        }
        module AnnotationBase {
            /**
             * Enum of display strategy.<br>
             * <br>
             * The functions provided through this enum defines how the line linking the annotation text to the annotated object will be positioned.<br>
             */
            interface Mode {
                /**
                 * Use the center of the bounding box of the parent (basically a geotoolkit3d.scene.well.schematic.SchematicBase).<br>
                 * Default behavior, the line goes from the center of the annotated shape to text.
                 */
                Center: string;
                /**
                 * Always use the direct intersection from camera direction.<br>
                 * This computes the anchor of the line on the fly to be the closest vertex of the annotated shape from the text location.<br>
                 * Note that this implementation is more CPU demanding than the default one.
                 */
                Closest: string;
            }
        }
    }
    module util {
        /**
         * This utility class provides functions to deal with common 3D related math problems.
         */
        class Math {
            /**
             * This utility class provides functions to deal with common 3D related math problems.
             */
            constructor();
            /**
             * Computes area of a triangle using Heron's formula.<br>
             * <br>
             * This function computes the area of the triangle made by the three given points.<br>
             * To do so, it uses the Heron's stabilized formula:<br>
             * <br>
             * <i>
             *     Let a, b, c the length of each edge of the triangle with (a >= b >= c).<br>
             *     ∆ := √((a+(b+c)) (c-(a-b)) (c+(a-b)) (a+(b-c)))<br>
             * </i>
             * @param p0  (Required) The first point
             * @param p1  (Required) The second point
             * @param p2  (Required) The third point
             */
            static computeHeronArea(p0: THREE.Vector2, p1: THREE.Vector2, p2: THREE.Vector2): number;
            /**
             * Computes the 'surface normal' of three vertex in the given array (at the given indices).<br>
             * This will compute the normal vector of the plane made by the given 3 vertex.
             * @param vertices  (Required) The xyz values of the vertices
             * @param index0  (Required) The first vector index
             * @param index1  (Required) The second vector index
             * @param index2  (Required) The third vector index
             * @param normal  (Optional) Optional target array
             * @param nullvalue  (Optional) A nullvalue to ignore (cannot be NaN)
             */
            static normal(vertices: number[], index0: number, index1: number, index2: number, normal?: number[], nullvalue?: number): number[];
            /**
             * Computes the 'surface normal' of three vertex in the given array (at the given indices).<br>
             * This will compute the normal vector of the plane made by the given 3 vertex.
             * @param vertices  (Required) The xyz values of the vertices
             * @param index0  (Required) The first vector index
             * @param index1  (Required) The second vector index
             * @param index2  (Required) The third vector index
             * @param normal  (Optional) Optional target array
             * @param nullvalue  (Optional) A nullvalue to ignore (cannot be NaN)
             */
            static normalBufferAttribute(vertices: THREE.BufferAttribute, index0: number, index1: number, index2: number, normal?: number[], nullvalue?: number): number[];
            /**
             * Finds intersection between the given segments if there is any, null otherwise.<br>
             * @param segment0p0  (Required) First segment first point
             * @param segment0p1  (Required) First segment second point
             * @param segment1p0  (Required) Second segment first point
             * @param segment1p1  (Required) Second segment second point
             */
            static intersect(segment0p0: THREE.Vector2|geotoolkit.util.Point, segment0p1: THREE.Vector2|geotoolkit.util.Point, segment1p0: THREE.Vector2|geotoolkit.util.Point, segment1p1: THREE.Vector2|geotoolkit.util.Point): THREE.Vector2|any;
            /**
             * Linear interpolation between two Vector3.<br>
             * @param t0  (Required) Initial point
             * @param t1  (Required) Target point
             * @param t  (Required) Current step (0 to 1)
             */
            static lerp(t0: THREE.Vector3, t1: THREE.Vector3, t: number): THREE.Vector3;
            /**
             * Convert an angle in degree to radians.
             * @param angle  (Required) The angle value in degree
             */
            static degreeToRadians(angle: number): number;
            /**
             * Convert an angle in radians to degree.
             * @param angle  (Required) The angle value in radians
             */
            static radiansToDegree(angle: number): number;
            /**
             * Creates a normalized version of the given array.<br>
             * If given array's min&max are identical then the returned normalized values will be 'start + (end - start) / 2'.<br>
             * If given srcstart is NaN the actual minimum will be used instead.<br>
             * If given srcend is NaN the actual maximum will be used instead.<br>
             * @param values  (Required) Values to normalize
             * @param dststart  (Optional) Normalization min value (ie normalized minimum value)
             * @param dstend  (Optional) Normalization max value (ie normalized maximum value)
             * @param srcstart  (Optional) Origin min value, by default will be the array actual min
             * @param srcend  (Optional) Origin max value, by default will be the array actual max
             * @param nullvalue  (Optional) A nullvalue to normalize differently, note that null and NaN are considered as nullvalue by default
             * @param normednullvalue  (Optional) The normalized value to use in place of the nullvalue in the returned array
             */
            static normalizeArray(values: number[], dststart?: number, dstend?: number, srcstart?: number, srcend?: number, nullvalue?: number, normednullvalue?: number): number[];
            /**
             * Returns the maximum values of both vectors as a new vector
             * @param v1  (Required) First vector
             * @param v2  (Required) Second vector
             */
            static maxVector3(v1: THREE.Vector3, v2: THREE.Vector3): THREE.Vector3;
            /**
             * Returns the minimum values of both vectors as a new vector
             * @param v1  (Required) First vector
             * @param v2  (Required) Second vector
             */
            static minVector3(v1: THREE.Vector3, v2: THREE.Vector3): THREE.Vector3;
            /**
             * Returns if the two boxes intersect
             * @param b1  (Required) First box
             * @param b2  (Required) Second box
             */
            static intersectBox(b1: THREE.Box2, b2: THREE.Box2): boolean;
            /**
             * Returns if box2 is contained inside box1
             * @param box1  (Required) First box
             * @param box2  (Required) Second box
             */
            static containsBox(box1: THREE.Box2, box2: THREE.Box2): boolean;
            /**
             * Returns a THREE.Box2 of the space contained by both boxes
             * @param box1  (Required) First box
             * @param box2  (Required) Second box
             */
            static createFitBox(box1: THREE.Box2, box2: THREE.Box2): THREE.Box2;
            /**
             * This function turns measuredDepths inclinations and azimuth into XYZ deviation coordinates
             * @param measuredDepth  (Required) measured depth array
             * @param inclination  (Required) inclination array
             * @param azimuth  (Required) azimuth array
             * @param neg  (Optional) resulting depths should be negative
             */
            static minimumCurvature(measuredDepth: number[], inclination: number[], azimuth: number[], neg?: boolean): any;
        }
        /**
         * Utility class providing glsl code snippets that can be included in shaders.<br>
         */
        class WebGLConstants {
            /**
             * Utility class providing glsl code snippets that can be included in shaders.<br>
             */
            constructor();
            /**
             * Get the WebGL maximum texture size
             */
            static getCompressedTextureFormats(): any;
            /**
             * Get the WebGL maximum texture size
             */
            static getMaxTextureSize(): any;
            /**
             * Get the WebGL maximum number of textures
             */
            static getMaxTextures(): any;
        }
        /**
         * Utility class to manage colorprovider in 3D.<br>
         * <br>
         * This class provides function, constants and shader chunks to use a colorprovider in WebGL.<br>
         * This implementation reduces the amount of memory used for a given geometry as it requires only one float per vertex (and a fixed size texture).<br>
         * To do so, it generates a texture of the colormap and uses the value to retrieve the color in that colormap on the fly in the shader.<br>
         * <br>
         * This implementation uses the natural interpolation done by the graphic card on varying.<br>
         * This interpolation occurs on the graphic card when it executes the fragment shader for each fragment (rasterization step).<br>
         * See {@link https://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf GLSL Specification Section 4.3.5}<br>
         * See {@link https://www.opengl.org/sdk/docs/tutorials/ClockworkCoders/varying.php OpenGL example}.<br>
         * <br>
         * However the interpolation is done on the actual value rather than on the color.<br>
         * Which means that the interpolation will <b>not</b> create artificial colors that are not present in the colorprovider.<br>
         * However when interpolating the value it will render fragments with an interpolated value that was not present in the original data.<br>
         * <br>
         * <br>
         * When implementing a custom material, one could reuse this mechanism by:<br>
         * <ul>
         *  <li>Include shader code provided by this class into his vertexShader and fragmentShader.<br>
         *      <ul>
         *          <li>COLORMAP_SHADER_VERTEX_PREFIX: Declares uniforms, attributes and varying required by vertexShader</li>
         *          <li>COLORMAP_SHADER_VERTEX: Compute normalized value that can be used by colormapping in the fragment shader</li>
         *          <li>COLORMAP_SHADER_FRAG_PREFIX: Declares uniforms and varying required by fragmentShader</li>
         *          <li>COLORMAP_SHADER_FRAG: Use normalized value to get the actual color that should be used for the current fragment</li>
         *      </ul>
         *  </li>
         *  <br>
         *  <li>Declare attributes and uniforms in his material
         *      <ul>
         *           <li>COLORMAPVALUES_ATTRIBUTE_NAME: Attribute storing the values to be mapped to a color</li>
         *           <li>UNIFORM_COLORMAP: Uniforms used to store the colormap texture and the scale</li>
         *      </ul>
         *  </li>
         *  <br>
         *  <li>Push the values as an attribute on the THREE.BufferGeometry
         *      <ul>
         *           <li>Named using COLORMAPVALUES_ATTRIBUTE_NAME constant.</li>
         *           <li>One float per vertex</li>
         *      </ul>
         *  </li>
         *  <br>
         *  <li>Enable the colormap mode on his material
         *      <ul>
         *           <li>Set vertexColors to THREE.NoColors</li>
         *           <li>Set color to 'white'</li>
         *           <li>Set a define (material.defines[ColorMapUtil.COLORMAP_DEFINE_NAME] = 1)</li>
         *      </ul>
         *  </li>
         *  <br>
         *  <li>Initialize/Refresh the colormap uniforms and mark the material as dirty
         *      <ul>
         *           <li>refreshUniformsColorMap(material.uniforms, colorprovider)</li>
         *           <li>material.needsUpdate = true</li>
         *      </ul>
         *  </li>
         * </ul>
         * <br>
         */
        class ColorMap {
            /**
             * Utility class to manage colorprovider in 3D.<br>
             * <br>
             * This class provides function, constants and shader chunks to use a colorprovider in WebGL.<br>
             * This implementation reduces the amount of memory used for a given geometry as it requires only one float per vertex (and a fixed size texture).<br>
             * To do so, it generates a texture of the colormap and uses the value to retrieve the color in that colormap on the fly in the shader.<br>
             * <br>
             * This implementation uses the natural interpolation done by the graphic card on varying.<br>
             * This interpolation occurs on the graphic card when it executes the fragment shader for each fragment (rasterization step).<br>
             * See {@link https://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf GLSL Specification Section 4.3.5}<br>
             * See {@link https://www.opengl.org/sdk/docs/tutorials/ClockworkCoders/varying.php OpenGL example}.<br>
             * <br>
             * However the interpolation is done on the actual value rather than on the color.<br>
             * Which means that the interpolation will <b>not</b> create artificial colors that are not present in the colorprovider.<br>
             * However when interpolating the value it will render fragments with an interpolated value that was not present in the original data.<br>
             * <br>
             * <br>
             * When implementing a custom material, one could reuse this mechanism by:<br>
             * <ul>
             *  <li>Include shader code provided by this class into his vertexShader and fragmentShader.<br>
             *      <ul>
             *          <li>COLORMAP_SHADER_VERTEX_PREFIX: Declares uniforms, attributes and varying required by vertexShader</li>
             *          <li>COLORMAP_SHADER_VERTEX: Compute normalized value that can be used by colormapping in the fragment shader</li>
             *          <li>COLORMAP_SHADER_FRAG_PREFIX: Declares uniforms and varying required by fragmentShader</li>
             *          <li>COLORMAP_SHADER_FRAG: Use normalized value to get the actual color that should be used for the current fragment</li>
             *      </ul>
             *  </li>
             *  <br>
             *  <li>Declare attributes and uniforms in his material
             *      <ul>
             *           <li>COLORMAPVALUES_ATTRIBUTE_NAME: Attribute storing the values to be mapped to a color</li>
             *           <li>UNIFORM_COLORMAP: Uniforms used to store the colormap texture and the scale</li>
             *      </ul>
             *  </li>
             *  <br>
             *  <li>Push the values as an attribute on the THREE.BufferGeometry
             *      <ul>
             *           <li>Named using COLORMAPVALUES_ATTRIBUTE_NAME constant.</li>
             *           <li>One float per vertex</li>
             *      </ul>
             *  </li>
             *  <br>
             *  <li>Enable the colormap mode on his material
             *      <ul>
             *           <li>Set vertexColors to THREE.NoColors</li>
             *           <li>Set color to 'white'</li>
             *           <li>Set a define (material.defines[ColorMapUtil.COLORMAP_DEFINE_NAME] = 1)</li>
             *      </ul>
             *  </li>
             *  <br>
             *  <li>Initialize/Refresh the colormap uniforms and mark the material as dirty
             *      <ul>
             *           <li>refreshUniformsColorMap(material.uniforms, colorprovider)</li>
             *           <li>material.needsUpdate = true</li>
             *      </ul>
             *  </li>
             * </ul>
             * <br>
             */
            constructor();
        }
        /**
         * Utility class providing glsl code snippets that can be included in shaders.<br>
         */
        class Shaders {
            /**
             * Utility class providing glsl code snippets that can be included in shaders.<br>
             */
            constructor();
            /**
             * Vector used to encode/decode float from vec4
             */
            static BITMASK: THREE.Vector4;
            /**
             * Vector used to encode/decode float from vec4
             */
            static BITMASK_INV: THREE.Vector4;
            /**
             * CPU version of geotoolkit3d.util.Shaders.SHADER_FLOAT_TO_VEC4;
             * @param float  (Required) The value contained in [0...1[ to be converted to a THREE.Vector4
             */
            static packFloatToVec4(float: number): THREE.Vector4;
            /**
             * @param float  (Required) [0...1[
             */
            static packFloatToRGBA(float: number): THREE.Vector4;
            /**
             * Unpack a RGBA as a float value
             * @param vec4  (Required) RGBA vector4 components should be contained in [0...256[
             */
            static unpackRGBAToFloat(vec4: THREE.Vector4|number[]): number;
            /**
             * Unpack a Vector4 as a float value
             * @param vec4  (Required) RGBA vector4 components should be contained in [0...1[
             */
            static unpackVec4ToFloat(vec4: THREE.Vector4|number[]): number;
            /**
             * A shader utility function that rounds a float
             */
            static SHADER_ROUND_FLOAT: string;
            /**
             * A shader utility function that can pack a float [0...1[ into a vec4
             */
            static SHADER_FLOAT_TO_VEC4: string;
            /**
             * Vertex shader code converting a value to a colormap friendly value
             */
            static COLORMAP_SHADER_VERTEX: string;
            /**
             * Vertex shader utilities to convert a float value to a colormap friendly value
             */
            static COLORMAP_SHADER_VERTEX_PREFIX: string;
            /**
             * Fragment shader code that convertd a colormap value to a color and applies it to the diffuseColor variable.
             */
            static COLORMAP_SHADER_FRAG: string;
            /**
             * Fragment shader utilities to convert a colormap value to a color;
             */
            static COLORMAP_SHADER_FRAG_PREFIX: string;
            /**
             * The vertex shader code that defines the builtin picking modes as constants/defines.
             */
            static SHADER_PICKING_MODE: string;
            /**
             * The vertex shader code that defines the uniforms and varyings used for picking.
             */
            static SHADER_PICKING_VERTEXPREFIX: string;
            /**
             * The vertex shader code that computes the varyings reused by the fragment shader.
             */
            static SHADER_PICKING_VERTEXSUFFIX: string;
            /**
             * The fragment shader code that defines the varyings used for picking.
             */
            static SHADER_PICKING_FRAGPREFIX: string;
            /**
             * The fragment shader code that writes the gl_FragColor based on the current picking mode and the varying defined by the vertexShader.
             */
            static SHADER_PICKING_FRAGSUFFIX: string;
            /**
             * Updates given uniforms based on the given colorprovider.<br>
             * <br>
             * This function will update the uniforms related to the colorprovider.<br>
             * To do so it will regenerate the corresponding texture and update the associated scale parameters.<br>
             * @param material  (Required) to update options on
             * @param options  (Required) The options to be used.
             */
            static refreshUniformsColorMap(material: any, options: any): any;
        }
        /**
         * Utility class offering various functions to manipulate attributes and threejs materials.<br>
         * <br>
         */
        class Attributes {
            /**
             * Utility class offering various functions to manipulate attributes and threejs materials.<br>
             * <br>
             */
            constructor();
            /**
             * Builds a line material for the given linestyle.<br>
             * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
             * <br>
             * Note that supported patterns are only the simple regular ones.<br>
             * Per THREEJS requirements you will also have to call geometry.computeLineDistances() on your THREE.Geometry object.<br>
             * <br>
             * Note that style.width is not supported on windows-webgl.<br>
             * See:<br>
             * {@link http://alteredqualia.com/tmp/webgl-linewidth-test/}<br>
             * {@link http://en.wikipedia.org/wiki/WebGL#Desktop_browsers}<br>
             * {@link https://code.google.com/p/angleproject/issues/detail?id=334}<br>
             * <br>
             * @param style  (Required) The style to use to create a material
             */
            static createLineMaterial(style: geotoolkit.attributes.LineStyle): THREE.LineBasicMaterial|THREE.LineDashedMaterial;
            /**
             * Build a mesh material (Lambertian reflectance) for the given fillstyle.<br>
             * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
             * @param style  (Required) The style to build a material for
             */
            static createMeshMaterial(style: geotoolkit.attributes.FillStyle): THREE.MeshLambertMaterial;
            /**
             * Build a mesh material (Phong reflectance) for the given fillstyle.<br>
             * Note that current implementation assumes that the given style is immutable and therefore will not listen to its changes.<br>
             * @param style  (Required) The style to build a material for
             */
            static createPhongMeshMaterial(style: geotoolkit.attributes.FillStyle): THREE.MeshPhongMaterial;
            /**
             * Convert a color coded as a css-color to a THREE color.<br>
             * @param cssColor  (Required) The color in css format
             */
            static getThreeColor(cssColor: string): any;
            /**
             * Updates a mesh material (Lambert) for the given fillstyle.<br>
             * @param material  (Required) The material to update
             * @param style  (Required) The style to use to update the material
             */
            static updateMeshMaterial(material: THREE.MeshLambertMaterial, style: geotoolkit.attributes.FillStyle): THREE.MeshLambertMaterial;
        }
    }
    module tool {
        /**
         * The base class for tools in the 3D Plot.<br>
         * <br>
         * This implementation uses DeviceSupportRegistry mechanism to retrieve a bridge-object that will deal with hardware/browser specific input
         * devices.<br> The retrieved DeviceSupport object will listen to native events and call the corresponding generic functions on this
         * tool.<br>
         * <br>
         * Inheriting classes are responsible to implement those generic function.<br>
         * <br>
         * One may consider inheriting from {@link geotoolkit3d.tool.AbstractGestureTool} for an even more generic/crossplatform approach.<br>
         */
        class AbstractTool extends geotoolkit.util.EventDispatcher {
            /**
             * The base class for tools in the 3D Plot.<br>
             * <br>
             * This implementation uses DeviceSupportRegistry mechanism to retrieve a bridge-object that will deal with hardware/browser specific input
             * devices.<br> The retrieved DeviceSupport object will listen to native events and call the corresponding generic functions on this
             * tool.<br>
             * <br>
             * Inheriting classes are responsible to implement those generic function.<br>
             * <br>
             * One may consider inheriting from {@link geotoolkit3d.tool.AbstractGestureTool} for an even more generic/crossplatform approach.<br>
             * @param options  (Required) The options
             * @param options.domelement  (Optional) The div element containing the canvas.
             * @param options.plot  (Optional) The plot
             * @param options.name  (Optional) The tool name
             */
            constructor(options: any | { domelement?: HTMLElement; plot?: geotoolkit3d.Plot; name?: string; } );
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Required) The options
             * @param options.name  (Optional) The tool name
             * @param options.plot  (Optional) The plot
             * @param options.domelement  (Optional) The div element containing the canvas.
             */
            setOptions(options: any | { name?: string; plot?: geotoolkit3d.Plot; domelement?: HTMLElement; } ): this;
            /**
             * Event types
             */
            static Events: any;
            /**
             * This function allows tools to bind their events to the device support
             * @param deviceSupport  (Required) the type of device we are attaching to
             */
            setup(deviceSupport: geotoolkit3d.tool.devicesupport.AbstractDeviceSupport): this;
            /**
             * Returns the tool name.
             */
            getName(): string;
            /**
             * Called when a 'context' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onContext(event: any): any;
            /**
             * Called when a 'mousedown' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseDown(event: any): any;
            /**
             * Called when a 'mousemove' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseMove(event: any): any;
            /**
             * Called when a 'mouseup' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseUp(event: any): any;
            /**
             * Called when a 'mouseout' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseOut(event: any): any;
            /**
             * Called when a 'mousewheel' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseWheel(event: any): any;
            /**
             * Called when a 'touchstart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTouchStart(event: any): any;
            /**
             * Called when a 'touchend' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTouchEnd(event: any): any;
            /**
             * Called when a 'touchmove' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTouchMove(event: any): any;
            /**
             * Called when a 'doubleclick' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDoubleClick(event: any): any;
            /**
             * Called when a 'keydown' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyDown(event: any): any;
            /**
             * Called when a 'keyup' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyUp(event: any): any;
            /**
             * Disposes the tool
             */
            dispose(): any;
        }
        /**
         * A tool that convert classic device events to gesture-like calls.<br>
         * This tool inherits the 'device support' feature from AbstractTool and transforms the native events to a basic gesture mechanism.<br>
         * <br>
         * An 'armingkey' can be defined to limit when this tool operates.<br>
         * This tool will operate only if the defined key is pressed.<br>
         * <br>
         * It will call onDrag/onPinch/onSide/onTap/etc when the corresponding pattern is detected.<br>
         * Inheriting classes have to implement those functions.<br>
         * <br>
         */
        class AbstractGestureTool extends geotoolkit3d.tool.AbstractTool {
            /**
             * A tool that convert classic device events to gesture-like calls.<br>
             * This tool inherits the 'device support' feature from AbstractTool and transforms the native events to a basic gesture mechanism.<br>
             * <br>
             * An 'armingkey' can be defined to limit when this tool operates.<br>
             * This tool will operate only if the defined key is pressed.<br>
             * <br>
             * It will call onDrag/onPinch/onSide/onTap/etc when the corresponding pattern is detected.<br>
             * Inheriting classes have to implement those functions.<br>
             * <br>
             * @param options  (Required) The options
             * @param options.dragbutton  (Optional) The button id for dragging
             * @param options.pinchbutton  (Optional) The button id for pinching
             * @param options.slidebutton  (Optional) The button id for sliding
             * @param options.dragtouchcount  (Optional) The touch count to do a drag
             * @param options.pinchtouchcount  (Optional) The touch count to do a pinch
             * @param options.slidetouchcount  (Optional) The touch count to do a slide
             * @param options.radius  (Optional) picking radius in pixels
             * @param options.doubletapdelay  (Optional) The delay to trigger a doubleTap when using 'touch' based device (ms)
             * @param options.armingkey  (Optional) The key that needs to be pressed to arm this tool, if not armed the tool won't operate. 'null' means that the tool is always armed.
             */
            constructor(options: any | { dragbutton?: any; pinchbutton?: any; slidebutton?: any; dragtouchcount?: any; pinchtouchcount?: any; slidetouchcount?: any; radius?: any; doubletapdelay?: any; armingkey?: any; } );
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Required) The options
             * @param options.dragbutton  (Optional) The button id for dragging
             * @param options.pinchbutton  (Optional) The button id for pinching
             * @param options.slidebutton  (Optional) The button id for sliding
             * @param options.dragtouchcount  (Optional) The touch count to do a drag
             * @param options.pinchtouchcount  (Optional) The touch count to do a pinch
             * @param options.slidetouchcount  (Optional) The touch count to do a slide
             * @param options.doubletapdelay  (Optional) The delay to trigger a doubleTap when using 'touch' based device (ms)
             * @param options.radius  (Optional) picking radius in pixels
             * @param options.armingkey  (Optional) The key that needs to be pressed to arm this tool, if not armed the tool won't operate
             */
            setOptions(options: any | { dragbutton?: any; pinchbutton?: any; slidebutton?: any; dragtouchcount?: any; pinchtouchcount?: any; slidetouchcount?: any; doubletapdelay?: any; radius?: any; armingkey?: any; } ): this;
            /**
             * Called when a 'context' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onContext(event: any): any;
            /**
             * Called when a 'mousedown' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseDown(event: any): any;
            /**
             * Called when a 'mousemove' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseMove(event: any): any;
            /**
             * Called when a 'mouseout' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseOut(event: any): any;
            /**
             * Called when a 'mouseup' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseUp(event: any): any;
            /**
             * Called when a 'doubleclick' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDoubleClick(event: any): any;
            /**
             * Called when a 'touchstart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTouchStart(event: any): any;
            /**
             * Called when a 'touchend' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTouchEnd(event: any): any;
            /**
             * Called when a 'touchmove' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTouchMove(event: any): any;
            /**
             * Called when a 'keydown' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyDown(event: any): any;
            /**
             * Called when a 'onVisibilityChanged' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityChanged(event: any): any;
            /**
             * Called when a 'keyup' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyUp(event: any): any;
            /**
             * Called when a 'onKeyStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyStart(event: any): any;
            /**
             * Called when a 'onKey' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKey(event: any): any;
            /**
             * Called when a 'onKeyEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyEnd(event: any): any;
            /**
             * Called when a 'onVisibilityGained' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityGained(event: any): any;
            /**
             * Called when a 'onVisibilityLost' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityLost(event: any): any;
            /**
             * Called when a 'onCursorMove' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onCursorMove(event: any): any;
            /**
             * Called when a 'onTap' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTap(event: any): any;
            /**
             * Called when a 'onDoubleTap' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDoubleTap(event: any): any;
            /**
             * Called when a 'onPinchStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinchStart(event: any): any;
            /**
             * Called when a 'onPinch' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinch(event: any): any;
            /**
             * Called when a 'onPinchEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinchEnd(event: any): any;
            /**
             * Called when a 'onDragStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDragStart(event: any): any;
            /**
             * Called when a 'onDrag' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDrag(event: any): any;
            /**
             * Called when a 'onDragEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDragEnd(event: any): any;
            /**
             * Called when a 'onSlideStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlideStart(event: any): any;
            /**
             * Called when a 'onSlide' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlide(event: any): any;
            /**
             * Called when a 'onSlideEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlideEnd(event: any): any;
            /**
             * Function to clean up the references from this tool.
             */
            dispose(): any;
        }
        /**
         * A tool that implements selection mechanism.<br>
         * <br>
         * This tool will perform a picking operation on click/tap using {@link geotoolkit3d.picking.RendererPicking}.<br>
         * Then it will notify the attached listeners about what has been picked.<br>
         * <br>
         * To be notified when a selection has occurred, one should add a callback using addSelectionListener().<br>
         * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
         * <br>
         * The selection tool can be configured to pick an area instead of a single pixel.<br>
         * In that case it may propagate a selection containing more than one object.<br>
         */
        class SelectionTool extends geotoolkit3d.tool.AbstractGestureTool {
            /**
             * A tool that implements selection mechanism.<br>
             * <br>
             * This tool will perform a picking operation on click/tap using {@link geotoolkit3d.picking.RendererPicking}.<br>
             * Then it will notify the attached listeners about what has been picked.<br>
             * <br>
             * To be notified when a selection has occurred, one should add a callback using addSelectionListener().<br>
             * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
             * <br>
             * The selection tool can be configured to pick an area instead of a single pixel.<br>
             * In that case it may propagate a selection containing more than one object.<br>
             * @param options  (Required) See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
             * @param options.radius  (Optional) The picking area radius in pixels (approximated by a rectangle during picking)
             * @param options.hover  (Optional) setting to set selection on cursormove
             * @param options.filter  (Optional) A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
             * @param options.name  (Optional) tool name
status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
             */
            constructor(options: any | { radius?: number; hover?: boolean; filter?: Function; name?: string; } );
            /**
             * Event types
             */
            static Events: any;
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Required) See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
             * @param options.radius  (Optional) The picking area radius in pixels (approximated by a rectangle during picking)
             * @param options.hover  (Optional) setting to set selection on cursormove
             * @param options.filter  (Optional) A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
             */
            setOptions(options: any | { radius?: number; hover?: boolean; filter?: Function; } ): this;
            /**
             * Called when a 'onCursorMove' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onCursorMove(event: any): any;
            /**
             * Called when a 'onTap' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTap(event: any): any;
            /**
             * onSelectionFunction
             * @param selection  (Required) 
             * @param event  (Required) 
             */
            onSelection(selection: any[], event: any): any;
            /**
             * Adds a listener that will be triggered each time this tool selection occurs.
             * @param callback  (Required) The function that will be called. Function parameters will be an array of selected objects3d and the browser event that triggered it
             */
            addSelectionListener(callback: Function): this;
            /**
             * Removes a selection listener
             * @param callback  (Required) The callback to remove
             */
            removeSelectionListener(callback: Function): this;
            /**
             * Called when a 'onKeyStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyStart(event: any): any;
            /**
             * Called when a 'onKey' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKey(event: any): any;
            /**
             * Called when a 'onKeyEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyEnd(event: any): any;
            /**
             * Called when a 'onDoubleTap' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDoubleTap(event: any): any;
            /**
             * Called when a 'onMouseWheel' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseWheel(event: any): any;
            /**
             * Called when a 'onPinchStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinchStart(event: any): any;
            /**
             * Called when a 'onPinch' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinch(event: any): any;
            /**
             * Called when a 'onPinchEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinchEnd(event: any): any;
            /**
             * Called when a 'onDragStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDragStart(event: any): any;
            /**
             * Called when a 'onDrag' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDrag(event: any): any;
            /**
             * Called when a 'onDragEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDragEnd(event: any): any;
            /**
             * Called when a 'onSlideStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlideStart(event: any): any;
            /**
             * Called when a 'onSlide' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlide(event: any): any;
            /**
             * Called when a 'onSlideEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlideEnd(event: any): any;
            /**
             * Called when a 'onVisibilityGained' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityGained(event: any): any;
            /**
             * Called when a 'onVisibilityLost' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityLost(event: any): any;
        }
        /**
         * A base class to implement custom tools that move objects into the scene.<br>
         */
        class AbstractMoveTool extends geotoolkit3d.tool.AbstractGestureTool {
            /**
             * A base class to implement custom tools that move objects into the scene.<br>
             * @param options  (Required) See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
             * @param options.object  (Optional) The object to be moved
             * @param options.armingkey  (Optional) The keycode to arm this tool, see {@link geotoolkit3d.tool.AbstractGestureTool}
             * @param options.pickenabled  (Optional) True if this tool should permit selection of the object to move
             */
            constructor(options: any | { object?: THREE.Object3D; armingkey?: number; pickenabled?: boolean; } );
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Required) The options
             * @param options.object  (Optional) The object to be moved
             * @param options.enabled  (Optional) The status of this tool
             * @param options.pickenabled  (Optional) True if this tool should also handle selection (picking) of theobject to move
             */
            setOptions(options: any | { object?: THREE.Object3D; enabled?: boolean; pickenabled?: boolean; } ): this;
            /**
             * Called when a 'onPick' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPick(event: any): any;
            /**
             * Move status enumerator.<br>
             * <br>
             * This enum is used to describe the state of the tool.<br>
             */
            static Status: any;
            /**
             * Adds a listener that will be triggered each time this tool 'move' occurs.
             * @param callback  (Required) The function that will be called
             */
            addMoveListener(callback: Function): this;
            /**
             * Removes a listener
             * @param callback  (Required) The callback to remove
             */
            removeSelectionListener(callback: Function): this;
            /**
             * Called when a 'onKeyEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyEnd(event: any): any;
            /**
             * Called when a 'onDragStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDragStart(event: any): any;
            /**
             * Called when a 'onDrag' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDrag(event: any): any;
            /**
             * Called when a 'onDragEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDragEnd(event: any): any;
            /**
             * Called when a 'onTap' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTap(event: any): any;
            /**
             * Called when a 'onCursorMove' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onCursorMove(event: any): any;
            /**
             * Called when a 'onKeyStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyStart(event: any): any;
            /**
             * Called when a 'onKey' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKey(event: any): any;
            /**
             * Called when a 'onDoubleTap' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDoubleTap(event: any): any;
            /**
             * Called when a 'onMouseWheel' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseWheel(event: any): any;
            /**
             * Called when a 'onPinchStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinchStart(event: any): any;
            /**
             * Called when a 'onPinch' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinch(event: any): any;
            /**
             * Called when a 'onPinchEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinchEnd(event: any): any;
            /**
             * Called when a 'onSlideStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlideStart(event: any): any;
            /**
             * Called when a 'onSlide' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlide(event: any): any;
            /**
             * Called when a 'onSlideEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlideEnd(event: any): any;
            /**
             * Called when a 'onVisibilityGained' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityGained(event: any): any;
            /**
             * Called when a 'onVisibilityLost' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityLost(event: any): any;
        }
        /**
         * This class offers the ability to drag an object across the scene.<br>
         * <br>
         * It internally uses a plane facing the camera to compute the movement to be applied to the object.<br>
         * Which mean that the object will move in a 2D plane facing the camera.<br>
         * <br>
         * The movement operation applied to the object can be adjusted to fit a specific need by changing the adjust-function.<br>
         * <br>
         */
        class PlanarMoveTool extends geotoolkit3d.tool.AbstractMoveTool {
            /**
             * This class offers the ability to drag an object across the scene.<br>
             * <br>
             * It internally uses a plane facing the camera to compute the movement to be applied to the object.<br>
             * Which mean that the object will move in a 2D plane facing the camera.<br>
             * <br>
             * The movement operation applied to the object can be adjusted to fit a specific need by changing the adjust-function.<br>
             * <br>
             * @param options  (Required) The options
             * @param options.object  (Optional) The object to be moved
             * @param options.armingkey  (Optional) The keycode to arm this tool (see AbstractMoveTool)
             * @param options.filter  (Optional) A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
             * @param options.pickenabled  (Optional) True if this tool should permit selection of the object to move
             * @param options.name  (Optional) tool name
             */
            constructor(options: any | { object?: THREE.Object3D; armingkey?: number; filter?: Function; pickenabled?: boolean; name?: string; } );
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Required) The options
             * @param options.object  (Optional) The object to be moved
             * @param options.enabled  (Optional) The status of this tool
             * @param options.pickenabled  (Optional) True if this tool should also handle selection (picking)
             * @param options.pickingplanecenter  (Optional) The center point of the plane used to compute displacement
             * @param options.filter  (Optional) A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
             */
            setOptions(options: any | { object?: THREE.Object3D; enabled?: boolean; pickenabled?: boolean; pickingplanecenter?: THREE.Vector3; filter?: Function; } ): this;
            /**
             * Sets the function to use in order to control the displacement to be applied.<br>
             * <br>
             * Can be used to snap the object to a given step or to limit maximum/minimum position.<br>
             * Function parameters are:<br>
             * {THREE.Object3D} object The object being moved<br>
             * {THREE.Vector3} move The displacement to adjust<br>
             * @param func  (Required) The function to use
             */
            setAdjustFunction(func: Function): this;
        }
        /**
         * This class offers the ability to drag an object across the scene.<br>
         * <br>
         * Internally it computes the distance dragged considering the Plot as a two dimension slider (horizontal/vertical).<br>
         * Calling code should provide the function that convert this 2D displacement in an actual 'move'.<br>
         */
        class SliderMoveTool extends geotoolkit3d.tool.AbstractMoveTool {
            /**
             * This class offers the ability to drag an object across the scene.<br>
             * <br>
             * Internally it computes the distance dragged considering the Plot as a two dimension slider (horizontal/vertical).<br>
             * Calling code should provide the function that convert this 2D displacement in an actual 'move'.<br>
             * @param options  (Required) See geotoolkit3d.tool.AbstractMoveTool for inherited options
             * @param options.name  (Optional) tool name
             */
            constructor(options: any | { name?: string; } );
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Required) See geotoolkit3d.tool.AbstractMoveTool for inherited options
             * @param options.initialpoint  (Optional) The starting point for displacement in device coordinates
             */
            setOptions(options: any | { initialpoint?: THREE.Vector2; } ): this;
            /**
             * Sets the function that should apply the computed 'move operation' to the targeted object.<br>
             * <br>
             * Function parameters are:<br>
             * {THREE.Object3D} object The object being moved<br>
             * {THREE.Vector2} move The displacement in screen space to apply<br>
             * {THREE.Vector2} initialPoint The initial point<br>
             * Function should return 'true' to reset the reference point used for distance calculation<br>
             * @param func  (Required) The function
             */
            setMoveFunction(func: Function): this;
            /**
             * Function to clean up the references from this tool.
             */
            dispose(): any;
        }
        /**
         * A tool that implements selection mechanism.<br>
         * <br>
         * This tool will perform a picking operation on click/tap using {@link geotoolkit3d.picking.RendererPicking}.<br>
         * Then it will notify the attached listeners about what has been picked.<br>
         * <br>
         * To be notified when a selection has occurred, one should add a callback using addSelectionListener().<br>
         * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
         * <br>
         * The selection tool can be configured to pick an area instead of a single pixel.<br>
         * In that case it may propagate a selection containing more than one object.<br>
         */
        class MeasuringTool extends geotoolkit3d.tool.AbstractGestureTool {
            /**
             * A tool that implements selection mechanism.<br>
             * <br>
             * This tool will perform a picking operation on click/tap using {@link geotoolkit3d.picking.RendererPicking}.<br>
             * Then it will notify the attached listeners about what has been picked.<br>
             * <br>
             * To be notified when a selection has occurred, one should add a callback using addSelectionListener().<br>
             * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
             * <br>
             * The selection tool can be configured to pick an area instead of a single pixel.<br>
             * In that case it may propagate a selection containing more than one object.<br>
             * @param options  (Required) See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
             * @param options.radius  (Optional) The picking area radius in pixels (approximated by a rectangle during picking)
             * @param options.name  (Optional) tool name
             */
            constructor(options: any | { radius?: number; name?: string; } );
            /**
             * Event types
             */
            static Events: any;
            /**
             * sets the visibility of the children objects
             * @param visible  (Required) 
             */
            setChildrenVisibilty(visible: boolean): this;
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Required) See {@link geotoolkit3d.tool.AbstractGestureTool} for inherited options
             * @param options.radius  (Optional) The picking area radius in pixels (approximated by a rectangle during picking)
             */
            setOptions(options: any | { radius?: number; } ): this;
            /**
             * Called when a 'onCursorMove' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onCursorMove(event: any): any;
            /**
             * Called when a 'onTap' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onTap(event: any): any;
            /**
             * Called when a 'mouseup' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseUp(event: any): any;
            /**
             * Function to get the current distance of the two points from the tool
             */
            getDistance(): number;
            /**
             * Called when a 'onKeyStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyStart(event: any): any;
            /**
             * Called when a 'onKey' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKey(event: any): any;
            /**
             * Called when a 'onKeyEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onKeyEnd(event: any): any;
            /**
             * Called when a 'onDoubleTap' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDoubleTap(event: any): any;
            /**
             * Called when a 'onMouseWheel' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onMouseWheel(event: any): any;
            /**
             * Called when a 'onPinchStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinchStart(event: any): any;
            /**
             * Called when a 'onPinch' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinch(event: any): any;
            /**
             * Called when a 'onPinchEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onPinchEnd(event: any): any;
            /**
             * Called when a 'onDragStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDragStart(event: any): any;
            /**
             * Called when a 'onDrag' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDrag(event: any): any;
            /**
             * Called when a 'onDragEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onDragEnd(event: any): any;
            /**
             * Called when a 'onSlideStart' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlideStart(event: any): any;
            /**
             * Called when a 'onSlide' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlide(event: any): any;
            /**
             * Called when a 'onSlideEnd' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onSlideEnd(event: any): any;
            /**
             * Called when a 'onVisibilityGained' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityGained(event: any): any;
            /**
             * Called when a 'onVisibilityLost' event has occurred
             * @param event  (Required) the native event with plot coordinates added
             */
            onVisibilityLost(event: any): any;
        }
        module devicesupport {
            /**
             * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
             * For example MSPointers or Touch events.<br>
             * <br>
             * When receiving an event, it will trigger the correct generic function of the given 'target'.<br>
             * Therefore it will convert 'browser-specific' events to a 'more generic' behavior.<br>
             * <br>
             * The event passed down to the target will be the native event.<br>
             * However, implementation of this class will also introduce 'plotX', 'plotY' attributes in the event.<br>
             * They corresponds to the cursor/fingers/pen location converted to plot-relative coordinates.<br>
             * <br>
             * In case of multiple cursor/fingers/pen location, the array attributes 'plotXs', 'plotYs' will also be populated accordingly.<br>
             * <br>
             * Builtin implementations include:<br>
             * <ul>
             *     <li>Mouse: Supports {@link http://www.w3schools.com/jsref/dom_obj_event.asp w3c-mouse-event} based devices</li>
             *     <li>Pointer: Supports system using the {@link https://www.w3.org/TR/pointerevents/ w3c-pointers} architecture.</li>
             *     <li>Touch: Supports system using the {@link https://www.w3.org/TR/touch-events/ w3c-touch} architecture.</li>
             * </ul>
             * <br>
             */
            class AbstractDeviceSupport extends geotoolkit.util.EventDispatcher {
                /**
                 * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
                 * For example MSPointers or Touch events.<br>
                 * <br>
                 * When receiving an event, it will trigger the correct generic function of the given 'target'.<br>
                 * Therefore it will convert 'browser-specific' events to a 'more generic' behavior.<br>
                 * <br>
                 * The event passed down to the target will be the native event.<br>
                 * However, implementation of this class will also introduce 'plotX', 'plotY' attributes in the event.<br>
                 * They corresponds to the cursor/fingers/pen location converted to plot-relative coordinates.<br>
                 * <br>
                 * In case of multiple cursor/fingers/pen location, the array attributes 'plotXs', 'plotYs' will also be populated accordingly.<br>
                 * <br>
                 * Builtin implementations include:<br>
                 * <ul>
                 *     <li>Mouse: Supports {@link http://www.w3schools.com/jsref/dom_obj_event.asp w3c-mouse-event} based devices</li>
                 *     <li>Pointer: Supports system using the {@link https://www.w3.org/TR/pointerevents/ w3c-pointers} architecture.</li>
                 *     <li>Touch: Supports system using the {@link https://www.w3.org/TR/touch-events/ w3c-touch} architecture.</li>
                 * </ul>
                 * <br>
                 * @param options  (Required) The options
                 * @param options.domelement  (Required) The div element in which the canvas will be created and added.
                 * @param options.plot  (Required) The plot using this devicesupport
                 * @param options.target  (Required) The tool to notify when an event occurs
                 */
                constructor(options: any | { domelement: HTMLElement; plot: geotoolkit3d.Plot; target: geotoolkit3d.tool.AbstractTool; } );
                /**
                 * Event types
                 */
                static Events: any;
                /**
                 * Function called to attach the device-support class to an actual plot.<br>
                 * Implementation should be reentrant and attach any native listener they need.<br>
                 * @param plot  (Required) The plot to attach to
                 * @param domelement  (Required) The dom element to attach to
                 * @param target  (Required) The tool to notify on native events
                 */
                setup(plot: geotoolkit3d.Plot, domelement: HTMLElement, target: geotoolkit3d.tool.AbstractTool): any;
                /**
                 * Function called to check if this class should be used for the current context.<br>
                 * <br>
                 * This will be called as part of the lookup mechanism of the {@link geotoolkit3d.tool.devicesupport.DeviceSupportRegistry}.<br>
                 * This static function should be implemented in each subclass and return true if and only if it should be used in the current
                 * context.<br>
                 * <br>
                 * Typical implementation will check for the presence of some known attributes in the window or user-agent to determine the nature of
                 * the current platform/browser.
                 */
                static isSupported(): any;
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.domelement  (Optional) The div element in which the canvas will be created and added.
                 * @param options.plot  (Optional) The plot using this devicesupport
                 * @param options.target  (Optional) The tool to notify when an event occurs
                 */
                setOptions(options: any | { domelement?: HTMLElement; plot?: geotoolkit3d.Plot; target?: geotoolkit3d.tool.AbstractTool; } ): this;
            }
            /**
             * This class manages 'device-support' classes.<br>
             * <br>
             * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
             * For example MSPointers or Touch events.<br>
             * <br>
             * Multiple implementation can coexist and this class will provide to the client code the implementation the 'most adapted' to the current browser.<br>
             * <br>
             * To determine which device support to use, this class prompts each devicesupport if it can works in the current environment.<br>
             * > device.isSupported()<br>
             * <br>
             * The first devicesupport to answer 'true' will be picked.<br>
             * If no device answers true, the default device support is used as a fallback.<br>
             * <br>
             */
            class DeviceSupportRegistry {
                /**
                 * This class manages 'device-support' classes.<br>
                 * <br>
                 * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
                 * For example MSPointers or Touch events.<br>
                 * <br>
                 * Multiple implementation can coexist and this class will provide to the client code the implementation the 'most adapted' to the current browser.<br>
                 * <br>
                 * To determine which device support to use, this class prompts each devicesupport if it can works in the current environment.<br>
                 * > device.isSupported()<br>
                 * <br>
                 * The first devicesupport to answer 'true' will be picked.<br>
                 * If no device answers true, the default device support is used as a fallback.<br>
                 * <br>
                 */
                constructor();
                /**
                 * Sets the default device support class
                 * @param devicesupport  (Required) The constructor/class to instantiate and use as the default device support
                 */
                static setDefaultDeviceSupport(devicesupport: geotoolkit3d.tool.devicesupport.AbstractDeviceSupport): any;
                /**
                 * Finds a devicesupport that is supported in the current browser.
                 */
                static getDeviceSupport(): any;
                /**
                 * Gets the array containing the constructors/class that could be instantiated and used as a device support.
                 */
                static getAllDeviceSupport(): geotoolkit3d.tool.devicesupport.AbstractDeviceSupport[];
            }
            module AbstractDeviceSupport {
                /**
                 * Event types
                 */
                interface Events {
                    /**
                     * onContext
                     */
                    onContext: string;
                    /**
                     * onMouseDown
                     */
                    onMouseDown: string;
                    /**
                     * onMouseMove
                     */
                    onMouseMove: string;
                    /**
                     * onMouseUp
                     */
                    onMouseUp: string;
                    /**
                     * onMouseWheel
                     */
                    onMouseWheel: string;
                    /**
                     * onTouchStart
                     */
                    onTouchStart: string;
                    /**
                     * onTouchEnd
                     */
                    onTouchEnd: string;
                    /**
                     * onTouchMove
                     */
                    onTouchMove: string;
                    /**
                     * onDoubleClick
                     */
                    onDoubleClick: string;
                    /**
                     * onKeyDown
                     */
                    onKeyDown: string;
                    /**
                     * onKeyUp
                     */
                    onKeyUp: string;
                    /**
                     * onPointerStart
                     */
                    onPointerStart: string;
                    /**
                     * onPointerMove
                     */
                    onPointerMove: string;
                    /**
                     * onPointerEnd
                     */
                    onPointerEnd: string;
                }
            }
        }
        module cursor {
            /**
             * A tool providing cursor representation in 3D.<br>
             * This tool will listen to cursor events and notify the internal cursor representation.<br>
             */
            class CursorTool extends geotoolkit3d.tool.AbstractGestureTool {
                /**
                 * A tool providing cursor representation in 3D.<br>
                 * This tool will listen to cursor events and notify the internal cursor representation.<br>
                 * @param options  (Required) See geotoolkit3d.tool.AbstractGestureTool for inherited options
                 * @param options.cursor  (Optional) The cursor to update on mouse move
                 * @param options.name  (Optional) tool name
                 */
                constructor(options: any | { cursor?: geotoolkit3d.tool.cursor.AbstractCursor; name?: string; } );
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.enabled  (Optional) The status of this tool
                 * @param options.cursor  (Optional) The cursor to update on mouse move
                 */
                setOptions(options: any | { enabled?: boolean; cursor?: geotoolkit3d.tool.cursor.AbstractCursor; } ): this;
                /**
                 * Moves the cursor at the given position.<br>
                 * This does not fire an event.<br>
                 * @param position  (Required) The new position or null to hide the cursor
                 */
                moveCursor(position: THREE.Vector3|any): any;
                /**
                 * Adds a listener that will be triggered each time this tool 'move' occurs.
                 * @param callback  (Required) The function that will be called
                 */
                addMoveListener(callback: Function): this;
                /**
                 * Removes a listener
                 * @param callback  (Required) The listener callback
                 */
                removeMoveListener(callback: Function): this;
            }
            /**
             * Abstract class for 3D cursor shapes.<br>
             * <br>
             * Subclasses are responsible of implementing the actual rendering by adding a Mesh/Line to this object3d.<br>
             * The setCursorPosition will be called whenever the cursor is moved by the user.<br>
             * <br>
             */
            class AbstractCursor extends geotoolkit3d.scene.Object3D {
                /**
                 * Abstract class for 3D cursor shapes.<br>
                 * <br>
                 * Subclasses are responsible of implementing the actual rendering by adding a Mesh/Line to this object3d.<br>
                 * The setCursorPosition will be called whenever the cursor is moved by the user.<br>
                 * <br>
                 */
                constructor();
                /**
                 * Sets the cursor position in world coordinates.<br>
                 * This can be called manually to move the cursor programmatically.<br>
                 * @param position  (Required) The new cursor position
                 */
                setCursorPosition(position: THREE.Vector3): this;
            }
            /**
             * A small 3D cross representation of the cursor
             */
            class CrossCursor extends geotoolkit3d.tool.cursor.AbstractCursor {
                /**
                 * A small 3D cross representation of the cursor
                 * @param options  (Required) See geotoolkit3d.scene.Object3D for inherited options
                 * @param options.linestyle  (Optional) The linestyle for the cursor
                 * @param options.cursorsize  (Optional) The cursor size in device
                 */
                constructor(options: any | { linestyle?: geotoolkit.attributes.LineStyle; cursorsize?: number; } );
                /**
                 * Set the cursor position in world coordinates
                 * @param position  (Required) The new cursor position
                 */
                setCursorPosition(position: THREE.Vector3): this;
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.linestyle  (Optional) The linestyle for the cursor
                 * @param options.cursorsize  (Optional) The cursor size in device
                 */
                setOptions(options: any | { linestyle?: geotoolkit.attributes.LineStyle; cursorsize?: number; } ): this;
            }
            /**
             * A crosshair representation of the cursor
             */
            class CrossHairCursor extends geotoolkit3d.tool.cursor.AbstractCursor {
                /**
                 * A crosshair representation of the cursor
                 * @param options  (Required) See geotoolkit3d.scene.Object3D for inherited options
                 * @param options.visiblelinestyle  (Optional) The linestyle for the visible part of the cursor
                 * @param options.hiddenlinestyle  (Optional) The linestyle for the hidden part of the cursor
                 * @param options.limits  (Required) The limiting bounding box for the crosshair, used to compute the line length
                 */
                constructor(options: any | { visiblelinestyle?: geotoolkit.attributes.LineStyle; hiddenlinestyle?: geotoolkit.attributes.LineStyle; limits: THREE.Box3; } );
                /**
                 * Set the cursor position in world coordinates
                 * @param position  (Required) The new cursor position
                 */
                setCursorPosition(position: THREE.Vector3): this;
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.linestyle  (Optional) The linestyle for the cursor
                 */
                setOptions(options: any | { linestyle?: geotoolkit.attributes.LineStyle; } ): this;
            }
            /**
             * A cross hair 2D representation of the cursor
             */
            class CrossHair2DCursor extends geotoolkit3d.tool.cursor.AbstractCursor {
                /**
                 * A cross hair 2D representation of the cursor
                 * @param options  (Required) See geotoolkit3d.scene.Object3D for inherited options
                 * @param options.linestyle  (Optional) The linestyle for the cursor
                 * @param options.limits  (Required) The limiting bounding box for the crosshair, used to compute the line length
                 * @param options.mode  (Optional) The display strategy to show/hide lines depending on camera position
                 */
                constructor(options: any | { linestyle?: geotoolkit.attributes.LineStyle; limits: THREE.Box3; mode?: geotoolkit3d.scene.grid.Grid.Mode; } );
                /**
                 * Set the cursor position in world coordinates
                 * @param position  (Required) The new cursor position
                 */
                setCursorPosition(position: THREE.Vector3): this;
                /**
                 * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
                 * @param options  (Required) The options
                 * @param options.linestyle  (Optional) The linestyle for the cursor
                 */
                setOptions(options: any | { linestyle?: geotoolkit.attributes.LineStyle; } ): this;
            }
            /**
             * A composite cursor that can contain several cursors.<br>
             * <br>
             * The main advantage of using CompositeCursor instead of having several CursorTool is that is avoid doing a Picking operation for each sub cursor.
             */
            class CompositeCursor extends geotoolkit3d.tool.cursor.AbstractCursor {
                /**
                 * A composite cursor that can contain several cursors.<br>
                 * <br>
                 * The main advantage of using CompositeCursor instead of having several CursorTool is that is avoid doing a Picking operation for each sub cursor.
                 * @param options  (Required) See geotoolkit3d.scene.Object3D for inherited options
                 * @param options.cursors  (Required) The cursors to add
                 */
                constructor(options: any | { cursors: geotoolkit3d.tool.cursor.AbstractCursor[]; } );
                /**
                 * Set the cursor position in world coordinates
                 * @param position  (Required) The new cursor position
                 */
                setCursorPosition(position: THREE.Vector3): this;
            }
        }
        module AbstractTool {
            /**
             * Event types
             */
            interface Events {
                /**
                 * onContext
                 */
                onContext: string;
                /**
                 * onMouseDown
                 */
                onMouseDown: string;
                /**
                 * onMouseMove
                 */
                onMouseMove: string;
                /**
                 * onMouseUp
                 */
                onMouseUp: string;
                /**
                 * onMouseWheel
                 */
                onMouseWheel: string;
                /**
                 * onTouchStart
                 */
                onTouchStart: string;
                /**
                 * onTouchEnd
                 */
                onTouchEnd: string;
                /**
                 * onTouchMove
                 */
                onTouchMove: string;
                /**
                 * onDoubleClick
                 */
                onDoubleClick: string;
                /**
                 * onKeyDown
                 */
                onKeyDown: string;
                /**
                 * onKeyUp
                 */
                onKeyUp: string;
                /**
                 * onPointerStart
                 */
                onPointerStart: string;
                /**
                 * onPointerMove
                 */
                onPointerMove: string;
                /**
                 * onPointerEnd
                 */
                onPointerEnd: string;
            }
        }
        module SelectionTool {
            /**
             * Event types
             */
            interface Events {
                /**
                 * onSelection
                 */
                onSelection: string;
            }
        }
        module AbstractMoveTool {
            /**
             * Move status enumerator.<br>
             * <br>
             * This enum is used to describe the state of the tool.<br>
             */
            interface Status {
                /**
                 * Object selected
                 */
                Selected: string;
                /**
                 * Move started
                 */
                Start: string;
                /**
                 * Move occurred
                 */
                Move: string;
                /**
                 * Move ended
                 */
                End: string;
            }
        }
        module MeasuringTool {
            /**
             * Event types
             */
            interface Events {
                /**
                 * DistanceChanged
                 */
                DistanceChanged: string;
            }
        }
    }
    module picking {
        /**
         * Parent class for picking algorithms.<br>
         * <br>
         * Subclasses should implement 3D picking (pixel to worldcoordinate).<br>
         * Builtin implementation include raytracing and renderer-picking.<br>
         */
        class AbstractPicking {
            /**
             * Parent class for picking algorithms.<br>
             * <br>
             * Subclasses should implement 3D picking (pixel to worldcoordinate).<br>
             * Builtin implementation include raytracing and renderer-picking.<br>
             */
            constructor();
            /**
             * Pick the object(s) at the given plot coordinates
             * @param plot  (Required) The target plot
             * @param x  (Required) The x coordinate in plot device space
             * @param y  (Required) The y coordinate in plot device space
             */
            static pick(plot: geotoolkit3d.Plot, x: number, y: number): any[];
        }
        /**
         * Picking using raycasting algorithm.<br>
         * <br>
         * This selection strategy use a raycasting algorithm to determine what objects are at the requested location.<br>
         * Note that this algorithm has some known limitations as it's a CPU approach:<br>
         * <ul>
         * <li>Vertex&Fragment shader are not supported, therefore objects making use of them might not be pickable or picked at the wrong coordinates</li>
         * <li>Raycasting use a distance-based criteria</li>
         * <li>Can be slow if the picked object or any object considered as a candidate internally has a lot of triangles </li>
         * <li>Returns all objects at the given location that match the criteria </li>
         * </ul>
         */
        class RayCastPicking {
            /**
             * Picking using raycasting algorithm.<br>
             * <br>
             * This selection strategy use a raycasting algorithm to determine what objects are at the requested location.<br>
             * Note that this algorithm has some known limitations as it's a CPU approach:<br>
             * <ul>
             * <li>Vertex&Fragment shader are not supported, therefore objects making use of them might not be pickable or picked at the wrong coordinates</li>
             * <li>Raycasting use a distance-based criteria</li>
             * <li>Can be slow if the picked object or any object considered as a candidate internally has a lot of triangles </li>
             * <li>Returns all objects at the given location that match the criteria </li>
             * </ul>
             */
            constructor();
            /**
             * @param plot  (Required) The target plot
             * @param x  (Required) The x coordinate in client device space
             * @param y  (Required) The y coordinate in client device space
             */
            static getPickingRayClient(plot: geotoolkit3d.Plot, x: number, y: number): THREE.Ray;
            /**
             * @param plot  (Required) The target plot
             * @param x  (Required) The x coordinate in plot device space
             * @param y  (Required) The y coordinate in plot device space
             */
            static getPickingRay(plot: geotoolkit3d.Plot, x: number, y: number): THREE.Ray;
            /**
             * Cast a ray at the given pixel location (relative to the plot).<br>
             * <br>
             * Objects close enough to the ray will be retrieved by the raycast operation.<br>
             * @param plot  (Required) The target plot
             * @param x  (Required) The x coordinate in device space (pixels)
             * @param y  (Required) The x coordinate in device space (pixels)
             */
            static pick(plot: geotoolkit3d.Plot, x: number, y: number): any[];
        }
        /**
         * Default implementation for the picking renderer mechanism.<br>
         * <br>
         * This class uses rendering as a way to do picking.<br>
         * The idea is similar to the one used here: {@link http://threejs.org/examples/webgl_interactive_cubes_gpu.html THREEJS tutorial}<br>
         * Instead of rendering color in each pixel, it will render more information coded as a rgba pixel.<br>
         * Then it will read the pixel and extract the information encoded in it.<br>
         * <br>
         * To do so, it will replace the current materials by custom shader-materials which will encode the required information into the pixel.<br>
         * The picking might require several steps to retrieve all the information it needs, for each pass one rgba component will be read from the graphic card.<br>
         * Typically it will execute the picking-rendering 4 passes:<br>
         * <ul>
         *     <li>shape-identifier: First pass to find which shapes is at the given position using its identifier</li>
         *     <li>x-coordinate: Another pass to retrieve the world x coordinate at the pick position</li>
         *     <li>y-coordinate: Another pass to retrieve the world y coordinate at the pick position</li>
         *     <li>z-coordinate: Another pass to retrieve the world z coordinate at the pick position</li>
         * </ul>
         * For each pass, the scene will be reconfigured to write the corresponding attribute in place of the regular pixels.<br>
         * One could add more passes to the picking by declaring them in the #getExtraPickingModes() of the picking material.<br>
         * <br>
         * Unlike the Raycasting approach, the picking occurs on the GPU, which means that:<br>
         * <ul>
         *     <li>Vertex&Fragment shader are supported</li>
         *     <li>No distance based criteria, the shape rendered at the given pixel coordinates is the one picked</li>
         *     <li>Performance is based on frame rendering performance only, however it may require several frames for a single picking operation</li>
         *     <li>Returns only the closest object(s) to the camera (the one(s) visible on screen), transparency is ignored. (see filtering)</li>
         * </ul>
         * <br>
         * Note that this picking implementation accepts a width&height parameters to select shapes in a rectangle centered on the given coordinates.<br>
         * A given shape will be returned only once even if it has several pixels in the picked area.<br>
         * The results entry for such case would correspond to the pixel closest to the given picking coordinate.<br>
         * For example if the picked object fills the whole area being picked.<br>
         * Then the picking coordinates returned will match the center of the picked rectangle.<br>
         * <br>
         * This picking also accepts a 'filter' function that can hide objects that are not pickable.<br>
         * As this filtering occurs prior to said GPU picking it may make some objects pickable even if those were initially hidden.<br>
         * For example, if a cube is behind a plane, it's not pickable because it's hidden.<br>
         * But if a filter that discards the plane is given, then the cube can be picked 'through' the plane.<br>
         * This feature is intended to implement picking through non opaque object not as a convenience filter to ignore some shapes.<br>
         * <br>
         */
        class RendererPicking extends geotoolkit3d.picking.AbstractPicking {
            /**
             * Default implementation for the picking renderer mechanism.<br>
             * <br>
             * This class uses rendering as a way to do picking.<br>
             * The idea is similar to the one used here: {@link http://threejs.org/examples/webgl_interactive_cubes_gpu.html THREEJS tutorial}<br>
             * Instead of rendering color in each pixel, it will render more information coded as a rgba pixel.<br>
             * Then it will read the pixel and extract the information encoded in it.<br>
             * <br>
             * To do so, it will replace the current materials by custom shader-materials which will encode the required information into the pixel.<br>
             * The picking might require several steps to retrieve all the information it needs, for each pass one rgba component will be read from the graphic card.<br>
             * Typically it will execute the picking-rendering 4 passes:<br>
             * <ul>
             *     <li>shape-identifier: First pass to find which shapes is at the given position using its identifier</li>
             *     <li>x-coordinate: Another pass to retrieve the world x coordinate at the pick position</li>
             *     <li>y-coordinate: Another pass to retrieve the world y coordinate at the pick position</li>
             *     <li>z-coordinate: Another pass to retrieve the world z coordinate at the pick position</li>
             * </ul>
             * For each pass, the scene will be reconfigured to write the corresponding attribute in place of the regular pixels.<br>
             * One could add more passes to the picking by declaring them in the #getExtraPickingModes() of the picking material.<br>
             * <br>
             * Unlike the Raycasting approach, the picking occurs on the GPU, which means that:<br>
             * <ul>
             *     <li>Vertex&Fragment shader are supported</li>
             *     <li>No distance based criteria, the shape rendered at the given pixel coordinates is the one picked</li>
             *     <li>Performance is based on frame rendering performance only, however it may require several frames for a single picking operation</li>
             *     <li>Returns only the closest object(s) to the camera (the one(s) visible on screen), transparency is ignored. (see filtering)</li>
             * </ul>
             * <br>
             * Note that this picking implementation accepts a width&height parameters to select shapes in a rectangle centered on the given coordinates.<br>
             * A given shape will be returned only once even if it has several pixels in the picked area.<br>
             * The results entry for such case would correspond to the pixel closest to the given picking coordinate.<br>
             * For example if the picked object fills the whole area being picked.<br>
             * Then the picking coordinates returned will match the center of the picked rectangle.<br>
             * <br>
             * This picking also accepts a 'filter' function that can hide objects that are not pickable.<br>
             * As this filtering occurs prior to said GPU picking it may make some objects pickable even if those were initially hidden.<br>
             * For example, if a cube is behind a plane, it's not pickable because it's hidden.<br>
             * But if a filter that discards the plane is given, then the cube can be picked 'through' the plane.<br>
             * This feature is intended to implement picking through non opaque object not as a convenience filter to ignore some shapes.<br>
             * <br>
             */
            constructor();
            /**
             * Register the picking material class to be used for picking for a given material.<br>
             * <br>
             * The picking renderer requires custom implementation of materials that write information instead of pixels.<br>
             * To customize the picking for a given object, one should implement the corresponding material and register it.<br>
             * <br>
             * @param materialClassName  (Required) The picked material's classname to replace
             * @param pickingMaterialConstructor  (Required) The picking material's constructor
             */
            static setPickingMaterial(materialClassName: string, pickingMaterialConstructor: THREE.Material): any;
            /**
             * Do a picking at the given plot coordinates and returns the objects found at this location.<br>
             * The returned objects will be in a json along with some meta information like xyz coordinates of the picked points.<br>
             * <br>
             * If using a width or height greater than 0, several object might be picked at once.<br>
             * In that case, the returned array would be sorted by distance to center pixel (device point given as parameter to this function).<br>
             * <br>
             * If using a width or height greater than 0, one object may occupy several pixels in the picked area.<br>
             * Such object will be be returned only once in the result array.<br>
             * The results entry will correspond to the pixel closest to the given picking coordinate.<br>
             * <br>
             * @param plot  (Required) The target plot
             * @param x  (Required) The x coordinate in plot device space
             * @param y  (Required) The y coordinate in plot device space
             * @param width  (Optional) The amount of pixels to consider on the left and right side of the given x (effective width will be 2 times given width, plus 1 (the center pixel))
             * @param height  (Optional) The amount of pixels to consider on the top and bottom side of the given y (effective height will be 2 times given height, plus 1 (the center pixel))
             * @param filter  (Optional) A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link geotoolkit3d.picking.RendererPicking filtering} documentation)
             */
            static pick(plot: geotoolkit3d.Plot, x: number, y: number, width?: number, height?: number, filter?: Function): any[];
        }
        module pickingrenderer {
            /**
             * The parent class for picking materials that uses a Shader based picking mechanism.<br>
             * <br>
             * The shader chunks and uniforms contained in this class should be used to compute/write picking information in pixels.<br>
             * <br>
             */
            class AbstractShaderPickingMaterial extends THREE.ShaderMaterial {
                /**
                 * The parent class for picking materials that uses a Shader based picking mechanism.<br>
                 * <br>
                 * The shader chunks and uniforms contained in this class should be used to compute/write picking information in pixels.<br>
                 * <br>
                 * @param options  (Optional) The options
                 * @param options.uniforms  (Optional) The object describing the uniforms for this material in the usual THREEJS format
                 * @param options.vertexshader  (Optional) The vertex shader (GLSL code)
                 * @param options.fragmentshader  (Optional) The fragment shader (GLSL code)
                 * @param options.material  (Optional) The material replaced by this picking material
                 */
                constructor(options?: any | { uniforms?: any; vertexshader?: string; fragmentshader?: string; material?: THREE.Material; } );
                /**
                 * Builtin picking modes.<br>
                 * <br>
                 * This is used to tell the GPU which picking phase is currently occurring.<br>
                 * It will be use din the picking shaders to choose which information to encode in the picked pixel.<br>
                 */
                static PickingModes: any;
                /**
                 * Set picking options, note that this setOptions expects all mandatory parameters to be set
                 * @param options  (Required) The picking options
                 * @param options.plot  (Optional) The plot
                 * @param options.x  (Optional) The x coordinate in device
                 * @param options.y  (Optional) The y coordinate in device
                 * @param options.pickingmode  (Optional) The picking mode
                 * @param options.pickingrgba  (Optional) The shape unique identifier as RGBA
                 * @param options.candidates  (Optional) The objects being picked (mandatory for XYZ)
                 * @param options.projectioninversematrix  (Optional) The inverse projection matrix (mandatory for XYZ)
                 * @param options.viewinversematrix  (Optional) The inverse view matrix (mandatory for XYZ)
                 * @param options.normalizationmatrix  (Optional) The matrix that normalize model coordinates
                 */
                setOptions(options: any | { plot?: geotoolkit3d.Plot; x?: number; y?: number; pickingmode?: geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes|number; pickingrgba?: THREE.Vector4; candidates?: THREE.Object3D[]; projectioninversematrix?: THREE.Matrix4; viewinversematrix?: THREE.Matrix4; normalizationmatrix?: THREE.Matrix4; } ): this;
                /**
                 * Computes a matrix to transform coordinates contained in the plot model space to ]0...1[.<br>
                 * This is used to normalize coordinates during picking so that the GPU will only handle normalized coordinates.<br>
                 * @param plot  (Required) The plot to compute the normalization matrix for
                 */
                static computePlotNormMatrix(plot: geotoolkit3d.Plot): THREE.Matrix4;
                /**
                 * Computes a matrix to transform coordinates contained in ]0...1[ to a plot model space.<br>
                 * This is used to un-normalize coordinates returned by the GPU.<br>
                 * @param plot  (Required) The Plot to compute the inverse normalization matrix for
                 */
                static computePlotNormInvMatrix(plot: geotoolkit3d.Plot): THREE.Matrix4;
            }
            /**
             * Basic implementation of a picking material.<br>
             * This material assumes that the material used for rendering is using the common features of THREEJS (common uniforms).<br>
             * This class combines the features provided by {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial} to create a working picking material.<br>
             * However, even if this material is fully operational, it's not used directly.<br>
             * It's inherited by default implementations of picking materials which are used in place of this raw/basic class.<br>
             */
            class BasicPickingMaterial extends geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial {
                /**
                 * Basic implementation of a picking material.<br>
                 * This material assumes that the material used for rendering is using the common features of THREEJS (common uniforms).<br>
                 * This class combines the features provided by {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial} to create a working picking material.<br>
                 * However, even if this material is fully operational, it's not used directly.<br>
                 * It's inherited by default implementations of picking materials which are used in place of this raw/basic class.<br>
                 */
                constructor();
                /**
                 * See {@link geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial#setOptions} for details
                 * @param options  (Required) The picking options
                 */
                setOptions(options: any): this;
            }
            /**
             * Material used to do renderer picking on a Line.<br>
             */
            class DefaultLinePickingMaterial extends geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial {
                /**
                 * Material used to do renderer picking on a Line.<br>
                 */
                constructor();
            }
            /**
             * Material used to do renderer picking on a plain/simple Mesh.<br>
             */
            class DefaultMeshPickingMaterial extends geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial {
                /**
                 * Material used to do renderer picking on a plain/simple Mesh.<br>
                 */
                constructor();
            }
            /**
             * This class implements the renderer-based-picking behavior for Sprites.<br>
             * As Sprites are renderer through the THREE.SpritePlugin, there is no easy way to override the shader used. (r71)<br>
             * <br>
             * This class emulates some of the behavior that should have been in the shader itself.<br>
             * So that renderer pickin can be done on Sprites.<br>
             * Note that this implementation ignores any transparency in the sprite and does picking on the whole area covered by the sprite.<br>
             * <br>
             */
            class DefaultSpritePickingMaterial extends THREE.SpriteMaterial {
                /**
                 * This class implements the renderer-based-picking behavior for Sprites.<br>
                 * As Sprites are renderer through the THREE.SpritePlugin, there is no easy way to override the shader used. (r71)<br>
                 * <br>
                 * This class emulates some of the behavior that should have been in the shader itself.<br>
                 * So that renderer pickin can be done on Sprites.<br>
                 * Note that this implementation ignores any transparency in the sprite and does picking on the whole area covered by the sprite.<br>
                 * <br>
                 */
                constructor();
                /**
                 * Set picking options, note that this setOptions expects all mandatory parameters to be set
                 * @param options  (Required) The picking options
                 * @param options.plot  (Optional) The plot
                 * @param options.x  (Optional) The x coordinate in device
                 * @param options.y  (Optional) The y coordinate in device
                 * @param options.pickingmode  (Optional) The picking mode
                 * @param options.pickingrgba  (Optional) The shape unique identifier as RGBA
                 * @param options.candidates  (Optional) The objects being picked (mandatory for XYZ)
                 * @param options.projectioninversematrix  (Optional) The inverse projection matrix (mandatory for XYZ)
                 * @param options.viewinversematrix  (Optional) The inverse view matrix (mandatory for XYZ)
                 * @param options.normalizationmatrix  (Optional) The matrix that normalize model coordinates
                 */
                setOptions(options: any | { plot?: geotoolkit3d.Plot; x?: number; y?: number; pickingmode?: geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial.PickingModes|number; pickingrgba?: THREE.Vector4; candidates?: THREE.Object3D[]; projectioninversematrix?: THREE.Matrix4; viewinversematrix?: THREE.Matrix4; normalizationmatrix?: THREE.Matrix4; } ): this;
            }
            /**
             * Material used to do renderer picking on a shader based Mesh.<br>
             * Unlike picking materials based on {@link geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial}, this materials does not assumes any uniform exists on the replaced material.<br>
             */
            class DefaultShaderPickingMaterial extends geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial {
                /**
                 * Material used to do renderer picking on a shader based Mesh.<br>
                 * Unlike picking materials based on {@link geotoolkit3d.picking.pickingrenderer.BasicPickingMaterial}, this materials does not assumes any uniform exists on the replaced material.<br>
                 */
                constructor();
            }
            /**
             * Material used to do renderer picking on a PointCloud.<br>
             */
            class DefaultPointCloudPickingMaterial extends geotoolkit3d.picking.pickingrenderer.AbstractShaderPickingMaterial {
                /**
                 * Material used to do renderer picking on a PointCloud.<br>
                 */
                constructor();
            }
            module AbstractShaderPickingMaterial {
                /**
                 * Builtin picking modes.<br>
                 * <br>
                 * This is used to tell the GPU which picking phase is currently occurring.<br>
                 * It will be use din the picking shaders to choose which information to encode in the picked pixel.<br>
                 */
                interface PickingModes {
                    /**
                     * ID mode, shader will encode the shape unique id.
                     */
                    Id: number;
                    /**
                     * X mode, shader will encode the picked point x coordinate.
                     */
                    X: number;
                    /**
                     * ID mode, shader will encode the picked point y coordinate.
                     */
                    Y: number;
                    /**
                     * ID mode, shader will encode the picked point z coordinate.
                     */
                    Z: number;
                }
            }
        }
    }
    module transformation {
        /**
         * A XYCoordinates coordinates object.<br>
         * <br>
         * This object holds the information about the XY coordinates of a seismic volume.<br>
         * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the XY coordinates.<br>
         */
        class XYCoordinates {
            /**
             * A XYCoordinates coordinates object.<br>
             * <br>
             * This object holds the information about the XY coordinates of a seismic volume.<br>
             * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the XY coordinates.<br>
             */
            constructor();
            /**
             * Initialize XYCoordinates using given json.<br>
             * <br>
             * Only 3 corners out of 4 are required.<br>
             * @param xy  (Required) The xy json
             * @param xy.x0  (Optional) The first point x value
             * @param xy.y0  (Optional) The first point y value
             * @param xy.x1  (Optional) The second point x value
             * @param xy.y1  (Optional) The second point y value
             * @param xy.x2  (Optional) The third point x value
             * @param xy.y2  (Optional) The third point y value
             * @param xy.x3  (Optional) The fourth point x value
             * @param xy.y3  (Optional) The fourth point y value
             * @param xy.z0  (Optional) The start depth
             * @param xy.z1  (Optional) The end depth
             */
            fromJSONXY(xy: any | { x0?: number; y0?: number; x1?: number; y1?: number; x2?: number; y2?: number; x3?: number; y3?: number; z0?: number; z1?: number; } ): this;
            /**
             * Initialize XYCoordinates using given json.<br>
             * <br>
             * Only 3 corners out of 4 are required.<br>
             * @param xy  (Required) 
             * @param xy.p0  (Optional) The first point
             * @param xy.p1  (Optional) The second point
             * @param xy.p2  (Optional) The third point
             * @param xy.p3  (Optional) The fourth point
             * @param xy.z0  (Optional) The first z value
             * @param xy.z1  (Optional) The last z value
             */
            fromJSONPoints(xy: any | { p0?: THREE.Vector2; p1?: THREE.Vector2; p2?: THREE.Vector2; p3?: THREE.Vector2; z0?: number; z1?: number; } ): this;
            /**
             * Returns the bounding box
             */
            asBox3(): THREE.Box3;
            /**
             * Returns the bounding box with z being elevation
             */
            asElevationBox3(): THREE.Box3;
            /**
             * Returns if the point is inside the box
             * @param point  (Required) the point to check if it is inside the box
             */
            isPointInside(point: THREE.Vector3): boolean;
        }
        /**
         * IndexCoordinates coordinates object.<br>
         * <br>
         * This object holds the information about the index coordinates of a seismic volume.<br>
         * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the index coordinates.<br>
         */
        class IndexCoordinates extends geotoolkit3d.transformation.XYCoordinates {
            /**
             * IndexCoordinates coordinates object.<br>
             * <br>
             * This object holds the information about the index coordinates of a seismic volume.<br>
             * It is used to compute a Index-to-XY transformation and provides some utility function to retrieve the index coordinates.<br>
             */
            constructor();
            /**
             * Gets the sample rate
             */
            getSampleRate(): number;
            /**
             * Gets the I step
             */
            getIStep(): number;
            /**
             * Gets the J step
             */
            getJStep(): number;
            /**
             * Initialize index using given json.<br>
             * <br>
             * Only 3 corners out of 4 are required.<br>
             * The third dimension (z) can be specified either using z0&z1&samplerate or z0&samplecount&samplerate.<br>
             * @param index  (Required) 
             * @param index.i0  (Optional) 
             * @param index.j0  (Optional) 
             * @param index.i1  (Optional) 
             * @param index.j1  (Optional) 
             * @param index.i2  (Optional) 
             * @param index.j2  (Optional) 
             * @param index.i3  (Optional) 
             * @param index.j3  (Optional) 
             * @param index.z0  (Optional) 
             * @param index.z1  (Optional) 
             * @param index.samplerate  (Optional) 
             * @param index.samplecount  (Optional) 
             */
            fromJSONCornerPoints(index: any | { i0?: number; j0?: number; i1?: number; j1?: number; i2?: number; j2?: number; i3?: number; j3?: number; z0?: number; z1?: number; samplerate?: number; samplecount?: number; } ): this;
            /**
             * Initialize index using given json.<br>
             * <br>
             * The third dimension (z) can be specified either using z0&z1&samplerate or z0&samplecount&samplerate<br>
             * @param index  (Required) The json
             * @param index.i0  (Optional) The starting 'i' index value
             * @param index.icount  (Optional) The 'i' index count
             * @param index.istep  (Optional) The 'i' index step
             * @param index.j0  (Optional) The starting 'j' index value
             * @param index.jcount  (Optional) The 'j' index count
             * @param index.jstep  (Optional) The 'j' index step
             * @param index.z0  (Optional) The starting 'z' index value
             * @param index.z1  (Optional) The last 'z' index value
             * @param index.samplerate  (Optional) The 'z' index step
             * @param index.samplecount  (Optional) The 'z' index count
             */
            fromJSONIndex(index: any | { i0?: number; icount?: number; istep?: number; j0?: number; jcount?: number; jstep?: number; z0?: number; z1?: number; samplerate?: number; samplecount?: number; } ): this;
        }
    }
    module controller {
        /**
         * A controller that emulates an 'Orbit' behavior.<br>
         * <br>
         * This controller let the user manipulate the camera position using mouse or touch input.<br>
         * <br>
         * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
         * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
         * <br>
         * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
         * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
         * So that the user cannot put the camera upside down.<br>
         * <br>
         * This controller also support 'zooming' by moving the camera forward or backward.<br>
         * <br>
         * To be used, it should be set on the Plot through the setOptions function.
         * <br>
         * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
         * <br>
         */
        class OrbitController extends geotoolkit3d.tool.AbstractGestureTool {
            /**
             * A controller that emulates an 'Orbit' behavior.<br>
             * <br>
             * This controller let the user manipulate the camera position using mouse or touch input.<br>
             * <br>
             * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
             * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
             * <br>
             * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
             * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
             * So that the user cannot put the camera upside down.<br>
             * <br>
             * This controller also support 'zooming' by moving the camera forward or backward.<br>
             * <br>
             * To be used, it should be set on the Plot through the setOptions function.
             * <br>
             * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
             * <br>
             * @param options  (Optional) The options
             * @param options.enabled  (Optional) Disable this controller
             * @param options.nozoom  (Optional) Disable zooming
             * @param options.zoomspeed  (Optional) Zoom speed factor
             * @param options.mindistance  (Optional) Minimum distance when zooming
             * @param options.maxdistance  (Optional) Maximum distance when zooming
             * @param options.norotate  (Optional) Disable rotation
             * @param options.rotatespeed  (Optional) Rotation speed factor
             * @param options.nopan  (Optional) Disable panning
             * @param options.nodblclick  (Optional) Disable lookAt redefinition using double click
             * @param options.dblclickspeed  (Optional) Double click speed emulation (for touch devices) in ms
             */
            constructor(options?: any | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; mindistance?: number; maxdistance?: number; norotate?: boolean; rotatespeed?: number; nopan?: boolean; nodblclick?: boolean; dblclickspeed?: number; } );
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Optional) The options
             * @param options.enabled  (Optional) Disable this controller
             * @param options.nozoom  (Optional) Disable zooming
             * @param options.zoomspeed  (Optional) Zoom speed factor
             * @param options.mindistance  (Optional) Minimum distance when zooming
             * @param options.maxdistance  (Optional) Maximum distance when zooming
             * @param options.norotate  (Optional) Disable rotation
             * @param options.rotatespeed  (Optional) Rotation speed factor
             * @param options.nopan  (Optional) Disable panning
             * @param options.nodblclick  (Optional) Disable lookAt redefinition using double click
             * @param options.dblclickspeed  (Optional) Double click speed emulation (for touch devices) in ms
             */
            setOptions(options?: any | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; mindistance?: number; maxdistance?: number; norotate?: boolean; rotatespeed?: number; nopan?: boolean; nodblclick?: boolean; dblclickspeed?: number; } ): this;
        }
        /**
         * A controller that emulates an 'Orbit' behavior.<br>
         * <br>
         * This controller let the user manipulate the camera position using mouse or touch input.<br>
         * <br>
         * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
         * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
         * <br>
         * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
         * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
         * So that the user cannot put the camera upside down.<br>
         * <br>
         * This controller also support 'zooming' by moving the camera forward or backward.<br>
         * <br>
         * To be used, it should be set on the Plot through the setOptions function.
         * <br>
         * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
         * <br>
         */
        class FirstPersonController extends geotoolkit3d.controller.OrbitController {
            /**
             * A controller that emulates an 'Orbit' behavior.<br>
             * <br>
             * This controller let the user manipulate the camera position using mouse or touch input.<br>
             * <br>
             * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
             * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
             * <br>
             * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
             * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
             * So that the user cannot put the camera upside down.<br>
             * <br>
             * This controller also support 'zooming' by moving the camera forward or backward.<br>
             * <br>
             * To be used, it should be set on the Plot through the setOptions function.
             * <br>
             * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
             * <br>
             * @param options  (Optional) The options
             * @param options.enabled  (Optional) Disable this controller
             * @param options.nozoom  (Optional) Disable zooming
             * @param options.zoomspeed  (Optional) Zoom speed factor
             * @param options.mindistance  (Optional) Minimum distance when zooming
             * @param options.maxdistance  (Optional) Maximum distance when zooming
             * @param options.norotate  (Optional) Disable rotation
             * @param options.rotatespeed  (Optional) Rotation speed factor
             * @param options.nopan  (Optional) Disable panning
             * @param options.nodblclick  (Optional) Disable lookAt redefinition using double click
             * @param options.dblclickspeed  (Optional) Double click speed emulation (for touch devices) in ms
             * @param options.pointerlock  (Optional) lock the cursor to the canvas on mouse down
             * @param options.inverty  (Optional) invert the y values, false = mouse down, camera looks down
             */
            constructor(options?: any | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; mindistance?: number; maxdistance?: number; norotate?: boolean; rotatespeed?: number; nopan?: boolean; nodblclick?: boolean; dblclickspeed?: number; pointerlock?: boolean; inverty?: boolean; } );
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Optional) The options
             * @param options.enabled  (Optional) Disable this controller
             * @param options.nozoom  (Optional) Disable zooming
             * @param options.zoomspeed  (Optional) Zoom speed factor
             * @param options.mindistance  (Optional) Minimum distance when zooming
             * @param options.maxdistance  (Optional) Maximum distance when zooming
             * @param options.norotate  (Optional) Disable rotation
             * @param options.rotatespeed  (Optional) Rotation speed factor
             * @param options.nopan  (Optional) Disable panning
             * @param options.nodblclick  (Optional) Disable lookAt redefinition using double click
             * @param options.dblclickspeed  (Optional) Double click speed emulation (for touch devices) in ms
             * @param options.pointerlock  (Optional) lock the cursor to the canvas on mouse down
             * @param options.inverty  (Optional) invert the y values, false = mouse down, camera looks down
             */
            setOptions(options?: any | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; mindistance?: number; maxdistance?: number; norotate?: boolean; rotatespeed?: number; nopan?: boolean; nodblclick?: boolean; dblclickspeed?: number; pointerlock?: boolean; inverty?: boolean; } ): any;
        }
        /**
         * A controller that emulates an 'Trackball' behavior.<br>
         * <br>
         * This controller let the user manipulate the camera position using mouse or touch input.<br>
         * <br>
         * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
         * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
         * <br>
         * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
         * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
         * So that the user cannot put the camera upside down.<br>
         * <br>
         * This controller also support 'zooming' by moving the camera forward or backward.<br>
         * <br>
         * To be used, it should be set on the Plot through the setOptions function.
         * <br>
         * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
         * <br>
         */
        class TrackballController extends geotoolkit3d.tool.AbstractGestureTool {
            /**
             * A controller that emulates an 'Trackball' behavior.<br>
             * <br>
             * This controller let the user manipulate the camera position using mouse or touch input.<br>
             * <br>
             * This controller uses a 3D anchor point and will revolve around it (named lookAt).<br>
             * This anchor point can be changed either by user action (double click/tap) or programmatically.<br>
             * <br>
             * It will let the user rotate the camera on the 'horizontal' axis infinitely.<br>
             * But it prevents the user from rotate the camera on the vertical axis more than 0-180 degrees.<br>
             * So that the user cannot put the camera upside down.<br>
             * <br>
             * This controller also support 'zooming' by moving the camera forward or backward.<br>
             * <br>
             * To be used, it should be set on the Plot through the setOptions function.
             * <br>
             * Most of the behaviors can be configured either for speed or even to disable some actions through the setOptions.
             * <br>
             * @param options  (Optional) 
             * @param options.enabled  (Optional) Disable this controller
             * @param options.nozoom  (Optional) Disable zooming
             * @param options.zoomspeed  (Optional) Zoom speed factor
             * @param options.mindistance  (Optional) Minimum distance when zooming
             * @param options.maxdistance  (Optional) Maximum distance when zooming
             * @param options.norotate  (Optional) Disable rotation
             * @param options.rotatespeed  (Optional) Rotation speed factor
             * @param options.nopan  (Optional) Disable panning
             * @param options.panspeed  (Optional) Panning speed factor
             * @param options.noroll  (Optional) Disable rolling
             * @param options.nodblclick  (Optional) Disable lookAt redefinition using double click
             * @param options.dblclickspeed  (Optional) Double click speed emulation (for touch devices) in ms
             */
            constructor(options?: any | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; mindistance?: number; maxdistance?: number; norotate?: boolean; rotatespeed?: number; nopan?: boolean; panspeed?: number; noroll?: boolean; nodblclick?: boolean; dblclickspeed?: number; } );
            /**
             * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
             * @param options  (Optional) The options
             * @param options.enabled  (Optional) Disable this controller
             * @param options.nozoom  (Optional) Disable zooming
             * @param options.zoomspeed  (Optional) Zoom speed factor
             * @param options.mindistance  (Optional) Minimum distance when zooming
             * @param options.maxdistance  (Optional) Maximum distance when zooming
             * @param options.norotate  (Optional) Disable rotation
             * @param options.rotatespeed  (Optional) Rotation speed factor
             * @param options.nopan  (Optional) Disable panning
             * @param options.panspeed  (Optional) Panning speed factor
             * @param options.noroll  (Optional) Disable rolling
             * @param options.nodblclick  (Optional) Disable lookAt redefinition using double click
             * @param options.dblclickspeed  (Optional) Double click speed emulation (for touch devices) in ms
             */
            setOptions(options?: any | { enabled?: boolean; nozoom?: boolean; zoomspeed?: number; mindistance?: number; maxdistance?: number; norotate?: boolean; rotatespeed?: number; nopan?: boolean; panspeed?: number; noroll?: boolean; nodblclick?: boolean; dblclickspeed?: number; } ): this;
        }
    }
    module Util {
        /**
         * Seismic display mode enum.<br>
         * <br>
         * This enum is used to determine how to transform Index coordinates when rendering Seismic related objects.<br>
         */
        interface SeismicModes {
            /**
             * Display mode for Inline-crossline, ij, index.
             */
            ij: string;
            /**
             * Display mode for Inline-crossline, ij, index with the I coordinate flipped
             */
            ijflipped: string;
            /**
             * Display mode for XY
             */
            xy: string;
        }
    }
    module Plot {
        /**
         * Enum of builtin camera types.<br>
         * Each Camera has its own projection algorithm.<br>
         */
        interface CameraType {
            /**
             * Camera will be using a perspective projection
             */
            Perspective: string;
            /**
             * Camera will be using an orthographic projection
             */
            Orthographic: string;
        }
        /**
         * Enum of ways to have the orthographic camera resize<br>
         */
        interface OrthographicResizeMode {
            /**
             * Cameras view port will not be modified <br>
             */
            None: string;
            /**
             * Cameras view port will try to maintain the current view scale<br>
             * scene will keep the view but cut off space to maintain view scale.
             */
            MaintainScale: string;
        }
        /**
         * Enum of builtin controller types.<br>
         * To provide your own controller simply pass the constructor function/class to the setOption instead of one of the enum value.<br>
         * <br>
         * This constructor will be called with this json:<br>
         * <pre>
         * {
         *  'camera': The camera object,
         *  'plot': This plot,
         *  'position': The initial/current position,
         *  'lookat': The initial/current lookat
         * }</pre>
         */
        interface CameraControllerType {
            /**
             * Moves the camera so that it revolves around a given point.
             */
            Orbit: string;
            /**
             * Behaves like a trackball, the 3D scene being the ball.
             */
            TrackBall: string;
            /**
             * Moves like a first person camera - commonly referred to as FPS controllers
             */
            FirstPerson: string;
            /**
             * No interactive controller.
             */
            None: string;
        }
    }
    module Event {
        /**
         * List of builtin events fired/listened by the 3D toolkit itself.<br>
         * <br>
         * Those event types will be used by the 3D toolkit when a corresponding event occurs.<br>
         * The toolkit also listen to some of those events to update its state (dirty, size, etc).<br>
         */
        interface Type {
            /**
             * BeforeRender.<br>
             * <br>
             * Plot fires this event before the plot prepares it render
             */
            BeforeRender: string;
            /**
             * AfterRender.<br>
             * <br>
             * Plot fires this event after the plot completes its render
             */
            AfterRender: string;
            /**
             * Invalidate.<br>
             * <br>
             * Used whenever a change on a node explicitly requires an invalidation and render.
             */
            Invalidate: string;
            /**
             * Node added.<br>
             * <br>
             * Used whenever a node has been added to the scenegraph, note that it will be sent only once even if the given node itself has children.
             */
            Add: string;
            /**
             * Node removed.<br>
             * <br>
             * Used whenever a node has been removed from the scenegraph.<br>
             * Note that this event will be sent only for the removed node.<br>
             * And not for its own children as those have not been removed from their parent.<br>
             */
            Remove: string;
            /**
             * Camera related.<br>
             * <br>
             * Used whenever the camera moves, rotates or has changed in any way
             */
            Camera: string;
            /**
             * Plot resizing.<br>
             * <br>
             * Used when the plot has been resized
             */
            Resize: string;
            /**
             * Animation occurred.<br>
             * <br>
             * Used when an intermediate step of an animation has finished in the {@link geotoolkit3d.scene.animation.AnimationManager}
             */
            Animation: string;
            /**
             * Model limits changed.<br>
             * <br>
             * Used when a node has changed its boundingbox. <br>
             * This may trigger a recompute of the modellimits of the Plot
             */
            ModelLimits: string;
        }
    }
}
