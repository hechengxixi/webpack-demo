define(["dojo/_base/declare",
        "dojo/_base/window",
        "dojo/query",
        "dojo/_base/array",
        "dojo/_base/connect",
        "dojo/_base/event",
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/dom-style",
        "dojo/dom-attr",
        "dojo/touch",
        "dojox/mobile/sniff", 
        "dojox/mobile/Switch",
        "dojo/NodeList-dom",
        "dojo/NodeList-manipulate",
        "xstyle/css!./css/switch.css"
		],
		function(
		declare,
        win,
        query,
        array, 
        connect, 
        event, 
        domClass, 
        domConstruct, 
        domStyle, 
        domAttr, 
        touch,
        has,
		Switch
		){
			return declare("lianpux.form.Switch", [Switch],{
                disabled:false,
                leftIconClass:"fa fa-check",
                rightIconClass:"fa fa-close",
                // 默认值为off
                value:"off",
                
                // shape: String
                //		The shape of the switch.
                //		"mblSwDefaultShape", "mblSwThinShape","mblSwThinShape-samll",mblSwSquareShape", "mblSwRoundShape1",
                //		"mblSwRoundShape2", "mblSwArcShape1" or "mblSwArcShape2".
                //		The default value is "mblSwDefaultShape".
                shape: "mblSwThinShape-samll",
                
				baseClass:'lianpuxSwitch '+Switch.prototype.baseClass,
				
                _setDisabledAttr: function(val){
                    this._set('disabled',val);
                    if(this.domNode){
                        if(val){
                            query(this.domNode).addClass('disabled');
                        }else{
                            query(this.domNode).removeClass('disabled');
                        }
                            
                        
                    }
                },
                _setLeftIconClassAttr: function(val){
                    this._set('leftIconClass',val);
                    if(this.value === "on" && this.shape.indexOf("mblSwThinShape")!== -1)
                        query(".mblSwitchKnob", this.domNode).html("<i class='"+val+"'></i>");
                },
                _setRightIconClassAttr: function(val){
                    this._set('rightIconClass',val);
                    if(this.value !== "on" && this.shape.indexOf("mblSwThinShape")!== -1)
                        query(".mblSwitchKnob", this.domNode).html("<i class='"+val+"'></i>");
                },
                buildRendering: function(){
                    if(this.shape.indexOf("mblSwThinShape")!== -1){
                        this.leftLabel = '';
                        this.rightLabel = '';
                    }
                    this.inherited(arguments);
                    if(this.shape.indexOf("mblSwThinShape")!== -1){
                        domAttr.set(this.domNode, 'aria-shape', this.shape);
                        query(".mblSwitchKnob", this.domNode).html(this.value === "on" ? "<i class='"+this.leftIconClass+"'></i>":"<i class='"+this.rightIconClass+"'></i>");
                    }
                    
                },
                /**
                 * Overwrite
                 */
                _changeState: function(/*String*/state, /*Boolean*/anim){
                    this.inherited(arguments);
                    if(this.shape.indexOf("mblSwThinShape")!== -1){
                        query(".mblSwitchKnob", this.domNode).html(state === "on" ? "<i class='"+this.leftIconClass+"'></i>":"<i class='"+this.rightIconClass+"'></i>");
                    }
                },
                
                postCreate: function(){
                    this.inherited(arguments);
                     if(this.disabled){
                        query(this.domNode).addClass('disabled');
                    }
                },
                /**
                 * Overwrite
                 */
                _onClick: function(e){
                    // summary:
                    //		Internal handler for click events.
                    // tags:
                    //		private
                    if(this.disabled){return;}
                    if(e && e.type === "keydown" && e.keyCode !== 13){ return; }
                    if(this.onClick(e) === false){ return; } // user's click action
                    if(this._moved){ return; }
                    this._set("value", this.input.value = (this.value == "on") ? "off" : "on");
                    this._changeState(this.value, true);
                    this.onStateChanged(this.value);
                },
                /**
                 * Overwrite
                 */
                onTouchStart: function(/*Event*/e){
                	// summary:
                	//		Internal function to handle touchStart events.
                    if(this.disabled){return;}
                	this._moved = false;
                	this.innerStartX = this.inner.offsetLeft;
                	if(!this._conn){
                		this._conn = [
                			this.connect(this.inner, touch.move, "onTouchMove"),
                			this.connect(win.doc, touch.release, "onTouchEnd")
                		];
                
                		/* While moving the slider knob sometimes IE fires MSPointerCancel event. That prevents firing
                		MSPointerUP event (http://msdn.microsoft.com/ru-ru/library/ie/hh846776%28v=vs.85%29.aspx) so the
                		knob can be stuck in the middle of the switch. As a fix we handle MSPointerCancel event with the
                		same lintener as for MSPointerUp event.
                		*/
                		if(has("windows-theme")){
                			this._conn.push(this.connect(win.doc, "MSPointerCancel", "onTouchEnd"));
                		}
                	}
                	this.touchStartX = e.touches ? e.touches[0].pageX : e.clientX;
                	this.left.style.display = "";
                	this.right.style.display = "";
                	event.stop(e);
                	this._createMaskImage();
                },
                /**
                 * Overwrite  
                 * TODO: 解决在chrome下，maskUtils.createRoundMask报错的问题
                 */
 				_createMaskImage: function(){
 					// summary:
 					//		Internal function to handle touchStart events.
 					if(this._timer){
 						 this._timer.remove();
 						 delete this._timer;
 					}
 					if(this._hasMaskImage){ return; }
 					this._width = this.switchNode.offsetWidth - this.knob.offsetWidth;
 					this._hasMaskImage = true;
                    // TODO：新版本呢chrome不在支持和getCSSCanvasContext
 					//if(!(has("webkit")||has("svg"))){ return; }
                    if(!has("safari")){return;}
 					var rDef = domStyle.get(this.left, "borderTopLeftRadius");
 					if(rDef == "0px"){ return; }
 					var rDefs = rDef.split(" ");
 					var rx = parseFloat(rDefs[0]), ry = (rDefs.length == 1) ? rx : parseFloat(rDefs[1]);
 					var w = this.switchNode.offsetWidth, h = this.switchNode.offsetHeight;
 					var id = (this.shape+"Mask"+w+h+rx+ry).replace(/\./,"_");
                    
 					maskUtils.createRoundMask(this.switchNode, 0, 0, 0, 0, w, h, rx, ry, 1);
 				},
                /**
                 * Overwrite
                 */
                _setLeftLabelAttr: function(/*String*/label){
                	this.leftLabel = label;
                    if(this.shape.indexOf("mblSwThinShape")!== -1){return}
                	this.left.firstChild.innerHTML = this._cv ? this._cv(label) : label;
                },
                /**
                 * Overwrite
                 */
                _setRightLabelAttr: function(/*String*/label){
                	this.rightLabel = label;
                    if(this.shape.indexOf("mblSwThinShape")!== -1){return}
                	this.right.firstChild.innerHTML = this._cv ? this._cv(label) : label;
                },
                
			});
			
			
		});