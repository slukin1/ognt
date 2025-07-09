(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6197, 90318], {
        2334: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => n,
                b: () => i
            });
            var s = r(9029),
                a = r(61067);

            function n() {
                return a.k.Relayer.Get(s.yI.Session.Refresh)
            }

            function i(e) {
                let {
                    authUserId: t,
                    requestOriginMessage: r
                } = e;
                return a.k.Relayer.Post(s.yI.Session.Persist, {
                    "Content-Type": "application/json"
                }, {
                    auth_user_id: t,
                    request_origin_message: r
                })
            }
        },
        18990: (e, t, r) => {
            "use strict";
            r.d(t, {
                handler: () => n
            });
            var s = r(45467),
                a = r(63403);
            let n = async e => {
                let t = !1;
                try {
                    t = !!(await (0, a.E)()).authUserId
                } catch (e) {}(0, s.H)({
                    payload: e,
                    result: t
                })
            }
        },
        58201: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => a,
                j: () => s
            });
            let s = e => Array.from(new Set(e)),
                a = (e, t) => e.length === t.length && e.every((e, r) => e === t[r])
        },
        63403: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => d
            });
            var s = r(81553),
                a = r(84530),
                n = r(2334),
                i = r(73657),
                o = r(69442),
                u = r(10388),
                l = r(48715),
                c = r(91617);
            async function d() {
                var e, t;
                let {
                    magicApiKey: r,
                    authUserId: d,
                    sdkMetaData: h,
                    authUserSessionToken: y
                } = o.P.getState(), g = null != (e = null == h ? void 0 : h.webCryptoDpopJwt) ? e : "", p = null != (t = null == h ? void 0 : h.userSessionRefreshToken) ? t : "", m = (0, l.gC)(), f = (0, u.getQueryClient)();
                if (d && y) try {
                    if (f.getQueryData(i.Ov.info({
                            authUserId: d,
                            authUserSessionToken: y,
                            walletType: s.S.ETH
                        }))) return {
                        authUserId: d,
                        authUserSessionToken: y
                    };
                    let e = await (0, i.gs)({
                        authUserId: d,
                        authUserSessionToken: y,
                        walletType: s.S.ETH
                    });
                    return await (0, a.mh)({
                        authUserId: d,
                        authUserSessionToken: y,
                        email: e.email,
                        phoneNumber: e.phoneNumber
                    }), f.setQueriesData({
                        queryKey: i.Ov.info({
                            authUserId: d,
                            authUserSessionToken: y,
                            walletType: s.S.ETH
                        })
                    }, () => e), {
                        authUserId: d,
                        authUserSessionToken: y
                    }
                } catch (e) {}
                let {
                    parsedAuthUserID: w,
                    parsedAuthUserSessionToken: I
                } = await (0, c.x)(r);
                if (w && I) try {
                    let e = await (0, i.gs)({
                        authUserId: w,
                        authUserSessionToken: I,
                        walletType: s.S.ETH
                    });
                    return await (0, a.mh)({
                        authUserId: w,
                        authUserSessionToken: I,
                        email: e.email,
                        phoneNumber: e.phoneNumber
                    }), f.setQueriesData({
                        queryKey: i.Ov.info({
                            authUserId: w,
                            authUserSessionToken: I,
                            walletType: s.S.ETH
                        })
                    }, () => e), {
                        authUserId: w,
                        authUserSessionToken: I
                    }
                } catch (e) {}
                if (p && g) try {
                    let e = await (0, i.gE)({
                            jwt: g,
                            userSessionRefreshToken: p
                        }),
                        {
                            authUserId: t,
                            authUserSessionToken: r
                        } = e;
                    return await (0, a.mh)(e), {
                        authUserId: t,
                        authUserSessionToken: r
                    }
                } catch (e) {} else if (m) try {
                    let e = await (0, n.E)(),
                        {
                            authUserId: t,
                            authUserSessionToken: r
                        } = e;
                    return await (0, a.mh)(e), {
                        authUserId: t,
                        authUserSessionToken: r
                    }
                } catch (e) {}
                throw await (0, a.vw)(), Error("Failed to hydrate session")
            }
        },
        63577: (e, t, r) => {
            "use strict";
            r.d(t, {
                Aq: () => w,
                Au: () => y,
                BD: () => p,
                Tz: () => f,
                c5: () => m,
                nQ: () => g
            });
            var s = r(32045),
                a = r.n(s),
                n = r(53730),
                i = r.n(n),
                o = r(21336),
                u = r.n(o),
                l = r(96523),
                c = r.n(l),
                d = r(17347),
                h = r.n(d);
            let y = !!window.crypto;

            function g(e) {
                let t = new Uint8Array(e);
                if (y) window.crypto.getRandomValues(t);
                else
                    for (let r = 0; r < e; r += 1) t[r] = Math.floor(Math.random() * Math.floor(255));
                let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
                return Array.from(t).map(e => r[e % r.length]).join("")
            }
            let p = {
                    digest: e => a().MD5(null != e ? e : "").toString()
                },
                m = {
                    encrypt(e, t) {
                        let r = i().encrypt(e, t || "").toString();
                        return t = null, r
                    },
                    decrypt(e, t) {
                        let r = i().decrypt(e, t || "").toString(h());
                        return t = null, r
                    }
                };

            function f() {
                let e = g(128),
                    t = g(128),
                    r = u()(t).toString(a().enc.Base64).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
                return {
                    codeVerifier: t,
                    challenge: r,
                    state: e
                }
            }

            function w(e, t) {
                let r = c().parse(t),
                    s = a().lib.WordArray.create(new Uint8Array(16));
                return i().decrypt(e, r, {
                    iv: s
                }).toString(h())
            }
        },
        73657: (e, t, r) => {
            "use strict";
            r.d(t, {
                gE: () => d,
                Hd: () => h,
                gs: () => g,
                wJ: () => y,
                Ov: () => c.O
            });
            var s = r(42275),
                a = r(9029),
                n = r(61067),
                i = r(15250);
            let o = () => async e => {
                let {
                    queryKey: [, t]
                } = e, r = {
                    Authorization: "Bearer ".concat(t.authUserSessionToken)
                };
                return (0, i.L)() ? function(e) {
                    var t;
                    let r = null == (t = e.login.identifiers[0]) ? void 0 : t.identifier;
                    return {
                        authUserId: e.authUserId,
                        authUserMfaActive: e.authUserMfaActive,
                        authUserWalletId: e.authUserWalletId,
                        utcTimestampMs: e.utcTimestampMs,
                        clientId: e.clientId,
                        publicAddress: e.publicAddress,
                        consent: e.consent,
                        usedChainIds: e.usedChainIds,
                        challengeMessage: e.challengeMessage,
                        login: {
                            type: e.login.type,
                            oauth2: e.login.oauth2,
                            webauthn: e.login.webauthn
                        },
                        recoveryFactors: [],
                        ...r ? {
                            email: r
                        } : {}
                    }
                }(await n.k.Magic.Get("".concat(a.yI.Universal.UserInfoRetrieve, "?auth_user_id=").concat(t.authUserId, "&wallet_type=").concat(t.walletType), r)) : n.k.Magic.Get("".concat(a.yI.User.GetUserInfo, "?auth_user_id=").concat(t.authUserId, "&wallet_type=").concat(t.walletType), r)
            };
            var u = r(10388),
                l = r(6491),
                c = r(94041);
            async function d(e) {
                let t = {
                        auth_user_refresh_token: e.userSessionRefreshToken
                    },
                    r = { ...(0, l.N8)(e.jwt)
                    };
                return n.k.Magic.Post(a.yI.User.GetUserSessionTokenFromRefreshToken, r, t)
            }
            let h = (e, t) => {
                let r = o();
                return (0, s.useQuery)({
                    queryKey: e,
                    queryFn: r,
                    staleTime: 3e5,
                    ...t
                })
            };

            function y() {
                return n.k.Toaster.Post(a.yI.User.Logout)
            }
            let g = (e, t) => {
                let r = (0, u.getQueryClient)(),
                    {
                        authUserId: s,
                        authUserSessionToken: a,
                        walletType: n
                    } = e,
                    i = o();
                return r.fetchQuery({
                    queryKey: c.O.info({
                        authUserId: s,
                        authUserSessionToken: a,
                        walletType: n
                    }),
                    queryFn: i,
                    staleTime: 3e5,
                    ...t
                })
            }
        },
        73936: () => {},
        84530: (e, t, r) => {
            "use strict";
            r.d(t, {
                mh: () => f,
                vw: () => p,
                Uf: () => w,
                Jh: () => m
            });
            var s = r(91617),
                a = r(13199),
                n = r(60129),
                i = r(2334),
                o = r(69442),
                u = r(10388),
                l = r(57296),
                c = r(29958),
                d = r(38425),
                h = r(48715),
                y = r(58201);
            let g = [
                [...n.$r.base, "config"],
                [...a.lF.base, "all-flags-server-state"],
                [...a.lF.base, "all-flags"]
            ];
            async function p() {
                let e = (0, u.getQueryClient)();
                ! function() {
                    var e, t;
                    if (!(0, d.f)()) return;
                    let {
                        decodedQueryParams: r
                    } = o.P.getState(), s = {
                        clientAppOrigin: r.domainOrigin,
                        msgType: "MAGIC_HANDLE_REQUEST-".concat(c.U.getEncodedQueryParams()),
                        payload: {
                            method: "clear_keys_and_cache",
                            params: [],
                            jsonrpc: "2.0",
                            id: 888
                        }
                    };
                    null == (t = document.getElementById(l.d)) || null == (e = t.contentWindow) || e.postMessage(s, "*")
                }();
                try {
                    await (0, s.m)()
                } catch (e) {
                    logger.error("Error persisting auth state", e)
                }
                o.P.setState({
                    authUserId: o.u.authUserId,
                    authUserSessionToken: o.u.authUserSessionToken,
                    fridgeAccessToken: o.u.fridgeAccessToken,
                    email: o.u.email,
                    phoneNumber: o.u.phoneNumber,
                    mfaEnrollSecret: o.u.mfaEnrollSecret,
                    mfaEnrollInfo: o.u.mfaEnrollInfo,
                    mfaRecoveryCodes: o.u.mfaRecoveryCodes,
                    oidcProviderId: o.u.oidcProviderId
                }), e.invalidateQueries({
                    predicate: e => !g.some(t => (0, y.B)(e.queryKey[0], t)),
                    refetchType: "none"
                })
            }

            function m() {
                let {
                    sdkMetaData: e,
                    fridgeAccessToken: t,
                    oidcProviderId: r
                } = (0, o.P)(e => e), a = (0, h.it)();
                return {
                    hydrateAndPersistAuthState: async n => {
                        let {
                            authUserId: u,
                            authUserSessionToken: l,
                            fridgeAccessToken: c,
                            oidcProviderId: d,
                            email: h,
                            phoneNumber: y,
                            refreshToken: g,
                            requestOriginMessage: p,
                            defaultPersistEnabled: m = !1,
                            persistToPhantom: f = !0
                        } = n, w = !g && a || m;
                        if (o.P.setState({
                                authUserId: u,
                                authUserSessionToken: l,
                                fridgeAccessToken: null != c ? c : t,
                                oidcProviderId: null != d ? d : r,
                                sdkMetaData: { ...e,
                                    userSessionRefreshToken: g
                                },
                                email: h,
                                phoneNumber: y
                            }), f && await (0, s.m)({
                                authUserId: u,
                                authUserSessionToken: l,
                                email: h,
                                phoneNumber: y
                            }), w && u && p) try {
                            await (0, i.b)({
                                authUserId: u,
                                requestOriginMessage: p
                            })
                        } catch (e) {
                            logger.error("Error persisting session ".concat(e))
                        }
                    },
                    setAndPersistEmail: async e => {
                        let {
                            email: t,
                            persistToPhantom: r = !0
                        } = e;
                        o.P.setState({
                            email: t
                        });
                        let {
                            authUserId: a,
                            authUserSessionToken: n,
                            phoneNumber: i
                        } = o.P.getState();
                        r && await (0, s.m)({
                            authUserId: a || "",
                            authUserSessionToken: n || "",
                            email: t,
                            phoneNumber: i || ""
                        })
                    }
                }
            }
            let f = async e => {
                    let {
                        authUserId: t,
                        authUserSessionToken: r,
                        fridgeAccessToken: a,
                        oidcProviderId: n,
                        email: u,
                        phoneNumber: l,
                        refreshToken: c,
                        requestOriginMessage: d
                    } = e, {
                        sdkMetaData: h,
                        fridgeAccessToken: y,
                        oidcProviderId: g
                    } = o.P.getState();
                    if (o.P.setState({
                            authUserId: t,
                            authUserSessionToken: r,
                            fridgeAccessToken: null != a ? a : y,
                            oidcProviderId: null != n ? n : g,
                            sdkMetaData: { ...h,
                                userSessionRefreshToken: c
                            },
                            email: u,
                            phoneNumber: l
                        }), await (0, s.m)({
                            authUserId: t,
                            authUserSessionToken: r,
                            email: u,
                            phoneNumber: l
                        }), t && d) try {
                        await (0, i.b)({
                            authUserId: t,
                            requestOriginMessage: d
                        })
                    } catch (e) {
                        logger.error("Error persisting session ".concat(e))
                    }
                },
                w = async e => {
                    let {
                        email: t,
                        persistToPhantom: r = !0
                    } = e;
                    o.P.setState({
                        email: t
                    });
                    let {
                        authUserId: a,
                        authUserSessionToken: n,
                        phoneNumber: i
                    } = o.P.getState();
                    r && await (0, s.m)({
                        authUserId: a || "",
                        authUserSessionToken: n || "",
                        email: t,
                        phoneNumber: i || ""
                    })
                }
        },
        91617: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => o,
                x: () => i
            });
            var s = r(48311),
                a = r(63577),
                n = r(69442);
            async function i(e) {
                let t = null,
                    r = null,
                    n = null,
                    i = null;
                try {
                    let o = await s.p.getItem("persist:auth:".concat(a.BD.digest(null != e ? e : "")));
                    if (o) {
                        let e = JSON.parse(o);
                        t = JSON.parse(null == e ? void 0 : e.ust), r = JSON.parse(null == e ? void 0 : e.userID), n = JSON.parse(null == e ? void 0 : e.userEmail), i = JSON.parse(null == e ? void 0 : e.userPhoneNumber)
                    }
                } catch (e) {}
                return {
                    parsedAuthUserID: r,
                    parsedAuthUserSessionToken: t,
                    parsedUserEmail: n,
                    parsedUserPhoneNumber: i
                }
            }
            async function o(e) {
                let {
                    magicApiKey: t
                } = n.P.getState();
                t || logger.warn("API key is not set when calling usePersistPhantomIndexedDB.");
                try {
                    if (void 0 === e) return void await s.p.setItem("persist:auth:".concat(a.BD.digest(null != t ? t : "")), '{"userID":"\\"\\"","userEmail":"\\"\\"","userPhoneNumber":"\\"\\"","ust":"\\"\\"","_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}');
                    let {
                        parsedUserEmail: r,
                        parsedUserPhoneNumber: n,
                        parsedAuthUserID: o,
                        parsedAuthUserSessionToken: u
                    } = await i(t), l = {
                        userID: e.authUserId,
                        authUserSessionToken: e.authUserSessionToken,
                        userEmail: "",
                        phoneNumber: ""
                    };
                    o === e.authUserId && u === e.authUserSessionToken ? (l.userEmail = e.email || r || "", l.phoneNumber = e.phoneNumber || n || "") : (l.userEmail = e.email || "", l.phoneNumber = e.phoneNumber || ""), await s.p.setItem("persist:auth:".concat(a.BD.digest(null != t ? t : "")), '{"userID":"\\"'.concat(l.userID, '\\"","userEmail":"\\"').concat(l.userEmail, '\\"","userPhoneNumber":"\\"').concat(l.phoneNumber, '\\"","ust":"\\"').concat(l.authUserSessionToken, '\\"","_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}'))
                } catch (e) {
                    logger.error("Error Persisting to IndexedDB", e)
                }
            }
        },
        94041: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => s
            });
            let s = {
                base: ["user"],
                info: e => [
                    [...s.base, "info"], e
                ]
            }
        }
    }
]);
//# sourceMappingURL=6197.4c23372fdba5dc69.js.map