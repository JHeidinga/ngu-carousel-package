/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, QueryList, Renderer2, ViewChild } from '@angular/core';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NguCarouselDefDirective, NguCarouselNextDirective, NguCarouselOutlet, NguCarouselPrevDirective } from '../ngu-carousel.directive';
import { NguCarouselConfig, NguCarouselOutletContext, NguCarouselStore } from './ngu-carousel';
/**
 * @template T
 */
// tslint:disable-next-line:component-class-suffix
export class NguCarousel extends NguCarouselStore {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _differs
     * @param {?} platformId
     * @param {?} cdr
     */
    constructor(_el, _renderer, _differs, platformId, cdr) {
        super();
        this._el = _el;
        this._renderer = _renderer;
        this._differs = _differs;
        this.platformId = platformId;
        this.cdr = cdr;
        this.withAnim = true;
        this.isHovered = false;
        this.carouselLoad = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new EventEmitter();
        this._intervalController$ = new Subject();
        this.pointNumbers = [];
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set dataSource(data) {
        if (data) {
            // console.log(data, this.dataSource);
            // this.isFirstss++;
            this._switchDataSource(data);
        }
    }
    /**
     * The setter is used to catch the button if the button has ngIf
     * issue id #91
     * @param {?} btn
     * @return {?}
     */
    set nextBtn(btn) {
        this.listener2 && this.listener2();
        if (btn) {
            this.listener2 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(1));
        }
    }
    /**
     * The setter is used to catch the button if the button has ngIf
     * issue id #91
     * @param {?} btn
     * @return {?}
     */
    set prevBtn(btn) {
        this.listener1 && this.listener1();
        if (btn) {
            this.listener1 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(0));
        }
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
     * relative to the function to know if a Items should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     * @return {?}
     */
    get trackBy() {
        return this._trackByFn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set trackBy(fn) {
        if (isDevMode() &&
            fn != null &&
            typeof fn !== 'function' &&
            (/** @type {?} */ (console)) &&
            (/** @type {?} */ (console.warn))) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._dataDiffer = this._differs
            .find([])
            .create((_i, item) => {
            return this.trackBy ? this.trackBy(item.dataIndex, item.data) : item;
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.arrayChanges = this._dataDiffer.diff(this.dataSource);
        if (this.arrayChanges && this._defDirec) {
            // console.log('Changes detected!');
            this._observeRenderChanges();
        }
    }
    /**
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._dataSource = dataSource;
        if (this._defDirec) {
            this._observeRenderChanges();
        }
    }
    /**
     * @return {?}
     */
    _observeRenderChanges() {
        /** @type {?} */
        let dataStream;
        if (this._dataSource instanceof Observable) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = of(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream
                .pipe(takeUntil(this._intervalController$))
                .subscribe(data => {
                this.renderNodeChanges(data);
                this.isLast = false;
            });
        }
    }
    /**
     * @param {?} data
     * @param {?=} viewContainer
     * @return {?}
     */
    renderNodeChanges(data, viewContainer = this._nodeOutlet.viewContainer) {
        if (!this.arrayChanges)
            return;
        this.arrayChanges.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            // const node = this._defDirec.find(items => item.item);
            /** @type {?} */
            const node = this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex == null) {
                /** @type {?} */
                const context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                /** @type {?} */
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._updateItemIndexContext();
        if (this.carousel) {
            this._storeCarouselData();
        }
        // console.log(this.dataSource);
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @return {?}
     */
    _updateItemIndexContext() {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    _getNodeDef(data, i) {
        // console.log(this._defDirec);
        if (this._defDirec.length === 1) {
            return this._defDirec.first;
        }
        /** @type {?} */
        const nodeDef = this._defDirec.find(def => def.when && def.when(i, data)) ||
            this._defaultNodeDef;
        return nodeDef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        // this._buttonControl();
        if (window) {
            this._carouselInterval();
            if (!this.vertical.enabled) {
                this._touch();
            }
            this.listener3 = this._renderer.listen('window', 'resize', event => {
                this._onResizing(event);
            });
            this._onWindowScrolling();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._observeRenderChanges();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    _inputValidation() {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clearInterval(this.carouselInt);
        clearTimeout(this.onInitialDelay);
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        for (let i = 1; i <= 4; i++) {
            /** @type {?} */
            const str = `listener${i}`;
            this[str] && this[str]();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _onResizing(event) {
        clearTimeout(this.onResize);
        this.onResize = setTimeout(() => {
            if (this.deviceWidth !== event.target.outerWidth) {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
                this._storeCarouselData();
            }
        }, 500);
    }
    /**
     * Get Touch input
     * @return {?}
     */
    _touch() {
        if (this.inputs.touch) {
            /** @type {?} */
            const hammertime = new Hammer(this.touchContainer.nativeElement);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', (ev) => {
                this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
                this.touchTransform = this.transform[this.deviceType];
                this.dexVal = 0;
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', '');
            });
            if (this.vertical.enabled) {
                hammertime.on('panup', (ev) => {
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('pandown', (ev) => {
                    this._touchHandling('panright', ev);
                });
            }
            else {
                hammertime.on('panleft', (ev) => {
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('panright', (ev) => {
                    this._touchHandling('panright', ev);
                });
            }
            hammertime.on('panend', (ev) => {
                if (Math.abs(ev.velocity) >= this.velocity) {
                    this.touch.velocity = ev.velocity;
                    /** @type {?} */
                    let direc = 0;
                    if (!this.RTL) {
                        direc = this.touch.swipe === 'panright' ? 0 : 1;
                    }
                    else {
                        direc = this.touch.swipe === 'panright' ? 1 : 0;
                    }
                    this._carouselScrollOne(direc);
                }
                else {
                    this.dexVal = 0;
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
                }
            });
            hammertime.on('hammer.input', function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            });
        }
    }
    /**
     * handle touch input
     * @param {?} e
     * @param {?} ev
     * @return {?}
     */
    _touchHandling(e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
        /** @type {?} */
        let valt = ev - this.dexVal;
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
    }
    /**
     * @param {?} e
     * @param {?} valt
     * @return {?}
     */
    _setTouchTransfrom(e, valt) {
        /** @type {?} */
        const condition = this.RTL ? 'panright' : 'panleft';
        this.touchTransform =
            e === condition ? valt + this.touchTransform : this.touchTransform - valt;
    }
    /**
     * @return {?}
     */
    _setTransformFromTouch() {
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        /** @type {?} */
        const type = this.type === 'responsive' ? '%' : 'px';
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
            ? `translate3d(0, ${this.directionSym}${this.touchTransform}${type}, 0)`
            : `translate3d(${this.directionSym}${this.touchTransform}${type}, 0, 0)`);
    }
    /**
     * this fn used to disable the interval when it is not on the viewport
     * @return {?}
     */
    _onWindowScrolling() {
        /** @type {?} */
        const top = this.carousel.offsetTop;
        /** @type {?} */
        const scrollY = window.scrollY;
        /** @type {?} */
        const heightt = window.innerHeight;
        /** @type {?} */
        const carouselHeight = this.carousel.offsetHeight;
        /** @type {?} */
        const isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY;
        if (isCarouselOnScreen) {
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
        }
    }
    /**
     * store data based on width of the screen for the carousel
     * @return {?}
     */
    _storeCarouselData() {
        this.deviceWidth = isPlatformBrowser(this.platformId)
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
    }
    /**
     * Used to reset the carousel
     * @param {?=} withOutAnimation
     * @return {?}
     */
    reset(withOutAnimation) {
        withOutAnimation && (this.withAnim = false);
        this.carouselCssNode.innerHTML = '';
        this.moveTo(0);
        this._carouselPoint();
    }
    /**
     * Init carousel point
     * @return {?}
     */
    _carouselPoint() {
        // debugger;
        // if (this.userData.point.visible === true) {
        /** @type {?} */
        const Nos = this.dataSource.length - (this.items - this.slideItems);
        this.pointIndex = Math.ceil(Nos / this.slideItems);
        /** @type {?} */
        const pointers = [];
        if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
            for (let i = 0; i < this.pointIndex; i++) {
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
    }
    /**
     * change the active point in carousel
     * @return {?}
     */
    _carouselPointActiver() {
        /** @type {?} */
        const i = Math.ceil(this.currentSlide / this.slideItems);
        this.activePoint = i;
        // console.log(this.data);
        this.cdr.markForCheck();
    }
    /**
     * this function is used to scoll the carousel when point is clicked
     * @param {?} slide
     * @param {?=} withOutAnimation
     * @return {?}
     */
    moveTo(slide, withOutAnimation) {
        // slide = slide - 1;
        withOutAnimation && (this.withAnim = false);
        if (this.activePoint !== slide && slide < this.pointIndex) {
            /** @type {?} */
            let slideremains;
            /** @type {?} */
            const btns = this.currentSlide < slide ? 1 : 0;
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
    }
    /**
     * set the style of the carousel based the inputs data
     * @return {?}
     */
    _carouselSize() {
        this.token = this._generateID();
        /** @type {?} */
        let dism = '';
        this.styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`;
        if (this.inputs.custom === 'banner') {
            this._renderer.addClass(this.carousel, 'banner');
        }
        if (this.inputs.animation === 'lazy') {
            dism += `${this.styleid} > .item {transition: transform .6s ease;}`;
        }
        /** @type {?} */
        let itemStyle = '';
        if (this.vertical.enabled) {
            /** @type {?} */
            const itemWidth_xs = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.xs}px}`;
            /** @type {?} */
            const itemWidth_sm = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.sm}px}`;
            /** @type {?} */
            const itemWidth_md = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.md}px}`;
            /** @type {?} */
            const itemWidth_lg = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.lg}px}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else if (this.type === 'responsive') {
            /** @type {?} */
            const itemWidth_xs = this.inputs.type === 'mobile'
                ? `${this.styleid} .item {flex: 0 0 ${95 /
                    +this.inputs.grid.xs}%; width: ${95 / +this.inputs.grid.xs}%;}`
                : `${this.styleid} .item {flex: 0 0 ${100 /
                    +this.inputs.grid.xs}%; width: ${100 / +this.inputs.grid.xs}%;}`;
            /** @type {?} */
            const itemWidth_sm = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.sm}%; width: ${100 / +this.inputs.grid.sm}%}`;
            /** @type {?} */
            const itemWidth_md = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.md}%; width: ${100 / +this.inputs.grid.md}%}`;
            /** @type {?} */
            const itemWidth_lg = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.lg}%; width: ${100 / +this.inputs.grid.lg}%}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else {
            itemStyle = `${this.styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`;
        }
        this._renderer.addClass(this.carousel, this.token);
        if (this.vertical.enabled) {
            this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
            this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', `${this.vertical.height}px`);
        }
        // tslint:disable-next-line:no-unused-expression
        this.RTL &&
            !this.vertical.enabled &&
            this._renderer.addClass(this.carousel, 'ngurtl');
        this._createStyleElem(`${dism} ${itemStyle}`);
        this._storeCarouselData();
    }
    /**
     * logic to scroll the carousel step 1
     * @param {?} Btn
     * @return {?}
     */
    _carouselScrollOne(Btn) {
        /** @type {?} */
        let itemSpeed = this.speed;
        /** @type {?} */
        let translateXval;
        /** @type {?} */
        let currentSlide = 0;
        /** @type {?} */
        const touchMove = Math.ceil(this.dexVal / this.itemWidth);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
            /** @type {?} */
            const slide = this.slideItems * this.pointIndex;
            /** @type {?} */
            const currentSlideD = this.currentSlide - this.slideItems;
            /** @type {?} */
            const MoveSlide = currentSlideD + this.slideItems;
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
    }
    /**
     * logic to scroll the carousel step 2
     * @param {?} Btn
     * @param {?} currentSlide
     * @param {?} itemSpeed
     * @return {?}
     */
    _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        if (this.dexVal !== 0) {
            /** @type {?} */
            const val = Math.abs(this.touch.velocity);
            /** @type {?} */
            let somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.dexVal = 0;
        }
        if (this.withAnim) {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', `transform ${itemSpeed}ms ${this.inputs.easing}`);
            this.inputs.animation &&
                this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
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
    }
    /**
     * boolean function for making isFirst and isLast
     * @param {?} first
     * @param {?} last
     * @return {?}
     */
    _btnBoolean(first, last) {
        this.isFirst = !!first;
        this.isLast = !!last;
    }
    /**
     * @param {?} grid
     * @param {?} slide
     * @return {?}
     */
    _transformString(grid, slide) {
        /** @type {?} */
        let collect = '';
        collect += `${this.styleid} { transform: translate3d(`;
        if (this.vertical.enabled) {
            this.transform[grid] =
                (this.vertical.height / this.inputs.grid[grid]) * slide;
            collect += `0, -${this.transform[grid]}px, 0`;
        }
        else {
            this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
            collect += `${this.directionSym}${this.transform[grid]}%, 0, 0`;
        }
        collect += `); }`;
        return collect;
    }
    /**
     * set the transform style to scroll the carousel
     * @param {?} slide
     * @return {?}
     */
    _transformStyle(slide) {
        /** @type {?} */
        let slideCss = '';
        if (this.type === 'responsive') {
            slideCss = `@media (max-width: 767px) {${this._transformString('xs', slide)}}
      @media (min-width: 768px) {${this._transformString('sm', slide)} }
      @media (min-width: 992px) {${this._transformString('md', slide)} }
      @media (min-width: 1200px) {${this._transformString('lg', slide)} }`;
        }
        else {
            this.transform.all = this.inputs.grid.all * slide;
            slideCss = `${this.styleid} { transform: translate3d(${this.directionSym}${this.transform.all}px, 0, 0);`;
        }
        this.carouselCssNode.innerHTML = slideCss;
    }
    /**
     * this will trigger the carousel to load the items
     * @return {?}
     */
    _carouselLoadTrigger() {
        if (typeof this.inputs.load === 'number') {
            this.dataSource.length - this.load <= this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
        }
    }
    /**
     * generate Class for each carousel to set specific style
     * @return {?}
     */
    _generateID() {
        /** @type {?} */
        let text = '';
        /** @type {?} */
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return `ngucarousel${text}`;
    }
    /**
     * handle the auto slide
     * @return {?}
     */
    _carouselInterval() {
        /** @type {?} */
        const container = this.carouselMain1.nativeElement;
        if (this.interval && this.loop) {
            this.listener4 = this._renderer.listen('window', 'scroll', () => {
                clearTimeout(this.onScrolling);
                this.onScrolling = setTimeout(() => {
                    this._onWindowScrolling();
                }, 600);
            });
            /** @type {?} */
            const play$ = fromEvent(container, 'mouseleave').pipe(mapTo(1));
            /** @type {?} */
            const pause$ = fromEvent(container, 'mouseenter').pipe(mapTo(0));
            /** @type {?} */
            const touchPlay$ = fromEvent(container, 'touchstart').pipe(mapTo(1));
            /** @type {?} */
            const touchPause$ = fromEvent(container, 'touchend').pipe(mapTo(0));
            /** @type {?} */
            const interval$ = interval(this.inputs.interval.timing).pipe(mapTo(1));
            this.onInitialDelay = setTimeout(() => {
                this.carouselInt = merge(play$, touchPlay$, pause$, touchPause$, this._intervalController$)
                    .pipe(startWith(1), switchMap(val => {
                    this.isHovered = !val;
                    this.cdr.markForCheck();
                    return val ? interval$ : empty();
                }))
                    .subscribe(res => {
                    this._carouselScrollOne(1);
                });
            }, this.interval.initialDelay);
        }
    }
    /**
     * @return {?}
     */
    _updateItemIndexContextAni() {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
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
    _carouselAnimator(direction, start, end, speed, length, viewContainer = this._nodeOutlet.viewContainer) {
        /** @type {?} */
        let val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        /** @type {?} */
        const collectIndex = [];
        if (direction === 1) {
            for (let i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = (/** @type {?} */ (viewContainer.get(i)));
                /** @type {?} */
                const context = (/** @type {?} */ (viewRef.context));
                context.animate = { value: true, params: { distance: val } };
            }
        }
        else {
            for (let i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = (/** @type {?} */ (viewContainer.get(i)));
                /** @type {?} */
                const context = (/** @type {?} */ (viewRef.context));
                context.animate = { value: true, params: { distance: -val } };
            }
        }
        this.cdr.markForCheck();
        setTimeout(() => {
            this._removeAnimations(collectIndex);
        }, speed * 0.7);
    }
    /**
     * @param {?} indexs
     * @return {?}
     */
    _removeAnimations(indexs) {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        indexs.forEach(i => {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(i)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.animate = { value: false, params: { distance: 0 } };
        });
        this.cdr.markForCheck();
    }
    /**
     * Short form for setElementStyle
     * @param {?} el
     * @param {?} prop
     * @param {?} val
     * @return {?}
     */
    _setStyle(el, prop, val) {
        this._renderer.setStyle(el, prop, val);
    }
    /**
     * For generating style tag
     * @param {?=} datas
     * @return {?}
     */
    _createStyleElem(datas) {
        /** @type {?} */
        const styleItem = this._renderer.createElement('style');
        if (datas) {
            /** @type {?} */
            const styleText = this._renderer.createText(datas);
            this._renderer.appendChild(styleItem, styleText);
        }
        this._renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    }
}
NguCarousel.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-carousel',
                template: `<div #ngucarousel class="ngucarousel">
  <div #touchContainer class="ngu-touch-container">
    <div #nguItemsContainer class="ngucarousel-items">
      <ng-container nguCarouselOutlet></ng-container>
    </div>
  </div>
  <div class="nguclearFix"></div>
  <ng-content select="[NguCarouselPrev]"></ng-content>
  <ng-content select="[NguCarouselNext]"></ng-content>
</div>
<ng-content select="[NguCarouselPoint]"></ng-content>
`,
                styles: [`:host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
NguCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: IterableDiffers },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef }
];
NguCarousel.propDecorators = {
    inputs: [{ type: Input, args: ['inputs',] }],
    carouselLoad: [{ type: Output, args: ['carouselLoad',] }],
    onMove: [{ type: Output, args: ['onMove',] }],
    dataSource: [{ type: Input, args: ['dataSource',] }],
    _defDirec: [{ type: ContentChildren, args: [NguCarouselDefDirective,] }],
    _nodeOutlet: [{ type: ViewChild, args: [NguCarouselOutlet,] }],
    nextBtn: [{ type: ContentChild, args: [NguCarouselNextDirective, { read: ElementRef },] }],
    prevBtn: [{ type: ContentChild, args: [NguCarouselPrevDirective, { read: ElementRef },] }],
    carouselMain1: [{ type: ViewChild, args: ['ngucarousel', { read: ElementRef },] }],
    nguItemsContainer: [{ type: ViewChild, args: ['nguItemsContainer', { read: ElementRef },] }],
    touchContainer: [{ type: ViewChild, args: ['touchContainer', { read: ElementRef },] }],
    trackBy: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NguCarousel.prototype._dataSubscription;
    /** @type {?} */
    NguCarousel.prototype._dataSource;
    /** @type {?} */
    NguCarousel.prototype._dataDiffer;
    /** @type {?} */
    NguCarousel.prototype.styleid;
    /** @type {?} */
    NguCarousel.prototype.directionSym;
    /** @type {?} */
    NguCarousel.prototype.carouselCssNode;
    /** @type {?} */
    NguCarousel.prototype.pointIndex;
    /** @type {?} */
    NguCarousel.prototype.withAnim;
    /** @type {?} */
    NguCarousel.prototype.activePoint;
    /** @type {?} */
    NguCarousel.prototype.isHovered;
    /** @type {?} */
    NguCarousel.prototype.inputs;
    /** @type {?} */
    NguCarousel.prototype.carouselLoad;
    /** @type {?} */
    NguCarousel.prototype.onMove;
    /** @type {?} */
    NguCarousel.prototype.arrayChanges;
    /** @type {?} */
    NguCarousel.prototype.carouselInt;
    /** @type {?} */
    NguCarousel.prototype.listener1;
    /** @type {?} */
    NguCarousel.prototype.listener2;
    /** @type {?} */
    NguCarousel.prototype.listener3;
    /** @type {?} */
    NguCarousel.prototype.listener4;
    /** @type {?} */
    NguCarousel.prototype._defaultNodeDef;
    /** @type {?} */
    NguCarousel.prototype._defDirec;
    /** @type {?} */
    NguCarousel.prototype._nodeOutlet;
    /** @type {?} */
    NguCarousel.prototype.carouselMain1;
    /** @type {?} */
    NguCarousel.prototype.nguItemsContainer;
    /** @type {?} */
    NguCarousel.prototype.touchContainer;
    /** @type {?} */
    NguCarousel.prototype._intervalController$;
    /** @type {?} */
    NguCarousel.prototype.carousel;
    /** @type {?} */
    NguCarousel.prototype.onResize;
    /** @type {?} */
    NguCarousel.prototype.onScrolling;
    /** @type {?} */
    NguCarousel.prototype.onInitialDelay;
    /** @type {?} */
    NguCarousel.prototype.pointNumbers;
    /** @type {?} */
    NguCarousel.prototype._trackByFn;
    /** @type {?} */
    NguCarousel.prototype._el;
    /** @type {?} */
    NguCarousel.prototype._renderer;
    /** @type {?} */
    NguCarousel.prototype._differs;
    /** @type {?} */
    NguCarousel.prototype.platformId;
    /** @type {?} */
    NguCarousel.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3UvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUVmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBSVQsZUFBZSxFQUdmLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFFVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFDTCxVQUFVLEVBQ1YsRUFBRSxFQUNGLE9BQU8sRUFFUixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHdCQUF3QixFQUN4QixpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3pCLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUNMLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsZ0JBQWdCLEVBQ2pCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFvQnhCLGtEQUFrRDtBQUNsRCxNQUFNLGtCQUFzQixTQUFRLGdCQUFnQjs7Ozs7Ozs7SUF5SGxELFlBQ1UsR0FBZSxFQUNmLFNBQW9CLEVBQ3BCLFFBQXlCLEVBQ0osVUFBa0IsRUFDdkMsR0FBc0I7UUFFOUIsS0FBSyxFQUFFLENBQUM7UUFOQSxRQUFHLEdBQUgsR0FBRyxDQUFZ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SUFDdEIsZ0NBQXNCOztJQUN0QixnQ0FBc0I7O0lBY3RCLHNDQUE2RDs7SUFFN0QsZ0NBQzJEOztJQUUzRCxrQ0FDK0I7O0lBNEIvQixvQ0FDa0M7O0lBRWxDLHdDQUNzQzs7SUFFdEMscUNBQ21DOztJQUVuQywyQ0FBcUQ7O0lBRXJELCtCQUFzQjs7SUFFdEIsK0JBQXNCOztJQUN0QixrQ0FBeUI7O0lBQ3pCLHFDQUE0Qjs7SUFFNUIsbUNBQThCOztJQTBCOUIsaUNBQXVDOztJQUdyQywwQkFBdUI7O0lBQ3ZCLGdDQUE0Qjs7SUFDNUIsK0JBQWlDOztJQUNqQyxpQ0FBK0M7O0lBQy9DLDBCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBpc0Rldk1vZGUsXG4gIEl0ZXJhYmxlQ2hhbmdlUmVjb3JkLFxuICBJdGVyYWJsZUNoYW5nZXMsXG4gIEl0ZXJhYmxlRGlmZmVyLFxuICBJdGVyYWJsZURpZmZlcnMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBlbXB0eSxcbiAgZnJvbUV2ZW50LFxuICBpbnRlcnZhbCxcbiAgbWVyZ2UsXG4gIE9ic2VydmFibGUsXG4gIG9mLFxuICBTdWJqZWN0LFxuICBTdWJzY3JpcHRpb25cbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbywgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsT3V0bGV0LFxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmVcbn0gZnJvbSAnLi4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBOZ3VDYXJvdXNlbENvbmZpZyxcbiAgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0LFxuICBOZ3VDYXJvdXNlbFN0b3JlXG59IGZyb20gJy4vbmd1LWNhcm91c2VsJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3UtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI25ndWNhcm91c2VsIGNsYXNzPVwibmd1Y2Fyb3VzZWxcIj5cbiAgPGRpdiAjdG91Y2hDb250YWluZXIgY2xhc3M9XCJuZ3UtdG91Y2gtY29udGFpbmVyXCI+XG4gICAgPGRpdiAjbmd1SXRlbXNDb250YWluZXIgY2xhc3M9XCJuZ3VjYXJvdXNlbC1pdGVtc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciBuZ3VDYXJvdXNlbE91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJuZ3VjbGVhckZpeFwiPjwvZGl2PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbTmd1Q2Fyb3VzZWxQcmV2XVwiPjwvbmctY29udGVudD5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW05ndUNhcm91c2VsTmV4dF1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltOZ3VDYXJvdXNlbFBvaW50XVwiPjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0Lm5ndXJ0bHtkaXJlY3Rpb246cnRsfS5uZ3VjYXJvdXNlbHtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjEwMCV9Lm5ndWNhcm91c2VsIC5uZ3VjYXJvdXNlbC1pdGVtc3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCV9Lm5ndXZlcnRpY2Fse2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uYmFubmVyIC5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2JvdHRvbToyMHB4fS5iYW5uZXIgLm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpe2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuNTUpfS5iYW5uZXIgLm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpLmFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmZ9LmJhbm5lciAubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGk6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9Lm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50e2xpc3Qtc3R5bGUtdHlwZTpub25lO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTJweDttYXJnaW46MDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNTUpO3BhZGRpbmc6NHB4O21hcmdpbjowIDRweDt0cmFuc2l0aW9uOi40c30ubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGkuYWN0aXZle2JhY2tncm91bmQ6IzZiNmI2Yjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjgpO3RyYW5zZm9ybTpzY2FsZSgxLjgpfS5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludCBsaTpob3ZlcntjdXJzb3I6cG9pbnRlcn0ubmd1Y2xlYXJGaXh7Y2xlYXI6Ym90aH1gXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsPFQ+IGV4dGVuZHMgTmd1Q2Fyb3VzZWxTdG9yZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcbiAgX2RhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgX2RhdGFTb3VyY2U6IGFueTtcbiAgX2RhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPHt9PjtcbiAgc3R5bGVpZDogc3RyaW5nO1xuICBwcml2YXRlIGRpcmVjdGlvblN5bTogc3RyaW5nO1xuICBwcml2YXRlIGNhcm91c2VsQ3NzTm9kZTogYW55O1xuICBwcml2YXRlIHBvaW50SW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSB3aXRoQW5pbSA9IHRydWU7XG4gIGFjdGl2ZVBvaW50OiBudW1iZXI7XG4gIGlzSG92ZXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnaW5wdXRzJylcbiAgcHJpdmF0ZSBpbnB1dHM6IE5ndUNhcm91c2VsQ29uZmlnO1xuICBAT3V0cHV0KCdjYXJvdXNlbExvYWQnKVxuICBwcml2YXRlIGNhcm91c2VsTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCdvbk1vdmUnKVxuICBwcml2YXRlIG9uTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd1Q2Fyb3VzZWw8VD4+KCk7XG4gIC8vIGlzRmlyc3RzcyA9IDA7XG4gIGFycmF5Q2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPHt9PjtcbiAgY2Fyb3VzZWxJbnQ6IFN1YnNjcmlwdGlvbjtcblxuICBsaXN0ZW5lcjE6ICgpID0+IHZvaWQ7XG4gIGxpc3RlbmVyMjogKCkgPT4gdm9pZDtcbiAgbGlzdGVuZXIzOiAoKSA9PiB2b2lkO1xuICBsaXN0ZW5lcjQ6ICgpID0+IHZvaWQ7XG5cbiAgQElucHV0KCdkYXRhU291cmNlJylcbiAgZ2V0IGRhdGFTb3VyY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgfVxuICBzZXQgZGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSwgdGhpcy5kYXRhU291cmNlKTtcbiAgICAgIC8vIHRoaXMuaXNGaXJzdHNzKys7XG4gICAgICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHwgbnVsbDtcblxuICBAQ29udGVudENoaWxkcmVuKE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlKVxuICBwcml2YXRlIF9kZWZEaXJlYzogUXVlcnlMaXN0PE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4+O1xuXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxPdXRsZXQpXG4gIF9ub2RlT3V0bGV0OiBOZ3VDYXJvdXNlbE91dGxldDtcblxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxuICAgKiBpc3N1ZSBpZCAjOTFcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgc2V0IG5leHRCdG4oYnRuOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5saXN0ZW5lcjIgJiYgdGhpcy5saXN0ZW5lcjIoKTtcbiAgICBpZiAoYnRuKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyMiA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcbiAgICogaXNzdWUgaWQgIzkxXG4gICAqL1xuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHNldCBwcmV2QnRuKGJ0bjogRWxlbWVudFJlZikge1xuICAgIHRoaXMubGlzdGVuZXIxICYmIHRoaXMubGlzdGVuZXIxKCk7XG4gICAgaWYgKGJ0bikge1xuICAgICAgdGhpcy5saXN0ZW5lcjEgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ25ndWNhcm91c2VsJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHByaXZhdGUgY2Fyb3VzZWxNYWluMTogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkKCduZ3VJdGVtc0NvbnRhaW5lcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwcml2YXRlIG5ndUl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGQoJ3RvdWNoQ29udGFpbmVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHByaXZhdGUgdG91Y2hDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfaW50ZXJ2YWxDb250cm9sbGVyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIGNhcm91c2VsOiBhbnk7XG5cbiAgcHJpdmF0ZSBvblJlc2l6ZTogYW55O1xuICBwcml2YXRlIG9uU2Nyb2xsaW5nOiBhbnk7XG4gIHByaXZhdGUgb25Jbml0aWFsRGVsYXk6IGFueTtcblxuICBwb2ludE51bWJlcnM6IEFycmF5PGFueT4gPSBbXTtcblxuICAvKipcbiAgICogVHJhY2tpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHVzZWQgdG8gY2hlY2sgdGhlIGRpZmZlcmVuY2VzIGluIGRhdGEgY2hhbmdlcy4gVXNlZCBzaW1pbGFybHlcbiAgICogdG8gYG5nRm9yYCBgdHJhY2tCeWAgZnVuY3Rpb24uIE9wdGltaXplIEl0ZW1zIG9wZXJhdGlvbnMgYnkgaWRlbnRpZnlpbmcgYSBJdGVtcyBiYXNlZCBvbiBpdHMgZGF0YVxuICAgKiByZWxhdGl2ZSB0byB0aGUgZnVuY3Rpb24gdG8ga25vdyBpZiBhIEl0ZW1zIHNob3VsZCBiZSBhZGRlZC9yZW1vdmVkL21vdmVkLlxuICAgKiBBY2NlcHRzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0d28gcGFyYW1ldGVycywgYGluZGV4YCBhbmQgYGl0ZW1gLlxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHRyYWNrQnkoKTogVHJhY2tCeUZ1bmN0aW9uPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJhY2tCeUZuO1xuICB9XG4gIHNldCB0cmFja0J5KGZuOiBUcmFja0J5RnVuY3Rpb248VD4pIHtcbiAgICBpZiAoXG4gICAgICBpc0Rldk1vZGUoKSAmJlxuICAgICAgZm4gIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nICYmXG4gICAgICA8YW55PmNvbnNvbGUgJiZcbiAgICAgIDxhbnk+Y29uc29sZS53YXJuXG4gICAgKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGB0cmFja0J5IG11c3QgYmUgYSBmdW5jdGlvbiwgYnV0IHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoZm4pfS5gXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl90cmFja0J5Rm4gPSBmbjtcbiAgfVxuICBwcml2YXRlIF90cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxUPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2RhdGFEaWZmZXIgPSB0aGlzLl9kaWZmZXJzXG4gICAgICAuZmluZChbXSlcbiAgICAgIC5jcmVhdGUoKF9pOiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFja0J5ID8gdGhpcy50cmFja0J5KGl0ZW0uZGF0YUluZGV4LCBpdGVtLmRhdGEpIDogaXRlbTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIHRoaXMuYXJyYXlDaGFuZ2VzID0gdGhpcy5fZGF0YURpZmZlci5kaWZmKHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgaWYgKHRoaXMuYXJyYXlDaGFuZ2VzICYmIHRoaXMuX2RlZkRpcmVjKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnQ2hhbmdlcyBkZXRlY3RlZCEnKTtcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3dpdGNoRGF0YVNvdXJjZShkYXRhU291cmNlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSBkYXRhU291cmNlO1xuICAgIGlmICh0aGlzLl9kZWZEaXJlYykge1xuICAgICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcbiAgICBsZXQgZGF0YVN0cmVhbTogT2JzZXJ2YWJsZTxhbnlbXT4gfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAodGhpcy5fZGF0YVNvdXJjZSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLl9kYXRhU291cmNlO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl9kYXRhU291cmNlKSkge1xuICAgICAgZGF0YVN0cmVhbSA9IG9mKHRoaXMuX2RhdGFTb3VyY2UpO1xuICAgIH1cblxuICAgIGlmIChkYXRhU3RyZWFtKSB7XG4gICAgICB0aGlzLl9kYXRhU3Vic2NyaXB0aW9uID0gZGF0YVN0cmVhbVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJCkpXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJOb2RlQ2hhbmdlcyhkYXRhKTtcbiAgICAgICAgICB0aGlzLmlzTGFzdCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlck5vZGVDaGFuZ2VzKFxuICAgIGRhdGE6IGFueVtdLFxuICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmFycmF5Q2hhbmdlcykgcmV0dXJuO1xuXG4gICAgdGhpcy5hcnJheUNoYW5nZXMuZm9yRWFjaE9wZXJhdGlvbihcbiAgICAgIChcbiAgICAgICAgaXRlbTogSXRlcmFibGVDaGFuZ2VSZWNvcmQ8YW55PixcbiAgICAgICAgYWRqdXN0ZWRQcmV2aW91c0luZGV4OiBudW1iZXIsXG4gICAgICAgIGN1cnJlbnRJbmRleDogbnVtYmVyXG4gICAgICApID0+IHtcbiAgICAgICAgLy8gY29uc3Qgbm9kZSA9IHRoaXMuX2RlZkRpcmVjLmZpbmQoaXRlbXMgPT4gaXRlbS5pdGVtKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2dldE5vZGVEZWYoZGF0YVtjdXJyZW50SW5kZXhdLCBjdXJyZW50SW5kZXgpO1xuXG4gICAgICAgIGlmIChpdGVtLnByZXZpb3VzSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PGFueT4oZGF0YVtjdXJyZW50SW5kZXhdKTtcbiAgICAgICAgICBjb250ZXh0LmluZGV4ID0gY3VycmVudEluZGV4O1xuICAgICAgICAgIHZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICAgICAgbm9kZS50ZW1wbGF0ZSxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgdmlld0NvbnRhaW5lci5yZW1vdmUoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB2aWV3ID0gdmlld0NvbnRhaW5lci5nZXQoYWRqdXN0ZWRQcmV2aW91c0luZGV4KTtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLm1vdmUodmlldywgY3VycmVudEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5fdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpO1xuXG4gICAgaWYgKHRoaXMuY2Fyb3VzZWwpIHtcbiAgICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaW5kZXgtcmVsYXRlZCBjb250ZXh0IGZvciBlYWNoIHJvdyB0byByZWZsZWN0IGFueSBjaGFuZ2VzIGluIHRoZSBpbmRleCBvZiB0aGUgcm93cyxcbiAgICogZS5nLiBmaXJzdC9sYXN0L2V2ZW4vb2RkLlxuICAgKi9cbiAgcHJpdmF0ZSBfdXBkYXRlSXRlbUluZGV4Q29udGV4dCgpIHtcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xuICAgIGZvciAoXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoO1xuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcbiAgICAgIHJlbmRlckluZGV4KytcbiAgICApIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XG4gICAgICBjb250ZXh0LmZpcnN0ID0gcmVuZGVySW5kZXggPT09IDA7XG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xuICAgICAgY29udGV4dC5vZGQgPSAhY29udGV4dC5ldmVuO1xuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldE5vZGVEZWYoZGF0YTogYW55LCBpOiBudW1iZXIpOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9kZWZEaXJlYyk7XG4gICAgaWYgKHRoaXMuX2RlZkRpcmVjLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlZkRpcmVjLmZpcnN0O1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVEZWYgPVxuICAgICAgdGhpcy5fZGVmRGlyZWMuZmluZChkZWYgPT4gZGVmLndoZW4gJiYgZGVmLndoZW4oaSwgZGF0YSkpIHx8XG4gICAgICB0aGlzLl9kZWZhdWx0Tm9kZURlZjtcblxuICAgIHJldHVybiBub2RlRGVmO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2Fyb3VzZWwgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2lucHV0VmFsaWRhdGlvbigpO1xuXG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUgPSB0aGlzLl9jcmVhdGVTdHlsZUVsZW0oKTtcblxuICAgIC8vIHRoaXMuX2J1dHRvbkNvbnRyb2woKTtcblxuICAgIGlmICh3aW5kb3cpIHtcbiAgICAgIHRoaXMuX2Nhcm91c2VsSW50ZXJ2YWwoKTtcbiAgICAgIGlmICghdGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMuX3RvdWNoKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3RlbmVyMyA9IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5fb25SZXNpemluZyhldmVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lucHV0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLmlucHV0cy5ncmlkLmFsbCAhPT0gMCA/ICdmaXhlZCcgOiAncmVzcG9uc2l2ZSc7XG4gICAgdGhpcy5sb29wID0gdGhpcy5pbnB1dHMubG9vcCB8fCBmYWxzZTtcbiAgICB0aGlzLmlucHV0cy5lYXNpbmcgPSB0aGlzLmlucHV0cy5lYXNpbmcgfHwgJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJztcbiAgICB0aGlzLnRvdWNoLmFjdGl2ZSA9IHRoaXMuaW5wdXRzLnRvdWNoIHx8IGZhbHNlO1xuICAgIHRoaXMuUlRMID0gdGhpcy5pbnB1dHMuUlRMID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSB0aGlzLmlucHV0cy5pbnRlcnZhbCB8fCBudWxsO1xuICAgIHRoaXMudmVsb2NpdHkgPVxuICAgICAgdHlwZW9mIHRoaXMuaW5wdXRzLnZlbG9jaXR5ID09PSAnbnVtYmVyJ1xuICAgICAgICA/IHRoaXMuaW5wdXRzLnZlbG9jaXR5XG4gICAgICAgIDogdGhpcy52ZWxvY2l0eTtcblxuICAgIGlmICh0aGlzLmlucHV0cy52ZXJ0aWNhbCAmJiB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkKSB7XG4gICAgICB0aGlzLnZlcnRpY2FsLmVuYWJsZWQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5lbmFibGVkO1xuICAgICAgdGhpcy52ZXJ0aWNhbC5oZWlnaHQgPSB0aGlzLmlucHV0cy52ZXJ0aWNhbC5oZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMuZGlyZWN0aW9uU3ltID0gdGhpcy5SVEwgPyAnJyA6ICctJztcbiAgICB0aGlzLnBvaW50ID1cbiAgICAgIHRoaXMuaW5wdXRzLnBvaW50ICYmIHR5cGVvZiB0aGlzLmlucHV0cy5wb2ludC52aXNpYmxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGVcbiAgICAgICAgOiB0cnVlO1xuXG4gICAgdGhpcy5fY2Fyb3VzZWxTaXplKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjbGVhckludGVydmFsKHRoaXMuY2Fyb3VzZWxJbnQpO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25Jbml0aWFsRGVsYXkpO1xuICAgIHRoaXMuY2Fyb3VzZWxJbnQgJiYgdGhpcy5jYXJvdXNlbEludC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNhcm91c2VsTG9hZC5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25Nb3ZlLmNvbXBsZXRlKCk7XG5cbiAgICAvKiogcmVtb3ZlIGxpc3RlbmVycyAqL1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY29uc3Qgc3RyID0gYGxpc3RlbmVyJHtpfWA7XG4gICAgICB0aGlzW3N0cl0gJiYgdGhpc1tzdHJdKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25SZXNpemUpO1xuICAgIHRoaXMub25SZXNpemUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRldmljZVdpZHRoICE9PSBldmVudC50YXJnZXQub3V0ZXJXaWR0aCkge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xuICAgICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH1cblxuICAvKiogR2V0IFRvdWNoIGlucHV0ICovXG4gIHByaXZhdGUgX3RvdWNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0cy50b3VjaCkge1xuICAgICAgY29uc3QgaGFtbWVydGltZSA9IG5ldyBIYW1tZXIodGhpcy50b3VjaENvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGhhbW1lcnRpbWUuZ2V0KCdwYW4nKS5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTCB9KTtcblxuICAgICAgaGFtbWVydGltZS5vbigncGFuc3RhcnQnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVt0aGlzLmRldmljZVR5cGVdO1xuICAgICAgICB0aGlzLmRleFZhbCA9IDA7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFudXAnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XG4gICAgICAgIH0pO1xuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5kb3duJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5sZWZ0JywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFucmlnaHQnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmVuZCcsIChldjogYW55KSA9PiB7XG4gICAgICAgIGlmIChNYXRoLmFicyhldi52ZWxvY2l0eSkgPj0gdGhpcy52ZWxvY2l0eSkge1xuICAgICAgICAgIHRoaXMudG91Y2gudmVsb2NpdHkgPSBldi52ZWxvY2l0eTtcbiAgICAgICAgICBsZXQgZGlyZWMgPSAwO1xuICAgICAgICAgIGlmICghdGhpcy5SVEwpIHtcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDAgOiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAxIDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoZGlyZWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGV4VmFsID0gMDtcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgICAgICd0cmFuc2Zvcm0gMzI0bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaGFtbWVydGltZS5vbignaGFtbWVyLmlucHV0JywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIC8vIGFsbG93IG5lc3RlZCB0b3VjaCBldmVudHMgdG8gbm8gcHJvcGFnYXRlLCB0aGlzIG1heSBoYXZlIG90aGVyIHNpZGUgYWZmZWN0cyBidXQgd29ya3MgZm9yIG5vdy5cbiAgICAgICAgLy8gVE9ETzogSXQgaXMgcHJvYmFibHkgYmV0dGVyIHRvIGNoZWNrIHRoZSBzb3VyY2UgZWxlbWVudCBvZiB0aGUgZXZlbnQgYW5kIG9ubHkgYXBwbHkgdGhlIGhhbmRsZSB0byB0aGUgY29ycmVjdCBjYXJvdXNlbFxuICAgICAgICBldi5zcmNFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBoYW5kbGUgdG91Y2ggaW5wdXQgKi9cbiAgcHJpdmF0ZSBfdG91Y2hIYW5kbGluZyhlOiBzdHJpbmcsIGV2OiBhbnkpOiB2b2lkIHtcbiAgICAvLyB2ZXJ0aWNhbCB0b3VjaCBldmVudHMgc2VlbSB0byBjYXVzZSB0byBwYW5zdGFydCBldmVudCB3aXRoIGFuIG9kZCBkZWx0YVxuICAgIC8vIGFuZCBhIGNlbnRlciBvZiB7eDowLHk6MH0gc28gdGhpcyB3aWxsIGlnbm9yZSB0aGVtXG4gICAgaWYgKGV2LmNlbnRlci54ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXYgPSBNYXRoLmFicyh0aGlzLnZlcnRpY2FsLmVuYWJsZWQgPyBldi5kZWx0YVkgOiBldi5kZWx0YVgpO1xuICAgIGxldCB2YWx0ID0gZXYgLSB0aGlzLmRleFZhbDtcbiAgICB2YWx0ID1cbiAgICAgIHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnXG4gICAgICAgID8gKE1hdGguYWJzKGV2IC0gdGhpcy5kZXhWYWwpIC9cbiAgICAgICAgICAodGhpcy52ZXJ0aWNhbC5lbmFibGVkXG4gICAgICAgICAgICA/IHRoaXMudmVydGljYWwuaGVpZ2h0XG4gICAgICAgICAgICA6IHRoaXMuY2Fyb3VzZWxXaWR0aCkpICpcbiAgICAgICAgMTAwXG4gICAgICAgIDogdmFsdDtcbiAgICB0aGlzLmRleFZhbCA9IGV2O1xuICAgIHRoaXMudG91Y2guc3dpcGUgPSBlO1xuICAgIHRoaXMuX3NldFRvdWNoVHJhbnNmcm9tKGUsIHZhbHQpO1xuICAgIHRoaXMuX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VG91Y2hUcmFuc2Zyb20oZTogc3RyaW5nLCB2YWx0OiBudW1iZXIpIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSB0aGlzLlJUTCA/ICdwYW5yaWdodCcgOiAncGFubGVmdCc7XG4gICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9XG4gICAgICBlID09PSBjb25kaXRpb24gPyB2YWx0ICsgdGhpcy50b3VjaFRyYW5zZm9ybSA6IHRoaXMudG91Y2hUcmFuc2Zvcm0gLSB2YWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0VHJhbnNmb3JtRnJvbVRvdWNoKCkge1xuICAgIGlmICh0aGlzLnRvdWNoVHJhbnNmb3JtIDwgMCkge1xuICAgICAgdGhpcy50b3VjaFRyYW5zZm9ybSA9IDA7XG4gICAgfVxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJyA/ICclJyA6ICdweCc7XG4gICAgdGhpcy5fc2V0U3R5bGUoXG4gICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAndHJhbnNmb3JtJyxcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZFxuICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50b3VjaFRyYW5zZm9ybX0ke3R5cGV9LCAwKWBcbiAgICAgICAgOiBgdHJhbnNsYXRlM2QoJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMCwgMClgXG4gICAgKTtcbiAgfVxuXG4gIC8qKiB0aGlzIGZuIHVzZWQgdG8gZGlzYWJsZSB0aGUgaW50ZXJ2YWwgd2hlbiBpdCBpcyBub3Qgb24gdGhlIHZpZXdwb3J0ICovXG4gIHByaXZhdGUgX29uV2luZG93U2Nyb2xsaW5nKCk6IHZvaWQge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zdCBoZWlnaHR0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGNhcm91c2VsSGVpZ2h0ID0gdGhpcy5jYXJvdXNlbC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgaXNDYXJvdXNlbE9uU2NyZWVuID1cbiAgICAgIHRvcCA8PSBzY3JvbGxZICsgaGVpZ2h0dCAtIGNhcm91c2VsSGVpZ2h0IC8gNCAmJlxuICAgICAgdG9wICsgY2Fyb3VzZWxIZWlnaHQgLyAyID49IHNjcm9sbFk7XG5cbiAgICBpZiAoaXNDYXJvdXNlbE9uU2NyZWVuKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQubmV4dCgwKTtcbiAgICB9XG4gIH1cblxuICAvKiogc3RvcmUgZGF0YSBiYXNlZCBvbiB3aWR0aCBvZiB0aGUgc2NyZWVuIGZvciB0aGUgY2Fyb3VzZWwgKi9cbiAgcHJpdmF0ZSBfc3RvcmVDYXJvdXNlbERhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5kZXZpY2VXaWR0aCA9IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZClcbiAgICAgID8gd2luZG93LmlubmVyV2lkdGhcbiAgICAgIDogMTIwMDtcblxuICAgIHRoaXMuY2Fyb3VzZWxXaWR0aCA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICB0aGlzLmRldmljZVR5cGUgPVxuICAgICAgICB0aGlzLmRldmljZVdpZHRoID49IDEyMDBcbiAgICAgICAgICA/ICdsZydcbiAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gOTkyXG4gICAgICAgICAgICA/ICdtZCdcbiAgICAgICAgICAgIDogdGhpcy5kZXZpY2VXaWR0aCA+PSA3NjhcbiAgICAgICAgICAgICAgPyAnc20nXG4gICAgICAgICAgICAgIDogJ3hzJztcblxuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaW5wdXRzLmdyaWRbdGhpcy5kZXZpY2VUeXBlXTtcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pdGVtcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pdGVtcyA9IE1hdGgudHJ1bmModGhpcy5jYXJvdXNlbFdpZHRoIC8gdGhpcy5pbnB1dHMuZ3JpZC5hbGwpO1xuICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLmlucHV0cy5ncmlkLmFsbDtcbiAgICAgIHRoaXMuZGV2aWNlVHlwZSA9ICdhbGwnO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVJdGVtcyA9ICsodGhpcy5pbnB1dHMuc2xpZGUgPCB0aGlzLml0ZW1zXG4gICAgICA/IHRoaXMuaW5wdXRzLnNsaWRlXG4gICAgICA6IHRoaXMuaXRlbXMpO1xuICAgIHRoaXMubG9hZCA9XG4gICAgICB0aGlzLmlucHV0cy5sb2FkID49IHRoaXMuc2xpZGVJdGVtcyA/IHRoaXMuaW5wdXRzLmxvYWQgOiB0aGlzLnNsaWRlSXRlbXM7XG4gICAgdGhpcy5zcGVlZCA9XG4gICAgICB0aGlzLmlucHV0cy5zcGVlZCAmJiB0aGlzLmlucHV0cy5zcGVlZCA+IC0xID8gdGhpcy5pbnB1dHMuc3BlZWQgOiA0MDA7XG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xuICB9XG5cbiAgLyoqIFVzZWQgdG8gcmVzZXQgdGhlIGNhcm91c2VsICovXG4gIHB1YmxpYyByZXNldCh3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XG4gICAgdGhpcy5jYXJvdXNlbENzc05vZGUuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5tb3ZlVG8oMCk7XG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludCgpO1xuICB9XG5cbiAgLyoqIEluaXQgY2Fyb3VzZWwgcG9pbnQgKi9cbiAgcHJpdmF0ZSBfY2Fyb3VzZWxQb2ludCgpOiB2b2lkIHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAvLyBpZiAodGhpcy51c2VyRGF0YS5wb2ludC52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgY29uc3QgTm9zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtICh0aGlzLml0ZW1zIC0gdGhpcy5zbGlkZUl0ZW1zKTtcbiAgICB0aGlzLnBvaW50SW5kZXggPSBNYXRoLmNlaWwoTm9zIC8gdGhpcy5zbGlkZUl0ZW1zKTtcbiAgICBjb25zdCBwb2ludGVycyA9IFtdO1xuXG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA+IDEgfHwgIXRoaXMuaW5wdXRzLnBvaW50LmhpZGVPblNpbmdsZVNsaWRlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9pbnRJbmRleDsgaSsrKSB7XG4gICAgICAgIHBvaW50ZXJzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucG9pbnROdW1iZXJzID0gcG9pbnRlcnM7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wb2ludE51bWJlcnMpO1xuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XG4gICAgaWYgKHRoaXMucG9pbnRJbmRleCA8PSAxKSB7XG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPT09IDAgJiYgIXRoaXMubG9vcCkge1xuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gfVxuICB9XG5cbiAgLyoqIGNoYW5nZSB0aGUgYWN0aXZlIHBvaW50IGluIGNhcm91c2VsICovXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGkgPSBNYXRoLmNlaWwodGhpcy5jdXJyZW50U2xpZGUgLyB0aGlzLnNsaWRlSXRlbXMpO1xuICAgIHRoaXMuYWN0aXZlUG9pbnQgPSBpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHNjb2xsIHRoZSBjYXJvdXNlbCB3aGVuIHBvaW50IGlzIGNsaWNrZWQgKi9cbiAgcHVibGljIG1vdmVUbyhzbGlkZTogbnVtYmVyLCB3aXRoT3V0QW5pbWF0aW9uPzogYm9vbGVhbikge1xuICAgIC8vIHNsaWRlID0gc2xpZGUgLSAxO1xuICAgIHdpdGhPdXRBbmltYXRpb24gJiYgKHRoaXMud2l0aEFuaW0gPSBmYWxzZSk7XG4gICAgaWYgKHRoaXMuYWN0aXZlUG9pbnQgIT09IHNsaWRlICYmIHNsaWRlIDwgdGhpcy5wb2ludEluZGV4KSB7XG4gICAgICBsZXQgc2xpZGVyZW1haW5zO1xuICAgICAgY29uc3QgYnRucyA9IHRoaXMuY3VycmVudFNsaWRlIDwgc2xpZGUgPyAxIDogMDtcblxuICAgICAgc3dpdGNoIChzbGlkZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSB0aGlzLnBvaW50SW5kZXggLSAxOlxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcbiAgICAgICAgICBzbGlkZXJlbWFpbnMgPSBzbGlkZSAqIHRoaXMuc2xpZGVJdGVtcztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKGJ0bnMsIHNsaWRlcmVtYWlucywgdGhpcy5zcGVlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIHNldCB0aGUgc3R5bGUgb2YgdGhlIGNhcm91c2VsIGJhc2VkIHRoZSBpbnB1dHMgZGF0YSAqL1xuICBwcml2YXRlIF9jYXJvdXNlbFNpemUoKTogdm9pZCB7XG4gICAgdGhpcy50b2tlbiA9IHRoaXMuX2dlbmVyYXRlSUQoKTtcbiAgICBsZXQgZGlzbSA9ICcnO1xuICAgIHRoaXMuc3R5bGVpZCA9IGAuJHtcbiAgICAgIHRoaXMudG9rZW5cbiAgICAgIH0gPiAubmd1Y2Fyb3VzZWwgPiAubmd1LXRvdWNoLWNvbnRhaW5lciA+IC5uZ3VjYXJvdXNlbC1pdGVtc2A7XG5cbiAgICBpZiAodGhpcy5pbnB1dHMuY3VzdG9tID09PSAnYmFubmVyJykge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ2Jhbm5lcicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlucHV0cy5hbmltYXRpb24gPT09ICdsYXp5Jykge1xuICAgICAgZGlzbSArPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge3RyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTt9YDtcbiAgICB9XG5cbiAgICBsZXQgaXRlbVN0eWxlID0gJyc7XG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9cHh9YDtcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLnNtfXB4fWA7XG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH1weH1gO1xuICAgICAgY29uc3QgaXRlbVdpZHRoX2xnID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9cHh9YDtcblxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgY29uc3QgaXRlbVdpZHRoX3hzID1cbiAgICAgICAgdGhpcy5pbnB1dHMudHlwZSA9PT0gJ21vYmlsZSdcbiAgICAgICAgICA/IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezk1IC9cbiAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHs5NSAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWBcbiAgICAgICAgICA6IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXG4gICAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQueHN9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQueHN9JTt9YDtcblxuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xuICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5zbX0lfWA7XG4gICAgICBjb25zdCBpdGVtV2lkdGhfbWQgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXG4gICAgICAgICt0aGlzLmlucHV0cy5ncmlkLm1kfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfSV9YDtcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9sZyA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cbiAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQubGd9JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQubGd9JX1gO1xuXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbVN0eWxlID0gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7XG4gICAgICAgIHRoaXMuaW5wdXRzLmdyaWQuYWxsXG4gICAgICAgIH1weDsgd2lkdGg6ICR7dGhpcy5pbnB1dHMuZ3JpZC5hbGx9cHg7fWA7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgdGhpcy50b2tlbik7XG4gICAgaWYgKHRoaXMudmVydGljYWwuZW5hYmxlZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ25ndXZlcnRpY2FsJ1xuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgIGAke3RoaXMudmVydGljYWwuaGVpZ2h0fXB4YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICB0aGlzLlJUTCAmJlxuICAgICAgIXRoaXMudmVydGljYWwuZW5hYmxlZCAmJlxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5jYXJvdXNlbCwgJ25ndXJ0bCcpO1xuICAgIHRoaXMuX2NyZWF0ZVN0eWxlRWxlbShgJHtkaXNtfSAke2l0ZW1TdHlsZX1gKTtcbiAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xuICB9XG5cbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAxICovXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsT25lKEJ0bjogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IGl0ZW1TcGVlZCA9IHRoaXMuc3BlZWQ7XG4gICAgbGV0IHRyYW5zbGF0ZVh2YWwsXG4gICAgICBjdXJyZW50U2xpZGUgPSAwO1xuICAgIGNvbnN0IHRvdWNoTW92ZSA9IE1hdGguY2VpbCh0aGlzLmRleFZhbCAvIHRoaXMuaXRlbVdpZHRoKTtcbiAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XG5cbiAgICBpZiAodGhpcy5wb2ludEluZGV4ID09PSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDAgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzRmlyc3QpIHx8IHRoaXMubG9vcCkpIHtcbiAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy5zbGlkZUl0ZW1zICogdGhpcy5wb2ludEluZGV4O1xuXG4gICAgICBjb25zdCBjdXJyZW50U2xpZGVEID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0aGlzLnNsaWRlSXRlbXM7XG4gICAgICBjb25zdCBNb3ZlU2xpZGUgPSBjdXJyZW50U2xpZGVEICsgdGhpcy5zbGlkZUl0ZW1zO1xuICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcbiAgICAgICAgaXRlbVNwZWVkID0gNDAwO1xuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNsaWRlSXRlbXMgPj0gTW92ZVNsaWRlKSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDEsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAwKTtcbiAgICAgICAgaWYgKHRvdWNoTW92ZSA+IHRoaXMuc2xpZGVJdGVtcykge1xuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdG91Y2hNb3ZlO1xuICAgICAgICAgIGl0ZW1TcGVlZCA9IDIwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxUd28oQnRuLCBjdXJyZW50U2xpZGUsIGl0ZW1TcGVlZCk7XG4gICAgfSBlbHNlIGlmIChCdG4gPT09IDEgJiYgKCghdGhpcy5sb29wICYmICF0aGlzLmlzTGFzdCkgfHwgdGhpcy5sb29wKSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIDw9XG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyArIHRoaXMuc2xpZGVJdGVtcyAmJlxuICAgICAgICAhdGhpcy5pc0xhc3RcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5pdGVtcztcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigwLCAxKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0xhc3QpIHtcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XG4gICAgICAgIGl0ZW1TcGVlZCA9IDQwMDtcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XG4gICAgICAgIGlmICh0b3VjaE1vdmUgPiB0aGlzLnNsaWRlSXRlbXMpIHtcbiAgICAgICAgICBjdXJyZW50U2xpZGUgPVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXMgKyAodG91Y2hNb3ZlIC0gdGhpcy5zbGlkZUl0ZW1zKTtcbiAgICAgICAgICBpdGVtU3BlZWQgPSAyMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLnNsaWRlSXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsVHdvKEJ0biwgY3VycmVudFNsaWRlLCBpdGVtU3BlZWQpO1xuICAgIH1cblxuICAgIC8vIGN1YmljLWJlemllcigwLjE1LCAxLjA0LCAwLjU0LCAxLjEzKVxuICB9XG5cbiAgLyoqIGxvZ2ljIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgc3RlcCAyICovXG4gIHByaXZhdGUgX2Nhcm91c2VsU2Nyb2xsVHdvKFxuICAgIEJ0bjogbnVtYmVyLFxuICAgIGN1cnJlbnRTbGlkZTogbnVtYmVyLFxuICAgIGl0ZW1TcGVlZDogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuXG4gICAgaWYgKHRoaXMuZGV4VmFsICE9PSAwKSB7XG4gICAgICBjb25zdCB2YWwgPSBNYXRoLmFicyh0aGlzLnRvdWNoLnZlbG9jaXR5KTtcbiAgICAgIGxldCBzb210ID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRoaXMuZGV4VmFsIC8gdmFsIC8gdGhpcy5kZXhWYWwpICogKHRoaXMuZGV2aWNlV2lkdGggLSB0aGlzLmRleFZhbClcbiAgICAgICk7XG4gICAgICBzb210ID0gc29tdCA+IGl0ZW1TcGVlZCA/IGl0ZW1TcGVlZCA6IHNvbXQ7XG4gICAgICBpdGVtU3BlZWQgPSBzb210IDwgMjAwID8gMjAwIDogc29tdDtcbiAgICAgIHRoaXMuZGV4VmFsID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMud2l0aEFuaW0pIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKFxuICAgICAgICB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgYHRyYW5zZm9ybSAke2l0ZW1TcGVlZH1tcyAke3RoaXMuaW5wdXRzLmVhc2luZ31gXG4gICAgICApO1xuICAgICAgdGhpcy5pbnB1dHMuYW5pbWF0aW9uICYmXG4gICAgICAgIHRoaXMuX2Nhcm91c2VsQW5pbWF0b3IoXG4gICAgICAgICAgQnRuLFxuICAgICAgICAgIGN1cnJlbnRTbGlkZSArIDEsXG4gICAgICAgICAgY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyxcbiAgICAgICAgICBpdGVtU3BlZWQsXG4gICAgICAgICAgTWF0aC5hYnModGhpcy5jdXJyZW50U2xpZGUgLSBjdXJyZW50U2xpZGUpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgYCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgdGhpcy5pdGVtTGVuZ3RoID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aDtcbiAgICB0aGlzLl90cmFuc2Zvcm1TdHlsZShjdXJyZW50U2xpZGUpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlID0gY3VycmVudFNsaWRlO1xuICAgIHRoaXMub25Nb3ZlLmVtaXQodGhpcyk7XG4gICAgdGhpcy5fY2Fyb3VzZWxQb2ludEFjdGl2ZXIoKTtcbiAgICB0aGlzLl9jYXJvdXNlbExvYWRUcmlnZ2VyKCk7XG4gICAgdGhpcy53aXRoQW5pbSA9IHRydWU7XG4gICAgLy8gaWYgKGN1cnJlbnRTbGlkZSA9PT0gMTIpIHtcbiAgICAvLyAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UodGhpcy5kYXRhU291cmNlKTtcbiAgICAvLyB9XG4gIH1cblxuICAvKiogYm9vbGVhbiBmdW5jdGlvbiBmb3IgbWFraW5nIGlzRmlyc3QgYW5kIGlzTGFzdCAqL1xuICBwcml2YXRlIF9idG5Cb29sZWFuKGZpcnN0OiBudW1iZXIsIGxhc3Q6IG51bWJlcikge1xuICAgIHRoaXMuaXNGaXJzdCA9ICEhZmlyc3Q7XG4gICAgdGhpcy5pc0xhc3QgPSAhIWxhc3Q7XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2Zvcm1TdHJpbmcoZ3JpZDogc3RyaW5nLCBzbGlkZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgY29sbGVjdCA9ICcnO1xuICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoYDtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID1cbiAgICAgICAgKHRoaXMudmVydGljYWwuaGVpZ2h0IC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcbiAgICAgIGNvbGxlY3QgKz0gYDAsIC0ke3RoaXMudHJhbnNmb3JtW2dyaWRdfXB4LCAwYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmFuc2Zvcm1bZ3JpZF0gPSAoMTAwIC8gdGhpcy5pbnB1dHMuZ3JpZFtncmlkXSkgKiBzbGlkZTtcbiAgICAgIGNvbGxlY3QgKz0gYCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRyYW5zZm9ybVtncmlkXX0lLCAwLCAwYDtcbiAgICB9XG4gICAgY29sbGVjdCArPSBgKTsgfWA7XG4gICAgcmV0dXJuIGNvbGxlY3Q7XG4gIH1cblxuICAvKiogc2V0IHRoZSB0cmFuc2Zvcm0gc3R5bGUgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCAgKi9cbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3R5bGUoc2xpZGU6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBzbGlkZUNzcyA9ICcnO1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgc2xpZGVDc3MgPSBgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoXG4gICAgICAgICd4cycsXG4gICAgICAgIHNsaWRlXG4gICAgICApfX1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdzbScsIHNsaWRlKX0gfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ21kJywgc2xpZGUpfSB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7JHt0aGlzLl90cmFuc2Zvcm1TdHJpbmcoJ2xnJywgc2xpZGUpfSB9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmFuc2Zvcm0uYWxsID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGwgKiBzbGlkZTtcbiAgICAgIHNsaWRlQ3NzID0gYCR7dGhpcy5zdHlsZWlkfSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25TeW1cbiAgICAgICAgfSR7dGhpcy50cmFuc2Zvcm0uYWxsfXB4LCAwLCAwKTtgO1xuICAgIH1cbiAgICB0aGlzLmNhcm91c2VsQ3NzTm9kZS5pbm5lckhUTUwgPSBzbGlkZUNzcztcbiAgfVxuXG4gIC8qKiB0aGlzIHdpbGwgdHJpZ2dlciB0aGUgY2Fyb3VzZWwgdG8gbG9hZCB0aGUgaXRlbXMgKi9cbiAgcHJpdmF0ZSBfY2Fyb3VzZWxMb2FkVHJpZ2dlcigpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuaW5wdXRzLmxvYWQgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UubGVuZ3RoIC0gdGhpcy5sb2FkIDw9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5pdGVtcyAmJlxuICAgICAgICB0aGlzLmNhcm91c2VsTG9hZC5lbWl0KHRoaXMuY3VycmVudFNsaWRlKTtcbiAgICB9XG4gIH1cblxuICAvKiogZ2VuZXJhdGUgQ2xhc3MgZm9yIGVhY2ggY2Fyb3VzZWwgdG8gc2V0IHNwZWNpZmljIHN0eWxlICovXG4gIHByaXZhdGUgX2dlbmVyYXRlSUQoKTogc3RyaW5nIHtcbiAgICBsZXQgdGV4dCA9ICcnO1xuICAgIGNvbnN0IHBvc3NpYmxlID1cbiAgICAgICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgfVxuICAgIHJldHVybiBgbmd1Y2Fyb3VzZWwke3RleHR9YDtcbiAgfVxuXG4gIC8qKiBoYW5kbGUgdGhlIGF1dG8gc2xpZGUgKi9cbiAgcHJpdmF0ZSBfY2Fyb3VzZWxJbnRlcnZhbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCAmJiB0aGlzLmxvb3ApIHtcbiAgICAgIHRoaXMubGlzdGVuZXI0ID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vblNjcm9sbGluZyk7XG4gICAgICAgIHRoaXMub25TY3JvbGxpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9vbldpbmRvd1Njcm9sbGluZygpO1xuICAgICAgICB9LCA2MDApO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBsYXkkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKDEpKTtcbiAgICAgIGNvbnN0IHBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICdtb3VzZWVudGVyJykucGlwZShtYXBUbygwKSk7XG5cbiAgICAgIGNvbnN0IHRvdWNoUGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hzdGFydCcpLnBpcGUobWFwVG8oMSkpO1xuICAgICAgY29uc3QgdG91Y2hQYXVzZSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAndG91Y2hlbmQnKS5waXBlKG1hcFRvKDApKTtcblxuICAgICAgY29uc3QgaW50ZXJ2YWwkID0gaW50ZXJ2YWwodGhpcy5pbnB1dHMuaW50ZXJ2YWwudGltaW5nKS5waXBlKG1hcFRvKDEpKTtcblxuICAgICAgdGhpcy5vbkluaXRpYWxEZWxheSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNhcm91c2VsSW50ID0gbWVyZ2UoXG4gICAgICAgICAgcGxheSQsXG4gICAgICAgICAgdG91Y2hQbGF5JCxcbiAgICAgICAgICBwYXVzZSQsXG4gICAgICAgICAgdG91Y2hQYXVzZSQsXG4gICAgICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJFxuICAgICAgICApXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgoMSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAodmFsID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSAhdmFsO1xuICAgICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbCA/IGludGVydmFsJCA6IGVtcHR5KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbE9uZSgxKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMuaW50ZXJ2YWwuaW5pdGlhbERlbGF5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVJdGVtSW5kZXhDb250ZXh0QW5pKCkge1xuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XG4gICAgZm9yIChcbiAgICAgIGxldCByZW5kZXJJbmRleCA9IDAsIGNvdW50ID0gdmlld0NvbnRhaW5lci5sZW5ndGg7XG4gICAgICByZW5kZXJJbmRleCA8IGNvdW50O1xuICAgICAgcmVuZGVySW5kZXgrK1xuICAgICkge1xuICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KHJlbmRlckluZGV4KSBhcyBhbnk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcbiAgICAgIGNvbnRleHQuY291bnQgPSBjb3VudDtcbiAgICAgIGNvbnRleHQuZmlyc3QgPSByZW5kZXJJbmRleCA9PT0gMDtcbiAgICAgIGNvbnRleHQubGFzdCA9IHJlbmRlckluZGV4ID09PSBjb3VudCAtIDE7XG4gICAgICBjb250ZXh0LmV2ZW4gPSByZW5kZXJJbmRleCAlIDIgPT09IDA7XG4gICAgICBjb250ZXh0Lm9kZCA9ICFjb250ZXh0LmV2ZW47XG4gICAgICBjb250ZXh0LmluZGV4ID0gcmVuZGVySW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLyoqIGFuaW1hdGUgdGhlIGNhcm91c2VsIGl0ZW1zICovXG4gIHByaXZhdGUgX2Nhcm91c2VsQW5pbWF0b3IoXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICBlbmQ6IG51bWJlcixcbiAgICBzcGVlZDogbnVtYmVyLFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXJcbiAgKTogdm9pZCB7XG4gICAgbGV0IHZhbCA9IGxlbmd0aCA8IDUgPyBsZW5ndGggOiA1O1xuICAgIHZhbCA9IHZhbCA9PT0gMSA/IDMgOiB2YWw7XG4gICAgY29uc3QgY29sbGVjdEluZGV4ID0gW107XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQgLSAxOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgY29sbGVjdEluZGV4LnB1c2goaSk7XG4gICAgICAgIHZhbCA9IHZhbCAqIDI7XG4gICAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xuICAgICAgICBjb250ZXh0LmFuaW1hdGUgPSB7IHZhbHVlOiB0cnVlLCBwYXJhbXM6IHsgZGlzdGFuY2U6IHZhbCB9IH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBlbmQgLSAxOyBpID49IHN0YXJ0IC0gMTsgaS0tKSB7XG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xuICAgICAgICB2YWwgPSB2YWwgKiAyO1xuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcbiAgICAgICAgY29udGV4dC5hbmltYXRlID0geyB2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7IGRpc3RhbmNlOiAtdmFsIH0gfTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW1vdmVBbmltYXRpb25zKGNvbGxlY3RJbmRleCk7XG4gICAgfSwgc3BlZWQgKiAwLjcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlQW5pbWF0aW9ucyhpbmRleHM6IG51bWJlcltdKSB7XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcbiAgICBpbmRleHMuZm9yRWFjaChpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChpKSBhcyBhbnk7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcbiAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHsgdmFsdWU6IGZhbHNlLCBwYXJhbXM6IHsgZGlzdGFuY2U6IDAgfSB9O1xuICAgIH0pO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFNob3J0IGZvcm0gZm9yIHNldEVsZW1lbnRTdHlsZSAqL1xuICBwcml2YXRlIF9zZXRTdHlsZShlbDogYW55LCBwcm9wOiBhbnksIHZhbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwsIHByb3AsIHZhbCk7XG4gIH1cblxuICAvKiogRm9yIGdlbmVyYXRpbmcgc3R5bGUgdGFnICovXG4gIHByaXZhdGUgX2NyZWF0ZVN0eWxlRWxlbShkYXRhcz86IHN0cmluZykge1xuICAgIGNvbnN0IHN0eWxlSXRlbSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgaWYgKGRhdGFzKSB7XG4gICAgICBjb25zdCBzdHlsZVRleHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGRhdGFzKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHN0eWxlSXRlbSwgc3R5bGVUZXh0KTtcbiAgICB9XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXJvdXNlbCwgc3R5bGVJdGVtKTtcbiAgICByZXR1cm4gc3R5bGVJdGVtO1xuICB9XG59XG4iXX0=