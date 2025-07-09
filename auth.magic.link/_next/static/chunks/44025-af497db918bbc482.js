"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [44025], {
        30800: function(e, t, n) {
            var r = this && this.__assign || function() {
                    return (r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                i = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
                    return n
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasCookie = t.deleteCookie = t.setCookie = t.getCookie = t.getCookies = void 0;
            var o = n(39942),
                a = function() {
                    return "undefined" != typeof window
                },
                s = function(e) {
                    return !!e && "getAll" in e && "set" in e && "function" == typeof e.getAll && "function" == typeof e.set
                },
                u = function(e) {
                    return !!(null == e ? void 0 : e.req) && "cookies" in e.req && s(null == e ? void 0 : e.req.cookies) || !!(null == e ? void 0 : e.res) && "cookies" in e.res && s(null == e ? void 0 : e.res.cookies) || !!(null == e ? void 0 : e.cookies) && s(e.cookies())
                },
                l = function(e) {
                    var t = {};
                    return e.getAll().forEach(function(e) {
                        var n = e.name,
                            r = e.value;
                        t[n] = r
                    }), t
                },
                c = function(e) {
                    try {
                        if ("string" == typeof e) return e;
                        return JSON.stringify(e)
                    } catch (t) {
                        return e
                    }
                };
            t.getCookies = function(e) {
                if (u(e)) {
                    if (null == e ? void 0 : e.req) return l(e.req.cookies);
                    if (null == e ? void 0 : e.cookies) return l(e.cookies())
                }
                if (e && (t = e.req), !a()) return t && t.cookies ? t.cookies : t && t.headers.cookie ? (0, o.parse)(t.headers.cookie) : {};
                for (var t, n = {}, r = document.cookie ? document.cookie.split("; ") : [], i = 0, s = r.length; i < s; i++) {
                    var c = r[i].split("="),
                        d = c.slice(1).join("=");
                    n[c[0]] = d
                }
                return n
            }, t.getCookie = function(e, n) {
                var r = (0, t.getCookies)(n)[e];
                if (void 0 !== r) return r ? r.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : r
            }, t.setCookie = function(e, t, n) {
                if (u(n)) {
                    var s, l, d, f = n.req,
                        h = n.res,
                        p = n.cookies,
                        g = i(n, ["req", "res", "cookies"]),
                        v = r({
                            name: e,
                            value: c(t)
                        }, g);
                    f && f.cookies.set(v), h && h.cookies.set(v), p && p().set(v);
                    return
                }
                if (n) {
                    var f = n.req,
                        h = n.res,
                        m = i(n, ["req", "res"]);
                    l = f, d = h, s = m
                }
                var y = (0, o.serialize)(e, c(t), r({
                    path: "/"
                }, s));
                if (a()) document.cookie = y;
                else if (d && l) {
                    var b = d.getHeader("Set-Cookie");
                    if (Array.isArray(b) || (b = b ? [String(b)] : []), d.setHeader("Set-Cookie", b.concat(y)), l && l.cookies) {
                        var w = l.cookies;
                        "" === t ? delete w[e] : w[e] = c(t)
                    }
                    if (l && l.headers && l.headers.cookie) {
                        var w = (0, o.parse)(l.headers.cookie);
                        "" === t ? delete w[e] : w[e] = c(t), l.headers.cookie = Object.entries(w).reduce(function(e, t) {
                            return e.concat("".concat(t[0], "=").concat(t[1], ";"))
                        }, "")
                    }
                }
            }, t.deleteCookie = function(e, n) {
                return (0, t.setCookie)(e, "", r(r({}, n), {
                    maxAge: -1
                }))
            }, t.hasCookie = function(e, n) {
                return !!e && (0, t.getCookies)(n).hasOwnProperty(e)
            }
        },
        31052: (e, t, n) => {
            n.d(t, {
                E: () => p
            });
            var r = n(80638),
                i = n(78927),
                o = n(659),
                a = n(87900),
                s = class extends a.Q {
                    constructor(e = {}) {
                        super(), this.config = e, this.#e = new Map
                    }#
                    e;
                    build(e, t, n) {
                        let o = t.queryKey,
                            a = t.queryHash ? ? (0, r.F$)(o, t),
                            s = this.get(a);
                        return s || (s = new i.X({
                            client: e,
                            queryKey: o,
                            queryHash: a,
                            options: e.defaultQueryOptions(t),
                            state: n,
                            defaultOptions: e.getQueryDefaults(o)
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
                        o.jG.batch(() => {
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
                        return this.getAll().find(e => (0, r.MK)(t, e))
                    }
                    findAll(e = {}) {
                        let t = this.getAll();
                        return Object.keys(e).length > 0 ? t.filter(t => (0, r.MK)(e, t)) : t
                    }
                    notify(e) {
                        o.jG.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    onFocus() {
                        o.jG.batch(() => {
                            this.getAll().forEach(e => {
                                e.onFocus()
                            })
                        })
                    }
                    onOnline() {
                        o.jG.batch(() => {
                            this.getAll().forEach(e => {
                                e.onOnline()
                            })
                        })
                    }
                },
                u = n(31738),
                l = class extends a.Q {
                    constructor(e = {}) {
                        super(), this.config = e, this.#t = new Set, this.#n = new Map, this.#r = 0
                    }#
                    t;#
                    n;#
                    r;
                    build(e, t, n) {
                        let r = new u.s({
                            mutationCache: this,
                            mutationId: ++this.#r,
                            options: e.defaultMutationOptions(t),
                            state: n
                        });
                        return this.add(r), r
                    }
                    add(e) {
                        this.#t.add(e);
                        let t = c(e);
                        if ("string" == typeof t) {
                            let n = this.#n.get(t);
                            n ? n.push(e) : this.#n.set(t, [e])
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
                                let n = this.#n.get(t);
                                if (n)
                                    if (n.length > 1) {
                                        let t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                                    } else n[0] === e && this.#n.delete(t)
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
                            let n = this.#n.get(t),
                                r = n ? .find(e => "pending" === e.state.status);
                            return !r || r === e
                        }
                    }
                    runNext(e) {
                        let t = c(e);
                        if ("string" != typeof t) return Promise.resolve(); {
                            let n = this.#n.get(t) ? .find(t => t !== e && t.state.isPaused);
                            return n ? .continue() ? ? Promise.resolve()
                        }
                    }
                    clear() {
                        o.jG.batch(() => {
                            this.#t.forEach(e => {
                                this.notify({
                                    type: "removed",
                                    mutation: e
                                })
                            }), this.#t.clear(), this.#n.clear()
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
                        return this.getAll().find(e => (0, r.nJ)(t, e))
                    }
                    findAll(e = {}) {
                        return this.getAll().filter(t => (0, r.nJ)(e, t))
                    }
                    notify(e) {
                        o.jG.batch(() => {
                            this.listeners.forEach(t => {
                                t(e)
                            })
                        })
                    }
                    resumePausedMutations() {
                        let e = this.getAll().filter(e => e.state.isPaused);
                        return o.jG.batch(() => Promise.all(e.map(e => e.continue().catch(r.lQ))))
                    }
                };

            function c(e) {
                return e.options.scope ? .id
            }
            var d = n(28086),
                f = n(59213),
                h = n(13377),
                p = class {#
                    i;#
                    o;#
                    a;#
                    s;#
                    u;#
                    l;#
                    c;#
                    d;
                    constructor(e = {}) {
                        this.#i = e.queryCache || new s, this.#o = e.mutationCache || new l, this.#a = e.defaultOptions || {}, this.#s = new Map, this.#u = new Map, this.#l = 0
                    }
                    mount() {
                        this.#l++, 1 === this.#l && (this.#c = d.m.subscribe(async e => {
                            e && (await this.resumePausedMutations(), this.#i.onFocus())
                        }), this.#d = f.t.subscribe(async e => {
                            e && (await this.resumePausedMutations(), this.#i.onOnline())
                        }))
                    }
                    unmount() {
                        this.#l--, 0 === this.#l && (this.#c ? .(), this.#c = void 0, this.#d ? .(), this.#d = void 0)
                    }
                    isFetching(e) {
                        return this.#i.findAll({ ...e,
                            fetchStatus: "fetching"
                        }).length
                    }
                    isMutating(e) {
                        return this.#o.findAll({ ...e,
                            status: "pending"
                        }).length
                    }
                    getQueryData(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e
                        });
                        return this.#i.get(t.queryHash) ? .state.data
                    }
                    ensureQueryData(e) {
                        let t = this.defaultQueryOptions(e),
                            n = this.#i.build(this, t),
                            i = n.state.data;
                        return void 0 === i ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime((0, r.d2)(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(i))
                    }
                    getQueriesData(e) {
                        return this.#i.findAll(e).map(({
                            queryKey: e,
                            state: t
                        }) => [e, t.data])
                    }
                    setQueryData(e, t, n) {
                        let i = this.defaultQueryOptions({
                                queryKey: e
                            }),
                            o = this.#i.get(i.queryHash),
                            a = o ? .state.data,
                            s = (0, r.Zw)(t, a);
                        if (void 0 !== s) return this.#i.build(this, i).setData(s, { ...n,
                            manual: !0
                        })
                    }
                    setQueriesData(e, t, n) {
                        return o.jG.batch(() => this.#i.findAll(e).map(({
                            queryKey: e
                        }) => [e, this.setQueryData(e, t, n)]))
                    }
                    getQueryState(e) {
                        let t = this.defaultQueryOptions({
                            queryKey: e
                        });
                        return this.#i.get(t.queryHash) ? .state
                    }
                    removeQueries(e) {
                        let t = this.#i;
                        o.jG.batch(() => {
                            t.findAll(e).forEach(e => {
                                t.remove(e)
                            })
                        })
                    }
                    resetQueries(e, t) {
                        let n = this.#i;
                        return o.jG.batch(() => (n.findAll(e).forEach(e => {
                            e.reset()
                        }), this.refetchQueries({
                            type: "active",
                            ...e
                        }, t)))
                    }
                    cancelQueries(e, t = {}) {
                        let n = {
                            revert: !0,
                            ...t
                        };
                        return Promise.all(o.jG.batch(() => this.#i.findAll(e).map(e => e.cancel(n)))).then(r.lQ).catch(r.lQ)
                    }
                    invalidateQueries(e, t = {}) {
                        return o.jG.batch(() => (this.#i.findAll(e).forEach(e => {
                            e.invalidate()
                        }), e ? .refetchType === "none") ? Promise.resolve() : this.refetchQueries({ ...e,
                            type: e ? .refetchType ? ? e ? .type ? ? "active"
                        }, t))
                    }
                    refetchQueries(e, t = {}) {
                        let n = { ...t,
                            cancelRefetch: t.cancelRefetch ? ? !0
                        };
                        return Promise.all(o.jG.batch(() => this.#i.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
                            let t = e.fetch(void 0, n);
                            return n.throwOnError || (t = t.catch(r.lQ)), "paused" === e.state.fetchStatus ? Promise.resolve() : t
                        }))).then(r.lQ)
                    }
                    fetchQuery(e) {
                        let t = this.defaultQueryOptions(e);
                        void 0 === t.retry && (t.retry = !1);
                        let n = this.#i.build(this, t);
                        return n.isStaleByTime((0, r.d2)(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
                    }
                    prefetchQuery(e) {
                        return this.fetchQuery(e).then(r.lQ).catch(r.lQ)
                    }
                    fetchInfiniteQuery(e) {
                        return e.behavior = (0, h.PL)(e.pages), this.fetchQuery(e)
                    }
                    prefetchInfiniteQuery(e) {
                        return this.fetchInfiniteQuery(e).then(r.lQ).catch(r.lQ)
                    }
                    ensureInfiniteQueryData(e) {
                        return e.behavior = (0, h.PL)(e.pages), this.ensureQueryData(e)
                    }
                    resumePausedMutations() {
                        return f.t.isOnline() ? this.#o.resumePausedMutations() : Promise.resolve()
                    }
                    getQueryCache() {
                        return this.#i
                    }
                    getMutationCache() {
                        return this.#o
                    }
                    getDefaultOptions() {
                        return this.#a
                    }
                    setDefaultOptions(e) {
                        this.#a = e
                    }
                    setQueryDefaults(e, t) {
                        this.#s.set((0, r.EN)(e), {
                            queryKey: e,
                            defaultOptions: t
                        })
                    }
                    getQueryDefaults(e) {
                        let t = [...this.#s.values()],
                            n = {};
                        return t.forEach(t => {
                            (0, r.Cp)(e, t.queryKey) && Object.assign(n, t.defaultOptions)
                        }), n
                    }
                    setMutationDefaults(e, t) {
                        this.#u.set((0, r.EN)(e), {
                            mutationKey: e,
                            defaultOptions: t
                        })
                    }
                    getMutationDefaults(e) {
                        let t = [...this.#u.values()],
                            n = {};
                        return t.forEach(t => {
                            (0, r.Cp)(e, t.mutationKey) && Object.assign(n, t.defaultOptions)
                        }), n
                    }
                    defaultQueryOptions(e) {
                        if (e._defaulted) return e;
                        let t = { ...this.#a.queries,
                            ...this.getQueryDefaults(e.queryKey),
                            ...e,
                            _defaulted: !0
                        };
                        return t.queryHash || (t.queryHash = (0, r.F$)(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.throwOnError && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === r.hT && (t.enabled = !1), t
                    }
                    defaultMutationOptions(e) {
                        return e ? ._defaulted ? e : { ...this.#a.mutations,
                            ...e ? .mutationKey && this.getMutationDefaults(e.mutationKey),
                            ...e,
                            _defaulted : !0
                        }
                    }
                    clear() {
                        this.#i.clear(), this.#o.clear()
                    }
                }
        },
        39942: (e, t) => {
            t.parse = function(e, t) {
                if ("string" != typeof e) throw TypeError("argument str must be a string");
                var n = {},
                    i = e.length;
                if (i < 2) return n;
                var o = t && t.decode || c,
                    a = 0,
                    s = 0,
                    d = 0;
                do {
                    if (-1 === (s = e.indexOf("=", a))) break;
                    if (-1 === (d = e.indexOf(";", a))) d = i;
                    else if (s > d) {
                        a = e.lastIndexOf(";", s - 1) + 1;
                        continue
                    }
                    var f = u(e, a, s),
                        h = l(e, s, f),
                        p = e.slice(f, h);
                    if (!r.call(n, p)) {
                        var g = u(e, s + 1, d),
                            v = l(e, d, g);
                        34 === e.charCodeAt(g) && 34 === e.charCodeAt(v - 1) && (g++, v--);
                        var m = e.slice(g, v);
                        n[p] = function(e, t) {
                            try {
                                return t(e)
                            } catch (t) {
                                return e
                            }
                        }(m, o)
                    }
                    a = d + 1
                } while (a < i);
                return n
            }, t.serialize = function(e, t, r) {
                var u = r && r.encode || encodeURIComponent;
                if ("function" != typeof u) throw TypeError("option encode is invalid");
                if (!i.test(e)) throw TypeError("argument name is invalid");
                var l = u(t);
                if (!o.test(l)) throw TypeError("argument val is invalid");
                var c = e + "=" + l;
                if (!r) return c;
                if (null != r.maxAge) {
                    var d = Math.floor(r.maxAge);
                    if (!isFinite(d)) throw TypeError("option maxAge is invalid");
                    c += "; Max-Age=" + d
                }
                if (r.domain) {
                    if (!a.test(r.domain)) throw TypeError("option domain is invalid");
                    c += "; Domain=" + r.domain
                }
                if (r.path) {
                    if (!s.test(r.path)) throw TypeError("option path is invalid");
                    c += "; Path=" + r.path
                }
                if (r.expires) {
                    var f, h = r.expires;
                    if (f = h, "[object Date]" !== n.call(f) || isNaN(h.valueOf())) throw TypeError("option expires is invalid");
                    c += "; Expires=" + h.toUTCString()
                }
                if (r.httpOnly && (c += "; HttpOnly"), r.secure && (c += "; Secure"), r.partitioned && (c += "; Partitioned"), r.priority) switch ("string" == typeof r.priority ? r.priority.toLowerCase() : r.priority) {
                    case "low":
                        c += "; Priority=Low";
                        break;
                    case "medium":
                        c += "; Priority=Medium";
                        break;
                    case "high":
                        c += "; Priority=High";
                        break;
                    default:
                        throw TypeError("option priority is invalid")
                }
                if (r.sameSite) switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                    case !0:
                    case "strict":
                        c += "; SameSite=Strict";
                        break;
                    case "lax":
                        c += "; SameSite=Lax";
                        break;
                    case "none":
                        c += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return c
            };
            var n = Object.prototype.toString,
                r = Object.prototype.hasOwnProperty,
                i = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
                o = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,
                a = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                s = /^[\u0020-\u003A\u003D-\u007E]*$/;

            function u(e, t, n) {
                do {
                    var r = e.charCodeAt(t);
                    if (32 !== r && 9 !== r) return t
                } while (++t < n);
                return n
            }

            function l(e, t, n) {
                for (; t > n;) {
                    var r = e.charCodeAt(--t);
                    if (32 !== r && 9 !== r) return t + 1
                }
                return n
            }

            function c(e) {
                return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
            }
        },
        57812: (e, t, n) => {
            function r(e) {
                function t(e, t) {
                    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.message = e, this.code = t
                }
                return t.prototype = Error(), t.prototype.name = e, t.prototype.constructor = t, t
            }
            n.d(t, {
                n_: () => tw
            });
            let i = r("LaunchDarklyUnexpectedResponseError"),
                o = r("LaunchDarklyInvalidEnvironmentIdError"),
                a = r("LaunchDarklyInvalidUserError"),
                s = r("LaunchDarklyInvalidEventKeyError"),
                u = r("LaunchDarklyInvalidArgumentError"),
                l = r("LaunchDarklyFlagFetchError");
            for (var c = {
                    LDUnexpectedResponseError: i,
                    LDInvalidEnvironmentIdError: o,
                    LDInvalidUserError: a,
                    LDInvalidEventKeyError: s,
                    LDInvalidArgumentError: u,
                    LDInvalidDataError: r("LaunchDarklyInvalidDataError"),
                    LDFlagFetchError: l,
                    LDTimeoutError: r("LaunchDarklyTimeoutError"),
                    isHttpErrorRecoverable: function(e) {
                        return !(e >= 400 && e < 500) || 400 === e || 408 === e || 429 === e
                    }
                }, d = [], f = [], h = ("undefined" != typeof Uint8Array && Uint8Array, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), p = 0; p < 64; ++p) d[p] = h[p], f[h.charCodeAt(p)] = p;
            f[45] = 62, f[95] = 63;
            var g = {
                    fromByteArray: function(e) {
                        for (var t, n = e.length, r = n % 3, i = [], o = 0, a = n - r; o < a; o += 16383) i.push(function(e, t, n) {
                            for (var r, i = [], o = t; o < n; o += 3) i.push(d[(r = (e[o] << 16 & 0xff0000) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2])) >> 18 & 63] + d[r >> 12 & 63] + d[r >> 6 & 63] + d[63 & r]);
                            return i.join("")
                        }(e, o, o + 16383 > a ? a : o + 16383));
                        return 1 === r ? i.push(d[(t = e[n - 1]) >> 2] + d[t << 4 & 63] + "==") : 2 === r && i.push(d[(t = (e[n - 2] << 8) + e[n - 1]) >> 10] + d[t >> 4 & 63] + d[t << 2 & 63] + "="), i.join("")
                    }
                },
                v = Array.isArray,
                m = Object.keys,
                y = Object.prototype.hasOwnProperty,
                b = function e(t, n) {
                    if (t === n) return !0;
                    if (t && n && "object" == typeof t && "object" == typeof n) {
                        var r, i, o, a = v(t),
                            s = v(n);
                        if (a && s) {
                            if ((i = t.length) != n.length) return !1;
                            for (r = i; 0 != r--;)
                                if (!e(t[r], n[r])) return !1;
                            return !0
                        }
                        if (a != s) return !1;
                        var u = t instanceof Date,
                            l = n instanceof Date;
                        if (u != l) return !1;
                        if (u && l) return t.getTime() == n.getTime();
                        var c = t instanceof RegExp,
                            d = n instanceof RegExp;
                        if (c != d) return !1;
                        if (c && d) return t.toString() == n.toString();
                        var f = m(t);
                        if ((i = f.length) !== m(n).length) return !1;
                        for (r = i; 0 != r--;)
                            if (!y.call(n, f[r])) return !1;
                        for (r = i; 0 != r--;)
                            if (!e(t[o = f[r]], n[o])) return !1;
                        return !0
                    }
                    return t != t && n != n
                };
            let w = ["key", "ip", "country", "email", "firstName", "lastName", "avatar", "name"];

            function k(e) {
                let t = unescape(encodeURIComponent(e));
                return g.fromByteArray(function(e) {
                    let t = [];
                    for (let n = 0; n < e.length; n++) t.push(e.charCodeAt(n));
                    return t
                }(t))
            }

            function E(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var x, C = {
                    appendUrlPath: function(e, t) {
                        return (e.endsWith("/") ? e.substring(0, e.length - 1) : e) + (t.startsWith("/") ? "" : "/") + t
                    },
                    base64URLEncode: function(e) {
                        return k(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                    },
                    btoa: k,
                    clone: function(e) {
                        return JSON.parse(JSON.stringify(e))
                    },
                    deepEquals: function(e, t) {
                        return b(e, t)
                    },
                    extend: function(...e) {
                        return e.reduce((e, t) => ({ ...e,
                            ...t
                        }), {})
                    },
                    getLDUserAgentString: function(e) {
                        let t = e.version || "?";
                        return e.userAgent + "/" + t
                    },
                    objectHasOwnProperty: E,
                    onNextTick: function(e) {
                        setTimeout(e, 0)
                    },
                    sanitizeContext: function(e) {
                        let t;
                        return e ? (null !== e.kind && void 0 !== e.kind || w.forEach(n => {
                            let r = e[n];
                            void 0 !== r && "string" != typeof r && ((t = t || { ...e
                            })[n] = String(r))
                        }), t || e) : e
                    },
                    transformValuesToVersionedValues: function(e) {
                        let t = {};
                        for (let n in e) E(e, n) && (t[n] = {
                            value: e[n],
                            version: 0
                        });
                        return t
                    },
                    transformVersionedValuesToValues: function(e) {
                        let t = {};
                        for (let n in e) E(e, n) && (t[n] = e[n].value);
                        return t
                    },
                    wrapPromiseCallback: function(e, t) {
                        let n = e.then(e => (t && setTimeout(() => {
                            t(null, e)
                        }, 0), e), e => {
                            if (!t) return Promise.reject(e);
                            setTimeout(() => {
                                t(e, null)
                            }, 0)
                        });
                        return t ? void 0 : n
                    },
                    once: function(e) {
                        let t, n = !1;
                        return function(...r) {
                            return n || (n = !0, t = e.apply(this, r)), t
                        }
                    }
                },
                D = new Uint8Array(16);

            function O() {
                if (!x && !(x = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return x(D)
            }
            var P = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

            function S(e) {
                return "string" == typeof e && P.test(e)
            }
            for (var I, T, A = [], j = 0; j < 256; ++j) A.push((j + 256).toString(16).substr(1));

            function U(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (A[e[t + 0]] + A[e[t + 1]] + A[e[t + 2]] + A[e[t + 3]] + "-" + A[e[t + 4]] + A[e[t + 5]] + "-" + A[e[t + 6]] + A[e[t + 7]] + "-" + A[e[t + 8]] + A[e[t + 9]] + "-" + A[e[t + 10]] + A[e[t + 11]] + A[e[t + 12]] + A[e[t + 13]] + A[e[t + 14]] + A[e[t + 15]]).toLowerCase();
                if (!S(n)) throw TypeError("Stringified UUID is invalid");
                return n
            }
            var L = 0,
                R = 0;

            function q(e) {
                if (!S(e)) throw TypeError("Invalid UUID");
                var t, n = new Uint8Array(16);
                return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 0x10000000000 & 255, n[11] = t / 0x100000000 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
            }

            function F(e, t, n) {
                function r(e, r, i, o) {
                    if ("string" == typeof e && (e = function(e) {
                            e = unescape(encodeURIComponent(e));
                            for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                            return t
                        }(e)), "string" == typeof r && (r = q(r)), 16 !== r.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                    var a = new Uint8Array(16 + e.length);
                    if (a.set(r), a.set(e, r.length), (a = n(a))[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, i) {
                        o = o || 0;
                        for (var s = 0; s < 16; ++s) i[o + s] = a[s];
                        return i
                    }
                    return U(a)
                }
                try {
                    r.name = e
                } catch (e) {}
                return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
            }

            function N(e) {
                return 14 + (e + 64 >>> 9 << 4) + 1
            }

            function M(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }

            function $(e, t, n, r, i, o) {
                var a;
                return M((a = M(M(t, e), M(r, o))) << i | a >>> 32 - i, n)
            }

            function H(e, t, n, r, i, o, a) {
                return $(t & n | ~t & r, e, t, i, o, a)
            }

            function V(e, t, n, r, i, o, a) {
                return $(t & r | n & ~r, e, t, i, o, a)
            }

            function Q(e, t, n, r, i, o, a) {
                return $(t ^ n ^ r, e, t, i, o, a)
            }

            function _(e, t, n, r, i, o, a) {
                return $(n ^ (t | ~r), e, t, i, o, a)
            }

            function z(e, t) {
                return e << t | e >>> 32 - t
            }
            var K = Object.freeze({
                __proto__: null,
                v1: function(e, t, n) {
                    var r = t && n || 0,
                        i = t || Array(16),
                        o = (e = e || {}).node || I,
                        a = void 0 !== e.clockseq ? e.clockseq : T;
                    if (null == o || null == a) {
                        var s = e.random || (e.rng || O)();
                        null == o && (o = I = [1 | s[0], s[1], s[2], s[3], s[4], s[5]]), null == a && (a = T = 16383 & (s[6] << 8 | s[7]))
                    }
                    var u = void 0 !== e.msecs ? e.msecs : Date.now(),
                        l = void 0 !== e.nsecs ? e.nsecs : R + 1,
                        c = u - L + (l - R) / 1e4;
                    if (c < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (c < 0 || u > L) && void 0 === e.nsecs && (l = 0), l >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
                    L = u, R = l, T = a;
                    var d = (1e4 * (0xfffffff & (u += 122192928e5)) + l) % 0x100000000;
                    i[r++] = d >>> 24 & 255, i[r++] = d >>> 16 & 255, i[r++] = d >>> 8 & 255, i[r++] = 255 & d;
                    var f = u / 0x100000000 * 1e4 & 0xfffffff;
                    i[r++] = f >>> 8 & 255, i[r++] = 255 & f, i[r++] = f >>> 24 & 15 | 16, i[r++] = f >>> 16 & 255, i[r++] = a >>> 8 | 128, i[r++] = 255 & a;
                    for (var h = 0; h < 6; ++h) i[r + h] = o[h];
                    return t || U(i)
                },
                v3: F("v3", 48, function(e) {
                    if ("string" == typeof e) {
                        var t = unescape(encodeURIComponent(e));
                        e = new Uint8Array(t.length);
                        for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n)
                    }
                    return function(e) {
                        for (var t = [], n = 32 * e.length, r = "0123456789abcdef", i = 0; i < n; i += 8) {
                            var o = e[i >> 5] >>> i % 32 & 255,
                                a = parseInt(r.charAt(o >>> 4 & 15) + r.charAt(15 & o), 16);
                            t.push(a)
                        }
                        return t
                    }(function(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[N(t) - 1] = t;
                        for (var n = 0x67452301, r = -0x10325477, i = -0x67452302, o = 0x10325476, a = 0; a < e.length; a += 16) {
                            var s = n,
                                u = r,
                                l = i,
                                c = o;
                            n = H(n, r, i, o, e[a], 7, -0x28955b88), o = H(o, n, r, i, e[a + 1], 12, -0x173848aa), i = H(i, o, n, r, e[a + 2], 17, 0x242070db), r = H(r, i, o, n, e[a + 3], 22, -0x3e423112), n = H(n, r, i, o, e[a + 4], 7, -0xa83f051), o = H(o, n, r, i, e[a + 5], 12, 0x4787c62a), i = H(i, o, n, r, e[a + 6], 17, -0x57cfb9ed), r = H(r, i, o, n, e[a + 7], 22, -0x2b96aff), n = H(n, r, i, o, e[a + 8], 7, 0x698098d8), o = H(o, n, r, i, e[a + 9], 12, -0x74bb0851), i = H(i, o, n, r, e[a + 10], 17, -42063), r = H(r, i, o, n, e[a + 11], 22, -0x76a32842), n = H(n, r, i, o, e[a + 12], 7, 0x6b901122), o = H(o, n, r, i, e[a + 13], 12, -0x2678e6d), i = H(i, o, n, r, e[a + 14], 17, -0x5986bc72), n = V(n, r = H(r, i, o, n, e[a + 15], 22, 0x49b40821), i, o, e[a + 1], 5, -0x9e1da9e), o = V(o, n, r, i, e[a + 6], 9, -0x3fbf4cc0), i = V(i, o, n, r, e[a + 11], 14, 0x265e5a51), r = V(r, i, o, n, e[a], 20, -0x16493856), n = V(n, r, i, o, e[a + 5], 5, -0x29d0efa3), o = V(o, n, r, i, e[a + 10], 9, 0x2441453), i = V(i, o, n, r, e[a + 15], 14, -0x275e197f), r = V(r, i, o, n, e[a + 4], 20, -0x182c0438), n = V(n, r, i, o, e[a + 9], 5, 0x21e1cde6), o = V(o, n, r, i, e[a + 14], 9, -0x3cc8f82a), i = V(i, o, n, r, e[a + 3], 14, -0xb2af279), r = V(r, i, o, n, e[a + 8], 20, 0x455a14ed), n = V(n, r, i, o, e[a + 13], 5, -0x561c16fb), o = V(o, n, r, i, e[a + 2], 9, -0x3105c08), i = V(i, o, n, r, e[a + 7], 14, 0x676f02d9), n = Q(n, r = V(r, i, o, n, e[a + 12], 20, -0x72d5b376), i, o, e[a + 5], 4, -378558), o = Q(o, n, r, i, e[a + 8], 11, -0x788e097f), i = Q(i, o, n, r, e[a + 11], 16, 0x6d9d6122), r = Q(r, i, o, n, e[a + 14], 23, -0x21ac7f4), n = Q(n, r, i, o, e[a + 1], 4, -0x5b4115bc), o = Q(o, n, r, i, e[a + 4], 11, 0x4bdecfa9), i = Q(i, o, n, r, e[a + 7], 16, -0x944b4a0), r = Q(r, i, o, n, e[a + 10], 23, -0x41404390), n = Q(n, r, i, o, e[a + 13], 4, 0x289b7ec6), o = Q(o, n, r, i, e[a], 11, -0x155ed806), i = Q(i, o, n, r, e[a + 3], 16, -0x2b10cf7b), r = Q(r, i, o, n, e[a + 6], 23, 0x4881d05), n = Q(n, r, i, o, e[a + 9], 4, -0x262b2fc7), o = Q(o, n, r, i, e[a + 12], 11, -0x1924661b), i = Q(i, o, n, r, e[a + 15], 16, 0x1fa27cf8), n = _(n, r = Q(r, i, o, n, e[a + 2], 23, -0x3b53a99b), i, o, e[a], 6, -0xbd6ddbc), o = _(o, n, r, i, e[a + 7], 10, 0x432aff97), i = _(i, o, n, r, e[a + 14], 15, -0x546bdc59), r = _(r, i, o, n, e[a + 5], 21, -0x36c5fc7), n = _(n, r, i, o, e[a + 12], 6, 0x655b59c3), o = _(o, n, r, i, e[a + 3], 10, -0x70f3336e), i = _(i, o, n, r, e[a + 10], 15, -1051523), r = _(r, i, o, n, e[a + 1], 21, -0x7a7ba22f), n = _(n, r, i, o, e[a + 8], 6, 0x6fa87e4f), o = _(o, n, r, i, e[a + 15], 10, -0x1d31920), i = _(i, o, n, r, e[a + 6], 15, -0x5cfebcec), r = _(r, i, o, n, e[a + 13], 21, 0x4e0811a1), n = _(n, r, i, o, e[a + 4], 6, -0x8ac817e), o = _(o, n, r, i, e[a + 11], 10, -0x42c50dcb), i = _(i, o, n, r, e[a + 2], 15, 0x2ad7d2bb), r = _(r, i, o, n, e[a + 9], 21, -0x14792c6f), n = M(n, s), r = M(r, u), i = M(i, l), o = M(o, c)
                        }
                        return [n, r, i, o]
                    }(function(e) {
                        if (0 === e.length) return [];
                        for (var t = 8 * e.length, n = new Uint32Array(N(t)), r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
                        return n
                    }(e), 8 * e.length))
                }),
                v4: function(e, t, n) {
                    var r = (e = e || {}).random || (e.rng || O)();
                    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                        n = n || 0;
                        for (var i = 0; i < 16; ++i) t[n + i] = r[i];
                        return t
                    }
                    return U(r)
                },
                v5: F("v5", 80, function(e) {
                    var t = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6],
                        n = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
                    if ("string" == typeof e) {
                        var r = unescape(encodeURIComponent(e));
                        e = [];
                        for (var i = 0; i < r.length; ++i) e.push(r.charCodeAt(i))
                    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                    e.push(128);
                    for (var o = e.length / 4 + 2, a = Math.ceil(o / 16), s = Array(a), u = 0; u < a; ++u) {
                        for (var l = new Uint32Array(16), c = 0; c < 16; ++c) l[c] = e[64 * u + 4 * c] << 24 | e[64 * u + 4 * c + 1] << 16 | e[64 * u + 4 * c + 2] << 8 | e[64 * u + 4 * c + 3];
                        s[u] = l
                    }
                    s[a - 1][14] = 8 * (e.length - 1) / 0x100000000, s[a - 1][14] = Math.floor(s[a - 1][14]), s[a - 1][15] = 8 * (e.length - 1) | 0;
                    for (var d = 0; d < a; ++d) {
                        for (var f = new Uint32Array(80), h = 0; h < 16; ++h) f[h] = s[d][h];
                        for (var p = 16; p < 80; ++p) f[p] = z(f[p - 3] ^ f[p - 8] ^ f[p - 14] ^ f[p - 16], 1);
                        for (var g = n[0], v = n[1], m = n[2], y = n[3], b = n[4], w = 0; w < 80; ++w) {
                            var k = Math.floor(w / 20),
                                E = z(g, 5) + function(e, t, n, r) {
                                    switch (e) {
                                        case 0:
                                            return t & n ^ ~t & r;
                                        case 1:
                                        case 3:
                                            return t ^ n ^ r;
                                        case 2:
                                            return t & n ^ t & r ^ n & r
                                    }
                                }(k, v, m, y) + b + t[k] + f[w] >>> 0;
                            b = y, y = m, m = z(v, 30) >>> 0, v = g, g = E
                        }
                        n[0] = n[0] + g >>> 0, n[1] = n[1] + v >>> 0, n[2] = n[2] + m >>> 0, n[3] = n[3] + y >>> 0, n[4] = n[4] + b >>> 0
                    }
                    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
                }),
                NIL: "00000000-0000-0000-0000-000000000000",
                version: function(e) {
                    if (!S(e)) throw TypeError("Invalid UUID");
                    return parseInt(e.substr(14, 1), 16)
                },
                validate: S,
                stringify: U,
                parse: q
            });
            let J = ["debug", "info", "warn", "error", "none"];
            var G = {
                commonBasicLogger: function(e, t) {
                    if (e && e.destination && "function" != typeof e.destination) throw Error("destination for basicLogger was set to a non-function");

                    function n(e) {
                        return function(t) {
                            console && console[e] && console[e].call(console, t)
                        }
                    }
                    let r = e && e.destination ? [e.destination, e.destination, e.destination, e.destination] : [n("log"), n("info"), n("warn"), n("error")],
                        i = !(!e || !e.destination),
                        o = e && void 0 !== e.prefix && null !== e.prefix ? e.prefix : "[LaunchDarkly] ",
                        a = 1;
                    if (e && e.level)
                        for (let t = 0; t < J.length; t++) J[t] === e.level && (a = t);
                    let s = {};
                    for (let e = 0; e < J.length; e++) {
                        let n = J[e];
                        if ("none" !== n)
                            if (e < a) s[n] = () => {};
                            else {
                                let a = e;
                                s[n] = function() {
                                    ! function(e, n, a) {
                                        let s;
                                        if (a.length < 1) return;
                                        let u = i ? n + ": " + o : o;
                                        if (1 !== a.length && t) {
                                            let e = [...a];
                                            e[0] = u + e[0], s = t(...e)
                                        } else s = u + a[0];
                                        try {
                                            r[e](s)
                                        } catch (e) {
                                            console && console.log && console.log("[LaunchDarkly] Configured logger's " + n + " method threw an exception: " + e)
                                        }
                                    }(a, n, arguments)
                                }
                            }
                    }
                    return s
                },
                validateLogger: function(e) {
                    J.forEach(t => {
                        if ("none" !== t && (!e[t] || "function" != typeof e[t])) throw Error("Provided logger instance must support logger." + t + "(...) method")
                    })
                }
            };

            function B(e) {
                return e && e.message ? e.message : "string" == typeof e || e instanceof String ? e : JSON.stringify(e)
            }
            let W = " Please see https://docs.launchdarkly.com/sdk/client-side/javascript#initialize-the-client for instructions on SDK initialization.";
            var X = {
                bootstrapInvalid: function() {
                    return "LaunchDarkly bootstrap data is not available because the back end could not read the flags."
                },
                bootstrapOldFormat: function() {
                    return "LaunchDarkly client was initialized with bootstrap data that did not include flag metadata. Events may not be sent correctly." + W
                },
                clientInitialized: function() {
                    return "LaunchDarkly client initialized"
                },
                clientNotReady: function() {
                    return "LaunchDarkly client is not ready"
                },
                debugEnqueueingEvent: function(e) {
                    return 'enqueueing "' + e + '" event'
                },
                debugPostingDiagnosticEvent: function(e) {
                    return "sending diagnostic event (" + e.kind + ")"
                },
                debugPostingEvents: function(e) {
                    return "sending " + e + " events"
                },
                debugStreamDelete: function(e) {
                    return 'received streaming deletion for flag "' + e + '"'
                },
                debugStreamDeleteIgnored: function(e) {
                    return 'received streaming deletion for flag "' + e + '" but ignored due to version check'
                },
                debugStreamPatch: function(e) {
                    return 'received streaming update for flag "' + e + '"'
                },
                debugStreamPatchIgnored: function(e) {
                    return 'received streaming update for flag "' + e + '" but ignored due to version check'
                },
                debugStreamPing: function() {
                    return "received ping message from stream"
                },
                debugPolling: function(e) {
                    return "polling for feature flags at " + e
                },
                debugStreamPut: function() {
                    return "received streaming update for all flags"
                },
                deprecated: function(e, t) {
                    return t ? '"' + e + '" is deprecated, please use "' + t + '"' : '"' + e + '" is deprecated'
                },
                environmentNotFound: function() {
                    return "Environment not found. Double check that you specified a valid environment/client-side ID." + W
                },
                environmentNotSpecified: function() {
                    return "No environment/client-side ID was specified." + W
                },
                errorFetchingFlags: function(e) {
                    return "Error fetching flag settings: " + B(e)
                },
                eventCapacityExceeded: function() {
                    return "Exceeded event queue capacity. Increase capacity to avoid dropping events."
                },
                eventWithoutContext: function() {
                    return "Be sure to call `identify` in the LaunchDarkly client: https://docs.launchdarkly.com/sdk/features/identify#javascript"
                },
                httpErrorMessage: function(e, t, n) {
                    return "Received error " + e + (401 === e ? " (invalid SDK key)" : "") + " for " + t + " - " + (c.isHttpErrorRecoverable(e) ? n : "giving up permanently")
                },
                httpUnavailable: function() {
                    return "Cannot make HTTP requests in this environment." + W
                },
                identifyDisabled: function() {
                    return "identify() has no effect here; it must be called on the main client instance"
                },
                inspectorMethodError: (e, t) => `an inspector: "${t}" of type: "${e}" generated an exception`,
                invalidContentType: function(e) {
                    return 'Expected application/json content type but got "' + e + '"'
                },
                invalidData: function() {
                    return "Invalid data received from LaunchDarkly; connection may have been interrupted"
                },
                invalidInspector: (e, t) => `an inspector: "${t}" of an invalid type (${e}) was configured`,
                invalidKey: function() {
                    return "Event key must be a string"
                },
                invalidMetricValue: e => `The track function was called with a non-numeric "metricValue" (${e}), only numeric metric values are supported.`,
                invalidContext: function() {
                    return "Invalid context specified." + W
                },
                invalidTagValue: e => `Config option "${e}" must only contain letters, numbers, ., _ or -.`,
                localStorageUnavailable: function(e) {
                    return "local storage is unavailable: " + B(e)
                },
                networkError: e => "network error" + (e ? " (" + e + ")" : ""),
                optionBelowMinimum: (e, t, n) => 'Config option "' + e + '" was set to ' + t + ", changing to minimum value of " + n,
                streamClosing: function() {
                    return "Closing stream connection"
                },
                streamConnecting: function(e) {
                    return "Opening stream connection to " + e
                },
                streamError: function(e, t) {
                    return "Error on stream connection: " + B(e) + ", will continue retrying after " + t + " milliseconds."
                },
                tagValueTooLong: e => `Value of "${e}" was longer than 64 characters and was discarded.`,
                unknownCustomEventKey: function(e) {
                    return 'Custom event "' + e + '" does not exist'
                },
                unknownOption: e => 'Ignoring unknown config option "' + e + '"',
                contextNotSpecified: function() {
                    return "No context specified." + W
                },
                unrecoverableStreamError: e => `Error on stream connection ${B(e)}, giving up permanently`,
                wrongOptionType: (e, t, n) => 'Config option "' + e + '" should be of type ' + t + ", got " + n + ", using default value",
                wrongOptionTypeBoolean: (e, t) => 'Config option "' + e + '" should be a boolean, got ' + t + ", converting to boolean"
            };
            let {
                validateLogger: Z
            } = G, Y = {
                baseUrl: {
                    default: "https://app.launchdarkly.com"
                },
                streamUrl: {
                    default: "https://clientstream.launchdarkly.com"
                },
                eventsUrl: {
                    default: "https://events.launchdarkly.com"
                },
                sendEvents: {
                    default: !0
                },
                streaming: {
                    type: "boolean"
                },
                sendLDHeaders: {
                    default: !0
                },
                requestHeaderTransform: {
                    type: "function"
                },
                sendEventsOnlyForVariation: {
                    default: !1
                },
                useReport: {
                    default: !1
                },
                evaluationReasons: {
                    default: !1
                },
                eventCapacity: {
                    default: 100,
                    minimum: 1
                },
                flushInterval: {
                    default: 2e3,
                    minimum: 2e3
                },
                samplingInterval: {
                    default: 0,
                    minimum: 0
                },
                streamReconnectDelay: {
                    default: 1e3,
                    minimum: 0
                },
                allAttributesPrivate: {
                    default: !1
                },
                privateAttributes: {
                    default: []
                },
                bootstrap: {
                    type: "string|object"
                },
                diagnosticRecordingInterval: {
                    default: 9e5,
                    minimum: 2e3
                },
                diagnosticOptOut: {
                    default: !1
                },
                wrapperName: {
                    type: "string"
                },
                wrapperVersion: {
                    type: "string"
                },
                stateProvider: {
                    type: "object"
                },
                application: {
                    validator: function(e, t, n) {
                        let r = {};
                        return t.id && (r.id = en(`${e}.id`, t.id, n)), t.version && (r.version = en(`${e}.version`, t.version, n)), r
                    }
                },
                inspectors: {
                    default: []
                },
                hooks: {
                    default: []
                },
                plugins: {
                    default: []
                }
            }, ee = /^(\w|\.|-)+$/;

            function et(e) {
                return e && e.replace(/\/+$/, "")
            }

            function en(e, t, n) {
                if ("string" == typeof t && t.match(ee)) {
                    if (!(t.length > 64)) return t;
                    n.warn(X.tagValueTooLong(e))
                } else n.warn(X.invalidTagValue(e))
            }
            var er = {
                baseOptionDefs: Y,
                validate: function(e, t, n, r) {
                    var i;
                    let o = C.extend({
                            logger: {
                                default: r
                            }
                        }, Y, n),
                        a = {};

                    function s(e) {
                        C.onNextTick(() => {
                            t && t.maybeReportError(new c.LDInvalidArgumentError(e))
                        })
                    }
                    let u = C.extend({}, e || {});
                    return i = u, Object.keys(a).forEach(e => {
                        if (void 0 !== i[e]) {
                            let t = a[e];
                            r && r.warn(X.deprecated(e, t)), t && (void 0 === i[t] && (i[t] = i[e]), delete i[e])
                        }
                    }), Z((u = function(e) {
                        let t = C.extend({}, e),
                            n = e => {
                                if (null === e) return "any";
                                if (void 0 === e) return;
                                if (Array.isArray(e)) return "array";
                                let t = typeof e;
                                return "boolean" === t || "string" === t || "number" === t || "function" === t ? t : "object"
                            };
                        return Object.keys(e).forEach(i => {
                            let a = e[i];
                            if (null != a) {
                                let u = o[i];
                                if (void 0 === u) s(X.unknownOption(i));
                                else {
                                    let o = u.type || n(u.default),
                                        l = u.validator;
                                    if (l) {
                                        let n = l(i, e[i], r);
                                        void 0 !== n ? t[i] = n : delete t[i]
                                    } else if ("any" !== o) {
                                        let e = o.split("|"),
                                            r = n(a);
                                        0 > e.indexOf(r) ? "boolean" === o ? (t[i] = !!a, s(X.wrongOptionTypeBoolean(i, r))) : (s(X.wrongOptionType(i, o, r)), t[i] = u.default) : "number" === r && void 0 !== u.minimum && a < u.minimum && (s(X.optionBelowMinimum(i, a, u.minimum)), t[i] = u.minimum)
                                    }
                                }
                            }
                        }), t.baseUrl = et(t.baseUrl), t.streamUrl = et(t.streamUrl), t.eventsUrl = et(t.eventsUrl), t
                    }(u = function(e) {
                        let t = C.extend({}, e);
                        return Object.keys(o).forEach(e => {
                            void 0 !== t[e] && null !== t[e] || (t[e] = o[e] && o[e].default)
                        }), t
                    }(u))).logger), u
                },
                getTags: function(e) {
                    let t = {};
                    return e && (e.application && void 0 !== e.application.id && null !== e.application.id && (t["application-id"] = [e.application.id]), e.application && void 0 !== e.application.version && null !== e.application.id && (t["application-version"] = [e.application.version])), t
                }
            };
            let {
                getLDUserAgentString: ei
            } = C;
            var eo = {
                getLDHeaders: function(e, t) {
                    if (t && !t.sendLDHeaders) return {};
                    let n = {};
                    n[e.userAgentHeaderName || "User-Agent"] = ei(e), t && t.wrapperName && (n["X-LaunchDarkly-Wrapper"] = t.wrapperVersion ? t.wrapperName + "/" + t.wrapperVersion : t.wrapperName);
                    let r = er.getTags(t),
                        i = Object.keys(r);
                    return i.length && (n["x-launchdarkly-tags"] = i.sort().map(e => Array.isArray(r[e]) ? r[e].sort().map(t => `${e}/${t}`) : [`${e}/${r[e]}`]).reduce((e, t) => e.concat(t), []).join(" ")), n
                },
                transformHeaders: function(e, t) {
                    return t && t.requestHeaderTransform ? t.requestHeaderTransform({ ...e
                    }) : e
                }
            };
            let {
                v1: ea
            } = K, {
                getLDHeaders: es,
                transformHeaders: eu
            } = eo;
            var el = function(e, t, n) {
                    let r = C.extend({
                            "Content-Type": "application/json"
                        }, es(e, n)),
                        i = {};
                    return i.sendEvents = (t, i, o) => {
                        if (!e.httpRequest) return Promise.resolve();
                        let a = JSON.stringify(t),
                            s = o ? null : ea();
                        return (function t(u) {
                            let l = o ? r : C.extend({}, r, {
                                "X-LaunchDarkly-Event-Schema": "4",
                                "X-LaunchDarkly-Payload-ID": s
                            });
                            return e.httpRequest("POST", i, eu(l, n), a).promise.then(e => {
                                if (e) return e.status >= 400 && c.isHttpErrorRecoverable(e.status) && u ? t(!1) : function(e) {
                                    let t = {
                                            status: e.status
                                        },
                                        n = e.header("date");
                                    if (n) {
                                        let e = Date.parse(n);
                                        e && (t.serverTime = e)
                                    }
                                    return t
                                }(e)
                            }).catch(() => u ? t(!1) : Promise.reject())
                        })(!0).catch(() => {})
                    }, i
                },
                ec = function e(t, n = []) {
                    if (null === t || "object" != typeof t) return JSON.stringify(t);
                    if (n.includes(t)) throw Error("Cycle detected");
                    return Array.isArray(t) ? `[${t.map(r=>e(r,[...n,t])).map(e=>void 0===e?"null":e).join(",")}]` : `{${Object.keys(t).sort().map(r=>{let i=e(t[r],[...n,t]);if(void 0!==i)return`${JSON.stringify(r)}:${i}`}).filter(e=>void 0!==e).join(",")}}`
                };
            let {
                commonBasicLogger: ed
            } = G;

            function ef(e) {
                return "string" == typeof e && "kind" !== e && e.match(/^(\w|\.|-)+$/)
            }

            function eh(e) {
                return e.includes("%") || e.includes(":") ? e.replace(/%/g, "%25").replace(/:/g, "%3A") : e
            }
            var ep = {
                checkContext: function(e, t) {
                    if (e) {
                        if (t && (void 0 === e.kind || null === e.kind)) return void 0 !== e.key && null !== e.key;
                        let n = e.key,
                            r = void 0 === e.kind ? "user" : e.kind,
                            i = ef(r),
                            o = "multi" === r || null != n && "" !== n;
                        if ("multi" === r) {
                            let t = Object.keys(e).filter(e => "kind" !== e);
                            return o && t.every(e => ef(e)) && t.every(t => {
                                let n = e[t].key;
                                return null != n && "" !== n
                            })
                        }
                        return o && i
                    }
                    return !1
                },
                getContextKeys: function(e, t = ed()) {
                    if (!e) return;
                    let n = {},
                        {
                            kind: r,
                            key: i
                        } = e;
                    switch (r) {
                        case void 0:
                            n.user = `${i}`;
                            break;
                        case "multi":
                            Object.entries(e).filter(([e]) => "kind" !== e).forEach(([e, t]) => {
                                t && t.key && (n[e] = t.key)
                            });
                            break;
                        case null:
                            t.warn(`null is not a valid context kind: ${e}`);
                            break;
                        case "":
                            t.warn(`'' is not a valid context kind: ${e}`);
                            break;
                        default:
                            n[r] = `${i}`
                    }
                    return n
                },
                getContextKinds: function(e) {
                    return e ? null === e.kind || void 0 === e.kind ? ["user"] : "multi" !== e.kind ? [e.kind] : Object.keys(e).filter(e => "kind" !== e) : []
                },
                getCanonicalKey: function(e) {
                    if (e) {
                        if ((void 0 === e.kind || null === e.kind || "user" === e.kind) && e.key) return e.key;
                        if ("multi" !== e.kind && e.key) return `${e.kind}:${eh(e.key)}`;
                        if ("multi" === e.kind) return Object.keys(e).sort().filter(e => "kind" !== e).map(t => `${t}:${eh(e[t].key)}`).join(":")
                    }
                }
            };
            let {
                getContextKinds: eg
            } = ep;
            var ev = function() {
                    let e = {},
                        t = 0,
                        n = 0,
                        r = {},
                        i = {};
                    return e.summarizeEvent = e => {
                        if ("feature" === e.kind) {
                            let o = e.key + ":" + (null !== e.variation && void 0 !== e.variation ? e.variation : "") + ":" + (null !== e.version && void 0 !== e.version ? e.version : ""),
                                a = r[o],
                                s = i[e.key];
                            s || (s = new Set, i[e.key] = s), (e.context ? eg(e.context) : e.contextKeys ? Object.keys(e.contextKeys) : []).forEach(e => s.add(e)), a ? a.count = a.count + 1 : r[o] = {
                                count: 1,
                                key: e.key,
                                version: e.version,
                                variation: e.variation,
                                value: e.value,
                                default: e.default
                            }, (0 === t || e.creationDate < t) && (t = e.creationDate), e.creationDate > n && (n = e.creationDate)
                        }
                    }, e.getSummary = () => {
                        let e = {},
                            o = !0;
                        for (let t of Object.values(r)) {
                            let n = e[t.key];
                            n || (n = {
                                default: t.default,
                                counters: [],
                                contextKinds: [...i[t.key]]
                            }, e[t.key] = n);
                            let r = {
                                value: t.value,
                                count: t.count
                            };
                            void 0 !== t.variation && null !== t.variation && (r.variation = t.variation), void 0 !== t.version && null !== t.version ? r.version = t.version : r.unknown = !0, n.counters.push(r), o = !1
                        }
                        return o ? null : {
                            startDate: t,
                            endDate: n,
                            features: e,
                            kind: "summary"
                        }
                    }, e.clearSummary = () => {
                        t = 0, n = 0, r = {}, i = {}
                    }, e
                },
                em = function(e) {
                    let t = {},
                        n = {};
                    return {
                        summarizeEvent: function(e) {
                            if ("feature" === e.kind) {
                                let r = ec(e.context);
                                if (!r) return;
                                let i = t[r];
                                i || (t[r] = ev(), i = t[r], n[r] = e.context), i.summarizeEvent(e)
                            }
                        },
                        getSummaries: function() {
                            let r = t,
                                i = n;
                            return t = {}, n = {}, Object.entries(r).map(([t, n]) => {
                                let r = n.getSummary();
                                return r.context = e.filter(i[t]), r
                            })
                        }
                    }
                };

            function ey(e) {
                return e.replace(/~/g, "~0").replace(/\//g, "~1")
            }

            function eb(e) {
                return (e.startsWith("/") ? e.substring(1) : e).split("/").map(e => e.indexOf("~") >= 0 ? e.replace(/~1/g, "/").replace(/~0/g, "~") : e)
            }

            function ew(e) {
                return !e.startsWith("/")
            }

            function ek(e, t) {
                let n = ew(e),
                    r = ew(t);
                if (n && r) return e === t;
                if (n) {
                    let n = eb(t);
                    return 1 === n.length && e === n[0]
                }
                if (r) {
                    let n = eb(e);
                    return 1 === n.length && t === n[0]
                }
                return e === t
            }

            function eE(e) {
                return `/${ey(e)}`
            }
            var ex = {
                    cloneExcluding: function(e, t) {
                        let n = [],
                            r = {},
                            i = [];
                        for (n.push(...Object.keys(e).map(t => ({
                                key: t,
                                ptr: eE(t),
                                source: e,
                                parent: r,
                                visited: [e]
                            }))); n.length;) {
                            let e = n.pop();
                            if (t.some(t => ek(t, e.ptr))) i.push(e.ptr);
                            else {
                                let t = e.source[e.key];
                                if (null === t) e.parent[e.key] = t;
                                else if (Array.isArray(t)) e.parent[e.key] = [...t];
                                else if ("object" == typeof t) {
                                    if (e.visited.includes(t)) continue;
                                    e.parent[e.key] = {}, n.push(...Object.keys(t).map(n => {
                                        var r, i;
                                        return {
                                            key: n,
                                            ptr: (r = e.ptr, i = ey(n), `${r}/${i}`),
                                            source: t,
                                            parent: e.parent[e.key],
                                            visited: [...e.visited, t]
                                        }
                                    }))
                                } else e.parent[e.key] = t
                            }
                        }
                        return {
                            cloned: r,
                            excluded: i.sort()
                        }
                    },
                    compare: ek,
                    literalToReference: eE
                },
                eC = function(e) {
                    let t = {},
                        n = e.allAttributesPrivate,
                        r = e.privateAttributes || [],
                        i = ["key", "kind", "_meta", "anonymous"],
                        o = ["name", "ip", "firstName", "lastName", "email", "avatar", "country"],
                        a = (e, t) => {
                            if ("object" != typeof e || null === e || Array.isArray(e)) return;
                            let {
                                cloned: o,
                                excluded: a
                            } = ex.cloneExcluding(e, (n || t && e.anonymous ? Object.keys(e) : [...r, ...e._meta && e._meta.privateAttributes || []]).filter(e => !i.some(t => ex.compare(e, t))));
                            return o.key = String(o.key), a.length && (o._meta || (o._meta = {}), o._meta.redactedAttributes = a), o._meta && (delete o._meta.privateAttributes, 0 === Object.keys(o._meta).length && delete o._meta), void 0 !== o.anonymous && (o.anonymous = !!o.anonymous), o
                        };
                    return t.filter = (e, t = !1) => void 0 === e.kind || null === e.kind ? a((e => {
                        let t = { ...e.custom || {},
                            kind: "user",
                            key: e.key
                        };
                        for (let n of (void 0 !== e.anonymous && (t.anonymous = !!e.anonymous), o)) delete t[n], void 0 !== e[n] && null !== e[n] && (t[n] = String(e[n]));
                        return void 0 !== e.privateAttributeNames && null !== e.privateAttributeNames && (t._meta = t._meta || {}, t._meta.privateAttributes = e.privateAttributeNames.map(e => e.startsWith("/") ? ex.literalToReference(e) : e)), t
                    })(e), t) : "multi" === e.kind ? ((e, t) => {
                        let n = {
                            kind: e.kind
                        };
                        for (let r of Object.keys(e))
                            if ("kind" !== r) {
                                let i = a(e[r], t);
                                i && (n[r] = i)
                            }
                        return n
                    })(e, t) : a(e, t), t
                };
            let {
                getContextKeys: eD
            } = ep;
            var eO = function(e, t, n, r = null, i = null, o = null) {
                    let a = {},
                        s = o || el(e, n, t),
                        u = C.appendUrlPath(t.eventsUrl, "/events/bulk/" + n),
                        l = eC(t),
                        d = em(l),
                        f = t.samplingInterval,
                        h = t.eventCapacity,
                        p = t.flushInterval,
                        g = t.logger,
                        v, m = [],
                        y = 0,
                        b = !1,
                        w = !1;

                    function k() {
                        return 0 === f || 0 === Math.floor(Math.random() * f)
                    }

                    function E(e) {
                        m.length < h ? (m.push(e), w = !1) : (w || (w = !0, g.warn(X.eventCapacityExceeded())), r && r.incrementDroppedEvents())
                    }
                    return a.enqueue = function(e) {
                        if (b) return;
                        let t = !1,
                            n = !1;
                        if (d.summarizeEvent(e), "feature" === e.kind ? k() && (t = !!e.trackEvents, n = !!e.debugEventsUntilDate && e.debugEventsUntilDate > y && e.debugEventsUntilDate > (new Date).getTime()) : t = k(), t && E(function(e) {
                                let t = C.extend({}, e);
                                return "identify" === e.kind || "feature" === e.kind || "custom" === e.kind ? t.context = l.filter(e.context) : (t.contextKeys = eD(e.context, g), delete t.context), "feature" === e.kind && (delete t.trackEvents, delete t.debugEventsUntilDate), t
                            }(e)), n) {
                            let t = C.extend({}, e, {
                                kind: "debug"
                            });
                            t.context = l.filter(t.context), delete t.trackEvents, delete t.debugEventsUntilDate, E(t)
                        }
                    }, a.flush = async function() {
                        if (b) return Promise.resolve();
                        let e = m;
                        return d.getSummaries().forEach(t => {
                            Object.keys(t.features).length && e.push(t)
                        }), r && r.setEventsInLastBatch(e.length), 0 === e.length ? Promise.resolve() : (m = [], g.debug(X.debugPostingEvents(e.length)), s.sendEvents(e, u).then(e => {
                            e && (e.serverTime && (y = e.serverTime), c.isHttpErrorRecoverable(e.status) || (b = !0), e.status >= 400 && C.onNextTick(() => {
                                i.maybeReportError(new c.LDUnexpectedResponseError(X.httpErrorMessage(e.status, "event posting", "some events were dropped")))
                            }))
                        }))
                    }, a.start = function() {
                        let e = () => {
                            a.flush(), v = setTimeout(e, p)
                        };
                        v = setTimeout(e, p)
                    }, a.stop = function() {
                        clearTimeout(v)
                    }, a
                },
                eP = function(e) {
                    let t = {},
                        n = {};
                    return t.on = function(e, t, r) {
                        n[e] = n[e] || [], n[e] = n[e].concat({
                            handler: t,
                            context: r
                        })
                    }, t.off = function(e, t, r) {
                        if (n[e])
                            for (let i = 0; i < n[e].length; i++) n[e][i].handler === t && n[e][i].context === r && (n[e] = n[e].slice(0, i).concat(n[e].slice(i + 1)))
                    }, t.emit = function(e) {
                        if (!n[e]) return;
                        let t = n[e].slice(0);
                        for (let e = 0; e < t.length; e++) t[e].handler.apply(t[e].context, Array.prototype.slice.call(arguments, 1))
                    }, t.getEvents = function() {
                        return Object.keys(n)
                    }, t.getEventListenerCount = function(e) {
                        return n[e] ? n[e].length : 0
                    }, t.maybeReportError = function(t) {
                        t && (n.error ? this.emit("error", t) : (e || console).error(t.message))
                    }, t
                };
            let eS = "ready",
                eI = "initialized",
                eT = "failed";
            var eA = function(e) {
                    let t = !1,
                        n = !1,
                        r = null,
                        i = null,
                        o = new Promise(t => {
                            let n = () => {
                                e.off(eS, n), t()
                            };
                            e.on(eS, n)
                        }).catch(() => {});
                    return {
                        getInitializationPromise: () => i || (t ? Promise.resolve() : n ? Promise.reject(r) : i = new Promise((t, n) => {
                            let r = () => {
                                    e.off(eI, r), t()
                                },
                                i = t => {
                                    e.off(eT, i), n(t)
                                };
                            e.on(eI, r), e.on(eT, i)
                        })),
                        getReadyPromise: () => o,
                        signalSuccess: () => {
                            t || n || (t = !0, e.emit(eI), e.emit(eS))
                        },
                        signalFailure: i => {
                            t || n || (n = !0, r = i, e.emit(eT, i), e.emit(eS)), e.maybeReportError(i)
                        }
                    }
                },
                ej = function(e, t, n, r) {
                    let i = {};

                    function o() {
                        let e = "",
                            i = r.getContext();
                        return i && (e = n || C.btoa(JSON.stringify(i))), "ld:" + t + ":" + e
                    }
                    return i.loadFlags = () => e.get(o()).then(e => {
                        if (null == e) return null;
                        try {
                            let t = JSON.parse(e);
                            if (t) {
                                let e = t.$schema;
                                void 0 === e || e < 1 ? t = C.transformValuesToVersionedValues(t) : delete t.$schema
                            }
                            return t
                        } catch (e) {
                            return i.clearFlags().then(() => null)
                        }
                    }), i.saveFlags = t => {
                        let n = C.extend({}, t, {
                            $schema: 1
                        });
                        return e.set(o(), JSON.stringify(n))
                    }, i.clearFlags = () => e.clear(o()), i
                },
                eU = function(e, t) {
                    let n = {},
                        r = !1,
                        i = e => {
                            r || (r = !0, t.warn(X.localStorageUnavailable(e)))
                        };
                    return n.isEnabled = () => !!e, n.get = t => new Promise(n => {
                        e ? e.get(t).then(n).catch(e => {
                            i(e), n(void 0)
                        }) : n(void 0)
                    }), n.set = (t, n) => new Promise(r => {
                        e ? e.set(t, n).then(() => r(!0)).catch(e => {
                            i(e), r(!1)
                        }) : r(!1)
                    }), n.clear = t => new Promise(n => {
                        e ? e.clear(t).then(() => n(!0)).catch(e => {
                            i(e), n(!1)
                        }) : n(!1)
                    }), n
                };
            let {
                appendUrlPath: eL,
                base64URLEncode: eR,
                objectHasOwnProperty: eq
            } = C, {
                getLDHeaders: eF,
                transformHeaders: eN
            } = eo, {
                isHttpErrorRecoverable: eM
            } = c;
            var e$ = function(e, t, n, r) {
                    let i = t.streamUrl,
                        o = t.logger,
                        a = {},
                        s = eL(i, "/eval/" + n),
                        u = t.useReport,
                        l = t.evaluationReasons,
                        c = t.streamReconnectDelay,
                        d = eF(e, t),
                        f, h = !1,
                        p = null,
                        g = null,
                        v = null,
                        m = null,
                        y = null,
                        b = 0;

                    function w(e) {
                        if (e.status && "number" == typeof e.status && !eM(e.status)) return x(), o.error(X.unrecoverableStreamError(e)), void(g && (clearTimeout(g), g = null));
                        let t = function() {
                            var e;
                            let t = (e = function() {
                                let e = c * Math.pow(2, b);
                                return e > 3e4 ? 3e4 : e
                            }()) - Math.trunc(.5 * Math.random() * e);
                            return b += 1, t
                        }();
                        h || (o.warn(X.streamError(e, t)), h = !0), C(!1), x(), k(t)
                    }

                    function k(e) {
                        g || (e ? g = setTimeout(E, e) : E())
                    }

                    function E() {
                        let r;
                        g = null;
                        let a = "",
                            c = {
                                headers: d,
                                readTimeoutMillis: 3e5
                            };
                        if (e.eventSourceFactory) {
                            for (let d in null != m && (a = "h=" + m), u ? e.eventSourceAllowsReport ? (r = s, c.method = "REPORT", c.headers["Content-Type"] = "application/json", c.body = JSON.stringify(v)) : (r = eL(i, "/ping/" + n), a = "") : r = s + "/" + eR(JSON.stringify(v)), c.headers = eN(c.headers, t), l && (a = a + (a ? "&" : "") + "withReasons=true"), r = r + (a ? "?" : "") + a, x(), o.info(X.streamConnecting(r)), f = (new Date).getTime(), p = e.eventSourceFactory(r, c), y) eq(y, d) && p.addEventListener(d, y[d]);
                            p.onerror = w, p.onopen = () => {
                                b = 0
                            }
                        }
                    }

                    function x() {
                        p && (o.info(X.streamClosing()), p.close(), p = null)
                    }

                    function C(e) {
                        f && r && r.recordStreamInit(f, !e, (new Date).getTime() - f), f = null
                    }
                    return a.connect = function(e, t, n) {
                        for (let r in v = e, m = t, y = {}, n || {}) y[r] = function(e) {
                            h = !1, C(!0), n[r] && n[r](e)
                        };
                        k()
                    }, a.disconnect = function() {
                        clearTimeout(g), g = null, x()
                    }, a.isConnected = function() {
                        return !!(p && e.eventSourceIsActive && e.eventSourceIsActive(p))
                    }, a
                },
                eH = function(e) {
                    let t, n, r, i, o = {
                        addPromise: (o, a) => {
                            t = o, n && n(), n = a, o.then(n => {
                                t === o && (r(n), e && e())
                            }, n => {
                                t === o && (i(n), e && e())
                            })
                        }
                    };
                    return o.resultPromise = new Promise((e, t) => {
                        r = e, i = t
                    }), o
                };
            let {
                transformHeaders: eV,
                getLDHeaders: eQ
            } = eo, e_ = "application/json";
            var ez = function(e, t, n) {
                    let r = t.baseUrl,
                        i = t.useReport,
                        o = t.evaluationReasons,
                        a = t.logger,
                        s = {},
                        u = {};

                    function l(n, r) {
                        if (!e.httpRequest) return new Promise((e, t) => {
                            t(new c.LDFlagFetchError(X.httpUnavailable()))
                        });
                        let i = eQ(e, t);
                        r && (i["Content-Type"] = e_);
                        let o = u[n];
                        o || (o = eH(() => {
                            delete u[n]
                        }), u[n] = o);
                        let a = e.httpRequest(r ? "REPORT" : "GET", n, eV(i, t), r),
                            s = a.promise.then(e => {
                                if (200 === e.status) {
                                    if (e.header("content-type") && e.header("content-type").substring(0, 16) === e_) return JSON.parse(e.body); {
                                        let t = X.invalidContentType(e.header("content-type") || "");
                                        return Promise.reject(new c.LDFlagFetchError(t))
                                    }
                                }
                                return Promise.reject(404 === e.status ? new c.LDInvalidEnvironmentIdError(X.environmentNotFound()) : new c.LDFlagFetchError(X.errorFetchingFlags(e.statusText || String(e.status))))
                            }, e => Promise.reject(new c.LDFlagFetchError(X.networkError(e))));
                        return o.addPromise(s, () => {
                            a.cancel && a.cancel()
                        }), o.resultPromise
                    }
                    return s.fetchJSON = function(e) {
                        return l(C.appendUrlPath(r, e), null)
                    }, s.fetchFlagSettings = function(e, t) {
                        let s, u, c = "";
                        return i ? (s = [r, "/sdk/evalx/", n, "/context"].join(""), u = JSON.stringify(e)) : s = [r, "/sdk/evalx/", n, "/contexts/", C.base64URLEncode(JSON.stringify(e))].join(""), t && (c = "h=" + t), o && (c = c + (c ? "&" : "") + "withReasons=true"), s = s + (c ? "?" : "") + c, a.debug(X.debugPolling(s)), l(s, u)
                    }, s
                },
                eK = function(e, t) {
                    let n, r = {};
                    return r.setContext = function(e) {
                        (n = C.sanitizeContext(e)) && t && t(C.clone(n))
                    }, r.getContext = function() {
                        return n ? C.clone(n) : null
                    }, e && r.setContext(e), r
                };
            let {
                v1: eJ
            } = K, {
                getContextKinds: eG
            } = ep;
            var eB = function(e) {
                function t(e) {
                    return null == e || "user" === e ? "ld:$anonUserId" : `ld:$contextKey:${e}`
                }

                function n(n, r) {
                    return null !== r.key && void 0 !== r.key ? (r.key = r.key.toString(), Promise.resolve(r)) : r.anonymous ? e.get(t(n)).then(i => {
                        if (i) return r.key = i, r; {
                            let i = eJ();
                            return r.key = i, e.set(t(n), i).then(() => r)
                        }
                    }) : Promise.reject(new c.LDInvalidUserError(X.invalidContext()))
                }
                this.processContext = e => {
                    if (!e) return Promise.reject(new c.LDInvalidUserError(X.contextNotSpecified()));
                    let t = C.clone(e);
                    return "multi" === e.kind ? Promise.all(eG(t).map(e => n(e, t[e]))).then(() => t) : n(e.kind, t)
                }
            };
            let {
                v1: eW
            } = K, {
                baseOptionDefs: eX
            } = er, {
                appendUrlPath: eZ
            } = C;
            var eY = {
                    DiagnosticId: function(e) {
                        let t = {
                            diagnosticId: eW()
                        };
                        return e && (t.sdkKeySuffix = e.length > 6 ? e.substring(e.length - 6) : e), t
                    },
                    DiagnosticsAccumulator: function(e) {
                        let t, n, r, i;

                        function o(e) {
                            t = e, n = 0, r = 0, i = []
                        }
                        return o(e), {
                            getProps: () => ({
                                dataSinceDate: t,
                                droppedEvents: n,
                                eventsInLastBatch: r,
                                streamInits: i
                            }),
                            setProps: e => {
                                t = e.dataSinceDate, n = e.droppedEvents || 0, r = e.eventsInLastBatch || 0, i = e.streamInits || []
                            },
                            incrementDroppedEvents: () => {
                                n++
                            },
                            setEventsInLastBatch: e => {
                                r = e
                            },
                            recordStreamInit: (e, t, n) => {
                                i.push({
                                    timestamp: e,
                                    failed: t,
                                    durationMillis: n
                                })
                            },
                            reset: o
                        }
                    },
                    DiagnosticsManager: function(e, t, n, r, i, o, a) {
                        let s = !!e.diagnosticUseCombinedEvent,
                            u = "ld:" + i + ":$diagnostics",
                            l = eZ(o.eventsUrl, "/events/diagnostic/" + i),
                            c = o.diagnosticRecordingInterval,
                            d, f, h = !!o.streaming,
                            p = {};

                        function g() {
                            return {
                                sdk: function() {
                                    let t = { ...e.diagnosticSdkData
                                    };
                                    return o.wrapperName && (t.wrapperName = o.wrapperName), o.wrapperVersion && (t.wrapperVersion = o.wrapperVersion), t
                                }(),
                                configuration: {
                                    customBaseURI: o.baseUrl !== eX.baseUrl.default,
                                    customStreamURI: o.streamUrl !== eX.streamUrl.default,
                                    customEventsURI: o.eventsUrl !== eX.eventsUrl.default,
                                    eventsCapacity: o.eventCapacity,
                                    eventsFlushIntervalMillis: o.flushInterval,
                                    reconnectTimeMillis: o.streamReconnectDelay,
                                    streamingDisabled: !h,
                                    allAttributesPrivate: !!o.allAttributesPrivate,
                                    diagnosticRecordingIntervalMillis: o.diagnosticRecordingInterval,
                                    usingSecureMode: !!o.hash,
                                    bootstrapMode: !!o.bootstrap,
                                    fetchGoalsDisabled: !o.fetchGoals,
                                    sendEventsOnlyForVariation: !!o.sendEventsOnlyForVariation
                                },
                                platform: e.diagnosticPlatformData
                            }
                        }

                        function v(e) {
                            o.logger && o.logger.debug(X.debugPostingDiagnosticEvent(e)), r.sendEvents(e, l, !0).then(() => {}).catch(() => {})
                        }

                        function m() {
                            v(function() {
                                let e = (new Date).getTime(),
                                    t = {
                                        kind: s ? "diagnostic-combined" : "diagnostic",
                                        id: a,
                                        creationDate: e,
                                        ...n.getProps()
                                    };
                                return s && (t = { ...t,
                                    ...g()
                                }), n.reset(e), t
                            }()), f = setTimeout(m, c), d = (new Date).getTime(), s && function() {
                                if (t.isEnabled()) {
                                    let e = { ...n.getProps()
                                    };
                                    t.set(u, JSON.stringify(e))
                                }
                            }()
                        }
                        return p.start = () => {
                            s ? function(e) {
                                if (!t.isEnabled()) return e(!1);
                                t.get(u).then(t => {
                                    if (t) try {
                                        let e = JSON.parse(t);
                                        n.setProps(e), d = e.dataSinceDate
                                    } catch (e) {}
                                    e(!0)
                                }).catch(() => {
                                    e(!1)
                                })
                            }(e => {
                                if (e) {
                                    let e = (d || 0) + c,
                                        t = (new Date).getTime();
                                    t >= e ? m() : f = setTimeout(m, e - t)
                                } else 0 === Math.floor(4 * Math.random()) ? m() : f = setTimeout(m, c)
                            }) : (v({
                                kind: "diagnostic-init",
                                id: a,
                                creationDate: n.getProps().dataSinceDate,
                                ...g()
                            }), f = setTimeout(m, c))
                        }, p.stop = () => {
                            f && clearTimeout(f)
                        }, p.setStreaming = e => {
                            h = e
                        }, p
                    }
                },
                e0 = function(e, t) {
                    let n = !1,
                        r = {
                            type: e.type,
                            name: e.name,
                            synchronous: e.synchronous,
                            method: (...i) => {
                                try {
                                    e.method(...i)
                                } catch {
                                    n || (n = !0, t.warn(X.inspectorMethodError(r.type, r.name)))
                                }
                            }
                        };
                    return r
                };
            let {
                onNextTick: e1
            } = C, e2 = {
                flagUsed: "flag-used",
                flagDetailsChanged: "flag-details-changed",
                flagDetailChanged: "flag-detail-changed",
                clientIdentityChanged: "client-identity-changed"
            };
            Object.freeze(e2);
            let {
                LDTimeoutError: e5
            } = c, e6 = "unknown hook";

            function e4(e, t, n, r, i) {
                try {
                    return r()
                } catch (r) {
                    return e ? .error(`An error was encountered in "${t}" of the "${n}" hook: ${r}`), i
                }
            }

            function e3(e, t) {
                try {
                    return t.getMetadata().name || e6
                } catch {
                    return e.error("Exception thrown getting metadata for hook. Unable to get hook name."), e6
                }
            }
            var e8 = function(e, t) {
                let n = t ? [...t] : [];
                return {
                    withEvaluation: function(t, r, i, o) {
                        if (0 === n.length) return o();
                        let a = [...n],
                            s = {
                                flagKey: t,
                                context: r,
                                defaultValue: i
                            },
                            u = a.map(t => e4(e, "beforeEvaluation", e3(e, t), () => t ? .beforeEvaluation ? .(s, {}) ? ? {}, {})),
                            l = o();
                        return function(e, t, n, r, i) {
                            for (let o = t.length - 1; o >= 0; o -= 1) {
                                let a = t[o],
                                    s = r[o];
                                e4(e, "afterEvaluation", e3(e, a), () => a ? .afterEvaluation ? .(n, s, i) ? ? {}, {})
                            }
                        }(e, a, s, u, l), l
                    },
                    identify: function(t, r) {
                        let i = [...n],
                            o = {
                                context: t,
                                timeout: r
                            },
                            a = i.map(t => e4(e, "beforeIdentify", e3(e, t), () => t ? .beforeIdentify ? .(o, {}) ? ? {}, {}));
                        return t => {
                            for (let n = i.length - 1; n >= 0; n -= 1) {
                                let r = i[n],
                                    s = a[n];
                                e4(e, "afterIdentify", e3(e, r), () => r ? .afterIdentify ? .(o, s, t) ? ? {}, {})
                            }
                        }
                    },
                    addHook: function(e) {
                        n.push(e)
                    },
                    afterTrack: function(t) {
                        if (0 !== n.length) {
                            var r = [...n];
                            for (let n = r.length - 1; n >= 0; n -= 1) {
                                let i = r[n];
                                e4(e, "afterTrack", e3(e, i), () => i ? .afterTrack ? .(t), void 0)
                            }
                        }
                    }
                }
            };
            let e9 = "unknown plugin";

            function e7(e, t) {
                try {
                    return t.getMetadata().name || e9
                } catch (t) {
                    return e.error("Exception thrown getting metadata for plugin. Unable to get plugin name."), e9
                }
            }
            let {
                commonBasicLogger: te
            } = G, {
                checkContext: tt,
                getContextKeys: tn
            } = ep, {
                InspectorTypes: tr,
                InspectorManager: ti
            } = {
                InspectorTypes: e2,
                InspectorManager: function(e, t) {
                    let n = {},
                        r = {
                            [e2.flagUsed]: [],
                            [e2.flagDetailsChanged]: [],
                            [e2.flagDetailChanged]: [],
                            [e2.clientIdentityChanged]: []
                        },
                        i = {
                            [e2.flagUsed]: [],
                            [e2.flagDetailsChanged]: [],
                            [e2.flagDetailChanged]: [],
                            [e2.clientIdentityChanged]: []
                        },
                        o = e && e.map(e => e0(e, t));
                    return o && o.forEach(e => {
                        Object.prototype.hasOwnProperty.call(r, e.type) && !e.synchronous ? r[e.type].push(e) : Object.prototype.hasOwnProperty.call(i, e.type) && e.synchronous ? i[e.type].push(e) : t.warn(X.invalidInspector(e.type, e.name))
                    }), n.hasListeners = e => r[e] && r[e].length || i[e] && i[e].length, n.onFlagUsed = (e, t, n) => {
                        let o = e2.flagUsed;
                        i[o].length && i[o].forEach(r => r.method(e, t, n)), r[o].length && e1(() => {
                            r[o].forEach(r => r.method(e, t, n))
                        })
                    }, n.onFlags = e => {
                        let t = e2.flagDetailsChanged;
                        i[t].length && i[t].forEach(t => t.method(e)), r[t].length && e1(() => {
                            r[t].forEach(t => t.method(e))
                        })
                    }, n.onFlagChanged = (e, t) => {
                        let n = e2.flagDetailChanged;
                        i[n].length && i[n].forEach(n => n.method(e, t)), r[n].length && e1(() => {
                            r[n].forEach(n => n.method(e, t))
                        })
                    }, n.onIdentityChanged = e => {
                        let t = e2.clientIdentityChanged;
                        i[t].length && i[t].forEach(t => t.method(e)), r[t].length && e1(() => {
                            r[t].forEach(t => t.method(e))
                        })
                    }, n
                }
            }, {
                getPluginHooks: to,
                registerPlugins: ta,
                createPluginEnvironment: ts
            } = {
                getPluginHooks: function(e, t, n) {
                    let r = [];
                    return n.forEach(n => {
                        try {
                            let i = n.getHooks ? .(t);
                            void 0 === i ? e.error(`Plugin ${e7(e,n)} returned undefined from getHooks.`) : i && i.length > 0 && r.push(...i)
                        } catch (t) {
                            e.error(`Exception thrown getting hooks for plugin ${e7(e,n)}. Unable to get hooks.`)
                        }
                    }), r
                },
                registerPlugins: function(e, t, n, r) {
                    r.forEach(r => {
                        try {
                            r.register(n, t)
                        } catch (t) {
                            e.error(`Exception thrown registering plugin ${e7(e,r)}.`)
                        }
                    })
                },
                createPluginEnvironment: function(e, t, n) {
                    let r = {};
                    e.userAgent && (r.name = e.userAgent), e.version && (r.version = e.version), n.wrapperName && (r.wrapperName = n.wrapperName), n.wrapperVersion && (r.wrapperVersion = n.wrapperVersion);
                    let i = {};
                    n.application && (n.application.name && (i.name = n.application.name), n.application.version && (i.version = n.application.version));
                    let o = {
                        sdk: r,
                        clientSideId: t
                    };
                    return Object.keys(i).length > 0 && (o.application = i), o
                }
            }, tu = "change", tl = "internal-change";
            var tc = {
                    initialize: function(e, t, n, r, i) {
                        let o = n && n.logger ? n.logger : i && i.logger && i.logger.default || te("warn"),
                            a = eP(o),
                            s = eA(a),
                            u = er.validate(n, a, i, o),
                            l = ti(u.inspectors, o),
                            d = u.sendEvents,
                            f = e,
                            h = u.hash,
                            p = [...u.plugins],
                            g = ts(r, e, u),
                            v = to(o, g, p),
                            m = e8(o, [...u.hooks, ...v]),
                            y = eU(r.localStorage, o),
                            b = el(r, f, u),
                            w = u.sendEvents && !u.diagnosticOptOut,
                            k = w ? eY.DiagnosticId(f) : null,
                            E = w ? eY.DiagnosticsAccumulator((new Date).getTime()) : null,
                            x = w ? eY.DiagnosticsManager(r, y, E, b, f, u, k) : null,
                            D = e$(r, u, f, E),
                            O = u.eventProcessor || eO(r, u, f, E, a, b),
                            P = ez(r, u, f),
                            S, I, T, A = {},
                            j = u.streaming,
                            U = !1,
                            L = !1,
                            R = !0,
                            q = u.stateProvider,
                            F = eK(null, function(e) {
                                !q && e && $({
                                    kind: "identify",
                                    context: e,
                                    creationDate: (new Date).getTime()
                                }), l.hasListeners(tr.clientIdentityChanged) && l.onIdentityChanged(F.getContext())
                            }),
                            N = new eB(y),
                            M = y.isEnabled() ? ej(y, f, h, F) : null;

                        function $(e) {
                            f && (q && q.enqueueEvent && q.enqueueEvent(e) || (e.context ? (R = !1, !d || L || r.isDoNotTrack() || (o.debug(X.debugEnqueueingEvent(e.kind)), O.enqueue(e))) : R && (o.warn(X.eventWithoutContext()), R = !1)))
                        }

                        function H(e, t) {
                            l.hasListeners(tr.flagDetailChanged) && l.onFlagChanged(e.key, K(t))
                        }

                        function V() {
                            l.hasListeners(tr.flagDetailsChanged) && l.onFlags(Object.entries(A).map(([e, t]) => ({
                                key: e,
                                detail: K(t)
                            })).reduce((e, t) => (e[t.key] = t.detail, e), {}))
                        }

                        function Q(e, t, n, r) {
                            let i = F.getContext(),
                                o = new Date,
                                a = {
                                    kind: "feature",
                                    key: e,
                                    context: i,
                                    value: t ? t.value : null,
                                    variation: t ? t.variationIndex : null,
                                    default: n,
                                    creationDate: o.getTime()
                                },
                                s = A[e];
                            s && (a.version = s.flagVersion ? s.flagVersion : s.version, a.trackEvents = s.trackEvents, a.debugEventsUntilDate = s.debugEventsUntilDate), (r || s && s.trackReason) && t && (a.reason = t.reason), $(a)
                        }

                        function _(e) {
                            return tt(e, !1) ? Promise.resolve(e) : Promise.reject(new c.LDInvalidUserError(X.invalidContext()))
                        }

                        function z(e, t, n, r, i, o) {
                            var a;
                            let s, u;
                            return A && C.objectHasOwnProperty(A, e) && A[e] && !A[e].deleted ? (s = K(u = A[e]), null !== u.value && void 0 !== u.value || (s.value = t)) : s = {
                                value: t,
                                variationIndex: null,
                                reason: {
                                    kind: "ERROR",
                                    errorKind: "FLAG_NOT_FOUND"
                                }
                            }, n && (i || u ? .prerequisites ? .forEach(e => {
                                z(e, void 0, n, !1, !1, !1)
                            }), Q(e, s, t, r)), !i && o && (a = s, l.hasListeners(tr.flagUsed) && l.onFlagUsed(e, a, F.getContext())), s
                        }

                        function K(e) {
                            return {
                                value: e.value,
                                variationIndex: void 0 === e.variation ? null : e.variation,
                                reason: e.reason || null
                            }
                        }

                        function J() {
                            if (I = !0, !F.getContext()) return;
                            let e = e => {
                                try {
                                    return JSON.parse(e)
                                } catch (e) {
                                    return void a.maybeReportError(new c.LDInvalidDataError(X.invalidData()))
                                }
                            };
                            D.connect(F.getContext(), h, {
                                ping: function() {
                                    o.debug(X.debugStreamPing());
                                    let e = F.getContext();
                                    P.fetchFlagSettings(e, h).then(t => {
                                        C.deepEquals(e, F.getContext()) && B(t || {})
                                    }).catch(e => {
                                        a.maybeReportError(new c.LDFlagFetchError(X.errorFetchingFlags(e)))
                                    })
                                },
                                put: function(t) {
                                    let n = e(t.data);
                                    n && (o.debug(X.debugStreamPut()), B(n))
                                },
                                patch: function(t) {
                                    let n = e(t.data);
                                    if (!n) return;
                                    let r = A[n.key];
                                    if (r && r.version && n.version && !(r.version < n.version)) o.debug(X.debugStreamPatchIgnored(n.key));
                                    else {
                                        o.debug(X.debugStreamPatch(n.key));
                                        let e = {},
                                            t = C.extend({}, n);
                                        delete t.key, A[n.key] = t;
                                        let i = K(t);
                                        e[n.key] = r ? {
                                            previous: r.value,
                                            current: i
                                        } : {
                                            current: i
                                        }, H(n, t), W(e)
                                    }
                                },
                                delete: function(t) {
                                    let n = e(t.data);
                                    if (n)
                                        if (!A[n.key] || A[n.key].version < n.version) {
                                            o.debug(X.debugStreamDelete(n.key));
                                            let e = {};
                                            A[n.key] && !A[n.key].deleted && (e[n.key] = {
                                                previous: A[n.key].value
                                            }), A[n.key] = {
                                                version: n.version,
                                                deleted: !0
                                            }, H(n, A[n.key]), W(e)
                                        } else o.debug(X.debugStreamDeleteIgnored(n.key))
                                }
                            })
                        }

                        function G() {
                            I && (D.disconnect(), I = !1)
                        }

                        function B(e) {
                            let t = {};
                            if (!e) return Promise.resolve();
                            for (let n in A) C.objectHasOwnProperty(A, n) && A[n] && (e[n] && !C.deepEquals(e[n].value, A[n].value) ? t[n] = {
                                previous: A[n].value,
                                current: K(e[n])
                            } : e[n] && !e[n].deleted || (t[n] = {
                                previous: A[n].value
                            }));
                            for (let n in e) C.objectHasOwnProperty(e, n) && e[n] && (!A[n] || A[n].deleted) && (t[n] = {
                                current: K(e[n])
                            });
                            return A = { ...e
                            }, V(), W(t).catch(() => {})
                        }

                        function W(e) {
                            let t = Object.keys(e);
                            if (t.length > 0) {
                                let n = {};
                                t.forEach(t => {
                                    let r = e[t].current,
                                        i = r ? r.value : void 0,
                                        o = e[t].previous;
                                    a.emit(tu + ":" + t, i, o), n[t] = r ? {
                                        current: i,
                                        previous: o
                                    } : {
                                        previous: o
                                    }
                                }), a.emit(tu, n), a.emit(tl, A), u.sendEventsOnlyForVariation || q || t.forEach(t => {
                                    Q(t, e[t].current)
                                })
                            }
                            return S && M ? M.saveFlags(A) : Promise.resolve()
                        }

                        function Z() {
                            let e = j || T && void 0 === j;
                            e && !I ? J() : !e && I && G(), x && x.setStreaming(e)
                        }

                        function Y(e) {
                            return e === tu || e.substr(0, 7) === tu + ":"
                        }
                        if ("string" == typeof u.bootstrap && "LOCALSTORAGE" === u.bootstrap.toUpperCase() && (M ? S = !0 : o.warn(X.localStorageUnavailable())), "object" == typeof u.bootstrap && (A = function(e) {
                                let t = Object.keys(e),
                                    n = "$flagsState",
                                    r = "$valid",
                                    i = e[n];
                                !i && t.length && o.warn(X.bootstrapOldFormat()), !1 === e[r] && o.warn(X.bootstrapInvalid());
                                let a = {};
                                return t.forEach(t => {
                                    if (t !== n && t !== r) {
                                        let n = {
                                            value: e[t]
                                        };
                                        i && i[t] ? n = C.extend(n, i[t]) : n.version = 0, a[t] = n
                                    }
                                }), a
                            }(u.bootstrap)), q) {
                            let e = q.getInitialState();
                            e ? ee(e) : q.on("init", ee), q.on("update", function(e) {
                                e.context && F.setContext(e.context), e.flags && B(e.flags)
                            })
                        } else {
                            let n;
                            (!e ? Promise.reject(new c.LDInvalidEnvironmentIdError(X.environmentNotSpecified())) : N.processContext(t).then(_).then(e => (n = C.once(m.identify(e, void 0)), e)).then(e => (n ? .({
                                status: "completed"
                            }), F.setContext(e), "object" == typeof u.bootstrap ? et() : S ? M.loadFlags().then(e => null == e ? (A = {}, P.fetchFlagSettings(F.getContext(), h).then(e => B(e || {})).then(et).catch(e => {
                                en(new c.LDFlagFetchError(X.errorFetchingFlags(e)))
                            })) : (A = e, C.onNextTick(et), P.fetchFlagSettings(F.getContext(), h).then(e => B(e)).catch(e => a.maybeReportError(e)))) : P.fetchFlagSettings(F.getContext(), h).then(e => {
                                A = e || {}, V(), et()
                            }).catch(e => {
                                A = {}, en(e)
                            }))).catch(e => {
                                throw n ? .({
                                    status: "error"
                                }), e
                            })).catch(en)
                        }

                        function ee(e) {
                            f = e.environment, F.setContext(e.context), A = { ...e.flags
                            }, C.onNextTick(et)
                        }

                        function et() {
                            o.info(X.clientInitialized()), U = !0, Z(), s.signalSuccess()
                        }

                        function en(e) {
                            s.signalFailure(e)
                        }
                        let ei = {
                            waitForInitialization: function(e) {
                                if (null != e) {
                                    if ("number" == typeof e) {
                                        e > 5 && o.warn("The waitForInitialization function was called with a timeout greater than 5 seconds. We recommend a timeout of 5 seconds or less.");
                                        let t = s.getInitializationPromise();
                                        return Promise.race([new Promise((t, n) => {
                                            setTimeout(() => {
                                                n(new e5(`waitForInitialization timed out after ${e} seconds.`))
                                            }, 1e3 * e)
                                        }), t]).catch(e => {
                                            throw e instanceof c.LDTimeoutError && o.error(`waitForInitialization error: ${e}`), e
                                        })
                                    }
                                    o.warn("The waitForInitialization method was provided with a non-numeric timeout.")
                                }
                                return o.warn("The waitForInitialization function was called without a timeout specified. In a future version a default timeout will be applied."), s.getInitializationPromise()
                            },
                            waitUntilReady: () => s.getReadyPromise(),
                            identify: function(e, t, n) {
                                let r;
                                if (L) return C.wrapPromiseCallback(Promise.resolve({}), n);
                                if (q) return o.warn(X.identifyDisabled()), C.wrapPromiseCallback(Promise.resolve(C.transformVersionedValuesToValues(A)), n);
                                let i = S && M ? M.clearFlags() : Promise.resolve();
                                return C.wrapPromiseCallback(i.then(() => N.processContext(e)).then(_).then(e => (r = C.once(m.identify(e, void 0)), e)).then(e => P.fetchFlagSettings(e, t).then(n => {
                                    let r = C.transformVersionedValuesToValues(n);
                                    return F.setContext(e), h = t, n ? B(n).then(() => r) : r
                                })).then(e => (r ? .({
                                    status: "completed"
                                }), I && J(), e)).catch(e => (r ? .({
                                    status: "error"
                                }), a.maybeReportError(e), Promise.reject(e))), n)
                            },
                            getContext: function() {
                                return F.getContext()
                            },
                            variation: function(e, t) {
                                let {
                                    value: n
                                } = m.withEvaluation(e, F.getContext(), t, () => z(e, t, !0, !1, !1, !0));
                                return n
                            },
                            variationDetail: function(e, t) {
                                return m.withEvaluation(e, F.getContext(), t, () => z(e, t, !0, !0, !1, !0))
                            },
                            track: function(e, t, n) {
                                if ("string" != typeof e) return void a.maybeReportError(new c.LDInvalidEventKeyError(X.unknownCustomEventKey(e)));
                                void 0 !== n && "number" != typeof n && o.warn(X.invalidMetricValue(typeof n)), r.customEventFilter && !r.customEventFilter(e) && o.warn(X.unknownCustomEventKey(e));
                                let i = F.getContext(),
                                    s = {
                                        kind: "custom",
                                        key: e,
                                        context: i,
                                        url: r.getCurrentUrl(),
                                        creationDate: (new Date).getTime()
                                    };
                                i && i.anonymous && (s.contextKind = i.anonymous ? "anonymousUser" : "user"), null != t && (s.data = t), null != n && (s.metricValue = n), $(s), m.afterTrack({
                                    context: i,
                                    key: e,
                                    data: t,
                                    metricValue: n
                                })
                            },
                            on: function(e, t, n) {
                                Y(e) ? (T = !0, U && Z(), a.on(e, t, n)) : a.on(...arguments)
                            },
                            off: function(e) {
                                if (a.off(...arguments), Y(e)) {
                                    let e = !1;
                                    a.getEvents().forEach(t => {
                                        Y(t) && a.getEventListenerCount(t) > 0 && (e = !0)
                                    }), e || (T = !1, I && void 0 === j && G())
                                }
                            },
                            setStreaming: function(e) {
                                let t = null === e ? void 0 : e;
                                t !== j && (j = t, Z())
                            },
                            flush: function(e) {
                                return C.wrapPromiseCallback(d ? O.flush() : Promise.resolve(), e)
                            },
                            allFlags: function() {
                                let e = {};
                                if (!A) return e;
                                for (let t in A) C.objectHasOwnProperty(A, t) && !A[t].deleted && (e[t] = z(t, null, !u.sendEventsOnlyForVariation, !1, !0, !1).value);
                                return e
                            },
                            close: function(e) {
                                if (L) return C.wrapPromiseCallback(Promise.resolve(), e);
                                let t = () => {
                                        L = !0, A = {}
                                    },
                                    n = Promise.resolve().then(() => {
                                        if (G(), x && x.stop(), d) return O.stop(), O.flush()
                                    }).then(t).catch(t);
                                return C.wrapPromiseCallback(n, e)
                            },
                            addHook: function(e) {
                                m.addHook(e)
                            }
                        };
                        return ta(o, g, ei, p), {
                            client: ei,
                            options: u,
                            emitter: a,
                            ident: F,
                            logger: o,
                            requestor: P,
                            start: function() {
                                d && (x && x.start(), O.start())
                            },
                            enqueueEvent: $,
                            getFlagsInternal: function() {
                                return A
                            },
                            getEnvironmentId: () => f,
                            internalChangeEventName: tl
                        }
                    },
                    commonBasicLogger: te,
                    errors: c,
                    messages: X
                },
                td = tc.initialize,
                tf = tc.errors;

            function th(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tp(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? th(Object(n), !0).forEach(function(t) {
                        ! function(e, t, n) {
                            var r;
                            (t = "symbol" == typeof(r = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(t, "string")) ? r : r + "") in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        }(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : th(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            tc.messages, tc.commonBasicLogger;
            var tg = {
                    promise: Promise.resolve({
                        status: 200,
                        header: function() {
                            return null
                        },
                        body: null
                    })
                },
                tv = e => {
                    if ("string" != typeof e) throw TypeError("Expected a string");
                    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
                };

            function tm(e, t) {
                for (var n = {}, r = null, i = [], o = 0; o < e.length; o++)
                    for (var a = e[o], s = a.urls || [], u = 0; u < s.length; u++)
                        if (function(e, t, n, r) {
                                var i, o, a = (("substring" === e.kind || "regex" === e.kind) && r.includes("/") ? t : t.replace(r, "")).replace(n, "");
                                switch (e.kind) {
                                    case "exact":
                                        o = t, i = RegExp("^" + tv(e.url) + "/?$");
                                        break;
                                    case "canonical":
                                        o = a, i = RegExp("^" + tv(e.url) + "/?$");
                                        break;
                                    case "substring":
                                        o = a, i = RegExp(".*" + tv(e.substring) + ".*$");
                                        break;
                                    case "regex":
                                        o = a, i = new RegExp(e.pattern);
                                        break;
                                    default:
                                        return !1
                                }
                                return i.test(o)
                            }(s[u], window.location.href, window.location.search, window.location.hash)) {
                            "pageview" === a.kind ? t("pageview", a) : (i.push(a), t("click_pageview", a));
                            break
                        }
                return i.length > 0 && (r = function(e) {
                    for (var n = function(e, t) {
                            for (var n = [], r = 0; r < t.length; r++)
                                for (var i = e.target, o = t[r], a = o.selector, s = document.querySelectorAll(a); i && s.length > 0;) {
                                    for (var u = 0; u < s.length; u++) i === s[u] && n.push(o);
                                    i = i.parentNode
                                }
                            return n
                        }(e, i), r = 0; r < n.length; r++) t("click", n[r])
                }, document.addEventListener("click", r)), n.dispose = function() {
                    document.removeEventListener("click", r)
                }, n
            }
            var ty = "goalsReady",
                tb = {
                    fetchGoals: {
                        default: !0
                    },
                    hash: {
                        type: "string"
                    },
                    eventProcessor: {
                        type: "object"
                    },
                    eventUrlTransformer: {
                        type: "function"
                    },
                    disableSyncEventPost: {
                        default: !1
                    }
                };

            function tw(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = function(e) {
                        var t, n = {
                            userAgentHeaderName: "X-LaunchDarkly-User-Agent",
                            synchronousFlush: !1
                        };
                        if (window.XMLHttpRequest) {
                            var r = e && e.disableSyncEventPost;
                            n.httpRequest = function(e, t, i, o) {
                                var a = !r & n.synchronousFlush;
                                return n.synchronousFlush = !1,
                                    function(e, t, n, r, i) {
                                        if (i && ! function() {
                                                var e = window.navigator && window.navigator.userAgent;
                                                if (e) {
                                                    var t = e.match(/Chrom(e|ium)\/([0-9]+)\./);
                                                    if (t) return 73 > parseInt(t[2], 10)
                                                }
                                                return !0
                                            }()) return tg;
                                        var o, a = new window.XMLHttpRequest;
                                        for (var s in a.open(e, t, !i), n || {}) Object.prototype.hasOwnProperty.call(n, s) && a.setRequestHeader(s, n[s]);
                                        if (i) {
                                            try {
                                                a.send(r)
                                            } catch (e) {}
                                            return tg
                                        }
                                        return {
                                            promise: new Promise(function(e, t) {
                                                a.addEventListener("load", function() {
                                                    o || e({
                                                        status: a.status,
                                                        header: function(e) {
                                                            return a.getResponseHeader(e)
                                                        },
                                                        body: a.responseText
                                                    })
                                                }), a.addEventListener("error", function() {
                                                    o || t(Error())
                                                }), a.send(r)
                                            }),
                                            cancel: function() {
                                                o = !0, a.abort()
                                            }
                                        }
                                    }(e, t, i, o, a)
                            }
                        }
                        n.httpAllowsPost = function() {
                            return void 0 === t && (t = !!window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest), t
                        }, n.httpFallbackPing = function(e) {
                            (new window.Image).src = e
                        };
                        var i, o = e && e.eventUrlTransformer;
                        n.getCurrentUrl = function() {
                            return o ? o(window.location.href) : window.location.href
                        }, n.isDoNotTrack = function() {
                            var e;
                            return 1 === (e = window.navigator && void 0 !== window.navigator.doNotTrack ? window.navigator.doNotTrack : window.navigator && void 0 !== window.navigator.msDoNotTrack ? window.navigator.msDoNotTrack : window.doNotTrack) || !0 === e || "1" === e || "yes" === e
                        };
                        try {
                            window.localStorage && (n.localStorage = {
                                get: function(e) {
                                    return new Promise(function(t) {
                                        t(window.localStorage.getItem(e))
                                    })
                                },
                                set: function(e, t) {
                                    return new Promise(function(n) {
                                        window.localStorage.setItem(e, t), n()
                                    })
                                },
                                clear: function(e) {
                                    return new Promise(function(t) {
                                        window.localStorage.removeItem(e), t()
                                    })
                                }
                            })
                        } catch (e) {
                            n.localStorage = null
                        }
                        return e && e.useReport && "function" == typeof window.EventSourcePolyfill && window.EventSourcePolyfill.supportedOptions && window.EventSourcePolyfill.supportedOptions.method ? (n.eventSourceAllowsReport = !0, i = window.EventSourcePolyfill) : (n.eventSourceAllowsReport = !1, i = window.EventSource), window.EventSource && (n.eventSourceFactory = function(e, t) {
                            var n = tp(tp({}, {
                                heartbeatTimeout: 3e5,
                                silentTimeout: 3e5,
                                skipDefaultHeaders: !0
                            }), t);
                            return new i(e, n)
                        }, n.eventSourceIsActive = function(e) {
                            return e.readyState === window.EventSource.OPEN || e.readyState === window.EventSource.CONNECTING
                        }), n.userAgent = "JSClient", n.version = "3.8.0", n.diagnosticSdkData = {
                            name: "js-client-sdk",
                            version: "3.8.0"
                        }, n.diagnosticPlatformData = {
                            name: "JS"
                        }, n.diagnosticUseCombinedEvent = !0, n
                    }(n),
                    i = td(e, t, n, r, tb),
                    o = i.client,
                    a = i.options,
                    s = i.emitter,
                    u = new Promise(function(e) {
                        var t = s.on(ty, function() {
                            s.off(ty, t), e()
                        })
                    });
                o.waitUntilGoalsReady = function() {
                    return u
                }, a.fetchGoals ? function(e, t) {
                    var n, r;

                    function i() {
                        r && r.dispose(), n && n.length && (r = tm(n, o))
                    }

                    function o(t, n) {
                        var r = e.ident.getContext(),
                            i = {
                                kind: t,
                                key: n.key,
                                data: null,
                                url: window.location.href,
                                creationDate: (new Date).getTime(),
                                context: r
                            };
                        return "click" === t && (i.selector = n.selector), e.enqueueEvent(i)
                    }
                    e.requestor.fetchJSON("/sdk/goals/" + e.getEnvironmentId()).then(function(e) {
                        e && e.length > 0 && (r = tm(n = e, o), function(e, t) {
                            var n, r = window.location.href;

                            function i() {
                                (n = window.location.href) !== r && (r = n, t())
                            }! function e(t, n) {
                                t(), setTimeout(function() {
                                    e(t, n)
                                }, n)
                            }(i, 300), window.history && window.history.pushState ? window.addEventListener("popstate", i) : window.addEventListener("hashchange", i)
                        }(0, i)), t()
                    }).catch(function(n) {
                        e.emitter.maybeReportError(new tf.LDUnexpectedResponseError((n && n.message, n.message))), t()
                    })
                }(i, function() {
                    return s.emit(ty)
                }) : s.emit(ty), "complete" !== document.readyState ? window.addEventListener("load", i.start) : i.start();
                var l = function() {
                    r.synchronousFlush = !0, o.flush().catch(function() {}), r.synchronousFlush = !1
                };
                return document.addEventListener("visibilitychange", function() {
                    "hidden" === document.visibilityState && l()
                }), window.addEventListener("pagehide", l), o
            }
        },
        78150: (e, t, n) => {
            let r;
            n.d(t, {
                A: () => s
            });
            let i = {
                    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
                },
                o = new Uint8Array(16),
                a = [];
            for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
            let s = function(e, t, n) {
                if (i.randomUUID && !t && !e) return i.randomUUID();
                let s = (e = e || {}).random || (e.rng || function() {
                    if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return r(o)
                })();
                if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) {
                    n = n || 0;
                    for (let e = 0; e < 16; ++e) t[n + e] = s[e];
                    return t
                }
                return function(e, t = 0) {
                    return a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]
                }(s)
            }
        }
    }
]);
//# sourceMappingURL=44025-af497db918bbc482.js.map