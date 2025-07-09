"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [47491], {
        312: (e, t, n) => {
            n.d(t, {
                D: () => s
            });
            var r = n(34321),
                o = n(72904),
                i = n(40784),
                a = n(25860);

            function s(e) {
                var t = {},
                    n = new a.c,
                    s = {
                        getContext: function() {
                            return (0, r.Go)(t)
                        },
                        setContext: function(r) {
                            "object" === (0, o.P)(r) ? (t = (0, i.a)(r), null == e || e.updateCustomerData(t)) : s.clearContext(), n.notify()
                        },
                        setContextProperty: function(r, o) {
                            t[r] = (0, i.a)(o), null == e || e.updateCustomerData(t), n.notify()
                        },
                        removeContextProperty: function(r) {
                            delete t[r], null == e || e.updateCustomerData(t), n.notify()
                        },
                        clearContext: function() {
                            t = {}, null == e || e.resetCustomerData(), n.notify()
                        },
                        changeObservable: n
                    };
                return s
            }
        },
        1741: (e, t, n) => {
            n.d(t, {
                q: () => r
            });

            function r() {
                var e, t = window.navigator;
                return {
                    status: t.onLine ? "connected" : "not_connected",
                    interfaces: t.connection && t.connection.type ? [t.connection.type] : void 0,
                    effective_type: null == (e = t.connection) ? void 0 : e.effectiveType
                }
            }
        },
        4725: (e, t, n) => {
            n.d(t, {
                C$: () => c,
                Og: () => s,
                x8: () => a
            });
            var r = n(5437),
                o = n(72904),
                i = n(23325);

            function a(e) {
                var t = (0, i.kp)({}, e);
                return ["id", "name", "email"].forEach(function(e) {
                    e in t && (t[e] = String(t[e]))
                }), t
            }

            function s(e) {
                var t = "object" === (0, o.P)(e);
                return t || r.Vy.error("Unsupported user:", e), t
            }

            function c() {
                return Math.floor(0x20000000000000 * Math.random()).toString(36)
            }
        },
        5167: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var r = n(12542);

            function o() {
                var e = "",
                    t = 0;
                return {
                    isAsync: !1,
                    get isEmpty() {
                        return !e
                    },
                    write: function(n, o) {
                        var i = (0, r.WW)(n);
                        t += i, e += n, o && o(i)
                    },
                    finish: function(e) {
                        e(this.finishSync())
                    },
                    finishSync: function() {
                        var n = {
                            output: e,
                            outputBytesCount: t,
                            rawBytesCount: t,
                            pendingData: ""
                        };
                        return e = "", t = 0, n
                    },
                    estimateEncodedBytesCount: function(e) {
                        return e.length
                    }
                }
            }
        },
        5437: (e, t, n) => {
            n.d(t, {
                JZ: () => o,
                Vy: () => s,
                Xs: () => u,
                Z9: () => i,
                bP: () => r,
                fH: () => c,
                xG: () => d
            });
            var r = {
                    log: "log",
                    debug: "debug",
                    info: "info",
                    warn: "warn",
                    error: "error"
                },
                o = console,
                i = {};
            Object.keys(r).forEach(function(e) {
                i[e] = o[e]
            });
            var a = "Datadog Browser SDK:",
                s = {
                    debug: i.debug.bind(o, a),
                    log: i.log.bind(o, a),
                    info: i.info.bind(o, a),
                    warn: i.warn.bind(o, a),
                    error: i.error.bind(o, a)
                },
                c = "https://docs.datadoghq.com",
                u = "".concat(c, "/real_user_monitoring/browser/troubleshooting"),
                d = "More details:"
        },
        6124: (e, t, n) => {
            n.d(t, {
                ox: () => p
            });
            var r = n(25860),
                o = n(17170),
                i = n(18435),
                a = n(86969),
                s = n(92594),
                c = n(45882),
                u = n(14807),
                d = i.iW,
                f = c.AQ,
                l = [];

            function p(e, t, n, c) {
                var p, v, g, m, y, h, b, S, w, k, C, _ = new r.c,
                    x = new r.c,
                    E = (0, u.oC)(e.sessionStoreStrategyType, t, n);
                l.push(function() {
                    return E.stop()
                });
                var O = (0, o.q)({
                    expireDelay: f
                });

                function T() {
                    return {
                        id: E.getSession().id,
                        trackingType: E.getSession()[t],
                        isReplayForced: !!E.getSession().forcedReplay,
                        anonymousId: E.getSession().anonymousId
                    }
                }
                return l.push(function() {
                    return O.stop()
                }), E.renewObservable.subscribe(function() {
                    O.add(T(), (0, i.$S)()), _.notify()
                }), E.expireObservable.subscribe(function() {
                    x.notify(), O.closeActive((0, i.$S)())
                }), E.expandOrRenewSession(), O.add(T(), (0, i.Oc)().relative), c.observable.subscribe(function() {
                    c.isGranted() ? E.expandOrRenewSession() : E.expire()
                }), p = e, v = function() {
                    c.isGranted() && E.expandOrRenewSession()
                }, g = (0, a.l)(p, window, ["click", "touchstart", "keydown", "scroll"], v, {
                    capture: !0,
                    passive: !0
                }).stop, l.push(g), m = e, y = function() {
                    return E.expandSession()
                }, h = function() {
                    "visible" === document.visibilityState && y()
                }, b = (0, a.q)(m, document, "visibilitychange", h).stop, l.push(b), S = (0, s.yb)(h, d), l.push(function() {
                    (0, s.vG)(S)
                }), w = e, k = function() {
                    return E.restartSession()
                }, C = (0, a.q)(w, window, "resume", k, {
                    capture: !0
                }).stop, l.push(C), {
                    findSession: function(e, t) {
                        return O.find(e, t)
                    },
                    renewObservable: _,
                    expireObservable: x,
                    sessionStateUpdateObservable: E.sessionStateUpdateObservable,
                    expire: E.expire,
                    updateSessionState: E.updateSessionState
                }
            }
        },
        6769: (e, t, n) => {
            n.d(t, {
                A: () => i,
                R: () => o
            });
            var r = n(23325);

            function o(e) {
                var t = new Set;
                return e.forEach(function(e) {
                    return t.add(e)
                }), (0, r.A6)(t)
            }

            function i(e, t) {
                var n = e.indexOf(t);
                n >= 0 && e.splice(n, 1)
            }
        },
        7215: (e, t, n) => {
            function r(e) {
                return e ? (parseInt(e, 10) ^ 16 * Math.random() >> parseInt(e, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, r)
            }
            n.d(t, {
                _R: () => s,
                it: () => a,
                lk: () => r,
                rx: () => i
            });
            var o = /([\w-]+)\s*=\s*([^;]+)/g;

            function i(e, t) {
                for (o.lastIndex = 0;;) {
                    var n = o.exec(e);
                    if (n) {
                        if (n[1] === t) return n[2]
                    } else break
                }
            }

            function a(e) {
                var t = new Map;
                for (o.lastIndex = 0;;) {
                    var n = o.exec(e);
                    if (n) t.set(n[1], n[2]);
                    else break
                }
                return t
            }

            function s(e, t, n) {
                void 0 === n && (n = "");
                var r = e.charCodeAt(t - 1),
                    o = r >= 55296 && r <= 56319 ? t + 1 : t;
                return e.length <= o ? e : "".concat(e.slice(0, o)).concat(n)
            }
        },
        12542: (e, t, n) => {
            n.d(t, {
                WW: () => a,
                _m: () => r,
                iH: () => o,
                wh: () => s
            });
            var r = 1024,
                o = 1048576,
                i = /[^\u0000-\u007F]/;

            function a(e) {
                return i.test(e) ? void 0 !== window.TextEncoder ? new TextEncoder().encode(e).length : new Blob([e]).size : e.length
            }

            function s(e) {
                for (var t = new Uint8Array(e.reduce(function(e, t) {
                        return e + t.length
                    }, 0)), n = 0, r = 0; r < e.length; r++) {
                    var o = e[r];
                    t.set(o, n), n += o.length
                }
                return t
            }
        },
        13691: (e, t, n) => {
            n.d(t, {
                V: () => r
            });

            function r() {
                if ("object" == typeof globalThis) return globalThis;
                Object.defineProperty(Object.prototype, "_dd_temp_", {
                    get: function() {
                        return this
                    },
                    configurable: !0
                });
                var e = _dd_temp_;
                return delete Object.prototype._dd_temp_, "object" != typeof e && (e = "object" == typeof self ? self : "object" == typeof window ? window : {}), e
            }
        },
        14807: (e, t, n) => {
            n.d(t, {
                nd: () => D,
                oC: () => B
            });
            var r, o = n(92594),
                i = n(25860),
                a = n(18435),
                s = n(37420),
                c = n(7215),
                u = n(23325),
                d = n(5437),
                f = n(62864),
                l = n(27568),
                p = n(74742),
                v = "_dd_s",
                g = n(69853),
                m = n(4725),
                y = n(45882),
                h = /^([a-zA-Z]+)=([a-z0-9-]+)$/;

            function b(e) {
                var t = {
                    isExpired: "1"
                };
                return (0, l.sr)(l.R9.ANONYMOUS_USER_TRACKING) && ((null == e ? void 0 : e.anonymousId) ? t.anonymousId = null == e ? void 0 : e.anonymousId : t.anonymousId = (0, m.C$)()), t
            }

            function S(e) {
                return (0, g.RI)(e)
            }

            function w(e) {
                var t;
                return void 0 !== e.isExpired || !((void 0 === (t = e).created || (0, a.x3)() - Number(t.created) < y.AQ) && (void 0 === t.expire || (0, a.x3)() < Number(t.expire)))
            }

            function k(e) {
                e.expire = String((0, a.x3)() + y.HB)
            }

            function C(e) {
                return (0, u.WP)(e).map(function(e) {
                    var t = e[0],
                        n = e[1];
                    return "anonymousId" === t ? "aid=".concat(n) : "".concat(t, "=").concat(n)
                }).join("&")
            }

            function _(e) {
                var t = {};
                return e && (-1 !== e.indexOf("&") || h.test(e)) && e.split("&").forEach(function(e) {
                    var n = h.exec(e);
                    if (null !== n) {
                        var r = n[1],
                            o = n[2];
                        "aid" === r ? t.anonymousId = o : t[r] = o
                    }
                }), t
            }

            function x(e) {
                var t, n, r = ((n = {}).secure = !!(t = e).useSecureSessionCookie || !!t.usePartitionedCrossSiteSessionCookie || !!t.useCrossSiteSessionCookie, n.crossSite = !!t.usePartitionedCrossSiteSessionCookie || !!t.useCrossSiteSessionCookie, n.partitioned = !!t.usePartitionedCrossSiteSessionCookie, t.trackSessionAcrossSubdomains && (n.domain = (0, p.DQ)()), n);
                return (0, p.z$)(r) ? {
                    type: y.Q_.COOKIE,
                    cookieOptions: r
                } : void 0
            }

            function E() {
                return _((0, p.Ri)(v))
            }

            function O() {
                try {
                    var e = (0, c.lk)(),
                        t = "".concat("_dd_test_").concat(e);
                    localStorage.setItem(t, e);
                    var n = localStorage.getItem(t);
                    return localStorage.removeItem(t), e === n ? {
                        type: y.Q_.LOCAL_STORAGE
                    } : void 0
                } catch (e) {
                    return
                }
            }

            function T(e) {
                localStorage.setItem(v, C(e))
            }

            function R() {
                return _(localStorage.getItem(v))
            }

            function A(e) {
                T(b(e))
            }
            var L = [];

            function P(e, t, n) {
                void 0 === n && (n = 0);
                var o, i, a = t.isLockEnabled,
                    s = t.persistSession,
                    d = t.expireSession,
                    f = function(e) {
                        return s((0, u.kp)({}, e, {
                            lock: i
                        }))
                    },
                    l = function() {
                        var e = t.retrieveSession(),
                            n = e.lock;
                        return e.lock && delete e.lock, {
                            session: e,
                            lock: n
                        }
                    };
                if (r || (r = e), e !== r) return void L.push(e);
                if (a && n >= 100) return void N(t);
                var p = l();
                if (a && (p.lock || (i = (0, c.lk)(), f(p.session), (p = l()).lock !== i))) return void I(e, t, n);
                var v = e.process(p.session);
                if (a && (p = l()).lock !== i) return void I(e, t, n);
                if (v && (w(v) ? d(v) : (k(v), a ? f(v) : s(v))), a && !(v && w(v))) {
                    if ((p = l()).lock !== i) return void I(e, t, n);
                    s(p.session), v = p.session
                }
                null == (o = e.after) || o.call(e, v || p.session), N(t)
            }

            function I(e, t, n) {
                (0, o.wg)(function() {
                    P(e, t, n + 1)
                }, 10)
            }

            function N(e) {
                r = void 0;
                var t = L.shift();
                t && P(t, e)
            }
            var M = a.OY;

            function D(e) {
                switch (e.sessionPersistence) {
                    case y.Q_.COOKIE:
                        return x(e);
                    case y.Q_.LOCAL_STORAGE:
                        return O();
                    case void 0:
                        var t = x(e);
                        return !t && e.allowFallbackToLocalStorage && (t = O()), t;
                    default:
                        d.Vy.error("Invalid session persistence '".concat(String(e.sessionPersistence), "'"))
                }
            }

            function B(e, t, n) {
                var r, d = new i.c,
                    g = new i.c,
                    m = new i.c,
                    h = e.type === y.Q_.COOKIE ? function(e) {
                        var t, n = {
                            isLockEnabled: (0, f.F2)(),
                            persistSession: (t = e, function(e) {
                                (0, p.TV)(v, C(e), y.HB, t)
                            }),
                            retrieveSession: E,
                            expireSession: function(t) {
                                var n, r;
                                return n = e, r = b(t), void(0, p.TV)(v, C(r), (0, l.sr)(l.R9.ANONYMOUS_USER_TRACKING) ? y._P : y.AQ, n)
                            }
                        };
                        if (!(0, p.B9)(v)) {
                            var r = (0, p.B9)("_dd"),
                                o = (0, p.B9)("_dd_r"),
                                i = (0, p.B9)("_dd_l"),
                                a = {};
                            r && (a.id = r), i && /^[01]$/.test(i) && (a.logs = i), o && /^[012]$/.test(o) && (a.rum = o), S(a) || (k(a), n.persistSession(a))
                        }
                        return n
                    }(e.cookieOptions) : {
                        isLockEnabled: !1,
                        persistSession: T,
                        retrieveSession: R,
                        expireSession: A
                    },
                    _ = h.expireSession,
                    x = (0, o.yb)(function() {
                        P({
                            process: function(e) {
                                return w(e) ? b(e) : void 0
                            },
                            after: N
                        }, h)
                    }, M);
                D();
                var O = (0, s.n)(function() {
                        P({
                            process: function(e) {
                                if (!S(e)) {
                                    var r = N(e);
                                    return function(e) {
                                        if (!S(e)) {
                                            var r = n(e[t]),
                                                o = r.trackingType,
                                                i = r.isTracked;
                                            e[t] = o, delete e.isExpired, i && !e.id && (e.id = (0, c.lk)(), e.created = String((0, a.x3)()))
                                        }
                                    }(r), r
                                }
                            },
                            after: function(e) {
                                S(e) || B() || (r = e, d.notify()), r = e
                            }
                        }, h)
                    }, M),
                    L = O.throttled,
                    I = O.cancel;

                function N(e) {
                    var n;
                    return w(e) && (e = b(e)), B() && ((n = e, r.id !== n.id || r[t] !== n[t]) ? (r = b(r), g.notify()) : (m.notify({
                        previousState: r,
                        newState: e
                    }), r = e)), e
                }

                function D() {
                    P({
                        process: function(e) {
                            if (S(e)) return b(e)
                        },
                        after: function(e) {
                            r = e
                        }
                    }, h)
                }

                function B() {
                    return void 0 !== r[t]
                }
                return {
                    expandOrRenewSession: L,
                    expandSession: function() {
                        P({
                            process: function(e) {
                                return B() ? N(e) : void 0
                            }
                        }, h)
                    },
                    getSession: function() {
                        return r
                    },
                    renewObservable: d,
                    expireObservable: g,
                    sessionStateUpdateObservable: m,
                    restartSession: D,
                    expire: function() {
                        I(), _(r), N(b(r))
                    },
                    stop: function() {
                        (0, o.vG)(x)
                    },
                    updateSessionState: function(e) {
                        P({
                            process: function(t) {
                                return (0, u.kp)({}, t, e)
                            },
                            after: N
                        }, h)
                    }
                }
            }
        },
        15434: (e, t, n) => {
            n.d(t, {
                mj: () => c
            });
            var r = n(16741),
                o = n(18435),
                i = n(26963),
                a = n(78457),
                s = n(67338);

            function c(e) {
                var t, n, c = function(t, n) {
                        var r = (0, a.As)({
                            stackTrace: t,
                            originalError: n,
                            startClocks: (0, o.M8)(),
                            nonErrorPrefix: "Uncaught",
                            source: s.g.SOURCE,
                            handling: "unhandled"
                        });
                        e.notify(r)
                    },
                    u = (t = c, (0, r.H)(window, "onerror", function(e) {
                        var n, r = e.parameters,
                            o = r[0],
                            s = r[1],
                            c = r[2],
                            u = r[3],
                            d = r[4];
                        t((0, a.bJ)(d) ? (0, i.T)(d) : (0, i.h)(o, s, c, u), null != d ? d : o)
                    })).stop,
                    d = (n = c, (0, r.H)(window, "onunhandledrejection", function(e) {
                        var t = e.parameters[0].reason || "Empty reason";
                        n((0, i.T)(t), t)
                    })).stop;
                return {
                    stop: function() {
                        u(), d()
                    }
                }
            }
        },
        16741: (e, t, n) => {
            n.d(t, {
                H: () => c,
                t: () => u
            });
            var r = n(92594),
                o = n(61893),
                i = n(37420),
                a = n(23325),
                s = n(18932);

            function c(e, t, n, r) {
                var c = (void 0 === r ? {} : r).computeHandlingStack,
                    u = e[t];
                if ("function" != typeof u)
                    if (!(t in e && (0, a.w1)(t, "on"))) return {
                        stop: i.l
                    };
                    else u = i.l;
                var d = !1,
                    f = function() {
                        if (d) return u.apply(this, arguments);
                        var e, t = (0, a.A6)(arguments);
                        (0, o.um)(n, null, [{
                            target: this,
                            parameters: t,
                            onPostCall: function(t) {
                                e = t
                            },
                            handlingStack: c ? (0, s.uC)() : void 0
                        }]);
                        var r = u.apply(this, t);
                        return e && (0, o.um)(e, null, [r]), r
                    };
                return e[t] = f, {
                    stop: function() {
                        d = !0, e[t] === f && (e[t] = u)
                    }
                }
            }

            function u(e, t, n) {
                var o = Object.getOwnPropertyDescriptor(e, t);
                if (!o || !o.set || !o.configurable) return {
                    stop: i.l
                };
                var a = i.l,
                    s = function(e, t) {
                        (0, r.wg)(function() {
                            s !== a && n(e, t)
                        }, 0)
                    },
                    c = function(e) {
                        o.set.call(this, e), s(this, e)
                    };
                return Object.defineProperty(e, t, {
                    set: c
                }), {
                    stop: function() {
                        var n;
                        (null == (n = Object.getOwnPropertyDescriptor(e, t)) ? void 0 : n.set) === c && Object.defineProperty(e, t, o), s = a
                    }
                }
            }
        },
        17170: (e, t, n) => {
            n.d(t, {
                q: () => c
            });
            var r = n(92594),
                o = n(6769),
                i = n(18435),
                a = 1 / 0,
                s = i.iW;

            function c(e) {
                var t = e.expireDelay,
                    n = e.maxEntries,
                    c = [],
                    u = (0, r.yb)(function() {
                        for (var e = (0, i.$S)() - t; c.length > 0 && c[c.length - 1].endTime < e;) c.pop()
                    }, s);
                return {
                    add: function(e, t) {
                        var r = {
                            value: e,
                            startTime: t,
                            endTime: a,
                            remove: function() {
                                (0, o.A)(c, r)
                            },
                            close: function(e) {
                                r.endTime = e
                            }
                        };
                        return n && c.length >= n && c.pop(), c.unshift(r), r
                    },
                    find: function(e, t) {
                        void 0 === e && (e = a), void 0 === t && (t = {
                            returnInactive: !1
                        });
                        for (var n = 0, r = c; n < r.length; n++) {
                            var o = r[n];
                            if (o.startTime <= e) {
                                if (t.returnInactive || e <= o.endTime) return o.value;
                                break
                            }
                        }
                    },
                    closeActive: function(e) {
                        var t = c[0];
                        t && t.endTime === a && t.close(e)
                    },
                    findAll: function(e, t) {
                        void 0 === e && (e = a), void 0 === t && (t = 0);
                        var n = (0, i.Gw)(e, t);
                        return c.filter(function(t) {
                            return t.startTime <= n && e <= t.endTime
                        }).map(function(e) {
                            return e.value
                        })
                    },
                    reset: function() {
                        c = []
                    },
                    stop: function() {
                        (0, r.vG)(u)
                    }
                }
            }
        },
        18435: (e, t, n) => {
            n.d(t, {
                $H: () => c,
                $S: () => g,
                FR: () => u,
                Gw: () => b,
                M8: () => m,
                MA: () => s,
                OY: () => i,
                Oc: () => y,
                TP: () => f,
                Zj: () => l,
                gs: () => S,
                iW: () => a,
                jR: () => d,
                nx: () => v,
                pu: () => w,
                vk: () => h,
                x3: () => p
            });
            var r, o = n(95463),
                i = 1e3,
                a = 6e4,
                s = 36e5,
                c = 31536e6;

            function u(e) {
                var t, n, r;
                return {
                    relative: e,
                    timeStamp: (t = e, (n = p() - performance.now()) > k() ? Math.round(function(e, t) {
                        return e + t
                    }(n, t)) : (r = t, Math.round(k() + r)))
                }
            }

            function d(e) {
                return {
                    relative: S(e),
                    timeStamp: e
                }
            }

            function f() {
                var e;
                return Math.round(p() - (e = k(), e + performance.now()))
            }

            function l(e) {
                return (0, o.Et)(e) ? (0, o.LI)(1e6 * e, 0) : e
            }

            function p() {
                return new Date().getTime()
            }

            function v() {
                return p()
            }

            function g() {
                return performance.now()
            }

            function m() {
                return {
                    relative: g(),
                    timeStamp: v()
                }
            }

            function y() {
                return {
                    relative: 0,
                    timeStamp: k()
                }
            }

            function h(e, t) {
                return t - e
            }

            function b(e, t) {
                return e + t
            }

            function S(e) {
                return e - k()
            }

            function w(e) {
                return e < c
            }

            function k() {
                return void 0 === r && (r = performance.timing.navigationStart), r
            }
        },
        18620: (e, t, n) => {
            n.d(t, {
                Z: () => c,
                m: () => s
            });
            var r = n(26928),
                o = n(61893),
                i = n(23325),
                a = n(5437);

            function s(e) {
                var t = (0, i.kp)({
                    version: "5.35.1",
                    onReady: function(e) {
                        e()
                    }
                }, e);
                return Object.defineProperty(t, "_setDebug", {
                    get: function() {
                        return o.pM
                    },
                    enumerable: !1
                }), t
            }

            function c(e, t, n) {
                var o = e[t];
                o && !o.q && o.version && a.Vy.warn("SDK is loaded more than once. This is unsupported and might have unexpected behavior."), e[t] = n, o && o.q && o.q.forEach(function(e) {
                    return (0, r.y)(e, "onReady callback threw an error:")()
                })
            }
        },
        18932: (e, t, n) => {
            n.d(t, {
                NR: () => c,
                Yn: () => s,
                uC: () => a
            });
            var r = n(61893),
                o = n(37420),
                i = n(26963);

            function a() {
                var e, t = Error();
                if (!t.stack) try {
                    throw t
                } catch (e) {
                    (0, o.l)()
                }
                return (0, r.um)(function() {
                    var n = (0, i.T)(t);
                    n.stack = n.stack.slice(2), e = s(n)
                }), e
            }

            function s(e) {
                var t = c(e);
                return e.stack.forEach(function(e) {
                    var n = "?" === e.func ? "<anonymous>" : e.func,
                        r = e.args && e.args.length > 0 ? "(".concat(e.args.join(", "), ")") : "",
                        o = e.line ? ":".concat(e.line) : "",
                        i = e.line && e.column ? ":".concat(e.column) : "";
                    t += "\n  at ".concat(n).concat(r, " @ ").concat(e.url).concat(o).concat(i)
                }), t
            }

            function c(e) {
                return "".concat(e.name || "Error", ": ").concat(e.message)
            }
        },
        20715: (e, t, n) => {
            n.d(t, {
                X6: () => a,
                aj: () => i,
                ao: () => o
            });
            var r = n(74742);

            function o() {
                return !!(window._DATADOG_SYNTHETICS_INJECTS_RUM || (0, r.B9)("datadog-synthetics-injects-rum"))
            }

            function i() {
                var e = window._DATADOG_SYNTHETICS_PUBLIC_ID || (0, r.B9)("datadog-synthetics-public-id");
                return "string" == typeof e ? e : void 0
            }

            function a() {
                var e = window._DATADOG_SYNTHETICS_RESULT_ID || (0, r.B9)("datadog-synthetics-result-id");
                return "string" == typeof e ? e : void 0
            }
        },
        21495: (e, t, n) => {
            n.d(t, {
                $A: () => c,
                Bb: () => r,
                Ih: () => u,
                NW: () => i,
                R8: () => s,
                TC: () => o,
                dV: () => a
            });
            var r = "datad0g.com",
                o = "dd0g-gov.com",
                i = "datadoghq.com",
                a = "datadoghq.eu",
                s = "ddog-gov.com",
                c = "pci.browser-intake-datadoghq.com",
                u = ["ddsource", "ddtags"]
        },
        23325: (e, t, n) => {
            function r(e, t) {
                return -1 !== e.indexOf(t)
            }

            function o(e) {
                if (Array.from) return Array.from(e);
                var t = [];
                if (e instanceof Set) e.forEach(function(e) {
                    return t.push(e)
                });
                else
                    for (var n = 0; n < e.length; n++) t.push(e[n]);
                return t
            }

            function i(e, t) {
                for (var n = 0; n < e.length; n += 1) {
                    var r = e[n];
                    if (t(r, n)) return r
                }
            }

            function a(e, t) {
                for (var n = e.length - 1; n >= 0; n -= 1) {
                    var r = e[n];
                    if (t(r, n, e)) return r
                }
            }

            function s(e, t) {
                Array.prototype.forEach.call(e, t)
            }

            function c(e) {
                return Object.keys(e).map(function(t) {
                    return e[t]
                })
            }

            function u(e) {
                return Object.keys(e).map(function(t) {
                    return [t, e[t]]
                })
            }

            function d(e, t) {
                return e.slice(0, t.length) === t
            }

            function f(e, t) {
                return e.slice(-t.length) === t
            }

            function l(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.forEach(function(t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }), e
            }
            n.d(t, {
                A6: () => o,
                I6: () => i,
                KQ: () => c,
                Uk: () => a,
                WP: () => u,
                d5: () => f,
                jJ: () => s,
                kp: () => l,
                mK: () => r,
                w1: () => d
            })
        },
        25113: (e, t, n) => {
            function r(e) {
                return e >= 500
            }

            function o(e) {
                try {
                    return e.clone()
                } catch (e) {
                    return
                }
            }
            n.d(t, {
                G: () => r,
                i: () => o
            })
        },
        25860: (e, t, n) => {
            n.d(t, {
                F: () => o,
                c: () => r
            });
            var r = function() {
                function e(e) {
                    this.onFirstSubscribe = e, this.observers = []
                }
                return e.prototype.subscribe = function(e) {
                    var t = this;
                    return this.observers.push(e), 1 === this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe(this) || void 0), {
                        unsubscribe: function() {
                            t.observers = t.observers.filter(function(t) {
                                return e !== t
                            }), !t.observers.length && t.onLastUnsubscribe && t.onLastUnsubscribe()
                        }
                    }
                }, e.prototype.notify = function(e) {
                    this.observers.forEach(function(t) {
                        return t(e)
                    })
                }, e
            }();

            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new r(function(t) {
                    var n = e.map(function(e) {
                        return e.subscribe(function(e) {
                            return t.notify(e)
                        })
                    });
                    return function() {
                        return n.forEach(function(e) {
                            return e.unsubscribe()
                        })
                    }
                })
            }
        },
        26928: (e, t, n) => {
            n.d(t, {
                y: () => o
            });
            var r = n(5437);

            function o(e, t) {
                return function() {
                    for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                    try {
                        return e.apply(void 0, n)
                    } catch (e) {
                        r.Vy.error(t, e)
                    }
                }
            }
        },
        26963: (e, t, n) => {
            n.d(t, {
                T: () => o,
                h: () => v
            });
            var r = n(23325);

            function o(e) {
                var t = [],
                    n = p(e, "stack"),
                    o = String(e);
                return n && (0, r.w1)(n, o) && (n = n.slice(o.length)), n && n.split("\n").forEach(function(e) {
                    var n = function(e) {
                        var t = s.exec(e);
                        if (t) {
                            var n = t[2] && 0 === t[2].indexOf("native"),
                                r = t[2] && 0 === t[2].indexOf("eval"),
                                o = c.exec(t[2]);
                            return r && o && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
                                args: n ? [t[2]] : [],
                                column: t[4] ? +t[4] : void 0,
                                func: t[1] || "?",
                                line: t[3] ? +t[3] : void 0,
                                url: n ? void 0 : t[2]
                            }
                        }
                    }(e) || function(e) {
                        var t = u.exec(e);
                        if (t) return {
                            args: [],
                            column: t[3] ? +t[3] : void 0,
                            func: "?",
                            line: t[2] ? +t[2] : void 0,
                            url: t[1]
                        }
                    }(e) || function(e) {
                        var t = d.exec(e);
                        if (t) return {
                            args: [],
                            column: t[4] ? +t[4] : void 0,
                            func: t[1] || "?",
                            line: +t[3],
                            url: t[2]
                        }
                    }(e) || function(e) {
                        var t = f.exec(e);
                        if (t) {
                            var n = t[3] && t[3].indexOf(" > eval") > -1,
                                r = l.exec(t[3]);
                            return n && r && (t[3] = r[1], t[4] = r[2], t[5] = void 0), {
                                args: t[2] ? t[2].split(",") : [],
                                column: t[5] ? +t[5] : void 0,
                                func: t[1] || "?",
                                line: t[4] ? +t[4] : void 0,
                                url: t[3]
                            }
                        }
                    }(e);
                    n && (!n.func && n.line && (n.func = "?"), t.push(n))
                }), {
                    message: p(e, "message"),
                    name: p(e, "name"),
                    stack: t
                }
            }
            var i = "((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|snippet|<anonymous>|\\w+\\.|\\/).*?)",
                a = "(?::(\\d+))",
                s = RegExp("^\\s*at (.*?) ?\\(".concat(i).concat(a, "?").concat(a, "?\\)?\\s*$"), "i"),
                c = new RegExp("\\((\\S*)".concat(a).concat(a, "\\)")),
                u = RegExp("^\\s*at ?".concat(i).concat(a, "?").concat(a, "??\\s*$"), "i"),
                d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                f = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

            function p(e, t) {
                if ("object" == typeof e && e && t in e) {
                    var n = e[t];
                    return "string" == typeof n ? n : void 0
                }
            }

            function v(e, t, n, r) {
                var o, i, a, s, c = (o = e, "[object String]" === ({}).toString.call(o) && (a = (i = g.exec(o))[1], s = i[2]), {
                    name: a,
                    message: s
                });
                return {
                    name: c.name,
                    message: c.message,
                    stack: [{
                        url: t,
                        column: r,
                        line: n
                    }]
                }
            }
            var g = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/
        },
        27568: (e, t, n) => {
            n.d(t, {
                Aq: () => a,
                R9: () => r,
                q7: () => c,
                sr: () => s
            });
            var r, o = n(69853);
            ! function(e) {
                e.WRITABLE_RESOURCE_GRAPHQL = "writable_resource_graphql", e.REMOTE_CONFIGURATION = "remote_configuration", e.LONG_ANIMATION_FRAME = "long_animation_frame", e.ANONYMOUS_USER_TRACKING = "anonymous_user_tracking", e.ACTION_NAME_MASKING = "action_name_masking", e.CONSISTENT_TRACE_SAMPLING = "consistent_trace_sampling", e.DELAY_VIEWPORT_COLLECTION = "delay_viewport_collection"
            }(r || (r = {}));
            var i = new Set;

            function a(e) {
                Array.isArray(e) && e.filter(function(e) {
                    return (0, o.Rj)(r, e)
                }).forEach(function(e) {
                    i.add(e)
                })
            }

            function s(e) {
                return i.has(e)
            }

            function c() {
                return i
            }
        },
        29005: (e, t, n) => {
            n.d(t, {
                i: () => d
            });
            var r, o = n(16741),
                i = n(61893),
                a = n(25860),
                s = n(23325),
                c = n(18435),
                u = n(51491);

            function d() {
                return r || (r = new a.c(function(e) {
                    if (window.fetch) return (0, o.H)(window, "fetch", function(t) {
                        var n, r, o, a, d, f, l, p, v, g, m;
                        return n = t, r = e, o = n.parameters, a = n.onPostCall, d = n.handlingStack, f = o[0], void 0 === (p = (l = o[1]) && l.method) && f instanceof Request && (p = f.method), v = void 0 !== p ? String(p).toUpperCase() : "GET", g = f instanceof Request ? f.url : (0, u.l2)(String(f)), m = {
                            state: "start",
                            init: l,
                            input: f,
                            method: v,
                            startClocks: (0, c.M8)(),
                            url: g,
                            handlingStack: d
                        }, void(r.notify(m), o[0] = m.input, o[1] = m.init, a(function(e) {
                            var t = r,
                                n = e,
                                o = m;

                            function a(e) {
                                o.state = "resolve", (0, s.kp)(o, e), t.notify(o)
                            }
                            n.then((0, i.dm)(function(e) {
                                a({
                                    response: e,
                                    responseType: e.type,
                                    status: e.status,
                                    isAborted: !1
                                })
                            }), (0, i.dm)(function(e) {
                                var t, n;
                                a({
                                    status: 0,
                                    isAborted: (null == (n = null == (t = o.init) ? void 0 : t.signal) ? void 0 : n.aborted) || e instanceof DOMException && e.code === DOMException.ABORT_ERR,
                                    error: e
                                })
                            }))
                        }))
                    }, {
                        computeHandlingStack: !0
                    }).stop
                })), r
            }
        },
        33940: (e, t, n) => {
            n.d(t, {
                _: () => i
            });
            var r = n(61893),
                o = n(37420);

            function i(e, t, n) {
                var i = e.getReader(),
                    a = [],
                    s = 0;

                function c() {
                    if (i.cancel().catch(o.l), n.collectStreamBody) {
                        if (1 === a.length) c = a[0];
                        else {
                            var e, r, c = new Uint8Array(s),
                                u = 0;
                            a.forEach(function(e) {
                                c.set(e, u), u += e.length
                            })
                        }
                        e = c.slice(0, n.bytesLimit), r = c.length > n.bytesLimit
                    }
                    t(void 0, e, r)
                }! function e() {
                    i.read().then((0, r.dm)(function(t) {
                        if (t.done) return void c();
                        n.collectStreamBody && a.push(t.value), (s += t.value.length) > n.bytesLimit ? c() : e()
                    }), (0, r.dm)(function(e) {
                        return t(e)
                    }))
                }()
            }
        },
        34321: (e, t, n) => {
            n.d(t, {
                Go: () => i,
                kg: () => a
            });
            var r = n(72904);

            function o(e, t, n) {
                if (void 0 === n && (n = function() {
                        if ("undefined" != typeof WeakSet) {
                            var e = new WeakSet;
                            return {
                                hasAlreadyBeenSeen: function(t) {
                                    var n = e.has(t);
                                    return n || e.add(t), n
                                }
                            }
                        }
                        var t = [];
                        return {
                            hasAlreadyBeenSeen: function(e) {
                                var n = t.indexOf(e) >= 0;
                                return n || t.push(e), n
                            }
                        }
                    }()), void 0 === t) return e;
                if ("object" != typeof t || null === t) return t;
                if (t instanceof Date) return new Date(t.getTime());
                if (t instanceof RegExp) {
                    var i = t.flags || [t.global ? "g" : "", t.ignoreCase ? "i" : "", t.multiline ? "m" : "", t.sticky ? "y" : "", t.unicode ? "u" : ""].join("");
                    return new RegExp(t.source, i)
                }
                if (!n.hasAlreadyBeenSeen(t)) {
                    if (Array.isArray(t)) {
                        for (var a = Array.isArray(e) ? e : [], s = 0; s < t.length; ++s) a[s] = o(a[s], t[s], n);
                        return a
                    }
                    var c = "object" === (0, r.P)(e) ? e : {};
                    for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && (c[u] = o(c[u], t[u], n));
                    return c
                }
            }

            function i(e) {
                return o(void 0, e)
            }

            function a() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    null != i && (e = o(e, i))
                }
                return e
            }
        },
        36848: (e, t, n) => {
            n.d(t, {
                Ww: () => a,
                Y9: () => i,
                d0: () => s
            });
            var r = n(23325),
                o = n(13691);

            function i() {
                var e = (0, o.V)().DatadogEventBridge;
                if (e) return {
                    getCapabilities: function() {
                        var t;
                        return JSON.parse((null == (t = e.getCapabilities) ? void 0 : t.call(e)) || "[]")
                    },
                    getPrivacyLevel: function() {
                        var t;
                        return null == (t = e.getPrivacyLevel) ? void 0 : t.call(e)
                    },
                    getAllowedWebViewHosts: function() {
                        return JSON.parse(e.getAllowedWebViewHosts())
                    },
                    send: function(t, n, r) {
                        e.send(JSON.stringify({
                            eventType: t,
                            event: n,
                            view: r ? {
                                id: r
                            } : void 0
                        }))
                    }
                }
            }

            function a(e) {
                var t = i();
                return !!t && (0, r.mK)(t.getCapabilities(), e)
            }

            function s(e) {
                void 0 === e && (e = null == (t = (0, o.V)().location) ? void 0 : t.hostname);
                var t, n = i();
                return !!n && n.getAllowedWebViewHosts().some(function(t) {
                    return e === t || (0, r.d5)(e, ".".concat(t))
                })
            }
        },
        37420: (e, t, n) => {
            n.d(t, {
                l: () => i,
                n: () => o
            });
            var r = n(92594);

            function o(e, t, n) {
                var o, i, a = !n || void 0 === n.leading || n.leading,
                    s = !n || void 0 === n.trailing || n.trailing,
                    c = !1;
                return {
                    throttled: function() {
                        for (var n = [], u = 0; u < arguments.length; u++) n[u] = arguments[u];
                        if (c) {
                            o = n;
                            return
                        }
                        a ? e.apply(void 0, n) : o = n, c = !0, i = (0, r.wg)(function() {
                            s && o && e.apply(void 0, o), c = !1, o = void 0
                        }, t)
                    },
                    cancel: function() {
                        (0, r.DJ)(i), c = !1, o = void 0
                    }
                }
            }

            function i() {}
        },
        40784: (e, t, n) => {
            n.d(t, {
                a: () => s
            });
            var r = n(5437),
                o = n(12542),
                i = n(45442),
                a = 220 * o._m;

            function s(e, t) {
                void 0 === t && (t = a);
                var n = (0, i.M)(Object.prototype),
                    r = (0, i.M)(Array.prototype),
                    o = [],
                    s = new WeakMap,
                    d = c(e, "$", void 0, o, s),
                    f = JSON.stringify(d),
                    l = f ? f.length : 0;
                if (l > t) return void u(t, "discarded", e);
                for (; o.length > 0 && l < t;) {
                    var p = o.shift(),
                        v = 0;
                    if (Array.isArray(p.source))
                        for (var g = 0; g < p.source.length; g++) {
                            var m = c(p.source[g], p.path, g, o, s);
                            if (void 0 !== m ? l += JSON.stringify(m).length : l += 4, l += v, v = 1, l > t) {
                                u(t, "truncated", e);
                                break
                            }
                            p.target[g] = m
                        } else
                            for (var g in p.source)
                                if (Object.prototype.hasOwnProperty.call(p.source, g)) {
                                    var m = c(p.source[g], p.path, g, o, s);
                                    if (void 0 !== m && (l += JSON.stringify(m).length + v + g.length + 3, v = 1), l > t) {
                                        u(t, "truncated", e);
                                        break
                                    }
                                    p.target[g] = m
                                }
                }
                return n(), r(), d
            }

            function c(e, t, n, r, o) {
                var i, a = function(e) {
                    if (e && "function" == typeof e.toJSON) try {
                        return e.toJSON()
                    } catch (e) {}
                    return e
                }(e);
                if (!a || "object" != typeof a) {
                    return "bigint" == typeof(i = a) ? "[BigInt] ".concat(i.toString()) : "function" == typeof i ? "[Function] ".concat(i.name || "unknown") : "symbol" == typeof i ? "[Symbol] ".concat(i.description || i.toString()) : i
                }
                var s = function(e) {
                    try {
                        if (e instanceof Event) return {
                            isTrusted: e.isTrusted
                        };
                        var t = Object.prototype.toString.call(e).match(/\[object (.*)\]/);
                        if (t && t[1]) return "[".concat(t[1], "]")
                    } catch (e) {}
                    return "[Unserializable]"
                }(a);
                if ("[Object]" !== s && "[Array]" !== s && "[Error]" !== s) return s;
                if (o.has(e)) return "[Reference seen at ".concat(o.get(e), "]");
                var c = void 0 !== n ? "".concat(t, ".").concat(n) : t,
                    u = Array.isArray(a) ? [] : {};
                return o.set(e, c), r.push({
                    source: a,
                    target: u,
                    path: c
                }), u
            }

            function u(e, t, n) {
                r.Vy.warn("The data provided has been ".concat(t, " as it is over the limit of ").concat(e, " characters:"), n)
            }
        },
        43162: (e, t, n) => {
            n.d(t, {
                W: () => o
            });
            var r = n(13691);

            function o(e, t) {
                var n, o = (0, r.V)();
                return o.Zone && "function" == typeof o.Zone.__symbol__ && (n = e[o.Zone.__symbol__(t)]), n || (n = e[t]), n
            }
        },
        45410: (e, t, n) => {
            n.d(t, {
                Kp: () => c,
                hL: () => s,
                y5: () => a
            });
            var r = n(25860),
                o = n(23325),
                i = n(86969),
                a = {
                    HIDDEN: "visibility_hidden",
                    UNLOADING: "before_unload",
                    PAGEHIDE: "page_hide",
                    FROZEN: "page_frozen"
                };

            function s(e) {
                return new r.c(function(t) {
                    var n = (0, i.l)(e, window, ["visibilitychange", "freeze"], function(e) {
                            "visibilitychange" === e.type && "hidden" === document.visibilityState ? t.notify({
                                reason: a.HIDDEN
                            }) : "freeze" === e.type && t.notify({
                                reason: a.FROZEN
                            })
                        }, {
                            capture: !0
                        }).stop,
                        r = (0, i.q)(e, window, "beforeunload", function() {
                            t.notify({
                                reason: a.UNLOADING
                            })
                        }).stop;
                    return function() {
                        n(), r()
                    }
                })
            }

            function c(e) {
                return (0, o.mK)((0, o.KQ)(a), e)
            }
        },
        45442: (e, t, n) => {
            n.d(t, {
                M: () => i,
                s: () => o
            });
            var r = n(37420);

            function o(e, t, n) {
                if ("object" != typeof e || null === e) return JSON.stringify(e);
                var r = i(Object.prototype),
                    o = i(Array.prototype),
                    a = i(Object.getPrototypeOf(e)),
                    s = i(e);
                try {
                    return JSON.stringify(e, t, n)
                } catch (e) {
                    return "<error: unable to serialize object>"
                } finally {
                    r(), o(), a(), s()
                }
            }

            function i(e) {
                var t = e.toJSON;
                return t ? (delete e.toJSON, function() {
                    e.toJSON = t
                }) : r.l
            }
        },
        45882: (e, t, n) => {
            n.d(t, {
                AQ: () => o,
                HB: () => i,
                Q_: () => s,
                _P: () => a
            });
            var r = n(18435),
                o = 4 * r.MA,
                i = 15 * r.iW,
                a = r.$H,
                s = {
                    COOKIE: "cookie",
                    LOCAL_STORAGE: "local-storage"
                }
        },
        47491: (e, t, n) => {
            n.d(t, {
                yf: () => eg
            });
            var r, o, i, a = n(18620),
                s = n(13691),
                c = n(82302),
                u = n(312),
                d = n(80547),
                f = n(85481),
                l = n(61893),
                p = n(55854),
                v = n(40784),
                g = n(34321),
                m = n(4725),
                y = n(23325),
                h = n(64900),
                b = n(78457),
                S = n(26963),
                w = n(67338),
                k = n(18435),
                C = n(18932);

            function _(e, t, n) {
                var r = n.getHandler(),
                    o = Array.isArray(r) ? r : [r];
                return E[e] >= E[n.getLevel()] && (0, y.mK)(o, t)
            }
            var x = {
                    ok: "ok",
                    debug: "debug",
                    info: "info",
                    notice: "notice",
                    warn: "warn",
                    error: "error",
                    critical: "critical",
                    alert: "alert",
                    emerg: "emerg"
                },
                E = ((r = {})[x.ok] = 0, r[x.debug] = 1, r[x.info] = 2, r[x.notice] = 4, r[x.warn] = 5, r[x.error] = 6, r[x.critical] = 7, r[x.alert] = 8, r[x.emerg] = 9, r);

            function O(e, t) {
                var n = (void 0 === t ? {} : t).includeMessage;
                return {
                    stack: e.stack,
                    kind: e.type,
                    message: void 0 !== n && n ? e.message : void 0,
                    causes: e.causes,
                    fingerprint: e.fingerprint,
                    handling: e.handling
                }
            }
            var T = function(e, t, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                    return i > 3 && a && Object.defineProperty(t, n, a), a
                },
                R = {
                    console: "console",
                    http: "http"
                },
                A = Object.keys(x),
                L = function() {
                    function e(e, t, n, r, o, i) {
                        void 0 === r && (r = R.http), void 0 === o && (o = x.debug), void 0 === i && (i = {}), this.handleLogStrategy = e, this.handlerType = r, this.level = o, this.contextManager = (0, u.D)(t), this.contextManager.setContext(i), n && this.contextManager.setContextProperty("logger", {
                            name: n
                        })
                    }
                    return e.prototype.logImplementation = function(e, t, n, r, o) {
                        void 0 === n && (n = x.info);
                        var i, a = (0, v.a)(t);
                        if (null != r) {
                            var s = (0, b.As)({
                                stackTrace: (0, b.bJ)(r) ? (0, S.T)(r) : void 0,
                                originalError: r,
                                nonErrorPrefix: "Provided",
                                source: w.g.LOGGER,
                                handling: "handled",
                                startClocks: (0, k.M8)()
                            });
                            i = (0, g.kg)({
                                error: O(s, {
                                    includeMessage: !0
                                })
                            }, a)
                        } else i = a;
                        this.handleLogStrategy({
                            message: (0, v.a)(e),
                            context: i,
                            status: n
                        }, this, o)
                    }, e.prototype.log = function(e, t, n, r) {
                        var o;
                        void 0 === n && (n = x.info), _(n, R.http, this) && (o = (0, C.uC)()), this.logImplementation(e, t, n, r, o)
                    }, e.prototype.setContext = function(e) {
                        this.contextManager.setContext(e)
                    }, e.prototype.getContext = function() {
                        return this.contextManager.getContext()
                    }, e.prototype.setContextProperty = function(e, t) {
                        this.contextManager.setContextProperty(e, t)
                    }, e.prototype.removeContextProperty = function(e) {
                        this.contextManager.removeContextProperty(e)
                    }, e.prototype.clearContext = function() {
                        this.contextManager.clearContext()
                    }, e.prototype.setHandler = function(e) {
                        this.handlerType = e
                    }, e.prototype.getHandler = function() {
                        return this.handlerType
                    }, e.prototype.setLevel = function(e) {
                        this.level = e
                    }, e.prototype.getLevel = function() {
                        return this.level
                    }, T([l.Ed], e.prototype, "logImplementation", null), e
                }();

            function P(e) {
                return function(t, n, r) {
                    var o;
                    _(e, R.http, this) && (o = (0, C.uC)()), this.logImplementation(t, n, e, r, o)
                }
            }
            L.prototype.ok = P(x.ok), L.prototype.debug = P(x.debug), L.prototype.info = P(x.info), L.prototype.notice = P(x.notice), L.prototype.warn = P(x.warn), L.prototype.error = P(x.error), L.prototype.critical = P(x.critical), L.prototype.alert = P(x.alert), L.prototype.emerg = P(x.emerg);
            var I = n(94752),
                N = n(5437),
                M = n(27568),
                D = n(36848),
                B = n(29005),
                q = n(37420),
                G = n(12542),
                j = n(98341),
                U = n(99874),
                W = n(6769),
                H = 32 * G._m;

            function V(e, t, n) {
                return void 0 === e ? [] : "all" === e || Array.isArray(e) && e.every(function(e) {
                    return (0, y.mK)(t, e)
                }) ? "all" === e ? t : (0, W.R)(e) : void N.Vy.error("".concat(n, ' should be "all" or an array with allowed values "').concat(t.join('", "'), '"'))
            }
            var F = "logs",
                J = n(71951),
                K = n(45410),
                $ = n(20715),
                z = n(6124),
                Y = n(25860),
                Q = n(95463);

            function Z(e) {
                return (0, Q.ic)(e.sessionSampleRate) ? "1" : "0"
            }
            var X = n(48095),
                ee = n(69853),
                et = !1;

            function en(e) {
                var t = window;
                if ((0, $.ao)()) {
                    var n = r(t.DD_RUM_SYNTHETICS);
                    return n || et || (et = !0, (0, p.A2)("Logs sent before RUM is injected by the synthetics worker", {
                        testId: (0, $.aj)(),
                        resultId: (0, $.X6)()
                    })), n
                }
                return r(t.DD_RUM);

                function r(t) {
                    if (t && t.getInternalContext) return t.getInternalContext(e)
                }
            }
            var er = n(77720),
                eo = ((o = {})[N.bP.log] = x.info, o[N.bP.debug] = x.debug, o[N.bP.info] = x.info, o[N.bP.warn] = x.warn, o[N.bP.error] = x.error, o),
                ei = n(97891),
                ea = n(51797),
                es = n(25113),
                ec = n(33940);

            function eu(e, t) {
                return e.length > t.requestErrorResponseLengthLimit ? "".concat(e.substring(0, t.requestErrorResponseLengthLimit), "...") : e
            }
            var ed = n(15434),
                ef = n(96741).D,
                el = ((i = {})[x.ok] = N.bP.debug, i[x.debug] = N.bP.debug, i[x.info] = N.bP.info, i[x.notice] = N.bP.info, i[x.warn] = N.bP.warn, i[x.error] = N.bP.error, i[x.critical] = N.bP.error, i[x.alert] = N.bP.error, i[x.emerg] = N.bP.error, i),
                ep = n(90212),
                ev = n(5167),
                eg = function(e) {
                    var t = (0, c.qR)(),
                        n = (0, u.D)(t.getOrCreateTracker(2)),
                        r = (0, u.D)(t.getOrCreateTracker(1)),
                        o = (0, d.D)();

                    function i() {
                        return {
                            view: {
                                referrer: document.referrer,
                                url: window.location.href
                            },
                            context: n.getContext(),
                            user: r.getContext()
                        }
                    }
                    var s = function(e, t, n) {
                            var r, o, i = (0, I.O)(),
                                a = t.observable.subscribe(s);

                            function s() {
                                if (o && r && t.isGranted()) {
                                    a.unsubscribe();
                                    var e = n(r, o);
                                    i.drain(e)
                                }
                            }
                            return {
                                init: function(e) {
                                    if (!e) return void N.Vy.error("Missing configuration");
                                    if ((0, M.Aq)(e.enableExperimentalFeatures), (0, D.d0)() && (n = e, e = (0, y.kp)({}, n, {
                                            clientToken: "empty"
                                        })), r = e, o) return void(0, h.$)("DD_LOGS", e);
                                    var n, i = function(e) {
                                        !0 === e.usePciIntake && e.site && "datadoghq.com" !== e.site && N.Vy.warn("PCI compliance for Logs is only available for Datadog organizations in the US1 site. Default intake will be used.");
                                        var t = (0, j.Sz)(e),
                                            n = V(e.forwardConsoleLogs, (0, y.KQ)(N.bP), "Forward Console Logs"),
                                            r = V(e.forwardReports, (0, y.KQ)(U.V), "Forward Reports");
                                        if (t && n && r) return e.forwardErrorsToLogs && !(0, y.mK)(n, N.bP.error) && n.push(N.bP.error), (0, y.kp)({
                                            forwardErrorsToLogs: !1 !== e.forwardErrorsToLogs,
                                            forwardConsoleLogs: n,
                                            forwardReports: r,
                                            requestErrorResponseLengthLimit: H,
                                            sendLogsAfterSessionExpiration: !!e.sendLogsAfterSessionExpiration
                                        }, t)
                                    }(e);
                                    i && (o = i, (0, B.i)().subscribe(q.l), t.tryToInit(i.trackingConsent), s())
                                },
                                get initConfiguration() {
                                    return r
                                },
                                getInternalContext: q.l,
                                handleLog: function(t, n, r, o, a) {
                                    void 0 === o && (o = e()), void 0 === a && (a = (0, k.nx)()), i.add(function(e) {
                                        return e.handleLog(t, n, r, o, a)
                                    })
                                }
                            }
                        }(i, o, function(t, a) {
                            t.storeContextsAcrossPages && ((0, f.Ck)(a, n, F, 2), (0, f.Ck)(a, r, F, 1));
                            var c, u, d = e(t, a, i, o);
                            return c = t, u = d, s = (0, y.kp)({
                                init: function(e) {
                                    (0, h.$)("DD_LOGS", e)
                                },
                                initConfiguration: c
                            }, u), d
                        }),
                        b = {},
                        S = new L(function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return s.handleLog.apply(s, e)
                        }, t.createDetachedTracker());
                    return (0, a.m)({
                        logger: S,
                        init: (0, l.dm)(function(e) {
                            return s.init(e)
                        }),
                        setTrackingConsent: (0, l.dm)(function(e) {
                            o.update(e), (0, p.Q6)({
                                feature: "set-tracking-consent",
                                tracking_consent: e
                            })
                        }),
                        getGlobalContext: (0, l.dm)(function() {
                            return n.getContext()
                        }),
                        setGlobalContext: (0, l.dm)(function(e) {
                            return n.setContext(e)
                        }),
                        setGlobalContextProperty: (0, l.dm)(function(e, t) {
                            return n.setContextProperty(e, t)
                        }),
                        removeGlobalContextProperty: (0, l.dm)(function(e) {
                            return n.removeContextProperty(e)
                        }),
                        clearGlobalContext: (0, l.dm)(function() {
                            return n.clearContext()
                        }),
                        createLogger: (0, l.dm)(function(e, n) {
                            return void 0 === n && (n = {}), b[e] = new L(function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                return s.handleLog.apply(s, e)
                            }, t.createDetachedTracker(), (0, v.a)(e), n.handler, n.level, (0, v.a)(n.context)), b[e]
                        }),
                        getLogger: (0, l.dm)(function(e) {
                            return b[e]
                        }),
                        getInitConfiguration: (0, l.dm)(function() {
                            return (0, g.Go)(s.initConfiguration)
                        }),
                        getInternalContext: (0, l.dm)(function(e) {
                            return s.getInternalContext(e)
                        }),
                        setUser: (0, l.dm)(function(e) {
                            (0, m.Og)(e) && r.setContext((0, m.x8)(e))
                        }),
                        getUser: (0, l.dm)(function() {
                            return r.getContext()
                        }),
                        setUserProperty: (0, l.dm)(function(e, t) {
                            var n, o = (0, m.x8)(((n = {})[e] = t, n))[e];
                            r.setContextProperty(e, o)
                        }),
                        removeUserProperty: (0, l.dm)(function(e) {
                            return r.removeContextProperty(e)
                        }),
                        clearUser: (0, l.dm)(function() {
                            return r.clearContext()
                        })
                    })
                }(function(e, t, n, r) {
                    var o = new ef,
                        i = [];
                    o.subscribe(1, function(e) {
                        return (0, J.b)("logs", e)
                    });
                    var a = function(e) {
                            o.notify(0, {
                                rawLogsEvent: {
                                    message: e.message,
                                    date: e.startClocks.timeStamp,
                                    origin: w.g.AGENT,
                                    status: x.error
                                }
                            }), (0, p.A2)("Error reported to customer", {
                                "error.message": e.message
                            })
                        },
                        s = (0, K.hL)(t),
                        c = !t.sessionStoreStrategyType || (0, D.d0)() || (0, $.ao)() ? (f = "1" === Z(t) ? {} : void 0, {
                            findTrackedSession: function() {
                                return f
                            },
                            expireObservable: new Y.c
                        }) : {
                            findTrackedSession: function(e, t) {
                                void 0 === t && (t = {
                                    returnInactive: !1
                                });
                                var n = v.findSession(e, t);
                                return n && "1" === n.trackingType ? {
                                    id: n.id
                                } : void 0
                            },
                            expireObservable: (v = (0, z.ox)(t, "logs", function(e) {
                                var n, r, o, i;
                                return n = t, {
                                    trackingType: i = "0" === (o = r = e) || "1" === o ? r : Z(n),
                                    isTracked: "1" === i
                                }
                            }, r)).expireObservable
                        },
                        u = function(e, t, n, r, o) {
                            var i, a = (0, p.a5)("browser-logs-sdk", t);
                            a.setContextProvider(function() {
                                var e, t, n, r, i, a;
                                return {
                                    application: {
                                        id: null == (e = en()) ? void 0 : e.application_id
                                    },
                                    session: {
                                        id: null == (t = o.findTrackedSession()) ? void 0 : t.id
                                    },
                                    view: {
                                        id: null == (r = null == (n = en()) ? void 0 : n.view) ? void 0 : r.id
                                    },
                                    action: {
                                        id: null == (a = null == (i = en()) ? void 0 : i.user_action) ? void 0 : a.id
                                    }
                                }
                            });
                            var s = [];
                            if ((0, D.d0)()) {
                                var c = (0, D.Y9)(),
                                    u = a.observable.subscribe(function(e) {
                                        return c.send("internal_telemetry", e)
                                    });
                                s.push(function() {
                                    return u.unsubscribe()
                                })
                            } else {
                                var d = (0, ep.Z)(t, {
                                    endpoint: t.rumEndpointBuilder,
                                    encoder: (0, ev.N)()
                                }, t.replica && {
                                    endpoint: t.replica.rumEndpointBuilder,
                                    encoder: (0, ev.N)()
                                }, n, r, o.expireObservable);
                                s.push(function() {
                                    return d.stop()
                                });
                                var f = a.observable.subscribe(function(e) {
                                    return d.add(e, (0, p.Wb)(t))
                                });
                                s.push(function() {
                                    return f.unsubscribe()
                                })
                            }
                            return (0, p.JK)(), (0, p.Rr)((i = (0, j.hO)(e), (0, y.kp)({
                                forward_errors_to_logs: e.forwardErrorsToLogs,
                                forward_console_logs: e.forwardConsoleLogs,
                                forward_reports: e.forwardReports,
                                use_pci_intake: e.usePciIntake,
                                send_logs_after_session_expiration: e.sendLogsAfterSessionExpiration
                            }, i))), {
                                telemetry: a,
                                stop: function() {
                                    s.forEach(function(e) {
                                        return e()
                                    })
                                }
                            }
                        }(e, t, a, s, c).stop;
                    i.push(function() {
                            return u()
                        }),
                        function(e, t) {
                            if (!e.forwardErrorsToLogs) return q.l;

                            function n(n, r) {
                                var o, i, a, s, c, u, d, f, p, v, g, m;

                                function y(e) {
                                    var o = {
                                        isAborted: r.isAborted,
                                        handlingStack: r.handlingStack
                                    };
                                    t.notify(0, {
                                        rawLogsEvent: {
                                            message: "".concat("xhr" === n ? "XHR" : "Fetch", " error ").concat(r.method, " ").concat(r.url),
                                            date: r.startClocks.timeStamp,
                                            error: {
                                                stack: e || "Failed to load",
                                                handling: void 0
                                            },
                                            http: {
                                                method: r.method,
                                                status_code: r.status,
                                                url: r.url
                                            },
                                            status: x.error,
                                            origin: w.g.NETWORK
                                        },
                                        domainContext: o
                                    })
                                }!(0, ea.w)(r.url) && (0 === (o = r).status && "opaque" !== o.responseType || (0, es.G)(r.status)) && ("xhr" in r ? (i = r.xhr, a = e, y("string" == typeof i.response ? eu(i.response, a) : i.response)) : r.response ? (s = r.response, c = e, u = y, (d = (0, es.i)(s)) && d.body ? window.TextDecoder ? (f = d.body, p = c.requestErrorResponseLengthLimit, v = function(e, t) {
                                    e ? u("Unable to retrieve response: ".concat(e)) : u(t)
                                }, (0, ec._)(f, function(e, t, n) {
                                    if (e) v(e);
                                    else {
                                        var r = new TextDecoder().decode(t);
                                        n && (r += "..."), v(void 0, r)
                                    }
                                }, {
                                    bytesLimit: p,
                                    collectStreamBody: !0
                                })) : d.text().then((0, l.dm)(function(e) {
                                    return u(eu(e, c))
                                }), (0, l.dm)(function(e) {
                                    return u("Unable to retrieve response: ".concat(e))
                                })) : u()) : r.error && (g = r.error, m = e, y(eu((0, C.Yn)((0, S.T)(g)), m))))
                            }(0, ei.G)(e).subscribe(function(e) {
                                "complete" === e.state && n("xhr", e)
                            }), (0, B.i)().subscribe(function(e) {
                                "resolve" === e.state && n("fetch", e)
                            })
                        }(t, o),
                        function(e, t) {
                            if (!e.forwardErrorsToLogs) return q.l;
                            var n = new Y.c;
                            (0, ed.mj)(n).stop, n.subscribe(function(e) {
                                t.notify(0, {
                                    rawLogsEvent: {
                                        message: e.message,
                                        date: e.startClocks.timeStamp,
                                        error: O(e),
                                        origin: w.g.SOURCE,
                                        status: x.error
                                    }
                                })
                            })
                        }(t, o), (0, er.l)(t.forwardConsoleLogs).subscribe(function(e) {
                            var t = {
                                rawLogsEvent: {
                                    date: (0, k.nx)(),
                                    message: e.message,
                                    origin: w.g.CONSOLE,
                                    error: e.error && O(e.error),
                                    status: eo[e.api]
                                },
                                domainContext: {
                                    handlingStack: e.handlingStack
                                }
                            };
                            o.notify(0, t)
                        }), (0, U.u)(t, t.forwardReports).subscribe(function(e) {
                            var t, n = e.message,
                                r = "deprecation" === e.originalError.type ? x.warn : x.error;
                            r === x.error ? t = O(e) : e.stack && (n += " Found in ".concat((0, b.$X)(e.stack))), o.notify(0, {
                                rawLogsEvent: {
                                    date: (0, k.nx)(),
                                    message: n,
                                    origin: w.g.REPORT,
                                    error: t,
                                    status: r
                                }
                            })
                        });
                    var d = {
                        handleLog: function(e, t, n, r, i) {
                            var a, s, c, u, d = (0, g.kg)(t.getContext(), e.context);
                            if (_(e.status, R.console, t) && (a = e, s = d, c = a.status, u = a.message, N.Z9[el[c]].call(N.JZ, u, s)), _(e.status, R.http, t)) {
                                var f = {
                                    rawLogsEvent: {
                                        date: i || (0, k.nx)(),
                                        message: e.message,
                                        status: e.status,
                                        origin: w.g.LOGGER
                                    },
                                    messageContext: d,
                                    savedCommonContext: r
                                };
                                n && (f.domainContext = {
                                    handlingStack: n
                                }), o.notify(0, f)
                            }
                        }
                    }.handleLog;
                    if (E = A.concat(["custom"]), T = {}, E.forEach(function(e) {
                            T[e] = (0, X.$)(e, t.eventRateLimiterThreshold, a)
                        }), o.subscribe(0, function(e) {
                            var r, i, a = e.rawLogsEvent,
                                s = e.messageContext,
                                u = e.savedCommonContext,
                                d = e.domainContext,
                                f = (0, k.gs)(a.date),
                                l = c.findTrackedSession(f);
                            if (l || t.sendLogsAfterSessionExpiration && c.findTrackedSession(f, {
                                    returnInactive: !0
                                })) {
                                var p = (void 0 === u ? void 0 : u) || n(),
                                    v = (0, g.kg)({
                                        service: t.service,
                                        session_id: l ? l.id : void 0,
                                        session: l ? {
                                            id: l.id
                                        } : void 0,
                                        usr: (0, ee.RI)(p.user) ? void 0 : p.user,
                                        view: p.view
                                    }, p.context, en(f), a, void 0 === s ? void 0 : s);
                                (null == (r = t.beforeSend) ? void 0 : r.call(t, v, d)) === !1 || v.origin !== w.g.AGENT && (null != (i = T[v.status]) ? i : T.custom).isLimitReached() || o.notify(1, v)
                            }
                        }), (0, D.d0)()) L = (0, D.Y9)(), o.subscribe(1, function(e) {
                        L.send("log", e)
                    });
                    else {
                        var f, v, m, h, E, T, L, P, I = (P = (0, ep.Z)(t, {
                            endpoint: t.logsEndpointBuilder,
                            encoder: (0, ev.N)()
                        }, t.replica && {
                            endpoint: t.replica.logsEndpointBuilder,
                            encoder: (0, ev.N)()
                        }, a, s, c.expireObservable), o.subscribe(1, function(e) {
                            P.add(e)
                        }), P).stop;
                        i.push(function() {
                            return I()
                        })
                    }
                    return {
                        handleLog: d,
                        getInternalContext: ({
                            get: function(e) {
                                var t = c.findTrackedSession(e);
                                if (t) return {
                                    session_id: t.id
                                }
                            }
                        }).get,
                        stop: function() {
                            i.forEach(function(e) {
                                return e()
                            })
                        }
                    }
                });
            (0, a.Z)((0, s.V)(), "DD_LOGS", eg)
        },
        48095: (e, t, n) => {
            n.d(t, {
                $: () => a
            });
            var r = n(92594),
                o = n(18435),
                i = n(67338);

            function a(e, t, n) {
                var a = 0,
                    s = !1;
                return {
                    isLimitReached: function() {
                        if (0 === a && (0, r.wg)(function() {
                                a = 0
                            }, o.iW), (a += 1) <= t || s) return s = !1, !1;
                        if (a === t + 1) {
                            s = !0;
                            try {
                                n({
                                    message: "Reached max number of ".concat(e, "s by minute: ").concat(t),
                                    source: i.g.AGENT,
                                    startClocks: (0, o.M8)()
                                })
                            } finally {
                                s = !1
                            }
                        }
                        return !0
                    }
                }
            }
        },
        51491: (e, t, n) => {
            n.d(t, {
                AY: () => a,
                L2: () => s,
                c$: () => c,
                l2: () => i
            });
            var r, o = n(45442);

            function i(e) {
                return c(e, location.href).href
            }

            function a(e) {
                try {
                    return !!c(e)
                } catch (e) {
                    return !1
                }
            }

            function s(e) {
                var t = c(e).pathname;
                return "/" === t[0] ? t : "/".concat(t)
            }

            function c(e, t) {
                var n = function() {
                    if (void 0 === r) try {
                        var e = new u("http://test/path");
                        r = "http://test/path" === e.href
                    } catch (e) {
                        r = !1
                    }
                    return r ? u : void 0
                }();
                if (n) try {
                    return void 0 !== t ? new n(e, t) : new n(e)
                } catch (n) {
                    throw Error("Failed to construct URL: ".concat(String(n), " ").concat((0, o.s)({
                        url: e,
                        base: t
                    })))
                }
                if (void 0 === t && !/:/.test(e)) throw Error("Invalid URL: '".concat(e, "'"));
                var i = document,
                    a = i.createElement("a");
                if (void 0 !== t) {
                    var s = (i = document.implementation.createHTMLDocument("")).createElement("base");
                    s.href = t, i.head.appendChild(s), i.body.appendChild(a)
                }
                return a.href = e, a
            }
            var u = URL
        },
        51797: (e, t, n) => {
            n.d(t, {
                T: () => f,
                w: () => l
            });
            var r = n(23325),
                o = n(18435),
                i = n(51491),
                a = n(7215),
                s = n(21495);

            function c(e, t, n) {
                var r = function(e, t) {
                    var n = "/api/v2/".concat(t),
                        r = e.proxy;
                    if ("string" == typeof r) {
                        var o = (0, i.l2)(r);
                        return function(e) {
                            return "".concat(o, "?ddforward=").concat(encodeURIComponent("".concat(n, "?").concat(e)))
                        }
                    }
                    if ("function" == typeof r) return function(e) {
                        return r({
                            path: n,
                            parameters: e
                        })
                    };
                    var a = function(e, t) {
                        var n = t.site,
                            r = void 0 === n ? s.NW : n,
                            o = t.internalAnalyticsSubdomain;
                        if ("logs" === e && t.usePciIntake && r === s.NW) return s.$A;
                        if (o && r === s.NW) return "".concat(o, ".").concat(s.NW);
                        if (r === s.TC) return "http-intake.logs.".concat(r);
                        var i = r.split("."),
                            a = i.pop();
                        return "browser-intake-".concat(i.join("-"), ".").concat(a)
                    }(t, e);
                    return function(e) {
                        return "https://".concat(a).concat(n, "?").concat(e)
                    }
                }(e, t);
                return {
                    build: function(i, s) {
                        var c, u, d, f, l, p, v, g, m, y, h;
                        return r((c = e, u = t, d = n, f = i, l = s, p = c.clientToken, v = c.internalAnalyticsSubdomain, g = l.retry, m = l.encoding, y = ["sdk_version:".concat("5.35.1"), "api:".concat(f)].concat(d), g && y.push("retry_count:".concat(g.count), "retry_after:".concat(g.lastFailureStatus)), h = ["ddsource=browser", "ddtags=".concat(encodeURIComponent(y.join(","))), "dd-api-key=".concat(p), "dd-evp-origin-version=".concat(encodeURIComponent("5.35.1")), "dd-evp-origin=browser", "dd-request-id=".concat((0, a.lk)())], m && h.push("dd-evp-encoding=".concat(m)), "rum" === u && h.push("batch_time=".concat((0, o.nx)())), v && h.reverse(), h.join("&")))
                    },
                    urlPrefix: r(""),
                    trackType: t
                }
            }
            var u = n(5437);

            function d(e, t) {
                var n, r = 200 - e.length - 1;
                (t.length > r || (n = t, function() {
                    try {
                        return RegExp("[\\p{Ll}]", "u"), !0
                    } catch (e) {
                        return !1
                    }
                }() && RegExp("[^\\p{Ll}\\p{Lo}0-9_:./-]", "u").test(n))) && u.Vy.warn("".concat(e, " value doesn't meet tag requirements and will be sanitized. ").concat(u.xG, " ").concat(u.fH, "/getting_started/tagging/#defining-tags"));
                var o = t.replace(/,/g, "_");
                return "".concat(e, ":").concat(o)
            }

            function f(e) {
                var t, n, o, i, a, u, f, l = e.site || s.NW,
                    p = (o = e.env, i = e.service, a = e.version, u = e.datacenter, f = [], o && f.push(d("env", o)), i && f.push(d("service", i)), a && f.push(d("version", a)), u && f.push(d("datacenter", u)), f),
                    v = {
                        logsEndpointBuilder: c(t = e, "logs", n = p),
                        rumEndpointBuilder: c(t, "rum", n),
                        sessionReplayEndpointBuilder: c(t, "replay", n)
                    },
                    g = function(e, t) {
                        if (e.replica) {
                            var n = (0, r.kp)({}, e, {
                                    site: s.NW,
                                    clientToken: e.replica.clientToken
                                }),
                                o = {
                                    logsEndpointBuilder: c(n, "logs", t),
                                    rumEndpointBuilder: c(n, "rum", t)
                                };
                            return (0, r.kp)({
                                applicationId: e.replica.applicationId
                            }, o)
                        }
                    }(e, p);
                return (0, r.kp)({
                    replica: g,
                    site: l
                }, v)
            }

            function l(e) {
                return s.Ih.every(function(t) {
                    return (0, r.mK)(e, t)
                })
            }
        },
        55854: (e, t, n) => {
            n.d(t, {
                Rr: () => R,
                A2: () => O,
                VJ: () => T,
                Q6: () => A,
                JK: () => x,
                Wb: () => E,
                a5: () => _
            });
            var r = n(5437),
                o = n(78457),
                i = n(18932),
                a = n(27568),
                s = n(21495),
                c = n(25860),
                u = n(18435),
                d = n(61893),
                f = n(71951),
                l = n(23325),
                p = n(95463),
                v = n(45442),
                g = n(34321),
                m = n(26963),
                y = n(1741),
                h = n(94752),
                b = {
                    log: "log",
                    configuration: "configuration",
                    usage: "usage"
                },
                S = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "https://d3uc069fcn7uxw.cloudfront.net", "https://d20xtzwzcl0ceb.cloudfront.net", "http://localhost", "<anonymous>"],
                w = [s.R8],
                k = (0, h.O)(),
                C = function(e) {
                    k.add(function() {
                        return C(e)
                    })
                };

            function _(e, t) {
                var n, r, o = new c.c,
                    i = new Set,
                    s = !(0, l.mK)(w, t.site) && (0, p.ic)(t.telemetrySampleRate),
                    m = ((n = {})[b.log] = s, n[b.configuration] = s && (0, p.ic)(t.telemetryConfigurationSampleRate), n[b.usage] = s && (0, p.ic)(t.telemetryUsageSampleRate), n),
                    h = {
                        is_local_file: "file:" === window.location.protocol,
                        is_worker: "WorkerGlobalScope" in self
                    };
                return C = function(n) {
                    var s = (0, v.s)(n);
                    if (m[n.type] && i.size < t.maxTelemetryEventsPerPage && !i.has(s)) {
                        var c, d, p, b = (c = e, d = n, p = h, (0, g.kg)({
                            type: "telemetry",
                            date: (0, u.nx)(),
                            service: c,
                            version: "5.35.1",
                            source: "browser",
                            _dd: {
                                format_version: 2
                            },
                            telemetry: (0, g.kg)(d, {
                                runtime_env: p,
                                connectivity: (0, y.q)(),
                                sdk_setup: "npm"
                            }),
                            experimental_features: (0, l.A6)((0, a.q7)())
                        }, void 0 !== r ? r() : {}));
                        o.notify(b), (0, f.b)("telemetry", b), i.add(s)
                    }
                }, (0, d.Bd)(T), {
                    setContextProvider: function(e) {
                        r = e
                    },
                    observable: o,
                    enabled: s
                }
            }

            function x() {
                k.drain()
            }

            function E(e) {
                return e.site === s.Bb
            }

            function O(e, t) {
                (0, d.oO)(r.bP.debug, e, t), C((0, l.kp)({
                    type: b.log,
                    message: e,
                    status: "debug"
                }, t))
            }

            function T(e, t) {
                C((0, l.kp)({
                    type: b.log,
                    status: "error"
                }, function(e) {
                    if ((0, o.bJ)(e)) {
                        var t, n = (0, m.T)(e);
                        return {
                            error: {
                                kind: n.name,
                                stack: (0, i.Yn)(((t = n).stack = t.stack.filter(function(e) {
                                    return !e.url || S.some(function(t) {
                                        return (0, l.w1)(e.url, t)
                                    })
                                }), t))
                            },
                            message: n.message
                        }
                    }
                    return {
                        error: {
                            stack: o.e6
                        },
                        message: "".concat("Uncaught", " ").concat((0, v.s)(e))
                    }
                }(e), t))
            }

            function R(e) {
                C({
                    type: b.configuration,
                    configuration: e
                })
            }

            function A(e) {
                C({
                    type: b.usage,
                    usage: e
                })
            }
        },
        61893: (e, t, n) => {
            n.d(t, {
                Bd: () => s,
                Ed: () => u,
                dm: () => d,
                oO: () => l,
                pM: () => c,
                um: () => f
            });
            var r, o = n(5437),
                i = function(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                a = !1;

            function s(e) {
                r = e
            }

            function c(e) {
                a = e
            }

            function u(e, t, n) {
                var o = n.value;
                n.value = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (r ? d(o) : o).apply(this, e)
                }
            }

            function d(e) {
                return function() {
                    return f(e, this, arguments)
                }
            }

            function f(e, t, n) {
                try {
                    return e.apply(t, n)
                } catch (e) {
                    if (l(e), r) try {
                        r(e)
                    } catch (e) {
                        l(e)
                    }
                }
            }

            function l() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                a && o.Vy.error.apply(o.Vy, i(["[MONITOR]"], e, !1))
            }
        },
        62864: (e, t, n) => {
            var r;

            function o() {
                return 0 === s()
            }

            function i() {
                return 1 === s()
            }

            function a() {
                return 2 === s()
            }

            function s() {
                var e, t, n;
                return null != r ? r : (void 0 === e && (e = window), n = e.navigator.userAgent, r = e.chrome || /HeadlessChrome/.test(n) ? 1 : (null == (t = e.navigator.vendor) ? void 0 : t.indexOf("Apple")) === 0 || /safari/i.test(n) && !/chrome|android/i.test(n) ? 2 : 3 * !e.document.documentMode)
            }
            n.d(t, {
                F2: () => i,
                lT: () => o,
                nr: () => a
            })
        },
        64708: (e, t, n) => {
            n.d(t, {
                sA: () => b
            });
            var r = n(55854),
                o = n(61893),
                i = n(86969),
                a = n(92594),
                s = n(18435),
                c = n(12542),
                u = n(25113),
                d = n(67338),
                f = 80 * c._m,
                l = 3 * c.iH,
                p = s.iW,
                v = s.OY;

            function g(e, t, n, r, o) {
                0 === t.transportStatus && 0 === t.queuedPayloads.size() && t.bandwidthMonitor.canHandle(e) ? m(e, t, n, {
                    onSuccess: function() {
                        return y(0, t, n, r, o)
                    },
                    onFailure: function() {
                        t.queuedPayloads.enqueue(e),
                            function e(t, n, r, o) {
                                2 === t.transportStatus && (0, a.wg)(function() {
                                    m(t.queuedPayloads.first(), t, n, {
                                        onSuccess: function() {
                                            t.queuedPayloads.dequeue(), t.currentBackoffTime = v, y(1, t, n, r, o)
                                        },
                                        onFailure: function() {
                                            t.currentBackoffTime = Math.min(p, 2 * t.currentBackoffTime), e(t, n, r, o)
                                        }
                                    })
                                }, t.currentBackoffTime)
                            }(t, n, r, o)
                    }
                }) : t.queuedPayloads.enqueue(e)
            }

            function m(e, t, n, r) {
                var o = r.onSuccess,
                    i = r.onFailure;
                t.bandwidthMonitor.add(e), n(e, function(n) {
                    var r;
                    t.bandwidthMonitor.remove(e), "opaque" !== (r = n).type && (0 === r.status && !navigator.onLine || 408 === r.status || 429 === r.status || (0, u.G)(r.status)) ? (t.transportStatus = t.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.retry = {
                        count: e.retry ? e.retry.count + 1 : 1,
                        lastFailureStatus: n.status
                    }, i()) : (t.transportStatus = 0, o())
                })
            }

            function y(e, t, n, r, o) {
                0 === e && t.queuedPayloads.isFull() && !t.queueFullReported && (o({
                    message: "Reached max ".concat(r, " events size queued for upload: ").concat(l / c.iH, "MiB"),
                    source: d.g.AGENT,
                    startClocks: (0, s.M8)()
                }), t.queueFullReported = !0);
                var i = t.queuedPayloads;
                for (t.queuedPayloads = h(); i.size() > 0;) g(i.dequeue(), t, n, r, o)
            }

            function h() {
                var e = [];
                return {
                    bytesCount: 0,
                    enqueue: function(t) {
                        this.isFull() || (e.push(t), this.bytesCount += t.bytesCount)
                    },
                    first: function() {
                        return e[0]
                    },
                    dequeue: function() {
                        var t = e.shift();
                        return t && (this.bytesCount -= t.bytesCount), t
                    },
                    size: function() {
                        return e.length
                    },
                    isFull: function() {
                        return this.bytesCount >= l
                    }
                }
            }

            function b(e, t, n) {
                var i = {
                        transportStatus: 0,
                        currentBackoffTime: v,
                        bandwidthMonitor: {
                            ongoingRequestCount: 0,
                            ongoingByteCount: 0,
                            canHandle: function(e) {
                                return 0 === this.ongoingRequestCount || this.ongoingByteCount + e.bytesCount <= f && this.ongoingRequestCount < 32
                            },
                            add: function(e) {
                                this.ongoingRequestCount += 1, this.ongoingByteCount += e.bytesCount
                            },
                            remove: function(e) {
                                this.ongoingRequestCount -= 1, this.ongoingByteCount -= e.bytesCount
                            }
                        },
                        queuedPayloads: h(),
                        queueFullReported: !1
                    },
                    a = function(n, r) {
                        var i, a, s, c;
                        return i = e, a = t, s = n, c = r, void(function() {
                            try {
                                return window.Request && "keepalive" in new Request("http://a")
                            } catch (e) {
                                return !1
                            }
                        }() && s.bytesCount < a ? fetch(i.build("fetch", s), {
                            method: "POST",
                            body: s.data,
                            keepalive: !0,
                            mode: "cors"
                        }).then((0, o.dm)(function(e) {
                            return null == c ? void 0 : c({
                                status: e.status,
                                type: e.type
                            })
                        }), (0, o.dm)(function() {
                            w(i.build("xhr", s), s.data, c)
                        })) : w(i.build("xhr", s), s.data, c))
                    };
                return {
                    send: function(t) {
                        g(t, i, a, e.trackType, n)
                    },
                    sendOnExit: function(n) {
                        ! function(e, t, n) {
                            if (navigator.sendBeacon && n.bytesCount < t) try {
                                var o, i = e.build("beacon", n);
                                if (navigator.sendBeacon(i, n.data)) return
                            } catch (e) {
                                o = e, S || (S = !0, (0, r.VJ)(o))
                            }
                            w(e.build("xhr", n), n.data)
                        }(e, t, n)
                    }
                }
            }
            var S = !1;

            function w(e, t, n) {
                var r = new XMLHttpRequest;
                r.open("POST", e, !0), t instanceof Blob && r.setRequestHeader("Content-Type", t.type), (0, i.q)({
                    allowUntrustedEvents: !0
                }, r, "loadend", function() {
                    null == n || n({
                        status: r.status
                    })
                }, {
                    once: !0
                }), r.send(t)
            }
        },
        64900: (e, t, n) => {
            n.d(t, {
                $: () => o
            });
            var r = n(5437);

            function o(e, t) {
                t.silentMultipleInit || r.Vy.error("".concat(e, " is already initialized."))
            }
        },
        67338: (e, t, n) => {
            n.d(t, {
                g: () => r
            });
            var r = {
                AGENT: "agent",
                CONSOLE: "console",
                CUSTOM: "custom",
                LOGGER: "logger",
                NETWORK: "network",
                SOURCE: "source",
                REPORT: "report"
            }
        },
        69853: (e, t, n) => {
            n.d(t, {
                LG: () => s,
                RI: () => a,
                Rj: () => i,
                yG: () => o
            });
            var r = n(23325);

            function o(e) {
                return (0, r.kp)({}, e)
            }

            function i(e, t) {
                return Object.keys(e).some(function(n) {
                    return e[n] === t
                })
            }

            function a(e) {
                return 0 === Object.keys(e).length
            }

            function s(e, t) {
                for (var n = {}, r = 0, o = Object.keys(e); r < o.length; r++) {
                    var i = o[r];
                    n[i] = t(e[i])
                }
                return n
            }
        },
        71951: (e, t, n) => {
            n.d(t, {
                b: () => r
            });

            function r(e, t) {
                var n = window.__ddBrowserSdkExtensionCallback;
                n && n({
                    type: e,
                    payload: t
                })
            }
        },
        72904: (e, t, n) => {
            n.d(t, {
                P: () => r
            });

            function r(e) {
                return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
            }
        },
        74742: (e, t, n) => {
            n.d(t, {
                B9: () => d,
                DQ: () => l,
                Ri: () => u,
                TV: () => c,
                z$: () => f
            });
            var r, o, i = n(5437),
                a = n(18435),
                s = n(7215);

            function c(e, t, n, r) {
                void 0 === n && (n = 0);
                var o = new Date;
                o.setTime(o.getTime() + n);
                var i = "expires=".concat(o.toUTCString()),
                    a = r && r.crossSite ? "none" : "strict",
                    s = r && r.domain ? ";domain=".concat(r.domain) : "",
                    c = r && r.secure ? ";secure" : "",
                    u = r && r.partitioned ? ";partitioned" : "";
                document.cookie = "".concat(e, "=").concat(t, ";").concat(i, ";path=/;samesite=").concat(a).concat(s).concat(c).concat(u)
            }

            function u(e) {
                return (0, s.rx)(document.cookie, e)
            }

            function d(e) {
                return r || (r = (0, s.it)(document.cookie)), r.get(e)
            }

            function f(e) {
                if (void 0 === document.cookie || null === document.cookie) return !1;
                try {
                    var t = "dd_cookie_test_".concat((0, s.lk)()),
                        n = "test";
                    c(t, n, a.iW, e);
                    var r = u(t) === n;
                    return c(t, "", 0, e), r
                } catch (e) {
                    return i.Vy.error(e), !1
                }
            }

            function l() {
                if (void 0 === o) {
                    for (var e = "dd_site_test_".concat((0, s.lk)()), t = window.location.hostname.split("."), n = t.pop(); t.length && !u(e);) n = "".concat(t.pop(), ".").concat(n), c(e, "test", a.OY, {
                        domain: n
                    });
                    c(e, "", 0, {
                        domain: n
                    }), o = n
                }
                return o
            }
        },
        77720: (e, t, n) => {
            n.d(t, {
                l: () => g
            });
            var r = n(78457),
                o = n(25860),
                i = n(5437),
                a = n(61893),
                s = n(40784),
                c = n(23325),
                u = n(45442),
                d = n(67338),
                f = n(26963),
                l = n(18932),
                p = n(18435),
                v = {};

            function g(e) {
                var t = e.map(function(e) {
                    var t;
                    return v[e] || (v[e] = (t = e, new o.c(function(e) {
                        var n = i.JZ[t];
                        return i.JZ[t] = function() {
                                for (var o = [], v = 0; v < arguments.length; v++) o[v] = arguments[v];
                                n.apply(console, o);
                                var g = (0, l.uC)();
                                (0, a.um)(function() {
                                    e.notify(function(e, t, n) {
                                        var o, a = e.map(function(e) {
                                            var t;
                                            return "string" == typeof(t = e) ? (0, s.a)(t) : (0, r.bJ)(t) ? (0, l.NR)((0, f.T)(t)) : (0, u.s)((0, s.a)(t), void 0, 2)
                                        }).join(" ");
                                        if (t === i.bP.error) {
                                            var v = (0, c.I6)(e, r.bJ);
                                            o = {
                                                stack: v ? (0, l.Yn)((0, f.T)(v)) : void 0,
                                                fingerprint: (0, r.Nt)(v),
                                                causes: v ? (0, r.Dr)(v, "console") : void 0,
                                                startClocks: (0, p.M8)(),
                                                message: a,
                                                source: d.g.CONSOLE,
                                                handling: "handled",
                                                handlingStack: n
                                            }
                                        }
                                        return {
                                            api: t,
                                            message: a,
                                            error: o,
                                            handlingStack: n
                                        }
                                    }(o, t, g))
                                })
                            },
                            function() {
                                i.JZ[t] = n
                            }
                    }))), v[e]
                });
                return o.F.apply(void 0, t)
            }
        },
        78457: (e, t, n) => {
            n.d(t, {
                $X: () => d,
                As: () => c,
                Dr: () => l,
                Nt: () => u,
                bJ: () => f,
                e6: () => s
            });
            var r = n(40784),
                o = n(45442),
                i = n(26963),
                a = n(18932),
                s = "No stack, consider using an instance of Error";

            function c(e) {
                var t, n, i, c, d, p, v = e.stackTrace,
                    g = e.originalError,
                    m = e.handlingStack,
                    y = e.startClocks,
                    h = e.nonErrorPrefix,
                    b = e.source,
                    S = e.handling,
                    w = f(g),
                    k = (t = v, n = w, i = h, c = g, (null == t ? void 0 : t.message) && (null == t ? void 0 : t.name) ? t.message : n ? "Empty message" : "".concat(i, " ").concat((0, o.s)((0, r.a)(c)))),
                    C = (d = w, void 0 !== (p = v) && (d || p.stack.length > 0 && (p.stack.length > 1 || void 0 !== p.stack[0].url))) ? (0, a.Yn)(v) : s,
                    _ = w ? l(g, b) : void 0,
                    x = v ? v.name : void 0,
                    E = u(g);
                return {
                    startClocks: y,
                    source: b,
                    handling: S,
                    handlingStack: m,
                    originalError: g,
                    type: x,
                    message: k,
                    stack: C,
                    causes: _,
                    fingerprint: E
                }
            }

            function u(e) {
                return f(e) && "dd_fingerprint" in e ? String(e.dd_fingerprint) : void 0
            }

            function d(e) {
                var t;
                return null == (t = /@ (.+)/.exec(e)) ? void 0 : t[1]
            }

            function f(e) {
                return e instanceof Error || "[object Error]" === Object.prototype.toString.call(e)
            }

            function l(e, t) {
                for (var n = e, r = []; f(null == n ? void 0 : n.cause) && r.length < 10;) {
                    var o = (0, i.T)(n.cause);
                    r.push({
                        message: n.cause.message,
                        source: t,
                        type: null == o ? void 0 : o.name,
                        stack: o && (0, a.Yn)(o)
                    }), n = n.cause
                }
                return r.length ? r : void 0
            }
        },
        80547: (e, t, n) => {
            n.d(t, {
                D: () => i,
                w: () => o
            });
            var r = n(25860),
                o = {
                    GRANTED: "granted",
                    NOT_GRANTED: "not-granted"
                };

            function i(e) {
                var t = new r.c;
                return {
                    tryToInit: function(t) {
                        e || (e = t)
                    },
                    update: function(n) {
                        e = n, t.notify()
                    },
                    isGranted: function() {
                        return e === o.GRANTED
                    },
                    observable: t
                }
            }
        },
        82302: (e, t, n) => {
            n.d(t, {
                qR: () => d
            });
            var r = n(12542),
                o = n(37420),
                i = n(45442),
                a = n(5437),
                s = n(69853),
                c = 3 * r._m,
                u = 16 * r._m;

            function d(e) {
                void 0 === e && (e = 2);
                var t = new Map,
                    n = !1;

                function o(o) {
                    if (void 0 === o && (o = 0), !n && 0 !== e) {
                        var i, s = 2 === e ? c : u,
                            d = o;
                        t.forEach(function(e) {
                            d += e.getBytesCount()
                        }), d > s && (i = s, a.Vy.warn("Customer data exceeds the recommended ".concat(i / r._m, "KiB threshold. ").concat(a.xG, " ").concat(a.Xs, "/#customer-data-exceeds-the-recommended-threshold-warning")), n = !0)
                    }
                }
                return {
                    createDetachedTracker: function() {
                        var e = f(function() {
                            return o(e.getBytesCount())
                        });
                        return e
                    },
                    getOrCreateTracker: function(e) {
                        return t.has(e) || t.set(e, f(o)), t.get(e)
                    },
                    setCompressionStatus: function(t) {
                        0 === e && (e = t, o())
                    },
                    getCompressionStatus: function() {
                        return e
                    },
                    stop: function() {
                        t.forEach(function(e) {
                            return e.stop()
                        }), t.clear()
                    }
                }
            }

            function f(e) {
                var t = 0,
                    n = (0, o.n)(function(n) {
                        t = (0, r.WW)((0, i.s)(n)), e()
                    }, 200),
                    a = n.throttled,
                    c = n.cancel,
                    u = function() {
                        c(), t = 0
                    };
                return {
                    updateCustomerData: function(e) {
                        (0, s.RI)(e) ? u(): a(e)
                    },
                    resetCustomerData: u,
                    getBytesCount: function() {
                        return t
                    },
                    stop: function() {
                        c()
                    }
                }
            }
        },
        85481: (e, t, n) => {
            n.d(t, {
                Ck: () => a
            });
            var r = n(86969),
                o = n(34321),
                i = [];

            function a(e, t, n, a) {
                var s, c, u = (s = n, c = a, "".concat("_dd_c", "_").concat(s, "_").concat(c));

                function d() {
                    var e = localStorage.getItem(u);
                    return null !== e ? JSON.parse(e) : {}
                }
                i.push((0, r.q)(e, window, "storage", function(e) {
                    u === e.key && t.setContext(d())
                })), t.changeObservable.subscribe(function() {
                    localStorage.setItem(u, JSON.stringify(t.getContext()))
                }), t.setContext((0, o.kg)(d(), t.getContext()))
            }
        },
        86969: (e, t, n) => {
            n.d(t, {
                l: () => a,
                q: () => i
            });
            var r = n(61893),
                o = n(43162);

            function i(e, t, n, r, o) {
                return a(e, t, [n], r, o)
            }

            function a(e, t, n, i, a) {
                var s = void 0 === a ? {} : a,
                    c = s.once,
                    u = s.capture,
                    d = s.passive,
                    f = (0, r.dm)(function(t) {
                        (t.isTrusted || t.__ddIsTrusted || e.allowUntrustedEvents) && (c && g(), i(t))
                    }),
                    l = d ? {
                        capture: u,
                        passive: d
                    } : u,
                    p = window.EventTarget && t instanceof EventTarget ? window.EventTarget.prototype : t,
                    v = (0, o.W)(p, "addEventListener");

                function g() {
                    var e = (0, o.W)(p, "removeEventListener");
                    n.forEach(function(n) {
                        return e.call(t, n, f, l)
                    })
                }
                return n.forEach(function(e) {
                    return v.call(t, e, f, l)
                }), {
                    stop: g
                }
            }
        },
        90212: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(5437),
                o = n(23325),
                i = n(45410),
                a = n(45442),
                s = n(12542);

            function c(e) {
                var t = e.encoder,
                    n = e.request,
                    c = e.flushController,
                    d = e.messageBytesLimit,
                    f = {},
                    l = c.flushObservable.subscribe(function(e) {
                        return function(e) {
                            var r = (0, o.KQ)(f).join("\n");
                            f = {};
                            var a = (0, i.Kp)(e.reason),
                                c = a ? n.sendOnExit : n.send;
                            if (a && t.isAsync) {
                                var d = t.finishSync();
                                d.outputBytesCount && c(u(d));
                                var l = [d.pendingData, r].filter(Boolean).join("\n");
                                l && c({
                                    data: l,
                                    bytesCount: (0, s.WW)(l)
                                })
                            } else r && t.write(t.isEmpty ? r : "\n".concat(r)), t.finish(function(e) {
                                c(u(e))
                            })
                        }(e)
                    });

                function p(e, n) {
                    var o, i, s = (0, a.s)(e),
                        u = t.estimateEncodedBytesCount(s);
                    if (u >= d) return void r.Vy.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(d, "KB. ").concat(r.xG, " ").concat(r.Xs, "/#technical-limitations"));
                    void 0 !== n && void 0 !== f[n] && (o = f[n], delete f[n], i = t.estimateEncodedBytesCount(o), c.notifyAfterRemoveMessage(i)), c.notifyBeforeAddMessage(u), void 0 !== n ? (f[n] = s, c.notifyAfterAddMessage()) : t.write(t.isEmpty ? s : "\n".concat(s), function(e) {
                        c.notifyAfterAddMessage(e - u)
                    })
                }
                return {
                    flushController: c,
                    add: p,
                    upsert: p,
                    stop: l.unsubscribe
                }
            }

            function u(e) {
                var t;
                return {
                    data: "string" == typeof e.output ? e.output : new Blob([e.output], {
                        type: "text/plain"
                    }),
                    bytesCount: e.outputBytesCount,
                    encoding: e.encoding
                }
            }
            var d = n(64708),
                f = n(25860),
                l = n(92594);

            function p(e, t, n, r, o, i, a) {
                void 0 === a && (a = c);
                var s = p(e, t),
                    u = n && p(e, n);

                function p(e, t) {
                    var n = t.endpoint,
                        s = t.encoder;
                    return a({
                        encoder: s,
                        request: (0, d.sA)(n, e.batchBytesLimit, r),
                        flushController: function(e) {
                            var t, n = e.messagesLimit,
                                r = e.bytesLimit,
                                o = e.durationLimit,
                                i = e.pageExitObservable,
                                a = e.sessionExpireObservable,
                                s = i.subscribe(function(e) {
                                    return v(e.reason)
                                }),
                                c = a.subscribe(function() {
                                    return v("session_expire")
                                }),
                                u = new f.c(function() {
                                    return function() {
                                        s.unsubscribe(), c.unsubscribe()
                                    }
                                }),
                                d = 0,
                                p = 0;

                            function v(e) {
                                if (0 !== p) {
                                    var t = p,
                                        n = d;
                                    p = 0, d = 0, g(), u.notify({
                                        reason: e,
                                        messagesCount: t,
                                        bytesCount: n
                                    })
                                }
                            }

                            function g() {
                                (0, l.DJ)(t), t = void 0
                            }
                            return {
                                flushObservable: u,
                                get messagesCount() {
                                    return p
                                },
                                notifyBeforeAddMessage: function(e) {
                                    d + e >= r && v("bytes_limit"), p += 1, d += e, void 0 === t && (t = (0, l.wg)(function() {
                                        v("duration_limit")
                                    }, o))
                                },
                                notifyAfterAddMessage: function(e) {
                                    void 0 === e && (e = 0), d += e, p >= n ? v("messages_limit") : d >= r && v("bytes_limit")
                                },
                                notifyAfterRemoveMessage: function(e) {
                                    d -= e, 0 == (p -= 1) && g()
                                }
                            }
                        }({
                            messagesLimit: e.batchMessagesLimit,
                            bytesLimit: e.batchBytesLimit,
                            durationLimit: e.flushTimeout,
                            pageExitObservable: o,
                            sessionExpireObservable: i
                        }),
                        messageBytesLimit: e.messageBytesLimit
                    })
                }
                return {
                    flushObservable: s.flushController.flushObservable,
                    add: function(e, t) {
                        void 0 === t && (t = !0), s.add(e), u && t && u.add(n.transformMessage ? n.transformMessage(e) : e)
                    },
                    upsert: function(e, t) {
                        s.upsert(e, t), u && u.upsert(n.transformMessage ? n.transformMessage(e) : e, t)
                    },
                    stop: function() {
                        s.stop(), u && u.stop()
                    }
                }
            }
        },
        92594: (e, t, n) => {
            n.d(t, {
                DJ: () => s,
                vG: () => u,
                wg: () => a,
                yb: () => c
            });
            var r = n(43162),
                o = n(61893),
                i = n(13691);

            function a(e, t) {
                return (0, r.W)((0, i.V)(), "setTimeout")((0, o.dm)(e), t)
            }

            function s(e) {
                (0, r.W)((0, i.V)(), "clearTimeout")(e)
            }

            function c(e, t) {
                return (0, r.W)((0, i.V)(), "setInterval")((0, o.dm)(e), t)
            }

            function u(e) {
                (0, r.W)((0, i.V)(), "clearInterval")(e)
            }
        },
        94752: (e, t, n) => {
            n.d(t, {
                O: () => o
            });
            var r = n(6769);

            function o() {
                var e = [];
                return {
                    add: function(t) {
                        e.push(t) > 500 && e.splice(0, 1)
                    },
                    remove: function(t) {
                        (0, r.A)(e, t)
                    },
                    drain: function(t) {
                        e.forEach(function(e) {
                            return e(t)
                        }), e.length = 0
                    }
                }
            }
        },
        95463: (e, t, n) => {
            function r(e) {
                return 0 !== e && 100 * Math.random() <= e
            }

            function o(e, t) {
                return +e.toFixed(t)
            }

            function i(e) {
                return a(e) && e >= 0 && e <= 100
            }

            function a(e) {
                return "number" == typeof e
            }
            n.d(t, {
                Et: () => a,
                LI: () => o,
                fp: () => i,
                ic: () => r
            })
        },
        96741: (e, t, n) => {
            n.d(t, {
                D: () => r
            });
            var r = function() {
                function e() {
                    this.callbacks = {}
                }
                return e.prototype.notify = function(e, t) {
                    var n = this.callbacks[e];
                    n && n.forEach(function(e) {
                        return e(t)
                    })
                }, e.prototype.subscribe = function(e, t) {
                    var n = this;
                    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), {
                        unsubscribe: function() {
                            n.callbacks[e] = n.callbacks[e].filter(function(e) {
                                return t !== e
                            })
                        }
                    }
                }, e
            }()
        },
        97891: (e, t, n) => {
            n.d(t, {
                G: () => f
            });
            var r, o = n(16741),
                i = n(25860),
                a = n(18435),
                s = n(51491),
                c = n(69853),
                u = n(86969),
                d = new WeakMap;

            function f(e) {
                var t;
                return r || (t = e, r = new i.c(function(e) {
                    var n = (0, o.H)(XMLHttpRequest.prototype, "open", l).stop,
                        r = (0, o.H)(XMLHttpRequest.prototype, "send", function(n) {
                            ! function(e, t, n) {
                                var r = e.target,
                                    i = e.handlingStack,
                                    s = d.get(r);
                                if (s) {
                                    s.state = "start", s.startClocks = (0, a.M8)(), s.isAborted = !1, s.xhr = r, s.handlingStack = i;
                                    var f = !1,
                                        l = (0, o.H)(r, "onreadystatechange", function() {
                                            r.readyState === XMLHttpRequest.DONE && p()
                                        }).stop,
                                        p = function() {
                                            v(), l(), f || (f = !0, s.state = "complete", s.duration = (0, a.vk)(s.startClocks.timeStamp, (0, a.nx)()), s.status = r.status, n.notify((0, c.yG)(s)))
                                        },
                                        v = (0, u.q)(t, r, "loadend", p).stop;
                                    n.notify(s)
                                }
                            }(n, t, e)
                        }, {
                            computeHandlingStack: !0
                        }).stop,
                        i = (0, o.H)(XMLHttpRequest.prototype, "abort", p).stop;
                    return function() {
                        n(), r(), i()
                    }
                })), r
            }

            function l(e) {
                var t = e.target,
                    n = e.parameters,
                    r = n[0],
                    o = n[1];
                d.set(t, {
                    state: "open",
                    method: String(r).toUpperCase(),
                    url: (0, s.l2)(String(o))
                })
            }

            function p(e) {
                var t = e.target,
                    n = d.get(t);
                n && (n.isAborted = !0)
            }
        },
        98341: (e, t, n) => {
            n.d(t, {
                Sz: () => y,
                WA: () => p,
                bX: () => m,
                hO: () => h,
                uT: () => v
            });
            var r = n(26928),
                o = n(5437),
                i = n(18435),
                a = n(95463),
                s = n(12542),
                c = n(69853),
                u = n(23325),
                d = n(14807),
                f = n(80547),
                l = n(51797),
                p = {
                    ALLOW: "allow",
                    MASK: "mask",
                    MASK_USER_INPUT: "mask-user-input"
                },
                v = {
                    ALL: "all",
                    SAMPLED: "sampled"
                };

            function g(e, t) {
                return null == e || "string" == typeof e || (o.Vy.error("".concat(t, " must be defined as a string")), !1)
            }

            function m(e, t) {
                return void 0 === e || !!(0, a.fp)(e) || (o.Vy.error("".concat(t, " Sample Rate should be a number between 0 and 100")), !1)
            }

            function y(e) {
                var t, n, a, p, v, y;
                return e && e.clientToken ? (!(y = e.site) || "string" != typeof y || /(datadog|ddog|datad0g|dd0g)/.test(y) || (o.Vy.error("Site should be a valid Datadog site. ".concat(o.xG, " ").concat(o.fH, "/getting_started/site/.")), 0)) && m(e.sessionSampleRate, "Session") && m(e.telemetrySampleRate, "Telemetry") && m(e.telemetryConfigurationSampleRate, "Telemetry Configuration") && m(e.telemetryUsageSampleRate, "Telemetry Usage") && g(e.version, "Version") && g(e.env, "Env") && g(e.service, "Service") ? void 0 === e.trackingConsent || (0, c.Rj)(f.w, e.trackingConsent) ? (0, u.kp)({
                    beforeSend: e.beforeSend && (0, r.y)(e.beforeSend, "beforeSend threw an error:"),
                    sessionStoreStrategyType: (0, d.nd)(e),
                    sessionSampleRate: null != (t = e.sessionSampleRate) ? t : 100,
                    telemetrySampleRate: null != (n = e.telemetrySampleRate) ? n : 20,
                    telemetryConfigurationSampleRate: null != (a = e.telemetryConfigurationSampleRate) ? a : 5,
                    telemetryUsageSampleRate: null != (p = e.telemetryUsageSampleRate) ? p : 5,
                    service: e.service || void 0,
                    silentMultipleInit: !!e.silentMultipleInit,
                    allowUntrustedEvents: !!e.allowUntrustedEvents,
                    trackingConsent: null != (v = e.trackingConsent) ? v : f.w.GRANTED,
                    storeContextsAcrossPages: !!e.storeContextsAcrossPages,
                    batchBytesLimit: 16 * s._m,
                    eventRateLimiterThreshold: 3e3,
                    maxTelemetryEventsPerPage: 15,
                    flushTimeout: 30 * i.OY,
                    batchMessagesLimit: 50,
                    messageBytesLimit: 256 * s._m
                }, (0, l.T)(e)) : void o.Vy.error('Tracking Consent should be either "granted" or "not-granted"') : void 0 : void o.Vy.error("Client Token is not configured, we will not send any data.")
            }

            function h(e) {
                return {
                    session_sample_rate: e.sessionSampleRate,
                    telemetry_sample_rate: e.telemetrySampleRate,
                    telemetry_configuration_sample_rate: e.telemetryConfigurationSampleRate,
                    telemetry_usage_sample_rate: e.telemetryUsageSampleRate,
                    use_before_send: !!e.beforeSend,
                    use_cross_site_session_cookie: e.useCrossSiteSessionCookie,
                    use_partitioned_cross_site_session_cookie: e.usePartitionedCrossSiteSessionCookie,
                    use_secure_session_cookie: e.useSecureSessionCookie,
                    use_proxy: !!e.proxy,
                    silent_multiple_init: e.silentMultipleInit,
                    track_session_across_subdomains: e.trackSessionAcrossSubdomains,
                    session_persistence: e.sessionPersistence,
                    allow_fallback_to_local_storage: !!e.allowFallbackToLocalStorage,
                    store_contexts_across_pages: !!e.storeContextsAcrossPages,
                    allow_untrusted_events: !!e.allowUntrustedEvents,
                    tracking_consent: e.trackingConsent
                }
            }
        },
        99874: (e, t, n) => {
            n.d(t, {
                V: () => f,
                u: () => l
            });
            var r = n(18932),
                o = n(61893),
                i = n(25860),
                a = n(86969),
                s = n(23325),
                c = n(7215),
                u = n(67338),
                d = n(18435),
                f = {
                    intervention: "intervention",
                    deprecation: "deprecation",
                    cspViolation: "csp_violation"
                };

            function l(e, t) {
                var n, r, u = [];
                (0, s.mK)(t, f.cspViolation) && u.push((n = e, new i.c(function(e) {
                    return (0, a.q)(n, document, "securitypolicyviolation", function(t) {
                        var n, r;
                        e.notify((n = t, r = "'".concat(n.blockedURI, "' blocked by '").concat(n.effectiveDirective, "' directive"), p({
                            type: n.effectiveDirective,
                            message: "".concat(f.cspViolation, ": ").concat(r),
                            originalError: n,
                            csp: {
                                disposition: n.disposition
                            },
                            stack: v(n.effectiveDirective, n.originalPolicy ? "".concat(r, ' of the policy "').concat((0, c._R)(n.originalPolicy, 100, "..."), '"') : "no policy", n.sourceFile, n.lineNumber, n.columnNumber)
                        })))
                    }).stop
                })));
                var d = t.filter(function(e) {
                    return e !== f.cspViolation
                });
                return d.length && u.push((r = d, new i.c(function(e) {
                    if (window.ReportingObserver) {
                        var t = (0, o.dm)(function(t, n) {
                                return t.forEach(function(t) {
                                    var n, r, o;
                                    return e.notify((r = (n = t).type, p({
                                        type: (o = n.body).id,
                                        message: "".concat(r, ": ").concat(o.message),
                                        originalError: n,
                                        stack: v(o.id, o.message, o.sourceFile, o.lineNumber, o.columnNumber)
                                    })))
                                })
                            }),
                            n = new window.ReportingObserver(t, {
                                types: r,
                                buffered: !0
                            });
                        return n.observe(),
                            function() {
                                n.disconnect()
                            }
                    }
                }))), i.F.apply(void 0, u)
            }

            function p(e) {
                return (0, s.kp)({
                    startClocks: (0, d.M8)(),
                    source: u.g.REPORT,
                    handling: "unhandled"
                }, e)
            }

            function v(e, t, n, o, i) {
                return n ? (0, r.Yn)({
                    name: e,
                    message: t,
                    stack: [{
                        func: "?",
                        url: n,
                        line: null != o ? o : void 0,
                        column: null != i ? i : void 0
                    }]
                }) : void 0
            }
        }
    }
]);
//# sourceMappingURL=47491-aad755fdc65aa060.js.map