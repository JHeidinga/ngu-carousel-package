(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ngu/carousel', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.ngu = global.ngu || {}, global.ngu.carousel = {}),global.ng.core,global.ng.common,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,common,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguCarouselStore = /** @class */ (function () {
        function NguCarouselStore(touch, vertical, interval, transform, button, visibleItems, deviceType, type, token, items, load, deviceWidth, carouselWidth, itemWidth, slideItems, itemWidthPer, itemLength, currentSlide, easing, speed, loop, dexVal, touchTransform, isEnd, isFirst, isLast, RTL, point, velocity) {
            if (touch === void 0) {
                touch = new Touch();
            }
            if (vertical === void 0) {
                vertical = new Vertical();
            }
            if (transform === void 0) {
                transform = new Transfrom();
            }
            if (type === void 0) {
                type = 'fixed';
            }
            if (token === void 0) {
                token = '';
            }
            if (items === void 0) {
                items = 0;
            }
            if (load === void 0) {
                load = 0;
            }
            if (deviceWidth === void 0) {
                deviceWidth = 0;
            }
            if (carouselWidth === void 0) {
                carouselWidth = 0;
            }
            if (itemWidth === void 0) {
                itemWidth = 0;
            }
            if (slideItems === void 0) {
                slideItems = 0;
            }
            if (itemWidthPer === void 0) {
                itemWidthPer = 0;
            }
            if (itemLength === void 0) {
                itemLength = 0;
            }
            if (currentSlide === void 0) {
                currentSlide = 0;
            }
            if (easing === void 0) {
                easing = 'cubic-bezier(0, 0, 0.2, 1)';
            }
            if (speed === void 0) {
                speed = 200;
            }
            if (loop === void 0) {
                loop = false;
            }
            if (dexVal === void 0) {
                dexVal = 0;
            }
            if (touchTransform === void 0) {
                touchTransform = 0;
            }
            if (isEnd === void 0) {
                isEnd = false;
            }
            if (isFirst === void 0) {
                isFirst = true;
            }
            if (isLast === void 0) {
                isLast = false;
            }
            if (RTL === void 0) {
                RTL = false;
            }
            if (point === void 0) {
                point = true;
            }
            if (velocity === void 0) {
                velocity = 1;
            }
            this.touch = touch;
            this.vertical = vertical;
            this.interval = interval;
            this.transform = transform;
            this.button = button;
            this.visibleItems = visibleItems;
            this.deviceType = deviceType;
            this.type = type;
            this.token = token;
            this.items = items;
            this.load = load;
            this.deviceWidth = deviceWidth;
            this.carouselWidth = carouselWidth;
            this.itemWidth = itemWidth;
            this.slideItems = slideItems;
            this.itemWidthPer = itemWidthPer;
            this.itemLength = itemLength;
            this.currentSlide = currentSlide;
            this.easing = easing;
            this.speed = speed;
            this.loop = loop;
            this.dexVal = dexVal;
            this.touchTransform = touchTransform;
            this.isEnd = isEnd;
            this.isFirst = isFirst;
            this.isLast = isLast;
            this.RTL = RTL;
            this.point = point;
            this.velocity = velocity;
        }
        return NguCarouselStore;
    }());
    var ItemsControl = /** @class */ (function () {
        function ItemsControl() {
        }
        return ItemsControl;
    }());
    var Vertical = /** @class */ (function () {
        function Vertical() {
        }
        return Vertical;
    }());
    var NguButton = /** @class */ (function () {
        function NguButton() {
        }
        return NguButton;
    }());
    var Touch = /** @class */ (function () {
        function Touch() {
        }
        return Touch;
    }());
    var Transfrom = /** @class */ (function () {
        function Transfrom(xs, sm, md, lg, all) {
            if (xs === void 0) {
                xs = 0;
            }
            if (sm === void 0) {
                sm = 0;
            }
            if (md === void 0) {
                md = 0;
            }
            if (lg === void 0) {
                lg = 0;
            }
            if (all === void 0) {
                all = 0;
            }
            this.xs = xs;
            this.sm = sm;
            this.md = md;
            this.lg = lg;
            this.all = all;
        }
        return Transfrom;
    }());
    var NguCarouselConfig = /** @class */ (function () {
        function NguCarouselConfig() {
        }
        return NguCarouselConfig;
    }());
    /**
     * @template T
     */
    var /**
     * @template T
     */ NguCarouselOutletContext = /** @class */ (function () {
        function NguCarouselOutletContext(data) {
            this.$implicit = data;
        }
        return NguCarouselOutletContext;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguCarouselItemDirective = /** @class */ (function () {
        function NguCarouselItemDirective() {
        }
        NguCarouselItemDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[NguCarouselItem]'
                    },] },
        ];
        return NguCarouselItemDirective;
    }());
    var NguCarouselNextDirective = /** @class */ (function () {
        function NguCarouselNextDirective() {
        }
        NguCarouselNextDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[NguCarouselNext]'
                    },] },
        ];
        return NguCarouselNextDirective;
    }());
    var NguCarouselPrevDirective = /** @class */ (function () {
        function NguCarouselPrevDirective() {
        }
        NguCarouselPrevDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[NguCarouselPrev]'
                    },] },
        ];
        return NguCarouselPrevDirective;
    }());
    var NguCarouselPointDirective = /** @class */ (function () {
        function NguCarouselPointDirective() {
        }
        NguCarouselPointDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[NguCarouselPoint]'
                    },] },
        ];
        return NguCarouselPointDirective;
    }());
    /**
     * @template T
     */
    var NguCarouselDefDirective = /** @class */ (function () {
        function NguCarouselDefDirective(template) {
            this.template = template;
        }
        NguCarouselDefDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[nguCarouselDef]'
                    },] },
        ];
        NguCarouselDefDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef }
            ];
        };
        return NguCarouselDefDirective;
    }());
    var NguCarouselOutlet = /** @class */ (function () {
        function NguCarouselOutlet(viewContainer) {
            this.viewContainer = viewContainer;
        }
        NguCarouselOutlet.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[nguCarouselOutlet]'
                    },] },
        ];
        NguCarouselOutlet.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef }
            ];
        };
        return NguCarouselOutlet;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var NguCarousel = /** @class */ (function (_super) {
        __extends(NguCarousel, _super);
        function NguCarousel(_el, _renderer, _differs, platformId, cdr) {
            var _this = _super.call(this) || this;
            _this._el = _el;
            _this._renderer = _renderer;
            _this._differs = _differs;
            _this.platformId = platformId;
            _this.cdr = cdr;
            _this.withAnim = true;
            _this.isHovered = false;
            _this.carouselLoad = new core.EventEmitter();
            // tslint:disable-next-line:no-output-on-prefix
            _this.onMove = new core.EventEmitter();
            _this._intervalController$ = new rxjs.Subject();
            _this.pointNumbers = [];
            return _this;
        }
        Object.defineProperty(NguCarousel.prototype, "dataSource", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataSource;
            },
            set: /**
             * @param {?} data
             * @return {?}
             */ function (data) {
                if (data) {
                    // console.log(data, this.dataSource);
                    // this.isFirstss++;
                    this._switchDataSource(data);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NguCarousel.prototype, "nextBtn", {
            /** The setter is used to catch the button if the button has ngIf
             * issue id #91
             */
            set: /**
             * The setter is used to catch the button if the button has ngIf
             * issue id #91
             * @param {?} btn
             * @return {?}
             */ function (btn) {
                var _this = this;
                this.listener2 && this.listener2();
                if (btn) {
                    this.listener2 = this._renderer.listen(btn.nativeElement, 'click', function () {
                        return _this._carouselScrollOne(1);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NguCarousel.prototype, "prevBtn", {
            /** The setter is used to catch the button if the button has ngIf
             * issue id #91
             */
            set: /**
             * The setter is used to catch the button if the button has ngIf
             * issue id #91
             * @param {?} btn
             * @return {?}
             */ function (btn) {
                var _this = this;
                this.listener1 && this.listener1();
                if (btn) {
                    this.listener1 = this._renderer.listen(btn.nativeElement, 'click', function () {
                        return _this._carouselScrollOne(0);
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NguCarousel.prototype, "trackBy", {
            /**
             * Tracking function that will be used to check the differences in data changes. Used similarly
             * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
             * relative to the function to know if a Items should be added/removed/moved.
             * Accepts a function that takes two parameters, `index` and `item`.
             */
            get: /**
             * Tracking function that will be used to check the differences in data changes. Used similarly
             * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
             * relative to the function to know if a Items should be added/removed/moved.
             * Accepts a function that takes two parameters, `index` and `item`.
             * @return {?}
             */ function () {
                return this._trackByFn;
            },
            set: /**
             * @param {?} fn
             * @return {?}
             */ function (fn) {
                if (core.isDevMode() &&
                    fn != null &&
                    typeof fn !== 'function' &&
                    ( /** @type {?} */(console)) &&
                    ( /** @type {?} */(console.warn))) {
                    console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ".");
                }
                this._trackByFn = fn;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NguCarousel.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._dataDiffer = this._differs
                    .find([])
                    .create(function (_i, item) {
                    return _this.trackBy ? _this.trackBy(item.dataIndex, item.data) : item;
                });
            };
        /**
         * @return {?}
         */
        NguCarousel.prototype.ngDoCheck = /**
         * @return {?}
         */
            function () {
                this.arrayChanges = this._dataDiffer.diff(this.dataSource);
                if (this.arrayChanges && this._defDirec) {
                    // console.log('Changes detected!');
                    this._observeRenderChanges();
                }
            };
        /**
         * @param {?} dataSource
         * @return {?}
         */
        NguCarousel.prototype._switchDataSource = /**
         * @param {?} dataSource
         * @return {?}
         */
            function (dataSource) {
                this._dataSource = dataSource;
                if (this._defDirec) {
                    this._observeRenderChanges();
                }
            };
        /**
         * @return {?}
         */
        NguCarousel.prototype._observeRenderChanges = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var dataStream;
                if (this._dataSource instanceof rxjs.Observable) {
                    dataStream = this._dataSource;
                }
                else if (Array.isArray(this._dataSource)) {
                    dataStream = rxjs.of(this._dataSource);
                }
                if (dataStream) {
                    this._dataSubscription = dataStream
                        .pipe(operators.takeUntil(this._intervalController$))
                        .subscribe(function (data) {
                        _this.renderNodeChanges(data);
                        _this.isLast = false;
                    });
                }
            };
        /**
         * @param {?} data
         * @param {?=} viewContainer
         * @return {?}
         */
        NguCarousel.prototype.renderNodeChanges = /**
         * @param {?} data
         * @param {?=} viewContainer
         * @return {?}
         */
            function (data, viewContainer) {
                var _this = this;
                if (viewContainer === void 0) {
                    viewContainer = this._nodeOutlet.viewContainer;
                }
                if (!this.arrayChanges)
                    return;
                this.arrayChanges.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
                    // const node = this._defDirec.find(items => item.item);
                    /** @type {?} */
                    var node = _this._getNodeDef(data[currentIndex], currentIndex);
                    if (item.previousIndex == null) {
                        /** @type {?} */
                        var context = new NguCarouselOutletContext(data[currentIndex]);
                        context.index = currentIndex;
                        viewContainer.createEmbeddedView(node.template, context, currentIndex);
                    }
                    else if (currentIndex == null) {
                        viewContainer.remove(adjustedPreviousIndex);
                    }
                    else {
                        /** @type {?} */
                        var view = viewContainer.get(adjustedPreviousIndex);
                        viewContainer.move(view, currentIndex);
                    }
                });
                this._updateItemIndexContext();
                if (this.carousel) {
                    this._storeCarouselData();
                }
                // console.log(this.dataSource);
            };
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         */
        /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         * @return {?}
         */
        NguCarousel.prototype._updateItemIndexContext = /**
         * Updates the index-related context for each row to reflect any changes in the index of the rows,
         * e.g. first/last/even/odd.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var viewContainer = this._nodeOutlet.viewContainer;
                for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                    /** @type {?} */
                    var viewRef = ( /** @type {?} */(viewContainer.get(renderIndex)));
                    /** @type {?} */
                    var context = ( /** @type {?} */(viewRef.context));
                    context.count = count;
                    context.first = renderIndex === 0;
                    context.last = renderIndex === count - 1;
                    context.even = renderIndex % 2 === 0;
                    context.odd = !context.even;
                    context.index = renderIndex;
                }
            };
        /**
         * @param {?} data
         * @param {?} i
         * @return {?}
         */
        NguCarousel.prototype._getNodeDef = /**
         * @param {?} data
         * @param {?} i
         * @return {?}
         */
            function (data, i) {
                // console.log(this._defDirec);
                if (this._defDirec.length === 1) {
                    return this._defDirec.first;
                }
                /** @type {?} */
                var nodeDef = this._defDirec.find(function (def) { return def.when && def.when(i, data); }) ||
                    this._defaultNodeDef;
                return nodeDef;
            };
        /**
         * @return {?}
         */
        NguCarousel.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.carousel = this._el.nativeElement;
                this._inputValidation();
                this.carouselCssNode = this._createStyleElem();
                // this._buttonControl();
                if (window) {
                    this._carouselInterval();
                    if (!this.vertical.enabled) {
                        this._touch();
                    }
                    this.listener3 = this._renderer.listen('window', 'resize', function (event) {
                        _this._onResizing(event);
                    });
                    this._onWindowScrolling();
                }
            };
        /**
         * @return {?}
         */
        NguCarousel.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                this._observeRenderChanges();
                this.cdr.markForCheck();
            };
        /**
         * @return {?}
         */
        NguCarousel.prototype._inputValidation = /**
         * @return {?}
         */
            function () {
                this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
                this.loop = this.inputs.loop || false;
                this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
                this.touch.active = this.inputs.touch || false;
                this.RTL = this.inputs.RTL ? true : false;
                this.interval = this.inputs.interval || null;
                this.velocity =
                    typeof this.inputs.velocity === 'number'
                        ? this.inputs.velocity
                        : this.velocity;
                if (this.inputs.vertical && this.inputs.vertical.enabled) {
                    this.vertical.enabled = this.inputs.vertical.enabled;
                    this.vertical.height = this.inputs.vertical.height;
                }
                this.directionSym = this.RTL ? '' : '-';
                this.point =
                    this.inputs.point && typeof this.inputs.point.visible !== 'undefined'
                        ? this.inputs.point.visible
                        : true;
                this._carouselSize();
            };
        /**
         * @return {?}
         */
        NguCarousel.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                // clearInterval(this.carouselInt);
                clearTimeout(this.onInitialDelay);
                this.carouselInt && this.carouselInt.unsubscribe();
                this._intervalController$.unsubscribe();
                this.carouselLoad.complete();
                this.onMove.complete();
                /** remove listeners */
                for (var i = 1; i <= 4; i++) {
                    /** @type {?} */
                    var str = "listener" + i;
                    this[str] && this[str]();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NguCarousel.prototype._onResizing = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                clearTimeout(this.onResize);
                this.onResize = setTimeout(function () {
                    if (_this.deviceWidth !== event.target.outerWidth) {
                        _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', "");
                        _this._storeCarouselData();
                    }
                }, 500);
            };
        /** Get Touch input */
        /**
         * Get Touch input
         * @return {?}
         */
        NguCarousel.prototype._touch = /**
         * Get Touch input
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.inputs.touch) {
                    /** @type {?} */
                    var hammertime = new Hammer(this.touchContainer.nativeElement);
                    hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
                    hammertime.on('panstart', function (ev) {
                        _this.carouselWidth = _this.nguItemsContainer.nativeElement.offsetWidth;
                        _this.touchTransform = _this.transform[_this.deviceType];
                        _this.dexVal = 0;
                        _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', '');
                    });
                    if (this.vertical.enabled) {
                        hammertime.on('panup', function (ev) {
                            _this._touchHandling('panleft', ev);
                        });
                        hammertime.on('pandown', function (ev) {
                            _this._touchHandling('panright', ev);
                        });
                    }
                    else {
                        hammertime.on('panleft', function (ev) {
                            _this._touchHandling('panleft', ev);
                        });
                        hammertime.on('panright', function (ev) {
                            _this._touchHandling('panright', ev);
                        });
                    }
                    hammertime.on('panend', function (ev) {
                        if (Math.abs(ev.velocity) >= _this.velocity) {
                            _this.touch.velocity = ev.velocity;
                            /** @type {?} */
                            var direc = 0;
                            if (!_this.RTL) {
                                direc = _this.touch.swipe === 'panright' ? 0 : 1;
                            }
                            else {
                                direc = _this.touch.swipe === 'panright' ? 1 : 0;
                            }
                            _this._carouselScrollOne(direc);
                        }
                        else {
                            _this.dexVal = 0;
                            _this._setStyle(_this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                            _this._setStyle(_this.nguItemsContainer.nativeElement, 'transform', '');
                        }
                    });
                    hammertime.on('hammer.input', function (ev) {
                        // allow nested touch events to no propagate, this may have other side affects but works for now.
                        // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                        ev.srcEvent.stopPropagation();
                    });
                }
            };
        /** handle touch input */
        /**
         * handle touch input
         * @param {?} e
         * @param {?} ev
         * @return {?}
         */
        NguCarousel.prototype._touchHandling = /**
         * handle touch input
         * @param {?} e
         * @param {?} ev
         * @return {?}
         */
            function (e, ev) {
                // vertical touch events seem to cause to panstart event with an odd delta
                // and a center of {x:0,y:0} so this will ignore them
                if (ev.center.x === 0) {
                    return;
                }
                ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
                /** @type {?} */
                var valt = ev - this.dexVal;
                valt =
                    this.type === 'responsive'
                        ? (Math.abs(ev - this.dexVal) /
                            (this.vertical.enabled
                                ? this.vertical.height
                                : this.carouselWidth)) *
                            100
                        : valt;
                this.dexVal = ev;
                this.touch.swipe = e;
                this._setTouchTransfrom(e, valt);
                this._setTransformFromTouch();
            };
        /**
         * @param {?} e
         * @param {?} valt
         * @return {?}
         */
        NguCarousel.prototype._setTouchTransfrom = /**
         * @param {?} e
         * @param {?} valt
         * @return {?}
         */
            function (e, valt) {
                /** @type {?} */
                var condition = this.RTL ? 'panright' : 'panleft';
                this.touchTransform =
                    e === condition ? valt + this.touchTransform : this.touchTransform - valt;
            };
        /**
         * @return {?}
         */
        NguCarousel.prototype._setTransformFromTouch = /**
         * @return {?}
         */
            function () {
                if (this.touchTransform < 0) {
                    this.touchTransform = 0;
                }
                /** @type {?} */
                var type = this.type === 'responsive' ? '%' : 'px';
                this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
                    ? "translate3d(0, " + this.directionSym + this.touchTransform + type + ", 0)"
                    : "translate3d(" + this.directionSym + this.touchTransform + type + ", 0, 0)");
            };
        /** this fn used to disable the interval when it is not on the viewport */
        /**
         * this fn used to disable the interval when it is not on the viewport
         * @return {?}
         */
        NguCarousel.prototype._onWindowScrolling = /**
         * this fn used to disable the interval when it is not on the viewport
         * @return {?}
         */
            function () {
                /** @type {?} */
                var top = this.carousel.offsetTop;
                /** @type {?} */
                var scrollY = window.scrollY;
                /** @type {?} */
                var heightt = window.innerHeight;
                /** @type {?} */
                var carouselHeight = this.carousel.offsetHeight;
                /** @type {?} */
                var isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
                    top + carouselHeight / 2 >= scrollY;
                if (isCarouselOnScreen) {
                    this._intervalController$.next(1);
                }
                else {
                    this._intervalController$.next(0);
                }
            };
        /** store data based on width of the screen for the carousel */
        /**
         * store data based on width of the screen for the carousel
         * @return {?}
         */
        NguCarousel.prototype._storeCarouselData = /**
         * store data based on width of the screen for the carousel
         * @return {?}
         */
            function () {
                this.deviceWidth = common.isPlatformBrowser(this.platformId)
                    ? window.innerWidth
                    : 1200;
                this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
                if (this.type === 'responsive') {
                    this.deviceType =
                        this.deviceWidth >= 1200
                            ? 'lg'
                            : this.deviceWidth >= 992
                                ? 'md'
                                : this.deviceWidth >= 768
                                    ? 'sm'
                                    : 'xs';
                    this.items = this.inputs.grid[this.deviceType];
                    this.itemWidth = this.carouselWidth / this.items;
                }
                else {
                    this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
                    this.itemWidth = this.inputs.grid.all;
                    this.deviceType = 'all';
                }
                this.slideItems = +(this.inputs.slide < this.items
                    ? this.inputs.slide
                    : this.items);
                this.load =
                    this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
                this.speed =
                    this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
                this._carouselPoint();
            };
        /** Used to reset the carousel */
        /**
         * Used to reset the carousel
         * @param {?=} withOutAnimation
         * @return {?}
         */
        NguCarousel.prototype.reset = /**
         * Used to reset the carousel
         * @param {?=} withOutAnimation
         * @return {?}
         */
            function (withOutAnimation) {
                withOutAnimation && (this.withAnim = false);
                this.carouselCssNode.innerHTML = '';
                this.moveTo(0);
                this._carouselPoint();
            };
        /** Init carousel point */
        /**
         * Init carousel point
         * @return {?}
         */
        NguCarousel.prototype._carouselPoint = /**
         * Init carousel point
         * @return {?}
         */
            function () {
                // debugger;
                // if (this.userData.point.visible === true) {
                /** @type {?} */
                var Nos = this.dataSource.length - (this.items - this.slideItems);
                this.pointIndex = Math.ceil(Nos / this.slideItems);
                /** @type {?} */
                var pointers = [];
                if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
                    for (var i = 0; i < this.pointIndex; i++) {
                        pointers.push(i);
                    }
                }
                this.pointNumbers = pointers;
                // console.log(this.pointNumbers);
                this._carouselPointActiver();
                if (this.pointIndex <= 1) {
                    this._btnBoolean(1, 1);
                }
                else {
                    if (this.currentSlide === 0 && !this.loop) {
                        this._btnBoolean(1, 0);
                    }
                    else {
                        this._btnBoolean(0, 0);
                    }
                }
                // }
            };
        /** change the active point in carousel */
        /**
         * change the active point in carousel
         * @return {?}
         */
        NguCarousel.prototype._carouselPointActiver = /**
         * change the active point in carousel
         * @return {?}
         */
            function () {
                /** @type {?} */
                var i = Math.ceil(this.currentSlide / this.slideItems);
                this.activePoint = i;
                // console.log(this.data);
                this.cdr.markForCheck();
            };
        /** this function is used to scoll the carousel when point is clicked */
        /**
         * this function is used to scoll the carousel when point is clicked
         * @param {?} slide
         * @param {?=} withOutAnimation
         * @return {?}
         */
        NguCarousel.prototype.moveTo = /**
         * this function is used to scoll the carousel when point is clicked
         * @param {?} slide
         * @param {?=} withOutAnimation
         * @return {?}
         */
            function (slide, withOutAnimation) {
                // slide = slide - 1;
                withOutAnimation && (this.withAnim = false);
                if (this.activePoint !== slide && slide < this.pointIndex) {
                    /** @type {?} */
                    var slideremains = void 0;
                    /** @type {?} */
                    var btns = this.currentSlide < slide ? 1 : 0;
                    switch (slide) {
                        case 0:
                            this._btnBoolean(1, 0);
                            slideremains = slide * this.slideItems;
                            break;
                        case this.pointIndex - 1:
                            this._btnBoolean(0, 1);
                            slideremains = this.dataSource.length - this.items;
                            break;
                        default:
                            this._btnBoolean(0, 0);
                            slideremains = slide * this.slideItems;
                    }
                    this._carouselScrollTwo(btns, slideremains, this.speed);
                }
            };
        /** set the style of the carousel based the inputs data */
        /**
         * set the style of the carousel based the inputs data
         * @return {?}
         */
        NguCarousel.prototype._carouselSize = /**
         * set the style of the carousel based the inputs data
         * @return {?}
         */
            function () {
                this.token = this._generateID();
                /** @type {?} */
                var dism = '';
                this.styleid = "." + this.token + " > .ngucarousel > .ngu-touch-container > .ngucarousel-items";
                if (this.inputs.custom === 'banner') {
                    this._renderer.addClass(this.carousel, 'banner');
                }
                if (this.inputs.animation === 'lazy') {
                    dism += this.styleid + " > .item {transition: transform .6s ease;}";
                }
                /** @type {?} */
                var itemStyle = '';
                if (this.vertical.enabled) {
                    /** @type {?} */
                    var itemWidth_xs = this.styleid + " > .item {height: " + this.vertical
                        .height / +this.inputs.grid.xs + "px}";
                    /** @type {?} */
                    var itemWidth_sm = this.styleid + " > .item {height: " + this.vertical
                        .height / +this.inputs.grid.sm + "px}";
                    /** @type {?} */
                    var itemWidth_md = this.styleid + " > .item {height: " + this.vertical
                        .height / +this.inputs.grid.md + "px}";
                    /** @type {?} */
                    var itemWidth_lg = this.styleid + " > .item {height: " + this.vertical
                        .height / +this.inputs.grid.lg + "px}";
                    itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
                }
                else if (this.type === 'responsive') {
                    /** @type {?} */
                    var itemWidth_xs = this.inputs.type === 'mobile'
                        ? this.styleid + " .item {flex: 0 0 " + 95 /
                            +this.inputs.grid.xs + "%; width: " + 95 / +this.inputs.grid.xs + "%;}"
                        : this.styleid + " .item {flex: 0 0 " + 100 /
                            +this.inputs.grid.xs + "%; width: " + 100 / +this.inputs.grid.xs + "%;}";
                    /** @type {?} */
                    var itemWidth_sm = this.styleid + " > .item {flex: 0 0 " + 100 /
                        +this.inputs.grid.sm + "%; width: " + 100 / +this.inputs.grid.sm + "%}";
                    /** @type {?} */
                    var itemWidth_md = this.styleid + " > .item {flex: 0 0 " + 100 /
                        +this.inputs.grid.md + "%; width: " + 100 / +this.inputs.grid.md + "%}";
                    /** @type {?} */
                    var itemWidth_lg = this.styleid + " > .item {flex: 0 0 " + 100 /
                        +this.inputs.grid.lg + "%; width: " + 100 / +this.inputs.grid.lg + "%}";
                    itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
                }
                else {
                    itemStyle = this.styleid + " .item {flex: 0 0 " + this.inputs.grid.all + "px; width: " + this.inputs.grid.all + "px;}";
                }
                this._renderer.addClass(this.carousel, this.token);
                if (this.vertical.enabled) {
                    this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
                    this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', this.vertical.height + "px");
                }
                // tslint:disable-next-line:no-unused-expression
                this.RTL &&
                    !this.vertical.enabled &&
                    this._renderer.addClass(this.carousel, 'ngurtl');
                this._createStyleElem(dism + " " + itemStyle);
                this._storeCarouselData();
            };
        /** logic to scroll the carousel step 1 */
        /**
         * logic to scroll the carousel step 1
         * @param {?} Btn
         * @return {?}
         */
        NguCarousel.prototype._carouselScrollOne = /**
         * logic to scroll the carousel step 1
         * @param {?} Btn
         * @return {?}
         */
            function (Btn) {
                /** @type {?} */
                var itemSpeed = this.speed;
                /** @type {?} */
                var translateXval;
                /** @type {?} */
                var currentSlide = 0;
                /** @type {?} */
                var touchMove = Math.ceil(this.dexVal / this.itemWidth);
                this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
                if (this.pointIndex === 1) {
                    return;
                }
                else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
                    /** @type {?} */
                    var slide = this.slideItems * this.pointIndex;
                    /** @type {?} */
                    var currentSlideD = this.currentSlide - this.slideItems;
                    /** @type {?} */
                    var MoveSlide = currentSlideD + this.slideItems;
                    this._btnBoolean(0, 1);
                    if (this.currentSlide === 0) {
                        currentSlide = this.dataSource.length - this.items;
                        itemSpeed = 400;
                        this._btnBoolean(0, 1);
                    }
                    else if (this.slideItems >= MoveSlide) {
                        currentSlide = translateXval = 0;
                        this._btnBoolean(1, 0);
                    }
                    else {
                        this._btnBoolean(0, 0);
                        if (touchMove > this.slideItems) {
                            currentSlide = this.currentSlide - touchMove;
                            itemSpeed = 200;
                        }
                        else {
                            currentSlide = this.currentSlide - this.slideItems;
                        }
                    }
                    this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
                }
                else if (Btn === 1 && ((!this.loop && !this.isLast) || this.loop)) {
                    if (this.dataSource.length <=
                        this.currentSlide + this.items + this.slideItems &&
                        !this.isLast) {
                        currentSlide = this.dataSource.length - this.items;
                        this._btnBoolean(0, 1);
                    }
                    else if (this.isLast) {
                        currentSlide = translateXval = 0;
                        itemSpeed = 400;
                        this._btnBoolean(1, 0);
                    }
                    else {
                        this._btnBoolean(0, 0);
                        if (touchMove > this.slideItems) {
                            currentSlide =
                                this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                            itemSpeed = 200;
                        }
                        else {
                            currentSlide = this.currentSlide + this.slideItems;
                        }
                    }
                    this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
                }
                // cubic-bezier(0.15, 1.04, 0.54, 1.13)
            };
        /** logic to scroll the carousel step 2 */
        /**
         * logic to scroll the carousel step 2
         * @param {?} Btn
         * @param {?} currentSlide
         * @param {?} itemSpeed
         * @return {?}
         */
        NguCarousel.prototype._carouselScrollTwo = /**
         * logic to scroll the carousel step 2
         * @param {?} Btn
         * @param {?} currentSlide
         * @param {?} itemSpeed
         * @return {?}
         */
            function (Btn, currentSlide, itemSpeed) {
                // tslint:disable-next-line:no-unused-expression
                if (this.dexVal !== 0) {
                    /** @type {?} */
                    var val = Math.abs(this.touch.velocity);
                    /** @type {?} */
                    var somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
                    somt = somt > itemSpeed ? itemSpeed : somt;
                    itemSpeed = somt < 200 ? 200 : somt;
                    this.dexVal = 0;
                }
                if (this.withAnim) {
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "transform " + itemSpeed + "ms " + this.inputs.easing);
                    this.inputs.animation &&
                        this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
                }
                else {
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transition', "");
                }
                // console.log(this.dataSource);
                this.itemLength = this.dataSource.length;
                this._transformStyle(currentSlide);
                this.currentSlide = currentSlide;
                this.onMove.emit(this);
                this._carouselPointActiver();
                this._carouselLoadTrigger();
                this.withAnim = true;
                // if (currentSlide === 12) {
                //   this._switchDataSource(this.dataSource);
                // }
            };
        /** boolean function for making isFirst and isLast */
        /**
         * boolean function for making isFirst and isLast
         * @param {?} first
         * @param {?} last
         * @return {?}
         */
        NguCarousel.prototype._btnBoolean = /**
         * boolean function for making isFirst and isLast
         * @param {?} first
         * @param {?} last
         * @return {?}
         */
            function (first, last) {
                this.isFirst = !!first;
                this.isLast = !!last;
            };
        /**
         * @param {?} grid
         * @param {?} slide
         * @return {?}
         */
        NguCarousel.prototype._transformString = /**
         * @param {?} grid
         * @param {?} slide
         * @return {?}
         */
            function (grid, slide) {
                /** @type {?} */
                var collect = '';
                collect += this.styleid + " { transform: translate3d(";
                if (this.vertical.enabled) {
                    this.transform[grid] =
                        (this.vertical.height / this.inputs.grid[grid]) * slide;
                    collect += "0, -" + this.transform[grid] + "px, 0";
                }
                else {
                    this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
                    collect += "" + this.directionSym + this.transform[grid] + "%, 0, 0";
                }
                collect += "); }";
                return collect;
            };
        /** set the transform style to scroll the carousel  */
        /**
         * set the transform style to scroll the carousel
         * @param {?} slide
         * @return {?}
         */
        NguCarousel.prototype._transformStyle = /**
         * set the transform style to scroll the carousel
         * @param {?} slide
         * @return {?}
         */
            function (slide) {
                /** @type {?} */
                var slideCss = '';
                if (this.type === 'responsive') {
                    slideCss = "@media (max-width: 767px) {" + this._transformString('xs', slide) + "}\n      @media (min-width: 768px) {" + this._transformString('sm', slide) + " }\n      @media (min-width: 992px) {" + this._transformString('md', slide) + " }\n      @media (min-width: 1200px) {" + this._transformString('lg', slide) + " }";
                }
                else {
                    this.transform.all = this.inputs.grid.all * slide;
                    slideCss = this.styleid + " { transform: translate3d(" + this.directionSym + this.transform.all + "px, 0, 0);";
                }
                this.carouselCssNode.innerHTML = slideCss;
            };
        /** this will trigger the carousel to load the items */
        /**
         * this will trigger the carousel to load the items
         * @return {?}
         */
        NguCarousel.prototype._carouselLoadTrigger = /**
         * this will trigger the carousel to load the items
         * @return {?}
         */
            function () {
                if (typeof this.inputs.load === 'number') {
                    this.dataSource.length - this.load <= this.currentSlide + this.items &&
                        this.carouselLoad.emit(this.currentSlide);
                }
            };
        /** generate Class for each carousel to set specific style */
        /**
         * generate Class for each carousel to set specific style
         * @return {?}
         */
        NguCarousel.prototype._generateID = /**
         * generate Class for each carousel to set specific style
         * @return {?}
         */
            function () {
                /** @type {?} */
                var text = '';
                /** @type {?} */
                var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                for (var i = 0; i < 6; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return "ngucarousel" + text;
            };
        /** handle the auto slide */
        /**
         * handle the auto slide
         * @return {?}
         */
        NguCarousel.prototype._carouselInterval = /**
         * handle the auto slide
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var container = this.carouselMain1.nativeElement;
                if (this.interval && this.loop) {
                    this.listener4 = this._renderer.listen('window', 'scroll', function () {
                        clearTimeout(_this.onScrolling);
                        _this.onScrolling = setTimeout(function () {
                            _this._onWindowScrolling();
                        }, 600);
                    });
                    /** @type {?} */
                    var play$_1 = rxjs.fromEvent(container, 'mouseleave').pipe(operators.mapTo(1));
                    /** @type {?} */
                    var pause$_1 = rxjs.fromEvent(container, 'mouseenter').pipe(operators.mapTo(0));
                    /** @type {?} */
                    var touchPlay$_1 = rxjs.fromEvent(container, 'touchstart').pipe(operators.mapTo(1));
                    /** @type {?} */
                    var touchPause$_1 = rxjs.fromEvent(container, 'touchend').pipe(operators.mapTo(0));
                    /** @type {?} */
                    var interval$_1 = rxjs.interval(this.inputs.interval.timing).pipe(operators.mapTo(1));
                    this.onInitialDelay = setTimeout(function () {
                        _this.carouselInt = rxjs.merge(play$_1, touchPlay$_1, pause$_1, touchPause$_1, _this._intervalController$)
                            .pipe(operators.startWith(1), operators.switchMap(function (val) {
                            _this.isHovered = !val;
                            _this.cdr.markForCheck();
                            return val ? interval$_1 : rxjs.empty();
                        }))
                            .subscribe(function (res) {
                            _this._carouselScrollOne(1);
                        });
                    }, this.interval.initialDelay);
                }
            };
        /**
         * @return {?}
         */
        NguCarousel.prototype._updateItemIndexContextAni = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var viewContainer = this._nodeOutlet.viewContainer;
                for (var renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
                    /** @type {?} */
                    var viewRef = ( /** @type {?} */(viewContainer.get(renderIndex)));
                    /** @type {?} */
                    var context = ( /** @type {?} */(viewRef.context));
                    context.count = count;
                    context.first = renderIndex === 0;
                    context.last = renderIndex === count - 1;
                    context.even = renderIndex % 2 === 0;
                    context.odd = !context.even;
                    context.index = renderIndex;
                }
            };
        /** animate the carousel items */
        /**
         * animate the carousel items
         * @param {?} direction
         * @param {?} start
         * @param {?} end
         * @param {?} speed
         * @param {?} length
         * @param {?=} viewContainer
         * @return {?}
         */
        NguCarousel.prototype._carouselAnimator = /**
         * animate the carousel items
         * @param {?} direction
         * @param {?} start
         * @param {?} end
         * @param {?} speed
         * @param {?} length
         * @param {?=} viewContainer
         * @return {?}
         */
            function (direction, start, end, speed, length, viewContainer) {
                var _this = this;
                if (viewContainer === void 0) {
                    viewContainer = this._nodeOutlet.viewContainer;
                }
                /** @type {?} */
                var val = length < 5 ? length : 5;
                val = val === 1 ? 3 : val;
                /** @type {?} */
                var collectIndex = [];
                if (direction === 1) {
                    for (var i = start - 1; i < end; i++) {
                        collectIndex.push(i);
                        val = val * 2;
                        /** @type {?} */
                        var viewRef = ( /** @type {?} */(viewContainer.get(i)));
                        /** @type {?} */
                        var context = ( /** @type {?} */(viewRef.context));
                        context.animate = { value: true, params: { distance: val } };
                    }
                }
                else {
                    for (var i = end - 1; i >= start - 1; i--) {
                        collectIndex.push(i);
                        val = val * 2;
                        /** @type {?} */
                        var viewRef = ( /** @type {?} */(viewContainer.get(i)));
                        /** @type {?} */
                        var context = ( /** @type {?} */(viewRef.context));
                        context.animate = { value: true, params: { distance: -val } };
                    }
                }
                this.cdr.markForCheck();
                setTimeout(function () {
                    _this._removeAnimations(collectIndex);
                }, speed * 0.7);
            };
        /**
         * @param {?} indexs
         * @return {?}
         */
        NguCarousel.prototype._removeAnimations = /**
         * @param {?} indexs
         * @return {?}
         */
            function (indexs) {
                /** @type {?} */
                var viewContainer = this._nodeOutlet.viewContainer;
                indexs.forEach(function (i) {
                    /** @type {?} */
                    var viewRef = ( /** @type {?} */(viewContainer.get(i)));
                    /** @type {?} */
                    var context = ( /** @type {?} */(viewRef.context));
                    context.animate = { value: false, params: { distance: 0 } };
                });
                this.cdr.markForCheck();
            };
        /** Short form for setElementStyle */
        /**
         * Short form for setElementStyle
         * @param {?} el
         * @param {?} prop
         * @param {?} val
         * @return {?}
         */
        NguCarousel.prototype._setStyle = /**
         * Short form for setElementStyle
         * @param {?} el
         * @param {?} prop
         * @param {?} val
         * @return {?}
         */
            function (el, prop, val) {
                this._renderer.setStyle(el, prop, val);
            };
        /** For generating style tag */
        /**
         * For generating style tag
         * @param {?=} datas
         * @return {?}
         */
        NguCarousel.prototype._createStyleElem = /**
         * For generating style tag
         * @param {?=} datas
         * @return {?}
         */
            function (datas) {
                /** @type {?} */
                var styleItem = this._renderer.createElement('style');
                if (datas) {
                    /** @type {?} */
                    var styleText = this._renderer.createText(datas);
                    this._renderer.appendChild(styleItem, styleText);
                }
                this._renderer.appendChild(this.carousel, styleItem);
                return styleItem;
            };
        NguCarousel.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'ngu-carousel',
                        template: "<div #ngucarousel class=\"ngucarousel\">\n  <div #touchContainer class=\"ngu-touch-container\">\n    <div #nguItemsContainer class=\"ngucarousel-items\">\n      <ng-container nguCarouselOutlet></ng-container>\n    </div>\n  </div>\n  <div class=\"nguclearFix\"></div>\n  <ng-content select=\"[NguCarouselPrev]\"></ng-content>\n  <ng-content select=\"[NguCarouselNext]\"></ng-content>\n</div>\n<ng-content select=\"[NguCarouselPoint]\"></ng-content>\n",
                        styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}"],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    },] },
        ];
        NguCarousel.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.IterableDiffers },
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
                { type: core.ChangeDetectorRef }
            ];
        };
        NguCarousel.propDecorators = {
            inputs: [{ type: core.Input, args: ['inputs',] }],
            carouselLoad: [{ type: core.Output, args: ['carouselLoad',] }],
            onMove: [{ type: core.Output, args: ['onMove',] }],
            dataSource: [{ type: core.Input, args: ['dataSource',] }],
            _defDirec: [{ type: core.ContentChildren, args: [NguCarouselDefDirective,] }],
            _nodeOutlet: [{ type: core.ViewChild, args: [NguCarouselOutlet,] }],
            nextBtn: [{ type: core.ContentChild, args: [NguCarouselNextDirective, { read: core.ElementRef },] }],
            prevBtn: [{ type: core.ContentChild, args: [NguCarouselPrevDirective, { read: core.ElementRef },] }],
            carouselMain1: [{ type: core.ViewChild, args: ['ngucarousel', { read: core.ElementRef },] }],
            nguItemsContainer: [{ type: core.ViewChild, args: ['nguItemsContainer', { read: core.ElementRef },] }],
            touchContainer: [{ type: core.ViewChild, args: ['touchContainer', { read: core.ElementRef },] }],
            trackBy: [{ type: core.Input }]
        };
        return NguCarousel;
    }(NguCarouselStore));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguItemComponent = /** @class */ (function () {
        function NguItemComponent() {
            this.classes = true;
        }
        NguItemComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'ngu-item',
                        template: "<ng-content></ng-content>\n",
                        styles: [""]
                    },] },
        ];
        NguItemComponent.propDecorators = {
            classes: [{ type: core.HostBinding, args: ['class.item',] }]
        };
        return NguItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguTileComponent = /** @class */ (function () {
        function NguTileComponent() {
            this.classes = true;
        }
        NguTileComponent.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'ngu-tile',
                        template: "<div class=\"tile\">\n  <ng-content></ng-content>\n</div>\n",
                        styles: [":host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
                    },] },
        ];
        NguTileComponent.propDecorators = {
            classes: [{ type: core.HostBinding, args: ['class.item',] }]
        };
        return NguTileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var NguCarouselModule = /** @class */ (function () {
        function NguCarouselModule() {
        }
        NguCarouselModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [
                            NguCarousel,
                            NguItemComponent,
                            NguTileComponent,
                            NguCarouselPointDirective,
                            NguCarouselItemDirective,
                            NguCarouselNextDirective,
                            NguCarouselPrevDirective,
                            NguCarouselDefDirective,
                            NguCarouselOutlet
                        ],
                        declarations: [
                            NguCarousel,
                            NguItemComponent,
                            NguTileComponent,
                            NguCarouselPointDirective,
                            NguCarouselItemDirective,
                            NguCarouselNextDirective,
                            NguCarouselPrevDirective,
                            NguCarouselDefDirective,
                            NguCarouselOutlet
                        ]
                    },] },
        ];
        return NguCarouselModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.NguCarouselConfig = NguCarouselConfig;
    exports.NguCarouselStore = NguCarouselStore;
    exports.NguCarousel = NguCarousel;
    exports.NguCarouselModule = NguCarouselModule;
    exports.ɵg = NguCarouselDefDirective;
    exports.ɵc = NguCarouselItemDirective;
    exports.ɵd = NguCarouselNextDirective;
    exports.ɵh = NguCarouselOutlet;
    exports.ɵf = NguCarouselPointDirective;
    exports.ɵe = NguCarouselPrevDirective;
    exports.ɵa = ItemsControl;
    exports.ɵb = NguButton;
    exports.ɵi = NguItemComponent;
    exports.ɵj = NguTileComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQG5ndS9jYXJvdXNlbC9saWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC50cyIsbnVsbCwibmc6Ly9Abmd1L2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9Abmd1L2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudC50cyIsIm5nOi8vQG5ndS9jYXJvdXNlbC9saWIvbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9Abmd1L2Nhcm91c2VsL2xpYi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQudHMiLCJuZzovL0BuZ3UvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsU3RvcmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG91Y2ggPSBuZXcgVG91Y2goKSxcbiAgICBwdWJsaWMgdmVydGljYWwgPSBuZXcgVmVydGljYWwoKSxcbiAgICBwdWJsaWMgaW50ZXJ2YWw/OiBDYXJvdXNlbEludGVydmFsLFxuICAgIHB1YmxpYyB0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmcm9tKCksXG4gICAgcHVibGljIGJ1dHRvbj86IE5ndUJ1dHRvbixcbiAgICBwdWJsaWMgdmlzaWJsZUl0ZW1zPzogSXRlbXNDb250cm9sLFxuICAgIHB1YmxpYyBkZXZpY2VUeXBlPzogRGV2aWNlVHlwZSxcbiAgICBwdWJsaWMgdHlwZSA9ICdmaXhlZCcsXG4gICAgcHVibGljIHRva2VuID0gJycsXG4gICAgcHVibGljIGl0ZW1zID0gMCxcbiAgICBwdWJsaWMgbG9hZCA9IDAsXG4gICAgcHVibGljIGRldmljZVdpZHRoID0gMCxcbiAgICBwdWJsaWMgY2Fyb3VzZWxXaWR0aCA9IDAsXG4gICAgcHVibGljIGl0ZW1XaWR0aCA9IDAsXG4gICAgcHVibGljIHNsaWRlSXRlbXMgPSAwLFxuICAgIHB1YmxpYyBpdGVtV2lkdGhQZXIgPSAwLFxuICAgIHB1YmxpYyBpdGVtTGVuZ3RoID0gMCxcbiAgICBwdWJsaWMgY3VycmVudFNsaWRlID0gMCxcbiAgICBwdWJsaWMgZWFzaW5nID0gJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcbiAgICBwdWJsaWMgc3BlZWQgPSAyMDAsXG4gICAgcHVibGljIGxvb3AgPSBmYWxzZSxcbiAgICBwdWJsaWMgZGV4VmFsID0gMCxcbiAgICBwdWJsaWMgdG91Y2hUcmFuc2Zvcm0gPSAwLFxuICAgIHB1YmxpYyBpc0VuZCA9IGZhbHNlLFxuICAgIHB1YmxpYyBpc0ZpcnN0ID0gdHJ1ZSxcbiAgICBwdWJsaWMgaXNMYXN0ID0gZmFsc2UsXG4gICAgcHVibGljIFJUTCA9IGZhbHNlLFxuICAgIHB1YmxpYyBwb2ludCA9IHRydWUsXG4gICAgcHVibGljIHZlbG9jaXR5ID0gMVxuICApIHt9XG59XG5leHBvcnQgdHlwZSBEZXZpY2VUeXBlID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICdhbGwnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25WaXNpYmxlID0gJ2Rpc2FibGVkJyB8ICdoaWRlJztcblxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29udHJvbCB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVmVydGljYWwge1xuICBlbmFibGVkOiBib29sZWFuO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLy8gbnVtSGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmd1QnV0dG9uIHtcbiAgdmlzaWJpbGl0eT86IEJ1dHRvblZpc2libGU7XG4gIGVsYXN0aWM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUb3VjaCB7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIHN3aXBlOiBzdHJpbmc7XG4gIHZlbG9jaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2Zyb20ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgeHMgPSAwLFxuICAgIHB1YmxpYyBzbSA9IDAsXG4gICAgcHVibGljIG1kID0gMCxcbiAgICBwdWJsaWMgbGcgPSAwLFxuICAgIHB1YmxpYyBhbGwgPSAwXG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsQ29uZmlnIHtcbiAgZ3JpZDogVHJhbnNmcm9tO1xuICBzbGlkZT86IG51bWJlcjtcbiAgc3BlZWQ/OiBudW1iZXI7XG4gIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbDtcbiAgYW5pbWF0aW9uPzogQW5pbWF0ZTtcbiAgcG9pbnQ/OiBQb2ludDtcbiAgdHlwZT86IHN0cmluZztcbiAgbG9hZD86IG51bWJlcjtcbiAgY3VzdG9tPzogQ3VzdG9tO1xuICBsb29wPzogYm9vbGVhbjtcbiAgdG91Y2g/OiBib29sZWFuO1xuICBlYXNpbmc/OiBzdHJpbmc7XG4gIFJUTD86IGJvb2xlYW47XG4gIGJ1dHRvbj86IE5ndUJ1dHRvbjtcbiAgdmVydGljYWw/OiBWZXJ0aWNhbDtcbiAgdmVsb2NpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIEN1c3RvbSA9ICdiYW5uZXInO1xuZXhwb3J0IHR5cGUgQW5pbWF0ZSA9ICdsYXp5JztcblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIGhpZGVPblNpbmdsZVNsaWRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb24ge1xuICB0eXBlPzogQW5pbWF0ZTtcbiAgYW5pbWF0ZVN0eWxlcz86IEFuaW1hdGlvblN0eWxlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdHlsZXMge1xuICBzdHlsZT86IHN0cmluZztcbiAgb3Blbj86IHN0cmluZztcbiAgY2xvc2U/OiBzdHJpbmc7XG4gIHN0YWdnZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxJbnRlcnZhbCB7XG4gIHRpbWluZzogbnVtYmVyO1xuICBpbml0aWFsRGVsYXk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8VD4ge1xuICAvKiogRGF0YSBmb3IgdGhlIG5vZGUuICovXG4gICRpbXBsaWNpdDogVDtcblxuICAvKiogRGVwdGggb2YgdGhlIG5vZGUuICovXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgLyoqIEluZGV4IGxvY2F0aW9uIG9mIHRoZSBub2RlLiAqL1xuICBpbmRleD86IG51bWJlcjtcblxuICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgZGF0YU5vZGVzLiAqL1xuICBjb3VudD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBUKSB7XG4gICAgdGhpcy4kaW1wbGljaXQgPSBkYXRhO1xuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxJdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlIHt9XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsTmV4dF0nXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSB7XG4gIC8vIEBIb3N0QmluZGluZygnZGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XG4gIC8vIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgLy8gb25DbGljaygpIHtcbiAgLy8gfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbFByZXZdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUge1xuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbFBvaW50XSdcbn0pXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ3VDYXJvdXNlbERlZl0nXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPFQ+IHtcbiAgd2hlbjogKGluZGV4OiBudW1iZXIsIG5vZGVEYXRhOiBUKSA9PiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge31cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxPdXRsZXRdJ1xufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxPdXRsZXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge31cbn1cbiIsImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxuICBJdGVyYWJsZUNoYW5nZXMsXG4gIEl0ZXJhYmxlRGlmZmVyLFxuICBJdGVyYWJsZURpZmZlcnMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBlbXB0eSxcbiAgZnJvbUV2ZW50LFxuICBpbnRlcnZhbCxcbiAgbWVyZ2UsXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBTdWJqZWN0LFxuICBTdWJzY3JpcHRpb25cbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbywgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsT3V0bGV0LFxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmVcbn0gZnJvbSAnLi4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBOZ3VDYXJvdXNlbENvbmZpZyxcbiAgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0LFxuICBOZ3VDYXJvdXNlbFN0b3JlXG59IGZyb20gJy4vbmd1LWNhcm91c2VsJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3UtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI25ndWNhcm91c2VsIGNsYXNzPVwibmd1Y2Fyb3VzZWxcIj5cbiAgPGRpdiAjdG91Y2hDb250YWluZXIgY2xhc3M9XCJuZ3UtdG91Y2gtY29udGFpbmVyXCI+XG4gICAgPGRpdiAjbmd1SXRlbXNDb250YWluZXIgY2xhc3M9XCJuZ3VjYXJvdXNlbC1pdGVtc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciBuZ3VDYXJvdXNlbE91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJuZ3VjbGVhckZpeFwiPjwvZGl2PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbTmd1Q2Fyb3VzZWxQcmV2XVwiPjwvbmctY29udGVudD5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW05ndUNhcm91c2VsTmV4dF1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltOZ3VDYXJvdXNlbFBvaW50XVwiPjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0Lm5ndXJ0bHtkaXJlY3Rpb246cnRsfS5uZ3VjYXJvdXNlbHtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjEwMCV9Lm5ndWNhcm91c2VsIC5uZ3VjYXJvdXNlbC1pdGVtc3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCV9Lm5ndXZlcnRpY2Fse2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uYmFubmVyIC5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2JvdHRvbToyMHB4fS5iYW5uZXIgLm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpe2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuNTUpfS5iYW5uZXIgLm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpLmFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmZ9LmJhbm5lciAubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGk6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9Lm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50e2xpc3Qtc3R5bGUtdHlwZTpub25lO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTJweDttYXJnaW46MDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNTUpO3BhZGRpbmc6NHB4O21hcmdpbjowIDRweDt0cmFuc2l0aW9uOi40c30ubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGkuYWN0aXZle2JhY2tncm91bmQ6IzZiNmI2Yjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjgpO3RyYW5zZm9ybTpzY2FsZSgxLjgpfS5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludCBsaTpob3ZlcntjdXJzb3I6cG9pbnRlcn0ubmd1Y2xlYXJGaXh7Y2xlYXI6Ym90aH1gXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsPFQ+IGV4dGVuZHMgTmd1Q2Fyb3VzZWxTdG9yZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcbiAgX2RhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgX2RhdGFTb3VyY2U6IGFueTtcbiAgX2RhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPHt9PjtcbiAgc3R5bGVpZDogc3RyaW5nO1xuICBwcml2YXRlIGRpcmVjdGlvblN5bTogc3RyaW5nO1xuICBwcml2YXRlIGNhcm91c2VsQ3NzTm9kZTogYW55O1xuICBwcml2YXRlIHBvaW50SW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSB3aXRoQW5pbSA9IHRydWU7XG4gIGFjdGl2ZVBvaW50OiBudW1iZXI7XG4gIGlzSG92ZXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnaW5wdXRzJylcbiAgcHJpdmF0ZSBpbnB1dHM6IE5ndUNhcm91c2VsQ29uZmlnO1xuICBAT3V0cHV0KCdjYXJvdXNlbExvYWQnKVxuICBwcml2YXRlIGNhcm91c2VsTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCdvbk1vdmUnKVxuICBwcml2YXRlIG9uTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd1Q2Fyb3VzZWw8VD4+KCk7XG4gIC8vIGlzRmlyc3RzcyA9IDA7XG4gIGFycmF5Q2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPHt9PjtcbiAgY2Fyb3VzZWxJbnQ6IFN1YnNjcmlwdGlvbjtcblxuICBsaXN0ZW5lcjE6ICgpID0+IHZvaWQ7XG4gIGxpc3RlbmVyMjogKCkgPT4gdm9pZDtcbiAgbGlzdGVuZXIzOiAoKSA9PiB2b2lkO1xuICBsaXN0ZW5lcjQ6ICgpID0+IHZvaWQ7XG5cbiAgQElucHV0KCdkYXRhU291cmNlJylcbiAgZ2V0IGRhdGFTb3VyY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgfVxuICBzZXQgZGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSwgdGhpcy5kYXRhU291cmNlKTtcbiAgICAgIC8vIHRoaXMuaXNGaXJzdHNzKys7XG4gICAgICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHwgbnVsbDtcblxuICBAQ29udGVudENoaWxkcmVuKE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlKVxuICBwcml2YXRlIF9kZWZEaXJlYzogUXVlcnlMaXN0PE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4+O1xuXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxPdXRsZXQpXG4gIF9ub2RlT3V0bGV0OiBOZ3VDYXJvdXNlbE91dGxldDtcblxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxuICAgKiBpc3N1ZSBpZCAjOTFcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgc2V0IG5leHRCdG4oYnRuOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5saXN0ZW5lcjIgJiYgdGhpcy5saXN0ZW5lcjIoKTtcbiAgICBpZiAoYnRuKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyMiA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcbiAgICogaXNzdWUgaWQgIzkxXG4gICAqL1xuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHNldCBwcmV2QnRuKGJ0bjogRWxlbWVudFJlZikge1xuICAgIHRoaXMubGlzdGVuZXIxICYmIHRoaXMubGlzdGVuZXIxKCk7XG4gICAgaWYgKGJ0bikge1xuICAgICAgdGhpcy5saXN0ZW5lcjEgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ25ndWNhcm91c2VsJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHByaXZhdGUgY2Fyb3VzZWxNYWluMTogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkKCduZ3VJdGVtc0NvbnRhaW5lcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwcml2YXRlIG5ndUl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGQoJ3RvdWNoQ29udGFpbmVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHByaXZhdGUgdG91Y2hDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfaW50ZXJ2YWxDb250cm9sbGVyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIGNhcm91c2VsOiBhbnk7XG5cbiAgcHJpdmF0ZSBvblJlc2l6ZTogYW55O1xuICBwcml2YXRlIG9uU2Nyb2xsaW5nOiBhbnk7XG4gIHByaXZhdGUgb25Jbml0aWFsRGVsYXk6IGFueTtcblxuICBwb2ludE51bWJlcnM6IEFycmF5PGFueT4gPSBbXTtcblxuICAvKipcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcbiAgICogdG8gYG5nRm9yYCBgdHJhY2tCeWAgZnVuY3Rpb24uIE9wdGltaXplIEl0ZW1zIG9wZXJhdGlvbnMgYnkgaWRlbnRpZnlpbmcgYSBJdGVtcyBiYXNlZCBvbiBpdHMgZGF0YVxuICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIEl0ZW1zIHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxuICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRyYWNrQnkoKTogVHJhY2tCeUZ1bmN0aW9uPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJhY2tCeUZuO1xuICB9XG4gIHNldCB0cmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcbiAgICBpZiAoXG4gICAgICBpc0Rldk1vZGUoKSAmJlxuICAgICAgZm4gIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nICYmXG4gICAgICA8YW55PmNvbnNvbGUgJiZcbiAgICAgIDxhbnk+Y29uc29sZS53YXJuXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGB0cmFja0J5IG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfS5gXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl90cmFja0J5Rm4gPSBmbjtcbiAgfVxuICBwcml2YXRlIF90cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxUPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2RhdGFEaWZmZXIgPSB0aGlzLl9kaWZmZXJzXG4gICAgICAuZmluZChbXSlcbiAgICAgIC5jcmVhdGUoKF9pOiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFja0J5ID8gdGhpcy50cmFja0J5KGl0ZW0uZGF0YUluZGV4LCBpdGVtLmRhdGEpIDogaXRlbTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIHRoaXMuYXJyYXlDaGFuZ2VzID0gdGhpcy5fZGF0YURpZmZlci5kaWZmKHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgaWYgKHRoaXMuYXJyYXlDaGFuZ2VzICYmIHRoaXMuX2RlZkRpcmVjKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnQ2hhbmdlcyBkZXRlY3RlZCEnKTtcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3dpdGNoRGF0YVNvdXJjZShkYXRhU291cmNlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcbiAgICBsZXQgZGF0YVN0cmVhbTogT2JzZXJ2YWJsZTxhbnlbXT4gfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLl9kYXRhU291cmNlO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhU291cmNlKSkge1xuICAgICAgZGF0YVN0cmVhbSA9IG9mKHRoaXMuX2RhdGFTb3VyY2UpO1xuICAgIH1cblxuICAgIGlmIChkYXRhU3RyZWFtKSB7XG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uID0gZGF0YVN0cmVhbVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJCkpXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQ2hhbmdlcyhkYXRhKTtcbiAgICAgICAgICB0aGlzLmlzTGFzdCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlck5vZGVDaGFuZ2VzKFxuICAgIGRhdGE6IGFueVtdLFxuICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmFycmF5Q2hhbmdlcykgcmV0dXJuO1xuXG4gICAgdGhpcy5hcnJheUNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbihcbiAgICAgIChcbiAgICAgICAgaXRlbTogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8YW55PixcbiAgICAgICAgYWRqdXN0ZWRQcmV2aW91c0luZGV4OiBudW1iZXIsXG4gICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyXG4gICAgICApID0+IHtcbiAgICAgICAgLy8gY29uc3Qgbm9kZSA9IHRoaXMuX2RlZkRpcmVjLmZpbmQoaXRlbXMgPT4gaXRlbS5pdGVtKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVEZWYoZGF0YVtjdXJyZW50SW5kZXhdLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgICAgIGlmIChpdGVtLnByZXZpb3VzSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PGFueT4oZGF0YVtjdXJyZW50SW5kZXhdKTtcbiAgICAgICAgICBjb250ZXh0LmluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICAgICAgbm9kZS50ZW1wbGF0ZSxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2aWV3ID0gdmlld0NvbnRhaW5lci5nZXQoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldywgY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5fdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpO1xuXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcbiAgICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaW5kZXgtcmVsYXRlZCBjb250ZXh0IGZvciBlYWNoIHJvdyB0byByZWZsZWN0IGFueSBjaGFuZ2VzIGluIHRoZSBpbmRleCBvZiB0aGUgcm93cyxcbiAgICogZS5nLiBmaXJzdC9sYXN0L2V2ZW4vb2RkLlxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpIHtcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xuICAgIGZvciAoXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoO1xuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcbiAgICAgIHJlbmRlckluZGV4KytcbiAgICApIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XG4gICAgICBjb250ZXh0LmZpcnN0ID0gcmVuZGVySW5kZXggPT09IDA7XG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xuICAgICAgY29udGV4dC5vZGQgPSAhY29udGV4dC5ldmVuO1xuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldE5vZGVEZWYoZGF0YTogYW55LCBpOiBudW1iZXIpOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9kZWZEaXJlYyk7XG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZkRpcmVjLmZpcnN0O1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVEZWYgPVxuICAgICAgdGhpcy5fZGVmRGlyZWMuZmluZChkZWYgPT4gZGVmLndoZW4gJiYgZGVmLndoZW4oaSwgZGF0YSkpIHx8XG4gICAgICB0aGlzLl9kZWZhdWx0Tm9kZURlZjtcblxuICAgIHJldHVybiBub2RlRGVmO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2Fyb3VzZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2lucHV0VmFsaWRhdGlvbigpO1xuXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUgPSB0aGlzLl9jcmVhdGVTdHlsZUVsZW0oKTtcblxuICAgIC8vIHRoaXMuX2J1dHRvbkNvbnRyb2woKTtcblxuICAgIGlmICh3aW5kb3cpIHtcbiAgICAgIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWwoKTtcbiAgICAgIGlmICghdGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMuX3RvdWNoKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3RlbmVyMyA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5fb25SZXNpemluZyhldmVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lucHV0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmlucHV0cy5ncmlkLmFsbCAhPT0gMCA/ICdmaXhlZCcgOiAncmVzcG9uc2l2ZSc7XG4gICAgdGhpcy5sb29wID0gdGhpcy5pbnB1dHMubG9vcCB8fCBmYWxzZTtcbiAgICB0aGlzLmlucHV0cy5lYXNpbmcgPSB0aGlzLmlucHV0cy5lYXNpbmcgfHwgJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcbiAgICB0aGlzLnRvdWNoLmFjdGl2ZSA9IHRoaXMuaW5wdXRzLnRvdWNoIHx8IGZhbHNlO1xuICAgIHRoaXMuUlRMID0gdGhpcy5pbnB1dHMuUlRMID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aGlzLmlucHV0cy5pbnRlcnZhbCB8fCBudWxsO1xuICAgIHRoaXMudmVsb2NpdHkgPVxuICAgICAgdHlwZW9mIHRoaXMuaW5wdXRzLnZlbG9jaXR5ID09PSAnbnVtYmVyJ1xuICAgICAgICA/IHRoaXMuaW5wdXRzLnZlbG9jaXR5XG4gICAgICAgIDogdGhpcy52ZWxvY2l0eTtcblxuICAgIGlmICh0aGlzLmlucHV0cy52ZXJ0aWNhbCAmJiB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsLmVuYWJsZWQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkO1xuICAgICAgdGhpcy52ZXJ0aWNhbC5oZWlnaHQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5oZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuZGlyZWN0aW9uU3ltID0gdGhpcy5SVEwgPyAnJyA6ICctJztcbiAgICB0aGlzLnBvaW50ID1cbiAgICAgIHRoaXMuaW5wdXRzLnBvaW50ICYmIHR5cGVvZiB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGVcbiAgICAgICAgOiB0cnVlO1xuXG4gICAgdGhpcy5fY2Fyb3VzZWxTaXplKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Fyb3VzZWxJbnQpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25Jbml0aWFsRGVsYXkpO1xuICAgIHRoaXMuY2Fyb3VzZWxJbnQgJiYgdGhpcy5jYXJvdXNlbEludC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNhcm91c2VsTG9hZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25Nb3ZlLmNvbXBsZXRlKCk7XG5cbiAgICAvKiogcmVtb3ZlIGxpc3RlbmVycyAqL1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY29uc3Qgc3RyID0gYGxpc3RlbmVyJHtpfWA7XG4gICAgICB0aGlzW3N0cl0gJiYgdGhpc1tzdHJdKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25SZXNpemUpO1xuICAgIHRoaXMub25SZXNpemUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRldmljZVdpZHRoICE9PSBldmVudC50YXJnZXQub3V0ZXJXaWR0aCkge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xuICAgICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH1cblxuICAvKiogR2V0IFRvdWNoIGlucHV0ICovXG4gIHByaXZhdGUgX3RvdWNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0cy50b3VjaCkge1xuICAgICAgY29uc3QgaGFtbWVydGltZSA9IG5ldyBIYW1tZXIodGhpcy50b3VjaENvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGhhbW1lcnRpbWUuZ2V0KCdwYW4nKS5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTCB9KTtcblxuICAgICAgaGFtbWVydGltZS5vbigncGFuc3RhcnQnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVt0aGlzLmRldmljZVR5cGVdO1xuICAgICAgICB0aGlzLmRleFZhbCA9IDA7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFudXAnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XG4gICAgICAgIH0pO1xuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5kb3duJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5sZWZ0JywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFucmlnaHQnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmVuZCcsIChldjogYW55KSA9PiB7XG4gICAgICAgIGlmIChNYXRoLmFicyhldi52ZWxvY2l0eSkgPj0gdGhpcy52ZWxvY2l0eSkge1xuICAgICAgICAgIHRoaXMudG91Y2gudmVsb2NpdHkgPSBldi52ZWxvY2l0eTtcbiAgICAgICAgICBsZXQgZGlyZWMgPSAwO1xuICAgICAgICAgIGlmICghdGhpcy5SVEwpIHtcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDAgOiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAxIDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoZGlyZWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGV4VmFsID0gMDtcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgICAgICd0cmFuc2Zvcm0gMzI0bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaGFtbWVydGltZS5vbignaGFtbWVyLmlucHV0JywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIC8vIGFsbG93IG5lc3RlZCB0b3VjaCBldmVudHMgdG8gbm8gcHJvcGFnYXRlLCB0aGlzIG1heSBoYXZlIG90aGVyIHNpZGUgYWZmZWN0cyBidXQgd29ya3MgZm9yIG5vdy5cbiAgICAgICAgLy8gVE9ETzogSXQgaXMgcHJvYmFibHkgYmV0dGVyIHRvIGNoZWNrIHRoZSBzb3VyY2UgZWxlbWVudCBvZiB0aGUgZXZlbnQgYW5kIG9ubHkgYXBwbHkgdGhlIGhhbmRsZSB0byB0aGUgY29ycmVjdCBjYXJvdXNlbFxuICAgICAgICBldi5zcmNFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBoYW5kbGUgdG91Y2ggaW5wdXQgKi9cbiAgcHJpdmF0ZSBfdG91Y2hIYW5kbGluZyhlOiBzdHJpbmcsIGV2OiBhbnkpOiB2b2lkIHtcbiAgICAvLyB2ZXJ0aWNhbCB0b3VjaCBldmVudHMgc2VlbSB0byBjYXVzZSB0byBwYW5zdGFydCBldmVudCB3aXRoIGFuIG9kZCBkZWx0YVxuICAgIC8vIGFuZCBhIGNlbnRlciBvZiB7eDowLHk6MH0gc28gdGhpcyB3aWxsIGlnbm9yZSB0aGVtXG4gICAgaWYgKGV2LmNlbnRlci54ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXYgPSBNYXRoLmFicyh0aGlzLnZlcnRpY2FsLmVuYWJsZWQgPyBldi5kZWx0YVkgOiBldi5kZWx0YVgpO1xuICAgIGxldCB2YWx0ID0gZXYgLSB0aGlzLmRleFZhbDtcbiAgICB2YWx0ID1cbiAgICAgIHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnXG4gICAgICAgID8gKE1hdGguYWJzKGV2IC0gdGhpcy5kZXhWYWwpIC9cbiAgICAgICAgICAodGhpcy52ZXJ0aWNhbC5lbmFibGVkXG4gICAgICAgICAgICA/IHRoaXMudmVydGljYWwuaGVpZ2h0XG4gICAgICAgICAgICA6IHRoaXMuY2Fyb3VzZWxXaWR0aCkpICpcbiAgICAgICAgMTAwXG4gICAgICAgIDogdmFsdDtcbiAgICB0aGlzLmRleFZhbCA9IGV2O1xuICAgIHRoaXMudG91Y2guc3dpcGUgPSBlO1xuICAgIHRoaXMuX3NldFRvdWNoVHJhbnNmcm9tKGUsIHZhbHQpO1xuICAgIHRoaXMuX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VG91Y2hUcmFuc2Zyb20oZTogc3RyaW5nLCB2YWx0OiBudW1iZXIpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLlJUTCA/ICdwYW5yaWdodCcgOiAncGFubGVmdCc7XG4gICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9XG4gICAgICBlID09PSBjb25kaXRpb24gPyB2YWx0ICsgdGhpcy50b3VjaFRyYW5zZm9ybSA6IHRoaXMudG91Y2hUcmFuc2Zvcm0gLSB2YWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCkge1xuICAgIGlmICh0aGlzLnRvdWNoVHJhbnNmb3JtIDwgMCkge1xuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IDA7XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJyA/ICclJyA6ICdweCc7XG4gICAgdGhpcy5fc2V0U3R5bGUoXG4gICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAndHJhbnNmb3JtJyxcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZFxuICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50b3VjaFRyYW5zZm9ybX0ke3R5cGV9LCAwKWBcbiAgICAgICAgOiBgdHJhbnNsYXRlM2QoJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMCwgMClgXG4gICAgKTtcbiAgfVxuXG4gIC8qKiB0aGlzIGZuIHVzZWQgdG8gZGlzYWJsZSB0aGUgaW50ZXJ2YWwgd2hlbiBpdCBpcyBub3Qgb24gdGhlIHZpZXdwb3J0ICovXG4gIHByaXZhdGUgX29uV2luZG93U2Nyb2xsaW5nKCk6IHZvaWQge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBoZWlnaHR0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGNhcm91c2VsSGVpZ2h0ID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgaXNDYXJvdXNlbE9uU2NyZWVuID1cbiAgICAgIHRvcCA8PSBzY3JvbGxZICsgaGVpZ2h0dCAtIGNhcm91c2VsSGVpZ2h0IC8gNCAmJlxuICAgICAgdG9wICsgY2Fyb3VzZWxIZWlnaHQgLyAyID49IHNjcm9sbFk7XG5cbiAgICBpZiAoaXNDYXJvdXNlbE9uU2NyZWVuKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQubmV4dCgwKTtcbiAgICB9XG4gIH1cblxuICAvKiogc3RvcmUgZGF0YSBiYXNlZCBvbiB3aWR0aCBvZiB0aGUgc2NyZWVuIGZvciB0aGUgY2Fyb3VzZWwgKi9cbiAgcHJpdmF0ZSBfc3RvcmVDYXJvdXNlbERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5kZXZpY2VXaWR0aCA9IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZClcbiAgICAgID8gd2luZG93LmlubmVyV2lkdGhcbiAgICAgIDogMTIwMDtcblxuICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICB0aGlzLmRldmljZVR5cGUgPVxuICAgICAgICB0aGlzLmRldmljZVdpZHRoID49IDEyMDBcbiAgICAgICAgICA/ICdsZydcbiAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gOTkyXG4gICAgICAgICAgICA/ICdtZCdcbiAgICAgICAgICAgIDogdGhpcy5kZXZpY2VXaWR0aCA+PSA3NjhcbiAgICAgICAgICAgICAgPyAnc20nXG4gICAgICAgICAgICAgIDogJ3hzJztcblxuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaW5wdXRzLmdyaWRbdGhpcy5kZXZpY2VUeXBlXTtcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pdGVtcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtcyA9IE1hdGgudHJ1bmModGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pbnB1dHMuZ3JpZC5hbGwpO1xuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLmlucHV0cy5ncmlkLmFsbDtcbiAgICAgIHRoaXMuZGV2aWNlVHlwZSA9ICdhbGwnO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVJdGVtcyA9ICsodGhpcy5pbnB1dHMuc2xpZGUgPCB0aGlzLml0ZW1zXG4gICAgICA/IHRoaXMuaW5wdXRzLnNsaWRlXG4gICAgICA6IHRoaXMuaXRlbXMpO1xuICAgIHRoaXMubG9hZCA9XG4gICAgICB0aGlzLmlucHV0cy5sb2FkID49IHRoaXMuc2xpZGVJdGVtcyA/IHRoaXMuaW5wdXRzLmxvYWQgOiB0aGlzLnNsaWRlSXRlbXM7XG4gICAgdGhpcy5zcGVlZCA9XG4gICAgICB0aGlzLmlucHV0cy5zcGVlZCAmJiB0aGlzLmlucHV0cy5zcGVlZCA+IC0xID8gdGhpcy5pbnB1dHMuc3BlZWQgOiA0MDA7XG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xuICB9XG5cbiAgLyoqIFVzZWQgdG8gcmVzZXQgdGhlIGNhcm91c2VsICovXG4gIHB1YmxpYyByZXNldCh3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5tb3ZlVG8oMCk7XG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xuICB9XG5cbiAgLyoqIEluaXQgY2Fyb3VzZWwgcG9pbnQgKi9cbiAgcHJpdmF0ZSBfY2Fyb3VzZWxQb2ludCgpOiB2b2lkIHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAvLyBpZiAodGhpcy51c2VyRGF0YS5wb2ludC52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgY29uc3QgTm9zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtICh0aGlzLml0ZW1zIC0gdGhpcy5zbGlkZUl0ZW1zKTtcbiAgICB0aGlzLnBvaW50SW5kZXggPSBNYXRoLmNlaWwoTm9zIC8gdGhpcy5zbGlkZUl0ZW1zKTtcbiAgICBjb25zdCBwb2ludGVycyA9IFtdO1xuXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA+IDEgfHwgIXRoaXMuaW5wdXRzLnBvaW50LmhpZGVPblNpbmdsZVNsaWRlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRJbmRleDsgaSsrKSB7XG4gICAgICAgIHBvaW50ZXJzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucG9pbnROdW1iZXJzID0gcG9pbnRlcnM7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wb2ludE51bWJlcnMpO1xuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA8PSAxKSB7XG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDAgJiYgIXRoaXMubG9vcCkge1xuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gfVxuICB9XG5cbiAgLyoqIGNoYW5nZSB0aGUgYWN0aXZlIHBvaW50IGluIGNhcm91c2VsICovXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGkgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U2xpZGUgLyB0aGlzLnNsaWRlSXRlbXMpO1xuICAgIHRoaXMuYWN0aXZlUG9pbnQgPSBpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHNjb2xsIHRoZSBjYXJvdXNlbCB3aGVuIHBvaW50IGlzIGNsaWNrZWQgKi9cbiAgcHVibGljIG1vdmVUbyhzbGlkZTogbnVtYmVyLCB3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbikge1xuICAgIC8vIHNsaWRlID0gc2xpZGUgLSAxO1xuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XG4gICAgaWYgKHRoaXMuYWN0aXZlUG9pbnQgIT09IHNsaWRlICYmIHNsaWRlIDwgdGhpcy5wb2ludEluZGV4KSB7XG4gICAgICBsZXQgc2xpZGVyZW1haW5zO1xuICAgICAgY29uc3QgYnRucyA9IHRoaXMuY3VycmVudFNsaWRlIDwgc2xpZGUgPyAxIDogMDtcblxuICAgICAgc3dpdGNoIChzbGlkZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0aGlzLnBvaW50SW5kZXggLSAxOlxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKGJ0bnMsIHNsaWRlcmVtYWlucywgdGhpcy5zcGVlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIHNldCB0aGUgc3R5bGUgb2YgdGhlIGNhcm91c2VsIGJhc2VkIHRoZSBpbnB1dHMgZGF0YSAqL1xuICBwcml2YXRlIF9jYXJvdXNlbFNpemUoKTogdm9pZCB7XG4gICAgdGhpcy50b2tlbiA9IHRoaXMuX2dlbmVyYXRlSUQoKTtcbiAgICBsZXQgZGlzbSA9ICcnO1xuICAgIHRoaXMuc3R5bGVpZCA9IGAuJHtcbiAgICAgIHRoaXMudG9rZW5cbiAgICAgIH0gPiAubmd1Y2Fyb3VzZWwgPiAubmd1LXRvdWNoLWNvbnRhaW5lciA+IC5uZ3VjYXJvdXNlbC1pdGVtc2A7XG5cbiAgICBpZiAodGhpcy5pbnB1dHMuY3VzdG9tID09PSAnYmFubmVyJykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ2Jhbm5lcicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlucHV0cy5hbmltYXRpb24gPT09ICdsYXp5Jykge1xuICAgICAgZGlzbSArPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge3RyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTt9YDtcbiAgICB9XG5cbiAgICBsZXQgaXRlbVN0eWxlID0gJyc7XG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9cHh9YDtcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnNtfXB4fWA7XG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH1weH1gO1xuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9cHh9YDtcblxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID1cbiAgICAgICAgdGhpcy5pbnB1dHMudHlwZSA9PT0gJ21vYmlsZSdcbiAgICAgICAgICA/IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezk1IC9cbiAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHs5NSAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWBcbiAgICAgICAgICA6IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YDtcblxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xuICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lfWA7XG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXG4gICAgICAgICt0aGlzLmlucHV0cy5ncmlkLm1kfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfSV9YDtcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cbiAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQubGd9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9JX1gO1xuXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbVN0eWxlID0gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7XG4gICAgICAgIHRoaXMuaW5wdXRzLmdyaWQuYWxsXG4gICAgICAgIH1weDsgd2lkdGg6ICR7dGhpcy5pbnB1dHMuZ3JpZC5hbGx9cHg7fWA7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgdGhpcy50b2tlbik7XG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ25ndXZlcnRpY2FsJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgIGAke3RoaXMudmVydGljYWwuaGVpZ2h0fXB4YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICB0aGlzLlJUTCAmJlxuICAgICAgIXRoaXMudmVydGljYWwuZW5hYmxlZCAmJlxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ25ndXJ0bCcpO1xuICAgIHRoaXMuX2NyZWF0ZVN0eWxlRWxlbShgJHtkaXNtfSAke2l0ZW1TdHlsZX1gKTtcbiAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xuICB9XG5cbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAxICovXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsT25lKEJ0bjogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGl0ZW1TcGVlZCA9IHRoaXMuc3BlZWQ7XG4gICAgbGV0IHRyYW5zbGF0ZVh2YWwsXG4gICAgICBjdXJyZW50U2xpZGUgPSAwO1xuICAgIGNvbnN0IHRvdWNoTW92ZSA9IE1hdGguY2VpbCh0aGlzLmRleFZhbCAvIHRoaXMuaXRlbVdpZHRoKTtcbiAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XG5cbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID09PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDAgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzRmlyc3QpIHx8IHRoaXMubG9vcCkpIHtcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZUl0ZW1zICogdGhpcy5wb2ludEluZGV4O1xuXG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVEID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0aGlzLnNsaWRlSXRlbXM7XG4gICAgICBjb25zdCBNb3ZlU2xpZGUgPSBjdXJyZW50U2xpZGVEICsgdGhpcy5zbGlkZUl0ZW1zO1xuICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcbiAgICAgICAgaXRlbVNwZWVkID0gNDAwO1xuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlSXRlbXMgPj0gTW92ZVNsaWRlKSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcbiAgICAgICAgaWYgKHRvdWNoTW92ZSA+IHRoaXMuc2xpZGVJdGVtcykge1xuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdG91Y2hNb3ZlO1xuICAgICAgICAgIGl0ZW1TcGVlZCA9IDIwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDEgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzTGFzdCkgfHwgdGhpcy5sb29wKSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIDw9XG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyArIHRoaXMuc2xpZGVJdGVtcyAmJlxuICAgICAgICAhdGhpcy5pc0xhc3RcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xhc3QpIHtcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XG4gICAgICAgIGl0ZW1TcGVlZCA9IDQwMDtcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXMgKyAodG91Y2hNb3ZlIC0gdGhpcy5zbGlkZUl0ZW1zKTtcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKEJ0biwgY3VycmVudFNsaWRlLCBpdGVtU3BlZWQpO1xuICAgIH1cblxuICAgIC8vIGN1YmljLWJlemllcigwLjE1LCAxLjA0LCAwLjU0LCAxLjEzKVxuICB9XG5cbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAyICovXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsVHdvKFxuICAgIEJ0bjogbnVtYmVyLFxuICAgIGN1cnJlbnRTbGlkZTogbnVtYmVyLFxuICAgIGl0ZW1TcGVlZDogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuXG4gICAgaWYgKHRoaXMuZGV4VmFsICE9PSAwKSB7XG4gICAgICBjb25zdCB2YWwgPSBNYXRoLmFicyh0aGlzLnRvdWNoLnZlbG9jaXR5KTtcbiAgICAgIGxldCBzb210ID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRoaXMuZGV4VmFsIC8gdmFsIC8gdGhpcy5kZXhWYWwpICogKHRoaXMuZGV2aWNlV2lkdGggLSB0aGlzLmRleFZhbClcbiAgICAgICk7XG4gICAgICBzb210ID0gc29tdCA+IGl0ZW1TcGVlZCA/IGl0ZW1TcGVlZCA6IHNvbXQ7XG4gICAgICBpdGVtU3BlZWQgPSBzb210IDwgMjAwID8gMjAwIDogc29tdDtcbiAgICAgIHRoaXMuZGV4VmFsID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMud2l0aEFuaW0pIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKFxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgYHRyYW5zZm9ybSAke2l0ZW1TcGVlZH1tcyAke3RoaXMuaW5wdXRzLmVhc2luZ31gXG4gICAgICApO1xuICAgICAgdGhpcy5pbnB1dHMuYW5pbWF0aW9uICYmXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsQW5pbWF0b3IoXG4gICAgICAgICAgQnRuLFxuICAgICAgICAgIGN1cnJlbnRTbGlkZSArIDEsXG4gICAgICAgICAgY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyxcbiAgICAgICAgICBpdGVtU3BlZWQsXG4gICAgICAgICAgTWF0aC5hYnModGhpcy5jdXJyZW50U2xpZGUgLSBjdXJyZW50U2xpZGUpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgdGhpcy5pdGVtTGVuZ3RoID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aDtcbiAgICB0aGlzLl90cmFuc2Zvcm1TdHlsZShjdXJyZW50U2xpZGUpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlO1xuICAgIHRoaXMub25Nb3ZlLmVtaXQodGhpcyk7XG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTtcbiAgICB0aGlzLl9jYXJvdXNlbExvYWRUcmlnZ2VyKCk7XG4gICAgdGhpcy53aXRoQW5pbSA9IHRydWU7XG4gICAgLy8gaWYgKGN1cnJlbnRTbGlkZSA9PT0gMTIpIHtcbiAgICAvLyAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKTtcbiAgICAvLyB9XG4gIH1cblxuICAvKiogYm9vbGVhbiBmdW5jdGlvbiBmb3IgbWFraW5nIGlzRmlyc3QgYW5kIGlzTGFzdCAqL1xuICBwcml2YXRlIF9idG5Cb29sZWFuKGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlcikge1xuICAgIHRoaXMuaXNGaXJzdCA9ICEhZmlyc3Q7XG4gICAgdGhpcy5pc0xhc3QgPSAhIWxhc3Q7XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2Zvcm1TdHJpbmcoZ3JpZDogc3RyaW5nLCBzbGlkZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgY29sbGVjdCA9ICcnO1xuICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoYDtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID1cbiAgICAgICAgKHRoaXMudmVydGljYWwuaGVpZ2h0IC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcbiAgICAgIGNvbGxlY3QgKz0gYDAsIC0ke3RoaXMudHJhbnNmb3JtW2dyaWRdfXB4LCAwYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmFuc2Zvcm1bZ3JpZF0gPSAoMTAwIC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcbiAgICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRyYW5zZm9ybVtncmlkXX0lLCAwLCAwYDtcbiAgICB9XG4gICAgY29sbGVjdCArPSBgKTsgfWA7XG4gICAgcmV0dXJuIGNvbGxlY3Q7XG4gIH1cblxuICAvKiogc2V0IHRoZSB0cmFuc2Zvcm0gc3R5bGUgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCAgKi9cbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3R5bGUoc2xpZGU6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBzbGlkZUNzcyA9ICcnO1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgc2xpZGVDc3MgPSBgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoXG4gICAgICAgICd4cycsXG4gICAgICAgIHNsaWRlXG4gICAgICApfX1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdzbScsIHNsaWRlKX0gfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ21kJywgc2xpZGUpfSB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ2xnJywgc2xpZGUpfSB9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmFuc2Zvcm0uYWxsID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgKiBzbGlkZTtcbiAgICAgIHNsaWRlQ3NzID0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25TeW1cbiAgICAgICAgfSR7dGhpcy50cmFuc2Zvcm0uYWxsfXB4LCAwLCAwKTtgO1xuICAgIH1cbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSBzbGlkZUNzcztcbiAgfVxuXG4gIC8qKiB0aGlzIHdpbGwgdHJpZ2dlciB0aGUgY2Fyb3VzZWwgdG8gbG9hZCB0aGUgaXRlbXMgKi9cbiAgcHJpdmF0ZSBfY2Fyb3VzZWxMb2FkVHJpZ2dlcigpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuaW5wdXRzLmxvYWQgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5sb2FkIDw9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyAmJlxuICAgICAgICB0aGlzLmNhcm91c2VsTG9hZC5lbWl0KHRoaXMuY3VycmVudFNsaWRlKTtcbiAgICB9XG4gIH1cblxuICAvKiogZ2VuZXJhdGUgQ2xhc3MgZm9yIGVhY2ggY2Fyb3VzZWwgdG8gc2V0IHNwZWNpZmljIHN0eWxlICovXG4gIHByaXZhdGUgX2dlbmVyYXRlSUQoKTogc3RyaW5nIHtcbiAgICBsZXQgdGV4dCA9ICcnO1xuICAgIGNvbnN0IHBvc3NpYmxlID1cbiAgICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgfVxuICAgIHJldHVybiBgbmd1Y2Fyb3VzZWwke3RleHR9YDtcbiAgfVxuXG4gIC8qKiBoYW5kbGUgdGhlIGF1dG8gc2xpZGUgKi9cbiAgcHJpdmF0ZSBfY2Fyb3VzZWxJbnRlcnZhbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCAmJiB0aGlzLmxvb3ApIHtcbiAgICAgIHRoaXMubGlzdGVuZXI0ID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vblNjcm9sbGluZyk7XG4gICAgICAgIHRoaXMub25TY3JvbGxpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xuICAgICAgICB9LCA2MDApO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKDEpKTtcbiAgICAgIGNvbnN0IHBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICdtb3VzZWVudGVyJykucGlwZShtYXBUbygwKSk7XG5cbiAgICAgIGNvbnN0IHRvdWNoUGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hzdGFydCcpLnBpcGUobWFwVG8oMSkpO1xuICAgICAgY29uc3QgdG91Y2hQYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hlbmQnKS5waXBlKG1hcFRvKDApKTtcblxuICAgICAgY29uc3QgaW50ZXJ2YWwkID0gaW50ZXJ2YWwodGhpcy5pbnB1dHMuaW50ZXJ2YWwudGltaW5nKS5waXBlKG1hcFRvKDEpKTtcblxuICAgICAgdGhpcy5vbkluaXRpYWxEZWxheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNhcm91c2VsSW50ID0gbWVyZ2UoXG4gICAgICAgICAgcGxheSQsXG4gICAgICAgICAgdG91Y2hQbGF5JCxcbiAgICAgICAgICBwYXVzZSQsXG4gICAgICAgICAgdG91Y2hQYXVzZSQsXG4gICAgICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJFxuICAgICAgICApXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgoMSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAodmFsID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSAhdmFsO1xuICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbCA/IGludGVydmFsJCA6IGVtcHR5KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwuaW5pdGlhbERlbGF5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0QW5pKCkge1xuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XG4gICAgZm9yIChcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XG4gICAgICByZW5kZXJJbmRleCA8IGNvdW50O1xuICAgICAgcmVuZGVySW5kZXgrK1xuICAgICkge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KHJlbmRlckluZGV4KSBhcyBhbnk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcbiAgICAgIGNvbnRleHQubGFzdCA9IHJlbmRlckluZGV4ID09PSBjb3VudCAtIDE7XG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XG4gICAgICBjb250ZXh0LmluZGV4ID0gcmVuZGVySW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqIGFuaW1hdGUgdGhlIGNhcm91c2VsIGl0ZW1zICovXG4gIHByaXZhdGUgX2Nhcm91c2VsQW5pbWF0b3IoXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICBlbmQ6IG51bWJlcixcbiAgICBzcGVlZDogbnVtYmVyLFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcbiAgKTogdm9pZCB7XG4gICAgbGV0IHZhbCA9IGxlbmd0aCA8IDUgPyBsZW5ndGggOiA1O1xuICAgIHZhbCA9IHZhbCA9PT0gMSA/IDMgOiB2YWw7XG4gICAgY29uc3QgY29sbGVjdEluZGV4ID0gW107XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQgLSAxOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgY29sbGVjdEluZGV4LnB1c2goaSk7XG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xuICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7IHZhbHVlOiB0cnVlLCBwYXJhbXM6IHsgZGlzdGFuY2U6IHZhbCB9IH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBlbmQgLSAxOyBpID49IHN0YXJ0IC0gMTsgaS0tKSB7XG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xuICAgICAgICB2YWwgPSB2YWwgKiAyO1xuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcbiAgICAgICAgY29udGV4dC5hbmltYXRlID0geyB2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7IGRpc3RhbmNlOiAtdmFsIH0gfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW1vdmVBbmltYXRpb25zKGNvbGxlY3RJbmRleCk7XG4gICAgfSwgc3BlZWQgKiAwLjcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQW5pbWF0aW9ucyhpbmRleHM6IG51bWJlcltdKSB7XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcbiAgICBpbmRleHMuZm9yRWFjaChpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcbiAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHsgdmFsdWU6IGZhbHNlLCBwYXJhbXM6IHsgZGlzdGFuY2U6IDAgfSB9O1xuICAgIH0pO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFNob3J0IGZvcm0gZm9yIHNldEVsZW1lbnRTdHlsZSAqL1xuICBwcml2YXRlIF9zZXRTdHlsZShlbDogYW55LCBwcm9wOiBhbnksIHZhbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsIHByb3AsIHZhbCk7XG4gIH1cblxuICAvKiogRm9yIGdlbmVyYXRpbmcgc3R5bGUgdGFnICovXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlRWxlbShkYXRhcz86IHN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlSXRlbSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgaWYgKGRhdGFzKSB7XG4gICAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGRhdGFzKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlSXRlbSwgc3R5bGVUZXh0KTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJvdXNlbCwgc3R5bGVJdGVtKTtcbiAgICByZXR1cm4gc3R5bGVJdGVtO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmd1LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3VJdGVtQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbmd1LXRpbGUnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0aWxlXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e3BhZGRpbmc6MTBweDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnRpbGV7Ym94LXNoYWRvdzowIDJweCA1cHggMCByZ2JhKDAsMCwwLC4xNiksMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKX1gXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3VUaWxlQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pdGVtJykgY2xhc3NlcyA9IHRydWU7XG59XG4iLCJpbXBvcnQge1xuICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcbiAgTmd1Q2Fyb3VzZWxPdXRsZXRcbn0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5ndUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25ndS1pdGVtL25ndS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBIYW1tZXJHZXN0dXJlQ29uZmlnLFxuICBIQU1NRVJfR0VTVFVSRV9DT05GSUdcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5ndUNhcm91c2VsIH0gZnJvbSAnLi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3VUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIE5ndUNhcm91c2VsLFxuICAgIE5ndUl0ZW1Db21wb25lbnQsXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcbiAgICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsT3V0bGV0XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5ndUNhcm91c2VsLFxuICAgIE5ndUl0ZW1Db21wb25lbnQsXG4gICAgTmd1VGlsZUNvbXBvbmVudCxcbiAgICBOZ3VDYXJvdXNlbFBvaW50RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsT3V0bGV0XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDb250YWluZXJSZWYiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkV2ZW50RW1pdHRlciIsIlN1YmplY3QiLCJpc0Rldk1vZGUiLCJPYnNlcnZhYmxlIiwib2YiLCJ0YWtlVW50aWwiLCJpc1BsYXRmb3JtQnJvd3NlciIsImZyb21FdmVudCIsIm1hcFRvIiwiaW50ZXJ2YWwiLCJtZXJnZSIsInN0YXJ0V2l0aCIsInN3aXRjaE1hcCIsImVtcHR5IiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSXRlcmFibGVEaWZmZXJzIiwiSW5qZWN0IiwiUExBVEZPUk1fSUQiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIklucHV0IiwiT3V0cHV0IiwiQ29udGVudENoaWxkcmVuIiwiVmlld0NoaWxkIiwiQ29udGVudENoaWxkIiwiSG9zdEJpbmRpbmciLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBQ0UsMEJBQ1MsS0FBbUIsRUFDbkIsUUFBeUIsRUFDekIsUUFBMkIsRUFDM0IsU0FBMkIsRUFDM0IsTUFBa0IsRUFDbEIsWUFBMkIsRUFDM0IsVUFBdUIsRUFDdkIsSUFBYyxFQUNkLEtBQVUsRUFDVixLQUFTLEVBQ1QsSUFBUSxFQUNSLFdBQWUsRUFDZixhQUFpQixFQUNqQixTQUFhLEVBQ2IsVUFBYyxFQUNkLFlBQWdCLEVBQ2hCLFVBQWMsRUFDZCxZQUFnQixFQUNoQixNQUFxQyxFQUNyQyxLQUFXLEVBQ1gsSUFBWSxFQUNaLE1BQVUsRUFDVixjQUFrQixFQUNsQixLQUFhLEVBQ2IsT0FBYyxFQUNkLE1BQWMsRUFDZCxHQUFXLEVBQ1gsS0FBWSxFQUNaLFFBQVk7WUE1Qlosc0JBQUE7Z0JBQUEsWUFBWSxLQUFLLEVBQUU7O1lBQ25CLHlCQUFBO2dCQUFBLGVBQWUsUUFBUSxFQUFFOztZQUV6QiwwQkFBQTtnQkFBQSxnQkFBZ0IsU0FBUyxFQUFFOztZQUkzQixxQkFBQTtnQkFBQSxjQUFjOztZQUNkLHNCQUFBO2dCQUFBLFVBQVU7O1lBQ1Ysc0JBQUE7Z0JBQUEsU0FBUzs7WUFDVCxxQkFBQTtnQkFBQSxRQUFROztZQUNSLDRCQUFBO2dC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