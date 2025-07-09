"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [53177], {
        3963: (e, t, r) => {
            let n;
            r.d(t, {
                M: () => s
            });
            var a = r(23043),
                o = r(47491),
                i = r(72987);
            let c = ["log", "debug", "info", "warn", "error"];

            function s() {
                if (!n) {
                    let e = o.yf.logger;
                    e.setHandler("local" !== a._n && "development" !== a.X$ ? "http" : "console"), n = new Proxy(e, {
                        get: (e, t) => c.includes(t) ? (r, n, a, o) => {
                            let c = (0, i.X)();
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
                            let s = { ...c,
                                ...n
                            };
                            "log" === t ? e.log(r, s, a, o) : e[t](r, s)
                        } : e[t]
                    })
                }
                return n
            }
            o.yf.init({
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
        8790: (e, t, r) => {
            r.d(t, {
                r: () => c
            });
            var n = r(13270);
            let a = {
                    brand: {
                        base: {
                            base: 0,
                            lightest: 102,
                            lighter: 51,
                            darker: -51,
                            darkest: -102
                        },
                        dark: {
                            base: 0,
                            lightest: "25%",
                            lighter: "66%",
                            darker: 102,
                            darkest: 102
                        }
                    },
                    neutral: {
                        base: {
                            primary: 0,
                            secondary: 51,
                            tertiary: 102,
                            quaternary: 153
                        },
                        dark: {
                            primary: "16%",
                            secondary: "12%",
                            tertiary: "8%",
                            quaternary: "5%"
                        }
                    },
                    surface: {
                        base: {
                            primary: 0,
                            secondary: -51,
                            tertiary: -102
                        },
                        dark: {
                            primary: 0,
                            secondary: 21,
                            tertiary: 42
                        }
                    },
                    text: {
                        base: {
                            primary: 0,
                            secondary: 51,
                            tertiary: 102
                        },
                        dark: {
                            primary: 0,
                            secondary: "72%",
                            tertiary: "44%"
                        }
                    }
                },
                o = (e, t) => {
                    e = e.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                    let r = t ? Math.round(.01 * parseFloat(t) * 255).toString(16) : void 0;
                    return e.length < 3 ? e : (e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), r ? e + r : e)
                },
                i = (e, t) => {
                    let r = parseInt(e = o(e), 16),
                        n = Math.min(Math.max(0, (r >> 16) + t), 255);
                    return "#" + ("00000" + (Math.min(Math.max(0, (255 & r) + t), 255) | Math.min(Math.max(0, (r >> 8 & 255) + t), 255) << 8 | n << 16).toString(16)).slice(-6)
                },
                c = e => {
                    let {
                        onError: t
                    } = e, [r, c] = (0, n.useState)(null);
                    return (0, n.useEffect)(() => {
                        var e;
                        c(null == (e = document) ? void 0 : e.documentElement)
                    }, []), {
                        setColors: (e, n) => {
                            let c, s = a[e].base,
                                l = a[e].dark;
                            try {
                                for (let [t, a] of Object.entries(s)) c = i(n, a), null == r || r.style.setProperty("--".concat(e, "-").concat(t), c);
                                for (let [t, a] of Object.entries(l)) c = "string" == typeof a ? "#" + o(n, a) : i(n, a), null == r || r.style.setProperty("--".concat(e, "-").concat(t, "-dark"), c)
                            } catch (e) {
                                null == t || t(e)
                            }
                        },
                        setFont: e => {
                            try {
                                null == r || r.style.setProperty("--brand-font", e)
                            } catch (e) {
                                null == t || t(e)
                            }
                        },
                        setRadius: (e, n) => {
                            try {
                                null == r || r.style.setProperty("--".concat(e, "-radius"), n)
                            } catch (e) {
                                null == t || t(e)
                            }
                        }
                    }
                }
        },
        12844: (e, t, r) => {
            r.d(t, {
                t: () => i
            });
            var n = r(3963),
                a = r(85515),
                o = r(23043);
            let i = () => a.S ? console : (0, n.M)();
            a.S || o.Ay || new PerformanceObserver(e => {
                e.getEntries().filter(e => "fetch" === e.initiatorType).forEach(e => {
                    if ("resource" !== e.entryType || !(e.name.includes(o.df) || e.name.includes(o.fn) || e.name.includes(o.N2))) return;
                    let t = new URL(e.name),
                        r = e.domainLookupStart - e.startTime,
                        n = e.domainLookupEnd - e.domainLookupStart,
                        a = e.connectEnd - e.connectStart,
                        c = e.secureConnectionStart > 0 ? e.connectEnd - e.secureConnectionStart : 0,
                        s = e.responseStart - e.requestStart,
                        l = e.responseEnd - e.fetchStart;
                    i().info("API Performance ".concat(e.name), {
                        performance: {
                            host: t.host,
                            pathname: t.pathname,
                            url: e.name,
                            queue: r,
                            initiator: e.initiatorType,
                            dns: n,
                            tcp: a,
                            ssl: c,
                            ttfb: s,
                            fetch: l,
                            duration: e.duration
                        },
                        performanceEntry: e.toJSON()
                    })
                })
            }).observe({
                type: "resource",
                buffered: !0
            })
        },
        60129: (e, t, r) => {
            r.d(t, {
                qX: () => k,
                q9: () => g,
                YZ: () => f,
                $r: () => h,
                fd: () => C,
                BH: () => v,
                fq: () => b,
                cw: () => S
            });
            var n = r(42275),
                a = r(10388),
                o = r(9029),
                i = r(61067),
                c = r(69442),
                s = r(12844);
            let l = (e, t, r) => new Promise((n, a) => {
                    let o = (0, s.t)(),
                        i = () => {
                            t().then(e => {
                                n(e)
                            }).catch(e => {
                                a(e)
                            })
                        },
                        c = setTimeout(() => {
                            o.log("Request timed out ".concat(r, "ms, executing given falling back")), i()
                        }, r);
                    e().then(e => {
                        clearTimeout(c), n(e)
                    }).catch(e => {
                        o.log("Primary promise failed, executing given falling back", {
                            e
                        }), clearTimeout(c), i()
                    })
                }),
                u = (e, t) => {
                    let r = (0, s.t)(),
                        n = i.k.Magic.getHeadersFromParams(t);
                    if (!t.apiKey) throw r.error("Unable to retrieve client config from Next.js API route. API key is missing from the params!!", t), Error("API key is missing from the params");
                    return l(f(e, t.apiKey, n), g(n), 500)
                };
            var y = r(74455);
            let d = () => e => {
                    let {
                        queryKey: [, {
                            provider: t
                        }]
                    } = e;
                    return i.k.Magic.Get("".concat(o.yI.MagicClient.OAuthApp, "?provider_name=").concat(t))
                },
                p = () => e => {
                    let {
                        queryKey: [, {
                            clientId: t
                        }]
                    } = e;
                    return i.k.Magic.Get("".concat(o.yI.MagicClient.TelegramApp, "?client_id=").concat(t))
                },
                g = e => () => {
                    let t = o.yI.MagicClient.Config;
                    return i.k.Magic.Get(t, e)
                },
                f = (e, t, r) => () => i.k.Mandrake.Get("".concat(e).concat(o.yI.MandrakeAPI.MagicClientAPI, "/").concat((0, y.v9)(t), "/config"), r),
                m = (e, t) => r => {
                    let {
                        queryKey: [, {
                            magicApiKey: n
                        }]
                    } = r, a = null != t ? t : c.P.getState().decodedQueryParams;
                    return a.apiKey = n, u(e, a)
                },
                h = {
                    base: ["magic-client"],
                    config: e => [
                        [...h.base, "config"], e
                    ],
                    oauthApp: e => [
                        [...h.base, "oauth-app"], e
                    ],
                    telegramApp: e => [
                        [...h.base, "telegram-app"], e
                    ]
                },
                b = (e, t) => (0, n.useQuery)({
                    queryKey: h.config(e),
                    queryFn: m(""),
                    gcTime: 18e5,
                    staleTime: 9e5,
                    refetchOnWindowFocus: !1,
                    retry: 2,
                    ...t
                }),
                k = e => (0, a.getQueryClient)().fetchQuery({
                    queryKey: h.config(e),
                    queryFn: m(""),
                    gcTime: 18e5,
                    staleTime: 9e5,
                    retry: 2
                }),
                S = (e, t) => (0, n.useQuery)({
                    queryKey: h.oauthApp(e),
                    queryFn: d(),
                    retry: 3,
                    ...t
                }),
                C = e => (0, a.getQueryClient)().fetchQuery({
                    queryKey: h.oauthApp(e),
                    queryFn: d(),
                    retry: 3
                }),
                v = e => (0, a.getQueryClient)().fetchQuery({
                    queryKey: h.telegramApp(e),
                    queryFn: p(),
                    retry: 3
                })
        },
        67324: (e, t, r) => {
            r.d(t, {
                default: () => n
            });

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
        },
        74455: (e, t, r) => {
            function n(e) {
                return String.fromCharCode(parseInt(e.slice(1), 16))
            }

            function a(e) {
                return "%".concat("00".concat(e.charCodeAt(0).toString(16)).slice(-2))
            }

            function o(e) {
                return btoa(encodeURIComponent(e).replace(/%[0-9A-F]{2}/g, n))
            }

            function i(e) {
                try {
                    return decodeURIComponent(Array.from(atob(e), a).join(""))
                } catch (t) {
                    return atob(e)
                }
            }

            function c(e) {
                return i(e)
            }

            function s(e) {
                let t;
                return decodeURIComponent(e) !== e ? i(decodeURIComponent(e)) : i(((t = e.replace(/-/g, "+").replace(/_/g, "/")).length % 4 != 0 && (t += "=".repeat(4 - t.length % 4)), t))
            }

            function l(e) {
                return o(e)
            }

            function u(e) {
                return o(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }

            function y(e) {
                let t = e.split(".");
                if (3 !== t.length) throw Error("Cannot parse invalid jwt");
                let r = JSON.parse(s(t[0]));
                return {
                    header: r,
                    payload: JSON.parse(s(t[1])),
                    sig: t[2]
                }
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return new Uint8Array(s(e).split("").map(e => e.charCodeAt(0)))
            }

            function p(e) {
                try {
                    return s(e), !0
                } catch (e) {
                    return !1
                }
            }
            r.d(t, {
                FI: () => s,
                PU: () => d,
                UY: () => p,
                WG: () => l,
                f1: () => y,
                v9: () => u,
                y4: () => c
            })
        }
    }
]);
//# sourceMappingURL=53177-7ed19e2db8555f4a.js.map