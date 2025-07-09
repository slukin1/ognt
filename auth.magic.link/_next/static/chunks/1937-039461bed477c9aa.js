"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1937], {
        5421: (t, e, s) => {
            s.d(e, {
                Qv: () => h,
                hw: () => o
            });
            var r = s(4306);

            function i(t) {
                return t
            }

            function u(t) {
                return t.state.isPaused
            }

            function n(t) {
                return "success" === t.state.status
            }

            function a(t) {
                return !0
            }

            function o(t, e = {}) {
                let s = e.shouldDehydrateMutation ? ? t.getDefaultOptions().dehydrate ? .shouldDehydrateMutation ? ? u,
                    r = t.getMutationCache().getAll().flatMap(t => s(t) ? [{
                        mutationKey: t.options.mutationKey,
                        state: t.state,
                        ...t.options.scope && {
                            scope: t.options.scope
                        },
                        ...t.meta && {
                            meta: t.meta
                        }
                    }] : []),
                    h = e.shouldDehydrateQuery ? ? t.getDefaultOptions().dehydrate ? .shouldDehydrateQuery ? ? n,
                    l = e.shouldRedactErrors ? ? t.getDefaultOptions().dehydrate ? .shouldRedactErrors ? ? a,
                    c = e.serializeData ? ? t.getDefaultOptions().dehydrate ? .serializeData ? ? i;
                return {
                    mutations: r,
                    queries: t.getQueryCache().getAll().flatMap(t => h(t) ? [{
                        dehydratedAt: Date.now(),
                        state: { ...t.state,
                            ...void 0 !== t.state.data && {
                                data: c(t.state.data)
                            }
                        },
                        queryKey: t.queryKey,
                        queryHash: t.queryHash,
                        ..."pending" === t.state.status && {
                            promise: t.promise ? .then(c).catch(t => l(t) ? Promise.reject(Error("redacted")) : Promise.reject(t))
                        },
                        ...t.meta && {
                            meta: t.meta
                        }
                    }] : [])
                }
            }

            function h(t, e, s) {
                if ("object" != typeof e || null === e) return;
                let u = t.getMutationCache(),
                    n = t.getQueryCache(),
                    a = s ? .defaultOptions ? .deserializeData ? ? t.getDefaultOptions().hydrate ? .deserializeData ? ? i,
                    o = e.mutations || [],
                    h = e.queries || [];
                o.forEach(({
                    state: e,
                    ...r
                }) => {
                    u.build(t, { ...t.getDefaultOptions().hydrate ? .mutations,
                        ...s ? .defaultOptions ? .mutations,
                        ...r
                    }, e)
                }), h.forEach(({
                    queryKey: e,
                    state: i,
                    queryHash: u,
                    meta: o,
                    promise: h,
                    dehydratedAt: l
                }) => {
                    let c = h ? (0, r.b)(h) : void 0,
                        d = void 0 === i.data ? c ? .data : i.data,
                        f = void 0 === d ? d : a(d),
                        p = n.get(u),
                        b = p ? .state.status === "pending",
                        y = p ? .state.fetchStatus === "fetching";
                    if (p) {
                        let t = c && void 0 !== l && l > p.state.dataUpdatedAt;
                        if (i.dataUpdatedAt > p.state.dataUpdatedAt || t) {
                            let {
                                fetchStatus: t,
                                ...e
                            } = i;
                            p.setState({ ...e,
                                data: f
                            })
                        }
                    } else p = n.build(t, { ...t.getDefaultOptions().hydrate ? .queries,
                        ...s ? .defaultOptions ? .queries,
                        queryKey : e,
                        queryHash : u,
                        meta : o
                    }, { ...i,
                        data: f,
                        fetchStatus: "idle",
                        status: void 0 !== f ? "success" : i.status
                    });
                    h && !b && !y && (void 0 === l || l > p.state.dataUpdatedAt) && p.fetch(void 0, {
                        initialPromise: Promise.resolve(h).then(a)
                    })
                })
            }
        },
        34361: (t, e, s) => {
            s.d(e, {
                z: () => u
            });
            var r = s(74573),
                i = s(13377),
                u = class extends r.$ {
                    constructor(t, e) {
                        super(t, e)
                    }
                    bindMethods() {
                        super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                    }
                    setOptions(t) {
                        super.setOptions({ ...t,
                            behavior: (0, i.PL)()
                        })
                    }
                    getOptimisticResult(t) {
                        return t.behavior = (0, i.PL)(), super.getOptimisticResult(t)
                    }
                    fetchNextPage(t) {
                        return this.fetch({ ...t,
                            meta: {
                                fetchMore: {
                                    direction: "forward"
                                }
                            }
                        })
                    }
                    fetchPreviousPage(t) {
                        return this.fetch({ ...t,
                            meta: {
                                fetchMore: {
                                    direction: "backward"
                                }
                            }
                        })
                    }
                    createResult(t, e) {
                        let {
                            state: s
                        } = t, r = super.createResult(t, e), {
                            isFetching: u,
                            isRefetching: n,
                            isError: a,
                            isRefetchError: o
                        } = r, h = s.fetchMeta ? .fetchMore ? .direction, l = a && "forward" === h, c = u && "forward" === h, d = a && "backward" === h, f = u && "backward" === h;
                        return { ...r,
                            fetchNextPage: this.fetchNextPage,
                            fetchPreviousPage: this.fetchPreviousPage,
                            hasNextPage: (0, i.rB)(e, s.data),
                            hasPreviousPage: (0, i.RQ)(e, s.data),
                            isFetchNextPageError: l,
                            isFetchingNextPage: c,
                            isFetchPreviousPageError: d,
                            isFetchingPreviousPage: f,
                            isRefetchError: o && !l && !d,
                            isRefetching: n && !c && !f
                        }
                    }
                }
        },
        39026: (t, e, s) => {
            s.d(e, {
                HydrationBoundary: () => n
            });
            var r = s(13270),
                i = s(5421),
                u = s(77980),
                n = t => {
                    let {
                        children: e,
                        options: s = {},
                        state: n,
                        queryClient: a
                    } = t, o = (0, u.useQueryClient)(a), [h, l] = r.useState(), c = r.useRef(s);
                    return c.current = s, r.useMemo(() => {
                        if (n) {
                            if ("object" != typeof n) return;
                            let t = o.getQueryCache(),
                                e = n.queries || [],
                                s = [],
                                r = [];
                            for (let i of e) {
                                let e = t.get(i.queryHash);
                                if (e) {
                                    let t = i.state.dataUpdatedAt > e.state.dataUpdatedAt || i.promise && "pending" !== e.state.status && "fetching" !== e.state.fetchStatus && void 0 !== i.dehydratedAt && i.dehydratedAt > e.state.dataUpdatedAt,
                                        s = null == h ? void 0 : h.find(t => t.queryHash === i.queryHash);
                                    t && (!s || i.state.dataUpdatedAt > s.state.dataUpdatedAt) && r.push(i)
                                } else s.push(i)
                            }
                            s.length > 0 && (0, i.Qv)(o, {
                                queries: s
                            }, c.current), r.length > 0 && l(t => t ? [...t, ...r] : r)
                        }
                    }, [o, h, n]), r.useEffect(() => {
                        h && ((0, i.Qv)(o, {
                            queries: h
                        }, c.current), l(void 0))
                    }, [o, h]), e
                }
        },
        54355: (t, e, s) => {
            s.d(e, {
                useSuspenseQuery: () => n
            });
            var r = s(74573),
                i = s(63788),
                u = s(9570);

            function n(t, e) {
                return (0, i.t)({ ...t,
                    enabled: !0,
                    suspense: !0,
                    throwOnError: u.R3,
                    placeholderData: void 0
                }, r.$, e)
            }
        },
        60719: (t, e, s) => {
            s.d(e, {
                useIsMutating: () => a,
                useMutationState: () => h
            });
            var r = s(13270),
                i = s(80638),
                u = s(659),
                n = s(77980);

            function a(t, e) {
                let s = (0, n.useQueryClient)(e);
                return h({
                    filters: { ...t,
                        status: "pending"
                    }
                }, s).length
            }

            function o(t, e) {
                return t.findAll(e.filters).map(t => e.select ? e.select(t) : t.state)
            }

            function h() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    s = (0, n.useQueryClient)(e).getMutationCache(),
                    a = r.useRef(t),
                    h = r.useRef(null);
                return h.current || (h.current = o(s, t)), r.useEffect(() => {
                    a.current = t
                }), r.useSyncExternalStore(r.useCallback(t => s.subscribe(() => {
                    let e = (0, i.BH)(h.current, o(s, a.current));
                    h.current !== e && (h.current = e, u.jG.schedule(t))
                }), [s]), () => h.current, () => h.current)
            }
        },
        71846: (t, e, s) => {
            s.d(e, {
                useMutation: () => l
            });
            var r = s(13270),
                i = s(31738),
                u = s(659),
                n = s(87900),
                a = s(80638),
                o = class extends n.Q {#
                    t;#
                    e = void 0;#
                    s;#
                    r;
                    constructor(t, e) {
                        super(), this.#t = t, this.setOptions(e), this.bindMethods(), this.#i()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(t) {
                        let e = this.options;
                        this.options = this.#t.defaultMutationOptions(t), (0, a.f8)(this.options, e) || this.#t.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#s,
                            observer: this
                        }), e ? .mutationKey && this.options.mutationKey && (0, a.EN)(e.mutationKey) !== (0, a.EN)(this.options.mutationKey) ? this.reset() : this.#s ? .state.status === "pending" && this.#s.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#s ? .removeObserver(this)
                    }
                    onMutationUpdate(t) {
                        this.#i(), this.#u(t)
                    }
                    getCurrentResult() {
                        return this.#e
                    }
                    reset() {
                        this.#s ? .removeObserver(this), this.#s = void 0, this.#i(), this.#u()
                    }
                    mutate(t, e) {
                        return this.#r = e, this.#s ? .removeObserver(this), this.#s = this.#t.getMutationCache().build(this.#t, this.options), this.#s.addObserver(this), this.#s.execute(t)
                    }#
                    i() {
                        let t = this.#s ? .state ? ? (0, i.$)();
                        this.#e = { ...t,
                            isPending: "pending" === t.status,
                            isSuccess: "success" === t.status,
                            isError: "error" === t.status,
                            isIdle: "idle" === t.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    u(t) {
                        u.jG.batch(() => {
                            if (this.#r && this.hasListeners()) {
                                let e = this.#e.variables,
                                    s = this.#e.context;
                                t ? .type === "success" ? (this.#r.onSuccess ? .(t.data, e, s), this.#r.onSettled ? .(t.data, null, e, s)) : t ? .type === "error" && (this.#r.onError ? .(t.error, e, s), this.#r.onSettled ? .(void 0, t.error, e, s))
                            }
                            this.listeners.forEach(t => {
                                t(this.#e)
                            })
                        })
                    }
                },
                h = s(77980);

            function l(t, e) {
                let s = (0, h.useQueryClient)(e),
                    [i] = r.useState(() => new o(s, t));
                r.useEffect(() => {
                    i.setOptions(t)
                }, [i, t]);
                let n = r.useSyncExternalStore(r.useCallback(t => i.subscribe(u.jG.batchCalls(t)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
                    l = r.useCallback((t, e) => {
                        i.mutate(t, e).catch(a.lQ)
                    }, [i]);
                if (n.error && (0, a.GU)(i.options.throwOnError, [n.error])) throw n.error;
                return { ...n,
                    mutate: l,
                    mutateAsync: n.mutate
                }
            }
        },
        74565: (t, e, s) => {
            s.d(e, {
                useIsFetching: () => n
            });
            var r = s(13270),
                i = s(659),
                u = s(77980);

            function n(t, e) {
                let s = (0, u.useQueryClient)(e),
                    n = s.getQueryCache();
                return r.useSyncExternalStore(r.useCallback(t => n.subscribe(i.jG.batchCalls(t)), [n]), () => s.isFetching(t), () => s.isFetching(t))
            }
        },
        93239: (t, e, s) => {
            s.d(e, {
                useSuspenseInfiniteQuery: () => n
            });
            var r = s(34361),
                i = s(63788),
                u = s(9570);

            function n(t, e) {
                return (0, i.t)({ ...t,
                    enabled: !0,
                    suspense: !0,
                    throwOnError: u.R3
                }, r.z, e)
            }
        },
        94503: (t, e, s) => {
            s.d(e, {
                useInfiniteQuery: () => u
            });
            var r = s(34361),
                i = s(63788);

            function u(t, e) {
                return (0, i.t)(t, r.z, e)
            }
        },
        98551: (t, e, s) => {
            s.d(e, {
                useSuspenseQueries: () => u
            });
            var r = s(99949),
                i = s(9570);

            function u(t, e) {
                return (0, r.useQueries)({ ...t,
                    queries: t.queries.map(t => ({ ...t,
                        suspense: !0,
                        throwOnError: i.R3,
                        enabled: !0,
                        placeholderData: void 0
                    }))
                }, e)
            }
        },
        99949: (t, e, s) => {
            s.d(e, {
                useQueries: () => b
            });
            var r = s(13270),
                i = s(659),
                u = s(74573),
                n = s(87900),
                a = s(80638);

            function o(t, e) {
                return t.filter(t => !e.includes(t))
            }
            var h = class extends n.Q {#
                    t;#
                    n;#
                    a;#
                    o;#
                    h;#
                    l;#
                    c;#
                    d;#
                    f = [];
                    constructor(t, e, s) {
                        super(), this.#t = t, this.#o = s, this.#a = [], this.#h = [], this.#n = [], this.setQueries(e)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && this.#h.forEach(t => {
                            t.subscribe(e => {
                                this.#p(t, e)
                            })
                        })
                    }
                    onUnsubscribe() {
                        this.listeners.size || this.destroy()
                    }
                    destroy() {
                        this.listeners = new Set, this.#h.forEach(t => {
                            t.destroy()
                        })
                    }
                    setQueries(t, e) {
                        this.#a = t, this.#o = e, i.jG.batch(() => {
                            let t = this.#h,
                                e = this.#b(this.#a);
                            this.#f = e, e.forEach(t => t.observer.setOptions(t.defaultedQueryOptions));
                            let s = e.map(t => t.observer),
                                r = s.map(t => t.getCurrentResult()),
                                i = s.some((e, s) => e !== t[s]);
                            (t.length !== s.length || i) && (this.#h = s, this.#n = r, this.hasListeners() && (o(t, s).forEach(t => {
                                t.destroy()
                            }), o(s, t).forEach(t => {
                                t.subscribe(e => {
                                    this.#p(t, e)
                                })
                            }), this.#u()))
                        })
                    }
                    getCurrentResult() {
                        return this.#n
                    }
                    getQueries() {
                        return this.#h.map(t => t.getCurrentQuery())
                    }
                    getObservers() {
                        return this.#h
                    }
                    getOptimisticResult(t, e) {
                        let s = this.#b(t),
                            r = s.map(t => t.observer.getOptimisticResult(t.defaultedQueryOptions));
                        return [r, t => this.#y(t ? ? r, e), () => this.#g(r, s)]
                    }#
                    g(t, e) {
                        return e.map((s, r) => {
                            let i = t[r];
                            return s.defaultedQueryOptions.notifyOnChangeProps ? i : s.observer.trackResult(i, t => {
                                e.forEach(e => {
                                    e.observer.trackProp(t)
                                })
                            })
                        })
                    }#
                    y(t, e) {
                        return e ? (this.#l && this.#n === this.#d && e === this.#c || (this.#c = e, this.#d = this.#n, this.#l = (0, a.BH)(this.#l, e(t))), this.#l) : t
                    }#
                    b(t) {
                        let e = new Map(this.#h.map(t => [t.options.queryHash, t])),
                            s = [];
                        return t.forEach(t => {
                            let r = this.#t.defaultQueryOptions(t),
                                i = e.get(r.queryHash);
                            i ? s.push({
                                defaultedQueryOptions: r,
                                observer: i
                            }) : s.push({
                                defaultedQueryOptions: r,
                                observer: new u.$(this.#t, r)
                            })
                        }), s
                    }#
                    p(t, e) {
                        let s = this.#h.indexOf(t); - 1 !== s && (this.#n = function(t, e, s) {
                            let r = t.slice(0);
                            return r[e] = s, r
                        }(this.#n, s, e), this.#u())
                    }#
                    u() {
                        if (this.hasListeners()) {
                            let t = this.#l,
                                e = this.#g(this.#n, this.#f);
                            t !== this.#y(e, this.#o ? .combine) && i.jG.batch(() => {
                                this.listeners.forEach(t => {
                                    t(this.#n)
                                })
                            })
                        }
                    }
                },
                l = s(77980),
                c = s(43634),
                d = s(38829),
                f = s(5691),
                p = s(9570);

            function b(t, e) {
                let {
                    queries: s,
                    ...n
                } = t, o = (0, l.useQueryClient)(e), b = (0, c.useIsRestoring)(), y = (0, d.useQueryErrorResetBoundary)(), g = r.useMemo(() => s.map(t => {
                    let e = o.defaultQueryOptions(t);
                    return e._optimisticResults = b ? "isRestoring" : "optimistic", e
                }), [s, o, b]);
                g.forEach(t => {
                    (0, p.jv)(t), (0, f.LJ)(t, y)
                }), (0, f.wZ)(y);
                let [m] = r.useState(() => new h(o, g, n)), [v, R, O] = m.getOptimisticResult(g, n.combine), M = !b && !1 !== n.subscribed;
                r.useSyncExternalStore(r.useCallback(t => M ? m.subscribe(i.jG.batchCalls(t)) : a.lQ, [m, M]), () => m.getCurrentResult(), () => m.getCurrentResult()), r.useEffect(() => {
                    m.setQueries(g, n)
                }, [g, n, m]);
                let E = v.some((t, e) => (0, p.EU)(g[e], t)) ? v.flatMap((t, e) => {
                    let s = g[e];
                    if (s) {
                        let e = new u.$(o, s);
                        if ((0, p.EU)(s, t)) return (0, p.iL)(s, e, y);
                        (0, p.nE)(t, b) && (0, p.iL)(s, e, y)
                    }
                    return []
                }) : [];
                if (E.length > 0) throw Promise.all(E);
                let Q = v.find((t, e) => {
                    let s = g[e];
                    return s && (0, f.$1)({
                        result: t,
                        errorResetBoundary: y,
                        throwOnError: s.throwOnError,
                        query: o.getQueryCache().get(s.queryHash),
                        suspense: s.suspense
                    })
                });
                if (null == Q ? void 0 : Q.error) throw Q.error;
                return R(O())
            }
        }
    }
]);
//# sourceMappingURL=1937-039461bed477c9aa.js.map