"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8351], {
        659: (t, e, i) => {
            i.d(e, {
                jG: () => n
            });
            var s = t => setTimeout(t, 0),
                n = function() {
                    let t = [],
                        e = 0,
                        i = t => {
                            t()
                        },
                        n = t => {
                            t()
                        },
                        r = s,
                        a = s => {
                            e ? t.push(s) : r(() => {
                                i(s)
                            })
                        },
                        o = () => {
                            let e = t;
                            t = [], e.length && r(() => {
                                n(() => {
                                    e.forEach(t => {
                                        i(t)
                                    })
                                })
                            })
                        };
                    return {
                        batch: t => {
                            let i;
                            e++;
                            try {
                                i = t()
                            } finally {
                                --e || o()
                            }
                            return i
                        },
                        batchCalls: t => (...e) => {
                            a(() => {
                                t(...e)
                            })
                        },
                        schedule: a,
                        setNotifyFunction: t => {
                            i = t
                        },
                        setBatchNotifyFunction: t => {
                            n = t
                        },
                        setScheduler: t => {
                            r = t
                        }
                    }
                }()
        },
        4306: (t, e, i) => {
            i.d(e, {
                T: () => n,
                b: () => r
            });
            var s = i(80638);

            function n() {
                let t, e, i = new Promise((i, s) => {
                    t = i, e = s
                });

                function s(t) {
                    Object.assign(i, t), delete i.resolve, delete i.reject
                }
                return i.status = "pending", i.catch(() => {}), i.resolve = e => {
                    s({
                        status: "fulfilled",
                        value: e
                    }), t(e)
                }, i.reject = t => {
                    s({
                        status: "rejected",
                        reason: t
                    }), e(t)
                }, i
            }

            function r(t) {
                let e;
                if (t.then(t => (e = t, t)) ? .catch(s.lQ), void 0 !== e) return {
                    data: e
                }
            }
        },
        12114: (t, e, i) => {
            i.d(e, {
                II: () => l,
                v_: () => u,
                wm: () => h
            });
            var s = i(28086),
                n = i(59213),
                r = i(4306),
                a = i(80638);

            function o(t) {
                return Math.min(1e3 * 2 ** t, 3e4)
            }

            function u(t) {
                return (t ? ? "online") !== "online" || n.t.isOnline()
            }
            var c = class extends Error {
                constructor(t) {
                    super("CancelledError"), this.revert = t ? .revert, this.silent = t ? .silent
                }
            };

            function h(t) {
                return t instanceof c
            }

            function l(t) {
                let e, i = !1,
                    h = 0,
                    l = !1,
                    d = (0, r.T)(),
                    p = () => s.m.isFocused() && ("always" === t.networkMode || n.t.isOnline()) && t.canRun(),
                    f = () => u(t.networkMode) && t.canRun(),
                    y = i => {
                        l || (l = !0, t.onSuccess ? .(i), e ? .(), d.resolve(i))
                    },
                    v = i => {
                        l || (l = !0, t.onError ? .(i), e ? .(), d.reject(i))
                    },
                    m = () => new Promise(i => {
                        e = t => {
                            (l || p()) && i(t)
                        }, t.onPause ? .()
                    }).then(() => {
                        e = void 0, l || t.onContinue ? .()
                    }),
                    b = () => {
                        let e;
                        if (l) return;
                        let s = 0 === h ? t.initialPromise : void 0;
                        try {
                            e = s ? ? t.fn()
                        } catch (t) {
                            e = Promise.reject(t)
                        }
                        Promise.resolve(e).then(y).catch(e => {
                            if (l) return;
                            let s = t.retry ? ? 3 * !a.S$,
                                n = t.retryDelay ? ? o,
                                r = "function" == typeof n ? n(h, e) : n,
                                u = !0 === s || "number" == typeof s && h < s || "function" == typeof s && s(h, e);
                            if (i || !u) return void v(e);
                            h++, t.onFail ? .(h, e), (0, a.yy)(r).then(() => p() ? void 0 : m()).then(() => {
                                i ? v(e) : b()
                            })
                        })
                    };
                return {
                    promise: d,
                    cancel: e => {
                        l || (v(new c(e)), t.abort ? .())
                    },
                    continue: () => (e ? .(), d),
                    cancelRetry: () => {
                        i = !0
                    },
                    continueRetry: () => {
                        i = !1
                    },
                    canStart: f,
                    start: () => (f() ? b() : m().then(b), d)
                }
            }
        },
        13377: (t, e, i) => {
            i.d(e, {
                PL: () => n,
                RQ: () => u,
                rB: () => o
            });
            var s = i(80638);

            function n(t) {
                return {
                    onFetch: (e, i) => {
                        let n = e.options,
                            o = e.fetchOptions ? .meta ? .fetchMore ? .direction,
                            u = e.state.data ? .pages || [],
                            c = e.state.data ? .pageParams || [],
                            h = {
                                pages: [],
                                pageParams: []
                            },
                            l = 0,
                            d = async () => {
                                let i = !1,
                                    d = t => {
                                        Object.defineProperty(t, "signal", {
                                            enumerable: !0,
                                            get: () => (e.signal.aborted ? i = !0 : e.signal.addEventListener("abort", () => {
                                                i = !0
                                            }), e.signal)
                                        })
                                    },
                                    p = (0, s.ZM)(e.options, e.fetchOptions),
                                    f = async (t, n, r) => {
                                        if (i) return Promise.reject();
                                        if (null == n && t.pages.length) return Promise.resolve(t);
                                        let a = {
                                            client: e.client,
                                            queryKey: e.queryKey,
                                            pageParam: n,
                                            direction: r ? "backward" : "forward",
                                            meta: e.options.meta
                                        };
                                        d(a);
                                        let o = await p(a),
                                            {
                                                maxPages: u
                                            } = e.options,
                                            c = r ? s.ZZ : s.y9;
                                        return {
                                            pages: c(t.pages, o, u),
                                            pageParams: c(t.pageParams, n, u)
                                        }
                                    };
                                if (o && u.length) {
                                    let t = "backward" === o,
                                        e = {
                                            pages: u,
                                            pageParams: c
                                        },
                                        i = (t ? a : r)(n, e);
                                    h = await f(e, i, t)
                                } else {
                                    let e = t ? ? u.length;
                                    do {
                                        let t = 0 === l ? c[0] ? ? n.initialPageParam : r(n, h);
                                        if (l > 0 && null == t) break;
                                        h = await f(h, t), l++
                                    } while (l < e)
                                }
                                return h
                            };
                        e.options.persister ? e.fetchFn = () => e.options.persister ? .(d, {
                            client: e.client,
                            queryKey: e.queryKey,
                            meta: e.options.meta,
                            signal: e.signal
                        }, i) : e.fetchFn = d
                    }
                }
            }

            function r(t, {
                pages: e,
                pageParams: i
            }) {
                let s = e.length - 1;
                return e.length > 0 ? t.getNextPageParam(e[s], e, i[s], i) : void 0
            }

            function a(t, {
                pages: e,
                pageParams: i
            }) {
                return e.length > 0 ? t.getPreviousPageParam ? .(e[0], e, i[0], i) : void 0
            }

            function o(t, e) {
                return !!e && null != r(t, e)
            }

            function u(t, e) {
                return !!e && !!t.getPreviousPageParam && null != a(t, e)
            }
        },
        28086: (t, e, i) => {
            i.d(e, {
                m: () => r
            });
            var s = i(87900),
                n = i(80638),
                r = new class extends s.Q {#
                    t;#
                    e;#
                    i;
                    constructor() {
                        super(), this.#i = t => {
                            if (!n.S$ && window.addEventListener) {
                                let e = () => t();
                                return window.addEventListener("visibilitychange", e, !1), () => {
                                    window.removeEventListener("visibilitychange", e)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#i)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e ? .(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#i = t, this.#e ? .(), this.#e = t(t => {
                            "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                        })
                    }
                    setFocused(t) {
                        this.#t !== t && (this.#t = t, this.onFocus())
                    }
                    onFocus() {
                        let t = this.isFocused();
                        this.listeners.forEach(e => {
                            e(t)
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.#t ? this.#t : globalThis.document ? .visibilityState !== "hidden"
                    }
                }
        },
        31738: (t, e, i) => {
            i.d(e, {
                $: () => o,
                s: () => a
            });
            var s = i(659),
                n = i(89322),
                r = i(12114),
                a = class extends n.k {#
                    s;#
                    n;#
                    r;
                    constructor(t) {
                        super(), this.mutationId = t.mutationId, this.#n = t.mutationCache, this.#s = [], this.state = t.state || o(), this.setOptions(t.options), this.scheduleGc()
                    }
                    setOptions(t) {
                        this.options = t, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(t) {
                        this.#s.includes(t) || (this.#s.push(t), this.clearGcTimeout(), this.#n.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.#s = this.#s.filter(e => e !== t), this.scheduleGc(), this.#n.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: t
                        })
                    }
                    optionalRemove() {
                        this.#s.length || ("pending" === this.state.status ? this.scheduleGc() : this.#n.remove(this))
                    }
                    continue () {
                        return this.#r ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(t) {
                        let e = () => {
                            this.#a({
                                type: "continue"
                            })
                        };
                        this.#r = (0, r.II)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(Error("No mutationFn found")),
                            onFail: (t, e) => {
                                this.#a({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#a({
                                    type: "pause"
                                })
                            },
                            onContinue: e,
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#n.canRun(this)
                        });
                        let i = "pending" === this.state.status,
                            s = !this.#r.canStart();
                        try {
                            if (i) e();
                            else {
                                this.#a({
                                    type: "pending",
                                    variables: t,
                                    isPaused: s
                                }), await this.#n.config.onMutate ? .(t, this);
                                let e = await this.options.onMutate ? .(t);
                                e !== this.state.context && this.#a({
                                    type: "pending",
                                    context: e,
                                    variables: t,
                                    isPaused: s
                                })
                            }
                            let n = await this.#r.start();
                            return await this.#n.config.onSuccess ? .(n, t, this.state.context, this), await this.options.onSuccess ? .(n, t, this.state.context), await this.#n.config.onSettled ? .(n, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(n, null, t, this.state.context), this.#a({
                                type: "success",
                                data: n
                            }), n
                        } catch (e) {
                            try {
                                throw await this.#n.config.onError ? .(e, t, this.state.context, this), await this.options.onError ? .(e, t, this.state.context), await this.#n.config.onSettled ? .(void 0, e, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, e, t, this.state.context), e
                            } finally {
                                this.#a({
                                    type: "error",
                                    error: e
                                })
                            }
                        } finally {
                            this.#n.runNext(this)
                        }
                    }#
                    a(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        failureCount: t.failureCount,
                                        failureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...e,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...e,
                                        context: t.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: t.isPaused,
                                        status: "pending",
                                        variables: t.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...e,
                                        data: void 0,
                                        error: t.error,
                                        failureCount: e.failureCount + 1,
                                        failureReason: t.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), s.jG.batch(() => {
                            this.#s.forEach(e => {
                                e.onMutationUpdate(t)
                            }), this.#n.notify({
                                mutation: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                };

            function o() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                }
            }
        },
        59213: (t, e, i) => {
            i.d(e, {
                t: () => r
            });
            var s = i(87900),
                n = i(80638),
                r = new class extends s.Q {#
                    o = !0;#
                    e;#
                    i;
                    constructor() {
                        super(), this.#i = t => {
                            if (!n.S$ && window.addEventListener) {
                                let e = () => t(!0),
                                    i = () => t(!1);
                                return window.addEventListener("online", e, !1), window.addEventListener("offline", i, !1), () => {
                                    window.removeEventListener("online", e), window.removeEventListener("offline", i)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#i)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e ? .(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#i = t, this.#e ? .(), this.#e = t(this.setOnline.bind(this))
                    }
                    setOnline(t) {
                        this.#o !== t && (this.#o = t, this.listeners.forEach(e => {
                            e(t)
                        }))
                    }
                    isOnline() {
                        return this.#o
                    }
                }
        },
        77980: (t, e, i) => {
            i.r(e), i.d(e, {
                QueryClientContext: () => r,
                QueryClientProvider: () => o,
                useQueryClient: () => a
            });
            var s = i(13270),
                n = i(39798),
                r = s.createContext(void 0),
                a = t => {
                    let e = s.useContext(r);
                    if (t) return t;
                    if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                o = t => {
                    let {
                        client: e,
                        children: i
                    } = t;
                    return s.useEffect(() => (e.mount(), () => {
                        e.unmount()
                    }), [e]), (0, n.jsx)(r.Provider, {
                        value: e,
                        children: i
                    })
                }
        },
        78927: (t, e, i) => {
            i.d(e, {
                X: () => o,
                k: () => u
            });
            var s = i(80638),
                n = i(659),
                r = i(12114),
                a = i(89322),
                o = class extends a.k {#
                    u;#
                    c;#
                    h;#
                    l;#
                    r;#
                    d;#
                    p;
                    constructor(t) {
                        super(), this.#p = !1, this.#d = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#l = t.client, this.#h = this.#l.getQueryCache(), this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#u = function(t) {
                            let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                                i = void 0 !== e,
                                s = i ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                            return {
                                data: e,
                                dataUpdateCount: 0,
                                dataUpdatedAt: i ? s ? ? Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: i ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options), this.state = t.state ? ? this.#u, this.scheduleGc()
                    }
                    get meta() {
                        return this.options.meta
                    }
                    get promise() {
                        return this.#r ? .promise
                    }
                    setOptions(t) {
                        this.options = { ...this.#d,
                            ...t
                        }, this.updateGcTime(this.options.gcTime)
                    }
                    optionalRemove() {
                        this.observers.length || "idle" !== this.state.fetchStatus || this.#h.remove(this)
                    }
                    setData(t, e) {
                        let i = (0, s.pl)(this.state.data, t, this.options);
                        return this.#a({
                            data: i,
                            type: "success",
                            dataUpdatedAt: e ? .updatedAt,
                            manual: e ? .manual
                        }), i
                    }
                    setState(t, e) {
                        this.#a({
                            type: "setState",
                            state: t,
                            setStateOptions: e
                        })
                    }
                    cancel(t) {
                        let e = this.#r ? .promise;
                        return this.#r ? .cancel(t), e ? e.then(s.lQ).catch(s.lQ) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState(this.#u)
                    }
                    isActive() {
                        return this.observers.some(t => !1 !== (0, s.Eh)(t.options.enabled, this))
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === s.hT || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
                    }
                    isStatic() {
                        return this.getObserversCount() > 0 && this.observers.some(t => "static" === (0, s.d2)(t.options.staleTime, this))
                    }
                    isStale() {
                        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
                    }
                    isStaleByTime(t = 0) {
                        return void 0 === this.state.data || "static" !== t && (!!this.state.isInvalidated || !(0, s.j3)(this.state.dataUpdatedAt, t))
                    }
                    onFocus() {
                        let t = this.observers.find(t => t.shouldFetchOnWindowFocus());
                        t ? .refetch({
                            cancelRefetch: !1
                        }), this.#r ? .continue()
                    }
                    onOnline() {
                        let t = this.observers.find(t => t.shouldFetchOnReconnect());
                        t ? .refetch({
                            cancelRefetch: !1
                        }), this.#r ? .continue()
                    }
                    addObserver(t) {
                        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#h.notify({
                            type: "observerAdded",
                            query: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (this.#r && (this.#p ? this.#r.cancel({
                            revert: !0
                        }) : this.#r.cancelRetry()), this.scheduleGc()), this.#h.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: t
                        }))
                    }
                    getObserversCount() {
                        return this.observers.length
                    }
                    invalidate() {
                        this.state.isInvalidated || this.#a({
                            type: "invalidate"
                        })
                    }
                    fetch(t, e) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && e ? .cancelRefetch) this.cancel({
                                silent: !0
                            });
                            else if (this.#r) return this.#r.continueRetry(), this.#r.promise
                        }
                        if (t && this.setOptions(t), !this.options.queryFn) {
                            let t = this.observers.find(t => t.options.queryFn);
                            t && this.setOptions(t.options)
                        }
                        let i = new AbortController,
                            n = t => {
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: () => (this.#p = !0, i.signal)
                                })
                            },
                            a = {
                                fetchOptions: e,
                                options: this.options,
                                queryKey: this.queryKey,
                                client: this.#l,
                                state: this.state,
                                fetchFn: () => {
                                    let t = (0, s.ZM)(this.options, e),
                                        i = {
                                            client: this.#l,
                                            queryKey: this.queryKey,
                                            meta: this.meta
                                        };
                                    return (n(i), this.#p = !1, this.options.persister) ? this.options.persister(t, i, this) : t(i)
                                }
                            };
                        n(a), this.options.behavior ? .onFetch(a, this), this.#c = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== a.fetchOptions ? .meta) && this.#a({
                            type: "fetch",
                            meta: a.fetchOptions ? .meta
                        });
                        let o = t => {
                            (0, r.wm)(t) && t.silent || this.#a({
                                type: "error",
                                error: t
                            }), (0, r.wm)(t) || (this.#h.config.onError ? .(t, this), this.#h.config.onSettled ? .(this.state.data, t, this)), this.scheduleGc()
                        };
                        return this.#r = (0, r.II)({
                            initialPromise: e ? .initialPromise,
                            fn: a.fetchFn,
                            abort: i.abort.bind(i),
                            onSuccess: t => {
                                if (void 0 === t) return void o(Error(`${this.queryHash} data is undefined`));
                                try {
                                    this.setData(t)
                                } catch (t) {
                                    o(t);
                                    return
                                }
                                this.#h.config.onSuccess ? .(t, this), this.#h.config.onSettled ? .(t, this.state.error, this), this.scheduleGc()
                            },
                            onError: o,
                            onFail: (t, e) => {
                                this.#a({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#a({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#a({
                                    type: "continue"
                                })
                            },
                            retry: a.options.retry,
                            retryDelay: a.options.retryDelay,
                            networkMode: a.options.networkMode,
                            canRun: () => !0
                        }), this.#r.start()
                    }#
                    a(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        fetchFailureCount: t.failureCount,
                                        fetchFailureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        fetchStatus: "paused"
                                    };
                                case "continue":
                                    return { ...e,
                                        fetchStatus: "fetching"
                                    };
                                case "fetch":
                                    return { ...e,
                                        ...u(e.data, this.options),
                                        fetchMeta: t.meta ? ? null
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        dataUpdateCount: e.dataUpdateCount + 1,
                                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...!t.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null
                                        }
                                    };
                                case "error":
                                    let i = t.error;
                                    if ((0, r.wm)(i) && i.revert && this.#c) return { ...this.#c,
                                        fetchStatus: "idle"
                                    };
                                    return { ...e,
                                        error: i,
                                        errorUpdateCount: e.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount: e.fetchFailureCount + 1,
                                        fetchFailureReason: i,
                                        fetchStatus: "idle",
                                        status: "error"
                                    };
                                case "invalidate":
                                    return { ...e,
                                        isInvalidated: !0
                                    };
                                case "setState":
                                    return { ...e,
                                        ...t.state
                                    }
                            }
                        })(this.state), n.jG.batch(() => {
                            this.observers.forEach(t => {
                                t.onQueryUpdate()
                            }), this.#h.notify({
                                query: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                };

            function u(t, e) {
                return {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, r.v_)(e.networkMode) ? "fetching" : "paused",
                    ...void 0 === t && {
                        error: null,
                        status: "pending"
                    }
                }
            }
        },
        80638: (t, e, i) => {
            i.d(e, {
                BH: () => y,
                Cp: () => f,
                EN: () => p,
                Eh: () => c,
                F$: () => d,
                GU: () => E,
                MK: () => h,
                S$: () => s,
                ZM: () => F,
                ZZ: () => P,
                Zw: () => r,
                d2: () => u,
                f8: () => v,
                gn: () => a,
                hT: () => O,
                j3: () => o,
                lQ: () => n,
                nJ: () => l,
                pl: () => C,
                y9: () => S,
                yy: () => w
            });
            var s = "undefined" == typeof window || "Deno" in globalThis;

            function n() {}

            function r(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function a(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function o(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function u(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function c(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function h(t, e) {
                let {
                    type: i = "all",
                    exact: s,
                    fetchStatus: n,
                    predicate: r,
                    queryKey: a,
                    stale: o
                } = t;
                if (a) {
                    if (s) {
                        if (e.queryHash !== d(a, e.options)) return !1
                    } else if (!f(e.queryKey, a)) return !1
                }
                if ("all" !== i) {
                    let t = e.isActive();
                    if ("active" === i && !t || "inactive" === i && t) return !1
                }
                return ("boolean" != typeof o || e.isStale() === o) && (!n || n === e.state.fetchStatus) && (!r || !!r(e))
            }

            function l(t, e) {
                let {
                    exact: i,
                    status: s,
                    predicate: n,
                    mutationKey: r
                } = t;
                if (r) {
                    if (!e.options.mutationKey) return !1;
                    if (i) {
                        if (p(e.options.mutationKey) !== p(r)) return !1
                    } else if (!f(e.options.mutationKey, r)) return !1
                }
                return (!s || e.state.status === s) && (!n || !!n(e))
            }

            function d(t, e) {
                return (e ? .queryKeyHashFn || p)(t)
            }

            function p(t) {
                return JSON.stringify(t, (t, e) => b(e) ? Object.keys(e).sort().reduce((t, i) => (t[i] = e[i], t), {}) : e)
            }

            function f(t, e) {
                return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && Object.keys(e).every(i => f(t[i], e[i]))
            }

            function y(t, e) {
                if (t === e) return t;
                let i = m(t) && m(e);
                if (i || b(t) && b(e)) {
                    let s = i ? t : Object.keys(t),
                        n = s.length,
                        r = i ? e : Object.keys(e),
                        a = r.length,
                        o = i ? [] : {},
                        u = 0;
                    for (let n = 0; n < a; n++) {
                        let a = i ? n : r[n];
                        (!i && s.includes(a) || i) && void 0 === t[a] && void 0 === e[a] ? (o[a] = void 0, u++) : (o[a] = y(t[a], e[a]), o[a] === t[a] && void 0 !== t[a] && u++)
                    }
                    return n === a && u === n ? t : o
                }
                return e
            }

            function v(t, e) {
                if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
                for (let i in t)
                    if (t[i] !== e[i]) return !1;
                return !0
            }

            function m(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function b(t) {
                if (!g(t)) return !1;
                let e = t.constructor;
                if (void 0 === e) return !0;
                let i = e.prototype;
                return !!g(i) && !!i.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(t) === Object.prototype
            }

            function g(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function w(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function C(t, e, i) {
                return "function" == typeof i.structuralSharing ? i.structuralSharing(t, e) : !1 !== i.structuralSharing ? y(t, e) : e
            }

            function S(t, e, i = 0) {
                let s = [...t, e];
                return i && s.length > i ? s.slice(1) : s
            }

            function P(t, e, i = 0) {
                let s = [e, ...t];
                return i && s.length > i ? s.slice(0, -1) : s
            }
            var O = Symbol();

            function F(t, e) {
                return !t.queryFn && e ? .initialPromise ? () => e.initialPromise : t.queryFn && t.queryFn !== O ? t.queryFn : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))
            }

            function E(t, e) {
                return "function" == typeof t ? t(...e) : !!t
            }
        },
        87900: (t, e, i) => {
            i.d(e, {
                Q: () => s
            });
            var s = class {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(t) {
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        89322: (t, e, i) => {
            i.d(e, {
                k: () => n
            });
            var s = i(80638),
                n = class {#
                    f;
                    destroy() {
                        this.clearGcTimeout()
                    }
                    scheduleGc() {
                        this.clearGcTimeout(), (0, s.gn)(this.gcTime) && (this.#f = setTimeout(() => {
                            this.optionalRemove()
                        }, this.gcTime))
                    }
                    updateGcTime(t) {
                        this.gcTime = Math.max(this.gcTime || 0, t ? ? (s.S$ ? 1 / 0 : 3e5))
                    }
                    clearGcTimeout() {
                        this.#f && (clearTimeout(this.#f), this.#f = void 0)
                    }
                }
        }
    }
]);
//# sourceMappingURL=8351-0e7ce72d6e1510cf.js.map