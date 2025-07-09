(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        3201: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 19135)), Promise.resolve().then(r.bind(r, 14539)), Promise.resolve().then(r.bind(r, 67324)), Promise.resolve().then(r.t.bind(r, 37008, 23)), Promise.resolve().then(r.t.bind(r, 21812, 23)), Promise.resolve().then(r.t.bind(r, 73069, 23)), Promise.resolve().then(r.bind(r, 92662)), Promise.resolve().then(r.bind(r, 50203))
        },
        3963: (e, t, r) => {
            "use strict";
            let n;
            r.d(t, {
                M: () => l
            });
            var a = r(23043),
                i = r(47491),
                o = r(72987);
            let s = ["log", "debug", "info", "warn", "error"];

            function l() {
                if (!n) {
                    let e = i.yf.logger;
                    e.setHandler("local" !== a._n && "development" !== a.X$ ? "http" : "console"), n = new Proxy(e, {
                        get: (e, t) => s.includes(t) ? (r, n, a, i) => {
                            let s = (0, o.X)();
                            if (n instanceof Error) n = {
                                errorMsg: n.message
                            };
                            else if (n && "object" == typeof n && n.error instanceof Error) {
                                let {
                                    error: e,
                                    ...t
                                } = n;
                                n = { ...t,
                                    errorMsg: e.message
                                }
                            }
                            let l = { ...s,
                                ...n
                            };
                            "log" === t ? e.log(r, l, a, i) : e[t](r, l)
                        } : e[t]
                    })
                }
                return n
            }
            i.yf.init({
                clientToken: a.Nk,
                site: "datadoghq.com",
                service: "embedded-wallet",
                version: a.G,
                forwardErrorsToLogs: !0,
                usePartitionedCrossSiteSessionCookie: !0,
                env: a._n,
                sessionSampleRate: 100,
                useSecureSessionCookie: !0,
                beforeSend: e => !("error" === e.status && e.message.includes("chrome-extension://"))
            })
        },
        10388: (e, t, r) => {
            "use strict";
            let n;
            r.r(t), r.d(t, {
                getQueryClient: () => l,
                makeQueryClient: () => s
            });
            let a = {
                defaultOptions: {
                    queries: {
                        staleTime: 6e4
                    }
                }
            };
            var i = r(85515),
                o = r(31052);
            let s = () => new o.E(a),
                l = () => i.S ? s() : (n || (n = s()), n)
        },
        15442: (e, t, r) => {
            "use strict";
            r.d(t, {
                AH: () => p,
                e3: () => g
            });
            var n = r(84112);
            let a = new Set("_light,_dark,_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_closed,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base".split(","));

            function i(e) {
                return a.has(e) || /^@|&|&$/.test(e)
            }
            let o = /^_/,
                s = /&|@/,
                l = new Map,
                d = new Map;
            "aspectRatio:aspect,boxDecorationBreak:decoration,zIndex:z,boxSizing:box,objectPosition:object,objectFit:object,overscrollBehavior:overscroll,overscrollBehaviorX:overscroll-x,overscrollBehaviorY:overscroll-y,position:pos/1,top:top,left:left,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,inset:inset,insetBlockEnd:inset-b,insetBlockStart:inset-t,insetInlineEnd:end/insetEnd/1,insetInlineStart:start/insetStart/1,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:basis,flex:flex,flexDirection:flex/flexDir,flexGrow:grow,flexShrink:shrink,gridTemplateColumns:grid-cols,gridTemplateRows:grid-rows,gridColumn:col-span,gridRow:row-span,gridColumnStart:col-start,gridColumnEnd:col-end,gridAutoFlow:grid-flow,gridAutoColumns:auto-cols,gridAutoRows:auto-rows,gap:gap,gridGap:gap,gridRowGap:gap-x,gridColumnGap:gap-y,rowGap:gap-x,columnGap:gap-y,justifyContent:justify,alignContent:content,alignItems:items,alignSelf:self,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pb,paddingBlockStart:pt,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mb,marginBlockStart:mt,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,outlineWidth:ring/ringWidth,outlineColor:ring/ringColor,outline:ring/1,outlineOffset:ring/ringOffset,divideX:divide-x,divideY:divide-y,divideColor:divide,divideStyle:divide,width:w/1,inlineSize:w,minWidth:min-w/minW,minInlineSize:min-w,maxWidth:max-w/maxW,maxInlineSize:max-w,height:h/1,blockSize:h,minHeight:min-h/minH,minBlockSize:min-h,maxHeight:max-h/maxH,maxBlockSize:max-b,color:text,fontFamily:font,fontSize:fs,fontWeight:font,fontSmoothing:smoothing,fontVariantNumeric:numeric,letterSpacing:tracking,lineHeight:leading,textAlign:text,textDecoration:text-decor,textDecorationColor:text-decor,textEmphasisColor:text-emphasis,textDecorationStyle:decoration,textDecorationThickness:decoration,textUnderlineOffset:underline-offset,textTransform:text,textIndent:indent,textShadow:text-shadow,textShadowColor:text-shadow/textShadowColor,textOverflow:text,verticalAlign:align,wordBreak:break,textWrap:text,truncate:truncate,lineClamp:clamp,listStyleType:list,listStylePosition:list,listStyleImage:list-img,backgroundPosition:bg/bgPosition,backgroundPositionX:bg-x/bgPositionX,backgroundPositionY:bg-y/bgPositionY,backgroundAttachment:bg/bgAttachment,backgroundClip:bg-clip/bgClip,background:bg/1,backgroundColor:bg/bgColor,backgroundOrigin:bg-origin/bgOrigin,backgroundImage:bg-img/bgImage,backgroundRepeat:bg-repeat/bgRepeat,backgroundBlendMode:bg-blend/bgBlendMode,backgroundSize:bg/bgSize,backgroundGradient:bg-gradient/bgGradient,textGradient:text-gradient,gradientFrom:from,gradientTo:to,gradientVia:via,borderRadius:rounded/1,borderTopLeftRadius:rounded-tl/roundedTopLeft,borderTopRightRadius:rounded-tr/roundedTopRight,borderBottomRightRadius:rounded-br/roundedBottomRight,borderBottomLeftRadius:rounded-bl/roundedBottomLeft,borderTopRadius:rounded-t/roundedTop,borderRightRadius:rounded-r/roundedRight,borderBottomRadius:rounded-b/roundedBottom,borderLeftRadius:rounded-l/roundedLeft,borderStartStartRadius:rounded-ss/roundedStartStart,borderStartEndRadius:rounded-se/roundedStartEnd,borderStartRadius:rounded-s/roundedStart,borderEndStartRadius:rounded-es/roundedEndStart,borderEndEndRadius:rounded-ee/roundedEndEnd,borderEndRadius:rounded-e/roundedEnd,border:border,borderWidth:border-w,borderTopWidth:border-tw,borderLeftWidth:border-lw,borderRightWidth:border-rw,borderBottomWidth:border-bw,borderColor:border,borderInline:border-x/borderX,borderInlineWidth:border-x/borderXWidth,borderInlineColor:border-x/borderXColor,borderBlock:border-y/borderY,borderBlockWidth:border-y/borderYWidth,borderBlockColor:border-y/borderYColor,borderLeft:border-l,borderLeftColor:border-l,borderInlineStart:border-s/borderStart,borderInlineStartWidth:border-s/borderStartWidth,borderInlineStartColor:border-s/borderStartColor,borderRight:border-r,borderRightColor:border-r,borderInlineEnd:border-e/borderEnd,borderInlineEndWidth:border-e/borderEndWidth,borderInlineEndColor:border-e/borderEndColor,borderTop:border-t,borderTopColor:border-t,borderBottom:border-b,borderBottomColor:border-b,borderBlockEnd:border-be,borderBlockEndColor:border-be,borderBlockStart:border-bs,borderBlockStartColor:border-bs,boxShadow:shadow/1,boxShadowColor:shadow/shadowColor,mixBlendMode:mix-blend,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:backdrop,backdropBlur:backdrop-blur,backdropBrightness:backdrop-brightness,backdropContrast:backdrop-contrast,backdropGrayscale:backdrop-grayscale,backdropHueRotate:backdrop-hue-rotate,backdropInvert:backdrop-invert,backdropOpacity:backdrop-opacity,backdropSaturate:backdrop-saturate,backdropSepia:backdrop-sepia,borderCollapse:border,borderSpacing:border-spacing,borderSpacingX:border-spacing-x,borderSpacingY:border-spacing-y,tableLayout:table,transitionTimingFunction:ease,transitionDelay:delay,transitionDuration:duration,transitionProperty:transition-prop,transition:transition,animation:animation,animationName:animation-name,animationDelay:animation-delay,transformOrigin:origin,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,accentColor:accent,caretColor:caret,scrollBehavior:scroll,scrollbar:scrollbar,scrollMargin:scroll-m,scrollMarginLeft:scroll-ml,scrollMarginRight:scroll-mr,scrollMarginTop:scroll-mt,scrollMarginBottom:scroll-mb,scrollMarginBlock:scroll-my/scrollMarginY,scrollMarginBlockEnd:scroll-mb,scrollMarginBlockStart:scroll-mt,scrollMarginInline:scroll-mx/scrollMarginX,scrollMarginInlineEnd:scroll-me,scrollMarginInlineStart:scroll-ms,scrollPadding:scroll-p,scrollPaddingBlock:scroll-pb/scrollPaddingY,scrollPaddingBlockStart:scroll-pt,scrollPaddingBlockEnd:scroll-pb,scrollPaddingInline:scroll-px/scrollPaddingX,scrollPaddingInlineEnd:scroll-pe,scrollPaddingInlineStart:scroll-ps,scrollPaddingLeft:scroll-pl,scrollPaddingRight:scroll-pr,scrollPaddingTop:scroll-pt,scrollPaddingBottom:scroll-pb,scrollSnapAlign:snap,scrollSnapStop:snap,scrollSnapType:snap,scrollSnapStrictness:strictness,scrollSnapMargin:snap-m,scrollSnapMarginTop:snap-mt,scrollSnapMarginBottom:snap-mb,scrollSnapMarginLeft:snap-ml,scrollSnapMarginRight:snap-mr,touchAction:touch,userSelect:select,fill:fill,stroke:stroke,strokeWidth:stroke-w,srOnly:sr,debug:debug,appearance:appearance,backfaceVisibility:backface,clipPath:clip-path,hyphens:hyphens,mask:mask,maskImage:mask-image,maskSize:mask-size,textSizeAdjust:text-size-adjust,container:cq,containerName:cq-name,containerType:cq-type,textStyle:textStyle".split(",").forEach(e => {
                let [t, r] = e.split(":"), [n, ...a] = r.split("/");
                l.set(t, n), a.length && a.forEach(e => {
                    d.set("1" === e ? n : e, t)
                })
            });
            let c = e => d.get(e) || e,
                u = {
                    hash: !0,
                    conditions: {
                        shift: function(e) {
                            return e.sort((e, t) => {
                                let r = i(e),
                                    n = i(t);
                                return r && !n ? 1 : !r && n ? -1 : 0
                            })
                        },
                        finalize: function(e) {
                            return e.map(e => a.has(e) ? e.replace(o, "") : s.test(e) ? "[".concat((0, n.BB)(e.trim()), "]") : e)
                        },
                        breakpoints: {
                            keys: ["base", "sm", "md", "lg", "xl", "2xl"]
                        }
                    },
                    utility: {
                        transform: (e, t) => {
                            let r = c(e),
                                a = l.get(r) || (0, n.wo)(r);
                            return {
                                className: "".concat(a, "_").concat((0, n.BB)(t))
                            }
                        },
                        hasShorthand: !0,
                        toHash: (e, t) => t(e.join(":")),
                        resolveShorthand: c
                    }
                },
                h = (0, n.Yb)(u),
                p = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return h(g(...t))
                };
            p.raw = function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return g(...t)
            };
            let {
                mergeCss: g,
                assignCss: f
            } = (0, n.Mi)(u)
        },
        21812: e => {
            e.exports = {
                style: {
                    fontFamily: "'Inter', 'Inter Fallback', ProximaNova",
                    fontStyle: "normal"
                },
                className: "__className_89532e",
                variable: "__variable_89532e"
            }
        },
        22940: (e, t, r) => {
            "use strict";

            function n() {
                let e = "",
                    t = 0,
                    r;
                for (; t < arguments.length;)(r = arguments[t++]) && "string" == typeof r && (e && (e += " "), e += r);
                return e
            }
            r.d(t, {
                cx: () => n
            })
        },
        31052: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => g
            });
            var n = r(80638),
                a = r(78927),
                i = r(659),
                o = r(87900),
                s = class extends o.Q {
                    constructor(e = {}) {
                        super(), this.config = e, this.#e = new Map
                    }#
                    e;
                    build(e, t, r) {
                        let i = t.queryKey,
                            o = t.queryHash ? ? (0, n.F$)(i, t),
                            s = this.get(o);
                        return s || (s = new a.X({
                            client: e,
                            queryKey: i,
                            queryHash: o,
                            options: e.defaultQueryOptions(t),
                            state: r,
                            defaultOptions: e.getQueryDefaults(i)
                        }), this.add(s)), s
                    }
                    add(e) {
                        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                            type: "added",
                            query: e
                        }))
                    }
                    remove(e) {
                        let t = this.#e.get(e.queryHash);
                        t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                            type: "removed",
                            query: e
                        }))
                    }
                    clear() {
                        i.jG.batch(() => {
                            this.getAll().forEach(e => {
                                this.remove(e)
                            })
                        })
                    }
                    get(e) {
                        return this.#e.get(e)
                    }
                    getAll() {
                        return [...this.#e.values()]
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, n.MK)(t, e))
                    }
                    findAll(e = {}) {
                        let t = this.getAll();
                        return Object.keys(e).length > 0 ? t.filter(t => (0, n.MK)(e, t)) : t
                    }
                    notify(e) {
                        i.jG.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    onFocus() {
                        i.jG.batch(() => {
                            this.getAll().forEach(e => {
                                e.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        i.jG.batch(() => {
                            this.getAll().forEach(e => {
                                e.onOnline()
                            })
                        })
                    }
                },
                l = r(31738),
                d = class extends o.Q {
                    constructor(e = {}) {
                        super(), this.config = e, this.#t = new Set, this.#r = new Map, this.#n = 0
                    }#
                    t;#
                    r;#
                    n;
                    build(e, t, r) {
                        let n = new l.s({
                            mutationCache: this,
                            mutationId: ++this.#n,
                            options: e.defaultMutationOptions(t),
                            state: r
                        });
                        return this.add(n), n
                    }
                    add(e) {
                        this.#t.add(e);
                        let t = c(e);
                        if ("string" == typeof t) {
                            let r = this.#r.get(t);
                            r ? r.push(e) : this.#r.set(t, [e])
                        }
                        this.notify({
                            type: "added",
                            mutation: e
                        })
                    }
                    remove(e) {
                        if (this.#t.delete(e)) {
                            let t = c(e);
                            if ("string" == typeof t) {
                                let r = this.#r.get(t);
                                if (r)
                                    if (r.length > 1) {
                                        let t = r.indexOf(e); - 1 !== t && r.splice(t, 1)
                                    } else r[0] === e && this.#r.delete(t)
                            }
                        }
                        this.notify({
                            type: "removed",
                            mutation: e
                        })
                    }
                    canRun(e) {
                        let t = c(e);
                        if ("string" != typeof t) return !0; {
                            let r = this.#r.get(t),
                                n = r ? .find(e => "pending" === e.state.status);
                            return !n || n === e
                        }
                    }
                    runNext(e) {
                        let t = c(e);
                        if ("string" != typeof t) return Promise.resolve(); {
                            let r = this.#r.get(t) ? .find(t => t !== e && t.state.isPaused);
                            return r ? .continue() ? ? Promise.resolve()
                        }
                    }
                    clear() {
                        i.jG.batch(() => {
                            this.#t.forEach(e => {
                                this.notify({
                                    type: "removed",
                                    mutation: e
                                })
                            }), this.#t.clear(), this.#r.clear()
                        })
                    }
                    getAll() {
                        return Array.from(this.#t)
                    }
                    find(e) {
                        let t = {
                            exact: !0,
                            ...e
                        };
                        return this.getAll().find(e => (0, n.nJ)(t, e))
                    }
                    findAll(e = {}) {
                        return this.getAll().filter(t => (0, n.nJ)(e, t))
                    }
                    notify(e) {
                        i.jG.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    resumePausedMutations() {
                        let e = this.getAll().filter(e => e.state.isPaused);
                        return i.jG.batch(() => Promise.all(e.map(e => e.continue().catch(n.lQ))))
                    }
                };

            function c(e) {
                return e.options.scope ? .id
            }
            var u = r(28086),
                h = r(59213),
                p = r(13377),
                g = class {#
                    a;#
                    i;#
                    o;#
                    s;#
                    l;#
                    d;#
                    c;#
                    u;
                    constructor(e = {}) {
                        this.#a = e.queryCache || new s, this.#i = e.mutationCache || new d, this.#o = e.defaultOptions || {}, this.#s = new Map, this.#l = new Map, this.#d = 0
                    }
                    mount() {
                        this.#d++, 1 === this.#d && (this.#c = u.m.subscribe(async e => {
                            e && (await this.resumePausedMutations(), this.#a.onFocus())
                        }), this.#u = h.t.subscribe(async e => {
                            e && (await this.resumePausedMutations(), this.#a.onOnline())
                        }))
                    }
                    unmount() {
                        this.#d--, 0 === this.#d && (this.#c ? .(), this.#c = void 0, this.#u ? .(), this.#u = void 0)
                    }
                    isFetching(e) {
                        return this.#a.findAll({ ...e,
                            fetchStatus: "fetching"
                        }).length
                    }
                    isMutating(e) {
                        return this.#i.findAll({ ...e,
                            status: "pending"
                        }).length
                    }
                    getQueryData(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e
                        });
                        return this.#a.get(t.queryHash) ? .state.data
                    }
                    ensureQueryData(e) {
                        let t = this.defaultQueryOptions(e),
                            r = this.#a.build(this, t),
                            a = r.state.data;
                        return void 0 === a ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime((0, n.d2)(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(a))
                    }
                    getQueriesData(e) {
                        return this.#a.findAll(e).map(({
                            queryKey: e,
                            state: t
                        }) => [e, t.data])
                    }
                    setQueryData(e, t, r) {
                        let a = this.defaultQueryOptions({
                                queryKey: e
                            }),
                            i = this.#a.get(a.queryHash),
                            o = i ? .state.data,
                            s = (0, n.Zw)(t, o);
                        if (void 0 !== s) return this.#a.build(this, a).setData(s, { ...r,
                            manual: !0
                        })
                    }
                    setQueriesData(e, t, r) {
                        return i.jG.batch(() => this.#a.findAll(e).map(({
                            queryKey: e
                        }) => [e, this.setQueryData(e, t, r)]))
                    }
                    getQueryState(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e
                        });
                        return this.#a.get(t.queryHash) ? .state
                    }
                    removeQueries(e) {
                        let t = this.#a;
                        i.jG.batch(() => {
                            t.findAll(e).forEach(e => {
                                t.remove(e)
                            })
                        })
                    }
                    resetQueries(e, t) {
                        let r = this.#a;
                        return i.jG.batch(() => (r.findAll(e).forEach(e => {
                            e.reset()
                        }), this.refetchQueries({
                            type: "active",
                            ...e
                        }, t)))
                    }
                    cancelQueries(e, t = {}) {
                        let r = {
                            revert: !0,
                            ...t
                        };
                        return Promise.all(i.jG.batch(() => this.#a.findAll(e).map(e => e.cancel(r)))).then(n.lQ).catch(n.lQ)
                    }
                    invalidateQueries(e, t = {}) {
                        return i.jG.batch(() => (this.#a.findAll(e).forEach(e => {
                            e.invalidate()
                        }), e ? .refetchType === "none") ? Promise.resolve() : this.refetchQueries({ ...e,
                            type: e ? .refetchType ? ? e ? .type ? ? "active"
                        }, t))
                    }
                    refetchQueries(e, t = {}) {
                        let r = { ...t,
                            cancelRefetch: t.cancelRefetch ? ? !0
                        };
                        return Promise.all(i.jG.batch(() => this.#a.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
                            let t = e.fetch(void 0, r);
                            return r.throwOnError || (t = t.catch(n.lQ)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                        }))).then(n.lQ)
                    }
                    fetchQuery(e) {
                        let t = this.defaultQueryOptions(e);
                        void 0 === t.retry && (t.retry = !1);
                        let r = this.#a.build(this, t);
                        return r.isStaleByTime((0, n.d2)(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data)
                    }
                    prefetchQuery(e) {
                        return this.fetchQuery(e).then(n.lQ).catch(n.lQ)
                    }
                    fetchInfiniteQuery(e) {
                        return e.behavior = (0, p.PL)(e.pages), this.fetchQuery(e)
                    }
                    prefetchInfiniteQuery(e) {
                        return this.fetchInfiniteQuery(e).then(n.lQ).catch(n.lQ)
                    }
                    ensureInfiniteQueryData(e) {
                        return e.behavior = (0, p.PL)(e.pages), this.ensureQueryData(e)
                    }
                    resumePausedMutations() {
                        return h.t.isOnline() ? this.#i.resumePausedMutations() : Promise.resolve()
                    }
                    getQueryCache() {
                        return this.#a
                    }
                    getMutationCache() {
                        return this.#i
                    }
                    getDefaultOptions() {
                        return this.#o
                    }
                    setDefaultOptions(e) {
                        this.#o = e
                    }
                    setQueryDefaults(e, t) {
                        this.#s.set((0, n.EN)(e), {
                            queryKey: e,
                            defaultOptions: t
                        })
                    }
                    getQueryDefaults(e) {
                        let t = [...this.#s.values()],
                            r = {};
                        return t.forEach(t => {
                            (0, n.Cp)(e, t.queryKey) && Object.assign(r, t.defaultOptions)
                        }), r
                    }
                    setMutationDefaults(e, t) {
                        this.#l.set((0, n.EN)(e), {
                            mutationKey: e,
                            defaultOptions: t
                        })
                    }
                    getMutationDefaults(e) {
                        let t = [...this.#l.values()],
                            r = {};
                        return t.forEach(t => {
                            (0, n.Cp)(e, t.mutationKey) && Object.assign(r, t.defaultOptions)
                        }), r
                    }
                    defaultQueryOptions(e) {
                        if (e._defaulted) return e;
                        let t = { ...this.#o.queries,
                            ...this.getQueryDefaults(e.queryKey),
                            ...e,
                            _defaulted: !0
                        };
                        return t.queryHash || (t.queryHash = (0, n.F$)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === n.hT && (t.enabled = !1), t
                    }
                    defaultMutationOptions(e) {
                        return e ? ._defaulted ? e : { ...this.#o.mutations,
                            ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                            ...e,
                            _defaulted : !0
                        }
                    }
                    clear() {
                        this.#a.clear(), this.#i.clear()
                    }
                }
        },
        50203: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => u
            });
            var n = r(72987),
                a = r(85681),
                i = r(3963),
                o = r(23043),
                s = r(69041);
            o.OX && o.UZ && (s.L.init({
                applicationId: o.OX,
                clientToken: o.UZ,
                site: "datadoghq.com",
                service: "mandrake",
                env: o._n,
                version: o.G,
                sessionSampleRate: o.TA ? .1 : 10,
                sessionReplaySampleRate: 0,
                trackUserInteractions: !0,
                trackResources: !0,
                usePartitionedCrossSiteSessionCookie: !0,
                trackLongTasks: !0,
                defaultPrivacyLevel: "mask",
                allowedTracingUrls: [{
                    match: "https://api.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://api.dev.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://api.stagef.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://auth.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://auth.dev.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://auth.stagef.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://api-a.prod.magk.com",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://api.fortmatic.com",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://dashboard.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://dashboard.dev.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://dashboard.stagef.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://app.magiclabs.com",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://app.stagef.magiclabs.com",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://next.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://next.stage.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }, {
                    match: "https://next-dev.magic.link",
                    propagatorTypes: ["datadog", "tracecontext"]
                }],
                beforeSend: e => {
                    var t, r;
                    return !("error" === e.type && (null == (r = e.error) || null == (t = r.stack) ? void 0 : t.includes("chrome-extension://")))
                }
            }), s.L.startSessionReplayRecording());
            var l = r(69442),
                d = r(24390),
                c = r(13270);

            function u() {
                let e = (0, d.usePathname)(),
                    t = (0, d.useSearchParams)(),
                    {
                        magicApiKey: r
                    } = l.P.getState();
                return (0, c.useEffect)(() => {
                    globalThis.logger = (0, i.M)(), globalThis.monitoring = s.L
                }, []), (0, c.useEffect)(() => {
                    !["/send/idle", "/send", "/newton-wallet"].includes(e) && r && (0, a.z)(r).page(e, (0, n.X)())
                }, [e, t]), null
            }
        },
        54343: (e, t, r) => {
            "use strict";
            r.d(t, {
                GF: () => s,
                JQ: () => n,
                e5: () => o,
                n0: () => a,
                qR: () => i
            });
            let n = ["pk_live_B080E9DC31E5875E", "pk_live_0EDD8758638BE74B", "pk_live_BF42F29844DD0026"],
                a = ["pk_live_B080E9DC31E5875E", "pk_live_AF06597262D441D3", "pk_live_0EDD8758638BE74B", "pk_live_5C775C647F3CB11E"],
                i = ["pk_live_AEA500547B9B3DCD", "pk_live_79389E9CFEDB2ED8", "pk_live_493C3435E752DA8C", "pk_live_C3D0E30205EBD73A", "pk_live_D2D07166F64A983C", "pk_live_CB93E076EF29E883"],
                o = ["pk_live_BF42F29844DD0026", "pk_live_6E60D0F6E86C9666", "pk_live_68BC8C49E85F97EA", "pk_live_88F10C3C1A1456D5", "pk_live_667E736A88BC7612"],
                s = ["pk_live_4404D9451D29CFC5", "pk_live_C1819D59F5DFB8E2", "pk_live_667E736A88BC7612", "pk_live_E8E97A739862EE73", "pk_live_0EDD8758638BE74B", "pk_live_B080E9DC31E5875E", ...o]
        },
        63736: (e, t, r) => {
            "use strict";
            r.d(t, {
                AH: () => n.AH,
                Fj: () => s,
                cx: () => a.cx,
                JB: () => d
            });
            var n = r(15442),
                a = r(22940),
                i = r(84112);
            let o = e => ({
                base: {},
                variants: {},
                defaultVariants: {},
                compoundVariants: [],
                ...e
            });

            function s(e) {
                let {
                    base: t,
                    variants: r,
                    defaultVariants: a,
                    compoundVariants: l
                } = o(e);

                function d() {
                    var e, o, s;
                    let d, c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        u = { ...a,
                            ...(0, i.oE)(c)
                        },
                        h = { ...t
                        };
                    for (let [t, a] of Object.entries(u)) {
                        (null == (e = r[t]) ? void 0 : e[a]) && (h = (0, n.e3)(h, r[t][a]))
                    }
                    let p = (o = l, s = u, d = {}, o.forEach(e => {
                        Object.entries(e).every(e => {
                            let [t, r] = e;
                            return "css" === t || (Array.isArray(r) ? r : [r]).some(e => s[t] === e)
                        }) && (d = (0, n.e3)(d, e.css))
                    }), d);
                    return (0, n.e3)(h, p)
                }
                let c = Object.keys(r),
                    u = Object.fromEntries(Object.entries(r).map(e => {
                        let [t, r] = e;
                        return [t, Object.keys(r)]
                    }));
                return Object.assign((0, i.ph)(function(e) {
                    return (0, n.AH)(d(e))
                }), {
                    __cva__: !0,
                    variantMap: u,
                    variantKeys: c,
                    raw: d,
                    config: e,
                    merge: function(e) {
                        let d = o(e.config),
                            c = (0, i.sb)(e.variantKeys, Object.keys(r));
                        return s({
                            base: (0, n.e3)(t, d.base),
                            variants: Object.fromEntries(c.map(e => [e, (0, n.e3)(r[e], d.variants[e])])),
                            defaultVariants: (0, i.v6)(a, d.defaultVariants),
                            compoundVariants: [...l, ...d.compoundVariants]
                        })
                    },
                    splitVariantProps: function(e) {
                        return (0, i.rg)(e, c)
                    }
                })
            }
            let l = (e, t) => e + "__" + t;

            function d(e) {
                var t;
                let r = Object.entries((0, i.wO)(e)).map(e => {
                        let [t, r] = e;
                        return [t, s(r)]
                    }),
                    n = null != (t = e.variants) ? t : {},
                    o = Object.keys(n),
                    d = Object.fromEntries(Object.entries(n).map(e => {
                        let [t, r] = e;
                        return [t, Object.keys(r)]
                    }));
                return Object.assign((0, i.ph)(function(t) {
                    return Object.fromEntries(r.map(r => {
                        let [n, i] = r;
                        return [n, (0, a.cx)(i(t), e.className && l(e.className, n))]
                    }))
                }), {
                    __cva__: !1,
                    raw: function(e) {
                        return Object.fromEntries(r.map(t => {
                            let [r, n] = t;
                            return [r, n.raw(e)]
                        }))
                    },
                    variantMap: d,
                    variantKeys: o,
                    splitVariantProps: function(e) {
                        return (0, i.rg)(e, o)
                    }
                })
            }
        },
        67324: (e, t, r) => {
            "use strict";

            function n(e) {
                var t = e.lang,
                    r = e.namespaces,
                    n = e.config,
                    a = e.children;
                return globalThis.__NEXT_TRANSLATE__ = {
                    lang: t,
                    namespaces: void 0 === r ? {} : r,
                    config: n
                }, a
            }
            r.d(t, {
                default: () => n
            })
        },
        73069: () => {},
        84112: (e, t, r) => {
            "use strict";

            function n(e) {
                return "object" == typeof e && null != e && !Array.isArray(e)
            }

            function a(e) {
                return Object.fromEntries(Object.entries(null != e ? e : {}).filter(e => {
                    let [t, r] = e;
                    return void 0 !== r
                }))
            }
            r.d(t, {
                BB: () => d,
                Ek: () => S,
                HZ: () => w,
                Mi: () => y,
                Yb: () => b,
                oE: () => a,
                ph: () => c,
                rg: () => A,
                sb: () => D,
                v6: () => u,
                wO: () => O,
                wo: () => k,
                xu: () => j
            });
            var i = e => "base" === e;

            function o(e) {
                return String.fromCharCode(e + (e > 25 ? 39 : 97))
            }

            function s(e) {
                var t = function(e, t) {
                    let r = t.length;
                    for (; r;) e = 33 * e ^ t.charCodeAt(--r);
                    return e
                }(5381, e) >>> 0;
                let r, n = "";
                for (r = Math.abs(t); r > 52; r = r / 52 | 0) n = o(r % 52) + n;
                return o(r % 52) + n
            }
            var l = /\s*!(important)?/i;

            function d(e) {
                return "string" == typeof e ? e.replaceAll(" ", "_") : e
            }
            var c = e => {
                let t = new Map;
                return function() {
                    for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                    let i = JSON.stringify(n);
                    if (t.has(i)) return t.get(i);
                    let o = e(...n);
                    return t.set(i, o), o
                }
            };

            function u() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.filter(Boolean).reduce((e, t) => (Object.keys(t).forEach(r => {
                    let a = e[r],
                        i = t[r];
                    n(a) && n(i) ? e[r] = u(a, i) : e[r] = i
                }), e), {})
            }
            var h = e => null != e;

            function p(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        stop: a,
                        getKey: i
                    } = r;
                return function e(r) {
                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    if (n(r) || Array.isArray(r)) {
                        let n = {};
                        for (let [l, d] of Object.entries(r)) {
                            var s;
                            let c = null != (s = null == i ? void 0 : i(l, d)) ? s : l,
                                u = [...o, c];
                            if (null == a ? void 0 : a(r, u)) return t(r, o);
                            let p = e(d, u);
                            h(p) && (n[c] = p)
                        }
                        return n
                    }
                    return t(r, o)
                }(e)
            }

            function g(e, t) {
                let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    {
                        utility: n,
                        conditions: a
                    } = t,
                    {
                        hasShorthand: i,
                        resolveShorthand: o
                    } = n;
                return p(e, e => {
                    var t;
                    return Array.isArray(e) ? (t = a.breakpoints.keys, e.reduce((e, r, n) => {
                        let a = t[n];
                        return null != r && (e[a] = r), e
                    }, {})) : e
                }, {
                    stop: e => Array.isArray(e),
                    getKey: r ? e => i ? o(e) : e : void 0
                })
            }
            var f = {
                    shift: e => e,
                    finalize: e => e,
                    breakpoints: {
                        keys: []
                    }
                },
                m = e => "string" == typeof e ? e.replaceAll(/[\n\s]+/g, " ") : e;

            function b(e) {
                let {
                    utility: t,
                    hash: r,
                    conditions: n = f
                } = e, a = e => [t.prefix, e].filter(Boolean).join("-"), o = (e, i) => {
                    let o;
                    if (r) {
                        let r = [...n.finalize(e), i];
                        o = a(t.toHash(r, s))
                    } else o = [...n.finalize(e), a(i)].join(":");
                    return o
                };
                return c(function() {
                    let {
                        base: r,
                        ...a
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = g(Object.assign(a, r), e), d = new Set;
                    return p(s, (e, r) => {
                        var a;
                        let s = "string" == typeof e && l.test(e);
                        if (null == e) return;
                        let [c, ...u] = n.shift(r), h = o(u.slice().filter(e => !i(e)), t.transform(c, "string" == typeof(a = m(e)) ? a.replace(l, "").trim() : a).className);
                        s && (h = "".concat(h, "!")), d.add(h)
                    }), Array.from(d).join(" ")
                })
            }

            function y(e) {
                function t(t) {
                    let r = function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return t.filter(e => n(e) && Object.keys(a(e)).length > 0)
                    }(...t);
                    return 1 === r.length ? r : r.map(t => g(t, e))
                }
                return {
                    mergeCss: c(function() {
                        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        return u(...t(r))
                    }),
                    assignCss: function() {
                        for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        return Object.assign({}, ...t(r))
                    }
                }
            }
            var v = /([A-Z])/g,
                _ = /^ms-/,
                k = c(e => e.startsWith("--") ? e : e.replace(v, "-$1").replace(_, "-ms-").toLowerCase()),
                x = new RegExp("^(".concat("min|max|clamp|calc", ")\\(.*\\)")),
                C = "(?:".concat("cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%".split(",").join("|"), ")"),
                E = new RegExp("^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?".concat(C, "$")),
                S = {
                    map: function(e, t) {
                        return Array.isArray(e) ? e.map(e => t(e)) : n(e) ? p(e, e => t(e)) : t(e)
                    },
                    isCssFunction: e => "string" == typeof e && x.test(e),
                    isCssVar: e => "string" == typeof e && /^var\(--.+\)$/.test(e),
                    isCssUnit: e => "string" == typeof e && E.test(e)
                },
                w = (e, t) => e.defaultValues ? Object.assign({}, "function" == typeof e.defaultValues ? e.defaultValues(t) : e.defaultValues, a(t)) : t,
                O = function() {
                    var e, t;
                    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e => {
                            var t, n, a;
                            return {
                                className: [r.className, e].filter(Boolean).join("__"),
                                base: null != (n = null == (t = r.base) ? void 0 : t[e]) ? n : {},
                                variants: {},
                                defaultVariants: null != (a = r.defaultVariants) ? a : {},
                                compoundVariants: r.compoundVariants ? B(r.compoundVariants, e) : []
                            }
                        },
                        a = (null != (e = r.slots) ? e : []).map(e => [e, n(e)]);
                    for (let [e, n] of Object.entries(null != (t = r.variants) ? t : {}))
                        for (let [t, r] of Object.entries(n)) a.forEach(n => {
                            var a, i, o;
                            let [s, l] = n;
                            null != (a = l.variants)[e] || (a[e] = {}), l.variants[e][t] = null != (o = r[s]) ? o : {}
                        });
                    return Object.fromEntries(a)
                },
                B = (e, t) => e.filter(e => e.css[t]).map(e => ({ ...e,
                    css: e.css[t]
                }));

            function A(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                let a = Object.getOwnPropertyDescriptors(e),
                    i = Object.keys(a),
                    o = e => {
                        let t = {};
                        for (let r = 0; r < e.length; r++) {
                            let n = e[r];
                            a[n] && (Object.defineProperty(t, n, a[n]), delete a[n])
                        }
                        return t
                    };
                return r.map(e => o(Array.isArray(e) ? e : i.filter(e))).concat(o(i))
            }
            var D = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter(Boolean).reduce((e, t) => Array.from(new Set([...e, ...t])), [])
                },
                T = ["htmlSize", "htmlTranslate", "htmlWidth", "htmlHeight"];

            function j(e) {
                return Object.fromEntries(Object.entries(e).map(e => {
                    let [t, r] = e;
                    return [T.includes(t) ? t.replace("html", "").toLowerCase() : t, r]
                }))
            }
            j.keys = T
        },
        85681: (e, t, r) => {
            "use strict";
            let n;
            r.d(t, {
                z: () => l
            });
            var a = r(23043),
                i = r(54343),
                o = r(86337);
            let s = {
                track: () => {},
                identify: () => {},
                page: () => {}
            };

            function l(e) {
                return n || (n = e && i.n0.includes(e) ? s : o.G.load({
                    writeKey: a.lZ
                }, {
                    apiHost: a.aX
                }))
            }
        },
        92662: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => d
            });
            var n = r(39798),
                a = r(10388),
                i = r(23043),
                o = r(63736),
                s = r(77980),
                l = function() {
                    return null
                };
            let d = e => {
                let {
                    children: t
                } = e, r = (0, a.getQueryClient)();
                return (0, n.jsxs)(s.QueryClientProvider, {
                    client: r,
                    children: [t, "development" === i.X$ && (0, n.jsx)("div", {
                        className: (0, o.AH)({
                            zIndex: "token(zIndex.max)",
                            position: "relative"
                        }),
                        children: (0, n.jsx)(l, {
                            initialIsOpen: !1
                        })
                    })]
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [8620, 8351, 9e3, 62291, 40067, 47491, 86337, 94870, 68017, 12237, 2135, 77358], () => t(3201)), _N_E = e.O()
    }
]);
//# sourceMappingURL=layout-043d339eff7b7845.js.map