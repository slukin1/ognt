"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [42275], {
        5691: (e, t, r) => {
            r.d(t, {
                $1: () => a,
                LJ: () => n,
                wZ: () => u
            });
            var s = r(13270),
                i = r(80638),
                n = (e, t) => {
                    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && !t.isReset() && (e.retryOnMount = !1)
                },
                u = e => {
                    s.useEffect(() => {
                        e.clearReset()
                    }, [e])
                },
                a = e => {
                    let {
                        result: t,
                        errorResetBoundary: r,
                        throwOnError: s,
                        query: n,
                        suspense: u
                    } = e;
                    return t.isError && !r.isReset() && !t.isFetching && n && (u && void 0 === t.data || (0, i.GU)(s, [t.error, n]))
                }
        },
        9570: (e, t, r) => {
            r.d(t, {
                EU: () => u,
                R3: () => s,
                iL: () => a,
                jv: () => i,
                nE: () => n
            });
            var s = (e, t) => void 0 === t.state.data,
                i = e => {
                    if (e.suspense) {
                        let t = e => "static" === e ? e : Math.max(e ? ? 1e3, 1e3),
                            r = e.staleTime;
                        e.staleTime = "function" == typeof r ? (...e) => t(r(...e)) : t(r), "number" == typeof e.gcTime && (e.gcTime = Math.max(e.gcTime, 1e3))
                    }
                },
                n = (e, t) => e.isLoading && e.isFetching && !t,
                u = (e, t) => e ? .suspense && t.isPending,
                a = (e, t, r) => t.fetchOptimistic(e).catch(() => {
                    r.clearReset()
                })
        },
        38829: (e, t, r) => {
            r.d(t, {
                QueryErrorResetBoundary: () => h,
                useQueryErrorResetBoundary: () => a
            });
            var s = r(13270),
                i = r(39798);

            function n() {
                let e = !1;
                return {
                    clearReset: () => {
                        e = !1
                    },
                    reset: () => {
                        e = !0
                    },
                    isReset: () => e
                }
            }
            var u = s.createContext(n()),
                a = () => s.useContext(u),
                h = e => {
                    let {
                        children: t
                    } = e, [r] = s.useState(() => n());
                    return (0, i.jsx)(u.Provider, {
                        value: r,
                        children: "function" == typeof t ? t(r) : t
                    })
                }
        },
        42275: (e, t, r) => {
            r.d(t, {
                useQuery: () => n
            });
            var s = r(74573),
                i = r(63788);

            function n(e, t) {
                return (0, i.t)(e, s.$, t)
            }
        },
        43634: (e, t, r) => {
            r.d(t, {
                IsRestoringProvider: () => u,
                useIsRestoring: () => n
            });
            var s = r(13270),
                i = s.createContext(!1),
                n = () => s.useContext(i),
                u = i.Provider
        },
        63788: (e, t, r) => {
            r.d(t, {
                t: () => o
            });
            var s = r(13270),
                i = r(659),
                n = r(80638),
                u = r(77980),
                a = r(38829),
                h = r(5691),
                c = r(43634),
                l = r(9570);

            function o(e, t, r) {
                var o, d, p, f, y;
                let R = (0, u.useQueryClient)(r),
                    v = (0, c.useIsRestoring)(),
                    Q = (0, a.useQueryErrorResetBoundary)(),
                    b = R.defaultQueryOptions(e);
                null == (d = R.getDefaultOptions().queries) || null == (o = d._experimental_beforeQuery) || o.call(d, b), b._optimisticResults = v ? "isRestoring" : "optimistic", (0, l.jv)(b), (0, h.LJ)(b, Q), (0, h.wZ)(Q);
                let m = !R.getQueryCache().get(b.queryHash),
                    [I] = s.useState(() => new t(R, b)),
                    g = I.getOptimisticResult(b),
                    E = !v && !1 !== e.subscribed;
                if (s.useSyncExternalStore(s.useCallback(e => {
                        let t = E ? I.subscribe(i.jG.batchCalls(e)) : n.lQ;
                        return I.updateResult(), t
                    }, [I, E]), () => I.getCurrentResult(), () => I.getCurrentResult()), s.useEffect(() => {
                        I.setOptions(b)
                    }, [b, I]), (0, l.EU)(b, g)) throw (0, l.iL)(b, I, Q);
                if ((0, h.$1)({
                        result: g,
                        errorResetBoundary: Q,
                        throwOnError: b.throwOnError,
                        query: R.getQueryCache().get(b.queryHash),
                        suspense: b.suspense
                    })) throw g.error;
                if (null == (f = R.getDefaultOptions().queries) || null == (p = f._experimental_afterQuery) || p.call(f, b, g), b.experimental_prefetchInRender && !n.S$ && (0, l.nE)(g, v)) {
                    let e = m ? (0, l.iL)(b, I, Q) : null == (y = R.getQueryCache().get(b.queryHash)) ? void 0 : y.promise;
                    null == e || e.catch(n.lQ).finally(() => {
                        I.updateResult()
                    })
                }
                return b.notifyOnChangeProps ? g : I.trackResult(g)
            }
        },
        74573: (e, t, r) => {
            r.d(t, {
                $: () => c
            });
            var s = r(28086),
                i = r(659),
                n = r(78927),
                u = r(87900),
                a = r(4306),
                h = r(80638),
                c = class extends u.Q {
                    constructor(e, t) {
                        super(), this.options = t, this.#e = e, this.#t = null, this.#r = (0, a.T)(), this.options.experimental_prefetchInRender || this.#r.reject(Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(t)
                    }#
                    e;#
                    s = void 0;#
                    i = void 0;#
                    n = void 0;#
                    u;#
                    a;#
                    r;#
                    t;#
                    h;#
                    c;#
                    l;#
                    o;#
                    d;#
                    p;#
                    f = new Set;
                    bindMethods() {
                        this.refetch = this.refetch.bind(this)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && (this.#s.addObserver(this), l(this.#s, this.options) ? this.#y() : this.updateResult(), this.#R())
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy()
                    }
                    shouldFetchOnReconnect() {
                        return o(this.#s, this.options, this.options.refetchOnReconnect)
                    }
                    shouldFetchOnWindowFocus() {
                        return o(this.#s, this.options, this.options.refetchOnWindowFocus)
                    }
                    destroy() {
                        this.listeners = new Set, this.#v(), this.#Q(), this.#s.removeObserver(this)
                    }
                    setOptions(e) {
                        let t = this.options,
                            r = this.#s;
                        if (this.options = this.#e.defaultQueryOptions(e), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, h.Eh)(this.options.enabled, this.#s)) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                        this.#b(), this.#s.setOptions(this.options), t._defaulted && !(0, h.f8)(this.options, t) && this.#e.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.#s,
                            observer: this
                        });
                        let s = this.hasListeners();
                        s && d(this.#s, r, this.options, t) && this.#y(), this.updateResult(), s && (this.#s !== r || (0, h.Eh)(this.options.enabled, this.#s) !== (0, h.Eh)(t.enabled, this.#s) || (0, h.d2)(this.options.staleTime, this.#s) !== (0, h.d2)(t.staleTime, this.#s)) && this.#m();
                        let i = this.#I();
                        s && (this.#s !== r || (0, h.Eh)(this.options.enabled, this.#s) !== (0, h.Eh)(t.enabled, this.#s) || i !== this.#p) && this.#g(i)
                    }
                    getOptimisticResult(e) {
                        var t, r;
                        let s = this.#e.getQueryCache().build(this.#e, e),
                            i = this.createResult(s, e);
                        return t = this, r = i, (0, h.f8)(t.getCurrentResult(), r) || (this.#n = i, this.#a = this.options, this.#u = this.#s.state), i
                    }
                    getCurrentResult() {
                        return this.#n
                    }
                    trackResult(e, t) {
                        return new Proxy(e, {
                            get: (e, r) => (this.trackProp(r), t ? .(r), Reflect.get(e, r))
                        })
                    }
                    trackProp(e) {
                        this.#f.add(e)
                    }
                    getCurrentQuery() {
                        return this.#s
                    }
                    refetch({ ...e
                    } = {}) {
                        return this.fetch({ ...e
                        })
                    }
                    fetchOptimistic(e) {
                        let t = this.#e.defaultQueryOptions(e),
                            r = this.#e.getQueryCache().build(this.#e, t);
                        return r.fetch().then(() => this.createResult(r, t))
                    }
                    fetch(e) {
                        return this.#y({ ...e,
                            cancelRefetch: e.cancelRefetch ? ? !0
                        }).then(() => (this.updateResult(), this.#n))
                    }#
                    y(e) {
                        this.#b();
                        let t = this.#s.fetch(this.options, e);
                        return e ? .throwOnError || (t = t.catch(h.lQ)), t
                    }#
                    m() {
                        this.#v();
                        let e = (0, h.d2)(this.options.staleTime, this.#s);
                        if (h.S$ || this.#n.isStale || !(0, h.gn)(e)) return;
                        let t = (0, h.j3)(this.#n.dataUpdatedAt, e);
                        this.#o = setTimeout(() => {
                            this.#n.isStale || this.updateResult()
                        }, t + 1)
                    }#
                    I() {
                        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#s) : this.options.refetchInterval) ? ? !1
                    }#
                    g(e) {
                        this.#Q(), this.#p = e, !h.S$ && !1 !== (0, h.Eh)(this.options.enabled, this.#s) && (0, h.gn)(this.#p) && 0 !== this.#p && (this.#d = setInterval(() => {
                            (this.options.refetchIntervalInBackground || s.m.isFocused()) && this.#y()
                        }, this.#p))
                    }#
                    R() {
                        this.#m(), this.#g(this.#I())
                    }#
                    v() {
                        this.#o && (clearTimeout(this.#o), this.#o = void 0)
                    }#
                    Q() {
                        this.#d && (clearInterval(this.#d), this.#d = void 0)
                    }
                    createResult(e, t) {
                        let r, s = this.#s,
                            i = this.options,
                            u = this.#n,
                            c = this.#u,
                            o = this.#a,
                            f = e !== s ? e.state : this.#i,
                            {
                                state: y
                            } = e,
                            R = { ...y
                            },
                            v = !1;
                        if (t._optimisticResults) {
                            let r = this.hasListeners(),
                                u = !r && l(e, t),
                                a = r && d(e, s, t, i);
                            (u || a) && (R = { ...R,
                                ...(0, n.k)(y.data, e.options)
                            }), "isRestoring" === t._optimisticResults && (R.fetchStatus = "idle")
                        }
                        let {
                            error: Q,
                            errorUpdatedAt: b,
                            status: m
                        } = R;
                        r = R.data;
                        let I = !1;
                        if (void 0 !== t.placeholderData && void 0 === r && "pending" === m) {
                            let e;
                            u ? .isPlaceholderData && t.placeholderData === o ? .placeholderData ? (e = u.data, I = !0) : e = "function" == typeof t.placeholderData ? t.placeholderData(this.#l ? .state.data, this.#l) : t.placeholderData, void 0 !== e && (m = "success", r = (0, h.pl)(u ? .data, e, t), v = !0)
                        }
                        if (t.select && void 0 !== r && !I)
                            if (u && r === c ? .data && t.select === this.#h) r = this.#c;
                            else try {
                                this.#h = t.select, r = t.select(r), r = (0, h.pl)(u ? .data, r, t), this.#c = r, this.#t = null
                            } catch (e) {
                                this.#t = e
                            }
                        this.#t && (Q = this.#t, r = this.#c, b = Date.now(), m = "error");
                        let g = "fetching" === R.fetchStatus,
                            E = "pending" === m,
                            O = "error" === m,
                            S = E && g,
                            T = void 0 !== r,
                            C = {
                                status: m,
                                fetchStatus: R.fetchStatus,
                                isPending: E,
                                isSuccess: "success" === m,
                                isError: O,
                                isInitialLoading: S,
                                isLoading: S,
                                data: r,
                                dataUpdatedAt: R.dataUpdatedAt,
                                error: Q,
                                errorUpdatedAt: b,
                                failureCount: R.fetchFailureCount,
                                failureReason: R.fetchFailureReason,
                                errorUpdateCount: R.errorUpdateCount,
                                isFetched: R.dataUpdateCount > 0 || R.errorUpdateCount > 0,
                                isFetchedAfterMount: R.dataUpdateCount > f.dataUpdateCount || R.errorUpdateCount > f.errorUpdateCount,
                                isFetching: g,
                                isRefetching: g && !E,
                                isLoadingError: O && !T,
                                isPaused: "paused" === R.fetchStatus,
                                isPlaceholderData: v,
                                isRefetchError: O && T,
                                isStale: p(e, t),
                                refetch: this.refetch,
                                promise: this.#r
                            };
                        if (this.options.experimental_prefetchInRender) {
                            let t = e => {
                                    "error" === C.status ? e.reject(C.error) : void 0 !== C.data && e.resolve(C.data)
                                },
                                r = () => {
                                    t(this.#r = C.promise = (0, a.T)())
                                },
                                i = this.#r;
                            switch (i.status) {
                                case "pending":
                                    e.queryHash === s.queryHash && t(i);
                                    break;
                                case "fulfilled":
                                    ("error" === C.status || C.data !== i.value) && r();
                                    break;
                                case "rejected":
                                    ("error" !== C.status || C.error !== i.reason) && r()
                            }
                        }
                        return C
                    }
                    updateResult() {
                        let e = this.#n,
                            t = this.createResult(this.#s, this.options);
                        this.#u = this.#s.state, this.#a = this.options, void 0 !== this.#u.data && (this.#l = this.#s), (0, h.f8)(t, e) || (this.#n = t, this.#E({
                            listeners: (() => {
                                if (!e) return !0;
                                let {
                                    notifyOnChangeProps: t
                                } = this.options, r = "function" == typeof t ? t() : t;
                                if ("all" === r || !r && !this.#f.size) return !0;
                                let s = new Set(r ? ? this.#f);
                                return this.options.throwOnError && s.add("error"), Object.keys(this.#n).some(t => this.#n[t] !== e[t] && s.has(t))
                            })()
                        }))
                    }#
                    b() {
                        let e = this.#e.getQueryCache().build(this.#e, this.options);
                        if (e === this.#s) return;
                        let t = this.#s;
                        this.#s = e, this.#i = e.state, this.hasListeners() && (t ? .removeObserver(this), e.addObserver(this))
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && this.#R()
                    }#
                    E(e) {
                        i.jG.batch(() => {
                            e.listeners && this.listeners.forEach(e => {
                                e(this.#n)
                            }), this.#e.getQueryCache().notify({
                                query: this.#s,
                                type: "observerResultsUpdated"
                            })
                        })
                    }
                };

            function l(e, t) {
                return !1 !== (0, h.Eh)(t.enabled, e) && void 0 === e.state.data && ("error" !== e.state.status || !1 !== t.retryOnMount) || void 0 !== e.state.data && o(e, t, t.refetchOnMount)
            }

            function o(e, t, r) {
                if (!1 !== (0, h.Eh)(t.enabled, e) && "static" !== (0, h.d2)(t.staleTime, e)) {
                    let s = "function" == typeof r ? r(e) : r;
                    return "always" === s || !1 !== s && p(e, t)
                }
                return !1
            }

            function d(e, t, r, s) {
                return (e !== t || !1 === (0, h.Eh)(s.enabled, e)) && (!r.suspense || "error" !== e.state.status) && p(e, r)
            }

            function p(e, t) {
                return !1 !== (0, h.Eh)(t.enabled, e) && e.isStaleByTime((0, h.d2)(t.staleTime, e))
            }
        }
    }
]);
//# sourceMappingURL=42275-4c661b42bf5f4cde.js.map