"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48315], {
        6491: (e, t, r) => {
            r.d(t, {
                N8: () => g,
                NX: () => p,
                p2: () => s
            });
            var n = r(14247),
                a = r(69442),
                i = r(48311),
                c = r(40067),
                o = r.n(c),
                u = r(78150),
                l = r(74455),
                y = r(9924);
            let g = e => {
                if (e) return {
                    dpop: e
                }
            };

            function p(e) {
                return new TextEncoder().encode(e)
            }
            async function s(e) {
                if (e && ! function() {
                        try {
                            let {
                                version: e,
                                sdkType: t
                            } = a.P.getState().decodedQueryParams, r = o().valid(o().coerce(e));
                            if (null !== r && t === n.Z.MagicSDK) return o().lt(r, "18.4.0")
                        } catch (e) {
                            logger.error("Error checking if should overwrite to iframe dpop", e)
                        }
                        return !1
                    }()) return e;
                logger.info("Generating DPoP JWT from iframe keys", {
                    jwtFromSDK: e
                });
                try {
                    let t = await i.p.getItem(y.G1),
                        r = await i.p.getItem(y.DE);
                    t && r && (0, y.lr)(t) || await (0, y.zk)(), t = await i.p.getItem(y.G1), r = await i.p.getItem(y.DE);
                    let {
                        subtle: n
                    } = window.crypto;
                    if (!r || !n) return logger.error("unable to find private key or webcrypto unsupported", {
                        jwtFromSDK: e
                    }), e;
                    let a = {
                            iat: Math.floor(new Date().getTime() / 1e3),
                            jti: (0, u.A)()
                        },
                        c = {
                            typ: "dpop+jwt",
                            alg: "ES256",
                            jwk: t
                        },
                        o = {
                            protected: (0, l.v9)(JSON.stringify(c)),
                            claims: (0, l.v9)(JSON.stringify(a))
                        },
                        g = p("".concat(o.protected, ".").concat(o.claims)),
                        s = (0, y.Ud)(new Uint8Array(await n.sign(y.ar, r, g)));
                    return "".concat(o.protected, ".").concat(o.claims, ".").concat(s)
                } catch (t) {
                    return e
                }
            }
        },
        9924: (e, t, r) => {
            r.d(t, {
                AY: () => s,
                DE: () => i,
                G1: () => c,
                K4: () => o,
                Ko: () => u,
                SL: () => p,
                Ud: () => d,
                Zc: () => h,
                ar: () => y,
                lr: () => I,
                xX: () => w,
                zk: () => f
            });
            var n = r(48311),
                a = r(74455);
            let i = "RELAYER_STORE_KEY_PRIVATE_KEY",
                c = "RELAYER_STORE_KEY_PUBLIC_JWK",
                o = "RELAYER_STORE_KEY_PUBLIC_UA_PUBLIC",
                u = "RELAYER_STORE_KEY_PUBLIC_UA_PRIVATE",
                l = "ECDSA",
                y = {
                    name: l,
                    hash: {
                        name: "SHA-256"
                    }
                },
                g = {
                    name: l,
                    namedCurve: "P-256"
                };

            function p() {
                n.p.removeItem(c), n.p.removeItem(i)
            }

            function s() {
                let e = !!window.crypto,
                    t = e && !!window.crypto.subtle;
                return e && t
            }
            async function f() {
                let {
                    subtle: e
                } = window.crypto, t = await e.generateKey(g, !1, ["sign", "verify"]), r = await e.exportKey("jwk", t.publicKey);
                await n.p.setItem(i, t.privateKey), await n.p.setItem(c, r)
            }

            function m(e) {
                return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+/g, "")
            }

            function d(e) {
                let t = "";
                return e.forEach(e => {
                    t += String.fromCharCode(e)
                }), m(t)
            }

            function h(e) {
                let t = (0, a.FI)(e),
                    r = t.length,
                    n = new Uint8Array(r);
                for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
                return n.buffer
            }
            async function w() {
                let {
                    subtle: e
                } = window.crypto, t = await e.generateKey(g, !1, ["sign", "verify"]);
                return await n.p.setItem(u, t.privateKey), await n.p.setItem(o, t.publicKey), t
            }

            function I(e) {
                return Object.hasOwn(e, "x") && Object.hasOwn(e, "y") && Object.hasOwn(e, "crv") && Object.hasOwn(e, "kty")
            }
        },
        48311: (e, t, r) => {
            let n;
            r.d(t, {
                p: () => y
            });
            var a = r(14247),
                i = r(69442),
                c = r(38949),
                o = r.n(c),
                u = r(52023);

            function l(e) {
                return async function() {
                    for (var t, r = arguments.length, c = Array(r), l = 0; l < r; l++) c[l] = arguments[l];
                    try {
                        if (!n) {
                            n = o().createInstance({
                                name: "magic_auth"
                            }), await n.defineDriver(u);
                            let e = [o().INDEXEDDB, o().LOCALSTORAGE, u._driver],
                                {
                                    sdkType: t
                                } = i.P.getState().decodedQueryParams;
                            t === a.Z.MagicFlutter && e.shift(), await n.setDriver(e), await n.ready(), await n.setItem("__client_storage_version__", 1)
                        }
                        return null != (t = await n[e].apply(n, c)) ? t : null
                    } catch (t) {
                        return logger.error("Failed to initialize data-api. Method: ".concat(e), {
                            error: {
                                name: t.name,
                                detail: t.stack
                            },
                            args: c
                        }), null
                    }
                }
            }
            let y = {
                getItem: l("getItem"),
                setItem: l("setItem"),
                removeItem: l("removeItem"),
                clear: l("clear"),
                length: l("length"),
                key: l("key"),
                keys: l("keys"),
                iterate: l("iterate")
            }
        },
        60129: (e, t, r) => {
            r.d(t, {
                qX: () => I,
                q9: () => f,
                YZ: () => m,
                $r: () => h,
                fd: () => _,
                BH: () => E,
                fq: () => w,
                cw: () => A
            });
            var n = r(42275),
                a = r(10388),
                i = r(9029),
                c = r(61067),
                o = r(69442),
                u = r(12844);
            let l = (e, t, r) => new Promise((n, a) => {
                    let i = (0, u.t)(),
                        c = () => {
                            t().then(e => {
                                n(e)
                            }).catch(e => {
                                a(e)
                            })
                        },
                        o = setTimeout(() => {
                            i.log("Request timed out ".concat(r, "ms, executing given falling back")), c()
                        }, r);
                    e().then(e => {
                        clearTimeout(o), n(e)
                    }).catch(e => {
                        i.log("Primary promise failed, executing given falling back", {
                            e
                        }), clearTimeout(o), c()
                    })
                }),
                y = (e, t) => {
                    let r = (0, u.t)(),
                        n = c.k.Magic.getHeadersFromParams(t);
                    if (!t.apiKey) throw r.error("Unable to retrieve client config from Next.js API route. API key is missing from the params!!", t), Error("API key is missing from the params");
                    return l(m(e, t.apiKey, n), f(n), 500)
                };
            var g = r(74455);
            let p = () => e => {
                    let {
                        queryKey: [, {
                            provider: t
                        }]
                    } = e;
                    return c.k.Magic.Get("".concat(i.yI.MagicClient.OAuthApp, "?provider_name=").concat(t))
                },
                s = () => e => {
                    let {
                        queryKey: [, {
                            clientId: t
                        }]
                    } = e;
                    return c.k.Magic.Get("".concat(i.yI.MagicClient.TelegramApp, "?client_id=").concat(t))
                },
                f = e => () => {
                    let t = i.yI.MagicClient.Config;
                    return c.k.Magic.Get(t, e)
                },
                m = (e, t, r) => () => c.k.Mandrake.Get("".concat(e).concat(i.yI.MandrakeAPI.MagicClientAPI, "/").concat((0, g.v9)(t), "/config"), r),
                d = (e, t) => r => {
                    let {
                        queryKey: [, {
                            magicApiKey: n
                        }]
                    } = r, a = null != t ? t : o.P.getState().decodedQueryParams;
                    return a.apiKey = n, y(e, a)
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
                w = (e, t) => (0, n.useQuery)({
                    queryKey: h.config(e),
                    queryFn: d(""),
                    gcTime: 18e5,
                    staleTime: 9e5,
                    refetchOnWindowFocus: !1,
                    retry: 2,
                    ...t
                }),
                I = e => (0, a.getQueryClient)().fetchQuery({
                    queryKey: h.config(e),
                    queryFn: d(""),
                    gcTime: 18e5,
                    staleTime: 9e5,
                    retry: 2
                }),
                A = (e, t) => (0, n.useQuery)({
                    queryKey: h.oauthApp(e),
                    queryFn: p(),
                    retry: 3,
                    ...t
                }),
                _ = e => (0, a.getQueryClient)().fetchQuery({
                    queryKey: h.oauthApp(e),
                    queryFn: p(),
                    retry: 3
                }),
                E = e => (0, a.getQueryClient)().fetchQuery({
                    queryKey: h.telegramApp(e),
                    queryFn: s(),
                    retry: 3
                })
        },
        74455: (e, t, r) => {
            function n(e) {
                return String.fromCharCode(parseInt(e.slice(1), 16))
            }

            function a(e) {
                return "%".concat("00".concat(e.charCodeAt(0).toString(16)).slice(-2))
            }

            function i(e) {
                return btoa(encodeURIComponent(e).replace(/%[0-9A-F]{2}/g, n))
            }

            function c(e) {
                try {
                    return decodeURIComponent(Array.from(atob(e), a).join(""))
                } catch (t) {
                    return atob(e)
                }
            }

            function o(e) {
                return c(e)
            }

            function u(e) {
                let t;
                return decodeURIComponent(e) !== e ? c(decodeURIComponent(e)) : c(((t = e.replace(/-/g, "+").replace(/_/g, "/")).length % 4 != 0 && (t += "=".repeat(4 - t.length % 4)), t))
            }

            function l(e) {
                return i(e)
            }

            function y(e) {
                return i(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }

            function g(e) {
                let t = e.split(".");
                if (3 !== t.length) throw Error("Cannot parse invalid jwt");
                let r = JSON.parse(u(t[0]));
                return {
                    header: r,
                    payload: JSON.parse(u(t[1])),
                    sig: t[2]
                }
            }

            function p() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return new Uint8Array(u(e).split("").map(e => e.charCodeAt(0)))
            }

            function s(e) {
                try {
                    return u(e), !0
                } catch (e) {
                    return !1
                }
            }
            r.d(t, {
                FI: () => u,
                PU: () => p,
                UY: () => s,
                WG: () => l,
                f1: () => g,
                v9: () => y,
                y4: () => o
            })
        }
    }
]);
//# sourceMappingURL=48315-e6c5f9a230bb02f2.js.map