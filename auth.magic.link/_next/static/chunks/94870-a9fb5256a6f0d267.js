"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94870], {
        24390: (t, e, n) => {
            var r = n(30554);
            n.o(r, "useParams") && n.d(e, {
                useParams: function() {
                    return r.useParams
                }
            }), n.o(r, "usePathname") && n.d(e, {
                usePathname: function() {
                    return r.usePathname
                }
            }), n.o(r, "useRouter") && n.d(e, {
                useRouter: function() {
                    return r.useRouter
                }
            }), n.o(r, "useSearchParams") && n.d(e, {
                useSearchParams: function() {
                    return r.useSearchParams
                }
            })
        },
        69041: (t, e, n) => {
            n.d(e, {
                L: () => rd
            });
            var r, i, a, o, s, u, c, l, d, f, p, h, v, m, g = n(18620),
                _ = n(13691),
                y = n(82302),
                b = n(312),
                w = n(80547),
                k = n(85481),
                S = n(5167),
                x = n(61893),
                C = n(55854),
                T = n(34321),
                E = n(18932),
                A = n(40784),
                I = n(18435),
                R = n(4725),
                N = n(23325),
                M = n(64900),
                D = n(7215);

            function O(t, e, n) {
                var r = t.vitalsByName,
                    i = t.vitalsByReference;
                void 0 === n && (n = {});
                var a = {
                        name: e,
                        startClocks: (0, I.M8)(),
                        context: n.context,
                        description: n.description
                    },
                    o = {
                        __dd_vital_reference: !0
                    };
                return r.set(e, a), i.set(o, a), o
            }

            function L(t, e, n, r) {
                var i, a, o, s, u, c = e.vitalsByName,
                    l = e.vitalsByReference;
                void 0 === r && (r = {});
                var d = "string" == typeof n ? c.get(n) : l.get(n);
                d && (t((i = d, a = d.startClocks, o = r, s = (0, I.M8)(), {
                    name: i.name,
                    type: "duration",
                    startClocks: a,
                    duration: (0, I.vk)(a.timeStamp, s.timeStamp),
                    context: (0, T.kg)(i.context, o.context),
                    description: null != (u = o.description) ? u : i.description
                })), "string" == typeof n ? c.delete(n) : l.delete(n))
            }
            var P = n(94752),
                V = n(36848),
                z = n(5437),
                U = n(37420),
                F = n(29005),
                B = n(27568),
                j = n(20715),
                q = n(98341),
                H = n(95463),
                G = n(69853),
                W = n(72904);

            function Z(t) {
                var e = (0, W.P)(t);
                return "string" === e || "function" === e || t instanceof RegExp
            }

            function K(t, e, n) {
                return void 0 === n && (n = !1), t.some(function(t) {
                    try {
                        if ("function" == typeof t) return t(e);
                        if (t instanceof RegExp) return t.test(e);
                        if ("string" == typeof t) return n ? (0, N.w1)(e, t) : t === e
                    } catch (t) {
                        z.Vy.error(t)
                    }
                    return !1
                })
            }

            function Y() {
                return window.crypto || window.msCrypto
            }

            function J(t) {
                return r || (r = (0, B.sr)(B.R9.CONSISTENT_TRACE_SAMPLING) && function() {
                    try {
                        return crypto.getRandomValues(new BigUint64Array(1)), !0
                    } catch (t) {
                        return !1
                    }
                }() ? $ : X), r(t)
            }

            function $(t) {
                var e = crypto.getRandomValues(new BigUint64Array(1))[0];
                return 63 === t && (e >>= BigInt("1")), e
            }

            function X(t) {
                var e = Y().getRandomValues(new Uint32Array(2));
                return 63 === t && (e[e.length - 1] >>>= 1), {
                    toString: function(t) {
                        void 0 === t && (t = 10);
                        var n = e[1],
                            r = e[0],
                            i = "";
                        do {
                            var a = n % t * 0x100000000 + r;
                            n = Math.floor(n / t), r = Math.floor(a / t), i = (a % t).toString(t) + i
                        } while (n || r);
                        return i
                    }
                }
            }

            function Q(t) {
                var e = t.toString(16);
                return Array(17 - e.length).join("0") + e
            }

            function tt(t) {
                0 !== t.status || t.isAborted || (t.traceId = void 0, t.spanId = void 0, t.traceSampled = void 0)
            }

            function te(t, e, n, r) {
                if (void 0 !== Y() && n.findTrackedSession()) {
                    var i = (0, N.I6)(t.allowedTracingUrls, function(t) {
                        return K([t.match], e.url, !0)
                    });
                    if (i) {
                        var a, o, s, u, c, l = J(64);
                        e.traceSampled = function(t, e) {
                            if (100 === e) return !0;
                            if (0 === e) return !1;
                            if ("bigint" != typeof t) return (0, H.ic)(e);
                            var n = BigInt("1111111111111111111"),
                                r = BigInt("0x10000000000000000");
                            return Number(t * n % r) <= e / 100 * Number(r)
                        }(l, t.traceSampleRate), (e.traceSampled || t.traceContextInjection === q.uT.ALL) && (e.traceId = l, e.spanId = J(63), r((a = e.traceId, o = e.spanId, s = e.traceSampled, u = i.propagatorTypes, c = {}, u.forEach(function(t) {
                            switch (t) {
                                case "datadog":
                                    (0, N.kp)(c, {
                                        "x-datadog-origin": "rum",
                                        "x-datadog-parent-id": o.toString(),
                                        "x-datadog-sampling-priority": s ? "1" : "0",
                                        "x-datadog-trace-id": a.toString()
                                    });
                                    break;
                                case "tracecontext":
                                    (0, N.kp)(c, {
                                        traceparent: "00-0000000000000000".concat(Q(a), "-").concat(Q(o), "-0").concat(s ? "1" : "0")
                                    });
                                    break;
                                case "b3":
                                    (0, N.kp)(c, {
                                        b3: "".concat(Q(a), "-").concat(Q(o), "-").concat(s ? "1" : "0")
                                    });
                                    break;
                                case "b3multi":
                                    (0, N.kp)(c, {
                                        "X-B3-TraceId": Q(a),
                                        "X-B3-SpanId": Q(o),
                                        "X-B3-Sampled": s ? "1" : "0"
                                    })
                            }
                        }), c)))
                    }
                }
            }
            var tn = ["tracecontext", "datadog"],
                tr = n(86969);

            function ti() {
                z.Vy.error("Error fetching the remote configuration.")
            }
            var ta = n(71951),
                to = n(45410),
                ts = n(25860),
                tu = n(43162);

            function tc() {
                var t, e = window;
                if (e.Zone && (t = (0, tu.W)(e, "MutationObserver"), e.MutationObserver && t === e.MutationObserver)) {
                    var n = new e.MutationObserver(U.l),
                        r = (0, tu.W)(n, "originalInstance");
                    t = r && r.constructor
                }
                return t || (t = e.MutationObserver), t
            }
            var tl = n(16741),
                td = n(48095),
                tf = n(1741);

            function tp(t, e, n) {
                for (var r = t, i = e.split("."), a = 0; a < i.length; a += 1) {
                    var o = i[a];
                    if (!th(r)) return;
                    a !== i.length - 1 ? r = r[o] : r[o] = n
                }
            }

            function th(t) {
                return "object" === (0, W.P)(t)
            }
            var tv = {
                    "view.name": "string",
                    "view.url": "string",
                    "view.referrer": "string"
                },
                tm = {
                    context: "object"
                },
                tg = {
                    service: "string",
                    version: "string"
                },
                t_ = n(96741).D,
                ty = n(45882),
                tb = n(17170),
                tw = ty.AQ,
                tk = n(97891),
                tS = n(25113),
                tx = n(33940),
                tC = n(51491),
                tT = n(51797),
                tE = "initial_document",
                tA = [
                    ["document", function(t) {
                        return tE === t
                    }],
                    ["xhr", function(t) {
                        return "xmlhttprequest" === t
                    }],
                    ["fetch", function(t) {
                        return "fetch" === t
                    }],
                    ["beacon", function(t) {
                        return "beacon" === t
                    }],
                    ["css", function(t, e) {
                        return /\.css$/i.test(e)
                    }],
                    ["js", function(t, e) {
                        return /\.js$/i.test(e)
                    }],
                    ["image", function(t, e) {
                        return (0, N.mK)(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
                    }],
                    ["font", function(t, e) {
                        return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
                    }],
                    ["media", function(t, e) {
                        return (0, N.mK)(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
                    }]
                ];

            function tI() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 1; n < t.length; n += 1)
                    if (t[n - 1] > t[n]) return !1;
                return !0
            }

            function tR(t) {
                return t.duration >= 0
            }

            function tN(t) {
                var e, n = tI(t.startTime, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.connectEnd, t.requestStart, t.responseStart, t.responseEnd),
                    r = !((e = t).redirectEnd > e.startTime) || tI(t.startTime, t.redirectStart, t.redirectEnd, t.fetchStart);
                return n && r
            }

            function tM(t, e, n) {
                if (t <= e && e <= n) return {
                    duration: (0, I.Zj)((0, I.vk)(e, n)),
                    start: (0, I.Zj)((0, I.vk)(t, e))
                }
            }

            function tD(t) {
                return "" === t.nextHopProtocol ? void 0 : t.nextHopProtocol
            }

            function tO(t) {
                return "" === t.deliveryType ? "other" : t.deliveryType
            }

            function tL(t) {
                return t && !(0, tT.w)(t)
            }
            var tP = /data:(.+)?(;base64)?,/g;

            function tV(t) {
                if (t.length <= 24e3);
                else if ("data:" === t.substring(0, 5)) return t = t.substring(0, 24e3), !0;
                return !1
            }

            function tz(t) {
                return "".concat(t.match(tP)[0], "[...]")
            }
            var tU = 1;

            function tF() {
                var t = tU;
                return tU += 1, t
            }

            function tB(t) {
                return (0, H.Et)(t) && t < 0 ? void 0 : t
            }

            function tj(t) {
                var e = t.lifeCycle,
                    n = t.isChildEvent,
                    r = t.onChange,
                    i = void 0 === r ? U.l : r,
                    a = {
                        errorCount: 0,
                        longTaskCount: 0,
                        resourceCount: 0,
                        actionCount: 0,
                        frustrationCount: 0
                    },
                    o = e.subscribe(13, function(t) {
                        var e;
                        if ("view" !== t.type && "vital" !== t.type && n(t)) switch (t.type) {
                            case "error":
                                a.errorCount += 1, i();
                                break;
                            case "action":
                                a.actionCount += 1, t.action.frustration && (a.frustrationCount += t.action.frustration.type.length), i();
                                break;
                            case "long_task":
                                a.longTaskCount += 1, i();
                                break;
                            case "resource":
                                (null == (e = t._dd) ? void 0 : e.discarded) || (a.resourceCount += 1, i())
                        }
                    });
                return {
                    stop: function() {
                        o.unsubscribe()
                    },
                    eventCounts: a
                }
            }
            var tq = n(92594);

            function tH(t, e) {
                return new ts.c(function(n) {
                    if (window.PerformanceObserver) {
                        var r, i, s, u = function(t) {
                                var e = t.filter(function(t) {
                                    var e;
                                    return !((e = t).entryType === a.RESOURCE && (!tL(e.name) || !tR(e)))
                                });
                                e.length > 0 && n.notify(e)
                            },
                            c = !0,
                            l = new PerformanceObserver((0, x.dm)(function(t) {
                                c ? i = (0, tq.wg)(function() {
                                    return u(t.getEntries())
                                }) : u(t.getEntries())
                            }));
                        try {
                            l.observe(e)
                        } catch (t) {
                            var d = [a.RESOURCE, a.NAVIGATION, a.LONG_TASK, a.PAINT];
                            if ((0, N.mK)(d, e.type)) {
                                e.buffered && (i = (0, tq.wg)(function() {
                                    return u(performance.getEntriesByType(e.type))
                                }));
                                try {
                                    l.observe({
                                        entryTypes: [e.type]
                                    })
                                } catch (t) {
                                    return
                                }
                            }
                        }
                        return c = !1, r = t, !o && void 0 !== window.performance && "getEntries" in performance && "addEventListener" in performance && (o = (0, tr.q)(r, performance, "resourcetimingbufferfull", function() {
                                performance.clearResourceTimings()
                            })), tG(a.FIRST_INPUT) || e.type !== a.FIRST_INPUT || (s = function(t, e) {
                                var n = (0, I.x3)(),
                                    r = !1,
                                    i = (0, tr.l)(t, window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], function(e) {
                                        if (e.cancelable) {
                                            var n, r, i = {
                                                entryType: "first-input",
                                                processingStart: (0, I.$S)(),
                                                processingEnd: (0, I.$S)(),
                                                startTime: e.timeStamp,
                                                duration: 0,
                                                name: "",
                                                cancelable: !1,
                                                target: null,
                                                toJSON: function() {
                                                    return {}
                                                }
                                            };
                                            "pointerdown" === e.type ? (n = t, r = i, (0, tr.l)(n, window, ["pointerup", "pointercancel"], function(t) {
                                                "pointerup" === t.type && a(r)
                                            }, {
                                                once: !0
                                            })) : a(i)
                                        }
                                    }, {
                                        passive: !0,
                                        capture: !0
                                    }).stop;
                                return {
                                    stop: i
                                };

                                function a(t) {
                                    if (!r) {
                                        r = !0, i();
                                        var a = t.processingStart - t.startTime;
                                        a >= 0 && a < (0, I.x3)() - n && e(t)
                                    }
                                }
                            }(t, function(t) {
                                u([t])
                            }).stop),
                            function() {
                                l.disconnect(), s && s(), (0, tq.DJ)(i)
                            }
                    }
                })
            }

            function tG(t) {
                return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
            }! function(t) {
                t.EVENT = "event", t.FIRST_INPUT = "first-input", t.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint", t.LAYOUT_SHIFT = "layout-shift", t.LONG_TASK = "longtask", t.LONG_ANIMATION_FRAME = "long-animation-frame", t.NAVIGATION = "navigation", t.PAINT = "paint", t.RESOURCE = "resource"
            }(a || (a = {}));

            function tW(t, e, n) {
                var r, i = !1,
                    a = (0, tq.wg)((0, x.dm)(function() {
                        return c({
                            hadActivity: !1
                        })
                    }), 100),
                    o = void 0 !== n ? (0, tq.wg)((0, x.dm)(function() {
                        return c({
                            hadActivity: !0,
                            end: (0, I.nx)()
                        })
                    }), n) : void 0,
                    s = t.subscribe(function(t) {
                        var e = t.isBusy;
                        (0, tq.DJ)(a), (0, tq.DJ)(r);
                        var n = (0, I.nx)();
                        e || (r = (0, tq.wg)((0, x.dm)(function() {
                            return c({
                                hadActivity: !0,
                                end: n
                            })
                        }), 100))
                    }),
                    u = function() {
                        i = !0, (0, tq.DJ)(a), (0, tq.DJ)(r), (0, tq.DJ)(o), s.unsubscribe()
                    };

                function c(t) {
                    i || (u(), e(t))
                }
                return {
                    stop: u
                }
            }

            function tZ(t, e, n, r) {
                return new ts.c(function(i) {
                    var o, s = [],
                        u = 0;
                    return s.push(e.subscribe(c), n.subscribe(c), tH(r, {
                            type: a.RESOURCE
                        }).subscribe(function(t) {
                            t.some(function(t) {
                                return !tK(r, t.name)
                            }) && c()
                        }), t.subscribe(7, function(t) {
                            tK(r, t.url) || (void 0 === o && (o = t.requestIndex), u += 1, c())
                        }), t.subscribe(8, function(t) {
                            tK(r, t.url) || void 0 === o || t.requestIndex < o || (u -= 1, c())
                        })),
                        function() {
                            s.forEach(function(t) {
                                return t.unsubscribe()
                            })
                        };

                    function c() {
                        i.notify({
                            isBusy: u > 0
                        })
                    }
                })
            }

            function tK(t, e) {
                return K(t.excludedActivityUrls, e)
            }

            function tY(t) {
                return window.CSS && window.CSS.escape ? window.CSS.escape(t) : t.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
                    return e ? "\0" === t ? "�" : "".concat(t.slice(0, -1), "\\").concat(t.charCodeAt(t.length - 1).toString(16), " ") : "\\".concat(t)
                })
            }

            function tJ(t, e) {
                return t.matches ? t.matches(e) : !!t.msMatchesSelector && t.msMatchesSelector(e)
            }

            function t$(t) {
                if (t.parentElement) return t.parentElement;
                for (; t.parentNode;) {
                    if (t.parentNode.nodeType === Node.ELEMENT_NODE) return t.parentNode;
                    t = t.parentNode
                }
                return null
            }
            var tX = function() {
                    function t(t) {
                        var e = this;
                        this.map = new WeakMap, t && t.forEach(function(t) {
                            return e.map.set(t, 1)
                        })
                    }
                    return t.prototype.add = function(t) {
                        return this.map.set(t, 1), this
                    }, t.prototype.delete = function(t) {
                        return this.map.delete(t)
                    }, t.prototype.has = function(t) {
                        return this.map.has(t)
                    }, t
                }(),
                tQ = n(62864);

            function t0(t) {
                return t.nodeType === Node.TEXT_NODE
            }

            function t1(t) {
                return t.nodeType === Node.ELEMENT_NODE
            }

            function t2(t) {
                return t1(t) && !!t.shadowRoot
            }

            function t5(t) {
                return !!t.host && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t1(t.host)
            }

            function t3(t, e) {
                for (var n = t.firstChild; n;) e(n), n = n.nextSibling;
                t2(t) && e(t.shadowRoot)
            }

            function t6(t) {
                return t5(t) ? t.host : t.parentNode
            }
            var t4 = {
                    IGNORE: "ignore",
                    HIDDEN: "hidden",
                    ALLOW: q.WA.ALLOW,
                    MASK: q.WA.MASK,
                    MASK_USER_INPUT: q.WA.MASK_USER_INPUT
                },
                t8 = "data-dd-privacy",
                t9 = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
                t7 = {
                    INPUT: !0,
                    OUTPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0,
                    OPTION: !0,
                    DATALIST: !0,
                    OPTGROUP: !0
                };

            function et(t, e, n) {
                if (n && n.has(t)) return n.get(t);
                var r = t6(t),
                    i = r ? et(r, e, n) : e,
                    a = ee(en(t), i);
                return n && n.set(t, a), a
            }

            function ee(t, e) {
                switch (e) {
                    case t4.HIDDEN:
                    case t4.IGNORE:
                        return e
                }
                switch (t) {
                    case t4.ALLOW:
                    case t4.MASK:
                    case t4.MASK_USER_INPUT:
                    case t4.HIDDEN:
                    case t4.IGNORE:
                        return t;
                    default:
                        return e
                }
            }

            function en(t) {
                if (t1(t)) {
                    if ("BASE" === t.tagName) return t4.ALLOW;
                    if ("INPUT" === t.tagName) {
                        if ("password" === t.type || "email" === t.type || "tel" === t.type || "hidden" === t.type) return t4.MASK;
                        var e = t.getAttribute("autocomplete");
                        if (e && (e.startsWith("cc-") || e.endsWith("-password"))) return t4.MASK
                    }
                    if (tJ(t, eo(t4.HIDDEN))) return t4.HIDDEN;
                    if (tJ(t, eo(t4.MASK))) return t4.MASK;
                    if (tJ(t, eo(t4.MASK_USER_INPUT))) return t4.MASK_USER_INPUT;
                    if (tJ(t, eo(t4.ALLOW))) return t4.ALLOW;
                    if (function(t) {
                            if ("SCRIPT" === t.nodeName) return !0;
                            if ("LINK" === t.nodeName) {
                                var e = i("rel");
                                return /preload|prefetch/i.test(e) && "script" === i("as") || "shortcut icon" === e || "icon" === e
                            }
                            if ("META" === t.nodeName) {
                                var n = i("name"),
                                    e = i("rel"),
                                    r = i("property");
                                return /^msapplication-tile(image|color)$/.test(n) || "application-name" === n || "icon" === e || "apple-touch-icon" === e || "shortcut icon" === e || "keywords" === n || "description" === n || /^(og|twitter|fb):/.test(r) || /^(og|twitter):/.test(n) || "pinterest" === n || "robots" === n || "googlebot" === n || "bingbot" === n || t.hasAttribute("http-equiv") || "author" === n || "generator" === n || "framework" === n || "publisher" === n || "progid" === n || /^article:/.test(r) || /^product:/.test(r) || "google-site-verification" === n || "yandex-verification" === n || "csrf-token" === n || "p:domain_verify" === n || "verify-v1" === n || "verification" === n || "shopify-checkout-api-token" === n
                            }

                            function i(e) {
                                return (t.getAttribute(e) || "").toLowerCase()
                            }
                            return !1
                        }(t)) return t4.IGNORE
                }
            }

            function er(t, e) {
                switch (e) {
                    case t4.MASK:
                    case t4.HIDDEN:
                    case t4.IGNORE:
                        return !0;
                    case t4.MASK_USER_INPUT:
                        return t0(t) ? ei(t.parentNode) : ei(t);
                    default:
                        return !1
                }
            }

            function ei(t) {
                if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
                if ("INPUT" === t.tagName) switch (t.type) {
                    case "button":
                    case "color":
                    case "reset":
                    case "submit":
                        return !1
                }
                return !!t7[t.tagName]
            }

            function ea(t, e, n) {
                var r, i = null == (r = t.parentElement) ? void 0 : r.tagName,
                    a = t.textContent || "";
                if (!e || a.trim()) {
                    if ("SCRIPT" === i) a = "***";
                    else if (n === t4.HIDDEN) a = "***";
                    else if (er(t, n))
                        if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
                            if (!a.trim()) return
                        } else a = "OPTION" === i ? "***" : a.replace(/\S/g, "x");
                    return a
                }
            }

            function eo(t) {
                return "[".concat(t8, '="').concat(t, '"], .').concat("dd-privacy-").concat(t)
            }
            var es = "data-dd-action-name";

            function eu(t, e) {
                if (void 0 === u && (u = "closest" in HTMLElement.prototype), u) n = t.closest("[".concat(e, "]"));
                else
                    for (var n, r = t; r;) {
                        if (r.hasAttribute(e)) {
                            n = r;
                            break
                        }
                        r = t$(r)
                    }
                if (n) return ep(ef(n.getAttribute(e).trim()))
            }
            var ec = [function(t, e, n) {
                    if (void 0 === s && (s = "labels" in HTMLInputElement.prototype), s) {
                        if ("labels" in t && t.labels && t.labels.length > 0) return ev(t.labels[0], e)
                    } else if (t.id) {
                        var r = t.ownerDocument && (0, N.I6)(t.ownerDocument.querySelectorAll("label"), function(e) {
                            return e.htmlFor === t.id
                        });
                        return r && ev(r, e, n)
                    }
                }, function(t) {
                    if ("INPUT" === t.nodeName) {
                        var e = t.getAttribute("type");
                        if ("button" === e || "submit" === e || "reset" === e) return {
                            name: t.value,
                            nameSource: "text_content"
                        }
                    }
                }, function(t, e, n) {
                    if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role")) return ev(t, e, n)
                }, function(t) {
                    return eh(t, "aria-label")
                }, function(t, e, n) {
                    var r = t.getAttribute("aria-labelledby");
                    if (r) return {
                        name: r.split(/\s+/).map(function(e) {
                            var n, r;
                            return n = t, r = e, n.ownerDocument ? n.ownerDocument.getElementById(r) : null
                        }).filter(function(t) {
                            return !!t
                        }).map(function(t) {
                            return em(t, e, n)
                        }).join(" "),
                        nameSource: "text_content"
                    }
                }, function(t) {
                    return eh(t, "alt")
                }, function(t) {
                    return eh(t, "name")
                }, function(t) {
                    return eh(t, "title")
                }, function(t) {
                    return eh(t, "placeholder")
                }, function(t, e) {
                    if ("options" in t && t.options.length > 0) return ev(t.options[0], e)
                }],
                el = [function(t, e, n) {
                    return ev(t, e, n)
                }];

            function ed(t, e, n, r) {
                for (var i = t, a = 0; a <= 10 && i && "BODY" !== i.nodeName && "HTML" !== i.nodeName && "HEAD" !== i.nodeName;) {
                    for (var o = 0; o < n.length; o++) {
                        var s = (0, n[o])(i, e, r);
                        if (s) {
                            var u = s.name,
                                c = s.nameSource,
                                l = u && u.trim();
                            if (l) return {
                                name: ep(ef(l)),
                                nameSource: c
                            }
                        }
                    }
                    if ("FORM" === i.nodeName) break;
                    i = t$(i), a += 1
                }
            }

            function ef(t) {
                return t.replace(/\s+/g, " ")
            }

            function ep(t) {
                return t.length > 100 ? "".concat((0, D._R)(t, 100), " [...]") : t
            }

            function eh(t, e) {
                return {
                    name: t.getAttribute(e) || "",
                    nameSource: "standard_attribute"
                }
            }

            function ev(t, e, n) {
                return {
                    name: em(t, e, n) || "",
                    nameSource: "text_content"
                }
            }

            function em(t, e, n) {
                if (!t.isContentEditable) {
                    if ("innerText" in t) {
                        var r = t.innerText,
                            i = function(e) {
                                for (var n = t.querySelectorAll(e), i = 0; i < n.length; i += 1) {
                                    var a = n[i];
                                    if ("innerText" in a) {
                                        var o = a.innerText;
                                        o && o.trim().length > 0 && (r = r.replace(o, ""))
                                    }
                                }
                            };
                        return (0, tQ.lT)() && i("script, style"), i("[".concat(es, "]")), e && i("[".concat(e, "]")), n && i("".concat(eo(t4.HIDDEN), ", ").concat(eo(t4.MASK))), r
                    }
                    return t.textContent
                }
            }
            var eg = [es, "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"],
                e_ = [ek, function(t) {
                    if (t.id && !ew(t.id)) return "#".concat(tY(t.id))
                }],
                ey = [ek, function(t) {
                    if ("BODY" !== t.tagName)
                        for (var e = function(t) {
                                if (t.classList) return t.classList;
                                var e = (t.getAttribute("class") || "").trim();
                                return e ? e.split(/\s+/) : []
                            }(t), n = 0; n < e.length; n += 1) {
                            var r = e[n];
                            if (!ew(r)) return "".concat(tY(t.tagName), ".").concat(tY(r))
                        }
                }, function(t) {
                    return tY(t.tagName)
                }];

            function eb(t, e) {
                var n;
                if ("isConnected" in (n = t) ? n.isConnected : n.ownerDocument.documentElement.contains(n)) {
                    for (var r, i = t; i && "HTML" !== i.nodeName;) {
                        var a = eS(i, e_, ex, e, r);
                        if (a) return a;
                        r = eS(i, ey, eC, e, r) || eT(function(t) {
                            for (var e = t$(t).firstElementChild, n = 1; e && e !== t;) e.tagName === t.tagName && (n += 1), e = e.nextElementSibling;
                            return "".concat(tY(t.tagName), ":nth-of-type(").concat(n, ")")
                        }(i), r), i = t$(i)
                    }
                    return r
                }
            }

            function ew(t) {
                return /[0-9]/.test(t)
            }

            function ek(t, e) {
                if (e) {
                    var n = i(e);
                    if (n) return n
                }
                for (var r = 0; r < eg.length; r++) {
                    var n = i(eg[r]);
                    if (n) return n
                }

                function i(e) {
                    if (t.hasAttribute(e)) return "".concat(tY(t.tagName), "[").concat(e, '="').concat(tY(t.getAttribute(e)), '"]')
                }
            }

            function eS(t, e, n, r, i) {
                for (var a = 0; a < e.length; a++) {
                    var o = (0, e[a])(t, r);
                    if (o && n(t, o, i)) return eT(o, i)
                }
            }

            function ex(t, e, n) {
                return 1 === t.ownerDocument.querySelectorAll(eT(e, n)).length
            }

            function eC(t, e, n) {
                if (void 0 === n) r = function(t) {
                    return tJ(t, e)
                };
                else {
                    var r, i = ! function() {
                        if (void 0 === c) try {
                            document.querySelector(":scope"), c = !0
                        } catch (t) {
                            c = !1
                        }
                        return c
                    }() ? eT(e, n) : eT("".concat(e, ":scope"), n);
                    r = function(t) {
                        return null !== t.querySelector(i)
                    }
                }
                for (var a = t$(t).firstElementChild; a;) {
                    if (a !== t && r(a)) return !1;
                    a = a.nextElementSibling
                }
                return !0
            }

            function eT(t, e) {
                return e ? "".concat(t, ">").concat(e) : t
            }
            var eE = I.OY;

            function eA() {
                var t = window.getSelection();
                return !t || t.isCollapsed
            }

            function eI(t) {
                return t.target instanceof Element && !1 !== t.isPrimary
            }

            function eR(t) {
                return !t.hasPageActivity && !t.getUserActivity().input && !t.getUserActivity().scroll && !tJ(t.event.target, 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,[contenteditable],[contenteditable] *,canvas,a[href],a[href] *')
            }
            var eN = 10 * I.OY,
                eM = new Map;

            function eD(t, e) {
                eM.set(t, e), eM.forEach(function(t, e) {
                    (0, I.vk)(e, (0, I.$S)()) > eN && eM.delete(e)
                })
            }
            var eO = 5 * I.iW;

            function eL(t, e) {
                var n = eP(t) ? {
                        action: {
                            id: t.id,
                            loading_time: tB((0, I.Zj)(t.duration)),
                            frustration: {
                                type: t.frustrationTypes
                            },
                            error: {
                                count: t.counts.errorCount
                            },
                            long_task: {
                                count: t.counts.longTaskCount
                            },
                            resource: {
                                count: t.counts.resourceCount
                            }
                        },
                        _dd: {
                            action: {
                                target: t.target,
                                position: t.position,
                                name_source: (0, B.sr)(B.R9.ACTION_NAME_MASKING) ? t.nameSource : void 0
                            }
                        }
                    } : void 0,
                    r = eP(t) ? void 0 : t.context,
                    i = (0, T.kg)({
                        action: {
                            id: (0, D.lk)(),
                            target: {
                                name: t.name
                            },
                            type: t.type
                        },
                        date: t.startClocks.timeStamp,
                        type: "action",
                        view: {
                            in_foreground: e.wasInPageStateAt("active", t.startClocks.relative)
                        }
                    }, n),
                    a = eP(t) ? {
                        events: t.events
                    } : {};
                return !eP(t) && t.handlingStack && (a.handlingStack = t.handlingStack), {
                    customerContext: r,
                    rawRumEvent: i,
                    startTime: t.startClocks.relative,
                    domainContext: a
                }
            }

            function eP(t) {
                return "custom" !== t.type
            }
            var eV = n(15434),
                ez = n(78457),
                eU = n(26963),
                eF = n(67338),
                eB = n(77720),
                ej = n(99874);

            function eq(t, e) {
                if (window.requestIdleCallback && window.cancelIdleCallback) {
                    var n, r, i, a = window.requestIdleCallback((0, x.dm)(t), e);
                    return function() {
                        return window.cancelIdleCallback(a)
                    }
                }
                return n = t, r = (0, I.x3)(), i = (0, tq.wg)(function() {
                        n({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - ((0, I.x3)() - r))
                            }
                        })
                    }, 0),
                    function() {
                        return (0, tq.DJ)(i)
                    }
            }
            var eH = I.OY,
                eG = new tX;

            function eW(t) {
                return (0, I.Gw)(t.startTime, t.duration)
            }

            function eZ(t, e, n) {
                return document.readyState === e || "complete" === document.readyState ? (n(), {
                    stop: U.l
                }) : (0, tr.q)(t, window, "complete" === e ? "load" : "DOMContentLoaded", n, {
                    once: !0
                })
            }
            var eK = 2 * I.iW;

            function eY(t, e) {
                var n = e && Number(e);
                if (t && n) return {
                    traceId: t,
                    traceTime: n
                }
            }

            function eJ(t) {
                if (t && t.nodeType === Node.COMMENT_NODE) {
                    var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
                    if (e) return e[1]
                }
            }

            function e$() {
                if (tG(a.NAVIGATION)) {
                    var t = performance.getEntriesByType(a.NAVIGATION)[0];
                    if (t) return t
                }
                var e = function() {
                        var t = {},
                            e = performance.timing;
                        for (var n in e)
                            if ((0, H.Et)(e[n])) {
                                var r = e[n];
                                t[n] = 0 === r ? 0 : (0, I.gs)(r)
                            }
                        return t
                    }(),
                    n = (0, N.kp)({
                        entryType: a.NAVIGATION,
                        initiatorType: "navigation",
                        name: window.location.href,
                        startTime: 0,
                        duration: e.responseEnd,
                        decodedBodySize: 0,
                        encodedBodySize: 0,
                        transferSize: 0,
                        workerStart: 0,
                        toJSON: function() {
                            return (0, N.kp)({}, n, {
                                toJSON: void 0
                            })
                        }
                    }, e);
                return n
            }

            function eX(t, e) {
                eZ(t, "interactive", function() {
                    var t = (0, N.kp)(e$().toJSON(), {
                        entryType: a.RESOURCE,
                        initiatorType: tE,
                        traceId: function(t) {
                            var e, n, r, i = (n = (e = t).querySelector("meta[name=dd-trace-id]"), r = e.querySelector("meta[name=dd-trace-time]"), eY(n && n.content, r && r.content) || function(t) {
                                var e = function(t) {
                                    for (var e = 0; e < t.childNodes.length; e += 1) {
                                        var n = eJ(t.childNodes[e]);
                                        if (n) return n
                                    }
                                    if (t.body)
                                        for (var e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                                            var r = t.body.childNodes[e],
                                                n = eJ(r);
                                            if (n) return n;
                                            if (!t0(r)) break
                                        }
                                }(t);
                                if (e) return eY((0, D.rx)(e, "trace-id"), (0, D.rx)(e, "trace-time"))
                            }(t));
                            if (!(!i || i.traceTime <= (0, I.x3)() - eK)) return i.traceId
                        }(document),
                        toJSON: function() {
                            return (0, N.kp)({}, t, {
                                toJSON: void 0
                            })
                        }
                    });
                    e(t)
                })
            }

            function eQ(t, e) {
                var n = (0, I.FR)(t.startTime),
                    r = function(t, e) {
                        if (t.traceId) return {
                            _dd: {
                                trace_id: t.traceId,
                                span_id: J(63).toString(),
                                rule_psr: e.rulePsr
                            }
                        }
                    }(t, e);
                if (e.trackResources || r) {
                    var i, a = function(t) {
                            var e = t.name;
                            if (!(0, tC.AY)(e)) return (0, C.A2)('Failed to construct URL for "'.concat(t.name, '"')), "other";
                            for (var n = (0, tC.L2)(e), r = 0; r < tA.length; r++) {
                                var i = tA[r],
                                    a = i[0];
                                if ((0, i[1])(t.initiatorType, n)) return a
                            }
                            return "other"
                        }(t),
                        o = e0(t),
                        s = (0, T.kg)({
                            date: n.timeStamp,
                            resource: {
                                id: (0, D.lk)(),
                                type: a,
                                url: t.name,
                                status_code: 0 === (i = t.responseStatus) ? void 0 : i,
                                protocol: tD(t),
                                delivery_type: tO(t)
                            },
                            type: "resource",
                            _dd: {
                                discarded: !e.trackResources
                            }
                        }, r, o);
                    return {
                        startTime: n.relative,
                        rawRumEvent: s,
                        domainContext: {
                            performanceEntry: t
                        }
                    }
                }
            }

            function e0(t) {
                var e, n, r, i = t.renderBlockingStatus;
                return {
                    resource: (0, N.kp)({
                        duration: (e = t.duration, n = t.startTime, r = t.responseEnd, 0 === e && n < r ? (0, I.Zj)((0, I.vk)(n, r)) : (0, I.Zj)(e)),
                        render_blocking_status: i
                    }, function(t) {
                        if (t.startTime < t.responseStart) {
                            var e = t.encodedBodySize,
                                n = t.decodedBodySize;
                            return {
                                size: n,
                                encoded_body_size: e,
                                decoded_body_size: n,
                                transfer_size: t.transferSize
                            }
                        }
                        return {
                            size: void 0,
                            encoded_body_size: void 0,
                            decoded_body_size: void 0,
                            transfer_size: void 0
                        }
                    }(t), function(t) {
                        if (tN(t)) {
                            var e = t.startTime,
                                n = t.fetchStart,
                                r = t.workerStart,
                                i = t.redirectStart,
                                a = t.redirectEnd,
                                o = t.domainLookupStart,
                                s = t.domainLookupEnd,
                                u = t.connectStart,
                                c = t.secureConnectionStart,
                                l = t.connectEnd,
                                d = t.requestStart,
                                f = t.responseStart,
                                p = {
                                    download: tM(e, f, t.responseEnd),
                                    first_byte: tM(e, d, f)
                                };
                            return 0 < r && r < n && (p.worker = tM(e, r, n)), n < l && (p.connect = tM(e, u, l), u <= c && c <= l && (p.ssl = tM(e, c, l))), n < s && (p.dns = tM(e, o, s)), e < a && (p.redirect = tM(e, i, a)), p
                        }
                    }(t))
                }
            }
            var e1 = 10 * I.iW,
                e2 = 10 * I.iW;

            function e5(t, e) {
                var n, r;
                return void 0 === e && (e = window), "hidden" === document.visibilityState ? n = 0 : (n = 1 / 0, r = (0, tr.l)(t, e, ["pagehide", "visibilitychange"], function(t) {
                    ("pagehide" === t.type || "hidden" === document.visibilityState) && (n = t.timeStamp, r())
                }, {
                    capture: !0
                }).stop), {
                    get timeStamp() {
                        return n
                    },
                    stop: function() {
                        null == r || r()
                    }
                }
            }
            var e3 = 5 * I.OY,
                e6 = I.OY,
                e4 = 0,
                e8 = 1 / 0,
                e9 = 0,
                e7 = function() {
                    return l ? e4 : window.performance.interactionCount || 0
                },
                nt = +I.iW;

            function ne() {
                var t, e = window.visualViewport;
                return Math.round(e ? e.pageLeft - e.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0)
            }

            function nn() {
                var t, e = window.visualViewport;
                return Math.round(e ? e.pageTop - e.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0)
            }

            function nr(t) {
                var e;
                return d || (e = t, d = new ts.c(function(t) {
                    var n = (0, U.n)(function() {
                        t.notify(ni())
                    }, 200).throttled;
                    return (0, tr.q)(e, window, "resize", n, {
                        capture: !0,
                        passive: !0
                    }).stop
                })), d
            }

            function ni() {
                var t = window.visualViewport;
                return t ? {
                    width: Number(t.width * t.scale),
                    height: Number(t.height * t.scale)
                } : {
                    width: Number(window.innerWidth || 0),
                    height: Number(window.innerHeight || 0)
                }
            }
            var na = I.OY,
                no = 5 * I.iW,
                ns = 5 * I.iW;

            function nu(t) {
                var e = t.indexOf("?");
                return e < 0 ? t : t.slice(0, e)
            }
            var nc = n(6124);

            function nl(t) {
                return "2" === t || "1" === t
            }
            var nd = n(90212),
                nf = ty.AQ;

            function np(t) {
                return Object.prototype.hasOwnProperty.call(history, t) ? history : History.prototype
            }
            var nh = ty.AQ,
                nv = 10 * I.OY;

            function nm() {
                0 !== f.batchCount && ((0, C.A2)("Customer data measures", f), nb())
            }

            function ng() {
                return {
                    min: 1 / 0,
                    max: 0,
                    sum: 0
                }
            }

            function n_(t, e) {
                t.sum += e, t.min = Math.min(t.min, e), t.max = Math.max(t.max, e)
            }

            function ny(t, e) {
                t.sum += e.sum, t.min = Math.min(t.min, e.min), t.max = Math.max(t.max, e.max)
            }

            function nb() {
                f = {
                    batchCount: 0,
                    batchBytesCount: ng(),
                    batchMessagesCount: ng(),
                    globalContextBytes: ng(),
                    userContextBytes: ng(),
                    featureFlagBytes: ng()
                }
            }

            function nw() {
                h = !1, p = {
                    globalContextBytes: ng(),
                    userContextBytes: ng(),
                    featureFlagBytes: ng()
                }
            }
            var nk = ty.AQ;

            function nS() {
                return "hidden" === document.visibilityState ? "hidden" : document.hasFocus() ? "active" : "passive"
            }
            var nx = n(74742),
                nC = I.OY;

            function nT(t, e) {
                var n = (0, D.rx)(document.cookie, t),
                    r = (0, tq.yb)(function() {
                        var r = (0, D.rx)(document.cookie, t);
                        r !== n && e(r)
                    }, nC);
                return function() {
                    (0, tq.vG)(r)
                }
            }
            var nE = "datadog-ci-visibility-test-execution-id",
                nA = n(21495),
                nI = n(64708);

            function nR(t) {
                var e;
                return v || (v = new Map), v.has(t) ? e = v.get(t) : (e = {
                    records_count: 0,
                    segments_count: 0,
                    segments_total_raw_size: 0
                }, v.set(t, e), v.size > 10 && function() {
                    if (v)
                        if (v.keys) {
                            var t = v.keys().next().value;
                            t && v.delete(t)
                        } else {
                            var e = !0;
                            v.forEach(function(t, n) {
                                e && (v.delete(n), e = !1)
                            })
                        }
                }()), e
            }
            var nN = new WeakMap;

            function nM(t) {
                return nN.has(t)
            }

            function nD(t) {
                return nN.get(t)
            }

            function nO(t, e) {
                var n = t.tagName,
                    r = t.value;
                if (er(t, e)) {
                    var i = t.type;
                    if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i)) return r;
                    if (!r || "OPTION" === n) return;
                    return "***"
                }
                return "OPTION" === n || "SELECT" === n ? t.value : "INPUT" === n || "TEXTAREA" === n ? r : void 0
            }
            var nL = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
                nP = /^[A-Za-z]+:|^\/\//,
                nV = /^data:.*,/i,
                nz = /[^a-z1-6-_]/;

            function nU(t) {
                var e = t.toLowerCase().trim();
                return nz.test(e) ? "div" : e
            }

            function nF(t, e) {
                return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='".concat(t, "' height='").concat(e, "' style='background-color:silver'%3E%3C/svg%3E")
            }
            var nB = {
                    FullSnapshot: 2,
                    IncrementalSnapshot: 3,
                    Meta: 4,
                    Focus: 6,
                    ViewEnd: 7,
                    VisualViewport: 8,
                    FrustrationRecord: 9
                },
                nj = {
                    Document: 0,
                    DocumentType: 1,
                    Element: 2,
                    Text: 3,
                    CDATA: 4,
                    DocumentFragment: 11
                },
                nq = {
                    Mutation: 0,
                    MouseMove: 1,
                    MouseInteraction: 2,
                    Scroll: 3,
                    ViewportResize: 4,
                    Input: 5,
                    TouchMove: 6,
                    MediaInteraction: 7,
                    StyleSheetRule: 8
                },
                nH = {
                    MouseUp: 0,
                    MouseDown: 1,
                    Click: 2,
                    ContextMenu: 3,
                    DblClick: 4,
                    Focus: 5,
                    Blur: 6,
                    TouchStart: 7,
                    TouchEnd: 9
                },
                nG = {
                    Play: 0,
                    Pause: 1
                };

            function nW(t) {
                if (void 0 !== t && 0 !== t.length) return t.map(function(t) {
                    return {
                        cssRules: Array.from(t.cssRules || t.rules, function(t) {
                            return t.cssText
                        }),
                        disabled: t.disabled || void 0,
                        media: t.media.length > 0 ? Array.from(t.media) : void 0
                    }
                })
            }

            function nZ(t, e, n, r) {
                if (e === t4.HIDDEN) return null;
                var i = t.getAttribute(n);
                if (e === t4.MASK && n !== t8 && !eg.includes(n) && n !== r.actionNameAttribute) {
                    var a = t.tagName;
                    switch (n) {
                        case "title":
                        case "alt":
                        case "placeholder":
                            return "***"
                    }
                    if ("IMG" === a && ("src" === n || "srcset" === n)) {
                        if (t.naturalWidth > 0) return nF(t.naturalWidth, t.naturalHeight);
                        var o = t.getBoundingClientRect(),
                            s = o.width,
                            u = o.height;
                        return s > 0 || u > 0 ? nF(s, u) : t9
                    }
                    if ("SOURCE" === a && ("src" === n || "srcset" === n)) return t9;
                    if ("A" === a && "href" === n || i && (0, N.w1)(n, "data-") || "IFRAME" === a && "srcdoc" === n) return "***"
                }
                return i && "string" == typeof i && tV(i) ? tz(i) : i
            }

            function nK(t) {
                var e, n, r;
                if (!t) return null;
                try {
                    e = t.rules || t.cssRules
                } catch (t) {}
                return e ? (n = Array.from(e, (0, tQ.nr)() ? nY : nJ).join(""), r = t.href, n.replace(nL, function(t, e, n, i, a, o) {
                    var s = n || a || o;
                    if (!r || !s || nP.test(s) || nV.test(s)) return t;
                    var u = e || i || "";
                    return "url(".concat(u).concat(function(t, e) {
                        try {
                            return (0, tC.c$)(t, e).href
                        } catch (e) {
                            return t
                        }
                    }(s, r)).concat(u, ")")
                })) : null
            }

            function nY(t) {
                return "selectorText" in t && t.selectorText.includes(":") ? t.cssText.replace(/(\[[\w-]+[^\\])(:[^\]]+\])/g, "$1\\$2") : nJ(t)
            }

            function nJ(t) {
                return "styleSheet" in t && nK(t.styleSheet) || t.cssText
            }

            function n$(t, e) {
                var n = function(t, e) {
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            return n = t, r = e, {
                                type: nj.Document,
                                childNodes: nQ(n, r),
                                adoptedStyleSheets: nW(n.adoptedStyleSheets)
                            };
                        case t.DOCUMENT_FRAGMENT_NODE:
                            return i = t, a = e, (o = t5(i)) && a.serializationContext.shadowRootsController.addShadowRoot(i), {
                                type: nj.DocumentFragment,
                                childNodes: nQ(i, a),
                                isShadowRoot: o,
                                adoptedStyleSheets: o ? nW(i.adoptedStyleSheets) : void 0
                            };
                        case t.DOCUMENT_TYPE_NODE:
                            return s = t, {
                                type: nj.DocumentType,
                                name: s.name,
                                publicId: s.publicId,
                                systemId: s.systemId
                            };
                        case t.ELEMENT_NODE:
                            return function(t, e) {
                                var n, r, i = nU(t.tagName),
                                    a = "svg" === (n = t).tagName || n instanceof SVGElement || void 0,
                                    o = ee(en(t), e.parentNodePrivacyLevel);
                                if (o === t4.HIDDEN) {
                                    var s = t.getBoundingClientRect(),
                                        u = s.width,
                                        c = s.height;
                                    return {
                                        type: nj.Element,
                                        tagName: i,
                                        attributes: ((r = {
                                            rr_width: "".concat(u, "px"),
                                            rr_height: "".concat(c, "px")
                                        })[t8] = "hidden", r),
                                        childNodes: [],
                                        isSVG: a
                                    }
                                }
                                if (o !== t4.IGNORE) {
                                    var l = function(t, e, n) {
                                            if (e === t4.HIDDEN) return {};
                                            for (var r, i, a, o = {}, s = nU(t.tagName), u = t.ownerDocument, c = 0; c < t.attributes.length; c += 1) {
                                                var l = t.attributes.item(c).name,
                                                    d = nZ(t, e, l, n.configuration);
                                                null !== d && (o[l] = d)
                                            }
                                            if (t.value && ("textarea" === s || "select" === s || "option" === s || "input" === s)) {
                                                var f = nO(t, e);
                                                void 0 !== f && (o.value = f)
                                            }
                                            if ("option" === s && e === t4.ALLOW && t.selected && (o.selected = t.selected), "link" === s) {
                                                var p = Array.from(u.styleSheets).find(function(e) {
                                                        return e.href === t.href
                                                    }),
                                                    h = nK(p);
                                                h && p && (o._cssText = h)
                                            }
                                            if ("style" === s && t.sheet) {
                                                var h = nK(t.sheet);
                                                h && (o._cssText = h)
                                            }
                                            "input" === s && ("radio" === t.type || "checkbox" === t.type) && (e === t4.ALLOW ? o.checked = !!t.checked : er(t, e) && delete o.checked), ("audio" === s || "video" === s) && (o.rr_mediaState = t.paused ? "paused" : "played");
                                            var v = n.serializationContext;
                                            switch (v.status) {
                                                case 0:
                                                    i = Math.round(t.scrollTop), a = Math.round(t.scrollLeft), (i || a) && v.elementsScrollPositions.set(t, {
                                                        scrollTop: i,
                                                        scrollLeft: a
                                                    });
                                                    break;
                                                case 1:
                                                    v.elementsScrollPositions.has(t) && (i = (r = v.elementsScrollPositions.get(t)).scrollTop, a = r.scrollLeft)
                                            }
                                            return a && (o.rr_scrollLeft = a), i && (o.rr_scrollTop = i), o
                                        }(t, o, e),
                                        d = [];
                                    if ((t.childNodes.length > 0 || t2(t)) && "style" !== i) {
                                        var f = void 0;
                                        d = nQ(t, e.parentNodePrivacyLevel === o && e.ignoreWhiteSpace === ("head" === i) ? e : (0, N.kp)({}, e, {
                                            parentNodePrivacyLevel: o,
                                            ignoreWhiteSpace: "head" === i
                                        }))
                                    }
                                    return {
                                        type: nj.Element,
                                        tagName: i,
                                        attributes: l,
                                        childNodes: d,
                                        isSVG: a
                                    }
                                }
                            }(t, e);
                        case t.TEXT_NODE:
                            var n, r, i, a, o, s, u = t,
                                c = e,
                                l = ea(u, c.ignoreWhiteSpace || !1, c.parentNodePrivacyLevel);
                            if (void 0 !== l) return {
                                type: nj.Text,
                                textContent: l
                            };
                            return;
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: nj.CDATA,
                                textContent: ""
                            }
                    }
                }(t, e);
                if (!n) return null;
                var r = nD(t) || nX++;
                return n.id = r, nN.set(t, r), e.serializedNodeIds && e.serializedNodeIds.add(r), n
            }
            var nX = 1;

            function nQ(t, e) {
                var n = [];
                return t3(t, function(t) {
                    var r = n$(t, e);
                    r && n.push(r)
                }), n
            }

            function n0(t) {
                return !!t.changedTouches
            }

            function n1(t) {
                return !0 === t.composed && t2(t.target) ? t.composedPath()[0] : t.target
            }
            var n2 = function(t, e) {
                    var n = window.visualViewport,
                        r = {
                            layoutViewportX: t,
                            layoutViewportY: e,
                            visualViewportX: t,
                            visualViewportY: e
                        };
                    return n && (Math.abs(n.pageTop - n.offsetTop - window.scrollY) > 25 || Math.abs(n.pageLeft - n.offsetLeft - window.scrollX) > 25 ? (r.layoutViewportX = Math.round(t + n.offsetLeft), r.layoutViewportY = Math.round(e + n.offsetTop)) : (r.visualViewportX = Math.round(t - n.offsetLeft), r.visualViewportY = Math.round(e - n.offsetTop))), r
                },
                n5 = function(t) {
                    return {
                        scale: t.scale,
                        offsetLeft: t.offsetLeft,
                        offsetTop: t.offsetTop,
                        pageLeft: t.pageLeft,
                        pageTop: t.pageTop,
                        height: t.height,
                        width: t.width
                    }
                };

            function n3(t, e) {
                return {
                    data: (0, N.kp)({
                        source: t
                    }, e),
                    type: nB.IncrementalSnapshot,
                    timestamp: (0, I.nx)()
                }
            }

            function n6(t) {
                var e = n0(t) ? t.changedTouches[0] : t,
                    n = e.clientX,
                    r = e.clientY;
                if (window.visualViewport) {
                    var i = n2(n, r),
                        a = i.visualViewportX,
                        o = i.visualViewportY;
                    n = a, r = o
                }
                if (!Number.isFinite(n) || !Number.isFinite(r)) {
                    t.isTrusted && (0, C.A2)("mouse/touch event without x/y");
                    return
                }
                return {
                    x: n,
                    y: r
                }
            }
            var n4 = ((m = {}).pointerup = nH.MouseUp, m.mousedown = nH.MouseDown, m.click = nH.Click, m.contextmenu = nH.ContextMenu, m.dblclick = nH.DblClick, m.focus = nH.Focus, m.blur = nH.Blur, m.touchstart = nH.TouchStart, m.touchend = nH.TouchEnd, m);

            function n8(t, e, n, r) {
                void 0 === r && (r = document);
                var i = (0, U.n)(function(r) {
                        var i = n1(r);
                        if (i && et(i, t.defaultPrivacyLevel) !== t4.HIDDEN && nM(i)) {
                            var a = nD(i),
                                o = i === document ? {
                                    scrollTop: nn(),
                                    scrollLeft: ne()
                                } : {
                                    scrollTop: Math.round(i.scrollTop),
                                    scrollLeft: Math.round(i.scrollLeft)
                                };
                            n.set(i, o), e(n3(nq.Scroll, {
                                id: a,
                                x: o.scrollLeft,
                                y: o.scrollTop
                            }))
                        }
                    }, 100),
                    a = i.throttled,
                    o = i.cancel,
                    s = (0, tr.q)(t, r, "scroll", a, {
                        capture: !0,
                        passive: !0
                    }).stop;
                return {
                    stop: function() {
                        s(), o()
                    }
                }
            }

            function n9(t) {
                for (var e = [], n = t; n.parentRule;) {
                    var r = Array.from(n.parentRule.cssRules).indexOf(n);
                    e.unshift(r), n = n.parentRule
                }
                if (n.parentStyleSheet) {
                    var i = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
                    return e.unshift(i), e
                }
            }

            function n7(t, e, n) {
                void 0 === n && (n = document);
                var r, i = t.defaultPrivacyLevel,
                    a = new WeakMap,
                    o = n !== document,
                    s = (0, tr.l)(t, n, o ? ["change"] : ["input", "change"], function(t) {
                        var e = n1(t);
                        (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement) && c(e)
                    }, {
                        capture: !0,
                        passive: !0
                    }).stop;
                if (o) r = U.l;
                else {
                    var u = [(0, tl.t)(HTMLInputElement.prototype, "value", c), (0, tl.t)(HTMLInputElement.prototype, "checked", c), (0, tl.t)(HTMLSelectElement.prototype, "value", c), (0, tl.t)(HTMLTextAreaElement.prototype, "value", c), (0, tl.t)(HTMLSelectElement.prototype, "selectedIndex", c)];
                    r = function() {
                        u.forEach(function(t) {
                            return t.stop()
                        })
                    }
                }
                return {
                    stop: function() {
                        r(), s()
                    }
                };

                function c(t) {
                    var e, n = et(t, i);
                    if (n !== t4.HIDDEN) {
                        var r = t.type;
                        if ("radio" === r || "checkbox" === r) {
                            if (er(t, n)) return;
                            e = {
                                isChecked: t.checked
                            }
                        } else {
                            var a = nO(t, n);
                            if (void 0 === a) return;
                            e = {
                                text: a
                            }
                        }
                        l(t, e);
                        var o = t.name;
                        "radio" === r && o && t.checked && (0, N.jJ)(document.querySelectorAll('input[type="radio"][name="'.concat(tY(o), '"]')), function(e) {
                            e !== t && l(e, {
                                isChecked: !1
                            })
                        })
                    }
                }

                function l(t, n) {
                    if (nM(t)) {
                        var r = a.get(t);
                        r && r.text === n.text && r.isChecked === n.isChecked || (a.set(t, n), e(n3(nq.Input, (0, N.kp)({
                            id: nD(t)
                        }, n))))
                    }
                }
            }

            function rt(t, e, n, r) {
                var i = tc();
                if (!i) return {
                    stop: U.l,
                    flush: U.l
                };
                var a = function(t) {
                        var e = U.l,
                            n = [];

                        function r() {
                            e(), t(n), n = []
                        }
                        var i = (0, U.n)(r, 16, {
                                leading: !1
                            }),
                            a = i.throttled,
                            o = i.cancel;
                        return {
                            addMutations: function(t) {
                                0 === n.length && (e = eq(a, {
                                    timeout: 100
                                })), n.push.apply(n, t)
                            },
                            flush: r,
                            stop: function() {
                                e(), o()
                            }
                        }
                    }(function(r) {
                        var i, a, s, u, c, l, d, f, p, h, v, m;
                        i = r.concat(o.takeRecords()), a = t, s = e, u = n, c = new Map, i.filter(function(t) {
                            return "childList" === t.type
                        }).forEach(function(t) {
                            t.removedNodes.forEach(function(t) {
                                ! function t(e, n) {
                                    t2(e) && n(e.shadowRoot), t3(e, function(e) {
                                        return t(e, n)
                                    })
                                }(t, u.removeShadowRoot)
                            })
                        }), f = (d = function(t, e, n, r) {
                            for (var i = new Set, a = new Map, o = function(t) {
                                    t.addedNodes.forEach(function(t) {
                                        i.add(t)
                                    }), t.removedNodes.forEach(function(e) {
                                        i.has(e) || a.set(e, t.target), i.delete(e)
                                    })
                                }, s = 0; s < t.length; s++) o(t[s]);
                            var u = Array.from(i);
                            u.sort(function(t, e) {
                                var n = t.compareDocumentPosition(e);
                                return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
                            });
                            for (var c = new Set, l = [], d = 0; d < u.length; d++) {
                                var f = u[d];
                                if (!g(f)) {
                                    var p = et(f.parentNode, e.defaultPrivacyLevel, r);
                                    if (p !== t4.HIDDEN && p !== t4.IGNORE) {
                                        var h = n$(f, {
                                            serializedNodeIds: c,
                                            parentNodePrivacyLevel: p,
                                            serializationContext: {
                                                status: 2,
                                                shadowRootsController: n
                                            },
                                            configuration: e
                                        });
                                        if (h) {
                                            var v = t6(f);
                                            l.push({
                                                nextId: function(t) {
                                                    for (var e = t.nextSibling; e;) {
                                                        if (nM(e)) return nD(e);
                                                        e = e.nextSibling
                                                    }
                                                    return null
                                                }(f),
                                                parentId: nD(v),
                                                node: h
                                            })
                                        }
                                    }
                                }
                            }
                            var m = [];
                            return a.forEach(function(t, e) {
                                nM(e) && m.push({
                                    parentId: nD(t),
                                    id: nD(e)
                                })
                            }), {
                                adds: l,
                                removes: m,
                                hasBeenSerialized: g
                            };

                            function g(t) {
                                return nM(t) && c.has(nD(t))
                            }
                        }((l = i.filter(function(t) {
                            return t.target.isConnected && function(t) {
                                for (var e = t; e;) {
                                    if (!nM(e) && !t5(e)) return !1;
                                    e = t6(e)
                                }
                                return !0
                            }(t.target) && et(t.target, s.defaultPrivacyLevel, c) !== t4.HIDDEN
                        })).filter(function(t) {
                            return "childList" === t.type
                        }), s, u, c)).adds, p = d.removes, h = d.hasBeenSerialized, v = function(t, e, n) {
                            for (var r, i = [], a = new Set, o = t.filter(function(t) {
                                    return !a.has(t.target) && (a.add(t.target), !0)
                                }), s = 0; s < o.length; s++) {
                                var u = o[s];
                                if (u.target.textContent !== u.oldValue) {
                                    var c = et(t6(u.target), e.defaultPrivacyLevel, n);
                                    c !== t4.HIDDEN && c !== t4.IGNORE && i.push({
                                        id: nD(u.target),
                                        value: null != (r = ea(u.target, !1, c)) ? r : null
                                    })
                                }
                            }
                            return i
                        }(l.filter(function(t) {
                            return "characterData" === t.type && !h(t.target)
                        }), s, c), m = function(t, e, n) {
                            for (var r = [], i = new Map, a = t.filter(function(t) {
                                    var e = i.get(t.target);
                                    return !(e && e.has(t.attributeName)) && (e ? e.add(t.attributeName) : i.set(t.target, new Set([t.attributeName])), !0)
                                }), o = new Map, s = 0; s < a.length; s++) {
                                var u = a[s];
                                if (u.target.getAttribute(u.attributeName) !== u.oldValue) {
                                    var c = et(u.target, e.defaultPrivacyLevel, n),
                                        l = nZ(u.target, c, u.attributeName, e),
                                        d = void 0;
                                    if ("value" === u.attributeName) {
                                        var f = nO(u.target, c);
                                        if (void 0 === f) continue;
                                        d = f
                                    } else d = "string" == typeof l ? l : null;
                                    var p = o.get(u.target);
                                    p || (p = {
                                        id: nD(u.target),
                                        attributes: {}
                                    }, r.push(p), o.set(u.target, p)), p.attributes[u.attributeName] = d
                                }
                            }
                            return r
                        }(l.filter(function(t) {
                            return "attributes" === t.type && !h(t.target)
                        }), s, c), (v.length || m.length || p.length || f.length) && a(n3(nq.Mutation, {
                            adds: f,
                            removes: p,
                            texts: v,
                            attributes: m
                        }))
                    }),
                    o = new i((0, x.dm)(a.addMutations));
                return o.observe(r, {
                    attributeOldValue: !0,
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), {
                    stop: function() {
                        o.disconnect(), a.stop()
                    },
                    flush: function() {
                        a.flush()
                    }
                }
            }
            var re = function(t, e, n) {
                    var r = new Map,
                        i = {
                            addShadowRoot: function(a) {
                                if (!r.has(a)) {
                                    var o = rt(e, t, i, a),
                                        s = n7(t, e, a),
                                        u = n8(t, e, n, a);
                                    r.set(a, {
                                        flush: function() {
                                            return o.flush()
                                        },
                                        stop: function() {
                                            o.stop(), s.stop(), u.stop()
                                        }
                                    })
                                }
                            },
                            removeShadowRoot: function(t) {
                                var e = r.get(t);
                                e && (e.stop(), r.delete(t))
                            },
                            stop: function() {
                                r.forEach(function(t) {
                                    return (0, t.stop)()
                                })
                            },
                            flush: function() {
                                r.forEach(function(t) {
                                    return (0, t.flush)()
                                })
                            }
                        };
                    return i
                },
                rn = 5 * I.OY,
                rr = n(12542);

            function ri(t, e, n) {
                var r, i = 0,
                    a = [],
                    o = 0,
                    s = [],
                    u = (0, tr.q)(t, e, "message", function(t) {
                        var e = t.data;
                        if ("wrote" === e.type && e.streamId === n) {
                            i += e.additionalBytesCount, a.push(e.result), r = e.trailer;
                            var o = s.shift();
                            o && o.id === e.id ? o.writeCallback ? o.writeCallback(e.result.byteLength) : o.finishCallback && o.finishCallback() : (u(), (0, C.A2)("Worker responses received out of order."))
                        }
                    }).stop;

                function c() {
                    var t = 0 === a.length ? new Uint8Array(0) : (0, rr.wh)(a.concat(r)),
                        e = {
                            rawBytesCount: i,
                            output: t,
                            outputBytesCount: t.byteLength,
                            encoding: "deflate"
                        };
                    return i = 0, a = [], e
                }

                function l() {
                    o > 0 && (e.postMessage({
                        action: "reset",
                        streamId: n
                    }), o = 0)
                }
                return {
                    isAsync: !0,
                    get isEmpty() {
                        return 0 === o
                    },
                    write: function(t, r) {
                        e.postMessage({
                            action: "write",
                            id: o,
                            data: t,
                            streamId: n
                        }), s.push({
                            id: o,
                            writeCallback: r,
                            data: t
                        }), o += 1
                    },
                    finish: function(t) {
                        l(), s.length ? (s.forEach(function(t) {
                            delete t.writeCallback
                        }), s[s.length - 1].finishCallback = function() {
                            return t(c())
                        }) : t(c())
                    },
                    finishSync: function() {
                        l();
                        var t = s.map(function(t) {
                            return delete t.writeCallback, delete t.finishCallback, t.data
                        }).join("");
                        return (0, N.kp)(c(), {
                            pendingData: t
                        })
                    },
                    estimateEncodedBytesCount: function(t) {
                        return t.length / 8
                    },
                    stop: function() {
                        u()
                    }
                }
            }
            var ra = 30 * I.OY;

            function ro(t) {
                return new Worker(t.workerUrl || URL.createObjectURL(new Blob(['!function(){"use strict";function t(t){for(var e=t.reduce((function(t,e){return t+e.length}),0),a=new Uint8Array(e),n=0,r=0,i=t;r<i.length;r++){var s=i[r];a.set(s,n),n+=s.length}return a}function e(t){for(var e=t.length;--e>=0;)t[e]=0}var a=256,n=286,r=30,i=15,s=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),h=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),l=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),_=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=new Array(576);e(o);var d=new Array(60);e(d);var u=new Array(512);e(u);var f=new Array(256);e(f);var c=new Array(29);e(c);var p,g,w,v=new Array(r);function b(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function m(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}e(v);var y=function(t){return t<256?u[t]:u[256+(t>>>7)]},k=function(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},z=function(t,e,a){t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,k(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},x=function(t,e,a){z(t,a[2*e],a[2*e+1])},A=function(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},U=function(t,e,a){var n,r,s=new Array(16),h=0;for(n=1;n<=i;n++)s[n]=h=h+a[n-1]<<1;for(r=0;r<=e;r++){var l=t[2*r+1];0!==l&&(t[2*r]=A(s[l]++,l))}},I=function(t){var e;for(e=0;e<n;e++)t.dyn_ltree[2*e]=0;for(e=0;e<r;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0},B=function(t){t.bi_valid>8?k(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},E=function(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]},S=function(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&E(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!E(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n},C=function(t,e,n){var r,i,l,_,o=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],i=t.pending_buf[t.l_buf+o],o++,0===r?x(t,i,e):(l=f[i],x(t,l+a+1,e),0!==(_=s[l])&&(i-=c[l],z(t,i,_)),r--,l=y(r),x(t,l,n),0!==(_=h[l])&&(r-=v[l],z(t,r,_)))}while(o<t.last_lit);x(t,256,e)},D=function(t,e){var a,n,r,s=e.dyn_tree,h=e.stat_desc.static_tree,l=e.stat_desc.has_stree,_=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=573,a=0;a<_;a++)0!==s[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):s[2*a+1]=0;for(;t.heap_len<2;)s[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,l&&(t.static_len-=h[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)S(t,s,a);r=_;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],S(t,s,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,s[2*r]=s[2*a]+s[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,s[2*a+1]=s[2*n+1]=r,t.heap[1]=r++,S(t,s,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,s,h,l,_=e.dyn_tree,o=e.max_code,d=e.stat_desc.static_tree,u=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(s=0;s<=i;s++)t.bl_count[s]=0;for(_[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<573;a++)(s=_[2*_[2*(n=t.heap[a])+1]+1]+1)>p&&(s=p,g++),_[2*n+1]=s,n>o||(t.bl_count[s]++,h=0,n>=c&&(h=f[n-c]),l=_[2*n],t.opt_len+=l*(s+h),u&&(t.static_len+=l*(d[2*n+1]+h)));if(0!==g){do{for(s=p-1;0===t.bl_count[s];)s--;t.bl_count[s]--,t.bl_count[s+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(s=p;0!==s;s--)for(n=t.bl_count[s];0!==n;)(r=t.heap[--a])>o||(_[2*r+1]!==s&&(t.opt_len+=(s-_[2*r+1])*_[2*r],_[2*r+1]=s),n--)}}(t,e),U(s,o,t.bl_count)},j=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<_?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[32]++):h<=10?t.bl_tree[34]++:t.bl_tree[36]++,h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4))},M=function(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,_=4;for(0===s&&(l=138,_=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<l&&r===s)){if(h<_)do{x(t,r,t.bl_tree)}while(0!=--h);else 0!==r?(r!==i&&(x(t,r,t.bl_tree),h--),x(t,16,t.bl_tree),z(t,h-3,2)):h<=10?(x(t,17,t.bl_tree),z(t,h-3,3)):(x(t,18,t.bl_tree),z(t,h-11,7));h=0,i=r,0===s?(l=138,_=3):r===s?(l=6,_=3):(l=7,_=4)}},L=!1,T=function(t,e,a,n){z(t,0+(n?1:0),3),function(t,e,a,n){B(t),n&&(k(t,a),k(t,~a)),t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a}(t,e,a,!0)},H=function(t,e,n,r){var i,s,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<a;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0}(t)),D(t,t.l_desc),D(t,t.d_desc),h=function(t){var e;for(j(t,t.dyn_ltree,t.l_desc.max_code),j(t,t.dyn_dtree,t.d_desc.max_code),D(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*_[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),i=t.opt_len+3+7>>>3,(s=t.static_len+3+7>>>3)<=i&&(i=s)):i=s=n+5,n+4<=i&&-1!==e?T(t,e,n,r):4===t.strategy||s===i?(z(t,2+(r?1:0),3),C(t,o,d)):(z(t,4+(r?1:0),3),function(t,e,a,n){var r;for(z(t,e-257,5),z(t,a-1,5),z(t,n-4,4),r=0;r<n;r++)z(t,t.bl_tree[2*_[r]+1],3);M(t,t.dyn_ltree,e-1),M(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),C(t,t.dyn_ltree,t.dyn_dtree)),I(t),r&&B(t)},R={_tr_init:function(t){L||(!function(){var t,e,a,_,m,y=new Array(16);for(a=0,_=0;_<28;_++)for(c[_]=a,t=0;t<1<<s[_];t++)f[a++]=_;for(f[a-1]=_,m=0,_=0;_<16;_++)for(v[_]=m,t=0;t<1<<h[_];t++)u[m++]=_;for(m>>=7;_<r;_++)for(v[_]=m<<7,t=0;t<1<<h[_]-7;t++)u[256+m++]=_;for(e=0;e<=i;e++)y[e]=0;for(t=0;t<=143;)o[2*t+1]=8,t++,y[8]++;for(;t<=255;)o[2*t+1]=9,t++,y[9]++;for(;t<=279;)o[2*t+1]=7,t++,y[7]++;for(;t<=287;)o[2*t+1]=8,t++,y[8]++;for(U(o,287,y),t=0;t<r;t++)d[2*t+1]=5,d[2*t]=A(t,5);p=new b(o,s,257,n,i),g=new b(d,h,0,r,i),w=new b(new Array(0),l,0,19,7)}(),L=!0),t.l_desc=new m(t.dyn_ltree,p),t.d_desc=new m(t.dyn_dtree,g),t.bl_desc=new m(t.bl_tree,w),t.bi_buf=0,t.bi_valid=0,I(t)},_tr_stored_block:T,_tr_flush_block:H,_tr_tally:function(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(f[n]+a+1)]++,t.dyn_dtree[2*y(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){z(t,2,3),x(t,256,o),function(t){16===t.bi_valid?(k(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}(t)}},K=function(t,e,a,n){for(var r=65535&t,i=t>>>16&65535,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16},N=new Uint32Array(function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}()),O=function(t,e,a,n){var r=N,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return~t},q={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},F=0,G=2,J=3,P=4,Q=0,V=1,W=-1,X=0,Y=8,Z=R._tr_init,$=R._tr_stored_block,tt=R._tr_flush_block,et=R._tr_tally,at=R._tr_align,nt=F,rt=1,it=J,st=P,ht=5,lt=Q,_t=V,ot=-2,dt=-3,ut=-5,ft=W,ct=1,pt=2,gt=3,wt=4,vt=X,bt=2,mt=Y,yt=258,kt=262,zt=103,xt=113,At=666,Ut=function(t,e){return t.msg=q[e],e},It=function(t){return(t<<1)-(t>4?9:0)},Bt=function(t){for(var e=t.length;--e>=0;)t[e]=0},Et=function(t,e,a){return(e<<t.hash_shift^a)&t.hash_mask},St=function(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},Ct=function(t,e){tt(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,St(t.strm)},Dt=function(t,e){t.pending_buf[t.pending++]=e},jt=function(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},Mt=function(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-kt?t.strstart-(t.w_size-kt):0,_=t.window,o=t.w_mask,d=t.prev,u=t.strstart+yt,f=_[i+s-1],c=_[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(_[(a=e)+s]===c&&_[a+s-1]===f&&_[a]===_[i]&&_[++a]===_[i+1]){i+=2,a++;do{}while(_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&_[++i]===_[++a]&&i<u);if(n=yt-(u-i),i=u-yt,n>s){if(t.match_start=e,s=n,n>=h)break;f=_[i+s-1],c=_[i+s]}}}while((e=d[e&o])>l&&0!=--r);return s<=t.lookahead?s:t.lookahead},Lt=function(t){var e,a,n,r,i,s,h,l,_,o,d=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-kt)){t.window.set(t.window.subarray(d,d+d),0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=d?n-d:0}while(--a);e=a=d;do{n=t.prev[--e],t.prev[e]=n>=d?n-d:0}while(--a);r+=d}if(0===t.strm.avail_in)break;if(s=t.strm,h=t.window,l=t.strstart+t.lookahead,_=r,o=void 0,(o=s.avail_in)>_&&(o=_),a=0===o?0:(s.avail_in-=o,h.set(s.input.subarray(s.next_in,s.next_in+o),l),1===s.state.wrap?s.adler=K(s.adler,h,o,l):2===s.state.wrap&&(s.adler=O(s.adler,h,o,l)),s.next_in+=o,s.total_in+=o,o),t.lookahead+=a,t.lookahead+t.insert>=3)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=Et(t,t.ins_h,t.window[i+1]);t.insert&&(t.ins_h=Et(t,t.ins_h,t.window[i+3-1]),t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<kt&&0!==t.strm.avail_in)},Tt=function(t,e){for(var a,n;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a)),t.match_length>=3)if(n=et(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=Et(t,t.ins_h,t.window[t.strstart+1]);else n=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2},Ht=function(t,e){for(var a,n,r;;){if(t.lookahead<kt){if(Lt(t),t.lookahead<kt&&e===nt)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-kt&&(t.match_length=Mt(t,a),t.match_length<=5&&(t.strategy===ct||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-3,n=et(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=Et(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,n&&(Ct(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if((n=et(t,0,t.window[t.strstart-1]))&&Ct(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=et(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2};function Rt(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}var Kt=[new Rt(0,0,0,0,(function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(Lt(t),0===t.lookahead&&e===nt)return 1;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,Ct(t,!1),0===t.strm.avail_out))return 1;if(t.strstart-t.block_start>=t.w_size-kt&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):(t.strstart>t.block_start&&(Ct(t,!1),t.strm.avail_out),1)})),new Rt(4,4,8,4,Tt),new Rt(4,5,16,8,Tt),new Rt(4,6,32,32,Tt),new Rt(4,4,16,16,Ht),new Rt(8,16,32,32,Ht),new Rt(8,16,128,128,Ht),new Rt(8,32,128,256,Ht),new Rt(32,128,258,1024,Ht),new Rt(32,258,258,4096,Ht)];function Nt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=mt,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),Bt(this.dyn_ltree),Bt(this.dyn_dtree),Bt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),Bt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),Bt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}var Ot=function(t){if(!t||!t.state)return Ut(t,ot);t.total_in=t.total_out=0,t.data_type=bt;var e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?42:xt,t.adler=2===e.wrap?0:1,e.last_flush=nt,Z(e),lt},qt=function(t){var e,a=Ot(t);return a===lt&&((e=t.state).window_size=2*e.w_size,Bt(e.head),e.max_lazy_match=Kt[e.level].max_lazy,e.good_match=Kt[e.level].good_length,e.nice_match=Kt[e.level].nice_length,e.max_chain_length=Kt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0),a},Ft=function(t,e,a,n,r,i){if(!t)return ot;var s=1;if(e===ft&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>9||a!==mt||n<8||n>15||e<0||e>9||i<0||i>wt)return Ut(t,ot);8===n&&(n=9);var h=new Nt;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+3-1)/3),h.window=new Uint8Array(2*h.w_size),h.head=new Uint16Array(h.hash_size),h.prev=new Uint16Array(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new Uint8Array(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,qt(t)},Gt={deflateInit:function(t,e){return Ft(t,e,mt,15,8,vt)},deflateInit2:Ft,deflateReset:qt,deflateResetKeep:Ot,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?ot:(t.state.gzhead=e,lt):ot},deflate:function(t,e){var a,n;if(!t||!t.state||e>ht||e<0)return t?Ut(t,ot):ot;var r=t.state;if(!t.output||!t.input&&0!==t.avail_in||r.status===At&&e!==st)return Ut(t,0===t.avail_out?ut:ot);r.strm=t;var i=r.last_flush;if(r.last_flush=e,42===r.status)if(2===r.wrap)t.adler=0,Dt(r,31),Dt(r,139),Dt(r,8),r.gzhead?(Dt(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Dt(r,255&r.gzhead.time),Dt(r,r.gzhead.time>>8&255),Dt(r,r.gzhead.time>>16&255),Dt(r,r.gzhead.time>>24&255),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,255&r.gzhead.os),r.gzhead.extra&&r.gzhead.extra.length&&(Dt(r,255&r.gzhead.extra.length),Dt(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(t.adler=O(t.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=69):(Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,0),Dt(r,9===r.level?2:r.strategy>=pt||r.level<2?4:0),Dt(r,3),r.status=xt);else{var s=mt+(r.w_bits-8<<4)<<8;s|=(r.strategy>=pt||r.level<2?0:r.level<6?1:6===r.level?2:3)<<6,0!==r.strstart&&(s|=32),s+=31-s%31,r.status=xt,jt(r,s),0!==r.strstart&&(jt(r,t.adler>>>16),jt(r,65535&t.adler)),t.adler=1}if(69===r.status)if(r.gzhead.extra){for(a=r.pending;r.gzindex<(65535&r.gzhead.extra.length)&&(r.pending!==r.pending_buf_size||(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending!==r.pending_buf_size));)Dt(r,255&r.gzhead.extra[r.gzindex]),r.gzindex++;r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),r.gzindex===r.gzhead.extra.length&&(r.gzindex=0,r.status=73)}else r.status=73;if(73===r.status)if(r.gzhead.name){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.name.length?255&r.gzhead.name.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.gzindex=0,r.status=91)}else r.status=91;if(91===r.status)if(r.gzhead.comment){a=r.pending;do{if(r.pending===r.pending_buf_size&&(r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),St(t),a=r.pending,r.pending===r.pending_buf_size)){n=1;break}n=r.gzindex<r.gzhead.comment.length?255&r.gzhead.comment.charCodeAt(r.gzindex++):0,Dt(r,n)}while(0!==n);r.gzhead.hcrc&&r.pending>a&&(t.adler=O(t.adler,r.pending_buf,r.pending-a,a)),0===n&&(r.status=zt)}else r.status=zt;if(r.status===zt&&(r.gzhead.hcrc?(r.pending+2>r.pending_buf_size&&St(t),r.pending+2<=r.pending_buf_size&&(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),t.adler=0,r.status=xt)):r.status=xt),0!==r.pending){if(St(t),0===t.avail_out)return r.last_flush=-1,lt}else if(0===t.avail_in&&It(e)<=It(i)&&e!==st)return Ut(t,ut);if(r.status===At&&0!==t.avail_in)return Ut(t,ut);if(0!==t.avail_in||0!==r.lookahead||e!==nt&&r.status!==At){var h=r.strategy===pt?function(t,e){for(var a;;){if(0===t.lookahead&&(Lt(t),0===t.lookahead)){if(e===nt)return 1;break}if(t.match_length=0,a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):r.strategy===gt?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=yt){if(Lt(t),t.lookahead<=yt&&e===nt)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+yt;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=yt-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=et(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=et(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(Ct(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===st?(Ct(t,!0),0===t.strm.avail_out?3:4):t.last_lit&&(Ct(t,!1),0===t.strm.avail_out)?1:2}(r,e):Kt[r.level].func(r,e);if(3!==h&&4!==h||(r.status=At),1===h||3===h)return 0===t.avail_out&&(r.last_flush=-1),lt;if(2===h&&(e===rt?at(r):e!==ht&&($(r,0,0,!1),e===it&&(Bt(r.head),0===r.lookahead&&(r.strstart=0,r.block_start=0,r.insert=0))),St(t),0===t.avail_out))return r.last_flush=-1,lt}return e!==st?lt:r.wrap<=0?_t:(2===r.wrap?(Dt(r,255&t.adler),Dt(r,t.adler>>8&255),Dt(r,t.adler>>16&255),Dt(r,t.adler>>24&255),Dt(r,255&t.total_in),Dt(r,t.total_in>>8&255),Dt(r,t.total_in>>16&255),Dt(r,t.total_in>>24&255)):(jt(r,t.adler>>>16),jt(r,65535&t.adler)),St(t),r.wrap>0&&(r.wrap=-r.wrap),0!==r.pending?lt:_t)},deflateEnd:function(t){if(!t||!t.state)return ot;var e=t.state.status;return 42!==e&&69!==e&&73!==e&&91!==e&&e!==zt&&e!==xt&&e!==At?Ut(t,ot):(t.state=null,e===xt?Ut(t,dt):lt)},deflateSetDictionary:function(t,e){var a=e.length;if(!t||!t.state)return ot;var n=t.state,r=n.wrap;if(2===r||1===r&&42!==n.status||n.lookahead)return ot;if(1===r&&(t.adler=K(t.adler,e,a,0)),n.wrap=0,a>=n.w_size){0===r&&(Bt(n.head),n.strstart=0,n.block_start=0,n.insert=0);var i=new Uint8Array(n.w_size);i.set(e.subarray(a-n.w_size,a),0),e=i,a=n.w_size}var s=t.avail_in,h=t.next_in,l=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,Lt(n);n.lookahead>=3;){var _=n.strstart,o=n.lookahead-2;do{n.ins_h=Et(n,n.ins_h,n.window[_+3-1]),n.prev[_&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=_,_++}while(--o);n.strstart=_,n.lookahead=2,Lt(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=2,n.match_available=0,t.next_in=h,t.input=l,t.avail_in=s,n.wrap=r,lt},deflateInfo:"pako deflate (from Nodeca project)"};for(var Jt=new Uint8Array(256),Pt=0;Pt<256;Pt++)Jt[Pt]=Pt>=252?6:Pt>=248?5:Pt>=240?4:Pt>=224?3:Pt>=192?2:1;Jt[254]=Jt[254]=1;var Qt=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},Vt=Object.prototype.toString,Wt=F,Xt=G,Yt=J,Zt=P,$t=Q,te=V,ee=W,ae=X,ne=Y;function re(){this.options={level:ee,method:ne,chunkSize:16384,windowBits:15,memLevel:8,strategy:ae};var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Qt,this.strm.avail_out=0;var e=Gt.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==$t)throw new Error(q[e]);if(t.header&&Gt.deflateSetHeader(this.strm,t.header),t.dictionary){var a;if(a="[object ArrayBuffer]"===Vt.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(e=Gt.deflateSetDictionary(this.strm,a))!==$t)throw new Error(q[e]);this._dict_set=!0}}function ie(t,e,a){try{t.postMessage({type:"errored",error:e,streamId:a})}catch(n){t.postMessage({type:"errored",error:String(e),streamId:a})}}function se(t){var e=t.strm.adler;return new Uint8Array([3,0,e>>>24&255,e>>>16&255,e>>>8&255,255&e])}re.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;for(n=e===~~e?e:!0===e?Zt:Wt,"[object ArrayBuffer]"===Vt.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;;)if(0===r.avail_out&&(r.output=new Uint8Array(i),r.next_out=0,r.avail_out=i),(n===Xt||n===Yt)&&r.avail_out<=6)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else{if((a=Gt.deflate(r,n))===te)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),a=Gt.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===$t;if(0!==r.avail_out){if(n>0&&r.next_out>0)this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;else if(0===r.avail_in)break}else this.onData(r.output)}return!0},re.prototype.onData=function(t){this.chunks.push(t)},re.prototype.onEnd=function(t){t===$t&&(this.result=function(t){for(var e=0,a=0,n=t.length;a<n;a++)e+=t[a].length;for(var r=new Uint8Array(e),i=0,s=0,h=t.length;i<h;i++){var l=t[i];r.set(l,s),s+=l.length}return r}(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},function(e){void 0===e&&(e=self);try{var a=new Map;e.addEventListener("message",(function(n){try{var r=function(e,a){switch(a.action){case"init":return{type:"initialized",version:"5.35.1"};case"write":var n=e.get(a.streamId);n||(n=new re,e.set(a.streamId,n));var r=n.chunks.length,i=function(t){if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);var e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(h),i=0,r=0;i<h;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e}(a.data);return n.push(i,G),{type:"wrote",id:a.id,streamId:a.streamId,result:t(n.chunks.slice(r)),trailer:se(n),additionalBytesCount:i.length};case"reset":e.delete(a.streamId)}}(a,n.data);r&&e.postMessage(r)}catch(t){ie(e,t,n.data&&"streamId"in n.data?n.data.streamId:void 0)}}))}catch(t){ie(e,t)}}()}();'])))
            }
            var rs = {
                status: 0
            };

            function ru(t, e, n, r) {
                switch (void 0 === r && (r = ro), 0 === rs.status && function(t, e, n) {
                    void 0 === n && (n = ro);
                    try {
                        var r = n(t),
                            i = (0, tr.q)(t, r, "error", function(n) {
                                rc(t, e, n)
                            }).stop,
                            a = (0, tr.q)(t, r, "message", function(n) {
                                var r, i = n.data;
                                "errored" === i.type ? rc(t, e, i.error, i.streamId) : "initialized" === i.type && (r = i.version, 1 === rs.status && (rs = {
                                    status: 3,
                                    worker: rs.worker,
                                    stop: rs.stop,
                                    version: r
                                }))
                            }).stop;
                        r.postMessage({
                            action: "init"
                        }), (0, tq.wg)(function() {
                            var t;
                            return t = e, void(1 === rs.status && (z.Vy.error("".concat(t, " failed to start: a timeout occurred while initializing the Worker")), rs.initializationFailureCallbacks.forEach(function(t) {
                                return t()
                            }), rs = {
                                status: 2
                            }))
                        }, ra), rs = {
                            status: 1,
                            worker: r,
                            stop: function() {
                                i(), a()
                            },
                            initializationFailureCallbacks: []
                        }
                    } catch (n) {
                        rc(t, e, n)
                    }
                }(t, e, r), rs.status) {
                    case 1:
                        return rs.initializationFailureCallbacks.push(n), rs.worker;
                    case 3:
                        return rs.worker
                }
            }

            function rc(t, e, n, r) {
                if (1 === rs.status || 0 === rs.status) {
                    var i;
                    if (z.Vy.error("".concat(e, " failed to start: an error occurred while creating the Worker:"), n), n instanceof Event || n instanceof Error && (i = n.message, (0, N.mK)(i, "Content Security Policy") || (0, N.mK)(i, "requires 'TrustedScriptURL'"))) {
                        var a = void 0;
                        a = t.workerUrl ? "Please make sure the Worker URL ".concat(t.workerUrl, " is correct and CSP is correctly configured.") : "Please make sure CSP is correctly configured.", z.Vy.error("".concat(a, " See documentation at ").concat(z.fH, "/integrations/content_security_policy_logs/#use-csp-with-real-user-monitoring-and-session-replay"))
                    } else(0, C.VJ)(n);
                    1 === rs.status && rs.initializationFailureCallbacks.forEach(function(t) {
                        return t()
                    }), rs = {
                        status: 2
                    }
                } else(0, C.VJ)(n, {
                    worker_version: 3 === rs.status && rs.version,
                    stream_id: r
                })
            }

            function rl() {
                return "function" == typeof Array.from && "function" == typeof CSSSupportsRule && "function" == typeof URL.createObjectURL && "forEach" in NodeList.prototype
            }
            var rd = function(t, e, n) {
                void 0 === n && (n = {});
                var r = (0, y.qR)(0),
                    i = (0, b.D)(r.getOrCreateTracker(2)),
                    a = (0, b.D)(r.getOrCreateTracker(1)),
                    o = (0, w.D)(),
                    s = {
                        vitalsByName: new Map,
                        vitalsByReference: new WeakMap
                    };

                function u() {
                    return {
                        context: i.getContext(),
                        user: a.getContext(),
                        hasReplay: !!e.isRecording() || void 0
                    }
                }
                var c = function(t, e, n, r, i) {
                        var a, o, s, u, c = t.ignoreInitIfSyntheticsWillInjectRum,
                            l = t.startDeflateWorker,
                            d = (0, P.O)(),
                            f = n.observable.subscribe(p);

                        function p() {
                            if (s && u && n.isGranted()) {
                                if (f.unsubscribe(), u.trackViewsManually) {
                                    if (!a) return;
                                    d.remove(a.callback), t = a.options
                                }
                                var t, e = i(u, o, t);
                                d.drain(e)
                            }
                        }

                        function h(t) {
                            var e, r, i, a, c, d, f, h = (0, V.d0)();
                            if (h && (e = t, t = (0, N.kp)({}, e, {
                                    applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                                    clientToken: "empty",
                                    sessionSampleRate: 100,
                                    defaultPrivacyLevel: null != (r = e.defaultPrivacyLevel) ? r : null == (i = (0, V.Y9)()) ? void 0 : i.getPrivacyLevel()
                                })), s = t, (0, C.Rr)((a = t, d = (0, q.hO)(a), (0, N.kp)({
                                    session_replay_sample_rate: a.sessionReplaySampleRate,
                                    start_session_replay_recording_manually: a.startSessionReplayRecordingManually,
                                    trace_sample_rate: a.traceSampleRate,
                                    trace_context_injection: a.traceContextInjection,
                                    action_name_attribute: a.actionNameAttribute,
                                    use_allowed_tracing_urls: Array.isArray(a.allowedTracingUrls) && a.allowedTracingUrls.length > 0,
                                    selected_tracing_propagators: (f = new Set, Array.isArray(a.allowedTracingUrls) && a.allowedTracingUrls.length > 0 && a.allowedTracingUrls.forEach(function(t) {
                                        Z(t) ? tn.forEach(function(t) {
                                            return f.add(t)
                                        }) : "object" === (0, W.P)(t) && Array.isArray(t.propagatorTypes) && t.propagatorTypes.forEach(function(t) {
                                            return f.add(t)
                                        })
                                    }), (0, N.A6)(f)),
                                    default_privacy_level: a.defaultPrivacyLevel,
                                    enable_privacy_for_action_name: a.enablePrivacyForActionName,
                                    use_excluded_activity_urls: Array.isArray(a.excludedActivityUrls) && a.excludedActivityUrls.length > 0,
                                    use_worker_url: !!a.workerUrl,
                                    compress_intake_requests: a.compressIntakeRequests,
                                    track_views_manually: a.trackViewsManually,
                                    track_user_interactions: a.trackUserInteractions,
                                    track_resources: a.trackResources,
                                    track_long_task: a.trackLongTasks,
                                    plugins: null == (c = a.plugins) ? void 0 : c.map(function(t) {
                                        var e;
                                        return (0, N.kp)({
                                            name: t.name
                                        }, null == (e = t.getConfigurationTelemetry) ? void 0 : e.call(t))
                                    })
                                }, d))), u) return void(0, M.$)("DD_RUM", t);
                            var v = function(t) {
                                if (!t.applicationId) return void z.Vy.error("Application ID is not configured, no RUM data will be collected.");
                                if ((0, q.bX)(t.sessionReplaySampleRate, "Session Replay") && (0, q.bX)(t.traceSampleRate, "Trace")) {
                                    if (void 0 !== t.excludedActivityUrls && !Array.isArray(t.excludedActivityUrls)) return void z.Vy.error("Excluded Activity Urls should be an array");
                                    var e, n, r, i = function(t) {
                                        if (void 0 === t.allowedTracingUrls) return [];
                                        if (!Array.isArray(t.allowedTracingUrls)) return void z.Vy.error("Allowed Tracing URLs should be an array");
                                        if (0 !== t.allowedTracingUrls.length && void 0 === t.service) return void z.Vy.error("Service needs to be configured when tracing is enabled");
                                        var e = [];
                                        return t.allowedTracingUrls.forEach(function(t) {
                                            if (Z(t)) e.push({
                                                match: t,
                                                propagatorTypes: tn
                                            });
                                            else "object" === (0, W.P)(t) && Z(t.match) && Array.isArray(t.propagatorTypes) ? e.push(t) : z.Vy.warn("Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter", t)
                                        }), e
                                    }(t);
                                    if (i) {
                                        var a = (0, q.Sz)(t);
                                        if (a) {
                                            var o = null != (e = t.sessionReplaySampleRate) ? e : 0;
                                            return (0, N.kp)({
                                                applicationId: t.applicationId,
                                                version: t.version || void 0,
                                                actionNameAttribute: t.actionNameAttribute,
                                                sessionReplaySampleRate: o,
                                                startSessionReplayRecordingManually: void 0 !== t.startSessionReplayRecordingManually ? !!t.startSessionReplayRecordingManually : 0 === o,
                                                traceSampleRate: null != (n = t.traceSampleRate) ? n : 100,
                                                rulePsr: (0, H.Et)(t.traceSampleRate) ? t.traceSampleRate / 100 : void 0,
                                                allowedTracingUrls: i,
                                                excludedActivityUrls: null != (r = t.excludedActivityUrls) ? r : [],
                                                workerUrl: t.workerUrl,
                                                compressIntakeRequests: !!t.compressIntakeRequests,
                                                trackUserInteractions: !!t.trackUserInteractions,
                                                trackViewsManually: !!t.trackViewsManually,
                                                trackResources: !!t.trackResources,
                                                trackLongTasks: !!t.trackLongTasks,
                                                subdomain: t.subdomain,
                                                defaultPrivacyLevel: (0, G.Rj)(q.WA, t.defaultPrivacyLevel) ? t.defaultPrivacyLevel : q.WA.MASK,
                                                enablePrivacyForActionName: !!t.enablePrivacyForActionName,
                                                customerDataTelemetrySampleRate: 1,
                                                traceContextInjection: (0, G.Rj)(q.uT, t.traceContextInjection) ? t.traceContextInjection : q.uT.ALL,
                                                plugins: t.plugins || []
                                            }, a)
                                        }
                                    }
                                }
                            }(t);
                            if (v) {
                                if (!h && !v.sessionStoreStrategyType) return void z.Vy.warn("No storage available for session. We will not send any data.");
                                if (v.compressIntakeRequests && !h && l && !(o = l(v, "Datadog RUM", U.l))) return;
                                u = v, (0, F.i)().subscribe(U.l), n.tryToInit(v.trackingConsent), p()
                            }
                        }
                        var v = function(t) {
                            d.add(function(e) {
                                return e.addDurationVital(t)
                            })
                        };
                        return {
                            init: function(t, e) {
                                if (!t) return void z.Vy.error("Missing configuration");
                                if ((0, B.Aq)(t.enableExperimentalFeatures), s = t, !(c && (0, j.ao)()))
                                    if (! function(t, e, n) {
                                            if (t)
                                                for (var r = 0; r < t.length; r++) {
                                                    var i = t[r][e];
                                                    i && i(n)
                                                }
                                        }(t.plugins, "onInit", {
                                            initConfiguration: t,
                                            publicApi: e
                                        }), t.remoteConfigurationId && (0, B.sr)(B.R9.REMOTE_CONFIGURATION)) {
                                        var n, r, i;
                                        n = t, r = function(e) {
                                            var n, r;
                                            h((n = t, r = e, (0, N.kp)({}, n, r)))
                                        }, i = new XMLHttpRequest, (0, tr.q)(n, i, "load", function() {
                                            200 === i.status ? r(JSON.parse(i.responseText)) : ti()
                                        }), (0, tr.q)(n, i, "error", function() {
                                            ti()
                                        }), i.open("GET", "".concat("https://d3uc069fcn7uxw.cloudfront.net/configuration", "/").concat(encodeURIComponent(n.remoteConfigurationId), ".json")), i.send()
                                    } else h(t)
                            },
                            get initConfiguration() {
                                return s
                            },
                            getInternalContext: U.l,
                            stopSession: U.l,
                            addTiming: function(t, e) {
                                void 0 === e && (e = (0, I.nx)()), d.add(function(n) {
                                    return n.addTiming(t, e)
                                })
                            },
                            startView: function(t, e) {
                                void 0 === e && (e = (0, I.M8)());
                                var n = function(n) {
                                    n.startView(t, e)
                                };
                                d.add(n), a || (a = {
                                    options: t,
                                    callback: n
                                }, p())
                            },
                            setViewName: function(t) {
                                d.add(function(e) {
                                    return e.setViewName(t)
                                })
                            },
                            setViewContext: function(t) {
                                d.add(function(e) {
                                    return e.setViewContext(t)
                                })
                            },
                            setViewContextProperty: function(t, e) {
                                d.add(function(n) {
                                    return n.setViewContextProperty(t, e)
                                })
                            },
                            addAction: function(t, n) {
                                void 0 === n && (n = e()), d.add(function(e) {
                                    return e.addAction(t, n)
                                })
                            },
                            addError: function(t, n) {
                                void 0 === n && (n = e()), d.add(function(e) {
                                    return e.addError(t, n)
                                })
                            },
                            addFeatureFlagEvaluation: function(t, e) {
                                d.add(function(n) {
                                    return n.addFeatureFlagEvaluation(t, e)
                                })
                            },
                            startDurationVital: function(t, e) {
                                return O(r, t, e)
                            },
                            stopDurationVital: function(t, e) {
                                L(v, r, t, e)
                            },
                            addDurationVital: v
                        }
                    }(n, u, o, s, function(l, d, f) {
                        l.storeContextsAcrossPages && ((0, k.Ck)(l, i, "rum", 2), (0, k.Ck)(l, a, "rum", 1)), r.setCompressionStatus(d ? 1 : 2);
                        var p, h, v = t(l, e, r, u, f, d && n.createDeflateEncoder ? function(t) {
                            return n.createDeflateEncoder(l, d, t)
                        } : S.N, o, s);
                        return e.onRumStart(v.lifeCycle, l, v.session, v.viewHistory, d), p = c, h = v, c = (0, N.kp)({
                            init: function(t) {
                                (0, M.$)("DD_RUM", t)
                            },
                            initConfiguration: p.initConfiguration
                        }, h), v
                    }),
                    l = (0, x.dm)(function(t) {
                        var e = "object" == typeof t ? t : {
                            name: t
                        };
                        e.context && r.getOrCreateTracker(3).updateCustomerData(e.context), c.startView(e), (0, C.Q6)({
                            feature: "start-view"
                        })
                    }),
                    d = (0, g.m)({
                        init: (0, x.dm)(function(t) {
                            c.init(t, d)
                        }),
                        setTrackingConsent: (0, x.dm)(function(t) {
                            o.update(t), (0, C.Q6)({
                                feature: "set-tracking-consent",
                                tracking_consent: t
                            })
                        }),
                        setViewName: (0, x.dm)(function(t) {
                            c.setViewName(t)
                        }),
                        setViewContext: (0, x.dm)(function(t) {
                            c.setViewContext(t)
                        }),
                        setViewContextProperty: (0, x.dm)(function(t, e) {
                            c.setViewContextProperty(t, e)
                        }),
                        setGlobalContext: (0, x.dm)(function(t) {
                            i.setContext(t), (0, C.Q6)({
                                feature: "set-global-context"
                            })
                        }),
                        getGlobalContext: (0, x.dm)(function() {
                            return i.getContext()
                        }),
                        setGlobalContextProperty: (0, x.dm)(function(t, e) {
                            i.setContextProperty(t, e), (0, C.Q6)({
                                feature: "set-global-context"
                            })
                        }),
                        removeGlobalContextProperty: (0, x.dm)(function(t) {
                            return i.removeContextProperty(t)
                        }),
                        clearGlobalContext: (0, x.dm)(function() {
                            return i.clearContext()
                        }),
                        getInternalContext: (0, x.dm)(function(t) {
                            return c.getInternalContext(t)
                        }),
                        getInitConfiguration: (0, x.dm)(function() {
                            return (0, T.Go)(c.initConfiguration)
                        }),
                        addAction: function(t, e) {
                            var n = (0, E.uC)();
                            (0, x.um)(function() {
                                c.addAction({
                                    name: (0, A.a)(t),
                                    context: (0, A.a)(e),
                                    startClocks: (0, I.M8)(),
                                    type: "custom",
                                    handlingStack: n
                                }), (0, C.Q6)({
                                    feature: "add-action"
                                })
                            })
                        },
                        addError: function(t, e) {
                            var n = (0, E.uC)();
                            (0, x.um)(function() {
                                c.addError({
                                    error: t,
                                    handlingStack: n,
                                    context: (0, A.a)(e),
                                    startClocks: (0, I.M8)()
                                }), (0, C.Q6)({
                                    feature: "add-error"
                                })
                            })
                        },
                        addTiming: (0, x.dm)(function(t, e) {
                            c.addTiming((0, A.a)(t), e)
                        }),
                        setUser: (0, x.dm)(function(t) {
                            (0, R.Og)(t) && a.setContext((0, R.x8)(t)), (0, C.Q6)({
                                feature: "set-user"
                            })
                        }),
                        getUser: (0, x.dm)(function() {
                            return a.getContext()
                        }),
                        setUserProperty: (0, x.dm)(function(t, e) {
                            var n, r = (0, R.x8)(((n = {})[t] = e, n))[t];
                            a.setContextProperty(t, r), (0, C.Q6)({
                                feature: "set-user"
                            })
                        }),
                        removeUserProperty: (0, x.dm)(function(t) {
                            return a.removeContextProperty(t)
                        }),
                        clearUser: (0, x.dm)(function() {
                            return a.clearContext()
                        }),
                        startView: l,
                        stopSession: (0, x.dm)(function() {
                            c.stopSession(), (0, C.Q6)({
                                feature: "stop-session"
                            })
                        }),
                        addFeatureFlagEvaluation: (0, x.dm)(function(t, e) {
                            c.addFeatureFlagEvaluation((0, A.a)(t), (0, A.a)(e)), (0, C.Q6)({
                                feature: "add-feature-flag-evaluation"
                            })
                        }),
                        getSessionReplayLink: (0, x.dm)(function() {
                            return e.getSessionReplayLink()
                        }),
                        startSessionReplayRecording: (0, x.dm)(function(t) {
                            e.start(t), (0, C.Q6)({
                                feature: "start-session-replay-recording",
                                force: t && t.force
                            })
                        }),
                        stopSessionReplayRecording: (0, x.dm)(function() {
                            return e.stop()
                        }),
                        addDurationVital: (0, x.dm)(function(t, e) {
                            (0, C.Q6)({
                                feature: "add-duration-vital"
                            }), c.addDurationVital({
                                name: (0, A.a)(t),
                                type: "duration",
                                startClocks: (0, I.jR)(e.startTime),
                                duration: e.duration,
                                context: (0, A.a)(e && e.context),
                                description: (0, A.a)(e && e.description)
                            })
                        }),
                        startDurationVital: (0, x.dm)(function(t, e) {
                            return (0, C.Q6)({
                                feature: "start-duration-vital"
                            }), c.startDurationVital((0, A.a)(t), {
                                context: (0, A.a)(e && e.context),
                                description: (0, A.a)(e && e.description)
                            })
                        }),
                        stopDurationVital: (0, x.dm)(function(t, e) {
                            (0, C.Q6)({
                                feature: "stop-duration-vital"
                            }), c.stopDurationVital("string" == typeof t ? (0, A.a)(t) : t, {
                                context: (0, A.a)(e && e.context),
                                description: (0, A.a)(e && e.description)
                            })
                        })
                    });
                return d
            }(function(t, e, n, r, o, s, u, c) {
                var d, v, m, g, _, y, w, k, S, E, R, M, P, q, Z, K = [],
                    Y = new t_;
                Y.subscribe(13, function(t) {
                    return (0, ta.b)("rum", t)
                });
                var J = function(t) {
                    var e = (0, C.a5)("browser-rum-sdk", t);
                    if ((0, V.d0)()) {
                        var n = (0, V.Y9)();
                        e.observable.subscribe(function(t) {
                            return n.send("internal_telemetry", t)
                        })
                    }
                    return e
                }(t);
                J.setContextProvider(function() {
                    var e, n;
                    return {
                        application: {
                            id: t.applicationId
                        },
                        session: {
                            id: null == (e = ti.findTrackedSession()) ? void 0 : e.id
                        },
                        view: {
                            id: null == (n = t5.findView()) ? void 0 : n.id
                        },
                        action: {
                            id: t6.findActionId()
                        }
                    }
                });
                var $ = function(t) {
                        Y.notify(14, {
                            error: t
                        }), (0, C.A2)("Error reported to customer", {
                            "error.message": t.message
                        })
                    },
                    X = (tu = n.getOrCreateTracker(0), ty = (0, tb.q)({
                        expireDelay: nh
                    }), Y.subscribe(1, function(t) {
                        var e = t.startClocks;
                        ty.add({}, e.relative), tu.resetCustomerData()
                    }), Y.subscribe(6, function(t) {
                        var e = t.endClocks;
                        ty.closeActive(e.relative)
                    }), {
                        findFeatureFlagEvaluations: function(t) {
                            return ty.find(t)
                        },
                        addFeatureFlagEvaluation: function(t, e) {
                            var n = ty.find();
                            n && (n[t] = e, tu.updateCustomerData(n))
                        },
                        stop: function() {
                            return tu.stop()
                        }
                    }),
                    Q = (0, to.hL)(t),
                    tn = Q.subscribe(function(t) {
                        Y.notify(11, t)
                    });
                K.push(function() {
                    return tn.unsubscribe()
                });
                var ti = (0, V.d0)() ? (tC = {
                    id: "00000000-aaaa-0000-aaaa-000000000000",
                    sessionReplay: +!!(0, V.Ww)("records")
                }, {
                    findTrackedSession: function() {
                        return tC
                    },
                    expire: U.l,
                    expireObservable: new ts.c,
                    setForcedReplay: U.l
                }) : ((tT = (0, nc.ox)(t, "rum", function(e) {
                    var n, r, i, a;
                    return n = t, {
                        trackingType: i = "0" === (a = r = e) || "1" === a || "2" === a ? r : (0, H.ic)(n.sessionSampleRate) ? (0, H.ic)(n.sessionReplaySampleRate) ? "1" : "2" : "0",
                        isTracked: nl(i)
                    }
                }, u)).expireObservable.subscribe(function() {
                    Y.notify(9)
                }), tT.renewObservable.subscribe(function() {
                    Y.notify(10)
                }), tT.sessionStateUpdateObservable.subscribe(function(t) {
                    var e = t.previousState,
                        n = t.newState;
                    if (!e.forcedReplay && n.forcedReplay) {
                        var r = tT.findSession();
                        r && (r.isReplayForced = !0)
                    }
                }), {
                    findTrackedSession: function(t) {
                        var e = tT.findSession(t);
                        if (e && nl(e.trackingType)) return {
                            id: e.id,
                            sessionReplay: "1" === e.trackingType ? 1 : 2 * !!e.isReplayForced,
                            anonymousId: e.anonymousId
                        }
                    },
                    expire: tT.expire,
                    expireObservable: tT.expireObservable,
                    setForcedReplay: function() {
                        return tT.updateSessionState({
                            forcedReplay: "1"
                        })
                    }
                });
                if ((0, V.d0)()) tE = (0, V.Y9)(), Y.subscribe(13, function(t) {
                    tE.send("rum", t)
                });
                else {
                    var tu, ty, tC, tT, tE, tA, tI, tM, tP, tU, tK = (tA = J.observable, tI = ti.expireObservable, tM = t.replica, tP = (0, nd.Z)(t, {
                        endpoint: t.rumEndpointBuilder,
                        encoder: s(2)
                    }, tM && {
                        endpoint: tM.rumEndpointBuilder,
                        transformMessage: function(t) {
                            return (0, T.kg)(t, {
                                application: {
                                    id: tM.applicationId
                                }
                            })
                        },
                        encoder: s(3)
                    }, $, Q, tI), Y.subscribe(13, function(t) {
                        "view" === t.type ? tP.upsert(t, t.view.id) : tP.add(t)
                    }), tA.subscribe(function(e) {
                        return tP.add(e, (0, C.Wb)(t))
                    }), tP);
                    K.push(function() {
                        return tK.stop()
                    }), tU = tK.flushObservable, J.enabled && (0, H.ic)(t.customerDataTelemetrySampleRate) && (nb(), nw(), Y.subscribe(13, function(t) {
                        h = !0, n_(p.globalContextBytes, n.getOrCreateTracker(2).getBytesCount()), n_(p.userContextBytes, n.getOrCreateTracker(1).getBytesCount()), n_(p.featureFlagBytes, (0, N.mK)(["view", "error"], t.type) ? n.getOrCreateTracker(0).getBytesCount() : 0)
                    }), tU.subscribe(function(t) {
                        var e = t.bytesCount,
                            n = t.messagesCount;
                        h && (f.batchCount += 1, n_(f.batchBytesCount, e), n_(f.batchMessagesCount, n), ny(f.globalContextBytes, p.globalContextBytes), ny(f.userContextBytes, p.userContextBytes), ny(f.featureFlagBytes, p.featureFlagBytes), nw())
                    }), (0, tq.yb)(nm, nv))
                }
                var tY = (ep = tc(), new ts.c(function(t) {
                        if (ep) {
                            var e = new ep((0, x.dm)(function() {
                                return t.notify()
                            }));
                            return e.observe(document, {
                                    attributes: !0,
                                    characterData: !0,
                                    childList: !0,
                                    subtree: !0
                                }),
                                function() {
                                    return e.disconnect()
                                }
                        }
                    })),
                    tJ = (eh = location, ev = (0, G.yG)(eh), new ts.c(function(e) {
                        var n, r, i, a, o, s, u, c = (n = t, r = d, i = (0, tl.H)(np("pushState"), "pushState", function(t) {
                                (0, t.onPostCall)(r)
                            }).stop, a = (0, tl.H)(np("replaceState"), "replaceState", function(t) {
                                (0, t.onPostCall)(r)
                            }).stop, o = (0, tr.q)(n, window, "popstate", r).stop, {
                                stop: function() {
                                    i(), a(), o()
                                }
                            }).stop,
                            l = (s = t, u = d, (0, tr.q)(s, window, "hashchange", u)).stop;

                        function d() {
                            if (ev.href !== eh.href) {
                                var t = (0, G.yG)(eh);
                                e.notify({
                                    newLocation: t,
                                    oldLocation: ev
                                }), ev = t
                            }
                        }
                        return function() {
                            c(), l()
                        }
                    })),
                    t$ = function(t, e) {
                        void 0 === e && (e = 500);
                        var n, r = (0, tb.q)({
                            expireDelay: nk,
                            maxEntries: 4e3
                        });
                        a(nS(), (0, I.$S)());
                        var i = (0, tr.l)(t, window, ["pageshow", "focus", "blur", "visibilitychange", "resume", "freeze", "pagehide"], function(t) {
                            var e;
                            a("freeze" === (e = t).type ? "frozen" : "pagehide" === e.type ? e.persisted ? "frozen" : "terminated" : nS(), t.timeStamp)
                        }, {
                            capture: !0
                        }).stop;

                        function a(t, e) {
                            void 0 === e && (e = (0, I.$S)()), t !== n && (n = t, r.closeActive(e), r.add({
                                state: n,
                                startTime: e
                            }, e))
                        }
                        var o = {
                            findAll: function(t, n) {
                                var i = r.findAll(t, n);
                                if (0 !== i.length) {
                                    for (var a = [], o = Math.max(0, i.length - e), s = i.length - 1; s >= o; s--) {
                                        var u = i[s],
                                            c = (0, I.vk)(t, u.startTime);
                                        a.push({
                                            state: u.state,
                                            start: (0, I.Zj)(c)
                                        })
                                    }
                                    return a
                                }
                            },
                            wasInPageStateAt: function(t, e) {
                                return o.wasInPageStateDuringPeriod(t, e, 0)
                            },
                            wasInPageStateDuringPeriod: function(t, e, n) {
                                return r.findAll(e, n).some(function(e) {
                                    return e.state === t
                                })
                            },
                            addPageState: a,
                            stop: function() {
                                i(), r.stop()
                            }
                        };
                        return o
                    }(t),
                    tX = (em = new ts.c, eg = (0, tl.H)(window, "open", function() {
                        return em.notify()
                    }).stop, {
                        observable: em,
                        stop: eg
                    }),
                    tQ = tX.observable,
                    t0 = tX.stop;
                K.push(t0);
                var t2 = function(t, e, n, r, a, o, s, u, c, l) {
                        var d, f, p, h, v, m, g, _, y, b, w, k, S, x, C, E, R, M, O = (f = (0, tb.q)({
                                expireDelay: tw
                            }), t.subscribe(1, function(t) {
                                var e;
                                f.add({
                                    service: (e = t).service,
                                    version: e.version,
                                    context: e.context,
                                    id: e.id,
                                    name: e.name,
                                    startClocks: e.startClocks
                                }, t.startClocks.relative)
                            }), t.subscribe(6, function(t) {
                                var e = t.endClocks;
                                f.closeActive(e.relative)
                            }), t.subscribe(3, function(t) {
                                var e = f.find(t.startClocks.relative);
                                e && t.name && (e.name = t.name), e && t.context && (e.context = t.context)
                            }), t.subscribe(10, function() {
                                f.reset()
                            }), {
                                findView: function(t) {
                                    return f.find(t)
                                },
                                stop: function() {
                                    f.stop()
                                }
                            }),
                            L = function(t, e, n) {
                                var r, i = (0, tb.q)({
                                    expireDelay: nf
                                });
                                t.subscribe(1, function(t) {
                                    var e = t.startClocks,
                                        a = n.href;
                                    i.add(o({
                                        url: a,
                                        referrer: r || document.referrer
                                    }), e.relative), r = a
                                }), t.subscribe(6, function(t) {
                                    var e = t.endClocks;
                                    i.closeActive(e.relative)
                                });
                                var a = e.subscribe(function(t) {
                                    var e = t.newLocation,
                                        n = i.find();
                                    if (n) {
                                        var r = (0, I.$S)();
                                        i.closeActive(r), i.add(o({
                                            url: e.href,
                                            referrer: n.referrer
                                        }), r)
                                    }
                                });

                                function o(t) {
                                    return {
                                        url: t.url,
                                        referrer: t.referrer
                                    }
                                }
                                return {
                                    findUrl: function(t) {
                                        return i.find(t)
                                    },
                                    stop: function() {
                                        a.unsubscribe(), i.stop()
                                    }
                                }
                            }(t, o, n),
                            P = (t.subscribe(0, function(e) {
                                return t.notify(12, eL(e, a))
                            }), h = {
                                findActionId: U.l
                            }, v = U.l, e.trackUserInteractions && (h = (p = function(t, e, n, r) {
                                var i, a, o, s, u, c, l, d, f = (0, tb.q)({
                                        expireDelay: eO
                                    }),
                                    p = new ts.c;
                                t.subscribe(10, function() {
                                    f.reset()
                                }), t.subscribe(5, m);
                                var h = (s = (i = {
                                    onPointerDown: function(i) {
                                        return function(t, e, n, r, i) {
                                            var a = t.enablePrivacyForActionName ? et(r.target, t.defaultPrivacyLevel) : t4.ALLOW;
                                            if (a !== t4.HIDDEN) {
                                                var o, s = function(t, e, n) {
                                                        var r, i, a, o, s = t.target.getBoundingClientRect(),
                                                            u = eb(t.target, n.actionNameAttribute);
                                                        u && eD(t.timeStamp, u);
                                                        var c = (r = t.target, i = n.enablePrivacyForActionName, a = n.actionNameAttribute, (o = eu(r, es) || a && eu(r, a)) ? {
                                                            name: o,
                                                            nameSource: "custom_attribute"
                                                        } : e === t4.MASK ? {
                                                            name: "Masked Element",
                                                            nameSource: "mask_placeholder"
                                                        } : ed(r, a, ec, i) || ed(r, a, el, i) || {
                                                            name: "",
                                                            nameSource: "blank"
                                                        });
                                                        return {
                                                            type: "click",
                                                            target: {
                                                                width: Math.round(s.width),
                                                                height: Math.round(s.height),
                                                                selector: u
                                                            },
                                                            position: {
                                                                x: Math.round(t.clientX - s.left),
                                                                y: Math.round(t.clientY - s.top)
                                                            },
                                                            name: c.name,
                                                            nameSource: c.nameSource
                                                        }
                                                    }(r, a, t),
                                                    u = !1;
                                                return o = function(t) {
                                                    u = t.hadActivity
                                                }, tW(tZ(e, n, i, t), o, 100), {
                                                    clickActionBase: s,
                                                    hadActivityOnPointerDown: function() {
                                                        return u
                                                    }
                                                }
                                            }
                                        }(r, t, e, i, n)
                                    },
                                    onPointerUp: function(i, a, o) {
                                        ! function(t, e, n, r, i, a, o, s, u, c, l) {
                                            var d, f, p = function t(e, n, r, i, a) {
                                                var o, s = (0, D.lk)(),
                                                    u = (0, I.M8)(),
                                                    c = n.add(s, u.relative),
                                                    l = tj({
                                                        lifeCycle: e,
                                                        isChildEvent: function(t) {
                                                            return void 0 !== t.action && (Array.isArray(t.action.id) ? (0, N.mK)(t.action.id, s) : t.action.id === s)
                                                        }
                                                    }),
                                                    d = 0,
                                                    f = [],
                                                    p = new ts.c;

                                                function h(t) {
                                                    0 === d && (d = 1, (o = t) ? c.close((0, I.gs)(o)) : c.remove(), l.stop(), p.notify())
                                                }
                                                return {
                                                    event: a,
                                                    stop: h,
                                                    stopObservable: p,
                                                    get hasError() {
                                                        return l.eventCounts.errorCount > 0
                                                    },
                                                    get hasPageActivity() {
                                                        return void 0 !== o
                                                    },
                                                    getUserActivity: r,
                                                    addFrustration: function(t) {
                                                        f.push(t)
                                                    },
                                                    startClocks: u,
                                                    isStopped: function() {
                                                        return 1 === d || 2 === d
                                                    },
                                                    clone: function() {
                                                        return t(e, n, r, i, a)
                                                    },
                                                    validate: function(t) {
                                                        if (h(), 1 === d) {
                                                            var n = l.eventCounts,
                                                                r = n.resourceCount,
                                                                c = n.errorCount,
                                                                p = n.longTaskCount,
                                                                v = (0, N.kp)({
                                                                    type: "click",
                                                                    duration: o && (0, I.vk)(u.timeStamp, o),
                                                                    startClocks: u,
                                                                    id: s,
                                                                    frustrationTypes: f,
                                                                    counts: {
                                                                        resourceCount: r,
                                                                        errorCount: c,
                                                                        longTaskCount: p
                                                                    },
                                                                    events: null != t ? t : [a],
                                                                    event: a
                                                                }, i);
                                                            e.notify(0, v), d = 2
                                                        }
                                                    },
                                                    discard: function() {
                                                        h(), d = 2
                                                    }
                                                }
                                            }(e, i, c, s, u);
                                            o(p);
                                            var h = null == (f = null == s ? void 0 : s.target) ? void 0 : f.selector;
                                            h && eD(u.timeStamp, h);
                                            var v = (d = function(t) {
                                                    t.hadActivity && t.end < p.startClocks.timeStamp ? p.discard() : t.hadActivity ? p.stop(t.end) : l() ? p.stop(p.startClocks.timeStamp) : p.stop()
                                                }, tW(tZ(e, n, r, t), d, eN)).stop,
                                                m = e.subscribe(5, function(t) {
                                                    var e = t.endClocks;
                                                    p.stop(e.timeStamp)
                                                }),
                                                g = a.subscribe(function() {
                                                    p.stop()
                                                });
                                            p.stopObservable.subscribe(function() {
                                                m.unsubscribe(), v(), g.unsubscribe()
                                            })
                                        }(r, t, e, n, f, p, v, i.clickActionBase, a, o, i.hadActivityOnPointerDown)
                                    }
                                }).onPointerDown, u = i.onPointerUp, c = {
                                    selection: !1,
                                    input: !1,
                                    scroll: !1
                                }, l = [(0, tr.q)(r, window, "pointerdown", function(t) {
                                    eI(t) && (a = eA(), c = {
                                        selection: !1,
                                        input: !1,
                                        scroll: !1
                                    }, o = s(t))
                                }, {
                                    capture: !0
                                }), (0, tr.q)(r, window, "selectionchange", function() {
                                    a && eA() || (c.selection = !0)
                                }, {
                                    capture: !0
                                }), (0, tr.q)(r, window, "scroll", function() {
                                    c.scroll = !0
                                }, {
                                    capture: !0,
                                    passive: !0
                                }), (0, tr.q)(r, window, "pointerup", function(t) {
                                    if (eI(t) && o) {
                                        var e = c;
                                        u(o, t, function() {
                                            return e
                                        }), o = void 0
                                    }
                                }, {
                                    capture: !0
                                }), (0, tr.q)(r, window, "input", function() {
                                    c.input = !0
                                }, {
                                    capture: !0
                                })], {
                                    stop: function() {
                                        l.forEach(function(t) {
                                            return t.stop()
                                        })
                                    }
                                }).stop;
                                return {
                                    stop: function() {
                                        m(), p.notify(), h()
                                    },
                                    actionContexts: {
                                        findActionId: function(t) {
                                            return f.findAll(t)
                                        }
                                    }
                                };

                                function v(t) {
                                    if (!d || !d.tryAppend(t)) {
                                        var e = t.clone();
                                        d = function(t, e) {
                                            var n, r = [],
                                                i = 0;

                                            function a(t) {
                                                t.stopObservable.subscribe(o), r.push(t), (0, tq.DJ)(n), n = (0, tq.wg)(s, eE)
                                            }

                                            function o() {
                                                1 === i && r.every(function(t) {
                                                    return t.isStopped()
                                                }) && (i = 2, e(r))
                                            }

                                            function s() {
                                                (0, tq.DJ)(n), 0 === i && (i = 1, o())
                                            }
                                            return a(t), {
                                                tryAppend: function(t) {
                                                    var e, n, o, u;
                                                    return 0 === i && (!(r.length > 0) || (e = r[r.length - 1].event, n = t.event, e.target === n.target && 100 >= (o = e, u = n, Math.sqrt(Math.pow(o.clientX - u.clientX, 2) + Math.pow(o.clientY - u.clientY, 2))) && e.timeStamp - n.timeStamp <= eE) ? (a(t), !0) : (s(), !1))
                                                },
                                                stop: function() {
                                                    s()
                                                }
                                            }
                                        }(t, function(t) {
                                            var n, r;
                                            (function(t, e) {
                                                if (function(t) {
                                                        if (t.some(function(t) {
                                                                return t.getUserActivity().selection || t.getUserActivity().scroll
                                                            })) return !1;
                                                        for (var e = 0; e < t.length - 2; e += 1)
                                                            if (t[e + 3 - 1].event.timeStamp - t[e].event.timeStamp <= I.OY) return !0;
                                                        return !1
                                                    }(t)) return e.addFrustration("rage_click"), t.some(eR) && e.addFrustration("dead_click"), e.hasError && e.addFrustration("error_click"), {
                                                    isRage: !0
                                                };
                                                var n = t.some(function(t) {
                                                    return t.getUserActivity().selection
                                                });
                                                return t.forEach(function(t) {
                                                    t.hasError && t.addFrustration("error_click"), eR(t) && !n && t.addFrustration("dead_click")
                                                }), {
                                                    isRage: !1
                                                }
                                            })(n = t, r = e).isRage ? (n.forEach(function(t) {
                                                return t.discard()
                                            }), r.stop((0, I.nx)()), r.validate(n.map(function(t) {
                                                return t.event
                                            }))) : (r.discard(), n.forEach(function(t) {
                                                return t.validate()
                                            }))
                                        })
                                    }
                                }

                                function m() {
                                    d && d.stop()
                                }
                            }(t, s, u, e)).actionContexts, v = p.stop), {
                                addAction: function(e, n) {
                                    t.notify(12, (0, N.kp)({
                                        savedCommonContext: n
                                    }, eL(e, a)))
                                },
                                actionContexts: h,
                                stop: v
                            }),
                            F = ((0, B.sr)(B.R9.DELAY_VIEWPORT_COLLECTION) ? g = requestAnimationFrame(function() {
                                m = ni()
                            }) : m = ni(), _ = nr(e).subscribe(function(t) {
                                m = t
                            }).unsubscribe, {
                                get: function() {
                                    return m ? {
                                        viewport: m
                                    } : void 0
                                },
                                stop: function() {
                                    _(), g && cancelAnimationFrame(g)
                                }
                            }),
                            q = (void 0 === y && (b = window.cookieStore ? (d = e, function(t, e) {
                                return (0, tr.q)(d, window.cookieStore, "change", function(n) {
                                    var r = (0, N.I6)(n.changed, function(e) {
                                        return e.name === t
                                    }) || (0, N.I6)(n.deleted, function(e) {
                                        return e.name === t
                                    });
                                    r && e(r.value)
                                }).stop
                            }) : nT, y = new ts.c(function(t) {
                                return b(nE, function(e) {
                                    return t.notify(e)
                                })
                            })), k = (0, nx.B9)(nE) || (null == (w = window.Cypress) ? void 0 : w.env("traceId")), S = y.subscribe(function(t) {
                                k = t
                            }), {
                                get: function() {
                                    if ("string" == typeof k) return {
                                        test_execution_id: k
                                    }
                                },
                                stop: function() {
                                    return S.unsubscribe()
                                }
                            });
                        return x = P.actionContexts, (C = {}).view = (0, N.kp)({}, tm, tv), C.error = (0, N.kp)({
                            "error.message": "string",
                            "error.stack": "string",
                            "error.resource.url": "string",
                            "error.fingerprint": "string"
                        }, tm, tv, tg), C.resource = (0, N.kp)({
                            "resource.url": "string"
                        }, (0, B.sr)(B.R9.WRITABLE_RESOURCE_GRAPHQL) ? {
                            "resource.graphql": "object"
                        } : {}, tm, tv, tg), C.action = (0, N.kp)({
                            "action.target.name": "string"
                        }, tm, tv, tg), C.long_task = (0, N.kp)({}, tm, tv), C.vital = (0, N.kp)({}, tm, tv), i = C, (E = {}).error = (0, td.$)("error", e.eventRateLimiterThreshold, l), E.action = (0, td.$)("action", e.eventRateLimiterThreshold, l), E.vital = (0, td.$)("vital", e.eventRateLimiterThreshold, l), R = E, M = function() {
                            var t = (0, j.aj)(),
                                e = (0, j.X6)();
                            if (t && e) return {
                                test_id: t,
                                result_id: e,
                                injected: (0, j.ao)()
                            }
                        }(), t.subscribe(12, function(n) {
                            var a = n.startTime,
                                o = n.rawRumEvent,
                                s = n.domainContext,
                                u = n.savedCommonContext,
                                l = n.customerContext,
                                d = O.findView(a),
                                f = L.findUrl(a),
                                p = r.findTrackedSession(a);
                            if (p && d && f) {
                                var h = u || c(),
                                    v = x.findActionId(a),
                                    m = {
                                        _dd: {
                                            format_version: 2,
                                            drift: (0, I.TP)(),
                                            configuration: {
                                                session_sample_rate: (0, H.LI)(e.sessionSampleRate, 3),
                                                session_replay_sample_rate: (0, H.LI)(e.sessionReplaySampleRate, 3)
                                            },
                                            browser_sdk_version: (0, V.d0)() ? "5.35.1" : void 0
                                        },
                                        application: {
                                            id: e.applicationId
                                        },
                                        date: (0, I.nx)(),
                                        service: d.service || e.service,
                                        version: d.version || e.version,
                                        source: "browser",
                                        session: {
                                            id: p.id,
                                            type: M ? "synthetics" : q.get() ? "ci_test" : "user"
                                        },
                                        view: {
                                            id: d.id,
                                            name: d.name,
                                            url: f.url,
                                            referrer: f.referrer
                                        },
                                        action: -1 !== ["error", "resource", "long_task"].indexOf(o.type) && v ? {
                                            id: v
                                        } : void 0,
                                        synthetics: M,
                                        ci_test: q.get(),
                                        display: F.get(),
                                        connectivity: (0, tf.q)()
                                    },
                                    g = (0, T.kg)(m, o);
                                g.context = (0, T.kg)(h.context, d.context, l), "has_replay" in g.session || (g.session.has_replay = h.hasReplay), "view" === g.type && (g.session.sampled_for_replay = 1 === p.sessionReplay), (0, B.sr)(B.R9.ANONYMOUS_USER_TRACKING) && !h.user.anonymous_id && (h.user.anonymous_id = p.anonymousId), (0, G.RI)(h.user) || (g.usr = h.user),
                                    function(t, e, n, r) {
                                        if (e) {
                                            var a, o, s, u, c = (a = i[t.type], s = e(o = (0, T.Go)(t), n), (0, N.WP)(a).forEach(function(e) {
                                                var n = e[0],
                                                    r = e[1],
                                                    i = function(t, e) {
                                                        for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
                                                            var a, o, s = i[r];
                                                            if (a = n, o = s, !(th(a) && Object.prototype.hasOwnProperty.call(a, o))) return;
                                                            n = n[s]
                                                        }
                                                        return n
                                                    }(o, n),
                                                    a = (0, W.P)(i);
                                                a === r ? tp(t, n, (0, A.a)(i)) : "object" === r && ("undefined" === a || "null" === a) && tp(t, n, {})
                                            }), s);
                                            if (!1 === c && "view" !== t.type) return !1;
                                            !1 === c && z.Vy.warn("Can't dismiss view events using beforeSend!")
                                        }
                                        return !(null == (u = r[t.type]) ? void 0 : u.isLimitReached())
                                    }(g, e.beforeSend, s, R) && ((0, G.RI)(g.context) && delete g.context, t.notify(13, g))
                            }
                        }), {
                            viewHistory: O,
                            pageStateHistory: a,
                            urlContexts: L,
                            addAction: P.addAction,
                            actionContexts: P.actionContexts,
                            stop: function() {
                                P.stop(), q.stop(), F.stop(), L.stop(), O.stop(), a.stop()
                            }
                        }
                    }(Y, t, location, ti, t$, tJ, tY, tQ, r, $),
                    t5 = t2.viewHistory,
                    t3 = t2.urlContexts,
                    t6 = t2.actionContexts,
                    t8 = t2.addAction,
                    t9 = t2.stop;
                K.push(t9), (0, C.JK)();
                var t7 = (e_ = location, Y.subscribe(4, function(n) {
                        var r, i, a, o, s, u, c, l, d, f, p, h, v, m, g, _, y, b, w, k, S, x, C, T, E;
                        return Y.notify(12, (r = n, i = t, a = X, o = e, s = t$, x = o.getReplayStats(r.id), C = a.findFeatureFlagEvaluations(r.startClocks.relative), T = s.findAll(r.startClocks.relative, r.duration), E = {
                            _dd: {
                                document_version: r.documentVersion,
                                replay_stats: x,
                                page_states: T,
                                configuration: {
                                    start_session_replay_recording_manually: i.startSessionReplayRecordingManually
                                }
                            },
                            date: r.startClocks.timeStamp,
                            type: "view",
                            view: {
                                action: {
                                    count: r.eventCounts.actionCount
                                },
                                frustration: {
                                    count: r.eventCounts.frustrationCount
                                },
                                cumulative_layout_shift: null == (u = r.commonViewMetrics.cumulativeLayoutShift) ? void 0 : u.value,
                                cumulative_layout_shift_time: (0, I.Zj)(null == (c = r.commonViewMetrics.cumulativeLayoutShift) ? void 0 : c.time),
                                cumulative_layout_shift_target_selector: null == (l = r.commonViewMetrics.cumulativeLayoutShift) ? void 0 : l.targetSelector,
                                first_byte: (0, I.Zj)(null == (d = r.initialViewMetrics.navigationTimings) ? void 0 : d.firstByte),
                                dom_complete: (0, I.Zj)(null == (f = r.initialViewMetrics.navigationTimings) ? void 0 : f.domComplete),
                                dom_content_loaded: (0, I.Zj)(null == (p = r.initialViewMetrics.navigationTimings) ? void 0 : p.domContentLoaded),
                                dom_interactive: (0, I.Zj)(null == (h = r.initialViewMetrics.navigationTimings) ? void 0 : h.domInteractive),
                                error: {
                                    count: r.eventCounts.errorCount
                                },
                                first_contentful_paint: (0, I.Zj)(r.initialViewMetrics.firstContentfulPaint),
                                first_input_delay: (0, I.Zj)(null == (v = r.initialViewMetrics.firstInput) ? void 0 : v.delay),
                                first_input_time: (0, I.Zj)(null == (m = r.initialViewMetrics.firstInput) ? void 0 : m.time),
                                first_input_target_selector: null == (g = r.initialViewMetrics.firstInput) ? void 0 : g.targetSelector,
                                interaction_to_next_paint: (0, I.Zj)(null == (_ = r.commonViewMetrics.interactionToNextPaint) ? void 0 : _.value),
                                interaction_to_next_paint_time: (0, I.Zj)(null == (y = r.commonViewMetrics.interactionToNextPaint) ? void 0 : y.time),
                                interaction_to_next_paint_target_selector: null == (b = r.commonViewMetrics.interactionToNextPaint) ? void 0 : b.targetSelector,
                                is_active: r.isActive,
                                name: r.name,
                                largest_contentful_paint: (0, I.Zj)(null == (w = r.initialViewMetrics.largestContentfulPaint) ? void 0 : w.value),
                                largest_contentful_paint_target_selector: null == (k = r.initialViewMetrics.largestContentfulPaint) ? void 0 : k.targetSelector,
                                load_event: (0, I.Zj)(null == (S = r.initialViewMetrics.navigationTimings) ? void 0 : S.loadEvent),
                                loading_time: tB((0, I.Zj)(r.commonViewMetrics.loadingTime)),
                                loading_type: r.loadingType,
                                long_task: {
                                    count: r.eventCounts.longTaskCount
                                },
                                resource: {
                                    count: r.eventCounts.resourceCount
                                },
                                time_spent: (0, I.Zj)(r.duration)
                            },
                            feature_flags: C && !(0, G.RI)(C) ? C : void 0,
                            display: r.commonViewMetrics.scroll ? {
                                scroll: {
                                    max_depth: r.commonViewMetrics.scroll.maxDepth,
                                    max_depth_scroll_top: r.commonViewMetrics.scroll.maxDepthScrollTop,
                                    max_scroll_height: r.commonViewMetrics.scroll.maxScrollHeight,
                                    max_scroll_height_time: (0, I.Zj)(r.commonViewMetrics.scroll.maxScrollHeightTime)
                                }
                            } : void 0,
                            session: {
                                has_replay: !!x || void 0,
                                is_active: !!r.sessionIsActive && void 0
                            },
                            privacy: {
                                replay_level: i.defaultPrivacyLevel
                            }
                        }, (0, G.RI)(r.customTimings) || (E.view.custom_timings = (0, G.LG)(r.customTimings, I.Zj)), {
                            rawRumEvent: E,
                            startTime: r.startClocks.relative,
                            domainContext: {
                                location: r.location
                            }
                        }))
                    }), function(t, e, n, r, i, o, s, u) {
                        var c, d = new Set,
                            f = p("initial_load", (0, I.Oc)(), u);

                        function p(o, s, u) {
                            var c = function(t, e, n, r, i, o, s, u) {
                                void 0 === s && (s = (0, I.M8)());
                                var c, d, f, p, h, v, m, g, _, y, w, k, S, C, T, E, A, R, M, O, L, P, V, F, B, j, q, W, Z, K, Y, J, $, X, Q, tt, te, tn, ti, ta, to, tu, tc, tl, td, tf = (0, D.lk)(),
                                    tp = new ts.c,
                                    th = {},
                                    tv = 0,
                                    tm = (0, G.yG)(i),
                                    tg = (0, b.D)(),
                                    t_ = !0;
                                u && (tu = u.name, tc = u.service || void 0, tl = u.version || void 0, u.context && (td = u.context, tg.setContext(td)));
                                var ty = {
                                    id: tf,
                                    name: tu,
                                    startClocks: s,
                                    service: tc,
                                    version: tl,
                                    context: td
                                };
                                t.notify(1, ty), t.notify(2, ty);
                                var tb = (0, U.n)(tP, 3e3, {
                                        leading: !1
                                    }),
                                    tw = tb.throttled,
                                    tk = tb.cancel,
                                    tS = (g = {}, y = (_ = function(t, e, n, r, i, a, o) {
                                        var s, u = "initial_load" === i,
                                            c = !0,
                                            l = [],
                                            d = e5(r);

                                        function f() {
                                            if (!c && !u && l.length > 0) {
                                                var t = Math.max.apply(Math, l);
                                                t < d.timeStamp && o(t)
                                            }
                                        }
                                        var p = (s = function(t) {
                                            c && (c = !1, t.hadActivity && l.push((0, I.vk)(a.timeStamp, t.end)), f())
                                        }, tW(tZ(t, e, n, r), s, void 0)).stop;
                                        return {
                                            stop: function() {
                                                p(), d.stop()
                                            },
                                            setLoadEvent: function(t) {
                                                u && (u = !1, l.push(t), f())
                                            }
                                        }
                                    }(t, e, n, r, o, m = s, function(t) {
                                        g.loadingTime = t, tw()
                                    })).stop, w = _.setLoadEvent, R = (k = function(t) {
                                        g.scroll = t
                                    }, void 0 === S && (c = r, void 0 === d && (d = na), S = new ts.c(function(t) {
                                        if (window.ResizeObserver) {
                                            var e = (0, U.n)(function() {
                                                    var e, n;
                                                    t.notify((e = nn(), n = ni().height, {
                                                        scrollHeight: Math.round((document.scrollingElement || document.documentElement).scrollHeight),
                                                        scrollDepth: Math.round(n + e),
                                                        scrollTop: e
                                                    }))
                                                }, d, {
                                                    leading: !1,
                                                    trailing: !0
                                                }),
                                                n = document.scrollingElement || document.documentElement,
                                                r = new ResizeObserver((0, x.dm)(e.throttled));
                                            n && r.observe(n);
                                            var i = (0, tr.q)(c, window, "scroll", e.throttled, {
                                                passive: !0
                                            });
                                            return function() {
                                                e.cancel(), r.disconnect(), i.stop()
                                            }
                                        }
                                    })), C = 0, T = 0, E = 0, A = S.subscribe(function(t) {
                                        var e = t.scrollDepth,
                                            n = t.scrollTop,
                                            r = t.scrollHeight,
                                            i = !1;
                                        if (e > C && (C = e, i = !0), r > T) {
                                            T = r;
                                            var a = (0, I.$S)();
                                            E = (0, I.vk)(m.relative, a), i = !0
                                        }
                                        i && k({
                                            maxDepth: Math.min(C, T),
                                            maxDepthScrollTop: n,
                                            maxScrollHeight: T,
                                            maxScrollHeightTime: E
                                        })
                                    }), {
                                        stop: function() {
                                            return A.unsubscribe()
                                        }
                                    }).stop, M = function(t, e, n) {
                                        if (!(tG(a.LAYOUT_SHIFT) && "WeakRef" in window)) return {
                                            stop: U.l
                                        };
                                        var r, i, o, s, u, c, l = 0;
                                        n({
                                            value: 0
                                        });
                                        var d = (o = 0, s = 0, {
                                                update: function(t) {
                                                    var e;
                                                    return void 0 === r || t.startTime - i >= e6 || t.startTime - r >= e3 ? (r = i = t.startTime, s = o = t.value, e = !0) : (o += t.value, i = t.startTime, (e = t.value > s) && (s = t.value)), {
                                                        cumulatedValue: o,
                                                        isMaxValue: e
                                                    }
                                                }
                                            }),
                                            f = tH(t, {
                                                type: a.LAYOUT_SHIFT,
                                                buffered: !0
                                            }).subscribe(function(r) {
                                                for (var i = 0; i < r.length; i++) {
                                                    var a = r[i];
                                                    if (!a.hadRecentInput && !(a.startTime < e)) {
                                                        var o = d.update(a),
                                                            s = o.cumulatedValue;
                                                        if (o.isMaxValue) {
                                                            var f = function(t) {
                                                                var e;
                                                                if (t) return null == (e = (0, N.I6)(t, function(t) {
                                                                    return !!t.node && t1(t.node)
                                                                })) ? void 0 : e.node
                                                            }(a.sources);
                                                            u = f ? new WeakRef(f) : void 0, c = (0, I.vk)(e, a.startTime)
                                                        }
                                                        if (s > l) {
                                                            l = s;
                                                            var f = null == u ? void 0 : u.deref();
                                                            n({
                                                                value: (0, H.LI)(l, 4),
                                                                targetSelector: f && eb(f, t.actionNameAttribute),
                                                                time: c
                                                            })
                                                        }
                                                    }
                                                }
                                            });
                                        return {
                                            stop: function() {
                                                f.unsubscribe()
                                            }
                                        }
                                    }(r, m.relative, function(t) {
                                        g.cumulativeLayoutShift = t, tw()
                                    }).stop, L = (O = function(t, e, n) {
                                        if (!(tG(a.EVENT) && window.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return {
                                            getInteractionToNextPaint: function() {},
                                            setViewEnd: U.l,
                                            stop: U.l
                                        };
                                        var r, i, o, s, u, c = (r = n, "interactionCount" in performance || l || (l = new window.PerformanceObserver((0, x.dm)(function(t) {
                                                t.getEntries().forEach(function(t) {
                                                    t.interactionId && (e8 = Math.min(e8, t.interactionId), e4 = ((e9 = Math.max(e9, t.interactionId)) - e8) / 7 + 1)
                                                })
                                            }))).observe({
                                                type: "event",
                                                buffered: !0,
                                                durationThreshold: 0
                                            }), i = "initial_load" === r ? 0 : e7(), o = {
                                                stopped: !1
                                            }, {
                                                getViewInteractionCount: function() {
                                                    return o.stopped ? o.interactionCount : e7() - i
                                                },
                                                stopViewInteractionCount: function() {
                                                    o = {
                                                        stopped: !0,
                                                        interactionCount: e7() - i
                                                    }
                                                }
                                            }),
                                            d = c.getViewInteractionCount,
                                            f = c.stopViewInteractionCount,
                                            p = 1 / 0,
                                            h = function(t) {
                                                var e = [];

                                                function n() {
                                                    e.sort(function(t, e) {
                                                        return e.duration - t.duration
                                                    }).splice(10)
                                                }
                                                return {
                                                    process: function(t) {
                                                        var r = e.findIndex(function(e) {
                                                                return t.interactionId === e.interactionId
                                                            }),
                                                            i = e[e.length - 1]; - 1 !== r ? t.duration > e[r].duration && (e[r] = t, n()) : (e.length < 10 || t.duration > i.duration) && (e.push(t), n())
                                                    },
                                                    estimateP98Interaction: function() {
                                                        var n = Math.min(e.length - 1, Math.floor(t() / 50));
                                                        return e[n]
                                                    }
                                                }
                                            }(d),
                                            v = -1;

                                        function m(n) {
                                            for (var r, i, a = 0; a < n.length; a++) {
                                                var o = n[a];
                                                o.interactionId && o.startTime >= e && o.startTime <= p && h.process(o)
                                            }
                                            var c = h.estimateP98Interaction();
                                            c && c.duration !== v && (v = c.duration, u = (0, I.vk)(e, c.startTime), r = c.startTime, i = eM.get(r), eM.delete(r), !(s = i) && c.target && t1(c.target) && (s = eb(c.target, t.actionNameAttribute)))
                                        }
                                        var g = tH(t, {
                                                type: a.FIRST_INPUT,
                                                buffered: !0
                                            }).subscribe(m),
                                            _ = tH(t, {
                                                type: a.EVENT,
                                                durationThreshold: 40,
                                                buffered: !0
                                            }).subscribe(m);
                                        return {
                                            getInteractionToNextPaint: function() {
                                                return v >= 0 ? {
                                                    value: Math.min(v, nt),
                                                    targetSelector: s,
                                                    time: u
                                                } : d() ? {
                                                    value: 0
                                                } : void 0
                                            },
                                            setViewEnd: function(t) {
                                                p = t, f()
                                            },
                                            stop: function() {
                                                _.unsubscribe(), g.unsubscribe()
                                            }
                                        }
                                    }(r, m.relative, o)).stop, P = O.getInteractionToNextPaint, {
                                        stop: function() {
                                            y(), M(), R()
                                        },
                                        stopINPTracking: L,
                                        setLoadEvent: w,
                                        setViewEnd: O.setViewEnd,
                                        getCommonViewMetrics: function() {
                                            return g.interactionToNextPaint = P(), g
                                        }
                                    }),
                                    tx = tS.setLoadEvent,
                                    tC = tS.setViewEnd,
                                    tT = tS.stop,
                                    tE = tS.stopINPTracking,
                                    tA = tS.getCommonViewMetrics,
                                    tI = "initial_load" === o ? (V = {}, j = (F = function(t) {
                                        tx(t.loadEvent), V.navigationTimings = t, tw()
                                    }, void 0 === B && (B = e$), f = r, p = function() {
                                        var t, e = B();
                                        e.loadEventEnd <= 0 || F({
                                            domComplete: (t = e).domComplete,
                                            domContentLoaded: t.domContentLoadedEventEnd,
                                            domInteractive: t.domInteractive,
                                            loadEvent: t.loadEventEnd,
                                            firstByte: t.responseStart >= 0 && t.responseStart <= (0, I.$S)() ? t.responseStart : void 0
                                        })
                                    }, v = eZ(f, "complete", function() {
                                        h = (0, tq.wg)(function() {
                                            return p()
                                        })
                                    }).stop, {
                                        stop: function() {
                                            v(), (0, tq.DJ)(h)
                                        }
                                    }).stop, q = e5(r), Z = (W = function(t) {
                                        V.firstContentfulPaint = t, tw()
                                    }, {
                                        stop: tH(r, {
                                            type: a.PAINT,
                                            buffered: !0
                                        }).subscribe(function(t) {
                                            var e = (0, N.I6)(t, function(t) {
                                                return "first-contentful-paint" === t.name && t.startTime < q.timeStamp && t.startTime < e1
                                            });
                                            e && W(e.startTime)
                                        }).unsubscribe
                                    }).stop, tt = (K = window, Y = function(t) {
                                        V.largestContentfulPaint = t, tw()
                                    }, J = 1 / 0, $ = (0, tr.l)(r, K, ["pointerdown", "keydown"], function(t) {
                                        J = t.timeStamp
                                    }, {
                                        capture: !0,
                                        once: !0
                                    }).stop, X = 0, Q = tH(r, {
                                        type: a.LARGEST_CONTENTFUL_PAINT,
                                        buffered: !0
                                    }).subscribe(function(t) {
                                        var e = (0, N.Uk)(t, function(t) {
                                            return t.entryType === a.LARGEST_CONTENTFUL_PAINT && t.startTime < J && t.startTime < q.timeStamp && t.startTime < e2 && t.size > X
                                        });
                                        if (e) {
                                            var n = void 0;
                                            e.element && (n = eb(e.element, r.actionNameAttribute)), Y({
                                                value: e.startTime,
                                                targetSelector: n
                                            }), X = e.size
                                        }
                                    }), {
                                        stop: function() {
                                            $(), Q.unsubscribe()
                                        }
                                    }).stop, ti = (te = function(t) {
                                        V.firstInput = t, tw()
                                    }, tn = tH(r, {
                                        type: a.FIRST_INPUT,
                                        buffered: !0
                                    }).subscribe(function(t) {
                                        var e = (0, N.I6)(t, function(t) {
                                            return t.startTime < q.timeStamp
                                        });
                                        if (e) {
                                            var n = (0, I.vk)(e.startTime, e.processingStart),
                                                i = void 0;
                                            e.target && t1(e.target) && (i = eb(e.target, r.actionNameAttribute)), te({
                                                delay: n >= 0 ? n : 0,
                                                time: e.startTime,
                                                targetSelector: i
                                            })
                                        }
                                    }), {
                                        stop: function() {
                                            tn.unsubscribe()
                                        }
                                    }).stop, {
                                        stop: function() {
                                            j(), Z(), tt(), ti(), q.stop()
                                        },
                                        initialViewMetrics: V
                                    }) : {
                                        stop: U.l,
                                        initialViewMetrics: {}
                                    },
                                    tR = tI.stop,
                                    tN = tI.initialViewMetrics,
                                    tM = {
                                        stop: (ta = tj({
                                            lifeCycle: t,
                                            isChildEvent: function(t) {
                                                return t.view.id === tf
                                            },
                                            onChange: tw
                                        })).stop,
                                        eventCounts: ta.eventCounts
                                    },
                                    tD = tM.stop,
                                    tO = tM.eventCounts,
                                    tL = (0, tq.yb)(tP, no);

                                function tP() {
                                    tk(), tv += 1;
                                    var e = void 0 === to ? (0, I.nx)() : to.timeStamp;
                                    t.notify(4, {
                                        customTimings: th,
                                        documentVersion: tv,
                                        id: tf,
                                        name: tu,
                                        service: tc,
                                        version: tl,
                                        context: tg.getContext(),
                                        loadingType: o,
                                        location: tm,
                                        startClocks: s,
                                        commonViewMetrics: tA(),
                                        initialViewMetrics: tN,
                                        duration: (0, I.vk)(s.timeStamp, e),
                                        isActive: void 0 === to,
                                        sessionIsActive: t_,
                                        eventCounts: tO
                                    })
                                }
                                return tP(), tg.changeObservable.subscribe(function() {
                                    t.notify(3, {
                                        id: tf,
                                        name: tu,
                                        context: tg.getContext(),
                                        startClocks: s
                                    }), tw()
                                }), {
                                    get name() {
                                        return tu
                                    },
                                    service: tc,
                                    version: tl,
                                    contextManager: tg,
                                    stopObservable: tp,
                                    end: function(e) {
                                        var n, r, i = this;
                                        void 0 === e && (e = {}), to || (to = null != (n = e.endClocks) ? n : (0, I.M8)(), t_ = null == (r = e.sessionIsActive) || r, t.notify(5, {
                                            endClocks: to
                                        }), t.notify(6, {
                                            endClocks: to
                                        }), (0, tq.vG)(tL), tC(to.relative), tT(), tP(), (0, tq.wg)(function() {
                                            i.stop()
                                        }, ns))
                                    },
                                    stop: function() {
                                        tR(), tD(), tE(), tp.notify()
                                    },
                                    addTiming: function(t, e) {
                                        if (!to) {
                                            var n, r, i = (0, I.pu)(e) ? e : (0, I.vk)(s.timeStamp, e);
                                            th[(r = (n = t).replace(/[^a-zA-Z0-9-_.@$]/g, "_")) !== n && z.Vy.warn("Invalid timing name: ".concat(n, ", sanitized to: ").concat(r)), r] = i, tw()
                                        }
                                    },
                                    setViewName: function(t) {
                                        tu = t, tP()
                                    }
                                }
                            }(e, n, r, i, t, o, s, u);
                            return d.add(c), c.stopObservable.subscribe(function() {
                                d.delete(c)
                            }), c
                        }
                        return e.subscribe(10, function() {
                            f = p("route_change", void 0, {
                                name: f.name,
                                service: f.service,
                                version: f.version,
                                context: f.contextManager.getContext()
                            })
                        }), e.subscribe(9, function() {
                            f.end({
                                sessionIsActive: !1
                            })
                        }), e.subscribe(11, function(t) {
                            t.reason === to.y5.UNLOADING && f.end()
                        }), s && (c = o.subscribe(function(t) {
                            var e, n, r;
                            e = t.oldLocation, n = t.newLocation, e.pathname === n.pathname && ("" !== (r = n.hash.substring(1)) && document.getElementById(r) || nu(n.hash) === nu(e.hash)) || (f.end(), f = p("route_change"))
                        })), {
                            addTiming: function(t, e) {
                                void 0 === e && (e = (0, I.nx)()), f.addTiming(t, e)
                            },
                            startView: function(t, e) {
                                f.end({
                                    endClocks: e
                                }), f = p("route_change", e, t)
                            },
                            setViewContext: function(t) {
                                f.contextManager.setContext(t)
                            },
                            setViewContextProperty: function(t, e) {
                                f.contextManager.setContextProperty(t, e)
                            },
                            setViewName: function(t) {
                                f.setViewName(t)
                            },
                            stop: function() {
                                c && c.unsubscribe(), f.end(), d.forEach(function(t) {
                                    return t.stop()
                                })
                            }
                        }
                    }(e_, Y, tY, tQ, t, tJ, !t.trackViewsManually, o)),
                    ee = t7.addTiming,
                    en = t7.startView,
                    er = t7.setViewName,
                    ei = t7.setViewContext,
                    ea = t7.setViewContextProperty,
                    eo = t7.stop;
                K.push(eo);
                var ef = function(t, e, n, r, i) {
                    void 0 === r && (r = function() {
                        var t = [];

                        function e(e) {
                            var r;
                            if (e.didTimeout) {
                                var i = performance.now();
                                r = function() {
                                    return 30 - (performance.now() - i)
                                }
                            } else r = e.timeRemaining.bind(e);
                            for (; r() > 0 && t.length;) t.shift()();
                            t.length && n()
                        }

                        function n() {
                            eq(e, {
                                timeout: eH
                            })
                        }
                        return {
                            push: function(e) {
                                1 === t.push(e) && n()
                            }
                        }
                    }()), void 0 === i && (i = eX), t.subscribe(8, function(t) {
                        s(function() {
                            return function(t, e, n) {
                                var r = function(t) {
                                        if (performance && "getEntriesByName" in performance) {
                                            var e = performance.getEntriesByName(t.url, "resource");
                                            if (e.length && "toJSON" in e[0]) {
                                                var n = e.filter(function(t) {
                                                    return !eG.has(t)
                                                }).filter(function(t) {
                                                    return tR(t) && tN(t)
                                                }).filter(function(e) {
                                                    var n, r, i;
                                                    return n = e, r = t.startClocks.relative, i = eW({
                                                        startTime: t.startClocks.relative,
                                                        duration: t.duration
                                                    }), n.startTime >= r - 1 && eW(n) <= (0, I.Gw)(i, 1)
                                                });
                                                if (1 === n.length) return eG.add(n[0]), n[0].toJSON()
                                            }
                                        }
                                    }(t),
                                    i = r ? (0, I.FR)(r.startTime) : t.startClocks,
                                    a = function(t, e) {
                                        if (t.traceSampled && t.traceId && t.spanId) return {
                                            _dd: {
                                                span_id: t.spanId.toString(),
                                                trace_id: t.traceId.toString(),
                                                rule_psr: e.rulePsr
                                            }
                                        }
                                    }(t, e);
                                if (e.trackResources || a) {
                                    var o, s, u, c = "xhr" === t.type ? "xhr" : "fetch",
                                        l = r ? e0(r) : void 0,
                                        d = (o = n, s = i, u = t.duration, o.wasInPageStateDuringPeriod("frozen", s.relative, u) ? void 0 : (0, I.Zj)(u)),
                                        f = (0, T.kg)({
                                            date: i.timeStamp,
                                            resource: {
                                                id: (0, D.lk)(),
                                                type: c,
                                                duration: d,
                                                method: t.method,
                                                status_code: t.status,
                                                protocol: r && tD(r),
                                                url: tV(t.url) ? tz(t.url) : t.url,
                                                delivery_type: r && tO(r)
                                            },
                                            type: "resource",
                                            _dd: {
                                                discarded: !e.trackResources
                                            }
                                        }, a, l);
                                    return {
                                        startTime: i.relative,
                                        rawRumEvent: f,
                                        domainContext: {
                                            performanceEntry: r,
                                            xhr: t.xhr,
                                            response: t.response,
                                            requestInput: t.input,
                                            requestInit: t.init,
                                            error: t.error,
                                            isAborted: t.isAborted,
                                            handlingStack: t.handlingStack
                                        }
                                    }
                                }
                            }(t, e, n)
                        })
                    });
                    var o = tH(e, {
                        type: a.RESOURCE,
                        buffered: !0
                    }).subscribe(function(t) {
                        for (var n = function(t) {
                                "xmlhttprequest" !== t.initiatorType && "fetch" !== t.initiatorType && s(function() {
                                    return eQ(t, e)
                                })
                            }, r = 0; r < t.length; r++) n(t[r])
                    });

                    function s(e) {
                        r.push(function() {
                            var n = e();
                            n && t.notify(12, n)
                        })
                    }
                    return i(e, function(t) {
                        s(function() {
                            return eQ(t, e)
                        })
                    }), {
                        stop: function() {
                            o.unsubscribe()
                        }
                    }
                }(Y, t, t$).stop;
                if (K.push(ef), (0, B.sr)(B.R9.LONG_ANIMATION_FRAME)) {
                    if (t.trackLongTasks) {
                        var ep, eh, ev, em, eg, e_, ey, ew = (ey = tH(t, {
                            type: a.LONG_ANIMATION_FRAME,
                            buffered: !0
                        }).subscribe(function(t) {
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e],
                                    r = (0, I.FR)(n.startTime),
                                    i = {
                                        date: r.timeStamp,
                                        long_task: {
                                            id: (0, D.lk)(),
                                            entry_type: "long-animation-frame",
                                            duration: (0, I.Zj)(n.duration),
                                            blocking_duration: (0, I.Zj)(n.blockingDuration),
                                            first_ui_event_timestamp: (0, I.Zj)(n.firstUIEventTimestamp),
                                            render_start: (0, I.Zj)(n.renderStart),
                                            style_and_layout_start: (0, I.Zj)(n.styleAndLayoutStart),
                                            start_time: (0, I.Zj)(n.startTime),
                                            scripts: n.scripts.map(function(t) {
                                                return {
                                                    duration: (0, I.Zj)(t.duration),
                                                    pause_duration: (0, I.Zj)(t.pauseDuration),
                                                    forced_style_and_layout_duration: (0, I.Zj)(t.forcedStyleAndLayoutDuration),
                                                    start_time: (0, I.Zj)(t.startTime),
                                                    execution_start: (0, I.Zj)(t.executionStart),
                                                    source_url: t.sourceURL,
                                                    source_function_name: t.sourceFunctionName,
                                                    source_char_position: t.sourceCharPosition,
                                                    invoker: t.invoker,
                                                    invoker_type: t.invokerType,
                                                    window_attribution: t.windowAttribution
                                                }
                                            })
                                        },
                                        type: "long_task",
                                        _dd: {
                                            discarded: !1
                                        }
                                    };
                                Y.notify(12, {
                                    rawRumEvent: i,
                                    startTime: r.relative,
                                    domainContext: {
                                        performanceEntry: n
                                    }
                                })
                            }
                        }), {
                            stop: function() {
                                return ey.unsubscribe()
                            }
                        }).stop;
                        K.push(ew)
                    }
                } else tH(t, {
                    type: a.LONG_TASK,
                    buffered: !0
                }).subscribe(function(e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r.entryType !== a.LONG_TASK || !t.trackLongTasks) break;
                        var i = (0, I.FR)(r.startTime),
                            o = {
                                date: i.timeStamp,
                                long_task: {
                                    id: (0, D.lk)(),
                                    entry_type: "long-task",
                                    duration: (0, I.Zj)(r.duration)
                                },
                                type: "long_task",
                                _dd: {
                                    discarded: !1
                                }
                            };
                        Y.notify(12, {
                            rawRumEvent: o,
                            startTime: i.relative,
                            domainContext: {
                                performanceEntry: r
                            }
                        })
                    }
                });
                var ek = (R = E = new ts.c, (0, eB.l)([z.bP.error]).subscribe(function(t) {
                    return R.notify(t.error)
                }), (0, eV.mj)(E), (0, ej.u)(t, [ej.V.cspViolation, ej.V.intervention]).subscribe(function(t) {
                    return E.notify(t)
                }), E.subscribe(function(t) {
                    return Y.notify(14, {
                        error: t
                    })
                }), d = Y, v = t$, m = X, d.subscribe(14, function(t) {
                    var e, n, r, i, a, o, s = t.error,
                        u = t.customerContext,
                        c = t.savedCommonContext;
                    d.notify(12, (0, N.kp)({
                        customerContext: u,
                        savedCommonContext: c
                    }, (e = s, n = v, r = m, i = {
                        date: e.startClocks.timeStamp,
                        error: {
                            id: (0, D.lk)(),
                            message: e.message,
                            source: e.source,
                            stack: e.stack,
                            handling_stack: e.handlingStack,
                            type: e.type,
                            handling: e.handling,
                            causes: e.causes,
                            source_type: "browser",
                            fingerprint: e.fingerprint,
                            csp: e.csp
                        },
                        type: "error",
                        view: {
                            in_foreground: n.wasInPageStateAt("active", e.startClocks.relative)
                        }
                    }, (a = r.findFeatureFlagEvaluations(e.startClocks.relative)) && !(0, G.RI)(a) && (i.feature_flags = a), o = {
                        error: e.originalError,
                        handlingStack: e.handlingStack
                    }, {
                        rawRumEvent: i,
                        startTime: e.startClocks.relative,
                        domainContext: o
                    })))
                }), {
                    addError: function(t, e) {
                        var n = t.error,
                            r = t.handlingStack,
                            i = t.startClocks,
                            a = t.context,
                            o = (0, ez.bJ)(n) ? (0, eU.T)(n) : void 0,
                            s = (0, ez.As)({
                                stackTrace: o,
                                originalError: n,
                                handlingStack: r,
                                startClocks: i,
                                nonErrorPrefix: "Provided",
                                source: eF.g.CUSTOM,
                                handling: "handled"
                            });
                        d.notify(14, {
                            customerContext: a,
                            savedCommonContext: e,
                            error: s
                        })
                    }
                }).addError;
                q = {
                    clearTracingIfNeeded: tt,
                    traceFetch: function(e) {
                        return te(t, e, ti, function(t) {
                            var n;
                            if (e.input instanceof Request && !(null == (n = e.init) ? void 0 : n.headers)) e.input = new Request(e.input), Object.keys(t).forEach(function(n) {
                                e.input.headers.append(n, t[n])
                            });
                            else {
                                e.init = (0, G.yG)(e.init);
                                var r = [];
                                e.init.headers instanceof Headers ? e.init.headers.forEach(function(t, e) {
                                    r.push([e, t])
                                }) : Array.isArray(e.init.headers) ? e.init.headers.forEach(function(t) {
                                    r.push(t)
                                }) : e.init.headers && Object.keys(e.init.headers).forEach(function(t) {
                                    r.push([t, e.init.headers[t]])
                                }), e.init.headers = r.concat((0, N.WP)(t))
                            }
                        })
                    },
                    traceXhr: function(e, n) {
                        return te(t, e, ti, function(t) {
                            Object.keys(t).forEach(function(e) {
                                n.setRequestHeader(e, t[e])
                            })
                        })
                    }
                }, g = Y, _ = t, y = q, (0, tk.G)(_).subscribe(function(t) {
                    if (tL(t.url)) switch (t.state) {
                        case "start":
                            y.traceXhr(t, t.xhr), t.requestIndex = tF(), g.notify(7, {
                                requestIndex: t.requestIndex,
                                url: t.url
                            });
                            break;
                        case "complete":
                            y.clearTracingIfNeeded(t), g.notify(8, {
                                duration: t.duration,
                                method: t.method,
                                requestIndex: t.requestIndex,
                                spanId: t.spanId,
                                startClocks: t.startClocks,
                                status: t.status,
                                traceId: t.traceId,
                                traceSampled: t.traceSampled,
                                type: "xhr",
                                url: t.url,
                                xhr: t.xhr,
                                isAborted: t.isAborted,
                                handlingStack: t.handlingStack
                            })
                    }
                }), w = Y, k = q, (0, F.i)().subscribe(function(t) {
                    if (tL(t.url)) switch (t.state) {
                        case "start":
                            k.traceFetch(t), t.requestIndex = tF(), w.notify(7, {
                                requestIndex: t.requestIndex,
                                url: t.url
                            });
                            break;
                        case "resolve":
                            var e, n, r;
                            e = t, n = function(e) {
                                k.clearTracingIfNeeded(t), w.notify(8, {
                                    duration: e,
                                    method: t.method,
                                    requestIndex: t.requestIndex,
                                    responseType: t.responseType,
                                    spanId: t.spanId,
                                    startClocks: t.startClocks,
                                    status: t.status,
                                    traceId: t.traceId,
                                    traceSampled: t.traceSampled,
                                    type: "fetch",
                                    url: t.url,
                                    response: t.response,
                                    init: t.init,
                                    input: t.input,
                                    isAborted: t.isAborted,
                                    handlingStack: t.handlingStack
                                })
                            }, (r = e.response && (0, tS.i)(e.response)) && r.body ? (0, tx._)(r.body, function() {
                                n((0, I.vk)(e.startClocks.timeStamp, (0, I.nx)()))
                            }, {
                                bytesLimit: Number.POSITIVE_INFINITY,
                                collectStreamBody: !1
                            }) : n((0, I.vk)(e.startClocks.timeStamp, (0, I.nx)()))
                    }
                });
                var eS = function(t, e, n) {
                        function r(n) {
                            var r, i, a;
                            e.wasInPageStateDuringPeriod("frozen", n.startClocks.relative, n.duration) || t.notify(12, (i = !0, a = {
                                date: (r = n).startClocks.timeStamp,
                                vital: {
                                    id: (0, D.lk)(),
                                    type: r.type,
                                    name: r.name,
                                    duration: (0, I.Zj)(r.duration),
                                    description: r.description
                                },
                                type: "vital"
                            }, i && (a._dd = {
                                vital: {
                                    computed_value: !0
                                }
                            }), {
                                rawRumEvent: a,
                                startTime: r.startClocks.relative,
                                customerContext: r.context,
                                domainContext: {}
                            }))
                        }
                        return {
                            addDurationVital: r,
                            startDurationVital: function(t, e) {
                                return void 0 === e && (e = {}), O(n, t, e)
                            },
                            stopDurationVital: function(t, e) {
                                void 0 === e && (e = {}), L(r, n, t, e)
                            }
                        }
                    }(Y, t$, c),
                    ex = (Z = t.applicationId, {
                        get: function(t) {
                            var e = t5.findView(t),
                                n = t3.findUrl(t),
                                r = ti.findTrackedSession(t);
                            if (r && e && n) {
                                var i = t6.findActionId(t);
                                return {
                                    application_id: Z,
                                    session_id: r.id,
                                    user_action: i ? {
                                        id: i
                                    } : void 0,
                                    view: {
                                        id: e.id,
                                        name: e.name,
                                        referrer: n.referrer,
                                        url: n.url
                                    }
                                }
                            }
                        }
                    });
                return {
                    addAction: t8,
                    addError: ek,
                    addTiming: ee,
                    addFeatureFlagEvaluation: X.addFeatureFlagEvaluation,
                    startView: en,
                    setViewContext: ei,
                    setViewContextProperty: ea,
                    setViewName: er,
                    lifeCycle: Y,
                    viewHistory: t5,
                    session: ti,
                    stopSession: function() {
                        return ti.expire()
                    },
                    getInternalContext: ex.get,
                    startDurationVital: eS.startDurationVital,
                    stopDurationVital: eS.stopDurationVital,
                    addDurationVital: eS.addDurationVital,
                    stop: function() {
                        K.forEach(function(t) {
                            return t()
                        })
                    }
                }
            }, function(t, e) {
                if ((0, V.d0)() && !(0, V.Ww)("records") || !rl()) return {
                    start: U.l,
                    stop: U.l,
                    getReplayStats: function() {},
                    onRumStart: U.l,
                    isRecording: function() {
                        return !1
                    },
                    getSessionReplayLink: function() {}
                };
                var n, r = (n = 0, {
                        strategy: {
                            start: function() {
                                n = 1
                            },
                            stop: function() {
                                n = 2
                            },
                            isRecording: function() {
                                return !1
                            },
                            getSessionReplayLink: U.l
                        },
                        shouldStartImmediately: function(t) {
                            return 1 === n || 0 === n && !t.startSessionReplayRecordingManually
                        }
                    }),
                    i = r.strategy,
                    a = r.shouldStartImmediately;
                return {
                    start: function(t) {
                        return i.start(t)
                    },
                    stop: function() {
                        return i.stop()
                    },
                    getSessionReplayLink: function() {
                        return i.getSessionReplayLink()
                    },
                    onRumStart: function(e, n, r, o, s) {
                        var u;
                        i = function(t, e, n, r, i, a) {
                            var o, s = 0;

                            function u(u) {
                                var c, l, d, f, p, h = n.findTrackedSession();
                                if (c = h, l = u, !c || 0 === c.sessionReplay && (!l || !l.force)) {
                                    s = 1;
                                    return
                                }
                                2 !== (d = s) && 3 !== d && (s = 2, eZ(t, "interactive", function() {
                                    if (2 === s) {
                                        var u = a();
                                        if (!u) {
                                            s = 0;
                                            return
                                        }
                                        o = i(e, t, n, r, u).stop, s = 3
                                    }
                                }), f = h, (p = u) && p.force && 0 === f.sessionReplay && n.setForcedReplay())
                            }

                            function c() {
                                0 !== s && 3 === s && (null == o || o()), s = 0
                            }
                            return e.subscribe(9, function() {
                                (2 === s || 3 === s) && (c(), s = 1)
                            }), e.subscribe(11, function(t) {
                                t.reason === to.y5.UNLOADING && c()
                            }), e.subscribe(10, function() {
                                1 === s && u()
                            }), {
                                start: u,
                                stop: c,
                                getSessionReplayLink: function() {
                                    var e, i, a, o, u, c, l, d, f, p, h, v, m, g, _, y;
                                    return e = 0 !== s, v = i = n.findTrackedSession(), m = e, a = rl() ? v ? 0 === v.sessionReplay ? "incorrect-session-plan" : m ? void 0 : "replay-not-started" : "rum-not-tracked" : "browser-not-supported", o = r.findView(), c = (u = {
                                        viewContext: o,
                                        errorType: a,
                                        session: i
                                    }).session, l = u.viewContext, d = u.errorType, f = c ? c.id : "no-session-id", p = [], void 0 !== d && p.push("error-type=".concat(d)), l && (p.push("seed=".concat(l.id)), p.push("from=".concat(l.startClocks.timeStamp))), _ = (g = t).site, y = g.subdomain || function(t) {
                                        switch (t.site) {
                                            case nA.NW:
                                            case nA.dV:
                                                return "app";
                                            case nA.Bb:
                                                return "dd";
                                            default:
                                                return
                                        }
                                    }(g), h = "https://".concat(y ? "".concat(y, ".") : "").concat(_), "".concat(h).concat("/rum/replay/sessions/".concat(f), "?").concat(p.join("&"))
                                },
                                isRecording: function() {
                                    return 3 === s
                                }
                            }
                        }(n, e, r, o, t, function() {
                            return !u && (null != s || (s = ru(n, "Datadog Session Replay", function() {
                                i.stop()
                            }, void 0)), s && (u = ri(n, s, 1))), u
                        }), a(n) && i.start()
                    },
                    isRecording: function() {
                        return 3 === rs.status && i.isRecording()
                    },
                    getReplayStats: function(t) {
                        return 3 === rs.status ? null == v ? void 0 : v.get(t) : void 0
                    }
                }
            }(function(t, e, n, r, i, a) {
                var o, s = [],
                    u = a || (0, nI.sA)(e.sessionReplayEndpointBuilder, 6e4, function(e) {
                        t.notify(14, {
                            error: e
                        }), (0, C.A2)("Error reported to customer", {
                            "error.message": e.message
                        })
                    });
                if ((0, V.d0)()) o = (c = (0, V.Y9)(), {
                    addRecord: function(t) {
                        var e = r.findView();
                        c.send("record", t, e.id)
                    }
                }).addRecord;
                else {
                    var c, l = function(t, e, n, r) {
                        var i = {
                                status: 0,
                                nextSegmentCreationReason: "init"
                            },
                            a = t.subscribe(2, function() {
                                s("view_change")
                            }).unsubscribe,
                            o = t.subscribe(11, function(t) {
                                s(t.reason)
                            }).unsubscribe;

                        function s(t) {
                            1 === i.status && (i.segment.flush(function(e, r) {
                                var i, a, o, s, u = (i = r.output, a = r.rawBytesCount, (o = new FormData).append("segment", new Blob([i], {
                                    type: "application/octet-stream"
                                }), "".concat(e.session.id, "-").concat(e.start)), s = JSON.stringify((0, N.kp)({
                                    raw_segment_size: a,
                                    compressed_segment_size: i.byteLength
                                }, e)), o.append("event", new Blob([s], {
                                    type: "application/json"
                                })), {
                                    data: o,
                                    bytesCount: i.byteLength
                                });
                                (0, to.Kp)(t) ? n.sendOnExit(u): n.send(u)
                            }), (0, tq.DJ)(i.expirationTimeoutId)), i = "stop" !== t ? {
                                status: 0,
                                nextSegmentCreationReason: t
                            } : {
                                status: 2
                            }
                        }
                        return {
                            addRecord: function(t) {
                                if (2 !== i.status) {
                                    if (0 === i.status) {
                                        var n = e();
                                        if (!n) return;
                                        i = {
                                            status: 1,
                                            segment: function(t) {
                                                var e = t.context,
                                                    n = t.creationReason,
                                                    r = t.encoder,
                                                    i = 0,
                                                    a = e.view.id,
                                                    o = (0, N.kp)({
                                                        start: 1 / 0,
                                                        end: -1 / 0,
                                                        creation_reason: n,
                                                        records_count: 0,
                                                        has_full_snapshot: !1,
                                                        index_in_view: nR(a).segments_count,
                                                        source: "browser"
                                                    }, e);
                                                return nR(a).segments_count += 1, {
                                                    addRecord: function(t, e) {
                                                        o.start = Math.min(o.start, t.timestamp), o.end = Math.max(o.end, t.timestamp), o.records_count += 1, o.has_full_snapshot || (o.has_full_snapshot = t.type === nB.FullSnapshot);
                                                        var n = r.isEmpty ? '{"records":[' : ",";
                                                        r.write(n + JSON.stringify(t), function(t) {
                                                            e(i += t)
                                                        })
                                                    },
                                                    flush: function(t) {
                                                        if (r.isEmpty) throw Error("Empty segment flushed");
                                                        r.write("],".concat(JSON.stringify(o).slice(1), "\n")), r.finish(function(e) {
                                                            var n, r;
                                                            n = o.view.id, r = e.rawBytesCount, nR(n).segments_total_raw_size += r, t(o, e)
                                                        })
                                                    }
                                                }
                                            }({
                                                encoder: r,
                                                context: n,
                                                creationReason: i.nextSegmentCreationReason
                                            }),
                                            expirationTimeoutId: (0, tq.wg)(function() {
                                                s("segment_duration_limit")
                                            }, rn)
                                        }
                                    }
                                    i.segment.addRecord(t, function(t) {
                                        t > 6e4 && s("segment_bytes_limit")
                                    })
                                }
                            },
                            stop: function() {
                                s("stop"), a(), o()
                            }
                        }
                    }(t, function() {
                        var t = e.applicationId,
                            i = n,
                            a = r,
                            o = i.findTrackedSession(),
                            s = a.findView();
                        return o && s ? {
                            application: {
                                id: t
                            },
                            session: {
                                id: o.id
                            },
                            view: {
                                id: s.id
                            }
                        } : void 0
                    }, u, i);
                    o = l.addRecord, s.push(l.stop)
                }
                var d = function(t) {
                    var e, n, r, i, a, o, s, u, c, l, d, f, p, h, v = t.emit,
                        m = t.configuration,
                        g = t.lifeCycle;
                    if (!v) throw Error("emit function is required");
                    var _ = function(e) {
                            var n;
                            v(e), (0, ta.b)("record", {
                                record: e
                            }), n = t.viewHistory.findView().id, nR(n).records_count += 1
                        },
                        y = (e = new WeakMap, {
                            set: function(t, n) {
                                (t !== document || document.scrollingElement) && e.set(t === document ? document.scrollingElement : t, n)
                            },
                            get: function(t) {
                                return e.get(t)
                            },
                            has: function(t) {
                                return e.has(t)
                            }
                        }),
                        b = re(m, _, y),
                        w = (n = k, (r = function(t) {
                            return t.forEach(function(t) {
                                return _(t)
                            })
                        })((i = function(t, e) {
                            void 0 === t && (t = (0, I.nx)()), void 0 === e && (e = {
                                status: 0,
                                elementsScrollPositions: y,
                                shadowRootsController: b
                            });
                            var n = ni(),
                                r = n.width,
                                i = [{
                                    data: {
                                        height: n.height,
                                        href: window.location.href,
                                        width: r
                                    },
                                    type: nB.Meta,
                                    timestamp: t
                                }, {
                                    data: {
                                        has_focus: document.hasFocus()
                                    },
                                    type: nB.Focus,
                                    timestamp: t
                                }, {
                                    data: {
                                        node: n$(document, {
                                            serializationContext: e,
                                            parentNodePrivacyLevel: m.defaultPrivacyLevel,
                                            configuration: m
                                        }),
                                        initialOffset: {
                                            left: ne(),
                                            top: nn()
                                        }
                                    },
                                    type: nB.FullSnapshot,
                                    timestamp: t
                                }];
                            return window.visualViewport && i.push({
                                data: n5(window.visualViewport),
                                type: nB.VisualViewport,
                                timestamp: t
                            }), i
                        })()), {
                            stop: g.subscribe(2, function(t) {
                                n(), r(i(t.startClocks.timeStamp, {
                                    shadowRootsController: b,
                                    status: 1,
                                    elementsScrollPositions: y
                                }))
                            }).unsubscribe
                        }).stop;

                    function k() {
                        b.flush(), x.flush()
                    }
                    var S = (a = new WeakMap, o = 1, {
                            getIdForEvent: function(t) {
                                return a.has(t) || a.set(t, o++), a.get(t)
                            }
                        }),
                        x = rt(_, m, b, document),
                        C = [x, (u = (s = (0, U.n)(function(t) {
                            var e = n1(t);
                            if (nM(e)) {
                                var n = n6(t);
                                if (!n) return;
                                var r = {
                                    id: nD(e),
                                    timeOffset: 0,
                                    x: n.x,
                                    y: n.y
                                };
                                _(n3(n0(t) ? nq.TouchMove : nq.MouseMove, {
                                    positions: [r]
                                }))
                            }
                        }, 50, {
                            trailing: !1
                        })).throttled, c = s.cancel, l = (0, tr.l)(m, document, ["mousemove", "touchmove"], u, {
                            capture: !0,
                            passive: !0
                        }).stop, {
                            stop: function() {
                                l(), c()
                            }
                        }), (0, tr.l)(m, document, Object.keys(n4), function(t) {
                            var e, n = n1(t);
                            if (et(n, m.defaultPrivacyLevel) !== t4.HIDDEN && nM(n)) {
                                var r = nD(n),
                                    i = n4[t.type];
                                if (i !== nH.Blur && i !== nH.Focus) {
                                    var a = n6(t);
                                    if (!a) return;
                                    e = {
                                        id: r,
                                        type: i,
                                        x: a.x,
                                        y: a.y
                                    }
                                } else e = {
                                    id: r,
                                    type: i
                                };
                                _((0, N.kp)({
                                    id: S.getIdForEvent(t)
                                }, n3(nq.MouseInteraction, e)))
                            }
                        }, {
                            capture: !0,
                            passive: !0
                        }), n8(m, _, y, document), (d = nr(m).subscribe(function(t) {
                            _(n3(nq.ViewportResize, t))
                        }), {
                            stop: function() {
                                d.unsubscribe()
                            }
                        }), n7(m, _), (0, tr.l)(m, document, ["play", "pause"], function(t) {
                            var e = n1(t);
                            e && et(e, m.defaultPrivacyLevel) !== t4.HIDDEN && nM(e) && _(n3(nq.MediaInteraction, {
                                id: nD(e),
                                type: "play" === t.type ? nG.Play : nG.Pause
                            }))
                        }, {
                            capture: !0,
                            passive: !0
                        }), function(t) {
                            function e(t, e) {
                                t && nM(t.ownerNode) && e(nD(t.ownerNode))
                            }
                            var n = [(0, tl.H)(CSSStyleSheet.prototype, "insertRule", function(n) {
                                var r = n.target,
                                    i = n.parameters,
                                    a = i[0],
                                    o = i[1];
                                e(r, function(e) {
                                    return t(n3(nq.StyleSheetRule, {
                                        id: e,
                                        adds: [{
                                            rule: a,
                                            index: o
                                        }]
                                    }))
                                })
                            }), (0, tl.H)(CSSStyleSheet.prototype, "deleteRule", function(n) {
                                var r = n.target,
                                    i = n.parameters[0];
                                e(r, function(e) {
                                    return t(n3(nq.StyleSheetRule, {
                                        id: e,
                                        removes: [{
                                            index: i
                                        }]
                                    }))
                                })
                            })];

                            function r(r) {
                                n.push((0, tl.H)(r.prototype, "insertRule", function(n) {
                                    var r = n.target,
                                        i = n.parameters,
                                        a = i[0],
                                        o = i[1];
                                    e(r.parentStyleSheet, function(e) {
                                        var n = n9(r);
                                        n && (n.push(o || 0), t(n3(nq.StyleSheetRule, {
                                            id: e,
                                            adds: [{
                                                rule: a,
                                                index: n
                                            }]
                                        })))
                                    })
                                }), (0, tl.H)(r.prototype, "deleteRule", function(n) {
                                    var r = n.target,
                                        i = n.parameters[0];
                                    e(r.parentStyleSheet, function(e) {
                                        var n = n9(r);
                                        n && (n.push(i), t(n3(nq.StyleSheetRule, {
                                            id: e,
                                            removes: [{
                                                index: n
                                            }]
                                        })))
                                    })
                                }))
                            }
                            return "undefined" != typeof CSSGroupingRule ? r(CSSGroupingRule) : (r(CSSMediaRule), r(CSSSupportsRule)), {
                                stop: function() {
                                    n.forEach(function(t) {
                                        return t.stop()
                                    })
                                }
                            }
                        }(_), (0, tr.l)(m, window, ["focus", "blur"], function() {
                            _({
                                data: {
                                    has_focus: document.hasFocus()
                                },
                                type: nB.Focus,
                                timestamp: (0, I.nx)()
                            })
                        }), function(t, e) {
                            var n = window.visualViewport;
                            if (!n) return {
                                stop: U.l
                            };
                            var r = (0, U.n)(function() {
                                    e({
                                        data: n5(n),
                                        type: nB.VisualViewport,
                                        timestamp: (0, I.nx)()
                                    })
                                }, 200, {
                                    trailing: !1
                                }),
                                i = r.throttled,
                                a = r.cancel,
                                o = (0, tr.l)(t, n, ["resize", "scroll"], i, {
                                    capture: !0,
                                    passive: !0
                                }).stop;
                            return {
                                stop: function() {
                                    o(), a()
                                }
                            }
                        }(m, _), (f = g.subscribe(12, function(t) {
                            var e, n;
                            "action" === t.rawRumEvent.type && "click" === t.rawRumEvent.action.type && (null == (n = null == (e = t.rawRumEvent.action.frustration) ? void 0 : e.type) ? void 0 : n.length) && "events" in t.domainContext && t.domainContext.events && t.domainContext.events.length && _({
                                timestamp: t.rawRumEvent.date,
                                type: nB.FrustrationRecord,
                                data: {
                                    frustrationTypes: t.rawRumEvent.action.frustration.type,
                                    recordIds: t.domainContext.events.map(function(t) {
                                        return S.getIdForEvent(t)
                                    })
                                }
                            })
                        }), {
                            stop: function() {
                                f.unsubscribe()
                            }
                        }), (p = function(t) {
                            k(), _(t)
                        }, h = g.subscribe(5, function() {
                            p({
                                timestamp: (0, I.nx)(),
                                type: nB.ViewEnd
                            })
                        }), {
                            stop: function() {
                                h.unsubscribe()
                            }
                        })];
                    return {
                        stop: function() {
                            b.stop(), C.forEach(function(t) {
                                return t.stop()
                            }), w()
                        },
                        flushMutations: k,
                        shadowRootsController: b
                    }
                }({
                    emit: o,
                    configuration: e,
                    lifeCycle: t,
                    viewHistory: r
                }).stop;
                return s.push(d), {
                    stop: function() {
                        s.forEach(function(t) {
                            return t()
                        })
                    }
                }
            }), {
                startDeflateWorker: ru,
                createDeflateEncoder: ri
            });
            (0, g.Z)((0, _.V)(), "DD_RUM", rd)
        }
    }
]);
//# sourceMappingURL=94870-a9fb5256a6f0d267.js.map